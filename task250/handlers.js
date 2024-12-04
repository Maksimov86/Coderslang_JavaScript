import { updateGold, checkInitCompleted, updateProducerList } from "./functions.js";

export const handleKeyPress = (term, state) => {
    return (name, matches, data) => {
        const keyPressed = String.fromCharCode(data.code).toUpperCase();

        if (keyPressed === 'G') {
            state.gold += 1; 
            updateGold(term, state); 
        }

        if (!state.isInitCompleted) {
            const cheapestProducer = state.producers.reduce((cheapest, producer) => 
                producer.cost < cheapest.cost ? producer : cheapest, 
                state.producers[0]
            );

            if (state.gold >= cheapestProducer.cost) {
                checkInitCompleted(term, state);
                state.isProducerListUpdated = false; // Обновить флаг после инициализации
            }
        }

        if (!state.isProducerListUpdated) {
            updateProducerList(term, state);
        }

        const producersId = parseInt(keyPressed, 10);
        const producer = state.producers.find(p => p.id === producersId);

        if (producer) {
            if (state.gold >= producer.cost) {
                state.gold -= producer.cost;
                producer.cost *= producer.growthRate;
                producer.count += 1;

                // Увеличение производительности
                const additionalProduction = producer.baseProduction;
                producer.productionRate = producer.count * additionalProduction; // Обновляем индивидуальную производительность
                state.productionRate += additionalProduction; // Общая производительность игры

                // Сообщение о покупке
                term.moveTo(1, 4).green(`${producer.title} purchased!!`);
                term.eraseLineAfter();

                // Обновление строки производительности
                term.moveTo(25, 3);
                term.green(`${state.productionRate.toFixed(1)}   `);

                state.isProducerListUpdated = false;
                updateProducerList(term, state);
            } else {
                term.moveTo(1, 4).red(`Not enough gold to buy ${producer.title}!`);
                term.eraseLineAfter();
            }
        }
    };
};

export const handleStateChange = (term, state) => {
    return () => {
        updateGold(term, state);
    }
}
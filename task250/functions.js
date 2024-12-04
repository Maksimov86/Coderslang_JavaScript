export const init = (term) => {
    term.clear();
    term.hideCursor();
    term.grabInput();
    term.green("Welcome to the mining game! Press 'G' to start!");
}

export const updateGold = (term, state) => {
    state.gold += state.productionRate;
    term.moveTo(25, 2);
    term.eraseLineAfter();
    term.bold.yellow(`${state.gold.toFixed(1)}   `);
}

export const checkInitCompleted = (term, state) => {
    state.isInitCompleted = true;
    state.isProducerListUpdated = false; // Гарантируем обновление списка производителей

    term.moveTo(1, 1);
    term.eraseLine();
    term.green('You can purchase producers by clicking the number button (1, 2, 3, ...)');

    term.moveTo(1, 2).yellow(`GOLD:`);
    term.moveTo(1, 3).green(`PRODUCTION RATE:`);
};


export const updateProducerList = (term, state) => {
    term.moveTo(1, 5); // Начало вывода с пятой строки
    term.eraseDisplayBelow(); // Очистить предыдущий вывод

    let isOneZeroCountPrinted = false;

    state.producers.forEach(producer => {
        const { title, count, cost, productionRate } = producer;

        // Если производитель есть или один с count=0 еще не напечатан
        if (count > 0 || (!isOneZeroCountPrinted && count === 0)) {
            term(`${title}: ${count} | Production per second: ${(productionRate || 0).toFixed(1)} | Cost: ${cost.toFixed(1)}\n`);
            if (count === 0) isOneZeroCountPrinted = true;
        }
    });

    state.isProducerListUpdated = true; // Флаг обновления
};
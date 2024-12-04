export const formatTaskList = (tasks) => {
  let taskTitles = tasks.map(task => task.title);
  let readyTasksOrNot = [];

  for (let i = 0; i < taskTitles.length; i++) {
    if (tasks[i].status === 'DONE') {
      readyTasksOrNot.push('\u2705 ' + taskTitles[i]);
    } else {
      readyTasksOrNot.push('\u274c ' + taskTitles[i]);
    }
  }
  return readyTasksOrNot;
}
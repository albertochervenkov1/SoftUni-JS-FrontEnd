function manageSprintBoard(arr) {
    const n = parseInt(arr.shift());
    const tasks = {};
  
    for (let i = 0; i < n; i++) {
      const [assignee, taskId, title, status, estimatedPoints] = arr[i].split(':');
      if (!tasks[assignee]) tasks[assignee] = [];
      tasks[assignee].push({ id: taskId, title, status, points: parseInt(estimatedPoints) });
    }
  
    for (let i = n; i < arr.length; i++) {
      const [cmd, assignee, taskId, title, status, estimatedPoints] = arr[i].split(':');
      switch (cmd) {
        case 'Add New':
          if (!tasks[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
          } else {
            tasks[assignee].push({ id: taskId, title, status, points: parseInt(estimatedPoints) });
          }
          break;
        case 'Change Status':
          if (!tasks[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
          } else {
            const taskIndex = tasks[assignee].findIndex(task => task.id === taskId);
            if (taskIndex === -1) {
              console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
            } else {
              tasks[assignee][taskIndex].status = title;
            }
          }
          break;
        case 'Remove Task':
          if (!tasks[assignee]) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
          } else {
            const taskIndex = parseInt(taskId);
            if (taskIndex < 0 || taskIndex >= tasks[assignee].length) {
              console.log('Index is out of range!');
            } else {
              tasks[assignee].splice(taskIndex, 1);
            }
          }
          break;
        default:
          console.log(`Unknown command: ${cmd}`);
      }
    }
  
    let toDoPoints = 0;
    let inProgressPoints = 0;
    let codeReviewPoints = 0;
    let donePoints = 0;
  
    for (const assignee in tasks) {
      for (const task of tasks[assignee]) {
        switch (task.status) {
          case 'ToDo':
            toDoPoints += task.points;
            break;
          case 'In Progress':
            inProgressPoints += task.points;
            break;
          case 'Code Review':
            codeReviewPoints += task.points;
            break;
          case 'Done':
            donePoints += task.points;
            break;
          default:
            
        }
      }
    }
  
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);
  
    if (donePoints >= toDoPoints + inProgressPoints + codeReviewPoints) {
      console.log('Sprint was successful!');
    } else {
      console.log('Sprint was unsuccessful...');
    }
}

manageSprintBoard(
    [
        '5',
        'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
        'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
        'Peter:BOP-1211:POC:Code Review:5',
        'Georgi:BOP-1212:Investigation Task:Done:2',
        'Mariya:BOP-1213:New Account Page:In Progress:13',
        'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
        'Change Status:Peter:BOP-1290:ToDo',
        'Remove Task:Mariya:1',
        'Remove Task:Joro:1',
    ]
)
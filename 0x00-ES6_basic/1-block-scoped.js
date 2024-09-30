// 1-block-scoped.js

export default function taskBlock(trueOrFalse) {
  let task = false;  // Use let for block-scoping
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // These task and task2 are block-scoped
    let task2 = false;
  }

  return [task, task2];
}


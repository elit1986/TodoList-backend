import Task from '../models/task.model.js';

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.send(tasks);
};

export const addNewTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.send(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task)
    return res.status(404).send('The task with the given ID was not found.');
  res.send(task);
};

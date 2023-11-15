import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;

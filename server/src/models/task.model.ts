import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import { sequelize } from '.';

interface Task
  extends Model<InferAttributes<Task>, InferCreationAttributes<Task>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  content: string;
  status: string;
  userId: string;
}

export const Task = sequelize.define<Task>(
  'Task',
  {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Task === sequelize.models.Task); // true

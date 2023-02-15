import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '.';

export const Task = sequelize.define('User', {
  // Model attributes are defined here
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Task === sequelize.models.Task); // true
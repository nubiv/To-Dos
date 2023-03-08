import { DataTypes } from 'sequelize';
import { sequelize } from '.';

export const Usage = sequelize.define(
  'Usage',
  {
    // Model attributes are defined here
    translateTotalCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    addTaskTotalCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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

console.log(Usage === sequelize.models.Usage); // true

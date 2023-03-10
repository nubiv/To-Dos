import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model
} from 'sequelize';
import { sequelize } from '.';

interface Usage
  extends Model<InferAttributes<Usage>, InferCreationAttributes<Usage>> {
  // Some fields are optional when calling UserModel.create() or UserModel.build()
  id: CreationOptional<number>;
  translateTotalCount: CreationOptional<number>;
  addTaskTotalCount: CreationOptional<number>;
  userId: string;
}

export const Usage = sequelize.define<Usage>(
  'Usage',
  {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    translateTotalCount: {
      type: DataTypes.INTEGER.UNSIGNED,
      defaultValue: 0,
      allowNull: false
    },
    addTaskTotalCount: {
      type: DataTypes.INTEGER.UNSIGNED,
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

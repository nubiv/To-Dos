"use strict";
// module.exports = (sequelize, Sequelize) => {
//   const Task = sequelize.define('task', {
//     content: {
//       type: Sequelize.STRING
//     },
//     status: {
//       type: Sequelize.STRING
//     }
//   });
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
//   return Task;
// };
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('postgres:memory:');
exports.Task = sequelize.define('User', {
    // Model attributes are defined here
    content: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
// Other model options go here
});
// `sequelize.define` also returns the model
console.log(exports.Task === sequelize.models.Task); // true

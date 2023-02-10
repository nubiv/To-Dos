module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define('task', {
    content: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return Task;
};

import { describe, it, beforeEach } from 'mocha';
import chai, { expect } from 'chai';
import { createSandbox } from 'sinon';
import sinonChai from 'sinon-chai';
import rewire from 'rewire';
import { sequelize } from '../models';

chai.use(sinonChai);

const sandbox = createSandbox();

let taskController = rewire('../controllers/task.controller');

describe('Test Task controller', () => {
  let sampleTaskVal: any;

  beforeEach('beforeEach', () => {
    sampleTaskVal = {
      content: 'test',
      status: 'TO DO',
      userId: '123'
    };

    sandbox.stub(sequelize.models.Task, 'findOne').resolves(sampleTaskVal);
    sandbox.stub(sequelize.models.Task, 'findAll').resolves([sampleTaskVal]);
  });

  afterEach(() => {
    taskController = rewire('../controllers/task.controller');
    sandbox.restore();
  });

  describe('getAllTasks', () => {
    it('should return expected task list', async () => {
      const req: any = {
        params: {
          userId: '123'
        }
      };

      taskController
        .getAllTasks(req)
        .then((taskList: any) => {
          expect(taskList).to.equal([sampleTaskVal]);
        })
        .catch((err: any) => {
          throw new Error('Testing failed.');
        });
    });

    it('should return error when called without an userId', async () => {
      const req: any = {
        params: {}
      };

      taskController
        .getAllTasks(req)
        .then((taskList: any) => {
          throw new Error('Testing failed.');
        })
        .catch((err: any) => {
          expect(err).to.be.instanceOf(Error);
        });
    });
  });

  describe('createTask', () => {
    it('should return error when userId is missing', async () => {
      const req: any = {
        params: {},
        body: {
          ...sampleTaskVal,
          content: ''
        }
      };

      taskController
        .createTask(req)
        .then((task: any) => {
          throw new Error('Testing failed');
        })
        .catch((err: any) => {
          expect(err).to.be.instanceOf(Error);
        });
    });

    it('should send an error msg when content is missing', async () => {
      const req: any = {
        params: {},
        body: sampleTaskVal
      };

      taskController
        .createTask(req)
        .then((data: any) => {
          expect(data.message).to.equal('Content can not be empty.');
        })
        .catch((err: any) => {
          throw new Error('Testing failed');
        });
    });

    it('should return an expected task', async () => {
      const req: any = {
        params: {
          userId: '123'
        },
        body: sampleTaskVal
      };

      taskController
        .createTask(req)
        .then((task: any) => {
          expect(task).to.be.instanceOf(sampleTaskVal);
        })
        .catch((err: any) => {
          throw new Error('Testing failed');
        });
    });
  });

  describe('deleteTask', () => {
    it('should send an error msg when taskId is missing', async () => {
      const req: any = {
        params: {},
        body: sampleTaskVal
      };

      taskController
        .deleteTask(req)
        .then((data: any) => {
          expect(data.message).to.equal('Task not existed.');
        })
        .catch((err: any) => {
          throw new Error('Testing failed');
        });
    });

    it('should return an expected msg', async () => {
      const req: any = {
        params: {
          userId: '123',
          taskId: '123'
        },
        body: sampleTaskVal
      };

      taskController
        .deleteTask(req)
        .then((data: any) => {
          expect(data.message).to.equal('Task deleted.');
        })
        .catch((err: any) => {
          throw new Error('Testing failed');
        });
    });
  });
});

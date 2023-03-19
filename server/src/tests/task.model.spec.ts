import { describe, it, before, beforeEach, after } from 'mocha';
import { expect } from 'chai';
import { Task } from '../models/task.model';
import { ValidationError } from 'sequelize';

describe('Testing Task model', () => {
  let sampleTaskVal: any;

  beforeEach(() => {
    sampleTaskVal = {
      content: 'test',
      status: 'TO DO',
      userId: '123'
    };
  });

  it('it should throw an error due to missing fields', async () => {
    const task = Task.build();

    try {
      await task.validate();
    } catch (err: any) {
      expect(err).to.be.instanceOf(ValidationError);
      expect(err.errors).to.include(err.errors[0]);
    }
  });

  it('it should create the instance successfully with correct parameters', async () => {
    const task = Task.build(sampleTaskVal);

    try {
      await task.validate();
    } catch (err: any) {
      throw new Error('Testing failed.');
    }
  });
});

import { describe, it, before, beforeEach, after } from 'mocha';
import { expect } from 'chai';
import { getAllTasks } from '../controllers/task.controller';

describe('Testing Task model', () => {
  let sampleTaskVal;

  beforeEach(() => {
    sampleTaskVal = {
      content: 'test'
    };
  });
});

import { describe, it, beforeEach } from 'mocha';
import chai, { expect } from 'chai';
import { createSandbox } from 'sinon';
import sinonChai from 'sinon-chai';
import rewire from 'rewire';
import { sequelize } from '../models';
import supertest from 'supertest';

// let server = rewire('../index');
// const sandbox = createSandbox();

// describe('Tesing routes', () => {
//   afterEach(() => {
//     server = rewire('../index');
//     sandbox.restore();
//   });

//   describe('Testing task routes', () => {
//     let userId: any;
//     let sampleTaskVal: any;

//     beforeEach(() => {
//       userId = '123';
//       sampleTaskVal = {
//         content: 'test',
//         status: 'TO DO',
//         userId: '123'
//       };
//     });

//     it('GET /api/:userId/tasks should successfully return task list', (done) => {
//       supertest(server)
//         .get(`/api/${userId}/tasks`)
//         .expect(200)
//         .end((err, res) => {});
//     });

//     it('POST /api/:userId/tasks should successfully create a new task', (done) => {
//       supertest(server)
//         .post(`/api/${userId}/tasks`)
//         .send(sampleTaskVal)
//         .expect(200)
//         .end((err, res) => {});
//     });
//   });
// });

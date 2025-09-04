const request = require('supertest');
const app = require('../src/index'); 

describe('Todo List API', () => {
  it('deve listar as tarefas (GET /tasks)', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve criar uma nova tarefa (POST /tasks)', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({ title: 'Estudar Jest' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Estudar Jest');
    expect(res.body.done).toBe(false);
  });

  it('deve atualizar uma tarefa (PUT /tasks/:id)', async () => {
    // cria uma tarefa primeiro
    const task = await request(app)
      .post('/tasks')
      .send({ title: 'Atualizar tarefa' });

    const res = await request(app)
      .put(`/tasks/${task.body.id}`)
      .send({ done: true });

    expect(res.statusCode).toBe(200);
    expect(res.body.done).toBe(true);
  });

  it('deve excluir uma tarefa (DELETE /tasks/:id)', async () => {
    // cria uma tarefa para excluir
    const task = await request(app)
      .post('/tasks')
      .send({ title: 'Excluir tarefa' });

    const res = await request(app).delete(`/tasks/${task.body.id}`);
    expect(res.statusCode).toBe(204);
  });

  it('deve retornar erro 404 ao atualizar tarefa inexistente', async () => {
    const res = await request(app)
      .put('/tasks/9999')
      .send({ done: true });

    expect(res.statusCode).toBe(404);
  });
});

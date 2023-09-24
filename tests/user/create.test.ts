import { testServer } from '../jest.setup';


describe('Criar', () => {
  it('', async () => {
    const res1 = await testServer.post('/users').send({
      name: 'slasdfa',
      email: 'mmm.masaomukai@gmail.com',
      password: '12345678',
    });

    expect(res1.statusCode).toEqual(201);
    expect(typeof res1.body).toEqual('number');
  });
});

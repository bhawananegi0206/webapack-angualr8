import { MessageModel } from './message';
describe('Message', () => {
  it('create an instance', () => {
    const messagemodel = new MessageModel(1,"test",20,"ddd",40000);
    expect(messagemodel).toBeTruthy();
  });
});
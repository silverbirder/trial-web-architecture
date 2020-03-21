import createApp from './app';

export default ctx => {
  return new Promise((resolve, reject) => {
    const { app } = createApp();
    resolve(app);
  });
}

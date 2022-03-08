import koaRouter from 'koa-router';

const router = koaRouter();

router.get('/', async (ctx) => {
  ctx.body = 'koa2 string';
});

router.get('/json', async (ctx) => {
  ctx.body = {
    title: 'koa2 json',
  };
});

router.get('/render', async (ctx) => {
  ctx.render = {
    title: 'koa2 json',
  };
});

export default router;

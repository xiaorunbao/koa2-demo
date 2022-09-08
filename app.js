import Koa from 'koa';
import bodyparser from 'koa-bodyparser';
import json from 'koa-json';
import onerror from 'koa-onerror';
import KoaStatic from 'koa-static';
import path from 'path';
import index from './src/routes/index';
import logger from './src/util/logs';

const app = new Koa();

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
// app.use(logger());

app.use(KoaStatic(`${path.resolve()}/public`));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
  logger.error({
    err,
    method: `${ctx.method}`,
    path: `${ctx.path}`,
    params: ctx.params,
    query: ctx.query,
    body: ctx.request.body,
  });
});

export default app;

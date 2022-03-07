import koaRouter from "koa-router";

const router = koaRouter();

router.get("/", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});

router.get("/render", async (ctx, next) => {
  ctx.render = {
    title: "koa2 json",
  };
});

export default router;

const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.type = "html";
  ctx.body = "<h1>Index sayfasına hoşgeldiniz</h1>";
});

router.get("/hakkimda", (ctx) => {
  ctx.type = "html";
  ctx.body = "<h1>Hakkımda sayfasına hoşgeldiniz</h1>";
});

router.get("/iletisim", (ctx) => {
  ctx.type = "html";
  ctx.body = "<h1>İletişim sayfasına hoşgeldiniz</h1>";
});

app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h1>404 sayfa bulunamadı.</h1>";
  }
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı.`);
});

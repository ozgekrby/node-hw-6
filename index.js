const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.type = "html";
  ctx.body = "<h2>Index sayfasına hoşgeldiniz</h2>";
});

router.get("/hakkimda", (ctx) => {
  ctx.type = "html";
  ctx.body = "<h2>Hakkımda sayfasına hoşgeldiniz</h2>";
});

router.get("/iletisim", (ctx) => {
  ctx.type = "html";
  ctx.body = "<h2>İletişim sayfasına hoşgeldiniz</h2>";
});

app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.status = 404;
    ctx.type = "html";
    ctx.body = "<h2>404 sayfa bulunamadı.</h2>";
  }
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı.`);
});

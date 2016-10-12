/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

const koa = require('koa');
const router = require('koa-router')();
const conf = require('./conf');

const app = koa();
const TAEGET = conf.TARGET || '/';

try {
  require(`./${TAEGET}`)(router);
} catch (e) {
  return;
}

app.use(router.routes());
app.listen(8081);
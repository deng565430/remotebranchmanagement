/*
	子路由
*/
const router = require('koa-router')();
const index = require('../controllers/index');

module.exports = router
  .get('/',index.index())
  .get('getBranchInfo', index.getBranchInfo())
  .get('createBranch', index.createBranch())
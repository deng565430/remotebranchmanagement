const GitOnperation = require('../gitshell/gitOperations');
const indexController = {
  index () {
    return async (ctx, next) => {
      const title = '大拇指点赞';
      await ctx.render('index', {
        title
      })
    }
  },
  getBranchInfo () {
    return async (ctx, next) => {
      const gitOnperation = new GitOnperation(ctx);
      ctx.body = await gitOnperation.getBranchInfo();
    }
  },
  createBranch() {
    return async (ctx, next) => {
      const gitOnperation = new GitOnperation(ctx);
      console.log(ctx.query);
      ctx.body = gitOnperation.createBranch();
    }
  }
}

module.exports = indexController;
const shell = require('shelljs');
const rpA = require('request-promise');

const successMessage = {
  success: true,
  message: "成功！"
};
const failMessage = {
  success: false,
  message: "失败！"
};

class GitOnperation {
  constructor(ctx) {
    this.ctx = ctx;
  }
  getBranchInfo() {
    let barnchList = shell.exec("git branch -a");
    barnchList = barnchList['stdout'].split('\n  ');
    var aasitem = [];
    barnchList.forEach(function (element, index, array) {
      if (element.indexOf('remotes/origin/') === 0 && element.indexOf('HEAD') !== 15) {

        aasitem.push(element.slice(15).trim());
      }
    })
    return aasitem
  }
  createBranch() {
    const name = this.ctx.query.name
    shell.exec("git branch " + name);
    shell.exec("git checkout " + name).code;
    shell.exec("git push origin " + name).code;
    successMessage.name = name;
    return successMessage;
  }
}

module.exports = GitOnperation;

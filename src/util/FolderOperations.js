let spawn = require('cross-spawn-promise')
let shell = require('shelljs')
/**
 * @description 根据传入的参数执行命令
 * @param {string} cwd 执行路径
 * @param {string} args 执行的命令
 * @param {string} args 命令参数
 * @param {object} options 其他参数
 */


module.exports = {
  runCommand: function (cwd, cmd, agrs, options) {
    const args = [agrs, cwd]
    debugger;
    return spawn(cmd, args, options = {
        encoding: 'utf-8'
      })
      .then((stdout) => {
        debugger;
        return stdout
      })
      .catch((error) => {
        debugger;
        return error

      })
  },
  testGit: function(){
    let res = shell.cd('/Users/xiaoshuai/personal/me-jser.github.io')
    shell.config.execPath = '/usr/local/bin/node'
      
    let r1 = shell.exec('git status','/Users/xiaoshuai/personal/me-jser.github.io')
    r1.stdout.on('data', function(data) {
      debugger
    });
    debugger
  }
}

// const command = 'ls'
// const args = ['-al', '/etc']
// const options = {}
// spawn(command, args, options)
//   .then((stdout) => {
//     console.info('Success!')
//     console.info('stdout:', stdout.toString())
//   })
//   .catch((error) => {
//     console.error('Failed!')
//     console.error('exit status:', error.exitStatus)
//     console.error('stderr:', error.stderr.toString())
//   })
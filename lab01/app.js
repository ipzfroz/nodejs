const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const userActions = require('./user')

yargs(hideBin(process.argv))
  .command('add [title] [level]', 'add something', (yargs) => {
    return yargs
      .positional('title', {
        describe: 'Title',
        type: 'string',
        default: 'empty'
      })
      .positional('level', {
        describe: 'Level',
        type: 'string',
        default: 'empty'
      })
  }, (argv) => {
    userActions.add(argv.title, argv.level);
  })

  .command('remove [title]', 'remove something', (yargs) => {
    return yargs
      .positional('title', {
        describe: 'Title',
        type: 'string',
        default: 'empty'
      })
  }, (argv) => {
    userActions.remove(argv.title);
  })

  .command('list', 'show something', (yargs) => {
    return yargs
  }, (argv) => {
    console.log(`List: `);
    userActions.list();
  })

  .command('read [title]', 'read something', (yargs) => {
    return yargs
      .positional('title', {
        describe: 'Title',
        type: 'string',
        default: 'empty'
      })
  }, (argv) => {
    userActions.read(argv.title);
  })
  .parse()
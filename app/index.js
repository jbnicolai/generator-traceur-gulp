var yo = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = yo.generators.Base.extend({
  /**
   * Overriden Yeoman Generator constructor
   */
  constructor: function() {
    yo.generators.Base.apply(this, arguments);

    this.argument('appname', { type: String, optional: true, defaults: this._.camelize(this.appname) });

    // custom code here
    this.log(yosay('Welcome to EFVincent\'s ' + chalk.green('Traceur') +
      ' client side project generator.' +
      ' Using this you\'ll create a static web' +
      ' site that builds using ' + chalk.cyan('Gulp') +
      ' and compiles and uses ' + 
      chalk.cyan('Traceur') + ' with ' + chalk.yellow('ES6 modules') + '!'));
  },

  prompting: function() {
    var done = this.async();
    this.prompt({
      type : 'input',
      name : 'name',
      message: 'Your project name',
      default: this.appname   //defaults to your current folder name
    }, function(answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  },

  writing: {
    projectFiles: function() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { name: this.appname });
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js'));
      this.fs.copy(
        this.templatePath('_copyTask.js'),
        this.destinationPath('copyTask.js'));
    },

    app: function() {
      this.fs.copyTpl(
        this.templatePath('app/_index.html'),
        this.destinationPath('app/index.html'),
        { name: this.appname });
      this.fs.copy(
        this.templatePath('app/_main.js'),
        this.destinationPath('app/main.js'));
      this.fs.copy(
        this.templatePath('app/_externalModule.js'),
        this.destinationPath('app/externalModule.js'));
    }
  }
});

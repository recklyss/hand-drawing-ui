import Generator from 'yeoman-generator';
import pkg from 'chalk';
import yosay from 'yosay';

const { red, blue } = pkg;
const validateName = (value) => {
  if (value.trim() === '') {
    return red('Can’t be an empty string.');
  }

  if (!/^[A-Z][A-Za-z]*$/.test(value)) {
    return red('Must be in PascalCase.');
  }

  return true;
};

export default class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Starting ${blue("hand-drawing-ui'")} ${red('component')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'Component name (in PascalCase)',
        validate: validateName
      },
      {
        type: 'input',
        name: 'ComponentDescription',
        message: 'Describe component'
      }
    ];

    this.answers = await this.prompt(prompts);
  }

  writing() {
    const { ComponentName, ComponentDescription = 'Update description here!!!' } = this.answers;

    const path = 'src/components';

    this.fs.copyTpl(
      this.templatePath('component.txt'),
      this.destinationPath(`${path}/${ComponentName}/${ComponentName}.tsx`),
      {
        ComponentName,
        ComponentDescription
      }
    );

    this.fs.copyTpl(
      this.templatePath('index.txt'),
      this.destinationPath(`${path}/${ComponentName}/index.tsx`),
      {
        ComponentName,
      }
    );

    this.fs.copyTpl(
      this.templatePath('component.stories.txt'),
      this.destinationPath(`${path}/${ComponentName}/${ComponentName}.stories.tsx`),
      {
        ComponentName
      }
    );
  }
}

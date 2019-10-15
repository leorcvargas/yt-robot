import { Command } from '@oclif/command';
import * as inquirer from 'inquirer';
export default class Create extends Command {
  public static description = 'Create a new video on Youtube';

  private readonly content = {
    searchTerm: '',
    prefix: '',
  };

  public async run() {
    this.content.searchTerm = await this.askAndReturnSearchTerm();
    this.content.prefix = await this.askAndReturnPrefix();
    this.log(JSON.stringify(this.content));
  }

  private async askAndReturnSearchTerm() {
    const { searchTerm } = await inquirer
      .prompt<{ searchTerm: string }>([
        {
          type: 'input',
          name: 'searchTerm',
          message: 'Type a Wikipedia search term',
        },
      ]);

    return searchTerm;
  }

  private async askAndReturnPrefix() {
    const { prefix } = await inquirer
      .prompt<{ prefix: string }>([
        {
          type: 'list',
          name: 'prefix',
          message: 'Choose a prefix',
          choices: [
            { name: 'Who is', type: 'choice' },
            { name: 'What is', type: 'choice' },
            { name: 'The history of', type: 'choice' },
          ],
        },
      ]);

    return prefix;
  }
}

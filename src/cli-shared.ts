import figlet from 'figlet';
import pkg from '../package.json';
import { SSVScannerCommand } from './commands/SSVScannerCommand';

const FigletMessage = async (message: string) => {
  return new Promise(resolve => {
    figlet(message, (error: any, output?: string) => {
      if (error) {
        return resolve('');
      }
      resolve(output);
    });
  })
}

export default async function main(): Promise<any> {
  const messageText = `SSV Scanner v${pkg.version}`;
  const message = await FigletMessage(messageText);
  if (message) {
    console.log(' ----------------------------------------------------------------------');
    console.log(`${message || messageText}`);
    console.log(' ----------------------------------------------------------------------');
    for (const str of String(pkg.description).match(/.{1,67}/g) || []) {
      console.log(` ${str}`);
    }
    console.log(' ----------------------------------------------------------------------\n');
  }

  try {
    const command = new SSVScannerCommand();
    console.debug(await command.execute());
  } catch (e: any) {
    console.error('\x1b[31m', e.message);
  }
}

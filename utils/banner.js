import chalk from 'chalk';

const banner = () => {
  const text = `
       X   1   N   O   D   E
    
                   NAORIS AUTO - BOT                
     📢  Telegram Channel: https://t.me/SempakBrother`;
  
  const separator = "═".repeat(60);
  return `${chalk.cyan(text)}\n${chalk.white(separator)}`;
};

export default banner;
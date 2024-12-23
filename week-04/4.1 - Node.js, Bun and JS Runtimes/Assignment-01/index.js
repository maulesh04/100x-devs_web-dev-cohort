// Assignment-01 - Create a cli
// Create a command line interface that lets the user specify a file path and 
// the nodejs process counts the number of words inside it.

// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file

const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program
  .command('wordcount')
  .description('No of words in a file')
  .alias('wc')
  .argument('<file>', 'file to read')
  .action(function (file){
    fs.readFile(file, function(err, data){
      if(err)
        console.log(err);
      else{
        const characters = data.toString().split('').length;
        console.log(`${file} has ${characters} characters`);
      }
    })
  })

program.parse();
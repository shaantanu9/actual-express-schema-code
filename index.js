#!/usr/bin/env node

var shell = require('shelljs');
const path = require('path');
const fs = require('fs');

const { Command } = require('commander');
const program = new Command();

const welcome = require('./commands/welcome');

// welcome();

program.command('create')

        .action(function() {
            if(this.args.length!==0) {
                
                const createFolderSchema = require('./commands/create.command');
                createFolderSchema(this.args)
                // console.log(createFolderSchema)
                
                }
            else{console.log("Please Provide the Project Name")}
        });


// program.command('add')
//         // .argument('<script>')
//         // .option('-p, --p <string>', 'port number', 'asdf')
//         // .option('-p, --port <number>', 'port number', 80)
//         // .option('-p, --t <number>', 'port number','default')
//             // .discrpi
//         .action(function() {

//             const fileExist = require('./commands/fileExist');

//             let controllerExist =  fileExist('controllers').fileExistBoolean
//             let modelExist =  fileExist('models').fileExistBoolean

//             const addMnCCommand = require('./commands/addMnC.command');
//             // console.log(this.args)

//             // add(this.args)
//             if(this.args.length!==0) {addMnCCommand(this.args)}
//             else{console.log("Please Provide the Model Name to clone")}
//         });


program.command('delete')
        .action(function() {
            shell.exec(`rm -rf ${this.args}`)
        })

program.parse();

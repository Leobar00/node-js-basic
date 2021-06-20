const fs = require('fs');
const chalk = require('chalk');     // modulo per configurare i colori delle testo del terminale
const yargs = require('yargs')      // modulo per configurare e creare comandi da linea di terminale passandolgi più parametri

yargs.version('1.1.0')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('adding a new note!')
    }
})

// Remove command 

yargs.command({
    command: 'remove',
    describe: 'Remove new note',
    handler: function(){
        console.log('Remove a note')
    }
})

// Read command 

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('List of all notes')
    }
})

// Read command

yargs.command({
    command: 'read',
    describe: ' read all notes',
    handler: function(){
        console.log('read all notes')
    }
})


console.log(yargs.argv);
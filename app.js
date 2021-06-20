const fs = require('fs');
const chalk = require('chalk');     // modulo per configurare i colori delle testo del terminale
const yargs = require('yargs');      // modulo per configurare e creare comandi da linea di terminale passandolgi più parametri


yargs.version('1.1.0')

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {      // per aggiungere parametri a quello che inseriamo nel terminale
        title: {
            describe: 'Note title', 
            demandOption: true,      // imposta che il cmapo title sia richiesto 
            type: 'string'      // il tipo che deve avere il campo che inserimao nel terminale
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title) // gli passiamo il valore del titolo recuperato da argv 
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
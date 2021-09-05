const validatePassword = require('./passwordvalidation'); //import the function

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function passwordInterface() {
    rl.question('Enter password (or press q to quit): ', answer => {
        if (answer == 'q') {
            rl.close;
            return;
        }
        else if (validatePassword(answer))
            console.log(answer + ' is valid');
        else
            console.log(answer + ' is invalid');
        passwordInterface();
    })
}

passwordInterface();
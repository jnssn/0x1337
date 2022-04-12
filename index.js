const minimist = require('minimist')
const Web3 = require('web3')
// Set valid prefix values
const pattern = /^([a-fA-F0-9]*)$/

// Get the command-line arguments
const args = minimist(process.argv.slice(2))

// Set prefix parameter
let prefix = args['prefix'] ? args['prefix'].toString() : '';

// Validate the prefix can be generated
if (!pattern.test(prefix)) {
    console.log('Error: Invalid prefix')
    return false
}

// Execute the search
createAccount(prefix)

// Recursive function to endlessly search for a match
async function createAccount(prefix) {
    const web3 = new Web3()
    // Create an account
    let account = await web3.eth.accounts.create()

    // Log the status
    console.log(`Checking if '${account.address.substr(2,prefix.toString().length)}' == '${prefix}'`)

    // Check the prefix
    if (account.address.substr(2,prefix.toString().length).toString() != prefix.toString()) {
        // If it doesn't match, create a new address
        createAccount(prefix)
    }
    else {
        console.log('\n-----\nMatch found!\nStore your private key in a secure location.\n\nTHIS INFORMATION WILL NOT BE DISPLAYED AGAIN\n', { 
            'address' : account.address,
            'privateKey': account.privateKey
        })
        return account
    }
}

// Ensure you include the web3 library in your project

// Connect to Ethereum node (Replace with your own node URL)
const nodeUrl = 'https://sepolia.infura.io/v3/209800a15ce24cf6a44e251ea915b9b4';
const web3 = new Web3(new Web3.providers.HttpProvider(nodeUrl));

// Placeholder for the user's wallet address
let walletAddress = '';

// Function to get the wallet balance
function getBalance() {
    web3.eth.getBalance(walletAddress, (error, balance) => {
        if (!error) {
            document.getElementById('balance').innerText = web3.utils.fromWei(balance, 'ether');
        } else {
            console.error(error);
        }
    });
}

// Function to send a transaction
function sendTransaction() {
    const to = document.getElementById('to').value;
    const amount = document.getElementById('amount').value;

    web3.eth.sendTransaction({
        from: walletAddress,
        to: to,
        value: web3.utils.toWei(amount, 'ether')
    }, (error, transactionHash) => {
        if (!error) {
            console.log('Transaction sent. Transaction hash:', transactionHash);
        } else {
            console.error(error);
        }
    });
}
const { generateWallet, checkBalance, signTransaction } = require('./wallet');

const generateWalletButton = document.getElementById('generateWallet');
const walletInfoDiv = document.getElementById('walletInfo');
const checkBalanceButton = document.getElementById('checkBalance');
const balanceInfoDiv = document.getElementById('balanceInfo');
const signTransactionButton = document.getElementById('signTransaction');
const transactionInfoDiv = document.getElementById('transactionInfo');

generateWalletButton.addEventListener('click', () => {
    const wallet = generateWallet();
    walletInfoDiv.innerHTML = `
        <p>Address: ${wallet.address}</p>
        <p>Private Key: ${wallet.privateKey}</p>
    `;
});

checkBalanceButton.addEventListener('click', async () => {
    const address = prompt('Enter an Ethereum address to check its balance:');
    if (address) {
        const balance = await checkBalance(address);
        balanceInfoDiv.textContent = `Balance: ${balance} ETH`;
    }
});

signTransactionButton.addEventListener('click', async () => {
    const privateKey = prompt('Enter your private key:');
    if (privateKey) {
        const transactionData = {
            to: '0xRecipientAddress',
            value: '1000000000000000', // 0.001 ETH in wei
            gas: '21000',
            gasPrice: '20000000000', // 20 Gwei
        };

        const signedTx = await signTransaction(privateKey, transactionData);
        if (signedTx) {
            transactionInfoDiv.textContent = `Signed Transaction: ${signedTx.rawTransaction}`;
        } else {
            transactionInfoDiv.textContent = 'Transaction signing failed.';
        }
    }
});
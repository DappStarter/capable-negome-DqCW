require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note ridge provide hunt hen equal gasp'; 
let testAccounts = [
"0x5b6809fb539ffccb576338847707838344b12f89f962c0ef499b107f4e9b900a",
"0x0c10e354c64069fb0350e08e4a02316195b847a05168605e93b528a9c5c82a33",
"0x7f269345a764d309e75be8458c81690575c751d62a7d995d79d428e8c51166b9",
"0xb8e49ffcc373c7e2e6cffba304ba90e8d07db131dd42e0896b2b5dca1044dfea",
"0x5c36c1df6046112cfca5132df84b4b1859eb11797de40e6dae61864c5288a1f5",
"0x1781cbe4e9796ebb7d08bd10421c239e13c236739d7a1c1856dd632b4fb1fe69",
"0x010aa83bcf13e35da135f4cdb1777e9b7305a266f001131fea4fd091151166f0",
"0x7fc0433052e12b17c62e9ae04870e63caba07355356ada5b69336bae47325c4f",
"0x36385ed950400b46683d55d52f174d8459c3b5db8eea881f92c7784f97182ef7",
"0x418e06ad2a6e4b8d0f331b4562f1a8908851af6e6754f495699583f096ce9923"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


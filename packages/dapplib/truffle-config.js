require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth misery unlock hunt private surge tomorrow'; 
let testAccounts = [
"0x669733b42caf619332e49f5382b6f805c7ec815c3e8cb3fcc7e26633561de486",
"0x3af1ef54581616ce58d00f440ddfb3d59a07f24b828da5dbe700f1106db20425",
"0x1bdeede25616584b3998bcd74d06bff86ab0c710356dc1caa98fd1da0598408d",
"0x3a8b5802deac4e0c21987437eb4abd0af4877376f04cf7673532025cf3b01b0b",
"0xee84ae62efc73d447a60815970879b327bdfbf4b3555f2ae0993d716c77ea588",
"0x848eaaf6324fb5695f99a598ae3d777b89db0aabb1a29d7f36f9e69f575fad51",
"0x39aa9038dccfb5f1f408788b8a16502ef5f22f72eb576419fc6b2da3fd1c1864",
"0x1deaf8009bcf3405affdb0e1025b15df4e68933d935942336cd880a0f118b3b7",
"0x0f9854fcad28f68690c9f52520edf54bb059dd1b3d54955e451076ca8d847058",
"0x171c9f39c49bff852ba877c82fb063a9ac8e1b9221991dc17487a28e637ec77a"
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
            version: '^0.5.11'
        }
    }
};

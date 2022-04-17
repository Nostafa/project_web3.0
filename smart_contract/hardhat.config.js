require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-mainnet.alchemyapi.io/v2/MUdhR_T0Alu6F33gRB6XnC86y2dS8mJJ',
            accounts: [
                'e2e7acf2654cd47ba09b5cb44d23e2cdb73af658d10de5697cbb25fbc60a2d31',
            ],
        },
    },
};
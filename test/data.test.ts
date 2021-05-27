import {ChainId, WETH, Token, Fetcher} from '../src'
const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0xc01D6bD26E9872FaBFb701619E518D201c993D4B') // DAI
console.log(token)

// TODO: replace the provider in these tests
describe.skip('data', () => {
    it('Token', async () => {
        console.log("token start")
        const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0xc01D6bD26E9872FaBFb701619E518D201c993D4B') // DAI
        console.log(token)
        expect(token.decimals).toEqual(18)
    })

    it('Token:CACHE', async () => {
        const token = await Fetcher.fetchTokenData(ChainId.MAINNET, '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A') // DGD
        expect(token.decimals).toEqual(9)
    })

    it('Pair', async () => {
        const token = new Token(ChainId.BSCTESTNET, '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735', 18) // DAI
        const pair = await Fetcher.fetchPairData(WETH[ChainId.BSCTESTNET], token)
        expect(pair.liquidityToken.address).toEqual('0x8B22F85d0c844Cf793690F6D9DFE9F11Ddb35449')
    })
})

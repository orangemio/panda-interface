import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSCT = 97,
  BSC = 56,
  HUOBI = 256
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

// Factory
//HUOBI TESNET
export const FACTORY_ADDRESS = '0x78Bbd3C092529D5044d453f7d4c6757B92ef0b3b'
// BSC NAINNET
// export const FACTORY_ADDRESS = '0xDe82ce2A2f30a68b533Ff99CA8f80f4210408179'
//BSC TESTNET
// export const FACTORY_ADDRESS = '0x8547f8e1Ca41ACc26D148231B33661194D6674c0'
// NEED CHANGE
// export const FACTORY_ADDRESS = '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'

//HUOBI TESNET
export const INIT_CODE_HASH = '0x2ee25974c82b48b4d8101eef8f272b9fc151e7cad3299f26c61a83761c067adc'
//BSC MAINNET
// export const INIT_CODE_HASH = '0xee853c75eb429bec7019a5af630353814cad65870aa4046dcf2a283cfa806c3a'
// BSC TESTNET
// export const INIT_CODE_HASH = '0x43c67510314e67e35af08e8eaf2e7b95602356512a5b7ddfd1f8436c610dcf3c'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

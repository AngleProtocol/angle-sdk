import { ChainId } from '../types';

export const layerZeroChainIds: { [chain: number | string]: number } = {
  [ChainId.POLYGON]: 109,
  [ChainId.FANTOM]: 112,
  [ChainId.ARBITRUM]: 110,
  [ChainId.AVALANCHE]: 106,
  [ChainId.BSC]: 102,
  [ChainId.MAINNET]: 101,
  [ChainId.OPTIMISM]: 111,
  [ChainId.CELO]: 125,
  [ChainId.GNOSIS]: 145,
  [ChainId.POLYGONZKEVM]: 158,
  arbitrum: 110,
  'arbitrum-rinkeby': 10010,
  avalanche: 106,
  bsc: 102,
  'bsc-testnet': 10002,
  celo: 125,
  ethereum: 101,
  fantom: 112,
  'fantom-testnet': 10012,
  fuji: 10006,
  gnosis: 145,
  'gnosis-chain': 145,
  mumbai: 10009,
  optimism: 111,
  'optimism-kovan': 10011,
  polygon: 109,
  rinkeby: 10001,
};

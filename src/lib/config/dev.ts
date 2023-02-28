import { Config, Hardhat } from '@usedapp/core';
import { deployment } from '../../contracts';

const development: Config = {
  readOnlyChainId: Hardhat.chainId,
  readOnlyUrls: {
    [Hardhat.chainId]: 'http://localhost:8545',
  },
  multicallAddresses: {
    [Hardhat.chainId]: deployment('Multicall2', Hardhat.chainId)?.address,
  },
  multicallVersion: 2,
};

export default development;

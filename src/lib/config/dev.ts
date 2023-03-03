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

// TODO: check to see if usedapp provides something where we can hook into the config const
// can we make the multicall a facet? so that we deploy the entire system instead of just one multicall address?
// - is there a way to override the usedapp multicall deployment call? -- FIND THIS CODE
// but can we do this all from the CLI to reduce bundle size?
// can we access window object / wallet provider from CLI?

// export abi and bytecode from @dapplet/hardhat, so we can use deployContract(contractAbi: ContractAbi, signer: ethers.providers.JsonRpcSigner)

//

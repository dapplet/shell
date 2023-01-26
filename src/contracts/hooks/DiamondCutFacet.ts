import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { DiamondCutFacet, DiamondCutFacet__factory } from '../types';
const DiamondCutFacetInterface = new utils.Interface(
  DiamondCutFacet__factory.abi
);

export const useDiamondCutFacet_diamondCut = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<DiamondCutFacet, 'diamondCut'>(
    contractAddress &&
      (new Contract(
        contractAddress,
        DiamondCutFacetInterface
      ) as DiamondCutFacet),
    'diamondCut',
    options
  );
};

export const useDiamondCutFacet = {
  diamondCut: useDiamondCutFacet_diamondCut,
};

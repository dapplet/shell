import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { IClientRegistry, IClientRegistry__factory } from '../types';
const IClientRegistryInterface = new utils.Interface(
  IClientRegistry__factory.abi
);

export const useIClientRegistry_available = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IClientRegistry, 'available'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IClientRegistry, 'available'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          IClientRegistryInterface
        ) as IClientRegistry,
        method: 'available',
        args,
      },
    queryParams
  );
};

export const useIClientRegistry_createClient = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IClientRegistry, 'createClient'>(
    contractAddress &&
      (new Contract(
        contractAddress,
        IClientRegistryInterface
      ) as IClientRegistry),
    'createClient',
    options
  );
};

export const useIClientRegistry = {
  available: useIClientRegistry_available,
  createClient: useIClientRegistry_createClient,
};

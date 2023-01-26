import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { ClientRegistry, ClientRegistry__factory } from '../types';
const ClientRegistryInterface = new utils.Interface(
  ClientRegistry__factory.abi
);

export const useClientRegistry_available = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ClientRegistry, 'available'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ClientRegistry, 'available'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ClientRegistryInterface
        ) as ClientRegistry,
        method: 'available',
        args,
      },
    queryParams
  );
};

export const useClientRegistry_createClient = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<ClientRegistry, 'createClient'>(
    contractAddress &&
      (new Contract(
        contractAddress,
        ClientRegistryInterface
      ) as ClientRegistry),
    'createClient',
    options
  );
};

export const useClientRegistry_rootNode = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ClientRegistry, 'rootNode'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ClientRegistry, 'rootNode'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ClientRegistryInterface
        ) as ClientRegistry,
        method: 'rootNode',
        args,
      },
    queryParams
  );
};

export const useClientRegistry = {
  available: useClientRegistry_available,
  createClient: useClientRegistry_createClient,
  rootNode: useClientRegistry_rootNode,
};

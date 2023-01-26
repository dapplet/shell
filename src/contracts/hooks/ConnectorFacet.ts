import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { ConnectorFacet, ConnectorFacet__factory } from '../types';
const ConnectorFacetInterface = new utils.Interface(
  ConnectorFacet__factory.abi
);

export const useConnectorFacet_createPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<ConnectorFacet, 'createPkg'>(
    contractAddress &&
      (new Contract(
        contractAddress,
        ConnectorFacetInterface
      ) as ConnectorFacet),
    'createPkg',
    options
  );
};

export const useConnectorFacet_installPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<ConnectorFacet, 'installPkg'>(
    contractAddress &&
      (new Contract(
        contractAddress,
        ConnectorFacetInterface
      ) as ConnectorFacet),
    'installPkg',
    options
  );
};

export const useConnectorFacet_model = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ConnectorFacet, 'model'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ConnectorFacet, 'model'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ConnectorFacetInterface
        ) as ConnectorFacet,
        method: 'model',
        args,
      },
    queryParams
  );
};

export const useConnectorFacet_uninstallPkg = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<ConnectorFacet, 'uninstallPkg'>(
    contractAddress &&
      (new Contract(
        contractAddress,
        ConnectorFacetInterface
      ) as ConnectorFacet),
    'uninstallPkg',
    options
  );
};

export const useConnectorFacet = {
  createPkg: useConnectorFacet_createPkg,
  installPkg: useConnectorFacet_installPkg,
  model: useConnectorFacet_model,
  uninstallPkg: useConnectorFacet_uninstallPkg,
};

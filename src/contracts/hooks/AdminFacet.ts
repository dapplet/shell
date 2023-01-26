import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { AdminFacet, AdminFacet__factory } from '../types';
const AdminFacetInterface = new utils.Interface(AdminFacet__factory.abi);

export const useAdminFacet_getClientUpgrade = (
  contractAddress: Falsy | string,
  args: Falsy | Params<AdminFacet, 'getClientUpgrade'>,
  queryParams: QueryParams = {}
) => {
  return useCall<AdminFacet, 'getClientUpgrade'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          AdminFacetInterface
        ) as AdminFacet,
        method: 'getClientUpgrade',
        args,
      },
    queryParams
  );
};

export const useAdminFacet_setClientUpgrade = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<AdminFacet, 'setClientUpgrade'>(
    contractAddress &&
      (new Contract(contractAddress, AdminFacetInterface) as AdminFacet),
    'setClientUpgrade',
    options
  );
};

export const useAdminFacet = {
  getClientUpgrade: useAdminFacet_getClientUpgrade,
  setClientUpgrade: useAdminFacet_setClientUpgrade,
};

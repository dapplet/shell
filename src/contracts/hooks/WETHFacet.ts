import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { WETHFacet, WETHFacet__factory } from '../types';
const WETHFacetInterface = new utils.Interface(WETHFacet__factory.abi);

export const useWETHFacet_allowance = (
  contractAddress: Falsy | string,
  args: Falsy | Params<WETHFacet, 'allowance'>,
  queryParams: QueryParams = {}
) => {
  return useCall<WETHFacet, 'allowance'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          WETHFacetInterface
        ) as WETHFacet,
        method: 'allowance',
        args,
      },
    queryParams
  );
};

export const useWETHFacet_approve = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<WETHFacet, 'approve'>(
    contractAddress &&
      (new Contract(contractAddress, WETHFacetInterface) as WETHFacet),
    'approve',
    options
  );
};

export const useWETHFacet_balanceOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<WETHFacet, 'balanceOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<WETHFacet, 'balanceOf'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          WETHFacetInterface
        ) as WETHFacet,
        method: 'balanceOf',
        args,
      },
    queryParams
  );
};

export const useWETHFacet_decimals = (
  contractAddress: Falsy | string,
  args: Falsy | Params<WETHFacet, 'decimals'>,
  queryParams: QueryParams = {}
) => {
  return useCall<WETHFacet, 'decimals'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          WETHFacetInterface
        ) as WETHFacet,
        method: 'decimals',
        args,
      },
    queryParams
  );
};

export const useWETHFacet_deposit = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<WETHFacet, 'deposit'>(
    contractAddress &&
      (new Contract(contractAddress, WETHFacetInterface) as WETHFacet),
    'deposit',
    options
  );
};

export const useWETHFacet_name = (
  contractAddress: Falsy | string,
  args: Falsy | Params<WETHFacet, 'name'>,
  queryParams: QueryParams = {}
) => {
  return useCall<WETHFacet, 'name'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          WETHFacetInterface
        ) as WETHFacet,
        method: 'name',
        args,
      },
    queryParams
  );
};

export const useWETHFacet_symbol = (
  contractAddress: Falsy | string,
  args: Falsy | Params<WETHFacet, 'symbol'>,
  queryParams: QueryParams = {}
) => {
  return useCall<WETHFacet, 'symbol'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          WETHFacetInterface
        ) as WETHFacet,
        method: 'symbol',
        args,
      },
    queryParams
  );
};

export const useWETHFacet_totalSupply = (
  contractAddress: Falsy | string,
  args: Falsy | Params<WETHFacet, 'totalSupply'>,
  queryParams: QueryParams = {}
) => {
  return useCall<WETHFacet, 'totalSupply'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          WETHFacetInterface
        ) as WETHFacet,
        method: 'totalSupply',
        args,
      },
    queryParams
  );
};

export const useWETHFacet_transfer = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<WETHFacet, 'transfer'>(
    contractAddress &&
      (new Contract(contractAddress, WETHFacetInterface) as WETHFacet),
    'transfer',
    options
  );
};

export const useWETHFacet_transferFrom = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<WETHFacet, 'transferFrom'>(
    contractAddress &&
      (new Contract(contractAddress, WETHFacetInterface) as WETHFacet),
    'transferFrom',
    options
  );
};

export const useWETHFacet_withdraw = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<WETHFacet, 'withdraw'>(
    contractAddress &&
      (new Contract(contractAddress, WETHFacetInterface) as WETHFacet),
    'withdraw',
    options
  );
};

export const useWETHFacet = {
  allowance: useWETHFacet_allowance,
  approve: useWETHFacet_approve,
  balanceOf: useWETHFacet_balanceOf,
  decimals: useWETHFacet_decimals,
  deposit: useWETHFacet_deposit,
  name: useWETHFacet_name,
  symbol: useWETHFacet_symbol,
  totalSupply: useWETHFacet_totalSupply,
  transfer: useWETHFacet_transfer,
  transferFrom: useWETHFacet_transferFrom,
  withdraw: useWETHFacet_withdraw,
};

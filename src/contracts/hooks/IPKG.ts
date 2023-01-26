import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { IPKG, IPKG__factory } from '../types';
const IPKGInterface = new utils.Interface(IPKG__factory.abi);

export const useIPKG_allowance = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'allowance'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'allowance'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'allowance',
        args,
      },
    queryParams
  );
};

export const useIPKG_approve = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'approve'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'approve',
    options
  );
};

export const useIPKG_asset = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'asset'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'asset'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'asset',
        args,
      },
    queryParams
  );
};

export const useIPKG_balanceOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'balanceOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'balanceOf'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'balanceOf',
        args,
      },
    queryParams
  );
};

export const useIPKG_convertToAssets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'convertToAssets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'convertToAssets'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'convertToAssets',
        args,
      },
    queryParams
  );
};

export const useIPKG_convertToShares = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'convertToShares'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'convertToShares'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'convertToShares',
        args,
      },
    queryParams
  );
};

export const useIPKG_decimals = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'decimals'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'decimals'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'decimals',
        args,
      },
    queryParams
  );
};

export const useIPKG_deposit = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'deposit'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'deposit',
    options
  );
};

export const useIPKG_get = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'get'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'get'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'get',
        args,
      },
    queryParams
  );
};

export const useIPKG_maxDeposit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'maxDeposit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'maxDeposit'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'maxDeposit',
        args,
      },
    queryParams
  );
};

export const useIPKG_maxMint = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'maxMint'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'maxMint'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'maxMint',
        args,
      },
    queryParams
  );
};

export const useIPKG_maxRedeem = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'maxRedeem'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'maxRedeem'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'maxRedeem',
        args,
      },
    queryParams
  );
};

export const useIPKG_maxWithdraw = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'maxWithdraw'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'maxWithdraw'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'maxWithdraw',
        args,
      },
    queryParams
  );
};

export const useIPKG_mint = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'mint'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'mint',
    options
  );
};

export const useIPKG_name = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'name'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'name'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'name',
        args,
      },
    queryParams
  );
};

export const useIPKG_previewDeposit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'previewDeposit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'previewDeposit'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'previewDeposit',
        args,
      },
    queryParams
  );
};

export const useIPKG_previewMint = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'previewMint'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'previewMint'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'previewMint',
        args,
      },
    queryParams
  );
};

export const useIPKG_previewRedeem = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'previewRedeem'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'previewRedeem'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'previewRedeem',
        args,
      },
    queryParams
  );
};

export const useIPKG_previewWithdraw = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'previewWithdraw'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'previewWithdraw'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'previewWithdraw',
        args,
      },
    queryParams
  );
};

export const useIPKG_redeem = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'redeem'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'redeem',
    options
  );
};

export const useIPKG_set = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'set'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'set',
    options
  );
};

export const useIPKG_symbol = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'symbol'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'symbol'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'symbol',
        args,
      },
    queryParams
  );
};

export const useIPKG_totalAssets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'totalAssets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'totalAssets'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'totalAssets',
        args,
      },
    queryParams
  );
};

export const useIPKG_totalSupply = (
  contractAddress: Falsy | string,
  args: Falsy | Params<IPKG, 'totalSupply'>,
  queryParams: QueryParams = {}
) => {
  return useCall<IPKG, 'totalSupply'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, IPKGInterface) as IPKG,
        method: 'totalSupply',
        args,
      },
    queryParams
  );
};

export const useIPKG_transfer = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'transfer'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'transfer',
    options
  );
};

export const useIPKG_transferFrom = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'transferFrom'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'transferFrom',
    options
  );
};

export const useIPKG_withdraw = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IPKG, 'withdraw'>(
    contractAddress && (new Contract(contractAddress, IPKGInterface) as IPKG),
    'withdraw',
    options
  );
};

export const useIPKG = {
  allowance: useIPKG_allowance,
  approve: useIPKG_approve,
  asset: useIPKG_asset,
  balanceOf: useIPKG_balanceOf,
  convertToAssets: useIPKG_convertToAssets,
  convertToShares: useIPKG_convertToShares,
  decimals: useIPKG_decimals,
  deposit: useIPKG_deposit,
  get: useIPKG_get,
  maxDeposit: useIPKG_maxDeposit,
  maxMint: useIPKG_maxMint,
  maxRedeem: useIPKG_maxRedeem,
  maxWithdraw: useIPKG_maxWithdraw,
  mint: useIPKG_mint,
  name: useIPKG_name,
  previewDeposit: useIPKG_previewDeposit,
  previewMint: useIPKG_previewMint,
  previewRedeem: useIPKG_previewRedeem,
  previewWithdraw: useIPKG_previewWithdraw,
  redeem: useIPKG_redeem,
  set: useIPKG_set,
  symbol: useIPKG_symbol,
  totalAssets: useIPKG_totalAssets,
  totalSupply: useIPKG_totalSupply,
  transfer: useIPKG_transfer,
  transferFrom: useIPKG_transferFrom,
  withdraw: useIPKG_withdraw,
};

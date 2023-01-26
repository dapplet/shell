import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { PKG, PKG__factory } from '../types';
const PKGInterface = new utils.Interface(PKG__factory.abi);

export const usePKG_allowance = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'allowance'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'allowance'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'allowance',
        args,
      },
    queryParams
  );
};

export const usePKG_approve = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'approve'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'approve',
    options
  );
};

export const usePKG_asset = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'asset'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'asset'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'asset',
        args,
      },
    queryParams
  );
};

export const usePKG_balanceOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'balanceOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'balanceOf'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'balanceOf',
        args,
      },
    queryParams
  );
};

export const usePKG_convertToAssets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'convertToAssets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'convertToAssets'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'convertToAssets',
        args,
      },
    queryParams
  );
};

export const usePKG_convertToShares = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'convertToShares'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'convertToShares'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'convertToShares',
        args,
      },
    queryParams
  );
};

export const usePKG_decimals = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'decimals'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'decimals'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'decimals',
        args,
      },
    queryParams
  );
};

export const usePKG_deposit = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'deposit'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'deposit',
    options
  );
};

export const usePKG_get = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'get'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'get'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'get',
        args,
      },
    queryParams
  );
};

export const usePKG_maxDeposit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxDeposit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxDeposit'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxDeposit',
        args,
      },
    queryParams
  );
};

export const usePKG_maxMint = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxMint'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxMint'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxMint',
        args,
      },
    queryParams
  );
};

export const usePKG_maxRedeem = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxRedeem'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxRedeem'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxRedeem',
        args,
      },
    queryParams
  );
};

export const usePKG_maxWithdraw = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'maxWithdraw'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'maxWithdraw'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'maxWithdraw',
        args,
      },
    queryParams
  );
};

export const usePKG_mint = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'mint'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'mint',
    options
  );
};

export const usePKG_name = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'name'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'name'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'name',
        args,
      },
    queryParams
  );
};

export const usePKG_pkg = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'pkg'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'pkg'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'pkg',
        args,
      },
    queryParams
  );
};

export const usePKG_previewDeposit = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewDeposit'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewDeposit'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewDeposit',
        args,
      },
    queryParams
  );
};

export const usePKG_previewMint = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewMint'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewMint'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewMint',
        args,
      },
    queryParams
  );
};

export const usePKG_previewRedeem = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewRedeem'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewRedeem'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewRedeem',
        args,
      },
    queryParams
  );
};

export const usePKG_previewWithdraw = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'previewWithdraw'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'previewWithdraw'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'previewWithdraw',
        args,
      },
    queryParams
  );
};

export const usePKG_redeem = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'redeem'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'redeem',
    options
  );
};

export const usePKG_set = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'set'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'set',
    options
  );
};

export const usePKG_symbol = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'symbol'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'symbol'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'symbol',
        args,
      },
    queryParams
  );
};

export const usePKG_totalAssets = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'totalAssets'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'totalAssets'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'totalAssets',
        args,
      },
    queryParams
  );
};

export const usePKG_totalSupply = (
  contractAddress: Falsy | string,
  args: Falsy | Params<PKG, 'totalSupply'>,
  queryParams: QueryParams = {}
) => {
  return useCall<PKG, 'totalSupply'>(
    contractAddress &&
      args && {
        contract: new Contract(contractAddress, PKGInterface) as PKG,
        method: 'totalSupply',
        args,
      },
    queryParams
  );
};

export const usePKG_transfer = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'transfer'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'transfer',
    options
  );
};

export const usePKG_transferFrom = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'transferFrom'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'transferFrom',
    options
  );
};

export const usePKG_withdraw = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<PKG, 'withdraw'>(
    contractAddress && (new Contract(contractAddress, PKGInterface) as PKG),
    'withdraw',
    options
  );
};

export const usePKG = {
  allowance: usePKG_allowance,
  approve: usePKG_approve,
  asset: usePKG_asset,
  balanceOf: usePKG_balanceOf,
  convertToAssets: usePKG_convertToAssets,
  convertToShares: usePKG_convertToShares,
  decimals: usePKG_decimals,
  deposit: usePKG_deposit,
  get: usePKG_get,
  maxDeposit: usePKG_maxDeposit,
  maxMint: usePKG_maxMint,
  maxRedeem: usePKG_maxRedeem,
  maxWithdraw: usePKG_maxWithdraw,
  mint: usePKG_mint,
  name: usePKG_name,
  pkg: usePKG_pkg,
  previewDeposit: usePKG_previewDeposit,
  previewMint: usePKG_previewMint,
  previewRedeem: usePKG_previewRedeem,
  previewWithdraw: usePKG_previewWithdraw,
  redeem: usePKG_redeem,
  set: usePKG_set,
  symbol: usePKG_symbol,
  totalAssets: usePKG_totalAssets,
  totalSupply: usePKG_totalSupply,
  transfer: usePKG_transfer,
  transferFrom: usePKG_transferFrom,
  withdraw: usePKG_withdraw,
};

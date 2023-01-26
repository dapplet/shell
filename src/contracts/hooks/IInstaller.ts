import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { IInstaller, IInstaller__factory } from '../types';
const IInstallerInterface = new utils.Interface(IInstaller__factory.abi);

export const useIInstaller_create = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'create'>(
    contractAddress &&
      (new Contract(contractAddress, IInstallerInterface) as IInstaller),
    'create',
    options
  );
};

export const useIInstaller_install = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'install'>(
    contractAddress &&
      (new Contract(contractAddress, IInstallerInterface) as IInstaller),
    'install',
    options
  );
};

export const useIInstaller_uninstall = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<IInstaller, 'uninstall'>(
    contractAddress &&
      (new Contract(contractAddress, IInstallerInterface) as IInstaller),
    'uninstall',
    options
  );
};

export const useIInstaller = {
  create: useIInstaller_create,
  install: useIInstaller_install,
  uninstall: useIInstaller_uninstall,
};

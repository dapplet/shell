import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { Installer, Installer__factory } from '../types';
const InstallerInterface = new utils.Interface(Installer__factory.abi);

export const useInstaller_create = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'create'>(
    contractAddress &&
      (new Contract(contractAddress, InstallerInterface) as Installer),
    'create',
    options
  );
};

export const useInstaller_install = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'install'>(
    contractAddress &&
      (new Contract(contractAddress, InstallerInterface) as Installer),
    'install',
    options
  );
};

export const useInstaller_uninstall = (
  contractAddress: Falsy | string,
  options?: TransactionOptions
) => {
  return useContractFunction<Installer, 'uninstall'>(
    contractAddress &&
      (new Contract(contractAddress, InstallerInterface) as Installer),
    'uninstall',
    options
  );
};

export const useInstaller = {
  create: useInstaller_create,
  install: useInstaller_install,
  uninstall: useInstaller_uninstall,
};

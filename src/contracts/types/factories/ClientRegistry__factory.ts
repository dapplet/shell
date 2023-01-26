/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  ClientRegistry,
  ClientRegistryInterface,
} from '../ClientRegistry';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'ensAddr',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_rootNode',
        type: 'bytes32',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'ERC20Base__ApproveFromZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__ApproveToZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__BurnExceedsBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__BurnFromZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__InsufficientAllowance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__MintToZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__TransferExceedsBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__TransferFromZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC20Base__TransferToZeroAddress',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'available',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'createClient',
    outputs: [
      {
        internalType: 'address',
        name: 'client',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rootNode',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export class ClientRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ClientRegistryInterface {
    return new utils.Interface(_abi) as ClientRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClientRegistry {
    return new Contract(address, _abi, signerOrProvider) as ClientRegistry;
  }
}

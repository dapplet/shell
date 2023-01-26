/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace IDiamondWritableInternal {
  export type FacetCutStruct = {
    target: PromiseOrValue<string>;
    action: PromiseOrValue<BigNumberish>;
    selectors: PromiseOrValue<BytesLike>[];
  };

  export type FacetCutStructOutput = [string, number, string[]] & {
    target: string;
    action: number;
    selectors: string[];
  };
}

export interface DiamondCutFacetInterface extends utils.Interface {
  functions: {
    'diamondCut((address,uint8,bytes4[])[],address,bytes)': FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: 'diamondCut'): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'diamondCut',
    values: [
      IDiamondWritableInternal.FacetCutStruct[],
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: 'diamondCut', data: BytesLike): Result;

  events: {
    'DiamondCut(tuple[],address,bytes)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'DiamondCut'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface DiamondCutEventObject {
  facetCuts: IDiamondWritableInternal.FacetCutStructOutput[];
  target: string;
  data: string;
}
export type DiamondCutEvent = TypedEvent<
  [IDiamondWritableInternal.FacetCutStructOutput[], string, string],
  DiamondCutEventObject
>;

export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface DiamondCutFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DiamondCutFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  diamondCut(
    facetCuts: IDiamondWritableInternal.FacetCutStruct[],
    target: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'DiamondCut(tuple[],address,bytes)'(
      facetCuts?: null,
      target?: null,
      data?: null
    ): DiamondCutEventFilter;
    DiamondCut(
      facetCuts?: null,
      target?: null,
      data?: null
    ): DiamondCutEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    diamondCut(
      facetCuts: IDiamondWritableInternal.FacetCutStruct[],
      target: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

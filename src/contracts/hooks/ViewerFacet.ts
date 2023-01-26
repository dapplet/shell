import {
  Falsy,
  Params,
  QueryParams,
  TransactionOptions,
  useCall,
  useContractFunction,
} from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { ViewerFacet, ViewerFacet__factory } from '../types';
const ViewerFacetInterface = new utils.Interface(ViewerFacet__factory.abi);

export const useViewerFacet_addr = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'addr'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'addr'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'addr',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_contentHash = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'contentHash'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'contentHash'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'contentHash',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_metadataOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'metadataOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'metadataOf'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'metadataOf',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_name = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'name'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'name'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'name',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_node = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'node'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'node'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'node',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_ownedBy = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'ownedBy'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'ownedBy'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'ownedBy',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_ownerOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'ownerOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'ownerOf'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'ownerOf',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_receivedStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'receivedStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'receivedStakeOf'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'receivedStakeOf',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_sentStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'sentStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'sentStakeOf'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'sentStakeOf',
        args,
      },
    queryParams
  );
};

export const useViewerFacet_text = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'text'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'text'>(
    contractAddress &&
      args && {
        contract: new Contract(
          contractAddress,
          ViewerFacetInterface
        ) as ViewerFacet,
        method: 'text',
        args,
      },
    queryParams
  );
};

export const useViewerFacet = {
  addr: useViewerFacet_addr,
  contentHash: useViewerFacet_contentHash,
  metadataOf: useViewerFacet_metadataOf,
  name: useViewerFacet_name,
  node: useViewerFacet_node,
  ownedBy: useViewerFacet_ownedBy,
  ownerOf: useViewerFacet_ownerOf,
  receivedStakeOf: useViewerFacet_receivedStakeOf,
  sentStakeOf: useViewerFacet_sentStakeOf,
  text: useViewerFacet_text,
};

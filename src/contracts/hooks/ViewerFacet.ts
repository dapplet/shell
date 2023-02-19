
import { Falsy, Params, QueryParams, TransactionOptions, useCall, useContractFunction } from '@usedapp/core'
import { Contract, utils } from 'ethers'

import { ViewerFacet, ViewerFacet__factory } from '../types'
const ViewerFacetInterface = new utils.Interface(ViewerFacet__factory.abi)


export const useViewerFacet_isPkg = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'isPkg'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'isPkg'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'isPkg',
        args
      }, queryParams
  )
}


export const useViewerFacet_metadataOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'metadataOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'metadataOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'metadataOf',
        args
      }, queryParams
  )
}


export const useViewerFacet_nameOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'nameOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'nameOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'nameOf',
        args
      }, queryParams
  )
}


export const useViewerFacet_ownedBy = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'ownedBy'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'ownedBy'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'ownedBy',
        args
      }, queryParams
  )
}


export const useViewerFacet_ownerOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'ownerOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'ownerOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'ownerOf',
        args
      }, queryParams
  )
}


export const useViewerFacet_receivedStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'receivedStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'receivedStakeOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'receivedStakeOf',
        args
      }, queryParams
  )
}


export const useViewerFacet_sentStakeOf = (
  contractAddress: Falsy | string,
  args: Falsy | Params<ViewerFacet, 'sentStakeOf'>,
  queryParams: QueryParams = {}
) => {
  return useCall<ViewerFacet, 'sentStakeOf'>(
    contractAddress
      && args
      && {
        contract: new Contract(contractAddress, ViewerFacetInterface) as ViewerFacet,
        method: 'sentStakeOf',
        args
      }, queryParams
  )
}


export const useViewerFacet = {
  isPkg: useViewerFacet_isPkg,
  metadataOf: useViewerFacet_metadataOf,
  nameOf: useViewerFacet_nameOf,
  ownedBy: useViewerFacet_ownedBy,
  ownerOf: useViewerFacet_ownerOf,
  receivedStakeOf: useViewerFacet_receivedStakeOf,
  sentStakeOf: useViewerFacet_sentStakeOf
}

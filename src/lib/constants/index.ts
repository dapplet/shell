import { urlParams } from '../types';

export const gateways: urlParams[] = [
  {
    prefix: 'https://ipfs.io/ipfs/',
    suffix: '',
  },
];

export const config =
  process.env.NODE_ENV === 'production'
    ? require('./production')
    : require('./development');

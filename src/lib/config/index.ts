import dev from './dev';
import prod from './prod';

export const config = process.env.NODE_ENV === 'production' ? prod : dev;

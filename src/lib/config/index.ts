export const config =
  process.env.NODE_ENV === 'production'
    ? require('./prod').default
    : require('./dev').default;

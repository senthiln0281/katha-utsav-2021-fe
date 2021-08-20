module.exports = (env) => {
    if (env.NODE_ENV === 'production') {
      process.env.NODE_ENV = env.NODE_ENV;
      return require('./webpack.production');
    }
    console.log('------- ',env);
    return require('./webpack.local');
  };
  
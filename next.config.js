// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'ned', 'idn'],
    defaultLocale: 'en',
  },
  webpack: (config, { isServer }) => {
    // If the project needs to handle videos on the server-side, add loaders here for server-side handling

    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      });
    }

    return config;
  },

};

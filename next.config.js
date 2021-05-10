module.exports = {
  i18n: {
    locales: ["en-CA"],
    defaultLocale: "en-CA",
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/arynn/image/upload/",
  },
  future: {
    webpack5: true,
  },
  target: "serverless",
}

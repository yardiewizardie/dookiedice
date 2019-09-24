const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withImages = require('next-images')
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withImages(
    withFonts(
        withCSS(
            withSass(
                withReactSvg({
                    include: path.resolve(__dirname, 'src/static/icons'),
                    webpack(config, options) {
                      return config
                    }
                  })
            )
        )
    )
)

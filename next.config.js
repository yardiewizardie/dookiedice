const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withImages(
    withFonts(
        withCSS(
            withSass({
                enableSvg: true,
                webpack(config, options) {
                    return config
                },
            })
        )
    )
)

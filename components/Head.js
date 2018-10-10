import Head from 'next/head'
import { colors, spacing, font } from '../themes'

export default () => (
  <Head>
    <title>Beautiful Free Images & Pictures | Unsplash</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="charset" content="UTF8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"
    />
    <style jsx global>{`
      *, body {
        box-sizing: border-box;
      }

      html {
        font-family: sans-serif;
      }

      html, body {
        height: 100%;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
        font-size: ${font.sizes.default};
        font-weight: ${font.weights.default};
        line-height: ${spacing.lineHeight};
        color: ${colors.default};
        margin: 0;
      }
    `}</style>
  </Head>
)

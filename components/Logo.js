import React, { Fragment } from 'react'

const Logo = props => (
  <Fragment>
    <svg version="1.1" {...props}>
      <title id="unsplash-home">Unsplash Home</title>
      <path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z" />
    </svg>
    <style jsx>{`svg { vertical-align: middle; }`}</style>
  </Fragment>
)

Logo.defaultProps = {
  viewBox: '0 0 32 32',
  width: 32,
  height: 32,
  'aria-labelledby': 'unsplash-home',
  'aria-hidden': 'false',
}

export default Logo

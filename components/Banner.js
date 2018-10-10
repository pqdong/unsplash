import React, { PureComponent, Fragment } from 'react'
import get from 'lodash/get'

class Banner extends PureComponent {
  render() {
    const url = get(this.props, 'banner.urls.custom', null)

    return (
      <Fragment>
        <div className="root" style={{ backgroundImage: `url(${url})` }} />

        <style jsx>{`
          .root {
            padding-bottom: 38.25%;
            background-size: cover;
            background-position: center;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Banner

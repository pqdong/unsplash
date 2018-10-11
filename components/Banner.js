import React, { PureComponent, Fragment } from 'react'
import Link from 'next/link'
import get from 'lodash/get'
import SearchBox from './SearchBox'
import { spacing, font } from '../themes'

class Banner extends PureComponent {
  render() {
    const url = get(this.props, 'banner.urls.custom', null)
    const user = get(this.props, 'banner.user', null)

    return (
      <Fragment>
        <div className="root" style={{ backgroundImage: `url(${url})` }}>
          <div className="wrapper">
            <div className="content">
              <div className="name">Unsplash</div>
              <h1 className="text">Beautiful, free photos.</h1>
              <div className="text">
                Gifted by the world’s most generous community of photographers. 🎁
              </div>

              <SearchBox />
            </div>

            <div className="footer">
              <div className="footer-item credit">
                <Link href="/" prefetch passHref>
                  <span><a>Photo of the Day</a> by</span>
                </Link>
                {' '}
                <Link href="/" prefetch passHref>
                  <a>{user.first_name} {user.last_name}</a>
                </Link>
              </div>

              <div className="footer-item license">
                Read more about the
                {' '}
                <a href="https://unsplash.com/license" target="_blank">
                  Unsplash License
                </a>
              </div>

              <div className="footer-item" />
            </div>
          </div>
        </div>

        <style jsx>{`
          .root {
            position: relative;
            padding-bottom: 36.25%;
            background-size: cover;
            background-position: center;
          }

          .wrapper {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: ${spacing.default};
            background-color: rgba(0, 0, 0, 0.3);
          }

          .content {
            width: 66.66667%;
            color: #fff;
          }

          .name {
            font-size: 46px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: ${spacing.default};
          }

          .text {
            font-size: 18px;
            font-weight: ${font.weights.default};
            margin-bottom: 0;
          }

          .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: ${spacing.default};
            font-size: 13px;
            color: #b3b3b3;
            display: flex;
            justify-content: space-between;
          }

          .footer a {
            color: hsla(0,0%,100%,.8);
            text-decoration: none;
          }

          .footer a:hover {
            color: #fff;
          }

          .footer-item {
            flex-basis: 33.3333333333%;
          }

          .footer-item.license {
            text-align: center;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default Banner

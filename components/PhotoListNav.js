import React from 'react'
import Link from '../components/Link'
import { colors } from '../themes'

const PhotoListNav = () => {
  const navs = [
    {
      name: 'Editorial',
      path: '/',
    },
    {
      name: 'Trending',
      path: '/trending',
    },
  ]

  return (
    <div className="root">
      {navs.map(nav => {
        return (
          <Link key={nav.name} href={nav.path} activeClassName="active">
            <a className="link">
              {nav.name}
            </a>
          </Link>
        )
      })}
      <style jsx>{`
        .root {
          font-size: 0;
          max-width: 1320px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 48px;
          margin-bottom: 24px;
        }

        .link {
          font-size: 18px;
          display: inline-block;
          padding-left: 12px;
          padding-right: 12px;
          color: ${colors.inactive}
        }

        .link:first-child {
          padding-left: 0;
        }

        .link:hover {
          color: ${colors.default}
        }

        .link.active {
          color: ${colors.default}
        }
      `}</style>
    </div>
  )
}

export default PhotoListNav

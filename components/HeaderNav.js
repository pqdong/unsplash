import React, { Fragment } from 'react'
import Link from './Link'
import { colors } from '../themes'

const HeaderNav = ({ page }) => {
  const headerNavItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Collections',
      href: '/collections',
    },
    {
      name: 'Explore',
      href: '/explore',
    },
  ]

  return (
    <Fragment>
      <ul className="root">
        {headerNavItems.map(headerNavItem => {
          return (
            <li key={headerNavItem.name} className="item">
              <Link
                href={headerNavItem.href}
                prefetch
                passHref
                activeClassName="link-active"
              >
                <a className="link">{headerNavItem.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        .root {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          height: 100%;
        }

        .item {
          height: 100%;
        }

        .link {
          text-decoration: none;
          padding: 20px 12px;
          color: ${colors.inactive};
          font-weight: 500;
          transition: color .2s ease-in-out, opacity .2s ease-in-out;
          display: flex;
          align-item: center;
        }

        .link:hover {
          color ${colors.default};
        }

        .link-active {
          pointer-events: none;
          color: ${colors.default};
        }
      `}</style>
    </Fragment>
  )
}

export default HeaderNav

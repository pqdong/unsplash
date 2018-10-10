import React from 'react'
import Link from 'next/link'
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
    <ul className="root">
      {headerNavItems.map(headerNavItem => {
        if (page === headerNavItem.name) {
          return (
            <li key={headerNavItem.name} className="item">
              <a href="#" className="link link-active">{headerNavItem.name}</a>
            </li>
          )
        }

        return (
          <li key={headerNavItem.name} className="item">
            <Link href={headerNavItem.href} prefetch passHref>
              <a className="link">{headerNavItem.name}</a>
            </Link>
          </li>
        )
      })}
      <style jsx>{`
        .root {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
        }

        .link {
          text-decoration: none;
          padding: 20px 12px;
          color: ${colors.inactive};
          font-weight: 500;
          transition: color .2s ease-in-out, opacity .2s ease-in-out;
        }

        .link:hover {
          color ${colors.default};
        }

        .link-active {
          pointer-events: none;
          color: ${colors.default};
        }
      `}</style>
    </ul>
  )
}

export default HeaderNav

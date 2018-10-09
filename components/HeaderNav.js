import React from 'react'
import Link from 'next/link'
import Head from './Head'

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
    <ul>
      {headerNavItems.map(headerNavItem => {
        if (page === headerNavItem.name) {
          return <li key={headerNavItem.name}>{headerNavItem.name}</li>
        }

        return (
          <li key={headerNavItem.name}>
            <Link href={headerNavItem.href} prefetch>{headerNavItem.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default HeaderNav

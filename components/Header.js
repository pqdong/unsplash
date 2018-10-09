import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HeaderNav from './HeaderNav'

const Header = () => (
  <header>
    <Link href="/" prefetch>
      <a>
        <Logo />
      </a>
    </Link>

    <nav>
      <HeaderNav page="Home" />
    </nav>

    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        padding-left: 16px;
        padding-right: 16px;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </header>
)

export default Header

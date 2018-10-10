import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HeaderNav from './HeaderNav'
import HeaderUser from './HeaderUser'
import { spacing } from '../themes'

const Header = () => (
  <header>
    <nav>
      <Link href="/" prefetch passHref>
        <a>
          <Logo />
        </a>
      </Link>

      <div className="right">
        <HeaderNav page="Home" />
        <HeaderUser />
      </div>
    </nav>

    <style jsx>{`
      header {
        width: 100%;
        height: 62px;
      }

      nav {
        position: fixed;
        z-index: 1;
        padding-left: ${spacing.default};
        padding-right: ${spacing.default};
        width: 100%;
        height: 62px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .right {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}</style>
  </header>
)

export default Header

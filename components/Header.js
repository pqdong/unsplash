import React, { Fragment } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import HeaderNav from './HeaderNav'
import HeaderUser from './HeaderUser'
import { spacing } from '../themes'

const Header = () => (
  <Fragment>
    <header>
      <nav>
        <Link href="/" prefetch passHref>
          <a>
            <Logo />
          </a>
        </Link>

        <div className="right">
          <HeaderNav />
          <HeaderUser />
        </div>
      </nav>
    </header>

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
        height: 100%;
      }
    `}</style>
  </Fragment>
)

export default Header

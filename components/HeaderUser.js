import React from 'react'
import Link from 'next/link'

export default () => (
  <div className="root">
    <Link href="/" prefetch passHref>
      <a className="link">
        <img
          src="/static/avatars/placeholder.jpg"
          alt="Avatar"
          className="avatar"
        />
      </a>
    </Link>

    <style jsx>{`
      .root {
        width: 32px;
        height: 32px;
        margin-left: 8px;
        border-radius: 50%;
        overflow: hidden;
      }

      .link {
        display: block;
        height: 100%;
      }

      .avatar {
        width: 100%;
      }
    `}</style>
  </div>
)

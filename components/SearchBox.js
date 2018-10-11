import React, { PureComponent, Fragment } from 'react'
import Link from 'next/link'
import { spacing } from '../themes'

class SearchBox extends PureComponent {
  state = {
    keyword: '',
  }

  trending = ['business', 'computer', 'nature', 'love', 'house']

  onKeywordChange = e => {
    this.setState({
      keyword: e.target.value,
    })
  }

  clearKeyword = e => {
    e.preventDefault()

    this.setState({
      keyword: '',
    })
  }

  render() {
    const { keyword } = this.state

    return (
      <Fragment>
        <div className="root">
          <div className="search-box">
            <form className="search-form">
              <button className="search-btn">
                <svg
                  className="search-icon"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  aria-hidden="false"
                >
                  <path d="M31 28.64l-7.57-7.57a12.53 12.53 0 1 0-2.36 2.36l7.57 7.57zm-17.5-6a9.17 9.17 0 1 1 6.5-2.64 9.11 9.11 0 0 1-6.5 2.67z" />
                </svg>
              </button>
              <div className="search-input-wrapper">
                <input
                  className="search-input"
                  placeholder="Search free high-resolution photos"
                  value={keyword}
                  onChange={this.onKeywordChange}
                />
              </div>
              <button
                className={`search-btn ${keyword === '' && 'invisible'}`}
                onClick={this.clearKeyword}
              >
                <svg
                  className="search-icon"
                  version="1.1"
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  aria-hidden="false"
                >
                  <path d="M25.33 8.55l-1.88-1.88-7.45 7.45-7.45-7.45-1.88 1.88 7.45 7.45-7.45 7.45 1.88 1.88 7.45-7.45 7.45 7.45 1.88-1.88-7.45-7.45z" />
                </svg>
              </button>
            </form>

            <div className="trending">
              Trending searches:
              {' '}
              {this.trending.map((item, index) => (
                <Link key={item} href="/" prefetch passHref>
                  <a>
                    {item}{index < this.trending.length - 1 && ', '}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          a {
            color: hsla(0,0%,100%,.8);
          }

          a:hover {
            color: #fff;
          }

          .root {
            padding-top: ${spacing.default}
          }

          .search-form {
            display: flex;
            border-radius: ${spacing.radius.default};
            overflow: hidden;
            height: 54px;
            background-color: #f5f5f5;
            transition: all .1s ease-in-out;
          }

          .search-form:focus-within {
            background-color: #fff;
            box-shadow: 0 0 0 5px rgba(0, 0, 0, .3);
          }

          .search-btn {
            border: 0;
            padding: 0 ${spacing.default};
            cursor: pointer;
            background-color: transparent;
          }

          .search-btn:hover svg {
            fill: #777;
          }

          .search-icon {
            fill: #999;
            width: 20px;
            height: 20px;
            transition: fill .1s ease-in-out;
          }

          .search-input-wrapper {
            flex-grow: 1;
            display: flex;
          }

          .search-input {
            width: 100%;
            border: 0;
            background-color: transparent;
          }

          .invisible {
            visibility: hidden;
          }

          .trending {
            padding-top: ${spacing.default}
          }
        `}</style>
      </Fragment>
    )
  }
}

export default SearchBox

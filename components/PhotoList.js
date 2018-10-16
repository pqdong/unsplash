import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import filter from 'lodash/filter'
import LazyLoad from 'react-lazyload'
import Waypoint from 'react-waypoint'
import Spinner from './Spinner'
import { spacing } from '../themes'

class PhotoList extends PureComponent {
  constructor(props) {
    super(props)

    this.currentPage = props.currentPage
  }

  layout = (photos = []) => {
    const length = Math.floor(photos.length / 3)
    const first = [0]
    const second = [1]
    const third = [2]

    for (let i = 0; i < length + 1; i++) {
      first.push(first[i] + 3)
    }

    for (let j = 0; j < length; j++) {
      second.push(second[j] + 3)
      third.push(third[j] + 3)
    }

    return {
      first: filter(photos, (photo, index) => first.indexOf(index) > -1),
      second: filter(photos, (photo, index) => second.indexOf(index) > -1),
      third: filter(photos, (photo, index) => third.indexOf(index) > -1),
    }
  }

  flex = (height, width) => `${height / width * 100}%`

  onEnter = () => {
    const { onLoad } = this.props

    this.currentPage += 1

    if (onLoad) {
      onLoad(this.currentPage)
    }
  }

  onLeave = () => {}

  renderImg = photo => (
    <div
      key={photo.id}
      className="item"
      style={{ paddingBottom: this.flex(photo.height, photo.width) }}
    >
      <div className="item-inner">
        <div className="img-wrapper">
          <LazyLoad height={200}>
            <img src={photo.urls.regular} className="img" />
          </LazyLoad>
        </div>
      </div>

      <style jsx>{`
        .item {
          position: relative;
        }

        .item-inner {
          margin-bottom: ${spacing.default}
        }

        .img-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ddd;
        }

        .img {
          vertical-align: middle;
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  )

  renderContent = () => {
    const { photos = [] } = this.props
    const layout = this.layout(photos)

    return (
      <div>
        <div className="root">
          <div className="wrapper">
            <div className="row">
              <div className="first col">
                {layout.first.map(photo => this.renderImg(photo))}
              </div>
              <div className="second col">
                {layout.second.map(photo => this.renderImg(photo))}
              </div>
              <div className="third col">
                {layout.third.map(photo => this.renderImg(photo))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .wrapper {
            max-width: 1320px;
            margin-left: auto;
            margin-right: auto;
            padding-top: 48px;
          }

          .row {
            margin-left: ${-1 * spacing.half};
            margin-right: ${-1 * spacing.half};
            display: flex;
          }

          .col {
            flex-basis: 33.3333333333%;
            padding-left: ${spacing.half};
            padding-right: ${spacing.half};
          }
        `}</style>
      </div>
    )
  }

  render() {
    const { loading } = this.props

    return (
      <Fragment>
        {this.renderContent()}

        <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>

          <div className="loading">
            {loading && <Spinner />}
          </div>
        </Waypoint>

        <style jsx>{`
          .loading {
            height: 48px;
          }
        `}</style>
      </Fragment>
    )
  }
}

PhotoList.propTypes = {
  currentPage: PropTypes.number,
}

PhotoList.defaultProps = {
  currentPage: 1,
}

export default PhotoList

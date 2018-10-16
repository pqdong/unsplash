import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadLatestPhotos } from '../reducers/photos'
import PhotoList from '../components/PhotoList'

class LatestPhotoList extends PureComponent {
  load = page => {
    this.props.dispatch(
      loadLatestPhotos({
        page,
        order_by: 'latest',
      }),
    )
  }

  render() {
    const { photos, loading, latest } = this.props

    return (
      <PhotoList
        loading={loading}
        photos={[...photos, ...latest]}
        currentPage={5}
        onLoad={this.load}
      />
    )
  }
}

export default connect(state => state.photos)(LatestPhotoList)

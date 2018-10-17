import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loadTrendingPhotos } from '../reducers/photos'
import PhotoList from '../components/PhotoList'

class TrendingPhotoList extends PureComponent {
  load = page => {
    this.props.dispatch(
      loadTrendingPhotos({
        page,
      }),
    )
  }

  render() {
    const { photos, loading, trending } = this.props

    return (
      <PhotoList
        loading={loading}
        photos={[...photos, ...trending]}
        currentPage={4}
        onLoad={this.load}
      />
    )
  }
}

export default connect(state => state.photos)(TrendingPhotoList)

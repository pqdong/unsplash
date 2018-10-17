import React, { PureComponent, Fragment } from 'react'
import Layout from '../components/Layout'
import LatestPhotoList from '../containers/LatestPhotoList'
import { fetchPublic } from '../api'

class HomePage extends PureComponent {
  static async getInitialProps() {
    const resBanner = await fetchPublic(
      '/photos/random?w=1920&h=1080&orientation=landscape',
    )
    const banner = await resBanner.json()
    const resPhotos = await fetchPublic(
      '/photos?page=1&per_page=40&order_by=latest',
    )
    const photos = await resPhotos.json()

    return { banner, photos }
  }

  render() {
    const { banner, photos } = this.props

    return (
      <Layout banner={banner} hasPhotoListNav>
        <LatestPhotoList photos={photos} />
      </Layout>
    )
  }
}

export default HomePage

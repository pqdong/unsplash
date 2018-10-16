import React, { PureComponent, Fragment } from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Banner from '../components/Banner'
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
      <Fragment>
        <Head />
        <Header />
        <Banner banner={banner} />
        <LatestPhotoList photos={photos} />
      </Fragment>
    )
  }
}

export default HomePage

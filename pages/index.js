import React, { PureComponent, Fragment } from 'react'
import Head from '../components/Head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import { fetchPublic } from '../api'

class HomePage extends PureComponent {
  static async getInitialProps() {
    const res = await fetchPublic(
      '/photos/random?w=1920&h=1080&orientation=landscape',
    )
    const json = await res.json()

    return { banner: json }
  }

  render() {
    return (
      <Fragment>
        <Head />
        <Header />
        <Banner banner={this.props.banner} />
      </Fragment>
    )
  }
}

export default HomePage

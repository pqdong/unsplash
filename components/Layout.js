import React, { Fragment } from 'react'
import Head from './Head'
import Header from './Header'
import Banner from './Banner'
import PhotoListNav from './PhotoListNav'

const Layout = ({ children, title, banner, hasPhotoListNav = false }) => (
  <Fragment>
    <Head title={title} />
    <Header />
    {banner && <Banner banner={banner} />}
    {hasPhotoListNav && <PhotoListNav />}
    {children}
  </Fragment>
)

export default Layout

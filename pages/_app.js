import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { PageTransition } from 'next-page-transitions'
import Spinner from '../components/Spinner'

import createStore from '../store'

const TIMEOUT = 300

class Unsplash extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <PageTransition
            timeout={TIMEOUT}
            classNames="page-transition"
            loadingComponent={Spinner}
            loadingDelay={500}
            loadingTimeout={{
              enter: TIMEOUT,
              exit: 0,
            }}
            loadingClassnames="loading-indicator"
          >
            <Component {...pageProps} />
          </PageTransition>
        </Provider>

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(Unsplash))

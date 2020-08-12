import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import MainContentFirst from '../components/main-content-first'

function Session() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <MainContentFirst />
      </Main>
      {size.width > SIZES.MOBILE_SIZE && <Extra id={'first'}>Extra</Extra>}
    </Layout>
  )
}

export default Session

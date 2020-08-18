import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import MainContentThird from '../components/main-content-third'

function Meeting() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <MainContentThird />
      </Main>
      {size.width > SIZES.TABLET_SIZE && <Extra id={'meeting'}>Extra</Extra>}
    </Layout>
  )
}

export default Meeting

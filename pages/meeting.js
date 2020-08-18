import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'

function Meeting() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <h1 style={{ color: 'red' }}>Meeting</h1>
      </Main>
      {size.width > SIZES.MOBILE_SIZE && <Extra id={'meeting'}>Extra</Extra>}
    </Layout>
  )
}

export default Meeting

import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'

function Session() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>Session</Main>
      {size.width > SIZES.MOBILE_SIZE && <Extra id={'session'}>Extra</Extra>}
    </Layout>
  )
}

export default Session

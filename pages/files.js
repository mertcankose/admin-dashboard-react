import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'

function Files() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
      <h1 style={{color:'red'}}>Files</h1>
      </Main>
      {size.width > SIZES.MOBILE_SIZE && <Extra id={'files'}>Extra</Extra>}
    </Layout>
  )
}

export default Files

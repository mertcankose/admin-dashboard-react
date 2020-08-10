import React, { useEffect } from 'react'
import CONST from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>{JSON.stringify(size)}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>Extra</Extra>}
    </Layout>
  )
}

export default HomePage

import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import MainContentFourth from '../components/mainContent/main-content-fourth'

function Conversation() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <MainContentFourth />
      </Main>
      {size.width > SIZES.DESKTOP_SIZE && (
        <Extra id={'conversation'}>Extra</Extra>
      )}
    </Layout>
  )
}

export default Conversation

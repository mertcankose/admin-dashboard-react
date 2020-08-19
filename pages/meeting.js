import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import MainContentSecond from '../components/mainContent/main-content-second'
import ThemeSelect from '../components/themeSelect/theme-select'

function Meeting() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <ThemeSelect />
        <MainContentSecond />
      </Main>
      {size.width > SIZES.DESKTOP_SIZE && <Extra id={'meeting'}>Extra</Extra>}
    </Layout>
  )
}

export default Meeting

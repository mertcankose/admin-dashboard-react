import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import ThemeSelect from '../components/themeSelect/theme-select'

import MainContentThird from '../components/mainContent/main-content-third'


function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <ThemeSelect />
        <MainContentThird/>
      </Main>
      {size.width > SIZES.DESKTOP_SIZE && <Extra id={'first'}>Extra</Extra>}
    </Layout>
  )
}

export default HomePage

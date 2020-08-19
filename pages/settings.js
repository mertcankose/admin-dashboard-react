import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import ThemeSelect from '../components/themeSelect/theme-select'

function Settings() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <ThemeSelect />
      </Main>
      {size.width > SIZES.DESKTOP_SIZE && <Extra id={'settings'}>Extra</Extra>}
    </Layout>
  )
}

export default Settings

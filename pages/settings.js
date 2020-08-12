import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import ThemeSelect from '../components/theme-select'

function Settings() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <ThemeSelect />
      </Main>
      {size.width > SIZES.MOBILE_SIZE && <Extra id={'settings'}>Extra</Extra>}
    </Layout>
  )
}

export default Settings

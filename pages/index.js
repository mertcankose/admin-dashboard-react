import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import ProfileBox from '../components/profileBox'
import { PROFILE } from '../constants/index'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        {PROFILE.map((profile) => (
          <ProfileBox
            name={profile.name}
            mail={profile.mail}
            role={profile.role}
            photoUrl="https://picsum.photos/58/58"
          />
        ))}
      </Main>
      {size.width > SIZES.MOBILE_SIZE && <Extra id={'first'}>Extra</Extra>}
    </Layout>
  )
}

export default HomePage

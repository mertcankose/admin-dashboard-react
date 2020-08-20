import React, { useEffect } from 'react'
import { SIZES } from '../constants/index'
import Layout from '../components/layout/layout'
import Main from '../components/col/col-main'
import Extra from '../components/col/col-extra'
import useWindowSize from '../hooks/useWindowSize'
import Tweet from '../components/tweet/tweet'

function Conversation() {
  const size = useWindowSize()

  return (
    <Layout>
      <Main>
        <Tweet
          name="Mertcan Kose"
          slug="mertcankose_"
          dateTime={new Date('2020-08-20')}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facilis architecto sunt tempore, ex error ab provident quos, assumenda aliquid dolorem modi, nisi natus officiis dolores ut ipsum. Cumque veniam odio hic dolores molestias aspernatur voluptate provident id iusto iure sunt dolorum dolore architecto, facilis, similique nostrum. Natus, et impedit.`}
        ></Tweet>
        <Tweet
          name="Mertcan Kose"
          slug="mertcankose_"
          dateTime={new Date('2020-08-20')}
          text={`selam nabersadasdasd   asdsad:))
                    
sadasdsadsadas  das         das. .  ...  `}
        ></Tweet>
        <Tweet
          name="Mertcan Kose"
          slug="mertcankose_"
          dateTime={new Date('2020-08-20')}
          text={`     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente delectus esse ut, repudiandae quibusdam facilis laboriosam incidunt harum, voluptatem at itaque libero beatae perferendis fugiat suscipit quidem est nemo asperiores! `}
        ></Tweet>
      </Main>
      {size.width > SIZES.DESKTOP_SIZE && (
        <Extra id={'conversation'}>Extra</Extra>
      )}
    </Layout>
  )
}

export default Conversation

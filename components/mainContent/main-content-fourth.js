import React from 'react'
import styles from './main-content-fourth.module.css'
import Tweet from '../tweet/tweet'
import { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '../../lib/fetch'
import Loading from '../loading/loaders'

//without swr
/*
  const [data, setData] = useEffect([])
  const [dataLoading, setDataLoading] = useEffect(true)

  useEffect(() => {
    async function getData() {
      const response = await fetch('localhost:3000/api/tweet')
      const data = await response.json()
      setData(data.statuses)
      setDataLoading(false)
    }
    getData()
  }, [])
*/

//return
/*
    {dataLoading && <p>Loading</p>}
    {data.map((tweet) => {
        return <div>{tweet.id}</div>
    })}
*/

function MainContentFourth() {
  const { data } = useSWR('/api/tweet', fetcher)

  return (
    <div>
      {!data && (
        <div className={styles.loading}>
          <Loading />
        </div>
      )}
      {/*
      {data?.statuses.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            
          ></Tweet>
        )
      })}
    */}
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
    </div>
  )
}

export default MainContentFourth

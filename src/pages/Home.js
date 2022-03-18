import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Loading from '../components/Loading'


const Home = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [])

  return (
    <>
      {
        loading 
          ? <Loading loading={loading} />
          : <Hero />
      }
    </>
  )
}

export default Home
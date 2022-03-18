import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Wrapper from '../components/Wrapper'

const Experiences = () => {
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
          : <Wrapper>
              <div>Experiences</div>
            </Wrapper>
      }
    </>
  )
}

export default Experiences
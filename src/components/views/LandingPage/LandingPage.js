import React, {useEffect} from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

function LandingPage() {
  
  useEffect(() => {
    axios.get('api/hello').then(Response => console.log(Response.data))
  }, [])
  
  return (
    <div>
      LandingPage
    </div>
  )
}

export default LandingPage

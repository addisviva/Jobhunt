import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'
import  { Link } from 'react-router-dom'
function Error() {
  return (
    <Wrapper className='full-page'>
      <div>

      <img src={img} alt="image not found" />
      <h3> oh! sorry can't find the page</h3>
      <p>ERROR!</p>
      <Link to='/'> Back Home</Link>
      </div>
   
      </Wrapper>
  )
}

export default Error
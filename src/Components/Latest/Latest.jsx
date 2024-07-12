import React from 'react'
import './Latest.css'
import Latest_img from '../Assets/photo.avif'
const Latest = () => {
  return (
    <div className='Latest'>
        <div className="Latest-left">
            <div className="Latest-left-one">
            <div className="image">
            </div>
            <h3>TITLE</h3>
            <p>Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
            <div className="Latest-left-two">
            <div className="image">
            </div>
            <h3>TITLE</h3>
            <p>Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
        </div>
        <div className="Latest-right">
        <h2>Top Stories_____________________</h2>
        <div className="image">
            </div>
            <p>Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book.
                 Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took
                 a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    </div>
  )
}

export default Latest

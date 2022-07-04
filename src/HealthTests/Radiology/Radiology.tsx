import { fontWeight } from '@mui/system';
import React, { useState } from 'react'
import CircleImage from '../../components/CircleImage';
import Modal from '../../components/Modal';
import SquareCard from '../../components/SquareCards';
import './Radiology.css';

function Radiology() {

  return (
    <div className='radiology'>
      <p>Radiology</p>
      <div className='radiology_cards'>
      {
        [1,2,3,4,5].map(() => {
          return (
            <div className='radiology_card'>
              <div className='heading_and_discount'>
              <div className='heading'>MRI Scan</div>
              <div className='discount'>
                Extra 30% OFF
              </div>
              </div>
            <div className='redtext'>No Special Permission Required</div>
            <div className='content_and_price'>
            <div className='content'>
              MRI magnetic resource imaging and is the most frequently recommended test
            </div>
            <div className='price'>
              <div style={{fontWeight:"light", fontStyle:"italic", color:"black", paddingBottom:"5px"}}>Starts From</div>
              <div className='actual_price'>
                <s style={{color:"red", fontWeight:"bold", paddingBottom:"10px"}}>₹5000</s>
                <div style={{fontWeight:"bold"}}>₹1999</div>
              </div>
              <button>Book Now</button>
              <p>Available in</p>
              <p>3 Scan Centers</p>
            </div>
            </div> 
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Radiology
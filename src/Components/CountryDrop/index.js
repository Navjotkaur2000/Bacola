import React from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

function CountryDrop() {
  return (
      <>
            <Button className='countryDrop'>
                                  <div className='info d-flex flex-column'>
                  <span className='label'>your Location</span>
                  
                                      <span className='name'>Europe</span>
                                  </div>
                                  <span className='angle'> <FaAngleDown /></span>
                              </Button>
      </>
  )
}
export default CountryDrop;

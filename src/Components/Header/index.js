import React from 'react';
import { Link } from 'react-router-dom';
import CountryDrop from '../CountryDrop'; 
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { LuUserRound } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

function Header() {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-align-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>
        <Header className="header">
          <div className="container">
            <div className="row">
              <div className="logoImage d-flex col-sm-2 align-items-center">
              <Link to={"/"}><img src="/images/bacola-logo.webp" alt='Company logo'></img></Link>
              </div>
              <div className="col-sm-10 d-flex align-items-center second">
                <CountryDrop />
                
                {/* day3 */}
                <div className='hSearch ms-3 me-3'>
                  <input type="text" placeholder='Srearch for products...'/>
                  <Button><IoSearch /></Button>
                </div>


{/* part3 in header */}
<div className='part-3 d-flex align-items-center ml-auto'>

<Button className='circle me-3'><LuUserRound /></Button>
<div className='cart d-flex align-item-center'>
  <span className='price'>$4.50</span>
  <div className='position-relative ms-2'>
    <Button className='circle'><IoBagOutline /></Button>
    <span className='count d-flrx align-items-center justify-content-center'>5</span>
  </div>
</div>
</div>

              </div>
            </div>
          </div>
        </Header>


{/* Day4 working with all cate tab */}

        <nav>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-3 navPart1'>
                <Button className='allCartTab align-items-center'></Button>
                <span className='icon1 me-2'><IoIosMenu /></span>
                <span className='text'>All Categories</span>
                <span className='icon2 ms-2'><FaAngleDown /></span>
              </div>
            </div>
          </div>
        </nav>


      </div>
    </>
  );
}

export default Header;
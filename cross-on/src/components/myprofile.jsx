import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect,useState } from 'react';
import axios from 'axios';
export default function Myprofile() {

  return (
    <>
    <nav>
      <Navbar/>
    </nav>
    <div className='profile-page'>
    <div className='profile-flex'>
    <div className=''>
      <div className='profile'></div>
    </div>
    <div>
      <div className='profile-text'>
        Hi my name is
      </div>
      <div className='profile-text2'>
        Hemanth Krishnakumar
      </div>
      <div className='profile-text3'>
      Im interested in contributing to everyday society through programming.
      I also like cats and badminton
      </div>
    </div>

    </div>
    <div className='profile-text4'>
    Working/Studying at - Amrita Vishvavidhyapeetham Amritapuri
      </div>
      <div className='profile-text4'>
    Domain of interest - Android Development
      </div>  
     <div className='profile-text4'>
     Branch - Btech CSE
      </div>
    </div>
    </>
  )
}
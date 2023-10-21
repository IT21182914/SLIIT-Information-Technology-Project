import React, { useContext, useEffect, useState } from 'react'
import styles from '../../components/Template/Background.module.scss'
import Logo from '../../components/Template/Pictures/Logo.png'
import Menue from './DropdownMenue'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../common/footer'
import axios from 'axios'
import Navbar from '../common/Navbar'


export default function UserBackGround(props) {


  return (

    <div className="block max-xmd:w-928 h-96">
      <Navbar/>

      {/* Top section of background */}
      <div className={styles.TopSection}> 

              
        <div className={styles.HeadingRow}>
          
          
        </div> 

      </div> 

      {/* Make contents inside here */}
      <div className='flex w-full h-[73vh] justify-center fixed z-[50] top-[8rem] items-center'>
        he
      </div>
      
    </div>
    
  )
}
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../components/Template/Background.module.scss'
import Image from '../../components/Template/Pictures/Search.png'
import Logo from '../../components/Template/Pictures/Logo.png'
import Notification from '../../components/Template/Pictures/Notification.png'
import Menue from '../../components/Template/DropdownMenue'
import Dashboard from '../../components/Template/Dashboard'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/common/footer'
import { adminContext } from '../../user/adminContext'
import axios from 'axios'
import storage from '../../Apis/firebase.config'
import { ref } from "firebase/storage";
import {
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";


export default function CustomerEdit(props) {  
    const  navigate  = useNavigate()
    const {admin, setAdmin} = useContext(adminContext)
    console.log(useContext(adminContext))
  
    console.log(admin)
    
    const [firstName, setFirstName] = useState(admin?.firstName)
    const [lastName, setLastName] = useState(admin?.lastName)
    const [email, setEmail] = useState(admin?.email)
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [phone,setPhone] = useState(admin?.phone)
    const [gender,setGender] = useState('female')
    const [file,setFile] = useState(admin?.image)
    const [percent, setPercent] = useState(0);
    
    console.log(admin.firstName)

    function handleUpload() {
      if(password == confirmPassword)
      {if (!file) {
        alert("Please choose a file first!")
      }
      const storageRef = ref(storage, `/files/${file.name}`)
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(percent);
        },
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            axios.put("http://localhost:5000/customer",{
              firstName:firstName,
              lastName:lastName,
              phone : phone,
              image : url
          }).then((res)=>{
              console.log(res)
              navigate("/login")
          }).catch((err)=>{
              console.log(err)
          })
  
          });
        }
      ) 
      }else{
          alert("Please ceck the passwords!")
      }
    }
    function handleChange(event) {
      setFile(event.target.files[0]);
    }

  
  const  location = useLocation()
 


  
 
  return (

    <div className="block max-xmd:w-928 h-96">

      {/* Top section of background */}
      <div className={styles.TopSection}> 

              
        <div className={styles.HeadingRow}>
          
          <div className={styles.LogoIcon}>
            <img src={Logo} style={{width:100,height:100}} alt='Logo'/>
          </div>   
        </div> 

      </div> 

      {/* Make contents inside here */}
      <div className="">
      <div className="relative flex flex-col justify-center overflow-hidden p-10 m-10">
        <div className="m-auto h-fit w-2/3 rounded-md bg-white p-6 shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
          <h1 className="text-center text-3xl font-semibold text-gray-700 mb-5">
            Update Customer
          </h1>
          
          

            <div className="relative mb-3">
              <input
                type="text"
                defaultValue={firstName}
                onChange={(e) => setFirstName(e.target.value)}                
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                First Name
              </label>
            </div>

            <div className="relative mb-3">
              <input
                type="text"
                defaultValue={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                Last Name
              </label>
            </div>

            <div className="relative mb-3">
              <input
                type="tel"
                defaultValue={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                Mobile Number{" "}
              </label>
            </div>         

        <br /> 

            <input type="file" className="file-input file-input-xs file-input-bordered file-input-error w-[100%]" onChange={handleChange} />   
            <div>

            <br />
              <button 
              onClick={(e)=>{
                
                
                    handleUpload(e)

                    
                
              }} className="btn btn-fill btn-warning w-full text-white text-xl tracking-widest ">
                Update Info
              </button>
            </div>
        
          
        
        </div>
      </div>
      <footer className='w-full bottom-0 z-50'><Footer/></footer>
    </div>
      
      {/* This is bottom of Background */}
      
    
    </div>
    
  )
}
import React, { useContext, useEffect, useState } from 'react'
import styles from '../../components/Template/Background.module.scss'
import Image from '../../components/Template/Pictures/Search.png'
import Logo from '../../components/Template/Pictures/Logo.png'
import Notification from '../../components/Template/Pictures/Notification.png'
import Menue from '../../components/Template/DropdownMenue'
import Dashboard from '../../components/Template/Dashboard'
import { Link, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../components/common/footer'
import { adminContext } from '../../user/adminContext'
import axios from 'axios'
import storage from '../../Apis/firebase.config'
import { ref } from "firebase/storage";
import {
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

export default function AdminActivatePage(props) {
  const [percent, setPercent] = useState(0);

  const {admin,setAdmin} = useContext(adminContext)
  
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [phone,setPhone] = useState('')
  const [gender,setGender] = useState('male')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [file,setFile] = useState('https://www.w3schools.com/howto/img_avatar.pn')


  const  location = useLocation()
  const navigate = useNavigate()
    const{id} = useParams()
  useEffect(() => {
    console.log(admin)
    console.log(location.pathname)
    
  },[location])

  function handleLogin(){
    if(true){
      
    }
  }
  
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
            axios.post('http://localhost:5000/admin/activate', {
                userId : id,
                firstName:firstName,
                lastName:lastName,
                phone:phone,
                gender :gender,
                newPassword:password,
                image:url
            }).then((res)=>{
                console.log(res)
                navigate('/login')
            }
            )

        });
      }
    ) 
    }else{
        alert("Please check the passwords!")
    }
  }
  function handleChange(event) {
    setFile(event.target.files[0]);
  }


 
  return (
    <div className='h-[110vh] relative'>
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
      <div className='flex w-full h-[73vh] mt-5 justify-center absolute z-[50] top-[1rem] items-center'>
        <div className="w-[30%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg bg-white h-[550px] flex flex-col items-center p-[40px]">
          <div className="font-bold text-[20px] text-black text-center" >Activate admin account</div>
          
          
          <div className="relative w-[90%] my-3">
          <input
          defaultValue={firstName}
            type="text"
            className="peer m-0 block h-[30px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    "
            onChange={(e)=>{setFirstName(e.target.value)}} />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 text-[15px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-1 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >First name</label>
          </div>
          <div className="relative w-[90%] my-3">
          <input
          defaultValue={lastName}
            type="text"
            className="peer m-0 block h-[30px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    "
            onChange={(e)=>{setLastName(e.target.value)}} />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 text-[15px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-1 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >Last name</label>
          </div>
          <div className="relative w-[90%] my-3">
          <input
          defaultValue={phone}
            type="number"
            className="peer m-0 block h-[30px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    "
            onChange={(e)=>{setPhone(e.target.value)}} />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 text-[15px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-1 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >Phone</label>
          </div>
          <div className="relative w-[90%] my-3">
          <div className="relative mb-3 flex flex-col gap-3">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="Gender"
                  defaultChecked={gender == "male"}
                  onClick={(e) => {setGender("male")
                  }}
                  id="male"
                  className="radio radio-warning"                  
                />
                <label htmlFor="male" className="cursor-pointer">
                  Male
                </label>
              </div>

              <div className="flex gap-4">
                <input
                defaultChecked={gender == "female"}
                onClick={(e) => {
                  }}
                  type="radio"
                  id="female"
                  name="Gender"
                  className="radio radio-warning"
                />
                <label htmlFor="female" className="cursor-pointer">
                  Female
                </label>
              </div>
            </div>
      
          </div>
          <div className="relative w-[90%] my-3">
          <input
          defaultValue={password}
            type="passowrd"
            className="peer m-0 block h-[30px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    "
            onChange={(e)=>{setPassword(e.target.value)}} />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 text-[15px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-1 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >Password</label>
          </div>
          <div className="relative w-[90%] my-3">
          <input
          defaultValue={confirmPassword}
            type="password"
            className="peer m-0 block h-[30px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    "
            onChange={(e)=>{setConfirmPassword(e.target.value)}} />
          <label
            for="floatingInput"
            className="pointer-events-none absolute left-0 text-[15px] top-0 origin-[0_0] border border-solid border-transparent px-3 py-1 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >Confirm password</label>
          </div>
        
        <input type="file" className="file-input file-input-xs file-input-bordered file-input-error w-[90%]" onChange={handleChange} />   
        
          
          <div className="w-[90%] flex flex-col items-end mt-5">
            
              <button className="w-[100px] h-[40px] text-white font-bold rounded-md bg-primary-color" onClick={handleUpload}>Login</button>
           
          </div>
        </div>
      </div>
      
      {/* This is bottom of Background */}
      
    
    </div>
    <footer className='w-full mt-5  absolute  bottom-0 z-50'><Footer/></footer>
    </div>
  )
}
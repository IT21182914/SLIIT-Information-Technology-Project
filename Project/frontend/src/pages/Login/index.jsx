import React, { useContext, useEffect, useState } from 'react'
import styles from '../../components/Template/Background.module.scss'
import Logo from '../../components/Template/Pictures/Logo.png'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Footer from '../../components/common/footer'
import { adminContext } from '../../user/adminContext'
import axios from 'axios'


export default function LoginPage(props) {

  const {admin,setAdmin} = useContext(adminContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const  location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(admin)
    console.log(location.pathname)
  },[location])

  
  function handleLogin(){
    if(true){
      axios.post('http://localhost:5000/admin/login',{
        email:email,
        password : password
      }).then((response)=>{
        if(response.data.validated){
          response.data.type = 'admin'
          response.data.user.type = 'admin'
          setAdmin(response.data.user)
          console.log(response.data)
          navigate('/admin/Dashboard')        
        }else if(response.data.status == 'user_not_found'){
          
          axios.post('http://localhost:5000/customer/login',{
            email:email,
            password : password
          }).then((response)=>{
            if(response.data.loginSuccess){
              response.data.type = 'customer'
              response.data.user.type = 'customer'
              setAdmin(response.data.user)
              console.log(response.data)
              navigate('/')
            }else if(response.data.invalidPassword){
              alert("invalid password")
            }else{
              axios.post("http://localhost:5000/employee/login",{
                email : email,
                password : password
              }).then((response)=>{
                if(response.data.loginSuccess){
                  response.data.type = 'employee'
                  response.data.user.type = 'employee'
                  setAdmin(response.data.user)
                console.log(response)
                navigate('/employee/Dashboard')
                }else if(response.data.invalidPassword){
                  alert("invalid password")}
              })
            }
          })
        }else{
          alert('invalid password')
        }
        
      })
    }
  }
 
  return (

    <div className="flex max-xmd:w-928 h-screen flex-col gap-20">

      {/* Top section of background */}
      <div className={styles.TopSectionL}> 

              
        <div className={styles.HeadingRow}>
          
          <div className={styles.LogoIcon}>
            <img src={Logo} style={{width:100,height:100}} alt='Logo'/>
          </div>   
        </div> 

      </div> 

      {/* Make contents inside here */}
      <div className='h-screen w-full z-50 my-20'>

      
      <div className='flex w-full h-[73vh] justify-center items-center'>
        <div className="w-[30%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg bg-white h-[400px] flex flex-col items-center p-[40px]">
          <div className="font-bold text-[30px] text-black" >Sign in</div>
          <div class="relative w-[90%] my-3">
          <input
          defaultValue={email}
            type="email"
            class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    "
            onChange={(e)=>{setEmail(e.target.value)}} />
          <label
            for="floatingInput"
            class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >Email address</label >
          </div>
          <div class="relative w-[90%] my-3">
          <input
            defaultValue={password}
            type="password"
            class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            id="floatingInput"
            placeholder="    " 
            onChange={(e)=>{setPassword(e.target.value)}}/>
          <label
            for="floatingInput"
            class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
            >Password</label >
          </div>
        
          <a href='/customerRegistration'> <span  className="cursor-pointer w-[10%] text-primary-color">Create account</span></a>
          <div className="w-[90%] flex flex-col items-end mt-5">

              <button className="w-[100px] h-[40px] text-white font-bold rounded-md bg-primary-color" onClick={(e)=>{handleLogin()}}>Login</button>

          </div>
        </div>
      </div>
      </div>
      {/* This is bottom of Background */}
      
    <footer className='w-full absolute -bottom-40 z-50'><Footer/></footer>
    </div>
    
  )
}
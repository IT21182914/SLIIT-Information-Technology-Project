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
import PasswordChecklist from "react-password-checklist"


export default function CustomerRegistrationPage(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [gender,setGender] = useState('female')
    const [file,setFile] = useState('https://www.w3schools.com/howto/img_avatar.pn')
    const [percent, setPercent] = useState(0);
    const [isValidPhone, setIsValidPhone] = useState(true);

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
            axios.post("http://localhost:5000/customer",{
              firstName:firstName,
              lastName:lastName,
              email:email,
              password:password,
              gender : gender,
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
          alert("Please check the passwords!")
      }
    }
    function handleChange(event) {
      setFile(event.target.files[0]);
    }

  
  const  location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    
  },[])




  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const sanitizedInput = input.replace(/\D/g, ''); // Remove non-digit characters
    const formattedInput = sanitizedInput.slice(0, 10); // Limit to 10 digits
  
    if (formattedInput.length === 10) {
      setPhone(formattedInput);
    } 
  };



  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
  };
  
  const isEmailValid = () => {
    return email.includes('@');
  };

  
  // Disable the button if email is invalid
  const isButtonDisabled = !isEmailValid();

 
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
            Sign Up
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
            <div className="relative mb-3 mt-3">
    <input
      type="email"
      value={email}
      onChange={handleEmailChange}
      className={`peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary ${
        !isEmailValid() && 'border-red-500'
      }`}
      id="floatingInput"
      placeholder=" "
      required
    />
    <label
      htmlFor="floatingInput"
      className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue dark:peer-focus:text-primary"
    >
      Email Address
    </label>
    {!isEmailValid() && (
      <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
    )}
  </div>
            <div className="relative mb-3">
              <input
                type="tel"
                defaultValue={phone}
                onChange={handlePhoneChange}
                
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
                pattern='[0-9]{10}'
                required

                

              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                Mobile Number{" "}
              </label>
            </div>

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

            <div className="relative mb-3">
              <input
                type="password"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                Password{" "}
              </label>
            </div>
           
            <div className="relative mb-3">
              <input
                type="password"
                defaultValue={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}

                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                Confirm password{" "}
              </label>

              
            </div>

            <br />
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>


{/* password checklist */}
            <PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={8}
				value={password}
				valueAgain={confirmPassword}
				
			/>
 

            </div>

            <br />
            <input type="file" className="file-input file-input-xs file-input-bordered file-input-error w-[90%]" onChange={handleChange} />   
            

            <br />
            <br />
            <div>

            
            
              <button 
              onClick={(e)=>{
                
                if(password == confirmPassword){
                    handleUpload(e)


                }else{
                    alert("Password does not match")
                }
              }} className="btn btn-fill btn-warning w-full text-white text-xl tracking-widest " 
              disabled={isButtonDisabled} >
                Sign Up
              </button>
            </div>

        
            <span>
              Already have an account ?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Login
              </a>
            </span>
          
          <div className="my-4 flex w-full items-center">
            <hr className="w-full" />
            <p className="px-3">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
           



          <button
    class="flex w-full items-center justify-center space-x-4 rounded-md border p-2 focus:ring-2 focus:ring-gray-400 focus:ring-offset-1">
    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
    <span>Login with Google</span>
</button>


            <button
              aria-label="Login with GitHub"
              role="button"
              className="flex w-full items-center justify-center space-x-0 rounded-md border p-2 focus:ring-2 focus:ring-gray-400 focus:ring-offset-1"
            >
             <img class="w-6 h-6" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/768px-2021_Facebook_icon.svg.png?20220821121039" loading="lazy" alt="google logo" />
              <p>&nbsp;&nbsp;Login with Facebook</p>
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
























































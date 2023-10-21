import React, { useState } from "react";
import styles from '../../components/Template/Background.module.scss'
import Logo from '../../components/Template/Pictures/Logo.png'
import Footer from '../../components/common/footer'
import storage from "../../Apis/firebase.config";
import { ref } from "firebase/storage";
import {
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
import axios from "axios";

export default function BuildRequestForm() {  
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [percent, setPercent] = useState(0);
  const [file,setFile] = useState(null)




  function handleUpload() {
    
    if (!file) {
      alert("Please choose a file first!")
    }
    const storageRef = ref(storage, `/offerDocument/${file.name}`)
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
            axios.post("http://localhost:5000/customOrder",{
              description : description,
              budget : budget,
              documentLink : url
            }).then((response)=>{
              console.log(response)
            }
            ).catch((err)=>{
              console.log(err)
            }
            )
        });
      }
    ) 
  }
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  return (
    <div className="">
 <div className={styles.TopSection}> 

              
<div className={styles.HeadingRow}>
  
  <div className={styles.LogoIcon}>
    <img src={Logo} style={{width:100,height:100}} alt='Logo'/>
  </div>   
</div> 

</div> 



      <div className="relative flex flex-col justify-center overflow-hidden p-10 m-10">
        <div className="m-auto h-fit w-2/3 rounded-md bg-white p-6 shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
          <h1 className="text-center text-3xl font-semibold text-gray-700 mb-5">
            Orders
          </h1>
               
            <div className="relative mb-3">
              <input
                defaultValue={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
               Description
              </label>
            </div>
  <br />
            <div className="relative mb-3">
              <input
                defaultValue={budget}
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-basicBlue  dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue  dark:peer-focus:text-primary"
              >
                Budget
              </label>
            </div>

            <br />

            <div className="relative mb-3 mt-3">
              <input
                type="file"
                onChange={handleChange}
                className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
                placeholder=" "
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-basicBlue dark:peer-focus:text-primary"
              >
                Document:
              </label>
            </div>

            <br />
            <div>
              <button 
              
              onClick={(e)=>handleUpload()} className="btn btn-fill btn-warning w-full text-white text-xl tracking-widest ">
                Custom Request
              </button>
            </div>
         
          
      
        </div>
        
      </div>
      <footer className='w-full bottom-0 z-50'><Footer/></footer>
    </div>
  )

  }


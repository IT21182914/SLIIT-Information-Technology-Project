import React from 'react'
import { useState } from "react";
import storage from '../../Apis/firebase.config.js'
import axios from "axios";
import { ref } from "firebase/storage";
import {
    uploadBytesResumable,
    getDownloadURL
  } from "firebase/storage";
import { Navigate,useNavigate } from 'react-router-dom';

// add a new equipment function
export default function AddEquipmentForms(onAddEquipment) {

    const [percent, setPercent] = useState(0);
    const [file, setFile] = useState("");
    const navigate = useNavigate();
  
    function handleChange(event) {
      setFile(event.target.files[0]);
    }

    const [equipmentId, setEqId] = useState("");
    const [imageLink, setImgLink] = useState("");
    const [name, seteqName] = useState("");
    const [value, seteqValue] = useState(0);
    const [description, seteqDescription] = useState("");
    const [qty, seteqQty] = useState(0);

//   const navigate = useNavigate()

  function sendData(e){
    e.preventDefault();

    const newEquipment={
        equipmentId,
        imageLink,
        name,
        value,
        description,
        qty
    }

    // axios.post(`http://localhost:5000/equipment/add`,newEquipment).then((err)=>{
    //     alert("Equipment Successfully Added ")
    //     console.log(err);
    // }).catch((err)=>{
    //     alert("Insert Fail");
    //     console.log(err);
    // })

}

//upload image to firbase

function handleUpload() {
    if (!file) {
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
          axios.post("http://localhost:5000/equipment/add",{
            equipmentId: equipmentId,
            imageLink:url,
            name:name,
            value:value,
            description:description,
            qty:qty
          }).then((res)=>{
            console.log(res)
            navigate("/admin/Equipment")
          }).catch((err)=>{
            console.log(err)
          })
          
        });
      }
    ); 
  }

  // function handleChange(event){
  //   setFile(event.target.file[0]);
  // }
  
  function handleChange(event) {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  }



  return (
    <form onSubmit={sendData} className=" w-[600px] h-[800px]">
        
    <div className="mb-4">
      <label htmlFor="equipmentId" className="block font-bold mb-2">
        Equipment ID
      </label>
      <input type="text" onChange={(e)=>{
                    setEqId(e.target.value);

                }}
                className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary  "
                id="equipmentId"
                name='equipmentId'
                required
                placeholder=" "
        />
    </div>


    <div className="mb-4">
    <label htmlFor="imageLink" className="block font-bold mb-2">
        Upload Image
    </label>

    <input type="file" onChange={ handleChange

                } accept="" className="file-input file-input-bordered file-input-warning w-full max-w-xs" /> <br /><br />


    {/* <a
        // role="button"
        className="inline-block bg-blue-500 text-white rounded py-2 px-4 cursor-pointer max-w-xs"
        id="imageLink"
        name="imageLink"
        onClick={handleUpload} 
        required
    >
        Upload Image
    </a> */}

</div>




    

    <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-2">
            Name
        </label>


        <input
        type="text" onChange={(e)=>{
            seteqName(e.target.value);

        }}
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="name"
            name='name'
            required
            placeholder=" "
        /> 
    </div>

    <div className="mb-4">
        <label htmlFor="value" className="block font-bold mb-2">
            Value
        </label>


        <input
            onChange={(e)=>{
                seteqValue(e.target.value);

        }}

            type="text"

            onKeyPress={(e) => {
              if (!/\d|\./.test(e.key)) {
                e.preventDefault();
              }
            }}

            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="value"
            name='value'
            required
            placeholder=" "
        />
    </div>

    <div className="mb-4">
        <label htmlFor="description" className="block font-bold mb-2">
            Description
        </label>

        <textarea

            type="text" onChange={(e)=>{
                seteqDescription(e.target.value);

            }}
            className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
            id="description"
            name='description'

            required
            placeholder=" "
        />
    </div>

    <div className="mb-4">
        <label htmlFor="qty" className="block font-bold mb-2">
            Quantity
        </label>

        <input

                onChange={(e)=>{
                    seteqQty(e.target.value);

                }}
                onKeyPress={(e) => {
                  if (!/\d/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                type="number"
                className="peer m-0 block h-[38px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary  focus:text-black focus:outline-none peer-focus:text-primary dark:border-basicBlue dark:text-neutral-500 dark:focus:border-primary dark:peer-focus:text-primary "
                id="qty"
                name='qty'
                required
                placeholder=" "
        />
      </div>

      <div style={{width:"35%",textAlign:"center",margin:"auto auto"}} class="input-group mb-5">
      <div className="flex items-center justify-between">
        <button 
          type="submit" onClick={handleUpload} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Equipment
        </button>
      </div>
      </div>
    </form>
  );

  
}

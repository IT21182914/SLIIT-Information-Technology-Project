import React from 'react'
import styles from "../../components/Template/Background.module.scss";
import Logo from "../../components/Template/Pictures/Logo.png";
import Footer from "../../components/common/footer";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { adminContext } from '../../user/adminContext'

import storage from '../../Apis/firebase.config'
import { ref } from "firebase/storage";
import {
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";

function convertStringToInt(str) {
  const convertedValue = parseInt(str, 10);
  return isNaN(convertedValue) ? 42 : convertedValue;
}


function PlaceOrder() {
  const product = useLocation().state.data
  const [file, setFile] = useState(null);
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price); 
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();

  function convertStringToInt(str) {
    const convertedValue = parseInt(str, 10);
    return isNaN(convertedValue) ? 42 : convertedValue;
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!file){
      alert("Please choose a file first!")
    }else if(window.confirm("Are you sure you want to place this order?")){
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
            axios.post("http://localhost:5000/order",{
            payment : product.price,
            profit : product.price - product.cost,
            type : "home",
            description : product.description,
            estDays : convertStringToInt(product.duration),
            documentLink : url,
            note : "none"
          }).then((res)=>{
              console.log(res)
              navigate("/")
          }).catch((err)=>{
              console.log(err)
          })
  
          });
        }
      ) 
      
    }

  }
  return (
    <div className="h-[110vh] relative">
      <div className="block max-xmd:w-928 h-96">
        {/* Top section of background */}
        <div className={styles.TopSection}>
          <div className={styles.HeadingRow}>
            <div className={styles.LogoIcon}>
              <img src={Logo} style={{ width: 100, height: 100 }} alt="Logo" />
            </div>
          </div>

          {/* Make contents inside here */}

          <div className="flex justify-center items-center p-10">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 ">Build Your Dream Home</h1>
        <form
          onSubmit={(e)=>handleSubmit(e)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 lg:mb-0 lg:mr-4 flex-shrink-0">
            <div className="w-40 h-40 rounded-lg bg-gray-200 flex  justify-center">
              
                <img
                  src={product.homeImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              
            </div>
            <label
              htmlFor="photo"
              className="block mt-2 cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-600"
            >
              Add Document
            </label>

            <input  type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" onChange={(event) => setFile(event.target.files[0])} />
           
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="textfield"
              name="Description"
              defaultValue={name}
              disabled
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter name of item"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              disabled
              defaultValue={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Enter price of item"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>

          {/* This is bottom of Background */}
        </div>
      </div>
      <footer className="w-full mt-5  absolute  bottom-0 -z-50">
        <Footer />
      </footer>
    </div>
  )
}

export default PlaceOrder

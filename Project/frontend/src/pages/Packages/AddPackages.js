import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import storage from "../../Apis/firebase.config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AddNewPackage = () => {
  const [packageName, setPackageName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState("");
  const [homeImage, setHomeImage] = useState(
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  );
  const [modelLink, setModelLink] = useState("model link");
  const [planImage, setPlanImage] = useState("plan image");
  const [percent, setPercent] = useState(0);
  const [file, setFile] = useState();

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/admin/Package");
  };

  const [error, seterror] = useState(false);

  const onSubmit = async (e) => {

    e.preventDefault();
    if (cost > price) {
      seterror(true);
      return;
    } else {
      seterror(false);
    }

    

    if (!homeImage) {
      alert("Please choose a file first!");

      
      return;
    }

    // const storageRef = ref(storage, `/packages/${file.name}`);
    // const uploadTask = uploadBytesResumable(storageRef, file);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const percent = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     setPercent(percent);
    //   },
    //   (err) => console.log(err),
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //       setHomeImage(url);
    //       console.log(url);
    //       axios
    //         .post("http://localhost:5000/packages/addpackage", {
    //           name: packageName,
    //           price: price,
    //           description: description,
    //           duration: duration,
    //           homeImage: homeImage,
    //           modelLink: modelLink,
    //           cost: cost,
    //           planImage: planImage,
    //         })
    //         .then((res) => {
    //           console.log(res);
    //           goBack();
    //         });
    //     });
    //   }
    // );

    await axios
      .post("http://localhost:5000/packages/addpackage", {
        name: packageName,
        price: price,
        description: description,
        duration: duration,
        homeImage: homeImage,
        modelLink: modelLink,
        cost: cost,
        planImage: planImage,
      })
      .then((res) => {
        console.log(res);
        goBack();
      });
  };

  // image upload to firebase storage as in previous function
  const onUpload = async (e) => {
    const file = e.target.files[0];

    if (file === null) {
      return;
    }
    const storageRef = ref(storage, `/packages/${file.name}`);
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
          setHomeImage(url);
          console.log(url);
        });
      }
    );
  };

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div>
      <div>
        <div className="absolute bg-black h-screen bg-cover bg-blend-overlay bg-opacity-50" />
        <div className="m-auto  bg-white  p-2 text-black">
          <div className="mx-32 border-b-2 border-gray-400 mt-4">
            <div className="flex justify-start ">
              {/* <div className="font-semibold text-2xl">Cook Dashboard</div> */}
            </div>
            <div className="flex space-x-2 mt-6 mb-2">
              <div className="flex justify-start mx-10">
                <div className="text-xl font-semibold ">
                  Enter package details
                </div>
              </div>
            </div>
          </div>

          {/* body of the card */}
          <div className="flex w-full py-2 border">
            <div className="w-1/2 flex-col justify-center items-center">
              {/* img */}

              {homeImage.length > 0 ? (
                <img
                  className="h-40 w-40 object-cover m-[20%]"
                  alt={homeImage}
                  src={homeImage}
                />
              ) : (
                <img
                  className="h-40 w-40 object-cover m-[20%]"
                  alt="addons img"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              )}

              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-[75%] max-w-xs ml-10"
                onChange={(e) => onUpload(e)}
              />
            </div>
            <div className=" w-1/2 flex justify-start">
              {/* form */}
              <div>
                <div className="w-full">
                  <div className="mt-0">Package Name</div>
                  <input
                    defaultValue={packageName}
                    type="text"
                    placeholder=""
                    name="dishname"
                    id="dishname"
                    className="p-1 bg-gray-300 w-full text-black"
                    onChange={(e) => {
                      setPackageName(e.target.value);
                    }}
                  />
                  <div className="mt-4">Price</div>
                  <input
                    defaultValue={price}
                    type="number"
                    placeholder="LKR"
                    name="menu"
                    id="menu"
                    className="p-1 bg-gray-300 w-full text-black"
                    onChange={(e) => {
                      setPrice(parseFloat(e.target.value));
                    }}
                  />
                  <div className="mt-4">Description</div>
                  <input
                    defaultValue={description}
                    type="text"
                    placeholder=""
                    name="description"
                    id="description"
                    className="p-1 h-24 bg-gray-300 w-full text-black"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                  <div className="mt-4">Duration</div>
                  <input
                    defaultValue={duration}
                    type="textarea"
                    placeholder=""
                    name="duration"
                    id="duration"
                    className="p-1 bg-gray-300 w-full text-black"
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  />
                  <div className="mt-4">Cost</div>
                  <input
                    defaultValue={cost}
                    type="number"
                    placeholder="LKR"
                    name="cost"
                    id="cost"
                    className="p-1 bg-gray-300 w-full text-black"
                    onChange={(e) => {
                      setCost(parseFloat(e.target.value));
                    }}
                  />
                  {error ? (
                    <label className="mt-4 text-red-600">
                      Cost must be lower than package price!
                    </label>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className="bg-purple-500 text-white p-1 px-3 rounded-md text-sm mt-6"
                  // onClick={(e) => {
                  //   console.log(
                  //     packageName,
                  //     price,
                  //     description,
                  //     duration,
                  //     cost
                  //   );
                  //   axios
                  //     .post("http://localhost:5000/packages/addpackage", {
                  //       name: packageName,
                  //       price: price,
                  //       description: description,
                  //       duration: duration,
                  //       homeImage: homeImage,
                  //       modelLink: modelLink,
                  //       cost: cost,
                  //       planImage: planImage,
                  //     })
                  //     .then((res) => {
                  //       console.log(res);
                  //       goBack();
                  //     });
                  // }}

                  onClick={onSubmit}
                >
                  + Add new Package
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPackage;

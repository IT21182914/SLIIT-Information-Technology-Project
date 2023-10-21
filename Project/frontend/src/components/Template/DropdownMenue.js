import React, {Fragment,useContext,useEffect,useState } from 'react'
import { Menu, Transition } from "@headlessui/react";
import { adminContext } from '../../user/adminContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Menue(props) {
  const navigate = useNavigate();
  const{admin,setAdmin} = useContext(adminContext) 
  const [user, setUser] = useState({
    name: "No user",
    userImg:
      "https://www.w3schools.com/howto/img_avatar.png",
  });
  
  const noUser = [
    "noUser",
    { name: "Login", path: "/login" },
    {name : "Register", path: "/customerRegistration"}
  ]
  const adminUser = [
    "adminUser",
    { name: "Dashboard", path: "/admin" },
    { name: "Login", path: "/admin/request" },
  ]
  const customer = [
    "customer",
    {name : "My orders", path: "/orders"},
    {name : "My custom requests", path: "/customRequests"},
    { name: "Login", path: "/admin/request" },
    {name  : "Update profile", path: "CustomerEdit"}
  ]
  const profileDropdown1 = [
    "profileDropdown1",
    { name: "My profile", path: "#" },
    { name: "Request Access", path: "#22s" },   
    { name: "Logout", path: "#" },
  ];
 // eslint-disable-next-line
  const [profileDropdown, setProfileDropdown] = useState(noUser);
  

  // useEffect(() => {
  //   //alert("wada wada")
  
  //   if(admin != null){
  //     if(admin.type == "admin"){
  //     setProfileDropdown(adminUser)
  //     if(user.name === "No user"){
  //       setUser({
  //         name: admin.firstName + " " + admin.lastName,
  //         userImg: admin.image,
  //       })
  //     }
      
      
  //   }else if(admin.type == "customer"){
  //     setProfileDropdown(customer)
  //     if(user.name === "No user"){
  //       setUser({
  //         name: admin.firstName + " " + admin.lastName,
  //         userImg: admin.image,
  //       })
  //     }
      
  //   }}

  // }, [profileDropdown])


  if(admin == null && profileDropdown[0] !== "noUser"){
    setProfileDropdown(noUser)
       
    axios.get("http://localhost:5000/admin").then((res)=>{
    if(res.data._id !== null){
      setAdmin(res.data);
    }else{
      setProfileDropdown(noUser)
    }    
  })
  }else if(admin?.type == "admin"&&profileDropdown[0] !== "adminUser"){
    setProfileDropdown(adminUser)
    if(user.name === "No user"){
      setUser({
        name: admin.firstName + " " + admin.lastName,
        userImg:
          admin.image,
      })
    }
  }else if( admin?.type == "customer"&&profileDropdown[0] !== "customer"){
    setProfileDropdown(customer)
    if(user.name === "No user"){
      setUser({
        name: admin.firstName + " " + admin.lastName,
        userImg:
          admin.image,
      })
    }
  }

  


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
 // eslint-disable-next-line
  

  return (
    
    <div>
         <Menu as="div" className=" relative ml-3">
          <div>
            <Menu.Button className=" flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 float-right">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={user.userImg}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="text-left text-sm absolute top-14 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-blue-950 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/user"
                    className={
                      "block px-4 py-2 text-sm text-gray-100"
                    }
                  >
                    <div className="flex  items-center space-x-2">
                      <img
                        className="h-9 w-9 rounded-full object-cover"
                        src={user.userImg}
                        alt="userImage"
                      />
                      <div>{user.name}</div>
                    </div>
                  </a>
                )}
              </Menu.Item>
              <div className="border border-b-0 border-gray-400"/>

              {profileDropdown.map((item, idx) => {
                return (
                  <Menu.Item key={item.name+(idx++)}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          navigate(item.path);
                        }}
                        className={classNames(
                          active ? "bg-blue-900" : "",
                          "block px-4 py-2 text-sm text-gray-100"
                        )}
                      >
                        {item.name}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}

            </Menu.Items>
          </Transition>
        </Menu>
    </div>
  )
}

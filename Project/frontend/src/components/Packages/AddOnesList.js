import React from 'react'
import { Link } from 'react-router-dom'

function AddOnesList() {
  return (
    <div className='w-[100%]'>
      {/* <div className="grid place-items-center h-20 ">
      <h1 className="font-bold text-lg text-purple-800">Add-Ons List </h1>
    </div> */}
      <div className="overflow-x-auto w-full ">
      
  <table className="table table-zebra w-full">    
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
     
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel an
        </td>
        <td>1452 LKR</td>
        <th>
          <Link to={"updateAddons"} >
          <button className="btn btn-warning btn-xs text-white">Edit</button>
          </Link>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
     
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>1452 LKR</td>
        <th>
          <button className="btn btn-warning btn-xs text-white">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
       <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
     
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>1452 LKR</td>
        <th>
          <button className="btn btn-warning btn-xs text-white">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
     
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>1452 LKR</td>
        <th>
          <button className="btn btn-warning btn-xs text-white">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
     
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>1452 LKR</td>
        <th>
          <button className="btn btn-warning btn-xs text-white">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
     
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
        </td>
        <td>1452 LKR</td>
        <th>
          <button className="btn btn-warning btn-xs text-white">Edit</button>
          <button className="btn btn-error btn-xs">Delete</button>
        </th>
      </tr>
    </tbody>    
  </table>
</div>
    </div>
  )
}

export default AddOnesList

import React from "react";

const AddOnesCard = ({
  imageSrc,
  title,
  description,
  price,
  isChecked,
  onChange,
}) => {
  return (
    <div className="max-w-3xl rounded-lg bg-white p-4 shadow-md my-5">
      <div className="flex">
        <div className="mr-24 flex">
          <img
            className="mr-4 h-28 w-28"
            src="https://images.unsplash.com/photo-1587061633437-187ac80e8e7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Add ones product"
          />
          <div>
            <p className="text-2xl font-medium text-black">
              This is the tittle
            </p>
            <p className="w-96 py-2 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              delectus molestias recusandae a rerum veniam distinctio
              perferendis, animi inventore nostrum magnam aliquid beatae facere,
              ab exercitationem nobis maxime amet repudiandae?
            </p>
          </div>
        </div>
        <div className="flex space-x-52">
          <div className="my-14">
            <p className="text-end font-bold text-black">254,756,444 LKR</p>
            <div className="form-control">
              <label className="label cursor-pointer bg-yellow-500 rounded-lg">
                <span className="label-text text-white font-bold">Add</span>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOnesCard;

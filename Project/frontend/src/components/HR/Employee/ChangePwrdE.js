
import React, { useState } from 'react'

export default function ChangePwrdE() {
    const [password, setPassword] = useState('')
    return (

        <div className='flex w-full h-[73vh] justify-center fixed z-[50] top-[8rem] items-center'>

            <div className="w-96 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg bg-white h-[400px] flex flex-col items-center p-[40px]">

                <div className="font-bold text-[30px] text-black" >Sign in

                    <div class="my-3">
                        <input
                            defaultValue={password}
                            type="password"
                            class="m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-800 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-800 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                            id="floatingInput"
                            placeholder="    "
                            onChange={(e) => { setPassword(e.target.value) }} />
                        <label
                            for="floatingInput"
                            class="pointer-events-none origin-[0_0] border border-solid border-transparent px-3 py-4 text-primary transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                        >Password</label>
                    </div>

                    <span className="cursor-pointer w-[90%] text-primary-color">Create account</span>
                    <div className="w-[90%] flex flex-col items-end mt-5">

                        <button className="w-[100px] h-[40px] text-white font-bold rounded-md bg-primary-color" onClick={(e) => {  }}>Login</button>

                    </div>
                </div>
            </div>
        </div>


    )
}

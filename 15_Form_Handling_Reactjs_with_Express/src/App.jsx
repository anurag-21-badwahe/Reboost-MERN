import { useState } from 'react'
import { useForm} from "react-hook-form"

import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  const delay = ((d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000)
    })
  })
  const onSubmit = async(data) => {
    await delay(2)
    console.log(data)
  }

  return (
    <>
    {isSubmitting && <div className='black'>Loading.......</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input 
            type="text" 
            placeholder='username' 
            {...register("username",{ 
              required: true, 
              minLength: 3, 
              maxLength: 25 
            })}
            name="username" 
            id=""
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && <div className='red'> This is some error with name</div>}
          <input 
            type="password" 
            placeholder='password' 
            {...register("password", { 
              required: true, 
              minLength: 5, 
              maxLength: 20 
            })} 
            name="password" 
            id="" 
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <div className='red'> This is some error with password</div>}

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App

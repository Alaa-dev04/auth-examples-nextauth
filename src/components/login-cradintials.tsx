"use client";
import useLogin from "../hooks/useLogin"
const LoginCredentials = () => {
  const {form,onSubmit}= useLogin();
  return (
    <div>
        <form className="flex flex-col items-center m-5 border-2 p-6" onSubmit={form.handleSubmit(onSubmit)}>
            <label htmlFor="email">email address</label>
            <input id="email"  type="text" className="bg-white text-black" 
            {...form.register("email")}/>
            <label htmlFor="password">password</label>
            <input id="password"  {...form.register("password")} type="password" className="bg-white text-black "/>
            <button type="submit" className="m-4 bg-blue-500 w-full">sing in with credintials </button>
        </form>
      
    </div>
  )
}

export default LoginCredentials


const LoginCredentials = () => {
  return (
    <div>
        <form className="flex flex-col items-center m-5 border-2 p-6">
            <label htmlFor="email">email address</label>
            <input id="email" name="email" type="text" className="bg-white text-black" />
            <label htmlFor="password">password</label>
            <input id="password" name="password" type="password" className="bg-white text-black "/>
            <button type="submit" className="m-4 bg-blue-500 w-full">sing in with credintials </button>
        </form>
      
    </div>
  )
}

export default LoginCredentials

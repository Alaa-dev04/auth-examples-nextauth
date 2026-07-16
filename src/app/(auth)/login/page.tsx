import Logingoogle_github from "@/src/components-pages/logingoogle_github"
import LoginCredentials from "@/src/components-pages/login-cradintials"
const Login = () => {
  return (
    <div className=" flex flex-col  ">
            <h1 className="text-3xl">hello lets sign in </h1>
            <Logingoogle_github/>
            <LoginCredentials/>
    </div>
  )
}

export default Login

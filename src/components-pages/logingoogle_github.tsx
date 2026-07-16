
import { doSocialLogin } from "../app/actions"

const Logingoogle_github = () => {
  return (
    <div>
       <form action={doSocialLogin}>
        <button type="submit" className='bg-pink-200  text-black my-6 w-full' name='action' value="google" >
            sing in with google 
        </button>
        <button type="submit" className='bg-white text-black w-full ' name='action' value="github" >
            sing in with github
        </button>
       </form>
    </div>
  )
}

export default Logingoogle_github

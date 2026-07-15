"use server";
import { signIn ,signOut } from "@/src/auth";
export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
  console.log(action);
}
export async function doLogout() {
    await signOut({redirectTo :"/login"})
}

export async function doLoginCradintials (formData : any){
  try {
    const response = await signIn("credentials",{
      email : formData.get('email'),
      password : formData.get('password'),
      redirect:false, 
      // i dont wanna it to redirect me if there an error right 
    });
    return response;
  }catch(err){
    throw err;
  }
}
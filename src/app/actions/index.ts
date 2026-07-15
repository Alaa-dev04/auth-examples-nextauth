"use server";
import { signIn ,signOut } from "@/src/auth";
import { AuthError } from "next-auth";
export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
  console.log(action);
}
export async function doLogout() {
    await signOut({redirectTo :"/login"})
}

export async function doLoginCradintials(formData: FormData) {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return {
          success: false,
          error: "Invalid email or password",
        };
      }
    }

    throw error;
  }
}

"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginType } from "@/src/zod/login-schema";
import { doLoginCradintials } from "../app/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useLogin = () => {
  const router = useRouter();
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: LoginType) => {
    const formdata = new FormData();
    formdata.append("email", data.email);
    formdata.append("password", data.password);
    const responce = await doLoginCradintials(formdata);
    if (responce?.error) {
      console.log(responce.error);
      toast.error("invalied email or password ");
      return;
    }
    form.reset();
    router.push("/home");

    toast.success("welcome back !");
  };
  return {
    form,
    onSubmit,
  };
};

export default useLogin;

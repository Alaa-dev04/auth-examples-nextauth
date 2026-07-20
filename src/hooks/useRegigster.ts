"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RejisterSchema, RejisterSchemaType } from "@/src/zod/register-schema";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
const useRegister = () => {
  const route = useRouter();
  const form = useForm<RejisterSchemaType>({
    resolver: zodResolver(RejisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const registerMutation = useMutation({
    mutationFn: async (data: RejisterSchemaType) => {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("Registration failed");
      }
      return res.json();
    },
    onSuccess: () => {
      route.push("/login");
      toast.success("user created sucefully ");
    },
    onError(error) {
      toast.error("someting went wring please try again ");
    },
  });
  const onSubmit = (data: RejisterSchemaType) => {
    registerMutation.mutate(data);
  };
  return {
    form,
    onSubmit,
    isPending: registerMutation.isPending,
    error: registerMutation.error,
  };
};
export default useRegister;

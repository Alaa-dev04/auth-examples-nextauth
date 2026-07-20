"use client";
import React from "react";
import useRegister from "../hooks/useRegigster";

const RegesterForm = () => {
  const { form, onSubmit, isPending } = useRegister();
  return (
    <div>
      <h1>create an account </h1>
      <form
        className="flex flex-col items-center m-5 border-2 p-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <label htmlFor="name">user_name</label>
        <input
          id="name"
          type="text"
          className="bg-white text-black"
          {...form.register("name")}
        />
      
        <label htmlFor="email">email address</label>
        <input
          id="email"
          type="text"
          className="bg-white text-black"
          {...form.register("email")}
        />
        <label htmlFor="password">password</label>
        <input
          id="password"
          {...form.register("password")}
          type="password"
          className="bg-white text-black "
        />
        <button type="submit" className="m-4 bg-blue-500 w-full">
          {isPending ? "creating ...":"reister"}
        </button>
      </form>
    </div>
  );
};

export default RegesterForm;

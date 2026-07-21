import React from "react";
import { CircleUser } from "lucide-react";
import { doLogout } from "../app/actions";

const Navbar = () => {
  return (
    <div className="bg-black w-full text-white flex justify-between p-2 m-2">
      <h1 className="text-2xl">PRODUCT APP</h1>
      <div className="flex gap-2 items-center">
        <CircleUser />|
        <span>
          <form action={doLogout}>
            <button type="submit" className="cursor-pointer">LOGOUT</button>
          </form>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

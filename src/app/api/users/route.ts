import { NextResponse } from "next/server";
import { createUser } from "@/src/queries/users";
import bcrypt from "bcryptjs";
import { dbconnect } from "@/src/lib/mongodb";
const POST = async (request: any) => {
  const { name, email, password } = await request.json();
  console.log(name, email, password);
  ///create a db connection
  await dbconnect();
  ///encrupting the password
  const handelpassword = await bcrypt.hash(password, 5); //5 salt value
  //form db payload
  const newUser = { name, email, password: handelpassword };
  //updata the data base
  try {
    await createUser(newUser);
  } catch (err) {
    return new NextResponse("Error creating user", {
      status: 500,
    });
  }

  return new NextResponse("user has been created succefully", {
    status: 201,
  });
};

export default POST;

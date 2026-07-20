import { NextResponse } from "next/server";
import { createUser } from "@/src/queries/users";
import bcrypt from "bcryptjs";
import { dbconnect } from "@/src/lib/mongodb";

// Handle POST request to /api/register
export async function POST(request: Request) {
  // Get data from the request body
  const { name, email, password } = await request.json();

  console.log(name, email, password);

  // Create a database connection
  await dbconnect();

  // Encrypt (hash) the password
  const hashedPassword = await bcrypt.hash(password, 5);

  // Form the database payload
  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  // Update the database (create a new user)
  try {
    await createUser(newUser);
  } catch (err) {
    console.error("Create user error:", err);

    return NextResponse.json(
      {
        message: "Error creating user",
        error: err instanceof Error ? err.message : String(err),
      },
      {
        status: 500,
      }
    );
  }

  // Return success response
  return NextResponse.json(
    {
      message: "User has been created successfully",
    },
    {
      status: 201,
    }
  );
}
import request from "http";
import connection from "../../../../dbConnection/dbConnection";
import User from "../../../../models/loginModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

//bcryptjs is used to hash a password because no one stores passwords in strings

//each time when we want to work with db we have to connect it first. It doesn't like backend(node) that we have to connect only once.
export async function POST(request) {
  try {
    const { username, email, password } = await request.json();
    const hashedPassword = await bcryptjs.hash(password, 10);
    await connection();
    await User.create({ email, username, password: hashedPassword });
    return NextResponse.json(
      { message: "User signed up successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

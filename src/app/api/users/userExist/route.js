import connection from "../../../../dbConnection/dbConnection";
import User from "../../../../models/loginModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connection();
    const { email } = await request.json();
    const user = await User.findOne({ email }).select("_id");
    console.log(user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

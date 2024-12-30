import connection from "../../../../../dbConnection/dbConnection";
import Thread from "../../../../../models/threadModel";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";
export async function POST(request) {
  try {
    await getSession(request);
    const { title, desc, topic, ownerEmail } = await request.json();

    await connection();
    console.log(title, desc, topic, ownerEmail);

    const newThread = await Thread.create({ title, desc, topic, ownerEmail });

    return NextResponse.json(
      { message: "Thread Created Successfully", data: newThread },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating thread:", error);
    return NextResponse.json(
      { error: "Failed to create thread. Please try again." },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    await connection();

    const threads = await Thread.find();

    return NextResponse.json({ threads });
  } catch (error) {
    console.error("Error fetching threads:", error);
    return NextResponse.json(
      { error: "Failed to fetch threads." },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const id = req.url.split("/").pop();

    const { title, desc, topic } = await req.json();

    const updatedThread = await Thread.findByIdAndUpdate(
      id,
      { title, desc, topic },
      { new: true }
    );

    if (!updatedThread) {
      return NextResponse.json({ error: "Thread not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Thread updated successfully", thread: updatedThread },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating thread:", error);
    return NextResponse.json(
      { error: "Failed to update thread" },
      { status: 500 }
    );
  }
}
export async function DELETE(req) {
  try {
    const id = req.url.split("/").pop();

    const deletedThread = await Thread.findByIdAndDelete(id);
    if (!deletedThread) {
      return NextResponse.json({ error: "Thread not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Thread deleted successfully", thread: deletedThread },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting thread:", error);
    return NextResponse.json(
      { error: "Failed to delete thread" },
      { status: 500 }
    );
  }
}

// import express from 'express'
import connection from "../../../../../dbConnection/dbConnection";
import Thread from "../../../../../models/threadModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, desc, topic } = await request.json();

    // Connect to MongoDB
    await connection();

    // Create thread in database
    const newThread = await Thread.create({ title, description: desc, topic });

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
    await connection(); // Ensure MongoDB connection

    // Fetch all threads from MongoDB
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
// Adjust this import path as needed

export async function PUT(req) {
  try {
    // Extract the ID from the URL
    const id = req.url.split("/").pop();

    // Parse the request body
    const { title, desc, topic } = await req.json();

    // Find and update the thread
    const updatedThread = await Thread.findByIdAndUpdate(
      id,
      { title, description: desc, topic },
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
    // Extract the ID from the URL
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

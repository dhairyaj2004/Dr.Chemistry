// import express from 'express'
import connection from "../../../../dbConnection/dbConnection";
import Thread from "../../../../models/threadModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, desc, topic } = await request.json();
    
    // Connect to MongoDB
    await connection();

    // Create thread in database
    const newThread = await Thread.create({ title, description: desc, topic });
    
    return NextResponse.json({ message: 'Thread Created Successfully', data: newThread }, { status: 201 });
  } catch (error) {
    console.error('Error creating thread:', error);
    return NextResponse.json({ error: 'Failed to create thread. Please try again.' }, { status: 500 });
  }
}
export async function GET(request) {
    try {
      await connection(); // Ensure MongoDB connection
  
      // Fetch all threads from MongoDB
      const threads = await Thread.find();
  
      return NextResponse.json({ threads });
    } catch (error) {
      console.error('Error fetching threads:', error);
      return NextResponse.json({ error: 'Failed to fetch threads.' }, { status: 500 });
    }
  }
//   export async function DELETE(request) {
//     try {
//       await connection(); // Ensure MongoDB connection
  
//       // Fetch all threads from MongoDB
//       const threads = await Thread.findByIdAndDelete(req.params.id);
  
//       return NextResponse.json({ threads });
//     } catch (error) {
//       console.error('Error fetching threads:', error);
//       return NextResponse.json({ error: 'Failed to fetch threads.' }, { status: 500 });
//     }
//   }
// app.delete('/api/threads/:id', async (req, res) => {
//     try {
//       await connection(); // Ensure MongoDB connection
  
//       // Delete thread by ID
//       const deletedThread = await Thread.findByIdAndDelete(req.params.id);
  
//       if (!deletedThread) {
//         return res.status(404).json({ error: 'Thread not found.' });
//       }
  
//       // Optional: Return a success message or the deleted thread
//       res.json({ message: 'Thread deleted successfully.', deletedThread });
//     } catch (error) {
//       console.error('Error deleting thread:', error);
//       res.status(500).json({ error: 'Failed to delete thread.' });
//     }
//   });
// const router=express.router()
// router.delete('/threads/:id', isAuthor, async(req,res)=>{
//     try {
//         const {id}=req.params.id
//         const thread=await Thread.findByIdAndDelete(id)
//         if (!thread) {
//             return res.status(404).json({ message: 'Thread not found' });
//           }
//         res.json({message:'Thread Deleted Successfully'})
//         } catch (error) {
//             console.error('Error deleting thread:', error);
//         }
// })
// router.put('/threads/:id', isAuthor, async(req,res)=>{
//     try {
        
//         const thread=await Thread.findByIdAndUpdate(req.params.id, req.body)
//         if (!thread) {
//             return res.status(404).json({ message: 'Thread not found' });
//             }
//             res.json({message:'Thread Updated Successfully',data:thread})
//             } catch (error) {
//                 console.error('Error updating thread:', error);
//                 }
// })
// module.exports = router;
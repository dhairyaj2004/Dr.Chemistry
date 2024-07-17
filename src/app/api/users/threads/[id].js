import connection from "../../../../../dbConnection/dbConnection";
import Thread from "../../../../../models/threadModel";

export default async function handler(req, res) {
  const { id } = req.query;

  await connection();
  debugger;
  if (req.method === 'GET') {
    try {
      const thread = await Thread.findById(id);
      if (!thread) {
        return res.status(404).json({ error: 'Thread not found' });
      }
      return res.status(200).json({ thread });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch thread' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { title, desc, topic } = req.body;
      const updatedThread = await Thread.findByIdAndUpdate(
        id,
        { title, description: desc, topic },
        { new: true }
      );
      if (!updatedThread) {
        return res.status(404).json({ error: 'Thread not found' });
      }
      return res.status(200).json({ message: 'Thread updated successfully', thread: updatedThread });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update thread' });
    }
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
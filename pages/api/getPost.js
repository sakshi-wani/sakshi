import connectDB from '../../utils/connectDB';
import Post from '../../models/Post';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await Post.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: posts });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
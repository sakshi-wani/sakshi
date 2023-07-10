import connectDB from '../../utils/connectDB';
import Category from '../../models/Category';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const category = await Category.find().sort({ date: -1 });
      res.status(200).json({ success: true, data:category });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
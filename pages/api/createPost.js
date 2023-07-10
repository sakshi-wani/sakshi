import connectDB from "@/utils/connectDB";
import Post from "@/models/Post";
connectDB();
export default async function (req, res) {
    if (req.method === 'POST') {
        const { title, Image, header, description, author, date, category} = req.body;
        try {
            const post = new Post({
                title,
                Image,
                header,
                description,
                author,
                date,
                category,
            });
            await post.save();
            res.status(201).json({ success:true, data:post });
        } catch (error) {
            res.status(400).json({ success:false });
        }
    } else {
        res.statue(404).json({ message: "Not found" });

    }
}
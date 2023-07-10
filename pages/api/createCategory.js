import connectDB from "@/utils/connectDB";
import Category from "@/models/Category";
connectDB();
export default async function (req, res) {
    if (req.method === 'POST') {
        const { categoryName,categoryImage } = req.body;
        try {
            const category = new Category({
                categoryName,
                categoryImage,
            });
            await category.save();
            res.status(201).json({ success:true, data:category });
        } catch (error) {
            res.status(400).json({ success:false });
        }
    } else {
        res.statue(404).json({ message: "Not found" });

    }
}
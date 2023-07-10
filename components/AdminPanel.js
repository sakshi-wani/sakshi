import { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [Image, setImage] = useState('');
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        // Fetch all categories on page load
        axios.get('/api/getCategory').then((res) => {
            setCategories(res.data.data);
        });
    }, []);
    
    const addpost = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('/api/createPost', {
            title,
            Image,
            header,
            description,
            author,
            date,
            category : selectedCategory,
          });
    
          console.log('Post created successfully');
        } catch (error) {
          console.error('Error adding post:', error);
        }
      };
      const addcategory = async (e) => {
        e.preventDefault();
    
        try {
          await axios.post('/api/createCategory', {
            categoryName,
            categoryImage,
          });
    
          console.log('Category created successfully');
        } catch (error) {
          console.error('Error adding category:', error);
        }
      };



   

    return(
         <div>
    <form onSubmit={addpost} className="max-w-xl mx-auto  p-4">
        <div className="mb-4">
            <label htmlFor="title" className="block text-lg mb-1">
                Title
            </label>
            <input
                type="text"
                id="title"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="headerImage" className="block text-lg mb-1">
                Header Image URL
            </label>
            <input
                type="text"
                id="headerImage"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Header Image URL"
                value={Image}
                onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="header" className="block text-lg mb-1">
                Header
            </label>
            <textarea
                id="header"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Header"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
            ></textarea>
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block text-lg mb-1">
                Description
            </label>
            <textarea
                id="description"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>
        <div className="mb-4">
            <label htmlFor="author" className="block text-lg mb-1">
                Author
            </label>
            <input
                type="text"
                id="author"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="date" className="block text-lg mb-1">
                Date
            </label>
            <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className="mb-4">
            <label htmlFor="categoryName" className="block text-white font-bold font-darkage mb-2">
                Category
            </label>
            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border font-darkage bg-white text-[#5E474C] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                required
            >
                <option value="" >Select a category</option>
                {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <button
            type="submit"
            className="bg-purple-500 text-black py-2 px-4 rounded hover:bg-blue-300 font-mono"
        >
            Publish
        </button>
    </form>
    

    <form onSubmit={addcategory}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-pink-300 font-mono font-darkage mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full font-darkage border border-gray-300 rounded px-3 py-2 focus:outline-none bg-[#F6F4EE] text-[#5E474C] focus:border-[#F6F4EE]"
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categoryImage" className="block text-black font-mono font-darkage mb-2">
                  Category Image
                </label>
                <input
                  type="text"
                  id="categoryImage"
                  value={categoryImage}
                  className="w-full font-darkage"
                  placeholder='Category Image'
                  onChange={(e)=> setCategoryImage(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[#F6F4EE] font-extrabold font-coffee mr-4"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-orange-300 text-black font-mono py-2 px-4 rounded font-coffee"
                 
                >
                  Publish
                </button>
              </div>
            </form>
</div>
        
    );
};

export default AdminPanel;

    
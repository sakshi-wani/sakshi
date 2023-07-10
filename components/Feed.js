import React, { useEffect, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import { motion } from "framer-motion"

export const Feed = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [category, setCategory] = useState([]);


    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/getPost');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/getCategory');
                const data = await response.json();
                if (response.ok) {
                    setCategory(data.data);
                    
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className='grid grid-cols-1 gap-16 mx-4 lg:grid-cols-3 md:grid-cols-2'>

                {category.map((category) => (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "calc(100% - 100%)" }}
                        className='bg-black text-white h-fit rounded-lg overflow-hidden'
                    >
                        <img src={category.categoryImage} className='w-full h-40 object-cover' />
                        <div className='p-6'>
                            <h1 className='text-3xl text-center font-serif hover:underline cursor-pointer font-bold mb-4'>
                                {category.categoryName}
                            </h1>

                        </div>
                    </motion.div>
                ))}


            {blogPosts.map((post) => (
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: "calc(100% - 100%)" }}
                    className='bg-black text-white h-fit rounded-lg overflow-hidden'
                >
                    <img src={post.Image} className='w-full h-40 object-cover' />
                    <div className='p-6'>
                        <h1 className='text-3xl text-center font-serif hover:underline cursor-pointer font-bold mb-4'>
                            {post.title}
                        </h1>
                        <div className='flex items-center text-sm mb-2'>
                            <AiOutlineCalendar className='mr-2' />
                            {post.date}

                        </div>
                        <div className='flex items-center text-md mb-2'>
                            <FiUser className='text-lg mr-[1%]' /> {post.author}
                        </div>
                        <button className='bg-white font-thin text-black duration-300 hover:scale-110 px-4 py-2 rounded-md mt-4'>
                            Read more
                        </button>
                    </div>
                </motion.div>
            ))}

        </div>
    )
}
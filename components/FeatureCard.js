import React from 'react'
import { motion } from 'framer-motion'

const FeatureCard = () => {
  return (
    <div className=' w-full h-[50%] '>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className=" w-fit ">
        <img src='PcWZ-unscreen.gif' className='h-[50%] w-fit object-cover ml-[70%]' />

      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className='bg-blue-200 font-mono text-center text-6xl'>
          ALL POST
        </h1>

      </motion.div>
    </div>
  )
}

export default FeatureCard
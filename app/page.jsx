'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from 'framer-motion'

export default function Home() {

  const [test, settest] = useState([
    2018, 2019, 2020, 2021, 2022, 2023
  ])

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index
        }
      }
    }
  }

  return (
    <main className="min-h-screen flex  pt-10 flex-col max-width-a ">
      <section className="w-full">
        <h1 className="text-center text-6xl font-1">Order by date</h1>
        <div className='grid-a '>
          {test.map((x, index) => {
            return (
              <Link key={index} href={`/categories/${x}`}>
                <motion.div
                  className=' '
                  initial='initial'
                  variants={fadeInAnimationVariants}
                  whileInView='animate'
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="max-h-80 flex relative justify-center">
                    <img className="flex object-contain" src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1704496776/FASHION/Bags___Accessories_Bags_Mega_Menu_Espots_zg83x1.jpg" alt="" />
                    <p className="absolute bottom-2 r right-10 text-body-bold p-2  bg-white text-black">{x}</p>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  );
}

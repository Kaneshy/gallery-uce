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
    <main className="min-h-screen flex max-width-a  flex-col ">
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
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="flex rounded-xl  overflow-hidden min-h-96 relative justify-center">
                    <img
                      className="hover-filter-a"
                      src="https://res.cloudinary.com/dztz492su/image/upload/v1705973412/test/unnamed_pqndw2.jpg"
                      alt=""
                    />
                    <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 border-2 border-white text-white text-body-bold p-2">
                      {x}
                    </p>
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

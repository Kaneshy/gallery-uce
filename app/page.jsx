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
    <main className=" flex max-width-a  flex-col ">
      <section className="w-full min-h-screen">
        <h1 className="text-center text-6xl font-1">Order by date</h1>
        <div className='grid-a  '>
          {test.map((x, index) => {
            return (
              <Link key={index} href={`/categories/${x}`}>
                <motion.div
                  className='bg-white'
                  initial='initial'
                  variants={fadeInAnimationVariants}
                  whileInView='animate'
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="flex items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  overflow-hidden min-h-44 relative justify-center">
                    <p className="text-neutral-700 ">
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

'use client'
import Link from "next/link";
import { motion } from 'framer-motion'
import { assetsb } from "@/constants/assets";

export default function Home() {


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
    <main className=" flex max-width-a select-none  flex-col ">
      <section className="w-full min-h-screen mt-20">
        <div className='grid-a   '>
          {assetsb.map((x, index) => {
            return (
              <Link key={index} href={`/categories/${x.title}`}>
                <motion.div
                  className='bg-[#d9d9d9]'
                  initial='initial'
                  variants={fadeInAnimationVariants}
                  whileInView='animate'
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="flex  p-4 relative flex-col items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  overflow-hidden min-h-44  justify-center">
                    
                    <img src={x.img} className="w-full hover:scale-105 transition-all duration-300 ease-in-out object-cover" alt="" />
                    <p className="  text-neutral-700 font-bold ">
                      {x.title}
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

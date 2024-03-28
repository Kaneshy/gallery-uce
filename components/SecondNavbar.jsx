'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useRouter } from "next/navigation";

const SecondNavbar = ({ value }) => {

    const [scrollB, setscrollB] = useState(0)

    const scrollA = () => {
        window.onscroll = function () {
            const currentScrollPos = window.scrollY;
            setscrollB(currentScrollPos)
        }
    }
    useEffect(() => {
        scrollA()
    }, [scrollB])


    return (
        <nav>


            <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${scrollB > 80 ? 'fixed' : 'hidden'}  select-none w-full z-20`}
            >
                <div className='flex w-full flex-col'>
                    <nav className="flex items-center px-6   relative justify-between w-full py-2 text-gray-600 bg-white  ">
                        <Link className="text-red-900 text-heading1-bold " href={'/'}>
                            <img className='rounded-full' width={35} height={35} src="/assets/iniged.jpg" alt="" />
                        </Link>

                        <Link className=' text-body-bold max-lg:hidden' href={'/'}>INSTITUTO DE INVESTIGACIÓN EN IGUALDAD, GÉNERO Y DERECHOS</Link>
                        <Link className=' text-body-bold lg:hidden' href={'/'}>INIGED</Link>
                    </nav>
                </div>
            </motion.div>

        </nav>
    )
}

export default SecondNavbar
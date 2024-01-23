'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const SecondNavbar = ({ value }) => {

    const [scrollB, setscrollB] = useState(0)
    const router = useRouter()

    const scrollA = () => {
        window.onscroll = function () {
            const currentScrollPos = window.scrollY;
            setscrollB(currentScrollPos)
        }
    }
    useEffect(() => {
        scrollA()
    }, [scrollB])

    // nt-bold py-2 px-4 rounded transition-transform transform hover:scale-125 duration-2000">

    return (
        <>
            <motion.div
                initial={{ opacity: 0.5 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className={`${scrollB > 80 ? 'fixed' : 'hidden'}  select-none w-full z-20`}
            >
                <div className='flex w-full flex-col'>
                    <nav className="flex items-center px-6  relative justify-between w-full py-2 text-gray-600 bg-white  ">
                        {/* <button onClick={()=>router.back()} className="flex gap-2">
                        <IoMdArrowRoundBack size={24} />
                        <p>Back</p>
                    </button> */}
                        <Link className="text-red-900 text-heading1-bold " href={'/'}>
                            <img className='rounded-full' width={35} height={35} src="/assets/iniged.jpg" alt="" />
                        </Link>

                        <Link className=' text-body-bold max-lg:hidden' href={'/'}>INSTITUTO DE INVESTIGACIÓN EN IGUALDAD, GÉNERO Y DERECHOS</Link>
                        <Link className=' text-body-bold lg:hidden' href={'/'}>INIGED</Link>
                    </nav>
                </div>
            </motion.div>


        </>
    )
}

export default SecondNavbar
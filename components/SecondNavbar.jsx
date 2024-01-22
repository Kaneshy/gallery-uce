'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const SecondNavbar = ({value}) => {

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
                initial={{opacity:0.5}}
                whileInView={{opacity:1}}
                transition={{duration:1}}
                className={`${scrollB > 80 ? 'fixed' : 'hidden'} bg-black select-none w-full z-20`}
            >
                <div className='flex w-full flex-col'>
                    <nav className="flex items-center  relative justify-around w-full py-2 text-white bg-black ">
                    <button onClick={()=>router.back()} className="flex gap-2">
                        <IoMdArrowRoundBack size={24} />
                        <p>Back</p>
                    </button>
                        <Link className=' text-heading1-bold' href={'/'}>GALLERY</Link>
                        <p>About</p>
                    </nav>
                </div>
            </motion.div>


        </>
    )
}

export default SecondNavbar
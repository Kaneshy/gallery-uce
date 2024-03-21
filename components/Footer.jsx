import React from 'react'
import { help, company, social } from '@/constants/Footer'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-red-900 text-white justify-center items-center shadow  ">
            <div className="w-full mx-auto max-w-screen-xl p-4 items-center flex justify-center">
                <span className="text-sm text-center  sm:text-center ">© 2024 <a href="https://flowbite.com/" className="hover:underline">UNIGED</a>. All Rights Reserved.
                </span>
            </div>
        </footer>

    )
}

export default Footer
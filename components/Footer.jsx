import React from 'react'
import { help, company, social } from '@/constants/Footer'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer class="bg-red-900 text-white justify-center items-center shadow  ">
            <div class="w-full mx-auto max-w-screen-xl p-4 items-center flex justify-center">
                <span class="text-sm text-center  sm:text-center ">© 2024 <a href="https://flowbite.com/" class="hover:underline">UNIGED</a>. All Rights Reserved.
                </span>
            </div>
        </footer>

    )
}

export default Footer
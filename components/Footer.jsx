import React from 'react'
import { help, company, social } from '@/constants/Footer'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-red-900 text-white justify-center items-center shadow  ">
            <div className="w-full mx-auto max-w-screen-xl p-4 items-center flex-col justify-center">
                
                <div className='flex justify-around p-2 '>
                    <div className='text-neutral-300'>
                        Contacto:
                        <span className='p-2 text-white'>genero.derechos@uce.edu.ec</span>
                    </div>
                    <div className='text-neutral-300'>
                        Teléfono:
                        <span className='p-2 text-white'>254-3395</span>
                    </div>

                </div>

            </div>
            <div className="w-full mx-auto max-w-screen-xl p-4 items-center flex-col justify-center">
                
            <span className="w-full text-small-regular text-neutral-300  text-center flex justify-center items-center text-sm ">© 2024 <a href="https://flowbite.com/" className="hover:underline">INIGED</a>. All Rights Reserved.
                </span>

            </div>
           

        </footer>

    )
}

export default Footer
import React from 'react'
import { help, company, social } from '@/constants/Footer'
import Link from 'next/link'

const Footer = () => {
    return (
        <main className='mt-54 text-center w-full p-4 bg-neutral-300 text-white pb-20'>
            Derechos reservados 
            <div>
                genero.derechos@uce.edu.ec
            </div>
        </main>
    )
}

export default Footer
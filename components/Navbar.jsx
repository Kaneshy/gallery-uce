'use client'
import SecondNavbar from "@/components/SecondNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import { social } from "@/constants/Footer";

const Navbar = ({ value }) => {
    const router = useRouter()

    
    return (
        <main className="" >
            <SecondNavbar />
            <div className={`flex w-full flex-col ${value} select-none `}>
                <nav className="flex bg-white  items-center relative justify-around w-full py-4  ">

                    <Link className="text-red-900 max-lg:hidden p-4 min-h-20  text-heading1-bold " href={'/'}>
                        <img width={50} height={50} src="/assets/iniged.jpg" alt="" />
                    </Link>
                    <div className="flex max-lg:hidden">
                        <Link className="text-red-900 text-center text-heading1-bold " href={'/'}>INSTITUTO DE INVESTIGACIÓN EN IGUALDAD DE GÉNERO Y DERECHOS</Link>
                    </div>
                    <div className="flex lg:hidden">
                        <Link className="text-red-900 text-center text-heading1-bold " href={'/'}>INIGED</Link>
                    </div>
                    <div className='text-slate-600 flex flex-row   justify-center items-center'>
                        <div className="flex text-neutral-400  ">
                            {social.map((w, index) => {
                                return (
                                    <div key={index} className="px-2 " >
                                        <a href={w.route} target="_blank" >
                                            <motion.div
                                                whileHover={{ rotate: [null, 100, 200, 360] }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-1 "
                                            >
                                                {w.iconR}
                                            </motion.div>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </nav>
                {/* {
                    params == '/' ? (
                        <div className='w-full bg-white  flex text-center justify-center gap-x-4   p-2'>
                            <p className="">INIGED es una entidad generadora de propuestas académicas e investigación en géneros y derechos </p>
                        </div>
                    ) : (
                        <div>

                        </div>
                    )
                } */}


            </div>
        </main>
    )
}

export default Navbar
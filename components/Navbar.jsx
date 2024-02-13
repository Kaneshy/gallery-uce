'use client'
import SecondNavbar from "@/components/SecondNavbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'
import { social } from "@/constants/Footer";

const Navbar = ({ value }) => {
    const router = useRouter()
    return (
        <main >
            <SecondNavbar />
            <div className={`flex w-full flex-col ${value} select-none `}>
                <nav className="flex bg-white  items-center relative justify-around w-full py-4  ">

                    <Link className="text-red-900 text-heading1-bold " href={'/'}>
                        <img width={50} height={50} src="/assets/iniged.jpg" alt="" />
                    </Link>
                    <div className="flex">
                        <Link className="text-red-900 text-heading1-bold " href={'/'}>REFLEJOS INIGED</Link>
                    </div>
                    <div className='text-slate-600 flex flex-row max-xs:hidden max-sm:hidden  justify-center items-center'>
                        <div className="flex text-neutral-400  ">
                            {social.map((w, index) => {
                                return (
                                    <div key={index} className="px-2 " >
                                        <a href={w.route} target="_blank">
                                            <motion.div
                                                whileHover={{ rotate: [null, 100, 200, 360] }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-1"
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
                <div className='w-full bg-white  flex text-center justify-center gap-x-4   p-2'>
                    <p className="">INIGED es una entidad generadora de propuestas académicas e investigación en géneros y derechos </p>
                </div>

            </div>
        </main>
    )
}

export default Navbar
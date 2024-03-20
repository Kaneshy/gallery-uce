'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { año2018, año2019, año2020, año2021, año2022, año2023 } from "@/constants/index.js";



const Page = ({ params }) => {

    const [data, setData] = useState([])
    console.log(data)

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

    useEffect(() => {
        // Convertir params.id a número
        const selectedYear = parseInt(params.id, 10);

        // Seleccionar el array correcto según el rango de años
        let selectedArray = [];

        switch (selectedYear) {
            case 2018:
                selectedArray = año2018;
                break;
            case 2019:
                selectedArray = año2019;
                break;
            case 2020:
                selectedArray = año2020;
                break;
            case 2021:
                selectedArray = año2021;
                break;
            case 2022:
                selectedArray = año2022;
                break;
            case 2023:
                selectedArray = año2023;
                break;
            default:
                // Manejar el caso en el que el año no está en el rango esperado
                break;
        }

        // Hacer algo con el array seleccionado (por ejemplo, establecerlo en el estado)
        setData(selectedArray);
    }, [params.id]);



    return (

        <main className=" min-h-screen flex max-width-a  flex-col ">
            <section className="w-full">
                <div className='grid-a '>
                    {data && data.map((x, index) => {
                        return (
                            <Link key={index} href={`/test/${x.id}`}>
                                <motion.div
                                    className='bg-white '
                                    initial='initial'
                                    variants={fadeInAnimationVariants}
                                    whileInView='animate'
                                    viewport={{ once: true }}
                                    custom={index}
                                >

                                    <div className="flex items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  overflow-hidden min-h-44 relative justify-center">
                                        <p className="text-black font-bold text-center p-4   ">
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

    )
}

export default Page
'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { año2018, año2019, año2020, año2021, año2022, año2023 } from "@/constants/index.js";



const page = ({ params }) => {

    const [test, settest] = useState([1, 1, 1, 1, 1, 1])
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
        <main className="min-h-screen pt-10 flex flex-col max-width-a p-4">
            <section className="w-full">
                <h1 className="text-center font-1 text-6xl">CATEGORIES</h1>
                <div className='grid-a '>
                    {data && data.map((x, index) => {
                        return (
                            <Link key={index} href={`/test/${x.id}`}>
                                <motion.div
                                    className=' '
                                    initial='initial'
                                    variants={fadeInAnimationVariants}
                                    whileInView='animate'
                                    whileHover={{ scale: 1.05 }}
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <div className="max-h-80 flex relative">
                                        <img className="flex object-contain" src="https://res.cloudinary.com/dh01ngdjo/image/upload/v1704496776/FASHION/Bags___Accessories_Belts_Mega_Menu_Espots_ldobwz.jpg" alt="" />
                                        <p className="absolute bottom-2 p-2 right-28 bg-white text-black">{x.title}</p>
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

export default page
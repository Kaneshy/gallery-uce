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

        <main className="min-h-screen flex max-width-a  flex-col ">
            <section className="w-full">
                <h1 className="text-center text-6xl font-1">Order by date</h1>
                <div className='grid-a '>
                    {data && data.map((x, index) => {
                        return (
                            <Link key={index} href={`/test/${x.id}`}>
                                <motion.div
                                    className=' '
                                    initial='initial'
                                    variants={fadeInAnimationVariants}
                                    whileInView='animate'
                                    viewport={{ once: true }}
                                    custom={index}
                                >
                                    <div className="flex rounded-xl  overflow-hidden relative justify-center">
                                        <img
                                            className="hover-filter-a w-full h-96"
                                            src={x.img ? (x.img) : ('https://res.cloudinary.com/dztz492su/image/upload/v1705973412/test/unnamed_pqndw2.jpg')}
                                            alt=""
                                        />
                                        <p className="absolute w-40 text-center top-10 left-1/2 transform -translate-x-1/2  text-white text-body-bold p-2 ">
                                            {x.title}
                                        </p>
                                        <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 border-2 border-white text-white text-body-bold p-2 w-fit">
                                            {params.id}
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
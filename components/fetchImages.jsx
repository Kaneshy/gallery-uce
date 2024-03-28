'use client'
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { practicasb } from "@/constants/assets";
import { TbArrowBackUpDouble } from "react-icons/tb";
import Link from "next/link";
import { useParams } from 'next/navigation'
import { FaStop } from "react-icons/fa6";
import { año2018, año2019, año2020, año2021, año2022, año2023 } from "@/constants/index";


const FetchImages = ({ values, valueb, yearb }) => {

    const [imga, setimga] = useState('')
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dataH, setdataH] = useState([])
    const params = useParams()
    const [text, settext] = useState('Durante el año 2021, el Instituto de Investigación en Igualdad de Género y Derechos (INIGED) adoptó el teletrabajo en respuesta a la emergencia sanitaria causada por la COVID-19. En este lapso, centró sus esfuerzos en la investigación para prevenir el acoso sexual en las instituciones de educación superior.')


    const router = useRouter()

    const scrollToBottom = () => {
        const newScrollPosition = scrollPosition + 1;
        console.log(newScrollPosition, dataH.length)
        if (newScrollPosition === dataH.length) {
            console.log('rundf', dataH.length + 1, newScrollPosition)
            setScrollPosition(-1)
            return
        }

        setScrollPosition(newScrollPosition);
        // Encuentra el elemento al que deseas desplazarte
        const targetElement = document.getElementById(newScrollPosition);

        // Realiza el desplazamiento suave
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }

    };


    function iniciarScroll() {

        // Función recursiva para realizar el scroll y esperar
        function scrollYEsperar(index) {
            if (index === dataH.length) {
                router.back()
                return
            }
            if (index < dataH.length) {
                const divId = index;
                const div = document.getElementById(divId);

                if (div) {
                    div.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                }

                // Esperar 2 segundos antes de pasar al siguiente div
                setTimeout(() => {
                    scrollYEsperar(index + 1);
                }, 2000);
            }
        }
        // Comenzar el scroll desde el primer div

        scrollYEsperar(0);

    }

    const nextFolder = () => {
        console.log('df', )

        router.back()

    }

    const [titleA, settitleA] = useState('')

    useEffect(() => {
        // Convertir params.id a número
        const selectedYear = parseInt(yearb, 10);

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

        const titleAsk = selectedArray.find(item => item.id === params.id);
        console.log(titleAsk, 'dddssss')
        settitleA(titleAsk.title)

    }, [yearb]);



    useEffect(() => {
        setimga('https://res.cloudinary.com/dh01ngdjo/image/upload/v1705074703/Screenshot_2024-01-12_105045_jdjj9m.jpg')
        // iniciarScroll()
        setdataH(values)
        console.log('dfjjjd', yearb)
    }, [])

    return (

        <main className="bg-color-ba">
            <div className='w-full bg-white  flex text-center justify-center gap-x-4   p-2'>
                <p className="font-bold p-4">{titleA} </p>
            </div>ñ
            <div className="fixed flex gap-x-4  bottom-4 right-4  z-20">
                <Link href={'/'} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <TbArrowBackUpDouble size={18} />
                </Link>
                {/* <button onClick={scrollToBottom} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaAngleDown size={15} />
                </button> */}
                <button onClick={iniciarScroll} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaPlay size={15} />
                </button>
                <button onClick={nextFolder} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaStop size={15} />
                </button>
            </div>
            <section className="flex flex-col">
                {dataH.map((x, index) => {
                    if (valueb === 'nyear2023') {
                        const itemWithId = practicasb.find(item => item.id === index)

                        return (
                            <section key={index} id={index} className=" home-widge-a flex flex-col  ">
                                <div className=" relative  flex flex-col items-center justify-center">
                                    <img className="max-h-screen lg:h-screen " src={x} alt="" />
                                </div>
                                <p className="p-4 bg-white font-semibold text-center text-neutral-800">{itemWithId.title}</p>
                            </section>

                        )
                    } else if (valueb === 'ayear2021') {
                        console.log('test')
                        return (
                            <section key={index + 'dfdf'} id={index} className=" p-10 home-widge-a flex flex-col items-center justify-center ">
                                <p className="p-4 max-w-lg    font-semibold text-center bg-neutral-400 text-neutral-800">
                                    {text}
                                </p>
                            </section>

                        )
                    } else {
                        return (
                            <section key={index} id={index} className=" home-widge-a flex flex-col  ">
                                <div className=" relative  flex flex-col items-center justify-center">
                                    <img className="max-h-screen lg:h-screen " src={x} alt="" />
                                </div>
                            </section>
                        )
                    }

                })}
            </section>

        </main>

    )
}




export default FetchImages
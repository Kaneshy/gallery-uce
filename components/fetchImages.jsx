'use client'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { FaAngleDown } from "react-icons/fa";
import { practicasb } from "@/constants/assets";
import { TbArrowBackUpDouble } from "react-icons/tb";
import Link from "next/link";
import { useParams } from 'next/navigation'


const FetchImages = ({ values, valueb }) => {

    const [imga, setimga] = useState('')
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dataH, setdataH] = useState([])
    const params = useParams()


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

        // window.scrollTo({
        //   top: newScrollPosition,
        //   behavior: 'smooth',
        // });
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
        console.log('df', params.id)
        router.push('/test/byear2023')

    }


  useEffect(() => {
    console.log('df', valueb)
    const b = valueb.split('ayear')
    console.log(b[1])
    const c = 3
  }, [])
  



    useEffect(() => {
        setimga('https://res.cloudinary.com/dh01ngdjo/image/upload/v1705074703/Screenshot_2024-01-12_105045_jdjj9m.jpg')
        // iniciarScroll()
        setdataH(values)
        console.log('dfjjjd', valueb)
    }, [])

    return (

        <main className="bg-color-ba">
            <div className='w-full bg-white  flex text-center justify-center gap-x-4   p-2'>
                <p className="">INIGED </p>
            </div>
            <div className="fixed flex gap-x-4  bottom-4 right-4  z-20">
                <Link href={'/'} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <TbArrowBackUpDouble size={18} />
                </Link>
                <button onClick={scrollToBottom} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaAngleDown size={15} />
                </button>
                <button onClick={iniciarScroll} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaPlay />
                </button>
                <button onClick={nextFolder} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaPlay />
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
                        return (
                            <section key={index} id={index} className=" home-widge-a flex flex-col  ">
                                <p className="p-4  font-semibold text-center text-neutral-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime molestiae dolor accusantium sunt? Quasi commodi, est maiores necessitatibus distinctio ea vero ipsam esse voluptate ut beatae dolorum sint incidunt repellat.</p>
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
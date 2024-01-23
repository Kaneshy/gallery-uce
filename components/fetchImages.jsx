'use client'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { FaAngleDown } from "react-icons/fa";



const FetchImages = ({ values }) => {

    const [imga, setimga] = useState('')
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dataH, setdataH] = useState([])


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




    useEffect(() => {
        setimga('https://res.cloudinary.com/dh01ngdjo/image/upload/v1705074703/Screenshot_2024-01-12_105045_jdjj9m.jpg')
        // iniciarScroll()
        setdataH(values)
        console.log('dfd', values)
    }, [])

    return (

        <main className="bg-color-ba">
            <div className="fixed flex gap-x-4  bottom-4 right-4  z-20">
                <button onClick={scrollToBottom} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaAngleDown size={15} />
                </button>
                <button onClick={iniciarScroll} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-white opacity-50 text-gray-500" >
                    <FaPlay />
                </button>
            </div>
            <section className="flex flex-col">
                {dataH.map((x, index) => {
                    return (

                        <section key={index} id={index} className=" home-widge-a flex flex-col  ">

                            <div className=" relative  flex flex-col items-center justify-center">
                                {/* <motion.img
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }}
                                    className="max-h-screen h-screen "
                                    alt=""
                                    src={x}
                                 /> */}
                                <img className="max-h-screen lg:h-screen " src={x} alt="" />
                                <motion.div
                                    className='absolute text-center max-lg:hidden bottom-8 max-w-lg'
                                    initial={{ x: -200, scale: 0.5 }}
                                    whileInView={{ x: 0, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }}
                                >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio mollitia ut tempora ad aut quos alias ipsa necessitatibus neque debitis? Nesciunt possimus recusandae veritatis quod hic, aliquid eligendi repellat voluptatum!
                                </motion.div>
                                <motion.div
                                    className='p-4 bg-white flex flex-col text-gray-700 lg:hidden w-full text-center'
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }}
                                >
                                    <h1 className="text-red-900">Lorem ipsum, dolor sit </h1>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio mollitia ut tempora ad aut quos alias ipsa necessitatibus neque debitis? Nesciunt possimus recusandae veritatis quod hic, aliquid eligendi repellat voluptatum!
                                </motion.div>

                            </div>
                            {/* </motion.section> */}
                        </section>
                    )
                })}
            </section>

        </main>

    )
}




export default FetchImages
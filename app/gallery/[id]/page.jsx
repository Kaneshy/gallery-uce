'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/navigation';

// import cloudinary from 'cloudinary'


const page = () => {

    const [test, settest] = useState([1, 1, 1, 1, 1, 1])
    const [imga, setimga] = useState('')
    const [scrollPosition, setScrollPosition] = useState(0);


    const router = useRouter()


    



    const handledata = async () => {
        // cloudinary.config({
        //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        //     api_key: process.env.CLOUDINARY_API_KEY,
        //     api_secret: process.env.API_SECRET,
        // });
        // try {
        //     const results = await cloudinary.v2.search
        //         // you can add also AND tags=shirt AND uploaded_at>1d AND bytes>1m
        //         .expression('resource_type:image AND folder=my-uploads')
        //         .sort_by('uploaded_at', 'desc')
        //         .max_results(100)
        //         .execute();
        //     const secureUrls = results.resources.map(resource => resource.secure_url);
        //     console.log(results, 'dfdf')
        //     return {
        //         props: {
        //             secureUrls // Pasar secureUrls como propiedad al componente homePage
        //         }
        //     }

        // } catch (error) {
        //     console.error('Error al obtener los resultados de Cloudinary:', error);
        //     throw error;
        // }
    }





    const scrollToBottom = () => {
        const newScrollPosition = scrollPosition + 1;
        console.log(newScrollPosition, test.length)
        if (newScrollPosition === test.length) {
            console.log('rundf')
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
            if (index === test.length) {
                router.back()
            }
            if (index < test.length) {
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
        handledata()
    }, [])

    return (

        <main>
            <div className="fixed  bottom-4 right-4  z-20">
                <button onClick={scrollToBottom} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-black text-white" ><FaPlay /></button>
                <button onClick={iniciarScroll} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-black text-white" ><FaPlay /></button>
            </div>
            <section>
                {test.map((x, index) => {
                    return (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                        >
                            <section id={index} style={{ backgroundImage: `url(${imga})` }} className="min-h-screen relative home-widge-a flex flex-col  p-4">
                                <section className="w-full">
                                    <h1 className="text-center font-1 text-6xl">CATEGORIES</h1>
                                    <div className='max-width-a '>
                                        <motion.div
                                            className='absolute bottom-8 left-4 max-w-lg'
                                            initial={{ x: -200, scale: 2 }}
                                            whileInView={{ x: 0, scale: 1 }}
                                            transition={{ duration: 1 }}
                                            viewport={{ once: false }}
                                        >
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio mollitia ut tempora ad aut quos alias ipsa necessitatibus neque debitis? Nesciunt possimus recusandae veritatis quod hic, aliquid eligendi repellat voluptatum!
                                        </motion.div>
                                    </div>
                                </section>
                            </section>
                        </motion.section>
                    )
                })}
            </section>

        </main>

    )
}




export default page
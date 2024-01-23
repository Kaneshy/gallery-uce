'use client'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'
import { FaPlay } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const FetchImages = ({values}) => {

    const [test, settest] = useState([1, 1, 1, 1, 1, 1])
    const [imga, setimga] = useState('')
    const [scrollPosition, setScrollPosition] = useState(0);
    const [dataH, setdataH] = useState([])
    


    const router = useRouter()

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
            if (index === dataH.length) {
                router.back()
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

        <main className="bg-black">
            <div className="fixed  bottom-4 right-4  z-20">
                <button onClick={scrollToBottom} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-black text-white" ><FaPlay /></button>
                <button onClick={iniciarScroll} className="flex items-center justify-centerrounded-full p-3 rounded-full bg-black text-white" ><FaPlay /></button>
            </div>
            <section>
                {dataH.map((x, index) => {
                    return (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                            viewport={{ once: false }}
                        >
                            <section id={index} style={{ backgroundImage: `url(${x})` }} className="min-h-screen relative home-widge-a flex flex-col  p-4">
                                <section className="w-full">
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




export default FetchImages
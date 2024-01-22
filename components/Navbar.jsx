'use client'
import SecondNavbar from "@/components/SecondNavbar";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const Navbar = ({ value }) => {
    const router = useRouter()
    return (
        <main >
            <SecondNavbar />
            <div className={`flex w-full flex-col ${value} select-none `}>
                <nav className="flex  items-center relative justify-around w-full py-4  ">
                    <button onClick={()=>router.back()} className="flex gap-2">
                        <IoMdArrowRoundBack size={24} />
                        <p>Back</p>
                    </button>
                    <Link className="text-heading1-bold " href={'/'}>GALLERY</Link>
                    <p>About</p>
                </nav>
                <div className='w-full  flex text-center justify-center gap-x-4   p-2'>
                    <Link className="hover:scale-95 " href={'/'}>Women</Link>
                    <Link className="hover:scale-95 " href={'/'}>Women</Link>
                    <Link className="hover:scale-95 " href={'/'}>Women</Link>
                    <Link className="hover:scale-95 " href={'/'}>Women</Link>
                </div>

            </div>
        </main>
    )
}

export default Navbar
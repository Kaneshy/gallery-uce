import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";




export const help = [
    {
        route:'/',
        name:'Contact Us'
    },
    {
        route:'/',
        name:'My Order'
    },
    {
        route:'/',
        name:'FAQs'
    },
    {
        route:'/',
        name:'Email Unsubcribe'
    },
    {
        route:'/',
        name:'Sitemap'
    }
]

export const company = [
    {
        route:'/',
        name:'About '
    },
    {
        route:'/',
        name:'Code of Ethics'
    },
    {
        route:'/',
        name:'Careers'
    },
    {
        route:'/',
        name:'Legal'
    },
    {
        route:'/',
        name:'Privacy & Cookie Policy'
    },
    {
        route:'/',
        name:'Cookie Settings'
    },
    {
        route:'/',
        name:'Corporate Information'
    }
]

export const social = [
    {
        route:'https://www.facebook.com/InstitutoINIGED?mibextid=ibOpuV',
        iconR: <FaFacebookF size={17} />,
        title: 'Facebook',
    },
    {
        route:'https://www.instagram.com/iniged.uce?igsh=YTRqaXhqaTJ5eTZo',
        iconR: <FaInstagram  size={17} />,
        title: 'Instagram',
    },
    {
        route:'https://twitter.com/inigeduce?s=11',
        iconR: <FaSquareXTwitter size={17} />,
        title: 'X',
    },
    {
        route:'https://www.uce.edu.ec/web/iniged',
        iconR: <TfiWorld  size={17}  />,
        title: 'Whatsapp',
    }
]
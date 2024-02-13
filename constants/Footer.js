import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


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
        route:'https://www.facebook.com/lacentralec/',
        iconR: <FaFacebookF size={17} />,
        title: 'Facebook',
    },
    {
        route:'https://www.instagram.com/laucentralec/',
        iconR: <FaInstagram  size={17} />,
        title: 'Instagram',
    },
    {
        route:'https://twitter.com/lacentralec',
        iconR: <FaSquareXTwitter size={17} />,
        title: 'X',
    },
    {
        route:'https://www.youtube.com/channel/UCBg2ksNwht164otsChyMhRA',
        iconR: <FaWhatsapp   size={17} />,
        title: 'Whatsapp',
    }
]
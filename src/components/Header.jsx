import logo from "../images/tofa 2.png"
import {
    AiOutlineInstagram,
    AiOutlineTwitter,
    // AiOutlineMail,
} from "react-icons/ai"
import { BsWhatsapp, BsPinterest, BsFacebook } from "react-icons/bs"
import { RiMenu3Fill } from "react-icons/ri"
import { motion } from "framer-motion"
import { useState } from "react"
import Modal from "./Modal"
function Header() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <header className="md:h-20 h-[75px] shadow-md py-3 md:px-10 px-2">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <div className=" md:hidden flex items-center justify-between">
                <img
                    className="h-[75px] w-[75px] object-contain"
                    src={logo}
                    alt=""
                />

                <RiMenu3Fill className="h-8 w-8 text-black" />
            </div>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="hidden md:flex text-black  items-center gap-x-4"
                >
                    <a
                        href="https://www.instagram.com/tofagraphy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineInstagram className="h-7 w-7" />
                    </a>
                    <a
                        href="https://wa.me/message/4RZ42BOFSTQPG1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsWhatsapp className="h-5 w-5" />
                    </a>
                    <a
                        href="https://twitter.com/tofagraphy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineTwitter className="h-7 w-7" />
                    </a>
                </motion.div>
                <h1 className="hidden text-black md:flex font-Fraunces md:text-2xl text-xl font-semibold">
                    <a href="/">TOFAGRAPHY</a>
                </h1>

                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="hidden text-black  md:flex items-center gap-x-4"
                >
                    {/* <AiOutlineMail
                        onClick={() => {
                            setModalOpen(true)
                        }}
                        className="h-7 w-7"
                    /> */}

                    <a
                        href="https://www.pinterest.com/tofa_ng/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsPinterest className="h-7 w-7" />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=100066447411097"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsFacebook className="h-7 w-7" />
                    </a>
                    <h2
                        className="font-Belanosima cursor-pointer font-normal text-[18px] py-1 px-3 rounded-md animate-bounce"
                        onClick={() => {
                            setModalOpen(true)
                        }}
                    >
                        Book a Session
                    </h2>
                </motion.div>
            </div>
        </header>
    )
}

export default Header

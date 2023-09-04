import logo from "../images/tofa 2.png"
import { BsInstagram, BsPinterest, BsWhatsapp } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"

function Footer() {
    return (
        <div className="bg-black md:py-2 py-4 px-5 sticky bottom-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between flex-col md:flex-row">
                <div className="flex items-center gap-y-5 flex-col md:flex-row gap-x-6">
                    <img
                        className="md:h-16 md:w-16 h-16 w-16 object-contain cursor-pointer"
                        src={logo}
                        alt=""
                    />

                    <div className="flex md:hidden items-center gap-x-7">
                        <BsInstagram className="text-white h-5 w-5 cursor-pointer" />
                        <a
                            href="https://wa.me/message/4RZ42BOFSTQPG1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsWhatsapp className="text-white h-5 w-5 cursor-pointer" />
                        </a>
                        <a
                            href="https://twitter.com/tofagraphy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiOutlineTwitter className="text-white h-5 w-5 cursor-pointer" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100066447411097"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookF className="text-white h-5 w-5 cursor-pointer" />
                        </a>
                        <a
                            href="https://www.pinterest.com/tofa_ng/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BsPinterest className="h-7 w-7" />
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-x-4 mb-5 mt-5">
                    <h2 className="text-white text-[15px] cursor-pointer">
                        <a
                            href="https://tofagraphy.com/about"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            About Us
                        </a>
                    </h2>
                    <h2 className="text-white text-[15px] cursor-pointer">
                        Privacy Policy
                    </h2>
                    <h2 className="text-white font-normal text-[15px] cursor-pointer">
                        <a
                            href="https://tofagraphy.com/contact"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Rate Card
                        </a>
                    </h2>
                </div>

                <div>
                    <h3 className="text-white text-[15px] cursor-pointer">
                        © 2023 Tofa Photography
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Footer

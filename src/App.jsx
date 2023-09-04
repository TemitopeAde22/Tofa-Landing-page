import "./App.css"
import image1 from "./images/IMG_6780.JPG"
import image2 from "./images/IMG_6772.JPG"
import image3 from "./images/IMG_6776.JPG"
import image4 from "./images/IMG_6777.JPG"
import image5 from "./images/IMG_6778.jpg"
import image6 from "./images/IMG_6786.jpg"
import image7 from "./images/IMG_6773.jpg"
import image8 from "./images/IMG_0334.jpg"
import image9 from "./images/IMG_6143.jpg"
import { useTypewriter } from "react-simple-typewriter"
import Header from "./components/Header"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Footer from "./components/Footer"
import { useState } from "react"
import Modal from "./components/Modal"

function App() {
    const [text] = useTypewriter({
        words: [
            "MOBILE PHOTOGRAPHER IN LAGOS",

            // 'Read Below For Registration Process'
        ],
        loop: 1,
        delaySpeed: 2000,
    })
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className=" bg-[#a7a28f] overflow-hidden">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <Header />
            <div className="md:hidden flex justify-center mt-2">
                <h2
                    className="font-Belanosima text-white cursor-pointer font-normal text-[22px] py-1 px-3 rounded-md "
                    onClick={() => {
                        setModalOpen(true)
                    }}
                >
                    Book a Session
                </h2>
            </div>

            <section className="border border-[#eeecec]  md:mt-12 max-w-7xl mt-7 mx-auto py-3 md:px-10">
                <div>
                    <h1 className="flex justify-center text-center text-xl font-Fraunces font-bold md:mt-3 text-[#1e1918] md:text-3xl">
                        {text}
                    </h1>
                    <p className=" font-Belanosima text-center md:text-xl text-[#6d4d45] mt-2">
                        Capturing Moments, Crafting Memories
                    </p>
                    {/* <div className="carousel w-full border grid grid-cols-2">
                        <div className="carousel-item relative w-full">
                            <img src={image1} className="h-80 w-80 " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div className="carousel-item relative w-full">
                            <img src={image2} className="h-80 w-80 " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide3"
                            className="carousel-item relative w-full"
                        >
                            <img src={image3} className="h-80 w-80 " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide4"
                            className="carousel-item relative w-full"
                        >
                            <img src={image4} className="h-80 w-80 " />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <Carousel
                        className="relative mt-5 hidden md:flex"
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showIndicator={false}
                        showThumbs={false}
                        interval={5000}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                            <img
                                className=" md:h-[500px] object-contain"
                                src={image1}
                                alt=""
                                loading="lazy"
                            />
                            <img
                                className=" md:h-[500px] object-contain"
                                src={image2}
                                alt=""
                                loading="lazy"
                            />
                            <img
                                className=" md:h-[500px] object-contain"
                                src={image3}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                            <img
                                className="h-80 w-80  md:h-[500px] object-contain"
                                src={image4}
                                alt=""
                            />
                            <img
                                className="h-80 w-80  md:h-[500px] object-contain"
                                src={image5}
                                alt=""
                            />
                            <img
                                className="h-80 w-80  md:h-[500px] object-contain"
                                src={image6}
                                alt=""
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                            <img
                                className="h-80 w-80  md:h-[500px] object-contain"
                                src={image7}
                                alt=""
                            />
                            <img
                                className="h-80 w-80  md:h-[500px] object-contain"
                                src={image8}
                                alt=""
                            />
                            <img
                                className="h-80 w-80  md:h-[500px] object-contain"
                                src={image9}
                                alt=""
                            />
                        </div>
                    </Carousel>
                    <div>
                        <Carousel
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            // showIndicator={false}
                            // showThumbs={false}
                            interval={5000}
                            className="md:hidden mt-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image1}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image2}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image3}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image4}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image5}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image6}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image7}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image8}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 md:hover:scale-105 transform transition ease-out">
                                <img
                                    className=" md:h-[500px] object-contain"
                                    src={image9}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default App

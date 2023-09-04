/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Modal.css"
import { RiCloseFill } from "react-icons/ri"
import { useForm } from "react-hook-form"

import { useDispatch, useSelector } from "react-redux"
import logo from "../images/tofa 2.png"
import axios from "axios"
import { base_url } from "../utils/axiosConfig"
import Loader from "./Loader"
import { startSending, sendSuccess, sendFail } from "../features/emailSlice"

function Modal({ setOpenModal }) {
    const dispatch = useDispatch()
    const { isSending } = useSelector((state) => state.email)
    const [successMessage, setSuccessMessage] = useState("")

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        dispatch(startSending())
        try {
            const response = await axios.post(
                `${base_url}email/send-mail`,
                data
            )

            if (response.status === 200) {
                dispatch(sendSuccess())
                setSuccessMessage("✅ Booking Sent Successfully")
                setTimeout(() => {
                    setSuccessMessage("")
                }, 5000)
            } else {
                throw new Error(response.data.message)
            }
        } catch (err) {
            console.log(err)
            dispatch(sendFail(err.message))
        }
        console.log(data)
    }
    return (
        <div className="fixed inset-0 text-black bg-black bg-opacity-25 backdrop-blur-[1px] flex items-center justify-center z-50">
            {isSending ? (
                <Loader />
            ) : (
                <div className="modalContainer w-full md:w-[30%] rounded-sm shadow-md">
                    <div className="titleCloseBtn">
                        <RiCloseFill
                            className="w-5 h-5"
                            onClick={() => {
                                setOpenModal(false)
                            }}
                        />
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="h-[75px] w-[75px] object-contain"
                            src={logo}
                            alt=""
                        />
                    </div>

                    <div className="">
                        <h2 className="font-Belanosima font-normal animate-pulse text-black text-[20px] text-center">
                            {" "}
                            Book a Session With us!!
                        </h2>
                        {successMessage && (
                            <div className="text-center text-black">
                                {successMessage}
                            </div>
                        )}
                    </div>
                    <form
                        className="mt-7 px-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="">
                            <h1>(NB: all fields are required)</h1>
                            <div className="flex flex-col gap-y-2 p-2">
                                <label
                                    className="font-Belanosima font-normal text-[16px]"
                                    htmlFor=""
                                >
                                    Names
                                </label>
                                <input
                                    name="Names"
                                    className="input_form"
                                    type="text"
                                    {...register("Names", {
                                        required: true,
                                    })}
                                />
                            </div>

                            <div className="flex  flex-col gap-y-2 p-2">
                                <label
                                    className="font-Belanosima font-normal text-[16px]"
                                    htmlFor=""
                                >
                                    Email
                                </label>
                                <input
                                    name="Email"
                                    className="input_form"
                                    placeholder="@.com"
                                    type="text"
                                    {...register("Email", {
                                        required: true,
                                    })}
                                />
                            </div>

                            <div className="flex  flex-col gap-y-2 p-2">
                                <label
                                    className="font-Belanosima font-normal text-[16px]"
                                    htmlFor=""
                                >
                                    WhatsApp Number
                                </label>
                                <input
                                    name="Number"
                                    className="input_form "
                                    type="tel"
                                    {...register("Number", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <div className="p-2">
                                <label
                                    className="font-Belanosima text-black font-normal text-[16px]"
                                    htmlFor=""
                                >
                                    Services
                                </label>
                                <select
                                    className="mt-1 rounded-md appearance-none font-normal  w-full bg-white text-black border px-4 py-2 pr-8 outline-none "
                                    name="Services"
                                    id="services"
                                    {...register("Services", {
                                        required: true,
                                    })}
                                >
                                    <option
                                        className="text-[12px] md:text-[15px]"
                                        value=""
                                    >
                                        Select an option...
                                    </option>
                                    <option className="cursor-pointer px-7 text-[12px] md:text-[15px] mb-3">
                                        Studio Portraits
                                    </option>
                                    <option className="cursor-pointer text-[12px] md:text-[15px] px-7">
                                        Nightlife & Outdoor
                                    </option>
                                    <option className="cursor-pointer text-[12px] md:text-[15px] px-7">
                                        Family & Maternity Shoot
                                    </option>
                                    <option className="cursor-pointer text-[12px] md:text-[15px] px-7">
                                        Fashion Look Book & Hair Campaign
                                    </option>
                                </select>
                            </div>

                            <div className="flex  flex-col gap-y-2 p-2">
                                <label
                                    className="font-Belanosima font-normal text-[16px]"
                                    htmlFor=""
                                >
                                    Date of Booking
                                </label>
                                <input
                                    name="Date"
                                    className="border border-solid border-gray-300 outline-none p-2 rounded-md bg-gray-200"
                                    type="date"
                                    {...register("Date", {
                                        required: true,
                                    })}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-x-3 justify-center mt-4">
                            <button
                                className="bg-[#c94040] text-white py-2 px-4 rounded-md"
                                onClick={() => {
                                    setOpenModal(false)
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-[#a7a28f]  text-white py-2 px-4 rounded-md"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Modal

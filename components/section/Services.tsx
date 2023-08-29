import { FC } from "react"
import HexBlue from "../icons/HexBlue"
import Link from "next/link"
import Image from "next/image"
import IntroServices from "./IntroServices"

const Services: FC = () => {
    return (
        <section id="services" className="">
            <div className=" mx-auto max-w-container items-center py-20">
                <IntroServices />
            </div>
        </section>
    )
}

export default Services
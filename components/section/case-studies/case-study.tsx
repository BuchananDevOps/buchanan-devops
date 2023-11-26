import { FC } from "react"
import { CaseStudy } from "@/lib/caseStudies"
import Image from "next/image"

import Link from "next/link"

const CaseStudy: FC<CaseStudy> = ({
    company, 
    description,
    extended,
    alt,
    image,
    logo,
    slug
}) => { 

    return (
    <>
        <Link href={`/case-studies/${slug}`}>
        <div id="cs_item" className="relative mb-10">
            <div id="cs_top" className="relative rounded-md flex flex-col justify-center items-center">
                <div id="cs_logo_wrapper" className="flex justify-center -mb-9 z-30 items-center h-18 px-7 rounded-md bg-[rgba(9,9,11,0.97)] hover:bg-[rgba(9,9,11,0.85)] bg-[image:radial-gradient(221.02%_101.62%_at_50%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_78.73%)] shadow-[0_2px_20px_rgba(0,0,0,0.5),0_20px_28px_rgba(0,0,0,0.4),inset_0_0.5px_0_rgba(153,253,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                    <div id="cs_logo" className="">
                        <Image className="h-12 w-full " src={logo} alt={`${company} Logo`} width={50} height={50} />
                    </div>
                </div>
                <Image className="inset-0 h-full w-full ring-1 ring-slate-700/50 contrast-125 rounded-t-md" src={image} alt={`${alt}`} width={500} height={500} />
            </div>
            <div id="cs_bottom" className="p-6 bg-neutral-950">
                <div id="cs_menu" className=" mb-2">
                    <div id="cs_title" className="">
                        <p className=" text-base text-slate-300 leading-6">{description}</p>
                    </div>
                </div>
                <div id="cs_tooltip" className="">
                <p className="w-full flex-none text-[0.8125rem] leading-6 text-slate-400">
                    {extended}
                </p>
                
                </div>
            </div>
        </div>
        </Link>
        
    </>
    )
}

export default CaseStudy
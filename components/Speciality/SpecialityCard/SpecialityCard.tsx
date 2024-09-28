import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface SpecialtityCardPropsType{
    logo: string;
    numbers: string;
    title: string;
}

const SpecialityCard = ({logo, numbers, title}: SpecialtityCardPropsType) => {
    return (
        <div className="flex flex-col item-center justify-center text-center">
            <Image src={logo} alt="logo" width={60} height={60}  className="mx-auto w-16 h-auto" />
            <h1 className="font-heading font-bold text-[2rem]">{numbers}</h1>
            <p className="font-text text-gray-400">{title}</p>
        </div>
    )
}

export default SpecialityCard
"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
    images: string[]
}

export function ImageSlider({ images }: Props) {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

    function handleChangeImage(image: number) {
        setSelectedImageIndex(image)
    }

    return (
        <div className="max-w-sm mx-auto md:mx-0">
            <div className="">
            <Image 
                src={images[selectedImageIndex]}
                alt=""
                width={380}
                height={380}
                style={{ height: "auto" }}
                className="max-w-full max-h-96"
                unoptimized
            />
            </div>
            <div className="grid grid-cols-4 gap-6 mt-7">
                {images.map((image, index) => (
                    <div
                    onClick={() => handleChangeImage(index)}
                    key={index} 
                    className={`cursor-pointer border-2 ${index === selectedImageIndex ? 'border-blue-500': ''}`}>
                        <Image 
                            src={image}
                            alt=""
                            width={120}
                            height={120}
                            className="max-h-20"
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
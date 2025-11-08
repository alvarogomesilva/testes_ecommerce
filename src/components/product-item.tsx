"use client"

import { Product } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {
    data: Product
}

export function ProductItem({ data }: Props) {
    const [liked, setLiked] = useState(data.liked)
    const link = `/product/${data.id}`

    function toggleLiked() {
        setLiked(!liked)
    }

    return (
        <div className="bg-white rounded-sm">
            {/* <div className="flex justify-end">
                <div 
                onClick={toggleLiked}
                className="cursor-pointer size-12 border border-gray-200 rounded-sm flex items-center justify-center">
                    {liked &&
                        <Image
                            src={'/assets/ui/heart-3-fill.png'}
                            alt=""
                            width={24}
                            height={24}
                        />
                    }
                    {!liked &&
                        <Image
                            src={'/assets/ui/heart-3-line.png'}
                            alt=""
                            width={24}
                            height={24}
                        />}
                </div>
            </div> */}

            <div className="">
                <Link href={link}>
                    <Image
                        src={data.image}
                        alt={data.label}
                        width={200}
                        height={200}
                        className="w-full h-60 rounded-t-sm"
                    />
                </Link>
            </div>

            <div className="mt-9 text-lg font-bold pl-6">
                <Link href={link}>
                    {data.label}
                </Link>
            </div>
            <div className="mt-3 text-2xl font-bold text-blue-600 pl-6">
                <Link href={link}>
                    R$ {data.price.toFixed(2)}
                </Link>
            </div>
            <div className="mt-5 text-gray-400 pl-6 pb-6">Pagamento via pix</div>
        </div>
    )
}
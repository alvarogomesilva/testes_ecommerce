"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
    text: string
}

export function ProductDescription({ text }: Props) {
    const [opened, setOpened] = useState(false)

    return (
        <div className="bg-white border border-gray-200 px-7 mt-20">
            <div className={`flex items-center justify-between py-7 ${opened ? 'border-b': 'border-0'} border-gray-200`}>
                <div className="text-xl">Informações do produto</div>
                <div className="size-14 border border-gray-200 flex items-center justify-center rounded-sm cursor-pointer"
                onClick={() => setOpened(!opened)}
                >
                    <Image
                        src={'/assets/ui/arrow-left-s-line.png'}
                        alt=""
                        width={24}
                        height={24}
                        className={`transition-all ${opened ? 'rotate-0': 'rotate-180'}`}
                    />
                </div>
            </div>
            {opened && (
                <div className="text-gray-500 my-12">
                    {text}
                </div>
            )}
        </div>
    )
}
import Image from "next/image";

type Props = {
    src: string
    alt: string
    selected?: boolean
    srcSelected?: string
}

export function HeaderIcon({ src, alt, selected, srcSelected }: Props) {
    return (
        <div className={`size-12 
                                border border-gray-200 rounded-sm flex items-center justify-center ${selected ? 'bg-blue-500': 'hover:bg-gray-200'}`}>
           {selected && srcSelected && (
             <Image
                src={srcSelected}
                alt={alt}
                width={24}
                height={24}
                className="size-6"
            />
           )}
           {!selected && (
             <Image
                src={src}
                alt={alt}
                width={24}
                height={24}
                className="size-6"
            />
           )}
        </div>
    )
}
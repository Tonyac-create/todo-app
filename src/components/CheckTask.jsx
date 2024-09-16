import Image from 'next/image'
import React from 'react'

export default function CheckTask({ checked, onCheck }) {

    return (
        <div
            onClick={onCheck}
            className={`flex items-center justify-center w-5 h-5 border-2 border-LTVeryLightGrayishBlue rounded-full cursor-pointer ${checked ? "bg-gradient-to-r from-linearGradient1 to-linearGradient2 border-0" : "bg-white"}`}
        >
            {checked && (
                <Image
                    src="/icon-check.svg"
                    width={10}
                    height={10}
                    alt='icone checked task'
                />
            )}
        </div>
    )
}

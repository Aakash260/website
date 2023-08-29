import React, { useState } from 'react'

const SingleImage = ({ image = [{ url: "" }] }) => {

    const [changeimage, setChangeImage] = useState(image[0].url)

    return (
        <>
            <div className="md:col-span-2">
                <img src={changeimage} alt={changeimage.filename} className="w-full rounded-md shadow-md" />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {image.map((item, i) => {
                    return <img src={item.url}
                        alt="Product 1"
                        className="w-full rounded-md shadow-md cursor-pointer"
                        key={i}
                        onClick={() => setChangeImage(item.url)}
                    />
                })}

            </div>
        </>
    )
}

export default SingleImage
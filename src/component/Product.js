import React, { useEffect, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

function Product() {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const params = useSearchParams();

    const balance = params[0].get("page") || 60

    const getData = () => {
        fetch('https://ctf-dp.vercel.app/api/v1/product')
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div class="py-20 bg-gray-50">
            <div class="container mx-auto px-6 md:px-12 xl:px-32">
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">{`Your balance: $${(balance || 0) * 100}`}</h2>
                </div>
                <div class="mb-16 text-center">
                    <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">List all products</h2>
                </div>
                <div class="grid gap-12 items-center md:grid-cols-3">
                    {
                        data.map((item, index) => {
                            return (
                                <div
                                    key={index.toString()}
                                    class="space-y-4 text-center">
                                    <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                                        src={item.imageUrl} alt="woman" loading="lazy" width="600" height="400" />
                                    <div>
                                        <h4 class="text-2xl">
                                            <a href="#" class="text-gray-900 font-bold">{item.name}</a>
                                        </h4>
                                        <span class="block text-sm text-gray-500">{`Price: ${item.price} $`}</span>
                                        <NavLink to={`/checkout?productId=${item.id}&productName=${item.name}&balance=${balance}`}>
                                            <a href='#'>
                                                <h4
                                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                                    Buy
                                                </h4>
                                            </a>
                                        </NavLink >
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product
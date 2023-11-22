import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Checkout() {

    const params = useSearchParams();

    const [name, setName] = useState("")

    const balance = params[0].get("balance")
    const productName = params[0].get("productName")
    const productId = params[0].get("productId")

    const onBuyProduct = () => {
        if (name == "") {
            return;
        }

        fetch('http://35.198.241.252/api/v1/order',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    productId: productId,
                    price: balance
                })
            }
        )
            .then(response => response.json())
            .then(response => {
                if (response?.name) {
                    alert("Buy success")
                }
                else {
                    alert("Buy fail")
                }
                console.log(response)
            })
    }

    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="container px-6 py-12 mx-auto">
                <div class="lg:flex lg:items-center lg:-mx-6">
                    <div class="lg:w-1/2 lg:mx-6">
                        <h1 class="text-3xl font-semibold text-gray-800  dark:text-white lg:text-4xl">
                            Your balance is ${(balance || 0) * 100}
                        </h1>
                        <div class="mt-6 space-y-8 md:mt-8">
                            <p class="flex items-start -mx-2">
                                <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                    Your product: {productName.toUpperCase()}
                                </span>
                            </p>
                            <p class="flex items-start -mx-2">
                                <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                    Your product ID: {productId.toUpperCase()}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div class="mt-8 lg:w-1/2 lg:mx-6">
                        <div
                            class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 class="text-lg font-medium text-gray-700">What is your name?</h1>
                            {
                                name !== "" ?
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input
                                            onChange={
                                                (e) => {
                                                    setName(e.target.value)
                                                }
                                            }
                                            type="text" placeholder="Nguyen Van A" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    :
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                        <input
                                            onChange={
                                                (e) => {
                                                    setName(e.target.value)
                                                }
                                            }
                                            type="text" placeholder="Nguyen Van A" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-red-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        <p class="block mb-2 text-sm text-red-600 red:text-red-200">Full Name</p>
                                    </div>
                            }
                            <button
                                onClick={
                                    () => {
                                        onBuyProduct()
                                    }
                                }
                                class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Buy this product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Checkout
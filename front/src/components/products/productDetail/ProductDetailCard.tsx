'use client'
import Toast from '@/components/alerts/Toast'
import { IProduct } from '@/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface ProductDetailProps {
	product: IProduct | any
}
export const ProductDetailCard: React.FC<ProductDetailProps> = ({ product }) => {
	const [showToast, setShowToast] = useState(false)
	const [infoToast, setInfoToast] = useState(false)
	const [errorToast, setErrorToast] = useState(false)

	useEffect(() => {
		if (showToast || infoToast || errorToast) {
			const timeout = setTimeout(() => {
				setShowToast(false)
				setInfoToast(false)
				setErrorToast(false)
			}, 3000)
			return () => clearTimeout(timeout)
		}
	}, [showToast, infoToast, errorToast])

	const addToCart = () => {
		const userToken: string | any = localStorage.getItem('authToken') || null
		console.log(userToken)

		if (!userToken) {
			setInfoToast(true)
			// alert('Debes iniciar sesion para agregar productos al carrito')
			return
		}
		// console.log('agregar al carrito')
		const cart = JSON.parse(localStorage.getItem('cart') || '[]')
		const productAlreadyInCart = cart.some((item: IProduct) => item.id === product.id)

		if (!productAlreadyInCart) {
			cart.push(product)
			localStorage.setItem('cart', JSON.stringify(cart))
			setShowToast(true)
		} else {
			setErrorToast(true)
		}
	}

	return (
		<div className='flex flex-col'>
			<h1 className='text-3xl ml-2 font-light my-4 sm:text-5xl '>{product?.name}</h1>
			{showToast && <Toast message='Added to cart' type='success' />}
			{errorToast && <Toast message='Product already in cart' type='error' />}
			{infoToast && <Toast message='You must be logged in before adding products to cart' type='info' />}
			<div className='flex flex-col lg:flex-row'>
				<div>
					<Image className='m-3 w-72 min-w-72 max-w-300 h-80 rounded-2xl' width={300} height={200} src={product?.image} alt={product?.name} />
				</div>
				<div className='flex flex-col px-4 lg:pl-10 gap-5 justify-around items-start'>
					<p className='italic'>{product?.description}</p>
					<p>Category: {product?.category}</p>
					<p className='font-semibold'> ${product?.price}</p>
					<button
						type='button'
						onClick={addToCart}
						className='text-orange-500 text-lg px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductDetailCard

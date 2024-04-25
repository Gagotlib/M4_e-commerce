/* eslint-disable react/no-unescaped-entities */
'use client'
import Toast from '@/components/alerts/Toast'
import ProductCard from '@/components/products/productCard'
import { IProduct } from '@/types'
import { createOrder } from '@/utils/getOrders'
import { fetchAllProducts } from '@/utils/getProducts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const Cart = () => {
	const router = useRouter()
	const [infoToast, setInfoToast] = useState(false)
	const [showToast, setShowToast] = useState(false)
	const [cart, setCart] = useState<IProduct[]>([])
	// const fetchedProducts = await fetchAllProducts()

	useEffect(() => {
		const storedCart = JSON.parse(localStorage?.getItem('cart') || '[]')
		setCart(storedCart)
	}, [])

	// const cart = JSON.parse(localStorage?.getItem('cart') || '[]')
	const total = cart.reduce((suma: number, product: IProduct) => suma + product.price, 0)

	useEffect(() => {
		if (infoToast) {
			const timeout = setTimeout(() => {
				setInfoToast(false)
			}, 3000)
			return () => clearTimeout(timeout)
		}
	}, [infoToast])

	useEffect(() => {
		if (showToast) {
			const timeout = setTimeout(() => {
				setShowToast(false)
				router.push('/orders')
			}, 3000)
			return () => clearTimeout(timeout)
		}
	}, [showToast, router])

	const userToken: string | any = localStorage?.getItem('authToken') || null
	const handleCeckout = async () => {
		const orderProducts = new Set(cart.map((product: IProduct) => product.id))
		const productsId: number[] = Array.from(orderProducts).map(Number)

		const response = await createOrder(productsId, userToken)
		localStorage.setItem('cart', '[]')
		setShowToast(true)
	}
	const removeFromCart = (productId: number | undefined) => () => {
		const updatedCart = cart.filter((product: IProduct) => product.id !== productId)
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		setCart(updatedCart)
		setInfoToast(true)
	}

	return (
		<div className='h-full sm:h-screen'>
			<div className='h-full min-h-screen sm:h-auto w-full flex flex-col items-center pt-24'>
				<h1 className='title'> This is your Cart</h1>
				{showToast && <Toast message='Thank you for your order' type='success' />}
				{infoToast && <Toast message='Product removed from Cart' type='info' />}
				{cart.length === 0 ? (
					<div className='text-center h-auto'>
						<h1 className='subtitle'>Ups. It looks like you don't have any products in your cart</h1>
					</div>
				) : (
					<div className='grid gap-2 h-auto max-w-90 min-w-200px  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
						{cart.map((product: IProduct, index: number) => (
							<div key={index}>
								<ProductCard product={product} />
								<button
									className='text-white text-lg px-4 py-2 rounded-lg bg-red-500 border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
									type='button'
									onClick={removeFromCart(product.id)}
								>
									Remove from cart
								</button>
							</div>
						))}
					</div>
				)}
				<br />
				{cart.length === 0 ? (
					<div className='flex flex-col items-center sm:flex-row gap-4'>
						<Link href='/'>
							<button type='button' className='text-orange-500 text-lg px-4 py-2 w-56 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'>
								Home
							</button>
						</Link>
						<Link href='/categorias'>
							<button type='button' className='text-orange-500 text-lg px-4 py-2 w-56 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'>
								Categories
							</button>
						</Link>
						<Link href='/products'>
							<button type='button' className='text-orange-500 text-lg px-4 py-2 w-56 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'>
								Products
							</button>
						</Link>
					</div>
				) : (
					<div>
						<h3 className='text-2xl pb-2'>Total: ${total}</h3>
						<button
							type='button'
							onClick={handleCeckout}
							className='text-orange-500 text-lg px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
						>
							Checkout
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart

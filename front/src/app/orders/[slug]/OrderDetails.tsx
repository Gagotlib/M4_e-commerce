'use client'
import ProductCard from '@/components/products/productCard'
import { IOrder, IProduct } from '@/types'
import { fetchAllOrders } from '@/utils/getOrders'
import { fetchAllProducts } from '@/utils/getProducts'
import Link from 'next/link'
import React from 'react'

type Props = {}
// const rutaOrdens = 'http://localhost:3001/users/orders'
const rutaOrders = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
const userToken: string | any = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null

export const OrderDetails = async ({ params }: { params: { slug: string } }) => {
	const products: IProduct[] | undefined = await fetchAllProducts()
	const orders: IOrder[] = await fetchAllOrders(`${rutaOrders}/users/orders`, userToken)
	const order = orders.find((order) => order.id === parseInt(params.slug))
	let orderTotal = 0
	let fecha = ''
	let hora = ''
	if (order && order.products) {
		fecha = order.date.toLocaleString().split('T')[0]
		hora = order.date.toLocaleString().split('T')[1]
		for (const product of order.products) {
			orderTotal += product.price
		}
	} else {
		console.log('No se encontró la orden o no tiene productos.')
	}
	const matchedProducts = products?.filter((product) => order?.products.some((orderProduct) => orderProduct.id === product.id))
	// console.log(matchedProducts)

	return (
		<div className='h-full sm:h-screen px-10'>
			<div className='h-full min-h-screen w-full flex flex-col pt-24 gap-2 items-center'>
				<h1 className='text-xl font-normal my-4 sm:text-5xl '>Order Details</h1>
				<p className='font-semibold'>Number of order: ######{order?.id} </p>
				<p>Date : {fecha} </p>
				<p>Time : {hora} </p>
				<p>Status : {order?.status}</p>
				<p>Amount of products: {order?.products.length}</p>
				<p>Products:</p>
				<ul className='grid gap-2 h-auto max-w-90 min-w-200px  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
					{matchedProducts?.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</ul>
				<p>Total: ${orderTotal}</p>

				<Link
					href='/orders'
					className=' w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
				>
					Back to Orders
				</Link>
			</div>
		</div>
	)
}

export default OrderDetails

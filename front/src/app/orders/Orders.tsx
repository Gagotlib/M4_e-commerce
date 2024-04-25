'use client'
import OrderCard from '@/components/orders/OrderCard'
import { IOrder } from '@/types'
import { fetchAllOrders } from '@/utils/getOrders'
import Link from 'next/link'
import React from 'react'

type Props = {}

// const rutaOrdens = 'http://localhost:3001/users/orders'
const rutaOrders = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
console.log(rutaOrders)

const userToken: string | any = localStorage?.getItem('authToken') || null

export const Orders = async (props: Props) => {
	const orders: IOrder[] = await fetchAllOrders(`${rutaOrders}/users/orders`, userToken)

	return (
		<div className='h-full min-h-screen'>
			<div className='h-full min-h-screen w-full flex flex-col items-center pt-24'>
				<h1 className='title'>This are your Orders</h1>
				{orders.length === 0 ? (
					<p>Ups. You do not have any orders yet</p>
				) : (
					orders.map((order) => (
						<Link href={`/orders/${order.id}`} key={order.id}>
							<OrderCard order={order} />
						</Link>
					))
				)}
			</div>
		</div>
	)
}

export default Orders

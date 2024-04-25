import { IOrder } from '@/types'
import React from 'react'

export interface OrderCardProps {
	order: IOrder
}
export const OrderCard = ({ order }: OrderCardProps) => {
	let orderTotal = 0
	if (order && order.products) {
		for (const product of order.products) {
			orderTotal += product.price
		}
	} else {
		console.log('No se encontró la orden o no tiene productos.')
	}
	const fecha = order.date.toLocaleString().split('T')
	return (
		<div className='flex  items-center border-solid border-2 p-4 rounded-md hover:shadow-md mb-4 sm:w-full '>
			<p className='text-center font-bold pr-10'>
				Date: <span className='font-normal'> {fecha[0]}</span>
			</p>
			<p className='text-center  font-bold pr-10'>
				Products: <span className='font-normal'> {order.products.length}</span>
			</p>
			<p className='text-center  font-bold  pr-10'>
				Status: <span className='font-normal'> {order.status}</span>
			</p>
			<p className='text-center  font-bold'>
				Total: <span className='font-normal'> ${orderTotal}</span>
			</p>
		</div>
	)
}

export default OrderCard

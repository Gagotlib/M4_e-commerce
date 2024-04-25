import { IProduct } from '@/types'
import axios from 'axios'

// export const rutaOrdens = 'http://localhost:3001/users/orders'
// const userToken = process.env.NEXT_PUBLIC_AUTHORIZATION
// const userToken = localStorage.getItem('authToken') || null

export const fetchAllOrders = async (ruta: string, token: string) => {
	try {
		if (!token) {
			throw new Error('User token not found')
		}
		const response = await axios.get(ruta, {
			headers: {
				Authorization: token
			}
		})
		const data = response.data
		return data
	} catch (error: any) {
		throw error
	}
}

export const createOrder = async (products: number[], token: string | null) => {
	const rutaOrders = process.env.NEXT_PUBLIC_EXT_URL || 'http://localhost:3001'
	console.log(rutaOrders)

	try {
		const response = await axios.post(`${rutaOrders}/orders`, { products }, { headers: { Authorization: token } })
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}

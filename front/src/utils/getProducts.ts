import { IProduct } from '@/types'
import { categoriesToPreLoad } from './categories'
import { productosconimagenes } from './productsimgs'
import axios from 'axios'


export const fetchAllProducts = async () => {
	const rutaProducts = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

	try {
		const response = await axios.get(`${rutaProducts}/products`)
		// console.log(response)

		const data: IProduct[] = response.data

		// a cada producto le cambio la categoria numero por nombre
		const products = data.map((product) => {
			if (product.name === 'HomePod mini') {
				product.categoryId = 4
			}
			const category = categoriesToPreLoad.find((category) => category.id === product.categoryId)
			return {
				...product,
				category: category ? category.name : 'Unknown Category', // En caso de no encontrar la categoría
				image: productosconimagenes.find((item) => item.name === product.name)?.image || '/default-image.jpg' // Buscar y asignar la imagen correspondiente al producto
			}
		})
		// console.log(products)

		return products
	} catch (error) {
		console.log(error)
	}
}

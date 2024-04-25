import React from 'react'
import { ProductsContainer } from '../products/ProductsContainer'
import CategoriesContainer from '../categories/CategoriesContainer'
import { IProduct } from '@/types'
import { fetchAllProducts } from '@/utils/getProducts'
import { categoriesToPreLoad } from '@/utils/categories'

export const Home = async () => {
	const products: IProduct[] | undefined = await fetchAllProducts()

	return (
		<>
			<div className=' bg-white h-full w-full flex flex-col items-center pt-24'>
				<h1 className='title'>You could like these</h1>
				<ProductsContainer products={products} />

				<h1 className='title'>New products</h1>
				<ProductsContainer products={products} />

				<h1 className='title'>Categories</h1>
				<CategoriesContainer categories={categoriesToPreLoad} />
			</div>
		</>
	)
}

export default Home

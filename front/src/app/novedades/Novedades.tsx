import { ProductsContainer } from '@/components/products/ProductsContainer'
import { IProduct } from '@/types'
import { fetchAllProducts } from '@/utils/getProducts'
import React from 'react'

export const Novedades = async () => {
	const products: IProduct[] | undefined = await fetchAllProducts()
	return (
		<div className=' h-full sm:h-full md:h-screen lg:h-screen'>
			<div className=' w-full h-full flex flex-col items-center pt-24'>
				<h1 className='title'>This products are new in the market</h1>
				<ProductsContainer products={products} />
			</div>
		</div>
	)
}

export default Novedades

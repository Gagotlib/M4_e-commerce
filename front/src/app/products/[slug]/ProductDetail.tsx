import ProductsContainer from '@/components/products/ProductsContainer'
import ProductDetailCard from '@/components/products/productDetail/ProductDetailCard'
import { IProduct } from '@/types'
import { fetchAllProducts } from '@/utils/getProducts'
import React from 'react'

export const ProductDetail = async ({ params }: { params: { slug: string } }) => {
	const fetchedProducts = await fetchAllProducts()

	// formateo el slug para poder buscar el nombre en mis productos traidos
	const formattedSlug = params.slug.replace(/%20/g, ' ').toLowerCase()

	const product: IProduct | undefined = fetchedProducts?.find((product) => product.name.toLowerCase() === formattedSlug)
	const ProductsLeft: IProduct[] | undefined = fetchedProducts?.filter((product) => product.name.toLowerCase() !== formattedSlug)
	// console.log(product)

	return (
		<div className='h-full sm:h-full px-10'>
			<div className='h-3/4 w-full flex flex-col items-center pt-24'>
				<h1 className='title'>Product detail </h1>
				<ProductDetailCard product={product} />
				<h3 className='subtitle'>Maybe you are interestes in these products:</h3>
				<ProductsContainer products={ProductsLeft} />
			</div>
		</div>
	)
}

export default ProductDetail

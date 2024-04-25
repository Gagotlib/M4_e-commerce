import CategoriesContainer from '@/components/categories/CategoriesContainer'
import ProductCard from '@/components/products/productCard'
import { ICategory } from '@/types'
import { categoriesToPreLoad } from '@/utils/categories'
import { fetchAllProducts } from '@/utils/getProducts'
import React from 'react'

export const Category = async ({ params }: { params: { slug: string } }) => {
	const fetchedProducts = await fetchAllProducts()
	const products = fetchedProducts?.filter((product) => product.category === params.slug)
	const leftCategories: ICategory[] = categoriesToPreLoad.filter((category) => category.name !== params.slug)
	return (
		<div className='h-full px-10'>
			<div className='h-full w-full flex flex-col items-center pt-24'>
				<h1 className='title'>{params.slug}</h1>
				{products && products.length === 0 ? (
					<div className='text-center'>
						<h3 className='text-xl font-light my-4 sm:text-3xl '>Ups.. There arent any products in this category</h3>
					</div>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center'>
						{products?.map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
					</div>
				)}
				<h3 className='subtitle'>Maybe you are interestes in these categories:</h3>
				<CategoriesContainer categories={leftCategories} />
			</div>
		</div>
	)
}

export default Category

import React from 'react'
import { IProduct } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

export const ProductCard = ({ product }: { product: IProduct | any }) => {
	return (
		<>
			<Link className='' href={`/products/${product.name}`}>
				<div className='bg-white text-black italic w-40 flex flex-col rounded-lg items-center  lg:min-h-72  hover:shadow-lg '>
					<Image className='m-4 w-80 max-w-300 h-40 rounded-2xl' priority={true} width={300} height={200} src={product.image} alt={product.name} />
					<h3 className='text-center'>{product.name}</h3>
					<p>
						<strong>${product.price}</strong>
					</p>
				</div>
			</Link>
		</>
	)
}

export default ProductCard

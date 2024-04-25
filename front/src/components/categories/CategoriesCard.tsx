import { ICategory } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CategoriesCardProps {
	category: ICategory
}

export const CategoriesCard: React.FC<CategoriesCardProps> = ({ category }) => {
	return (
		<Link className='' href={`/categorias/${category.name}`}>
			<div className='bg-white text-black  w-40 flex flex-col rounded-lg items-center justify-around min-h-72 hover:shadow-lg '>
				<h1>{category.name}</h1>
				<Image className='m-4 mt-0 w-90 max-w-300  h-56  rounded-2xl' src={category.image} alt={category.name} width={200} height={200} />
			</div>
		</Link>
	)
}

export default CategoriesCard

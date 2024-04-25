import React from 'react'
import CategoriesCard from './CategoriesCard'
import { ICategory } from '@/types'

interface CategoriesContainerProps {
	categories: ICategory[]
}

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({ categories }) => {
	return (
		<div className='grid gap-2 h-auto max-w-90 min-w-200px  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 '>
			{categories.map((category) => (
				<div key={category.id}>
					<CategoriesCard category={category} />
				</div>
			))}
		</div>
	)
}

export default CategoriesContainer

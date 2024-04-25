import CategoriesContainer from '@/components/categories/CategoriesContainer'
import { categoriesToPreLoad } from '@/utils/categories'
import React from 'react'

type Props = {}

const Categories = (props: Props) => {
	return (
		<div className='h-full w-full flex flex-col items-center pt-24'>
			<h1 className='title'> Categories</h1>
			<CategoriesContainer categories={categoriesToPreLoad} />
		</div>
	)
}

export default Categories

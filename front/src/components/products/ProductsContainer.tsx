import ProductCard from './productCard'
import { IProduct } from '@/types'

export const ProductsContainer: React.FC<{ products: IProduct[] | undefined }> = ({ products }) => {

	return (
		<div className='grid gap-2 h-auto max-w-90 min-w-200px  justify-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
			{products?.map((product: IProduct) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
export default ProductsContainer

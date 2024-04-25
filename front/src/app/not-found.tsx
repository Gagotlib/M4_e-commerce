import Link from 'next/link'

export default function PageNotFound() {
	return (
		<div className='h-screen sm:h-screen w-full flex flex-col items-center pt-24 px-10'>
			<h1 className='text-3xl font-extrabold my-4 sm:text-5xl '>Page not found</h1>
			<h3 className='text-2xl font-light my-4 sm:text-3xl '>Ups... It looks like this page does not exist or is being modified.</h3>
			<br />
			<h3>We recomend these links: </h3>
			<br />
			<div className='flex flex-col sm:flex-row items-center sm:items-end w-full justify-evenly'>
				<Link className='text-orange-500 text-lg px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500' href='/'>
					Back to Home
				</Link>
				<br />
				<Link className='text-orange-500 text-lg px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500' href='/contacto'>
					Contact us
				</Link>
				<br />
				<Link className='text-orange-500 text-lg px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500' href='/about'>
					About us
				</Link>
				<br />
			</div>
		</div>
	)
}

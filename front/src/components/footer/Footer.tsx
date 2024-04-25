import Link from 'next/link'
import React from 'react'

const Footer: React.FC = (): React.ReactElement => {
	return (
		<div className='mt-10'>
			<footer className=' shadow bg-gray-900 '>
				<div className='w-full max-w-screen-xl mx-auto p-1 md:py-8'>
					<div className='sm:flex sm:items-center sm:justify-between'>
						<ul className='flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-white'>
							<li>
								<Link href='/' className='hover:underline me-4 md:me-6'>
									Home
								</Link>
							</li>
							<li>
								<Link href='/about' className='hover:underline me-4 md:me-6'>
									About us
								</Link>
							</li>

							<li>
								<Link href='/contacto' className='hover:underline'>
									Contact us
								</Link>
							</li>
						</ul>
					</div>
					<hr className='my-2 ' />
					<Link href='https://github.com/Gagotlib'>
						<span className='block text-sm text-white sm:text-center hover:underline'>© 2024 Made by Gabriel Gotlib</span>
					</Link>
				</div>
			</footer>
		</div>
	)
}

export default Footer

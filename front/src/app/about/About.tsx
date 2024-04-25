import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function About({}: Props) {
	return (
		<div className='h-full  w-full flex flex-col items-center pt-24 px-10'>
			<h1 className='title'> About us</h1>
			<p>
				Since its foundation in 2010 by Gabriel Gotlib, Gabyto Electronics has stood out as a family-owned company dedicated to marketing top-quality electronic products. Specializing in a wide range
				of products, from cell phones and tablets to laptops, headphones, and printers, our company is distinguished by offering personalized attention and comprehensive services that go beyond simple
				sales.
			</p>
			<br />
			<p>
				At Gabyto Electronics, our mission is simple yet powerful: to provide high-quality products and exceptional service at affordable prices. We take pride in offering personalized attention to
				each customer, ensuring that their needs and expectations are fully understood and satisfied.
			</p>
			<br />
			<p>
				As authorized distributors of products from leading brands such as Apple, we have earned the trust of our customers throughout Argentina. Our family operation allows us to maintain close
				contact with our customer base, guaranteeing fast and efficient service at all times.
			</p>
			<br />
			<p>
				In addition to product sales, at Gabyto Electronics, we offer a range of additional services, including repairs, configurations, spare parts sales, and expert advice. Our highly trained team
				is always ready to help our customers make the most of their electronic devices.
			</p>
			<br />
			<p>
				At Gabyto Electronics, we strive to build strong and lasting relationships with our customers, based on trust, integrity, and a commitment to excellence. If you are looking for a reliable
				partner in technology, look no further than Gabyto Electronics!
			</p>

			<br />
			<h1 className='title'> About this proyect</h1>
			<div className='flex flex-col sm:flex-row'>
				<Image src='/assets/yo.jpg' alt='Gabriel Gotlib' width={200} height={200} className='rounded-xl '></Image>
				<div className='pl-4'>
					<h3 className='subtitle'>Hi! </h3>
					<p>
						I am Gabriel Gotlib, 34 years old. I am studying Full Stack Web Development at Henry. I have a degree in Business Administration from the University of Buenos Aires. 10 years of experience
						working at the Banco de la Provincia de Buenos Aires in different sectors.
					</p>
					<br />
					<p>
						This project was done with Next.js and TypeScript. Styles were incorporated with Tailwind and Styled Components. The pages corresponding to the detail of each product and to the categories
						are dynamic.
					</p>

					<div className='flex items-center pt-4'>
						<p>If you want yo contact me, you can find me here: </p>
						<Link href='https://github.com/Gagotlib' className='pl-2'>
							<Image src='/assets/github-mark.png' alt='github' width={50} height={50} />
						</Link>
						<Link href='https://www.linkedin.com/in/gabriel-gotlib-5855197b' className='pl-2'>
							<Image src='/assets/iconolinkedin.png' alt='github' width={50} height={50} />
						</Link>
					</div>
				</div>
			</div>

			<div className='flex flex-col sm:flex-row items-center sm:items-end w-full justify-evenly pt-4'>
				<Link className='  w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500' href='/'>
					Back to Home
				</Link>
				<br />
				<Link
					className=' w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
					href='/contacto'
				>
					Contact
				</Link>
			</div>
		</div>
	)
}

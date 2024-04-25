'use client'
import Toast from '@/components/alerts/Toast'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const Contact = () => {
	const [showToast, setShowToast] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (showToast) {
			const timeout = setTimeout(() => {
				setShowToast(false)
				router.push('/')
			}, 3000)
			return () => clearTimeout(timeout)
		}
	}, [showToast, router])

	function handleOnSubmit(e: { preventDefault: () => void }) {
		e.preventDefault()
		setShowToast(true)
		return
	}

	return (
		<div className='h-full sm:h-screen w-full flex flex-col items-center pt-24 px-10'>
			<h1 className='title'> Contact us</h1>
			{showToast && <Toast message='Your message has been sent correctly' type='success' />}
			<form className='flex flex-wrap flex-col justify-center items-center gap-4 m-4 text-center border-2 border-gray-200 rounded-xl p-4 w-full text-lg h-auto' onSubmit={handleOnSubmit}>
				<div className='flex flex-wrap flex-col sm:flex-row justify-center items-center w-4/5'>
					<label className='flex flex-row flex-wrap items-center pr-1' htmlFor='name'>
						Name :
					</label>
					<input className='border rounded-lg p-3 text-lg w-4/5' type='text' name='name' id='name' placeholder='Your Name' required />
				</div>
				<div className=' flex flex-wrap flex-col sm:flex-row justify-center items-center w-4/5'>
					<label className='flex flex-row flex-wrap  items-center pr-1' htmlFor='email'>
						Email :
					</label>
					<input className='border rounded-lg p-3 text-lg  w-4/5' type='email' name='email' id='email' placeholder='Your Email' required />
				</div>
				<div className='flex flex-wrap flex-col sm:flex-row justify-center items-center w-4/5'>
					<label className='flex flex-row flex-wrap items-center pr-1' htmlFor='consulta'>
						Message :
					</label>
					<textarea className='border rounded-lg p-3 text-lg h-auto  w-4/5' name='consulta' id='consulta' placeholder='Your message' required />
				</div>
				<div>
					<button
						className=' w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
						type='submit'
					>
						Send
					</button>
				</div>
			</form>

			<div className='flex flex-col sm:flex-row items-center sm:items-end w-full justify-evenly'>
				<Link className=' w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500' href='/'>
					Back to Home
				</Link>
				<br />
				<Link className=' w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500' href='/about'>
					About us
				</Link>
				<br />
			</div>
			<br />
			<div className='flex items-center'>
				<p>If you want to contact the creator of this web: </p>
				<Link href='https://github.com/Gagotlib' className='pl-2'>
					<Image src='/assets/github-mark.png' alt='github' width={50} height={50} />
				</Link>
				<Link href='https://www.linkedin.com/in/gabriel-gotlib-5855197b' className='pl-2'>
					<Image src='/assets/iconolinkedin.png' alt='github' width={50} height={50} />
				</Link>
			</div>
		</div>
	)
}

export default Contact

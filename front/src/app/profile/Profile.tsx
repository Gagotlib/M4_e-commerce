'use client'
import Link from 'next/link'
import React from 'react'

export const Profile = () => {
	//! si tuviera un servicio que me trae a un usuario por su id, podria traerme el id del params, y usarlo para traer la info del back en vez del local storage
  
	const userString = localStorage.getItem('user')
	const user = userString ? JSON.parse(userString) : null
  // console.log(user)
  
	return (
		<div className='h-screen  px-10'>
			<div className='h-3/4 w-full flex flex-col pt-24 gap-4 items-center'>
				<h1 className='title'>My profile</h1>
				<p>Name: {user?.name}</p>
				<p>Email: {user?.email}</p>
				<p>Address: {user?.address}</p>
				<p>Phone: {user?.phone} </p>
				<Link
					href='/orders'
					className=' w-56 text-orange-500 text-lg text-center px-4 py-2 rounded-lg bg-white border-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500'
				>
					My orders
				</Link>
			</div>
		</div>
	)
}

export default Profile

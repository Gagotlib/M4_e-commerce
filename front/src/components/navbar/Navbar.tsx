'use client'

import React, { useState } from 'react'
import { Overlay, StyledHeader, StyledInput, StyledLink, StyledMenuIconDiv, StyledMobileMenu, StyledNavDiv, StyledNavbar, StyledProfileDiv, StyledSearchButton, StyledSubNavDiv } from './navbar.styles'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { Pixelify_Sans } from 'next/font/google'

const pixelify = Pixelify_Sans({ subsets: ['latin'] })

export const Navbar: React.FC = (): React.ReactElement => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isProfileOpen, setIsProfileOpen] = useState(false)

	const toggleMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
		setIsProfileOpen(false)
	}

	const toggleProfile = () => {
		setIsProfileOpen(!isProfileOpen)
		setIsMobileMenuOpen(false)
	}

	const toggleOverlay = () => {
		setIsMobileMenuOpen(false)
		setIsProfileOpen(false)
	}

	const userToken = typeof window !== 'undefined' ? localStorage.getItem('user') : null
	// const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null
	// const userId = user.id --> puedo usar esto para crear ruta dinamica de /profile/${userId}

	const handleLogout = () => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('authToken')
			localStorage.removeItem('cart')
			localStorage.removeItem('user')
		}
		redirect('/')
	}

	return (
		<StyledHeader>
			<StyledNavbar>
				<div className='flex sm:flex justify-evenly w-full mt-2'>
					<div className='text-white flex items-center'>
						<StyledMenuIconDiv onClick={toggleMenu}>
							<div className='w-7 -ml-10 -my-2 bg-black flex justify-start align-middle sm:justify-center '>☰</div>
						</StyledMenuIconDiv>
						<Link href={'/'}>
							<div className={pixelify.className}>
								<h1 className='text-lg sm:text-2xl'>Gabyto Electronics</h1>
							</div>
						</Link>
					</div>
					<StyledSubNavDiv>
						<StyledInput type='text' placeholder='Search...' />
						<StyledSearchButton>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='white' className='w-6 h-6'>
								<path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
							</svg>
						</StyledSearchButton>
					</StyledSubNavDiv>
					<div className='flex gap-4  '>
						<div className='bg-orange-500 p-2 rounded-xl h-12'>
							<Link href={'/cart'}>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='white' className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
									/>
								</svg>
							</Link>
						</div>
						<div className='bg-orange-500 p-2 rounded-xl h-12'>
							<button type='button' name='profile-button' id='profile-button' title='profile-button' onClick={toggleProfile}>
								<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='white' className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
									/>
								</svg>
							</button>
						</div>

						<StyledProfileDiv id='profile-menu' className={isProfileOpen ? 'open' : ''}>
							{userToken ? (
								<ul>
									<li onClick={toggleProfile}>
										<Link href='/profile'>My Profile</Link>
									</li>
									<li onClick={toggleProfile}>
										<Link href='/orders'>My Orders</Link>
									</li>
									<li onClick={toggleProfile}>
										<Link href='/' onClick={() => handleLogout()}>
											Logout
										</Link>
									</li>
								</ul>
							) : (
								<ul>
									<li onClick={toggleProfile}>
										<Link href='/login'>Login</Link>
									</li>
									<li onClick={toggleProfile}>
										<Link href='/register'>Register</Link>
									</li>
								</ul>
							)}
						</StyledProfileDiv>
					</div>
				</div>
				<StyledNavDiv>
					<Link href='/'>
						<StyledLink>Home</StyledLink>
					</Link>
					<Link href='/novedades'>
						<StyledLink>News</StyledLink>
					</Link>
					<Link href='/ofertas'>
						<StyledLink>Sale</StyledLink>
					</Link>
					<Link href='/products'>
						<StyledLink>Products</StyledLink>
					</Link>
					<Link href='/categorias'>
						<StyledLink>Categories</StyledLink>
					</Link>
					<Link href='/contacto'>
						<StyledLink>Contact</StyledLink>
					</Link>
					<Link href='/about'>
						<StyledLink>About us</StyledLink>
					</Link>
				</StyledNavDiv>
				<StyledMobileMenu id='mobile-menu' className={isMobileMenuOpen ? 'open' : ''}>
					<div className='flex'>
						<StyledInput type='text' placeholder='Search...' />
						<StyledSearchButton>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='white' className='w-6 h-6'>
								<path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
							</svg>
						</StyledSearchButton>
					</div>
					<Link href='/' onClick={toggleMenu}>
						<StyledLink>Home</StyledLink>
					</Link>
					<Link href='/novedades' onClick={toggleMenu}>
						<StyledLink>News</StyledLink>
					</Link>
					<Link href='/ofertas' onClick={toggleMenu}>
						<StyledLink>Sale</StyledLink>
					</Link>
					<Link href='/products' onClick={toggleMenu}>
						<StyledLink>Products</StyledLink>
					</Link>
					<Link href='/categorias' onClick={toggleMenu}>
						<StyledLink>Categories</StyledLink>
					</Link>
					<Link href='/contacto' onClick={toggleMenu}>
						<StyledLink>Contact</StyledLink>
					</Link>
					<Link href='/about' onClick={toggleMenu}>
						<StyledLink>About us</StyledLink>
					</Link>
				</StyledMobileMenu>
				<Overlay id='overlay' className={isMobileMenuOpen || isProfileOpen ? 'open' : ''} onClick={toggleOverlay} />
			</StyledNavbar>
		</StyledHeader>
	)
}

export default Navbar

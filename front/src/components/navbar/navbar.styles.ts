import styled from 'styled-components'

export const StyledNavbar = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: space-around;
	background-color: black;
	box-shadow:  0 5px 5px 0 rgba(0, 0, 0, 0.24);
`
export const StyledHeader = styled.header`
	display: inline-flex;
	flex-direction: row;
	width: 100%;
	height: 5.5rem;
	background-color: black;
	position: fixed;
`

export const StyledImageContainerDiv = styled.div`
	display: flex;
	width: 15%;
	min-width: 100px;
	height: 100%;
	border: 2px solid blue;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
`

export const StyledLogoDiv = styled.div`
	display: flex;
	width: 15%;
	min-width: 100px;
	height: 100%;
	border: 2px solid blue;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
`
export const StyledLogoSvg = styled.svg`
	height: 100%;
	border-radius: 40px;
	width: 5rem;
`

export const StyledSvg = styled.svg`
	height: 2.4rem;
	max-width: 80px;
	min-width: 40px;
	width: 2.5rem;
	border-radius: 100px;
`

export const StyledNavDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	align-items: center;
	justify-content: space-around;
	padding: 0.5em 0;

	@media screen and (max-width: 800px) {
		display: none; /* Oculta el contenido del menú */
	}
`

export const StyledSubNavDiv = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	align-items: center;
	padding: 0.5em 0;
	justify-content: space-between;
	width: auto;
	@media screen and (max-width: 800px) {
		display: none; /* Oculta el contenido del menú */
	}
`

export const StyledInput = styled.input`
	border: none;
	border-radius: 4px;
	border-bottom-right-radius: 0;
	border-top-right-radius: 0;
	height: 1.7rem;
	font-size: 1em;
	@media screen and (max-width: 800px) {
		width: 80%;
	}
`

export const StyledSearchButton = styled.button`
	cursor: pointer;
	border: none;
	height: 1.7rem;
	width: 2.2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1px;
	border-radius: 4px;
	border-bottom-left-radius: 0;
	border-top-left-radius: 0;
	background-color: orange;
`
export const StyledButton = styled.button`
	cursor: pointer;
	border: 1px solid red;
	color: white;
`

export const StyledLink = styled.p`
	text-decoration: none;
	color: white;
	cursor: pointer;
	&:hover {
		color: orange;
	}
`

export const StyledMenuIconDiv = styled.div`
	display: flex;
	cursor: pointer;
	font-size: 27px;
	border-radius: 5px;
	width: 2rem;
	height: 2rem;
	display: none;
	@media screen and (max-width: 800px) {
		display: flex;
		justify-content: space-evenly;
		width: 50%;
		align-items: baseline;
	}
`

export const StyledMobileMenu = styled.div`
	position: fixed;
	top: 77px;
	left: 0;
	height: 100%;
	width: 60%;
	background-color: black;
	z-index: 10;
	display: none; /* Inicialmente oculto */
	flex-direction: column;
	padding: 10px;

	@media screen and (min-width: 800px) {
		display: none;
	}

	&.open {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 2em;

		@media screen and (min-width: 800px) {
			display: none;
		}
	}
`
export const Overlay = styled.div`
	position: fixed;
	top: 78px;
	left: 0;
	width: 100%;
	height: 100%;
	backdrop-filter: blur(2px);
	z-index: 5;
	display: none;
	@media screen and (min-width: 800px) {
		display: none;
	}

	&.open {
		display: block; 
		@media screen and (min-width: 800px) {
			display: none;
		}
	}
`
export const StyledProfileDiv = styled.div`
	display: none;
	flex-direction: column;
	background-color: white;
	color: black;
	position: absolute;
	height: auto;
	width: 210px;
	top: 54px;
	right: 12%;
	border: 1px solid black;
	border-radius: 5px;
	z-index: 10;
	@media screen and (max-width: 800px) {
		top: 79px;
		right: 0;
	}

	&.open {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 8px;
	}

	ul {
		width: 100%;
	}
	li {
		display: flex;
		align-items: center;
		width: 100%;
		height: 32px;
	}
	li:hover {
		background-color: orange;
	}

	a {
		width: 100%;
	}
`

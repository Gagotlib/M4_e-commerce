import styled from 'styled-components'

export const StyledProductsContainer = styled.div`
	display: grid;
	gap: 0.5rem;
	height: 100%;
	max-width: 90%;
	min-width: 200px;
	align-items: stretch;
	align-content: center;
	justify-items: center;

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 700px) and (max-width: 1000px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1000px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
`
export const StyledHomeContainer = styled.div`
	padding-top: 100px;
	background-color: white;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const StyledTitle = styled.h1`
	font-size: 2rem;
`

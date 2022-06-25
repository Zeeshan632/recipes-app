import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0 30px 50px;
	width: 60vw;
`;

export const Image = styled.img`
	width: 22vw;
	height: 26vh;
	object-fit: cover;
	border: 6px solid #b88d1c;
	padding: 0;
	border-radius: 3px;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	height: 26vh;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.h1`
	padding: 0px 0px 9px 10px;
	font-size: 2rem;
`;

export const Price = styled.p`
	padding: 0px 20px 6px 0px;
	font-family: cursive;
	font-size: 25px;
	color: #b88d1c;
`;

export const Paragraph = styled.p`
	padding: 20px 0px 20px 10px;
	font-size: 1.17rem;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	color: #26373f;
`;

export const Button = styled.button`
	margin: 0px 0px 20px 10px;
	width: 20vw;
	padding: 13px;
	border: none;
	border-radius: 3px;
	color: #b88d1c;
	border: 1px solid #b88d1c;
	background: white;
	font-size: 1rem;
	cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		color: white;
		background: #b88d1c;
	}
`;

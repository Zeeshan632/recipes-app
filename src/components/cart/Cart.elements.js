import styled from "styled-components";

export const CartPage = styled.div`
	background: rgba(184, 141, 28, 0.1);
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PageHeader = styled.h1`
	font-size: 4rem;
	letter-spacing: 25px;
	font-weight: bolder;
	color: #b88d1c;
	padding: 40px;
`;

export const CardsContainer = styled.div`
	width: 75vw;
	padding: 30px;
	border: 2px solid rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	position: relative;
	width: 90%;
	height: 15vh;
	background: white;
	border: 1px solid rgba(184, 141, 28, 0.4);
	border-radius: 5px;
	display: flex;
`;

export const About = styled.div`
	width: 50%;
	height: 100%;
`;

export const Img = styled.img`
	width: 50%;
	object-fit: cover;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
`;

export const Title = styled.h3`
	padding: 10px;
	font-weight: bold;
	font-size: 1.5rem;
`;

export const Price = styled.p`
	padding: 10px;
	font-weight: bolder;
	font-size: 1.5rem;
	color: #b88d1c;
`;

export const OrdCount = styled.div`
	position: absolute;
	right: 0;
	top: 90%;
	width: 15%;
	display: flex;
	justify-content: space-between;
	background: #f8de9a;
	border-radius: 30px;
`;

export const Button = styled.button`
	background: white;
	width: 25px;
	border-radius: 50%;
	border: 1px solid rgba(184, 141, 28);
	font-weight: bolder;
	font-size: 0.9rem;
	cursor: pointer;
`;
export const Number = styled.p`
	color: #b28101;
	font-size: 1.3rem;
`;

export const Pricing = styled.div`
	width: 75vw;
	background: white;
	border: 2px solid rgba(0, 0, 0, 0.3);
	margin-top: 10px;
	display: flex;
	border-radius: 5px;
`;

export const Amount = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	align-items: center;
`;
export const OrderButton = styled.button`
	color: white;
	font-size: 1rem;
	cursor: pointer;
	width: 30%;
	background: rgb(184, 141, 28);
	border: none;
`;

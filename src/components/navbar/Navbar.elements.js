import styled from "styled-components";

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 94vw;
	margin: auto;
	padding: 10px;
	margin-top: 30px;
	margin-bottom: 30px;
	height: 10vh;
	background: #e4bc54;
	border-radius: 3px;
	box-shadow: 2px 2px 14px rgba(0, 0, 0, 0.2);
`;

export const NavlinksContainer = styled.ul`
	width: 70%;
	height: 100%;
	display: flex;
	align-items: center;
	list-style: none;
`;

export const Navlink = styled.li`
	margin: 20px;
	font-size: 1.1rem;
	letter-spacing: 2px;
	font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
		"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
	cursor: pointer;
	padding: 8px;
	transition: all 0.3s ease;
	border-radius: 3px;
	&:hover {
		background-color: #b88d1c;
		color: white;
	}
`;

export const NumOfOrders = styled.p`
	position: absolute;
	top: 100%;
	right: 0;
	color: white;
	width: 25px;
	height: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: red;
	border-radius: 50%;
`;

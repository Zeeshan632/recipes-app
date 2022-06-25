import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	NavbarContainer,
	NavlinksContainer,
	Navlink,
	NumOfOrders,
} from "./Navbar.elements";

const Navbar = ({ data, categClicked, itemsCount }) => {
	const allCateg = data.map((object) => {
		return object.category;
	});

	const filteredCateg = allCateg.filter((element, index, array) => {
		return element !== array[index - 1];
	});

	const navbar = filteredCateg.map((categ) => {
		return (
			<Navlink
				key={Math.random()}
				onClick={(e) => {
					categClicked(categ);
				}}
			>
				{categ.toUpperCase()}
			</Navlink>
		);
	});

	return (
		<NavbarContainer>
			<NavlinksContainer>{navbar}</NavlinksContainer>
			<div style={{ position: "relative" }}>
				<Link
					to="/cart"
					style={{
						padding: "0.6rem 0.95rem",
						color: "black",
						margin: "1rem",
						textDecoration: "none",
						letterSpacing: "2px",
						border: "2px solid #b88d1c",
						borderRadius: "3px",
						fontWeight: "bold",
					}}
				>
					CART
				</Link>
				<NumOfOrders>{itemsCount}</NumOfOrders>
			</div>
		</NavbarContainer>
	);
};

const mapStateToProps = (state) => {
	return { itemsCount: state.items };
};

export default connect(mapStateToProps)(Navbar);

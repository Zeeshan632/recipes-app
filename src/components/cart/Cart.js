import React from "react";
import {
	CartPage,
	CardsContainer,
	PageHeader,
	Card,
	Img,
	About,
	Title,
	Price,
	OrdCount,
	Button,
	Number,
	Pricing,
	Amount,
	OrderButton,
} from "./Cart.elements";
import data from "../../data/data.json";

const Cart = () => {
	return (
		<CartPage>
			<PageHeader>CART</PageHeader>
			<CardsContainer>
				<Card>
					<Img src={data[0].image} alt="pancake" />
					<About>
						<Title>{data[0].title}</Title>
						<Price>{data[0].price}</Price>
					</About>
					<OrdCount>
						<Button>+</Button>
						<Number>1</Number>
						<Button>-</Button>
					</OrdCount>
				</Card>
			</CardsContainer>
			<Pricing>
				<Amount>
					<Title>Total Amount: </Title>
					<Price>{data[0].price}</Price>
				</Amount>
				<OrderButton>PLACE THE ORDER</OrderButton>
			</Pricing>
		</CartPage>
	);
};

export default Cart;

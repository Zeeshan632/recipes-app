import React from "react";
import { buttonClicked } from "../../actions";
import { connect } from "react-redux";
import {
	MainContainer,
	Image,
	ContentContainer,
	TitleContainer,
	Title,
	Price,
	Paragraph,
	Button,
} from "./RecipeCard.elements";

const RecipeCard = ({ image, title, price, details, buttonClicked }) => {
	return (
		<MainContainer>
			<div>
				<Image src={image} alt="recipe" />
			</div>
			<ContentContainer>
				<TitleContainer>
					<Title>{title}</Title>
					<Price>{price}</Price>
				</TitleContainer>
				<hr
					style={{
						width: "40vw",
						marginLeft: "8px",
					}}
				/>
				<Paragraph>{details}</Paragraph>
				<Button onClick={() => buttonClicked()}>ADD TO CART</Button>
			</ContentContainer>
		</MainContainer>
	);
};

export default connect(null, { buttonClicked })(RecipeCard);

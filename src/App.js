import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import RecipeCard from "./components/recipeCard/RecipeCard";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";

import GlobalStyles from "./globalStyles";
import data from "./data/data";

const App = () => {
	const [clickedCateg, setClickedCateg] = useState("breakfast");

	const categClicked = (categ) => {
		setClickedCateg(categ);
	};

	const filteredRecipes = data.filter((data) => {
		return data.category === clickedCateg;
	});

	const recipe = filteredRecipes.map((data) => {
		return (
			<RecipeCard
				key={data.key}
				image={data.image}
				title={data.title}
				price={data.price}
				details={data.detail}
			/>
		);
	});

	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<Route path="/" exact>
					<Navbar data={data} categClicked={categClicked} />
					{recipe}
				</Route>
				<Route path="/cart" exact>
					<Cart />
				</Route>
			</BrowserRouter>
		</div>
	);
};

export default App;

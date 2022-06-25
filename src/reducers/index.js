import { combineReducers } from "redux";

const numberOfItems = (items = 0, action) => {
	if (action.type === "BUTTON_CLICKED") {
		return items + action.payload;
	} else {
		return items;
	}
};

export default combineReducers({
	items: numberOfItems,
});

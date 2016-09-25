import React from "react";
import ReactDOM from "react-dom";

import AvatarPicker from "./components/AvatarPicker";

const avatarArray = [
  { "src": "../img/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "../img/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "../img/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "../img/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "../img/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "../img/avatar6.png", "label": "Avatar 6", "id": 6 }
];

const app = document.getElementById('app');
ReactDOM.render(<AvatarPicker 
		avatarArray={avatarArray}
	/>, app);
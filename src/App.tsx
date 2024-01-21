import "./App.css";
import { Provider } from "react-redux";
import { store } from "./state/store";
import Home from "./routes/Home";

function App() {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;

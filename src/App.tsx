import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
function App() {
	const [count, setCount] = useState(0);

	// Comportement

	// Render

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/About" element={<About />} />
					{/* Fonctionne si jamais l'url ne correspond à rien */}
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}
export default App;

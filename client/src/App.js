import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Form from './pages/Form';
import Test from './pages/Test/Test';
import NotFound from './pages/NotFound';


function App() {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/form" element={<Form />} />
				<Route path="/test" element={<Test />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;

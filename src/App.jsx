import { Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import Home from './pages/Home';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
      <Route path="/edit" element={<AdminPage />}/>
		</Routes>
	);
}

export default App;

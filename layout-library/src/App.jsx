import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routeMap from './routeMap';
import CardList from './layouts/grid/CardList';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        {Object.entries(routeMap).map(([path, Component]) => (
          <Route key={path} path={`/layout/${path}`} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

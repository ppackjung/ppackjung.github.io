import React from "react";
import { BrowserRouter, Route , Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<AboutPage/>} />
				<Route path="/projects" element={<ProjectsPage/>} />
				<Route path="/projects/:name" element={<ProjectDetail/>} />
				<Route path="/blog" element={<BlogPage/>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

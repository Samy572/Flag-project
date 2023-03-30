import React, { FormEvent } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Article from '../components/Article';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Blog = () => {
	// States :
	const [content, setContent] = useState('');
	const [author, setAuthor] = useState('');
	const [error, setError] = useState(false);
	const [blogData, setBlogData] = useState([]);

	// Comportements :
	const getData = () => {
		axios.get('http://localhost:3000/articles').then((res) => setBlogData(res.data));
	};
	useEffect(() => getData, []);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (content.length < 140) {
			setError(true);
		} else {
			axios.post('http://localhost:3000/articles', {
				author,
				content,
				date: Date.now(),
			});
			setError(false);
			setAuthor('');
			setContent('');
			getData()
			window.location.reload()
		}
	};

	// Render

	return (
		<div className="blog-container">
			<Logo />
			<Navigation />
			<h1>Blog</h1>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder="name" value={author} />
				<textarea
					style={{ border: error ? 'solid 1px red' : 'solid 1px #61dafb' }}
					onChange={(e) => setContent(e.target.value)}
					placeholder="message"
					value={content}
				></textarea>

				{error && <p>Veuillez écire un minimum de 140 caractères</p>}
				<input type="submit" value="Envoyer" />
			</form>
			<ul>
				{blogData
					.sort((a , b) => b.date - a.date)
					.map((article, index) => (
						<Article key={index} article={article} />
					))}
			</ul>
		</div>
	);
};
export default Blog;

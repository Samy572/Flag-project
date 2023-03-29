import React from 'react';

const Article = ({ article }) => {
  console.log(article)
	const dateFormat = (date) => {
		
	};

	return (
		<div className="article">
			<div className="card-header">
				<h3>{article.author}</h3>
				<em>Posté le{dateFormat(article.date)}</em>
			</div>
			<p>{article.content}</p>
			<div className="btn-container">
				<button>Edit</button>
				<button>Supprimer</button>
			</div>
		</div>
	);
};

export default Article;

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Article = ({ article })=> {
	const [editing, setEditing] = useState(false);
	const [editContent, setEditContent] = useState('');

	const dateFormat = (date: Date) => {
		let newDate = new Date(date).toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
		});
		return newDate;
	};

	const handleEdit = () => {
		const data = {
			author: article.author,
			content: editContent ? editContent : article.content,
			date: article.date,
			updateDate: Date.now(),
		};
		axios.put('http://localhost:3000/articles/' + article.id, data).then(() => {
			setEditing(false);
		});
	};

	const handleDelete = () => {
		if (window.confirm('Voulez-vous supprimer cet article ? ')) {
			axios.delete('http://localhost:3000/articles/' + article.id);
			window.location.reload();
		}
	};

	return (
		<div className="article" style={{ backgroundColor: editing ? 'aliceblue' : 'white' }}>
			<div className="card-header">
				<h3>{article.author}</h3>
				<em>Posté le{dateFormat(article.date)}</em>
			</div>
			{editing ? (
				<textarea defaultValue={editContent ? editContent : article.content} onChange={(e) => setEditContent(e.target.value)}></textarea>
			) : (
				<p>{editContent ? editContent : article.content}</p>
			)}

			<div className="btn-container">
				{editing ? <button onClick={() => handleEdit()}>Valider</button> : <button onClick={() => setEditing(true)}>Editer</button>}

				<button onClick={() => handleDelete()}>Supprimer</button>
			</div>
		</div>
	);
};

export default Article;

const express = require('express');
const cors = require('cors');
const db = require('./db');

console.log(JSON.stringify(process.env))
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use(express.static('./client/build'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'client/build')));
}

console.log(__dirname);

app.post('/api/createMaster', async (req, res) => {
	const { name, city } = req.body;
	const master = await db.query('INSERT INTO master (name, city) values ($1, $2) RETURNING *', [name, city]);
	console.log(master.rows);
	if (!req.body) return res.sendStatus(400);
	res.json(master.rows);

});

app.get('/api/masters', async (req, res) => {
	const masters = await db.query('SELECT * FROM master');
	// console.dir({masters});
	console.log(masters.rows);
	res.json(masters.rows);
});

app.delete('/api/deleteMaster/:id', async (req, res) => {
	const id = req.params.id;
	const master = await db.query('SELECT master.name FROM master WHERE id = $1', [id]);
	await db.query('DELETE FROM master WHERE id = $1', [id]);

	console.log('delete', master.rows);

	res.json(master.rows);
});

app.listen(PORT, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(`Server is starting on port ${PORT}`);
});
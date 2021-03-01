import express from 'express';

const app = express();
const PORT = 3003;
app.get('/', (req, res) => res.send('Wendy Wendy Diary API'));
app.listen(PORT, () => {
    console.log(`server:: Server is running at http://localhost:${PORT}`);
})
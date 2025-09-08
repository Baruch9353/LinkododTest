import express from 'express';
import dotenv from 'dotenv';
import logger from './middlewares/logger.js';
import postsRouter from './routes/postsRouter.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use(express.static('public'));

app.use('/', postsRouter);

app.use((req, res) => {
  res.status(404).send("Route not found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
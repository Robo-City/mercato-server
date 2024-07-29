import express from 'express';
import userRoutes from './routes/user.routes';

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());
app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

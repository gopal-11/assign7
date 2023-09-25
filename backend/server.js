import express from 'express';
import router from './routes/ImagesRouter.js';
import bodyParserPackage from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const { json } = bodyParserPackage;
const port = process.env.PORT;

// disabled the issuer certificate check  for third party api
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const app = express();

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use('/api', router);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

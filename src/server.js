import express from 'express';
import bodyParser from 'body-parser';
import { handleGithubWebhook } from './githubWebhookHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/github-webhook', handleGithubWebhook);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

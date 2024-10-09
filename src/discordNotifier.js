import axios from 'axios';
import { config } from './config.js';

export const sendToDiscord = async (embedMessage) => {
  try {
    await axios.post(config.discordWebhookUrl, embedMessage);
    console.log(config.messages.messageSent);
  } catch (error) {
    console.error(`${config.messages.messageError} ${error.message}`);
  }
};

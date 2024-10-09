# GitHub-Discord Webhook

A Node.js project that allows you to customize GitHub webhook notifications and send them to a Discord channel. This project intercepts GitHub webhook events, formats the messages to your preferences, and sends them to a specified Discord webhook URL.

## Features

- Receive GitHub webhook events (e.g., push events).
- Customize the appearance of the notifications sent to Discord.
- Include commit details such as the author, commit message, and commit hash.
- Easy configuration via `config.js`.

## Prerequisites

Before setting up the project, ensure you have the following:

- **Node.js** (version 14 or higher recommended)
- **npm** or **pnpm** for package management
- A **Discord webhook URL** (you can create one in the Discord channel settings)
- **ngrok** (optional, but recommended for local testing)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/FrankkC24/github-discord-webhook.git
   cd github-discord-webhook
   ```

2. **Install dependencies:**
   If you're using `npm`:
   ```bash
   npm install
   ```
   Or if you're using `pnpm`:
   ```bash
   pnpm install
   ```

3. **Configure `config.js`:**
   Edit `src/config.js` to set your Discord webhook URL and customize the embed settings.

   Example configuration:
   ```javascript
   export const config = {
     discordWebhookUrl: 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN',
     
     embedConfig: {
       titleTemplate: 'New commit in {repoName}',
       descriptionTemplate: '**Message:** {message}\n\n**Commit:** `{shortCommitId}`',
       color: '#7000FF',
       urlTemplate: '{url}',
       footer: {
         text: 'GitHub Webhook Notification',
         icon_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
       },
       thumbnail: {
         url: 'https://example.com/path/to/your/thumbnail.png'
       }
     },

     messages: {
       eventNotSupported: 'Event not supported or incomplete data',
       notificationProcessed: 'Notification processed',
       messageSent: 'Message sent to Discord',
       messageError: 'Error sending message to Discord:'
     }
   };
   ```

4. **Start the server:**
   ```bash
   npm run start
   ```
   Or with `pnpm`:
   ```bash
   pnpm run start
   ```

   The server will listen on port 3000 by default.

5. **Set up the GitHub webhook:**
   - Go to your GitHub repository's settings.
   - Navigate to **Webhooks** and add a new webhook.
   - Use `http://your-ngrok-url/github-webhook` as the payload URL.
   - Select the events you want to receive (e.g., `push`).
   - Save the webhook.

## How It Works

1. The project uses `express` to create a local server that listens for GitHub webhook events at the endpoint `/github-webhook`.
2. When an event (e.g., a push) is received, the server processes the data and formats it according to the settings defined in `config.js`.
3. The formatted message is sent as an embed to the specified Discord webhook URL, including details like the commit message, author, commit hash, and more.
4. If configured, the embed also includes the author's GitHub profile picture and a link to their profile.

## File Structure

```
├── package.json
├── pnpm-lock.yaml
├── README.md
└── src
    ├── config.js                # Configuration file for webhook and embed settings
    ├── discordNotifier.js       # Handles sending messages to Discord
    ├── githubWebhookHandler.js  # Processes GitHub webhook events
    └── server.js                # Sets up the Express server
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes or new features.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Discord API](https://discord.com/developers/docs/intro)
- [GitHub Webhooks](https://docs.github.com/en/developers/webhooks-and-events/webhooks)

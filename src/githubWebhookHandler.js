import { sendToDiscord } from './discordNotifier.js';
import { config } from './config.js';

export const handleGithubWebhook = (req, res) => {
  const { ref, head_commit: headCommit, repository, sender } = req.body;

  if (!ref || !headCommit) {
    res.status(400).json({ error: config.messages.eventNotSupported });
    return;
  }

  const { name: repoName } = repository;
  const { author, message, url, id: commitId } = headCommit;
  const authorName = author.name;
  const commitMessage = message;
  const commitUrl = url;
  const shortCommitId = commitId.substring(0, 7);
  const authorAvatarUrl = sender.avatar_url;

  const title = config.embedConfig.titleTemplate.replace('{repoName}', repoName);
  const description = `${config.embedConfig.descriptionTemplate
    // .replace('{author}', authorName)
    .replace('{message}', commitMessage)}\n**Commit:** \`${shortCommitId}\``;
  const embedUrl = config.embedConfig.urlTemplate.replace('{url}', commitUrl);

  const embedMessage = {
    embeds: [
      {
        title: title,
        description: description,
        url: embedUrl,
        color: parseInt(config.embedConfig.color.replace('#', ''), 16),
        footer: config.embedConfig.footer,
        timestamp: new Date(),
        thumbnail: config.embedConfig.thumbnail,
        author: {
          name: authorName,
          icon_url: authorAvatarUrl,
        //   url: sender.html_url
        }
      }
    ]
  };

  sendToDiscord(embedMessage);

  res.status(200).json({ message: config.messages.notificationProcessed });
};

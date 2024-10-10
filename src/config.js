export const config = {
    discordWebhookUrl: 'https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN',
    
    embedConfig: {
      titleTemplate: 'New commit in {repoName}',
      descriptionTemplate: '**Message:** {message}\n**Commit:** `{shortCommitId}`',
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
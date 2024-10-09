export const config = {
    discordWebhookUrl: 'https://discord.com/api/webhooks/1293673857554583573/rikd5IkeSKfjVCIYFVctYggI8bRKUURuL1zkxeyx7JTGdeS_syQ0vo94Mq67Jbz4B9ws',
    embedConfig: {
      titleTemplate: 'Nuevo commit en {repoName}',
      descriptionTemplate: '**Mensaje:** {message}',
      color: '#7000FF', // HEX COLOR
      urlTemplate: '{url}',
      footer: {
        text: 'ParadoxEmpire Network',
        icon_url: 'https://i.imgur.com/9PYhLfx.png'
      },
      thumbnail: {
        url: 'https://i.imgur.com/EE3fCBn.png'
      }
    },
    messages: {
      eventNotSupported: 'Event not supported or incomplete data',
      notificationProcessed: 'Processed notification',
      messageSent: 'Message sent to Discord',
      messageError: 'Error sending the message to Discord:'
    }
  };
  
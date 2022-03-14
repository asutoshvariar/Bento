// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Asutosh',
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: true,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'ClickUp',
      icon: 'trello',
      link: 'https://app.clickup.com',
    },
    {
      id: '4',
      name: 'Figma',
      icon: 'figma',
      link: 'https://figma.com/',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: '7',
      name: 'Spotify',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '8',
      name: 'Twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '9',
      name: 'Discord',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Spotify',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'Teams',
      icon: 'graduation-cap',
      link: 'https://teams.microsoft.com/',
    },
    {
      id: '3',
      name: 'Discord',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
  ],
};

export default function manifest() {
  return {
    name: 'Ali İlan - Full-Stack Developer',
    short_name: 'Ali İlan',
    description: 'Full-Stack Developer specializing in React, .NET Core, and modern web technologies',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}

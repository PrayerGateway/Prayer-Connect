# Prayer Connect

A community platform for sharing prayer requests and praying together.

## Features

- **Share Prayer Requests**: Post prayer requests for the community to see
- **Community Support**: Other members can view and respond to prayer requests
- **User Accounts**: Create an account to track your prayer requests and interactions
- **Prayer History**: Keep track of prayers answered and ongoing intercessions
- **Real-time Updates**: See new prayer requests as they're posted
- **Welcoming Design**: A warm, modern interface for spiritual connection

## Tech Stack

- **Frontend**: Next.js 14 with React
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PrayerGateway/prayer-connect.git
cd prayer-connect

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Deployment

This project is configured for Netlify deployment.

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

## Project Structure

```
prayer-connect/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── api/               # API routes
├── components/            # Reusable React components
├── styles/                # Global styles
├── public/                # Static assets
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project however you like.

## Support

For questions or support, please open an issue on GitHub.

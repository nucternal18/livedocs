# LiveDocs

LiveDocs is a real-time collaborative document editor inspired by Google Docs. It leverages modern web technologies to provide a seamless and intuitive user experience. This project uses NextJS, TypeScript, TailwindCSS for styling, Clerk for authentication, LiveBlocks for real-time collaboration, Sentry for error monitoring, Lexical Editor for rich text editing, and Shadcn-ui for UI components.

## Table of Contents

- [LiveDocs](#livedocs)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Configuration](#configuration)
    - [TailwindCSS](#tailwindcss)
    - [Clerk](#clerk)
    - [LiveBlocks](#liveblocks)
    - [Sentry](#sentry)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- Real-time collaborative editing
- Rich text formatting
- User authentication and management
- Error monitoring and reporting
- Responsive and intuitive UI

## Tech Stack

- **Frontend Framework**: [NextJS](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Real-time Collaboration**: [LiveBlocks](https://liveblocks.io/)
- **Error Monitoring**: [Sentry](https://sentry.io/)
- **Rich Text Editor**: [Lexical Editor](https://lexical.dev/)
- **UI Components**: [Shadcn-ui](https://ui.shadcn.dev/)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js v14.17.0 or higher
- npm v6.14.13 or higher / yarn v1.22.10 or higher
- A Clerk account and project set up
- A LiveBlocks account and project set up
- A Sentry account and project set up

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nucternal18/livedocs.git
   cd livedocs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Create a `.env.local` file in the root directory and add your environment variables:

   ```bash
   NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
   CLERK_API_KEY=<Your Clerk API Key>
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=<Your LiveBlocks Public Key>
   NEXT_PUBLIC_SENTRY_DSN=<Your Sentry DSN>
   ```

2. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```sh
livedocs/
├── public/           # Static assets
├── components/   # React components
├── app/        # NextJS pages
├── styles/       # Global styles
├── lib/        # Utility functions
├── public/        # Custom hooks
├── context/      # React contexts
├── services/     # External services integration
├── types/        # TypeScript types
├── .env.local        # Environment variables
├── next.config.js    # NextJS configuration
├── tailwind.config.js # TailwindCSS configuration
├── tsconfig.json     # TypeScript configuration
└── package.json      # Project metadata and scripts
```

## Configuration

### TailwindCSS

TailwindCSS is used for styling. The configuration file `tailwind.config.js` is located in the root directory. You can customize the theme, variants, and plugins as needed.

### Clerk

Clerk is used for authentication. Ensure you have your Clerk Frontend API and API Key set in the `.env.local` file.

### LiveBlocks

LiveBlocks powers the real-time collaborative features. Make sure your LiveBlocks Public Key is set in the `.env.local` file. Follow the instructions in the guide after creating a project in the LiveBlocks site to generate the LiveBlocks config file.

### Sentry

Sentry is used for error monitoring and reporting. Configure your Sentry DSN in the `.env.local` file.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using LiveDocs! If you have any questions or feedback, please open an issue or reach out to us.
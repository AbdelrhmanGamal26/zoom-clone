# Project Name: Zoom Clone

## Overview

Welcome to the Zoom Clone project! This application aims to mimic the core functionalities of the popular video conferencing tool, Zoom. It has been developed using a modern tech stack including TypeScript, Tailwind CSS, Next.js, Clerk for authentication and user management, and Stream SDK for video streaming capabilities.
Features

- Video Conferencing: Host or join video meetings with multiple participants.
- Authentication: Secure login and registration using Clerk.
- User Management: Manage user profiles and settings through Clerk.
- Responsive Design: Tailwind CSS ensures the app looks great on any device.
- Stream SDK Integration: High-quality video streaming powered by Stream SDK.

### Getting Started

To get started with the Zoom Clone project, follow these steps:

#### Prerequisites

Ensure you have Node.js installed on your machine. You'll also need to sign up for Clerk and Stream SDK services to obtain API keys.
Installation

- Clone the repository:

git clone https://github.com/yourusername/zoom-clone.git
cd zoom-clone

- Install dependencies:

npm install

- Set up environment variables. Create a .env.local file in the root directory and add your Clerk and Stream SDK API keys:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_api_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret
NEXT_PUBLIC_BASE_URL=your_base_url

Running the Application

Start the development server:

npm run dev

Open http://localhost:3000 in your browser to view the application.

### Built With:

- TypeScript: For static typing and better code quality.
- Tailwind CSS: Utility-first CSS framework for styling.
- Next.js: React framework for building server-side rendered applications.
- Clerk: For authentication and user management.
- Stream SDK: For real-time video streaming capabilities.

### Disclaimer:

This project, referred to as "Zoom Clone," is designed for educational purposes and serves as a demonstration of how to build a video conferencing application similar to Zoom using modern web technologies such as TypeScript, Tailwind CSS, Next.js, Clerk, and Stream SDK. It is not intended to be a replacement for Zoom or any other commercial video conferencing software.

While every effort has been made to ensure the functionality and security of this application, it may contain bugs, vulnerabilities, or limitations that could affect its performance or security. Users are advised to exercise caution and conduct thorough testing before deploying this application in a production environment or using it for critical communications.

The creators of this project are not responsible for any damages, losses, or liabilities arising from the use of this application. Users are encouraged to review and understand the terms of use and privacy policies of all third-party services integrated within this application, including but not limited to Clerk and Stream SDK.

This project is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.

- Special thanks to Clerk and Stream SDK for providing robust APIs for authentication and video streaming.
- Thanks to the Next.js and Tailwind CSS communities for their extensive documentation and support.

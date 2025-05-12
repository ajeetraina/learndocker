# Contributing to Learn Docker

Thank you for your interest in contributing to the Learn Docker portal! This document provides guidelines and instructions for setting up your development environment.

## Development Setup

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
   ```
   git clone https://github.com/ajeetraina/learndocker.git
   cd learndocker
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env.local` and update the values as needed.

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/` - Source code for the application
  - `components/` - React components
  - `pages/` - Next.js pages
  - `styles/` - CSS and styling files
  - `lib/` - Utility functions and hooks
  - `content/` - Markdown/MDX content for courses

## Content Guidelines

When adding or modifying course content:

1. Place new content in the appropriate directory under `src/content/`
2. Use Markdown with YAML frontmatter for metadata
3. Follow the existing content structure
4. Include practical examples and exercises

## Submission Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code follows the project's coding standards and includes appropriate tests.

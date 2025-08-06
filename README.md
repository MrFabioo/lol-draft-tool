# League of Legends Draft Tool

A web application designed for **competitive** League of Legends players looking for a draft assistant similar to [draftlol.dawe.gg](https://draftlol.dawe.gg).

## Features

Currently, the application offers a basic draft experience:

- A single user can conduct the full draft — for both their own team and the opponent.
- Supports **banning** and **picking** phases.
- Champion filtering options:
  - by **name**
  - by **role** (lane)

## Technologies

The project is built using a modern front-end stack:

- React
- TypeScript (TSX)
- Tailwind CSS
- Vite
- ESLint

## Getting Started

To run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/MrFabioo/lol-draft-tool.git
   cd lol-draft-tool
   ```

2. Install all required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at the address shown in the terminal, e.g.:
   ```
   http://localhost:5173
   ```

## Roadmap

This project is still in early development. Planned features include:

- Adding personal notes to champions
- User authentication with account creation and persistent settings
- True draft simulation by generating separate links for each team (similar to draftlol.dawe.gg)
- Draft timer based on official competitive standards
- Support for BO1, BO3, BO5 modes with persistent champion bans across the series (Fearless Draft)
- A redesigned user interface

## Contributing

Have an idea for a feature? Found a bug? Feel free to open an issue or submit a pull request!

# League of Legends Draft Tool

A web application designed for **competitive** League of Legends players looking for a draft assistant similar to [draftlol.dawe.gg](https://draftlol.dawe.gg).

## Features

Currently, the application offers a basic draft experience:

- create a room and get 3 links (blue team, red team, spectator)
- each player has their own turn in the draft, while the spectator can only watch
- full ban and pick phases with a countdown timer
- quick champion filtering:
  - by **name**
  - by **role** (lane)

## Technologies

The project is built using a modern front-end stack:

- React
- TypeScript (TSX)
- Tailwind CSS
- Vite
- ESLint + Prettier
- Socket.io

## Getting Started

To run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/MrFabioo/lol-draft-tool.git
   cd lol-draft-tool
   ```

2. Install all required dependencies:

   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

3. Start the server:

   ```bash
   cd server
   node index.js
   ```

4. Start the client (in another terminal):

   ```bash
   cd client
   npm run dev
   ```

5. Open the app in your browser at the address shown in the terminal, e.g.:
   ```
   http://localhost:5173
   ```

## Roadmap

This project is still in early development. Planned features include:

- support for BO1, BO3, and BO5 formats with Fearless Draft (persistent bans across the series)

## Contributing

Have an idea for a feature? Found a bug? Feel free to open an issue or submit a pull request!

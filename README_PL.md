# League of Legends Draft Tool

Aplikacja stworzona z myślą o graczach **competitive**, którzy szukają narzędzia do draftowania na wzór [draftlol.dawe.gg](https://draftlol.dawe.gg).

## Funkcjonalności

Aktualnie aplikacja oferuje podstawową wersję draftowania:

- zakładasz pokój i dostajesz 3 linki (dla drużyny niebieskiej, czerwonej i obserwatora)
- każdy gracz ma swoją kolej wyboru, a obserwator tylko ogląda
- dostępna jest pełna faza **banów** i **picków** z licznikami czasu
- szybkie filtrowanie championów:
  - po **nazwie**
  - po **linii** (roli)

## Technologie

Projekt został stworzony z użyciem nowoczesnego stosu technologicznego:

- React
- TypeScript (TSX)
- Tailwind CSS
- Vite
- ESLint + Prettier
- Socket.io

## Instrukcja

Aby uruchomić aplikację lokalnie:

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/MrFabioo/lol-draft-tool.git
   cd lol-draft-tool
   ```
2. Zainstaluj wszystkie niezbędne paczki:
   ```bash
   npm install
   ```
3. Uruchom aplikację:
   ```bash
   npm run dev
   ```
4. Otwórz stronę pod adresem wyświetlonym w konsoli, np.: http://localhost:5173

## Plany rozwojowe

Projekt jest w fazie wczesnego rozwoju. W przyszłości planowane są następujące funkcje:

- Możliwość dodawania notatek
- System logowania i zakładania konta (z zapisem własnych ustawień)
- Obsługa trybów: BO1, BO3, BO5, z blokadą wybranych bohaterów na całą serię (Fearless Draft)
- Nowy interfejs graficzny

# League of Legends Draft Tool

Aplikacja stworzona z myślą o graczach **competitive**, którzy szukają narzędzia do draftowania na wzór [draftlol.dawe.gg](https://draftlol.dawe.gg).

## Funkcjonalności

Aktualnie aplikacja oferuje podstawową wersję draftowania:

- Jeden użytkownik może wykonać pełny draft – zarówno dla swojej drużyny, jak i przeciwnika.
- Obsługa fazy **banowania** i **pickowania**.
- Możliwość filtrowania bohaterów:
  - po **nazwie**
  - po **linii** (roli)

## Technologie

Projekt został stworzony z użyciem nowoczesnego stosu technologicznego:

- React
- TypeScript (TSX)
- Tailwind CSS
- Vite
- ESLint

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

- Możliwość dodawania notatek do bohaterów
- System logowania i zakładania konta (z zapisem własnych ustawień)
- Symulacja draftu poprzez generowanie osobnych linków dla każdej drużyny (jak w draftlol.dawe.gg)
- Licznik czasu zgodny ze standardami rozgrywek turniejowych
- Obsługa trybów: BO1, BO3, BO5, z blokadą wybranych bohaterów na całą serię (Fearless Draft)
- Nowy interfejs graficzny

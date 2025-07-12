# ETF Insight

**ETF Insight** is a modern web app that allows users to search for real-time ETF (Exchange-Traded Fund) market data. Data is sourced from the [yahoo-finance2](https://github.com/gadicc/node-yahoo-finance2) API, the app delivers up to date information like price, performance, and key statistics.

## Live Demo

[etf-insight.vercel.app](https://etf-insight.vercel.app/)

---

## Features

- 🔍 **ETF Lookup** – Search by ticker (e.g., `VOO`, `SPY`, `QQQ`)
- 📊 **Real-Time Market Data** – Price, NAV, percentage change, volume, etc.
- 📅 **Historical Performance** – View price trends over time
- 📄 **Key Stats** – Holdings, total assets, and more

---

## Getting Started

To run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/etf-insight.git
cd etf-insight
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Dev Server

```bash
npm run dev
```

Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn](https://ui.shadcn.com/)
- **API:** [yahoo-finance2](https://github.com/gadicc/node-yahoo-finance2)

import Search from "@/components/header/search";
import Summary from "@/components/main/summary";

export default function Home() {
  return (
    <>
      <header className="flex justify-center">
        <Search />
      </header>

      <main>
        <Summary />
      </main>
    </>
  );
}

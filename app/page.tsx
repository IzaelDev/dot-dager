import MiniWindow from "./components/MiniWindow";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero/>
      <MiniWindow url="https://tbot.xyz/lumber/" />
    </main>
  );
}

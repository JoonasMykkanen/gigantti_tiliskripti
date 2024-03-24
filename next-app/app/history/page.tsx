import Navigation from "../components/Navigation/Navigation";
import Background from "../components/Background/Background";
import Form from "../components/Fsec/Fsec";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden font-elkjop">
      <Background />
      <Navigation />
      <div className="w-full h-2/3 flex justify-center items-center">
        <h1 className="text-black text-8xl">
          TULOSSA PIAN!
        </h1>
      </div>
    </main>
  );
}

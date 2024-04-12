import Header from "./Components/header/page";
import Buttons from "./Components/buttons/page";
import Map from "./Components/map/page";
import Bulding from "./Components/bulding/page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 border-8 border-sky-500">
        <Header />
        <Buttons />
        <Map />
        <Bulding />
    </main>
  );
}
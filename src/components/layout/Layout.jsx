import { Header } from "../header/Header";
import { Nav } from "../nav/Nav";
import { Footer } from "../footer/Footer";
import "./layout.css";
export function Layout({ children }) {
  return (
    <>
      <div className="p-2 relative font-lato flex h-screen bg-black w-full">
        <Nav />
        <div className="relative w-full h-full mx-2 rounded-lg overflow-hidden overflow-y-auto">
          <Header />
          <main className="relative h-[86vh] overflow-hidden overflow-y-auto rounded-lg  layout">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

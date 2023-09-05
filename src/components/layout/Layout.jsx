import { Header } from "../header/Header";
import { Nav } from "../nav/Nav";
import { Footer } from "../footer/Footer";
export function Layout({ children }) {
  return (
    <>
      <div className="p-2 relative  flex h-screen bg-black w-full">
        <Nav />
        <div className="relative w-full h-full mx-2 rounded-lg overflow-hidden overflow-y-auto">
          <Header />
          <main className="relative h-[86vh]  overflow-hidden overflow-y-auto rounded-lg bg-[rgba(255,255,255,0.1)]">
            <div className="relative h-full w-full overflow-hidden overflow-y-auto rounded-lg">
              {children}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

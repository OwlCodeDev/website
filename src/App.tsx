import { ThemeProvider } from "./contexts/theme/theme.context";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="navbar sticky top-0 z-30 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">OwlCode</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#intro">Intro</a></li>
              <li><a href="#about">About us</a></li>
              <li><a href="#stack">Tech stack</a></li>
            </ul>
          </div>
        </div>

        <>
          <div
            className="hero min-h-screen" id="intro"
            style={{backgroundImage: 'url(https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}
          >
            <div className="hero-overlay bg-opacity-80 backdrop-blur-sm"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-lg">
                <h1 className="font-title text-center text-[clamp(2rem,6vw,4.2rem)] font-black leading-[1.1] xl:text-left">
                  <span className="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20">Igniting</span>
                  <span className="inline-grid">
                    <span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [transform:translate3d(0,0,0)] [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]" aria-hidden="true">the future</span>
                    <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">the future</span>
                  </span>
                  <br />
                  <span className="[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/50">of technology</span>
                </h1>
                <p className="mb-5 py-4">
                  This is OwlCode, we are driven by our passion for innovation and quality. 
                  Our software solutions are crafted with meticulous attention to detail, 
                  and we approach every project with a relentless pursuit of excellence..
                </p>
              </div>
            </div>
          </div>
          <div className="hero min-h-screen bg-base-200 bg-contain bg-repeat" id="about"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/12899189/pexels-photo-12899189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                backgroundPosition: '80% 50%',
              }}
          >
            <div
              className="hero min-h-screen bg-gradient-to-t md:bg-gradient-to-r from-base-200 from-30% via-transparent via-70% to-base-200 backdrop-blur-3xl"
            >
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.pexels.com/photos/12899189/pexels-photo-12899189.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="max-w-lg">
                  <h1 className="text-5xl font-bold">Who are we?</h1>
                  <ul className="py-6 list-disc list-inside">
                    <li>A team of passionate professionals united by a shared vision of excellence</li>
                    <li>Committed to delivering innovative, high-quality software solutions that exceed expectations</li>
                    <li>A culture of continuous improvement, where we strive to deliver high-quality software in short, incremental cycles.</li>
                    <li>A focus on automating the build, test, and deployment process to reduce cycle times and increase efficiency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hero min-h-screen bg-base-100 bg-contain bg-repeat" id="stack"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/18152964/pexels-photo-18152964/free-photo-of-woman-in-a-futuristic-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                backgroundPosition: '20% 50%',
              }}
          >
            <div
              className="hero min-h-screen bg-gradient-to-t md:bg-gradient-to-l from-base-200 from-30% via-transparent to-base-200 backdrop-blur-3xl"
            >
              <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.pexels.com/photos/18152964/pexels-photo-18152964/free-photo-of-woman-in-a-futuristic-room.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
                <div className="max-w-lg">
                  <h1 className="text-5xl font-bold">Our Technical Stack:</h1>
                  <ul className="py-6 list-disc list-inside">
                    <li>Frontend: ReactJS, TailwindCSS</li>
                    <li>Backend: NodeJS and Python</li>
                    <li>Database: NoSQL, SQL, Cache</li>
                    <li>Structure: Microservices</li>
                    <li>Applications: React-native, Flutter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>

        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by <a href="https://owlcode.dev">OwlCode</a> Ltd</p>
          </aside>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;

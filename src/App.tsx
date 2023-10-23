import { ThemeProvider } from "./contexts/theme/theme.context";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="navbar sticky top-0 z-30">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">OwlCode</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a>Intro</a></li>
              <li><a>About us</a></li>
              <li><a>Tech stack</a></li>
            </ul>
          </div>
        </div>

        <>
          <div
            className="hero min-h-screen"
            style={{backgroundImage: 'url(https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}
          >
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold" id="intro">Hello there</h1>
                <p className="mb-5">
                  At OwlCode, we are driven by our passion for innovation and quality. 
                  Our software solutions are crafted with meticulous attention to detail, 
                  and we approach every project with a relentless pursuit of excellence..
                </p>
              </div>
            </div>
          </div>
          <div className="hero min-h-screen bg-secondary">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src="https://images.pexels.com/photos/12899189/pexels-photo-12899189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold" id="about">Who we are?</h1>
                <ul className="py-6 list-disc list-inside">
                  <li>A team of passionate professionals united by a shared vision of excellence</li>
                  <li>Committed to delivering innovative, high-quality software solutions that exceed expectations</li>
                  <li>A culture of continuous improvement, where we strive to deliver high-quality software in short, incremental cycles.</li>
                  <li>A focus on automating the build, test, and deployment process to reduce cycle times and increase efficiency.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hero min-h-screen bg-primary">
            <div className="hero-content flex-col lg:flex-row">
              <img src="https://images.pexels.com/photos/18152964/pexels-photo-18152964/free-photo-of-woman-in-a-futuristic-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold" id="stack">Our Technical Stack:</h1>
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
        </>

        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
          <aside>
            <p>Copyright © 2023 - All right reserved by OwlCode Ltd</p>
          </aside>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;

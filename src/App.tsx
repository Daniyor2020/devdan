import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "./assets";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <header className="w-full text-center py-4">
        <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Daniyor Boltaev
        </h1>
        <p className="text-gray-300 text-sm sm:text-lg mt-2">
          Frontend Developer | React Enthusiast | Problem Solver
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col sm:flex-row justify-around items-center w-full max-w-5xl px-4 sm:px-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center sm:w-1/3">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <img
              src={profile}
              alt="Daniyor Boltaev"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Daniyor2020"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniyor-boltaev-513abb32/"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-colors"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:dani.bolta87@gmail.com"
              className="p-2 rounded-full bg-white/10 hover:bg-blue-500 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center sm:text-left sm:w-2/3 mt-8 sm:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I’m a frontend developer passionate about crafting intuitive and
            visually engaging web experiences. With expertise in React,
            TypeScript, and modern web technologies, I transform ideas into
            seamless digital solutions.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-gray-200">
            <div className="bg-white/10 p-4 rounded-lg shadow">
              <h3 className="text-blue-400 font-bold text-lg">10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg shadow">
              <h3 className="text-purple-400 font-bold text-lg">6+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Daniyor Boltaev. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

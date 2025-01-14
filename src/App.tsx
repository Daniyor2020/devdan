
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { profile } from "./assets";


function App() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900'>
      {/* Hero Section */}
      <section className='min-h-screen relative flex flex-col justify-center items-center px-4 sm:px-6'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 mix-blend-multiply' />
        </div>

        <div className='relative max-w-5xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='w-40 h-40 mx-auto rounded-full border-4 border-white/20 overflow-hidden'>
              <img
                src={profile}
                alt='Profile'
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          <h1 className='text-5xl sm:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 dark:text-white'>
            Daniyor Boltaev
          </h1>

          <p className='text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto'>
            Transforming ideas into reality through innovative solutions and
            creative thinking
          </p>

          <div className='flex justify-center gap-6'>
            <a
              href='https://github.com/Daniyor2020'
              className='p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              aria-label='GitHub Profile'
            >
              <Github className='w-6 h-6' />
            </a>
            <a
              href='https://www.linkedin.com/in/daniyor-boltaev-513abb32/'
              className='p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              aria-label='LinkedIn Profile'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Linkedin className='w-6 h-6' />
            </a>
            <a
              href='mailto:dani.bolta87@gmail'
              className='p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
              aria-label='Email'
            >
              <Mail className='w-6 h-6' />
            </a>
          </div>

          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
            <ChevronDown className='w-8 h-8 text-gray-400' />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-24 px-4 sm:px-6'>
        <div className='max-w-5xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>About Me</h2>
              <div className='space-y-4 text-gray-300'>
                <p>
                  With over [X] years of experience in [field], I specialize in
                  creating impactful solutions that drive results.
                </p>
                <p>
                  My expertise includes [key skills], and I'm passionate about
                  [interests/causes].
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-white/5 p-6 rounded-lg'>
                <h3 className='font-bold text-2xl text-blue-400 mb-2'>100+</h3>
                <p className='text-gray-400'>Projects Completed</p>
              </div>
              <div className='bg-white/5 p-6 rounded-lg'>
                <h3 className='font-bold text-2xl text-purple-400 mb-2'>10+</h3>
                <p className='text-gray-400'>Years Experience</p>
              </div>
              <div className='bg-white/5 p-6 rounded-lg'>
                <h3 className='font-bold text-2xl text-blue-400 mb-2'>50+</h3>
                <p className='text-gray-400'>Happy Clients</p>
              </div>
              <div className='bg-white/5 p-6 rounded-lg'>
                <h3 className='font-bold text-2xl text-purple-400 mb-2'>20+</h3>
                <p className='text-gray-400'>Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className='py-24 px-4 sm:px-6 bg-black/20'>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Featured Work
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className='group relative overflow-hidden rounded-lg'
              >
                <div className='aspect-w-16 aspect-h-9 bg-gray-800'>
                  <div className='p-6'>
                    <h3 className='text-xl font-bold mb-2'>Project {item}</h3>
                    <p className='text-gray-400'>
                      Brief description of the project and its impact
                    </p>
                  </div>
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6'>
                  <button className='bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition-colors'>
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

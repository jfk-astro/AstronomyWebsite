export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <div className="fixed inset-0 will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/20 via-transparent to-purple-900/15 animate-pulse"></div>
      </div>
      
      { /* The star-like floating effects in the background. */ } 
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-float-slow shadow-sm shadow-white/20"></div>
        <div className="absolute top-3/4 left-3/4 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-purple-200/30 rounded-full animate-float-fast shadow-sm shadow-purple-200/10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-white/35 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-white/25 rounded-full animate-float-medium shadow-sm shadow-white/10"></div>
        <div className="absolute bottom-1/3 left-1/5 w-0.5 h-0.5 bg-purple-100/20 rounded-full animate-float-fast"></div>
        <div className="absolute top-2/3 right-1/6 w-1 h-1 bg-white/30 rounded-full animate-float-slow shadow-sm shadow-white/15"></div>
        <div className="absolute top-1/3 left-2/3 w-0.5 h-0.5 bg-white/25 rounded-full animate-float-medium"></div>
        <div className="absolute bottom-1/2 right-2/3 w-1 h-1 bg-purple-200/25 rounded-full animate-float-fast shadow-sm shadow-purple-200/10"></div>
        <div className="absolute top-4/5 left-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-float-slow"></div>
      </div>

      <main className="relative z-10 container mx-auto px-6 py-20 font-sans">
        { /* Main header section */ }
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-bold mb-4 tracking-tight leading-none">
              <span className="text-gray-100 font-bold">JFK</span>
              <span className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 bg-clip-text text-transparent font-bold">
                {' '}Astronomy
              </span>
              <span className="text-gray-100 block text-5xl md:text-6xl xl:text-7xl font-bold mt-4 tracking-[0.2em] opacity-85">
                CLUB
              </span>
            </h1>
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent mx-auto"></div>
        </div>

        { /* Content grid (so it's spaced out properly) */ }
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center mb-24">
          { /* Left pane */ }
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-200/90 leading-tight tracking-tight">
              Exploring the
              <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">
                {' '}vast cosmos
              </span>
            </h2>
            
            <div className="space-y-8 text-gray-300">
              <p className="text-xl leading-relaxed font-light tracking-wide">
                Where students learn about Astronomy and deepen their understanding of the universe. 
              </p>
              
              <p className="text-lg leading-relaxed font-light opacity-90">
                Whether you&apos;re an absolute beginner or an experienced astronomer, join the Astronomy club! Our community offers access to immersive experiences with great academic value.
              </p>
            </div>

            { /* Key features of the club */ }
            <div className="grid grid-cols-1 gap-4 mt-16">
              <div className="group flex items-center space-x-6 p-6 glass rounded-2xl backdrop-blur-md border border-white/5 hover:border-purple-400/20 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full group-hover:shadow-lg group-hover:shadow-purple-400/30 transition-all duration-300"></div>
                <span className="text-gray-200/85 font-light text-lg tracking-wide">In-depth Lectures</span>
              </div>
              <div className="group flex items-center space-x-6 p-6 glass rounded-2xl backdrop-blur-md border border-white/5 hover:border-purple-400/20 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full group-hover:shadow-lg group-hover:shadow-purple-400/30 transition-all duration-300"></div>
                <span className="text-gray-200/85 font-light text-lg tracking-wide">Professor Interviews</span>
              </div>
              <div className="group flex items-center space-x-6 p-6 glass rounded-2xl backdrop-blur-md border border-white/5 hover:border-purple-400/20 transition-all duration-500 hover:transform hover:scale-[1.02]">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-300 to-purple-400 rounded-full group-hover:shadow-lg group-hover:shadow-purple-400/30 transition-all duration-300"></div>
                <span className="text-gray-200/85 font-light text-lg tracking-wide">Intuitive Research Projects</span>
              </div>
            </div>
          </div>

          { /* Right pane; call to action */ }
          <div className="text-center lg:text-left">
            <div className="glass backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-purple-600/5 hover:shadow-purple-600/10 transition-all duration-700">
              <h3 className="text-4xl xl:text-5xl font-bold mb-8 text-gray-100 leading-tight">
                Ready to explore the
                <span className="bg-gradient-to-r from-purple-700 to-purple-600 bg-clip-text text-transparent">
                  {' '}universe?
                </span>
              </h3>
              
              <p className="text-gray-300 mb-10 font-light leading-relaxed text-lg tracking-wide">
                Join the JFK Astronomy Club today and learn more about astronomy with like minded individuals!
              </p>
              
              <button className="group w-full bg-gradient-to-r from-purple-700 to-purple-800 hover:from-purple-600 hover:to-purple-700 text-gray-100 font-light py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-600/20 border border-purple-600/40 hover:border-purple-500/60 text-lg tracking-wide">
                <span className="flex items-center justify-center space-x-3">
                  <span>Join Today!</span>
                  <span className="group-hover:translate-x-2 transition-transform duration-500 text-xl">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom accent with key words for funsies (it looks kinda tuff) */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400/60 font-light">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-400/40"></div>
            <span className="text-sm tracking-[0.3em] font-extralight">DISCOVER • LEARN • EXPLORE</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-400/40"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

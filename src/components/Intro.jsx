const Intro = () => {
  return (
    <section className="py-16 px-4 md:px-8">
      {/* CHANGE 1: Added 'max-w-5xl' to make the container slightly narrower */}
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Logos */}
        <div className="w-full md:w-1/3 flex justify-center items-center gap-8">
          <img src="/images/pace.png" alt="Colleges Logo" className="max-h-32" />
          <img src="/images/pace-sb.png" alt="IEEE SB Logo" className="max-h-32" />
        </div>
        
        {/* Right Side: Introduction */}
        {/* CHANGE 2: Added a responsive border and padding to the left side */}
        <div className="w-full md:w-2/3 md:border-l md:border-gray-300 md:pl-12">
          
          {/* Adjusted margin-bottom to mb-2 */}
          <h2 className="text-3xl font-bold text-ieee-blue mb-2">About Our Student Branch</h2>
          
          {/* CHANGE 3: Added a decorative line below the title */}
          <div className="w-24 h-1 bg-ieee-blue mb-6"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to the official webspace for the IEEE Student Branch at P A College of Engineering. We are a community of innovators, thinkers, and builders dedicated to advancing technology for humanity. Our branch provides students with opportunities to network, develop professional skills, and participate in exciting technical events.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default Intro;
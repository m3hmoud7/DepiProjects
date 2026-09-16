const images = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">Front-End Developer</span>
            <br />
            For Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
            voluptates vitae quae asperiores dolor amet quod officia id vero
            molestias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" className="btn-primary">
              Expolre Ai Solutions
            </a>
            <a href="#" className="btn-outline">
              Learn-more
            </a>
          </div>
          <div className="pt-4 flex items-center space-x-4">
            <div className="flex -space-x-2">
              {images.map((image, index) => (
                <img alt={`User ${index + 1}`} src={image} className="avatar" />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600">
              Trusted by <span className="text-primary font-bold">10,000+</span>
              people worldwide
            </p>
          </div>
        </div>
        {/* Right Content */}
        <div className="w-full h-80 md:h-150">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop"
            alt="heroSection"
          />
          <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
      </div>
    </section>
  );
}

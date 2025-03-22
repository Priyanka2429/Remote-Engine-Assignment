import React from 'react';

export default function Landing() {
  const cards = [
    {
      id: 1,
      imgSrc: "/images/Av1.png",
      title: "Tropical Plants",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    },
    {
      id: 2,
      imgSrc: "/images/Av2.png",
      title: "Succulents",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    },
    {
      id: 3,
      imgSrc: "/images/Av3.png", 
      title: "Indoor Plants", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"
    }
  ];

  return (
    <div className="min-h-screen bg-white mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-8 py-12">
        {/* Left Content */}
        <div className="lg:w-1/2 xl:w-5/12 flex flex-col justify-center">
          <h1 className="font-poppins font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-tight lg:leading-[72px] tracking-tight text-gray-900 mb-4">
            Bring <span className="text-primary-green">GREEN</span> to your home<br className="hidden lg:block" /> 
            and make you feel <span className="text-primary-green">BETTER</span>
          </h1>
          
          <p className="font-poppins text-lg lg:text-2xl text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {['124K+', '126', '78K'].map((stat) => (
              <div key={stat} className="text-center sm:text-left">
                <h3 className="font-poppins font-semibold text-xl lg:text-2xl text-gray-900">{stat}</h3>
                <div className="w-12 h-0.5 bg-gray-900 mx-auto sm:mx-0 my-2"></div>
                <p className="font-poppins text-sm lg:text-base text-gray-600">
                  Lorem ipsum consectetur
                </p>
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <button className="w-full sm:w-64 px-6 py-4 bg-primary-green rounded-full hover:bg-green-800 transition-colors">
            <span className="font-poppins font-medium text-lg text-white">
              Find your plant
            </span>
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 xl:w-7/12 relative">
          <div className="relative aspect-square lg:aspect-auto lg:h-full">
            <img 
              src="/images/plant.png" 
              alt="Main plant"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Circular Text Element */}
          <img 
            src="/images/Hero.png"
            alt="Decorative circular text"
            className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36"
          />

          {/* Vector Icon */}
          <div className="hidden lg:block absolute bottom-8 right-8 w-8 h-8">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              className="w-full h-full"
            >
              <circle cx="18" cy="18" r="18" fill="#333" stroke="#333"/>
              <path d="M14 15L18 19L24 15M14 21L18 25L24 21" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4 sm:px-0">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="w-full border border-gray-800 rounded-xl p-4 backdrop-blur-sm hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <img 
                src={card.imgSrc}
                alt={card.title}
                className="w-20 h-20 min-w-[80px] rounded-full object-cover border-2 border-gray-800"
              />
              <div>
                <h3 className="font-poppins font-semibold text-base text-primary-green mb-1">
                  {card.title}
                </h3>
                <p className="font-poppins text-sm text-gray-600 line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
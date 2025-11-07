import React from 'react';

const About = () => {
    return (
        <div>
             <div
      className="h-[300px] relative flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/V1cNsT7/sarath-p-raj-pj2qg-KXvnj4-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"}}>
      <div className="absolute inset-0 bg-black/50">
      </div>
      <div className="relative z-10 text-white px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Us</h2>
      </div>
    </div>
    <div className='max-w-7xl mx-auto px-4 py-10'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center text-green-600 mb-4'>About GreenNest</h2>
        <p>Welcome to GreenNest — your trusted online tree and plant store dedicated to bringing nature closer to your home. We believe every tree planted today creates a greener tomorrow. Our mission is to make it easy for everyone to buy, grow, and care for plants that improve air quality, beautify spaces, and support a sustainable planet.</p>
    </div>
    <div>
 <h1 className="text-3xl font-bold text-center text-green-600   py-20">Our Story</h1>

        <div className="hero bg-base-200 ">

  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.ibb.co.com/GhhD0YV/vadim-kaipov-8-ZELrod-Sv-Tc-unsplash.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <p className="py-6">
        GreenNest began with a simple dream — to make urban living greener. It all started when a small group of nature lovers decided to bring eco-friendly plant solutions to every doorstep. From selling local saplings to offering rare indoor plants, GreenNest has grown into a trusted community for plant enthusiasts.
      </p>
    </div>
  </div>
</div>
    </div>
    <div>
              <h1 className="text-3xl font-bold text-green-600 text-center">Our Mission & Values</h1>

        <div className="hero bg-base-200 py-15">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co.com/RGcLP0nk/douglas-fehr-WYEDIcqe-Xlc-unsplash.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <p className="py-6">
        Our mission is to inspire a love for nature through plants and trees. We value sustainability, quality, and customer happiness. Every product we offer — from air-purifying plants to outdoor trees — reflects our commitment to environmental care and natural beauty.
      </p>
    </div>
  </div>
</div>
    </div>
        </div>
    );
};

export default About;
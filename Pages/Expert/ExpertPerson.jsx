import React from 'react';

const experts = [
  {
    id: 1,
    name: "Dr. Maya Green",
    specialization: "Indoor Plant Specialist",
    image: "https://i.ibb.co.com/C5PxQngD/photo-1438761681033-6461ffad8d80.jpg",
  },
  {
    id: 2,
    name: "Leo Fern",
    specialization: "Garden & Soil Expert",
    image: "https://i.ibb.co.com/hRVHFhtN/portrait-indian-young-man-standing-isolated-466689-5786.jpg",
  },
  {
    id: 3,
    name: "Ava Bloom",
    specialization: "Botanical Nutritionist",
    image: "https://i.ibb.co.com/Mky6DbgS/istockphoto-1194196188-612x612.jpg",
  },
];





const ExpertPerson = () => {
    return (
        <div>
            <section className="py-12 px-6 bg-gradient-to-b from-[#d9f99d] to-[#ecfccb]">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Meet Our Green Experts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 overflow-hidden"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold text-green-700">
                {expert.name}
              </h3>
              <p className="text-gray-600">{expert.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default ExpertPerson;
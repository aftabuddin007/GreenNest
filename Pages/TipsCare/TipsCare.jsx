import React from 'react';
import {careTips} from '../../../public/tipsCareData'
const TipsCare = () => {
    return (
        <div>
            <section className="py-10 px-6 bg-gradient-to-b from-green-50 to-green-100 ">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
         Plant Care Tips
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {careTips.map((tip) => (
          <div
            key={tip.id}
            className="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-transform hover:scale-105"
          >
            <div
              className="text-5xl mb-4"
              style={{ color: tip.color }}
            >
              {tip.icon}
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">{tip.category}</h3>
            <p className="text-gray-700 font-medium">{tip.title}</p>
            <p className="text-gray-500 mt-2 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default TipsCare;
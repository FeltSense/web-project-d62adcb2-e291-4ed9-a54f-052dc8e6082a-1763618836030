
import React from 'react';

const services = [
  {
    icon: '💪',
    title: 'Personal Training',
    description: 'Customized workout plans and one-on-one coaching to help you reach your goals faster.',
  },
  {
    icon: '🏋️',
    title: 'Group Classes',
    description: 'Energizing group sessions like HIIT, Yoga, Spin, and Zumba suitable for all fitness levels.',
  },
  {
    icon: '🍎',
    title: 'Nutritional Guidance',
    description: 'Expert advice and meal plans to complement your training and optimize your health.',
  },
  {
    icon: '🧘',
    title: 'Wellness Programs',
    description: 'Holistic approaches to well-being, including mindfulness, flexibility, and recovery sessions.',
  },
  {
    icon: '🏊',
    title: 'Aquatic Fitness',
    description: 'Low-impact water-based workouts perfect for rehabilitation or a refreshing challenge.',
  },
  {
    icon: '🤸',
    title: 'Kids & Teens Fitness',
    description: 'Fun and safe fitness programs designed to build strength and healthy habits in younger members.',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Velocity Gym offers a diverse range of programs designed to cater to every fitness journey and goal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-start transform hover:-translate-y-2 border border-gray-700 hover:border-red-500"
            >
              <div className="text-5xl mb-4 p-3 bg-red-600 rounded-full flex items-center justify-center text-white shadow-md">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-400">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

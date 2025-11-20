import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Membership',
    price: '$30',
    duration: 'per month',
    features: [
      'Access to Gym Floor',
      'Standard Equipment',
      'Locker Room Access',
      'Basic Workout Plans'
    ],
  },
  {
    name: 'Pro Membership',
    price: '$50',
    duration: 'per month',
    features: [
      'All Basic Features',
      'Group Classes (Yoga, Spin)',
      'Personal Trainer Session (1/month)',
      'Nutrition Guidance',
      'Towel Service',
    ],
    isPopular: true,
  },
  {
    name: 'Elite Membership',
    price: '$80',
    duration: 'per month',
    features: [
      'All Pro Features',
      'Unlimited Personal Training',
      'Sauna & Steam Room Access',
      'Exclusive Member Events',
      'Smoothie Bar Discount',
      'Early Class Registration'
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6">
          Flexible Pricing Plans
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Choose the perfect membership plan that fits your fitness goals and budget at Velocity Gym.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-8 rounded-lg shadow-lg ${
                plan.isPopular
                  ? 'bg-blue-600 text-white transform scale-105 transition-transform duration-300'
                  : 'bg-white dark:bg-gray-800 dark:text-gray-200'
              }
                border ${plan.isPopular ? 'border-blue-700' : 'border-gray-200 dark:border-gray-700'}
                hover:shadow-xl transition-shadow duration-300`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </span>
              )}
              <h3 className={`mb-4 text-2xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {plan.name}
              </h3>
              <p className="mb-6">
                <span className={`text-5xl font-extrabold ${plan.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {plan.price}
                </span>
                <span className={`text-xl font-medium ${plan.isPopular ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                  /{plan.duration}
                </span>
              </p>
              <ul className="mb-8 space-y-4 text-left flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={`flex items-center ${plan.isPopular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-300'}`}>
                    <svg
                      className={`flex-shrink-0 w-5 h-5 ${plan.isPopular ? 'text-blue-200' : 'text-green-500'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-lg text-lg font-semibold transition-colors duration-300
                  ${plan.isPopular
                    ? 'bg-white text-blue-600 hover:bg-blue-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'
                  }`}
                // In a real app, this would trigger Stripe Checkout, e.g., via a serverless function
                onClick={() => alert(`Initiating Stripe checkout for ${plan.name}`)}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'CrossFit Athlete',
    quote: 'Velocity Gym has transformed my strength and endurance. The coaches are incredibly supportive, and the community is unmatched. Highly recommend for serious athletes!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mark T.',
    title: 'Fitness Enthusiast',
    quote: 'I've never felt more motivated to work out. The facilities are top-notch, and there's a great variety of equipment. My fitness journey has significantly improved thanks to Velocity Gym.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Jessica R.',
    title: 'Yoga Instructor',
    quote: 'The yoga studio at Velocity Gym is a serene escape. The instructors are fantastic, and the classes cater to all levels. It's a perfect balance to my other training.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'David P.',
    title: 'Marathon Runner',
    quote: 'As a runner, core strength and recovery are crucial. Velocity Gym's strength training programs and recovery amenities have been invaluable in preventing injuries and improving my race times.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-base font-semibold text-red-500 uppercase tracking-wide">What Our Members Say</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Hear From Our Satisfied Athletes
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-300">
            Join the community that's achieving their fitness goals every day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col rounded-lg bg-gray-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <Image
                  className="h-14 w-14 rounded-full object-cover border-2 border-red-500"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic flex-grow">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
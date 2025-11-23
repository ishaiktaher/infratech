import { Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Project Manager",
    company: "Skyline Constructions",
    content: "We've been using CemStrong's ReadyMix Plaster for our high-rise projects, and the results have been outstanding. The consistency and finish quality are unmatched. It's cut our application time by 40%.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Site Engineer",
    company: "Modern Builders Ltd",
    content: "Their brick adhesive has revolutionized our construction process. The bond strength is exceptional, and we've seen a significant reduction in material wastage. Highly recommended for any serious contractor.",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 3,
    name: "Mohammad Ali",
    role: "Construction Supervisor",
    company: "Elite Construction Co.",
    content: "I've been in construction for 15 years, and CemStrong's products are among the best I've worked with. Their technical support team is always available to help, and the product quality is consistently excellent.",
    image: "https://images.pexels.com/photos/8961095/pexels-photo-8961095.jpeg?auto=compress&cs=tinysrgb&w=100"
  },
  {
    id: 4,
    name: "Arun Sharma",
    role: "Managing Director",
    company: "Premium Developers",
    content: "We exclusively use CemStrong's products for all our premium residential projects. The quality speaks for itself, and our clients are always impressed with the final finish. The cost savings on labor are an added bonus.",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Trusted by leading construction companies and contractors across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-theme rounded-full p-1">
                    <Quote size={16} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-theme">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Join hundreds of satisfied customers who trust CemStrong for their construction needs
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-70">
            <img
              src="https://placehold.co/120x40/1bab83/white?text=SKYLINE"
              alt="Skyline Constructions"
              className="h-10"
            />
            <img
              src="https://placehold.co/120x40/1bab83/white?text=MODERN"
              alt="Modern Builders"
              className="h-10"
            />
            <img
              src="https://placehold.co/120x40/1bab83/white?text=ELITE"
              alt="Elite Construction"
              className="h-10"
            />
            <img
              src="https://placehold.co/120x40/1bab83/white?text=PREMIUM"
              alt="Premium Developers"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
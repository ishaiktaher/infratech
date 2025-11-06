import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What types of construction materials do you offer?",
    answer: "We offer a comprehensive range of construction materials including Ready Mix Plaster, Brick Adhesive, Waterproofing products and various other high-quality construction products designed for both residential and commercial projects."
  },
  {
    question: "How do I choose the right product for my project?",
    answer: "Our team of experts can help you select the perfect product based on your specific requirements. Contact us through WhatsApp or phone, and we'll guide you through the selection process."
  },
  {
    question: "Do you provide delivery services?",
    answer: "Yes, we offer delivery services across Hyderabad. Contact us for delivery options and timelines for your specific location."
  },
  {
    question: "What are your quality standards?",
    answer: "All our products meet or exceed industry standards and undergo rigorous quality testing to ensure consistent performance and durability."
  },
  {
    question: "Can I get a sample of your products?",
    answer: "Yes, we provide product samples for testing. Please contact our sales team to arrange for product samples."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500" size={20} />
                ) : (
                  <ChevronDown className="text-gray-500" size={20} />
                )}
              </button>
              
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
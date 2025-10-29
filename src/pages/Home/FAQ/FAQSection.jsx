import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, our posture corrector is designed to be adjustable and suitable for a wide range of ages and body types. It comes with customizable straps to ensure a comfortable and secure fit for everyone.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely! Regular use helps retrain your muscles to maintain proper alignment, reducing strain on your back and neck. Many users report significant improvement in posture and reduction in pain within weeks.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Yes, the Posture Pro includes optional vibration reminders that gently alert you when you slouch, helping you build better posture habits over time.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "Simply enter your email on the product page, and we'll send you an instant notification the moment it's restocked. You'll be the first to know!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-800 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
        >
          See More FAQ's
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FAQSection;

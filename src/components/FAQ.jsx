import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Are your fertilizers organic?",
    a: "Yes, all our fertilizers are 100% certified organic and free from harmful chemicals.",
  },
  {
    q: "Do you provide bulk orders?",
    a: "Yes, we supply in bulk to farms, retailers, and cooperatives at discounted rates.",
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes, we provide fast and reliable home delivery across India.",
  },
  {
    q: "Can I get expert advice before purchase?",
    a: "Absolutely! Our agronomy experts are available for free consultation.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, credit/debit cards, net banking, and cash on delivery.",
  },
  {
    q: "Are your pesticides safe for organic farming?",
    a: "Yes, we offer bio-pesticides that are approved for organic agricultural use.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-14 bg-green-50">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-6 px-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-lg shadow-md cursor-pointer transition-all"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-green-800">{item.q}</h4>
              <ChevronDown
                className={`w-5 h-5 text-green-600 transform transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === i && (
              <p className="text-gray-600 mt-3 border-t pt-3">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

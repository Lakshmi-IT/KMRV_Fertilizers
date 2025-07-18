import { Leaf, ShieldCheck, DollarSign, UserCheck } from "lucide-react";

const features = [
  {
    title: "100% Organic Products",
    icon: <Leaf size={40} className="text-green-600 mb-4" />,
  },
  {
    title: "Wide Variety of Pesticides",
    icon: <ShieldCheck size={40} className="text-green-600 mb-4" />,
  },
  {
    title: "Affordable Pricing",
    icon: <DollarSign size={40} className="text-green-600 mb-4" />,
  },
  {
    title: "Free Expert Consultation",
    icon: <UserCheck size={40} className="text-green-600 mb-4" />,
  },
];

export default function Features() {
  return (
    <section className="p-10 bg-green-50 text-center pt-24">
      <h2 className="text-3xl font-bold mb-6 text-green-800">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
          >
            {feature.icon}
            <h3 className="text-green-900 font-semibold">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

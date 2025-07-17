import { Quote } from "lucide-react"; // Optional: quote icon

export default function Testimonials() {
  const data = [
    {
      name: "Ravi Kumar",
      feedback: "I've been using KMRUproducts for the past year and my crop yield has significantly increased. Excellent quality and eco-friendly.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Meena Patel",
      feedback: "Affordable fertilizers and prompt delivery. My vegetables are thriving naturally without harsh chemicals!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <section className="bg-green-50 py-14 text-center">
      <h2 className="text-4xl font-bold text-green-800 mb-10">What Our Farmers Say</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 px-4 md:px-0">
        {data.map((d, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
          >
            <Quote className="w-8 h-8 text-green-400 mb-4" />
            <p className="text-gray-700 italic leading-relaxed">"{d.feedback}"</p>
            <div className="flex items-center gap-4 mt-6">
              <img
                src={d.image}
                alt={d.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
              />
              <p className="font-semibold text-green-700">{d.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

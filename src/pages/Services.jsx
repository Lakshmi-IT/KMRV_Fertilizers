
const Services = () => {
  const services = [
    {
      icon: "🌾",
      title: "Premium Fertilizers",
      description: "Advanced nutrient formulations designed to maximize crop yield and soil health.",
      features: ["Organic & Synthetic Options", "Slow-Release Technology", "Custom Blends", "Soil Analysis"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      icon: "🛡️",
      title: "Eco-Friendly Pesticides",
      description: "Targeted pest control solutions that protect crops while preserving beneficial insects.",
      features: ["Biological Controls", "IPM Solutions", "Residue-Free Options", "Resistance Management"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop"
    },
    {
      icon: "🧪",
      title: "Soil Testing & Analysis",
      description: "Comprehensive soil health assessments to optimize your fertilizer and pest management strategies.",
      features: ["Nutrient Analysis", "pH Testing", "Organic Matter Assessment", "Microbiome Analysis"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      icon: "📱",
      title: "Digital Farm Management",
      description: "Smart technology solutions to monitor, track, and optimize your agricultural operations.",
      features: ["Crop Monitoring", "Weather Integration", "Application Tracking", "Yield Prediction"],
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=400&h=300&fit=crop"
    },
    {
      icon: "👨‍🌾",
      title: "Expert Consultation",
      description: "Personalized guidance from our agricultural specialists to maximize your farm's potential.",
      features: ["Custom Farm Plans", "Problem Diagnosis", "Training Programs", "24/7 Support"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop"
    },
    {
      icon: "🚚",
      title: "Delivery & Application",
      description: "Professional delivery and application services to ensure proper product usage and timing.",
      features: ["Scheduled Delivery", "Professional Application", "Equipment Rental", "Emergency Service"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=300&fit=crop"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Assessment",
      description: "We analyze your farm's specific needs, soil conditions, and crop requirements."
    },
    {
      step: 2,
      title: "Recommendation",
      description: "Our experts create a customized plan with the right products and application schedule."
    },
    {
      step: 3,
      title: "Implementation",
      description: "We provide the products and support you need to execute your plan successfully."
    },
    {
      step: 4,
      title: "Monitoring",
      description: "Ongoing support and monitoring to ensure optimal results and adjust as needed."
    }
  ];

  return (
    <div className="lg:px-14 bg-green-50">
      {/* Hero Section */}
      <section className="relative  bg-green-50  py-20 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive agricultural solutions designed to maximize your farm's productivity
              while maintaining environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2  border border-gray-100"
              >
                <div className="h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Our proven 4-step process ensures you get the best results for your farm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-[-20px] w-10 h-0.5 bg-gradient-to-r from-green-300 to-green-400"></div>
                )}
              </div>

            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

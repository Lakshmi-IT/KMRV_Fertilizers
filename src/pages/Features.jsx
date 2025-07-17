
const Features = () => {
  const mainFeatures = [
    {
      icon: "🧬",
      title: "Advanced Formulations",
      description: "Our proprietary blend technology ensures optimal nutrient release and plant uptake.",
      benefits: ["Extended Release Technology", "Enhanced Bioavailability", "Reduced Application Frequency", "Weather-Resistant Formulas"],
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop"
    },
    {
      icon: "🌱",
      title: "Organic & Sustainable",
      description: "Environmentally responsible solutions that improve soil health and protect ecosystems.",
      benefits: ["OMRI Listed Products", "Carbon Footprint Reduction", "Biodegradable Formulations", "Pollinator-Safe Options"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop"
    },
    {
      icon: "📊",
      title: "Smart Monitoring",
      description: "IoT-enabled sensors and data analytics to optimize application timing and rates.",
      benefits: ["Real-time Soil Monitoring", "Weather Integration", "Predictive Analytics", "Mobile Dashboard"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop"
    },
    {
      icon: "🎯",
      title: "Precision Application",
      description: "Variable rate technology and GPS guidance for targeted, efficient product application.",
      benefits: ["GPS-Guided Systems", "Variable Rate Technology", "Application Mapping", "Drift Reduction"],
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=500&h=300&fit=crop"
    }
  ];

  const productFeatures = [
    {
      category: "Fertilizers",
      features: [
        { name: "Slow-Release Nitrogen", description: "Reduces leaching and provides season-long nutrition" },
        { name: "Micronutrient Complex", description: "Essential trace elements for optimal plant health" },
        { name: "pH Buffered", description: "Maintains soil pH balance for better nutrient uptake" },
        { name: "Water Soluble", description: "Quick absorption for immediate plant response" }
      ]
    },
    {
      category: "Pesticides",
      features: [
        { name: "Selective Action", description: "Targets specific pests while protecting beneficial insects" },
        { name: "Systemic Protection", description: "Internal plant protection from root to leaf" },
        { name: "Residue Management", description: "Rapid breakdown to minimize environmental impact" },
        { name: "Resistance Prevention", description: "Multiple modes of action to prevent pest resistance" }
      ]
    }
  ];

  const techFeatures = [
    {
      icon: "📱",
      title: "KMRU Mobile App",
      description: "Complete farm management in your pocket",
      features: ["Field Mapping", "Application Scheduler", "Weather Alerts", "Yield Tracking"]
    },
    {
      icon: "🛰️",
      title: "Satellite Monitoring",
      description: "Crop health monitoring from space",
      features: ["NDVI Analysis", "Stress Detection", "Growth Tracking", "Yield Prediction"]
    },
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description: "Machine learning for smarter farming decisions",
      features: ["Disease Prediction", "Optimal Timing", "Risk Assessment", "ROI Optimization"]
    },
    {
      icon: "🔬",
      title: "Lab Analysis Portal",
      description: "Digital access to all your test results",
      features: ["Instant Results", "Historical Tracking", "Trend Analysis", "Recommendations"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-green-600">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge technology and innovative features that make 
              KMRU the leader in agricultural solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {mainFeatures.map((feature, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{feature.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{feature.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center p-4 bg-green-50 rounded-lg">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Features</h2>
            <p className="text-xl text-gray-600">
              Innovative characteristics that set our products apart from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {productFeatures.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">{category.category}</h3>
                <div className="space-y-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.name}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Technology</h2>
            <p className="text-xl text-gray-600">
              Digital tools and platforms that revolutionize farm management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techFeatures.map((tech, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{tech.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">KMRU vs Traditional Methods</h2>
            <p className="text-xl text-gray-600">
              See how our innovative approach compares to conventional farming methods.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">KMRU</th>
                    <th className="px-6 py-4 text-center font-semibold">Traditional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Application Precision</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        GPS-Guided ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Manual ✗
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Environmental Impact</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Minimal ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        High ✗
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Monitoring</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Real-time ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Periodic ✗
                      </span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Data Analytics</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        AI-Powered ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Limited ✗
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Yield Increase</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        30-50% ✓
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        5-15% ✗
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Future of Farming</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your agricultural operations with our advanced features? 
            Get started today and see the difference technology can make.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 font-semibold">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-green-600 transition-all duration-200 font-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;

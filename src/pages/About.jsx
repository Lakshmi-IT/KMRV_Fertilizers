
const About = () => {
  const values = [
    {
      icon: "🌍",
      title: "Environmental Responsibility",
      description: "We're committed to sustainable agriculture that protects our planet for future generations."
    },
    {
      icon: "🔬",
      title: "Scientific Innovation", 
      description: "Our research-driven approach ensures every product is backed by the latest agricultural science."
    },
    {
      icon: "🤝",
      title: "Farmer Partnership",
      description: "We work closely with farmers to understand their needs and provide tailored solutions."
    },
    {
      icon: "💡",
      title: "Continuous Improvement",
      description: "We constantly innovate and improve our products based on real-world feedback and results."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Agricultural Scientist",
      bio: "20+ years in agricultural research with expertise in sustainable farming solutions.",
      avatar: "👩‍🔬"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product Development", 
      bio: "Former farmer turned innovator, bringing practical knowledge to our product design.",
      avatar: "👨‍💼"
    },
    {
      name: "Emma Thompson",
      role: "Environmental Specialist",
      bio: "Environmental science expert ensuring all our products meet the highest eco-standards.",
      avatar: "👩‍🌾"
    }
  ];

  return (
    <div className="bg-green-50 lg:px-14">
      {/* Hero Section */}
      <section className="relative  bg-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-green-600">KMRU</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the agricultural revolution with innovative, sustainable solutions 
              that empower farmers and protect the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009 by a team of agricultural scientists and former farmers, 
                KMRU was born from a simple yet powerful vision: to create agricultural 
                solutions that increase productivity while preserving the environment.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small research lab has grown into a leading provider of 
                fertilizers and pesticides used by farmers across the country. Our commitment 
                to innovation and sustainability has made us a trusted partner in modern agriculture.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to push the boundaries of agricultural science, developing 
                products that not only boost yields but also contribute to healthier soil, 
                cleaner water, and a more sustainable future for farming.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop" 
                  alt="Pine trees representing growth" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower farmers worldwide with innovative, sustainable agricultural solutions 
                that maximize crop yields while protecting the environment for future generations. 
                We believe that productive farming and environmental stewardship can go hand in hand.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl mb-6">🔮</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the global leader in sustainable agriculture technology, creating a world 
                where farming feeds the growing population while regenerating the earth's natural 
                resources and ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at KMRU.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white border border-gray-100"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-green-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate experts behind KMRU's innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence has been recognized by industry leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-orange-50 rounded-2xl">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Award 2023</h3>
              <p className="text-gray-600">Agricultural Innovation Society</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-300 to-emerald-50 rounded-2xl">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability Leader 2022</h3>
              <p className="text-gray-600">Environmental Agriculture Council</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-300 to-indigo-50 rounded-2xl">
              <div className="text-5xl mb-4">🥇</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Organic Solutions 2021</h3>
              <p className="text-gray-600">Organic Farming Association</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

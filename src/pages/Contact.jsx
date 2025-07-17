
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    farmSize: '',
    cropType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      farmSize: '',
      cropType: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Our Location",
      details: ["123 Agriculture Street", "Farm City, FC 12345", "United States"]
    },
    {
      icon: "📞",
      title: "Phone Numbers",
      details: ["Main: +1 (555) 123-4567", "Support: +1 (555) 123-4568", "Emergency: +1 (555) 123-4569"]
    },
    {
      icon: "📧",
      title: "Email Addresses",
      details: ["info@KMRU.com", "support@KMRU.com", "sales@KMRU.com"]
    },
    {
      icon: "🕒",
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const regions = [
    {
      name: "North Region",
      manager: "John Smith",
      phone: "+1 (555) 123-4570",
      email: "north@KMRU.com",
      areas: ["Minnesota", "Wisconsin", "North Dakota", "South Dakota"]
    },
    {
      name: "South Region", 
      manager: "Maria Garcia",
      phone: "+1 (555) 123-4571",
      email: "south@KMRU.com",
      areas: ["Texas", "Louisiana", "Arkansas", "Oklahoma"]
    },
    {
      name: "East Region",
      manager: "David Johnson",
      phone: "+1 (555) 123-4572", 
      email: "east@KMRU.com",
      areas: ["Ohio", "Indiana", "Illinois", "Iowa"]
    },
    {
      name: "West Region",
      manager: "Sarah Chen",
      phone: "+1 (555) 123-4573",
      email: "west@KMRU.com", 
      areas: ["California", "Oregon", "Washington", "Nevada"]
    }
  ];

  return (
    <div className='bg-green-50 lg:px-14'>
      {/* Hero Section */}
      <section className="relative  bg-green-50  py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-green-600">KMRU</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our agricultural experts. We're here to help you grow 
              better crops and build a sustainable farming future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="farmSize" className="block text-sm font-medium text-gray-700 mb-2">
                      Farm Size (acres)
                    </label>
                    <select
                      id="farmSize"
                      name="farmSize"
                      value={formData.farmSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select farm size</option>
                      <option value="under-50">Under 50 acres</option>
                      <option value="50-200">50 - 200 acres</option>
                      <option value="200-500">200 - 500 acres</option>
                      <option value="500-1000">500 - 1,000 acres</option>
                      <option value="over-1000">Over 1,000 acres</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cropType" className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Crop Type
                    </label>
                    <select
                      id="cropType"
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select crop type</option>
                      <option value="corn">Corn</option>
                      <option value="wheat">Wheat</option>
                      <option value="soybeans">Soybeans</option>
                      <option value="rice">Rice</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your farming needs or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team of agricultural experts is ready to help you find the perfect 
                  solutions for your farming needs. Reach out through any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-6">
                    <div className="text-4xl mb-4">{info.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-red-900 mb-2">🚨 Emergency Support</h3>
                <p className="text-red-700">
                  For urgent agricultural emergencies or critical crop issues, 
                  call our 24/7 emergency hotline: <strong>+1 (555) 911-CROP</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Offices</h2>
            <p className="text-xl text-gray-600">
              Find your local KMRU representative for personalized service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{region.name}</h3>
                <div className="space-y-3 mb-4">
                  <p className="text-gray-600">
                    <span className="font-semibold">Manager:</span> {region.manager}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Phone:</span> {region.phone}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Email:</span> {region.email}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Coverage Areas:</p>
                  <div className="space-y-1">
                    {region.areas.map((area, areaIndex) => (
                      <span key={areaIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-2 mb-1">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Headquarters</h2>
            <p className="text-xl text-gray-600">
              Come see our research facilities and meet our team in person.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">
                Map integration would be implemented here<br />
                123 Agriculture Street, Farm City, FC 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our products and services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our emergency hotline."
              },
              {
                question: "Do you offer free soil testing?",
                answer: "Yes, we provide complimentary basic soil testing for new customers. More comprehensive analysis packages are available for a fee."
              },
              {
                question: "What is your product return policy?",
                answer: "We offer a 30-day satisfaction guarantee on all products. If you're not satisfied with the results, we'll work with you to find a solution or provide a refund."
              },
              {
                question: "Do you provide training on product application?",
                answer: "Absolutely! We offer both on-site training and digital resources to ensure proper application techniques and maximize product effectiveness."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

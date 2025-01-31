import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 px-8 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold">Digital Menu Pro</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <h2 className="text-5xl font-extrabold">Revolutionize Your Restaurant with Digital Menus</h2>
        <p className="mt-4 text-lg">Seamless, customizable, and efficient solutions for modern dining experiences.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200">Get Started</button>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 px-8">
        <h3 className="text-4xl font-bold text-center">Why Choose Us?</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-2xl font-semibold">Customizable Menus</h4>
            <p className="mt-2">Easily update your digital menu in real time.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-2xl font-semibold">QR Code Ordering</h4>
            <p className="mt-2">Allow customers to order directly from their smartphones.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h4 className="text-2xl font-semibold">Multi-Device Support</h4>
            <p className="mt-2">Works on tablets, smartphones, and kiosks.</p>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-100 py-16 px-8 text-center">
        <h3 className="text-4xl font-bold">Pricing Plans</h3>
        <p className="mt-4 text-lg">Affordable plans for every restaurant.</p>
      </section>
      
      {/* Footer Section */}
      <footer id="contact" className="bg-blue-600 text-white text-center py-6">
        <p>&copy; 2025 Digital Menu Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

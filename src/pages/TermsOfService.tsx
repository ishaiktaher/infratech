import SEOHead from '../components/SEOHead';

const TermsOfService = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service - InfraTech Construction Materials"
        description="Terms of Service for InfraTech Construction Materials. Read about our terms, conditions, and policies."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to abide by these terms, please do not 
              use this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Products and Services</h2>
            <p className="mb-4">
              All products and services offered by InfraTech Construction Materials are subject to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Availability</li>
              <li>Quality specifications as mentioned in product descriptions</li>
              <li>Pricing and payment terms</li>
              <li>Delivery and shipping policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily access the materials (information or software) on 
              InfraTech Construction Materials' website for personal, non-commercial viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer</h2>
            <p className="mb-4">
              The materials on InfraTech Construction Materials' website are provided on an 'as is' basis. 
              We make no warranties, expressed or implied, and hereby disclaim and negate all other 
              warranties including, without limitation:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Implied warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Orders and Payment</h2>
            <p className="mb-4">
              By placing an order, you agree to provide current, complete, and accurate purchase and 
              account information. We reserve the right to refuse service, terminate accounts, or cancel 
              orders at our discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Product Quality and Returns</h2>
            <p className="mb-4">
              We strive to provide high-quality construction materials. Our return policy allows returns 
              within a reasonable timeframe if products don't meet specified quality standards. Contact 
              our customer service for specific return procedures.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="mb-4">
              All content included on this website, such as text, graphics, logos, images, and software, 
              is the property of InfraTech Construction Materials or its content suppliers and protected 
              by copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-4">
              Email: infratechmaterials@gmail.com<br />
              Phone: +91 9052555510<br />
              Address: Main Road Kaithalapur, Near Madhapur, Hyderabad, Telangana - 500081
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
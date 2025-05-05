
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ServicesHero = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We offer a range of specialized services designed to help you advance in your tech career journey.
        </p>
        <Link to="/book-slot">
          <Button className="bg-brand-red hover:bg-red-600 text-white">
            Book a Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesHero;

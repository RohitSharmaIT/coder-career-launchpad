
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Book a service today and take the next step in your professional journey.
        </p>
        <Link to="/book-slot">
          <Button className="bg-brand-red hover:bg-red-600 text-white text-lg px-8 py-6">
            Book a Slot Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesCTA;

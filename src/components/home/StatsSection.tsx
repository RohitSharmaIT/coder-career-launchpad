
import Counter from "@/components/Counter";

const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-brand-red via-red-600 to-red-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Building success stories across the tech industry with measurable results and lasting impact.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in" style={{animationDelay: '0.1s'}}>
            <Counter target={5000} label="Subscribers" suffix="+" />
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Counter target={500000} label="Views" suffix="+" />
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: '0.3s'}}>
            <Counter target={1200} label="Mock Interviews" suffix="+" />
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Counter target={1100} label="Learners Helped" suffix="+" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

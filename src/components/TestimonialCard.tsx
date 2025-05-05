
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, company, testimonial, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={avatar} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;

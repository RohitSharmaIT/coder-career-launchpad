
interface ConsultationData {
  name: string;
  companyName: string;
  email: string;
  contactDetail: string;
  requirement: string;
  selectedDate: Date | undefined;
  selectedTime: string;
}

interface ReviewStepProps {
  formData: ConsultationData;
}

const ReviewStep = ({ formData }: ReviewStepProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold text-gray-700">Full Name</div>
            <div>{formData.name}</div>
          </div>
          
          {formData.companyName && (
            <div>
              <div className="font-semibold text-gray-700">Company</div>
              <div>{formData.companyName}</div>
            </div>
          )}
          
          <div>
            <div className="font-semibold text-gray-700">Email</div>
            <div>{formData.email}</div>
          </div>
          
          <div>
            <div className="font-semibold text-gray-700">Contact</div>
            <div>{formData.contactDetail}</div>
          </div>
          
          <div>
            <div className="font-semibold text-gray-700">Date</div>
            <div>{formData.selectedDate ? formData.selectedDate.toLocaleDateString() : ''}</div>
          </div>
          
          <div>
            <div className="font-semibold text-gray-700">Time</div>
            <div>{formData.selectedTime}</div>
          </div>
        </div>
        
        <div>
          <div className="font-semibold text-gray-700">Requirement</div>
          <div className="mt-1">{formData.requirement}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;

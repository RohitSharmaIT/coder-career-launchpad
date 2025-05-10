
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const AdminPanelHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <Button onClick={() => navigate('/dashboard')} variant="outline">
        Back to Dashboard
      </Button>
    </div>
  );
};

export default AdminPanelHeader;

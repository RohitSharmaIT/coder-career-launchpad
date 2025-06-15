import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const SubscribeBox = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Stay up to date with the latest news, articles, and resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:ring-brand-red focus:border-brand-red"
          />
          <Button className="bg-brand-red hover:bg-red-600 text-white rounded-md py-3 px-6 flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Subscribe
          </Button>
        </div>
        <p className="text-gray-500 mt-4">
          We respect your privacy and won't share your email with anyone.
        </p>
      </div>
    </section>
  );
};

export default SubscribeBox;

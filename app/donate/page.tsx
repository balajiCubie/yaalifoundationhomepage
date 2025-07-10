"use client"; // Add "use client" directive

import { useState, useEffect } from 'react';
import FeaturedCampaign from '../components/donate/FeaturedCampaign';
import DonationForm from '../components/donate/DonationForm';
import OtherSupportOptions from '../components/donate/OtherSupportOptions';

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');
  const [impactMessage, setImpactMessage] = useState('');

  useEffect(() => {
    if (amount <= 0) {
      setImpactMessage('Enter an amount to see the impact!');
      return;
    }
    let message = '';
    if (amount < 25) {
      message = `Your donation of $${amount} can provide essential supplies for a child.`;
    } else if (amount < 100) {
      message = `Your donation of $${amount} can provide clean water for 5 people.`;
    } else if (amount < 500) {
      message = `Your donation of $${amount} can plant 10 trees.`;
    } else {
      message = `Your generous donation of $${amount} can support a community education program for a month!`;
    }
    setImpactMessage(message);
  }, [amount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your ${donationType} donation of $${amount}!`);
    // In a real application, this would integrate with a payment gateway (Stripe, Razorpay, PayPal)
    // and handle backend processing for receipts, donor tracking, etc.
  };

  return (
    <div className="min-h-screen flex flex-col">
      <section className="py-16 bg-gray-100 dark:bg-gray-800 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Support Our Mission</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Your generous contribution empowers us to continue our vital work in education, healthcare, and environmental conservation. Every donation, no matter the size, makes a significant difference.
          </p>

          <FeaturedCampaign
            campaignGoal={10000}
            currentRaised={7500}
            title="Current Campaign: Clean Water for All"
            description="Help us reach our goal to provide clean drinking water to 10 more villages."
          />

          <DonationForm
            amount={amount}
            setAmount={setAmount}
            donationType={donationType}
            setDonationType={setDonationType}
            impactMessage={impactMessage}
            handleDonationSubmit={handleDonationSubmit}
          />

          <OtherSupportOptions />
        </div>
      </section>
    </div>
  );
}

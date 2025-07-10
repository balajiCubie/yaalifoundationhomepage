"use client"; // Add "use client" directive

import Link from 'next/link';
import { useState, useEffect } from 'react'; // Import useState and useEffect

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

  const campaignGoal = 10000;
  const currentRaised = 7500;
  const progress = (currentRaised / campaignGoal) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Donate Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Support Our Mission</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Your generous contribution empowers us to continue our vital work in education, healthcare, and environmental conservation. Every donation, no matter the size, makes a significant difference.
          </p>

          {/* Featured Campaign */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">Current Campaign: Clean Water for All</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Help us reach our goal to provide clean drinking water to 10 more villages.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-600 mb-2">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              ${currentRaised.toLocaleString()} raised of ${campaignGoal.toLocaleString()} goal
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg max-w-xl mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Make a Donation</h3>
            <form onSubmit={handleDonationSubmit} className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-lg font-medium text-gray-700 dark:text-gray-300 text-left mb-2">Donation Amount</label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
                    $
                  </span>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    min="1"
                    value={amount}
                    onChange={handleAmountChange}
                    className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-3 text-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    placeholder="Enter amount"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-left">{impactMessage}</p>
              </div>

              <div>
                <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 text-left mb-2">Donation Type</label>
                <div className="mt-1 grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setDonationType('one-time')}
                    className={`w-full py-3 rounded-md font-semibold transition duration-300 border ${
                      donationType === 'one-time'
                        ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType('monthly')}
                    className={`w-full py-3 rounded-md font-semibold transition duration-300 border ${
                      donationType === 'monthly'
                        ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-500 dark:hover:bg-gray-500'
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="dedication" className="block text-lg font-medium text-gray-700 dark:text-gray-300 text-left mb-2">Dedicate this donation (Optional)</label>
                <input
                  type="text"
                  name="dedication"
                  id="dedication"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="In honor of / In memory of..."
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300 text-left mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300 text-left mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3 text-lg dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  placeholder="john.doe@example.com"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-green-700 transition duration-300 mt-6"
              >
                Donate Now
              </button>
            </form>
          </div>

          {/* Donor Dashboard & Corporate Sponsorship */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Beyond Donations</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Explore other ways to support our mission or partner with us.
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-4">
              <Link href="/donor-dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Donor Dashboard (Coming Soon)
              </Link>
              <Link href="/corporate-sponsorship" className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition duration-300">
                Corporate Sponsorship
              </Link>
              <Link href="/volunteer" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

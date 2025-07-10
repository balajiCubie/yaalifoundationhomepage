import React from 'react';

interface DonationFormProps {
  amount: number;
  setAmount: (amount: number) => void;
  donationType: string;
  setDonationType: (type: string) => void;
  impactMessage: string;
  handleDonationSubmit: (e: React.FormEvent) => void;
}

const DonationForm: React.FC<DonationFormProps> = ({
  amount,
  setAmount,
  donationType,
  setDonationType,
  impactMessage,
  handleDonationSubmit,
}) => {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  return (
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
  );
};

export default DonationForm;

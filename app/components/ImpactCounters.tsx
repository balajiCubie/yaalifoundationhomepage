import React from 'react';

interface ImpactCounterProps {
  value: string;
  label: string;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({ value, label }) => (
  <div className="p-6 bg-blue-800 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
    <p className="text-4xl sm:text-5xl font-extrabold mb-2">{value}</p>
    <p className="text-lg sm:text-xl">{label}</p>
  </div>
);

interface ImpactCountersProps {
  counters: ImpactCounterProps[];
}

const ImpactCounters: React.FC<ImpactCountersProps> = ({ counters }) => {
  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {counters.map((counter, index) => (
            <ImpactCounter key={index} value={counter.value} label={counter.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;

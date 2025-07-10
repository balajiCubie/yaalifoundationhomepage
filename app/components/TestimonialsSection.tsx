import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => (
  <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
    <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
      "{quote}"
    </p>
    <p className="font-semibold text-gray-800 dark:text-white">- {author}</p>
  </div>
);

interface TestimonialsSectionProps {
  title: string;
  testimonials: TestimonialProps[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, testimonials }) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

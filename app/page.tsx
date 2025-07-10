import HeroSection from './components/HeroSection';
import ImpactCounters from './components/ImpactCounters';
import AboutUsSection from './components/AboutUsSection';
import MissionSection from './components/MissionSection';
import TestimonialsSection from './components/TestimonialsSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const impactCountersData = [
    { value: '5,000+', label: 'People with Clean Water' },
    { value: '10,000+', label: 'Trees Planted' },
    { value: '1,200+', label: 'Students Educated' },
  ];

  const aboutUsParagraphs = [
    "The Yaali Foundation is a non-profit organization committed to making a lasting impact on communities worldwide. Founded on the principles of compassion and empowerment, we strive to address critical social, economic, and environmental challenges.",
    "Our work spans various sectors, including education, healthcare, environmental conservation, and poverty alleviation. We believe in a holistic approach to development, working closely with local communities to identify their needs and implement sustainable solutions.",
    "Through our dedicated team and network of volunteers, we aim to create a world where everyone has the opportunity to thrive and contribute to a better future.",
  ];

  const missionItemsData = [
    {
      title: 'Education',
      description: 'Providing access to quality education for underprivileged children and adults, fostering knowledge and skills for a brighter future.',
    },
    {
      title: 'Healthcare',
      description: 'Improving health outcomes by supporting medical camps, providing essential supplies, and promoting health awareness in remote areas.',
    },
    {
      title: 'Environment',
      description: 'Engaging in conservation efforts, promoting sustainable practices, and raising awareness about environmental protection.',
    },
  ];

  const testimonialsData = [
    {
      quote: 'Yaali Foundation has transformed our community. Their dedication to education has opened up new opportunities for our children.',
      author: 'Maria S., Community Leader',
    },
    {
      quote: "Volunteering with Yaali Foundation has been an incredibly rewarding experience. I've seen firsthand the positive impact they make.",
      author: 'David L., Volunteer',
    },
  ];

  const successStoriesData = [
    {
      imageSrc: '/hero.jpg',
      title: 'Bringing Clean Water to Remote Villages',
      description: 'Learn how our Clean Water Initiative transformed daily life for thousands, reducing waterborne diseases and improving health.',
      link: '/projects/1',
    },
    {
      imageSrc: '/hero.jpg',
      title: 'Empowering Women Through Education',
      description: 'Discover the journey of women who gained literacy and vocational skills, leading to economic independence and community leadership.',
      link: '/projects/3',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection
        title="Empowering Communities, <br className='hidden md:inline'/>Building a Sustainable Future"
        description="Join Yaali Foundation in fostering positive change through education, healthcare, and environmental conservation."
        imageSrc="/hero.jpg"
        donateLink="/donate"
        volunteerLink="/volunteer"
      />
      <ImpactCounters counters={impactCountersData} />
      <AboutUsSection
        title="About Us"
        imageSrc="/hero.jpg"
        paragraphs={aboutUsParagraphs}
      />
      <MissionSection
        title="Our Mission"
        missionItems={missionItemsData}
      />
      <TestimonialsSection
        title="What People Say About Us"
        testimonials={testimonialsData}
      />
      <SuccessStoriesSection
        title="Our Success Stories"
        stories={successStoriesData}
      />
      <ContactSection
        title="Get in Touch"
        description="We would love to hear from you! Reach out to us for partnerships, volunteering, or any inquiries."
        email="info@yaalifoundation.org"
      />
    </div>
  );
}

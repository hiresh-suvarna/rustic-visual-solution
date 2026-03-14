import PortfolioCard from '../components/PortfolioCard';
import React from "react";

export default function OurWork() {
  const projects = [
    {
      image: '/images/DJI_0095.jpg',
      title: 'Modern Luxury Villa',
      category: 'Luxury Residence',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      image: '/images/DJI_0206.JPG',
      title: 'Fine Dining Experience',
      category: 'Premium Hospitality',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      image: '/images/DJI_0723.JPG',
      title: 'Corporate Headquarters',
      category: 'Commercial Space',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      image: '/images/port1.JPG',
      title: 'University Campus',
      category: 'Educational Institution',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      image: '/images/port2.JPG',
      title: 'Contemporary Art Museum',
      category: 'Cultural Space',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      image: '/images/port2.JPG',
      title: 'Contemporary Art Museum',
      category: 'Cultural Space',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  return (
    <div className="pt-32 lg:pt-40 pb-20 lg:pb-32 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated selection of premium visual experiences we've created for luxury spaces and brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

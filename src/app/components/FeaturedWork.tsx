import React from 'react';
import Image from 'next/image';

interface Work {
  image: string;
  title: string;
  category: string;
  description: string;
}

const FeaturedWorks = () => {
  const works: Work[] = [
    {
      image: '/picture/work1.jpg',
      title: 'Designing Dashboards',
      category: 'Dashboard',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor.',
    },
    {
      image: '/picture/work2.jpg',
      title: 'Designing Dashboards',
      category: 'Dashboard',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor.',
    },
    {
      image: '/picture/work3.jpg',
      title: 'Designing Dashboards',
      category: 'Dashboard',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor.',
    },
  ];

  return (
    <section className="p-6 md:p-12 bg-[#faf5f5]">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-black">Featured Works</h2>
      <div className="space-y-8">
        {works.map((work, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <Image
              src={work.image}
              alt={work.title}
              width={350}
              height={350}
              className="object-cover rounded w-full md:w-1/3"
            />
            <div>
              <h3 className="text-lg md:text-xl font-extrabold text-black">{work.title}</h3>
              <div className="flex items-center space-x-3 mt-2">
                <span className="px-3 py-1 text-xs font-bold text-white bg-[#f98585] rounded-full">
                  2020
                </span>
                <p className="text-sm text-gray-500">{work.category}</p>
              </div>
              <p className="text-gray-600 mt-3 text-sm md:text-base">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;

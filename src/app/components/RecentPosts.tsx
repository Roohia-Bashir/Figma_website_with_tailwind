import React from 'react';

interface Post {
  title: string;
  date: string;
  category: string;
  description: string;
}

const RecentPosts = () => {
  const posts: Post[] = [
    {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      category: 'Design, Pattern',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      category: 'Design, Pattern',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <div className="bg-[#f4e2e2] py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black">Recent Posts</h2>
          <a
            href="#"
            className="text-[#f98b8b] font-bold text-lg md:text-xl hover:underline mt-4 md:mt-0"
          >
            View all
          </a>
        </div>

        {/* Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md bg-white flex flex-col justify-between h-auto"
            >
              <h3 className="text-xl md:text-2xl font-bold text-black">{post.title}</h3>
              <p className="text-sm md:text-lg font-semibold text-gray-500 mt-2">
                {post.date} | {post.category}
              </p>
              <p className="text-gray-600 mt-4">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;

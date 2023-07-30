import React from 'react';
// NewsAggregator
const ContentList = () => {
  const news = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      image: 'https://source.unsplash.com/random/800x600',
    },
    {
      id: 2,
      title: 'Consectetur adipiscing elit',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
      image: 'https://source.unsplash.com/random/800x600',
    },
    {
      id: 3,
      title: 'Nemo enim ipsam voluptatem quia voluptas',
      description:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      image: 'https://source.unsplash.com/random/800x600',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-3xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">News Aggregator</h1>
        {news.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-6 mb-4 shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
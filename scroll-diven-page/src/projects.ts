export type Project = {
  id: number
  slug: string
  title: string
  description: string
  images: string[]
}

export const projects = [
  {
    id: 0,
    slug: 'digital-ocean',
    title: 'Digital Ocean',
    description: 'A virtual diving experience through digital oceans.',
    images: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    ],
  },
  {
    id: 1,
    slug: 'mountain-escape',
    title: 'Mountain Escape',
    description: 'Explore breathtaking mountain landscapes in a digital world.',
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      'https://images.unsplash.com/photo-1444065381814-865dc9da92c0',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    ],
  },
  {
    id: 2,
    slug: 'urban-lights',
    title: 'Urban Lights',
    description:
      'Experience the vibrant energy of a city illuminated at night.',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    ],
  },
]

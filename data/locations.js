export const locations = [
  { slug: 'virar-east', name: 'Virar East', city: 'Virar' },
  { slug: 'virar-west', name: 'Virar West', city: 'Virar' },
  { slug: 'nalasopara-east', name: 'Nalasopara East', city: 'Nalasopara' },
  { slug: 'nalasopara-west', name: 'Nalasopara West', city: 'Nalasopara' },
  { slug: 'vasai-east', name: 'Vasai East', city: 'Vasai' },
  { slug: 'vasai-west', name: 'Vasai West', city: 'Vasai' },
  { slug: 'naigaon-east', name: 'Naigaon East', city: 'Naigaon' },
  { slug: 'naigaon-west', name: 'Naigaon West', city: 'Naigaon' },
];

export const getLocationBySlug = (slug) => {
  return locations.find((l) => l.slug === slug);
};

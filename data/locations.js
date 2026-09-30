export const locations = [
  // Vasai-Virar Belt
  { slug: 'virar-east', name: 'Virar East', city: 'Virar', subLocations: ['Global City', 'Phoolpada', 'Manvelpada', 'Narangi Bypass', 'Kopri', 'Bhatpada', 'Totale Kadam Nagar', 'Sainath Nagar', 'Kargil Nagar', 'Chandansar', 'Jivdani Road', 'Sahakar Nagar', 'RJ Nagar', 'Rustomjee Global City', 'Veer Savarkar Marg', 'Ekvira Nagar', 'Papadkhind'] },
  { slug: 'virar-west', name: 'Virar West', city: 'Virar', subLocations: ['Agashi', 'Arnala', 'Bolinj', 'Chikhal Dongre', 'Y.K. Nagar', 'Viva College Road', 'Tirupati Nagar', 'Yashwant Nagar', 'Nilemore', 'Vartak Ward', 'M-B Estate', 'Padmavati Nagar', 'Old Viva College Road', 'Gokul Township', 'Dongarpada', 'Agarwal Nagari', 'Narangi'] },
  { slug: 'nalasopara-east', name: 'Nalasopara East', city: 'Nalasopara', subLocations: ['Tulinj', 'Achole', 'Moregaon', 'Oswal Nagari', 'Pelhar', 'Dhaniv Baug', 'Alkapuri', 'Nilegaon', 'Vijay Nagar'] },
  { slug: 'nalasopara-west', name: 'Nalasopara West', city: 'Nalasopara', subLocations: ['Sopara', 'Samel Pada', 'Nilemore', 'Chakradhar Nagar', 'Sriprastha', 'Fun Fiesta', 'Chheda Nagar'] },
  { slug: 'vasai-east', name: 'Vasai East', city: 'Vasai', subLocations: ['Evershine City', 'Gokhivare', 'Waliv', 'Sativali', 'Pelhar', 'Fatherwadi', 'Navghar', 'Valiv'] },
  { slug: 'vasai-west', name: 'Vasai West', city: 'Vasai', subLocations: ['Bhabola', 'Manickpur', 'Papdy', 'Stella', 'Vasai Fort', 'Sun City', 'Kaular Khurd', 'Diwanman', 'Barampur', 'Vasai Gaon'] },
  { slug: 'naigaon-east', name: 'Naigaon East', city: 'Naigaon', subLocations: ['Juchandra', 'Bapane', 'Rashmi Star City', 'Citizen Colony', 'Pereira Nagar'] },
  { slug: 'naigaon-west', name: 'Naigaon West', city: 'Naigaon', subLocations: ['Umela', 'Umele', 'Kaman', 'Mariam Nagar', 'Bhuigaon'] },
  
  // Towards Palghar District
  { slug: 'vaitarna', name: 'Vaitarna', city: 'Palghar', subLocations: ['Vaitarna Station', 'Wadhiv', 'Vadhane'] },
  { slug: 'saphale', name: 'Saphale', city: 'Palghar', subLocations: ['Safale East', 'Safale West', 'Makane', 'Edwan', 'Kore'] },
  { slug: 'kelve-road', name: 'Kelve Road', city: 'Palghar', subLocations: ['Kelve Beach', 'Kelve Village', 'Kelve East'] },
  { slug: 'palghar', name: 'Palghar', city: 'Palghar', subLocations: ['Palghar East', 'Palghar West', 'Boisar Road', 'Mahim', 'Shirgaon', 'Satpati', 'Alyali'] },
  { slug: 'boisar', name: 'Boisar', city: 'Palghar', subLocations: ['Boisar East', 'Boisar West', 'Tarapur MIDC', 'Kumbhavali', 'Kurgaon'] },
  { slug: 'dahanu', name: 'Dahanu', city: 'Palghar', subLocations: ['Dahanu Road', 'Dahanu Beach', 'Bordi', 'Vangaon'] },

  // Towards Mumbai (Mira-Bhayandar)
  { slug: 'bhayandar-east', name: 'Bhayandar East', city: 'Mira-Bhayandar', subLocations: ['Indralok', 'Navghar Road', 'BP Road', 'Cabin Road', 'Golden Nest'] },
  { slug: 'bhayandar-west', name: 'Bhayandar West', city: 'Mira-Bhayandar', subLocations: ['Maxus Mall', 'Gorai Road', 'Uttan', 'Morva', 'Fatima Nagar'] },
  { slug: 'mira-road', name: 'Mira Road', city: 'Mira-Bhayandar', subLocations: ['Shanti Nagar', 'Naya Nagar', 'Beverly Park', 'Kanakiya', 'Srishti Complex', 'Hatkesh', 'Ramdev Park'] },
];

export const getLocationBySlug = (slug) => {
  return locations.find((l) => l.slug === slug);
};

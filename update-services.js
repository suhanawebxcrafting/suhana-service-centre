const fs = require('fs');
let code = fs.readFileSync('data/services.js', 'utf8');

const images = {
  1: { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/512px-Aadhaar_Logo.svg.png', dummyImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=400' },
  4: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_India.svg/512px-Flag_of_India.svg.png', dummyImage: 'https://images.unsplash.com/photo-1544866092-194121a9953d?auto=format&fit=crop&q=80&w=400' },
  7: { image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Emblem_of_India.svg/512px-Emblem_of_India.svg.png', dummyImage: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&q=80&w=400' },
  73: { image: 'https://cdn-icons-png.flaticon.com/512/3229/3229986.png', dummyImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400' },
  75: { image: 'https://cdn-icons-png.flaticon.com/512/2862/2862661.png', dummyImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400' },
  76: { image: 'https://cdn-icons-png.flaticon.com/512/3034/3034873.png', dummyImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400' },
  77: { image: 'https://cdn-icons-png.flaticon.com/512/3503/3503023.png', dummyImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400' },
  79: { image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', dummyImage: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=400' },
  80: { image: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png', dummyImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400' },
  81: { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/FSSAI_logo.svg/512px-FSSAI_logo.svg.png', dummyImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400' },
  82: { image: 'https://cdn-icons-png.flaticon.com/512/2942/2942555.png', dummyImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400' },
  83: { image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/MSME_logo.png/512px-MSME_logo.png', dummyImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400' }
};

for (const [id, imgs] of Object.entries(images)) {
  const regex = new RegExp(`(id:\\s*${id},\\s*slug.*?[\\r\\n]+.*?name:.*?[\\r\\n]+.*?description:)`, 's');
  code = code.replace(regex, (match) => {
    return match.replace(/description:/, `image: '${imgs.image}',\n    dummyImage: '${imgs.dummyImage}',\n    description:`);
  });
}

fs.writeFileSync('data/services.js', code);
console.log('Success');

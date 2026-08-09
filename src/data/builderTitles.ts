export const builderTitles: Record<string, string[]> = {
  'AI / ML': ['SHIPPER', 'MODEL TUNER', 'DATA BUILDER', 'FULL SEND', 'NIGHT OWL', 'IDEA MACHINE'],
  Cybersecurity: ['BUG HUNTER', 'SYSTEM TINKERER', 'NIGHT OWL', 'SHIPPER', 'FULL SEND', 'SEC BUILDER'],
  Frontend: ['PIXEL PUSHER', 'UI CRAFTSMAN', 'SHIPPER', 'NIGHT OWL', 'BUILD MODE', 'PRODUCT BUILDER'],
  Backend: ['CODE CRAFTSMAN', 'SYSTEM BUILDER', 'SHIPPER', 'NIGHT OWL', 'FULL SEND', 'API BUILDER'],
  'Full Stack': ['STACK BUILDER', 'SHIPPER', 'NIGHT OWL', 'FULL SEND', 'BUILD MODE', 'PRODUCT BUILDER'],
  Web3: ['BLOCK BUILDER', 'SHIPPER', 'NIGHT OWL', 'FULL SEND', 'IDEA MACHINE', 'CHAIN CRAFTSMAN'],
  Mobile: ['APP BUILDER', 'SHIPPER', 'NIGHT OWL', 'PIXEL PUSHER', 'BUILD MODE', 'PRODUCT BUILDER'],
  DevOps: ['SYSTEM TINKERER', 'SHIPPER', 'NIGHT OWL', 'FULL SEND', 'INFRA BUILDER', 'DEPLOY CRAFTSMAN'],
  Data: ['DATA CRAFTSMAN', 'SHIPPER', 'NIGHT OWL', 'FULL SEND', 'IDEA MACHINE', 'SYSTEM TINKERER'],
  Designer: ['PIXEL PUSHER', 'PRODUCT BUILDER', 'SHIPPER', 'NIGHT OWL', 'IDEA MACHINE', 'DESIGN CRAFTSMAN'],
  Founder: ['IDEA MACHINE', 'PRODUCT BUILDER', 'SHIPPER', 'NIGHT OWL', 'FULL SEND', 'VISION CRAFTSMAN'],
  Other: ['THE SHIPPER', 'BUILD MODE', 'NIGHT OWL', 'FULL SEND', 'IDEA MACHINE', 'CODE CRAFTSMAN'],
};

export const stackOptions = [
  'AI / ML',
  'Full Stack',
  'Frontend',
  'Backend',
  'Cybersecurity',
  'Web3',
  'Mobile',
  'DevOps',
  'Data',
  'Designer',
  'Founder',
  'Other',
];

export function getRandomTitle(stack: string): string {
  const titles = builderTitles[stack] || builderTitles['Other'];
  return titles[Math.floor(Math.random() * titles.length)];
}

export function generateBuilderId(): string {
  const num = Math.floor(Math.random() * 999) + 1;
  return `HH26-${String(num).padStart(3, '0')}`;
}

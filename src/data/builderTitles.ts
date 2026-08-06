export const builderTitles: Record<string, string[]> = {
  'AI / ML': [
    'Model Whisperer',
    'Neural Nomad',
    'Prompt Pirate',
    'Gradient Surfer',
    'Tensor Tamer',
    'Data Alchemist',
  ],
  Cybersecurity: [
    'Packet Guardian',
    'Firewall Phantom',
    'Zero-Day Hunter',
    'Cipher Sentinel',
    'Exploit Explorer',
    'Bug Bounty Baron',
  ],
  Frontend: [
    'Pixel Architect',
    'DOM Wizard',
    'Interface Alchemist',
    'Component Conjurer',
    'CSS Sorcerer',
    'Layout Ninja',
  ],
  Backend: [
    'API Alchemist',
    'Server Sorcerer',
    'Database Tamer',
    'Route Ranger',
    'Query Commander',
    'Endpoint Engineer',
  ],
  'Full Stack': [
    'Stack Sorcerer',
    'End-to-End Explorer',
    'Ship-It Engineer',
    'Full-Stack Phantom',
    'Code Omnivore',
    'Deploy-or-Die Dev',
  ],
  Web3: [
    'Chain Builder',
    'Block Alchemist',
    'Decentralized Dreamer',
    'Smart Contract Sage',
    'Token Trailblazer',
    'Consensus Crafter',
  ],
  Mobile: [
    'App Architect',
    'Swipe Sorcerer',
    'Native Navigator',
    'Screen Sculptor',
    'Touch Tamer',
    'Widget Wizard',
  ],
  DevOps: [
    'Cloud Commander',
    'Pipeline Pilot',
    'Deploy Wizard',
    'Container Captain',
    'Infra Alchemist',
    'Uptime Guardian',
  ],
  Data: [
    'Data Navigator',
    'Insight Hunter',
    'Query Wizard',
    'Pipeline Prophet',
    'Schema Sculptor',
    'Analytics Ace',
  ],
  Designer: [
    'Pixel Poet',
    'Experience Architect',
    'Design Alchemist',
    'Color Conjurer',
    'Grid Guardian',
    'Visual Virtuoso',
  ],
  Founder: [
    'Chaos Coordinator',
    'Vision Builder',
    '0→1 Operator',
    'Pitch Perfect',
    'Growth Hacker',
    'Ramen Profitable',
  ],
  Other: [
    'Builder in the Wild',
    'Goa Hacker',
    'Internet Builder',
    'Code Nomad',
    'Digital Drifter',
    'Hackathon Hero',
  ],
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

import { CocktailItem } from './types';

export const COCKTAILS_DATA: CocktailItem[] = [
  // House Originals
  {
    id: 'obsidian-rose',
    name: 'Obsidian Rose',
    price: 17,
    ingredients: [
      'Aged Rye Whiskey',
      'Black Rose Extraction',
      'Activated Charcoal',
      'Smoked Cedar Bitters'
    ],
    description: 'Served over a single hand-carved sphere of obsidian-hued ice. Mist-heavy rose aromatics.',
    category: 'original',
    glassType: 'tumbler'
  },
  {
    id: 'gilded-negroni',
    name: 'Gilded Negroni',
    price: 18,
    ingredients: [
      'Saffron-Infused Gin',
      'White Negroni Blend',
      'Gold Leaf Suspension',
      'Meyer Lemon Zest'
    ],
    description: 'A luminous reinterpretation. Botanical brilliance suspended in a shimmer of real gold.',
    category: 'original',
    glassType: 'chalice'
  },
  {
    id: 'the-monolith',
    name: 'The Monolith',
    price: 20,
    ingredients: [
      'Single Malt Islay',
      'Spiced Fig Reduction',
      'Palo Santo Smoke',
      'Walnut Essence'
    ],
    description: 'Ancient, architectural, and imposing. Decanted at the table with aromatic woodsmoke.',
    category: 'original',
    glassType: 'flute'
  },
  {
    id: 'amethyst-elixir',
    name: 'Amethyst Elixir',
    price: 19,
    ingredients: [
      'Butterfly Pea Gin',
      'White Cranberry Nectar',
      'Elderflower Liqueur',
      'Dehydrated Lavender'
    ],
    description: 'A color-changing floral masterwork that transitions from deep violet to soft pink upon interactive citrus contact.',
    category: 'original',
    glassType: 'coupe'
  },
  {
    id: 'aether-nectar',
    name: 'Aether Nectar',
    price: 18,
    ingredients: [
      'Jasmine Pearl Gin',
      'Distilled White Pear',
      'Aloe Vera Mist',
      'Crystallized Saline'
    ],
    description: 'Delicate and ethereal. A clean, saline-forward botanical capture served in a custom frosted glass vessel.',
    category: 'original',
    glassType: 'coupe'
  },
  {
    id: 'elysian-sour',
    name: 'Elysian Sour',
    price: 19,
    ingredients: [
      'Chamomile-Infused Scotch',
      'Elderflower Liqueur',
      'Cold-Pressed Lemon Oil',
      'Organic Honey-Herb Foam'
    ],
    description: 'A soothing yet bright creation with a velvety head of aromatic foam and a deep herbal backbone.',
    category: 'original',
    glassType: 'sour-glass'
  },

  // Timeless Classics
  {
    id: 'vesper-martini',
    name: 'Vesper Martini',
    price: 14,
    ingredients: [
      'LONDON DRY GIN',
      'VODKA',
      'KINA LILLET'
    ],
    description: 'Created for 007 in 1953. Our version uses a custom cinchona infusion to replicate the lost profile of 1950s Kina Lillet.',
    category: 'classic'
  },
  {
    id: 'aviators-zenith',
    name: 'Aviator\'s Zenith',
    price: 15,
    ingredients: [
      'GIN',
      'MARASCHINO LIQUEUR',
      'CREME DE VIOLETTE',
      'CLARIFIED LEMON'
    ],
    description: 'An elegant interpretation of the classic Aviation, perfectly clarified for absolute celestial violet transparency.',
    category: 'classic'
  },
  {
    id: 'paper-plane',
    name: 'Paper Plane',
    price: 14,
    ingredients: [
      'BOURBON',
      'AMARO NONINO',
      'APEROL',
      'FRESH LEMON'
    ],
    description: 'A modern classic of perfect thirds. Equal parts bitter, sweet, herbal, and sharp sour citrus.',
    category: 'classic'
  },
  {
    id: 'sazerac',
    name: 'Sazerac',
    price: 13,
    ingredients: [
      'RYE',
      'COGNAC',
      'PEYCHAUD\'S',
      'ABSINTHE'
    ],
    description: 'The definitive New Orleans cocktail. Served in an absinthe-rinsed glass, temperature-controlled to exactly 4°C.',
    category: 'classic'
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    price: 15,
    ingredients: [
      'SMALL BATCH BOURBON',
      'CANE',
      'BITTERS'
    ],
    description: 'A study in simplicity. Prepared with ultra-rare hand-sourced bourbon and aromatic oils from Amalfi oranges.',
    category: 'classic'
  },
  {
    id: 'the-last-word',
    name: 'The Last Word',
    price: 13,
    ingredients: [
      'GIN',
      'GREEN CHARTREUSE',
      'MARASCHINO',
      'LIME'
    ],
    description: 'A Prohibition-era miracle of balance. Herbaceous, sharp, and unapologetically bold in its botanical complexity.',
    category: 'classic'
  },

  // Temperance
  {
    id: 'midnight-bloom',
    name: 'Midnight Bloom',
    price: 11,
    ingredients: [
      'Zero-Proof Seedlip Grove',
      'Hibiscus Syrup',
      'Verjus',
      'Sparkling Water'
    ],
    description: 'Deep floral notes with a sharp, wine-like acidity. A refined alternative for the focused mind.',
    category: 'temperance'
  },
  {
    id: 'the-alibi',
    name: 'The Alibi',
    price: 11,
    ingredients: [
      'Smoked Pineapple Cordial',
      'Cardamom',
      'Lime',
      'Ginger Beer'
    ],
    description: 'Fiery ginger heat tempered by tropical smoke. Complexity that rivals any high-proof spirit.',
    category: 'temperance'
  },
  {
    id: 'crimson-velvet',
    name: 'Crimson Velvet',
    price: 12,
    ingredients: [
      'Zero-Proof Seedlip Spice 94',
      'Cold-Brewed Hibiscus Shrub',
      'White Verjus',
      'Damask Rose Essence'
    ],
    description: 'A deep crimson botanic masterpiece with bright acidity, high tannin structure, and a lingering floral mist.',
    category: 'temperance'
  }
];

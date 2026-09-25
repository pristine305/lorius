// Notes and descriptions are taken from Lorius_Fragrance_Profiles_All_Notes.pdf.
// 20 ml photography does not exist yet, so imageFor() falls back to the 50 ml bottle.
import { asset } from '../config'

export const PRODUCTS = [
  {
    "id": "oud",
    "name": "Oud",
    "cat": "unisex",
    "who": "Unisex",
    "fam": "Oriental floral",
    "fams": [
      "Oriental",
      "Floral"
    ],
    "order": 1,
    "short": "Saffron and rose over lily of the valley and violet, settling into warm amber and musk.",
    "long": "A rich oriental floral that opens with saffron, rose and an aldehydic sparkle. The heart brings together lily of the valley, tea rose and violet, before it settles into a warm, sensual dry-down of amber and musk.",
    "notes": {
      "top": "Saffron, Rose, Aldehydic",
      "heart": "Lily of the Valley, Tea Rose, Violet",
      "base": "Amber, Musk"
    }
  },
  {
    "id": "lush",
    "name": "Lush",
    "cat": "unisex",
    "who": "Unisex",
    "fam": "Floral, fruity, musky",
    "fams": [
      "Floral",
      "Fruity",
      "Gourmand"
    ],
    "order": 2,
    "short": "Freesia, pistachio and cardamom over a creamy heart of orange blossom and coconut.",
    "long": "A vibrant floral, fruity and musky fragrance. Freesia, pistachio, cardamom and davana open it. Orange blossom, orris, coconut and cinnamon bark make a creamy, spiced heart, and dry amber, oud, leather and gourmand notes give the base depth and warmth.",
    "notes": {
      "top": "Freesia, Pistachio, Cardamom, Davana",
      "heart": "Orange Blossom, Orris, Coconut, Cinnamon Bark",
      "base": "Amber Dry, Oud, Leather, Gourmand"
    }
  },
  {
    "id": "noir",
    "name": "Noir",
    "cat": "him",
    "who": "For him",
    "fam": "Woody, spicy, ambery",
    "fams": [
      "Woody"
    ],
    "order": 3,
    "video": "noir",
    "short": "Pepper, basil and bergamot over sage, with a warm base of amber, incense and sandalwood.",
    "long": "A bold woody, spicy and ambery fragrance. It opens with pepper, basil and bergamot. Geranium and sage form an aromatic heart, followed by a deep, warm base of amber, incense and sandalwood.",
    "notes": {
      "top": "Pepper, Basil, Bergamot",
      "heart": "Geranium, Sage",
      "base": "Amber, Incense, Sandalwood"
    }
  },
  {
    "id": "aqua",
    "name": "Aqua",
    "cat": "him",
    "who": "For him",
    "fam": "Fresh, fruity, aromatic",
    "fams": [
      "Fresh",
      "Fruity"
    ],
    "order": 4,
    "video": "hero",
    "short": "Frozen apple, Italian lemon and star anise, drying down to musk, moss and driftwood.",
    "long": "A fresh, fruity and aromatic fragrance. Frozen apple, Italian lemon, Sicilian bergamot and star anise open it. Plum, orange blossom and cardamom add depth in the heart, while musk, amber, moss and driftwood leave a clean, textured dry-down.",
    "notes": {
      "top": "Frozen Apple, Italian Lemon, Sicilian Bergamot, Star Anise",
      "heart": "Plum, Orange Blossom, Cardamom",
      "base": "Musk, Amber, Moss, Driftwood"
    }
  },
  {
    "id": "aura",
    "name": "Aura",
    "cat": "her",
    "who": "For her",
    "fam": "Oriental, floral, gourmand",
    "fams": [
      "Oriental",
      "Floral",
      "Gourmand"
    ],
    "order": 5,
    "short": "Saffron and rose, settling into moss, dry amber and musk.",
    "long": "A sensual oriental, floral and gourmand fragrance built around saffron and rose. It settles into a distinctive dry-down of moss, dry amber, malton and musk that is warm, elegant and enveloping.",
    "notes": {
      "top": "Saffron",
      "heart": "Rose",
      "base": "Moss, Amber Dry, Malton, Musk"
    }
  },
  {
    "id": "sensual",
    "name": "Sensual",
    "cat": "her",
    "who": "For her",
    "fam": "Fruity, floral, chypre",
    "fams": [
      "Fruity",
      "Floral"
    ],
    "order": 6,
    "short": "Freesia and pomegranate over rose, jasmine and peach, with a warm, woody base.",
    "long": "A refined fruity floral chypre. Freesia, spices, armoise and pomegranate open it. Rose, jasmine and white florals meet peach and red berries in the heart, and gourmand and woody facets with dry amber and olibanum leave a warm, sophisticated trail.",
    "notes": {
      "top": "Freesia, Spices, Armoise, Pomegranate",
      "heart": "Rose, Jasmine, White Florals, Peach, Red Fruits",
      "base": "Gourmand, Woody, Amber Dry, Olibanum"
    }
  }
]

export const findProduct = (id) => PRODUCTS.find((p) => p.id === id)
export const imageFor = (p, size) => asset(`products/${p.id}_${size === '100' ? '100' : '50'}.webp`)

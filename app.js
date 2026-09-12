const raceCatalog = [
  { id: 'human', name: 'Human', ability: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 0 }, size: 'Medium', traits: ['Adaptable', 'Skilled'] },
  { id: 'dwarf', name: 'Dwarf', ability: { str: 0, dex: -2, con: 2, int: 0, wis: 0, cha: -2 }, size: 'Medium', traits: ['Darkvision', 'Stonecunning', 'Stability'] },
  { id: 'elf', name: 'Elf', ability: { str: -2, dex: 2, con: -2, int: 2, wis: 0, cha: 0 }, size: 'Medium', traits: ['Keen Senses', 'Immunity to Sleep', 'Low-Light Vision'] },
  { id: 'half-elf', name: 'Half-Elf', ability: { str: 0, dex: 2, con: 0, int: 0, wis: 0, cha: 2 }, size: 'Medium', traits: ['Diplomatic', 'Versatile', 'Dual Heritage'] },
  { id: 'gnome', name: 'Gnome', ability: { str: -2, dex: 0, con: 2, int: 2, wis: 0, cha: -2 }, size: 'Small', traits: ['Illusion Resistance', 'Low-Light Vision', 'Gnome Magic'] },
  { id: 'half-orc', name: 'Half-Orc', ability: { str: 2, dex: 0, con: 2, int: -2, wis: 0, cha: -2 }, size: 'Medium', traits: ['Darkvision', 'Ferocity', 'Intimidating'] },
  { id: 'halfling', name: 'Halfling', ability: { str: -2, dex: 2, con: 0, int: 0, wis: 0, cha: 2 }, size: 'Small', traits: ['Lucky', 'Brave', 'Good Aim'] },
  { id: 'aasimar', name: 'Aasimar', ability: { str: 0, dex: 0, con: 0, int: 0, wis: 0, cha: 2 }, size: 'Medium', traits: ['Darkvision', 'Celestial Resistance', 'Radiant Descent'] },
  { id: 'tiefling', name: 'Tiefling', ability: { str: 0, dex: 0, con: 0, int: 2, wis: 0, cha: 2 }, size: 'Medium', traits: ['Darkvision', 'Fiendish Resistance', 'Infernal Heritage'] }
];

raceCatalog.push(
  { id: 'kender', name: 'Kender', ability: { str: -2, dex: 2, con: 0, int: 0, wis: 0, cha: 2 }, size: 'Small', setting: 'dragonlance', traits: ['Fearless', 'Kender Pockets', 'Taunt', 'Curiosity'] },
  { id: 'draconian', name: 'Draconian', ability: { str: 2, dex: 0, con: 2, int: 0, wis: 0, cha: -2 }, size: 'Medium', setting: 'dragonlance', traits: ['Darkvision', 'Draconic Heritage', 'Death Throes'] },
  { id: 'qualinesti-elf', name: 'Qualinesti Elf', ability: { str: -2, dex: 2, con: -2, int: 2, wis: 0, cha: 0 }, size: 'Medium', setting: 'dragonlance', traits: ['Keen Senses', 'Low-Light Vision', 'Elven Resistance'] },
  { id: 'silvanesti-elf', name: 'Silvanesti Elf', ability: { str: -2, dex: 2, con: -2, int: 2, wis: 0, cha: 0 }, size: 'Medium', setting: 'dragonlance', traits: ['Keen Senses', 'Low-Light Vision', 'Elven Resistance'] },
  { id: 'minotaur', name: 'Minotaur', ability: { str: 4, dex: 0, con: 2, int: -2, wis: 0, cha: -2 }, size: 'Medium', setting: 'dragonlance', traits: ['Darkvision', 'Natural Armor', 'Powerful Build'] },
  { id: 'irda', name: 'Irda', ability: { str: 0, dex: 0, con: 0, int: 2, wis: 2, cha: 2 }, size: 'Medium', setting: 'dragonlance', traits: ['Ancient Heritage', 'Change Shape', 'Low-Light Vision'] }
);

const classCatalog = [
  { id: 'barbarian', name: 'Barbarian', hitDie: 12, bab: 'fast', saves: { fort: 'good', ref: 'poor', will: 'poor' }, skillPoints: 4, skills: ['Climb', 'Handle Animal', 'Intimidate', 'Listen', 'Ride', 'Survival', 'Swim'], features: ['Rage', 'Fast movement', 'Uncanny dodge'] },
  { id: 'bard', name: 'Bard', hitDie: 6, bab: 'medium', saves: { fort: 'poor', ref: 'good', will: 'good' }, skillPoints: 6, skills: ['Appraise', 'Balance', 'Bluff', 'Climb', 'Diplomacy', 'Disable Device', 'Gather Information', 'Hide', 'Jump', 'Listen', 'Move Silently', 'Perform', 'Sense Motive', 'Sleight of Hand', 'Speak Language', 'Spellcraft', 'Use Magic Device'], features: ['Bardic music', 'Spells', 'Versatile performance'], spellcaster: true },
  { id: 'cleric', name: 'Cleric', hitDie: 8, bab: 'medium', saves: { fort: 'good', ref: 'poor', will: 'good' }, skillPoints: 2, skills: ['Concentration', 'Diplomacy', 'Heal', 'Knowledge (religion)', 'Spellcraft'], features: ['Divine spellcasting', 'Turn undead', 'Domain powers'], spellcaster: true },
  { id: 'druid', name: 'Druid', hitDie: 8, bab: 'medium', saves: { fort: 'good', ref: 'poor', will: 'good' }, skillPoints: 4, skills: ['Concentration', 'Diplomacy', 'Heal', 'Knowledge (nature)', 'Listen', 'Spellcraft', 'Survival', 'Swim'], features: ['Nature magic', 'Wild shape', 'Animal companion'], spellcaster: true },
  { id: 'fighter', name: 'Fighter', hitDie: 10, bab: 'fast', saves: { fort: 'good', ref: 'poor', will: 'poor' }, skillPoints: 2, skills: ['Climb', 'Craft', 'Handle Animal', 'Intimidate', 'Ride', 'Swim'], features: ['Armor and weapon proficiencies', 'Combat feats', 'Bonus feats'] },
  { id: 'monk', name: 'Monk', hitDie: 8, bab: 'medium', saves: { fort: 'good', ref: 'good', will: 'good' }, skillPoints: 4, skills: ['Balance', 'Climb', 'Concentration', 'Diplomacy', 'Escape Artist', 'Hide', 'Jump', 'Listen', 'Move Silently', 'Sense Motive', 'Spot', 'Swim'], features: ['Unarmed strike', 'Flurry of blows', 'Evasion'] },
  { id: 'paladin', name: 'Paladin', hitDie: 10, bab: 'fast', saves: { fort: 'good', ref: 'poor', will: 'poor' }, skillPoints: 2, skills: ['Concentration', 'Diplomacy', 'Gather Information', 'Handle Animal', 'Heal', 'Knowledge (nobility)', 'Ride', 'Sense Motive'], features: ['Divine grace', 'Smite evil', 'Lay on hands'], spellcaster: true },
  { id: 'ranger', name: 'Ranger', hitDie: 8, bab: 'fast', saves: { fort: 'good', ref: 'good', will: 'poor' }, skillPoints: 6, skills: ['Climb', 'Handle Animal', 'Hide', 'Jump', 'Knowledge (nature)', 'Move Silently', 'Ride', 'Survival', 'Swim'], features: ['Favored enemy', 'Track', 'Combat style'] },
  { id: 'rogue', name: 'Rogue', hitDie: 6, bab: 'medium', saves: { fort: 'poor', ref: 'good', will: 'poor' }, skillPoints: 8, skills: ['Appraise', 'Balance', 'Bluff', 'Disable Device', 'Escape Artist', 'Hide', 'Move Silently', 'Open Lock', 'Search', 'Sleight of Hand', 'Use Magic Device'], features: ['Sneak attack', 'Evasion', 'Trapfinding'] },
  { id: 'sorcerer', name: 'Sorcerer', hitDie: 4, bab: 'slow', saves: { fort: 'poor', ref: 'poor', will: 'good' }, skillPoints: 2, skills: ['Bluff', 'Concentration', 'Craft', 'Knowledge (arcana)', 'Spellcraft'], features: ['Sorcery', 'Bloodline powers', 'Spells'], spellcaster: true },
  { id: 'wizard', name: 'Wizard', hitDie: 4, bab: 'slow', saves: { fort: 'poor', ref: 'poor', will: 'good' }, skillPoints: 2, skills: ['Concentration', 'Craft', 'Knowledge (arcana)', 'Spellcraft'], features: ['Spellcasting', 'Spellbook', 'Arcane school powers'], spellcaster: true }
];

const dragonlancePrestigeClasses = {
  'knight-of-the-crown': { name: 'Knight of the Crown', prereqs: { bab: 4, feats: ['Mounted Combat'], class: ['fighter', 'paladin', 'ranger'] }, features: ['Crown oath', 'Knightly challenge', 'Mounted combat training'] },
  'knight-of-the-sword': { name: 'Knight of the Sword', prereqs: { bab: 5, feats: ['Weapon Focus'], class: ['fighter', 'paladin'] }, features: ['Sword oath', 'Fearless courage', 'Smite evil improvement'] },
  'knight-of-the-rose': { name: 'Knight of the Rose', prereqs: { bab: 6, feats: ['Leadership'], class: ['fighter', 'paladin'] }, features: ['Rose oath', 'Inspire courage', 'Command authority'] },
  'knight-of-neraka': { name: 'Knight of Neraka', prereqs: { bab: 5, feats: ['Knight of Takhisis'], class: ['fighter', 'paladin', 'ranger'] }, features: ['Dark allegiance', 'Aura of command', 'Terror tactics'] },
  'renegade-hunter': { name: 'Renegade Hunter', prereqs: { feats: ['Spell Focus'] }, features: ['Magic detection', 'Counterspell training', 'Hunter of renegades'] },
  'white-robed-wizard': { name: 'White-Robed Wizard', prereqs: { int: 13, feats: ['Mages of High Sorcery'], class: ['wizard', 'sorcerer'] }, features: ['White robe oath', 'Protective magic', 'Lunar spell power'] },
  'red-robed-wizard': { name: 'Red-Robed Wizard', prereqs: { int: 13, feats: ['Mages of High Sorcery'], class: ['wizard', 'sorcerer'] }, features: ['Red robe oath', 'Neutral magic', 'Lunar spell power'] },
  'black-robed-wizard': { name: 'Black-Robed Wizard', prereqs: { int: 13, feats: ['Mages of High Sorcery'], class: ['wizard', 'sorcerer'] }, features: ['Black robe oath', 'Aggressive magic', 'Lunar spell power'] },
  'master-of-the-way': { name: 'Master of the Way', prereqs: { wis: 13, feats: ['Improved Unarmed Strike'], class: ['monk'] }, features: ['Monastic discipline', 'Ki strike', 'Way mastery'] }
};

const spellSlotsTable = {
  1: [2],
  2: [3],
  3: [4, 2],
  4: [5, 3],
  5: [6, 4, 2],
  6: [7, 5, 3],
  7: [8, 6, 4, 2],
  8: [9, 7, 5, 3],
  9: [10, 8, 6, 4, 2],
  10: [10, 8, 7, 5, 3],
  11: [11, 9, 7, 6, 4],
  12: [11, 9, 8, 6, 5],
  13: [12, 10, 8, 7, 5],
  14: [12, 10, 9, 7, 6],
  15: [13, 11, 9, 8, 6],
  16: [13, 11, 10, 8, 7],
  17: [14, 12, 10, 9, 7],
  18: [14, 12, 11, 9, 8],
  19: [15, 13, 11, 10, 8],
  20: [15, 13, 12, 10, 9]
};

const skillsCatalog = [
  'Appraise', 'Balance', 'Bluff', 'Climb', 'Concentration', 'Craft', 'Diplomacy', 'Disable Device', 'Escape Artist', 'Forgery', 'Handle Animal', 'Heal', 'Hide', 'Intimidate', 'Jump', 'Knowledge (arcana)', 'Knowledge (nature)', 'Knowledge (religion)', 'Listen', 'Move Silently', 'Open Lock', 'Perform', 'Ride', 'Search', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Spot', 'Survival', 'Swim', 'Use Magic Device'
];

const featCatalog = [
  { name: 'Power Attack', prereqs: { str: 13 } },
  { name: 'Cleave', prereqs: { str: 13, bab: 1, feats: ['Power Attack'] } },
  { name: 'Great Cleave', prereqs: { str: 13, bab: 4, feats: ['Power Attack', 'Cleave'] } },
  { name: 'Improved Initiative', prereqs: {} },
  { name: 'Weapon Focus', prereqs: { bab: 1 } },
  { name: 'Weapon Specialization', prereqs: { str: 13, bab: 4, feats: ['Weapon Focus'], class: ['fighter'] } },
  { name: 'Lightning Reflexes', prereqs: {} },
  { name: 'Iron Will', prereqs: {} },
  { name: 'Great Fortitude', prereqs: {} },
  { name: 'Diehard', prereqs: { feats: ['Endurance'] } },
  { name: 'Endurance', prereqs: {} },
  { name: 'Skill Focus', prereqs: {} },
  { name: 'Toughness', prereqs: {} },
  { name: 'Point Blank Shot', prereqs: { dex: 13 } },
  { name: 'Precise Shot', prereqs: { feats: ['Point Blank Shot'] } },
  { name: 'Rapid Shot', prereqs: { dex: 13, feats: ['Point Blank Shot'] } },
  { name: 'Quick Draw', prereqs: { bab: 1 } },
  { name: 'Dodge', prereqs: { dex: 13 } },
  { name: 'Mobility', prereqs: { dex: 13, feats: ['Dodge'] } },
  { name: 'Spring Attack', prereqs: { dex: 13, bab: 4, feats: ['Dodge', 'Mobility'] } },
  { name: 'Two-Weapon Fighting', prereqs: { dex: 15 } },
  { name: 'Improved Two-Weapon Fighting', prereqs: { dex: 17, bab: 6, feats: ['Two-Weapon Fighting'] } },
  { name: 'Improved Critical', prereqs: { bab: 8 } },
  { name: 'Combat Expertise', prereqs: { int: 13 } },
  { name: 'Improved Trip', prereqs: { int: 13, feats: ['Combat Expertise'] } },
  { name: 'Combat Casting', prereqs: {} },
  { name: 'Spell Focus', prereqs: {} },
  { name: 'Spell Penetration', prereqs: {} }
];

featCatalog.push(
  { name: 'Mages of High Sorcery', prereqs: { int: 13, class: ['wizard', 'sorcerer'] }, setting: 'dragonlance' },
  { name: 'Knight of Solamnia', prereqs: { bab: 1, class: ['fighter', 'paladin', 'ranger'] }, setting: 'dragonlance' },
  { name: 'Knight of Takhisis', prereqs: { bab: 1, class: ['fighter', 'paladin', 'ranger'] }, setting: 'dragonlance' },
  { name: 'Born of Three Worlds', prereqs: {}, setting: 'dragonlance' },
  { name: 'Draconic Aura', prereqs: { cha: 11 }, setting: 'dragonlance' },
  { name: 'Dragon Hunter', prereqs: { bab: 1 }, setting: 'dragonlance' },
  { name: 'Dragonwrought', prereqs: {}, setting: 'dragonlance' },
  { name: 'Kender Affinity', prereqs: { cha: 13 }, setting: 'dragonlance' },
  { name: 'Mounted Combat', prereqs: { dex: 13 }, setting: 'dragonlance' },
  { name: 'Leadership', prereqs: { cha: 13, level: 6 }, setting: 'dragonlance' },
  { name: 'Improved Unarmed Strike', prereqs: {}, setting: 'dragonlance' }
);

const weaponCatalog = [
  'Longsword', 'Shortsword', 'Greatsword', 'Rapier', 'Scimitar', 'Dagger', 'Quarterstaff',
  'Battleaxe', 'Greataxe', 'Warhammer', 'Mace', 'Spear', 'Shortbow', 'Longbow',
  'Light Crossbow', 'Heavy Crossbow', 'Sling'
];
const armorCatalog = [
  'Padded Armor', 'Leather Armor', 'Studded Leather', 'Hide Armor', 'Chain Shirt',
  'Scale Mail', 'Chainmail', 'Breastplate', 'Splint Mail', 'Half-Plate', 'Full Plate'
];
const itemCatalog = [
  'Backpack', 'Bedroll', 'Flint and Steel', 'Rations (5 days)', 'Waterskin', 'Rope (50 ft.)',
  'Grappling Hook', 'Crowbar', 'Lantern', 'Oil (1 pint)', 'Torches (5)', 'Tent',
  'Healing Potion', 'Antitoxin', 'Healer\'s Kit', 'Thieves\' Tools', 'Holy Symbol',
  'Spell Component Pouch', 'Musical Instrument', 'Amulet of Natural Armor +1', 'Traveler\'s Cloak'
];
const spellCatalog = [
  { name: 'Acid Splash', level: 0 },
  { name: 'Mage Hand', level: 0 },
  { name: 'Prestidigitation', level: 0 },
  { name: 'Read Magic', level: 0 },
  { name: 'Ray of Frost', level: 0 },
  { name: 'Burning Hands', level: 1 },
  { name: 'Charm Person', level: 1 },
  { name: 'Cure Light Wounds', level: 1 },
  { name: 'Detect Magic', level: 1 },
  { name: 'Magic Missile', level: 1 },
  { name: 'Shield', level: 1 },
  { name: 'Sleep', level: 1 },
  { name: 'Bless', level: 1 },
  { name: 'Bull Strength', level: 2 },
  { name: 'Darkness', level: 2 },
  { name: 'Flaming Sphere', level: 2 },
  { name: 'Invisibility', level: 2 },
  { name: 'Resist Energy', level: 2 },
  { name: 'Dispel Magic', level: 3 },
  { name: 'Fireball', level: 3 },
  { name: 'Fly', level: 3 },
  { name: 'Lightning Bolt', level: 3 },
  { name: 'Water Breathing', level: 3 },
  { name: 'Air Walk', level: 4 },
  { name: 'Greater Invisibility', level: 4 },
  { name: 'Dimension Door', level: 4 },
  { name: 'Polymorph', level: 4 }
];

spellCatalog.push(
  { name: 'Detect Poison', level: 0 }, { name: 'Flare', level: 0 }, { name: 'Light', level: 0 },
  { name: 'Open/Close', level: 0 }, { name: 'Resistance', level: 0 }, { name: 'Summon Instrument', level: 0 },
  { name: 'Alarm', level: 1 }, { name: 'Cause Fear', level: 1 }, { name: 'Comprehend Languages', level: 1 },
  { name: 'Endure Elements', level: 1 }, { name: 'Entangle', level: 1 }, { name: 'Grease', level: 1 },
  { name: 'Identify', level: 1 }, { name: 'Obscure Object', level: 1 }, { name: 'Sanctuary', level: 1 },
  { name: 'Summon Monster I', level: 1 }, { name: 'True Strike', level: 1 }, { name: 'Command', level: 1 },
  { name: 'Aid', level: 2 }, { name: 'Bear\'s Endurance', level: 2 }, { name: 'Blindness/Deafness', level: 2 },
  { name: 'Barkskin', level: 2 }, { name: 'Glitterdust', level: 2 }, { name: 'Hold Person', level: 2 },
  { name: 'Knock', level: 2 }, { name: 'Lesser Restoration', level: 2 }, { name: 'Mirror Image', level: 2 },
  { name: 'Silence', level: 2 }, { name: 'Web', level: 2 }, { name: 'Animate Dead', level: 3 },
  { name: 'Bestow Curse', level: 3 }, { name: 'Call Lightning', level: 3 }, { name: 'Clairaudience/Clairvoyance', level: 3 },
  { name: 'Haste', level: 3 }, { name: 'Heroism', level: 3 }, { name: 'Magic Circle against Evil', level: 3 },
  { name: 'Remove Disease', level: 3 }, { name: 'Sleet Storm', level: 3 }, { name: 'Confusion', level: 4 },
  { name: 'Control Water', level: 4 }, { name: 'Cure Critical Wounds', level: 4 }, { name: 'Death Ward', level: 4 },
  { name: 'Divination', level: 4 }, { name: 'Freedom of Movement', level: 4 }, { name: 'Ice Storm', level: 4 },
  { name: 'Neutralize Poison', level: 4 }, { name: 'Stoneskin', level: 4 }, { name: 'Wall of Fire', level: 4 },
  { name: 'Cone of Cold', level: 5 }, { name: 'Dispel Magic, Greater', level: 5 }, { name: 'Flame Strike', level: 5 },
  { name: 'Hold Monster', level: 5 }, { name: 'Insect Plague', level: 5 }, { name: 'Raise Dead', level: 5 },
  { name: 'Righteous Might', level: 5 }, { name: 'Teleport', level: 5 }, { name: 'Wall of Stone', level: 5 },
  { name: 'Chain Lightning', level: 6 }, { name: 'Disintegrate', level: 6 }, { name: 'Find the Path', level: 6 },
  { name: 'Heal', level: 6 }, { name: 'Heroes\' Feast', level: 6 }, { name: 'Mass Suggestion', level: 6 },
  { name: 'True Seeing', level: 6 }, { name: 'Banishment', level: 7 }, { name: 'Control Weather', level: 7 },
  { name: 'Delayed Blast Fireball', level: 7 }, { name: 'Ethereal Jaunt', level: 7 }, { name: 'Regenerate', level: 7 },
  { name: 'Resurrection', level: 7 }, { name: 'Greater Dispel Magic', level: 8 }, { name: 'Mass Heal', level: 8 },
  { name: 'Power Word Stun', level: 8 }, { name: 'Sunburst', level: 8 }, { name: 'Teleportation Circle', level: 9 },
  { name: 'Time Stop', level: 9 }, { name: 'Wish', level: 9 }
);

const classFeatureProgression = {
  barbarian: { 1: 'Rage 1/day, fast movement', 2: 'Uncanny dodge', 3: 'Trap sense', 5: 'Improved uncanny dodge', 7: 'Damage reduction', 11: 'Greater rage', 20: 'Mighty rage' },
  bard: { 1: 'Bardic music, countersong, fascinate', 2: 'Evasion', 3: 'Inspire competence', 6: 'Suggestion', 8: 'Inspire courage +2', 12: 'Song of freedom', 14: 'Inspire courage +3', 20: 'Frightening tune' },
  cleric: { 1: 'Turn or rebuke undead, domains', 3: 'Remove disease', 5: 'Turn undead improvement', 10: 'Divine spellcasting', 15: 'Greater domain power', 20: 'Epic divine mastery' },
  druid: { 1: 'Animal companion, nature sense, wild empathy', 2: 'Woodland stride', 4: 'Resist nature\'s lure', 5: 'Wild shape', 8: 'Venom immunity', 13: 'A thousand faces', 17: 'Timeless body' },
  fighter: { 1: 'Bonus feat', 2: 'Bonus feat', 4: 'Bonus feat', 6: 'Bonus feat', 8: 'Bonus feat', 10: 'Bonus feat', 12: 'Bonus feat', 14: 'Bonus feat', 16: 'Bonus feat', 18: 'Bonus feat', 20: 'Bonus feat' },
  monk: { 1: 'Flurry of blows, unarmed strike, stunning fist', 2: 'Evasion', 3: 'Still mind', 4: 'Ki strike (magic)', 5: 'Purity of body', 7: 'Wholeness of body', 9: 'Improved evasion', 13: 'Diamond soul', 20: 'Perfect self' },
  paladin: { 1: 'Detect evil, smite evil', 2: 'Divine grace, lay on hands', 3: 'Aura of courage, divine health', 4: 'Turn undead, special mount', 5: 'Smite evil 2/day', 11: 'Aura of justice', 20: 'Holy champion' },
  ranger: { 1: 'Track, wild empathy', 2: 'Combat style', 3: 'Endurance', 4: 'Animal companion', 5: 'Woodland stride', 8: 'Swift tracker', 11: 'Camouflage', 17: 'Hide in plain sight' },
  rogue: { 1: 'Sneak attack +1d6, trapfinding', 2: 'Evasion', 3: 'Trap sense', 5: 'Uncanny dodge', 8: 'Improved uncanny dodge', 10: 'Special ability', 20: 'Special ability' },
  sorcerer: { 1: 'Summon familiar', 2: 'Bonus feat', 6: 'Bloodline feature', 10: 'Bloodline feature', 15: 'Bloodline feature', 20: 'Bloodline feature' },
  wizard: { 1: 'Scribe scroll, summon familiar', 3: 'Bonus feat', 5: 'Bonus feat', 10: 'Bonus feat', 15: 'Bonus feat', 20: 'Bonus feat' }
};

const languageCatalog = ['Abyssal', 'Ancient Irda', 'Aquan', 'Auran', 'Celestial', 'Common', 'Draconic', 'Dwarven', 'Elven', 'Giant', 'Gnome', 'Goblin', 'Halfling', 'Infernal', 'Kender', 'Minotaur', 'Orc', 'Sylvan', 'Terran', 'Undercommon'];
const racialLanguages = {
  human: ['Common'], dwarf: ['Common', 'Dwarven'], elf: ['Common', 'Elven'], 'half-elf': ['Common', 'Elven'],
  gnome: ['Common', 'Gnome'], 'half-orc': ['Common', 'Orc'], halfling: ['Common', 'Halfling'],
  aasimar: ['Common', 'Celestial'], tiefling: ['Common', 'Infernal'], kender: ['Common', 'Kender'],
  draconian: ['Common', 'Draconic'], 'qualinesti-elf': ['Common', 'Elven'], 'silvanesti-elf': ['Common', 'Elven'],
  minotaur: ['Common', 'Minotaur'], irda: ['Common', 'Ancient Irda']
};
const deityCatalog = {
  core: ['None selected', 'Pelor', 'Corellon Larethian', 'Moradin', 'Garl Glittergold', 'Kord', 'Wee Jas', 'Boccob', 'Nerull', 'Hextor', 'Erythnul', 'Obad-Hai', 'Fharlanghn', 'Heironeous', 'Gruumsh', 'Yondalla'],
  dragonlance: ['None selected', 'Paladine', 'Mishakal', 'Kiri-Jolith', 'Habbakuk', 'Branchala', 'Solinari', 'Gilean', 'Chislev', 'Reorx', 'Zivilyn', 'Chemosh', 'Takhisis', 'Sargonnas', 'Hiddukel', 'Morgion', 'Nuitari', 'Lunitari']
};

const abilityNames = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
const defaultScores = { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 };
const STORAGE_KEY = 'dnd35-character-builder-v1';

const state = {
  charName: 'Unnamed Hero',
  playerName: 'Player',
  raceId: 'human',
  classId: 'fighter',
  level: 1,
  alignment: 'Lawful Good',
  gender: 'unspecified',
  abilityMode: 'rolled',
  pointBuyBudget: 32,
  abilities: { ...defaultScores },
  rolledScores: null,
  abilityAssignments: {},
  selectedSkills: [],
  selectedFeats: [],
  selectedSpells: [],
  skillRanks: {},
  weapon: 'Longsword',
  armor: 'Chain Shirt',
  item: 'Backpack',
  selectedLanguages: [],
  deity: 'None selected'
  ,weaponSize: 'auto'
  ,setting: 'core'
  ,krynnPath: 'none'
  ,moon: 'none'
  ,prestigeClass: 'none'
};

const els = {
  charName: document.querySelector('#charName'),
  playerName: document.querySelector('#playerName'),
  raceSelect: document.querySelector('#raceSelect'),
  classSelect: document.querySelector('#classSelect'),
  levelInput: document.querySelector('#levelInput'),
  alignmentSelect: document.querySelector('#alignmentSelect'),
  deitySelect: document.querySelector('#deitySelect'),
  genderSelect: document.querySelector('#genderSelect'),
  abilityModeSelect: document.querySelector('#abilityModeSelect'),
  pointBuyBudgetSelect: document.querySelector('#pointBuyBudgetSelect'),
  pointBuyBudgetLabel: document.querySelector('#pointBuyBudgetLabel'),
  abilityMethodInfo: document.querySelector('#abilityMethodInfo'),
  settingSelect: document.querySelector('#settingSelect'),
  krynnPathSelect: document.querySelector('#krynnPathSelect'),
  moonSelect: document.querySelector('#moonSelect'),
  prestigeClassSelect: document.querySelector('#prestigeClassSelect'),
  abilities: document.querySelector('#abilities'),
  languagesList: document.querySelector('#languagesList'),
  skillsHeading: document.querySelector('#skillsHeading'),
  skillsList: document.querySelector('#skillsList'),
  featsHeading: document.querySelector('#featsHeading'),
  featsList: document.querySelector('#featsList'),
  spellList: document.querySelector('#spellList'),
  weaponSelect: document.querySelector('#weaponSelect'),
  armorSelect: document.querySelector('#armorSelect'),
  weaponSizeSelect: document.querySelector('#weaponSizeSelect'),
  weaponRulesTrigger: document.querySelector('#weaponRulesTrigger'),
  armorRulesTrigger: document.querySelector('#armorRulesTrigger'),
  itemSelect: document.querySelector('#itemSelect'),
  summaryCard: document.querySelector('#summaryCard'),
  playerSheet: document.querySelector('#playerSheet'),
  spellSheet: document.querySelector('#spellSheet'),
  itemSheet: document.querySelector('#itemSheet'),
  sketchSheet: document.querySelector('#sketchSheet'),
  rollStatsBtn: document.querySelector('#rollStatsBtn'),
  generatePlayerBtn: document.querySelector('#generatePlayerBtn'),
  generateSpellBtn: document.querySelector('#generateSpellBtn'),
  generateItemBtn: document.querySelector('#generateItemBtn'),
  generateSketchBtn: document.querySelector('#generateSketchBtn'),
  saveBtn: document.querySelector('#saveBtn'),
  newBtn: document.querySelector('#newBtn'),
  exportBtn: document.querySelector('#exportBtn'),
  loadBtn: document.querySelector('#loadBtn'),
  importCharacterInput: document.querySelector('#importCharacterInput'),
  printBtn: document.querySelector('#printBtn')
  ,rulesPopover: document.querySelector('#rulesPopover')
};

function modifier(value) {
  return Math.floor((value - 10) / 2);
}

function withRaceBonus(ability, race) {
  const raceBonus = race?.ability?.[ability] || 0;
  return state.abilities[ability] + raceBonus;
}

function getRace() {
  return raceCatalog.find((candidate) => candidate.id === state.raceId) || raceCatalog[0];
}

function getClass() {
  return classCatalog.find((candidate) => candidate.id === state.classId) || classCatalog[0];
}

function getPrestigeClass() {
  return dragonlancePrestigeClasses[state.prestigeClass] || null;
}

function getAbilityModifiers() {
  const race = getRace();
  return abilityNames.reduce((result, ability) => {
    result[ability] = modifier(withRaceBonus(ability, race));
    return result;
  }, {});
}

function getSkillAbility(skillName) {
  const map = {
    Appraise: 'int', Balance: 'dex', Bluff: 'cha', Climb: 'str', Concentration: 'con', Craft: 'int', Diplomacy: 'cha',
    'Disable Device': 'dex', 'Escape Artist': 'dex', Forgery: 'int', 'Handle Animal': 'cha', Heal: 'wis', Hide: 'dex',
    Intimidate: 'cha', Jump: 'str', 'Knowledge (arcana)': 'int', 'Knowledge (nature)': 'int', 'Knowledge (religion)': 'int',
    Listen: 'wis', 'Move Silently': 'dex', 'Open Lock': 'dex', Perform: 'cha', Ride: 'dex', Search: 'int', 'Sense Motive': 'wis',
    'Sleight of Hand': 'dex', Spellcraft: 'int', Spot: 'wis', Survival: 'wis', Swim: 'str', 'Use Magic Device': 'cha'
  };

  return map[skillName] || 'int';
}

function getSkillTotal(skillName) {
  const ability = getSkillAbility(skillName);
  const mod = getAbilityModifiers()[ability] || 0;
  const rank = Number(state.skillRanks[skillName] || 0);
  const isClassSkill = getClass().skills.includes(skillName);
  return mod + rank + (isClassSkill ? 3 : 0);
}

function getLevelBab() {
  const selectedClass = getClass();
  if (selectedClass.bab === 'fast') return state.level;
  if (selectedClass.bab === 'medium') return Math.floor(state.level * 0.75);
  return Math.floor(state.level * 0.5);
}

function getLevelSave(baseName) {
  const mods = getAbilityModifiers();
  const selectedClass = getClass();
  const levelFactor = Math.floor((state.level + 1) / 2);

  if (baseName === 'fort') {
    return 2 + levelFactor + mods.con + (selectedClass.saves.fort === 'good' ? 2 : 0);
  }
  if (baseName === 'ref') {
    return 2 + levelFactor + mods.dex + (selectedClass.saves.ref === 'good' ? 2 : 0);
  }

  return 2 + levelFactor + mods.wis + (selectedClass.saves.will === 'good' ? 2 : 0);
}

function getSpellSlotSummary() {
  const selectedClass = getClass();
  if (!selectedClass.spellcaster) {
    return 'No spellcasting progression';
  }

  const table = spellSlotsTable[Math.min(state.level, 20)] || [2];
  const summary = table.map((slots, index) => `${index + 1}st: ${slots} slots`).join(' | ');
  return `Caster level ${state.level} — ${summary}`;
}

function getFeatSlots() {
  const selectedClass = getClass();
  const generalSlots = 1 + Math.floor(state.level / 3);
  const bonusSlots = selectedClass.id === 'fighter' ? Math.ceil(state.level / 2) : 0;
  const humanBonus = state.raceId === 'human' ? 1 : 0;
  return generalSlots + bonusSlots + humanBonus;
}

function getSkillPointsPerLevel() {
  const basePoints = getClass().skillPoints + getAbilityModifiers().int + (state.raceId === 'human' ? 1 : 0);
  return Math.max(1, basePoints);
}

function getAvailableSkillPoints() {
  return getSkillPointsPerLevel() * (state.level === 1 ? 4 : state.level);
}

function getSpentSkillPoints() {
  return Object.entries(state.skillRanks).reduce((total, [skill, value]) => {
    const ranks = Number(value || 0);
    return total + (getClass().skills.includes(skill) ? ranks : ranks * 2);
  }, 0);
}

function getMaxSpellLevel() {
  const selectedClass = getClass();
  if (!selectedClass.spellcaster) return -1;
  if (selectedClass.id === 'paladin' || selectedClass.id === 'ranger') {
    return state.level < 4 ? 0 : Math.min(4, Math.ceil((state.level - 2) / 4));
  }
  return Math.min(9, Math.ceil(state.level / 2));
}

function getClassFeatures() {
  const selectedClass = getClass();
  const progression = classFeatureProgression[selectedClass.id] || {};
  const unlocked = Object.entries(progression)
    .filter(([level]) => Number(level) <= state.level)
    .map(([level, feature]) => `Level ${level}: ${feature}`);
  return [...selectedClass.features, ...unlocked];
}

function getRuleWarnings() {
  const warnings = [];
  const mods = getAbilityModifiers();
  const selectedClass = getClass();
  const totalRanks = getSpentSkillPoints();
  const maxRanks = getAvailableSkillPoints();
  const selectedFeatNames = state.selectedFeats || [];
  const maxSkillRank = state.level + 3;

  if (totalRanks > maxRanks) {
    warnings.push(`Skill rank total exceeds available ranks for this level (${totalRanks} > ${maxRanks}).`);
  }

  if (state.abilityMode === 'point-buy' && getPointBuyTotal() > state.pointBuyBudget) {
    warnings.push(`Ability scores exceed the selected point-buy budget (${getPointBuyTotal()} > ${state.pointBuyBudget}).`);
  }

  if (selectedFeatNames.length > getFeatSlots()) {
    warnings.push(`Selected feats exceed available feat slots (${selectedFeatNames.length} > ${getFeatSlots()}).`);
  }

  Object.entries(state.skillRanks).forEach(([skill, rank]) => {
    if (Number(rank) > maxSkillRank) {
      warnings.push(`${skill} cannot exceed ${maxSkillRank} ranks at level ${state.level}.`);
    }
  });

  const featPrereqs = featCatalog.filter((feat) => selectedFeatNames.includes(feat.name));
  featPrereqs.forEach((feat) => {
    const prereqs = feat.prereqs || {};
    abilityNames.forEach((ability) => {
      if (prereqs[ability] && mods[ability] < prereqs[ability]) {
        warnings.push(`${feat.name} requires ${ability.toUpperCase()} ${prereqs[ability]}.`);
      }
    });
    if (prereqs.bab && getLevelBab() < prereqs.bab) {
      warnings.push(`${feat.name} requires base attack bonus +${prereqs.bab}.`);
    }
    if (prereqs.level && state.level < prereqs.level) {
      warnings.push(`${feat.name} requires character level ${prereqs.level}.`);
    }
    if (prereqs.class && !prereqs.class.includes(state.classId)) {
      warnings.push(`${feat.name} requires one of these classes: ${prereqs.class.join(', ')}.`);
    }
    (prereqs.feats || []).forEach((requiredFeat) => {
      if (!selectedFeatNames.includes(requiredFeat)) {
        warnings.push(`${feat.name} requires the ${requiredFeat} feat.`);
      }
    });
    if (feat.name === 'Diehard' && !selectedFeatNames.includes('Endurance')) {
      warnings.push('Diehard requires Endurance.');
    }
    if (feat.setting === 'dragonlance' && state.setting !== 'dragonlance') {
      warnings.push(`${feat.name} is a Dragonlance setting feat.`);
    }
  });

  if (state.setting === 'core' && getRace().setting === 'dragonlance') {
    warnings.push(`${getRace().name} is a Dragonlance setting race; switch the ruleset to Dragonlance 3.5.`);
  }
  if (state.setting === 'dragonlance' && state.krynnPath === 'high-sorcery' && !['wizard', 'sorcerer'].includes(state.classId)) {
    warnings.push('The High Sorcery path requires a wizard or sorcerer base class.');
  }
  if (state.krynnPath === 'knight-solamnia' && state.alignment.includes('Evil')) {
    warnings.push('Knights of Solamnia should not have an evil alignment.');
  }
  if (state.krynnPath === 'knight-takhisis' && !state.alignment.includes('Evil')) {
    warnings.push('Knights of Takhisis are expected to have an evil alignment.');
  }
  const prestigeClass = getPrestigeClass();
  if (prestigeClass) {
    const prereqs = prestigeClass.prereqs || {};
    if (prereqs.bab && getLevelBab() < prereqs.bab) warnings.push(`${prestigeClass.name} requires base attack bonus +${prereqs.bab}.`);
    if (prereqs.level && state.level < prereqs.level) warnings.push(`${prestigeClass.name} requires character level ${prereqs.level}.`);
    if (prereqs.class && !prereqs.class.includes(state.classId)) warnings.push(`${prestigeClass.name} requires one of: ${prereqs.class.join(', ')}.`);
    (prereqs.feats || []).forEach((requiredFeat) => {
      if (!selectedFeatNames.includes(requiredFeat)) warnings.push(`${prestigeClass.name} requires the ${requiredFeat} feat.`);
    });
  }

  if (state.selectedSpells.length > 0 && !selectedClass.spellcaster) {
    warnings.push('Spell selections are present, but the chosen class does not have spellcasting progression.');
  }

  if (Math.abs(getWeaponSizeDelta()) > 1) {
    warnings.push('The selected weapon is more than one size category away from the character and may be unusable under standard 3.5 rules.');
  }

  const maxSpellLevel = getMaxSpellLevel();
  state.selectedSpells.forEach((spellName) => {
    const spell = spellCatalog.find((entry) => entry.name === spellName);
    if (spell && spell.level > maxSpellLevel) {
      warnings.push(`${spell.name} is above this character's available spell level.`);
    }
  });

  return warnings;
}

function deriver() {
  const race = getRace();
  const selectedClass = getClass();
  const mods = getAbilityModifiers();
  const hp = selectedClass.hitDie + mods.con;
  const bab = getLevelBab();
  const initiative = mods.dex;
  const fort = getLevelSave('fort');
  const ref = getLevelSave('ref');
  const will = getLevelSave('will');
  const ac = 10 + mods.dex + getArmorBonus();

  return { race, selectedClass, mods, hp, bab, initiative, fort, ref, will, ac };
}

function getEffectiveWeaponSize() {
  if (state.weaponSize !== 'auto') return state.weaponSize;
  return getRace().size.toLowerCase();
}

function getWeaponSizeDelta() {
  const sizeIndex = { small: 0, medium: 1, large: 2 };
  const wielderSize = getRace().size.toLowerCase();
  return (sizeIndex[getEffectiveWeaponSize()] ?? 1) - (sizeIndex[wielderSize] ?? 1);
}

function adjustWeaponDamageDie(die, sizeDelta) {
  const progression = ['1d2', '1d3', '1d4', '1d6', '1d8', '1d10', '1d12', '2d6', '2d8', '3d6'];
  const position = progression.indexOf(die);
  if (position < 0) return die;
  return progression[Math.max(0, Math.min(progression.length - 1, position + sizeDelta))];
}

function getArmorBonus() {
  const armorBonuses = {
    'Padded Armor': 1, 'Leather Armor': 2, 'Studded Leather': 3, 'Hide Armor': 3,
    'Chain Shirt': 4, 'Scale Mail': 4, Chainmail: 5, Breastplate: 5,
    'Splint Mail': 6, 'Half-Plate': 7, 'Full Plate': 8
  };
  return armorBonuses[state.armor] || 0;
}

function getWeaponStats() {
  const { mods } = deriver();
  const weapon = state.weapon || 'Longsword';
  const attackBonus = mods.str + getLevelBab();

  const damage = (die, bonus) => `${die}${bonus >= 0 ? '+' : ''}${bonus}`;
  const finesseAttack = mods.dex + getLevelBab();
  const baseDamageDice = {
    Longsword: '1d8', Shortsword: '1d6', Greatsword: '2d6', Rapier: '1d6', Scimitar: '1d6',
    Dagger: '1d4', Quarterstaff: '1d6', Battleaxe: '1d8', Greataxe: '1d12', Warhammer: '1d8',
    Mace: '1d8', Spear: '1d8', Shortbow: '1d6', Longbow: '1d8', 'Light Crossbow': '1d8',
    'Heavy Crossbow': '1d10', Sling: '1d4'
  };
  const map = {
    Longsword: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '19-20/x2', range: '5 ft.' },
    Shortsword: { attack: finesseAttack, damage: damage('1d6', mods.str), crit: '19-20/x2', range: '5 ft.' },
    Greatsword: { attack: attackBonus, damage: damage('2d6', mods.str), crit: '19-20/x2', range: '5 ft.' },
    Rapier: { attack: finesseAttack, damage: damage('1d6', mods.str), crit: '18-20/x2', range: '5 ft.' },
    Scimitar: { attack: finesseAttack, damage: damage('1d6', mods.str), crit: '18-20/x2', range: '5 ft.' },
    Dagger: { attack: finesseAttack, damage: damage('1d4', mods.str), crit: '19-20/x2', range: '10 ft.' },
    Quarterstaff: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    Battleaxe: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×3', range: '5 ft.' },
    Greataxe: { attack: attackBonus, damage: damage('1d12', mods.str), crit: '×3', range: '5 ft.' },
    Warhammer: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×3', range: '5 ft.' },
    Mace: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×2', range: '5 ft.' },
    Spear: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×3', range: '20 ft.' },
    Shortbow: { attack: finesseAttack, damage: '1d6', crit: '×3', range: '60 ft.' },
    Longbow: { attack: finesseAttack, damage: '1d8', crit: '×3', range: '100 ft.' },
    'Light Crossbow': { attack: finesseAttack, damage: '1d8', crit: '19-20/x2', range: '80 ft.' },
    'Heavy Crossbow': { attack: finesseAttack, damage: '1d10', crit: '19-20/x2', range: '120 ft.' },
    Sling: { attack: finesseAttack, damage: damage('1d4', mods.str), crit: '×2', range: '50 ft.' }
  };

  const profile = map[weapon] || map.Longsword;
  const sizeDelta = getWeaponSizeDelta();
  const adjustedDie = adjustWeaponDamageDie(baseDamageDice[weapon] || '1d8', sizeDelta);
  const rangedWithoutStrength = ['Shortbow', 'Longbow', 'Light Crossbow', 'Heavy Crossbow'].includes(weapon);
  const damageBonus = rangedWithoutStrength ? '' : `${mods.str >= 0 ? '+' : ''}${mods.str}`;
  const baseDamage = `${baseDamageDice[weapon] || '1d8'}${damageBonus}`;
  const sizeAdjustment = sizeDelta === 0 ? 'No size adjustment' : `${sizeDelta > 0 ? '+' : ''}${sizeDelta} damage die step${Math.abs(sizeDelta) === 1 ? '' : 's'}`;
  return {
    ...profile,
    attack: profile.attack - (sizeDelta * 2),
    damage: `${adjustedDie}${damageBonus}`,
    baseDamage,
    sizeAdjustment,
    weaponSize: getEffectiveWeaponSize(),
    sizeDelta
  };
}

function getSpeed() {
  const { race } = deriver();
  if (race.id === 'dwarf' || race.id === 'halfling') return 20;
  return 30;
}

function getCarryCapacity() {
  return Math.max(10, state.abilities.str * 15);
}

function rollAbilityScore() {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b);
  rolls.shift();
  return rolls.reduce((sum, roll) => sum + roll, 0);
}

const pointBuyCosts = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 6, 15: 8 };

function getPointBuyCost(score) {
  return pointBuyCosts[Math.max(8, Math.min(15, Number(score) || 8))] ?? 0;
}

function getPointBuyTotal() {
  return abilityNames.reduce((total, ability) => total + getPointBuyCost(state.abilities[ability]), 0);
}

function setAbilityMode(mode) {
  state.abilityMode = mode;
  if (mode === 'point-buy') {
    state.rolledScores = null;
    state.abilities = abilityNames.reduce((scores, ability) => {
      scores[ability] = Math.max(8, Math.min(15, Number(state.abilities[ability]) || 8));
      return scores;
    }, {});
  }
  renderAbilities();
  renderAllSheets();
  saveCharacterToStorage();
}

function populateSelects() {
  const raceOptions = raceCatalog.map((race) => `<option value="${race.id}">${race.name}</option>`).join('');
  const classOptions = classCatalog.map((cls) => `<option value="${cls.id}">${cls.name}</option>`).join('');
  const weaponOptions = weaponCatalog.map((weapon) => `<option value="${weapon}">${weapon}</option>`).join('');
  const armorOptions = armorCatalog.map((armor) => `<option value="${armor}">${armor}</option>`).join('');
  const itemOptions = itemCatalog.map((item) => `<option value="${item}">${item}</option>`).join('');

  els.raceSelect.innerHTML = raceOptions;
  els.classSelect.innerHTML = classOptions;
  els.weaponSelect.innerHTML = weaponOptions;
  els.armorSelect.innerHTML = armorOptions;
  els.itemSelect.innerHTML = itemOptions;

  els.raceSelect.value = state.raceId;
  els.classSelect.value = state.classId;
  els.weaponSelect.value = state.weapon;
  els.armorSelect.value = state.armor;
  els.weaponSizeSelect.value = state.weaponSize;
  els.itemSelect.value = state.item;
  updateEquipmentRuleTriggers();
  populateDeitySelect();
}

function getAutomaticLanguages() {
  return [...new Set(racialLanguages[state.raceId] || ['Common'])];
}

function getLanguageBonusSlots() {
  const intelligenceBonus = Math.max(0, getAbilityModifiers().int);
  const humanBonus = state.raceId === 'human' ? 1 : 0;
  return intelligenceBonus + humanBonus;
}

function getAllLanguages() {
  return [...new Set([...getAutomaticLanguages(), ...(state.selectedLanguages || []).filter(Boolean)])];
}

function renderLanguages() {
  const automatic = getAutomaticLanguages();
  const bonusSlots = getLanguageBonusSlots();
  const chosen = [...new Set((state.selectedLanguages || []).filter((language) => !automatic.includes(language)))].slice(0, bonusSlots);
  state.selectedLanguages = chosen;
  const automaticMarkup = `<p class="automatic-languages"><strong>Automatic:</strong> ${automatic.join(', ')}</p>`;
  const dropdowns = Array.from({ length: bonusSlots }, (_, index) => {
    const current = chosen[index] || '';
    const taken = new Set([...automatic, ...chosen.filter((language, choiceIndex) => choiceIndex !== index)]);
    const options = languageCatalog
      .filter((language) => !taken.has(language) || language === current)
      .map((language) => `<option value="${language}" ${language === current ? 'selected' : ''}>${language}</option>`)
      .join('');
    return `<label>Bonus language ${index + 1}<select data-language-slot="${index}"><option value="">Choose a language</option>${options}</select></label>`;
  }).join('');
  els.languagesList.innerHTML = `${automaticMarkup}${dropdowns || '<label>Bonus language<select disabled><option>No bonus language slots available</option></select></label><p class="language-empty">Increase Intelligence or choose a race with a bonus language slot to select another language.</p>'}`;
}

function populateDeitySelect() {
  const options = deityCatalog[state.setting] || deityCatalog.core;
  if (!options.includes(state.deity)) state.deity = options[0];
  els.deitySelect.innerHTML = options.map((deity) => `<option value="${deity}" ${deity === state.deity ? 'selected' : ''}>${deity}</option>`).join('');
}

function renderAbilities() {
  const selectedRace = getRace();
  const hasRolledScores = state.abilityMode === 'rolled' && Array.isArray(state.rolledScores) && state.rolledScores.length === abilityNames.length;
  const pointBuyMode = state.abilityMode === 'point-buy';
  els.pointBuyBudgetLabel.hidden = !pointBuyMode;
  els.pointBuyBudgetSelect.value = String(state.pointBuyBudget);
  els.rollStatsBtn.hidden = state.abilityMode !== 'rolled';
  const pointBuyRemaining = state.pointBuyBudget - getPointBuyTotal();
  els.abilityMethodInfo.textContent = pointBuyMode
    ? pointBuyRemaining >= 0
      ? `Point buy: ${getPointBuyTotal()}/${state.pointBuyBudget} points spent. ${pointBuyRemaining} points remaining. Scores cost 0 points at 8 through 8 points at 15.`
      : `Point buy: ${getPointBuyTotal()}/${state.pointBuyBudget} points spent. ${Math.abs(pointBuyRemaining)} points over budget. Lower a score to continue.`
    : state.abilityMode === 'manual'
      ? 'Enter scores from your own dice rolls or another approved method.'
      : hasRolledScores
        ? 'Choose which rolled score belongs in each ability.'
        : 'Roll six scores, then assign each result to an ability.';
  const abilityMarkup = abilityNames.map((ability) => {
    const score = state.abilities[ability];
    const mod = modifier(withRaceBonus(ability, selectedRace));
    const assignment = state.abilityAssignments[ability] ?? abilityNames.indexOf(ability);
    const scoreControl = hasRolledScores
      ? `<select data-score-slot="${ability}" aria-label="Score assigned to ${ability.toUpperCase()}">${state.rolledScores.map((rolledScore, index) => `<option value="${index}" ${index === assignment ? 'selected' : ''}>${rolledScore}</option>`).join('')}</select>`
      : `<input data-ability="${ability}" type="number" min="${pointBuyMode ? 8 : 1}" max="${pointBuyMode ? 15 : 40}" value="${score}" />`;
    const pointCost = pointBuyMode ? `<small class="point-buy-cost">Cost ${getPointBuyCost(score)}</small>` : '';
    return `
      <div class="ability-box">
        <strong>${ability.toUpperCase()}</strong>
        ${scoreControl}
        ${pointCost}
        <span>Mod ${mod >= 0 ? '+' : ''}${mod}</span>
      </div>
    `;
  }).join('');

  els.abilities.innerHTML = abilityMarkup;
}

function renderSkills() {
  const classSkills = getClass().skills || [];
  const totalRanks = getSpentSkillPoints();
  const maxRanks = getAvailableSkillPoints();
  els.skillsHeading.textContent = `Skills [${totalRanks}/${maxRanks} ranks]`;
  const skillNodes = skillsCatalog.map((skill) => {
    const isChecked = state.selectedSkills.includes(skill) || classSkills.includes(skill);
    const checked = isChecked ? 'checked' : '';
    const rankCost = classSkills.includes(skill) ? 1 : 2;
    const disabled = !isChecked && totalRanks + rankCost > maxRanks ? 'disabled' : '';
    const rank = state.skillRanks[skill] ?? (classSkills.includes(skill) ? 1 : 0);
    const total = getSkillTotal(skill);
    return `
      <div class="skill-row">
        <label class="check-item">
          <input type="checkbox" data-skill="${skill}" ${checked} ${disabled} />
          <span class="rules-trigger" data-rule-type="skill" data-rule-name="${skill}" title="Click for rules summary">${skill}${classSkills.includes(skill) ? ' • class' : ''}</span>
        </label>
        <div class="skill-rank-box">
          <input type="number" data-rank-skill="${skill}" min="0" max="20" value="${rank}" />
          <small>tot ${total >= 0 ? '+' : ''}${total}</small>
        </div>
      </div>
    `;
  }).join('');

  els.skillsList.innerHTML = skillNodes;
}

function renderFeats() {
  const selectedCount = state.selectedFeats.length;
  const maxFeats = getFeatSlots();
  els.featsHeading.textContent = `Feats [${selectedCount}/${maxFeats}]`;
  els.featsList.innerHTML = featCatalog.map((featEntry) => `
    <label class="check-item">
      <input type="checkbox" data-feat="${featEntry.name}" ${state.selectedFeats.includes(featEntry.name) ? 'checked' : ''} ${!state.selectedFeats.includes(featEntry.name) && selectedCount >= maxFeats ? 'disabled' : ''} />
      <span class="rules-trigger" data-rule-type="feat" data-rule-name="${featEntry.name}" title="Click for rules summary">${featEntry.name}${featEntry.setting === 'dragonlance' ? ' • Krynn' : ''}${formatPrerequisites(featEntry.prereqs)}</span>
    </label>
  `).join('');
}

function formatPrerequisites(prereqs = {}) {
  const requirements = [];
  abilityNames.forEach((ability) => {
    if (prereqs[ability]) requirements.push(`${ability.toUpperCase()} ${prereqs[ability]}`);
  });
  if (prereqs.bab) requirements.push(`BAB +${prereqs.bab}`);
  if (prereqs.level) requirements.push(`Level ${prereqs.level}`);
  if (prereqs.class) requirements.push(prereqs.class.join('/'));
  if (prereqs.feats) requirements.push(prereqs.feats.join(', '));
  return requirements.length ? ` (${requirements.join('; ')})` : '';
}

const skillRuleSummaries = {
  Appraise: 'Estimate the value of common or rare objects. Use Intelligence; magical or especially unusual items may be more difficult to identify.',
  Balance: 'Keep your footing on narrow, unstable, or slippery surfaces. Use Dexterity; armor check penalties commonly apply.',
  Bluff: 'Convince others that your words are believable when deceiving, feinting, or creating a distraction. Use Charisma.',
  Climb: 'Scale walls, ropes, and other surfaces. Use Strength; armor and carried gear can hinder the attempt.',
  Concentration: 'Maintain focus while injured, distracted, or casting defensively. Use Constitution.',
  Craft: 'Create or repair items in a chosen craft specialty. Use Intelligence; each specialty is tracked separately.',
  Diplomacy: 'Improve an NPC attitude or negotiate in good faith. Use Charisma.',
  'Disable Device': 'Disarm traps and manipulate mechanical devices. Use Dexterity; trained use is normally required for complex traps.',
  'Escape Artist': 'Slip restraints or squeeze through tight spaces. Use Dexterity; armor check penalties apply.',
  Forgery: 'Create or detect false documents and signatures. Use Intelligence; examining a forgery generally opposes the creator’s check.',
  'Handle Animal': 'Direct, train, and care for animals. Use Charisma; trained use is required for many commands.',
  Heal: 'Provide first aid, stabilize the dying, treat wounds, and assist with poison or disease. Use Wisdom.',
  Hide: 'Conceal yourself from observers. Use Dexterity and available cover or concealment; armor check penalties apply.',
  Intimidate: 'Influence someone through threats or fear. Use Charisma; combat circumstances and target attitude matter.',
  Jump: 'Leap across gaps or over obstacles. Use Strength; your movement and speed affect the result.',
  'Knowledge (arcana)': 'Recall information about magic, dragons, constructs, and arcane traditions. Use Intelligence; trained use is required.',
  'Knowledge (nature)': 'Recall information about animals, plants, weather, and the natural world. Use Intelligence; trained use is required.',
  'Knowledge (religion)': 'Recall information about deities, undead, religious rites, and the planes. Use Intelligence; trained use is required.',
  Listen: 'Notice sounds and conversations. Use Wisdom; distance, barriers, and distractions modify the check.',
  'Move Silently': 'Move without making noise. Use Dexterity; armor check penalties apply.',
  'Open Lock': 'Open mechanical locks with tools. Use Dexterity; trained use is required.',
  Perform: 'Use a chosen performance style such as music, oratory, or dance. Use Charisma; each style is tracked separately.',
  Ride: 'Control and stay mounted on a suitable creature. Use Dexterity; mounted combat uses this skill for several maneuvers.',
  Search: 'Find hidden doors, traps, clues, and concealed objects. Use Intelligence; trained use is required for some traps.',
  'Sense Motive': 'Read intentions, detect deception, and judge an NPC’s attitude. Use Wisdom.',
  'Sleight of Hand': 'Conceal small objects, palm items, or perform delicate tricks. Use Dexterity; trained use is required.',
  Spellcraft: 'Identify spells, learn magical details, and understand arcane effects. Use Intelligence; trained use is required.',
  Spot: 'Notice visible creatures, movement, and details. Use Wisdom; distance, cover, and distractions modify the check.',
  Survival: 'Find food and shelter, follow tracks, predict weather, and avoid natural hazards. Use Wisdom.',
  Swim: 'Move through water and stay afloat. Use Strength; armor check penalties can apply.',
  'Use Magic Device': 'Activate magic items despite lacking the normal class, race, or spell requirements. Use Charisma; trained use is required.'
};

const featRuleSummaries = {
  'Power Attack': 'Trade melee attack bonus for extra melee damage. The amount traded cannot exceed your base attack bonus.',
  Cleave: 'After dropping a foe with a melee attack, make one additional melee attack against an adjacent target.',
  'Great Cleave': 'Cleave can continue to grant additional attacks while each previous attack drops a foe.',
  'Improved Initiative': 'Gain a +4 bonus on initiative checks.',
  'Weapon Focus': 'Gain a +1 attack bonus with one selected weapon. The weapon choice is made when the feat is taken.',
  'Weapon Specialization': 'Gain extra damage with a selected weapon. This feat is restricted to fighters with the required training.',
  'Lightning Reflexes': 'Gain a +2 bonus on Reflex saving throws.',
  'Iron Will': 'Gain a +2 bonus on Will saving throws.',
  'Great Fortitude': 'Gain a +2 bonus on Fortitude saving throws.',
  Diehard: 'Remain conscious and continue acting while disabled, and resist dying from negative hit points.',
  Endurance: 'Gain a +4 bonus on several checks and saves involving harsh environmental conditions and forced exertion.',
  'Skill Focus': 'Gain a +3 bonus on checks with one selected skill.',
  Toughness: 'Gain a small pool of additional hit points. The feat can be selected more than once.',
  'Point Blank Shot': 'Gain a +1 attack and damage bonus with ranged weapons against targets within 30 feet.',
  'Precise Shot': 'Ignore the standard ranged attack penalty for firing into melee.',
  'Rapid Shot': 'Make one extra ranged attack in a full attack, with a penalty applied to all attacks that round.',
  'Quick Draw': 'Draw a weapon as a free action, allowing faster weapon changes and thrown-weapon attacks.',
  Dodge: 'Choose one visible opponent and gain a +1 dodge bonus to AC against that opponent.',
  Mobility: 'Gain a +4 dodge bonus to AC against attacks of opportunity caused by moving out of a threatened square.',
  'Spring Attack': 'Move before and after a melee attack without provoking from the target of that attack.',
  'Two-Weapon Fighting': 'Reduce the penalties for fighting with a weapon in each hand.',
  'Improved Two-Weapon Fighting': 'Gain an additional off-hand attack during a full attack.',
  'Improved Critical': 'Double the threat range of one weapon; this does not stack with other threat-range increases.',
  'Combat Expertise': 'Take a penalty on melee attacks to gain an equal dodge bonus to AC, within the feat’s limits.',
  'Improved Trip': 'Gain improved trip combat options and avoid the attack of opportunity normally caused by attempting a trip.',
  'Combat Casting': 'Gain a +4 bonus on Concentration checks caused by casting defensively.',
  'Spell Focus': 'Increase the save DC of spells from one chosen school by +1.',
  'Spell Penetration': 'Gain a +2 bonus on caster-level checks to overcome spell resistance.',
  'Mages of High Sorcery': 'A Dragonlance setting feat representing membership and training within the Orders of High Sorcery.',
  'Knight of Solamnia': 'A Dragonlance setting feat representing allegiance and training within the heroic knightly orders of Solamnia.',
  'Knight of Takhisis': 'A Dragonlance setting feat representing allegiance to the dark knightly order serving Takhisis.',
  'Born of Three Worlds': 'A Dragonlance setting feat tied to unusual heritage and the peoples of Krynn.',
  'Draconic Aura': 'Project a minor draconic aura that grants an ally bonus chosen from the feat’s available aura effects.',
  'Dragon Hunter': 'Gain specialized advantages when fighting dragons and identifying their methods or weaknesses.',
  Dragonwrought: 'A Dragonlance setting feat representing a kender or other qualifying character with an exceptional draconic heritage.',
  'Kender Affinity': 'Improve social interaction and cultural familiarity with kender communities and customs.',
  'Mounted Combat': 'Use a Ride check to reduce or negate one attack against your mount each round.',
  Leadership: 'Attract cohorts and followers according to the character’s level, reputation, and Leadership score.',
  'Improved Unarmed Strike': 'Treat your unarmed attacks as armed attacks and threaten adjacent squares without holding a weapon.'
};

const spellRuleSummaries = {
  'Acid Splash': 'Create a small glob of acid that deals minor ranged touch damage.',
  'Mage Hand': 'Manipulate a small or light unattended object at a short distance.',
  Prestidigitation: 'Perform minor magical tricks and harmless cleaning, flavoring, marking, or sensory effects.',
  'Burning Hands': 'A close cone of flame deals fire damage to creatures in its area.',
  'Charm Person': 'Make one humanoid regard the caster as a friendly acquaintance, subject to a Will save and the spell’s limitations.',
  'Cure Light Wounds': 'Channel positive energy to restore a modest amount of hit point damage to a living creature.',
  'Detect Magic': 'Sense magical auras and learn more about them with concentration over successive rounds.',
  'Magic Missile': 'Create force darts that automatically strike valid targets and deal force damage.',
  Shield: 'Create an invisible shield of force that improves AC and protects against magic missiles.',
  Sleep: 'Put a limited number of weak creatures into a magical slumber, subject to a Will save.',
  Bless: 'Grant allies a morale bonus on attacks and saves against fear.',
  'Bull Strength': 'Grant a creature an enhancement bonus to Strength for the spell’s duration.',
  Darkness: 'Create an area of supernatural darkness that reduces illumination.',
  Invisibility: 'Make the subject unseen until it attacks or the spell ends, with normal special-sense limitations.',
  'Resist Energy': 'Grant limited protection against one chosen energy type.',
  'Dispel Magic': 'End ongoing spells and suppress magical effects by making targeted or area dispel checks.',
  Fireball: 'Launch an explosive burst of fire that damages creatures in a spread.',
  Fly: 'Grant the subject a fly speed and maneuverability for the spell’s duration.',
  'Lightning Bolt': 'Release a line of electricity that damages creatures in its path.',
  'Water Breathing': 'Allow affected creatures to breathe underwater.',
  'Dimension Door': 'Teleport the caster and nearby creatures to a known or visual destination, ending the caster’s movement for the round.',
  Polymorph: 'Transform the subject into another creature form with the spell’s restrictions and benefits.',
  Haste: 'Grant affected creatures increased speed, improved AC, and an extra attack during a full attack.',
  Heroism: 'Grant a morale bonus on attack rolls, saves, and skill checks.',
  'Hold Person': 'Paralyze one humanoid that fails a Will save, allowing repeated saves as described by the spell.',
  Web: 'Fill an area with sticky strands that entangle and impede movement; fire can burn the webs.',
  'Remove Disease': 'Cure one disease affecting the subject after a caster-level check against the disease.',
  Confusion: 'Cause affected creatures to behave unpredictably unless they resist the spell.',
  'Freedom of Movement': 'Let the subject move normally despite many impediments, restraints, and environmental effects.',
  'Wall of Fire': 'Create a stationary wall of flame that damages creatures near or passing through it.',
  'Cone of Cold': 'Project a cone of cold that deals cold damage to creatures in its area.',
  Teleport: 'Transport the caster and willing companions to a destination, with mishap risk based on familiarity.',
  Heal: 'Restore a large amount of hit points and remove several harmful conditions from a living subject.',
  'True Seeing': 'Grant the subject enhanced perception that pierces many illusions, disguises, and invisibility effects.',
  'Time Stop': 'Briefly accelerate the caster relative to the world, allowing several apparent rounds of action.',
  Wish: 'Perform an extremely powerful magical effect within the spell’s listed limits, with costly uses possible.'
};

const weaponRuleSummaries = {
  Longsword: 'Martial one-handed melee weapon. Typical damage is 1d8, with a 19–20 critical threat range and a 5-foot reach.',
  Shortsword: 'Light martial melee weapon. Typical damage is 1d6, with a 19–20 critical threat range and a 5-foot reach.',
  Greatsword: 'Two-handed martial melee weapon. Typical damage is 2d6, with a 19–20 critical threat range and a 5-foot reach.',
  Rapier: 'Light piercing martial weapon. Typical damage is 1d6, with an 18–20 critical threat range and a 5-foot reach.',
  Scimitar: 'Slashing martial weapon. Typical damage is 1d6, with an 18–20 critical threat range and a 5-foot reach.',
  Dagger: 'Light simple weapon suitable for melee or throwing. Typical damage is 1d4, with a 19–20 critical threat range and a 10-foot range increment.',
  Quarterstaff: 'Two-handed simple bludgeoning weapon. Typical damage is 1d6 and it can be used as a double weapon.',
  Battleaxe: 'Martial one-handed slashing weapon. Typical damage is 1d8, with a ×3 critical multiplier.',
  Greataxe: 'Two-handed martial slashing weapon. Typical damage is 1d12, with a ×3 critical multiplier.',
  Warhammer: 'Martial one-handed bludgeoning weapon. Typical damage is 1d8, with a ×3 critical multiplier.',
  Mace: 'Simple one-handed bludgeoning weapon. Typical damage is 1d8, with a ×2 critical multiplier.',
  Spear: 'Simple piercing weapon usable in melee or as a thrown weapon. Typical damage is 1d8 with a 20-foot range increment.',
  Shortbow: 'Martial ranged weapon. Typical damage is 1d6, with a ×3 critical multiplier and a 60-foot range increment.',
  Longbow: 'Martial ranged weapon. Typical damage is 1d8, with a ×3 critical multiplier and a 100-foot range increment.',
  'Light Crossbow': 'Simple ranged weapon. Typical damage is 1d8, with a 19–20 critical threat range and an 80-foot range increment.',
  'Heavy Crossbow': 'Simple ranged weapon. Typical damage is 1d10, with a 19–20 critical threat range and a 120-foot range increment.',
  Sling: 'Simple ranged weapon that uses bullets or similar ammunition. Typical damage is 1d4 plus Strength on a suitable attack, with a 50-foot range increment.'
};

const armorRuleSummaries = {
  'Padded Armor': 'Light armor that grants a +1 armor bonus to AC. It is flexible but noisy and has a substantial armor check penalty.',
  'Leather Armor': 'Light armor that grants a +2 armor bonus to AC and allows relatively good mobility.',
  'Studded Leather': 'Light armor reinforced with studs that grants a +3 armor bonus to AC.',
  'Hide Armor': 'Medium natural-hide armor that grants a +3 armor bonus to AC and restricts Dexterity more than light armor.',
  'Chain Shirt': 'Light chain armor that grants a +4 armor bonus to AC while retaining much of the mobility of light armor.',
  'Scale Mail': 'Medium overlapping scales that grant a +4 armor bonus to AC with a noticeable armor check penalty.',
  Chainmail: 'Medium interlocking metal links that grant a +5 armor bonus to AC and limit Dexterity.',
  Breastplate: 'Medium fitted metal protection that grants a +5 armor bonus to AC with less bulk than heavier suits.',
  'Splint Mail': 'Medium armor of overlapping metal strips that grants a +6 armor bonus to AC.',
  'Half-Plate': 'Heavy layered armor that grants a +7 armor bonus to AC but significantly limits Dexterity and movement.',
  'Full Plate': 'The strongest standard armor, granting a +8 armor bonus to AC with heavy bulk, high cost, and restricted Dexterity.'
};

function updateEquipmentRuleTriggers() {
  els.weaponRulesTrigger.dataset.ruleName = state.weapon;
  els.weaponRulesTrigger.textContent = `View ${state.weapon} rules`;
  els.armorRulesTrigger.dataset.ruleName = state.armor;
  els.armorRulesTrigger.textContent = `View ${state.armor} rules`;
}

function getRuleDescription(type, name) {
  if (type === 'skill') {
    const keyAbility = getSkillAbility(name).toUpperCase();
    const classSkill = getClass().skills.includes(name) ? ' It is a class skill for the current class.' : '';
    return `${skillRuleSummaries[name] || `${name} is a trained 3.5 skill used for its listed adventuring specialty.`} Key ability: ${keyAbility}.${classSkill}`;
  }
  if (type === 'feat') {
    const feat = featCatalog.find((entry) => entry.name === name);
    const prereqs = feat?.prereqs && Object.keys(feat.prereqs).length ? ` Prerequisites: ${formatPrerequisites(feat.prereqs).slice(2, -1)}.` : ' No prerequisites are recorded in this builder.';
    return `${featRuleSummaries[name] || `${name} is a selectable feat in this builder.`}${prereqs}`;
  }
  if (type === 'weapon') {
    const stats = getWeaponStats();
    const sizeNote = stats.sizeDelta === 0 ? 'sized for the wielder' : `${Math.abs(stats.sizeDelta)} size category ${stats.sizeDelta > 0 ? 'larger' : 'smaller'} than the wielder`;
    return `${weaponRuleSummaries[name] || `${name} is an equipment choice in this builder.`} Base damage: ${stats.baseDamage}. Size-adjusted damage: ${stats.damage} (${stats.sizeAdjustment}). Current attack line: ${stats.attack >= 0 ? '+' : ''}${stats.attack} to hit, ${stats.crit} critical, ${stats.range}. Weapon is ${stats.weaponSize} size and ${sizeNote}.`;
  }
  if (type === 'armor') {
    return `${armorRuleSummaries[name] || `${name} is an armor choice in this builder.`} Current armor bonus: +${getArmorBonus()}.`;
  }
  const spell = spellCatalog.find((entry) => entry.name === name);
  return `${spellRuleSummaries[name] || `${name} is a level ${spell?.level ?? '?'} spell in this builder's catalog. Consult your licensed 3.5 reference for its exact casting time, range, duration, saving throw, and components.`} Spell level: ${spell?.level ?? '?'}.`;
}

function showRulesPopover(trigger) {
  const type = trigger.dataset.ruleType;
  const name = trigger.dataset.ruleName;
  const description = getRuleDescription(type, name);
  els.rulesPopover.innerHTML = `<div class="rules-popover-header"><strong>${name}</strong><button type="button" class="rules-popover-close" aria-label="Close rules summary">×</button></div><p>${description}</p><small>Original concise summary; not a verbatim reproduction of source text.</small>`;
  els.rulesPopover.hidden = false;
  const rect = trigger.getBoundingClientRect();
  const width = Math.min(360, window.innerWidth - 24);
  const left = Math.min(Math.max(12, rect.left), window.innerWidth - width - 12);
  const above = rect.bottom + 12 + els.rulesPopover.offsetHeight > window.innerHeight;
  els.rulesPopover.style.width = `${width}px`;
  els.rulesPopover.style.left = `${left}px`;
  els.rulesPopover.style.top = `${above ? Math.max(12, rect.top - els.rulesPopover.offsetHeight - 12) : rect.bottom + 12}px`;
}

function hideRulesPopover() {
  els.rulesPopover.hidden = true;
}

function renderSpells() {
  const maxSpellLevel = getMaxSpellLevel();
  const selectedClass = getClass();
  const availableSpells = selectedClass.spellcaster
    ? spellCatalog.filter((spell) => spell.level <= maxSpellLevel)
    : [];
  const availableNames = new Set(availableSpells.map((spell) => spell.name));
  state.selectedSpells = state.selectedSpells.filter((spellName) => availableNames.has(spellName));

  if (!availableSpells.length) {
    els.spellList.innerHTML = '<p class="language-empty">No spells are currently available for this class and level.</p>';
    return;
  }

  els.spellList.innerHTML = availableSpells.map((spell) => `
    <label class="check-item">
      <input type="checkbox" data-spell="${spell.name}" ${state.selectedSpells.includes(spell.name) ? 'checked' : ''} />
      <span class="rules-trigger" data-rule-type="spell" data-rule-name="${spell.name}" title="Click for rules summary">${spell.name} (lvl ${spell.level})</span>
    </label>
  `).join('');
}

function renderSummary() {
  const { race, selectedClass, hp, bab, initiative, fort, ref, will, ac } = deriver();
  const warnings = getRuleWarnings();
  const totalRanks = getSpentSkillPoints();
  const maxRanks = getAvailableSkillPoints();
  const spellSummary = getSpellSlotSummary();

  const summaryHtml = `
    <h3>Character Summary</h3>
    <div class="summary-grid">
      <div class="stat-pill"><strong>Character</strong><br>${state.charName}</div>
      <div class="stat-pill"><strong>Race</strong><br>${race.name}</div>
      <div class="stat-pill"><strong>Class</strong><br>${selectedClass.name}</div>
      <div class="stat-pill"><strong>Level</strong><br>${state.level}</div>
      <div class="stat-pill"><strong>HP</strong><br>${hp}</div>
      <div class="stat-pill"><strong>BAB</strong><br>+${bab}</div>
      <div class="stat-pill"><strong>Init</strong><br>${initiative >= 0 ? '+' : ''}${initiative}</div>
      <div class="stat-pill"><strong>AC</strong><br>${ac}</div>
      <div class="stat-pill"><strong>Fort</strong><br>${fort >= 0 ? '+' : ''}${fort}</div>
      <div class="stat-pill"><strong>Ref</strong><br>${ref >= 0 ? '+' : ''}${ref}</div>
      <div class="stat-pill"><strong>Will</strong><br>${will >= 0 ? '+' : ''}${will}</div>
      <div class="stat-pill"><strong>Skills</strong><br>${totalRanks}/${maxRanks} ranks</div>
      <div class="stat-pill"><strong>Feats</strong><br>${state.selectedFeats.length}/${getFeatSlots()} slots</div>
      <div class="stat-pill"><strong>Setting</strong><br>${state.setting === 'dragonlance' ? 'Dragonlance' : 'Core 3.5'}</div>
    </div>
    <div class="warnings-box">
      <h4>Rule Checks</h4>
      <ul>${warnings.length ? warnings.map((warning) => `<li>${warning}</li>`).join('') : '<li>No major rule issues detected.</li>'}</ul>
      <p><strong>Spell Slots:</strong> ${spellSummary}</p>
    </div>
  `;
  els.summaryCard.innerHTML = summaryHtml;
}

function renderPlayerSheet() {
  const { race, selectedClass, mods, hp, bab, initiative, fort, ref, will, ac } = deriver();
  const statsList = abilityNames.map((ability) => `${ability.toUpperCase()}: ${state.abilities[ability]} (${mods[ability] >= 0 ? '+' : ''}${mods[ability]})`).join(' | ');
  const selectedFeatText = state.selectedFeats.length ? state.selectedFeats.join(', ') : 'None';
  const skillListHtml = state.selectedSkills.length ? state.selectedSkills.map((skill) => `<li>${skill}: ${getSkillTotal(skill) >= 0 ? '+' : ''}${getSkillTotal(skill)}</li>`).join('') : '<li>None</li>';
  const spellcastingInfo = selectedClass.spellcaster ? `<p><strong>Spellcasting:</strong> ${getSpellSlotSummary()}</p>` : '<p><strong>Spellcasting:</strong> None</p>';
  const speed = getSpeed();
  const weaponStats = getWeaponStats();
  const senses = `Low-light vision${race.name === 'Elf' ? ', keen senses' : ''}${race.name === 'Dwarf' ? ', darkvision' : ''}${race.name === 'Half-Orc' ? ', darkvision' : ''}`;
  const encumbrance = `${getCarryCapacity()} lb. carry capacity`;
  const notes = `${selectedFeatText}; ${state.selectedSpells.length ? state.selectedSpells.join(', ') : 'No spells prepared'}; ${encumbrance}`;
  const prestigeClass = getPrestigeClass();
  const settingNotes = state.setting === 'dragonlance'
    ? `<p><strong>Krynn:</strong> ${state.krynnPath} / ${state.moon}${prestigeClass ? ` / ${prestigeClass.name}` : ''}</p>`
    : '';

  els.playerSheet.classList.add('active');
  els.playerSheet.innerHTML = `
    <div class="official-page">
      <div class="official-sheet">
      <div class="sheet-header">
        <div>
          <h2>${state.charName}</h2>
          <div class="sheet-meta">
            <span>${selectedClass.name}</span>
            <span>Level ${state.level}</span>
            <span>${race.name}</span>
            <span>${state.alignment}</span>
          </div>
        </div>
        <span class="badge">Player: ${state.playerName}</span>
      </div>

      <div class="sheet-row three-up">
        <div class="sheet-box compact-box">
          <h4>Armor Class</h4>
          <p><strong>AC</strong> ${ac}</p>
          <p><strong>Touch</strong> ${10 + mods.dex}</p>
          <p><strong>Flat-Footed</strong> ${ac - Math.max(0, mods.dex)}</p>
        </div>
        <div class="sheet-box compact-box">
          <h4>Attack</h4>
          <p><strong>Base Attack</strong> +${bab}</p>
          <p><strong>Initiative</strong> ${initiative >= 0 ? '+' : ''}${initiative}</p>
          <p><strong>Weapon</strong> ${state.weapon}</p>
          <p><strong>Weapon Size</strong> ${weaponStats.weaponSize}</p>
          <p><strong>Attack Bonus</strong> +${weaponStats.attack}</p>
          <p><strong>Base Damage</strong> ${weaponStats.baseDamage}</p>
          <p><strong>Size-Adjusted Damage</strong> ${weaponStats.damage}</p>
          <p><strong>Size Adjustment</strong> ${weaponStats.sizeAdjustment}</p>
          <p><strong>Crit</strong> ${weaponStats.crit}</p>
          <p><strong>Range</strong> ${weaponStats.range}</p>
        </div>
        <div class="sheet-box compact-box">
          <h4>Saving Throws</h4>
          <p>Fort ${fort >= 0 ? '+' : ''}${fort}</p>
          <p>Ref ${ref >= 0 ? '+' : ''}${ref}</p>
          <p>Will ${will >= 0 ? '+' : ''}${will}</p>
          <p><strong>Speed</strong> ${speed} ft.</p>
          <p><strong>Carry</strong> ${encumbrance}</p>
        </div>
      </div>

      <div class="sheet-row ability-row">
        ${abilityNames.map((ability) => `
          <div class="ability-box official-ability">
            <strong>${ability.toUpperCase()}</strong>
            <div class="ability-score">${state.abilities[ability]}</div>
            <small>Mod ${mods[ability] >= 0 ? '+' : ''}${mods[ability]}</small>
          </div>
        `).join('')}
      </div>

      <div class="sheet-grid">
        <div class="sheet-box">
          <h4>Skills</h4>
          <ul>${skillListHtml}</ul>
        </div>
        <div class="sheet-box">
          <h4>Feats</h4>
          <p>${selectedFeatText}</p>
        </div>
        <div class="sheet-box">
          <h4>Senses</h4>
          <p>${senses}</p>
        </div>
        <div class="sheet-box">
          <h4>Equipment</h4>
          <ul>
            <li>${state.weapon}</li>
            <li>${state.armor}</li>
            <li>${state.item}</li>
          </ul>
        </div>
        <div class="sheet-box">
          <h4>Class Features</h4>
          <ul>${getClassFeatures().map((feature) => `<li>${feature}</li>`).join('')}</ul>
        </div>
        <div class="sheet-box">
          <h4>Racial Traits</h4>
          <ul>${race.traits.map((trait) => `<li>${trait}</li>`).join('')}</ul>
        </div>
        <div class="sheet-box">
          <h4>Magic</h4>
          ${spellcastingInfo}
          ${settingNotes}
        </div>
        <div class="sheet-box">
          <h4>Notes</h4>
          <p>${notes}</p>
        </div>
      </div>
      </div>

      <div class="official-page official-page-break">
        <div class="sheet-header">
          <h2>${state.charName} - Combat & Equipment</h2>
          <span class="badge">Page 2</span>
        </div>
        <div class="sheet-grid official-wide-grid">
          <div class="sheet-box">
            <h4>Weapons</h4>
            <table class="official-table">
              <thead><tr><th>Name</th><th>Attack</th><th>Base Damage</th><th>Size-Adjusted Damage</th><th>Critical</th><th>Range</th></tr></thead>
              <tbody><tr><td>${state.weapon} (${weaponStats.weaponSize})</td><td>${weaponStats.attack >= 0 ? '+' : ''}${weaponStats.attack}</td><td>${weaponStats.baseDamage}</td><td>${weaponStats.damage}<br><small>${weaponStats.sizeAdjustment}</small></td><td>${weaponStats.crit}</td><td>${weaponStats.range}</td></tr></tbody>
            </table>
          </div>
          <div class="sheet-box">
            <h4>Armor & Defense</h4>
            <p>Armor: ${state.armor}</p>
            <p>Armor Class: ${ac}</p>
            <p>Touch AC: ${10 + mods.dex}</p>
            <p>Flat-Footed AC: ${ac - Math.max(0, mods.dex)}</p>
            <p>Damage Reduction: ______</p>
            <p>Spell Resistance: ______</p>
          </div>
        </div>
        <div class="sheet-grid official-wide-grid">
          <div class="sheet-box">
            <h4>Equipment & Possessions</h4>
            <ul><li>${state.weapon}</li><li>${state.armor}</li><li>${state.item}</li><li>Backpack contents: ____________________</li><li>Other possessions: ____________________</li></ul>
          </div>
          <div class="sheet-box">
            <h4>Money</h4>
            <p>Platinum: ______ &nbsp; Gold: ______</p><p>Silver: ______ &nbsp; Copper: ______</p>
            <p>Carrying capacity: ${encumbrance}</p><p>Load: ____________________</p>
          </div>
        </div>
        <div class="sheet-box official-notes-box"><h4>Combat Notes</h4><p>Grapple: ${bab + mods.str >= 0 ? '+' : ''}${bab + mods.str} &nbsp; Initiative: ${initiative >= 0 ? '+' : ''}${initiative} &nbsp; Speed: ${speed} ft.</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
      </div>

      <div class="official-page official-page-break">
        <div class="sheet-header">
          <h2>${state.charName} - Skills & Abilities</h2>
          <span class="badge">Page 3</span>
        </div>
        <div class="sheet-grid official-wide-grid">
          <div class="sheet-box">
            <h4>Skills</h4>
            <table class="official-table skill-table"><thead><tr><th>Skill</th><th>Key</th><th>Ranks</th><th>Total</th></tr></thead><tbody>
              ${skillsCatalog.map((skill) => `<tr><td>${skill}${getClass().skills.includes(skill) ? ' *' : ''}</td><td>${getSkillAbility(skill).toUpperCase()}</td><td>${state.skillRanks[skill] || 0}</td><td>${getSkillTotal(skill) >= 0 ? '+' : ''}${getSkillTotal(skill)}</td></tr>`).join('')}
            </tbody></table>
          </div>
          <div class="sheet-box">
            <h4>Feats</h4><ul>${state.selectedFeats.length ? state.selectedFeats.map((feat) => `<li>${feat}</li>`).join('') : '<li>None selected</li>'}</ul>
            <h4>Special Abilities</h4><ul>${getClassFeatures().map((feature) => `<li>${feature}</li>`).join('')}</ul>
            <h4>Racial Traits</h4><ul>${race.traits.map((trait) => `<li>${trait}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="sheet-grid official-wide-grid">
          <div class="sheet-box"><h4>Languages</h4><p>${getAllLanguages().join(', ')}</p></div>
          <div class="sheet-box"><h4>Deity / Allegiance</h4><p>${state.deity}</p><p>${state.setting === 'dragonlance' ? 'Krynn path: ' + state.krynnPath : 'Allegiance: ____________________'}</p></div>
        </div>
        <div class="sheet-box official-notes-box"><h4>Character Notes</h4><p>${notes}</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
      </div>

      <div class="official-page official-page-break">
        <div class="sheet-header">
          <h2>${state.charName} - Spellbook & Spell List</h2>
          <span class="badge">Page 4</span>
        </div>
        <div class="sheet-grid official-wide-grid">
          <div class="sheet-box"><h4>Spellcasting</h4><p>${spellcastingInfo}</p><p>Spell save DC: __________</p><p>Concentration: ${getSkillTotal('Concentration') >= 0 ? '+' : ''}${getSkillTotal('Concentration')}</p><p>Arcane failure: __________</p></div>
          <div class="sheet-box"><h4>Spell Slots</h4><p>${getSpellSlotSummary()}</p><p>Bonus spells: ____________________</p></div>
        </div>
        <div class="sheet-box">
          <h4>Selected Spells</h4>
          <table class="official-table"><thead><tr><th>Spell</th><th>Level</th><th>Prepared / Known</th><th>Notes</th></tr></thead><tbody>
            ${spellCatalog.filter((spell) => state.selectedSpells.includes(spell.name)).map((spell) => `<tr><td>${spell.name}</td><td>${spell.level}</td><td>________________</td><td>________________</td></tr>`).join('') || '<tr><td colspan="4">No spells selected</td></tr>'}
          </tbody></table>
        </div>
        <div class="sheet-box official-notes-box"><h4>Spell Notes</h4><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
      </div>
    </div>
  `;
}

function renderSpellSheet() {
  const selectedSpells = spellCatalog.filter((spell) => state.selectedSpells.includes(spell.name));
  const spellList = selectedSpells.length ? selectedSpells.map((spell) => `<li>${spell.name} (Level ${spell.level})</li>`).join('') : '<li>No spells selected.</li>';
  const spellSummary = getSpellSlotSummary();

  els.spellSheet.classList.add('active');
  els.spellSheet.innerHTML = `
    <div class="sheet-header">
      <h2>Spell Sheet</h2>
      <span class="badge">${state.charName}</span>
    </div>
    <div class="sheet-grid">
      <div class="sheet-box">
        <h4>Spellcasting</h4>
        <p>${spellSummary}</p>
      </div>
      <div class="sheet-box">
        <h4>Prepared Spells</h4>
        <ul>${spellList}</ul>
      </div>
    </div>
  `;
}

function renderItemSheet() {
  els.itemSheet.classList.add('active');
  els.itemSheet.innerHTML = `
    <div class="sheet-header">
      <h2>Item Sheet</h2>
      <span class="badge">${state.charName}</span>
    </div>
    <div class="sheet-grid">
      <div class="sheet-box">
        <h4>Weapons</h4>
        <p>${state.weapon} (${getWeaponStats().weaponSize})</p>
      </div>
      <div class="sheet-box">
        <h4>Armor</h4>
        <p>${state.armor}</p>
      </div>
      <div class="sheet-box">
        <h4>Gear</h4>
        <p>${state.item}</p>
      </div>
    </div>
  `;
}

function renderSketchSheet() {
  const race = getRace();
  const selectedClass = getClass();
  const genderLabel = state.gender === 'unspecified' ? 'unspecified presentation' : `${state.gender} presentation`;
  const ink = '#34383d';
  const classDetail = {
    barbarian: 'fur mantle and heavy bracers', bard: 'ornate shoulder sash', cleric: 'high collar and holy emblem',
    druid: 'leaf mantle and natural staff', fighter: 'layered plate and broad belt', monk: 'wrapped forearms and simple sash',
    paladin: 'polished breastplate and heraldic cloak', ranger: 'hooded traveling cloak', rogue: 'close-fitting leathers',
    sorcerer: 'arcane trim and loose sleeves', wizard: 'long robe and spell satchel'
  }[selectedClass.id] || 'adventuring clothes';
  const raceCue = race.id === 'minotaur'
    ? '<path d="M168 74 Q140 44 128 70 M232 74 Q260 44 272 70" /><path d="M151 66 Q137 62 130 72 M249 66 Q263 62 270 72" />'
    : race.id.includes('elf') || race.id === 'kender'
      ? '<path d="M160 78 L125 50 L154 103 M240 78 L275 50 L246 103" />'
      : race.id === 'draconian'
        ? '<path d="M164 65 Q200 38 236 65" /><path d="M177 58 l8 -15 l8 14 l8 -16 l8 16 l8 -14 l8 17" />'
        : '<path d="M158 78 Q145 92 155 108 M242 78 Q255 92 245 108" />';
  const hair = state.gender === 'feminine'
    ? '<path d="M157 74 Q200 28 243 74 L246 126 Q230 109 220 101 Q200 112 180 101 Q170 111 154 126 Z" />'
    : state.gender === 'masculine'
      ? '<path d="M161 72 Q200 39 239 72 L232 91 Q200 76 168 91 Z" />'
      : '<path d="M163 70 Q200 34 237 70 L232 92 Q200 78 168 92 Z" />';
  const outfit = ['wizard', 'sorcerer', 'cleric', 'druid'].includes(selectedClass.id)
    ? `<path d="M165 150 L235 150 L262 342 L138 342 Z" fill="${ink}" fill-opacity=".18" /><path d="M165 150 L235 150 L262 342 L138 342 Z" />`
    : `<path d="M166 151 L234 151 L255 281 L145 281 Z" fill="${ink}" fill-opacity=".22" /><path d="M166 151 L234 151 L255 281 L145 281 Z" /><path d="M145 190 L111 270 M255 190 L289 270" />`;
  const heldGear = selectedClass.id === 'wizard' || selectedClass.id === 'sorcerer' || selectedClass.id === 'druid'
    ? '<path d="M292 142 L292 338 M281 154 Q292 134 303 154" />'
    : selectedClass.id === 'rogue' || selectedClass.id === 'ranger'
      ? '<path d="M298 112 L230 275 M230 275 L300 112" /><path d="M298 112 L310 96" />'
      : '<path d="M294 104 L294 325" /><path d="M276 122 L312 122 M282 112 L306 132" />';
  const crossHatch = '<path d="M142 190 l28 28 M138 205 l28 28 M230 216 l28 28 M234 201 l28 28 M165 260 l28 28 M207 272 l28 28" stroke-opacity=".38" stroke-width="2" />';
  const costumeDetails = selectedClass.id === 'wizard' || selectedClass.id === 'sorcerer'
    ? '<path d="M174 163 Q200 182 226 163 M165 205 Q200 222 235 205 M157 255 Q200 270 243 255" /><path d="M192 174 L200 188 L208 174" />'
    : '<path d="M168 165 Q200 185 232 165 M163 208 L237 208 M177 238 L223 238" /><path d="M181 154 L181 268 M219 154 L219 268" />';

  els.sketchSheet.classList.add('active');
  els.sketchSheet.innerHTML = `
    <div class="character-sketch-sheet">
      <div class="sheet-header">
        <div><h2>${state.charName} - Character Sketch</h2><div class="sheet-meta"><span>${race.name}</span><span>${selectedClass.name}</span><span>${genderLabel}</span></div></div>
        <span class="badge">Generalized likeness</span>
      </div>
      <div class="sketch-layout">
        <div class="sketch-paper">
          <svg class="character-sketch" viewBox="0 0 400 470" role="img" aria-label="Generalized ${race.name} ${selectedClass.name} character sketch">
            <defs>
              <pattern id="sketchGrid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#34383d" stroke-opacity=".045" /></pattern>
              <pattern id="inkHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(24)"><path d="M0 0V8" stroke="#34383d" stroke-opacity=".12" /></pattern>
            </defs>
            <rect width="400" height="470" fill="#fbf7ee" />
            <rect width="400" height="470" fill="url(#sketchGrid)" />
            <path d="M72 407 Q200 375 328 407" fill="none" stroke="${ink}" stroke-opacity=".25" stroke-width="2" />
            <g fill="none" stroke="${ink}" stroke-linecap="round" stroke-linejoin="round">
              <path d="M166 118 Q170 143 160 157 M234 118 Q230 143 240 157" stroke-width="3" />
              ${raceCue}
              <path d="M160 77 Q164 48 200 42 Q236 48 240 77 L233 120 Q224 139 200 145 Q176 139 167 120 Z" fill="#f1e7d7" stroke-width="3" />
              ${hair}
              <path d="M178 92 Q186 87 193 92 M207 92 Q214 87 222 92" stroke-width="3" />
              <path d="M183 108 Q200 116 217 108 M194 121 Q200 125 206 121" stroke-width="2" />
              <path d="M172 151 Q200 140 228 151 L247 191 Q239 224 235 274 L165 274 Q161 224 153 191 Z" fill="url(#inkHatch)" stroke-width="3" />
              ${outfit}
              ${costumeDetails}
              <path d="M161 158 Q145 166 132 194 L111 256 Q108 268 119 272 Q130 273 135 260 L157 218" stroke-width="4" />
              <path d="M239 158 Q255 166 268 194 L289 256 Q292 268 281 272 Q270 273 265 260 L243 218" stroke-width="4" />
              <path d="M111 256 q-8 8 -4 17 q8 8 18 0 l8 -12 M289 256 q8 8 4 17 q-8 8 -18 0 l-8 -12" stroke-width="3" />
              ${heldGear}
              <path d="M168 273 Q164 323 153 366 L142 396 Q140 407 151 410 L181 410 Q187 403 178 397 L171 386 L190 304" fill="#f1e7d7" stroke-width="4" />
              <path d="M232 273 Q236 323 247 366 L258 396 Q260 407 249 410 L219 410 Q213 403 222 397 L229 386 L210 304" fill="#f1e7d7" stroke-width="4" />
              ${crossHatch}
              <path d="M142 410 Q161 402 181 410 M219 410 Q239 402 258 410" stroke-width="3" />
            </g>
            <text x="200" y="440" text-anchor="middle" fill="${ink}" font-size="12" letter-spacing="1">${race.name.toUpperCase()} / ${selectedClass.name.toUpperCase()}</text>
            <text x="200" y="456" text-anchor="middle" fill="${ink}" fill-opacity=".68" font-size="10">${classDetail.toUpperCase()}</text>
          </svg>
        </div>
        <div class="sketch-notes">
          <div class="sheet-box"><h4>Visual Profile</h4><p><strong>Race:</strong> ${race.name}</p><p><strong>Class:</strong> ${selectedClass.name}</p><p><strong>Presentation:</strong> ${genderLabel}</p><p><strong>Size:</strong> ${race.size}</p></div>
          <div class="sheet-box"><h4>Recognizable Details</h4><ul>${race.traits.slice(0, 4).map((trait) => `<li>${trait}</li>`).join('')}<li>${state.weapon} at hand</li><li>${state.armor}</li></ul></div>
          <div class="sheet-box"><h4>Artist Notes</h4><p>This is a generalized character study based on the selected traits, not a unique portrait.</p><p>Pose, face, colors, and equipment can be refined later for a specific character.</p></div>
        </div>
      </div>
    </div>
  `;
}

function saveCharacterToStorage() {
  const payload = {
    ...state,
    abilities: { ...state.abilities },
    skillRanks: { ...state.skillRanks },
    selectedSkills: [...state.selectedSkills],
    selectedFeats: [...state.selectedFeats],
    selectedSpells: [...state.selectedSpells]
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.warn('Unable to save character to browser storage.', error);
  }
}

function loadCharacterFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const payload = JSON.parse(raw);
    if (!payload) return false;
    applyCharacterData(payload);
    return true;
  } catch (error) {
    console.warn('Unable to load character from browser storage.', error);
    return false;
  }
}

function renderAllSheets() {
  renderSummary();
  renderPlayerSheet();
  renderSpellSheet();
  renderItemSheet();
  renderSketchSheet();
}

function exportCharacter() {
  const payload = {
    ...state,
    abilities: { ...state.abilities },
    skillRanks: { ...state.skillRanks },
    selectedSkills: [...state.selectedSkills],
    selectedFeats: [...state.selectedFeats],
    selectedSpells: [...state.selectedSpells]
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${(state.charName || 'character').replace(/\s+/g, '-').toLowerCase()}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function applyCharacterData(data) {
  if (!data || typeof data !== 'object') return;

  state.charName = data.charName || 'Unnamed Hero';
  state.playerName = data.playerName || 'Player';
  state.raceId = data.raceId || 'human';
  state.classId = data.classId || 'fighter';
  state.level = Number(data.level || 1);
  state.alignment = data.alignment || 'Lawful Good';
  state.deity = data.deity || 'None selected';
  state.gender = data.gender || 'unspecified';
  state.abilityMode = data.abilityMode || 'rolled';
  state.pointBuyBudget = Number(data.pointBuyBudget || 32);
  state.setting = data.setting || 'core';
  state.krynnPath = data.krynnPath || 'none';
  state.moon = data.moon || 'none';
  state.prestigeClass = data.prestigeClass || 'none';
  state.weapon = data.weapon || 'Longsword';
  state.armor = data.armor || 'Chain Shirt';
  state.weaponSize = data.weaponSize || 'auto';
  state.item = data.item || 'Backpack';
  state.abilities = { ...defaultScores, ...(data.abilities || {}) };
  state.rolledScores = Array.isArray(data.rolledScores) && data.rolledScores.length === abilityNames.length ? data.rolledScores.map(Number) : null;
  state.abilityAssignments = data.abilityAssignments && typeof data.abilityAssignments === 'object'
    ? { ...data.abilityAssignments }
    : {};
  if (state.rolledScores) {
    abilityNames.forEach((ability, index) => {
      state.abilityAssignments[ability] = Number.isInteger(Number(state.abilityAssignments[ability])) ? Number(state.abilityAssignments[ability]) : index;
      state.abilities[ability] = state.rolledScores[state.abilityAssignments[ability]];
    });
  }
  state.selectedSkills = Array.isArray(data.selectedSkills) ? data.selectedSkills : [];
  state.selectedFeats = Array.isArray(data.selectedFeats) ? data.selectedFeats : [];
  state.selectedSpells = Array.isArray(data.selectedSpells) ? data.selectedSpells : [];
  state.selectedLanguages = Array.isArray(data.selectedLanguages) ? [...new Set(data.selectedLanguages)] : [];
  state.skillRanks = data.skillRanks || {};

  els.charName.value = state.charName;
  els.playerName.value = state.playerName;
  els.raceSelect.value = state.raceId;
  els.classSelect.value = state.classId;
  els.levelInput.value = String(state.level);
  els.alignmentSelect.value = state.alignment;
  els.abilityModeSelect.value = state.abilityMode;
  els.pointBuyBudgetSelect.value = String(state.pointBuyBudget);
  els.genderSelect.value = state.gender;
  els.settingSelect.value = state.setting;
  populateDeitySelect();
  els.deitySelect.value = state.deity;
  els.krynnPathSelect.value = state.krynnPath;
  els.moonSelect.value = state.moon;
  els.prestigeClassSelect.value = state.prestigeClass;
  els.weaponSelect.value = state.weapon;
  els.armorSelect.value = state.armor;
  els.weaponSizeSelect.value = state.weaponSize;
  els.itemSelect.value = state.item;
  updateEquipmentRuleTriggers();

  renderAbilities();
  renderLanguages();
  renderSkills();
  renderFeats();
  renderSpells();
  renderAllSheets();
  saveCharacterToStorage();
}

function createNewCharacter() {
  const newCharacter = {
    charName: 'Unnamed Hero',
    playerName: 'Player',
    raceId: 'human',
    classId: 'fighter',
    level: 1,
    alignment: 'Lawful Good',
    gender: 'unspecified',
    abilityMode: 'rolled',
    pointBuyBudget: 32,
    setting: 'core',
    krynnPath: 'none',
    moon: 'none',
    prestigeClass: 'none',
    abilities: { ...defaultScores },
    selectedSkills: [],
    selectedFeats: [],
    selectedSpells: [],
    skillRanks: {},
    weapon: 'Longsword',
    armor: 'Chain Shirt',
    item: 'Backpack',
    weaponSize: 'auto',
    selectedLanguages: [],
    deity: 'None selected'
    ,rolledScores: null
    ,abilityAssignments: {}
  };

  localStorage.removeItem(STORAGE_KEY);
  applyCharacterData(newCharacter);
}

function loadCharacterFromFile(event) {
  const [file] = event.target.files || [];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (loaded) => {
    try {
      const parsed = JSON.parse(String(loaded.target?.result || '{}'));
      applyCharacterData(parsed);
    } catch (error) {
      window.alert('That file is not valid character JSON.');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

function syncStateFromInputs() {
  state.charName = els.charName.value || 'Unnamed Hero';
  state.playerName = els.playerName.value || 'Player';
  state.raceId = els.raceSelect.value;
  state.classId = els.classSelect.value;
  state.level = Number(els.levelInput.value || 1);
  state.alignment = els.alignmentSelect.value;
  state.abilityMode = els.abilityModeSelect.value;
  state.pointBuyBudget = Number(els.pointBuyBudgetSelect.value || 32);
  state.deity = els.deitySelect.value;
  state.gender = els.genderSelect.value;
  state.setting = els.settingSelect.value;
  populateDeitySelect();
  state.krynnPath = els.krynnPathSelect.value;
  state.moon = els.moonSelect.value;
  state.prestigeClass = els.prestigeClassSelect.value;
  state.weapon = els.weaponSelect.value;
  state.armor = els.armorSelect.value;
  state.item = els.itemSelect.value;
  state.weaponSize = els.weaponSizeSelect.value;
  state.selectedLanguages = [...document.querySelectorAll('[data-language-slot]')]
    .map((input) => input.value)
    .filter(Boolean);
  updateEquipmentRuleTriggers();

  document.querySelectorAll('[data-ability]').forEach((input) => {
    state.abilities[input.dataset.ability] = Number(input.value || 10);
  });

  state.selectedSkills = [...document.querySelectorAll('[data-skill]:checked')].map((input) => input.dataset.skill);
  state.selectedFeats = [...document.querySelectorAll('[data-feat]:checked')].map((input) => input.dataset.feat);
  state.selectedSpells = [...document.querySelectorAll('[data-spell]:checked')].map((input) => input.dataset.spell);

  document.querySelectorAll('[data-rank-skill]').forEach((input) => {
    const skillName = input.dataset.rankSkill;
    state.skillRanks[skillName] = Number(input.value || 0);
  });

  renderAbilities();
  renderLanguages();
  renderSkills();
  renderFeats();
  renderSpells();
  renderAllSheets();
  saveCharacterToStorage();
}

function bindEvents() {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('.rules-trigger');
    const closeButton = event.target.closest('.rules-popover-close');
    if (closeButton) {
      hideRulesPopover();
      return;
    }
    if (trigger) {
      event.preventDefault();
      showRulesPopover(trigger);
      return;
    }
    if (!event.target.closest('.rules-popover')) {
      hideRulesPopover();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') hideRulesPopover();
  });

  els.charName.addEventListener('input', syncStateFromInputs);
  els.playerName.addEventListener('input', syncStateFromInputs);
  els.raceSelect.addEventListener('change', syncStateFromInputs);
  els.classSelect.addEventListener('change', syncStateFromInputs);
  els.levelInput.addEventListener('input', syncStateFromInputs);
  els.alignmentSelect.addEventListener('change', syncStateFromInputs);
  els.abilityModeSelect.addEventListener('change', () => setAbilityMode(els.abilityModeSelect.value));
  els.pointBuyBudgetSelect.addEventListener('change', syncStateFromInputs);
  els.deitySelect.addEventListener('change', syncStateFromInputs);
  els.genderSelect.addEventListener('change', syncStateFromInputs);
  els.settingSelect.addEventListener('change', syncStateFromInputs);
  els.krynnPathSelect.addEventListener('change', syncStateFromInputs);
  els.moonSelect.addEventListener('change', syncStateFromInputs);
  els.prestigeClassSelect.addEventListener('change', syncStateFromInputs);
  els.weaponSelect.addEventListener('change', syncStateFromInputs);
  els.weaponSizeSelect.addEventListener('change', syncStateFromInputs);
  els.armorSelect.addEventListener('change', syncStateFromInputs);
  els.itemSelect.addEventListener('change', syncStateFromInputs);
  els.languagesList.addEventListener('change', syncStateFromInputs);

  els.abilities.addEventListener('input', (event) => {
    if (event.target.matches('[data-ability]')) {
      state.rolledScores = null;
      syncStateFromInputs();
    }
  });

  els.abilities.addEventListener('change', (event) => {
    if (!event.target.matches('[data-score-slot]')) return;

    const ability = event.target.dataset.scoreSlot;
    const nextAssignment = Number(event.target.value);
    const previousAssignment = state.abilityAssignments[ability];
    const otherAbility = abilityNames.find((candidate) => candidate !== ability && state.abilityAssignments[candidate] === nextAssignment);

    if (otherAbility) {
      state.abilityAssignments[otherAbility] = previousAssignment;
    }
    state.abilityAssignments[ability] = nextAssignment;
    abilityNames.forEach((candidate) => {
      state.abilities[candidate] = state.rolledScores[state.abilityAssignments[candidate]];
    });
    renderAbilities();
    renderAllSheets();
    saveCharacterToStorage();
  });

  els.skillsList.addEventListener('change', syncStateFromInputs);
  els.skillsList.addEventListener('input', syncStateFromInputs);
  els.featsList.addEventListener('change', syncStateFromInputs);
  els.spellList.addEventListener('change', syncStateFromInputs);

  els.saveBtn.addEventListener('click', () => {
    syncStateFromInputs();
    saveCharacterToStorage();
  });

  els.newBtn.addEventListener('click', () => {
    if (window.confirm('Create a new character? The current character will be replaced.')) {
      createNewCharacter();
    }
  });

  els.rollStatsBtn.addEventListener('click', () => {
    state.abilityMode = 'rolled';
    state.rolledScores = abilityNames.map(() => rollAbilityScore());
    state.abilityAssignments = abilityNames.reduce((assignments, ability, index) => {
      assignments[ability] = index;
      return assignments;
    }, {});
    state.abilities = abilityNames.reduce((scores, ability, index) => {
      scores[ability] = state.rolledScores[index];
      return scores;
    }, {});
    renderAbilities();
    renderAllSheets();
    saveCharacterToStorage();
  });

  els.generatePlayerBtn.addEventListener('click', () => {
    document.querySelectorAll('.sheet-section').forEach((section) => section.classList.remove('active'));
    els.playerSheet.classList.add('active');
    renderPlayerSheet();
  });

  els.generateSpellBtn.addEventListener('click', () => {
    document.querySelectorAll('.sheet-section').forEach((section) => section.classList.remove('active'));
    els.spellSheet.classList.add('active');
    renderSpellSheet();
  });

  els.generateItemBtn.addEventListener('click', () => {
    document.querySelectorAll('.sheet-section').forEach((section) => section.classList.remove('active'));
    els.itemSheet.classList.add('active');
    renderItemSheet();
  });

  els.generateSketchBtn.addEventListener('click', () => {
    document.querySelectorAll('.sheet-section').forEach((section) => section.classList.remove('active'));
    els.sketchSheet.classList.add('active');
    renderSketchSheet();
  });

  els.exportBtn.addEventListener('click', exportCharacter);
  els.loadBtn.addEventListener('click', () => els.importCharacterInput.click());
  els.importCharacterInput.addEventListener('change', loadCharacterFromFile);

  els.printBtn.addEventListener('click', () => {
    window.print();
  });
}

function init() {
  state.skillRanks = {};
  populateSelects();
  renderAbilities();
  renderLanguages();
  renderSkills();
  renderFeats();
  renderSpells();
  bindEvents();
  const hasStoredCharacter = loadCharacterFromStorage();
  if (!hasStoredCharacter) {
    renderAllSheets();
  }
}

init();

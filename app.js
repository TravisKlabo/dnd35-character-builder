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

const spellsKnownTable = {
  bard: { 1: [4, 2], 2: [5, 2], 3: [6, 3], 4: [6, 3, 0], 5: [6, 4, 2], 6: [6, 4, 3], 7: [6, 4, 3, 0], 8: [6, 4, 4, 2], 9: [6, 4, 4, 3], 10: [6, 4, 4, 3, 0] },
  sorcerer: { 1: [4, 2], 2: [5, 2], 3: [5, 3], 4: [6, 3, 0], 5: [6, 4, 2], 6: [7, 4, 3], 7: [7, 5, 3, 1], 8: [8, 5, 4, 2], 9: [8, 5, 4, 3], 10: [9, 5, 4, 3, 1] }
};

const skillsCatalog = [
  'Appraise', 'Balance', 'Bluff', 'Climb', 'Concentration', 'Craft', 'Diplomacy', 'Disable Device', 'Escape Artist', 'Forgery', 'Handle Animal', 'Heal', 'Hide', 'Intimidate', 'Jump',
  'Knowledge (arcana)', 'Knowledge (architecture and engineering)', 'Knowledge (dungeoneering)', 'Knowledge (geography)', 'Knowledge (history)', 'Knowledge (local)', 'Knowledge (nature)', 'Knowledge (nobility and royalty)', 'Knowledge (planes)', 'Knowledge (religion)', 'Knowledge (psionics)',
  'Listen', 'Move Silently', 'Open Lock', 'Perform (act)', 'Perform (comedy)', 'Perform (dance)', 'Perform (keyboard instruments)', 'Perform (mime)', 'Perform (oratory)', 'Perform (percussion instruments)', 'Perform (sing)', 'Perform (string instruments)', 'Perform (wind instruments)', 'Ride', 'Search', 'Sense Motive', 'Sleight of Hand', 'Spellcraft', 'Spot', 'Survival', 'Swim', 'Use Magic Device'
];

const featCatalog = [
  { name: 'Power Attack', prereqs: { str: 13 } },
  { name: 'Cleave', prereqs: { str: 13, bab: 1, feats: ['Power Attack'] } },
  { name: 'Great Cleave', prereqs: { str: 13, bab: 4, feats: ['Power Attack', 'Cleave'] } },
  { name: 'Improved Initiative', prereqs: {} },
  { name: 'Weapon Focus', prereqs: { bab: 1 } },
  { name: 'Martial Weapon Proficiency', prereqs: {} },
  { name: 'Exotic Weapon Proficiency', prereqs: {} },
  { name: 'Armor Proficiency (Light)', prereqs: {} },
  { name: 'Armor Proficiency (Medium)', prereqs: {} },
  { name: 'Armor Proficiency (Heavy)', prereqs: {} },
  { name: 'Shield Proficiency', prereqs: {} },
  { name: 'Tower Shield Proficiency', prereqs: { feats: ['Shield Proficiency'] } },
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
  'No Weapon', 'Longsword', 'Shortsword', 'Greatsword', 'Rapier', 'Scimitar', 'Dagger', 'Quarterstaff',
  'Battleaxe', 'Greataxe', 'Warhammer', 'Mace', 'Spear', 'Shortbow', 'Longbow',
  'Light Crossbow', 'Heavy Crossbow', 'Sling', 'Handaxe', 'Javelin', 'Trident', 'Net', 'Whip',
  'Kukri', 'Kama', 'Sickle', 'Glaive', 'Halberd', 'Guisarme', 'Spiked Chain', 'Falchion',
  'Lance', 'Morningstar', 'Light Mace', 'Light Hammer', 'Shuriken', 'Repeating Crossbow',
  'Hand Crossbow', 'Sap', 'Nunchaku', 'Sai', 'Siangham', 'Dart'
];
const armorCatalog = [
  'No Armor', 'Padded Armor', 'Leather Armor', 'Studded Leather', 'Hide Armor', 'Chain Shirt',
  'Scale Mail', 'Chainmail', 'Breastplate', 'Splint Mail', 'Half-Plate', 'Full Plate',
  'Buckler', 'Light Wooden Shield', 'Heavy Wooden Shield', 'Light Steel Shield', 'Heavy Steel Shield',
  'Tower Shield', 'Mithral Chain Shirt', 'Mithral Breastplate', 'Mithral Full Plate'
];
const itemCatalog = [
  'No Item', 'Backpack', 'Bedroll', 'Flint and Steel', 'Rations (5 days)', 'Waterskin', 'Rope (50 ft.)',
  'Grappling Hook', 'Crowbar', 'Lantern', 'Oil (1 pint)', 'Torches (5)', 'Tent',
  'Healing Potion', 'Antitoxin', 'Healer\'s Kit', 'Thieves\' Tools', 'Holy Symbol',
  'Spell Component Pouch', 'Musical Instrument', 'Amulet of Natural Armor +1', 'Traveler\'s Cloak',
  '[Arms and Equipment Guide] Alchemical Silver', '[Arms and Equipment Guide] Adamantine Weapon',
  '[Arms and Equipment Guide] Cold Iron Weapon', '[Arms and Equipment Guide] Sunrod',
  '[Complete Adventurer] Tanglefoot Bag', '[Complete Adventurer] Thunderstone', '[Complete Adventurer] Smokestick',
  '[Complete Adventurer] Silk Rope', '[Complete Warrior] Masterwork Tool', '[Complete Warrior] Manacles',
  '[Magic Item Compendium] Bag of Holding', '[Magic Item Compendium] Handy Haversack',
  '[Magic Item Compendium] Cloak of Resistance +1', '[Magic Item Compendium] Boots of Elvenkind',
  '[Magic Item Compendium] Gloves of Dexterity +2', '[Magic Item Compendium] Belt of Giant Strength +2',
  '[Dungeon Master Guide] Wand of Cure Light Wounds', '[Dungeon Master Guide] Scroll of Identify',
  '[Dungeon Master Guide] Ring of Protection +1', '[Dungeon Master Guide] Headband of Intellect +2',
  '[Stormwrack] Watercraft, Rowboat', '[Stormwrack] Grappling Hook, Aquatic',
  '[Sandstorm] Desert Outfit', '[Frostburn] Cold-Weather Outfit', '[Lords of Madness] Goggles of Night',
  '[Dragonlance] Dragonlance', '[Dragonlance] Steel Coin Purse', '[Dragonlance] Gnomish Device',
  '[Dragonlance] Kender Hoopak', '[Dragonlance] Draconian Eggshell Armor'
];
const magicItemCatalog = [
  'Potion of Cure Light Wounds', 'Potion of Shield of Faith +2', 'Scroll of Identify', 'Scroll of Protection from Evil',
  'Wand of Cure Light Wounds', 'Wand of Magic Missile', 'Cloak of Resistance +1', 'Ring of Protection +1',
  'Amulet of Natural Armor +1', 'Belt of Giant Strength +2', 'Gloves of Dexterity +2', 'Headband of Intellect +2',
  'Boots of Elvenkind', 'Goggles of Night', 'Bag of Holding', 'Handy Haversack', 'Pearl of Power (1st)',
  'Dust of Disappearance', 'Rope of Climbing', 'Decanter of Endless Water', 'Dragonlance Relic', 'Krynn Moonstone'
];
const equipmentPrices = {
  'No Weapon': '0 gp', 'No Item': '0 gp', Longsword: '15 gp', Shortsword: '10 gp', Greatsword: '50 gp', Rapier: '20 gp', Scimitar: '15 gp', Dagger: '2 gp', Quarterstaff: '0 gp',
  Battleaxe: '10 gp', Greataxe: '20 gp', Warhammer: '12 gp', Mace: '5 gp', Spear: '2 gp', Shortbow: '30 gp', Longbow: '75 gp', 'Light Crossbow': '35 gp', 'Heavy Crossbow': '50 gp', Sling: '0 gp', Handaxe: '6 gp', Javelin: '1 gp', Trident: '15 gp', Net: '20 gp', Whip: '1 gp', Kukri: '8 gp', Kama: '2 gp', Sickle: '6 gp', Glaive: '8 gp', Halberd: '10 gp', Guisarme: '9 gp', 'Spiked Chain': '25 gp', Falchion: '75 gp', Lance: '10 gp', Morningstar: '8 gp', 'Light Mace': '5 gp', 'Light Hammer': '1 gp', Shuriken: '2 gp', 'Repeating Crossbow': '250 gp', 'Hand Crossbow': '100 gp', Sap: '1 gp', Nunchaku: '2 gp', Sai: '1 gp', Siangham: '2 gp', Dart: '5 cp',
  'No Armor': '0 gp', 'Padded Armor': '5 gp', 'Leather Armor': '10 gp', 'Studded Leather': '25 gp', 'Hide Armor': '15 gp', 'Chain Shirt': '100 gp', 'Scale Mail': '50 gp', Chainmail: '150 gp', Breastplate: '200 gp', 'Splint Mail': '200 gp', 'Half-Plate': '600 gp', 'Full Plate': '1,500 gp', Buckler: '15 gp', 'Light Wooden Shield': '3 gp', 'Heavy Wooden Shield': '7 gp', 'Light Steel Shield': '9 gp', 'Heavy Steel Shield': '20 gp', 'Tower Shield': '30 gp', 'Mithral Chain Shirt': '1,100 gp', 'Mithral Breastplate': '4,200 gp', 'Mithral Full Plate': '10,500 gp',
  Backpack: '2 gp', Bedroll: '1 sp', 'Flint and Steel': '1 gp', 'Rations (5 days)': '2.5 gp', Waterskin: '1 gp', 'Rope (50 ft.)': '1 gp', 'Grappling Hook': '1 gp', Crowbar: '2 gp', Lantern: '7 gp', 'Oil (1 pint)': '1 sp', 'Torches (5)': '5 cp', Tent: '10 gp', 'Healing Potion': '50 gp', Antitoxin: '50 gp', "Healer's Kit": '50 gp', "Thieves' Tools": '30 gp', 'Holy Symbol': '1 gp', 'Spell Component Pouch': '5 gp', 'Musical Instrument': '5 gp', 'Amulet of Natural Armor +1': '2,000 gp', "Traveler's Cloak": '5 gp',
  '[Arms and Equipment Guide] Alchemical Silver': '90 gp', '[Arms and Equipment Guide] Adamantine Weapon': '3,000 gp', '[Arms and Equipment Guide] Cold Iron Weapon': '2,000 gp', '[Arms and Equipment Guide] Sunrod': '2 gp', '[Complete Adventurer] Tanglefoot Bag': '50 gp', '[Complete Adventurer] Thunderstone': '30 gp', '[Complete Adventurer] Smokestick': '20 gp', '[Complete Adventurer] Silk Rope': '10 gp', '[Complete Warrior] Masterwork Tool': '50 gp', '[Complete Warrior] Manacles': '15 gp', '[Magic Item Compendium] Bag of Holding': '2,500 gp', '[Magic Item Compendium] Handy Haversack': '2,000 gp', '[Magic Item Compendium] Cloak of Resistance +1': '1,000 gp', '[Magic Item Compendium] Boots of Elvenkind': '2,500 gp', '[Magic Item Compendium] Gloves of Dexterity +2': '4,000 gp', '[Magic Item Compendium] Belt of Giant Strength +2': '4,000 gp', '[Dungeon Master Guide] Wand of Cure Light Wounds': '750 gp', '[Dungeon Master Guide] Scroll of Identify': '25 gp', '[Dungeon Master Guide] Ring of Protection +1': '2,000 gp', '[Dungeon Master Guide] Headband of Intellect +2': '4,000 gp', '[Stormwrack] Watercraft, Rowboat': '50 gp', '[Stormwrack] Grappling Hook, Aquatic': '1 gp', '[Sandstorm] Desert Outfit': '6 gp', '[Frostburn] Cold-Weather Outfit': '8 gp', '[Lords of Madness] Goggles of Night': '8,000 gp', '[Dragonlance] Dragonlance': '1,000 gp', '[Dragonlance] Steel Coin Purse': '5 gp', '[Dragonlance] Gnomish Device': '100 gp', '[Dragonlance] Kender Hoopak': '5 gp', '[Dragonlance] Draconian Eggshell Armor': '500 gp',
  'Potion of Cure Light Wounds': '50 gp', 'Potion of Shield of Faith +2': '300 gp', 'Scroll of Identify': '25 gp', 'Scroll of Protection from Evil': '25 gp', 'Wand of Cure Light Wounds': '750 gp', 'Wand of Magic Missile': '750 gp', 'Cloak of Resistance +1': '1,000 gp', 'Ring of Protection +1': '2,000 gp', 'Amulet of Natural Armor +1': '2,000 gp', 'Belt of Giant Strength +2': '4,000 gp', 'Gloves of Dexterity +2': '4,000 gp', 'Headband of Intellect +2': '4,000 gp', 'Boots of Elvenkind': '2,500 gp', 'Goggles of Night': '8,000 gp', 'Bag of Holding': '2,500 gp', 'Handy Haversack': '2,000 gp', 'Pearl of Power (1st)': '1,000 gp', 'Dust of Disappearance': '3,500 gp', 'Rope of Climbing': '3,000 gp', 'Decanter of Endless Water': '9,000 gp', 'Dragonlance Relic': 'varies', 'Krynn Moonstone': 'varies'
};
const equipmentWeights = {
  'No Weapon': '0 lb.', 'No Item': '0 lb.', Longsword: '4 lb.', Shortsword: '2 lb.', Greatsword: '8 lb.', Rapier: '2 lb.', Scimitar: '4 lb.', Dagger: '1 lb.', Quarterstaff: '4 lb.', Battleaxe: '6 lb.', Greataxe: '12 lb.', Warhammer: '5 lb.', Mace: '8 lb.', Spear: '6 lb.', Shortbow: '2 lb.', Longbow: '3 lb.', 'Light Crossbow': '4 lb.', 'Heavy Crossbow': '8 lb.', Sling: '0 lb.', Handaxe: '3 lb.', Javelin: '2 lb.', Trident: '4 lb.', Net: '6 lb.', Whip: '2 lb.', Kukri: '2 lb.', Kama: '2 lb.', Sickle: '2 lb.', Glaive: '10 lb.', Halberd: '12 lb.', Guisarme: '12 lb.', 'Spiked Chain': '10 lb.', Falchion: '8 lb.', Lance: '10 lb.', Morningstar: '6 lb.', 'Light Mace': '4 lb.', 'Light Hammer': '2 lb.', Shuriken: '1/2 lb.', 'Repeating Crossbow': '6 lb.', 'Hand Crossbow': '2 lb.', Sap: '2 lb.', Nunchaku: '2 lb.', Sai: '1 lb.', Siangham: '2 lb.', Dart: '1/2 lb.',
  'No Armor': '0 lb.', 'Padded Armor': '10 lb.', 'Leather Armor': '15 lb.', 'Studded Leather': '20 lb.', 'Hide Armor': '25 lb.', 'Chain Shirt': '25 lb.', 'Scale Mail': '30 lb.', Chainmail: '40 lb.', Breastplate: '30 lb.', 'Splint Mail': '45 lb.', 'Half-Plate': '50 lb.', 'Full Plate': '50 lb.', Buckler: '5 lb.', 'Light Wooden Shield': '5 lb.', 'Heavy Wooden Shield': '10 lb.', 'Light Steel Shield': '6 lb.', 'Heavy Steel Shield': '15 lb.', 'Tower Shield': '45 lb.', 'Mithral Chain Shirt': '25 lb.', 'Mithral Breastplate': '30 lb.', 'Mithral Full Plate': '50 lb.',
  Backpack: '2 lb.', Bedroll: '5 lb.', 'Flint and Steel': '0 lb.', 'Rations (5 days)': '5 lb.', Waterskin: '4 lb.', 'Rope (50 ft.)': '10 lb.', 'Grappling Hook': '4 lb.', Crowbar: '5 lb.', Lantern: '2 lb.', 'Oil (1 pint)': '1 lb.', 'Torches (5)': '5 lb.', Tent: '20 lb.', 'Healing Potion': '0 lb.', Antitoxin: '0 lb.', "Healer's Kit": '1 lb.', "Thieves' Tools": '1 lb.', 'Holy Symbol': '1 lb.', 'Spell Component Pouch': '2 lb.', 'Musical Instrument': '3 lb.', 'Amulet of Natural Armor +1': '0 lb.', "Traveler's Cloak": '2 lb.',
  '[Arms and Equipment Guide] Alchemical Silver': 'varies', '[Arms and Equipment Guide] Adamantine Weapon': 'varies', '[Arms and Equipment Guide] Cold Iron Weapon': 'varies', '[Arms and Equipment Guide] Sunrod': '1 lb.', '[Complete Adventurer] Tanglefoot Bag': '4 lb.', '[Complete Adventurer] Thunderstone': '1 lb.', '[Complete Adventurer] Smokestick': '1/2 lb.', '[Complete Adventurer] Silk Rope': '5 lb.', '[Complete Warrior] Masterwork Tool': '1 lb.', '[Complete Warrior] Manacles': '2 lb.', '[Magic Item Compendium] Bag of Holding': '15 lb.', '[Magic Item Compendium] Handy Haversack': '5 lb.', '[Magic Item Compendium] Cloak of Resistance +1': '1 lb.', '[Magic Item Compendium] Boots of Elvenkind': '1 lb.', '[Magic Item Compendium] Gloves of Dexterity +2': '0 lb.', '[Magic Item Compendium] Belt of Giant Strength +2': '1 lb.', '[Dungeon Master Guide] Wand of Cure Light Wounds': '0 lb.', '[Dungeon Master Guide] Scroll of Identify': '0 lb.', '[Dungeon Master Guide] Ring of Protection +1': '0 lb.', '[Dungeon Master Guide] Headband of Intellect +2': '1 lb.', '[Stormwrack] Watercraft, Rowboat': '100 lb.', '[Stormwrack] Grappling Hook, Aquatic': '4 lb.', '[Sandstorm] Desert Outfit': '3 lb.', '[Frostburn] Cold-Weather Outfit': '7 lb.', '[Lords of Madness] Goggles of Night': '0 lb.', '[Dragonlance] Dragonlance': '10 lb.', '[Dragonlance] Steel Coin Purse': '1 lb.', '[Dragonlance] Gnomish Device': 'varies', '[Dragonlance] Kender Hoopak': '2 lb.', '[Dragonlance] Draconian Eggshell Armor': '25 lb.',
  'Potion of Cure Light Wounds': '0 lb.', 'Potion of Shield of Faith +2': '0 lb.', 'Scroll of Identify': '0 lb.', 'Scroll of Protection from Evil': '0 lb.', 'Wand of Cure Light Wounds': '0 lb.', 'Wand of Magic Missile': '0 lb.', 'Cloak of Resistance +1': '1 lb.', 'Ring of Protection +1': '0 lb.', 'Belt of Giant Strength +2': '1 lb.', 'Gloves of Dexterity +2': '0 lb.', 'Headband of Intellect +2': '1 lb.', 'Boots of Elvenkind': '1 lb.', 'Goggles of Night': '0 lb.', 'Bag of Holding': '15 lb.', 'Handy Haversack': '5 lb.', 'Pearl of Power (1st)': '0 lb.', 'Dust of Disappearance': '0 lb.', 'Rope of Climbing': '3 lb.', 'Decanter of Endless Water': '2 lb.', 'Dragonlance Relic': 'varies', 'Krynn Moonstone': 'varies'
};

function getEquipmentPrice(item) {
  return equipmentPrices[item] || 'price varies';
}

function getEquipmentWeight(item) {
  return equipmentWeights[item] || 'weight varies';
}

function getWeightInPounds(weightLabel) {
  const value = String(weightLabel || '').match(/[\d.]+(?:\/\d+)?/);
  if (!value) return null;
  if (value[0].includes('/')) {
    const [numerator, denominator] = value[0].split('/').map(Number);
    return denominator ? numerator / denominator : null;
  }
  return Number(value[0]);
}

function getCarriedWeight() {
  const carriedItems = [
    ...(state.weaponInventory || []),
    ...(state.armorInventory || []),
    ...(state.magicInventory || []),
    state.item
  ].filter(Boolean);
  return carriedItems.reduce((result, item) => {
    const weight = getWeightInPounds(getEquipmentWeight(item));
    if (weight === null) result.unknown += 1;
    else result.total += weight;
    return result;
  }, { total: 0, unknown: 0 });
}

function getLoadStatus(carriedWeight = getCarriedWeight()) {
  const capacity = getCarryCapacity();
  const small = getRace().size === 'Small';
  const normalSpeed = small ? 20 : 30;
  const loadSpeed = small ? 15 : 20;
  let level = 'Light load';
  let effects = 'No load penalties. Normal movement and running apply.';
  let movement = `${normalSpeed} ft.`;

  if (carriedWeight.total > capacity.heavy) {
    level = 'Over heavy load';
    effects = `Cannot move normally. A character can drag up to ${capacity.drag} lb.; load above that exceeds the listed carrying limits.`;
    movement = 'No normal movement';
  } else if (carriedWeight.total > capacity.medium) {
    level = 'Heavy load';
    effects = `Speed becomes ${loadSpeed} ft.; maximum Dexterity bonus +1; additional armor check penalty -6; running is limited to 3 times speed.`;
    movement = `${loadSpeed} ft.`;
  } else if (carriedWeight.total > capacity.light) {
    level = 'Medium load';
    effects = `Speed becomes ${loadSpeed} ft.; maximum Dexterity bonus +3; additional armor check penalty -3; running is limited to 4 times speed.`;
    movement = `${loadSpeed} ft.`;
  }

  return { level, effects, movement, capacity };
}

function formatEquipmentOption(item) {
  return `${item} - ${getEquipmentPrice(item)} - ${getEquipmentWeight(item)}`;
}
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
  characterId: (globalThis.crypto?.randomUUID?.() || `character-${Date.now()}-${Math.random().toString(36).slice(2)}`),
  charName: 'Unnamed Hero',
  playerName: 'Player',
  raceId: 'human',
  classId: 'fighter',
  classLevels: [{ classId: 'fighter', levels: 1 }],
  characterCreated: false,
  finalizedLevel: 0,
  levelUpMode: false,
  levelUpStartingClasses: null,
  levelUpPending: false,
  lastLevelSnapshot: null,
  hpRollPending: false,
  pendingLevelClass: 'fighter',
  level: 1,
  alignment: 'Lawful Good',
  gender: 'unspecified',
  customPortrait: '',
  abilityMode: 'rolled',
  pointBuyBudget: 32,
  abilityIncreases: [],
  hpRolls: [],
  lastHpRollResult: null,
  abilities: { ...defaultScores },
  rolledScores: null,
  abilityAssignments: {},
  selectedSkills: [],
  selectedFeats: [],
  selectedSpells: [],
  skillRanks: {},
  weapon: 'Longsword',
  equippedWeapons: ['Longsword'],
  armor: 'Chain Shirt',
  weaponEnhancement: 0,
  weaponAbility: 'none',
  armorEnhancement: 0,
  armorAbility: 'none',
  item: 'Backpack',
  weaponInventory: ['Longsword'],
  armorInventory: ['Chain Shirt'],
  magicInventory: [],
  selectedLanguages: [],
  deeds: [],
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
  classDisplay: document.querySelector('#classDisplay'),
  classLevelsList: document.querySelector('#classLevelsList'),
  classLevelsPanel: document.querySelector('#classLevelsPanel'),
  addClassLevelBtn: document.querySelector('#addClassLevelBtn'),
  rollHpBtn: document.querySelector('#rollHpBtn'),
  advancementClassSelect: document.querySelector('#advancementClassSelect'),
  undoLevelBtn: document.querySelector('#undoLevelBtn'),
  hpRollResult: document.querySelector('#hpRollResult'),
  levelInput: document.querySelector('#levelInput'),
  levelDisplay: document.querySelector('#levelDisplay'),
  alignmentSelect: document.querySelector('#alignmentSelect'),
  deitySelect: document.querySelector('#deitySelect'),
  genderSelect: document.querySelector('#genderSelect'),
  portraitInput: document.querySelector('#portraitInput'),
  clearPortraitBtn: document.querySelector('#clearPortraitBtn'),
  abilityModeSelect: document.querySelector('#abilityModeSelect'),
  pointBuyBudgetSelect: document.querySelector('#pointBuyBudgetSelect'),
  pointBuyBudgetLabel: document.querySelector('#pointBuyBudgetLabel'),
  abilityMethodInfo: document.querySelector('#abilityMethodInfo'),
  abilityScoresPanel: document.querySelector('#abilityScoresPanel'),
  abilityGenerationControls: document.querySelector('#abilityGenerationControls'),
  abilityIncreasePanel: document.querySelector('#abilityIncreasePanel'),
  abilityIncreaseSelect: document.querySelector('#abilityIncreaseSelect'),
  applyAbilityIncreaseBtn: document.querySelector('#applyAbilityIncreaseBtn'),
  abilityIncreaseInfo: document.querySelector('#abilityIncreaseInfo'),
  settingSelect: document.querySelector('#settingSelect'),
  krynnPathSelect: document.querySelector('#krynnPathSelect'),
  moonSelect: document.querySelector('#moonSelect'),
  prestigeClassSelect: document.querySelector('#prestigeClassSelect'),
  abilities: document.querySelector('#abilities'),
  languagesList: document.querySelector('#languagesList'),
  deedsList: document.querySelector('#deedsList'),
  addDeedBtn: document.querySelector('#addDeedBtn'),
  skillsHeading: document.querySelector('#skillsHeading'),
  skillsList: document.querySelector('#skillsList'),
  featsHeading: document.querySelector('#featsHeading'),
  featsList: document.querySelector('#featsList'),
  spellsHeading: document.querySelector('#spellsHeading'),
  spellCapacityInfo: document.querySelector('#spellCapacityInfo'),
  spellList: document.querySelector('#spellList'),
  completeCharacterBtn: document.querySelector('#completeCharacterBtn'),
  levelUpBtn: document.querySelector('#levelUpBtn'),
  undoLastLevelBtn: document.querySelector('#undoLastLevelBtn'),
  completionStatus: document.querySelector('#completionStatus'),
  weaponSelect: document.querySelector('#weaponSelect'),
  armorSelect: document.querySelector('#armorSelect'),
  weaponEnhancementSelect: document.querySelector('#weaponEnhancementSelect'),
  weaponAbilitySelect: document.querySelector('#weaponAbilitySelect'),
  armorEnhancementSelect: document.querySelector('#armorEnhancementSelect'),
  armorAbilitySelect: document.querySelector('#armorAbilitySelect'),
  weaponSizeSelect: document.querySelector('#weaponSizeSelect'),
  weaponRulesTrigger: document.querySelector('#weaponRulesTrigger'),
  armorRulesTrigger: document.querySelector('#armorRulesTrigger'),
  itemSelect: document.querySelector('#itemSelect'),
  addWeaponBtn: document.querySelector('#addWeaponBtn'),
  addArmorBtn: document.querySelector('#addArmorBtn'),
  magicItemSelect: document.querySelector('#magicItemSelect'),
  addMagicItemBtn: document.querySelector('#addMagicItemBtn'),
  equipmentInventory: document.querySelector('#equipmentInventory'),
  summaryCard: document.querySelector('#summaryCard'),
  playerSheet: document.querySelector('#playerSheet'),
  spellSheet: document.querySelector('#spellSheet'),
  sketchSheet: document.querySelector('#sketchSheet'),
  deedsSheet: document.querySelector('#deedsSheet'),
  rollStatsBtn: document.querySelector('#rollStatsBtn'),
  generatePlayerBtn: document.querySelector('#generatePlayerBtn'),
  generateSpellBtn: document.querySelector('#generateSpellBtn'),
  generateSketchBtn: document.querySelector('#generateSketchBtn'),
  choosePortraitBtn: document.querySelector('#choosePortraitBtn'),
  saveBtn: document.querySelector('#saveBtn'),
  newBtn: document.querySelector('#newBtn'),
  exportBtn: document.querySelector('#exportBtn'),
  loadBtn: document.querySelector('#loadBtn'),
  importCharacterInput: document.querySelector('#importCharacterInput'),
  printBtn: document.querySelector('#printBtn')
  ,rulesPopover: document.querySelector('#rulesPopover'),
  printPreviewModal: document.querySelector('#printPreviewModal'),
  printPreviewContent: document.querySelector('#printPreviewContent'),
  closePrintPreviewBtn: document.querySelector('#closePrintPreviewBtn'),
  printPreviewPrintBtn: document.querySelector('#printPreviewPrintBtn')
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

function getClassLevels() {
  const entries = Array.isArray(state.classLevels) && state.classLevels.length
    ? state.classLevels
    : [{ classId: state.classId, levels: state.level }];
  return entries
    .map((entry) => ({ classId: entry.classId, levels: Math.max(0, Number(entry.levels) || 0) }))
    .filter((entry) => entry.levels > 0);
}

function getClassLevelEntries() {
  return getClassLevels().map((entry) => ({
    ...entry,
    classData: classCatalog.find((candidate) => candidate.id === entry.classId) || classCatalog[0]
  }));
}

function getTotalClassLevels() {
  return getClassLevels().reduce((total, entry) => total + entry.levels, 0);
}

function getClassBreakdownLabel() {
  const totals = [];
  getClassLevelEntries().forEach((entry) => {
    const existing = totals.find((item) => item.classId === entry.classId);
    if (existing) existing.levels += entry.levels;
    else totals.push({ classId: entry.classId, name: entry.classData.name, levels: entry.levels });
  });
  return totals.map((entry) => `${entry.name} ${entry.levels} ${entry.levels === 1 ? 'rank' : 'ranks'}`).join(' | ');
}

function captureLevelSnapshot() {
  return {
    classLevels: getClassLevels().map((entry) => ({ ...entry })),
    hpRolls: (state.hpRolls || []).map((entry) => ({ ...entry })),
    abilityIncreases: (state.abilityIncreases || []).map((entry) => ({ ...entry })),
    selectedSkills: [...state.selectedSkills],
    selectedFeats: [...state.selectedFeats],
    selectedSpells: [...state.selectedSpells],
    finalizedLevel: state.finalizedLevel
  };
}

function restoreLevelSnapshot(snapshot) {
  state.classLevels = snapshot.classLevels.map((entry) => ({ ...entry }));
  state.hpRolls = snapshot.hpRolls.map((entry) => ({ ...entry }));
  state.abilityIncreases = snapshot.abilityIncreases.map((entry) => ({ ...entry }));
  state.selectedSkills = [...snapshot.selectedSkills];
  state.selectedFeats = [...snapshot.selectedFeats];
  state.selectedSpells = [...snapshot.selectedSpells];
  state.finalizedLevel = snapshot.finalizedLevel;
  state.levelUpMode = false;
  state.levelUpPending = false;
  state.hpRollPending = false;
  state.lastLevelSnapshot = null;
  syncPrimaryClassAndLevel();
  renderClassLevels();
  renderAbilities();
  renderSkills();
  renderFeats();
  renderSpells();
  renderAllSheets();
  saveCharacterToStorage();
}

function updateCreationLockState() {
  const locked = state.characterCreated;
  updateCreationButtonLabel();
  const lockedFields = [
    els.charName, els.playerName, els.raceSelect, els.alignmentSelect, els.settingSelect,
    els.krynnPathSelect, els.moonSelect, els.prestigeClassSelect, els.abilityModeSelect, els.pointBuyBudgetSelect
  ];
  lockedFields.forEach((field) => {
    if (field) field.disabled = locked;
  });
  els.classSelect.hidden = locked;
  els.classDisplay.hidden = !locked;
  els.classDisplay.textContent = getClassBreakdownLabel();
  els.levelInput.hidden = locked;
  els.levelDisplay.hidden = !locked;
  els.levelDisplay.textContent = `Level ${state.level}`;
  els.rollStatsBtn.disabled = locked;
  els.abilityGenerationControls.hidden = locked;
  els.levelUpBtn.hidden = !locked;
  els.levelUpBtn.textContent = state.levelUpMode ? 'Finalize' : 'Level Up Character';
  els.undoLastLevelBtn.hidden = !locked || state.levelUpMode || !state.lastLevelSnapshot;
  els.completeCharacterBtn.hidden = locked;
}

function syncPrimaryClassAndLevel() {
  const entries = getClassLevels();
  state.classId = entries[0]?.classId || 'fighter';
  state.level = Math.max(1, getTotalClassLevels());
  updateCreationButtonLabel();
}

function renderClassLevels() {
  syncPrimaryClassAndLevel();
  els.classLevelsPanel.hidden = !state.levelUpMode;
  updateCreationLockState();
  const classOptions = classCatalog.map((entry) => `<option value="${entry.id}">${entry.name}</option>`).join('');
  els.advancementClassSelect.innerHTML = classOptions;
  els.advancementClassSelect.value = state.pendingLevelClass || state.classId;
  els.undoLevelBtn.disabled = !state.levelUpPending;
  els.addClassLevelBtn.disabled = state.levelUpPending;
  els.rollHpBtn.disabled = !state.hpRollPending;
  const latestHpRoll = state.lastHpRollResult || state.hpRolls?.[state.hpRolls.length - 1];
  const pendingClass = classCatalog.find((entry) => entry.id === (state.pendingLevelClass || state.classId)) || classCatalog[0];
  els.hpRollResult.textContent = state.hpRollPending
    ? `Pending HP roll: ${pendingClass.name} uses d${pendingClass.hitDie}. Click Roll HP to roll this die.`
    : latestHpRoll
      ? `HP roll: d${latestHpRoll.maximum} = ${latestHpRoll.roll}. Constitution modifier: ${getAbilityModifiers().con >= 0 ? '+' : ''}${getAbilityModifiers().con}. HP gained: ${Math.max(1, Number(latestHpRoll.roll) + getAbilityModifiers().con)}.`
      : '';
  els.classLevelsList.innerHTML = `<p class="language-empty">Current levels: ${getClassBreakdownLabel()}${state.levelUpPending ? ' · One level pending' : ''}</p>`;
  renderAbilityIncreaseControl();
  if (els.skillsList && els.featsList && els.spellList) {
    renderSkills();
    renderFeats();
    renderSpells();
  }
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

  if (skillName.startsWith('Knowledge (')) return 'int';
  if (skillName.startsWith('Perform (')) return 'cha';
  return map[skillName] || 'int';
}

function getSkillTotal(skillName) {
  const ability = getSkillAbility(skillName);
  const mod = getAbilityModifiers()[ability] || 0;
  const rank = Number(state.skillRanks[skillName] || 0);
  const isClassSkill = getAllClassSkills().includes(skillName);
  return mod + rank;
}

function getAllClassSkills() {
  const skills = getClassLevelEntries().flatMap((entry) => {
    const classSkills = [...(entry.classData.skills || [])];
    if (entry.classId === 'bard') {
      classSkills.push(...skillsCatalog.filter((skill) => skill.startsWith('Perform (')));
      classSkills.push('Knowledge (arcana)', 'Knowledge (history)', 'Knowledge (local)', 'Knowledge (nobility and royalty)');
    }
    if (entry.classId === 'cleric') classSkills.push('Knowledge (religion)', 'Knowledge (planes)', 'Knowledge (history)');
    if (entry.classId === 'druid') classSkills.push('Knowledge (nature)', 'Knowledge (geography)');
    if (entry.classId === 'ranger') classSkills.push('Knowledge (nature)', 'Knowledge (geography)', 'Knowledge (dungeoneering)');
    if (entry.classId === 'rogue') classSkills.push('Knowledge (local)', 'Knowledge (architecture and engineering)', 'Knowledge (dungeoneering)');
    if (entry.classId === 'sorcerer' || entry.classId === 'wizard') classSkills.push('Knowledge (arcana)', 'Knowledge (dungeoneering)', 'Knowledge (planes)', 'Knowledge (history)');
    return classSkills;
  });
  return [...new Set(skills)];
}

function getLevelBab() {
  return getClassLevelEntries().reduce((total, entry) => {
    const progression = entry.classData.bab === 'fast' ? entry.levels : entry.classData.bab === 'medium' ? entry.levels * 0.75 : entry.levels * 0.5;
    return total + progression;
  }, 0) | 0;
}

function getLevelSave(baseName) {
  const mods = getAbilityModifiers();
  const ability = baseName === 'fort' ? mods.con : baseName === 'ref' ? mods.dex : mods.wis;
  const saveTotal = getClassLevelEntries().reduce((total, entry) => {
    const good = entry.classData.saves[baseName] === 'good';
    return total + (good ? 2 + Math.floor(entry.levels / 2) : Math.floor(entry.levels / 3));
  }, 0);
  return saveTotal + ability;
}

function getSpellSlotSummary() {
  const selectedClass = getClass();
  if (!selectedClass.spellcaster) {
    return 'No spellcasting progression';
  }

  const table = (spellSlotsTable[Math.min(state.level, 20)] || [2]).slice(0, getMaxSpellLevel());
  const summary = table.map((slots, index) => `${index + 1}st: ${slots} slots`).join(' | ');
  return `Caster level ${state.level} — ${summary}`;
}

function getFeatSlots() {
  const generalSlots = 1 + Math.floor(state.level / 3);
  const bonusSlots = getClassLevels().filter((entry) => entry.classId === 'fighter').reduce((total, entry) => total + 1 + Math.floor(entry.levels / 2), 0);
  const humanBonus = state.raceId === 'human' ? 1 : 0;
  return generalSlots + bonusSlots + humanBonus;
}

function getSkillPointsPerLevel() {
  const firstClass = getClassLevelEntries()[0]?.classData || getClass();
  return Math.max(1, firstClass.skillPoints + getAbilityModifiers().int + (state.raceId === 'human' ? 1 : 0));
}

function getAvailableSkillPoints() {
  let points = 0;
  let levelNumber = 0;
  getClassLevelEntries().forEach((entry) => {
    for (let classLevel = 0; classLevel < entry.levels; classLevel += 1) {
      const perLevel = Math.max(1, entry.classData.skillPoints + getAbilityModifiers().int + (state.raceId === 'human' ? 1 : 0));
      points += perLevel * (levelNumber === 0 ? 4 : 1);
      levelNumber += 1;
    }
  });
  return points;
}

function getSpentSkillPoints() {
  return Object.entries(state.skillRanks).reduce((total, [skill, value]) => {
    const ranks = Number(value || 0);
    return total + (getAllClassSkills().includes(skill) ? ranks : ranks * 2);
  }, 0);
}

function getMaxSpellLevel() {
  const selectedClass = getClass();
  if (!selectedClass.spellcaster) return -1;
  const progression = {
    bard: [0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6],
    cleric: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9],
    druid: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9],
    sorcerer: [0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9],
    wizard: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9],
    paladin: [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
    ranger: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
  }[selectedClass.id];
  return progression?.[Math.min(state.level, progression.length - 1)] ?? -1;
}

function getSpellSelectionCapacity() {
  const selectedClass = getClass();
  const maxSpellLevel = getMaxSpellLevel();
  if (!selectedClass.spellcaster || maxSpellLevel < 1) return 0;
  const knownTable = spellsKnownTable[selectedClass.id]?.[Math.min(state.level, 10)];
  if (knownTable) return knownTable.reduce((total, known) => total + known, 0);
  return (spellSlotsTable[Math.min(state.level, 20)] || []).slice(0, maxSpellLevel).reduce((total, slots) => total + slots, 0);
}

function getClassFeatures() {
  return getClassLevelEntries().flatMap((entry) => {
    const progression = classFeatureProgression[entry.classData.id] || {};
    const unlocked = Object.entries(progression)
      .filter(([level]) => Number(level) <= entry.levels)
      .map(([level, feature]) => `${entry.classData.name} ${level}: ${feature}`);
    return [`${entry.classData.name}: ${entry.classData.features.join(', ')}`, ...unlocked];
  });
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
    const isClassSkill = getAllClassSkills().includes(skill);
    const maxRank = isClassSkill ? maxSkillRank : Math.floor(maxSkillRank / 2);
    if (Number(rank) > maxRank) {
      warnings.push(`${skill} cannot exceed ${maxRank} ranks at level ${state.level}${isClassSkill ? '' : ' as a cross-class skill'}.`);
    }
  });

  const featPrereqs = featCatalog.filter((feat) => selectedFeatNames.includes(feat.name));
  featPrereqs.forEach((feat) => {
    const prereqs = feat.prereqs || {};
    abilityNames.forEach((ability) => {
      const adjustedScore = withRaceBonus(ability, getRace());
      if (prereqs[ability] && adjustedScore < prereqs[ability]) {
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

  if (!isWeaponProficient(state.weapon)) {
    warnings.push(`${state.weapon} is not a proficient weapon for this character; attacks take the standard nonproficiency penalty.`);
  }
  if (!isArmorProficient(state.armor)) {
    warnings.push(`${state.armor} is not proficient for this character; armor or shield penalties apply.`);
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
  const hp = getHitPointProgression().total;
  const bab = getLevelBab();
  const initiative = mods.dex;
  const fort = getLevelSave('fort');
  const ref = getLevelSave('ref');
  const will = getLevelSave('will');
  const ac = getArmorClassDetails().ac;

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
  return getArmorProfile(state.armor).armorBonus + Number(state.armorEnhancement || 0);
}

function getArmorProfile(armor) {
  const profiles = {
    'No Armor': { category: 'none', armorBonus: 0, maxDex: Infinity, checkPenalty: 0, spellFailure: 0 },
    'Padded Armor': { category: 'light', armorBonus: 1, maxDex: 8, checkPenalty: -0, spellFailure: 5 },
    'Leather Armor': { category: 'light', armorBonus: 2, maxDex: 6, checkPenalty: -0, spellFailure: 10 },
    'Studded Leather': { category: 'light', armorBonus: 3, maxDex: 5, checkPenalty: -1, spellFailure: 15 },
    'Chain Shirt': { category: 'light', armorBonus: 4, maxDex: 4, checkPenalty: -2, spellFailure: 20 },
    'Hide Armor': { category: 'medium', armorBonus: 3, maxDex: 4, checkPenalty: -3, spellFailure: 20 },
    'Scale Mail': { category: 'medium', armorBonus: 4, maxDex: 3, checkPenalty: -4, spellFailure: 25 },
    Chainmail: { category: 'medium', armorBonus: 5, maxDex: 2, checkPenalty: -5, spellFailure: 30 },
    Breastplate: { category: 'medium', armorBonus: 5, maxDex: 3, checkPenalty: -4, spellFailure: 25 },
    'Splint Mail': { category: 'heavy', armorBonus: 6, maxDex: 0, checkPenalty: -7, spellFailure: 40 },
    'Half-Plate': { category: 'heavy', armorBonus: 7, maxDex: 0, checkPenalty: -7, spellFailure: 40 },
    'Full Plate': { category: 'heavy', armorBonus: 8, maxDex: 1, checkPenalty: -6, spellFailure: 35 },
    Buckler: { category: 'shield', armorBonus: 1, maxDex: Infinity, checkPenalty: -1, spellFailure: 5 },
    'Light Wooden Shield': { category: 'shield', armorBonus: 1, maxDex: Infinity, checkPenalty: -1, spellFailure: 5 },
    'Heavy Wooden Shield': { category: 'shield', armorBonus: 2, maxDex: Infinity, checkPenalty: -2, spellFailure: 15 },
    'Light Steel Shield': { category: 'shield', armorBonus: 1, maxDex: Infinity, checkPenalty: -1, spellFailure: 5 },
    'Heavy Steel Shield': { category: 'shield', armorBonus: 2, maxDex: Infinity, checkPenalty: -2, spellFailure: 15 },
    'Tower Shield': { category: 'shield', armorBonus: 4, maxDex: Infinity, checkPenalty: -10, spellFailure: 50 },
    'Mithral Chain Shirt': { category: 'light', armorBonus: 4, maxDex: 6, checkPenalty: 0, spellFailure: 10 },
    'Mithral Breastplate': { category: 'light', armorBonus: 5, maxDex: 5, checkPenalty: -1, spellFailure: 15 },
    'Mithral Full Plate': { category: 'medium', armorBonus: 8, maxDex: 3, checkPenalty: -3, spellFailure: 25 }
  };
  return profiles[armor] || profiles['No Armor'];
}

function getArmorClassDetails() {
  const armor = getArmorProfile(state.armor);
  const shield = armor.category === 'shield' ? armor : getArmorProfile('No Armor');
  const dexterity = getAbilityModifiers().dex;
  const load = getLoadStatus();
  const loadMaxDex = load.level === 'Medium load' ? 3 : load.level === 'Heavy load' || load.level === 'Over heavy load' ? 1 : Infinity;
  const maxDex = Math.min(armor.maxDex, loadMaxDex);
  const cappedDexterity = Math.min(dexterity, maxDex);
  const classIds = getClassLevelEntries().map((entry) => entry.classId);
  const arcaneCaster = classIds.some((classId) => ['bard', 'sorcerer', 'wizard'].includes(classId));
  const unarmoredMonk = classIds.includes('monk') && state.armor === 'No Armor';
  const dodgeBonus = state.selectedFeats.includes('Dodge') ? 1 : 0;
  const monkBonus = unarmoredMonk ? getAbilityModifiers().wis : 0;
  const nonproficient = !isArmorProficient(state.armor);
  const bardLightArmorException = classIds.includes('bard') && armor.category === 'light';
  const spellFailure = arcaneCaster && !bardLightArmorException && armor.category !== 'none'
    ? armor.spellFailure + shield.spellFailure
    : 0;
  const armorBonus = getArmorBonus();
  const shieldBonus = state.armor === 'No Armor' || armor.category !== 'shield' ? 0 : armorBonus;
  const totalArmorBonus = state.armor === 'No Armor' || armor.category === 'shield' ? shieldBonus : armorBonus;
  const ac = 10 + cappedDexterity + totalArmorBonus + dodgeBonus + monkBonus;
  const effects = [];
  if (nonproficient) effects.push('not proficient: armor check penalties apply to attacks and Strength/Dexterity-based checks');
  if (load.level !== 'Light load') effects.push(`load reduces movement and caps Dexterity at +${loadMaxDex}`);
  if (spellFailure) effects.push(`${spellFailure}% arcane spell failure`);
  if (armor.category === 'shield') effects.push('shield equipped as armor choice; armor body slot is unarmored');
  if (monkBonus) effects.push(`Monk AC bonus +${monkBonus} from Wisdom`);
  return { ac, category: armor.category, armorBonus: totalArmorBonus, dexterity, cappedDexterity, maxDex, checkPenalty: armor.checkPenalty + (load.level === 'Medium load' ? -3 : load.level === 'Heavy load' || load.level === 'Over heavy load' ? -6 : 0), spellFailure, dodgeBonus, monkBonus, effects, proficient: !nonproficient };
}

function getEnhancedWeaponName() {
  const bonus = Number(state.weaponEnhancement || 0);
  const ability = state.weaponAbility !== 'none' ? ` ${state.weaponAbility}` : '';
  return `${bonus ? `+${bonus} ` : ''}${state.weapon}${ability}`;
}

function isRangedWeapon(weapon) {
  return ['Shortbow', 'Longbow', 'Light Crossbow', 'Heavy Crossbow', 'Sling', 'Repeating Crossbow', 'Hand Crossbow', 'Dart', 'Javelin', 'Trident', 'Net'].includes(weapon);
}

function getEquippedWeapons() {
  const equipped = Array.isArray(state.equippedWeapons) ? state.equippedWeapons : [state.weapon];
  return [...new Set(equipped.filter((weapon) => weapon && weapon !== 'No Weapon'))];
}

function getEquippedWeaponRole(weapon) {
  if (isRangedWeapon(weapon)) return 'main';
  const meleeWeapons = getEquippedWeapons().filter((entry) => !isRangedWeapon(entry));
  return meleeWeapons.indexOf(weapon) === 1 ? 'offhand' : 'main';
}

function toggleEquippedWeapon(weapon) {
  const equipped = getEquippedWeapons();
  if (equipped.includes(weapon)) {
    state.equippedWeapons = equipped.filter((entry) => entry !== weapon);
  } else if (isRangedWeapon(weapon)) {
    state.equippedWeapons = [...equipped.filter((entry) => !isRangedWeapon(entry)), weapon];
  } else {
    const meleeWeapons = equipped.filter((entry) => !isRangedWeapon(entry));
    if (meleeWeapons.length >= 2) {
      window.alert('You can equip up to two melee weapons and one bow or other ranged weapon.');
      return false;
    }
    state.equippedWeapons = [...equipped, weapon];
  }
  state.equippedWeapons = getEquippedWeapons().sort((left, right) => Number(isRangedWeapon(left)) - Number(isRangedWeapon(right)));
  const nextPrimary = getEquippedWeapons()[0] || 'No Weapon';
  state.weapon = nextPrimary;
  return true;
}

function getEnhancedArmorName() {
  const bonus = Number(state.armorEnhancement || 0);
  const ability = state.armorAbility !== 'none' ? ` ${state.armorAbility}` : '';
  return `${bonus ? `+${bonus} ` : ''}${state.armor}${ability}`;
}

function getWeaponAbilityDescription(ability) {
  return {
    flaming: 'adds 1d6 fire damage', frost: 'adds 1d6 cold damage', shock: 'adds 1d6 electricity damage',
    keen: 'improves the weapon threat range', holy: 'deals extra damage to evil foes', bane: 'deals extra damage to its chosen foe type'
  }[ability] || 'special weapon ability';
}

function getArmorAbilityDescription(ability) {
  return {
    fortification: 'offers a chance to negate critical hits and sneak attacks', glamered: 'can change its visible appearance',
    shadow: 'improves Hide checks', slick: 'improves Escape Artist checks'
  }[ability] || 'special armor ability';
}

function getMagicItemDescription(item) {
  const descriptions = {
    'Potion of Cure Light Wounds': 'Consumable potion that restores a small amount of hit points.',
    'Scroll of Identify': 'Single-use spell scroll for identifying magic items.',
    'Wand of Cure Light Wounds': 'Charged item that casts cure light wounds.',
    'Cloak of Resistance +1': 'Grants a +1 resistance bonus on saving throws.',
    'Ring of Protection +1': 'Grants a +1 deflection bonus to AC.',
    'Belt of Giant Strength +2': 'Grants a +2 enhancement bonus to Strength.',
    'Gloves of Dexterity +2': 'Grants a +2 enhancement bonus to Dexterity.',
    'Headband of Intellect +2': 'Grants a +2 enhancement bonus to Intelligence.',
    'Boots of Elvenkind': 'Grants a bonus on Move Silently checks.',
    'Goggles of Night': 'Grants darkvision to a creature that lacks it.',
    'Bag of Holding': 'Stores more equipment than its physical size suggests.',
    'Handy Haversack': 'Provides organized extradimensional storage with quick access.',
    'Pearl of Power (1st)': 'Allows a spellcaster to recall one prepared 1st-level spell.',
    'Rope of Climbing': 'Magic rope that assists with climbing and securing itself.',
    'Dragonlance Relic': 'Dragonlance setting relic; exact powers depend on the campaign.',
    'Krynn Moonstone': 'Dragonlance setting focus associated with lunar magic.'
  };
  return descriptions[item] || 'Magic item; consult the item rules summary for its campaign-specific effects.';
}

function getWeaponStats(weaponName = state.weapon, role = 'main') {
  const { mods } = deriver();
  const weapon = weaponName || 'Longsword';
  const attackBonus = mods.str + getLevelBab();

  const damage = (die, bonus) => `${die}${bonus >= 0 ? '+' : ''}${bonus}`;
  const finesseAttack = mods.dex + getLevelBab();
  const baseDamageDice = {
    'No Weapon': '1d3',
    Longsword: '1d8', Shortsword: '1d6', Greatsword: '2d6', Rapier: '1d6', Scimitar: '1d6',
    Dagger: '1d4', Quarterstaff: '1d6', Battleaxe: '1d8', Greataxe: '1d12', Warhammer: '1d8',
    Mace: '1d8', Spear: '1d8', Shortbow: '1d6', Longbow: '1d8', 'Light Crossbow': '1d8',
    'Heavy Crossbow': '1d10', Sling: '1d4', Handaxe: '1d6', Javelin: '1d6', Trident: '1d8', Net: '1d4',
    Whip: '1d3', Kukri: '1d4', Kama: '1d6', Sickle: '1d6', Glaive: '1d10', Halberd: '1d10',
    Guisarme: '2d4', 'Spiked Chain': '2d4', Falchion: '2d4', Lance: '1d8', Morningstar: '1d8',
    'Light Mace': '1d6', 'Light Hammer': '1d4', Shuriken: '1d2', 'Repeating Crossbow': '1d8',
    'Hand Crossbow': '1d4', Sap: '1d6', Nunchaku: '1d6', Sai: '1d4', Siangham: '1d6', Dart: '1d4'
  };
  const map = {
    'No Weapon': { attack: attackBonus, damage: damage('1d3', mods.str), crit: '×2', range: '5 ft.' },
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
    Sling: { attack: finesseAttack, damage: damage('1d4', mods.str), crit: '×2', range: '50 ft.' },
    Handaxe: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×3', range: '10 ft.' },
    Javelin: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '30 ft.' },
    Trident: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×2', range: '20 ft.' },
    Net: { attack: finesseAttack, damage: '—', crit: '—', range: '10 ft.' },
    Whip: { attack: finesseAttack, damage: damage('1d3', mods.str), crit: '×2', range: '15 ft.' },
    Kukri: { attack: finesseAttack, damage: damage('1d4', mods.str), crit: '18-20/x2', range: '5 ft.' },
    Kama: { attack: finesseAttack, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    Sickle: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    Glaive: { attack: attackBonus, damage: damage('1d10', mods.str), crit: '×3', range: '10 ft.' },
    Halberd: { attack: attackBonus, damage: damage('1d10', mods.str), crit: '×3', range: '10 ft.' },
    Guisarme: { attack: attackBonus, damage: damage('2d4', mods.str), crit: '×3', range: '10 ft.' },
    'Spiked Chain': { attack: attackBonus, damage: damage('2d4', mods.str), crit: '×2', range: '10 ft.' },
    Falchion: { attack: attackBonus, damage: damage('2d4', mods.str), crit: '18-20/x2', range: '5 ft.' },
    Lance: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×3', range: '10 ft.' },
    Morningstar: { attack: attackBonus, damage: damage('1d8', mods.str), crit: '×2', range: '5 ft.' },
    'Light Mace': { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    'Light Hammer': { attack: attackBonus, damage: damage('1d4', mods.str), crit: '×2', range: '20 ft.' },
    Shuriken: { attack: finesseAttack, damage: damage('1d2', mods.str), crit: '×2', range: '10 ft.' },
    'Repeating Crossbow': { attack: finesseAttack, damage: '1d8', crit: '19-20/x2', range: '80 ft.' },
    'Hand Crossbow': { attack: finesseAttack, damage: '1d4', crit: '19-20/x2', range: '120 ft.' },
    Sap: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    Nunchaku: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    Sai: { attack: attackBonus, damage: damage('1d4', mods.str), crit: '×2', range: '5 ft.' },
    Siangham: { attack: attackBonus, damage: damage('1d6', mods.str), crit: '×2', range: '5 ft.' },
    Dart: { attack: finesseAttack, damage: damage('1d4', mods.str), crit: '×2', range: '20 ft.' }
  };

  const profile = map[weapon] || map['No Weapon'];
  const sizeDelta = getWeaponSizeDelta();
  const adjustedDie = adjustWeaponDamageDie(baseDamageDice[weapon] || '1d8', sizeDelta);
  const rangedWithoutStrength = ['Shortbow', 'Longbow', 'Light Crossbow', 'Heavy Crossbow', 'Repeating Crossbow', 'Hand Crossbow', 'Dart'].includes(weapon);
  const damageBonus = rangedWithoutStrength ? '' : `${mods.str >= 0 ? '+' : ''}${mods.str}`;
  const baseDamage = weapon === 'No Weapon' ? `${adjustWeaponDamageDie('1d3', getRace().size === 'Small' ? -1 : 0)}${damageBonus}` : `${baseDamageDice[weapon] || '1d8'}${damageBonus}`;
  const sizeAdjustment = sizeDelta === 0 ? 'No size adjustment' : `${sizeDelta > 0 ? '+' : ''}${sizeDelta} damage die step${Math.abs(sizeDelta) === 1 ? '' : 's'}`;
  const isLight = ['No Weapon', 'Shortsword', 'Rapier', 'Dagger'].includes(weapon);
  const hasTwoWeaponFighting = state.selectedFeats.includes('Two-Weapon Fighting');
  const offhandPenalty = role === 'offhand' ? (hasTwoWeaponFighting ? (isLight ? -2 : -4) : (isLight ? -4 : -6)) : 0;
  const offhandDamageBonus = role === 'offhand' ? Math.floor(mods.str / 2) : mods.str;
  const specialDamage = { flaming: '+1d6 fire', frost: '+1d6 cold', shock: '+1d6 electricity' }[state.weaponAbility] || '';
  return {
    ...profile,
    attack: profile.attack - (sizeDelta * 2) + offhandPenalty + Number(state.weaponEnhancement || 0) - (isWeaponProficient(weapon) ? 0 : 4),
    damage: `${adjustedDie}${offhandDamageBonus + Number(state.weaponEnhancement || 0) >= 0 ? '+' : ''}${offhandDamageBonus + Number(state.weaponEnhancement || 0)}${specialDamage ? ` ${specialDamage}` : ''}`,
    baseDamage,
    sizeAdjustment,
    offhandCapable: isLight || ['Longsword', 'Battleaxe', 'Warhammer', 'Mace', 'Scimitar'].includes(weapon),
    offhandPenalty,
    weaponSize: getEffectiveWeaponSize(),
    sizeDelta
  };
}

function getWeaponDamageType(weapon) {
  const types = {
    'No Weapon': 'bludgeoning', Longsword: 'slashing', Shortsword: 'piercing', Greatsword: 'slashing',
    Rapier: 'piercing', Scimitar: 'slashing', Dagger: 'piercing', Quarterstaff: 'bludgeoning',
    Battleaxe: 'slashing', Greataxe: 'slashing', Warhammer: 'bludgeoning', Mace: 'bludgeoning',
    Spear: 'piercing', Shortbow: 'piercing', Longbow: 'piercing', 'Light Crossbow': 'piercing',
    'Heavy Crossbow': 'piercing', Sling: 'bludgeoning', Handaxe: 'slashing', Javelin: 'piercing',
    Trident: 'piercing', Net: '—', Whip: 'slashing', Kukri: 'slashing', Kama: 'slashing', Sickle: 'slashing',
    Glaive: 'slashing', Halberd: 'piercing/slashing', Guisarme: 'slashing', 'Spiked Chain': 'piercing',
    Falchion: 'slashing', Lance: 'piercing', Morningstar: 'bludgeoning/piercing', 'Light Mace': 'bludgeoning',
    'Light Hammer': 'bludgeoning', Shuriken: 'piercing', 'Repeating Crossbow': 'piercing',
    'Hand Crossbow': 'piercing', Sap: 'bludgeoning', Nunchaku: 'bludgeoning', Sai: 'piercing', Siangham: 'piercing', Dart: 'piercing'
  };
  return types[weapon] || '—';
}

function isWeaponProficient(weapon) {
  const feats = state.selectedFeats || [];
  if (weapon === 'No Weapon') return true;
  const simpleWeapons = ['Club', 'Dagger', 'Dart', 'Javelin', 'Light Crossbow', 'Heavy Crossbow', 'Light Mace', 'Mace', 'Quarterstaff', 'Sickle', 'Sling', 'Spear', 'Light Hammer'];
  const martialWeapons = ['Battleaxe', 'Falchion', 'Glaive', 'Greataxe', 'Guisarme', 'Halberd', 'Handaxe', 'Lance', 'Longbow', 'Longsword', 'Morningstar', 'Rapier', 'Scimitar', 'Shortbow', 'Shortsword', 'Trident', 'Warhammer'];
  const classIds = [...new Set([state.classId, ...getClassLevelEntries().map((entry) => entry.classId)])];
  const specialWeapons = {
    bard: ['Longsword', 'Rapier', 'Shortsword', 'Shortbow', 'Whip', 'Sap'],
    rogue: ['Hand Crossbow', 'Rapier', 'Shortsword', 'Shortbow', 'Sap'],
    monk: ['Dagger', 'Handaxe', 'Javelin', 'Kama', 'Nunchaku', 'Quarterstaff', 'Sai', 'Shuriken', 'Siangham', 'Sling', 'Light Crossbow', 'Heavy Crossbow'],
    druid: ['Dagger', 'Dart', 'Quarterstaff', 'Scimitar', 'Sickle', 'Sling', 'Spear']
  };
  const fullSimple = classIds.some((classId) => ['barbarian', 'bard', 'cleric', 'fighter', 'paladin', 'ranger', 'rogue', 'sorcerer', 'wizard'].includes(classId));
  const fullMartial = classIds.some((classId) => ['barbarian', 'fighter', 'paladin', 'ranger'].includes(classId));
  return (fullSimple && simpleWeapons.includes(weapon))
    || (fullMartial && martialWeapons.includes(weapon))
    || classIds.some((classId) => (specialWeapons[classId] || []).includes(weapon))
    || feats.includes('Martial Weapon Proficiency')
    || feats.includes('Exotic Weapon Proficiency');
}

function getArmorCategory(armor) {
  return getArmorProfile(armor).category;
}

function isArmorProficient(armor) {
  const category = getArmorCategory(armor);
  if (category === 'none' || armor === 'No Armor') return true;
  const feats = state.selectedFeats || [];
  const classIds = [...new Set([state.classId, ...getClassLevelEntries().map((entry) => entry.classId)])];
  const fullArmor = classIds.some((id) => ['cleric', 'fighter', 'paladin'].includes(id));
  const mediumArmor = fullArmor || classIds.some((id) => ['barbarian', 'druid', 'ranger'].includes(id));
  const lightArmor = mediumArmor || classIds.some((id) => ['bard', 'rogue'].includes(id));
  const druidMetalRestriction = classIds.includes('druid') && /Chain|Breastplate|Splint|Half-Plate|Full Plate|Steel|Mithral/.test(armor);
  if (druidMetalRestriction && !classIds.some((id) => ['fighter', 'paladin'].includes(id))) return false;
  if (category === 'shield') {
    if (armor === 'Tower Shield') return classIds.includes('fighter') || feats.includes('Tower Shield Proficiency');
    return classIds.some((id) => ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'paladin', 'ranger'].includes(id)) || feats.includes('Shield Proficiency');
  }
  if (category === 'light') return lightArmor || feats.includes('Armor Proficiency (Light)');
  if (category === 'medium') return mediumArmor || feats.includes('Armor Proficiency (Medium)');
  return fullArmor || feats.includes('Armor Proficiency (Heavy)');
}

function getSpeed() {
  const race = getRace();
  const selectedClass = getClass();
  const baseSpeed = race.size === 'Small' ? 20 : 30;
  const armorLimitsSpeed = ['medium', 'heavy'].includes(getArmorProfile(state.armor).category);
  let speed = armorLimitsSpeed ? (race.size === 'Small' ? 15 : 20) : baseSpeed;

  if (selectedClass.id === 'barbarian' && !armorLimitsSpeed) {
    speed += 10;
  }

  if (selectedClass.id === 'monk' && !armorLimitsSpeed) {
    const monkSpeedBonus = [0, 0, 0, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50, 50, 60, 60, 60];
    speed += monkSpeedBonus[Math.min(20, Math.max(1, state.level))] || 0;
  }

  return speed;
}

function getCarryCapacity() {
  const table = {
    1: [3, 6, 10], 2: [6, 13, 20], 3: [10, 20, 30], 4: [13, 26, 40], 5: [16, 33, 50],
    6: [20, 40, 60], 7: [23, 46, 70], 8: [26, 53, 80], 9: [30, 60, 90], 10: [33, 66, 100],
    11: [38, 76, 115], 12: [43, 86, 130], 13: [50, 100, 150], 14: [58, 116, 175], 15: [66, 133, 200],
    16: [76, 153, 230], 17: [86, 173, 260], 18: [100, 200, 300], 19: [116, 233, 350], 20: [133, 266, 400],
    21: [153, 306, 460], 22: [173, 346, 520], 23: [200, 400, 600], 24: [230, 460, 690], 25: [266, 533, 800],
    26: [306, 613, 920], 27: [346, 693, 1040], 28: [400, 800, 1200], 29: [460, 920, 1380], 30: [533, 1066, 1600]
  };
  const strength = Math.max(1, Number(state.abilities.str) || 10);
  let values = table[Math.min(30, strength)] || table[30];
  if (strength > 30) {
    const multiplier = 4 ** Math.floor((strength - 30) / 10);
    values = values.map((value) => value * multiplier);
  }
  const sizeMultiplier = getRace().size === 'Small' ? 0.5 : 1;
  const light = Math.floor(values[0] * sizeMultiplier);
  const medium = Math.floor(values[1] * sizeMultiplier);
  const heavy = Math.floor(values[2] * sizeMultiplier);
  return { light, medium, heavy, maximum: heavy, liftOverhead: heavy, liftGround: heavy * 2, drag: heavy * 5 };
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

function getAllowedAbilityIncreases() {
  return Math.floor(state.level / 4);
}

function renderAbilityIncreaseControl() {
  const allowed = getAllowedAbilityIncreases();
  const used = state.abilityIncreases.length;
  const remaining = Math.max(0, allowed - used);
  const visible = state.characterCreated && remaining > 0;
  els.abilityIncreasePanel.hidden = !visible;
  els.abilityIncreaseInfo.textContent = visible ? `${remaining} ability increase${remaining === 1 ? '' : 's'} available.` : '';
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
  const weaponOptions = weaponCatalog.map((weapon) => `<option value="${weapon}">${formatEquipmentOption(weapon)}</option>`).join('');
  const armorOptions = armorCatalog.map((armor) => `<option value="${armor}">${formatEquipmentOption(armor)}</option>`).join('');
  const itemOptions = itemCatalog.map((item) => `<option value="${item}">${formatEquipmentOption(item)}</option>`).join('');
  const magicItemOptions = magicItemCatalog.map((item) => `<option value="${item}">${formatEquipmentOption(item)}</option>`).join('');

  els.raceSelect.innerHTML = raceOptions;
  els.classSelect.innerHTML = classOptions;
  els.weaponSelect.innerHTML = weaponOptions;
  els.armorSelect.innerHTML = armorOptions;
  els.itemSelect.innerHTML = itemOptions;
  els.magicItemSelect.innerHTML = magicItemOptions;

  els.raceSelect.value = state.raceId;
  els.classSelect.value = state.classId;
  els.weaponSelect.value = state.weapon;
  els.armorSelect.value = state.armor;
  els.weaponSizeSelect.value = state.weaponSize;
  els.itemSelect.value = state.item;
  updateEquipmentRuleTriggers();
  renderEquipmentInventory();
  populateDeitySelect();
}

function renderEquipmentInventory() {
  const weapons = state.weaponInventory || [];
  const equippedWeapons = getEquippedWeapons();
  const armor = state.armorInventory || [];
  const magic = state.magicInventory || [];
  const weaponDescription = (weapon) => equippedWeapons.includes(weapon)
    ? `${getWeaponStats(weapon, getEquippedWeaponRole(weapon)).attack >= 0 ? '+' : ''}${getWeaponStats(weapon, getEquippedWeaponRole(weapon)).attack} attack; ${getWeaponStats(weapon, getEquippedWeaponRole(weapon)).damage} damage; ${getWeaponDamageType(weapon)}`
    : (weaponRuleSummaries[weapon] || 'Standard weapon; select it to calculate current attack and damage.');
  const armorDescription = (item) => item === state.armor
    ? `${getEnhancedArmorName()}: +${getArmorBonus()} AC; ${state.armorAbility === 'none' ? 'no special ability' : getArmorAbilityDescription(state.armorAbility)}`
    : (armorRuleSummaries[item] || 'Standard armor or shield; select it to calculate current AC and movement.');
  els.equipmentInventory.innerHTML = `
    <div class="inventory-group"><strong>Weapons carried</strong>${weapons.length ? weapons.map((weapon, index) => `<div class="inventory-row"><span><strong>${weapon}${equippedWeapons.includes(weapon) ? ' • equipped' : ''}${weapon === state.weapon ? ' • primary' : ''}</strong><small>${weaponDescription(weapon)}</small></span><span class="inventory-actions"><button type="button" class="secondary-btn" data-equip-weapon="${weapon}">${equippedWeapons.includes(weapon) ? 'Unequip' : 'Equip'}</button><button type="button" class="remove-inventory-btn" data-remove-weapon="${index}">Remove</button></span></div>`).join('') : '<small>None</small>'}</div>
    <div class="inventory-group"><strong>Armor carried</strong>${armor.length ? armor.map((item, index) => `<div class="inventory-row"><span><strong>${item}${item === state.armor ? ' • active' : ''}</strong><small>${armorDescription(item)}</small></span><span class="inventory-actions"><button type="button" class="secondary-btn" data-equip-armor="${item}">${item === state.armor ? 'Unequip' : 'Equip'}</button><button type="button" class="remove-inventory-btn" data-remove-armor="${index}">Remove</button></span></div>`).join('') : '<small>None</small>'}</div>
    <div class="inventory-group"><strong>Magic items carried</strong>${magic.length ? magic.map((item, index) => `<div class="inventory-row"><span><strong>${item}</strong><small>${getMagicItemDescription(item)}</small></span><button type="button" class="remove-inventory-btn" data-remove-magic="${index}">Remove</button></div>`).join('') : '<small>None</small>'}</div>
    <div class="inventory-group"><strong>Other item carried</strong>${state.item !== 'No Item' ? `<div class="inventory-row"><span><strong>${state.item}</strong><small>${getEquipmentPrice(state.item)} - ${getEquipmentWeight(state.item)}</small></span><button type="button" class="remove-inventory-btn" data-remove-item="true">Remove</button></div>` : '<small>None</small>'}</div>
  `;
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

function renderDeeds() {
  const deeds = Array.isArray(state.deeds) ? state.deeds : [];
  els.deedsList.innerHTML = deeds.length ? deeds.map((deed, index) => `
    <div class="deed-editor-row">
      <input type="number" min="1" max="20" data-deed-level="${index}" value="${deed.level || 1}" aria-label="Deed level" />
      <input type="text" data-deed-text="${index}" value="${deed.text || ''}" placeholder="What happened?" aria-label="Deed description" />
      <button type="button" class="remove-class-btn" data-remove-deed="${index}">Remove</button>
    </div>
  `).join('') : '<p class="language-empty">No deeds recorded yet.</p>';
}

function renderDeedsSheet() {
  const deeds = Array.isArray(state.deeds) ? state.deeds : [];
  els.deedsSheet.classList.add('active');
  els.deedsSheet.innerHTML = `
    <div class="official-page deeds-page">
      <div class="sheet-header">
        <h2>${state.charName} - Deeds & Notable Events</h2>
        <span class="badge">Campaign record</span>
      </div>
      <div class="sheet-box deed-record-box">
        <p>Record adventures, honors, discoveries, allies, enemies, and other events worth remembering.</p>
        ${deeds.length ? deeds.map((deed) => `<div class="deed-record"><strong>Level ${deed.level || 1}</strong><span>${deed.text || 'Unrecorded deed'}</span></div>`).join('') : '<p>No deeds recorded yet.</p>'}
      </div>
    </div>
  `;
}

function renderSpellSheet() {
  const selectedSpells = spellCatalog.filter((spell) => state.selectedSpells.includes(spell.name));
  els.spellSheet.classList.add('active');
  els.spellSheet.innerHTML = `
    <div class="official-page spellbook-page">
      <div class="sheet-header">
        <h2>${state.charName} - Spellbook & Spell List</h2>
        <span class="badge">Page 6</span>
      </div>
      <div class="sheet-grid official-wide-grid">
        <div class="sheet-box"><h4>Spellcasting</h4><p>${getSpellSlotSummary()}</p><p>Spell save DC: __________</p><p>Concentration: ${getSkillTotal('Concentration') >= 0 ? '+' : ''}${getSkillTotal('Concentration')}</p><p>Arcane failure: __________</p></div>
        <div class="sheet-box"><h4>Spell Slots</h4><p>${getSpellSlotSummary()}</p><p>Bonus spells: ____________________</p></div>
      </div>
      <div class="sheet-box">
        <h4>Selected Spells</h4>
        <table class="official-table"><thead><tr><th>Spell</th><th>Level</th><th>Prepared / Known</th><th>Notes</th></tr></thead><tbody>
          ${selectedSpells.map((spell) => `<tr><td>${spell.name}</td><td>${spell.level}</td><td>________________</td><td>________________</td></tr>`).join('') || '<tr><td colspan="4">No spells selected</td></tr>'}
        </tbody></table>
      </div>
      <div class="sheet-box official-notes-box"><h4>Spell Notes</h4><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
    </div>
  `;
}

function renderAbilities() {
  const selectedRace = getRace();
  const hasRolledScores = state.abilityMode === 'rolled' && Array.isArray(state.rolledScores) && state.rolledScores.length === abilityNames.length;
  const pointBuyMode = state.abilityMode === 'point-buy';
  els.pointBuyBudgetLabel.hidden = !pointBuyMode;
  els.pointBuyBudgetSelect.value = String(state.pointBuyBudget);
  els.rollStatsBtn.hidden = state.abilityMode !== 'rolled';
  renderAbilityIncreaseControl();
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
      ? `<select data-score-slot="${ability}" aria-label="Score assigned to ${ability.toUpperCase()}" ${state.characterCreated ? 'disabled' : ''}>${state.rolledScores.map((rolledScore, index) => `<option value="${index}" ${index === assignment ? 'selected' : ''}>${rolledScore}</option>`).join('')}</select>`
      : `<input data-ability="${ability}" type="number" min="${pointBuyMode ? 8 : 1}" max="${pointBuyMode ? 15 : 40}" value="${score}" ${state.characterCreated ? 'disabled' : ''} />`;
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
  const classSkills = getAllClassSkills();
  const totalRanks = getSpentSkillPoints();
  const maxRanks = getAvailableSkillPoints();
  els.skillsHeading.textContent = `Skills [${totalRanks}/${maxRanks} ranks]`;
  const skillNodes = skillsCatalog.map((skill) => {
    const isChecked = state.selectedSkills.includes(skill) || classSkills.includes(skill);
    const checked = isChecked ? 'checked' : '';
    const rankCost = classSkills.includes(skill) ? 1 : 2;
    const choicesLocked = state.characterCreated && state.level <= state.finalizedLevel;
    const disabled = choicesLocked || (!isChecked && totalRanks + rankCost > maxRanks) ? 'disabled' : '';
    const maxRank = classSkills.includes(skill) ? state.level + 3 : Math.floor((state.level + 3) / 2);
    const rank = Math.min(maxRank, state.skillRanks[skill] ?? 0);
    const total = getSkillTotal(skill);
    return `
      <div class="skill-row">
        <label class="check-item">
          <input type="checkbox" data-skill="${skill}" ${checked} ${disabled} />
          <span class="rules-trigger" data-rule-type="skill" data-rule-name="${skill}" title="Click for rules summary">${skill}${classSkills.includes(skill) ? ' • class' : ''}</span>
        </label>
        <div class="skill-rank-box">
          <input type="number" data-rank-skill="${skill}" min="0" max="${maxRank}" value="${rank}" ${choicesLocked ? 'disabled' : ''} />
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
  const choicesLocked = state.characterCreated && state.level <= state.finalizedLevel;
  els.featsList.innerHTML = featCatalog.map((featEntry) => `
    <label class="check-item">
      <input type="checkbox" data-feat="${featEntry.name}" ${state.selectedFeats.includes(featEntry.name) ? 'checked' : ''} ${choicesLocked || (!state.selectedFeats.includes(featEntry.name) && selectedCount >= maxFeats) ? 'disabled' : ''} />
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
  'No Weapon': 'The character is not holding a manufactured weapon. Use an unarmed strike for attacks; typical damage is 1d3 for a Medium creature or 1d2 for a Small creature.',
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
  'No Armor': 'The character is unarmored and receives no armor bonus to AC. Dexterity, natural armor, shields, and other effects may still apply.',
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
  els.weaponRulesTrigger.textContent = `View ${getEnhancedWeaponName()} rules`;
  els.armorRulesTrigger.dataset.ruleName = state.armor;
  els.armorRulesTrigger.textContent = `View ${getEnhancedArmorName()} rules`;
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

function getFeatureDescription(feature) {
  const descriptions = {
    'Armor and weapon proficiencies': 'Gain the armor, shield, and weapon training granted by the class.',
    'Bardic music': 'Use Perform-based music to inspire allies or create other magical performances.',
    'Divine grace': 'Add your Charisma modifier to saving throws.',
    Evasion: 'Avoid damage on a successful Reflex save and reduce damage on a failed save.',
    'Fast movement': 'Increase land speed while unencumbered and wearing permitted armor.',
    'Flurry of blows': 'Make extra unarmed or monk-weapon attacks with adjusted attack penalties.',
    Rage: 'Temporarily gain combat ability and durability while taking penalties to some actions.',
    'Sneak attack': 'Deal extra precision damage when attacking a vulnerable or flanked target.',
    Spells: 'Prepare or cast spells according to the class spell progression and ability.',
    Spellcasting: 'Prepare or cast arcane spells using the class spell list and spellbook.',
    'Turn undead': 'Channel divine power to turn or rebuke undead creatures.',
    'Unarmed strike': 'Fight effectively without a manufactured weapon and threaten adjacent squares.',
    'Wild shape': 'Assume animal forms while retaining selected character abilities.',
    'Lay on hands': 'Heal a living creature by spending a pool of healing energy.',
    'Smite evil': 'Add Charisma to an attack and level to damage against an evil target.',
    Track: 'Follow creature trails using Survival checks and the environment.',
    Trapfinding: 'Detect and disable magical traps that normally require specialized training.'
  };
  const match = Object.keys(descriptions).find((key) => feature.toLowerCase().includes(key.toLowerCase()));
  return descriptions[match] || 'A class or prestige-class ability granted by the character progression.';
}

function getTraitDescription(trait) {
  const descriptions = {
    Adaptable: 'Gain an extra trained skill or similar human flexibility benefit.',
    Skilled: 'Receive additional skill training compared with many other ancestries.',
    Darkvision: 'See in darkness within the ancestry range, usually in black and white.',
    Stonecunning: 'Gain special bonuses to notice and understand stonework and underground construction.',
    Stability: 'Gain improved resistance against effects that would knock you prone.',
    'Keen Senses': 'Gain enhanced perception through keen hearing, sight, or related senses.',
    'Immunity to Sleep': 'Remain immune to magical sleep effects.',
    'Low-Light Vision': 'See farther than a human in dim illumination.',
    Lucky: 'Use a small luck benefit to improve an unlucky roll or defense.',
    Brave: 'Gain a bonus against fear effects.',
    'Good Aim': 'Gain a bonus with selected ranged attacks or careful aim.',
    Fearless: 'Resist fear and cultural intimidation effects.',
    'Kender Pockets': 'Use exceptional curiosity and concealed storage as a cultural knack.',
    Taunt: 'Provoke an enemy through a skillful taunt and social pressure.',
    'Natural Armor': 'Gain a natural armor bonus that improves Armor Class.',
    'Powerful Build': 'Count as larger for selected combat and carrying purposes.',
    'Celestial Resistance': 'Resist selected energy or environmental effects associated with celestial heritage.',
    'Fiendish Resistance': 'Resist selected energy or environmental effects associated with fiendish heritage.',
    'Gnome Magic': 'Use minor innate magical abilities associated with gnome heritage.'
  };
  return descriptions[trait] || 'A racial or ancestry trait granted by the selected character lineage.';
}

function renderSkillsTable(skills) {
  return `<table class="official-table skill-table"><thead><tr><th>Skill</th><th>Key</th><th>Ranks</th><th>Total</th></tr></thead><tbody>${skills.map((skill) => `<tr><td><strong>${skill}${getClass().skills.includes(skill) ? ' *' : ''}</strong></td><td>${getSkillAbility(skill).toUpperCase()}</td><td>${state.skillRanks[skill] || 0}</td><td>${getSkillTotal(skill) >= 0 ? '+' : ''}${getSkillTotal(skill)}</td></tr>`).join('')}</tbody></table>`;
}

function rollHitDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function ensureHitPointRolls() {
  const entries = getClassLevelEntries();
  const rolls = Array.isArray(state.hpRolls) ? state.hpRolls : [];
  let levelNumber = 0;
  entries.forEach((entry) => {
    for (let classLevel = 1; classLevel <= entry.levels; classLevel += 1) {
      if (!rolls[levelNumber]) {
        rolls[levelNumber] = {
          classId: entry.classId,
          classLevel,
          roll: levelNumber === 0 ? entry.classData.hitDie : rollHitDie(entry.classData.hitDie),
          maximum: entry.classData.hitDie
        };
      }
      levelNumber += 1;
    }
  });
  if (!(state.levelUpPending && state.hpRollPending)) state.hpRolls = rolls.slice(0, levelNumber);
  return state.hpRolls;
}

function getHitPointProgression() {
  const conModifier = getAbilityModifiers().con;
  const allRolls = ensureHitPointRolls();
  const rolls = state.levelUpPending && state.hpRollPending ? allRolls.slice(0, Math.max(0, allRolls.length - 1)) : allRolls;
  const total = rolls.reduce((sum, entry) => sum + Math.max(1, Number(entry.roll || 0) + conModifier), 0);
  return { total, conModifier, rolls };
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

function validateCharacterCreation() {
  syncStateFromInputs();
  const warnings = getRuleWarnings();
  const remainingChoices = [];
  if (state.characterCreated && state.levelUpMode) {
    const starting = state.levelUpStartingClasses || [];
    const current = getClassLevels();
    const startingTotals = Object.fromEntries(starting.map((entry) => [entry.classId, entry.levels]));
    const currentTotals = Object.fromEntries(current.map((entry) => [entry.classId, entry.levels]));
    const classIds = new Set([...Object.keys(startingTotals), ...Object.keys(currentTotals)]);
    let addedRanks = 0;
    classIds.forEach((classId) => {
      const delta = (currentTotals[classId] || 0) - (startingTotals[classId] || 0);
      if (delta < 0) warnings.push(`${classId} levels cannot be reduced during level up.`);
      if (delta > 1) warnings.push(`Only one rank may be added to ${classId} during a single level-up session.`);
      addedRanks += Math.max(0, delta);
    });
    if (addedRanks !== 1) warnings.push(`Level up must add exactly one class rank; current changes add ${addedRanks}.`);
  }
  const skillSpent = getSpentSkillPoints();
  const skillAvailable = getAvailableSkillPoints();
  const featSelected = state.selectedFeats.length;
  const featAvailable = getFeatSlots();
  const spellLevel = getMaxSpellLevel();
  const selectedClass = getClass();
  if (skillSpent < skillAvailable) remainingChoices.push(`Skills: ${skillAvailable - skillSpent} rank points remain in the Skills panel.`);
  if (featSelected < featAvailable) remainingChoices.push(`Feats: ${featAvailable - featSelected} feat choice${featAvailable - featSelected === 1 ? '' : 's'} remain in the Feats panel.`);
  const abilityIncreasesAvailable = Math.max(0, getAllowedAbilityIncreases() - state.abilityIncreases.length);
  if (state.hpRollPending) remainingChoices.push('Hit Points: Roll HP for the new level with the Roll HP button in Class Levels.');
  if (state.characterCreated && abilityIncreasesAvailable > 0) remainingChoices.push(`Ability Scores: ${abilityIncreasesAvailable} level-up ability increase${abilityIncreasesAvailable === 1 ? '' : 's'} remain in the Ability Scores panel.`);
  if (state.abilityMode === 'point-buy' && getPointBuyTotal() < state.pointBuyBudget) remainingChoices.push(`Ability Scores: ${state.pointBuyBudget - getPointBuyTotal()} point-buy points remain.`);
  if (selectedClass.spellcaster && getSpellSelectionCapacity() > state.selectedSpells.length) remainingChoices.push(`Spells: ${getSpellSelectionCapacity() - state.selectedSpells.length} spell selection${getSpellSelectionCapacity() - state.selectedSpells.length === 1 ? '' : 's'} remain in the Spells panel.`);
  const summary = `Skills ${skillSpent}/${skillAvailable}; Feats ${featSelected}/${featAvailable}; Spells ${selectedClass.spellcaster ? `${state.selectedSpells.length} selected through level ${spellLevel}` : 'not applicable'}.`;

  if (warnings.length || remainingChoices.length) {
    els.completionStatus.className = 'completion-status invalid';
    els.completionStatus.textContent = `Needs attention: ${[...remainingChoices, ...warnings].join(' ')} ${summary}`;
    els.summaryCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return false;
  }

  const confirmationMessage = state.characterCreated
    ? `Are you sure you want to finalize level ${state.level}? Skills, feats, and spells chosen for this level will be locked.`
    : 'Are you sure you want to finalize this first-level character? Ability scores, identity, and initial choices will be locked.';
  if (!window.confirm(confirmationMessage)) {
    els.completionStatus.className = 'completion-status';
    els.completionStatus.textContent = 'Character remains editable until you confirm creation.';
    return false;
  }

  els.completionStatus.className = 'completion-status valid';
  els.completionStatus.textContent = `Character passes current checks. ${summary}`;
  state.characterCreated = true;
  state.finalizedLevel = state.level;
  state.levelUpMode = false;
  state.hpRollPending = false;
  state.levelUpStartingClasses = null;
  state.levelUpPending = false;
  state.hpRollPending = false;
  state.levelUpStartingHpRolls = null;
  updateCreationButtonLabel();
  renderClassLevels();
  saveCharacterToStorage();
  return true;
}

function updateCreationButtonLabel() {
  els.completeCharacterBtn.textContent = 'Create Character';
}

function showPrintPreview() {
  els.printPreviewContent.innerHTML = document.querySelector('.sheet-output').innerHTML;
  els.printPreviewModal.hidden = false;
  els.closePrintPreviewBtn.focus();
}

function hidePrintPreview() {
  els.printPreviewModal.hidden = true;
}

function renderSpells() {
  const maxSpellLevel = getMaxSpellLevel();
  const selectedClass = getClass();
  const choicesLocked = state.characterCreated && state.level <= state.finalizedLevel;
  const slotTable = selectedClass.spellcaster ? (spellSlotsTable[Math.min(state.level, 20)] || []).slice(0, maxSpellLevel) : [];
  const totalSlots = slotTable.reduce((total, slots) => total + slots, 0);
  const knownTable = spellsKnownTable[selectedClass.id]?.[Math.min(state.level, 10)];
  const availableSpells = selectedClass.spellcaster
    ? spellCatalog.filter((spell) => spell.level <= maxSpellLevel)
    : [];
  const availableNames = new Set(availableSpells.map((spell) => spell.name));
  state.selectedSpells = state.selectedSpells.filter((spellName) => availableNames.has(spellName));

  if (!availableSpells.length) {
    els.spellsHeading.textContent = 'Spells [0/0]';
    els.spellCapacityInfo.textContent = 'This class and level currently have no spell selections available.';
    els.spellList.innerHTML = '<p class="language-empty">No spells are currently available for this class and level.</p>';
    return;
  }

  els.spellsHeading.textContent = knownTable ? `Spells [${state.selectedSpells.length} selected]` : `Spells [${state.selectedSpells.length}/${totalSlots} slots]`;
  els.spellCapacityInfo.textContent = knownTable
    ? `Spells known: ${knownTable.map((known, level) => `${level === 0 ? '0-level' : `${level}${level === 1 ? 'st' : level === 2 ? 'nd' : level === 3 ? 'rd' : 'th'}-level`} ${known}`).join(' · ')}. Spell slots: ${slotTable.map((slots, level) => `${level + 1}${level === 0 ? 'st' : 'th'} ${slots}`).join(' · ')}.`
    : `Selection guide: ${totalSlots} spell slots through spell level ${maxSpellLevel}. ${slotTable.map((slots, level) => `${level + 1}st: ${slots}`).join(' · ')}. Cantrips are listed separately and do not use these slots.`;

  els.spellList.innerHTML = availableSpells.map((spell) => `
    <label class="check-item">
      <input type="checkbox" data-spell="${spell.name}" ${state.selectedSpells.includes(spell.name) ? 'checked' : ''} ${choicesLocked ? 'disabled' : ''} />
      <span class="rules-trigger" data-rule-type="spell" data-rule-name="${spell.name}" title="Click for rules summary">${spell.name} (lvl ${spell.level})</span>
    </label>
  `).join('');
}

function renderSummary() {
  const { race, selectedClass, hp, bab, initiative, fort, ref, will, ac } = deriver();
  const armorDetails = getArmorClassDetails();
  const warnings = getRuleWarnings();
  const totalRanks = getSpentSkillPoints();
  const maxRanks = getAvailableSkillPoints();
  const spellSummary = getSpellSlotSummary();
  const carriedWeight = getCarriedWeight();
  const loadStatus = getLoadStatus(carriedWeight);
  const carriedWeightLabel = `${Number(carriedWeight.total.toFixed(1))} lb.${carriedWeight.unknown ? ` + ${carriedWeight.unknown} item weight${carriedWeight.unknown === 1 ? '' : 's'} varies` : ''}`;

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
      <div class="stat-pill"><strong>Armor</strong><br>${armorDetails.category} / +${armorDetails.armorBonus}<small>Max Dex ${armorDetails.maxDex === Infinity ? 'none' : `+${armorDetails.maxDex}`}</small></div>
      <div class="stat-pill"><strong>Fort</strong><br>${fort >= 0 ? '+' : ''}${fort}</div>
      <div class="stat-pill"><strong>Ref</strong><br>${ref >= 0 ? '+' : ''}${ref}</div>
      <div class="stat-pill"><strong>Will</strong><br>${will >= 0 ? '+' : ''}${will}</div>
      <div class="stat-pill save-pill"><strong>Fortitude Save</strong><br>${fort >= 0 ? '+' : ''}${fort}<small>Constitution · physical threats</small></div>
      <div class="stat-pill save-pill"><strong>Reflex Save</strong><br>${ref >= 0 ? '+' : ''}${ref}<small>Dexterity · area effects</small></div>
      <div class="stat-pill save-pill"><strong>Will Save</strong><br>${will >= 0 ? '+' : ''}${will}<small>Wisdom · mental effects</small></div>
      <div class="stat-pill"><strong>Skills</strong><br>${totalRanks}/${maxRanks} ranks</div>
      <div class="stat-pill"><strong>Feats</strong><br>${state.selectedFeats.length}/${getFeatSlots()} slots</div>
      <div class="stat-pill"><strong>Carried Weight</strong><br>${carriedWeightLabel}</div>
      <div class="stat-pill"><strong>Load</strong><br>${loadStatus.level}</div>
      <div class="stat-pill"><strong>Setting</strong><br>${state.setting === 'dragonlance' ? 'Dragonlance' : 'Core 3.5'}</div>
    </div>
    <div class="warnings-box">
      <h4>Rule Checks</h4>
      <ul>${warnings.length ? warnings.map((warning) => `<li>${warning}</li>`).join('') : '<li>No major rule issues detected.</li>'}</ul>
      <p><strong>Spell Slots:</strong> ${spellSummary}</p>
      <p><strong>Load Effects:</strong> ${loadStatus.effects} Current load movement: ${loadStatus.movement}. Thresholds: light ${loadStatus.capacity.light} lb., medium ${loadStatus.capacity.medium} lb., heavy ${loadStatus.capacity.heavy} lb.${carriedWeight.unknown ? ' Status is based on known item weights.' : ''}</p>
      <p><strong>Armor Effects:</strong> ${armorDetails.effects.join('; ') || 'None'} Active check penalty ${armorDetails.checkPenalty}; active arcane spell failure ${armorDetails.spellFailure}%.</p>
    </div>
  `;
  els.summaryCard.innerHTML = summaryHtml;
}

function renderPlayerSheet() {
  const { race, selectedClass, mods, hp, bab, initiative, fort, ref, will, ac } = deriver();
  const armorDetails = getArmorClassDetails();
  const hpProgression = getHitPointProgression().rolls.map((entry, index) => `L${index + 1}: d${entry.maximum} roll ${entry.roll}`).join(' | ');
  const statsList = abilityNames.map((ability) => `${ability.toUpperCase()}: ${state.abilities[ability]} (${mods[ability] >= 0 ? '+' : ''}${mods[ability]})`).join(' | ');
  const selectedFeatText = state.selectedFeats.length ? state.selectedFeats.join(', ') : 'None';
  const skillListHtml = state.selectedSkills.length ? state.selectedSkills.map((skill) => `<li>${skill}: ${getSkillTotal(skill) >= 0 ? '+' : ''}${getSkillTotal(skill)}</li>`).join('') : '<li>None</li>';
  const spellcastingInfo = selectedClass.spellcaster ? `<p><strong>Spellcasting:</strong> ${getSpellSlotSummary()}</p>` : '<p><strong>Spellcasting:</strong> None</p>';
  const speed = getSpeed();
  const weaponStats = getWeaponStats();
  const senses = `Low-light vision${race.name === 'Elf' ? ', keen senses' : ''}${race.name === 'Dwarf' ? ', darkvision' : ''}${race.name === 'Half-Orc' ? ', darkvision' : ''}`;
  const carry = getCarryCapacity();
  const encumbrance = `${carry.heavy} lb. heavy load capacity`;
  const notes = `${selectedFeatText}; ${state.selectedSpells.length ? state.selectedSpells.join(', ') : 'No spells prepared'}; ${encumbrance}`;
  const prestigeClass = getPrestigeClass();
  const settingNotes = state.setting === 'dragonlance'
    ? `<p><strong>Krynn:</strong> ${state.krynnPath} / ${state.moon}${prestigeClass ? ` / ${prestigeClass.name}` : ''}</p>`
    : '';
  const possessedWeapons = state.weaponInventory?.length ? state.weaponInventory : [state.weapon];
  const possessedArmor = state.armorInventory?.length ? state.armorInventory : [state.armor];

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
          <p><strong>Flat-Footed</strong> ${ac - Math.max(0, armorDetails.cappedDexterity)}</p>
        </div>
        <div class="sheet-box compact-box">
          <h4>Attack</h4>
          <p><strong>Base Attack</strong> +${bab}</p>
          <p><strong>Initiative</strong> ${initiative >= 0 ? '+' : ''}${initiative}</p>
          <p><strong>Weapon</strong> ${getEnhancedWeaponName()}</p>
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
          <p><strong>HP</strong> ${hp}</p>
          <p><strong>HP Rolls</strong> ${hpProgression}</p>
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
          <ul>${state.selectedFeats.length ? state.selectedFeats.map((feat) => `<li>${feat}</li>`).join('') : '<li>None selected</li>'}</ul>
        </div>
        <div class="sheet-box">
          <h4>Senses</h4>
          <p>${senses}</p>
        </div>
        <div class="sheet-box">
          <h4>Equipment</h4>
          <ul>
            <li>${getEnhancedWeaponName()}</li>
            <li>${getEnhancedArmorName()}</li>
            <li>${state.item}</li>
          </ul>
        </div>
        <div class="sheet-box">
          <h4>Class Features</h4>
          <ul>${getClassFeatures().map((feature) => `<li><strong>${feature}</strong><small class="sheet-description">${getFeatureDescription(feature)}</small></li>`).join('')}</ul>
        </div>
        <div class="sheet-box">
          <h4>Racial Traits</h4>
          <ul>${race.traits.map((trait) => `<li><strong>${trait}</strong><small class="sheet-description">${getTraitDescription(trait)}</small></li>`).join('')}</ul>
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
        <div class="sheet-grid official-wide-grid combat-grid">
          <div class="sheet-box combat-weapons">
            <h4>Weapons</h4>
            <table class="official-table">
                <thead><tr><th>Active</th><th>Name</th><th>Description</th><th>Damage Type</th><th>Proficiency</th><th>Attack</th><th>Base Damage</th><th>Size-Adjusted Damage</th><th>Critical</th><th>Range</th></tr></thead>
                <tbody>${possessedWeapons.map((weapon) => {
                  const stats = getWeaponStats(weapon, getEquippedWeaponRole(weapon));
                  const damageType = getWeaponDamageType(weapon);
                  const description = getEquippedWeapons().includes(weapon) ? `${weapon === state.weapon ? 'Primary' : getEquippedWeaponRole(weapon) === 'offhand' ? 'Off-hand' : 'Equipped'}: ${state.weaponAbility === 'none' ? 'no special ability' : getWeaponAbilityDescription(state.weaponAbility)}` : (weaponRuleSummaries[weapon] || 'Standard weapon; select it to calculate current attack and damage.');
                  return `<tr><td><input type="checkbox" class="active-weapon-checkbox" data-active-weapon="${weapon}" ${getEquippedWeapons().includes(weapon) ? 'checked' : ''} /></td><td>${weapon} (${stats.weaponSize})</td><td>${description}</td><td>${damageType}</td><td>${isWeaponProficient(weapon) ? 'Proficient' : 'Not proficient'}</td><td>${stats.attack >= 0 ? '+' : ''}${stats.attack}</td><td>${stats.baseDamage}</td><td>${stats.damage}<br><small>${stats.sizeAdjustment}</small></td><td>${stats.crit}</td><td>${stats.range}</td></tr>`;
                }).join('')}</tbody>
            </table>
          </div>
          <div class="sheet-box combat-armor">
            <h4>Armor & Defense</h4>
            <p><strong>Active Armor:</strong> ${getEnhancedArmorName()}</p>
            <p>${state.armorAbility === 'none' ? (armorRuleSummaries[state.armor] || 'Standard armor or shield; select it to calculate current AC and movement.') : getArmorAbilityDescription(state.armorAbility)}</p>
            <table class="official-table armor-table">
              <thead><tr><th>Active</th><th>Name</th><th>Type</th><th>AC Bonus</th><th>Max Dex</th><th>Check Penalty</th><th>Arcane Failure</th><th>Proficiency</th></tr></thead>
              <tbody>${possessedArmor.map((item) => {
                const profile = getArmorProfile(item);
                const active = item === state.armor;
                const details = active ? getArmorClassDetails() : null;
                const maxDex = profile.maxDex === Infinity ? 'No cap' : `+${profile.maxDex}`;
                const checkPenalty = active ? details.checkPenalty : profile.checkPenalty;
                const spellFailure = active && getClassLevelEntries().some((entry) => ['bard', 'sorcerer', 'wizard'].includes(entry.classId)) && !(getClassLevelEntries().some((entry) => entry.classId === 'bard') && profile.category === 'light') ? profile.spellFailure : 0;
                return `<tr><td><input type="checkbox" class="active-armor-checkbox" data-active-armor="${item}" ${active ? 'checked' : ''} /></td><td>${item}${active ? ' (active)' : ''}</td><td>${profile.category}</td><td>+${profile.armorBonus + (active ? Number(state.armorEnhancement || 0) : 0)}</td><td>${maxDex}</td><td>${checkPenalty}</td><td>${spellFailure}%</td><td>${isArmorProficient(item) ? 'Proficient' : 'Not proficient'}</td></tr>`;
              }).join('')}</tbody>
            </table>
            <p>Armor Class: ${ac}</p>
            <p>Touch AC: ${10 + mods.dex}</p>
            <p>Flat-Footed AC: ${ac - Math.max(0, armorDetails.cappedDexterity)}</p>
            <p><strong>Applied effects:</strong> ${getArmorClassDetails().effects.join('; ') || 'None'}</p>
            <p>Damage Reduction: ______</p>
            <p>Spell Resistance: ______</p>
          </div>
        </div>
        <div class="sheet-box official-notes-box combat-notes-box"><h4>Combat Notes</h4><p>Grapple: ${bab + mods.str >= 0 ? '+' : ''}${bab + mods.str} &nbsp; Initiative: ${initiative >= 0 ? '+' : ''}${initiative} &nbsp; Speed: ${speed} ft.</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
      </div>

      <div class="official-page official-page-break">
        <div class="sheet-header">
          <h2>${state.charName} - Money & Possessions</h2>
          <span class="badge">Page 3</span>
        </div>
        <div class="sheet-grid official-wide-grid possessions-grid">
          <div class="sheet-box combat-money">
            <h4>Money</h4>
            <p>Platinum: ______ &nbsp; Gold: ______</p><p>Silver: ______ &nbsp; Copper: ______</p>
            <p>Light load: ${carry.light} lb. &nbsp; Medium: ${carry.medium} lb.</p>
            <p>Heavy/max load: ${carry.heavy} lb. &nbsp; Lift overhead: ${carry.liftOverhead} lb.</p>
            <p>Lift off ground: ${carry.liftGround} lb. &nbsp; Drag: ${carry.drag} lb.</p>
          </div>
          <div class="sheet-box combat-equipment">
            <h4>Equipment & Possessions</h4>
            <ul>${(state.weaponInventory || [state.weapon]).map((weapon) => `<li>${weapon}${weapon === state.weapon ? ' (active)' : ''}</li>`).join('')} ${(state.armorInventory || [state.armor]).map((item) => `<li>${item}${item === state.armor ? ' (active)' : ''}</li>`).join('')} ${(state.magicInventory || []).map((item) => `<li>${item}</li>`).join('')}<li>${state.item}</li></ul>
            <div class="pencil-inventory-lines"><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
          </div>
        </div>
      </div>

      <div class="official-page official-page-break">
        <div class="sheet-header">
          <h2>${state.charName} - Skills & Abilities</h2>
          <span class="badge">Page 4</span>
        </div>
        <div class="sheet-grid official-wide-grid skills-abilities-grid">
          <div class="sheet-box">
            <h4>Skills</h4>
            <div class="skills-table-columns">${renderSkillsTable(skillsCatalog.slice(0, Math.ceil(skillsCatalog.length / 2)))}${renderSkillsTable(skillsCatalog.slice(Math.ceil(skillsCatalog.length / 2)))}</div>
          </div>
          <div class="abilities-column">
          <div class="sheet-box description-list-box feats-box">
            <h4>Feats</h4><ul>${state.selectedFeats.length ? state.selectedFeats.map((feat) => `<li><strong>${feat}</strong><small class="sheet-description">${featRuleSummaries[feat] || 'A selectable feat that grants a specialized character benefit.'}</small></li>`).join('') : '<li>None selected</li>'}</ul>
          </div>
          <div class="sheet-box description-list-box special-abilities-box">
            <h4>Special Abilities</h4><ul>${getClassFeatures().map((feature) => `<li><strong>${feature}</strong><small class="sheet-description">${getFeatureDescription(feature)}</small></li>`).join('')}</ul>
          </div>
          <div class="sheet-box description-list-box racial-traits-box">
            <h4>Racial Traits</h4><ul>${race.traits.map((trait) => `<li><strong>${trait}</strong><small class="sheet-description">${getTraitDescription(trait)}</small></li>`).join('')}</ul>
          </div>
          <div class="sheet-box languages-box">
            <h4>Languages</h4><p>${getAllLanguages().join(', ')}</p>
          </div>
          <div class="sheet-box deity-box">
            <h4>Deity / Allegiance</h4><p>${state.deity}</p><p>${state.setting === 'dragonlance' ? 'Krynn path: ' + state.krynnPath : 'Allegiance: ____________________'}</p>
          </div>
          </div>
        </div>
      </div>

      <div class="official-page official-page-break">
        <div class="sheet-header">
          <h2>${state.charName} - Deeds & Notable Events</h2>
          <span class="badge">Page 5</span>
        </div>
        <div class="sheet-box deed-record-box">
          <p>Record adventures, honors, discoveries, allies, enemies, and other events worth remembering.</p>
          ${state.deeds.length ? state.deeds.map((deed) => `<div class="deed-record"><strong>Level ${deed.level || 1}</strong><span>${deed.text || 'Unrecorded deed'}</span></div>`).join('') : '<p>No deeds recorded yet.</p>'}
          <div class="pencil-inventory-lines campaign-record-lines"><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p><p>____________________________________________________________</p></div>
        </div>
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
  const sketchMarkup = state.customPortrait
    ? `<img class="custom-character-portrait" src="${state.customPortrait}" alt="${state.charName} portrait" />`
    : `<svg class="character-sketch" viewBox="0 0 400 470" role="img" aria-label="Generalized ${race.name} ${selectedClass.name} character sketch">`;

  els.sketchSheet.classList.add('active');
  els.sketchSheet.innerHTML = `
    <div class="character-sketch-sheet">
      <div class="sheet-header">
        <div><h2>${state.charName} - Character Sketch</h2><div class="sheet-meta"><span>${race.name}</span><span>${selectedClass.name}</span><span>${genderLabel}</span></div></div>
        <span class="badge">Generalized likeness</span>
      </div>
      <div class="sketch-layout">
        <div class="sketch-paper">
          ${sketchMarkup}
          ${state.customPortrait ? '' : `
            <defs>
              <pattern id="sketchGrid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#34383d" stroke-opacity=".045" /></pattern>
              <pattern id="inkHatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(24)"><path d="M0 0V8" stroke="#34383d" stroke-opacity=".12" /></pattern>
              <radialGradient id="skinTone" cx="35%" cy="24%" r="78%"><stop offset="0" stop-color="#fffaf0" /><stop offset=".72" stop-color="#d7c4aa" /><stop offset="1" stop-color="#9a826c" /></radialGradient>
              <linearGradient id="clothTone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6c7379" /><stop offset=".5" stop-color="#30363b" /><stop offset="1" stop-color="#171b1e" /></linearGradient>
              <linearGradient id="metalTone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3f0e8" /><stop offset=".28" stop-color="#a7adb0" /><stop offset=".58" stop-color="#454d52" /><stop offset="1" stop-color="#161b1e" /></linearGradient>
              <filter id="softShadow"><feGaussianBlur stdDeviation="5" /></filter>
            </defs>
            <rect width="400" height="470" fill="#fbf7ee" />
            <rect width="400" height="470" fill="url(#sketchGrid)" />
            <ellipse cx="205" cy="405" rx="117" ry="18" fill="#34383d" fill-opacity=".16" filter="url(#softShadow)" />
            <path d="M72 407 Q200 375 328 407" fill="none" stroke="${ink}" stroke-opacity=".25" stroke-width="2" />
            <g class="realistic-render" stroke="none">
              <path d="M161 78 Q165 48 200 42 Q235 48 239 78 L232 119 Q223 139 200 145 Q177 139 168 119 Z" fill="url(#skinTone)" />
              <path d="M181 136 Q200 149 219 136 L226 163 L174 163 Z" fill="url(#skinTone)" />
              <path d="M173 153 Q200 143 227 153 L246 194 Q238 230 234 275 L166 275 Q162 230 154 194 Z" fill="url(#clothTone)" />
              <path d="M162 165 Q145 175 133 196 L112 256 Q110 267 119 270 L141 211 L158 192 Z" fill="url(#clothTone)" />
              <path d="M238 165 Q255 175 267 196 L288 256 Q290 267 281 270 L259 211 L242 192 Z" fill="url(#clothTone)" />
              <path d="M169 272 Q166 324 154 366 L143 397 Q143 406 153 408 L180 408 L172 382 L190 304 Z" fill="url(#clothTone)" />
              <path d="M231 272 Q234 324 246 366 L257 397 Q257 406 247 408 L220 408 L228 382 L210 304 Z" fill="url(#clothTone)" />
              <path d="M172 153 Q200 143 228 153 L241 190 L159 190 Z" fill="url(#metalTone)" fill-opacity=".78" />
            </g>
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
          </svg>`}
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

  state.characterId = data.characterId || state.characterId;
  state.charName = data.charName || 'Unnamed Hero';
  state.playerName = data.playerName || 'Player';
  state.raceId = data.raceId || 'human';
  state.classId = data.classId || 'fighter';
  state.level = Number(data.level || 1);
  state.characterCreated = Boolean(data.characterCreated || state.level > 1);
  state.finalizedLevel = Number(data.finalizedLevel || (state.characterCreated ? state.level : 0));
  state.levelUpMode = false;
  state.levelUpStartingClasses = null;
  state.levelUpPending = false;
  state.hpRollPending = false;
  state.lastLevelSnapshot = data.lastLevelSnapshot || null;
  updateCreationButtonLabel();
  state.classLevels = Array.isArray(data.classLevels) && data.classLevels.length
    ? data.classLevels.map((entry) => ({ classId: entry.classId, levels: Number(entry.levels) || 1 }))
    : [{ classId: state.classId, levels: state.level }];
  syncPrimaryClassAndLevel();
  state.alignment = data.alignment || 'Lawful Good';
  state.deity = data.deity || 'None selected';
  state.gender = data.gender || 'unspecified';
  state.customPortrait = data.customPortrait || '';
  state.abilityMode = data.abilityMode || 'rolled';
  state.pointBuyBudget = Number(data.pointBuyBudget || 32);
  state.abilityIncreases = Array.isArray(data.abilityIncreases) ? data.abilityIncreases : [];
  state.hpRolls = Array.isArray(data.hpRolls) ? data.hpRolls : [];
  state.setting = data.setting || 'core';
  state.krynnPath = data.krynnPath || 'none';
  state.moon = data.moon || 'none';
  state.prestigeClass = data.prestigeClass || 'none';
  state.weapon = data.weapon || 'Longsword';
  state.equippedWeapons = Array.isArray(data.equippedWeapons)
    ? [...new Set(data.equippedWeapons)]
    : (state.weapon === 'No Weapon' ? [] : [state.weapon]);
  if (state.weapon !== 'No Weapon' && !state.equippedWeapons.includes(state.weapon)) {
    state.equippedWeapons.unshift(state.weapon);
  }
  state.armor = data.armor || 'Chain Shirt';
  state.weaponEnhancement = Number(data.weaponEnhancement || 0);
  state.weaponAbility = data.weaponAbility || 'none';
  state.armorEnhancement = Number(data.armorEnhancement || 0);
  state.armorAbility = data.armorAbility || 'none';
  state.weaponSize = data.weaponSize || 'auto';
  state.item = data.item || 'Backpack';
  state.weaponInventory = Array.isArray(data.weaponInventory) ? [...new Set(data.weaponInventory)] : [state.weapon];
  state.armorInventory = Array.isArray(data.armorInventory) ? [...new Set(data.armorInventory)] : [state.armor];
  state.magicInventory = Array.isArray(data.magicInventory) ? [...new Set(data.magicInventory)] : [];
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
  state.deeds = Array.isArray(data.deeds) ? data.deeds.map((deed) => ({ level: Number(deed.level) || 1, text: String(deed.text || '') })) : [];
  state.skillRanks = data.skillRanks || {};

  if ((data.levelUpMode || data.levelUpPending) && state.lastLevelSnapshot) {
    const snapshot = state.lastLevelSnapshot;
    state.classLevels = snapshot.classLevels.map((entry) => ({ ...entry }));
    state.hpRolls = snapshot.hpRolls.map((entry) => ({ ...entry }));
    state.abilityIncreases = snapshot.abilityIncreases.map((entry) => ({ ...entry }));
    state.selectedSkills = [...snapshot.selectedSkills];
    state.selectedFeats = [...snapshot.selectedFeats];
    state.selectedSpells = [...snapshot.selectedSpells];
    state.finalizedLevel = snapshot.finalizedLevel;
    state.lastLevelSnapshot = null;
    syncPrimaryClassAndLevel();
  }

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
  els.weaponEnhancementSelect.value = String(state.weaponEnhancement);
  els.weaponAbilitySelect.value = state.weaponAbility;
  els.armorEnhancementSelect.value = String(state.armorEnhancement);
  els.armorAbilitySelect.value = state.armorAbility;
  els.weaponSizeSelect.value = state.weaponSize;
  els.itemSelect.value = state.item;
  updateEquipmentRuleTriggers();
  renderEquipmentInventory();

  renderAbilities();
  renderClassLevels();
  renderLanguages();
  renderDeeds();
  renderSkills();
  renderFeats();
  renderSpells();
  renderAllSheets();
  saveCharacterToStorage();
}

function createNewCharacter() {
  const newCharacter = {
    characterId: (globalThis.crypto?.randomUUID?.() || `character-${Date.now()}-${Math.random().toString(36).slice(2)}`),
    charName: 'Unnamed Hero',
    playerName: 'Player',
    raceId: 'human',
    classId: 'fighter',
    classLevels: [{ classId: 'fighter', levels: 1 }],
    level: 1,
    characterCreated: false,
    finalizedLevel: 0,
    levelUpStartingClasses: null,
    levelUpPending: false,
    levelUpStartingHpRolls: null,
    pendingLevelClass: 'fighter',
    levelUpMode: false,
    alignment: 'Lawful Good',
    gender: 'unspecified',
    customPortrait: '',
    abilityMode: 'rolled',
    pointBuyBudget: 32,
    abilityIncreases: [],
    hpRolls: [],
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
    equippedWeapons: ['Longsword'],
    armor: 'Chain Shirt',
    weaponEnhancement: 0,
    weaponAbility: 'none',
    armorEnhancement: 0,
    armorAbility: 'none',
    item: 'Backpack',
    weaponInventory: ['Longsword'],
    armorInventory: ['Chain Shirt'],
    magicInventory: [],
    weaponSize: 'auto',
    selectedLanguages: [],
    deeds: [],
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
  const nextClassId = els.classSelect.value;
  const classChangedDuringCreation = !state.characterCreated
    && !state.levelUpMode
    && nextClassId !== state.classId;
  if (classChangedDuringCreation) {
    state.selectedSkills = [];
    state.selectedFeats = [];
    state.selectedSpells = [];
    state.selectedLanguages = [];
    state.skillRanks = {};
    state.hpRolls = [];
    state.lastHpRollResult = null;
  }
  state.charName = els.charName.value || 'Unnamed Hero';
  state.playerName = els.playerName.value || 'Player';
  state.raceId = els.raceSelect.value;
  state.classId = nextClassId;
  state.level = Number(els.levelInput.value || 1);
  updateCreationButtonLabel();
  if (state.classLevels?.length) state.classLevels[0].classId = state.classId;
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
  const selectedWeapon = els.weaponSelect.value;
  const previousPrimaryWeapon = state.weapon;
  const equippedBeforeSelection = getEquippedWeapons();
  state.weapon = selectedWeapon;
  if (selectedWeapon === 'No Weapon') {
    state.equippedWeapons = equippedBeforeSelection.filter((weapon) => weapon !== previousPrimaryWeapon);
  } else {
    state.equippedWeapons = [selectedWeapon, ...equippedBeforeSelection.filter((weapon) => weapon !== selectedWeapon)];
  }
  state.armor = els.armorSelect.value;
  state.weaponEnhancement = Number(els.weaponEnhancementSelect.value || 0);
  state.weaponAbility = els.weaponAbilitySelect.value;
  state.armorEnhancement = Number(els.armorEnhancementSelect.value || 0);
  state.armorAbility = els.armorAbilitySelect.value;
  state.item = els.itemSelect.value;
  state.weaponInventory = [...new Set(state.weaponInventory || [])];
  state.armorInventory = [...new Set(state.armorInventory || [])];
  state.weaponSize = els.weaponSizeSelect.value;
  if (!classChangedDuringCreation) {
    state.selectedLanguages = [...document.querySelectorAll('[data-language-slot]')]
      .map((input) => input.value)
      .filter(Boolean);
  }
  state.deeds = [...document.querySelectorAll('[data-deed-text]')].map((input) => ({
    text: input.value.trim(),
    level: Number(document.querySelector(`[data-deed-level="${input.dataset.deedText}"]`)?.value || 1)
  })).filter((deed) => deed.text);
  updateEquipmentRuleTriggers();
  renderEquipmentInventory();

  document.querySelectorAll('[data-ability]').forEach((input) => {
    state.abilities[input.dataset.ability] = Number(input.value || 10);
  });

  if (!classChangedDuringCreation) {
    state.selectedSkills = [...document.querySelectorAll('[data-skill]:checked')].map((input) => input.dataset.skill);
    state.selectedFeats = [...document.querySelectorAll('[data-feat]:checked')].map((input) => input.dataset.feat);
    state.selectedSpells = [...document.querySelectorAll('[data-spell]:checked')].map((input) => input.dataset.spell);

    document.querySelectorAll('[data-rank-skill]').forEach((input) => {
      const skillName = input.dataset.rankSkill;
      state.skillRanks[skillName] = Number(input.value || 0);
    });
  }

  renderAbilities();
  renderClassLevels();
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
    if (event.key === 'Escape') {
      hideRulesPopover();
      hidePrintPreview();
    }
  });

  els.printPreviewModal.addEventListener('click', (event) => {
    if (event.target === els.printPreviewModal) hidePrintPreview();
  });

  els.charName.addEventListener('input', syncStateFromInputs);
  els.playerName.addEventListener('input', syncStateFromInputs);
  els.raceSelect.addEventListener('change', syncStateFromInputs);
  els.classSelect.addEventListener('change', syncStateFromInputs);
  els.advancementClassSelect.addEventListener('change', (event) => {
    state.pendingLevelClass = event.target.value;
    renderClassLevels();
    saveCharacterToStorage();
  });
  els.addClassLevelBtn.addEventListener('click', () => {
    if (!state.levelUpMode || state.levelUpPending) return;
    const classId = state.pendingLevelClass || state.classId;
    const existing = state.classLevels.find((entry) => entry.classId === classId);
    if (existing) existing.levels += 1;
    else state.classLevels.push({ classId, levels: 1 });
    state.levelUpPending = true;
    state.hpRollPending = true;
    state.lastHpRollResult = null;
    syncPrimaryClassAndLevel();
    els.classSelect.value = state.classId;
    els.levelInput.value = String(state.level);
    renderClassLevels();
    renderAbilities();
    renderSkills();
    renderFeats();
    renderSpells();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.undoLevelBtn.addEventListener('click', () => {
    if (!state.levelUpPending) return;
    state.classLevels = (state.levelUpStartingClasses || []).map((entry) => ({ ...entry }));
    state.hpRolls = (state.levelUpStartingHpRolls || []).map((entry) => ({ ...entry }));
    state.lastHpRollResult = null;
    state.levelUpPending = false;
    state.hpRollPending = false;
    syncPrimaryClassAndLevel();
    renderClassLevels();
    renderAbilities();
    renderSkills();
    renderFeats();
    renderSpells();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.rollHpBtn.addEventListener('click', () => {
    if (!state.hpRollPending) return;
    const classId = state.pendingLevelClass || state.classId;
    const classData = classCatalog.find((entry) => entry.id === classId) || classCatalog[0];
    const classLevel = getClassLevels().find((entry) => entry.classId === classId)?.levels || 1;
    const previousHpTotal = getHitPointProgression().total;
    state.lastHpRollResult = { classId, classLevel, roll: rollHitDie(classData.hitDie), maximum: classData.hitDie };
    const baselineRolls = state.levelUpStartingHpRolls || state.hpRolls || [];
    state.hpRolls = [...baselineRolls, state.lastHpRollResult];
    state.hpRollPending = false;
    const conModifier = getAbilityModifiers().con;
    const actualHpTotal = getHitPointProgression().total;
    els.hpRollResult.textContent = `HP roll: d${state.lastHpRollResult.maximum} = ${state.lastHpRollResult.roll}. Constitution modifier: ${conModifier >= 0 ? '+' : ''}${conModifier}. HP gained: ${actualHpTotal - previousHpTotal}. Total HP: ${actualHpTotal}.`;
    renderClassLevels();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.levelInput.addEventListener('input', syncStateFromInputs);
  els.alignmentSelect.addEventListener('change', syncStateFromInputs);
  els.abilityModeSelect.addEventListener('change', () => setAbilityMode(els.abilityModeSelect.value));
  els.pointBuyBudgetSelect.addEventListener('change', syncStateFromInputs);
  els.deitySelect.addEventListener('change', syncStateFromInputs);
  els.genderSelect.addEventListener('change', syncStateFromInputs);
  els.portraitInput.addEventListener('change', (event) => {
    const [file] = event.target.files || [];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      window.alert('Please choose an image smaller than 5 MB.');
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      state.customPortrait = String(reader.result || '');
      renderSketchSheet();
      saveCharacterToStorage();
    };
    reader.readAsDataURL(file);
  });
  els.choosePortraitBtn.addEventListener('click', () => els.portraitInput.click());
  els.clearPortraitBtn.addEventListener('click', () => {
    state.customPortrait = '';
    els.portraitInput.value = '';
    renderSketchSheet();
    saveCharacterToStorage();
  });
  els.settingSelect.addEventListener('change', syncStateFromInputs);
  els.krynnPathSelect.addEventListener('change', syncStateFromInputs);
  els.moonSelect.addEventListener('change', syncStateFromInputs);
  els.prestigeClassSelect.addEventListener('change', syncStateFromInputs);
  els.weaponSelect.addEventListener('change', syncStateFromInputs);
  els.weaponEnhancementSelect.addEventListener('change', syncStateFromInputs);
  els.weaponAbilitySelect.addEventListener('change', syncStateFromInputs);
  els.weaponSizeSelect.addEventListener('change', syncStateFromInputs);
  els.armorSelect.addEventListener('change', syncStateFromInputs);
  els.armorEnhancementSelect.addEventListener('change', syncStateFromInputs);
  els.armorAbilitySelect.addEventListener('change', syncStateFromInputs);
  els.itemSelect.addEventListener('change', syncStateFromInputs);
  els.addWeaponBtn.addEventListener('click', () => {
    state.weaponInventory = [...new Set([...(state.weaponInventory || []), state.weapon])];
    renderEquipmentInventory();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.addArmorBtn.addEventListener('click', () => {
    state.armorInventory = [...new Set([...(state.armorInventory || []), state.armor])];
    renderEquipmentInventory();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.addMagicItemBtn.addEventListener('click', () => {
    state.magicInventory = [...new Set([...(state.magicInventory || []), els.magicItemSelect.value])];
    renderEquipmentInventory();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.equipmentInventory.addEventListener('click', (event) => {
    const weaponIndex = event.target.dataset.removeWeapon;
    const armorIndex = event.target.dataset.removeArmor;
    const magicIndex = event.target.dataset.removeMagic;
    const removeItem = event.target.dataset.removeItem;
    const equipWeapon = event.target.dataset.equipWeapon;
    const equipArmor = event.target.dataset.equipArmor;
    if (equipWeapon !== undefined) {
      if (!toggleEquippedWeapon(equipWeapon)) return;
      els.weaponSelect.value = state.weapon;
      updateEquipmentRuleTriggers();
    }
    if (equipArmor !== undefined) {
      state.armor = state.armor === equipArmor ? 'No Armor' : equipArmor;
      els.armorSelect.value = state.armor;
      updateEquipmentRuleTriggers();
    }
    if (weaponIndex !== undefined) {
      const removedWeapon = state.weaponInventory.splice(Number(weaponIndex), 1)[0];
      state.equippedWeapons = getEquippedWeapons().filter((weapon) => weapon !== removedWeapon);
      state.weapon = state.equippedWeapons[0] || 'No Weapon';
      els.weaponSelect.value = state.weapon;
      updateEquipmentRuleTriggers();
    }
    if (armorIndex !== undefined) {
      const removedArmor = state.armorInventory.splice(Number(armorIndex), 1)[0];
      if (removedArmor === state.armor) {
        state.armor = state.armorInventory[0] || 'No Armor';
        els.armorSelect.value = state.armor;
        updateEquipmentRuleTriggers();
      }
    }
    if (magicIndex !== undefined) state.magicInventory.splice(Number(magicIndex), 1);
    if (removeItem !== undefined) {
      state.item = 'No Item';
      els.itemSelect.value = state.item;
    }
    renderEquipmentInventory();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.languagesList.addEventListener('change', syncStateFromInputs);
  els.deedsList.addEventListener('input', syncStateFromInputs);
  els.deedsList.addEventListener('change', syncStateFromInputs);
  els.deedsList.addEventListener('click', (event) => {
    const removeIndex = event.target.dataset.removeDeed;
    if (removeIndex === undefined) return;
    state.deeds.splice(Number(removeIndex), 1);
    renderDeeds();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.addDeedBtn.addEventListener('click', () => {
    state.deeds.push({ level: state.level, text: '' });
    renderDeeds();
    const newInput = els.deedsList.querySelector(`[data-deed-text="${state.deeds.length - 1}"]`);
    newInput?.focus();
    saveCharacterToStorage();
  });

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
  els.completeCharacterBtn.addEventListener('click', () => {
    validateCharacterCreation();
  });
  els.levelUpBtn.addEventListener('click', () => {
    if (state.levelUpMode) {
      validateCharacterCreation();
      return;
    }
    state.levelUpMode = true;
    state.lastLevelSnapshot = captureLevelSnapshot();
    state.levelUpStartingClasses = getClassLevels().map((entry) => ({ ...entry }));
    state.levelUpStartingHpRolls = (state.hpRolls || []).map((entry) => ({ ...entry }));
    state.levelUpPending = false;
    state.pendingLevelClass = state.classId;
    els.levelUpBtn.textContent = 'Finalize';
    renderClassLevels();
    renderAbilities();
    renderSkills();
    renderFeats();
    renderSpells();
    renderAllSheets();
    saveCharacterToStorage();
  });
  els.undoLastLevelBtn.addEventListener('click', () => {
    if (!state.lastLevelSnapshot || state.levelUpMode) return;
    if (window.confirm(`Undo the finalized level ${state.finalizedLevel}? Its class, HP, skills, feats, spells, and ability increase changes will be reverted.`)) {
      restoreLevelSnapshot(state.lastLevelSnapshot);
    }
  });
  els.applyAbilityIncreaseBtn.addEventListener('click', () => {
    if (!state.characterCreated || state.abilityIncreases.length >= getAllowedAbilityIncreases()) return;
    const ability = els.abilityIncreaseSelect.value;
    state.abilities[ability] = Number(state.abilities[ability] || 10) + 1;
    state.abilityIncreases.push({ level: Math.floor(state.level / 4) * 4, ability });
    renderAbilities();
    renderAllSheets();
    saveCharacterToStorage();
  });

  els.playerSheet.addEventListener('change', (event) => {
    const weapon = event.target.dataset.activeWeapon;
    const armor = event.target.dataset.activeArmor;
    if (weapon) {
      if (!toggleEquippedWeapon(weapon)) return;
      els.weaponSelect.value = state.weapon;
      state.weaponInventory = [...new Set([...(state.weaponInventory || []), weapon])];
      updateEquipmentRuleTriggers();
      renderEquipmentInventory();
      renderAllSheets();
      saveCharacterToStorage();
      return;
    }
    if (armor) {
      state.armor = state.armor === armor ? 'No Armor' : armor;
      els.armorSelect.value = state.armor;
      state.armorInventory = [...new Set([...(state.armorInventory || []), armor])];
      updateEquipmentRuleTriggers();
      renderEquipmentInventory();
      renderAllSheets();
      saveCharacterToStorage();
    }
  });

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

  els.generateSketchBtn.addEventListener('click', () => {
    document.querySelectorAll('.sheet-section').forEach((section) => section.classList.remove('active'));
    els.sketchSheet.classList.add('active');
    renderSketchSheet();
  });


  els.exportBtn.addEventListener('click', exportCharacter);
  els.loadBtn.addEventListener('click', () => els.importCharacterInput.click());
  els.importCharacterInput.addEventListener('change', loadCharacterFromFile);

  els.printBtn.addEventListener('click', () => {
    showPrintPreview();
  });
  els.closePrintPreviewBtn.addEventListener('click', hidePrintPreview);
  els.printPreviewPrintBtn.addEventListener('click', () => {
    hidePrintPreview();
    window.print();
  });
}

function init() {
  state.skillRanks = {};
  populateSelects();
  renderClassLevels();
  renderDeeds();
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

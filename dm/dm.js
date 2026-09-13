const STORAGE_KEY = 'dnd35-dm-roster-v1';
const state = { characters: [], activeIndex: 0, removalCandidate: null };

const els = {
  viewSelect: document.querySelector('#viewSelect'),
  importBtn: document.querySelector('#importBtn'),
  syncBtn: document.querySelector('#syncBtn'),
  clearBtn: document.querySelector('#clearBtn'),
  fileInput: document.querySelector('#fileInput'),
  partyStrip: document.querySelector('#partyStrip'),
  characterTabs: document.querySelector('#characterTabs'),
  emptyState: document.querySelector('#emptyState'),
  characterView: document.querySelector('#characterView')
};

els.viewSelect.addEventListener('change', (event) => {
  window.location.href = event.target.value;
});

function modifier(score) {
  return Math.floor((Number(score || 10) - 10) / 2);
}

function getRace(data) {
  const raceNames = {
    human: 'Human', dwarf: 'Dwarf', elf: 'Elf', 'half-elf': 'Half-Elf', gnome: 'Gnome',
    'half-orc': 'Half-Orc', halfling: 'Halfling', kender: 'Kender', draconian: 'Draconian',
    minotaur: 'Minotaur', irda: 'Irda'
  };
  return raceNames[data.raceId] || data.raceId || 'Unknown race';
}

function getLanguages(data) {
  const automatic = {
    human: ['Common'], dwarf: ['Common', 'Dwarven'], elf: ['Common', 'Elven'], 'half-elf': ['Common', 'Elven'],
    gnome: ['Common', 'Gnome'], 'half-orc': ['Common', 'Orc'], halfling: ['Common', 'Halfling'],
    aasimar: ['Common', 'Celestial'], tiefling: ['Common', 'Infernal'], kender: ['Common', 'Kender'],
    draconian: ['Common', 'Draconic'], 'qualinesti-elf': ['Common', 'Elven'], 'silvanesti-elf': ['Common', 'Elven'],
    minotaur: ['Common', 'Minotaur'], irda: ['Common', 'Ancient Irda']
  }[data.raceId] || ['Common'];
  return [...new Set([...automatic, ...(data.selectedLanguages || [])])];
}

function getClasses(data) {
  if (Array.isArray(data.classLevels) && data.classLevels.length) {
    return data.classLevels.map((entry) => `${entry.classId} ${entry.levels}`).join(' / ');
  }
  return `${data.classId || 'unknown'} ${data.level || 1}`;
}

function getAbilityScore(data, ability) {
  const scores = data.abilities || {};
  return Number(scores[ability] || 10);
}

function getHitPoints(data) {
  const constitutionModifier = modifier(getAbilityScore(data, 'con'));
  if (Array.isArray(data.hpRolls) && data.hpRolls.length) {
    return data.hpRolls.reduce((total, entry) => total + Math.max(1, Number(entry.roll || 0) + constitutionModifier), 0);
  }
  const classLevels = data.classLevels || [{ classId: data.classId || 'fighter', levels: Number(data.level || 1) }];
  const hitDice = { barbarian: 12, bard: 6, cleric: 8, druid: 8, fighter: 10, monk: 8, paladin: 10, ranger: 8, rogue: 6, sorcerer: 4, wizard: 4 };
  let total = 0;
  let levelNumber = 0;
  classLevels.forEach((entry) => {
    for (let level = 0; level < Number(entry.levels || 0); level += 1) {
      const die = hitDice[entry.classId] || 8;
      const base = levelNumber === 0 ? die : Math.ceil((die + 1) / 2);
      total += Math.max(1, base + constitutionModifier);
      levelNumber += 1;
    }
  });
  return total;
}

function getBab(data) {
  const classLevels = data.classLevels || [{ classId: data.classId || 'fighter', levels: Number(data.level || 1) }];
  const fast = ['barbarian', 'fighter', 'paladin', 'ranger'];
  const medium = ['bard', 'cleric', 'druid', 'monk', 'rogue'];
  return Math.floor(classLevels.reduce((total, entry) => {
    const levels = Number(entry.levels || 0);
    if (fast.includes(entry.classId)) return total + levels;
    if (medium.includes(entry.classId)) return total + levels * 0.75;
    return total + levels * 0.5;
  }, 0));
}

function getSaves(data) {
  const saveTypes = {
    barbarian: { fort: 'good', ref: 'poor', will: 'poor' }, bard: { fort: 'poor', ref: 'good', will: 'good' },
    cleric: { fort: 'good', ref: 'poor', will: 'good' }, druid: { fort: 'good', ref: 'poor', will: 'good' },
    fighter: { fort: 'good', ref: 'poor', will: 'poor' }, monk: { fort: 'good', ref: 'good', will: 'good' },
    paladin: { fort: 'good', ref: 'poor', will: 'poor' }, ranger: { fort: 'good', ref: 'good', will: 'poor' },
    rogue: { fort: 'poor', ref: 'good', will: 'poor' }, sorcerer: { fort: 'poor', ref: 'poor', will: 'good' },
    wizard: { fort: 'poor', ref: 'poor', will: 'good' }
  };
  const classLevels = data.classLevels || [{ classId: data.classId || 'fighter', levels: Number(data.level || 1) }];
  const mods = { fort: modifier(getAbilityScore(data, 'con')), ref: modifier(getAbilityScore(data, 'dex')), will: modifier(getAbilityScore(data, 'wis')) };
  return ['fort', 'ref', 'will'].reduce((result, save) => {
    result[save] = classLevels.reduce((total, entry) => total + (saveTypes[entry.classId]?.[save] === 'good' ? 2 + Math.floor(Number(entry.levels || 0) / 2) : Math.floor(Number(entry.levels || 0) / 3)), 0) + mods[save];
    return result;
  }, {});
}

function getAc(data) {
  const armorBonuses = {
    'Leather Armor': 2, 'Studded Leather': 3, 'Hide Armor': 3, 'Chain Shirt': 4,
    'Scale Mail': 4, Chainmail: 5, Breastplate: 5, 'Splint Mail': 6, 'Half-Plate': 7, 'Full Plate': 8
  };
  return 10 + modifier(getAbilityScore(data, 'dex')) + (armorBonuses[data.armor] || 0) + Number(data.armorEnhancement || 0);
}

function getWeaponLine(data) {
  const weapon = data.weapon || 'No Weapon';
  const damage = { Longsword: '1d8', Rapier: '1d6', Shortsword: '1d6', Greatsword: '2d6', Dagger: '1d4', Shortbow: '1d6', Longbow: '1d8' }[weapon] || '1d3';
  const strengthBonus = modifier(getAbilityScore(data, 'str'));
  const enhancement = Number(data.weaponEnhancement || 0);
  const attack = getBab(data) + strengthBonus + enhancement;
  return `${weapon}: ${attack >= 0 ? '+' : ''}${attack} attack, ${damage}${strengthBonus >= 0 ? '+' : ''}${strengthBonus} damage`;
}

function saveRoster() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.characters));
}

function characterKey(character) {
  return character.characterId || `${character.charName || 'Unnamed Hero'}::${character.playerName || 'Player'}`;
}

function mergeCharacters(characters) {
  characters.filter((character) => character && typeof character === 'object').forEach((character) => {
    const key = characterKey(character);
    const existingIndex = state.characters.findIndex((entry) => characterKey(entry) === key);
    if (existingIndex >= 0) state.characters[existingIndex] = character;
    else state.characters.push(character);
  });
}

function loadRoster() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    state.characters = Array.isArray(saved) ? saved : [];
  } catch {
    state.characters = [];
  }
}

function escapeHtml(value) {
  return String(value || '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function render() {
  const characters = state.characters;
  els.emptyState.hidden = characters.length > 0;
  els.characterView.hidden = characters.length === 0;
  els.partyStrip.innerHTML = characters.map((character, index) => `
    <div class="party-card ${index === state.activeIndex ? 'active' : ''}" data-party-index="${index}" role="button" tabindex="0">
      <strong>${escapeHtml(character.charName || 'Unnamed Hero')}</strong>
      <span>${escapeHtml(getRace(character))} · ${escapeHtml(getClasses(character))}</span>
      <small>HP ${getHitPoints(character)} · AC ${getAc(character)}</small>
      <button class="remove-character-btn" type="button" data-remove-character="${index}">${state.removalCandidate === index ? 'Confirm Remove' : 'Remove Character'}</button>
    </div>
  `).join('');
  els.characterTabs.innerHTML = characters.map((character, index) => `<button class="character-tab ${index === state.activeIndex ? 'active' : ''}" data-tab-index="${index}">${escapeHtml(character.charName || 'Unnamed Hero')}</button>`).join('');
  if (!characters.length) return;
  const character = characters[state.activeIndex] || characters[0];
    const saves = getSaves(character);
  const feats = character.selectedFeats || [];
  const spells = character.selectedSpells || [];
  const deeds = character.deeds || [];
  const magic = character.magicInventory || [];
  const languages = getLanguages(character);
  els.characterView.innerHTML = `
    <div class="character-heading"><div><p class="eyebrow">Active character</p><h2>${escapeHtml(character.charName || 'Unnamed Hero')}</h2><p>${escapeHtml(getRace(character))} · ${escapeHtml(getClasses(character))} · ${escapeHtml(character.alignment || 'Alignment unknown')}</p></div><div class="character-heading-actions"><span class="setting-badge">${character.setting === 'dragonlance' ? 'Dragonlance 3.5' : 'D&D 3.5'}</span><button class="primary-btn" type="button" data-open-builder="${state.activeIndex}">Open in Character Builder</button></div></div>
    <div class="stat-grid">
      ${[['HP', getHitPoints(character)], ['AC', getAc(character)], ['BAB', `+${getBab(character)}`], ['Init', `${modifier(getAbilityScore(character, 'dex')) >= 0 ? '+' : ''}${modifier(getAbilityScore(character, 'dex'))}`], ['Fort', `${saves.fort >= 0 ? '+' : ''}${saves.fort}`], ['Ref', `${saves.ref >= 0 ? '+' : ''}${saves.ref}`], ['Will', `${saves.will >= 0 ? '+' : ''}${saves.will}`], ['Weapon', getWeaponLine(character)]].map(([label, value]) => `<div class="stat-card"><small>${label}</small><strong>${escapeHtml(value)}</strong></div>`).join('')}
    </div>
    <div class="detail-grid">
      <article class="detail-card"><h3>Abilities</h3><div class="ability-line">${['str', 'dex', 'con', 'int', 'wis', 'cha'].map((ability) => `<span><b>${ability.toUpperCase()}</b> ${getAbilityScore(character, ability)} (${modifier(getAbilityScore(character, ability)) >= 0 ? '+' : ''}${modifier(getAbilityScore(character, ability))})</span>`).join('')}</div></article>
      <article class="detail-card"><h3>Equipment</h3><p><b>Armor:</b> ${escapeHtml(character.armor || 'No Armor')}</p><p><b>Gear:</b> ${escapeHtml(character.item || 'None')}</p><p><b>Weapons:</b> ${escapeHtml((character.weaponInventory || [character.weapon]).join(', '))}</p><p><b>Magic:</b> ${escapeHtml(magic.join(', ') || 'None')}</p></article>
      <article class="detail-card"><h3>Feats</h3><p>${escapeHtml(feats.join(', ') || 'None')}</p></article>
      <article class="detail-card"><h3>Spells</h3><p>${escapeHtml(spells.join(', ') || 'None')}</p></article>
      <article class="detail-card"><h3>Languages</h3><p>${escapeHtml(languages.join(', ') || 'None listed')}</p></article>
      <article class="detail-card"><h3>Deeds & Notes</h3><ul>${deeds.map((deed) => `<li>Level ${Number(deed.level || 1)}: ${escapeHtml(deed.text)}</li>`).join('') || '<li>None recorded</li>'}</ul></article>
    </div>
  `;
}

function importFiles(files) {
  Promise.all([...files].map((file) => file.text().then((text) => JSON.parse(text))))
    .then((characters) => {
      const before = state.characters.length;
      mergeCharacters(characters);
      state.activeIndex = Math.max(0, Math.min(state.characters.length - 1, before));
      saveRoster();
      render();
    })
    .catch(() => window.alert('One or more files were not valid character JSON.'));
}

els.importBtn.addEventListener('click', () => els.fileInput.click());
els.syncBtn.addEventListener('click', () => {
  try {
    const current = JSON.parse(localStorage.getItem('dnd35-character-builder-v1') || 'null');
    if (!current) return window.alert('No saved character was found in the Character Builder.');
    mergeCharacters([current]);
    state.activeIndex = state.characters.findIndex((character) => characterKey(character) === characterKey(current));
    saveRoster();
    render();
  } catch {
    window.alert('The saved builder character could not be read.');
  }
});
els.fileInput.addEventListener('change', (event) => {
  importFiles(event.target.files);
  event.target.value = '';
});
els.clearBtn.addEventListener('click', () => {
  if (!state.characters.length || window.confirm('Clear every character from this DM roster?')) {
    state.characters = [];
    state.activeIndex = 0;
    saveRoster();
    render();
  }
});
document.addEventListener('click', (event) => {
  const openBuilder = event.target.closest('[data-open-builder]');
  if (openBuilder) {
    event.preventDefault();
    const character = state.characters[Number(openBuilder.dataset.openBuilder)];
    if (character) {
      localStorage.setItem('dnd35-character-builder-v1', JSON.stringify(character));
      window.location.href = window.location.protocol === 'file:' ? '../index.html' : '/';
    }
    return;
  }
  const removeButton = event.target.closest('[data-remove-character]');
  if (removeButton) {
    event.preventDefault();
    event.stopPropagation();
    const index = Number(removeButton.dataset.removeCharacter);
    if (state.removalCandidate === index) {
      state.characters.splice(index, 1);
      state.activeIndex = Math.max(0, Math.min(state.activeIndex, state.characters.length - 1));
      state.removalCandidate = null;
      saveRoster();
      render();
    } else {
      state.removalCandidate = index;
      render();
      window.setTimeout(() => {
        if (state.removalCandidate === index) {
          state.removalCandidate = null;
          render();
        }
      }, 4000);
    }
    return;
  }
  const tab = event.target.closest('[data-tab-index], [data-party-index]');
  if (!tab) return;
  state.activeIndex = Number(tab.dataset.tabIndex ?? tab.dataset.partyIndex);
  state.removalCandidate = null;
  render();
});

loadRoster();
render();

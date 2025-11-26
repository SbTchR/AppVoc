// Clés de stockage
const STORAGE_KEY = 'voc-app-lists-v2';
const NOTES_KEY = 'voc-app-notes-v1';

// Liste par défaut
const defaultWords = [
  { french: "l'école", german: "die Schule" },
  { french: "les écoles", german: "die Schulen" },
  { french: "nouveau-elle", german: "neu" },
  { french: "le maître, le professeur, l'enseignant", german: "der Lehrer" },
  { french: "les maîtres, les professeurs, les enseignants", german: "die Lehrer" },
  { french: "la maîtresse, la professeur, l'enseignante", german: "die Lehrerin" },
  { french: "les maîtresses, les professeurs, les enseignantes", german: "die Lehrerinnen" },
  { french: "l'élève", german: "der Schüler" },
  { french: "les élèves", german: "die Schüler" },
  { french: "l'élève", german: "die Schülerin" },
  { french: "les élèves (filles)", german: "die Schülerinnen" },
  { french: "Quelle est ta matière préférée ?", german: "Was ist dein Lieblingsfach?" },
  { french: "Comment peut-on dire cela en allemand ?", german: "Wie kann man das auf Deutsch sagen?" },
  { french: "Je ne comprends pas.", german: "Ich verstehe das nicht." },
  { french: "Pouvez-vous répéter, s'il vous plaît?", german: "Können Sie das bitte wiederholen?" },
  { french: "Qui est-ce ?", german: "Wer ist das ?" },
  { french: "Qu'est-ce que c'est ?", german: "Was ist das?" },
  { french: "Pas des problème !", german: "Kein Problem." },
  { french: "Puis-je aller aux toilettes ?", german: "Darf ich auf die Toilette?" },
  { french: "Quand... ?", german: "Wann…?" },
  { french: "C'est quand la récréation ?", german: "Wann ist Pause?" },
  { french: "Combien (de)... ?", german: "Wie viele...?" },
  { french: "Combien d'heures as-tu le lundi ?", german: "Wie viele Stunden hast du am Montag?" },
  { french: "Quelles langues parles-tu ?", german: "Welche Sprachen sprichst du?" },
  { french: "Je parle...", german: "Ich spreche..." },
  { french: "As-tu un animal domestique ?", german: "Hast du ein Haustier?" },
  { french: "Oui, j'ai un chien", german: "Ja, ich habe einen Hund" },
  { french: "Non, je n'en ai pas.", german: "Nein, ich habe kein Haustier." },
  { french: "les loisirs", german: "die Freizeit" },
  { french: "le hobby, le passe-temps", german: "das Hobby" },
  { french: "les hobbys, les passes-temps", german: "die Hobbys" },
  { french: "Quel est ton passe-temps ?", german: "Was ist dein Hobby?" },
  { french: "lire", german: "lesen" },
  { french: "il lit", german: "er liest" },
  { french: "dessiner", german: "zeichnen" },
  { french: "il dessine", german: "er zeichnet" },
  { french: "nager", german: "schwimmen" },
  { french: "il nage", german: "er schwimmt" },
  { french: "faire du cheval", german: "reiten" },
  { french: "il fait du cheval", german: "er reitet" },
  { french: "rencontrer des amis", german: "Freunde treffen" },
  { french: "il rencontre des amis", german: "er trifft Freunde" },
  { french: "jouer du piano", german: "Klavier spielen" },
  { french: "il joue du piano", german: "er spielt Klavier" },
  { french: "écouter de la musique", german: "Musik hören" },
  { french: "il écoute de la musique", german: "er hört Musik" },
  { french: "Quel est ton passe-temps préféré ?", german: "Was ist dein Lieblingshobby?" },
  { french: "la semaine", german: "die Woche" },
  { french: "les semaines", german: "die Wochen" },
  { french: "lundi", german: "Montag" },
  { french: "mardi", german: "Dienstag" },
  { french: "mercredi", german: "Mittwoch" },
  { french: "jeudi", german: "Donnerstag" },
  { french: "vendredi", german: "Freitag" },
  { french: "samedi", german: "Samstag" },
  { french: "dimanche", german: "Sonntag" },
  { french: "Je joue au tennis le lundi.", german: "Am Montag spiele ich Tennis." },
  { french: "le week-end", german: "das Wochenende" },
  { french: "les week-ends", german: "die Wochenenden" },
  { french: "Quand as-tu du temps ?", german: "Wann hast du Zeit?" },
  { french: "Le week-end.", german: "Am Wochenende." },
  { french: "Le mardi.", german: "Am Dienstag." },
  { french: "L'après-midi.", german: "Am Nachmittag." },
  { french: "la classe", german: "die Klasse" },
  { french: "les classes", german: "die Klassen" },
  { french: "l'emploi du temps", german: "der Stundenplan" },
  { french: "les emplois du temps", german: "die Stundenpläne" },
  { french: "la matière, la branche", german: "das Fach" },
  { french: "la matière, la branche", german: "die Fächer" },
  { french: "la salle scolaire, la pièce", german: "der Raum" },
  { french: "les salles scolaires, les pièces", german: "die Räume" },
  { french: "la salle de classe", german: "das Klassenzimmer" },
  { french: "les salles de classe", german: "die Klassenzimmer" },
  { french: "la salle des professeurs", german: "das Lehrerzimmer" },
  { french: "les toilettes, les WC", german: "die Toiletten" },
  { french: "la piscine", german: "das Schwimmbad" },
  { french: "les piscines", german: "die Schwimmbäder" },
  { french: "la bibliothèque", german: "die Bibliothek" },
  { french: "les bibliothèques", german: "die Bibliotheken" },
  { french: "la cour de récréation", german: "der Pausenhof" },
  { french: "les cours de récréation", german: "die Pausenhöfe" },
  { french: "la cantine scolaire", german: "die Schulkantine" },
  { french: "les sciences naturelles", german: "die Naturwissenschaften" },
  { french: "enseigner", german: "unterrichten" },
  { french: "il enseigne", german: "er unterrichtet" },
  { french: "la salle de travaux manuels, l'atelier", german: "der Werkraum" },
  { french: "les salles de travaux manuels, les ateliers", german: "die Werkräume" },
  { french: "la salle informatique", german: "der Computerraum" },
  { french: "les salles informatiques", german: "die Computerräume" },
  { french: "la salle de biologie", german: "der Biologieraum" },
  { french: "les salles de biologie", german: "die Biologieräume" },
  { french: "la salle d'arts visuels", german: "der Kunstraum" },
  { french: "les salles d'arts visuels", german: "die Kunsträume" },
  { french: "la salle de gym", german: "die Turnhalle" },
  { french: "les salle de gym", german: "die Turnhallen" },
  { french: "le bureau", german: "das Büro" },
  { french: "les bureaux", german: "die Büros" },
  { french: "Où est la salle de biologie ?", german: "Wo ist der Biologieraum?" },
  { french: "Au rez-de-chaussée.", german: "Im Erdgeschoss." },
  { french: "Au premier étage.", german: "Im ersten Stock." },
  { french: "Au deuxième étage.", german: "Im zweiten Stock." },
  { french: "le cuisinier", german: "der Koch" },
  { french: "les cuisiniers", german: "die Köche" },
  { french: "la cuisinière", german: "die Köchin" },
  { french: "les cuisinières", german: "die Köchinnen" },
  { french: "le directeur", german: "der Direktor" },
  { french: "les directeurs", german: "die Direktoren" },
  { french: "la directrice", german: "die Direktorin" },
  { french: "les directrices", german: "die Direktorinnen" },
  { french: "le secrétaire", german: "der Sekretär" },
  { french: "les secrétaires", german: "die Sekretäre" },
  { french: "la secrétaire", german: "die Sekretärin" },
  { french: "les secrétaires (femmes)", german: "die Sekretärinnen" },
  { french: "le concierge", german: "der Hauswart" },
  { french: "les concierges", german: "die Hauswarte" },
  { french: "la concierge", german: "die Hauswärterin" },
  { french: "les concierges (femmes)", german: "die Hauswärterinnen" }
];

const defaultList = { id: 'default-9h-voc1', name: '9H - Voc 1', folder: '9H', words: defaultWords };

// État
let lists = [];
let wordNotes = {};
let currentListId = defaultList.id;
let currentFolderFilter = 'all';
let selectionState = new Map();

let passiveWords = [];
let activeWords = [];
let passiveQueue = [];
let activeQueue = [];
let passiveResults = [];
let activeResults = [];
let passiveErrorThisRound = false;
let activeErrorThisRound = false;
let currentIndex = 0;
let phase = 'idle';
let chunkStack = [];
let targetSanitized = '';
let userChunkInput = '';
let userLetterInput = '';
let letterStack = [];
let startTime = 0;
let currentColorMode = null;
let colorPaletteEnabled = false;

// DOM
const folderFilter = document.getElementById('folder-filter');
const listSelector = document.getElementById('list-selector');
const listMeta = document.getElementById('list-meta');
const wordSelection = document.getElementById('word-selection');
const startButton = document.getElementById('start-learning');
const clearSelectionButton = document.getElementById('clear-selection');
const toggleColorsButton = document.getElementById('toggle-colors');
const globalTags = document.getElementById('global-tags');
const selectionCounter = document.getElementById('selection-counter');
const selectionCard = document.getElementById('selection-card');

const passiveScreen = document.getElementById('passive-screen');
const activeScreen = document.getElementById('active-screen');
const finalScreen = document.getElementById('final-screen');
const germanWordEl = document.getElementById('german-word');
const assembledPassive = document.getElementById('assembled-passive');
const chunkButtons = document.getElementById('chunk-buttons');
const passiveFeedback = document.getElementById('passive-feedback');
const passiveProgress = document.getElementById('passive-progress');
const passiveDots = document.getElementById('passive-dots');
const passiveCount = document.getElementById('passive-count');
const passiveStepLabel = document.getElementById('passive-step-label');

const activeFeedback = document.getElementById('active-feedback');
const letterButtons = document.getElementById('letter-buttons');
const assembledActive = document.getElementById('assembled-active');
const frenchWordEl = document.getElementById('french-word');
const activeProgress = document.getElementById('active-progress');
const activeDots = document.getElementById('active-dots');
const activeCount = document.getElementById('active-count');
const activeStepLabel = document.getElementById('active-step-label');

const timerResult = document.getElementById('timer-result');
const finalMessage = document.getElementById('final-message');
const overlay = document.getElementById('answer-overlay');
const overlaySrc = document.getElementById('overlay-src');
const overlayDst = document.getElementById('overlay-dst');
const overlayCountdown = document.getElementById('overlay-countdown');

let overlayTimeout = null;
let overlayInterval = null;
const ERROR_DELAY = 3500;
let inputLocked = false;

// Utilitaires
function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    localStorage.removeItem(key);
    return fallback;
  }
}

function cloneLists(data) {
  return JSON.parse(JSON.stringify(data || []));
}

function ensureDefaultPresence(arr) {
  const hasDefault = arr.find((l) => l.id === defaultList.id);
  return hasDefault ? arr : [defaultList, ...arr];
}

function normalizeAnswer(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[\s'’\-.,;:!?]/g, '');
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Chargement / sauvegarde
function loadLists() {
  lists = safeParse(STORAGE_KEY, []);
  lists = ensureDefaultPresence(lists);
  saveLists();
}

function saveLists() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));
}

function loadNotes() {
  wordNotes = safeParse(NOTES_KEY, {});
  Object.keys(wordNotes).forEach((listId) => {
    Object.keys(wordNotes[listId]).forEach((idx) => {
      const val = wordNotes[listId][idx];
      if (typeof val === 'string') {
        wordNotes[listId][idx] = { note: val };
      }
    });
  });
  saveNotes();
}

function saveNotes() {
  localStorage.setItem(NOTES_KEY, JSON.stringify(wordNotes));
}

// Listes distantes (lists.json committé)
async function fetchLocalListsJson() {
  try {
    const res = await fetch('./lists.json', { cache: 'no-store' });
    if (!res.ok) return null;
    const payload = await res.json();
    if (!payload || !Array.isArray(payload.lists)) return null;
    return payload.lists;
  } catch (e) {
    return null;
  }
}

function applyRemoteLists(remoteLists) {
  if (!remoteLists || !remoteLists.length) return false;
  lists = ensureDefaultPresence(cloneLists(remoteLists));
  saveLists();
  if (!lists.find((l) => l.id === currentListId)) currentListId = lists[0].id;
  cleanupNotes();
  renderFolderFilter();
  renderListSelector();
  renderWordSelection();
  return true;
}

function cleanupNotes() {
  const validIds = new Set(lists.map((l) => l.id));
  Object.keys(wordNotes).forEach((id) => { if (!validIds.has(id)) delete wordNotes[id]; });
  saveNotes();
}

// Overlays
function hideOverlay() {
  if (!overlay) return;
  overlay.classList.add('hidden');
  if (overlaySrc) overlaySrc.textContent = '';
  if (overlayDst) overlayDst.textContent = '';
  overlayCountdown.textContent = '';
  if (overlayTimeout) clearTimeout(overlayTimeout);
  if (overlayInterval) clearInterval(overlayInterval);
  overlayTimeout = null;
  overlayInterval = null;
  inputLocked = false;
}

function showOverlay(src, dst, success, onDone) {
  if (!overlay) { onDone && onDone(); return; }
  hideOverlay();
  inputLocked = true;
  overlay.classList.remove('hidden');
  overlay.style.pointerEvents = 'auto';
  if (overlaySrc) overlaySrc.textContent = src || '';
  if (overlayDst) overlayDst.textContent = dst || '';
  if (overlayDst) overlayDst.style.color = success ? '#16a34a' : '#dc2626';
  let remaining = ERROR_DELAY;
  overlayCountdown.textContent = `${(remaining / 1000).toFixed(1)}s`;
  overlayInterval = setInterval(() => {
    remaining -= 100;
    if (remaining <= 0) return;
    overlayCountdown.textContent = `${(remaining / 1000).toFixed(1)}s`;
  }, 100);
  overlayTimeout = setTimeout(() => {
    hideOverlay();
    if (onDone) onDone();
  }, ERROR_DELAY);
}

// Rendu des listes
function getFolders() {
  const folders = new Set();
  lists.forEach((l) => folders.add(l.folder || 'Sans dossier'));
  return Array.from(folders);
}

function renderFolderFilter() {
  const folders = getFolders();
  folderFilter.innerHTML = '';
  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  allOpt.textContent = 'Tous les dossiers';
  folderFilter.appendChild(allOpt);
  folders.forEach((folder) => {
    const opt = document.createElement('option');
    opt.value = folder;
    opt.textContent = folder;
    folderFilter.appendChild(opt);
  });
  folderFilter.value = currentFolderFilter;
}

function renderListSelector() {
  const visibleLists = lists.filter((l) => currentFolderFilter === 'all' || (l.folder || 'Sans dossier') === currentFolderFilter);
  listSelector.innerHTML = '';
  if (!visibleLists.length) {
    listMeta.textContent = 'Aucune liste dans ce dossier.';
    startButton.disabled = true;
    selectionCounter.textContent = '0 mot(s) sélectionné(s) · min 4';
    wordSelection.innerHTML = '';
    selectionState = new Map();
    return;
  }
  visibleLists.forEach((list) => {
    const option = document.createElement('option');
    option.value = list.id;
    option.textContent = `${list.name} (${list.words.length} mots)`;
    listSelector.appendChild(option);
  });
  if (!visibleLists.find((l) => l.id === currentListId)) {
    currentListId = visibleLists[0].id;
  }
  listSelector.value = currentListId;
  updateListMeta();
}

function updateListMeta() {
  const current = lists.find((l) => l.id === currentListId);
  if (!current) {
    listMeta.textContent = 'Aucune liste dans ce dossier.';
    return;
  }
  const folderLabel = current.folder ? `Dossier : ${current.folder} · ` : '';
  listMeta.textContent = `${folderLabel}${current.words.length} mot(s) disponible(s).`;
}

function renderWordSelection() {
  const list = lists.find((l) => l.id === currentListId);
  if (!list) return;
  selectionState = new Map();
  wordSelection.innerHTML = '';
  list.words.forEach((word, index) => {
    selectionState.set(index, { passive: false, active: false });
    const card = document.createElement('div');
    card.className = 'word-card';
    card.dataset.index = index;
    const text = document.createElement('div');
    text.className = 'word-text';
    text.innerHTML = `<div class="german">${word.german}</div><div class="french">${word.french}</div>`;

    const chipGroup = document.createElement('div');
  chipGroup.className = 'chip-group';

  const passiveChip = document.createElement('button');
  passiveChip.className = 'chip';
  passiveChip.textContent = 'P';
  passiveChip.addEventListener('click', (e) => { e.stopPropagation(); toggleSelection(index, 'passive', passiveChip, activeChip); });

  const activeChip = document.createElement('button');
  activeChip.className = 'chip';
  activeChip.textContent = 'A';
  activeChip.addEventListener('click', (e) => { e.stopPropagation(); toggleSelection(index, 'active', passiveChip, activeChip); });

    chipGroup.appendChild(passiveChip);
    chipGroup.appendChild(activeChip);

    card.appendChild(text);
    card.appendChild(chipGroup);
    wordSelection.appendChild(card);

    card.addEventListener('click', () => {
      if (colorPaletteEnabled) {
        if (currentColorMode) applyTag(list.id, index, currentColorMode, card);
        return;
      }
      cycleNote(list.id, index, card);
    });

    applyTag(list.id, index, getStoredTag(list.id, index), card, true);
    applyNoteClasses(list.id, index, card);
    syncSelectionState(index, passiveChip, activeChip);
  });
  updateStartButtonState();
}

// Sélection & marquage
function toggleSelection(index, type, passiveChip, activeChip) {
  const state = selectionState.get(index) || { passive: false, active: false };
  if (type === 'passive') {
    state.passive = !state.passive;
    if (!state.passive) state.active = false;
  } else {
    state.active = !state.active;
    state.passive = state.active ? true : state.passive;
  }
  selectionState.set(index, state);
  passiveChip.classList.toggle('active', state.passive);
  activeChip.classList.toggle('active', state.active);
  updateStartButtonState();
}

function syncSelectionState(index, passiveChip, activeChip) {
  const state = selectionState.get(index) || { passive: false, active: false };
  passiveChip.classList.toggle('active', state.passive);
  activeChip.classList.toggle('active', state.active);
}

function ensureNoteObj(listId, index) {
  wordNotes[listId] = wordNotes[listId] || {};
  if (!wordNotes[listId][index]) wordNotes[listId][index] = {};
  if (typeof wordNotes[listId][index] === 'string') {
    wordNotes[listId][index] = { note: wordNotes[listId][index] };
  }
  return wordNotes[listId][index];
}

function cycleNote(listId, index, card) {
  const entry = ensureNoteObj(listId, index);
  if (entry.note === 'easy') entry.note = 'hard';
  else if (entry.note === 'hard') entry.note = 'skip';
  else if (entry.note === 'skip') entry.note = null;
  else entry.note = 'easy';
  if (!entry.note && !entry.tag) delete wordNotes[listId][index];
  saveNotes();
  if (entry.note === 'skip') {
    if (selectionState.has(index)) {
      selectionState.set(index, { passive: false, active: false });
    }
    const chips = card.querySelectorAll('.chip');
    chips.forEach((chip) => chip.classList.remove('active'));
  }
  applyNoteClasses(listId, index, card);
}

function applyNoteClasses(listId, index, card) {
  const entry = wordNotes[listId] ? wordNotes[listId][index] : null;
  const note = entry ? entry.note : null;
  card.classList.toggle('note-easy', note === 'easy');
  card.classList.toggle('note-hard', note === 'hard');
  card.classList.toggle('note-skip', note === 'skip');
}

const tagColors = {
  blue: '#0ea5e9',
  pink: '#ec4899',
  green: '#22c55e',
  red: '#ef4444',
  black: '#0f172a'
};

function applyTag(listId, index, tag, card, skipSave) {
  const existingEntry = wordNotes[listId] ? wordNotes[listId][index] : null;
  if (tag === null || tag === undefined) tag = existingEntry ? existingEntry.tag || null : null;
  if (tag === 'black') tag = null;
  if (!tag && !existingEntry && skipSave) return;
  const entry = ensureNoteObj(listId, index);
  entry.tag = tag;
  if (!entry.note && !entry.tag) delete wordNotes[listId][index];
  if (!skipSave) saveNotes();
  const text = card.querySelector('.word-text');
  if (text) {
    const color = tag ? tagColors[tag] : null;
    text.style.color = color || 'inherit';
  }
}

function getStoredTag(listId, index) {
  const entry = wordNotes[listId] ? wordNotes[listId][index] : null;
  return entry ? entry.tag || null : null;
}

function updateSelectionCounter() {
  const { passiveCount } = getSelectedWords();
  selectionCounter.textContent = `${passiveCount} mot(s) sélectionné(s) · min 4`;
}

function updateStartButtonState() {
  const { passiveCount } = getSelectedWords();
  startButton.disabled = passiveCount < 4;
  const remaining = Math.max(0, 4 - passiveCount);
  startButton.textContent = passiveCount < 4 ? `Lancer (encore ${remaining})` : 'Lancer l\'entraînement';
  updateSelectionCounter();
}

function setColorMode(tag) {
  currentColorMode = tag;
  if (!globalTags) return;
  const buttons = Array.from(globalTags.querySelectorAll('.tag-dot'));
  buttons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.tag === tag);
  });
}

function getSelectedWords() {
  const list = lists.find((l) => l.id === currentListId);
  if (!list) return { passiveWords: [], activeWords: [], passiveCount: 0 };
  const passive = [];
  const active = [];
  selectionState.forEach((state, index) => {
    if (state.passive) passive.push(list.words[index]);
    if (state.active) active.push(list.words[index]);
  });
  return { passiveWords: passive, activeWords: active, passiveCount: passive.length };
}

// Jeu
function chunkStringWithSpaces(str) {
  const chunks = [];
  let i = 0;
  while (i < str.length) {
    const remaining = str.length - i;
    let size = remaining % 3 === 1 ? 2 : 3;
    if (remaining <= 3) size = remaining;
    chunks.push(str.slice(i, i + size));
    i += size;
  }
  return chunks;
}

const alphabet = 'abcdefghijklmnopqrstuvwxyzäöüß';
const alphabetExtended = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäöüß ';

function randomChunk(len) {
  let res = '';
  for (let i = 0; i < len; i++) {
    res += alphabetExtended[Math.floor(Math.random() * alphabetExtended.length)];
  }
  return res;
}

function buildChunks(word) {
  const trimmed = word.trim();
  const chunks = chunkStringWithSpaces(trimmed);
  const options = [...chunks];
  while (options.length < chunks.length + 3) {
    const size = Math.random() > 0.5 ? 3 : 2;
    const candidate = randomChunk(size);
    if (!options.includes(candidate)) {
      options.push(candidate);
    }
  }
  return { targetRaw: trimmed, targetNormalized: normalizeAnswer(trimmed), options: shuffle(options) };
}

function buildLetters(word) {
  const raw = word.trim();
  const chars = Array.from(raw);
  const counts = {};
  chars.forEach((c) => {
    counts[c] = (counts[c] || 0) + 1;
  });
  const letters = [...chars];
  while (letters.length < chars.length + 3) {
    const intruder = alphabetExtended[Math.floor(Math.random() * alphabetExtended.length)];
    letters.push(intruder);
  }
  return { targetRaw: raw, targetNormalized: normalizeAnswer(raw), letters: shuffle(letters), counts };
}

function updateDots(container, total, current, results) {
  container.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (results && results[i] === true) dot.classList.add('success');
    if (results && results[i] === false) dot.classList.add('error');
    if (i < current) dot.classList.add('done');
    if (i === current) dot.classList.add('current');
    container.appendChild(dot);
  }
}

function updateProgress(progressEl, labelEl, countEl, current, total, phaseLabel) {
  const percent = Math.min(100, Math.round((current / total) * 100));
  progressEl.style.width = `${percent}%`;
  const displayIndex = Math.min(current + 1, total);
  labelEl.textContent = `${phaseLabel} · ${displayIndex} / ${total}`;
  countEl.textContent = `${total - current} restant(s)`;
}

function resetGameViews() {
  passiveScreen.style.display = 'none';
  activeScreen.style.display = 'none';
  finalScreen.style.display = 'none';
  selectionCard.style.display = 'block';
  passiveFeedback.textContent = '';
  activeFeedback.textContent = '';
  chunkButtons.innerHTML = '';
  letterButtons.innerHTML = '';
  assembledPassive.textContent = '';
  assembledActive.textContent = '';
  chunkStack = [];
  userChunkInput = '';
  userLetterInput = '';
  passiveResults = [];
  activeResults = [];
  passiveErrorThisRound = false;
  activeErrorThisRound = false;
  inputLocked = false;
  hideOverlay();
}

function startPassivePhase() {
  const selection = getSelectedWords();
  passiveWords = selection.passiveWords;
  activeWords = selection.activeWords;
  phase = 'passive';
  passiveQueue = shuffle([...passiveWords]);
  passiveResults = new Array(passiveQueue.length).fill(null);
  passiveErrorThisRound = false;
  currentIndex = 0;
  selectionCard.style.display = 'none';
  passiveScreen.style.display = 'block';
  activeScreen.style.display = 'none';
  finalScreen.style.display = 'none';
  startTime = Date.now();
  renderPassiveWord();
  passiveScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPassiveWord() {
  if (currentIndex >= passiveQueue.length) {
    if (passiveErrorThisRound) {
      passiveQueue = shuffle([...passiveWords]);
      passiveResults = new Array(passiveQueue.length).fill(null);
      currentIndex = 0;
      passiveErrorThisRound = false;
      userChunkInput = '';
      chunkStack = [];
      assembledPassive.textContent = 'Tape la traduction en français';
      chunkButtons.innerHTML = '';
      return renderPassiveWord();
    } else {
      if (activeWords.length > 0) {
        startActivePhase();
      } else {
        finishSession();
      }
      return;
    }
  }
  const word = passiveQueue[currentIndex];
  germanWordEl.textContent = word.german;
  const { targetNormalized, options } = buildChunks(word.french);
  targetSanitized = targetNormalized;
  userChunkInput = '';
  chunkStack = [];
  assembledPassive.textContent = 'Tape la traduction en français';
  chunkButtons.innerHTML = '';
  options.forEach((chunk) => {
    const btn = document.createElement('button');
    btn.className = 'chunk-btn';
    btn.textContent = chunk.replace(/ /g, '␣');
    btn.dataset.raw = chunk;
    btn.addEventListener('click', () => {
      if (btn.classList.contains('used')) return;
      btn.classList.add('used');
      userChunkInput += chunk;
      chunkStack.push({ chunk, btn });
      assembledPassive.textContent = userChunkInput;
    });
    chunkButtons.appendChild(btn);
  });
  updateDots(passiveDots, passiveWords.length, currentIndex, passiveResults);
  updateProgress(passiveProgress, passiveStepLabel, passiveCount, currentIndex, passiveWords.length, 'Passif');
  passiveFeedback.className = 'feedback';
  passiveFeedback.textContent = '';
}

function undoChunk() {
  const last = chunkStack.pop();
  if (!last) return;
  const { chunk, btn } = last;
  userChunkInput = userChunkInput.slice(0, -chunk.length);
  btn.classList.remove('used');
  assembledPassive.textContent = userChunkInput || 'Tape la traduction en français';
}

function validatePassive() {
  if (inputLocked) return;
  const word = passiveQueue[currentIndex];
  const isCorrect = normalizeAnswer(userChunkInput) === targetSanitized;
  passiveResults[currentIndex] = isCorrect;
  if (isCorrect) {
    passiveFeedback.textContent = `${word.french}`;
    passiveFeedback.className = 'feedback success';
    updateDots(passiveDots, passiveWords.length, currentIndex, passiveResults);
    currentIndex++;
    inputLocked = true;
    setTimeout(() => {
      passiveFeedback.textContent = '';
      inputLocked = false;
      renderPassiveWord();
    }, 1000);
    return;
  } else {
    passiveFeedback.textContent = ``;
    passiveFeedback.className = 'feedback';
    passiveErrorThisRound = true;
    showOverlay(word.german, word.french, false, () => {
      updateDots(passiveDots, passiveWords.length, currentIndex, passiveResults);
      currentIndex++;
      renderPassiveWord();
    });
    return;
  }
}

function startActivePhase() {
  phase = 'active';
  activeQueue = shuffle([...activeWords]);
  activeResults = new Array(activeQueue.length).fill(null);
  activeErrorThisRound = false;
  currentIndex = 0;
  passiveScreen.style.display = 'none';
  activeScreen.style.display = 'block';
  finalScreen.style.display = 'none';
  renderActiveWord();
  activeScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderActiveWord() {
  if (currentIndex >= activeQueue.length) {
    if (activeErrorThisRound) {
      activeQueue = shuffle([...activeWords]);
      activeResults = new Array(activeQueue.length).fill(null);
      currentIndex = 0;
      activeErrorThisRound = false;
      userLetterInput = '';
      letterStack = [];
      assembledActive.textContent = 'Assemble le mot allemand';
      letterButtons.innerHTML = '';
      return renderActiveWord();
    } else {
      finishSession();
      return;
    }
  }
  const word = activeQueue[currentIndex];
  frenchWordEl.textContent = word.french;
  const { targetNormalized, letters, counts } = buildLetters(word.german);
  targetSanitized = targetNormalized;
  userLetterInput = '';
  letterStack = [];
  assembledActive.textContent = 'Assemble le mot allemand';
  letterButtons.innerHTML = '';
  const buttonCounts = {};
  letters.forEach((letter) => {
    buttonCounts[letter] = (buttonCounts[letter] || 0) + 1;
  });
  letters.forEach((letter) => {
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter === ' ' ? '␣' : letter;
    btn.dataset.letter = letter;
    btn.dataset.remaining = counts[letter] ? counts[letter] : 1;
    btn.addEventListener('click', () => {
      if (btn.classList.contains('used')) return;
      const remaining = parseInt(btn.dataset.remaining, 10);
      const totalUsed = buttonCounts[letter] - remaining;
      if (totalUsed >= buttonCounts[letter]) return;
      userLetterInput += letter;
      letterStack.push({ letter, btn });
      assembledActive.textContent = userLetterInput;
      btn.dataset.remaining = remaining - 1;
      if (parseInt(btn.dataset.remaining, 10) <= 0) {
        btn.classList.add('used');
        btn.disabled = true;
      }
    });
    letterButtons.appendChild(btn);
  });
  updateDots(activeDots, activeWords.length, currentIndex, activeResults);
  updateProgress(activeProgress, activeStepLabel, activeCount, currentIndex, activeWords.length, 'Actif');
  activeFeedback.className = 'feedback';
  activeFeedback.textContent = '';
}

function eraseLetter() {
  if (!userLetterInput.length) return;
  const last = letterStack.pop();
  userLetterInput = userLetterInput.slice(0, -1);
  if (last && last.btn) {
    let remaining = parseInt(last.btn.dataset.remaining, 10);
    remaining = remaining + 1;
    last.btn.dataset.remaining = remaining;
    last.btn.disabled = false;
    last.btn.classList.remove('used');
  }
  assembledActive.textContent = userLetterInput || 'Assemble le mot allemand';
}

function validateActive() {
  if (inputLocked) return;
  const word = activeQueue[currentIndex];
  const isCorrect = normalizeAnswer(userLetterInput) === targetSanitized;
  activeResults[currentIndex] = isCorrect;
  if (isCorrect) {
    activeFeedback.textContent = `Réponse : ${word.german}`;
    activeFeedback.className = 'feedback success';
    updateDots(activeDots, activeWords.length, currentIndex, activeResults);
    currentIndex++;
    inputLocked = true;
    setTimeout(() => {
      activeFeedback.textContent = '';
      inputLocked = false;
      renderActiveWord();
    }, 1000);
    return;
  } else {
    activeFeedback.textContent = ``;
    activeFeedback.className = 'feedback';
    activeErrorThisRound = true;
    showOverlay(word.french, word.german, false, () => {
      updateDots(activeDots, activeWords.length, currentIndex, activeResults);
      currentIndex++;
      renderActiveWord();
    });
    return;
  }
}

function finishSession() {
  phase = 'done';
  passiveScreen.style.display = 'none';
  activeScreen.style.display = 'none';
  finalScreen.style.display = 'block';
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;
  timerResult.textContent = `Temps : ${minutes} min ${seconds < 10 ? '0' : ''}${seconds} sec`;
  const total = passiveWords.length + activeWords.length;
  finalMessage.textContent = `${total} mot(s) validé(s). Tu peux rejouer ou changer de liste.`;
}

function backToList() {
  phase = 'idle';
  resetGameViews();
  passiveScreen.style.display = 'none';
  activeScreen.style.display = 'none';
  finalScreen.style.display = 'none';
}

function clearSelection() {
  selectionState.forEach((state, index) => {
    state.passive = false;
    state.active = false;
    selectionState.set(index, state);
  });
  const chips = document.querySelectorAll('.chip');
  chips.forEach((chip) => chip.classList.remove('active'));
  updateStartButtonState();
  setColorMode(null);
}

// Événements
function initEvents() {
  folderFilter.addEventListener('change', () => {
    currentFolderFilter = folderFilter.value;
    renderListSelector();
    renderWordSelection();
  });

  listSelector.addEventListener('change', () => {
    currentListId = listSelector.value;
    updateListMeta();
    renderWordSelection();
  });

  startButton.addEventListener('click', () => {
    const { passiveCount } = getSelectedWords();
    if (passiveCount < 4) {
      alert('Sélectionne au moins 4 mots.');
      return;
    }
    resetGameViews();
    startPassivePhase();
  });

  clearSelectionButton.addEventListener('click', clearSelection);
  if (globalTags) {
    globalTags.querySelectorAll('.tag-dot').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tag = btn.dataset.tag;
        const nextTag = currentColorMode === tag ? null : tag;
        setColorMode(nextTag);
      });
    });
  }

  if (toggleColorsButton) {
    toggleColorsButton.addEventListener('click', () => {
      colorPaletteEnabled = !colorPaletteEnabled;
      globalTags.classList.toggle('hidden', !colorPaletteEnabled);
      if (!colorPaletteEnabled) {
        setColorMode(null);
      }
    });
    colorPaletteEnabled = false;
    globalTags.classList.add('hidden');
  }

  document.getElementById('undo-chunk').addEventListener('click', undoChunk);
  document.getElementById('validate-passive').addEventListener('click', validatePassive);
  document.getElementById('back-to-list-passive').addEventListener('click', backToList);

  document.getElementById('erase-letter').addEventListener('click', eraseLetter);
  document.getElementById('validate-active').addEventListener('click', validateActive);
  document.getElementById('back-to-list-active').addEventListener('click', backToList);

  document.getElementById('restart').addEventListener('click', backToList);
}

// Bootstrap
async function bootstrap() {
  loadLists();
  loadNotes();
  cleanupNotes();
  renderFolderFilter();
  renderListSelector();
  renderWordSelection();
  initEvents();

  const remoteLists = await fetchLocalListsJson();
  if (remoteLists) applyRemoteLists(remoteLists);
  if (!lists.length) {
    lists = ensureDefaultPresence([]);
    saveLists();
    renderFolderFilter();
    renderListSelector();
    renderWordSelection();
  }
}

bootstrap();

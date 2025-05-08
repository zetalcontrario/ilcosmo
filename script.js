/* ================ CONFIGURAZIONI ================ */
const COLOR_MAP = {
  // 1. MUTUALISMO (+/+)
  'mutualistOf': '#00FF00',
  'hasMutualist': '#00FF00',
  'pollinates': '#00FF00',
  'pollinatedBy': '#00FF00',
  'symbiontOf': '#00FF00',
  'hasSymbiont': '#00FF00',
  'flowersVisitedBy': '#00FF00',
  'visitsFlowersOf': '#00FF00',
  'createsHabitatFor': '#00FF00',
  'habitatCreatedBy': '#00FF00',

  // 2. SFRUTTAMENTO (+/-)
  'eats': '#FFA500',
  'preysOn': '#FFA500',
  'parasiteOf': '#FFA500',
  'ectoparasiteOf': '#FFA500',
  'pathogenOf': '#FFA500',
  'kills': '#FFA500',
  'rootparasiteOf': '#FFA500',

  // 3. SFRUTTAMENTO (-/+)
  'eatenBy': '#FF0000',
  'preyedUponBy': '#FF0000',
  'hasParasite': '#FF0000',
  'hasEctoparasite': '#FF0000',
  'hasPathogen': '#FF0000',
  'killedBy': '#FF0000',
  'hasRootparasite': '#FF0000',

  // 4. COMMENSALISMO (+/0)
  'epiphyteOf': '#0000FF',
  'livesOn': '#0000FF',
  'livesUnder': '#0000FF',
  'dispersalVectorOf': '#0000FF',
  'acquiresNutrientsFrom': '#0000FF',
  'hasRoost': '#0000FF',

  // 5. COMMENSALISMO (0/+)
  'hasEpiphyte': '#00FFFF',
  'livedOnBy': '#00FFFF',
  'livedUnderBy': '#00FFFF',
  'hasDispersalVector': '#00FFFF',
  'roostOf': '#00FFFF',

  // 6. NEUTRALISMO (0/0)
  'adjacentTo': '#808080',
  'coOccursWith': '#808080',
  'ecologicallyRelatedTo': '#808080',
  'interactsWith': '#808080',

  // 7. RELAZIONI COMPLESSE
  'visitedBy': '#FF00FF',
  'visits': '#FF00FF',
  'guestOf': '#FF00FF',
  'hasGuest': '#FF00FF',
  'hasHost': '#FF00FF',
  'hostOf': '#FF00FF',
  'hasVector': '#FF00FF',
  'vectorOf': '#FF00FF',
  'hasHabitat': '#FF00FF',
  'habitatOf': '#FF00FF',
  'hasEggsLayedOnBy': '#FF00FF',
  'laysEggsOn': '#FF00FF',

  'default': '#000000'
};

const ITALIAN_LABELS = {
  'mutualistOf': 'è mutualista di',
  'hasMutualist': 'ha come mutualista',
  'pollinates': 'impollina',
  'pollinatedBy': 'è impollinato da',
  'symbiontOf': 'è simbionte di',
  'hasSymbiont': 'ha come simbionte',
  'flowersVisitedBy': 'ha i fiori visitati da',
  'visitsFlowersOf': 'visita fiori di',
  'createsHabitatFor': "crea l'habitat per",
  'habitatCreatedBy': "ha l'habitat creato da",
  'eats': 'mangia',
  'preysOn': 'preda',
  'parasiteOf': 'è parassita di',
  'ectoparasiteOf': 'è ectoparassita di',
  'pathogenOf': 'è patogeno di',
  'kills': 'uccide',
  'rootparasiteOf': 'è parassita radicale di',
  'eatenBy': 'è mangiato da',
  'preyedUponBy': 'è predato da',
  'hasParasite': 'ha come parassita',
  'hasEctoparasite': 'ha come ectoparassita',
  'hasPathogen': 'ha come patogeno',
  'killedBy': 'è ucciso da',
  'hasRootparasite': 'ha come parassita radicale',
  'epiphyteOf': 'è epifita di',
  'livesOn': 'vive su',
  'livesUnder': 'vive sotto',
  'dispersalVectorOf': 'è vettore di dispersione per',
  'acquiresNutrientsFrom': 'ottiene nutrienti da',
  'hasRoost': 'ha nido in',
  'hasEpiphyte': 'ha epifita',
  'livedOnBy': 'ospita su di sé',
  'livedUnderBy': 'ospita sotto di sé',
  'hasDispersalVector': 'ha vettore di dispersione',
  'roostOf': 'è il nido di',
  'adjacentTo': 'è adiacente a',
  'coOccursWith': 'co-occorre con',
  'ecologicallyRelatedTo': 'è relazionato ecologicamente a',
  'interactsWith': 'interagisce con',
  'visitedBy': 'è visitato da',
  'visits': 'visita',
  'guestOf': 'è ospite di',
  'hasGuest': 'ha come ospite',
  'hasHost': 'è ospitato da',
  'hostOf': 'è ospitante di',
  'hasVector': 'ha vettore',
  'vectorOf': 'è vettore di',
  'hasHabitat': 'ha habitat',
  'habitatOf': 'è habitat di',
  'hasEggsLayedOnBy': 'ha uova deposte da',
  'laysEggsOn': 'depone uova su'
};

const PRIORITY = {
  'eats': 1, 'preysOn': 1, 'parasiteOf': 1, 'ectoparasiteOf': 1, 'pathogenOf': 1, 'kills': 1, 'rootparasiteOf': 1,
  'eatenBy': 2, 'preyedUponBy': 2, 'hasParasite': 2, 'hasEctoparasite': 2, 'hasPathogen': 2, 'killedBy': 2, 'hasRootparasite': 2,
  'mutualistOf': 3, 'hasMutualist': 3, 'pollinates': 3, 'pollinatedBy': 3, 'symbiontOf': 3, 'hasSymbiont': 3,
  'flowersVisitedBy': 3, 'visitsFlowersOf': 3, 'createsHabitatFor': 3, 'habitatCreatedBy': 3,
  'epiphyteOf': 4, 'livesOn': 4, 'livesUnder': 4, 'dispersalVectorOf': 4, 'acquiresNutrientsFrom': 4, 'hasRoost': 4,
  'hasEpiphyte': 5, 'livedOnBy': 5, 'livedUnderBy': 5, 'hasDispersalVector': 5, 'roostOf': 5,
  'adjacentTo': 6, 'coOccursWith': 6, 'ecologicallyRelatedTo': 6, 'interactsWith': 6,
  'visitedBy': 7, 'visits': 7, 'guestOf': 7, 'hasGuest': 7, 'hasHost': 7, 'hostOf': 7, 'hasVector': 7,
  'vectorOf': 7, 'hasHabitat': 7, 'habitatOf': 7, 'hasEggsLayedOnBy': 7, 'laysEggsOn': 7,
  'default': 99
};

/* ================ STATO APPLICAZIONE ================ */
const state = {
  speciesToLabels: new Map(),
  lastShownImageIndex: new Map(),
  speciesImagesMap: new Map(),
  imageToUserMap: new Map(),
  osservazioniMap: new Map(),
  commonNames: new Map(),
  useCommonNames: false,
  showInfoPanel: false  
};

/* ================ UTILITIES ================ */
const utils = {
  capitalizeFirst: str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),

  getDisplayName: scientificName => {
    if (state.useCommonNames && state.commonNames.has(scientificName)) {
      return utils.capitalizeFirst(state.commonNames.get(scientificName));
    }
    return scientificName.replace(/_/g, ' ');
  },

  getSpecieFromURL: () => {
    const params = new URLSearchParams(window.location.search);
    const specie = params.get('specie');
    return specie ? specie.replace(/_/g, ' ') : 'Homo sapiens';
  },

  updateURLParam: (species, nameMode, infoState) => {
    const params = new URLSearchParams(window.location.search);
    params.set('specie', species.replace(/ /g, '_'));
    params.set('name_mode', nameMode ? 'common' : 'scientific');
    params.set('info', infoState ? 'show' : 'hide');
    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
  },

  invertInteractionLabel: label => {
    const inversionMap = {
      // ... (mantieni lo stesso contenuto) ...
    };
    return inversionMap[label] || label;
  }
};

/* ================ GESTIONE DATI ================ */
const dataHandler = {
  loadCommonNames: async () => {
    try {
      const response = await fetch('nome_comune.csv');
      const data = Papa.parse(await response.text(), { header: true }).data;
      data.forEach(row => {
        if (row.scientific_name && row.common_name) {
          state.commonNames.set(row.scientific_name.trim(), row.common_name.trim());
        }
      });
    } catch (error) {
      console.error("Errore caricamento nomi comuni:", error);
    }
  },

  loadCSV: async filename => {
    const response = await fetch(`${filename}?t=${Date.now()}`);
    if (!response.ok) throw new Error(`Errore caricamento CSV: ${response.status}`);
    return Papa.parse(await response.text(), { 
      header: true, 
      skipEmptyLines: true, 
      transformHeader: h => h.trim() 
    }).data;
  },

  loadSpeciesImages: csvText => {
    const lines = csvText.trim().split('\n');
    const headers = lines.shift().split(',').map(h => h.trim());
    const nameIndex = headers.indexOf('name');
    const urlIndex = headers.indexOf('url');
    const userIndex = headers.indexOf('user');

    lines.forEach(line => {
      if (!line.trim()) return;
      const parts = line.split(',');
      if (parts.length < 3) return;

      const name = parts[nameIndex]?.trim();
      const url = parts[urlIndex]?.trim();
      const user = parts[userIndex]?.trim();

      if (name && url) {
        if (!state.speciesImagesMap.has(name)) {
          state.speciesImagesMap.set(name, []);
        }
        state.speciesImagesMap.get(name).push(url);
        if (user) state.imageToUserMap.set(url, user);
      }
    });
  }
};

/* ================ VISUALIZZAZIONE ================ */
const view = {
  hoverOverlay: (() => {
    const el = document.createElement('div');
    el.id = 'species-card';
    Object.assign(el.style, {
      position: 'fixed',
      background: 'rgba(255, 255, 255)',
      padding: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      display: 'none',
      zIndex: '1000',
      maxWidth: '350px',
      border: '1px solid #f0f0f0'
    });
    document.body.appendChild(el);
    return el;
  })(),

  showSpeciesCard: (speciesName, relationTarget) => {
    const { hoverOverlay } = view;
    const images = state.speciesImagesMap.get(speciesName);
    const labels = state.speciesToLabels.get(speciesName);

    document.getElementById('interactions-container')?.classList.add('blurred');
    hoverOverlay.innerHTML = '';

    // Immagine
    let currentImageUrl = '';
    if (images?.length > 0) {
      currentImageUrl = images[Math.floor(Math.random() * images.length)];
      const img = document.createElement('img');
      img.src = currentImageUrl;
      img.style.width = '100%';
      img.style.marginBottom = '12px';
      hoverOverlay.appendChild(img);
    }

    // Titolo
    const title = document.createElement('h3');
    const observations = state.osservazioniMap.get(speciesName) || 0;
    title.textContent = utils.getDisplayName(speciesName);
    
    const obsBadge = document.createElement('span');
    obsBadge.textContent = ` (${observations})`;
    Object.assign(obsBadge.style, {
      fontSize: '12px',
      margin: '0 0 10px 0',
      fontStyle: 'italic',
      fontWeight: 'normal',
      color: '#555'
    });
    title.appendChild(obsBadge);
    Object.assign(title.style, {
      margin: '0 0 10px 0',
      color: '#222',
      fontSize: '18px',
      paddingBottom: '8px'
    });
    hoverOverlay.appendChild(title);

    // Interazioni
    if (labels?.size > 0) {
      const relationContainer = document.createElement('div');
      Object.assign(relationContainer.style, {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content max-content',
        gap: '2px 4px',
        alignItems: 'center'
      });

      const centralSpecies = document.createElement('div');
      centralSpecies.textContent = utils.getDisplayName(relationTarget);
      Object.assign(centralSpecies.style, {
        fontSize: '13px',
        fontWeight: '500',
        alignSelf: 'start',
        margin: '0',
        padding: '0'
      });

      const interactionsContainer = document.createElement('div');
      Object.assign(interactionsContainer.style, {
        display: 'flex',
        flexDirection: 'column',
        margin: '0',
        padding: '0'
      });

      [...labels].forEach((label, index) => {
        const interactionItem = document.createElement('div');
        interactionItem.textContent = ITALIAN_LABELS[label] || label.toLowerCase();
        Object.assign(interactionItem.style, {
          color: COLOR_MAP[label] || '#000',
          fontSize: '13px',
          margin: '0',
          padding: '0',
          marginBottom: index !== labels.size - 1 ? '1px' : '0'
        });
        interactionsContainer.appendChild(interactionItem);
      });

      const linkSpecies = document.createElement('div');
      linkSpecies.textContent = utils.getDisplayName(speciesName);
      Object.assign(linkSpecies.style, {
        fontSize: '13px',
        fontWeight: '500',
        alignSelf: 'end',
        margin: '0',
        padding: '0'
      });

      relationContainer.append(centralSpecies, interactionsContainer, linkSpecies);
      hoverOverlay.appendChild(relationContainer);
    }

    // Footer
    const footer = document.createElement('div');
    const photographer = currentImageUrl ? state.imageToUserMap.get(currentImageUrl) : null;
    footer.textContent = photographer ? `ph. ${photographer}` : 'iNaturalist';
    Object.assign(footer.style, {
      marginTop: '15px',
      fontSize: '11px',
      color: '#777',
      fontStyle: 'italic',
      textAlign: 'right'
    });
    hoverOverlay.appendChild(footer);

    hoverOverlay.style.display = 'block';
  },

  hideSpeciesCard: () => {
    view.hoverOverlay.style.display = 'none';
    document.getElementById('interactions-container')?.classList.remove('blurred');
  },

  moveSpeciesCard: event => {
    const { hoverOverlay } = view;
    const offset = 15;
    hoverOverlay.style.left = `${event.clientX + offset}px`;
    hoverOverlay.style.top = `${event.clientY + offset}px`;

    const rect = hoverOverlay.getBoundingClientRect();
    if (rect.right > window.innerWidth) {
      hoverOverlay.style.left = `${event.clientX - rect.width - offset}px`;
    }
    if (rect.bottom > window.innerHeight) {
      hoverOverlay.style.top = `${event.clientY - rect.height - offset}px`;
    }
  },

  renderRadialInteraction: (interactionGroups, sourceSpeciesLabels, centralSpeciesName) => {
    const container = document.getElementById('interactions-container');
    container.innerHTML = '';

    const size = 800;
    const centerX = size / 2;
    const centerY = size / 2;

    const centralDiv = document.createElement('div');
    Object.assign(centralDiv.style, {
      position: 'relative',
      width: `${size}px`,
      height: `${size}px`
    });

    // Specie centrale
    const centralWrapper = document.createElement('div');
    Object.assign(centralWrapper.style, {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2px'
    });

    const speciesImages = state.speciesImagesMap.get(centralSpeciesName);
    if (speciesImages?.length > 0) {
      const centerSpeciesImage = document.createElement('img');
      let currentImageIndex = state.lastShownImageIndex.get(centralSpeciesName);
      if (currentImageIndex === undefined || currentImageIndex >= speciesImages.length) {
        currentImageIndex = Math.floor(Math.random() * speciesImages.length);
        state.lastShownImageIndex.set(centralSpeciesName, currentImageIndex);
      }
      centerSpeciesImage.src = speciesImages[currentImageIndex];
      Object.assign(centerSpeciesImage.style, {
        width: '250px',
        height: 'auto'
      });
      centralWrapper.appendChild(centerSpeciesImage);
    }

    const centerSpecies = document.createElement('div');
    const observations = state.osservazioniMap.get(centralSpeciesName) || 0;
    centerSpecies.textContent = utils.getDisplayName(centralSpeciesName);
    
    const obsBadge = document.createElement('span');
    obsBadge.textContent = ` (${observations})`;
    Object.assign(obsBadge.style, {
      margin: '0 0 10px 0',
      fontStyle: 'italic',
      fontWeight: 'normal',
      fontSize: '12px',
      color: '#555'
    });
    centerSpecies.appendChild(obsBadge);
    Object.assign(centerSpecies.style, {
      cursor: 'pointer',
      color: 'black',
      fontSize: '20px',
      fontWeight: 'bold'
    });
    centralWrapper.appendChild(centerSpecies);

    if (speciesImages?.length > 0) {
      const selectedImageUrl = speciesImages[state.lastShownImageIndex.get(centralSpeciesName)];
      const photographer = state.imageToUserMap.get(selectedImageUrl);
      
      const photoCredit = document.createElement('div');
      photoCredit.textContent = photographer ? `ph. ${photographer}` : 'iNaturalist';
      Object.assign(photoCredit.style, {
        marginTop: '2px',
        fontSize: '11px',
        color: '#777',
        fontStyle: 'italic',
        textAlign: 'center'
      });
      centralWrapper.appendChild(photoCredit);
    }

    centralDiv.appendChild(centralWrapper);

    // Mappa specie -> labels
    state.speciesToLabels = new Map();
    Object.entries(interactionGroups).forEach(([label, speciesSet]) => {
      for (const species of speciesSet) {
        if (!state.speciesToLabels.has(species)) {
          state.speciesToLabels.set(species, new Set());
        }
        state.speciesToLabels.get(species).add(label);
      }
    });

    const allSpecies = [...state.speciesToLabels.keys()];
    const speciesCommonCount = new Map(
      allSpecies.map(s => [s, state.speciesToLabels.get(s).size])
    );
    const maxCommon = Math.max(...speciesCommonCount.values(), 1);

    // Posizionamento specie
    const minRadius = 300;
    const maxRadius = 400;
    const angleStep = (2 * Math.PI) / allSpecies.length;
    const placedPositions = [];

    allSpecies.forEach((species, index) => {
      let radius = maxRadius - (speciesCommonCount.get(species) / maxCommon) * (maxRadius - minRadius);
      let angle = index * angleStep;
      let x = centerX + radius * Math.cos(angle);
      let y = centerY + radius * Math.sin(angle);

      // Calcola dimensioni link
      const tempLink = document.createElement('a');
      tempLink.className = 'species-link';
      tempLink.textContent = utils.getDisplayName(species);
      tempLink.style.position = 'absolute';
      tempLink.style.visibility = 'hidden';
      tempLink.style.whiteSpace = 'nowrap';
      document.body.appendChild(tempLink);
      const linkWidth = tempLink.offsetWidth;
      const linkHeight = tempLink.offsetHeight;
      document.body.removeChild(tempLink);

      // Gestione collisioni
      let collision;
      do {
        collision = false;
        for (const pos of placedPositions) {
          const dx = pos.x - x;
          const dy = pos.y - y;
          if (Math.abs(dx) < (linkWidth + pos.width) / 2 + 10 && 
              Math.abs(dy) < (linkHeight + pos.height) / 2 + 10) {
            radius += 10;
            x = centerX + radius * Math.cos(angle);
            y = centerY + radius * Math.sin(angle);
            collision = true;
            break;
          }
        }
      } while (collision);

      placedPositions.push({ x, y, width: linkWidth, height: linkHeight });

      // Crea link finale
      const link = document.createElement('a');
      const params = new URLSearchParams();
      params.set('specie', species.replace(/ /g, '_'));
      // Mantieni gli altri parametri esistenti
      const currentParams = new URLSearchParams(window.location.search);
      ['name_mode', 'info'].forEach(param => {
        if (currentParams.has(param)) {
          params.set(param, currentParams.get(param));
        }
      });
      link.href = `?${params.toString()}`;
      link.className = 'species-link';
      link.textContent = utils.getDisplayName(species);
      Object.assign(link.style, {
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap',
        cursor: 'pointer'
      });

      // Assegna colore in base alla priorità
      const labels = [...state.speciesToLabels.get(species)];
      labels.sort((a, b) => (PRIORITY[a] || 99) - (PRIORITY[b] || 99));
      link.style.color = COLOR_MAP[labels[0]] || COLOR_MAP.default;

      // Gestione hover
      link.addEventListener('mouseenter', (e) => {
        view.showSpeciesCard(species, centralSpeciesName);
        view.moveSpeciesCard(e);
      });
      link.addEventListener('mouseleave', view.hideSpeciesCard);
      link.addEventListener('mousemove', view.moveSpeciesCard);

      centralDiv.appendChild(link);
    });

    container.appendChild(centralDiv);
  }
};

/* ================ CORE ================ */
const app = {
  processData: (data, centralSpecies) => {
    const interactionGroups = {};
    const sourceSpeciesLabels = new Map();
    const relationMap = new Map();

    data.forEach(interaction => {
      const source = (interaction.Source || interaction.source || '').trim();
      const target = (interaction.Target || interaction.target || '').trim();
      const label = (interaction.Label || interaction.label || interaction.Type || interaction.type || '').trim();

      if (!source || !target || !label) return;

      if (!relationMap.has(source)) relationMap.set(source, new Map());
      if (!relationMap.get(source).has(target)) relationMap.get(source).set(target, new Set());
      relationMap.get(source).get(target).add(label);

      if (source === centralSpecies) {
        if (!sourceSpeciesLabels.has(target)) sourceSpeciesLabels.set(target, new Set());
        sourceSpeciesLabels.get(target).add(label);
      }
      
      if (target === centralSpecies) {
        if (!sourceSpeciesLabels.has(source)) sourceSpeciesLabels.set(source, new Set());
        sourceSpeciesLabels.get(source).add(label);
      }
    });

    if (relationMap.has(centralSpecies)) {
      relationMap.get(centralSpecies).forEach((labels, target) => {
        labels.forEach(label => {
          if (!interactionGroups[label]) interactionGroups[label] = new Set();
          interactionGroups[label].add(target);
        });
      });
    }

    relationMap.forEach((targets, source) => {
      if (targets.has(centralSpecies)) {
        targets.get(centralSpecies).forEach(label => {
          const invertedLabel = utils.invertInteractionLabel(label);
          if (!interactionGroups[invertedLabel]) interactionGroups[invertedLabel] = new Set();
          interactionGroups[invertedLabel].add(source);
        });
      }
    });

    return { interactionGroups, sourceSpeciesLabels };
  },

  init: async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      state.useCommonNames = params.has('name_mode') 
        ? params.get('name_mode') === 'common'
        : localStorage.getItem('nameMode') === 'common';
      
      state.showInfoPanel = params.has('info') 
        ? params.get('info') === 'show'
        : localStorage.getItem('infoPanelState') === 'show';
      
      document.getElementById('info-panel').classList.toggle('visible', state.showInfoPanel);

      // 2. Configura toggle
      const toggleLink = document.getElementById('toggle-name');
      toggleLink.textContent = state.useCommonNames 
        ? 'mostra nome scientifico' 
        : 'mostra nome comune';

      toggleLink.addEventListener('click', e => {
        e.preventDefault();
        state.useCommonNames = !state.useCommonNames;
        localStorage.setItem('nameMode', state.useCommonNames ? 'common' : 'scientific');
        utils.updateURLParam(app.currentSpecies, state.useCommonNames,  state.showInfoPanel);
        toggleLink.textContent = state.useCommonNames 
          ? 'mostra nome scientifico' 
          : 'mostra nome comune';
        view.renderRadialInteraction(app.interactionGroups, app.sourceSpeciesLabels, app.currentSpecies);
      });

      // 3. Configura info toggle
      const infoLink = document.querySelector('.name-toggle a:not(#toggle-name)');
      const infoPanel = document.getElementById('info-panel');
      if (infoLink && infoPanel) {
        infoLink.addEventListener('click', e => {
          e.preventDefault();
          state.showInfoPanel = !state.showInfoPanel;
          localStorage.setItem('infoPanelState', state.showInfoPanel ? 'show' : 'hide');
          utils.updateURLParam(app.currentSpecies, state.useCommonNames, state.showInfoPanel);
          infoPanel.classList.toggle('visible', state.showInfoPanel);
        });
      }

      // 4. Carica dati
      await dataHandler.loadCommonNames();

      const osservazioniData = Papa.parse(
        await (await fetch('osservazioni.csv')).text(), 
        { header: true }
      ).data;
      osservazioniData.forEach(row => {
        state.osservazioniMap.set(row.scientific_name, row.observations);
      });

      app.currentSpecies = utils.getSpecieFromURL() || 'Homo sapiens';
      dataHandler.loadSpeciesImages(await (await fetch('immagini.csv')).text());

      const interactionData = await dataHandler.loadCSV('interazioni.csv');
      const { interactionGroups, sourceSpeciesLabels } = app.processData(interactionData, app.currentSpecies);
      
      if (Object.keys(interactionGroups).length === 0) {
        alert(`❌ Nessuna interazione trovata per "${app.currentSpecies}"`);
        return;
      }

      app.interactionGroups = interactionGroups;
      app.sourceSpeciesLabels = sourceSpeciesLabels;

      // 5. Render iniziale
      view.renderRadialInteraction(interactionGroups, sourceSpeciesLabels, app.currentSpecies);

    } catch (error) {
      console.error('Errore:', error);
      document.getElementById('interactions-container').innerHTML = 
        `<p style="color:red;padding:20px">Errore: ${error.message}</p>`;
    }
  },

  currentSpecies: '',
  interactionGroups: null,
  sourceSpeciesLabels: null
};

/* ================ AVVIO APPLICAZIONE ================ */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', app.init);
} else {
  app.init();
}

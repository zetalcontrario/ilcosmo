# *ilcosmo.*

## Descrizione del progetto

Spesso l'essere umano si comporta come un turista della natura: incantato dalle sue meraviglie, la osserva da lontano, dimenticando di esserne parte tanto quanto un pesce, un albero o un batterio. *ilcosmo.* nasce da questa riflessione e si propone come uno spazio digitale in cui esplorare la biodiversità partendo da noi stessi, in quanto elementi interconnessi di una rete vivente.

La piattaforma si basa su dati provenienti da iNaturalist e GloBI, che documentano le interazioni ecologiche tra le specie osservate entro i confini del Consorzio di bonifica Acque Risorgive. Queste relazioni vengono visualizzate in modo semplice, per stimolare la curiosità e favorire un'esplorazione libera.

Ogni nodo rappresenta una specie e ogni legame racconta un'interazione biologica, permettendo all'utente di seguire percorsi sempre diversi. L'impostazione visiva e interattiva di *ilcosmo.* invita a scoprire la complessità della vita nei territori del Consorzio – e oltre – e a riconoscere, attraverso l'esperienza, che ogni organismo è parte di un sistema più ampio, in cui nessuno è protagonista ma tutti sono necessari.

## Visualizzazione e funzionalità principali

Il progetto visualizza le interazioni tra organismi utilizzando un layout radiale, dove la specie selezionata viene mostrata al centro e le specie con cui interagisce sono disposte intorno ad essa. Le relazioni sono codificate con colori diversi in base al tipo di interazione ecologica.

### Caratteristiche principali
- **Visualizzazione radiale** di interazioni biologiche
- **Classificazione colorata** delle relazioni ecologiche:
  - Mutualismo (+/+): verde
  - Sfruttamento (+/-): arancione
  - Sfruttamento (-/+): rosso
  - Commensalismo (+/0): blu
  - Commensalismo (0/+): azzurro
  - Neutralismo (0/0): grigio
  - Relazioni complesse: magenta
- **Card informative** al passaggio del mouse sulle specie
- **Immagini** delle specie dall'archivio di iNaturalist
- **Toggle** tra nomi scientifici e nomi comuni
- **Pannello informativo** con legenda delle interazioni
- **Navigazione tra specie** attraverso link interattivi
- **Conteggio osservazioni** per ciascuna specie nel territorio di riferimento

### Utilizzo della piattaforma
1. Apri il file `index.html` in un browser web
2. La visualizzazione mostrerà per default "Homo sapiens" al centro
3. Clicca su una specie collegata per spostarla al centro e visualizzare le sue interazioni
4. Passa il mouse su una specie per visualizzare i dettagli
5. Usa il link "mostra nome comune" per alternare tra nomi scientifici e comuni
6. Clicca su "info" per visualizzare la legenda delle interazioni

> 💡 *Consiglio*: per una migliore esperienza immersiva, attiva la modalità schermo intero (di solito premendo F11 nel browser).

### Note sui dati
- I dati delle interazioni provengono da GloBI (Global Biotic Interactions)
- Le immagini e le osservazioni provengono da iNaturalist
- Il focus geografico è sul territorio del Consorzio di bonifica Acque Risorgive

---

## Informazioni tecniche e struttura del progetto

### File principali
- **index.html**: Struttura base della pagina web
- **style.css**: Stili e layout dell'applicazione
- **script.js**: Logica dell'applicazione e gestione dei dati
- **CSV dati**:
  - `interazioni.csv`: Contiene le relazioni tra le specie
  - `immagini.csv`: URL delle immagini per ogni specie
  - `osservazioni.csv`: Numero di osservazioni per specie nel territorio
  - `nome_comune.csv`: Mappatura tra nomi scientifici e nomi comuni

### Componenti HTML (index.html)
- **Header**: Titolo con link a fonti esterne e descrizione del progetto
- **Main container**: Area principale per la visualizzazione radiale delle interazioni
- **Pannello informativo dataset**: Riferimenti a iNaturalist e GloBI
- **Controlli**: Toggle per nomi scientifici/comuni e pannello informativo
- **Legenda**: Spiegazione dei colori e significati delle interazioni

### Stili CSS (style.css)
- **Layout base**: Impostazioni generali di pagina e posizionamento
- **Componenti principali**: Stili per header, contenitore interazioni e pannelli laterali
- **Elementi specie**: Formattazione dei nodi specie e link
- **Overlay e card**: Stili per le card informative al passaggio del mouse
- **Pannello legenda**: Formattazione della legenda delle interazioni

### Logica JavaScript (script.js)

#### Configurazioni
- `COLOR_MAP`: Mappa dei colori per i diversi tipi di interazioni
- `ITALIAN_LABELS`: Etichette italiane per i tipi di interazioni
- `PRIORITY`: Priorità di visualizzazione per le interazioni multiple

#### Gestione stato applicazione
- Gestione dei nomi comuni/scientifici
- Memorizzazione delle immagini e informazioni sulle specie
- Conteggio osservazioni

#### Moduli principali
1. **utils**: Funzioni di utilità per formattazione e conversione dati
2. **dataHandler**: Caricamento e parsing dei file CSV
3. **view**: Rendering grafico e gestione degli elementi visivi
4. **app**: Logica principale dell'applicazione e coordinamento

### Struttura dei dati

#### interazioni.csv
```
Source,Target,Type,Label
Homo sapiens,Pediculus humanus,Directed,interactsWith
...
```
- **Source**: Specie di origine
- **Target**: Specie con cui interagisce
- **Type**: Tipo di interazione (Directed, ecc.)
- **Label**: Etichetta specifica dell'interazione

#### immagini.csv
```
name,url,user
Homo sapiens,https://inaturalist-open-data.s3.amazonaws.com/photos/11455036/medium.jpg,perona
...
```
- **name**: Nome scientifico della specie
- **url**: URL dell'immagine
- **user**: Autore della fotografia

#### osservazioni.csv
```
scientific_name,observations
Homo sapiens,109
...
```
- **scientific_name**: Nome scientifico della specie
- **observations**: Numero di osservazioni nel territorio

#### nome_comune.csv
```
scientific_name,common_name
Homo sapiens,Essere umano
...
```
- **scientific_name**: Nome scientifico della specie
- **common_name**: Nome comune nella lingua locale

### Flusso dell'applicazione

1. **Inizializzazione**: 
   - Caricamento dei dati dai file CSV
   - Impostazione dello stato iniziale (specie centrale, modalità nome)
   - Configurazione dei listener per gli eventi

2. **Elaborazione dati**:
   - Analisi delle interazioni per la specie centrale
   - Categorizzazione delle interazioni
   - Preparazione della visualizzazione

3. **Rendering**:
   - Disegno della specie centrale con immagine e nome
   - Posizionamento radiale delle specie collegate
   - Colorazione in base al tipo di interazione

4. **Interattività**:
   - Gestione degli eventi hover per mostrare le card informative
   - Navigazione tra specie tramite click
   - Toggle tra nomi scientifici e comuni

### Dettagli della visualizzazione
- **Layout radiale**: La specie centrale è posizionata al centro della visualizzazione
- **Distanza dal centro**: Proporzionale al numero di interazioni comuni
- **Colori**: Codificano il tipo di relazione ecologica
- **Card informative**: Mostrano dettagli sulla specie, immagine e tipo di interazione
- **Pannello legenda**: Accessibile tramite link "info" in alto a destra

### Dipendenze esterne
- **Papaparse** (v5.4.1): Libreria per il parsing di file CSV

---

## Sviluppi futuri

Il progetto *ilcosmo.* è pensato come una base aperta a espansioni future.  
Una delle idee in fase di esplorazione è la creazione di un **gioco delle connessioni**, ispirato al *Wiki-Link Game*, in cui l’utente parte da una specie qualsiasi e deve raggiungere **Homo sapiens** attraversando solo le relazioni ecologiche che le collegano.  
Questo meccanismo ludico, che pone l’essere umano come nodo finale, ha l’obiettivo di aumentare il coinvolgimento e sottolineare l’interconnessione tra tutte le forme di vita.

Altri possibili sviluppi includono:

- L'integrazione di un **filtro temporale o stagionale** per visualizzare le interazioni osservate in periodi specifici dell’anno  
- L’aggiunta di **suoni ambientali o vocalizzazioni** delle specie per un’esperienza più immersiva  

---

Progetto creato per visualizzare e comprendere le interazioni biologiche all'interno dell'ecosistema locale del Consorzio di bonifica Acque Risorgive.
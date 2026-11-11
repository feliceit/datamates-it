import paolo from '../assets/speaker/paolo-bietolini.jpeg';
import enrico from '../assets/speaker/enrico-chiolo.jpg';

export const site = {
  name: 'DataMates',
  url: 'https://datamates.it',
  payoff: 'connect, discuss, go further',
  description:
    'Community italiana su analytics, tracking e dati. Live gratuite e approfondimenti per chi questo lavoro lo fa davvero, senza corsi da vendere.',
};

// Data e durata della prossima live: etichetta, fine evento e link al calendario
// si ricavano da qui, così non ci sono copie da tenere allineate a mano.
const liveDate = '2026-11-11T13:00:00+01:00';
const liveDurationMinutes = 60;

const liveStart = new Date(liveDate);
const liveEnd = new Date(liveStart.getTime() + liveDurationMinutes * 60_000);
const romeDay = new Intl.DateTimeFormat('it-IT', {
  timeZone: 'Europe/Rome',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
}).format(liveStart);
const romeTime = new Intl.DateTimeFormat('it-IT', {
  timeZone: 'Europe/Rome',
  hour: '2-digit',
  minute: '2-digit',
}).format(liveStart);
// Formato richiesto da Google Calendar: 20261111T120000Z (UTC, senza separatori).
const calendarStamp = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');

// Prossima live. Aggiornare qui data, titolo e speaker per le puntate successive.
export const nextLive = {
  episode: 'Puntata 0',
  title: 'Fare tracking con l’',
  titleAccent: 'AI',
  subtitle: 'MCP di GTM, audit e nuovi workflow con l’intelligenza artificiale',
  date: liveDate,
  endDate: liveEnd.toISOString(),
  // Es. "Mercoledì 11 novembre 2026, ore 13:00" (ora italiana).
  dateLabel: `${romeDay.charAt(0).toUpperCase()}${romeDay.slice(1)}, ore ${romeTime}`,
  // Link "Aggiungi a Google Calendar" della pagina di conferma (orari in UTC).
  calendarDates: `${calendarStamp(liveStart)}/${calendarStamp(liveEnd)}`,
  channels: 'In diretta su YouTube e LinkedIn, in pausa pranzo',
  // Registrazione su YouTube. Finché è valorizzata il sito è in modalità "dopo la live":
  // niente modulo di iscrizione, al suo posto i ringraziamenti e il link al video.
  // Per annunciare la puntata successiva: aggiornare i dati qui sopra e lasciarla vuota ('').
  recordingUrl: 'https://www.youtube.com/watch?v=KXIWYCHsibQ',
  pitch:
    'Mettiamo alla prova l’AI su un container Google Tag Manager: vediamo cosa trova, dove sbaglia e cosa resta a chi la misurazione la fa per mestiere. Porta le tue domande e le tue obiezioni.',
  agenda: [
    'Cos’è l’MCP (Model Context Protocol) e come si collega a un assistente AI',
    'Demo live: audit di un container Google Tag Manager con Claude',
    'Le vostre domande e obiezioni, in diretta dai commenti',
  ],
  speakers: [
    { name: 'Paolo Bietolini', role: 'Tracking & Analytics', photo: paolo },
    { name: 'Enrico Chiolo', role: 'Tracking & Automation', photo: enrico },
  ],
};

export const principles = [
  {
    title: 'Senza scopo di lucro',
    text: 'Nessun corso da vendere, nessun servizio da spingere a fine live. DataMates non è il canale marketing di un’agenzia.',
  },
  {
    title: 'Dal pixel alla strategia',
    text: 'Partiamo da problemi concreti, come il pixel che non funziona, e arriviamo alle scelte che contano per il business.',
  },
  {
    title: 'Tracking, analytics e data engineering',
    text: 'Colleghiamo mondi che in Italia restano separati, perché il dato non finisce quando parte un tag.',
  },
  {
    title: 'Fatta da chi ci lavora',
    text: 'A condurre sono professionisti che fanno questo mestiere ogni giorno, con ospiti scelti per l’argomento della puntata.',
  },
];

export const founders = ['Paolo Bietolini', 'Enrico Chiolo', 'Felice Carotenuto', 'Mattia Minafò'];

import paolo from '../assets/speaker/paolo-bietolini.jpeg';
import enrico from '../assets/speaker/enrico-chiolo.jpg';

export const site = {
  name: 'DataMates',
  url: 'https://datamates.it',
  payoff: 'connect, discuss, go further',
  description:
    'Community italiana su analytics, tracking e dati. Live e approfondimenti per chi questo lavoro lo fa davvero, senza corsi da vendere.',
};

// Prossima live. Aggiornare qui data, titolo e speaker per le puntate successive.
export const nextLive = {
  episode: 'Puntata 0',
  title: 'Fare tracking con l’',
  titleAccent: 'AI',
  subtitle: 'MCP di GTM, audit e nuovi workflow con l’intelligenza artificiale',
  date: '2026-11-03T18:00:00+01:00',
  dateLabel: 'Martedì 3 novembre 2026, ore 18:00',
  channels: 'Live su YouTube e LinkedIn',
  agenda: [
    'Cos’è l’MCP (Model Context Protocol) e come si collega a un assistente AI',
    'Demo live: audit di un container Google Tag Manager con Claude',
    'Le vostre domande, in diretta dai commenti',
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

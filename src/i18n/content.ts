import type { Lang } from '../state/PreferencesContext';

export type Content = {
  nav: { home: string; about: string; projects: string; contact: string };
  hero: { title: string; subtitle: string; ctaProjects: string; ctaContact: string; pills: string[] };
  home: { highlightsTitle: string; highlights: { title: string; value: string; desc: string }[] };
  about: {
    title: string;
    intro: string;
    downloadCv: string;
    skillsTitle: string;
    skills: { name: string; level: number }[];
    hobbiesTitle: string;
    hobbies: { icon: string; title: string; desc: string }[];
    languagesTitle: string;
    languages: { title: string; desc: string }[];
    timelineTitle: string;
    timelineEducation: { date: string; text: string }[];
    timelineWork: { date: string; text: string }[];
  };
  projects: { title: string; subtitle: string; searchPlaceholder: string; filterAll: string; showRepo: string };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    socialsLabel: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSend: string;
  };
  footer: { copyright: string };
};

const base = {
  nav: { home: '', about: '', projects: '', contact: '' },
  hero: { title: '', subtitle: '', ctaProjects: '', ctaContact: '', pills: [] as string[] },
  home: { highlightsTitle: '', highlights: [] as Content['home']['highlights'] },
  about: {
    title: '',
    intro: '',
    downloadCv: '',
    skillsTitle: '',
    skills: [] as Content['about']['skills'],
    hobbiesTitle: '',
    hobbies: [] as Content['about']['hobbies'],
    languagesTitle: '',
    languages: [] as Content['about']['languages'],
    timelineTitle: '',
    timelineEducation: [] as Content['about']['timelineEducation'],
    timelineWork: [] as Content['about']['timelineWork'],
  },
  projects: { title: '', subtitle: '', searchPlaceholder: '', filterAll: '', showRepo: '' },
  contact: {
    title: '',
    subtitle: '',
    infoTitle: '',
    emailLabel: '',
    phoneLabel: '',
    addressLabel: '',
    socialsLabel: '',
    formTitle: '',
    formName: '',
    formEmail: '',
    formSubject: '',
    formMessage: '',
    formSend: '',
  },
  footer: { copyright: '' },
};

const content: Record<Lang, Content> = {
  de: {
    ...base,
    nav: { home: 'Start', about: 'Über mich', projects: 'Projekte', contact: 'Kontakt' },
    hero: {
      title: 'Roussel Dongmo Jiometio',
      subtitle: 'Software Engineer & KI – sauberer Code, klare Architektur, echte Ergebnisse.',
      ctaProjects: 'Projekte ansehen',
      ctaContact: 'Kontakt',
      pills: ['React / Angular', 'Data & KI', 'Backend & Datenbanken', 'saubere Architektur'],
    },
    home: {
      highlightsTitle: 'Schwerpunkte',
      highlights: [
        { title: 'Frontend', value: 'UI/UX', desc: 'Interaktive Interfaces und performante Komponenten.' },
        { title: 'Backend', value: 'Logik', desc: 'Klare Schnittstellen, stabile Services, saubere Datenstrukturen.' },
        { title: 'Daten', value: 'SQL / AI', desc: 'Datenmodellierung, Analyse und KI-gestützte Ansätze.' },
      ],
    },
    about: {
      title: 'Über mich',
      intro:
        'Informatikstudent (TH Mittelhessen) mit Fokus auf Softwareentwicklung und künstliche Intelligenz. Ich baue gern moderne Lösungen mit sauberer Architektur, guter UX und nachvollziehbarer Logik – vom Prototyp bis zur Umsetzung im Team.',
      downloadCv: 'Lebenslauf herunterladen',
      skillsTitle: 'Technische Fähigkeiten',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML / CSS / Bootstrap', level: 85 },
        { name: 'SQL & Datenbanken', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'C', level: 70 },
      ],
      hobbiesTitle: 'Hobbys & Interessen',
      hobbies: [
        { icon: 'fa-solid fa-book', title: 'Lesen', desc: 'Technische & Selbsthilfe Bücher inspirieren mich täglich.' },
        { icon: 'fa-solid fa-music', title: 'Musik', desc: 'Musik hilft mir, fokussiert zu bleiben beim Coden.' },
        { icon: 'fa-solid fa-code', title: 'Programmieren', desc: 'Ich entwickle kleine Projekte zum Lernen.' },
        { icon: 'fa-solid fa-leaf', title: 'Natur entdecken', desc: 'Spaziergänge geben mir Ruhe und neue Ideen.' },
        { icon: 'fa-solid fa-tv', title: 'Serien', desc: 'Inspirierende & humorvolle Serien – für Motivation.' },
      ],
      languagesTitle: 'Sprachkenntnisse',
      languages: [
        { title: 'Französisch', desc: 'Muttersprache – sicher in Wort und Schrift.' },
        { title: 'Deutsch', desc: 'Fließend (C1) – Studium & Arbeit auf Deutsch.' },
        { title: 'Englisch', desc: 'Gute Kenntnisse – technische Literatur & Projekte.' },
      ],
      timelineTitle: 'Bildung & Beruf',
      timelineEducation: [
        { date: 'Seit 04/2024', text: 'Bachelorstudium Informatik – TH Mittelhessen' },
        { date: '10/2023 – 03/2024', text: 'Verfahrenstechnik – TU Clausthal' },
        { date: '01/2023 – 03/2023', text: 'Informatik-Grundkurs – CIS Formation (Duala, Kamerun)' },
        { date: '2019 – 2020', text: 'Wissenschaftliches Abitur – Gymnasium ADONAI (Kamerun)' },
      ],
      timelineWork: [
        { date: '05/2025 – 06/2025', text: 'Werkstudent Datenpflege – Don Stefano GmbH, Heuchelheim' },
        { date: '11/2021 – 02/2023', text: 'Sprachbetreuung Deutsch – Campus ILA, Douala' },
        { date: '2020 – 2021', text: 'Nachhilfe Mathe & Informatik' },
      ],
    },
    projects: {
      title: 'Projekte',
      subtitle: 'Alle meine Repositories – dynamisch geladen aus GitHub. Filtere nach Technologie und suche schnell.',
      searchPlaceholder: 'Suche nach Projekten (Name, Beschreibung, Sprache)...',
      filterAll: 'Alle',
      showRepo: 'Projekt ansehen',
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Du planst ein Projekt oder willst zusammenarbeiten? Schreib mir – ich antworte schnell.',
      infoTitle: 'Kontaktinformationen',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
      addressLabel: 'Adresse',
      socialsLabel: 'Social Media',
      formTitle: 'Nachricht senden',
      formName: 'Name',
      formEmail: 'E-Mail',
      formSubject: 'Betreff',
      formMessage: 'Nachricht',
      formSend: 'Nachricht senden',
    },
    footer: { copyright: '© 2025 Portfolio. Alle Rechte vorbehalten.' },
  },
  en: {
    ...base,
    nav: { home: 'Home', about: 'About', projects: 'Projects', contact: 'Contact' },
    hero: {
      title: 'Roussel Dongmo Jiometio',
      subtitle: 'Software Engineer & AI – clean code, clear architecture, real outcomes.',
      ctaProjects: 'View projects',
      ctaContact: 'Contact',
      pills: ['React / Angular', 'Data & AI', 'Backend & Databases', 'clean architecture'],
    },
    home: {
      highlightsTitle: 'Focus areas',
      highlights: [
        { title: 'Frontend', value: 'UI/UX', desc: 'Interactive interfaces and fast components.' },
        { title: 'Backend', value: 'Logic', desc: 'Clear APIs, reliable services, tidy data models.' },
        { title: 'Data', value: 'SQL / AI', desc: 'Data modeling, analysis, and AI-driven approaches.' },
      ],
    },
    about: {
      title: 'About me',
      intro:
        'Computer science student (TH Mittelhessen) focused on software engineering and artificial intelligence. I enjoy building modern solutions with clean architecture, great UX, and understandable logic—from prototypes to team delivery.',
      downloadCv: 'Download CV',
      skillsTitle: 'Technical skills',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML / CSS / Bootstrap', level: 85 },
        { name: 'SQL & Databases', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'C', level: 70 },
      ],
      hobbiesTitle: 'Interests',
      hobbies: [
        { icon: 'fa-solid fa-book', title: 'Reading', desc: 'Technical and self-help books motivate me every day.' },
        { icon: 'fa-solid fa-music', title: 'Music', desc: 'Music keeps me focused while coding.' },
        { icon: 'fa-solid fa-code', title: 'Programming', desc: 'I build small projects to learn.' },
        { icon: 'fa-solid fa-leaf', title: 'Nature', desc: 'Walks help me reset and generate new ideas.' },
        { icon: 'fa-solid fa-tv', title: 'Series', desc: 'Inspiring and funny series keep my energy up.' },
      ],
      languagesTitle: 'Languages',
      languages: [
        { title: 'French', desc: 'Native language – strong in speaking and writing.' },
        { title: 'German', desc: 'Fluent (C1) – studies and work in German.' },
        { title: 'English', desc: 'Good level – technical reading and projects.' },
      ],
      timelineTitle: 'Education & Experience',
      timelineEducation: [
        { date: 'Since 04/2024', text: 'B.Sc. Computer Science – TH Mittelhessen' },
        { date: '10/2023 – 03/2024', text: 'Process engineering – TU Clausthal' },
        { date: '01/2023 – 03/2023', text: 'Intro course in Computer Science – CIS Formation (Douala, Cameroon)' },
        { date: '2019 – 2020', text: 'Scientific high school diploma – Gymnasium ADONAI (Cameroon)' },
      ],
      timelineWork: [
        { date: '05/2025 – 06/2025', text: 'Working student data maintenance – Don Stefano GmbH, Heuchelheim' },
        { date: '11/2021 – 02/2023', text: 'German language support – Campus ILA, Douala' },
        { date: '2020 – 2021', text: 'Math & Computer Science tutoring' },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle:
        'All my GitHub repositories—loaded dynamically. Filter by technology and search instantly.',
      searchPlaceholder: 'Search projects (name, description, language)...',
      filterAll: 'All',
      showRepo: 'Open project',
    },
    contact: {
      title: 'Get in touch',
      subtitle: 'Planning a project or want to collaborate? Send me a message—I reply quickly.',
      infoTitle: 'Contact details',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      addressLabel: 'Address',
      socialsLabel: 'Social media',
      formTitle: 'Send a message',
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSend: 'Send message',
    },
    footer: { copyright: '© 2025 Portfolio. All rights reserved.' },
  },
  fr: {
    ...base,
    nav: { home: 'Accueil', about: 'À propos', projects: 'Projets', contact: 'Contact' },
    hero: {
      title: 'Roussel Dongmo Jiometio',
      subtitle: 'Ingénieur logiciel & IA – code propre, architecture claire, résultats concrets.',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
      pills: ['React / Angular', 'Data & IA', 'Backend & Bases de données', 'architecture propre'],
    },
    home: {
      highlightsTitle: 'Domaines',
      highlights: [
        { title: 'Frontend', value: 'UI/UX', desc: 'Interfaces interactives et composants performants.' },
        { title: 'Backend', value: 'Logique', desc: 'APIs claires, services fiables, modèles de données propres.' },
        { title: 'Données', value: 'SQL / IA', desc: 'Modélisation, analyse et approches IA.' },
      ],
    },
    about: {
      title: 'À propos',
      intro:
        'Étudiant en informatique (TH Mittelhessen) avec un focus sur le développement logiciel et l’intelligence artificielle. J’aime construire des solutions modernes avec une architecture propre, une UX soignée et une logique compréhensible—du prototype à la livraison en équipe.',
      downloadCv: 'Télécharger le CV',
      skillsTitle: 'Compétences techniques',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML / CSS / Bootstrap', level: 85 },
        { name: 'SQL & Bases de données', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'C', level: 70 },
      ],
      hobbiesTitle: 'Centres d’intérêt',
      hobbies: [
        { icon: 'fa-solid fa-book', title: 'Lecture', desc: 'Des livres techniques et d’auto-développement m’inspirent chaque jour.' },
        { icon: 'fa-solid fa-music', title: 'Musique', desc: 'La musique m’aide à rester concentré pendant le dev.' },
        { icon: 'fa-solid fa-code', title: 'Programmation', desc: 'Je développe de petits projets pour apprendre.' },
        { icon: 'fa-solid fa-leaf', title: 'Nature', desc: 'Les promenades me calment et me donnent de nouvelles idées.' },
        { icon: 'fa-solid fa-tv', title: 'Séries', desc: 'Des séries inspirantes et drôles pour garder la motivation.' },
      ],
      languagesTitle: 'Langues',
      languages: [
        { title: 'Français', desc: 'Langue maternelle – à l’aise à l’oral comme à l’écrit.' },
        { title: 'Allemand', desc: 'Courant (C1) – études et travail en allemand.' },
        { title: 'Anglais', desc: 'Bon niveau – lecture technique et projets.' },
      ],
      timelineTitle: 'Formation & Expérience',
      timelineEducation: [
        { date: 'Depuis 04/2024', text: 'Licence Informatique – TH Mittelhessen' },
        { date: '10/2023 – 03/2024', text: 'Génie des procédés – TU Clausthal' },
        { date: '01/2023 – 03/2023', text: 'Cours de base en informatique – CIS Formation (Douala, Cameroun)' },
        { date: '2019 – 2020', text: 'Baccalauréat scientifique – Gymnasium ADONAI (Cameroun)' },
      ],
      timelineWork: [
        { date: '05/2025 – 06/2025', text: 'Étudiant data maintenance – Don Stefano GmbH, Heuchelheim' },
        { date: '11/2021 – 02/2023', text: 'Accompagnement en allemand – Campus ILA, Douala' },
        { date: '2020 – 2021', text: 'Soutien scolaire Maths & Informatique' },
      ],
    },
    projects: {
      title: 'Projets',
      subtitle: 'Tous mes dépôts GitHub—chargés dynamiquement. Filtre par technologie et recherche rapide.',
      searchPlaceholder: 'Rechercher des projets (nom, description, langage)...',
      filterAll: 'Tous',
      showRepo: 'Ouvrir le projet',
    },
    contact: {
      title: 'Me contacter',
      subtitle: 'Vous avez un projet ou envie de collaborer ? Envoyez-moi un message—je réponds rapidement.',
      infoTitle: 'Coordonnées',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      addressLabel: 'Adresse',
      socialsLabel: 'Réseaux sociaux',
      formTitle: 'Envoyer un message',
      formName: 'Nom',
      formEmail: 'Email',
      formSubject: 'Sujet',
      formMessage: 'Message',
      formSend: 'Envoyer',
    },
    footer: { copyright: '© 2025 Portfolio. Tous droits réservés.' },
  },
};

export { content };


export type ProjectCategory = 'Web' | 'Java' | 'Python' | 'C' | 'Other';

export type Project = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
  language: string | null;
  stargazers: number;
  updatedAt: string;
  category: ProjectCategory;
};

const projects: Project[] = [
  {
    id: 1108113998,
    name: `secure-notes-app`,
    htmlUrl: `https://github.com/Roussel9/secure-notes-app`,
    description: `Die Secure Notes App ist eine moderne Webanwendung zur sicheren Erstellung, Verwaltung und Teilung von Notizen mit Markdown-Unterstützung. Die App ermöglicht es Benutzern, formatierte Notizen zu erstellen, YouTube-Videos einzubetten, nach Notizen zu suchen und diese über eindeutige Links mit anderen zu teilen.`,
    language: `TypeScript`,
    stargazers: 1,
    updatedAt: `2026-04-19T12:37:42Z`,
    category: 'Web'
  },
  {
    id: 1115398363,
    name: `lassDieKircheImDorf`,
    htmlUrl: `https://github.com/Roussel9/lassDieKircheImDorf`,
    description: `Dieses Projekt implementiert eine KI auf Basis von AlphaZero, kombiniert mit Monte-Carlo Tree Search (MCTS), für ein komplexes Brettspiel auf einem 7x7 Spielfeld.  Das Ziel war es, moderne KI-Techniken auf ein nicht-triviales Spiel mit vielen Regeln und möglichen Zügen zu übertragen.`,
    language: `Python`,
    stargazers: 1,
    updatedAt: `2026-04-19T12:35:15Z`,
    category: 'Python'
  },
  {
    id: 1088590434,
    name: `foliekurs-docker`,
    htmlUrl: `https://github.com/Roussel9/foliekurs-docker`,
    description: ``,
    language: `Dockerfile`,
    stargazers: 0,
    updatedAt: `2026-04-03T19:40:07Z`,
    category: 'Other'
  },
  {
    id: 1200714811,
    name: `Cross-Platform-Development-MC-Trainer-`,
    htmlUrl: `https://github.com/Roussel9/Cross-Platform-Development-MC-Trainer-`,
    description: `MC Trainer Kami ist ein universeller Multiple-Choice-Trainer für mobile Geräte. Die Anwendung ermöglicht es Nutzerinnen und Nutzern, Lernkarten („Karten“) in Modulen zu bearbeiten, Fortschritte zu verfolgen und Abzeichen (Achievements) zu sammeln.`,
    language: `Dart`,
    stargazers: 1,
    updatedAt: `2026-04-03T19:21:59Z`,
    category: 'Web'
  },
  {
    id: 1066291918,
    name: `KSP`,
    htmlUrl: `https://github.com/Roussel9/KSP`,
    description: `Implementierung der Ninja Virtual Machine im Rahmen der KSP-Übung. Die VM interpretiert Ninja-Bytecode-Dateien mit dynamischer Verwaltung von Stack und Heap. Unterstützt primitive und zusammengesetzte Objekte sowie Anbindung der externen BigInt-Bibliothek für arithmetische Operationen`,
    language: `C`,
    stargazers: 1,
    updatedAt: `2026-04-03T19:21:18Z`,
    category: 'C'
  },
  {
    id: 903332058,
    name: `SchiffeVersenken-mit-KI`,
    htmlUrl: `https://github.com/Roussel9/SchiffeVersenken-mit-KI`,
    description: `Java-Konsolenspiel mit KI-Logik, einfacher Textausgabe, spielerisch programmiert für Spaß und Lernzwecke. Implementiert intelligente Computergegner und klassische Spielregeln des beliebten Strategiespiels.`,
    language: `JavaScript`,
    stargazers: 1,
    updatedAt: `2026-04-03T19:21:15Z`,
    category: 'Web'
  },
  {
    id: 961610137,
    name: `InformatikProjekt_recipe_website`,
    htmlUrl: `https://github.com/Roussel9/InformatikProjekt_recipe_website`,
    description: `Web-App zum Rezepte verwalten (hinzufügen, bearbeiten, löschen) mit HTML/CSS/Bootstrap und SQL-Datenbank. Vollständige CRUD-Operationen mit benutzerfreundlicher Oberfläche und responsivem Design.`,
    language: `Java`,
    stargazers: 1,
    updatedAt: `2026-04-03T19:21:09Z`,
    category: 'Java'
  },
  {
    id: 1168461844,
    name: `Certificates`,
    htmlUrl: `https://github.com/Roussel9/Certificates`,
    description: ``,
    language: null,
    stargazers: 0,
    updatedAt: `2026-02-27T12:31:58Z`,
    category: 'Other'
  },
  {
    id: 1073685404,
    name: `my-portfolio`,
    htmlUrl: `https://github.com/Roussel9/my-portfolio`,
    description: `Dies ist meine Portfolio-Webseite, die meine Projekte, Fähigkeiten und Kontaktmöglichkeiten präsentiert. Sie ist als modernes, responsives Webdesign mit einem spielerischen Farbkonzept in Blau und Pink umgesetzt.  `,
    language: `HTML`,
    stargazers: 0,
    updatedAt: `2026-02-27T11:39:48Z`,
    category: 'Web'
  },
  {
    id: 969439590,
    name: `feuer-wasser-pflanze`,
    htmlUrl: `https://github.com/Roussel9/feuer-wasser-pflanze`,
    description: `Browser-Spiel inspiriert von Pokémon, interaktiv mit JavaScript, Bootstrap-Layout und Zufallslogik. Dynamisches Spielerlebnis mit visuellen Effekten und responsive Design für alle Geräte`,
    language: `HTML`,
    stargazers: 0,
    updatedAt: `2025-10-10T13:11:35Z`,
    category: 'Web'
  },
];

export default projects;

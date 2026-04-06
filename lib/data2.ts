// ─── Hero data ────────────────────────────────────────────────────────────────

export interface Hero {
  name: string;
  type: 'greek' | 'roman' | 'trojan';
  epithet: string;
  parentage: string;
  domain: string;
  keyDeeds: string[];
  keyMyths: string;
  significance: string;
  death?: string;
}

export const HEROES: Hero[] = [
  {
    name: 'Heracles / Hercules',
    type: 'greek',
    epithet: 'The Greatest Hero',
    parentage: 'Son of Zeus and mortal Alcmene',
    domain: 'Strength, endurance, civilizing force',
    keyDeeds: [
      'Twelve Labors: Nemean Lion, Lernaean Hydra, Erymanthian Boar, Ceryneian Hind, Stymphalian Birds, Augean Stables, Cretan Bull, Mares of Diomedes, Belt of Hippolyta, Cattle of Geryon, Apples of the Hesperides, Cerberus',
      'Killed his own wife and children in a fit of madness sent by Hera — the Labors are penance',
      'Member of the Argonauts',
      'Freed Prometheus from his chains',
      'Captured Cerberus from the Underworld (Labor 12)',
    ],
    keyMyths: 'The Twelve Labors; Omphale (served as slave to a woman); Deianira and the poisoned robe (his death); apotheosis to Olympus',
    significance: 'The archetypal Greek hero — strength in service of civilization. Romans adopted him as a god of victorious enterprise. Hera persecuted him his entire life.',
    death: 'Poisoned by the blood of the centaur Nessus, absorbed through a robe given by his wife Deianira. Burned himself on a pyre on Mt. Oeta; apotheosized to Olympus.',
  },
  {
    name: 'Achilles',
    type: 'greek',
    epithet: 'The Best of the Achaeans',
    parentage: 'Son of sea-nymph Thetis and mortal hero Peleus',
    domain: 'War, glory (kleos), pride (timê)',
    keyDeeds: [
      'Greatest warrior at Troy — virtually invincible',
      'Withdraws from battle after Agamemnon takes his captive Briseis (the central conflict of the Iliad)',
      'Returns to battle after his closest companion Patroclus is killed by Hector',
      'Kills Hector and desecrates his body by dragging it around Troy\'s walls',
      'Eventually ransoms Hector\'s body to Priam in a moment of human recognition',
    ],
    keyMyths: 'The Iliad (wrath, Patroclus, Hector); his mother Thetis dips him in the Styx (post-Homeric); hidden on Scyros among women; Achilles\' heel (post-Homeric)',
    significance: 'Embodies the heroic code — kleos (glory) over a long life. His choice: a short glorious life or a long obscure one. He chose glory. His wrath (menis) is the Iliad\'s first word.',
    death: 'Shot by Paris, guided by Apollo, in the heel — his only vulnerable spot (in post-Homeric tradition).',
  },
  {
    name: 'Odysseus / Ulysses',
    type: 'greek',
    epithet: 'The Man of Many Wiles (polytropos)',
    parentage: 'Son of Laertes, king of Ithaca; some say son of Sisyphus',
    domain: 'Cunning, intelligence, endurance, homecoming (nostos)',
    keyDeeds: [
      'Devised the stratagem of the Trojan Horse',
      'Fetched Achilles from Scyros',
      'Survived encounters with the Cyclops Polyphemus, Circe, Sirens, Scylla and Charybdis',
      'Descended to the Land of the Dead (Odyssey Book 11)',
      'Resisted Calypso\'s offer of immortality to return home',
      'Disguised as a beggar, strung his own bow, killed all the suitors',
    ],
    keyMyths: 'The Odyssey (the entire journey); the Iliad (Trojan Horse); the Nostoi (returns of Greek heroes)',
    significance: "Athena's favorite — represents intelligence, adaptability, and the cunning hero as an alternative to the warrior hero (Achilles). His opposite in every way.",
    death: 'Post-Homeric: accidentally killed by his own son Telegonus (born of Circe) who does not recognize him.',
  },
  {
    name: 'Perseus',
    type: 'greek',
    epithet: 'Slayer of Medusa',
    parentage: 'Son of Zeus (as a shower of gold) and Danaë, daughter of Acrisius of Argos',
    domain: 'Heroic quest, monster-slaying',
    keyDeeds: [
      'Beheaded Medusa with a mirrored shield (gift of Athena), winged sandals and cap of invisibility (gifts of Hermes)',
      'Used Medusa\'s head to petrify the sea monster Cetus and rescue Andromeda',
      'Accidentally killed his grandfather Acrisius with a discus throw — fulfilling the prophecy',
      'Founded the city of Mycenae',
    ],
    keyMyths: 'Zeus and Danaë (locked in a bronze chamber; Zeus enters as golden shower); slaying of Medusa; rescue of Andromeda; fulfillment of the prophecy about Acrisius',
    significance: 'One of the great folktale-style heroes. Demonstrates divine favor (Athena, Hermes, Zeus) as essential to heroic success. His story is the template for many monster-slaying myths.',
    death: 'Lives to old age; placed among the stars as a constellation.',
  },
  {
    name: 'Theseus',
    type: 'greek',
    epithet: 'Hero of Athens',
    parentage: 'Son of Aegeus king of Athens (or Poseidon) and Aethra',
    domain: 'Civilization, Athenian identity, political order',
    keyDeeds: [
      'Killed the Minotaur in the Labyrinth of Crete with the help of Ariadne\'s thread',
      'United Attica under Athens as its founder-hero',
      'Killed numerous monsters and bandits on the road from Troezen to Athens (Procrustes, Sciron, etc.)',
      'Abducted Helen (when she was a child) with Pirithous',
      'Descended to the Underworld to help Pirithous steal Persephone — was trapped there until rescued by Heracles',
    ],
    keyMyths: 'Minotaur and Ariadne; unification of Attica; Phaedra and Hippolytus (Euripides\' Hippolytus — his son dies because of his curse)',
    significance: "Athens's founding hero; the Athenian equivalent of Heracles. His myth cycle was extensively used in Classical Athens to legitimize Athenian civic identity. Found in Tartarus in the Aeneid.",
    death: 'Murdered by King Lycomedes of Scyros, who pushed him off a cliff.',
  },
  {
    name: 'Jason',
    type: 'greek',
    epithet: 'Leader of the Argonauts',
    parentage: 'Son of Aeson, rightful king of Iolcus (Thessaly)',
    domain: 'Quest, leadership, treachery',
    keyDeeds: [
      'Led the Argonauts to Colchis on the Black Sea to retrieve the Golden Fleece',
      'Won the Fleece with the help of Medea (princess of Colchis, sorceress)',
      'Medea murdered her own brother to slow pursuers; murdered the usurper Pelias',
      'Eventually abandoned Medea to marry a Corinthian princess',
    ],
    keyMyths: 'The Argonautica (Apollonius of Rhodes, Hellenistic period); Medea (Euripides) — Medea kills her own children to punish Jason\'s betrayal',
    significance: 'A deeply ambivalent hero — succeeds largely through Medea\'s magic rather than his own virtue, then betrays her. The myth raises questions about heroism, loyalty, and the ethics of using others.',
    death: 'In old age, sitting under the rotting hull of his ship Argo, killed when a timber falls on him.',
  },
  {
    name: 'Aeneas',
    type: 'trojan',
    epithet: 'Pious Aeneas (pius Aeneas)',
    parentage: 'Son of Aphrodite (Venus) and mortal Anchises',
    domain: 'Duty (pietas), founding, Rome',
    keyDeeds: [
      'Escaped the Fall of Troy carrying his father Anchises and household gods (Penates)',
      'Led Trojan survivors on a long sea journey to Italy',
      'Descended into the Underworld to speak with his father Anchises (Aeneid Book 6)',
      'Saw the parade of future Roman heroes — the destiny of Rome',
      'Defeated Turnus in Italy to found the Roman line',
    ],
    keyMyths: 'Vergil\'s Aeneid (the entire epic); the Homeric Hymn to Aphrodite (his birth); brief appearances in the Iliad as a Trojan warrior',
    significance: 'His defining quality is pietas — duty to the gods, family, and state — the Roman ideal in contrast to Achilles\' individual glory. Ancestor of Romulus and Remus and the Julian family (Caesar, Augustus).',
    death: 'Disappears into a river after defeating Turnus; deified by the gods.',
  },
  {
    name: 'Hector',
    type: 'trojan',
    epithet: 'Tamer of Horses, Greatest of the Trojans',
    parentage: 'Son of Priam king of Troy and Hecuba; brother of Paris',
    domain: 'Duty, family, tragic heroism',
    keyDeeds: [
      'Greatest Trojan warrior; defender of Troy throughout the war',
      'Killed Patroclus, Achilles\' closest companion, triggering Achilles\' return to battle',
      'Killed by Achilles, who then desecrates his body',
      'His body is ransomed by his father Priam in the deeply moving final book of the Iliad',
    ],
    keyMyths: 'The Iliad — especially his farewell to his wife Andromache and son Astyanax (Book 6); his death and the ransoming of his body (Books 22–24)',
    significance: 'The most humanly sympathetic character in the Iliad — a warrior who fights not for glory but for family and city. His death represents the fall of Troy and the destruction of an entire world.',
    death: 'Killed by Achilles outside the walls of Troy; body dragged around the walls. Ransomed to his father.',
  },
  {
    name: 'Oedipus',
    type: 'greek',
    epithet: 'The One Who Solved the Riddle',
    parentage: 'Son of Laius and Jocasta of Thebes; raised by Polybus of Corinth',
    domain: 'Fate, knowledge, unknowing transgression',
    keyDeeds: [
      'Killed his father Laius at a crossroads, unknowingly',
      'Answered the Riddle of the Sphinx (What walks on four legs in the morning, two at noon, three in the evening? — Man), liberating Thebes',
      'Married his mother Jocasta and had children with her',
      'Discovered the truth of his actions through relentless investigation',
      'Blinded himself and went into exile',
    ],
    keyMyths: 'Sophocles\' Oedipus Rex (the discovery); Sophocles\' Oedipus at Colonus (his death at the sacred grove near Athens); Sophocles\' Antigone (aftermath)',
    significance: 'The archetypal myth of fate versus free will. Oedipus does everything a rational person can do to avoid his fate — and his very actions fulfill it. Freud named the Oedipus complex after him.',
    death: 'Dies peacefully at Colonus near Athens; his burial site becomes sacred ground.',
  },
  {
    name: 'Orpheus',
    type: 'greek',
    epithet: 'The Divine Musician',
    parentage: 'Son of the Muse Calliope and (some say) Apollo or the Thracian king Oeagrus',
    domain: 'Music, poetry, the power of art, death and its limits',
    keyDeeds: [
      'His music charmed all of nature — animals, trees, rivers, stones all followed him',
      'Descended to the Underworld and charmed Cerberus, stilled the Styx, moved Hades and Persephone with his song',
      'Won the release of Eurydice but lost her by looking back',
      'Refused the love of the Thracian women after Eurydice\'s death',
      'His severed head continued to sing after the Maenads tore him apart',
    ],
    keyMyths: 'Ovid\'s Metamorphoses Books 10–11; Vergil\'s Georgics Book 4 (an earlier version)',
    significance: 'Embodies the power and ultimate limits of art. Connected to both Apollo (music) and Dionysus (whose cult killed him). The Orphic religious movement claimed to follow his teachings.',
    death: 'Torn apart by Maenads (Dionysus worshippers) whose love he had spurned.',
  },
];

// ─── Multiple-choice quiz questions ───────────────────────────────────────────

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number; // index
  explanation: string;
  category: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Gods
  {
    id: 1,
    category: 'Gods',
    question: 'Which goddess is a consistent supporter of the Greeks during the Trojan War?',
    options: ['Aphrodite', 'Artemis', 'Hera', 'Leto'],
    correct: 2,
    explanation: 'Hera, along with Athena, consistently supports the Greeks. Both were furious after the Judgment of Paris. Aphrodite and Artemis supported the Trojans.',
  },
  {
    id: 2,
    category: 'Gods',
    question: 'What three goddesses are immune to Aphrodite\'s power?',
    options: ['Hera, Demeter, Persephone', 'Athena, Artemis, Hestia', 'Hera, Athena, Artemis', 'Artemis, Hestia, Demeter'],
    correct: 1,
    explanation: 'Athena, Artemis, and Hestia — all virgin goddesses — are stated at the opening of the Homeric Hymn to Aphrodite to be immune to her power.',
  },
  {
    id: 3,
    category: 'Gods',
    question: 'Who serves as psychopompos — guide of souls of the dead?',
    options: ['Apollo', 'Hades', 'Hermes', 'Charon'],
    correct: 2,
    explanation: 'Hermes (Roman: Mercury) is the psychopompos. Charon ferries souls across the Styx, but Hermes guides them from death to the underworld entrance.',
  },
  {
    id: 4,
    category: 'Gods',
    question: 'From where is Athena born?',
    options: ['From the sea foam near Cyprus', 'From Zeus\'s thigh', 'From Zeus\'s head', 'From Hera alone, without a father'],
    correct: 2,
    explanation: 'Athena is born fully armored from Zeus\'s head after he swallowed her mother Metis (wisdom personified) to prevent being overthrown.',
  },
  {
    id: 5,
    category: 'Gods',
    question: 'In the Homeric Hymn to Aphrodite, why does Zeus make Aphrodite fall in love with the mortal Anchises?',
    options: ['To punish her for helping Paris', 'To humble her boasting about making gods fall for mortals', 'To produce the hero Aeneas', 'Because Hera demanded it'],
    correct: 1,
    explanation: 'Zeus is tired of Aphrodite boasting that she makes gods fall for mortals, so he turns her own power against her. The birth of Aeneas is a consequence, not the motivation.',
  },
  {
    id: 6,
    category: 'Gods',
    question: 'What is Ares\'s Roman equivalent and why is the Roman version more culturally significant?',
    options: [
      'Vulcan — associated with forge and fire',
      'Mars — associated with victorious conquest and crops; father of Romulus and Remus',
      'Jupiter — king of the gods',
      'Saturn — god of agriculture',
    ],
    correct: 1,
    explanation: 'Mars (Roman Ares) was far more important to Romans than Ares was to Greeks. Mars represented victorious war AND the harvest/crops, and was the father of Romulus and Remus — the founders of Rome.',
  },
  // Myths
  {
    id: 7,
    category: 'Myths',
    question: 'What metrical form were the Iliad and Odyssey composed in?',
    options: ['Elegiac couplet', 'Iambic pentameter', 'Dactylic hexameter', 'Trochaic tetrameter'],
    correct: 2,
    explanation: 'Dactylic hexameter — also called "heroic meter" — is the standard form for early Greek epic poetry. A dactyl consists of one long syllable followed by two short syllables, with six feet per line.',
  },
  {
    id: 8,
    category: 'Myths',
    question: 'What was the basis of Orpheus\'s power?',
    options: ['Physical strength', 'Cleverness in trickery', 'Musical abilities', 'Divine parentage from Zeus'],
    correct: 2,
    explanation: 'Orpheus\'s power resided entirely in his extraordinary musical abilities — his singing and lyre-playing could charm all of nature, including the gods of the Underworld.',
  },
  {
    id: 9,
    category: 'Myths',
    question: 'How does Tantalus offend the gods?',
    options: ['He refuses to sacrifice to them', 'He steals fire from Olympus', 'He feeds them human flesh', 'He tries to rape Hera'],
    correct: 2,
    explanation: 'Tantalus serves his own son Pelops as a meal to the gods, apparently to test their omniscience. Only Demeter (distracted by grief for Persephone) ate a piece — the shoulder.',
  },
  {
    id: 10,
    category: 'Myths',
    question: 'What did Orpheus do that caused Eurydice to slip back into the Underworld?',
    options: ['He stopped singing', 'He let go of her hand', 'He looked back at her', 'He dropped his golden bough'],
    correct: 2,
    explanation: 'Hades\'s single condition was that Orpheus must not look back at Eurydice as she followed him out. At the last moment he looked back, and she was immediately drawn back into death.',
  },
  {
    id: 11,
    category: 'Myths',
    question: 'According to Euripides\' Helen (412 BCE), what actually happened to Helen during the Trojan War?',
    options: [
      'She hid in Argos until the war ended',
      'A phantom went to Troy while the real Helen was taken to Egypt',
      'She was captured and kept prisoner in Troy',
      'Aphrodite transported her to Crete',
    ],
    correct: 1,
    explanation: 'In Euripides\' revisionist version, a phantom substitute went to Troy while Hermes transported the real Helen to Egypt, where she remained faithful to Menelaus. The entire war was fought over a ghost.',
  },
  {
    id: 12,
    category: 'Myths',
    question: 'What is the answer to the Riddle of the Sphinx?',
    options: ['Three', 'Wine', 'Man', 'Old Age'],
    correct: 2,
    explanation: 'Man — who crawls on four limbs as an infant ("morning"), walks on two as an adult ("noon"), and uses a cane as a third "leg" in old age ("evening"). Oedipus\'s correct answer caused the Sphinx to kill herself.',
  },
  {
    id: 13,
    category: 'Myths',
    question: 'Which famous Greek hero is said to be in a place of eternal punishment in the Aeneid?',
    options: ['Achilles', 'Theseus', 'Heracles', 'Agamemnon'],
    correct: 1,
    explanation: 'Theseus is mentioned as being in Tartarus (the place of punishment) in the Aeneid. He was imprisoned there for attempting to abduct Persephone with Pirithous, and Heracles could only partially free him.',
  },
  {
    id: 14,
    category: 'Myths',
    question: 'How did Pelops win the right to marry Hippodamia?',
    options: ['In a boxing match', 'In a chariot race', 'In a beauty contest', 'In a weaving contest'],
    correct: 1,
    explanation: 'Pelops won a chariot race against Hippodamia\'s father Oenomaus, who had killed all previous suitors. Pelops bribed Myrtilus to sabotage Oenomaus\'s chariot — beginning the curse on the House of Atreus.',
  },
  {
    id: 15,
    category: 'Myths',
    question: 'Why does Polynices raise an army against his brother Eteocles?',
    options: [
      'To avenge their father Oedipus',
      'To seize the oracle of Delphi',
      'To reclaim the throne after Eteocles refused his turn to rule',
      'To rescue Antigone from exile',
    ],
    correct: 2,
    explanation: 'The brothers agreed to alternate rule of Thebes. Eteocles refused to step down after his year, so Polynices raised the Seven Against Thebes to take the throne by force. Both brothers die in single combat.',
  },
  // Underworld
  {
    id: 16,
    category: 'Underworld',
    question: 'What is the overall impression one gets of the fate of the dead in Book 11 of the Odyssey?',
    options: [
      'They are being punished for their earthly sins',
      'They are mainly just there in the same state without distinction',
      'Some are being rewarded and some punished',
      'They are being rewarded for virtue',
    ],
    correct: 1,
    explanation: 'In Homer\'s Underworld, the dead are pale, strengthless shades who simply persist without purpose, consciousness, or moral judgment. Only a tiny number of famous sinners are punished; most dead just exist.',
  },
  {
    id: 17,
    category: 'Underworld',
    question: 'The sinners Odysseus sees punished in the Underworld — against whom did they sin?',
    options: ['Their families', 'Their countrymen', 'The gods', 'Humanity in general'],
    correct: 2,
    explanation: 'Tantalus, Sisyphus, and Tityos — the three famous sinners in Homer\'s Underworld — all committed crimes specifically against the gods (or Zeus), not against other humans.',
  },
  {
    id: 18,
    category: 'Underworld',
    question: 'In Plato\'s Myth of Er, what kind of life did the person with first choice select?',
    options: ['A lion', 'An average person', 'A tyrant', 'A philosopher king'],
    correct: 2,
    explanation: 'The soul with first choice, acting out of greed and without wisdom, immediately chose the life of a great tyrant — not realizing the terrible sufferings it entailed. He later wept at his mistake.',
  },
  {
    id: 19,
    category: 'Underworld',
    question: 'What does the Sibyl tell Aeneas he must find to enter the Underworld?',
    options: ['Two coins for Charon', 'A golden bough', 'The sword of Troy', 'Cerberus\'s collar'],
    correct: 1,
    explanation: 'The Sibyl of Cumae instructs Aeneas to find and carry a golden bough before he can safely enter the Underworld. This is one of the most famous objects in classical mythology.',
  },
  {
    id: 20,
    category: 'Underworld',
    question: 'How did the poet Pindar say Tantalus was punished?',
    options: [
      'By having food and water always just out of reach',
      'By having a huge rock hanging over his head',
      'By having his liver eaten out daily by a vulture',
      'By rolling a boulder uphill forever',
    ],
    correct: 1,
    explanation: 'Pindar (Olympian 1) rejects the food-and-water version as too impious, replacing it with a massive rock hanging over Tantalus\'s head forever. Pindar found the traditional version degrading to the gods.',
  },
  // Theory
  {
    id: 21,
    category: 'Theory',
    question: 'The approach that reads myths as explanations of origins is called:',
    options: ['Structuralism', 'Etiology', 'Allegory', 'Psychoanalysis'],
    correct: 1,
    explanation: 'Etiology (from Greek "aitia" = cause) interprets myths as explanations of origins — of rituals, natural phenomena, place names, or institutions. Example: the Homeric Hymn to Demeter explains the Eleusinian Mysteries.',
  },
  {
    id: 22,
    category: 'Theory',
    question: 'Claude Lévi-Strauss argued that myths are a way of mediating:',
    options: ['Repressed sexual desires', 'Structural binary opposites', 'Natural cosmological phenomena', 'Religious ritual requirements'],
    correct: 1,
    explanation: 'Lévi-Strauss\'s structuralist approach holds that myths mediate fundamental binary oppositions in human thought: raw/cooked, nature/culture, mortal/immortal, male/female.',
  },
  {
    id: 23,
    category: 'Theory',
    question: 'Which anthropologist argued you must live within a culture to truly understand its myths?',
    options: ['Sigmund Freud', 'J.G. Frazer', 'Bronisław Malinowski', 'Claude Lévi-Strauss'],
    correct: 2,
    explanation: 'Malinowski, the Polish anthropologist, stressed cultural particularity — myths reflect the specific social customs and beliefs of the culture that produced them, and cannot be understood from the outside.',
  },
  {
    id: 24,
    category: 'Theory',
    question: 'Freud\'s concept directly named after a Greek myth is:',
    options: ['The Narcissus complex', 'The Oedipus complex', 'The Prometheus complex', 'The Electra complex'],
    correct: 1,
    explanation: 'Freud\'s Oedipus complex — the idea that children unconsciously desire the opposite-sex parent and feel hostility toward the same-sex parent — is named directly after the Oedipus myth.',
  },
  // Sources
  {
    id: 25,
    category: 'Authors',
    question: 'Which work is our most important source for understanding the origins of the gods and divine succession myths?',
    options: ['Homer, The Odyssey', 'Euripides, Oresteia', 'Apollonius of Rhodes, Argonautica', 'Hesiod, Theogony'],
    correct: 3,
    explanation: 'Hesiod\'s Theogony is the most systematic early account of the origins of the universe and gods, and the divine succession myths (Ouranos → Kronos → Zeus). It became the definitive Greek version.',
  },
  {
    id: 26,
    category: 'Authors',
    question: 'In what period were myths first recorded in writing in ancient Greece?',
    options: ['Late Bronze Age (Mycenaean)', 'Dark Age', 'Archaic Period (750–500 BCE)', 'Classical Period (500–323 BCE)'],
    correct: 2,
    explanation: 'The Archaic Period (750–500 BCE) is when myths were first written down, beginning in the late 8th or early 7th century BCE. Hesiod and Homer\'s works are the first surviving written mythological texts.',
  },
  {
    id: 27,
    category: 'Authors',
    question: 'Ovid\'s Metamorphoses focuses on myths involving:',
    options: ['The founding of Rome', 'Transformations of form', 'The Trojan War', 'The Twelve Labors of Heracles'],
    correct: 1,
    explanation: 'Ovid\'s 15-book Latin epic Metamorphoses retells Greek and Roman myths specifically through the theme of transformation — nearly every myth involves someone or something being changed in form.',
  },
  {
    id: 28,
    category: 'Authors',
    question: 'Which deity says to Lucius in Apuleius\'s Metamorphoses: "I am the mother of all things in nature, the mistress of all the elements…"?',
    options: ['Demeter', 'Cybele', 'Isis', 'Hera'],
    correct: 2,
    explanation: 'Isis speaks this famous syncretic speech to Lucius in Apuleius\'s Metamorphoses (The Golden Ass). It is one of the key texts of ancient mystery religion, presenting Isis as the universal goddess encompassing all others.',
  },
  // Theban
  {
    id: 29,
    category: 'Thebes',
    question: 'What does the term "Spartoi" mean?',
    options: ['Noble warriors from afar', 'Sown men', 'Ancestor worshippers', 'Soldiers of the city'],
    correct: 1,
    explanation: 'Spartoi means "sown men" — the warriors who sprang from the dragon\'s teeth Cadmus sowed into the earth. Five survivors became the ancestors of Thebes\'s noble families.',
  },
  {
    id: 30,
    category: 'Thebes',
    question: 'Who are the Epigoni?',
    options: [
      'The descendants of Cadmus',
      'The descendants of the Spartoi',
      'The sons of the Seven Against Thebes',
      'The sons of Oedipus',
    ],
    correct: 2,
    explanation: 'The Epigoni ("those born after") are the sons of the Seven Against Thebes — the second generation who successfully sacked Thebes after their fathers\' failed expedition.',
  },
];

// ─── Sources cheat sheet ──────────────────────────────────────────────────────

export interface Source {
  author: string;
  work: string;
  date: string;
  language: string;
  genre: string;
  keyContent: string;
  examImportance: 'essential' | 'important' | 'supplementary';
}

export const SOURCES: Source[] = [
  {
    author: 'Hesiod',
    work: 'Theogony',
    date: 'c. 700 BCE',
    language: 'Greek',
    genre: 'Epic / Theogonic poetry (dactylic hexameter)',
    keyContent: 'Origins of the cosmos; birth of the gods; Chaos and the primordial beings; First and Second Succession Myths (Ouranos → Kronos → Zeus); birth of Aphrodite from sea foam; Zeus\'s children; Hurrian parallels.',
    examImportance: 'essential',
  },
  {
    author: 'Hesiod',
    work: 'Works and Days',
    date: 'c. 700 BCE',
    language: 'Greek',
    genre: 'Didactic epic poetry',
    keyContent: 'Five Ages of Humanity (Gold, Silver, Bronze, Age of Heroes, Iron); Prometheus and the theft of fire; creation of Pandora; the jar and its evils; Hope.',
    examImportance: 'essential',
  },
  {
    author: 'Homer',
    work: 'The Iliad',
    date: 'c. 750–700 BCE',
    language: 'Greek',
    genre: 'Epic poetry (dactylic hexameter)',
    keyContent: 'Wrath of Achilles; ~50 days near end of Trojan War; Hector vs Achilles; divine interventions; Greek and Trojan heroes; Book 14 (Zeus and Hera); gods\' factional alignments.',
    examImportance: 'essential',
  },
  {
    author: 'Homer',
    work: 'The Odyssey',
    date: 'c. 725–700 BCE',
    language: 'Greek',
    genre: 'Epic poetry (dactylic hexameter)',
    keyContent: 'Return of Odysseus from Troy; Cyclops, Circe, Sirens, Scylla; Book 11 (Land of the Dead — Underworld); Penelope and the suitors; homecoming and recognition.',
    examImportance: 'essential',
  },
  {
    author: 'Various',
    work: 'Homeric Hymns',
    date: 'c. 700–400 BCE',
    language: 'Greek',
    genre: 'Hymnic poetry (dactylic hexameter)',
    keyContent: '33 hymns; key long hymns: To Apollo (Delos and Delphi), To Aphrodite (Anchises affair), To Demeter (search for Persephone, Eleusinian Mysteries), To Hermes (cattle theft). Function: mythological narratives + cult foundations.',
    examImportance: 'essential',
  },
  {
    author: 'Pindar',
    work: 'Olympian Odes',
    date: '476–446 BCE',
    language: 'Greek',
    genre: 'Lyric poetry (choral odes)',
    keyContent: 'Celebrate athletic victors at Panhellenic games; Olympian 1 gives the Pelops and Tantalus myth (with Pindar\'s alternative punishment: the rock, not food/water); deliberately rejects "impious" versions of myths.',
    examImportance: 'important',
  },
  {
    author: 'Aeschylus',
    work: 'Oresteia (trilogy)',
    date: '458 BCE',
    language: 'Greek',
    genre: 'Tragedy',
    keyContent: 'Agamemnon (return and murder); Libation Bearers (Orestes kills Clytemnestra and Aegisthus); Eumenides (Orestes tried and acquitted). Key for: House of Atreus, Trojan War consequences, Clytemnestra\'s character.',
    examImportance: 'important',
  },
  {
    author: 'Sophocles',
    work: 'Oedipus Rex',
    date: 'c. 429 BCE',
    language: 'Greek',
    genre: 'Tragedy',
    keyContent: 'The discovery of Oedipus\'s identity as parricide and incest. Central myth: fate vs free will; the limits of human knowledge. Called the perfect tragedy by Aristotle in his Poetics.',
    examImportance: 'essential',
  },
  {
    author: 'Euripides',
    work: 'Helen',
    date: '412 BCE',
    language: 'Greek',
    genre: 'Tragedy',
    keyContent: 'Revisionist version: phantom Helen goes to Troy; real Helen in Egypt, faithful to Menelaus. Questions the purpose of the entire war. Anti-war themes; unusual among tragedies in its near-comic ending.',
    examImportance: 'important',
  },
  {
    author: 'Euripides',
    work: 'Hippolytus',
    date: '428 BCE',
    language: 'Greek',
    genre: 'Tragedy',
    keyContent: 'Juxtaposition of Artemis (virginity) and Aphrodite (erotic love). Phaedra loves her stepson Hippolytus; her false accusation leads to his death. Theseus curses his son; Poseidon fulfills the curse.',
    examImportance: 'important',
  },
  {
    author: 'Vergil',
    work: 'Aeneid',
    date: '29–19 BCE',
    language: 'Latin',
    genre: 'Epic poetry (dactylic hexameter)',
    keyContent: 'Aeneas\'s journey from Troy to Italy; Books 1–6 (Dido, the underworld/parade of Romans); Books 7–12 (war in Italy). Roman founding myth; pietas as supreme virtue; deliberate reworking of Homer.',
    examImportance: 'essential',
  },
  {
    author: 'Ovid',
    work: 'Metamorphoses',
    date: '8 CE',
    language: 'Latin',
    genre: 'Epic/Narrative poetry',
    keyContent: '15 books; creation to Julius Caesar\'s apotheosis; unified by transformation theme. Key myths: Daphne, Actaeon, Niobe, Arachne, Orpheus and Eurydice, Pygmalion, Adonis, Callisto, Hyacinthus, Marsyas, Narcissus.',
    examImportance: 'essential',
  },
  {
    author: 'Apuleius',
    work: 'Metamorphoses (The Golden Ass)',
    date: 'c. 170 CE',
    language: 'Latin',
    genre: 'Novel',
    keyContent: 'Lucius transformed into a donkey; embedded narrative of Cupid and Psyche (Books 4–6); climactic vision of Isis with her famous syncretic speech. Key for: mystery religions, Isis worship, love mythology.',
    examImportance: 'important',
  },
  {
    author: 'Plato',
    work: 'Republic (Myth of Er)',
    date: 'c. 380 BCE',
    language: 'Greek',
    genre: 'Philosophy / Eschatological myth',
    keyContent: 'Er (a soldier) returns from death and describes the afterlife. Souls judged; punished or rewarded 10x their earthly deeds for 1000 years; then choose next lives. Tyrant who chose unwisely; Odysseus who chose wisely this time. Argues for just life.',
    examImportance: 'important',
  },
];

// ─── Sagas overview ────────────────────────────────────────────────────────────

export interface SagaEvent {
  order: number;
  event: string;
  characters: string;
  source: string;
  significance: string;
}

export const TROJAN_SAGA: SagaEvent[] = [
  { order: 1, event: 'Wedding of Peleus and Thetis — apple of Eris thrown', characters: 'Eris, Hera, Athena, Aphrodite', source: 'Post-Homeric tradition', significance: 'Root cause: the discord that leads to the Judgment of Paris' },
  { order: 2, event: 'Judgment of Paris on Mt. Ida', characters: 'Paris, Hera, Athena, Aphrodite', source: 'Post-Homeric; alluded to in Iliad', significance: 'Paris chooses Aphrodite; Hera and Athena become enemies of Troy' },
  { order: 3, event: 'Paris visits Sparta; abducts/elopes with Helen', characters: 'Paris, Helen, Menelaus', source: 'Iliad (referred to)', significance: 'The act of war — violation of xenia (guest-friendship)' },
  { order: 4, event: 'Menelaus rallies Greek kings under Agamemnon', characters: 'Menelaus, Agamemnon, Odysseus, Achilles', source: 'Post-Homeric tradition', significance: 'Formation of the Greek coalition — 1000 ships' },
  { order: 5, event: 'Nine years of siege; Iliad begins in year 10', characters: 'All Greek and Trojan heroes', source: 'Iliad, Book 1', significance: 'Apollo sends plague; Agamemnon takes Achilles\' captive Briseis' },
  { order: 6, event: 'Achilles withdraws from battle', characters: 'Achilles, Agamemnon', source: 'Iliad, Books 1–9', significance: 'The central conflict of the Iliad; Greeks suffer without their greatest warrior' },
  { order: 7, event: 'Patroclus wears Achilles\' armour and is killed by Hector', characters: 'Patroclus, Hector, Apollo', source: 'Iliad, Book 16', significance: 'Triggers Achilles\' return — grief overrides his anger at Agamemnon' },
  { order: 8, event: 'Achilles kills Hector; desecrates his body', characters: 'Achilles, Hector', source: 'Iliad, Books 22–23', significance: 'The climax of the Iliad; Troy\'s greatest defender falls' },
  { order: 9, event: 'Priam ransoms Hector\'s body from Achilles', characters: 'Priam, Achilles, Hermes', source: 'Iliad, Book 24', significance: 'The most humanly moving scene — shared grief across enemy lines' },
  { order: 10, event: 'Death of Achilles — Paris\'s arrow, guided by Apollo', characters: 'Achilles, Paris, Apollo', source: 'Post-Homeric (Aethiopis)', significance: 'The prophecy fulfilled: Achilles dies young but glorious' },
  { order: 11, event: 'The Trojan Horse — Greeks hidden inside', characters: 'Odysseus, Epeius, Greek warriors', source: 'Odyssey (referred to), later tradition', significance: 'Odysseus\'s decisive stratagem; Troy falls through cleverness not force' },
  { order: 12, event: 'Fall of Troy — sacked, burned, looted', characters: 'All survivors', source: 'Iliad (prophesied), Aeneid', significance: 'End of the Trojan War; beginning of the nostoi (return journeys)' },
  { order: 13, event: 'Aeneas escapes with father Anchises and household gods', characters: 'Aeneas, Anchises, Ascanius', source: 'Vergil, Aeneid', significance: 'The beginning of the Roman founding myth' },
  { order: 14, event: 'Agamemnon returns and is murdered by Clytemnestra and Aegisthus', characters: 'Agamemnon, Clytemnestra, Aegisthus', source: 'Aeschylus, Oresteia', significance: 'The darkest of the nostoi; begins the House of Atreus cycle' },
  { order: 15, event: 'Odysseus wanders for ten more years before reaching Ithaca', characters: 'Odysseus, Penelope, Telemachus', source: 'Homer, Odyssey', significance: 'The central myth of the nostos hero and the meaning of homecoming' },
];

// ─── Glossary ─────────────────────────────────────────────────────────────────

export interface GlossaryTerm {
  term: string;
  pronunciation?: string;
  definition: string;
  example: string;
  category: 'concept' | 'place' | 'creature' | 'ritual' | 'literary';
}

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Kleos', pronunciation: 'KLEE-oss', definition: 'Glory or fame won through heroic deeds, especially in battle. In the heroic code, kleos achieved in life persists after death and is the only substitute for immortality.', example: 'Achilles explicitly chooses a short life with kleos over a long obscure one.', category: 'concept' },
  { term: 'Nostos', pronunciation: 'NOS-toss', definition: 'Homecoming — the return journey home from war or adventure. The plural nostoi refers collectively to the return journeys of the Greek heroes after Troy.', example: 'The Odyssey is the greatest nostos myth. Agamemnon\'s nostos ends in his murder.', category: 'concept' },
  { term: 'Timê', pronunciation: 'tee-MAY', definition: 'Honor, worth, or prestige in the eyes of one\'s community. In the heroic code, a man\'s timê is his social value — insults to it demand violent response.', example: 'Agamemnon insults Achilles by taking Briseis, a direct attack on his timê.', category: 'concept' },
  { term: 'Hubris', pronunciation: 'HYOO-bris', definition: 'Arrogant overreach — attempting to exceed one\'s proper mortal limits, often by disrespecting or challenging the gods. Hubris reliably triggers divine punishment (nemesis).', example: 'Niobe\'s boast that she is better than Leto is the defining act of hubris — Apollo and Artemis kill all her children.', category: 'concept' },
  { term: 'Nemesis', pronunciation: 'NEM-eh-sis', definition: 'Divine retribution or righteous indignation — the punishment that follows hubris. Also personified as a goddess of retributive justice.', example: 'The deaths of Actaeon and Marsyas represent nemesis for those who transgress divine boundaries.', category: 'concept' },
  { term: 'Xenia', pronunciation: 'KSEN-ee-ah', definition: 'Guest-friendship — the sacred obligation to offer hospitality to strangers, and to behave honorably as a guest. Violation of xenia is among the gravest offenses in Greek ethics.', example: 'Paris violates xenia by abducting Helen while a guest of Menelaus — this is the ethical foundation of the war.', category: 'concept' },
  { term: 'Pietas', pronunciation: 'pee-EH-tahs', definition: 'Roman concept of duty — to the gods, to family, and to the state. The defining virtue of Aeneas and the Roman ideal contrasted with Achilles\' individual honor.', example: 'Aeneas carries his father Anchises on his back from burning Troy — pietas in action.', category: 'concept' },
  { term: 'Menis', pronunciation: 'MAY-nis', definition: 'Divine or heroic wrath — a dangerous, consuming anger with cosmic consequences. The very first word of the Iliad ("Rage — Goddess, sing the rage of Peleus\' son Achilles").', example: 'Achilles\' menis is the subject of the entire Iliad; it costs the Greeks thousands of lives.', category: 'concept' },
  { term: 'Catharsis', pronunciation: 'kah-THAR-sis', definition: 'Aristotle\'s term for the emotional "purging" of pity and fear that tragedy produces in its audience. The audience feels these emotions through the hero\'s suffering, then experiences release.', example: 'Watching Oedipus discover the truth is supposed to produce catharsis — we feel his terror and pity vicariously.', category: 'literary' },
  { term: 'In medias res', pronunciation: 'in MAY-dee-as RACE', definition: 'Latin: "into the middle of things." The narrative technique of beginning a story in the middle of the action, not from the beginning. The backstory is revealed through flashback.', example: 'Both the Iliad and the Odyssey begin in medias res — the Iliad in year 10 of the war, the Odyssey with Odysseus already held by Calypso.', category: 'literary' },
  { term: 'Nostos / Nostoi', pronunciation: 'NOS-toy', definition: 'The stories of the Greek heroes\' return voyages home from Troy. A whole cycle of myths. Most famous: Odysseus\' nostos (the Odyssey). Most disastrous: Agamemnon\'s (murder by Clytemnestra).', example: 'The nostoi cycle reveals that surviving Troy did not mean safety — homecoming had its own terrors.', category: 'literary' },
  { term: 'Dactylic hexameter', pronunciation: 'dak-TIL-ik hex-AM-eh-ter', definition: 'The metrical form of Greek and Latin epic poetry. Each line has six feet; a dactyl = one long syllable followed by two short ones. Called "heroic meter."', example: 'Both Homer\'s Iliad and Odyssey and Vergil\'s Aeneid are written in dactylic hexameter.', category: 'literary' },
  { term: 'Delphi', pronunciation: 'DEL-fee', definition: 'The most famous oracle site in the ancient world, located on Mt. Parnassus. Sacred to Apollo; home of the Pythia (the priestess-prophetess). Consulted by individuals and city-states throughout the Greek world.', example: 'Oedipus consults Delphi and receives the devastating prophecy that drives the plot of Oedipus Rex.', category: 'place' },
  { term: 'Eleusis', pronunciation: 'eh-LOO-sis', definition: 'A town northwest of Athens; site of the Eleusinian Mysteries — the most important mystery cult in the ancient Greek world, centered on Demeter and Persephone.', example: 'The Homeric Hymn to Demeter is an etiological myth explaining the founding of the cult at Eleusis.', category: 'place' },
  { term: 'Olympus', pronunciation: 'oh-LIM-pus', definition: 'The highest mountain in Greece (2,917 m); in myth, the home of the twelve Olympian gods. In the Iliad Zeus watches the war from its summit.', example: 'When the gods leave Olympus to intervene in the Trojan War, they must descend to the human world.', category: 'place' },
  { term: 'Tartarus', pronunciation: 'TAR-tah-rus', definition: 'The deepest region of the underworld — a place of punishment for those who gravely offended the gods. As far below Hades as the earth is below the heavens.', example: 'Tantalus, Sisyphus, Tityos, and Ixion are punished in Tartarus. Theseus is found there in the Aeneid.', category: 'place' },
  { term: 'Elysium', pronunciation: 'eh-LIZ-ee-um', definition: 'The paradise section of the underworld for great heroes and the exceptionally virtuous — the opposite of Tartarus.', example: 'In Vergil\'s Aeneid, Aeneas finds his father Anchises in Elysium, revealing the future heroes of Rome.', category: 'place' },
  { term: 'Styx', pronunciation: 'STIX', definition: 'The primary river of the underworld, across which Charon ferries the souls of the dead. The gods swore their most binding oaths by the Styx.', example: 'Achilles\' mother Thetis dips him in the Styx to make him invulnerable — except for the heel she holds.', category: 'place' },
  { term: 'Sphinx', pronunciation: 'SFINKS', definition: 'A creature with a woman\'s head, lion\'s body, and eagle\'s wings that terrorized Thebes by killing anyone who could not answer her riddle. Killed herself when Oedipus answered correctly.', example: 'The Sphinx\'s riddle (What walks on four, then two, then three?) and Oedipus\'s answer (Man) is the central intellectual feat of the Theban saga.', category: 'creature' },
  { term: 'Cerberus', pronunciation: 'SER-ber-us', definition: 'The three-headed dog that guards the entrance to the underworld, preventing the living from entering and the dead from leaving.', example: 'Orpheus charms Cerberus with his music; Heracles captures him as his 12th Labor; Psyche bypasses him with a honey cake.', category: 'creature' },
  { term: 'Minotaur', pronunciation: 'MIN-oh-tor', definition: 'The half-man, half-bull offspring of the Cretan queen Pasiphae and a divine bull sent by Poseidon. Kept in the Labyrinth at Crete; killed by Theseus.', example: 'The Minotaur myth explores themes of monstrosity, shame, and the duty of a hero to civilize the dangerous and monstrous.', category: 'creature' },
  { term: 'Arkteia', pronunciation: 'ark-TAY-ah', definition: 'The religious ceremony at the sanctuary of Artemis at Brauron, in which Athenian girls "played the bear" — dressing in saffron robes, sacrificing, and racing — before they were eligible for marriage.', example: 'The Arkteia is a key example of Artemis\'s paradoxical role: a virgin goddess who oversees female transitions to womanhood.', category: 'ritual' },
  { term: 'Eleusinian Mysteries', pronunciation: 'el-yoo-SIN-ee-an', definition: 'The most prestigious mystery cult of ancient Greece, held at Eleusis in honor of Demeter and Persephone. Initiates (mystai) underwent secret rituals believed to guarantee a better afterlife.', example: 'The Homeric Hymn to Demeter is the founding myth of the Eleusinian Mysteries — Demeter\'s search for Persephone explains why the cult exists.', category: 'ritual' },
  { term: 'Etiological myth', pronunciation: 'ee-tee-oh-LOJ-ih-kul', definition: 'A myth that explains the origin of something — a ritual, a natural phenomenon, a place name, or a custom. From Greek "aitia" (cause).', example: 'The myth of Apollo killing Python explains why the Delphic oracle is called the Pythian oracle and its priestess the Pythia.', category: 'concept' },
  { term: 'Collective unconscious', pronunciation: '', definition: 'Jung\'s concept: a layer of the unconscious shared by all humanity, containing archetypes — inherited patterns of imagery and behaviour that surface in myths across all cultures.', example: 'The "hero" archetype (birth, quest, descent, return) appears in Heracles, Odysseus, Aeneas, and Psyche — suggesting a universal pattern.', category: 'concept' },
  { term: 'Psychopompos', pronunciation: 'sy-ko-POM-pos', definition: 'Greek: "guide of souls." The role of guiding the souls of the dead from the world of the living to the underworld. Primarily Hermes\' role in Greek mythology.', example: 'In the Odyssey, Hermes guides the slaughtered suitors\' souls to Hades like a shepherd guiding a flock.', category: 'concept' },
];

// ─── Additional quiz questions ─────────────────────────────────────────────────

export const EXTRA_QUIZ: QuizQuestion[] = [
  {
    id: 31,
    category: 'Gods',
    question: 'Which goddess is born from the sea foam generated by the severed genitals of the sky god Ouranos?',
    options: ['Hera', 'Aphrodite', 'Demeter', 'Persephone'],
    correct: 1,
    explanation: 'Aphrodite — whose name derives from "aphros" (sea foam) — is born from the foam that arose when Kronos castrated his father Ouranos and threw the genitals into the sea. This is Hesiod\'s version in the Theogony.',
  },
  {
    id: 32,
    category: 'Gods',
    question: 'What is the name of Apollo\'s sacred site in the Aegean where he was born?',
    options: ['Rhodes', 'Lesbos', 'Delos', 'Cyprus'],
    correct: 2,
    explanation: 'Delos is the island where Leto gave birth to Apollo (and Artemis). No other location would accept Leto for fear of Hera\'s wrath. The island swore an oath to become Apollo\'s first shrine, as told in the Homeric Hymn to Apollo.',
  },
  {
    id: 33,
    category: 'Gods',
    question: 'Whom did Hermes kill as part of rescuing Io from Hera\'s surveillance?',
    options: ['Laocoon', 'Argus', 'Polyphemus', 'Tityos'],
    correct: 1,
    explanation: 'Argus Panoptes ("all-seeing Argus") — a hundred-eyed giant set by Hera to watch over the cow-transformed Io — was lulled to sleep by Hermes\' flute and pipe playing, then killed. This is why Hermes is sometimes called Argeiphontes ("Argus-slayer").',
  },
  {
    id: 34,
    category: 'Myths',
    question: 'In what region of Greece is Cadmus\'s city Thebes located?',
    options: ['Attica', 'Laconia', 'Boeotia', 'Argolis'],
    correct: 2,
    explanation: 'Thebes is located in Boeotia — the region of the Greek mainland northeast of Athens. Hesiod was himself a Boeotian poet, which may explain why Theban myths are so prominent in Greek tradition.',
  },
  {
    id: 35,
    category: 'Myths',
    question: 'Who helps Agamemnon\'s wife Clytemnestra when she murders him?',
    options: ['His father', 'His cousin Aegisthus', 'His brother Menelaus', 'His uncle'],
    correct: 1,
    explanation: 'Aegisthus — Agamemnon\'s cousin (both are grandsons of Pelops; Agamemnon through Atreus, Aegisthus through Thyestes) — becomes Clytemnestra\'s lover during Agamemnon\'s absence and co-conspirator in the murder. Their feud has deep roots in the House of Atreus.',
  },
  {
    id: 36,
    category: 'Myths',
    question: 'What animal does Callisto ultimately become, according to the myth?',
    options: ['A deer', 'A wolf', 'A bear', 'A cow'],
    correct: 2,
    explanation: 'Callisto is transformed into a bear — in Ovid\'s version by Hera (Juno), in Greek versions by Artemis herself. Her son Arcas nearly kills her, but Zeus places both in the sky as the constellations Ursa Major (Callisto) and Ursa Minor or Boötes (Arcas).',
  },
  {
    id: 37,
    category: 'Myths',
    question: 'Why does Zeus make Aphrodite fall in love with the mortal Anchises?',
    options: [
      'To produce a hero who will fight at Troy',
      'To punish her for causing the Trojan War',
      'To embarrass her for boasting about making gods love mortals',
      'Because Hera demanded it as compensation',
    ],
    correct: 2,
    explanation: 'Zeus is fed up with Aphrodite\'s boasting that she makes even the mightiest gods fall for mortals, so he turns her power against her. The birth of Aeneas is a consequence — not the goal — of Zeus\'s revenge.',
  },
  {
    id: 38,
    category: 'Myths',
    question: 'In Ovid\'s version, which god accidentally kills Hyacinthus with a discus?',
    options: ['Ares', 'Zeus', 'Apollo', 'Hermes'],
    correct: 2,
    explanation: 'Apollo is throwing the discus with his beloved Hyacinthus when it strikes him fatally. In some versions, the jealous West Wind Zephyrus deflects the discus because he also loved Hyacinthus. Apollo transforms the boy\'s blood into the hyacinth flower.',
  },
  {
    id: 39,
    category: 'Underworld',
    question: 'Which three regions make up the underworld in Vergil\'s Aeneid?',
    options: [
      'Styx, Lethe, Phlegethon',
      'Tartarus (punishment), Elysium (reward), the plain of Lethe (waiting for rebirth)',
      'Asphodel Fields, Elysium, Chaos',
      'Erebus, Tartarus, Elysium',
    ],
    correct: 1,
    explanation: 'Vergil\'s underworld is the most morally structured in ancient literature: Tartarus for the wicked (punished), Elysium for the heroic and virtuous (rewarded), and the plain of Lethe where souls wait for reincarnation after a thousand years of purification.',
  },
  {
    id: 40,
    category: 'Underworld',
    question: 'What crime did Sisyphus commit that led to his infernal punishment?',
    options: [
      'He murdered a guest under his roof',
      'He cheated death twice — tricking Thanatos and Persephone',
      'He stole fire from the gods',
      'He served his own son as food to the gods',
    ],
    correct: 1,
    explanation: 'Sisyphus cheated death twice: he once chained up Thanatos (Death personified), preventing anyone from dying; and he tricked Persephone into releasing him from the underworld. For these repeated affronts to cosmic order, he was condemned to roll his boulder forever.',
  },
  {
    id: 41,
    category: 'Theory',
    question: 'Which scholar wrote The Golden Bough and argued that myth and religious ritual are inseparable?',
    options: ['Bronisław Malinowski', 'Claude Lévi-Strauss', 'J.G. Frazer', 'Walter Burkert'],
    correct: 2,
    explanation: 'J.G. Frazer (1854–1941), a British anthropologist, wrote The Golden Bough and argued that myth and religious ritual are two sides of the same coin. His work heavily influenced subsequent myth scholarship, including Malinowski and the ritual school.',
  },
  {
    id: 42,
    category: 'Theory',
    question: 'Walter Burkert\'s approach to myth is best described as:',
    options: [
      'Pure structuralism — identifying binary opposites in all myths',
      'Synthesis — grounding structuralist approaches in specific historical and religious context',
      'Psychoanalysis — focusing on repressed desires in mythic narratives',
      'Etiology — reading all myths as explanations of origins',
    ],
    correct: 1,
    explanation: 'Burkert\'s approach is a deliberate synthesis: he accepts insights from structuralism, psychology, and the ritual school, while insisting all interpretations be grounded in the specific historical and religious context of the culture that produced the myth.',
  },
  {
    id: 43,
    category: 'Authors',
    question: 'Vergil\'s Aeneid is deliberately modelled on which earlier works?',
    options: [
      'Hesiod\'s Theogony and Works and Days',
      'The Homeric Hymns',
      'Homer\'s Iliad (Books 7–12) and Odyssey (Books 1–6)',
      'Pindar\'s Olympian Odes',
    ],
    correct: 2,
    explanation: 'Vergil structures the Aeneid by inverting Homer: Books 1–6 (Aeneas\'s sea wanderings and underworld) mirror the Odyssey, while Books 7–12 (war in Italy) mirror the Iliad. It is a conscious and systematic reworking of the Homeric tradition for Roman purposes.',
  },
  {
    id: 44,
    category: 'Authors',
    question: 'Apuleius\'s novel Metamorphoses (The Golden Ass) is particularly significant for which embedded story?',
    options: [
      'The Labors of Heracles',
      'The founding myth of Rome',
      'The myth of Cupid and Psyche, and the vision of Isis',
      'The story of Orpheus and Eurydice',
    ],
    correct: 2,
    explanation: 'Apuleius (c. 2nd century CE) embedded within his novel the longest surviving prose version of Cupid and Psyche (Books 4–6), and culminated with Lucius\'s vision of Isis — one of the most important texts for understanding ancient mystery religion and religious syncretism.',
  },
  {
    id: 45,
    category: 'Authors',
    question: 'Which Roman poet was exiled by the emperor Augustus in 8 CE, possibly partly because of his Metamorphoses?',
    options: ['Vergil', 'Horace', 'Ovid', 'Lucretius'],
    correct: 2,
    explanation: 'Ovid was exiled by Augustus to Tomis on the Black Sea in 8 CE. The official reasons remain obscure — he himself cited "a poem and a mistake" — but the Ars Amatoria\'s amoral treatment of love may have conflicted with Augustus\'s moral reform program.',
  },
  {
    id: 46,
    category: 'Thebes',
    question: 'In what city did Cadmus found his civilization, following the instructions of the oracle of Delphi?',
    options: ['Athens', 'Corinth', 'Thebes', 'Argos'],
    correct: 2,
    explanation: 'Cadmus founded Thebes in Boeotia — following a cow as instructed by Delphi until it lay down to rest, marking the site of the city. He killed a dragon, sowed its teeth, and the Spartoi arose to become Thebes\'s first noble families.',
  },
  {
    id: 47,
    category: 'Thebes',
    question: 'Why was Oedipus exposed as an infant?',
    options: [
      'His father thought he was not his own son',
      'There was a drought and the family could not afford to raise him',
      'A prophecy stated he would kill his father and marry his mother',
      'His mother had a dream that he would destroy Troy',
    ],
    correct: 2,
    explanation: 'Laius consulted the Delphic oracle and received the terrible prophecy that his son would kill him and marry his wife (Jocasta). He had the infant exposed on Mt. Cithaeron with his ankles pinned — but a shepherd took pity and passed him to the Corinthian royal family.',
  },
  {
    id: 48,
    category: 'Myths',
    question: 'The myth of Cupid and Psyche appears in which work?',
    options: [
      'Ovid\'s Metamorphoses',
      'Apuleius\'s Metamorphoses (The Golden Ass)',
      'Vergil\'s Aeneid',
      'Euripides\' Hippolytus',
    ],
    correct: 1,
    explanation: 'The most elaborate surviving version of Cupid and Psyche appears in Apuleius\'s novel Metamorphoses (also called The Golden Ass), written in Latin in the 2nd century CE. Ovid\'s Metamorphoses does not include it.',
  },
  {
    id: 49,
    category: 'Gods',
    question: 'What links the Eleusinian Mysteries to the Homeric Hymn to Demeter?',
    options: [
      'The hymn was sung at the beginning of the Mysteries as a prayer',
      'The hymn provides an etiological narrative explaining why the Mysteries exist',
      'The hymn describes the exact initiation rituals of the cult',
      'Both were written by the same Eleusinian priest',
    ],
    correct: 1,
    explanation: 'The Homeric Hymn to Demeter is an etiological myth — it explains the origins of the Eleusinian Mysteries. It narrates Demeter\'s search for Persephone, her stay at Eleusis, and her command to the Eleusinians to found a temple and institute the rites in her honor.',
  },
  {
    id: 50,
    category: 'Myths',
    question: 'In the Homeric tradition, what is unique about Achilles\'s choice regarding his fate?',
    options: [
      'He is the only hero born of a goddess',
      'He explicitly chose a short glorious life over a long obscure one',
      'He refused to fight at Troy and had to be tricked into going',
      'He killed a god in battle, which no other hero achieved',
    ],
    correct: 1,
    explanation: 'Achilles was given a choice by his mother Thetis: a long peaceful life in obscurity, or a short life ending at Troy with imperishable glory (kleos). He chose kleos. This choice — and its consequences — is the central ethical and existential dimension of the Iliad.',
  },
];

// ─── Theban Saga ──────────────────────────────────────────────────────────────

export interface ThebanEvent {
  order: number;
  title: string;
  generation: string;
  summary: string;
  characters: string;
  source: string;
  themes: string[];
}

export const THEBAN_SAGA: ThebanEvent[] = [
  {
    order: 1,
    title: 'Europa and the Bull',
    generation: 'Generation 1 — Cadmus',
    summary: 'Zeus disguises himself as a magnificent white bull and carries off Europa, the Phoenician princess, to Crete. Her father Agenor sends his son Cadmus to find her, with instructions not to return without her.',
    characters: 'Zeus, Europa, Agenor, Cadmus',
    source: 'Post-Homeric tradition; Ovid, Metamorphoses 2–3',
    themes: ['Divine deception', 'Failed quest becomes founding mission'],
  },
  {
    order: 2,
    title: 'Cadmus Founds Thebes',
    generation: 'Generation 1 — Cadmus',
    summary: 'Unable to find Europa, Cadmus consults the Delphic oracle. He is told to follow a cow and found a city where it lies down — in Boeotia. He kills a dragon (sacred to Ares) guarding a spring, sows its teeth, and the Spartoi — armed men — spring from the earth. Five survivors become Thebes\'s noble ancestors. Cadmus marries Harmonia (daughter of Ares and Aphrodite) in a ceremony attended by the Olympian gods.',
    characters: 'Cadmus, Ares\' dragon, the Spartoi (sown men), Harmonia',
    source: 'Post-Homeric tradition; Ovid, Metamorphoses 3',
    themes: ['Etiological foundation myth', 'Violence purified through civilization', 'Divine origins of nobility'],
  },
  {
    order: 3,
    title: 'Actaeon Destroyed by Artemis',
    generation: 'Generation 2 — Children of Cadmus',
    summary: 'Cadmus\'s grandson Actaeon, a great hunter, accidentally stumbles upon Artemis bathing on Mt. Cithaeron. Artemis transforms him into a stag; his own fifty hunting hounds tear him apart. He dies without even being able to cry out his own name.',
    characters: 'Actaeon, Artemis',
    source: 'Ovid, Metamorphoses 3; Bacchylides',
    themes: ['Hubris (accidental transgression)', 'Divine vengeance disproportionate to offense', 'The violence of Artemis'],
  },
  {
    order: 4,
    title: 'Semele and the Birth of Dionysus',
    generation: 'Generation 2 — Children of Cadmus',
    summary: 'Cadmus\'s daughter Semele becomes pregnant by Zeus. Hera, disguised as Semele\'s nurse, convinces her to ask Zeus to reveal himself in his full divine glory. Zeus reluctantly agrees — Semele is incinerated by his thunderbolt. Zeus saves the unborn Dionysus by sewing him into his own thigh, from which he is later born. Dionysus is therefore "twice-born."',
    characters: 'Zeus, Semele, Hera (disguised), Dionysus',
    source: 'Hesiod, Theogony; Ovid, Metamorphoses 3',
    themes: ['Hera\'s jealousy', 'Mortal limits before divine power', 'Miraculous birth of a god'],
  },
  {
    order: 5,
    title: 'Pentheus Refuses Dionysus',
    generation: 'Generation 3 — Theban rulers',
    summary: 'Dionysus returns to Thebes, his birthplace, but his cousin Pentheus refuses to recognize his divinity and forbids his worship. Dionysus drives the women of Thebes into Dionysiac frenzy on Mt. Cithaeron. He lures the disguised Pentheus to spy on the rites — Pentheus is discovered and torn apart by the Maenads, led by his own mother Agave, who believes she has killed a lion.',
    characters: 'Pentheus, Dionysus, Agave, Cadmus',
    source: 'Euripides, Bacchae',
    themes: ['Hubris against a god', 'The danger of repressing Dionysiac forces', 'Maternal horror and madness'],
  },
  {
    order: 6,
    title: 'Laius, the Prophecy, and the Exposure of Oedipus',
    generation: 'Generation 4 — Laius and Jocasta',
    summary: 'Laius, king of Thebes, receives a Delphic prophecy: his son will kill him and marry his mother. When Jocasta gives birth, Laius pins the infant\'s ankles together and orders him exposed on Mt. Cithaeron. A shepherd takes pity, passes the child to another shepherd from Corinth, who gives him to the childless king and queen of Corinth (Polybus and Merope) to raise as their own. The child is named Oedipus — "swollen foot."',
    characters: 'Laius, Jocasta, infant Oedipus, the shepherd',
    source: 'Sophocles, Oedipus Rex',
    themes: ['Fate vs. free will', 'The futility of trying to escape prophecy', 'Parental failure'],
  },
  {
    order: 7,
    title: 'Oedipus at the Crossroads',
    generation: 'Generation 4 — Oedipus',
    summary: 'As a young man, Oedipus is told he will kill his father and marry his mother. Believing the prophecy applies to his adoptive parents, he flees Corinth. At a crossroads (the "splitting of the ways" near Daulis), he quarrels with an old man in a chariot and kills him. The old man is Laius — his true father. Oedipus does not know this.',
    characters: 'Oedipus, Laius (unrecognized)',
    source: 'Sophocles, Oedipus Rex',
    themes: ['Dramatic irony at its most terrible', 'Patricide fulfilled in ignorance'],
  },
  {
    order: 8,
    title: 'The Riddle of the Sphinx',
    generation: 'Generation 4 — Oedipus',
    summary: 'The Sphinx — a winged monster with a woman\'s head and lion\'s body — terrorizes Thebes by devouring any man who cannot answer her riddle: "What walks on four legs in the morning, two at noon, and three in the evening?" All fail until Oedipus arrives and answers: Man. The Sphinx destroys herself. Thebes rewards Oedipus with the throne and the recently widowed queen, Jocasta — his own mother — as wife.',
    characters: 'Oedipus, the Sphinx, Jocasta',
    source: 'Sophocles, Oedipus Rex; Apollodorus',
    themes: ['Intelligence as heroic power', 'Ironic reward: winning by answering correctly leads to catastrophe'],
  },
  {
    order: 9,
    title: 'The Discovery and Self-Blinding',
    generation: 'Generation 4 — Oedipus',
    summary: 'A plague strikes Thebes. The oracle declares the murderer of Laius must be expelled. Oedipus investigates with relentless determination — the terrible irony being that his own intelligence leads him to the truth. When the shepherd who exposed him testifies, the full horror becomes clear: Oedipus has killed his father and married his mother, with whom he has four children. Jocasta hangs herself. Oedipus blinds himself with her brooches and goes into exile.',
    characters: 'Oedipus, Jocasta, Creon, Teiresias (the blind prophet), the shepherd',
    source: 'Sophocles, Oedipus Rex',
    themes: ['Knowledge as catastrophe', 'The gap between human and divine knowledge', 'Sight and blindness as symbols of wisdom and ignorance'],
  },
  {
    order: 10,
    title: 'Antigone Buries Polynices',
    generation: 'Generation 5 — Children of Oedipus',
    summary: 'After Oedipus\'s exile, his sons Eteocles and Polynices agree to alternate yearly rule of Thebes. Eteocles refuses to step down. Polynices raises an army (the Seven Against Thebes). Both brothers die in single combat. Creon, the new king, decrees that Eteocles be buried with honor but Polynices — the traitor — be left unburied. Oedipus\'s daughter Antigone defies the decree, buries her brother, and is condemned to be entombed alive. She kills herself; her fiancé Haemon (Creon\'s son) kills himself over her body; Creon\'s wife kills herself in grief.',
    characters: 'Antigone, Creon, Polynices, Eteocles, Haemon, Teiresias',
    source: 'Sophocles, Antigone; Aeschylus, Seven Against Thebes',
    themes: ['Divine law vs. human law', 'The obligations of family piety (pietas)', 'The destruction of Creon\'s house through his own rigid pride'],
  },
  {
    order: 11,
    title: 'The Seven Against Thebes and the Epigoni',
    generation: 'Generation 5–6',
    summary: 'The expedition of the Seven Against Thebes (led by Polynices) fails — all but Adrastus die. The prophet Amphiaraus, knowing the expedition will fail, is bribed by his wife Eriphyle (who was herself bribed with the necklace of Harmonia). He flees but is swallowed by the earth. In the next generation, the Epigoni — sons of the Seven — successfully sack Thebes under Adrastus\'s son Alcmaeon, avenging their fathers.',
    characters: 'Polynices, Adrastus, Amphiaraus, Eriphyle, the Epigoni',
    source: 'Aeschylus, Seven Against Thebes; Pindar, Nemean Odes',
    themes: ['Inherited guilt and vengeance across generations', 'The prophet who knows his own death', 'The curse of the necklace of Harmonia'],
  },
];

// ─── Theban family connections (for the tree) ─────────────────────────────────
export const THEBAN_GENERATIONS = [
  { gen: 1, label: 'Founders', members: ['Cadmus (from Phoenicia)', 'Harmonia (daughter of Ares & Aphrodite)'] },
  { gen: 2, label: 'Children of Cadmus', members: ['Semele → Dionysus (by Zeus)', 'Agave → Pentheus', 'Actaeon (grandson, son of Aristaeus & Autonoë)', 'Polydorus → Labdacus'] },
  { gen: 3, label: 'Labdacus line', members: ['Labdacus → Laius'] },
  { gen: 4, label: 'Oedipus\'s generation', members: ['Laius + Jocasta → Oedipus', 'Oedipus + Jocasta (unknowingly) → Eteocles, Polynices, Antigone, Ismene'] },
  { gen: 5, label: 'Children of Oedipus', members: ['Eteocles (dies vs. Polynices)', 'Polynices (leads Seven Against Thebes; dies)', 'Antigone (buried Polynices; condemned by Creon)', 'Ismene'] },
  { gen: 6, label: 'Epigoni', members: ['Sons of the Seven Against Thebes — sack Thebes successfully'] },
];

// ─── 4 more heroes ────────────────────────────────────────────────────────────

export const EXTRA_HEROES: Hero[] = [
  {
    name: 'Antigone',
    type: 'greek',
    epithet: 'The Pious Rebel',
    parentage: 'Daughter of Oedipus and Jocasta — products of incest; sister of Eteocles, Polynices, Ismene',
    domain: 'Divine law, family duty, defiance of tyranny',
    keyDeeds: [
      'Accompanied her blind father Oedipus into exile, guiding and supporting him until his death at Colonus',
      'Defied King Creon\'s decree by burying her brother Polynices, who had been declared a traitor',
      'When caught, refused to deny the act or compromise — insisted divine law superseded human law',
      'Condemned to be entombed alive by Creon; killed herself before he could relent',
      'Her death triggered the suicides of Haemon (her fiancé, Creon\'s son) and Eurydice (Creon\'s wife)',
    ],
    keyMyths: 'Sophocles\' Antigone; Sophocles\' Oedipus at Colonus; Aeschylus\' Seven Against Thebes',
    significance: 'Embodies the conflict between divine law (burying the dead is a sacred duty) and human law (Creon\'s political decree). Her story raises timeless questions about when civil disobedience is justified. She is one of Greek tragedy\'s most morally serious figures.',
    death: 'Hanged herself in the tomb where Creon had entombed her alive. Her death set off a chain of suicides.',
  },
  {
    name: 'Medea',
    type: 'greek',
    epithet: 'The Barbarian Sorceress',
    parentage: 'Daughter of Aeëtes, king of Colchis (on the Black Sea); granddaughter of Helios (the Sun); priestess of Hecate',
    domain: 'Magic, betrayal, vengeance, the outsider',
    keyDeeds: [
      'Helped Jason obtain the Golden Fleece through her sorcery — including putting the dragon to sleep',
      'Murdered her own brother Absyrtus to slow their pursuers as they fled Colchis',
      'Used her magic to restore Jason\'s father Aeson to youth, and to destroy the usurper Pelias',
      'When Jason abandoned her for a Corinthian princess, she sent the princess a poisoned robe that killed her and her father',
      'Killed her own two sons by Jason to deprive him of his legacy — the most shocking act in Greek tragedy',
    ],
    keyMyths: 'Euripides\' Medea (431 BCE) — the definitive version; Apollonius of Rhodes, Argonautica (her role in the Fleece)',
    significance: 'A profoundly complex figure: both villain and victim. She is a woman wronged, a foreigner (barbarian) in a Greek world that never fully accepted her, and a mother who commits the unthinkable. Euripides\' Medea is one of the most psychologically sophisticated works of ancient drama.',
    death: 'Escapes to Athens in a dragon-drawn chariot. In some versions she later marries Aegeus of Athens.',
  },
  {
    name: 'Clytemnestra',
    type: 'greek',
    epithet: 'The Avenging Queen',
    parentage: 'Daughter of Tyndareus and Leda; sister of Helen and the Dioscuri (Castor and Pollux)',
    domain: 'Revenge, betrayal, female power, justice vs. justice',
    keyDeeds: [
      'Married Agamemnon, king of Mycenae; ruled Argos with him before the Trojan War',
      'Agamemnon sacrificed their daughter Iphigenia to gain favorable winds for the fleet at Aulis — Clytemnestra never forgave him',
      'During Agamemnon\'s ten-year absence, took Aegisthus (Agamemnon\'s cousin) as her lover and co-ruler',
      'On Agamemnon\'s return, murdered him in the bath — an act of calculated, long-planned vengeance',
      'Ruled Argos with Aegisthus until killed by her own son Orestes',
    ],
    keyMyths: 'Aeschylus\' Oresteia (Agamemnon, Libation Bearers, Eumenides); Sophocles\' Electra; Euripides\' Electra',
    significance: 'One of Greek literature\'s most powerful and morally ambiguous figures. Her murder of Agamemnon is revenge for Iphigenia — a mother avenging her child. Yet she is also a usurper. Her murder by Orestes creates an impossible moral dilemma: Orestes must avenge his father, but to do so he must kill his mother. The Oresteia\'s resolution (trial by jury in Athens) represents the transition from blood vengeance to civic justice.',
    death: 'Killed by her son Orestes, who was commanded to avenge Agamemnon by the oracle at Delphi.',
  },
  {
    name: 'Penelope',
    type: 'greek',
    epithet: 'The Faithful Wife',
    parentage: 'Daughter of Icarius and a Naiad nymph; cousin of Helen; wife of Odysseus',
    domain: 'Fidelity, cunning, endurance, domestic heroism',
    keyDeeds: [
      'Waited twenty years for Odysseus — ten years of the Trojan War and ten years of his wandering',
      'Fended off over a hundred suitors who occupied her palace, consumed her resources, and pressured her to remarry',
      'Devised the famous stratagem of the loom: promised to choose a new husband when she finished weaving Laertes\' shroud, then unraveled her work each night',
      'Tested Odysseus with the riddle of the marriage bed (immovably rooted in an olive tree) before accepting his identity',
      'Her faithfulness and intelligence make her Odysseus\'s true equal — the female counterpart to his cunning',
    ],
    keyMyths: 'Homer\'s Odyssey (throughout); the suitors, the loom, the bow contest, the recognition scene',
    significance: 'Penelope represents a model of heroic female virtue within the domestic sphere. Her cunning rivals Odysseus\'s own — the stratagem of the loom is as clever as the Trojan Horse. She is not passive but actively resistant, using intelligence rather than force. Her endurance is itself a form of heroism.',
    death: 'Lives on after Odysseus\'s return. In some post-Homeric traditions, Odysseus later divorces her.',
  },
];

// ─── Module study notes ───────────────────────────────────────────────────────

export interface StudyNote {
  module: string;
  moduleCode: string;
  color: 'gold' | 'terra' | 'olive' | 'slate';
  overview: string;
  keyPoints: string[];
  examFocus: string[];
  connections: string[];
}

export const STUDY_NOTES: StudyNote[] = [
  {
    module: 'Interpretive Theories',
    moduleCode: '1b',
    color: 'slate',
    overview: 'Myths have no single correct interpretation — they serve different functions in different contexts. The course surveys six major critical approaches: etiology, allegory/symbolism, psychoanalysis, myth-and-society, structuralism, and feminist criticism.',
    keyPoints: [
      'Etiology (Greek aitia = cause): myths explain origins of rituals, phenomena, place names. Example: Homeric Hymn to Demeter → Eleusinian Mysteries',
      'Allegory/Symbolism: Max Müller (19th c.) — all myths = natural cosmological allegories (Apollo = sun). Now seen as too reductive.',
      'Psychoanalysis — Freud: myths = waking dreams fulfilling repressed desires. Oedipus complex named directly from Greek myth.',
      'Psychoanalysis — Jung: myths project the collective unconscious. Archetypes (Hero, Great Mother, Shadow, Trickster) recur universally.',
      'Myth & Society — Frazer: myth + ritual inseparable. Malinowski: you must live within a culture to understand its myths.',
      'Structuralism — Lévi-Strauss: myths mediate binary opposites (raw/cooked, mortal/immortal). These structures are universal.',
      'Walter Burkert: synthesis — grounds structuralism in historical/religious context. Most inclusive approach.',
      'Feminist approaches: expose patriarchal assumptions in myths like Pandora, Actaeon, Callisto.',
    ],
    examFocus: [
      'For each theory: name the key thinker, core claim, one Greco-Roman example, one strength, one weakness',
      'Know which theories over-generalize (Freud, Müller) vs. which respect cultural specificity (Malinowski, Burkert)',
      'Be able to apply two or three theories to one myth (e.g., apply Etiology, Psychoanalysis, and Structuralism to the Oedipus myth)',
    ],
    connections: [
      'Etiology connects to: Homeric Hymn to Demeter, Apollo at Delphi, Aphrodite\'s birth',
      'Freud\'s Oedipus complex connects directly to the Theban Saga',
      'Lévi-Strauss\'s binary opposites connect to: Hesiod\'s Theogony (male/female opposition throughout)',
      'Feminist approaches connect to: Pandora, Artemis/Actaeon, Callisto, Medea',
    ],
  },
  {
    module: 'Greek & Roman History',
    moduleCode: '1c',
    color: 'gold',
    overview: 'Greco-Roman mythology developed across many centuries and several distinct historical periods. The period and context in which a myth was recorded shapes its form and meaning.',
    keyPoints: [
      'Neolithic (~6500 BCE): agriculture begins; not yet Greek speakers',
      'Early/Middle Bronze Age (3000–1600 BCE): Greek speakers arrive; Sumerian and Akkadian civilizations far more advanced',
      'Late Bronze Age / Mycenaean (1600–1150 BCE): MOST IMPORTANT for mythology. Knossos discovered by Evans (1899). Roots of Trojan War myths here.',
      'Dark Age (1150–900 BCE): Mycenaean collapse; mastery of iron; alphabet develops; myths transmitted orally',
      'Archaic Period (750–500 BCE): MYTHS FIRST WRITTEN DOWN. Hesiod and Homer compose. Colonization and expansion.',
      'Classical Period (500–323 BCE): Three great tragedians — Aeschylus, Sophocles, Euripides. Myth retold in dramatic form.',
      'Hellenistic (323–30 BCE): After Alexander; Greek scholarship flourishes; multiple versions of myths circulate.',
      'Roman Empire (27 BCE–200 CE): Vergil (Aeneid), Ovid (Metamorphoses), Apuleius (Metamorphoses/Golden Ass)',
    ],
    examFocus: [
      'Know which period is associated with: first written myths (Archaic), first drama (Classical), Vergil and Ovid (Early Empire)',
      'Know Arthur Evans / Knossos / Minoan civilization → Mycenaean → Trojan War roots',
      'Understand that myth transmission went: oral → written → theatrical → literary',
    ],
    connections: [
      'Mycenaean period connects to: Troy/Iliad (historical basis), Linear B script, Knossos',
      'Archaic Period connects to: Hesiod, Homer, Homeric Hymns — our core mythological sources',
      'Classical Period connects to: the three tragedians, Oedipus Rex, Oresteia, Medea, Hippolytus, Bacchae',
    ],
  },
  {
    module: 'Hesiod — Origins of the Gods',
    moduleCode: '2a',
    color: 'gold',
    overview: 'Hesiod\'s Theogony is the most systematic early account of the origins of the universe and gods. It establishes the Olympian pantheon through two succession myths and traces the movement from primordial chaos to ordered cosmic rule under Zeus.',
    keyPoints: [
      'Chaos first — then Gaia (Earth), Tartaros, Eros (love), Erebos, Night',
      'Gaia produces Ouranos (sky); together they produce the Titans (including Kronos), Cyclopes, Hundred-Handers',
      'First Succession Myth: Kronos castrates Ouranos with a sickle. Aphrodite born from sea foam around genitals near Cyprus.',
      'Second Succession Myth: Zeus defeats Kronos and the Titans. Concealed in Crete; Rhea substitutes a stone.',
      'Zeus\'s children: Apollo + Artemis (by Leto), Hermes (by Maia), Persephone (by Demeter), Dionysus (by Semele), Athena (from his head after swallowing Metis)',
      'Hurrian parallel: Kumarbi castrates Anu → very close parallel. Shows Near Eastern influence on Greek tradition.',
      'Male/female binary throughout: movement from female-dominated origins (Gaia) to male-dominated order (Zeus)',
      'Zeus succeeds through cleverness + incorporating female wisdom (swallowing Metis)',
    ],
    examFocus: [
      'Be able to narrate both Succession Myths clearly',
      'Know the Hurrian parallel and what it suggests about cultural transmission',
      'Identify the structuralist reading: male/female binary throughout the Theogony',
    ],
    connections: [
      'Connects to: Creation of Humankind (2b), Zeus module (2c), Aphrodite (born from Theogony)',
      'Structuralism: raw/cooked analog here is male/female power — Lévi-Strauss directly applicable',
      'Connects to Roman: Saturn = Kronos; Jupiter = Zeus',
    ],
  },
  {
    module: 'Creation of Humankind',
    moduleCode: '2b',
    color: 'terra',
    overview: 'Hesiod\'s Works and Days provides two accounts of human origins: the Five Ages (moral decline from Gold to Iron) and the story of Prometheus and Pandora (explaining human suffering).',
    keyPoints: [
      'Five Ages: Golden (Kronos; idyllic) → Silver (Olympians; pleasant) → Bronze (warlike) → Age of Heroes (inserted by Hesiod; Trojan War) → Iron (Hesiod\'s own corrupt age)',
      'Ovid\'s version has only 4 ages — no Age of Heroes (Latin: aurea, argentea, aenea, ferrea)',
      'Prometheus: son of Titan Iapetos. Tricks Zeus at sacrifice (bones wrapped in fat vs. meat in stomach). Zeus withholds fire.',
      'Prometheus steals fire in a fennel stalk — symbol of technology and human advancement. Punished: chained to rock, eagle eats liver daily.',
      'Pandora: Zeus\'s revenge for the fire theft. Created by Hephaestus, adorned by Athena. Opens jar releasing all evils. Hope remains inside.',
      'The myth of Pandora is explicitly misogynistic in Hesiod — woman as punishment for Prometheus\'s transgression.',
      'Parallel to Genesis: Eve and Pandora both bring evil through curiosity; both are women at the origin of human suffering.',
    ],
    examFocus: [
      'Know the Five Ages in order and what each represents',
      'Be able to distinguish Hesiod\'s four races (5 ages) from Ovid\'s version (4 ages)',
      'The Prometheus myth = etiological: explains why humans eat meat and gods receive smoke; explains fire/technology',
      'Pandora\'s jar — what was in it, what remained, and what the ambiguity of Hope might mean',
    ],
    connections: [
      'Prometheus connects to: Aeschylus\' Prometheus Bound; Heracles (freed Prometheus from chains)',
      'Pandora connects to: misogyny in ancient myth (feminist approaches); parallel to Eve',
      'Five Ages connects to: the Age of Heroes = Trojan War mythology',
    ],
  },
  {
    module: 'Zeus',
    moduleCode: '2c',
    color: 'gold',
    overview: 'Zeus is the sky/storm god, king of the Olympians, and god of justice, victory, and prophecy. He is characterized by power, cunning, and sexual dominance. The Iliad shows him as the supreme but not omnipotent ruler who must respect fate.',
    keyPoints: [
      'Sky god (etymology: Zeus/Jupiter/Dyaus Pitr = "sky father" — Indo-European root)',
      'Epithets: "cloud-gatherer," "dark-clouded," "thunderbolt-hurler," "aegis-bearing"',
      'God of justice: connected to Themis (personification of justice = his 2nd wife) and Dike (daughter)',
      'God of prophecy: Oracle at Dodona (Epirus) — oldest Greek oracle, prophesied through holy oak tree and doves',
      'God of victory: Zeus Eleutherios established after Battle of Plataea (479 BCE)',
      'Sexual power: said to have slept with 115 women. Key affairs: Danae (golden shower → Perseus), Europa (bull → Minos, Crete), Io (white heifer to hide from Hera), Ganymede (cup-bearer on Olympus), Leda (swan → Helen + Clytemnestra), Semele (full divine form → Dionysus)',
      'In the Iliad: holds golden scales to weigh fate; never appears on stage in Greek tragedy — always in the background',
      'Limitation: even Zeus must bow to Fate (Moira). When his son Sarpedon must die, Zeus grieves but complies.',
    ],
    examFocus: [
      'Know the major myths connected to Zeus\'s affairs and what children result',
      'Zeus + Dodona oracle + connection to prophecy',
      'Zeus as impartial dispenser of justice — the scales scene in Iliad Book 22',
    ],
    connections: [
      'Zeus\'s children: Apollo, Artemis, Hermes, Athena, Dionysus, Persephone, Perseus, Heracles, Minos',
      'Connects to structuralism: the Theogony\'s male/female binary resolved in Zeus',
      'Roman equivalent Jupiter — nearly identical in function',
    ],
  },
  {
    module: 'Apollo — Delphi and Delos',
    moduleCode: '3a',
    color: 'terra',
    overview: 'Apollo is connected to youth, music, poetry, archery, healing, prophecy, and purification. His two major cult centres — Delos (birthplace) and Delphi (oracle) — define his mythological presence.',
    keyPoints: [
      'Born on the island of Delos — Leto was rejected everywhere due to Hera\'s jealousy; Delos swore an oath to be his first shrine',
      'Apollo kills the serpent Python at what will become Delphi — founding the Pythian oracle. "Pytho" = "to rot" (the serpent\'s carcass)',
      'The Pythia: Apollo\'s prophetess at Delphi, appointed for life, expected to remain a virgin. Made pronouncements on the 7th day of each month.',
      'Delphi was the most important panhellenic oracle — consulted by individuals and city-states. Economy of Delphi depended on oracle traffic.',
      'The Homeric Hymn to Apollo has two parts: Delos section (birth) + Delphi section (founding). Each narrates the aiton (cause) of one cult.',
      'Apollo takes Cretan priests by disguising himself as a dolphin — one explanation for the name "Delphi"',
      'Always depicted as young, beardless, athletic — the ideal of Greek masculine beauty',
      'Associated with the Muses (on Mt. Helicon); also called "lord of the silver bow" — his arrows bring plague and sudden death to men',
    ],
    examFocus: [
      'Etiology: both the Delos and Delphi narratives are etiological myths explaining actual cult foundations',
      'The Pythia — who she was, her role, how the oracle functioned',
      'Know Apollo\'s connections: sun (but not primarily sun god), music, prophecy, healing, purification, punishment',
    ],
    connections: [
      'Cassandra (Troy): Apollo gave her prophecy but cursed her not to be believed when she rejected him',
      'Orestes: Delphi commanded him to kill Clytemnestra — Apollo ordered the most terrible act in the Oresteia',
      'Asclepius: Apollo\'s son, god of medicine — born from the corpse of Coronis',
    ],
  },
  {
    module: 'Underworld & Afterlife',
    moduleCode: 'Underworld',
    color: 'slate',
    overview: 'Three major ancient accounts of the afterlife — Homer\'s Odyssey (neutral persistence), Vergil\'s Aeneid (moral differentiation with Roman teleology), and Plato\'s Myth of Er (philosophical reincarnation with cosmic justice) — reveal a progression from amoral to morally systematic underworlds.',
    keyPoints: [
      'HOMER (Odyssey Book 11): Pale, purposeless shades; no moral judgment for most dead. Only a few sinners punished (Tantalus, Sisyphus, Tityos) — all for crimes against the gods. Achilles says he would rather be a serf among the living than king among the dead.',
      'VERGIL (Aeneid Book 6): Systematic moral geography: Tartarus (punishment) / Elysium (reward) / plain of Lethe (awaiting rebirth). Aeneas must obtain the golden bough. Sibyl of Cumae guides him. Anchises reveals future Roman heroes — political vision.',
      'PLATO (Republic Book 10 — Myth of Er): Soldiers returns from death. Souls judged; punished or rewarded for 10× their earthly deeds (1000 years). Then choose next lives. First soul chose tyrant through greed. Odysseus chose modest private life. Explicitly philosophical: argues for just life.',
      'Key Underworld figures: Charon (ferryman, requires coin payment), Cerberus (three-headed guard dog), Hades/Pluto (impartial ruler), Persephone (queen), Minos/Rhadamanthus/Aeacus (judges in Vergil/Plato)',
      'Famous punishments: Tantalus (food/water out of reach; OR Pindar: rock over head), Sisyphus (boulder), Tityos (vulture eats liver), Ixion (spinning wheel)',
      'Orpheus charms Cerberus and moves Hades/Persephone with music — the supreme exception to underworld rules',
    ],
    examFocus: [
      'Compare and contrast the three underworld accounts — this is a prime long-answer question',
      'Know all the famous sinners and their crimes/punishments',
      'The political function of Vergil\'s underworld — the parade of Roman heroes',
      'Plato\'s Myth of Er: what the first soul chose; what Odysseus chose; what it argues philosophically',
    ],
    connections: [
      'Orpheus connects to the underworld directly — his power overrides Hades\' rules',
      'Psyche\'s fourth task = fetching Persephone\'s beauty box from the underworld (Apuleius)',
      'Heracles\'s twelfth labor = capture of Cerberus',
      'Aeneas\'s underworld visit = central to the Aeneid\'s political meaning',
    ],
  },
  {
    module: 'Mystery Religions & Isis',
    moduleCode: 'Mystery',
    color: 'terra',
    overview: 'The Eleusinian Mysteries and the cult of Isis represent two major religious movements in the Greco-Roman world that promised initiates special knowledge of and protection in the afterlife. Both are deeply connected to major mythological texts.',
    keyPoints: [
      'ELEUSINIAN MYSTERIES: Held at Eleusis (northwest of Athens) in honor of Demeter and Persephone. Most prestigious mystery cult of the ancient world. Initiates believed to receive a better afterlife.',
      'The Homeric Hymn to Demeter is the etiological myth of the Eleusinian Mysteries — Demeter\'s search for Persephone and her stay at Eleusis provides the narrative foundation for the cult.',
      'The content of the Mysteries was kept secret (on pain of death). We know general outlines but not the specific rites.',
      'Persephone\'s time in the underworld (and Demeter\'s grief causing agricultural failure) = the seasonal cycle explained.',
      'ISIS (Egyptian origin, spread throughout Roman world): Apuleius\' Golden Ass is the key text. Isis\'s famous speech: "I am the mother of all things in nature, the mistress of all the elements, the firstborn of the ages..."',
      'Isis was a syncretic goddess — she incorporated the divine feminine across all cultures. She was identified with Demeter, Aphrodite, Hera, Selene, and others.',
      'Lucius (the protagonist of the Golden Ass) is restored from donkey form by Isis — his initiation into the cult is the climax of the novel.',
    ],
    examFocus: [
      'Etiology: Homeric Hymn to Demeter → explains both the seasons AND the founding of the Mysteries',
      'Apuleius\'s Isis speech: who says it, to whom, what it claims, what it represents for late antique religion',
      'The cultural spread of Isis = example of religious syncretism (the blending of multiple religious traditions)',
    ],
    connections: [
      'Demeter/Persephone → Eleusinian Mysteries → etiological myth',
      'Isis connects to: syncretism, mystery religion, the late Roman Empire\'s religious landscape',
      'Apuleius\'s Metamorphoses = key source for both Cupid & Psyche AND Isis',
    ],
  },
];

// ─── Extra long answer questions ──────────────────────────────────────────────

export const EXTRA_LONG_ANSWERS = [
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Discuss the Eleusinian Mysteries and their connection to the myth of Demeter and Persephone as told in the Homeric Hymn to Demeter. What does the myth explain etiologically, and what does it tell us about ancient Greek attitudes toward death and the afterlife?',
    answer: `The Homeric Hymn to Demeter (7th century BCE) is the foundational etiological myth of the Eleusinian Mysteries — the most prestigious mystery cult of the ancient Greek world, centered at Eleusis northwest of Athens. The hymn narrates Persephone's abduction by Hades while gathering flowers in a meadow, Demeter's grief-stricken nine-day search, her stay in disguise at Eleusis as a nurse for the king's family, her withdrawal from Olympus and refusal to let crops grow (nearly starving humanity), and Zeus's eventual compromise: Persephone will spend part of the year with Hades in the underworld and part with her mother on earth.

The myth is etiological on multiple levels simultaneously. It explains the seasons — Demeter's joy at Persephone's return = spring growth; her grief at the annual departure = autumn and winter. It explains why the Eleusinian cult exists — Demeter commands the Eleusinians to build her a temple and institute rites in her honor before she will allow crops to grow again. And the hymn implies (without stating explicitly) that initiation into the Mysteries connected worshippers to the cycle of death and rebirth that Persephone herself enacts every year.

Ancient Greek attitudes toward death, as we have seen throughout the Odyssey and other sources, were generally grim — the underworld was a place of colorless persistence, not reward. The Eleusinian Mysteries seem to have offered initiates a more hopeful prospect: a privileged relationship with Persephone as queen of the dead, implying a better fate after death. The precise rituals were a closely guarded secret, but the central promise appears to have been that those who went through the initiation would experience something transformative about death — they would not face it as the uninitiated did. This connects the Demeter/Persephone myth directly to ancient hopes for a meaningful afterlife.`,
  },
  {
    category: 'heroes',
    categoryLabel: 'Heroes',
    question: 'Discuss the figure of Medea in Euripides\' play. Is she a villain or a victim? How does the play explore the position of women and foreigners in Greek society?',
    answer: `Euripides\' Medea (431 BCE) presents one of the most morally complex figures in ancient drama — a woman who, by the end of the play, kills her own children to punish her unfaithful husband. Whether she is a villain or a victim depends entirely on the perspective one brings, and Euripides deliberately refuses to resolve the question.

The case for Medea as victim is powerful. She is doubly marginalized: a woman in a patriarchal society that denies women legal agency, and a foreigner (from Colchis on the Black Sea — barbarian, in Greek eyes) in a Greek world that never fully accepted her. She gave up everything for Jason: betrayed her father, murdered her own brother, used her sorcery repeatedly in his service. When Jason abandons her for a Corinthian princess — citing practical considerations rather than moral ones — he strips away her identity, her status, and her only protection in a foreign land. In the Greek world, a divorced foreign woman had no legal standing, no family to return to, and no recourse.

Yet the murders of the princess, the king, and most devastatingly her own children transform her into something that exceeds the role of victim. Euripides makes clear that she acts in full knowledge and deliberate will — there is no madness here, no divine compulsion. Her final escape in a dragon-drawn chariot, beyond the reach of the justice she has violated so profoundly, is deliberately shocking. The play refuses catharsis in the Aristotelian sense: we cannot simply weep for a tragic hero brought low by fate. We are implicated, disturbed, forced to confront the violence that emerges when the social structures that oppress people break down entirely. Medea's tragedy is also a social critique of a world that gave women and foreigners no legitimate recourse.`,
  },
  {
    category: 'theory',
    categoryLabel: 'Theory',
    question: 'What is an etiological myth? Give three specific examples from Greco-Roman mythology and explain what each myth explains. Then discuss the strengths and limitations of etiological interpretation as a general approach to mythology.',
    answer: `An etiological myth (from the Greek aitia, "cause" or "reason") is a myth that explains the origin of something — a religious ritual, a natural phenomenon, a place name, a social custom, or the existence of a particular creature or plant. Etiological interpretation was one of the earliest and most common ways ancient and modern readers approached mythology.

The first example is the Homeric Hymn to Demeter, which provides the etiological explanation for both the seasons and the Eleusinian Mysteries simultaneously. The story of Persephone's abduction and Demeter's grief explains why crops fail in winter (Demeter withdraws in sorrow) and grow in spring (she rejoices at Persephone's return). At the same time, Demeter's sojourn at Eleusis and her command that the Eleusinians build her a temple explains why the Mysteries existed at Eleusis specifically.

The second example is Apollo's founding of the oracle at Delphi as told in the second half of the Homeric Hymn to Apollo. Apollo kills the great serpent Python (or Pytho) at what will become the oracle site, establishing his shrine there. The name "Pytho" derives from the Greek verb pythein ("to rot") — explaining the name of the oracle, its location, and the title of Apollo's prophetess (the Pythia). The myth also explains why games were held at Delphi to commemorate the killing.

The third example is the myth of Arachne in Ovid's Metamorphoses. Arachne, a mortal weaver, challenges Athena to a weaving contest and wins, but is punished by the goddess — Arachne hangs herself and is transformed into a spider. This story etiologically explains both why spiders weave webs and why Athena (patron goddess of weaving) is associated with the punishment of presumptuous craft.

The etiological approach has real strengths: it grounds myths in historically real religious practices and institutions, illuminating why specific cults and rituals existed. It also explains why myths survive — they were not decorative fictions but functional narratives serving social and religious purposes. However, its weaknesses are significant: many myths have no clear etiological function whatsoever (Orpheus and Eurydice, for instance, does not explain any ritual or natural phenomenon); and treating all myths as primarily explanatory risks reducing rich, multivalent narratives to a single instrumental purpose. Most complex myths reward multiple interpretive approaches simultaneously.`,
  },
  {
    category: 'troy',
    categoryLabel: 'Trojan War',
    question: 'Analyze the character of Achilles in the Iliad. How does his wrath function as the poem\'s central theme? What does his character reveal about the heroic code and its costs?',
    answer: `The Iliad opens with a single word: menis — wrath, rage, or perhaps better "divine wrath," since menis is a word typically reserved for the anger of gods. This is Achilles' defining attribute and the poem's central subject: "Rage — Goddess, sing the rage of Peleus' son Achilles." In making wrath the first word of Western literature's first epic, Homer signals that this poem is not primarily a war story but a study of a man consuming himself and those around him with the consequences of injured pride.

Achilles embodies the heroic code at its most extreme and most costly. His entire identity is organized around timê (honor/worth in the eyes of the community) and kleos (glory — the imperishable fame won through great deeds). He has chosen, explicitly and knowingly, a short glorious life over a long obscure one. When Agamemnon takes his captive Briseis as compensation for surrendering his own captive at Apollo's command, he does not merely take a concubine — he publicly insults Achilles' timê before the whole Greek army. To Achilles' value system, this is a catastrophic injury demanding total response: he withdraws from battle, which allows the Trojans to drive the Greeks back, cost the Greeks thousands of lives, and ultimately leads to the death of Patroclus.

The Patroclus episode is the emotional and moral center of the poem. When his closest companion (and possible lover) dies wearing his armor, Achilles' grief overrides his anger at Agamemnon — he returns to battle for a different reason, no longer for honor but for vengeance. His killing of Hector and desecration of his body represents heroism at its most terrible: inhuman, magnificent, pitiless. Yet the poem insists on complicating this portrait. In the final book, when the aged king Priam crawls to Achilles' tent and begs for his son's body, Achilles weeps — not for Hector, but for his own father, who will also one day mourn a dead son. In this moment of shared grief across enemy lines, the heroic code momentarily yields to common humanity. The poem does not resolve this tension: the heroic code produces greatness and atrocity simultaneously, and Achilles is great precisely because he is also monstrous.`,
  },
];

// ─── Myth connections map data ─────────────────────────────────────────────────

export interface MythConnection {
  myth: string;
  connects: { to: string; reason: string }[];
  category: string;
}

export const MYTH_CONNECTIONS: MythConnection[] = [
  {
    myth: 'Judgment of Paris',
    category: 'Troy',
    connects: [
      { to: 'Trojan War', reason: 'Direct cause — Paris chose Aphrodite, received Helen, triggered the war' },
      { to: 'Iliad', reason: 'Referred to throughout; explains why Hera and Athena support Greeks' },
      { to: 'Aphrodite', reason: 'Her bribe (Helen) won the contest; she then protects Paris throughout the war' },
      { to: 'Hera & Athena', reason: 'Both lost; both became bitter enemies of Troy because of this judgment' },
    ],
  },
  {
    myth: 'Oedipus Rex',
    category: 'Thebes',
    connects: [
      { to: 'Freud — Oedipus complex', reason: 'Freud named his theory directly from this myth' },
      { to: 'Delphic Oracle', reason: 'The oracle\'s prophecy drives the entire plot' },
      { to: 'Fate vs. free will', reason: 'Central theme — everything Oedipus does to escape fate fulfills it' },
      { to: 'Sphinx\'s riddle', reason: 'His answer (Man) earns him the throne and ironically his doom' },
    ],
  },
  {
    myth: 'Homeric Hymn to Demeter',
    category: 'Gods',
    connects: [
      { to: 'Eleusinian Mysteries', reason: 'Etiological myth — directly explains why the cult at Eleusis exists' },
      { to: 'Seasons', reason: 'Persephone\'s annual descent/return = cause of winter and spring' },
      { to: 'Etiology (theory)', reason: 'Prime example of an etiological myth in the course' },
      { to: 'Pluto/Hades', reason: 'His abduction of Persephone is the inciting event' },
    ],
  },
  {
    myth: 'Orpheus & Eurydice',
    category: 'Heroes',
    connects: [
      { to: 'Apollo', reason: 'Orpheus is often said to be Apollo\'s son; his music = Apollo\'s domain' },
      { to: 'Dionysus', reason: 'The Maenads who kill him are Dionysus\'s followers' },
      { to: 'Underworld', reason: 'His descent and partial success is the supreme exception to underworld rules' },
      { to: 'Power of art', reason: 'His music moves Hades — art\'s ultimate power and ultimate limits' },
    ],
  },
  {
    myth: 'Cupid & Psyche',
    category: 'Gods',
    connects: [
      { to: 'Apuleius', reason: 'The definitive version is in Apuleius\'s Metamorphoses (The Golden Ass)' },
      { to: 'Venus/Aphrodite', reason: 'Venus is the antagonist — her jealousy drives the plot' },
      { to: 'Underworld', reason: 'Psyche\'s fourth task requires descending to fetch Persephone\'s beauty box' },
      { to: 'Allegory', reason: 'Psyche = "soul" in Greek — story often read as soul\'s journey to divine love' },
    ],
  },
  {
    myth: 'Aeneid Book 6 (Underworld)',
    category: 'Underworld',
    connects: [
      { to: 'Odyssey Book 11', reason: 'Vergil models Aeneas\'s underworld visit on Odysseus\'s katabasis' },
      { to: 'Roman founding myth', reason: 'The parade of future Roman heroes = Vergil\'s political purpose' },
      { to: 'Sibyl of Cumae', reason: 'She is Aeneas\'s guide — parallel to Circe guiding Odysseus' },
      { to: 'Plato\'s Myth of Er', reason: 'The plain of Lethe and souls awaiting rebirth = Platonic influence on Vergil' },
    ],
  },
];

// ─── Extra quiz questions bank (30 more, total ~80) ───────────────────────────

export const QUIZ_BANK_2: QuizQuestion[] = [
  {
    id: 51, category: 'Gods',
    question: 'Which goddess is described in the Homeric Hymns as having power over everything EXCEPT Athena, Artemis, and Hestia?',
    options: ['Hera', 'Demeter', 'Aphrodite', 'Persephone'],
    correct: 2,
    explanation: 'Aphrodite\'s power to inspire love and desire is universal — she conquers gods, humans, and animals — with only these three virgin goddesses as exceptions, as stated at the opening of the Homeric Hymn to Aphrodite.',
  },
  {
    id: 52, category: 'Gods',
    question: 'What is the name of the priestess who makes oracular pronouncements at Delphi?',
    options: ['The Sibyl', 'The Pythia', 'The Oracle', 'The Cassandra'],
    correct: 1,
    explanation: 'The Pythia is Apollo\'s prophetess at Delphi. She is appointed for life, expected to remain a virgin, and makes pronouncements on the 7th day of each month — the day sacred to Apollo.',
  },
  {
    id: 53, category: 'Gods',
    question: 'Dionysus is described as "twice-born." What does this mean?',
    options: [
      'He died and was resurrected, like Persephone',
      'His mother Semele died; Zeus saved the unborn child by sewing him into his own thigh until birth',
      'He was born first to Hera, then adopted by Zeus',
      'He was born mortal and later deified',
    ],
    correct: 1,
    explanation: 'When the pregnant Semele was incinerated by Zeus\'s divine glory (tricked into requesting it by Hera), Zeus saved the unborn Dionysus by sewing him into his thigh. He was literally born twice — first emerging from the womb when Semele died, then born again from Zeus\'s thigh.',
  },
  {
    id: 54, category: 'Gods',
    question: 'The Homeric Hymn to Demeter is primarily an etiological myth. What does it explain?',
    options: [
      'Why Hades rules the underworld',
      'Both the seasons and the founding of the Eleusinian Mysteries',
      'The origin of the first crops in Greece',
      'Why death exists at all',
    ],
    correct: 1,
    explanation: 'The Homeric Hymn to Demeter explains two things simultaneously: the origin of the seasons (Demeter\'s grief = winter; her joy at Persephone\'s return = spring/harvest), and the founding of the Eleusinian Mysteries at Eleusis, where Demeter demands a temple and cult in exchange for restoring fertility to the earth.',
  },
  {
    id: 55, category: 'Myths',
    question: 'In Hesiod\'s account, why does Zeus originally withhold fire from humanity?',
    options: [
      'He fears humans will become too powerful',
      'Fire belongs only to the gods as a sacred gift',
      'Prometheus tricked him at a sacrifice, giving gods bones and fat while humans received the meat',
      'Hera convinced him fire would corrupt human nature',
    ],
    correct: 2,
    explanation: 'At a sacrifice, Prometheus divided the ox and tricked Zeus into choosing the portion wrapped in attractive white fat — which contained only bones. Humans received the actual meat. Furious at being tricked, Zeus withheld fire as punishment. Prometheus then stole it hidden in a fennel stalk.',
  },
  {
    id: 56, category: 'Myths',
    question: 'What is the significance of the necklace of Harmonia in the Theban saga?',
    options: [
      'It was a wedding gift from Zeus that granted immortality',
      'It was a cursed gift that caused disaster to everyone who wore or possessed it',
      'It was stolen by Polynices to fund his army',
      'It was the object the Sphinx demanded in exchange for the right to pass',
    ],
    correct: 1,
    explanation: 'Harmonia\'s necklace (made by Hephaestus as a wedding gift when she married Cadmus) was cursed and brought disaster to every subsequent owner. Most famously, Eriphyle was bribed with it to convince her husband Amphiaraus to join the Seven Against Thebes — knowing he would die there.',
  },
  {
    id: 57, category: 'Myths',
    question: 'How does Amphiaraus die after fleeing the battle for Thebes?',
    options: [
      'He is struck by the lightning bolt of Zeus',
      'He is gored by a boar sent by Ares',
      'He is swallowed up by the earth',
      'He is drowned in the river Ismenus',
    ],
    correct: 2,
    explanation: 'Amphiaraus flees the failed battle for Thebes in his chariot. Zeus, to save his prophet from dying at enemy hands, opens the earth and swallows him up — chariot and all. He descends into the earth and becomes an oracular hero, consulted through an underground oracle.',
  },
  {
    id: 58, category: 'Myths',
    question: 'What distinguishes Perseus\'s heroism from Heracles\'s heroism?',
    options: [
      'Perseus fights alone without divine assistance, while Heracles has divine help',
      'Perseus relies on clever strategy and divine gifts rather than raw physical strength',
      'Perseus fights monsters purely for glory, while Heracles performs labors as penance',
      'Perseus is mortal-born, while Heracles has divine blood',
    ],
    correct: 1,
    explanation: 'Perseus defeats Medusa through strategy and divine equipment (mirrored shield from Athena, winged sandals and cap of invisibility from Hermes/the Nymphs) — he never directly looks at her. This contrasts with Heracles\'s primarily physical heroism. Both, however, have divine parentage (Zeus is father of both).',
  },
  {
    id: 59, category: 'Myths',
    question: 'What is the primary moral lesson of Plato\'s Myth of Er?',
    options: [
      'The gods are unjust and humans must accept suffering',
      'Death is nothing to fear because the soul is immortal',
      'One should live justly because death brings moral accountability proportionate to one\'s earthly deeds',
      'Heroes receive eternal reward, while ordinary people persist in grey indifference',
    ],
    correct: 2,
    explanation: 'The Myth of Er is explicitly philosophical — Plato uses it to argue that one should live justly because the afterlife brings precise moral accountability (10× punishment or reward for deeds done in life). The man who chose the tyrant\'s life without wisdom suffered for his greed. Odysseus, with wisdom from past experience, chose a humble private life.',
  },
  {
    id: 60, category: 'Myths',
    question: 'In the myth of Cupid and Psyche, what are Psyche\'s four impossible tasks set by Venus?',
    options: [
      'Sort grains; fetch golden fleece; fetch water from the Styx; bring back beauty from Persephone',
      'Kill the Minotaur; weave a robe; cross the Styx; steal the apple of immortality',
      'Find the golden bough; calm Cerberus; sort stones; steal Hades\' crown',
      'Fetch nectar; catch the eagle of Zeus; bring back fire; defeat the Sphinx',
    ],
    correct: 0,
    explanation: 'Venus forces Psyche to: (1) sort a huge pile of mixed grains overnight (ants help), (2) gather golden fleece from dangerous sheep (a reed advises patience), (3) fetch water from the source of the Styx (Jupiter\'s eagle helps), and (4) bring a box of Persephone\'s beauty from the underworld (a tower gives instructions).',
  },
  {
    id: 61, category: 'Underworld',
    question: 'What happens to Sisyphus in the underworld, and what was his crime?',
    options: [
      'He is chained while a vulture eats his liver; he tried to rape Hera',
      'He stands in water under fruit; he served his son as food to the gods',
      'He rolls a boulder uphill forever; he cheated death twice by tricking Thanatos and Persephone',
      'He is pinned to a spinning wheel; he abducted Persephone',
    ],
    correct: 2,
    explanation: 'Sisyphus perpetually rolls a boulder up a hill, only to watch it roll back down. His crime was cheating death twice: first by chaining up Thanatos (Death personified) so no one could die, then by tricking Persephone into releasing him from the underworld so he could return to life.',
  },
  {
    id: 62, category: 'Underworld',
    question: 'In Vergil\'s Aeneid, who guides Aeneas through the underworld?',
    options: ['Hermes', 'Anchises', 'The Sibyl of Cumae', 'Charon'],
    correct: 2,
    explanation: 'The Sibyl of Cumae — Apollo\'s prophetess at Cumae in Italy — guides Aeneas through the underworld. She is the one who tells him he must first find the golden bough. This parallels Circe guiding Odysseus in the Odyssey.',
  },
  {
    id: 63, category: 'Underworld',
    question: 'What does Achilles say about death when Odysseus encounters him in the underworld (Odyssey Book 11)?',
    options: [
      'He is content, dwelling in Elysium with the greatest heroes',
      'He would rather be a living serf than king of all the dead',
      'He regrets choosing a short glorious life over a long obscure one',
      'He is glad he died young, before age robbed him of his strength',
    ],
    correct: 1,
    explanation: 'Achilles tells Odysseus he would rather be the most humble living person — a serf working for a poor man — than king among all the dead. This is devastating: the hero who chose kleos (glory) over a long life now sees death\'s reality clearly, with no illusions. Homer\'s underworld has no comfort for anyone.',
  },
  {
    id: 64, category: 'Theory',
    question: 'What is the key difference between Freud\'s and Jung\'s approaches to mythological interpretation?',
    options: [
      'Freud focused on Greek myth only; Jung applied his theory universally',
      'Freud connected myth to individual repressed sexuality; Jung connected it to the collective unconscious and universal archetypes',
      'Freud saw myth as purely historical; Jung saw it as purely fictional',
      'Freud emphasized ritual origins; Jung emphasized structural opposites',
    ],
    correct: 1,
    explanation: 'Freud\'s approach centers on individual unconscious sexuality — myths as expressions of repressed desires (the Oedipus complex). Jung extended this to the collective unconscious (shared across all humanity) and archetypes (recurring mythic patterns like the Hero, the Great Mother, the Shadow) that appear universally across cultures.',
  },
  {
    id: 65, category: 'Theory',
    question: 'What does Bronisław Malinowski argue about the proper way to study myth?',
    options: [
      'Myths can only be understood by finding their earliest written version',
      'You must live within a culture to understand its myths — they reflect specific social customs and beliefs',
      'All myths share the same underlying structure of binary opposites',
      'Myths are primarily psychological expressions of repressed desires',
    ],
    correct: 1,
    explanation: 'Malinowski (Polish anthropologist) argued against the over-generalizing approaches of Freud and Müller, insisting that myths must be understood within their living cultural context. They are functional stories reflecting specific social customs and beliefs — not universal allegories that can be decoded from the outside.',
  },
  {
    id: 66, category: 'Authors',
    question: 'What is distinctive about Euripides\' tragedy Helen (412 BCE) compared to the standard tradition?',
    options: [
      'Helen is portrayed as actively helping the Trojans against Greece',
      'A phantom went to Troy while the real Helen remained in Egypt, faithful to Menelaus',
      'Helen kills Paris herself to end the war',
      'The Trojan War is revealed to have been caused by Hera, not Aphrodite',
    ],
    correct: 1,
    explanation: 'Euripides\' Helen presents a radically revisionist version: Hermes transported the real Helen to Egypt at Hera\'s instigation, while a phantom double went to Troy with Paris. The entire Trojan War — ten years, thousands of deaths — was fought over an illusion. This profoundly anti-war work questions whether any of the heroism was meaningful.',
  },
  {
    id: 67, category: 'Authors',
    question: 'Aeschylus, Sophocles, and Euripides are the three great Greek tragedians. Which play by Aeschylus deals with the aftermath of the Trojan War and the problem of inherited guilt?',
    options: ['Seven Against Thebes', 'The Persians', 'The Oresteia', 'Prometheus Bound'],
    correct: 2,
    explanation: 'The Oresteia is Aeschylus\'s trilogy (458 BCE): Agamemnon (return and murder of Agamemnon by Clytemnestra), The Libation Bearers (Orestes kills his mother), and The Eumenides (Orestes tried in Athens, acquitted — transitioning from blood vengeance to civic justice).',
  },
  {
    id: 68, category: 'Authors',
    question: 'What is dactylic hexameter and why is it significant?',
    options: [
      'A 5-beat rhythmic line used in Greek tragedy and comedy',
      'The 6-foot metrical form of Greek and Latin epic — "heroic meter" — used by Homer, Hesiod, and Vergil',
      'A 4-beat line used in Pindar\'s choral odes',
      'A prose rhythm used in philosophical dialogues like Plato\'s Republic',
    ],
    correct: 1,
    explanation: 'Dactylic hexameter (six feet, each a dactyl = one long + two short syllables, or substituted spondees) is the standard meter of ancient epic poetry — used in Homer\'s Iliad and Odyssey, Hesiod\'s Theogony and Works and Days, and Vergil\'s Aeneid. It is also called "heroic meter."',
  },
  {
    id: 69, category: 'Thebes',
    question: 'What is the central moral conflict in Sophocles\' Antigone?',
    options: [
      'Whether Antigone should trust the Delphic oracle or her own judgment',
      'Whether it is right to disobey the gods\' commands for the sake of family',
      'Divine law (the obligation to bury the dead) vs. human law (Creon\'s decree that Polynices remain unburied)',
      'Whether revenge for a father\'s death can ever be justified',
    ],
    correct: 2,
    explanation: 'Antigone\'s central conflict pits divine/natural law (the gods demand the dead be buried — to deny burial is to deny humanity) against human/political law (Creon decrees that the traitor Polynices be left to rot as a political example). Antigone defies Creon\'s decree; he condemns her. Both have valid principles; both are destroyed.',
  },
  {
    id: 70, category: 'Thebes',
    question: 'Tantalus is the ancestor of several major mythological figures. Which of the following is his direct lineage?',
    options: [
      'Tantalus → Niobe → Amphion → Oedipus',
      'Tantalus → Pelops → Atreus and Thyestes → Agamemnon and Aegisthus',
      'Tantalus → Cadmus → Laius → Oedipus',
      'Tantalus → Minos → Theseus → Hippolytus',
    ],
    correct: 1,
    explanation: 'Tantalus → Pelops (who won Hippodamia through the chariot race) → Atreus and Thyestes (the cursed brothers) → Agamemnon (from Atreus) and Aegisthus (from Thyestes). This genealogy explains why Aegisthus and Agamemnon are cousins, and why the House of Atreus is cursed through the generations.',
  },
  {
    id: 71, category: 'Gods',
    question: 'In which of Zeus\'s famous transformations does he abduct the youth Ganymede to Olympus?',
    options: ['As a swan', 'As a golden shower', 'As an eagle', 'As a bull'],
    correct: 2,
    explanation: 'Zeus transforms into an eagle to carry off the Trojan youth Ganymede, whom he makes cup-bearer to the gods on Olympus. This myth is significant as an example of divine-mortal homosexual relationships in Greek mythology, and also as the abduction of a Trojan prince that prefigures the Trojan War\'s cosmic significance.',
  },
  {
    id: 72, category: 'Myths',
    question: 'The myth of Narcissus explains both the origin of a flower and illustrates which broader theme?',
    options: [
      'The danger of loving someone too much',
      'The punishment for hubris in refusing the love of a god',
      'The self-destructive nature of excessive self-love and the impossibility of loving an image',
      'The cruelty of the gods in punishing innocent mortals',
    ],
    correct: 2,
    explanation: 'Narcissus (from Ovid\'s Metamorphoses Book 3) falls in love with his own reflection in a pool, unable to embrace what he loves because it disappears when he reaches for it. He wastes away; his body becomes the narcissus flower. The myth explores the impossibility of self-sufficiency and the destructiveness of self-absorption.',
  },
  {
    id: 73, category: 'Gods',
    question: 'What is the significance of the Homeric Hymns as a literary form?',
    options: [
      'They are prayers sung before athletic contests at the Olympics',
      'They are hymns of praise that include mythological narratives about gods\' births and key events, used as preludes to longer performances',
      'They are lamentations composed after the deaths of heroes',
      'They are ritual texts from the Eleusinian Mysteries, forbidden to the uninitiated',
    ],
    correct: 1,
    explanation: 'The 33 Homeric Hymns are hymns in Homeric dialect and dactylic hexameter — not all by the same author despite the name. The longer hymns (to Apollo, Aphrodite, Demeter, Hermes) contain extended mythological narratives about the deity\'s birth and significant events. They functioned as preludes (prooimia) to longer epic recitations at festivals.',
  },
  {
    id: 74, category: 'Troy',
    question: 'What is xenia and why is its violation central to the cause of the Trojan War?',
    options: [
      'The Greek concept of justice; Paris violated it by abducting a goddess',
      'Guest-friendship — the sacred obligation of hospitality; Paris violated it by abducting his host\'s wife',
      'Military alliance; Paris violated it by attacking a Greek ally without cause',
      'Religious purity; Paris violated it by entering the temple of Hera',
    ],
    correct: 1,
    explanation: 'Xenia (guest-friendship) is the sacred Greek principle obligating hosts to protect their guests and guests to honor their hosts. Paris was a guest of Menelaus in Sparta when he abducted (or eloped with) Helen. This violation of xenia provides the ethical justification for the entire Greek military campaign — Agamemnon frames the war as a defense of xenia.',
  },
  {
    id: 75, category: 'Troy',
    question: 'What role does Cassandra play in the Trojan War tradition?',
    options: [
      'She is Priam\'s wife who mourns Hector\'s death',
      'She is a prophetess who accurately predicts Troy\'s fall but is cursed never to be believed',
      'She is a priestess of Athena who warns against bringing in the Trojan Horse',
      'She is Helen\'s handmaid who tries to return her to Sparta',
    ],
    correct: 1,
    explanation: 'Cassandra was given the gift of prophecy by Apollo, but when she rejected him, he cursed her so that her true prophecies would never be believed. She correctly warns the Trojans about the Trojan Horse but is ignored. After Troy falls, she is taken as a captive by Agamemnon and killed with him by Clytemnestra.',
  },
  {
    id: 76, category: 'Troy',
    question: 'What is a "nostos" (pl. nostoi) and why is Agamemnon\'s considered the darkest?',
    options: [
      'A victory hymn; Agamemnon\'s is darkest because he lost so many men',
      'A homecoming journey from Troy; Agamemnon\'s is darkest because he was murdered by his wife upon returning',
      'A sea battle; Agamemnon\'s fleet was the most severely damaged by storms',
      'A ritual sacrifice; Agamemnon sacrificed his own daughter Iphigenia',
    ],
    correct: 1,
    explanation: 'A nostos is a homecoming story — specifically the return voyages of the Greek heroes after Troy. The nostoi cycle includes Odysseus (ten years of wandering), Menelaus (blown to Egypt), and others. Agamemnon\'s is the darkest: he returns in triumph only to be murdered in his bath by his wife Clytemnestra and her lover Aegisthus, who had been ruling in his absence.',
  },
  {
    id: 77, category: 'Authors',
    question: 'Pindar\'s Olympian Ode 1 is significant for what departure from the standard mythological tradition?',
    options: [
      'He introduces the Trojan Horse for the first time',
      'He rejects the version of Tantalus\'s punishment that involves food and water, replacing it with a rock, because he finds the standard version too degrading to the gods',
      'He argues that Oedipus willingly killed his father rather than doing so unknowingly',
      'He claims the Trojan War lasted only seven years, not ten',
    ],
    correct: 1,
    explanation: 'In Olympian Ode 1, Pindar explicitly rejects the standard "tantalizing" version of Tantalus\'s punishment (food and water just out of reach) as impiously degrading to the gods. He replaces it with a huge rock hanging over Tantalus\'s head. This is an important example of an ancient author consciously revising mythology for religious or moral reasons.',
  },
  {
    id: 78, category: 'Gods',
    question: 'What is Hermes\' role as psychopompos and where does it appear most clearly?',
    options: [
      'He guards the gates of Olympus; appears in the Iliad Book 1',
      'He guides the souls of the dead from the world of the living to the underworld; appears in Odyssey Book 24',
      'He judges the souls of the dead; appears in Plato\'s Republic',
      'He ferries souls across the river Styx; appears in the Aeneid',
    ],
    correct: 1,
    explanation: 'Psychopompos means "guide of souls." In Odyssey Book 24, Hermes herds the souls of the dead suitors toward Hades like a shepherd driving a flock. He also guides Priam safely to Achilles\' tent in Iliad Book 24. Charon is the ferryman of the Styx — distinct from Hermes\'s role as guide.',
  },
  {
    id: 79, category: 'Myths',
    question: 'How does the myth of Arachne function as both an etiological myth and a story about hubris?',
    options: [
      'It explains why spiders exist AND punishes Arachne for boasting her weaving surpasses Athena\'s',
      'It explains why weaving was invented AND shows Athena generously teaching mortals',
      'It explains why spiders are feared AND shows the dangers of challenging any Olympian god',
      'It explains the origin of tapestry AND punishes Arachne for weaving blasphemous images of the gods',
    ],
    correct: 0,
    explanation: 'Arachne\'s myth (Ovid, Metamorphoses Book 6) is etiological — explaining why spiders exist and weave webs (Arachne is transformed into a spider). It also dramatizes hubris: Arachne boasts that her weaving is superior to Athena\'s, challenges the goddess, and wins — but Athena\'s furious response (she tears the tapestry and strikes Arachne) leads to Arachne\'s suicide and transformation.',
  },
  {
    id: 80, category: 'Theory',
    question: 'What does Lévi-Strauss mean by saying myths "mediate" binary opposites?',
    options: [
      'Myths settle legal disputes between opposing parties in a culture',
      'Myths provide a narrative that allows a culture to think through and symbolically resolve fundamental tensions (like nature vs. culture, mortal vs. immortal) that cannot be resolved in reality',
      'Myths translate between Greek and barbarian cultural values',
      'Myths balance the competing interests of the gods and humans',
    ],
    correct: 1,
    explanation: 'For Lévi-Strauss, cultures organize thought around fundamental binary oppositions (raw/cooked, nature/culture, male/female, mortal/immortal). These oppositions are real and unresolvable in practice, but myths provide a symbolic arena in which they can be worked through narratively. The Theogony\'s movement from Gaia\'s female power to Zeus\'s male order "mediates" the male/female opposition.',
  },
];

// ─── Comparison data: Three Underworlds ──────────────────────────────────────

export interface UnderworldComparison {
  source: string;
  author: string;
  date: string;
  moral: string;
  geography: string;
  notable: string;
  punishment: string;
  reward: string;
  political: string;
  tone: string;
}

export const THREE_UNDERWORLDS: UnderworldComparison[] = [
  {
    source: 'Odyssey Book 11',
    author: 'Homer',
    date: 'c. 725–700 BCE',
    moral: 'No moral economy — most dead simply persist without distinction, reward, or punishment.',
    geography: 'Asphodel Fields for most; Tartarus for a handful of famous sinners; Elysium for a few great heroes.',
    notable: 'Achilles says he would rather be a living serf than king among the dead. The shades have no power until they drink blood.',
    punishment: 'Only Tantalus (food/water out of reach), Sisyphus (boulder), Tityos (vulture) — all for crimes against the gods, not other humans.',
    reward: 'A few heroes in Elysium (Menelaus by prophecy). No general system of reward for virtue.',
    political: 'None — the underworld serves no ideological or political agenda.',
    tone: 'Bleakly realistic. Death is total loss of vitality. The heroic code offers no comfort here.',
  },
  {
    source: 'Aeneid Book 6',
    author: 'Vergil',
    date: '19 BCE',
    moral: 'Clearly structured moral geography — virtuous and vicious receive sharply differentiated fates.',
    geography: 'Tartarus (punishment) / Elysium (reward) / Plain of Lethe (souls awaiting reincarnation). Much more elaborate than Homer.',
    notable: 'Aeneas must carry the golden bough. The Sibyl of Cumae guides him. He sees his father Anchises in Elysium, who reveals the future heroes of Rome.',
    punishment: 'Detailed catalogue of crimes and punishments in Tartarus — the wicked receive what they deserve.',
    reward: 'Elysium for heroes and the righteous. Souls are eventually purified and reborn.',
    political: 'Deeply political — the parade of future Roman heroes (Romulus, Augustus) in Elysium transforms the underworld into a prophecy of Roman imperial destiny.',
    tone: 'Majestic and awe-inspiring. The underworld has purpose — it feeds into the larger teleology of Rome\'s greatness.',
  },
  {
    source: 'Republic Book 10 — Myth of Er',
    author: 'Plato',
    date: 'c. 380 BCE',
    moral: 'Most systematically moral of all — souls receive exactly 10× reward or punishment for earthly deeds across 1000 years.',
    geography: 'Meadow of judgment; upward path (Elysium-equivalent) and downward path (punishment). Plain of Lethe where souls choose next lives.',
    notable: 'Er is a soldier who dies and is returned from death as a witness. The first soul chose a tyrant\'s life from greed. Odysseus wisely chose a modest private life.',
    punishment: 'Precise — 10× earthly evil for 1000 years. Tyrants and those who wronged parents or gods suffer most.',
    reward: '10× earthly good for 1000 years. Then all souls choose their next life from a selection laid out by Lachesis.',
    political: 'Philosophical — argues for living justly because the afterlife makes precise moral reckoning inevitable.',
    tone: 'Rational and systematic. The underworld is a philosophical thought-experiment about justice, not a mythological place.',
  },
];

// ─── Cheat sheet data ─────────────────────────────────────────────────────────

export const CHEAT_SHEET = {
  romans: [
    { greek: 'Zeus', roman: 'Jupiter' }, { greek: 'Hera', roman: 'Juno' },
    { greek: 'Poseidon', roman: 'Neptune' }, { greek: 'Demeter', roman: 'Ceres' },
    { greek: 'Athena', roman: 'Minerva' }, { greek: 'Apollo', roman: 'Apollo' },
    { greek: 'Artemis', roman: 'Diana' }, { greek: 'Aphrodite', roman: 'Venus' },
    { greek: 'Ares', roman: 'Mars' }, { greek: 'Hephaestus', roman: 'Vulcan' },
    { greek: 'Hermes', roman: 'Mercury' }, { greek: 'Dionysus', roman: 'Bacchus' },
    { greek: 'Hades', roman: 'Pluto / Dis' }, { greek: 'Persephone', roman: 'Proserpina' },
    { greek: 'Eros', roman: 'Cupid' }, { greek: 'Kronos', roman: 'Saturn' },
  ],
  fiveAges: [
    { age: 'Golden', ruler: 'Kronos', desc: 'Perfect; humans lived close to gods' },
    { age: 'Silver', ruler: 'Olympians', desc: 'Less perfect; humans dishonored gods' },
    { age: 'Bronze', ruler: 'Zeus', desc: 'Warlike; destroyed themselves' },
    { age: 'Heroes', ruler: 'Zeus', desc: 'Hesiod inserts; Trojan War era' },
    { age: 'Iron', ruler: 'Zeus', desc: 'Hesiod\'s own age; corruption and toil' },
  ],
  labors: [
    '1. Nemean Lion', '2. Lernaean Hydra', '3. Erymanthian Boar',
    '4. Ceryneian Hind', '5. Stymphalian Birds', '6. Augean Stables',
    '7. Cretan Bull', '8. Mares of Diomedes', '9. Belt of Hippolyta',
    '10. Cattle of Geryon', '11. Apples of the Hesperides', '12. Cerberus',
  ],
  authors: [
    { name: 'Hesiod', date: 'c.700 BCE', lang: 'Greek', works: 'Theogony; Works & Days' },
    { name: 'Homer', date: 'c.725 BCE', lang: 'Greek', works: 'Iliad; Odyssey' },
    { name: 'Homeric Hymns', date: 'c.700–400', lang: 'Greek', works: 'Apollo, Aphrodite, Demeter, Hermes' },
    { name: 'Pindar', date: '518–438 BCE', lang: 'Greek', works: 'Olympian Odes' },
    { name: 'Aeschylus', date: '525–456 BCE', lang: 'Greek', works: 'Oresteia; Prometheus Bound' },
    { name: 'Sophocles', date: '496–406 BCE', lang: 'Greek', works: 'Oedipus Rex; Antigone' },
    { name: 'Euripides', date: '480–406 BCE', lang: 'Greek', works: 'Medea; Helen; Hippolytus; Bacchae' },
    { name: 'Plato', date: 'c.428–348 BCE', lang: 'Greek', works: 'Republic (Myth of Er)' },
    { name: 'Vergil', date: '70–19 BCE', lang: 'Latin', works: 'Aeneid' },
    { name: 'Ovid', date: '43BCE–17CE', lang: 'Latin', works: 'Metamorphoses; Fasti' },
    { name: 'Apuleius', date: 'c.125–180 CE', lang: 'Latin', works: 'Metamorphoses (Golden Ass)' },
  ],
  theories: [
    { name: 'Etiology', thinker: 'Ancient/general', claim: 'Myths explain origins (aitia)' },
    { name: 'Allegory', thinker: 'Müller (19c)', claim: 'Myths = natural phenomena symbolically' },
    { name: 'Psychoanalysis', thinker: 'Freud', claim: 'Myths = waking dreams / Oedipus complex' },
    { name: 'Archetypes', thinker: 'Jung', claim: 'Myths = collective unconscious / archetypes' },
    { name: 'Ritual', thinker: 'Frazer', claim: 'Myth + ritual are inseparable' },
    { name: 'Social', thinker: 'Malinowski', claim: 'Myths reflect specific cultural customs' },
    { name: 'Structuralism', thinker: 'Lévi-Strauss', claim: 'Myths mediate binary opposites' },
    { name: 'Synthesis', thinker: 'Burkert', claim: 'Ground structuralism in historical context' },
    { name: 'Feminist', thinker: 'Various (20–21c)', claim: 'Expose patriarchal assumptions in myth' },
  ],
};

export const PDF_LONG_ANSWERS = [
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Discuss the character of Apollo, focusing on his dual nature as a god of both healing and destruction. Use specific myths from the Homeric Hymn to Apollo and other sources to illustrate your answer.',
    answer: `Apollo is one of the most complex and paradoxical of the Olympian gods. He is simultaneously the god of healing, purification, and medicine, and the god of plague, pestilence, and sudden death — a contradiction that runs through every myth associated with him and that makes him one of the most intellectually interesting figures in the Greek pantheon.

The destructive side of Apollo is established immediately in Western literature. The Iliad opens with Apollo raining arrows of plague down upon the Greek camp at the behest of the priest Chryses, whose daughter Agamemnon has taken. His silver bow and arrows are instruments of mass death — sudden, unexplained disease is "Apollo's arrows" in the Greek imaginary. This aspect connects to his Near Eastern roots: the West Semitic god Resheph, with whom Apollo was syncretized in Cyprus, also bore arrows associated with pestilence.

Yet the very same god is the healer par excellence. The myth of Coronis illustrates this contradiction most painfully. Apollo falls in love with Coronis, who betrays him with a young man. His crow reports this. Apollo shoots Coronis with an arrow — and then immediately repents, his healing powers unable to undo what his revenge has caused. He saves his unborn son Asclepius from Coronis's corpse, raising him to become the god of medicine. The revenge and healing meet in a single tragic narrative: Apollo destroys the woman he loves and from her dead body produces the greatest healer in Greek mythology.

His connection to music provides a third dimension. When Apollo enters the house of Zeus in the Homeric Hymn to Apollo, "at once the minds of immortals turn to the lyre and song" — all the Muses sing responsively to his playing. This musical genius makes him simultaneously the source of civilized order (music, poetry, prophecy) and civilized punishment (the music contest with Marsyas ends with Marsyas being skinned alive). Apollo's punishment of the satyr Marsyas — for daring to challenge him in a music competition after the hubris of picking up a discarded flute — is grotesquely disproportionate, yet perfectly consistent with the logic of a god who is both the supreme artist and the supreme avenger.`,
  },
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Discuss the figure of Artemis. What is the central paradox of her character? Use three specific myths to illustrate how this paradox plays out in her mythological tradition.',
    answer: `Artemis is defined above all else by her virginity — the most fiercely guarded attribute in the Greek pantheon and the one most violently punished when violated or even accidentally transgressed. The paradox at the heart of her character is that this same virgin goddess is also intimately connected with childbirth and the transitions of women's lives. The resolution of this paradox is both mythological and ritual.

The mythological resolution begins at Artemis's own birth. In most versions, she is born first on the island of Ortygia (near Delos) and immediately assists in the delivery of her twin brother Apollo on Delos itself. She is, in the very first moments of her existence, a midwife — and this original act defines her relationship to women's reproductive lives ever after. She is the goddess who presides over transitions: from girl to woman, from woman to mother.

The myth of Actaeon demonstrates the absolute, uncompromising nature of her virginal purity. Actaeon, a great hunter of no ill intent, accidentally stumbles upon Artemis bathing on Mount Cithaeron. There is no malice, no premeditation, no transgression in spirit — only an accident of timing. Yet Artemis transforms him into a stag, and his own fifty hounds tear him apart. The module explicitly emphasizes this: death was the punishment regardless of intention. Artemis's virginity is sacred law, not moral judgment.

The myth of Callisto shows the same principle applied to one of Artemis's own followers, with even greater injustice. Callisto is a huntress-nymph in Artemis's band who is raped by Zeus, who disguises himself as Artemis to approach her. Her pregnancy is discovered at bathing and Artemis immediately expels her. Callisto has done nothing wrong whatsoever — she is both a victim of rape and a victim of Artemis's rigid code. The connection between punishment and Artemis is maintained even when Artemis's own logic condemns an innocent victim.

Finally, the Arkteia at Brauron shows how this mythological character translated into actual religious practice. Every four years, Athenian girls "played the bear" at Brauron in saffron robes, participating in foot races and processions in Artemis's honor before they were eligible to marry. The festival initiated them into the cult of the goddess who would later protect them in childbirth. The virgin goddess of the wilderness presided over the most intimate moments of women's domestic lives — a paradox that the Greeks did not resolve so much as ritually inhabit.`,
  },
  {
    category: 'theory',
    categoryLabel: 'Theory',
    question: 'Apply TWO different theoretical approaches to a single Greco-Roman myth of your choice, showing how different frameworks illuminate different aspects of the same myth. Evaluate the strengths and limitations of each approach.',
    answer: `The myth of Demeter and Persephone, as told in the Homeric Hymn to Demeter (seventh century BCE), is one of the richest in the Greek tradition for multiple theoretical interpretation. Two frameworks — etiology and Lévi-Strauss's structuralism — illuminate very different dimensions of the same narrative.

The etiological approach asks what the myth explains. The Homeric Hymn to Demeter performs a double explanatory function. First, it explains the seasons: when Persephone is abducted by Hades and Demeter withdraws from Olympus in grief, crops fail and humanity faces starvation. Zeus intervenes; Persephone is partially restored. Her annual return to earth corresponds to spring growth; her annual descent to the underworld corresponds to autumn and winter. The myth thus explains an observed natural phenomenon through divine narrative. Second, and more specifically, it explains the founding of the Eleusinian Mysteries at Eleusis — Demeter stays in the town of Eleusis during her wandering, demands a temple be built in her honor, and commands that rites be established there. This is a precisely historical etiological function: the myth explains why a real religious institution existed in a specific place. The etiological approach is strongest here because it connects the myth to verifiable historical institutions and practices.

The structuralist approach, by contrast, looks through the narrative surface to find the binary oppositions the myth mediates. For Lévi-Strauss, the Demeter/Persephone myth mediates several fundamental oppositions: life/death (Persephone moves between both realms), culture/nature (Demeter withholds grain = nature reverts to chaos; her presence = culture's agricultural stability), and above/below (Olympus vs. underworld). The seasonal compromise — Persephone spending part of the year in each realm — is the narrative's resolution of what cannot be resolved in reality: the co-existence of life and death, growth and decay. The structuralist approach illuminates why the myth has the specific narrative shape it does: the compromise solution is not just a plot device but a structural necessity.

Each approach has limits. Etiology cannot explain why the myth takes its specific emotional and narrative form — it cannot account for Demeter's grief, her rage, or the psychological depth of the mother-daughter relationship. Structuralism, for its part, tends toward abstraction: it can reveal the skeleton of the myth but risks missing its living cultural texture. Walter Burkert's synthesis would argue that both approaches are valid and complementary, as long as they are grounded in the specific historical and religious context of seventh-century BCE Greece — where the Eleusinian Mysteries were an actual institution that these myths served.`,
  },
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Compare Athena and Ares as war gods. What does the contrast between them reveal about Greek values and conceptions of war?',
    answer: `Athena and Ares are both gods of war in the Greek tradition, yet their contrast is so absolute that they might be considered opposites within the same domain. The distinction between them is not merely a matter of personality but reflects a deep cultural division in how the Greeks understood violence, power, and civilization.

Ares represents war in its rawest, most destructive form. He is the god of the physical fury of battle — he incites strife, urges on furious combat, and is associated with the chaos and carnage of the battlefield rather than its strategic resolution. In the Iliad Book 5, when the mortal hero Diomedes (aided by Athena) wounds Ares on the battlefield, Zeus's response is savage: he tells Ares he is "the most hateful of all gods," and that were he not his son, Zeus would long since have banished him from Olympus. The supreme god of the Greek pantheon cannot stand his own war god. Ares has almost no mythological role beyond this — he appears as Aphrodite's adulterous lover, caught in Hephaestus's net, humiliated. His subjugation by Aphrodite (the civilizing power of love over brute force) is, the course suggests, entirely deliberate.

Athena is everything Ares is not. She approaches battle thoughtfully, protects those under her care, and serves civilizing purposes. Her armor in the Iliad — described in extraordinary detail in Book 5 as she takes up Zeus's own aegis — is the armor of strategic intelligence, not berserker rage. She helps Diomedes not just to fight but to fight wisely, even distinguishing which enemies he may properly engage. She is the patron of Odysseus — the hero whose weapon is his mind — and it is precisely his craft, cunning, and intelligence (all Athenian qualities) that allow him to survive where brute strength alone would fail.

The contrast tells us something crucial about Greek values. The Greeks did not worship war per se; they celebrated the victory that comes from strategic intelligence applied to warfare. Athena's war produces civilization (she builds the Trojan Horse, helps found Athens, protects cities); Ares's war produces only destruction. It is also notable that his Roman counterpart Mars has a completely different cultural significance: associated with victorious conquest, crops, and as the father of Romulus and Remus, Mars is one of the most important Roman gods. The Greeks and Romans, working from the same mythological substrate, drew opposite lessons about what war means in the life of a civilization.`,
  },
];

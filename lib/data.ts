export interface Flashcard {
  q: string;
  a: string;
  sub?: string;
}

export interface Deck {
  name: string;
  color: 'gold' | 'terra' | 'olive' | 'slate';
  cards: Flashcard[];
}

export interface LongAnswer {
  category: string;
  categoryLabel: string;
  question: string;
  answer: string;
}

export interface God {
  greek: string;
  roman: string;
  domain: string;
  symbols: string;
  myths: string;
  color: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  desc: string;
  importance?: 'high' | 'medium';
}

export interface TheoryItem {
  name: string;
  thinker: string;
  summary: string;
  detail: string;
  strength: string;
  weakness: string;
}

export const DECKS: Deck[] = [
  {
    name: 'Gods & Romans',
    color: 'gold',
    cards: [
      { q: 'Roman name for Zeus', a: 'Jupiter (also Jove)', sub: 'Sky god, thunderbolt, cloud-gatherer, father of gods' },
      { q: 'Roman name for Hera', a: 'Juno', sub: 'Queen of gods, goddess of marriage and childbirth' },
      { q: 'Roman name for Poseidon', a: 'Neptune', sub: 'God of the sea, earthquakes, horses' },
      { q: 'Roman name for Demeter', a: 'Ceres', sub: 'Goddess of grain, agriculture, fertility' },
      { q: 'Roman name for Athena', a: 'Minerva', sub: 'Goddess of wisdom, strategic war, crafts' },
      { q: 'Roman name for Apollo', a: 'Apollo (unchanged)', sub: 'God of sun, music, prophecy, healing, archery' },
      { q: 'Roman name for Artemis', a: 'Diana', sub: 'Goddess of hunt, wilderness, moon, virginity' },
      { q: 'Roman name for Aphrodite', a: 'Venus', sub: 'Goddess of erotic love and procreation' },
      { q: 'Roman name for Ares', a: 'Mars', sub: 'God of war — much more important to Romans than Greeks' },
      { q: 'Roman name for Hephaestus', a: 'Vulcan', sub: 'God of the forge and fire' },
      { q: 'Roman name for Hermes', a: 'Mercury', sub: 'Messenger god, psychopompos, god of thieves' },
      { q: 'Roman name for Dionysus', a: 'Bacchus', sub: 'God of wine, theatre, ecstasy, madness' },
      { q: 'Roman name for Hades', a: 'Pluto / Dis', sub: 'God of the underworld; Pluto means "wealthy"' },
      { q: 'Roman name for Persephone', a: 'Proserpina', sub: 'Queen of the underworld, goddess of spring' },
      { q: 'Roman name for Eros', a: 'Cupid', sub: 'God of love — later depicted as son of Aphrodite' },
      { q: 'Roman name for Kronos', a: 'Saturn', sub: 'Titan ruler before Zeus; swallowed his children' },
      { q: 'Roman name for Ouranos', a: 'Uranus', sub: 'Primordial sky god; castrated by Kronos' },
      { q: 'Roman name for Gaia', a: 'Terra / Gaea', sub: 'Primordial earth goddess; mother of the Titans' },
    ],
  },
  {
    name: 'God Domains',
    color: 'terra',
    cards: [
      { q: "Apollo's main domains (list 6)", a: 'Youth, music, prophecy, healing/purification, poetry, archery', sub: 'Also: initiation of young men, revenge, punishment' },
      { q: "Athena's main domains", a: 'Wisdom, war (strategic), crafts, civilization, cities', sub: 'Born from Zeus\'s head after he swallowed Metis (wisdom)' },
      { q: "Artemis's main domains", a: 'Wilderness, hunting, virginity, childbirth, moon, sudden death', sub: 'Paradox: virgin goddess of childbirth; born first, helped deliver Apollo' },
      { q: "Aphrodite's three defining character traits", a: 'Seductive charm, fertility, deception', sub: 'These mirror Pandora\'s description in Hesiod — not coincidental' },
      { q: "Three goddesses immune to Aphrodite's power", a: 'Athena, Artemis, Hestia — all virgins', sub: 'Stated at the opening of the Homeric Hymn to Aphrodite' },
      { q: 'Ares vs Athena on war — contrast', a: 'Ares = destructive/brutal war; Athena = strategic/protective/civilizing war', sub: 'Iliad Book 5: Diomedes wounds Ares; Zeus rebukes him harshly' },
      { q: 'Why was Mars (Roman Ares) more culturally important?', a: 'Romans: victorious conquest AND crops/harvest. Father of Romulus and Remus', sub: 'Greeks held Ares in relatively low esteem; Romans elevated Mars' },
      { q: "Hermes' main roles", a: 'Messenger of the gods, psychopompos (guide of souls), god of thieves, travelers, commerce', sub: 'Also: inventor of the lyre; stole Apollo\'s cattle as infant (Homeric Hymn)' },
      { q: "Demeter's domain and key myth", a: 'Grain, agriculture, fertility of earth; linked to ending of cannibalism', sub: 'Eleusinian Mysteries connected to her search for Persephone' },
      { q: "Dionysus' domains", a: 'Wine, theatre (tragedy and comedy), ecstasy, madness, fertility', sub: 'Twice-born: from Semele (struck by lightning) and from Zeus\'s thigh' },
      { q: "Zeus as god of justice", a: 'Connected to Themis (his 2nd wife, justice personified) and Dike (his daughter = justice)', sub: 'Holds golden scales to weigh fate, e.g. when Hector meets Achilles' },
      { q: "Zeus's oracle at Dodona", a: 'Oldest Greek oracle; Epirus, NW Greece; prophesied through holy oak tree sounds and doves', sub: 'Consulted as pan-Hellenic oracle; possibly older than Delphi' },
      { q: "Hephaestus's role", a: 'God of fire and the forge; divine craftsman; made armour for Achilles; lame god', sub: 'Married to Aphrodite who cheats with Ares; caught them in a golden net' },
    ],
  },
  {
    name: 'Key Myths',
    color: 'olive',
    cards: [
      { q: 'First Succession Myth (Theogony)', a: 'Kronos castrates Ouranos with a sickle. Aphrodite born from sea foam around severed genitals near Cyprus.', sub: 'Blood produces Furies, Giants, Tree Nymphs; genitals produce Aphrodite' },
      { q: 'Second Succession Myth (Theogony)', a: 'Zeus hidden in Crete; Rhea gives Kronos a stone. Zeus forces regurgitation of siblings, defeats Titans.', sub: 'Hurrian parallel: Kumarbi castrates Anu. Close cultural connections.' },
      { q: 'Prometheus — crime and punishment', a: 'Tricked Zeus at sacrifice (bones/fat to gods, meat to humans); stole fire in fennel stalk. Punished: eagle eats his liver daily forever.', sub: 'Fire = symbol of technology, advancement, civilization' },
      { q: "Pandora's story", a: 'Created by Hephaestus at Zeus\'s order as punishment for Prometheus. Opens jar releasing all evils; only Hope remains inside.', sub: 'Hesiod: deeply misogynistic; she parallels Eve (both bring evil through curiosity)' },
      { q: 'The myth of Daphne', a: 'Cupid strikes Apollo (gold arrow = love) and Daphne (lead arrow = repulsion). She transforms into a laurel tree to escape Apollo.', sub: 'Explains Apollo\'s laurel crown; his first great failed love affair' },
      { q: 'The myth of Actaeon', a: 'Hunter accidentally sees Artemis bathing on Mt. Cithaeron; she turns him into a stag; his own hounds tear him apart.', sub: 'Theme: violation of divine virginity — even accidental — demands death' },
      { q: 'The myth of Niobe', a: 'Boasts she surpasses Leto (12 children vs 2). Apollo kills her 6 sons; Artemis kills her 6 daughters. Niobe weeps into a rock.', sub: 'Theme: hubris against the gods. Her father is Tantalus.' },
      { q: 'The myth of Hyacinthus', a: 'Spartan youth Apollo loves; killed by a discus (or Zephyrus redirects it jealously). His blood becomes the hyacinth flower.', sub: 'Connects Apollo to male youth and love; shows his healing limits' },
      { q: 'The myth of Marsyas', a: 'Satyr picks up flute discarded by Athena; challenges Apollo to music contest; loses; Apollo skins him alive.', sub: 'Athena discarded flute because it distorted her face; Apollo\'s revenge aspect' },
      { q: 'Aphrodite and Anchises', a: 'Zeus makes Aphrodite fall for mortal shepherd Anchises to humble her. Their son is Aeneas, future founder of Rome.', sub: 'From the Homeric Hymn to Aphrodite — key source for Aeneid connection' },
      { q: 'The myth of Adonis', a: 'Aphrodite hides him in a chest; gives him to Persephone; both love him. Zeus decrees he splits the year between them. Killed by a boar → anemone flower.', sub: 'Near Eastern origin (Semitic Adon = Lord). Represents seasonal death/rebirth.' },
      { q: 'Pygmalion and Galatea', a: 'Disgusted by Cypriot women, fashions ivory statue, falls in love, prays to Aphrodite; she brings it to life as Galatea.', sub: 'Inspired Shaw\'s Pygmalion and the musical My Fair Lady' },
      { q: 'Cupid and Psyche — key plot', a: 'Psyche\'s beauty outrages Venus. After 4 impossible tasks (ants, reeds, eagle, tower help), Cupid saves her; Jupiter approves; Psyche becomes goddess.', sub: 'Themes: love, mortality/immortality, curiosity as female vice, death and resurrection' },
      { q: 'The myth of Arachne', a: 'Mortal weaver challenges Athena; wins but Athena strikes her. Arachne hangs herself; Athena transforms her into a spider.', sub: 'Hubris against a god; from Ovid\'s Metamorphoses. Explains spiders.' },
      { q: 'Callisto', a: 'Hunting nymph raped by Zeus disguised as Diana. Pregnancy discovered; expelled. Turned into bear; placed as Ursa Major constellation.', sub: 'In Ovid: Hera turns her; in Greek versions: Artemis does. Son = Arcas' },
      { q: 'How does Orpheus die (Ovid)?', a: 'Torn apart by Maenads — women whose advances he spurned after Eurydice\'s death.', sub: 'His severed head continues singing even after death; floats to Lesbos' },
      { q: 'Why does Orpheus fail to retrieve Eurydice?', a: 'He looks back at her as she follows him — the one condition Hades set.', sub: 'His inability to trust or endure uncertainty undoes everything' },
    ],
  },
  {
    name: 'Trojan War',
    color: 'gold',
    cards: [
      { q: 'Root cause of the Trojan War', a: 'Judgment of Paris: he chose Aphrodite (offering Helen) over Hera (power) and Athena (wisdom). Paris then abducted Helen from Menelaus.', sub: 'Triggered by the apple of Eris at the wedding of Peleus and Thetis' },
      { q: 'Gods who supported the Greeks', a: 'Hera, Athena, Poseidon (consistently); Hermes (occasionally)', sub: 'Hera and Athena: furious after the Judgment of Paris' },
      { q: 'Gods who supported the Trojans', a: 'Aphrodite, Apollo, Ares, Artemis, Leto', sub: 'Apollo especially: rains plague arrows on Greeks at start of Iliad' },
      { q: "Achilles' fundamental character flaw", a: 'Extreme pride (hubris/honor-consciousness — timê). Withdraws from battle over a dispute with Agamemnon about Briseis.', sub: 'His wrath (menis) is the subject of the Iliad\'s first word and the entire poem' },
      { q: 'Who brought Achilles from Scyros?', a: 'Odysseus — Achilles was hiding in disguise among women to avoid the war.', sub: 'His mother Thetis hid him knowing he would die at Troy' },
      { q: 'What was the Trojan Horse?', a: 'Giant wooden horse built by Epeius (with Athena\'s help); Greeks hidden inside; Trojans brought it inside; Greeks emerged at night.', sub: 'Odysseus\'s scheme; Trojan priest Laocoon warned against it but was ignored' },
      { q: 'Who was Neoptolemus (Pyrrhus)?', a: 'Son of Achilles; fought at Troy after his father\'s death; killed Priam at the altar of Zeus.', sub: 'Name Pyrrhus relates to his blond/fiery hair' },
      { q: "What happened to Agamemnon on return?", a: 'Murdered by wife Clytemnestra and her lover Aegisthus (his cousin) upon returning home from Troy.', sub: 'Avenged by his son Orestes — subject of Aeschylus\'s Oresteia trilogy' },
      { q: "Helen in Euripides' version", a: 'A phantom went to Troy; the real Helen was taken to Egypt by Hermes and remained faithful to Menelaus.', sub: "Euripides' Helen (412 BCE) — deliberately subverts the standard tradition" },
      { q: 'What is the Iliad literally about?', a: 'The wrath of Achilles — approximately 50 days near the end of the 10-year war, centered on Achilles\' withdrawal, return, and killing of Hector.', sub: 'NOT the whole Trojan War; begins in medias res (in the middle of things)' },
      { q: 'Which Trojan escaped the Fall of Troy?', a: 'Aeneas — goes on to found the line leading to Rome (Vergil\'s Aeneid).', sub: 'Hector, Priam, Paris all died; Troy was sacked, burned, looted' },
    ],
  },
  {
    name: 'Theban Saga',
    color: 'slate',
    cards: [
      { q: 'Who founded Thebes and how?', a: 'Cadmus — Delphic oracle told him to follow a cow and found a city where it lay down, in Boeotia.', sub: 'Killed a dragon; sowed its teeth; Spartoi (sown men) arose and fought each other' },
      { q: "What does 'Spartoi' mean?", a: 'Sown men — warriors who sprang from dragon teeth Cadmus sowed. Five survivors became Theban noble ancestors.', sub: "From Greek 'speirein' = to sow" },
      { q: "Oedipus's prophecy", a: 'He would kill his father and marry his mother.', sub: 'Both fulfilled unknowingly: kills Laius on the road, marries Jocasta' },
      { q: 'Why was Paris exposed as a baby?', a: 'His mother Hecuba had a dream/prophecy that he would be the destruction of Troy.', sub: 'Some versions: oracle that he would kill his father (Priam)' },
      { q: 'Answer to the Riddle of the Sphinx', a: 'Man — walks on four legs in morning (crawls as infant), two at noon (adult), three in evening (elderly with cane).', sub: 'Oedipus answered correctly; Sphinx killed herself; he received the throne and Jocasta' },
      { q: 'Why does Polynices raise an army against Eteocles?', a: 'Eteocles refused to step down after his turn ruling Thebes (they agreed to alternate years).', sub: 'Seven Against Thebes; both brothers die in single combat' },
      { q: 'Who are the Epigoni?', a: 'Sons of the Seven Against Thebes — they successfully sacked Thebes in the next generation.', sub: "Epigoni = 'those born after'; avenged their fathers' failure" },
      { q: 'Tantalus: crime and punishment', a: 'Crime: served his son Pelops to the gods to test them. Standard punishment: stands in water under fruit, both recede when he reaches.', sub: "Pindar's version: huge rock suspended over his head forever. His name = 'tantalize'" },
      { q: 'How did Pelops win Hippodamia?', a: 'Chariot race against her father Oenomaus. Bribed Myrtilus to sabotage Oenomaus\'s chariot; Oenomaus died.', sub: 'Pelops later betrayed and killed Myrtilus — the curse on the House of Atreus begins here' },
      { q: 'Amphion and Zethus — who did they kill?', a: 'Killed Lycus, the usurper who had enslaved their mother Antiope. Sons of Zeus and Antiope.', sub: 'Amphion built Thebes\' walls by playing his lyre — stones moved to music' },
    ],
  },
  {
    name: 'Underworld & Afterlife',
    color: 'slate',
    cards: [
      { q: "Overall impression of the dead in Odyssey Book 11", a: 'They are mainly just there in the same state without distinction — pale, weak, purposeless shades.', sub: 'No moral economy; not punished or rewarded; death is total loss of vitality' },
      { q: 'Sinners punished in Homer\'s Underworld — what was their crime?', a: 'Crimes against the gods themselves — Tantalus, Sisyphus, Tityos all offended the Olympians.', sub: 'Ordinary dead are NOT punished; this is a key contrast with Vergil and Plato' },
      { q: 'What must Aeneas bring to enter the underworld?', a: 'A golden bough — as instructed by the Sibyl of Cumae.', sub: 'Parallel to Odyssey Book 11; the Sibyl guides him as Circe guides Odysseus' },
      { q: "Aeneas's final vision in the underworld (Aeneid)", a: 'The souls of future Roman heroes — parade of Roman greats shown by his father Anchises.', sub: "Vergil's political vision: the Aeneid as Rome's founding myth" },
      { q: "Plato's Myth of Er — what choice did the first soul make?", a: 'Chose the life of a tyrant — out of greed and without wisdom. Later wept at the consequences.', sub: 'Lesson: experience from past lives does NOT guarantee good choices' },
      { q: 'Most severely punished in Plato\'s Myth of Er', a: 'Tyrants — specifically Ardiaeus, a tyrant who murdered his own father.', sub: 'Punished 10x the evil done in life; murderers and family betrayers also punished severely' },
      { q: 'Sisyphus — crime and punishment', a: 'Punishment: eternally rolling a boulder up a hill, only for it to roll back. Crime: cheated death twice.', sub: 'First tricked Persephone into releasing him; then tricked Thanatos (Death) itself' },
      { q: 'Tityos — crime and punishment', a: 'Punishment: vulture eats his liver anew every day (like Prometheus). Crime: attempted to rape Leto (mother of Apollo and Artemis).', sub: 'Apollo and/or Artemis killed him; lies stretched across 9 acres in Tartarus' },
      { q: "Tantalus's punishment (standard version)", a: 'Stands in water under fruit trees: water recedes when he drinks; fruit rises when he reaches.', sub: "Pindar's version: enormous rock hangs over his head forever" },
      { q: 'What is Elysium / the Elysian Fields?', a: 'Paradise section of the underworld for great heroes and the especially virtuous.', sub: 'Tartarus = punishment zone; Asphodel Fields = neutral zone for ordinary dead' },
      { q: 'Who is Charon?', a: 'Ferryman who transports souls across the river Styx (or Acheron) to Hades. Required payment: coins on eyes or in mouth.', sub: 'If unburied, souls wait 100 years on the bank before Charon takes them' },
      { q: 'Orpheus and the underworld', a: 'His music charms Cerberus, stills Styx, moves Hades and Persephone to release Eurydice. He fails because he looks back.', sub: 'His powers = musical ability (Apollo connection); death = Maenads (Dionysus connection)' },
    ],
  },
  {
    name: 'Authors & Sources',
    color: 'olive',
    cards: [
      { q: 'Dactylic hexameter — define', a: "The metrical form of Greek epic (Iliad, Odyssey, Hesiod's works). Each line has 6 feet; a dactyl = one long + two short syllables.", sub: "Also called 'heroic meter.' Standard form for epic poetry." },
      { q: "Hesiod's two major works", a: 'Theogony (origins of gods and succession myths) and Works and Days (Five Ages, Prometheus, Pandora).', sub: 'Boeotian poet; contemporaneous with or slightly earlier than Homer' },
      { q: "Homer's two major works", a: 'Iliad (Trojan War, wrath of Achilles) and Odyssey (return of Odysseus to Ithaca).', sub: 'Both in dactylic hexameter; c. late 8th–early 7th century BCE' },
      { q: 'What are the Homeric Hymns?', a: 'Collection of 33 hymns in Homeric dialect and meter; not all by same author. Long hymns contain mythological narratives of gods\' births and key events.', sub: 'Key for Apollo, Aphrodite, Demeter, Hermes; used as preludes to recitations' },
      { q: "Ovid's major work for mythology", a: 'Metamorphoses — 15 books of Latin verse retelling Greek/Roman myths, focused on transformations. Also: Fasti (Roman calendar myths).', sub: 'Active c. 20s BCE–17 CE; exiled by Augustus in 8 CE' },
      { q: "Vergil's major work", a: 'The Aeneid — Latin epic on Aeneas\'s journey from Troy to Italy; founding myth of Rome.', sub: 'Augustan age; deliberately modelled on Homer. Aeneid Book 6 = underworld descent' },
      { q: "Apuleius's significance", a: 'Metamorphoses / The Golden Ass (2nd century CE): contains Cupid and Psyche and the speech of Isis. Key for mystery religions.', sub: 'The Isis speech is one of the key syncretistic religious texts of antiquity' },
      { q: "Pindar's significance", a: 'Greek lyric poet; Olympian Odes celebrate athletic victors. Key source for Tantalus, Pelops — provides alternative punishments.', sub: "In Olympian 1: rejects 'impious' versions of myths as too scandalous" },
      { q: 'Three great Greek tragedians', a: 'Aeschylus, Sophocles, Euripides — all 5th century BCE (Classical Period)', sub: 'Aeschylus: Oresteia; Sophocles: Oedipus Rex; Euripides: Medea, Helen, Hippolytus, Bacchae' },
      { q: "Euripides' Helen — what's innovative?", a: 'A phantom went to Troy; real Helen stayed in Egypt, faithful to Menelaus. Questions whether the entire war was pointless.', sub: '412 BCE; deliberately subversive of standard tradition; anti-war themes' },
    ],
  },
  {
    name: 'Myth Theories',
    color: 'terra',
    cards: [
      { q: 'Define Etiology', a: "Myths that explain causes or origins (Greek 'aitia' = cause). They explain why things exist or happen the way they do.", sub: "Example: Homeric Hymn to Demeter explains Eleusinian Mysteries founding" },
      { q: "Freud's view of myth", a: 'Myths fulfill repressed wishes — like dreams. Oedipus complex: we desire our mothers and resent our fathers. Myth = waking dream.', sub: 'Weakness: over-generalizes; does not account for cultural differences' },
      { q: "Jung's contribution", a: 'Myths are projections of the collective unconscious — shared unconscious patterns of all humanity. Mythic images are archetypes of behaviour.', sub: 'Extended Freud beyond sexuality to universal human psychological patterns' },
      { q: "Frazer's approach", a: 'Linked myth inseparably to religious ritual. Myth and ritual are two sides of the same coin.', sub: 'Author of The Golden Bough; heavily influenced subsequent myth scholarship' },
      { q: "Malinowski's approach", a: 'Polish anthropologist: you must live within a culture to understand its myths. Myths reflect specific social customs and beliefs — not universal allegories.', sub: 'Criticized Freudian over-generalization; championed cultural particularity' },
      { q: "Lévi-Strauss and structuralism", a: 'Myths mediate structural binary opposites fundamental to human thought (raw/cooked, nature/culture, male/female, mortal/immortal).', sub: 'These binary structures are universal across cultures; find them beneath individual details' },
      { q: "Walter Burkert's synthesis", a: 'Grounded structuralist approaches in specific cultural/religious context. Myth cannot be separated from its historical context but shares structural sequences across cultures.', sub: 'Inclusive: accepts structuralism, psychology, AND historical/religious grounding' },
      { q: 'Feminist approaches to myth', a: 'Focus on psychological and social situations of female characters. Questions patriarchal assumptions embedded in myths like Pandora and the Actaeon stories.', sub: 'Greco-Roman society had radically different gender norms; modern views shape readings' },
      { q: 'Max Müller and allegory', a: 'All myths are allegories of natural/cosmological phenomena (sun, seasons, stars). Apollo = the sun; his arrows = sunrays.', sub: '19th century; now seen as far too reductive — cannot explain most mythological content' },
    ],
  },
];

export const LONG_ANSWERS: LongAnswer[] = [
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Describe Aphrodite\'s character and power as revealed in the Homeric Hymn to Aphrodite. What does her affair with Anchises reveal about the nature of erotic love and its limits?',
    answer: `Aphrodite's power is presented as universal and irresistible — she conquers gods, humans, and animals alike, with only three exceptions: Athena, Artemis, and Hestia, all virgins. The hymn opens by calling upon the Muse to sing the "works of Aphrodite," framing her as an abstract force of nature rather than merely an anthropomorphic figure with human motivations. The central irony of the narrative is that Zeus, tired of Aphrodite boasting about making gods fall for mortals, turns her own power against her — she falls helplessly in love with the mortal shepherd Anchises. She disguises herself as a mortal woman to seduce him, invoking her defining trait of deception. The story reveals that even Aphrodite cannot escape her own domain: she is conquered by her own power.

Their union produces Aeneas, future founder of the Roman line (as Vergil will develop in the Aeneid). The myth also explores the dangerous asymmetry between god and mortal: when Anchises wakes and realizes she is a goddess, he is terrified — because mortal men who sleep with goddesses typically come to bad ends. Aphrodite reassures him but warns he must never reveal who Aeneas's mother is. The myth thus illustrates both the all-consuming force of erotic desire and its inherent limits — the unbridgeable gap between mortal and immortal that desire alone cannot close. The hymn's irony runs deep: the statement that Aphrodite's power conquers all is immediately ratified by the fact that she cannot even resist herself.`,
  },
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Compare Athena and Ares as gods of war. What does the difference between them reveal about ancient Greek values?',
    answer: `Athena and Ares both preside over war, but they represent radically different conceptions of it. Ares embodies destructive, brutal, and mindless warfare — he incites strife, urges furious battle, and takes pleasure in carnage. In Iliad Book 5, he is wounded by the mortal hero Diomedes fighting under Athena's guidance, and Zeus rebukes him furiously, saying he would have banished him long ago if not for the family bond. He has almost no cult significance in Greek religious practice and rarely functions as a fully developed character in mythological narratives.

Athena, by contrast, represents strategic, protective, and civilizing war. She advises rather than incites; she protects cities and the warriors who defend them. When she arms herself in the Iliad, the text notes pointedly that she first makes her own robe with her own hands before putting on the armour of Zeus — a detail linking her war aspect permanently to her craft domain and feminine productivity. She is the patron of heroes who win through intelligence: Odysseus above all, but also Diomedes, Perseus, and Heracles. This contrast encodes deeply held Greek values: pure unreflective violence is ignoble and even contemptible; violence channeled through intelligence, strategy, and justice is what makes a true hero. The Romans somewhat reversed this valuation — their equivalent Mars was far more culturally significant, associated with victorious conquest, the harvest, and as the father of Romulus and Remus, the ancestor of Rome itself.`,
  },
  {
    category: 'gods',
    categoryLabel: 'Gods',
    question: 'Describe Artemis\'s key characteristics and explain the apparent paradox of a virgin goddess associated with childbirth.',
    answer: `Artemis is defined above all by her virginity — it is the trait most emphasized, most fiercely protected, and most violently defended when violated. She is a goddess of the wilderness and wild animals, carrying the bow and arrows that bring sudden death to women, placed as the direct female antithesis of Aphrodite throughout Greek literature. In the Homeric Hymn to Aphrodite, she appears as one of the three goddesses immune to Aphrodite's power — the others being Athena and Hestia. She is also placed in direct competition with Aphrodite in Euripides' Hippolytus, where the tragedy springs from the collision of the values each goddess represents.

Yet paradoxically, Artemis is also deeply associated with childbirth and women's life transitions. The paradox is partly resolved by her mythological origin: in many accounts, Artemis is born first on Delos and immediately assists in the birth of her twin brother Apollo — she becomes a midwife goddess from her very first act of existence. In classical Athens, women dedicated offerings at her sanctuary at Brauron both before marriage (the Arkteia festival, where girls "played the bear") and after childbirth. The key myths reinforcing her virginity — Actaeon (accidentally sees her bathing; turned into a stag, killed by his own hounds), Callisto (raped by Zeus; expelled from Artemis's band), and Orion (tries to rape her; stung to death by a scorpion she raises from the earth) — all demonstrate that her chastity is a sacred boundary whose violation, even entirely accidental, demands lethal punishment. She is simultaneously a protector of young women and a terrifying enforcer of the boundary between sexuality and its absence.`,
  },
  {
    category: 'heroes',
    categoryLabel: 'Heroes',
    question: 'Narrate the myth of Orpheus from his descent into the underworld to his death, as described by Ovid. What major themes does this myth explore?',
    answer: `Orpheus, the legendary musician of Thrace whose entire power resided in his extraordinary musical abilities, descends into the underworld after his wife Eurydice dies from a snake bite. His music is so unparalleled that it charms Cerberus, stills the rivers of the underworld, and causes the shades of the dead to weep — even the torments of the eternally punished cease while he plays. Hades and Persephone are moved to grant him a unique concession: Eurydice may follow him back to the living world, on a single condition — he must not look back at her until both have fully emerged. He leads her upward through the darkness, but at the last possible moment, unable to bear the uncertainty and silence, he looks back. She is immediately drawn back into death, and this time there is no return.

After this failure, Orpheus lives in grief in desolate places, rejecting the love of other women and in some versions turning entirely to the love of boys. In Ovid's Metamorphoses, he is eventually torn apart by a band of Maenads — the female worshippers of Dionysus — whose amorous advances he has spurned. Even his severed head continues to sing as it floats down the river Hebrus. The myth explores several profound themes simultaneously: the power of art and music as a force capable of moving even death itself; the ultimate limits of that power — his art gets him to the threshold but cannot overcome the condition imposed; the role of desire and doubt — his love is not strong enough to endure the not-knowing; and the tragic irony that the very sensitivity that gave him his power undoes him at the crucial moment. The myth also embodies Orpheus's dual divine connections: Apollo (music) and Dionysus (whose cult ultimately destroyed him).`,
  },
  {
    category: 'heroes',
    categoryLabel: 'Heroes',
    question: 'Tell the story of Oedipus from birth to exile. What does this myth reveal about fate, free will, and the nature of Greek tragedy?',
    answer: `Oedipus is born to Laius and Jocasta, king and queen of Thebes, under a terrible prophecy from Delphi: he will kill his father and marry his mother. To prevent this, Laius has the infant exposed on Mount Cithaeron with his ankles pinned together — hence the name Oedipus ("swollen foot"). A shepherd takes pity and passes him to the childless king and queen of Corinth, Polybus and Merope, who raise him as their own son. When Oedipus in turn consults Delphi and receives the same prophecy (which he believes applies to his adoptive parents), he flees Corinth in horror. On the road to Thebes, he kills an old man in a quarrel at a crossroads — unknowingly his true father Laius. Arriving at Thebes, he answers the Riddle of the Sphinx (What walks on four legs in the morning, two at noon, and three in the evening? Answer: Man), liberating the city. He is rewarded with the kingdom and the widowed queen Jocasta as his wife, and rules successfully for years, fathering children.

When a terrible plague strikes Thebes, the Delphic oracle declares the murderer of Laius must be expelled. Oedipus investigates with absolute determination and relentless intellectual commitment — the deepest irony being that his methodical pursuit of truth leads him to discover that he himself is both the murderer and the son-husband. Jocasta kills herself; Oedipus blinds himself with her brooch and goes into exile. The myth is not fundamentally about sin but about the unbridgeable gap between human knowledge and divine foreknowledge. Oedipus does everything a rational, morally serious person could possibly do to avoid his fate — and his very acts of avoidance fulfill it. It raises irresolvable questions about whether there is any meaningful human freedom when the gods have already determined the outcome.`,
  },
  {
    category: 'troy',
    categoryLabel: 'Trojan War',
    question: 'Explain the causes of the Trojan War, the alignment of the gods, and the most significant consequences for major characters.',
    answer: `The Trojan War's ultimate mythological origin is the Judgment of Paris. At the wedding of the mortal hero Peleus and the sea-nymph Thetis, the goddess Eris (Discord) throws a golden apple inscribed "for the fairest" among the divine guests. Hera, Athena, and Aphrodite each claim it. Zeus, wisely unwilling to judge among them, delegates the decision to the Trojan prince Paris, who is tending his flocks on Mount Ida. Each goddess offers a bribe: Hera offers power and dominion over kingdoms; Athena offers wisdom and skill in warfare; Aphrodite offers the most beautiful woman in the world — Helen, wife of the Spartan king Menelaus. Paris chooses Aphrodite. He then visits Sparta as a guest of Menelaus, violates the sacred laws of hospitality, and abducts (or elopes with) Helen. Menelaus rallies the Greek kings under his brother Agamemnon in a great coalition to retrieve her.

The gods align accordingly: Hera and Athena become implacable enemies of Troy; Aphrodite consistently protects Paris; Apollo favors the Trojans and opens the Iliad by raining plague arrows on the Greeks; Poseidon, who built Troy's walls, ironically sides with the Greeks because the Trojans refused to pay him. The war lasts ten years. The consequences are sweeping: Achilles dies from Paris's arrow guided by Apollo; Hector is killed and shamefully dragged; Troy is sacked and burned; Priam is murdered by Neoptolemus at the altar of Zeus; Agamemnon returns home only to be murdered by Clytemnestra and Aegisthus; Odysseus wanders for ten more years; but Aeneas escapes and eventually founds the line that will produce Rome, transforming the Trojan catastrophe into the seed of Western civilization.`,
  },
  {
    category: 'troy',
    categoryLabel: 'Trojan War',
    question: 'Provide a narrative overview of the Odyssey and discuss its major themes.',
    answer: `The Odyssey recounts the ten-year journey of Odysseus from Troy back to his home island of Ithaca, following the ten years already spent fighting the Trojan War. The poem begins in medias res: Odysseus has been detained for seven years on the island of Ogygia by the nymph Calypso, who loves him and wishes to make him immortal. In Ithaca, his wife Penelope is besieged by over a hundred suitors who assume Odysseus is dead and compete for her hand and kingdom; his son Telemachus is young and powerless. Athena, his constant divine protector, intervenes: she encourages Telemachus to seek news of his father and persuades the gods to order Calypso to release Odysseus.

His earlier wanderings — recounted by Odysseus himself at the Phaeacian court — include the island of the Lotus-Eaters (whose fruit induces forgetfulness), the Cyclops Polyphemus (son of Poseidon, blinded by Odysseus, causing Poseidon's lasting wrath), the island of Aeolus (god of winds), the cannibalistic Laestrygonians, Circe's island (she transforms men to pigs; Odysseus resists with Hermes' help and stays a year), the Land of the Dead (Book 11, where he consults the shade of Tiresias and sees the heroic dead), the Sirens, Scylla and Charybdis, the island of the Sun God (his men eat the sacred cattle and are destroyed in a storm), and finally Ogygia. After the Phaeacians return him to Ithaca, he disguises himself as a beggar, tests his household's loyalty, strings his own great bow in the contest Penelope devises, kills all the suitors in the hall, and reunites with Penelope. The poem's central themes are homecoming (nostos) and its price; loyalty and its rewards over time; the cunning hero who prevails through intelligence rather than mere strength; human endurance and suffering; and the complex, often manipulative relationship between gods and mortals.`,
  },
  {
    category: 'thebes',
    categoryLabel: 'Theban Saga',
    question: 'Describe the story of the House of Thebes from Cadmus to Oedipus. What recurring themes run through this saga?',
    answer: `The Theban saga begins with Cadmus, a Phoenician prince who is sent to search for his sister Europa (abducted by Zeus as a bull and taken to Crete). The Delphic oracle tells him to abandon the search and instead follow a cow, founding a city wherever it lies down — in Boeotia, on the Greek mainland. He kills a dragon sacred to Ares guarding a sacred spring, sows its teeth, and from the earth spring the Spartoi ("sown men") — armed warriors who fight each other until five survive. These five become the ancestors of Thebes's noble families. Cadmus marries Harmonia, daughter of Ares and Aphrodite, in a ceremony attended by the Olympian gods — one of the few such divine honors granted to a mortal.

His descendants suffer a cascade of divine punishments. His daughter Semele, impregnated by Zeus, is destroyed when tricked by Hera into demanding Zeus appear in his full divine form. Another daughter Agave, in a Dionysiac frenzy, tears apart her own son Pentheus who had forbidden Dionysus's worship (Euripides' Bacchae). The house continues through Labdacus to Laius, who is warned by Delphi that his son will kill him. He and Jocasta expose the infant Oedipus, who survives, fulfills the prophecy unknowingly, answers the Sphinx's riddle, rules Thebes, and then discovers in horror the truth of his actions. He blinds himself and goes into exile. His sons Eteocles and Polynices fight over the throne, both dying in single combat in the war of the Seven Against Thebes; their sons, the Epigoni, successfully sack the city in the next generation. The saga is unified by the themes of inherited guilt and the inescapability of divine curses across generations; of human attempts to circumvent fate that only fulfill it; and of knowledge — specifically the gap between what humans know and what the gods know.`,
  },
  {
    category: 'underworld',
    categoryLabel: 'Underworld',
    question: 'Compare the portrayal of the underworld in Homer\'s Odyssey, Vergil\'s Aeneid, and Plato\'s Myth of Er. What do the differences reveal?',
    answer: `In Homer's Odyssey Book 11, the underworld is a place of grim uniformity and moral indifference. The dead are pale, strengthless shades who lack even consciousness until they drink blood. Most are simply present — not punished, not rewarded, simply persisting in a grey and purposeless existence. There is no moral economy to Homeric death: ordinary people simply continue in a diminished form. Only a handful of famous sinners (Tantalus, Sisyphus, Tityos) are visibly punished, and their crimes were directed against the gods themselves, not against other humans. A few outstanding heroes inhabit Elysium. The overall impression is deeply bleak: death is the loss of everything that makes life meaningful, and virtue in life earns no special reward beyond it.

Vergil's Aeneid Book 6 transforms this into a much more structured moral landscape. There is a clearly delineated Tartarus for the wicked, Elysium for the heroic and virtuous, and — crucially and innovatively — the plain of Lethe where souls await reincarnation after a thousand years. The underworld serves an explicitly political purpose: Anchises shows Aeneas the parade of future Roman heroes, converting the entire descent into a prophecy of Roman imperial greatness. The moral categories are sharper and more systematic than in Homer; the punishments are more varied and more richly imagined.

Plato's Myth of Er (Republic Book 10) is the most morally systematic of all: souls are judged after death, punished or rewarded for precisely ten times the good or evil they did in life (a period of one thousand years), and then choose their next lives. The greatest criminals — especially tyrants — receive the most terrible punishment. The myth is explicitly philosophical, written to argue that living justly is necessary because death brings absolute moral accountability. Taken together, the progression from Homer to Vergil to Plato traces an evolution from amoral persistence, through moral differentiation in service of Roman ideology, to a fully rationalized philosophical system of cosmic justice.`,
  },
  {
    category: 'theory',
    categoryLabel: 'Theory',
    question: 'Explain and critically evaluate three different theoretical approaches to interpreting myth, using specific examples from Greco-Roman mythology in each case.',
    answer: `Three of the most important theoretical frameworks for interpreting myth are the etiological approach, the psychoanalytic approach, and structuralism, each of which illuminates different dimensions of the myths we study while leaving others in shadow.

The etiological approach (from Greek aitia, "cause") reads myths as explanations of origins — physical, social, or ritual. A clear example is the Homeric Hymn to Demeter: the story of Demeter's grief-stricken search for Persephone and her temporary withdrawal from the world explains both the existence of the seasons and the founding of the Eleusinian Mysteries. Apollo's killing of the serpent Python at Delphi explains why the oracle is called the Pythian oracle and why the priestess is the Pythia. The strength of this approach is that it grounds myth in historically real religious practice; its weakness is that many myths have no clear etiological function whatsoever and cannot be explained this way.

The psychoanalytic approach, developed by Freud and extended by Jung, reads myth as the expression of deep psychological needs and structures. Freud's Oedipus complex is named directly after the Greek myth — the story of a man who unknowingly kills his father and marries his mother expresses, according to Freud, repressed desires that all humans carry. Jung's concept of the collective unconscious suggests that recurring mythic images — the hero, the great mother, the trickster, the shadow — are archetypes reflecting universal patterns in human psychology that surface independently across unrelated cultures. This can explain the remarkable cross-cultural parallels (Hesiod's succession myth and the Hurrian Kumarbi myth, for instance). Its weakness, identified by Malinowski, is over-generalization: it cannot account for the specific cultural meanings and social functions myths serve in particular communities.

Structuralism, developed most famously by Lévi-Strauss, argues that myths are a mechanism for mediating fundamental binary oppositions in human thought: raw versus cooked, nature versus culture, mortal versus immortal, male versus female. In Hesiod's Theogony one can read the entire narrative as a movement from female-dominated primordial power (Gaia, Rhea) to male-dominated civic order (Zeus's rule through law and cunning), with Zeus ultimately incorporating feminine wisdom by literally swallowing Metis. The approach is useful for identifying universal structures but has been criticized for imposing the analyst's own cultural binary categories onto ancient texts.`,
  },
  {
    category: 'theory',
    categoryLabel: 'Theory',
    question: 'What is myth? Discuss the difficulties of defining it using examples from the course, and explain the three modern categories of Greco-Roman myth.',
    answer: `The English word "myth" derives from the Greek mythos, meaning simply word, speech, tale, or story — a definition so broad it encompasses almost all verbal communication, and therefore too broad to be analytically useful. There is no universally accepted scholarly definition of myth, and this fact is itself significant: it reveals that myth is not a fixed genre but a culturally embedded and functionally diverse form of human expression. One useful working definition is that myths are stories (transmitted through text, art, music, dance, film, or oral performance) that express certain universal or communal truths about human nature, the cosmos, and existence — truths that may not be empirically verifiable but that speak to deeply felt aspects of experience.

This contrasts with the common misconception that myths are simply fantastical stories that are "not true." The Greeks and Romans did not easily separate historical truth from mythological truth — Homer's audiences likely believed the Trojan War happened roughly as described, and many ancient sources treat the genealogies of gods and heroes as genuine history. On a deeper level, even clearly fantastical elements of myth — Eros shooting arrows to cause love — express something genuinely and universally experienced: the irrational, involuntary, overwhelming power of desire. The fantastic vehicle carries a true cargo.

Modern scholars typically divide Greco-Roman myths into three overlapping categories: Myth Proper (stories dealing primarily with the gods and humans' relationship to them — the Homeric Hymns are the clearest examples); Saga or Legend (stories with at least a perceived connection to real historical events or places — the Theban saga, the Trojan War, which likely derives from a real Late Bronze Age conflict at the site of Troy); and Folktale (tales of fantastical adventure featuring heroes or heroines — the Labors of Heracles). Homer's Iliad is simultaneously all three. The boundaries between these categories are porous and the categories themselves overlap constantly, but they provide a useful starting framework for analysis.`,
  },
];

export const GODS_TABLE: God[] = [
  { greek: 'Zeus', roman: 'Jupiter', domain: 'Sky, storm, thunder, victory, justice, prophecy', symbols: 'Thunderbolt, eagle, oak tree, scales', myths: 'Succession myths; Danae, Europa, Io, Ganymede; Judgment of Paris (delegated)', color: 'gold' },
  { greek: 'Hera', roman: 'Juno', domain: 'Marriage, queens, jealousy, childbirth', symbols: 'Peacock, cow, pomegranate, sceptre', myths: 'Jealous pursuit of Zeus\'s lovers (Io, Callisto); supports Greeks throughout Trojan War', color: 'terra' },
  { greek: 'Poseidon', roman: 'Neptune', domain: 'Sea, earthquakes, horses', symbols: 'Trident, horse, bull, dolphin', myths: "Blinded Cyclops's father; built Troy's walls; supports Greeks; father of Polyphemus", color: 'slate' },
  { greek: 'Demeter', roman: 'Ceres', domain: 'Grain, agriculture, fertility, seasons, Mysteries', symbols: 'Wheat sheaf, torch, poppy', myths: 'Search for Persephone; founding of Eleusinian Mysteries; linked to ending cannibalism', color: 'olive' },
  { greek: 'Apollo', roman: 'Apollo', domain: 'Sun, prophecy, music, healing, purification, youth, archery', symbols: 'Lyre, laurel, bow and arrow, silver bow', myths: 'Daphne; Hyacinthus; Coronis/Asclepius; Marsyas; Marpessa; Cyrene; founded Delphi', color: 'gold' },
  { greek: 'Artemis', roman: 'Diana', domain: 'Wilderness, hunting, moon, virginity, childbirth, sudden death', symbols: 'Bow and arrow, deer, crescent moon, hunting dog', myths: 'Actaeon; Niobe; Callisto; Orion; Arethusa; Brauron/Arkteia festival', color: 'olive' },
  { greek: 'Athena', roman: 'Minerva', domain: 'Wisdom, strategic war, craft, civilization, cities', symbols: 'Helmet, spear, aegis (Gorgon shield), owl, olive tree', myths: 'Born from Zeus\'s head; Arachne; Tiresias; Trojan Horse; patron of Odysseus and Athens', color: 'slate' },
  { greek: 'Aphrodite', roman: 'Venus', domain: 'Erotic love, procreation, beauty, desire, seduction', symbols: 'Dove, sparrow, rose, myrtle, seashell', myths: 'Anchises/Aeneas; Adonis; Pygmalion/Galatea; Hippolytus; Paris and Helen', color: 'terra' },
  { greek: 'Ares', roman: 'Mars', domain: 'War (destructive, brutal); Mars also: crops, harvest, Rome', symbols: 'Spear, helmet, vulture, dog', myths: 'Wounded by Diomedes in Iliad; lover of Aphrodite; almost no myth role. Mars: father of Romulus', color: 'terra' },
  { greek: 'Hephaestus', roman: 'Vulcan', domain: 'Fire, the forge, craftsmanship, technology', symbols: 'Hammer, anvil, tongs, forge, fire', myths: "Made Achilles' armour; trapped Ares & Aphrodite in golden net; built Olympus's palaces", color: 'gold' },
  { greek: 'Hermes', roman: 'Mercury', domain: 'Messenger, travel, thieves, commerce, psychopompos (guide of souls)', symbols: 'Winged sandals, caduceus, petasos hat, golden wand', myths: "Psychopompos; stole Apollo's cattle as infant; guide Odysseus; Homeric Hymn to Hermes", color: 'slate' },
  { greek: 'Dionysus', roman: 'Bacchus', domain: 'Wine, theatre, ecstasy, madness, fertility, liberation', symbols: 'Grapevine, thyrsus, leopard, ivy, drinking cup', myths: 'Twice-born; Pentheus and Bacchae (Euripides); associated with Orpheus', color: 'terra' },
  { greek: 'Hades', roman: 'Pluto / Dis', domain: 'Underworld, rule of the dead, wealth (plutos = wealth)', symbols: 'Helm of invisibility, two-pronged staff, Cerberus, cypress', myths: 'Abduction of Persephone; Sisyphus tricks; Orpheus visits; Psyche delivers Persephone\'s box', color: 'slate' },
  { greek: 'Persephone', roman: 'Proserpina', domain: 'Queen of underworld, spring growth, grain', symbols: 'Pomegranate, sheaf of wheat, torch', myths: 'Abducted by Hades; explains the seasons; receives and guards Psyche\'s box of beauty', color: 'olive' },
  { greek: 'Eros', roman: 'Cupid', domain: 'Love (primordial force in Hesiod; mischievous son of Venus in later myth)', symbols: 'Bow, arrows (gold = love / lead = repulsion), wings', myths: 'Daphne (strikes Apollo); Psyche; appears as cosmic force in Hesiod\'s Theogony', color: 'terra' },
  { greek: 'Kronos', roman: 'Saturn', domain: 'Time (later), Titans, agriculture', symbols: 'Sickle, hourglass (later Roman), grain', myths: 'Castrated Ouranos; swallowed his children; defeated by Zeus; Second Succession Myth', color: 'gold' },
  { greek: 'Prometheus', roman: '(no direct equiv.)', domain: 'Fire, technology, benefactor of humanity', symbols: 'Fire, fennel stalk, chains, eagle', myths: 'Tricked Zeus at sacrifice; stole fire for humanity; Pandora created as punishment', color: 'olive' },
];

export const TIMELINE: TimelineItem[] = [
  { date: '~40,000 BCE', title: 'People first enter Greece', desc: 'Neolithic period. Around 6500 BCE: agriculture in early Neolithic (Late Stone Age). These inhabitants were not yet Greek speakers.' },
  { date: '3000–1600 BCE', title: 'Early & Middle Bronze Ages', desc: 'Bronze technology transforms tools and weapons. Greek speakers arrive in Greece during this period. Sumerian and Akkadian civilizations of Mesopotamia far more advanced than anything in Greece at this point.' },
  { date: '1600–1150 BCE', title: 'Late Bronze Age — Mycenaean', desc: 'Most important period for mythology. Arthur Evans discovers Knossos palace on Crete (1899). Minoan civilization heavily influences mainland Mycenaean culture. Many roots of Trojan War myths trace here. Mycenaean kingdoms flourish ca. 1600–1150 BCE.', importance: 'high' },
  { date: 'ca. 1200 BCE', title: 'Collapse of Mycenaean civilization', desc: 'For reasons not entirely clear — possibly invasion, climate, internal collapse — Mycenaean civilization collapses. Greece enters what historians call a "dark age."' },
  { date: '1150–900 BCE', title: 'Dark Age', desc: 'Political and cultural impoverishment. Notable achievements: mastery of iron technology; development of the alphabet; new shapes and designs in pottery. Oral transmission of myths continues.' },
  { date: '750–500 BCE', title: 'Archaic Period — myths first written down', desc: 'Myths first recorded in writing, sometime in late 8th or early 7th century BCE. Hesiod and Homer compose during this period. These are the first surviving written versions. Colonization, expansion, innovation characterize this era.', importance: 'high' },
  { date: '500–323 BCE', title: 'Classical Period', desc: 'Dominated by Athenian perspective. The three great tragedians — Aeschylus, Sophocles, and Euripides — deal primarily with mythological themes. Dramatic performances of myth in Athens become a major cultural institution.', importance: 'high' },
  { date: '323–30 BCE', title: 'Hellenistic Period', desc: 'Begins after Alexander the Great\'s death (323 BCE), ends with Cleopatra\'s death (30 BCE). Greek scholarship and study of literary past begins in earnest. Myths retold and recorded in many versions simultaneously.' },
  { date: '753–27 BCE', title: 'Foundation of Rome / Roman Republic', desc: 'Traditional founding date 753 BCE. First Roman literature: Plautus and Terence (comic plays). Late Republic: Lucretius, Catullus, Cicero, Sallust — all active. Roman literature draws on Greek myth.' },
  { date: '27 BCE–200 CE', title: 'Early & High Roman Empire', desc: 'Rise of Augustus (27 BCE). Vergil (Aeneid) and Ovid (Metamorphoses) rise to fame — our most important Roman literary sources for mythology. Apuleius writes ca. 2nd century CE.', importance: 'high' },
];

export const THEORIES: TheoryItem[] = [
  {
    name: 'Etiology',
    thinker: 'General ancient approach',
    summary: "Myths explain causes or origins (Greek 'aitia' = cause).",
    detail: "Etiological reading interprets myths as explanations of origins — physical, social, or ritual. The Homeric Hymn to Demeter explains the founding of the Eleusinian cult and the origin of the seasons. Apollo's killing of the Python at Delphi explains why the oracle and its priestess are called Pythian. Aphrodite's name 'aphros' (foam) is explained by her birth from sea foam. The Spartoi explain Thebes's noble lineages.",
    strength: 'Directly connects myth to historically real religious practices and institutions.',
    weakness: 'Cannot explain myths with no clear etiological function; many myths simply tell stories without explaining origins.',
  },
  {
    name: 'Allegory & Symbolism',
    thinker: 'Max Müller (19th c.)',
    summary: 'Myths symbolically represent aspects of human nature and universal truths, or (Müller) natural phenomena.',
    detail: 'Müller and his followers read all myths as allegories of cosmological/natural phenomena: Apollo = the sun, his arrows = sunrays, Daphne\'s transformation into a laurel = the disappearance of the dawn. The disguise Aphrodite uses to fool Anchises represents the deceptive side of erotic love. More broadly, allegorical reading finds universal truths behind the individual narrative details.',
    strength: 'Can explain mythic patterns that recur across cultures as expressions of shared human experience.',
    weakness: 'Far too reductive — most myths cannot be mapped onto natural phenomena. Müller\'s readings now considered pseudoscientific.',
  },
  {
    name: 'Psychoanalysis — Freud',
    thinker: 'Sigmund Freud',
    summary: 'Myths fulfill repressed wishes and desires, like dreams. The Oedipus complex is its founding example.',
    detail: 'Freud connected dreams and myths directly: both fulfill repressed wishes and desires, both condense and displace the content of the unconscious. His most famous application is the Oedipus complex — the Greek myth expresses the repressed desire that all children (boys especially) feel to possess their mothers and eliminate their fathers. Myth is "a waking attempt to understand and explain the impulses of the dream world."',
    strength: "Explains why certain mythic patterns (the hero's journey, incest taboo stories) appear across cultures.",
    weakness: "Over-generalizes; too centered on sexuality; fails to account for cultural specificity. Malinowski's decisive critique.",
  },
  {
    name: 'Psychoanalysis — Jung',
    thinker: 'Carl Jung',
    summary: "Myths project humanity's collective unconscious. Mythic images are universal archetypes.",
    detail: "Jung extended Freud: myths are not just expressions of individual unconscious desire but projections of the collective unconscious — the shared unconscious tendencies and fears of all humanity. Recurring mythic figures (the Hero, the Great Mother, the Shadow, the Wise Old Man, the Trickster) are archetypes: deep structural patterns that surface across all cultures' mythologies independently because they are embedded in the human psyche itself.",
    strength: 'Better accounts for cross-cultural parallels than Freud; less reductively sexual; applicable to art and literature broadly.',
    weakness: "Also over-generalizes; the 'archetypes' may reflect Jungian categories more than universal human structures.",
  },
  {
    name: 'Myth & Society',
    thinker: 'Frazer & Malinowski',
    summary: 'Myth is inseparable from the social and ritual context of the culture that produced it.',
    detail: "J.G. Frazer (The Golden Bough) drew a direct link between myth and religious ritual — they are two sides of the same cultural coin. Bronisław Malinowski (Polish anthropologist) argued more radically that you must live within a culture to understand its myths at all. Myths do not have universal meanings: they are functional stories that reflect specific social customs, beliefs, and practices. The Eleusinian Mysteries cannot be understood without the Demeter myth, and vice versa.",
    strength: "Respects cultural particularity; explains why myths differ so significantly across cultures; grounds myth in lived practice.",
    weakness: "Makes cross-cultural comparison difficult; may underplay the genuine structural parallels between different cultures' myths.",
  },
  {
    name: 'Structuralism',
    thinker: 'Claude Lévi-Strauss (& Vladimir Propp)',
    summary: 'Myths are mechanisms for mediating fundamental binary oppositions in human thought.',
    detail: "Propp identified recurring structural sequences ('functions') in folk tales that appear across cultures. Lévi-Strauss argued more broadly that all social interactions — and myths — are organized around fundamental binary oppositions: raw/cooked, nature/culture, mortal/immortal, male/female. These binary structures appear beneath the surface of all cultures' myths. Applied to Hesiod: the Theogony traces a movement from female-dominated primordial power (Gaia, Rhea) to male-dominated civic order (Zeus), with Zeus eventually incorporating female wisdom by swallowing Metis.",
    strength: "Finds universal structural patterns; enables systematic cross-cultural comparison; reveals hidden organizing principles.",
    weakness: 'Criticized for imposing the analyst\'s own cultural categories; may be too rigid and reductive; denies cultural specificity.',
  },
  {
    name: 'Walter Burkert\'s Synthesis',
    thinker: 'Walter Burkert',
    summary: 'Grounds structuralist and psychological approaches in specific historical and religious context.',
    detail: "Burkert argued that myth cannot be separated from the particular culture that produced it — historical and religious context is essential. At the same time, he acknowledged that myths can share structural sequences across cultures and that universal human concerns (violence, sexuality, kinship, death) inevitably surface in myths everywhere. His approach is deliberately synthetic: it accepts the insights of structuralism, psychology, and the society-ritual school, while insisting that all such interpretations be grounded in historical particularity.",
    strength: 'Most inclusive and intellectually flexible approach; respects both universal patterns and cultural particularity.',
    weakness: 'Less theoretically radical than the approaches it synthesizes; may be too eclectic to generate bold new readings.',
  },
  {
    name: 'Feminist Approaches',
    thinker: 'Various 20th-21st c. scholars',
    summary: 'Focus on the psychological and social situations of female characters; question patriarchal assumptions.',
    detail: "Over the past century, feminist scholars have interrogated the assumptions embedded in Greco-Roman myths about women, gender, and sexuality. Myths like Pandora (the first woman as a punitive creation whose curiosity brings evil), the Actaeon myth (in which a woman's privacy is the supreme value requiring lethal enforcement), and the Callisto myth (in which a rape victim is punished twice — by expulsion and transformation) reveal deeply patriarchal social structures. Reading these myths through a feminist lens does not 'correct' them but exposes the social values they were written to reinforce.",
    strength: "Recovers suppressed perspectives; reveals the ideological work myths do in maintaining social hierarchies.",
    weakness: "Risk of anachronism — applying modern categories to ancient texts. Best practiced with historical grounding.",
  },
];

// Additional decks appended
export const EXTRA_DECKS: Deck[] = [
  {
    name: 'Heroes & Mortals',
    color: 'terra',
    cards: [
      { q: "What is Achilles' central choice?", a: "Short glorious life at Troy with imperishable kleos, or long obscure life at home. He chose Troy.", sub: "His menis (wrath) is the first word of the Iliad — it structures the entire poem" },
      { q: "What is Odysseus's defining quality?", a: "Polytropos — 'the man of many ways/wiles.' He survives through cunning, intelligence, and adaptability.", sub: "Athena's favourite; opposite of Achilles in every respect" },
      { q: "What are the Twelve Labors of Heracles?", a: "1.Nemean Lion 2.Lernaean Hydra 3.Erymanthian Boar 4.Ceryneian Hind 5.Stymphalian Birds 6.Augean Stables 7.Cretan Bull 8.Mares of Diomedes 9.Belt of Hippolyta 10.Cattle of Geryon 11.Apples of Hesperides 12.Cerberus", sub: "Performed as penance for killing his own wife and children in Hera-sent madness" },
      { q: "How does Heracles die?", a: "The centaur Nessus tricks his wife Deianira into smearing his robe with Nessus's blood (actually poison). Heracles puts on the robe and is consumed. He burns himself on a pyre on Mt. Oeta and is apotheosized.", sub: "The greatest hero destroyed by love and a shirt — Sophocles' Women of Trachis" },
      { q: "Who are Perseus's divine helpers and their gifts?", a: "Athena: mirrored shield. Hermes: winged sandals and cap of invisibility. The Graeae led him to the Nymphs.", sub: "Perseus = archetypal quest hero; he beheads Medusa and rescues Andromeda" },
      { q: "What is Theseus's greatest deed and what city is he connected to?", a: "Killed the Minotaur in the Labyrinth of Crete using Ariadne's thread. He is the founding hero of Athens.", sub: "Also: united Attica; descended to Underworld to steal Persephone (got stuck until Heracles freed him)" },
      { q: "What makes Jason morally ambiguous?", a: "He succeeds largely through Medea's supernatural help, then abandons her for a Corinthian princess. Success through others' sacrifice, then betrayal.", sub: "Euripides' Medea: she kills her own children to punish Jason's betrayal" },
      { q: "What is Aeneas's defining virtue?", a: "Pietas — duty to the gods, to family, and to the state. He carries his father on his back from burning Troy.", sub: "Contrast with Achilles (individual honor/kleos) — this is the Roman heroic ideal" },
      { q: "How does Hector differ from Achilles as a hero?", a: "Hector fights not for personal glory (kleos) but for family and city. He is the most humanly sympathetic figure in the Iliad — a defender, not a glory-seeker.", sub: "His farewell to wife Andromache and infant son Astyanax (Iliad Book 6) is one of the most moving scenes in epic poetry" },
      { q: "What is the significance of Oedipus solving the Sphinx's riddle?", a: "Intelligence, not physical strength, is his heroic power. But that same relentless intelligence drives his discovery of the truth about himself — knowledge becomes catastrophe.", sub: "The riddle answer (Man) is deeply ironic: Oedipus does not know what 'man' fully means until the end" },
    ],
  },
  {
    name: 'Roman Mythology',
    color: 'slate',
    cards: [
      { q: "What is the Aeneid's central purpose?", a: "To create a founding myth for Rome — tracing the Roman people back to Troy through Aeneas, divine son of Venus, whose descendants include Romulus, Remus, and ultimately Augustus.", sub: "Vergil wrote it in the Augustan age (27 BCE–14 CE); it served political as well as literary purposes" },
      { q: "What does Aeneas see in the Underworld in Aeneid Book 6?", a: "His father Anchises shows him the parade of future Roman heroes (the souls awaiting rebirth) — Romulus, Augustus, future emperors — a prophecy of Roman greatness.", sub: "The golden bough must be obtained first; the Sibyl of Cumae guides him" },
      { q: "What is the Roman concept of pietas?", a: "Duty — to the gods, to family, and to the state. The supreme Roman virtue, embodied by Aeneas (pius Aeneas).", sub: "Contrast to Greek kleos (individual glory) — Roman heroism is collective and duty-bound" },
      { q: "How do Roman authors relate to Greek mythology?", a: "Roman literature draws extensively on Greek myth but adapts it for Roman purposes — not slavishly copying but transforming to encode Roman values, history, and political ideology.", sub: "Vergil's Aeneid, Ovid's Metamorphoses, and Apuleius's Golden Ass are major examples" },
      { q: "What is Mars's significance to Romans vs. Ares to Greeks?", a: "Romans: Mars = victorious war + crops/harvest + father of Romulus and Remus (Rome's founders). Greeks: Ares = hated, destructive god with almost no cult significance.", sub: "The same deity is culturally transformed entirely by a different society's values" },
      { q: "Who was Romulus?", a: "Founder of Rome (traditionally 753 BCE). Son of Mars and the Vestal Virgin Rhea Silvia. Twin of Remus. Suckled by a she-wolf. Killed Remus and named the city after himself.", sub: "His deification after death = apotheosis as the god Quirinus" },
      { q: "What is Ovid's Metamorphoses about?", a: "15 books retelling Greek and Roman myths from the Creation to Julius Caesar's apotheosis, unified by the theme of transformation (metamorphosis).", sub: "Key myths: Daphne, Actaeon, Niobe, Arachne, Orpheus, Pygmalion, Adonis, Callisto, Hyacinthus, Narcissus, Echo" },
      { q: "What is distinctive about Apuleius's treatment of Isis?", a: "Isis delivers a famous syncretic speech in which she identifies herself as the universal goddess behind all divine names — 'the single form of the gods and goddesses.' She encompasses all female divine power.", sub: "Key text for understanding mystery religions and late antique religious syncretism" },
      { q: "What does the Homeric Hymn to Aphrodite reveal about Near Eastern influence?", a: "Aphrodite corresponds closely to Sumerian Inanna and Akkadian Ishtar. Her major cult center was Cyprus — a Near Eastern gateway into Greece. In the Descent of Inanna, animals stop mating when she is absent, paralleling Aphrodite's power over nature.", sub: "Aphrodite was deeply influenced by Near Eastern goddess traditions" },
      { q: "What is in Medias Res and which epics use it?", a: "Latin: 'into the middle of things.' Beginning a narrative in the middle of the action. Homer's Iliad begins in year 10 of the war; the Odyssey begins with Odysseus already held by Calypso for 7 years.", sub: "Vergil's Aeneid also uses it. Horace codified it as the proper technique for epic in Ars Poetica" },
    ],
  },
  {
    name: 'Creation & Cosmology',
    color: 'gold',
    cards: [
      { q: "What emerged first from Chaos in Hesiod's Theogony?", a: "Gaia (Earth), Tartaros (dark underworld), and Eros (love) — along with Erebos (dark gloom) and Night.", sub: "Chaos itself is described as a 'yawning void' — not a person but a primordial state" },
      { q: "The Titans — who are they and who is most important?", a: "Second generation of gods, children of Gaia and Ouranos. 12 Titans including Ocean, Kronos, Rhea, Themis, Mnemosyne. Kronos is most important — overthrows Ouranos and later is overthrown by Zeus.", sub: "Ocean = water; Hyperion = sun; Rhea and Kronos = earth and sky" },
      { q: "The Five Ages of Humanity — name them in order", a: "1. Golden Age (close to gods, Kronos rules) → 2. Silver Age (pleasant but below Golden) → 3. Bronze Age (warlike) → 4. Age of Heroes (Trojan War heroes — inserted by Hesiod) → 5. Iron Age (Hesiod's own corrupt time).", sub: "Ovid has only 4 ages (no Age of Heroes). Each age represents moral decline from the previous." },
      { q: "What is the Hurrian parallel to the Greek succession myth?", a: "In Hurrian mythology (south-east Asia Minor), the sky god Anu is castrated by Kumarbi, who then swallows parts of him — very close parallel to Ouranos and Kronos. Shows cross-cultural transmission.", sub: "Hurrian culture was assimilated into Hittite culture, which influenced Greek traditions" },
      { q: "How does Aphrodite fit into the creation story?", a: "She is born from sea foam around the severed genitals of Ouranos when Kronos throws them into the sea — she is older than the Olympians. This is Hesiod's version; Homer makes her daughter of Zeus and Dione.", sub: "Her birth from sea foam explains her name: 'aphros' = foam in Greek" },
      { q: "What are the primordial beings (not Titans, not Olympians)?", a: "Chaos; Gaia (Earth); Tartaros; Eros; Erebos; Night; then from Night and Erebos: Day and Aither (bright upper air).", sub: "These are abstractions that become personified — they represent the basic structure of existence" },
      { q: "How does Prometheus trick Zeus at sacrifice?", a: "Wraps the meaty portion of the sacrificed ox in the stomach (unattractive), wraps the bones in white fat (attractive). Zeus chooses the bones/fat, establishing that gods receive the smoke of fat and bones while humans eat the meat.", sub: "This is why in Greek religion the gods received the fat and bones burned on altars" },
      { q: "What does Pandora represent in Hesiod's account?", a: "The first woman, created by Hephaestus at Zeus's command as punishment for Prometheus's theft of fire. She opens a jar releasing all evils; only Hope remains inside. Hesiod's account is deeply misogynistic.", sub: "Pandora parallels Eve in Genesis — both are women associated with the entry of suffering into the world" },
      { q: "What was in Pandora's jar and why does Hope remain?", a: "All the evils and diseases that afflict humanity. Pandora closes the lid before Hope (Elpis) can escape — it remains in the jar. The significance is debated: is Hope inside the jar a positive or negative thing?", sub: "This is one of the course's key open interpretive questions — the ambiguity is intentional" },
      { q: "Binary opposites in Hesiod's Theogony — give three", a: "Male/female (Ouranos/Gaia); father/son (across all succession myths); sky/earth; order/chaos; matriarchal origins/patriarchal outcome. These are Lévi-Strauss's structural approach applied to the text.", sub: "Zeus's rise represents the triumph of patriarchal order — but he achieves it by incorporating female wisdom (swallowing Metis)" },
    ],
  },
];

// ─── PDF-module specific flashcard decks ────────────────────────────────────

export const PDF_DECKS: Deck[] = [
  {
    name: 'Apollo — Key Facts',
    color: 'terra',
    cards: [
      { q: 'What are Apollo\'s six main domains?', a: 'Youth and male beauty, music/poetry, healing and purification, prophecy, archery, revenge and pestilence', sub: 'He is always depicted young, beardless, and athletic — the ideal of Greek masculinity' },
      { q: 'What is the paradox of Apollo\'s nature?', a: 'He is simultaneously the god of healing AND the god of plague and pestilence — his arrows bring sudden death to men, yet he also cures disease', sub: 'At the start of the Iliad he rains plague on the Greeks; Asclepius his son is the god of medicine' },
      { q: 'Why was Apollo born on Delos?', a: 'Leto was rejected everywhere due to Hera\'s jealousy. Delos alone swore an oath to host him, and Delos would be his first shrine. This is the aiton (etiological explanation) for the Delian cult.', sub: 'Apollo\'s actual shrine on Delos was founded around the eighth century BCE' },
      { q: 'What does "Pytho/Pythios" mean, and how does it explain the name Delphi?', a: 'Pytho derives from pythein = "to rot." Apollo killed a great snake (Python) near Mt. Parnassos; its rotting carcass gave the site its name. Apollo = Pythios; his prophetess = the Pythia.', sub: 'The dolphin disguise explains the name "Delphi"' },
      { q: 'Who is the Pythia and what is her role?', a: 'Apollo\'s prophetess at Delphi, appointed for life, expected to remain a virgin, made oracular pronouncements on the 7th day of each month (day sacred to Apollo)', sub: 'Delphi was a panhellenic cult — consulted by individuals and city-states throughout Greece' },
      { q: 'What is the Homeric Hymn to Apollo about, and how many parts does it have?', a: 'Two distinct parts: (1) the Delos section — explains Apollo\'s birth and the founding of the Delian cult; (2) the Delphi section — explains how Apollo killed the Python and founded the oracle', sub: 'Both parts are etiological (aiton = cause/explanation) for actual historical cults' },
      { q: 'What are the five longest Homeric Hymns in order?', a: '1) Dionysus (fragmentary), 2) Demeter, 3) Apollo, 4) Hermes, 5) Aphrodite', sub: 'There are 33 Homeric Hymns total; they were used as preludes to epic recitations at festivals' },
      { q: 'What happens in Apollo\'s love affair with Marpessa, and what is the theme?', a: 'Zeus gives Marpessa the choice between Apollo (a god) and Idas (a mortal). She chooses Idas because gods are immortal and will outlive mortals — she prefers love that ends together.', sub: 'This introduces the recurring theme in Apollo\'s myths: the incompatibility of mortality and immortality' },
      { q: 'What causes Apollo to fall in love with Daphne?', a: 'Apollo mocks Cupid\'s archery. Cupid retaliates: a gold arrow (love) strikes Apollo, a lead arrow (repulsion) strikes Daphne. Apollo pursues; she flees, prays to her father the river Peneus, and is transformed into a laurel tree.', sub: 'The laurel = Apollo\'s sacred tree, explains why he wears a laurel crown. Apollo\'s hubris caused his own suffering.' },
      { q: 'How does Asclepius come to be born?', a: 'Apollo falls for Coronis, who cheats on him. Apollo\'s crow reports this. He kills Coronis with an arrow but repents — unable to save her, he rescues his unborn son from her corpse. Asclepius = god of medicine.', sub: 'Shows Apollo\'s dual revenge/healing nature most clearly' },
    ],
  },
  {
    name: 'Artemis — Key Facts',
    color: 'olive',
    cards: [
      { q: 'What is Artemis\'s paradox?', a: 'She is a virgin goddess yet is also connected to childbirth. Explained by her myth: she was born first on Ortygia and immediately helped deliver her twin brother Apollo on Delos — she becomes a midwife at her very first act.', sub: 'She also brings sudden death to women in childbirth (her arrows = sudden death for women, as Apollo\'s = sudden death for men)' },
      { q: 'What are Artemis\'s three main contrasts in the course?', a: '1) vs. Aphrodite (virgin vs. erotic love — Homeric Hymn to Aphrodite + Euripides\' Hippolytus). 2) vs. Athena (wilderness/nature vs. city/craft). 3) vs. Apollo (close partnership, but different domains)', sub: 'The Hippolytus myth = devotee of Artemis, rejects Aphrodite → Aphrodite destroys him' },
      { q: 'What is the Actaeon myth and what is most important about it?', a: 'Actaeon, a great hunter, accidentally stumbles on Artemis bathing on Mt. Cithaeron. She transforms him into a stag; his own hounds kill him. The crucial point: the transgression was ACCIDENTAL — death was still the punishment.', sub: 'Artemis\'s virginity admits no exceptions, not even for accidents. This is the defining harshness of her character.' },
      { q: 'Describe the Callisto myth and its outcome.', a: 'Callisto, a huntress-nymph in Artemis\'s band, is raped by Zeus disguised as Diana/Artemis. Her pregnancy is revealed at bathing; Artemis expels her. In Ovid: Hera turns her into a bear. Eventually becomes the constellation Ursa Major with her son Arcas.', sub: 'Callisto is entirely innocent yet still punished — the violation of a virginal state is abhorrent regardless of cause' },
      { q: 'What is the Arkteia and where did it take place?', a: 'A religious ceremony at Brauron (32 km SW of Athens) every four years, attended by women of Athens. Girls "played the bear" (arktos = bear) before marriage: saffron robes, sacrifice, processions, dancing, foot races.', sub: 'The festival initiated girls into the cult of a goddess who would play an important role in their lives as mothers' },
      { q: 'What happens to Orion at Artemis\'s hands?', a: 'Orion tries to rape Artemis. In anger, she makes a scorpion come out of the earth to sting him to death. He becomes the constellation Orion.', sub: 'In another version, Apollo tricks Artemis into shooting Orion herself by challenging her archery' },
      { q: 'How does Artemis save the nymph Arethusa?', a: 'Arethusa is a hunting nymph pursued by the river god Alpheus. She prays to Artemis, who covers her in a cloud that sinks underground and flows as a river to Sicily, where Arethusa becomes a spring.', sub: 'Ovid, Metamorphoses Book 5 — Artemis defends the virginity of her followers' },
    ],
  },
  {
    name: 'Aphrodite — Key Facts',
    color: 'terra',
    cards: [
      { q: 'What are the TWO versions of Aphrodite\'s birth?', a: '(1) Hesiod: from sea foam (aphros) around the severed genitals of Ouranos — primordial, older than Zeus. (2) Homer (Iliad 3): daughter of Zeus and Dione — this version subjugates her under Zeus\'s parentage.', sub: 'She first approaches Cythera, then sea-girt Cyprus. "Aphrodite" = foam-born.' },
      { q: 'What three character traits does Aphrodite share with Pandora?', a: 'Seductive charm, fertility, and deception — both figures are explicitly described with these traits in Hesiod', sub: 'This connection is important: both are associated with female power that brings disruption to a male world' },
      { q: 'Who are the three goddesses IMMUNE to Aphrodite\'s power?', a: 'Athena, Artemis, and Hestia — all virgin goddesses. This is stated at the opening of the Homeric Hymn to Aphrodite.', sub: 'The opening creates dramatic irony: Aphrodite, who cannot conquer these three, then falls to her own power when Zeus makes her love Anchises' },
      { q: 'Why does Zeus make Aphrodite fall in love with Anchises, and what is the result?', a: 'Zeus is fed up with Aphrodite boasting that she makes gods sleep with mortals. He humbles her by turning her own power against her. She falls for the mortal shepherd Anchises and their union produces Aeneas — future founder of Rome (Vergil\'s Aeneid).', sub: 'Central irony: Aphrodite cannot resist herself' },
      { q: 'What are Aphrodite\'s Near Eastern counterparts?', a: 'Sumerian Inanna and Akkadian Ishtar. Her major cult centre was Cyprus — a gateway between the Near East and Greece. In the Sumerian poem Descent of Inanna, animals stop mating when Inanna is absent (parallel to Aphrodite\'s power over nature).', sub: 'In the East she is always depicted clothed in elaborate jewellery; in the West she is better known nude' },
      { q: 'Who is Adonis, what is his origin, and what happens to him?', a: 'Near Eastern (Semitic "Adon" = Lord). Aphrodite hides him in a chest given to Persephone — Persephone falls in love with him too. Zeus decrees he splits the year between them. He represents seasonal death and rebirth. In Ovid: killed by a boar → becomes the anemone flower.', sub: 'Adonis connects Aphrodite directly to Persephone and the cycle of seasons' },
      { q: 'What is the myth of Pygmalion?', a: 'Pygmalion, disgusted with Cypriot women (who prostituted themselves as punishment from Aphrodite), falls in love with an ivory statue of his own making. He prays to Aphrodite; she animates the statue as Galatea, who bears him a son named Paphos.', sub: 'Ovid, Metamorphoses — basis for G.B. Shaw\'s Pygmalion and the musical My Fair Lady' },
    ],
  },
  {
    name: 'Athena — Key Facts',
    color: 'slate',
    cards: [
      { q: 'How is Athena born, and why does this matter?', a: 'Zeus swallows his first wife Metis (wisdom personified) to prevent a prophecy that their son would overthrow him. Athena is then born fully armed from Zeus\'s head. She is simultaneously born masculine (armed, from a father alone) yet is female.', sub: 'Hephaestus splits open Zeus\'s head with an axe in some accounts (Pindar, 7th Olympian Ode)' },
      { q: 'What is the fundamental distinction between Athena\'s war and Ares\'s war?', a: 'Athena = strategic, protective, civilizing war. She takes a thoughtful approach and serves as a protective goddess. Ares = destructive, brutal war that incites strife for its own sake. Zeus calls Ares "the most hateful of all gods."', sub: 'In Iliad Book 5, Athena helps Diomedes wound Ares — a mortal wounding a god, showing Athena\'s strategic superiority' },
      { q: 'What does "Athena Ergane" mean?', a: 'Ergane = "Craftmaker" in Greek. Athena Ergane is her aspect as patron of craft — both masculine (carpentry, building the Trojan Horse) and feminine (weaving). Along with Hephaestus, she was said to be the first to teach craft skills to humans.', sub: 'She is also called "Athena Polias" (Protectress of the City) — patron of Athens, which was named after her' },
      { q: 'Describe the myth of Arachne. What two things does it illustrate?', a: 'Arachne, a mortal weaver, matches or surpasses Athena\'s weaving skill. Athena challenges her; Arachne wins but Athena strikes her. Arachne hangs herself; Athena transforms her into a spider. (1) Etiological: explains why spiders weave. (2) Hubris: mortal competition against a god.', sub: 'Ovid, Metamorphoses — the match shows Athena\'s connection to craft; her rage shows her dangerous side' },
      { q: 'Why is Athena the patron of Odysseus?', a: 'Athena is the goddess of wisdom and craft (metis = cleverness in Greek, also her mother\'s name). Odysseus is the clever hero — polytropos (man of many wiles). She protects him throughout the Odyssey because he embodies her domain: intelligence over brute force.', sub: 'Athena appears as Mentor (a male figure) to guide Telemachus in the Odyssey' },
    ],
  },
  {
    name: 'Eros / Cupid & Theories',
    color: 'terra',
    cards: [
      { q: 'What are the TWO Eros figures in ancient tradition?', a: '(1) Hesiod\'s Eros: primordial cosmic force, present at the dawn of creation alongside Chaos, Gaia, and Tartaros — NOT the son of Aphrodite. (2) Classical/Hellenistic Eros: mischievous winged boy, son of Aphrodite, shoots gold and lead arrows.', sub: 'The module emphasizes this is a crucial distinction that is often tested' },
      { q: 'What does Plato say about Eros in the Symposium?', a: 'Eros is NOT a god — he is a daimon (spiritual being between god and mortal). His nature is between good and bad, beautiful and ugly. He facilitates communication between gods and humans. His parents are Resourcefulness (Poros) and Poverty (Penia).', sub: 'Plato\'s Symposium is the key philosophical treatment of Eros' },
      { q: 'What are Psyche\'s four impossible tasks set by Venus?', a: '1) Sort mixed grains by nightfall (ants help). 2) Gather golden fleece from dangerous sheep (a reed advises her). 3) Fetch water from the source of the Styx (Jupiter\'s eagle helps). 4) Bring a box of Persephone\'s beauty from the underworld (a tower gives instructions).', sub: 'Each task has a magical helper — but Psyche\'s own curiosity undoes her: she opens the box and falls into a death-like sleep' },
      { q: 'Who wrote the myth of Cupid and Psyche, and when?', a: 'Apuleius, in his Metamorphoses (also known as The Golden Ass), second century CE. This is NOT Ovid\'s Metamorphoses — a common confusion.', sub: 'Psyche = "soul" in Greek; the myth can be read as an allegory of the soul\'s journey toward divine love' },
      { q: 'Apply THREE theories to the myth of Cupid and Psyche.', a: '(1) Allegorical: Psyche = soul, Cupid = Love, her journey = soul\'s ascent to divine union. (2) Etiological: explains how Psyche was deified. (3) Freudian: Psyche\'s curiosity (opening the box, using the lamp) = forbidden desire disrupting idealized love.', sub: 'The myth rewards multiple interpretive frameworks — exactly what the exam long-answer questions ask for' },
      { q: 'What is the course\'s key example for EACH of the five main theories?', a: 'Etiology → Homeric Hymn to Demeter (Eleusinian Mysteries + seasons). Freud → Oedipus complex (Sophocles\' Oedipus Rex). Jung → archetypes across Greek myths. Malinowski → cultural specificity of any myth. Lévi-Strauss → Theogony (male/female binary).', sub: 'Burkert synthesis → grounds structuralism in historical/religious context. Feminist → Pandora, Actaeon, Callisto' },
    ],
  },
  {
    name: 'Myth Theories — Applied',
    color: 'slate',
    cards: [
      { q: 'Give the best Greco-Roman example for ETIOLOGY.', a: 'The Homeric Hymn to Demeter: explains (1) the origin of the seasons (Demeter\'s grief = winter) AND (2) why the Eleusinian Mysteries at Eleusis exist. Double etiological function from a single myth.', sub: '"Etiology" from Greek aitia (αἰτία) = cause' },
      { q: 'Give the best Greco-Roman example for PSYCHOANALYSIS (Freud).', a: 'The Oedipus myth: Freud named the Oedipus complex directly from Sophocles\' Oedipus Rex. The myth of a son who kills his father and marries his mother is taken by Freud as a universal unconscious wish-fulfillment.', sub: 'Freud quote from the module: "our dreams convince us that we were, King Oedipus, who slew his father Laius and wedded his mother Jocasta"' },
      { q: 'Give the best example for STRUCTURALISM (Lévi-Strauss).', a: 'Hesiod\'s Theogony: the poem is structured around the opposition between male and female throughout. Movement from Gaia\'s female-dominated origins to Zeus\'s male-dominated order. Zeus wins by incorporating female wisdom (swallowing Metis).', sub: 'Also: Prometheus myth — raw/cooked binary (the sacrifice trick with bones/fat vs. meat)' },
      { q: 'What is the key strength of Burkert\'s synthesis, and why is it "inclusive"?', a: 'Burkert recognizes universal truths AND accepts structuralism and psychology, while grounding these approaches in the specific historical and religious context of a society. He avoids both over-generalization (Freud/Müller) and excessive particularism (Malinowski).', sub: 'He insists: myth cannot be separated from its historical context' },
      { q: 'Name one myth that rewards FEMINIST interpretation and explain why.', a: 'Pandora (Hesiod, Works and Days): she is created as punishment for Prometheus\'s actions, is defined by deception and erotic charm, and is associated with the origin of human suffering. The myth encodes deep patriarchal assumptions about women as agents of misfortune.', sub: 'Also: Actaeon (punished for accidentally seeing a goddess); Callisto (punished for being raped)' },
      { q: 'What is Max Müller\'s approach and why is it criticized?', a: 'Müller (19th century) read ALL myths as allegories of natural/cosmological phenomena: Apollo = the sun, his arrows = sunrays, etc. Criticized because this approach "cannot explain the majority of what one encounters in Greco-Roman mythology" — it over-generalizes.', sub: 'The course\'s Aphrodite example: her disguise when seducing Anchises = allegorical representation of erotic love\'s deceptive power' },
    ],
  },
]

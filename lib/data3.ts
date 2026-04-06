// ─── Unit 1 & 2 Deep Dive Data ─────────────────────────────────────────────────
// Extracted directly from course PDFs: 1a, 1b, 1c, 2a, 2b, 2c, 3a, 3b, 3c, 4a, 4b, 4c, 4d

export interface ModuleDeepDive {
  code: string;
  title: string;
  color: 'gold' | 'terra' | 'olive' | 'slate';
  examWeight: 'high' | 'medium';
  coreArgument: string;
  sections: {
    heading: string;
    content: string;
    examTip?: string;
  }[];
  keyTerms: { term: string; definition: string }[];
  mustKnow: string[];
  likelyQuestions: string[];
}

export const MODULE_DEEP_DIVES: ModuleDeepDive[] = [
  // ── 1a ──────────────────────────────────────────────────────────────────────
  {
    code: '1a',
    title: 'Greco-Roman Mythology in the Modern World',
    color: 'olive',
    examWeight: 'medium',
    coreArgument: 'Greco-Roman myths are not dead artifacts — they are actively retold, adapted, and reshaped by every era. There is no single correct interpretation of a myth, and myths can mean different things to different audiences in different contexts.',
    sections: [
      {
        heading: 'What is Myth?',
        content: 'The English word "myth" derives from the Greek "mythos" (μῦθος), meaning word, speech, tale, or story. There is no universally accepted definition. In this course, myths are defined broadly as stories told through words, art, music, dance, and modern media (including film and television) that express certain universal truths about humanity and existence. One important misconception to guard against: myths are not simply "not true." Although fantastic, myths can be based in historical reality and can express profound emotional and social truths. The Trojan War may derive from an actual conflict at the city of Troy in the Troad (modern northwest Turkey).',
        examTip: 'If asked "what is myth?" — stress the broad definition (textual AND artistic), reject the "purely fictional" misconception, and mention the three categories below.'
      },
      {
        heading: 'Three Categories of Greco-Roman Myth',
        content: 'Modern scholars divide myths into three overlapping categories: (1) Myth Proper — stories dealing primarily with gods and humans\' relationship to them; the Homeric Hymns are the clearest examples. (2) Saga/Legend — stories with at least a perceived connection to history; e.g. the Theban saga (Thebes is a real city) and the Trojan War. (3) Folktale — tales of fantastical adventure involving heroes or heroines; e.g. the Labors of Heracles. These categories are NOT absolute — Homer\'s Iliad simultaneously qualifies as all three.',
        examTip: 'Know the three categories with one example each. The Iliad as all three is a key point from the module.'
      },
      {
        heading: 'Modern Reception: Percy Jackson',
        content: 'Rick Riordan\'s Percy Jackson series (beginning with The Lightning Thief, 2005) is used in the course as an example of modern mythological reception. Percy is a modern counterpart to Perseus — son of Poseidon, half-blood. Scholar Joanna Paul observes: "Any retelling of classical myth, whatever its audience, is necessarily embedded in and shaped by contemporary views of the classical past and its ongoing significance and presence in the modern world." This shows that ALL retellings — including ancient ones — are shaped by their context.',
        examTip: 'The Percy Jackson example is used to introduce the idea that myths are always adapted and there is never just one version.'
      },
      {
        heading: 'Myth vs. History vs. Fact',
        content: 'The Greeks and Romans did not easily separate historical truth from mythological truth. Although myths contain fantastic elements (divine intervention, monsters), they cannot simply be dismissed as false. The Greeks perceived myths as potentially containing historical reality. Furthermore, "factual" truth is not immutable — practitioners of numerous world religions regard supernatural events as historical. Myths can reveal and explore absolute truths about human nature and existence even when their literal content is fantastical.',
      },
    ],
    keyTerms: [
      { term: 'Mythos', definition: 'Greek: word, speech, tale, story — root of English "myth"' },
      { term: 'Myth Proper', definition: 'Stories dealing primarily with gods and humans\' relationship to them' },
      { term: 'Saga/Legend', definition: 'Stories with a perceived connection to history' },
      { term: 'Folktale', definition: 'Tales of fantastical adventure often involving heroes or heroines' },
      { term: 'Reception', definition: 'How later cultures interpret, adapt, and retell earlier myths' },
    ],
    mustKnow: [
      'The broad definition of myth (textual AND artistic media)',
      'The three categories with examples — and why they overlap',
      'Why myths are not simply "not true" (Trojan War example)',
      'Percy Jackson as example of modern reception',
      'No single correct interpretation of a myth exists',
    ],
    likelyQuestions: [
      'What is myth? Why is "myths are not true" a misconception? (definition + three categories)',
      'What is the difference between myth proper, saga/legend, and folktale? Give examples.',
    ],
  },

  // ── 1b ──────────────────────────────────────────────────────────────────────
  {
    code: '1b',
    title: 'Interpretive Theories of Myths',
    color: 'slate',
    examWeight: 'high',
    coreArgument: 'No single theory can explain all myths. Each approach illuminates certain myths well and fails on others. The course uses multiple frameworks — etiology, allegory/symbolism, psychoanalysis (Freud & Jung), myth-and-society (Frazer & Malinowski), structuralism (Lévi-Strauss), Walter Burkert\'s synthesis, and feminist approaches — and applies them selectively throughout.',
    sections: [
      {
        heading: 'Etiology',
        content: '"Etiology" derives from the Greek "aitia" (αἰτία), meaning cause. Etiological myths explain origins — of rituals, natural phenomena, place names, social customs, or institutions. The course\'s primary example: the Homeric Hymn to Demeter, in which Demeter founds the Eleusinian cult at Eleusis while searching for Persephone. The hymn explains (1) the origin of the seasons and (2) why the Eleusinian Mysteries at Eleusis exist. Etiology can also explain physical/emotional/spiritual matters.',
        examTip: 'For any theory question about etiology, always give the Homeric Hymn to Demeter as the example. Know both what it explains.'
      },
      {
        heading: 'Allegory and Symbolism',
        content: 'Others try to explain mythology as allegorical or symbolic — what one encounters in mythology is representative of aspects of human nature and other universal truths. Example: Aphrodite\'s disguise when seducing Anchises (Homeric Hymn to Aphrodite) represents the deceptive side of erotic love. Max Müller and his 19th-century followers read ALL myths as allegories of natural/cosmological phenomena: Apollo = the sun, his arrows = sunrays, etc. Critique: Such readings are justified in some cases (myths can explain the movement of the sun) but CANNOT explain the majority of Greco-Roman mythology.',
        examTip: 'Max Müller = allegory of natural phenomena. Example from the course: Aphrodite\'s disguise = deceptive side of erotic love.'
      },
      {
        heading: 'Psychoanalysis — Freud',
        content: 'Sigmund Freud connected dreams and myths directly. He believed dreams fulfill wishes and desires that are repressed in conscious life. A person in their dreams condenses/abbreviates elements of wishes, gives them different emphasis, represents them as symbols and imagery. Myth shares many elements of this process — Freud saw myth as a waking attempt to understand and explain the impulses of the dream world. His most famous theory directly named from Greek myth: the Oedipus complex. As Freud states: "His fate moves us only because it might have been our own... our dreams convince us that we were, King Oedipus, who slew his father Laius and wedded his mother Jocasta, is nothing more or less than a wish-fulfillment."',
        examTip: 'Know Freud\'s exact claim: myth = waking dream fulfilling repressed desires. The Oedipus complex is named directly from Sophocles\' Oedipus Rex.'
      },
      {
        heading: 'Psychoanalysis — Jung',
        content: 'Carl Jung extended Freud\'s theories, arguing myths are a projection of the "collective unconsciousness" of humanity. As myths developed, they became representative of the common unconscious tendencies and desires of humans. Jung draws a distinction between one\'s individual unconscious and the collective concerns of humanity — myths connect to the unconscious and suggests that images in myths are "archetypes" of behaviour. In other words, the stories of mythology provide models that teach us how to behave and how to interact with our world. These psychoanalytic theories are an important tool for considering how myths express and problematize our deepest human desires and fears.',
        examTip: 'Jung = collective unconsciousness + archetypes. This is the key distinction from Freud (individual → collective).'
      },
      {
        heading: 'Myth and Society — Frazer and Malinowski',
        content: 'J.G. Frazer (1854–1941), UK anthropologist, drew a particular link between myth and religious ritual — myth and ritual are inseparable. This was a major criticism of Freud and Jung: their psychoanalytic approach is too generalized and does not account for differences in distinct cultures around the world. Polish anthropologist Bronisław Malinowski felt it was important to live within and study a culture to understand its point of view and its vision of the world — this was significant also for understanding the myths of the culture. He tried to explain myths as stories that reflected social customs and beliefs.',
        examTip: 'Frazer = myth + ritual inseparable. Malinowski = must live within culture to understand its myths (cultural specificity). Both criticize Freud\'s over-generalization.'
      },
      {
        heading: 'Structuralism — Lévi-Strauss and Propp',
        content: 'A close connection between myth and society lies behind the structuralist approaches, developed by Vladimir Propp but for which French scholar Claude Lévi-Strauss is most famous. Lévi-Strauss argued that social interactions are fundamental to the organization of a culture and that they represent a structure that appears as binary opposites. One of his most famous examples: what is raw is the binary opposite of what is cooked. Such oppositions give the basic structure for the expression of the ideas and thoughts of a culture. Lévi-Strauss applied this to myth — myths are a way in which people are able to communicate, by mediating structural binary opposites. Behind the individual narrative details of a given myth, one can find underlying structural oppositions in ALL cultures, such as the interaction between men and women. Example from the course: Hesiod\'s creation myths contain the opposition between male and female in the development of the gods. Criticism: Structuralism has been criticized for assuming too rigid and universal a model of human thought across cultures.',
        examTip: 'Lévi-Strauss = myths mediate binary opposites (raw/cooked, male/female, mortal/immortal). The Theogony\'s male/female opposition is the course example.'
      },
      {
        heading: 'Walter Burkert\'s Synthesis',
        content: 'Walter Burkert, a scholar of Greek religion, grounded structuralist approaches to myth in an understanding of a particular culture. In other words, myth cannot be separated from its historical context. One may find structural sequences within traditional stories that are similar across cultures, but a myth is nonetheless a tale that is developed and put to use within a particular culture. Burkert\'s approach is attractive in its inclusiveness — it recognizes universal truths in myth AND accepts structuralism and psychology, while grounding such approaches in the historical and religious context of a society.',
        examTip: 'Burkert = synthesis. He accepts structuralism + psychology but insists on historical/religious grounding. The most inclusive approach.'
      },
      {
        heading: 'Feminism and Sexuality',
        content: 'Over the past century, feminist approaches have yielded many important insights. Feminist scholars have interacted with the theoretical approaches above while placing particular focus on the psychological and social situations of female characters. This work has forced the critical examination of social and psychological assumptions brought to the study of Greco-Roman mythology. Greco-Roman society had different social mores and practices affecting the treatment of women, gender, and sexuality that varied by time and place. Our own modern views on these topics further influence how we read Greco-Roman myths.',
        examTip: 'Feminist approaches focus on female characters\' psychological/social situations AND on the patriarchal assumptions embedded in myths (Pandora, Artemis myths).'
      },
    ],
    keyTerms: [
      { term: 'Aitia (αἰτία)', definition: 'Greek: cause — root of "etiology." Myths that explain origins.' },
      { term: 'Oedipus complex', definition: 'Freud\'s theory: unconscious desire for opposite-sex parent, hostility to same-sex parent. Named directly from Greek myth.' },
      { term: 'Collective unconscious', definition: 'Jung\'s concept: shared unconscious tendencies across all humanity; myths project these.' },
      { term: 'Archetype', definition: 'Jung: recurring images in myths that reflect universal patterns of human behavior and psychology.' },
      { term: 'Binary opposites', definition: 'Lévi-Strauss: fundamental structural tensions in human thought (raw/cooked, male/female, mortal/immortal) that myths mediate.' },
      { term: 'Structuralism', definition: 'Myth as a system of communication that mediates underlying binary oppositions in a culture.' },
    ],
    mustKnow: [
      'Etiology: aitia = cause. Homeric Hymn to Demeter as the course example (explains seasons + Eleusinian Mysteries)',
      'Freud: myth = waking dream fulfilling repressed desires. Oedipus complex named from Greek myth.',
      'Jung: collective unconsciousness + archetypes. Individual → collective.',
      'Frazer: myth + ritual inseparable. Malinowski: cultural specificity — must live within a culture.',
      'Lévi-Strauss: myths mediate binary opposites (raw/cooked example). Theogony\'s male/female = course example.',
      'Burkert: synthesis — ground structuralism in historical/religious context.',
      'Feminist approaches: focus on female characters\' social/psychological situations; patriarchal assumptions in Pandora, Actaeon myths.',
      'No single theory explains all myths.',
    ],
    likelyQuestions: [
      'Explain and critically evaluate three theoretical approaches to interpreting myth, with Greco-Roman examples.',
      'What is the difference between Freud\'s and Jung\'s approaches to myth? What is the key concept each uses?',
      'Explain structuralism as applied to myth. Who developed it? Give an example from Hesiod.',
      'What is Walter Burkert\'s contribution to myth theory? Why is his approach described as a synthesis?',
    ],
  },

  // ── 1c ──────────────────────────────────────────────────────────────────────
  {
    code: '1c',
    title: 'Overview of Greek and Roman History',
    color: 'gold',
    examWeight: 'medium',
    coreArgument: 'Greco-Roman mythology was transmitted across many centuries and radically different historical contexts. The period in which a myth was recorded shapes its form and function. The Mycenaean period is most important for mythology\'s roots; the Archaic period is when myths were first written down; the Classical period produced drama; the Roman Empire produced our major Latin sources.',
    sections: [
      {
        heading: '1) Neolithic Period (~40,000–3000 BCE)',
        content: 'People first entered Greece over 40,000 years ago. Around 6500 BCE, agriculture arose in the early Neolithic (Late Stone Age). This period is NOT of direct concern to mythology — inhabitants were not yet Greek speakers.',
      },
      {
        heading: '2) Early and Middle Bronze Ages (3000–1600 BCE)',
        content: 'Bronze technology allowed significant development. Economy, trade, and settlement size grew. This is when Greek speakers traditionally arrived in Greece, though the dating is debated. The Sumerian and Akkadian civilizations of Mesopotamia were far more advanced at this time.',
      },
      {
        heading: '3) Late Bronze Age — Mycenaean (1600–1150 BCE) ★ MOST IMPORTANT',
        content: 'The first period of real importance for mythology. In 1899, Arthur Evans discovered the site of Knossos on Crete — the palace of the Minoan civilization (named after King Minos of Crete, father of the Minotaur). Knossos was built in approximately 1700 BCE. The Minoans had great influence on mainland Greek (Mycenaean) civilization. In Mycenaean civilization we find some roots of Greek religion and mythology. Many aspects of the Trojan War myth derive from Mycenaean civilization — it is now thought to be based on an actual conflict in the city of Troy in the Troad (originally excavated by Heinrich Schliemann). Mycenaean kingdoms flourished ca. 1600–1150 BCE, then collapsed around 1200 BCE for unclear reasons.',
        examTip: 'Arthur Evans + Knossos + Minoans → roots of mythology. Heinrich Schliemann + Troy = Trojan War has historical basis. These names appear on exams.'
      },
      {
        heading: '4) Dark Age (ca. 1150–900 BCE)',
        content: 'Cultural and political collapse after Mycenaean fall. Notable achievements: mastery of iron technology; innovations in pottery. Most importantly: the development of the alphabet. Myths continued to be transmitted orally.',
      },
      {
        heading: '5) Archaic Period (ca. 750–500 BCE) ★ MYTHS FIRST WRITTEN',
        content: 'Prior to the Archaic period, myth was transmitted orally. Oral transmission continues today, but in the Archaic period myths were first recorded in writing — sometime in the late 8th or early 7th century BCE. The versions of myth from this period are the first to survive: poems of Hesiod and Homer, and the Homeric Hymns. Colonization, expansion, and innovation characterize this era.',
        examTip: 'Archaic Period = first written myths. Hesiod and Homer both compose here. Know this date: 750–500 BCE.'
      },
      {
        heading: '6) Classical Period (ca. 500–323 BCE) ★ DRAMA',
        content: 'Dominated by the Athenian perspective, from the rise of democracy to the campaigns of Philip II of Macedon and his son Alexander the Great. Myth was retold and adapted in many forms, including dramatic performances developed for the first time in Athens. The tragedies of Aeschylus, Sophocles, and Euripides (the three most famous tragedians) deal chiefly with mythological themes. The comedies of Aristophanes often draw upon and parody mythological material.',
        examTip: 'Classical Period = drama. Three tragedians all active here. Remember: drama was invented in Athens during this period.'
      },
      {
        heading: '7) Hellenistic Period (ca. 323–30 BCE)',
        content: 'Begins after Alexander the Great\'s death (323 BCE); ends with Cleopatra\'s death (30 BCE). Alexander\'s campaigns spread Greek culture widely. Dominated politically by kingdoms, most prominently the Ptolemaic Kingdom in Egypt. Greek scholarship and study of literary past began in earnest. Authors both draw upon and experiment with earlier versions of myths. There is seldom just one version of myths — they were recast again and again in transmission.',
      },
      {
        heading: '8) Foundation of Rome and Roman Republic (ca. 753–27 BCE)',
        content: 'Traditional founding date: 753 BCE. Roman Republic founded 509/507 BCE; ended 27 BCE with the assassination of Julius Caesar and rise of Augustus. First Roman literature: Plautus (205–184 BCE) and Terence (comic plays, 166–159 BCE). Late Republic: Lucretius, Catullus (active 50s BCE), Cicero (81–43 BCE), Sallust (active 40s BCE). Roman literature draws extensively on Greek versions of myth but adapts them. "Roman literature and art often draw extensively upon Greek versions of myth... but Roman versions are not slavish. They change and adapt mythology to their own ends."',
      },
      {
        heading: '9) Early and High Roman Empire (27 BCE–200 CE) ★ VERGIL AND OVID',
        content: 'The period from Augustus until the third century CE. The end of the Republican period through Augustus (27 BCE–14 CE) = "Augustan literature." Vergil (active early 30s to 19 BCE) and Ovid (active early 20s BCE to 17 CE) rose to fame — their works are our most important Roman literary sources for mythology. "We will encounter them frequently in this course."',
        examTip: 'Augustan age = Vergil + Ovid. Both are essential. Vergil wrote the Aeneid; Ovid wrote the Metamorphoses. Both died/were active in this period.'
      },
    ],
    keyTerms: [
      { term: 'Minoans', definition: 'Bronze Age civilization centered on Crete, named after King Minos; discovered by Arthur Evans at Knossos (1899)' },
      { term: 'Mycenaean', definition: 'Bronze Age Greek civilization on the mainland; heavily influenced by Minoans; roots of Trojan War myths' },
      { term: 'Arthur Evans', definition: 'Archaeologist who discovered Knossos palace on Crete in 1899' },
      { term: 'Heinrich Schliemann', definition: 'Archaeologist who excavated Troy in the Troad (modern NW Turkey), confirming a historical basis for the Trojan War' },
      { term: 'Augustan literature', definition: 'Roman literature of the age of Augustus (27 BCE–14 CE); includes Vergil and Ovid' },
    ],
    mustKnow: [
      'Archaic Period (750–500 BCE) = myths FIRST WRITTEN DOWN. Homer and Hesiod compose here.',
      'Mycenaean Period = most important for mythology\'s roots. Arthur Evans / Knossos / Minoans.',
      'Heinrich Schliemann excavated Troy — Trojan War has historical basis.',
      'Classical Period (500–323 BCE) = drama invented in Athens. Three tragedians: Aeschylus, Sophocles, Euripides.',
      'Augustan Age (27 BCE–14 CE) = Vergil (Aeneid) and Ovid (Metamorphoses) rise to fame.',
      '"Roman versions are not slavish" — they adapt Greek myth to Roman purposes.',
    ],
    likelyQuestions: [
      'In what period were myths first written down? What was transmitted before that, and how?',
      'Why is the Mycenaean period most important for Greek mythology? Name two archaeologists and their discoveries.',
      'What happened to Greek myth in the Classical period? Name the three tragedians.',
    ],
  },

  // ── 2a ──────────────────────────────────────────────────────────────────────
  {
    code: '2a',
    title: 'Origins of the Gods: Hesiod\'s Theogony',
    color: 'gold',
    examWeight: 'high',
    coreArgument: 'Hesiod\'s Theogony is the most systematic early account of the origins of the universe and gods. It tells a story of successive power struggles (succession myths) moving from primordial chaos through the Titans to the Olympians under Zeus — with a consistent underlying movement from female-dominated origins to male-dominated order.',
    sections: [
      {
        heading: 'Theogonic Poetry and Cross-Cultural Parallels',
        content: 'Theogonic poetry describes "the origin of the world and the gods, and the events which led to the establishment of the present order" (M. L. West, 1966). Many ancient parallels exist. The Babylonian creation epic, the Enuma Elish, was recited every year in Babylon at new year celebrations and consists of more than 1,000 verses. Similar to Hesiod, it begins before heaven or earth existed: Apsu (male water) and Tiamat (female water) mingle; gods come into being. Although few precise parallels between this Babylonian text and Hesiod, the underlying principle is similar — both contain an opposition between male and female. Similar traditions are known in ancient Egyptian, Persian, Indian, Druidic, Germanic, British, Norse, Finnish, Estonian, Japanese, and Polynesian cultures.',
        examTip: 'Enuma Elish = Babylonian parallel. Know that it features the same male/female binary that Hesiod uses. Shows cross-cultural transmission.'
      },
      {
        heading: 'Why Hesiod\'s Theogony Came First',
        content: 'The ancient Greeks thought Hesiod composed the Theogony even before Homer composed the Iliad and Odyssey — sometime in the late 8th or early 7th century BCE. It is nonetheless interesting to enquire why the Greeks placed Hesiod before Homer. Part of the answer is that the Theogony is a genre that explains origins and attempts to codify the Olympian system of gods and goddesses. In Homer\'s Iliad and Odyssey, the Olympian gods act out their lives in the world of humans — it is only natural that the Theogony would be understood as being prior to Homer. The Theogony became the classic Greek version of creation and the one the Greeks and Romans looked back to throughout their history.',
      },
      {
        heading: 'The Nine Muses',
        content: 'Hesiod begins with an invocation of the Muses — children of Zeus and Mnemosyne (memory personified). The nine Muses are: Calliope (Epic Poetry), Clio (History/Lyre Playing), Euterpe (Lyric Poetry/Flute Playing), Melpomene (Tragedy/Lyre Playing), Terpsichore (Choral Dancing/Flute Playing), Erato (Love Poetry), Polyhymnia (Sacred Music/Dancing), Urania (Astronomy), Thalia (Comedy).',
        examTip: 'You may be asked which Muse is connected to Epic Poetry (Calliope) or Tragedy (Melpomene).'
      },
      {
        heading: 'Chaos and the Primordial Beings',
        content: 'We are told that in the beginning, there was Chaos — from which Earth (Gaia), Tartaros, and Love (Eros) emerge, along with Erebos (dark gloom) and Night. These characters represent basic aspects of our world. A Chaos, a chasm or "yawning void," is first. After Chaos, Gaia (Earth) and Eros (love) are primordial elements of the cosmos. Erebos and Night give birth to Ether (air) and Hemera (day).',
        examTip: 'Chaos first → then Gaia, Tartaros, Eros, Erebos, Night. Eros is primordial here — not the son of Aphrodite.'
      },
      {
        heading: 'The Titans',
        content: 'Gaia gives birth asexually to Ouranos (sky or heavens), to the Mountains, and to Pontos (the sea). Then with Ouranos, she gives birth to three races: the Titans, the Cyclopes, and the Hundred-Handers. The Titans are: Ocean, Koios, Kreios, Hyperion, Iapetos, Thea, Rhea, Themis and Mnemosyne (memory), Phoebe, Tethys, and Kronos. Of these, Kronos (who especially hates his father) is the most important. He and Rhea later become the parents of Zeus. The Titans represent basic aspects of the world: Ocean = water, Hyperion = the sun, Rhea and Kronos are linked to earth and sky respectively.',
        examTip: 'Know that Kronos is the most important Titan. He and Rhea = parents of Zeus. The Titans represent basic aspects of the world.'
      },
      {
        heading: 'First Succession Myth — Ouranos and Kronos',
        content: 'Angry at being kept inside the womb, Kronos devises a plan with Gaia to lop off the genitals of Ouranos with a sickle (an unpleasant morning!). This is done and the genitals fall into the ocean. The union of Gaia (earth) and Ouranos (sky) and their subsequent separation are representative of the original unity and division of earth and sky. From the very beginning of Hesiod\'s account of the creation of the world: an opposition between female and male. From the genitals of Ouranos that Aphrodite is born — she emerges from foam ("aphros") in Greek. The drops of blood on the way down also give birth to the Furies, the Giants, and the Tree Nymphs.',
        examTip: '"Aphros" = foam = Aphrodite. Born from sea foam near Cyprus (Cythera first, then Cyprus). Furies, Giants, Tree Nymphs from blood. First Succession Myth = Ouranos castrated by Kronos.'
      },
      {
        heading: 'Second Succession Myth — Kronos and Zeus',
        content: 'The Olympian order now begins. Children of Kronos and Rhea: Hestia, Demeter, Hera, Poseidon, and Zeus. Kronos has been swallowing his children to prevent being overthrown. Before Rhea\'s final son Zeus is born, Rhea prays to her parents that he will not be eaten. Zeus is concealed in Crete; Kronos swallows a stone instead. Through Gaia\'s cunning and Zeus\' strength, Kronos is made to regurgitate his children. Zeus defeats Kronos and the Titans and rules with his thunderbolts. The children of Zeus include Hephaistos (son of Hera), Ares (born to Zeus and Hera), Apollo and Artemis (born to Zeus and Leto), Athena (born from Zeus\' head), Hermes (born of Zeus and Maia), Aphrodite (born of genitals of Ouranos and Dione, in Homer). Hades can be separated from the Olympian pantheon because of his connections to the underworld.',
        examTip: 'Zeus\'s children: Hephaistos (Hera alone), Ares (Zeus+Hera), Apollo+Artemis (Zeus+Leto), Athena (Zeus\'s head/Metis), Hermes (Zeus+Maia), Aphrodite (sea foam in Hesiod). Know ALL of these.'
      },
      {
        heading: 'Hurrian Mythology Parallel',
        content: 'There are close parallels for the story of creation in the Theogony in the Hurrian mythology of south-east Asia Minor. Hurrian culture was at its peak in the 16th–15th centuries BCE. A Hurrian text tells us that a god named Alalu was king of heaven before he was defeated in battle by Anu (the Babylonian sky god). Anu reigns for nine years, then fights a god named Kumarbi. Anu flees upward to heaven, but Kumarbi catches up with him, bites off his genitals, and swallows them. Kumarbi = Kronos (castrates father, swallows). Anu = Ouranos. A stone is also involved. The weather god that emerges from Kumarbi\'s stomach = Zeus. The underlying connections are unmistakable. Hittite culture adopted many Hurrian myths, which influenced Greek traditions.',
        examTip: 'Kumarbi (Hurrian) = Kronos. Anu (Hurrian) = Ouranos. The Hurrian parallel shows direct cross-cultural transmission of succession myths from the Near East to Greece.'
      },
      {
        heading: 'Male and Female in the Theogony',
        content: 'It is notable that there is a frequent opposition between male and female in the poem. Scholar Apostolos Athanassakis gives a helpful account: "For most of the poem it is the mother who matters. The male partner is much less prominent or altogether obscure... [but] It is after the defeat of Typhoeus when Zeus is left as supreme master of the world, that in the sexual unions the male god, Zeus, is more than an instrument of procreation." Zeus ultimately swallows his wife Metis (personified wisdom), thereby adopting a feminine quality which is an important element of his rule. Zeus is a god who maintains his position not only by force but also through cleverness and good council, which are portrayed as female characteristics throughout the Succession Myths. Zeus\' first children by his second wife Themis are the Seasons, who stand for regularity: Eunomia (Law), Dike (Justice), and Eirene (Peace).',
        examTip: 'The structuralist reading of the Theogony: male/female binary. Movement from matriarchal origins (Gaia rules) to patriarchal order (Zeus rules). Zeus succeeds by incorporating female wisdom (swallowing Metis).'
      },
    ],
    keyTerms: [
      { term: 'Theogony', definition: 'Hesiod\'s poem about the birth of the gods and the succession of power to Zeus' },
      { term: 'Theogonic poetry', definition: 'Poetry describing the origin of the world, the gods, and the events leading to the present order' },
      { term: 'Enuma Elish', definition: 'Babylonian creation epic; recited at New Year; features Apsu (male water) + Tiamat (female water); parallel to Hesiod' },
      { term: 'Chaos', definition: 'The primordial "yawning void" from which all things emerge in Hesiod. NOT a person.' },
      { term: 'Kronos', definition: 'Most important Titan; castrates Ouranos; swallows his children; defeated by Zeus' },
      { term: 'Metis', definition: 'Wisdom personified; Zeus\'s first wife; swallowed by Zeus so she cannot bear a son who will overthrow him; Athena is born from Zeus\'s head as a result' },
      { term: 'Succession myth', definition: 'A myth about the transfer of supreme power from one generation of gods to another through violence and cunning' },
      { term: 'Kumarbi', definition: 'Hurrian god who castrates and swallows the sky god Anu — direct parallel to Kronos and Ouranos' },
    ],
    mustKnow: [
      'Chaos first, then Gaia, Tartaros, Eros (primordial, not son of Aphrodite), Erebos, Night',
      'The Titans — list at least 6. Kronos most important. Kronos + Rhea = parents of Zeus.',
      'First Succession Myth: Kronos castrates Ouranos. Aphrodite born from sea foam (aphros).',
      'Second Succession Myth: Rhea hides Zeus in Crete; Kronos swallows a stone. Zeus defeats Titans.',
      'Zeus\'s children and their mothers — ALL of them.',
      'Hurrian parallel: Kumarbi = Kronos; Anu = Ouranos. Shows Near Eastern influence on Greek myth.',
      'Structuralist reading: male/female binary throughout; Zeus wins by incorporating female wisdom.',
      'Enuma Elish = Babylonian parallel; features male/female (Apsu/Tiamat) like Hesiod.',
    ],
    likelyQuestions: [
      'Narrate the First and Second Succession Myths as told in Hesiod\'s Theogony. What themes do they embody?',
      'Describe the Hurrian parallel to the Greek succession myth. What does this tell us about the origins of Greek mythology?',
      'Who are Zeus\'s children and by whom? Name at least six.',
      'What is the significance of Zeus swallowing Metis?',
    ],
  },

  // ── 2b ──────────────────────────────────────────────────────────────────────
  {
    code: '2b',
    title: 'The Creation of Humankind',
    color: 'terra',
    examWeight: 'high',
    coreArgument: 'Hesiod\'s Works and Days gives two interlocking accounts of the decline of humanity: the Five Ages (moving from a Golden Age of harmony to the corrupt Iron Age of Hesiod\'s own time) and the myth of Prometheus and Pandora (explaining the origin of human suffering and the peculiar status of women in a patriarchal society).',
    sections: [
      {
        heading: 'The Five Ages of Humankind',
        content: 'Hesiod\'s Works and Days describes five ages through which humanity has declined. (1) The Golden Age: plenty and long life; humanity lives very close to the gods; Kronos said to create this race. One can compare the Garden of Eden. (2) The Silver Age: created by the gods on Olympus; still quite pleasant but noticeably below the Golden Age. (3) The Bronze Age: created by Zeus; warlike; again worse. (4) The Age of Heroes: seems to have been inserted specifically by Hesiod, interrupting the otherwise steady decline. Heroes created by Zeus include the heroes of the Trojan War — they receive a special fate and are closely linked to the divine. (5) The Iron Age: the fifth age; Hesiod\'s own time; a miserable state of war and corruption. The yearning for a better time in which humanity dwelt closely with the gods can be paralleled in many different traditions. IMPORTANT: In some later accounts, such as that of Ovid, there are only four ages — Ovid does not include the Age of Heroes.',
        examTip: 'Five Ages in order: Gold → Silver → Bronze → Heroes (Hesiod only) → Iron. Ovid has only FOUR (no Heroes). Know which is Hesiod\'s own age (Iron).'
      },
      {
        heading: 'Prometheus — The Theft of Fire',
        content: 'Prometheus is a divinity, the son of Iapetos (one of the Titans) and the Oceanid Nymph Clymene. In mythology, he is intricately tied with humanity. Although in Hesiod it is Zeus and the other gods who actually created humankind, a later tradition even has Prometheus as the creator of man. In Hesiod, Prometheus is responsible for tricking Zeus and giving humanity the power of fire. The tale is told in both the Theogony and the Works and Days. Prometheus tricks Zeus into taking the bone and the fat as his portion of sacrifice, while humans receive the meat (Theogony lines 535–569). It was thought in Greek religion that the gods received a portion of sacrificed animals — this myth explains why humans eat the meat portion while gods receive the smoke of the burnt fat and bones. Because Prometheus tricked him out of receiving the best portion of sacrifice, Zeus decides to withhold fire from humanity. But the anger of Zeus over the sacrifice does not dissuade Prometheus from defying him. Prometheus steals fire from Zeus, hides it in a stalk of fennel (used in antiquity to transport fire, as it withstood heat), and delivers it to humankind. Fire is, of course, a symbol of technology and the advancement of humankind, just as it is today connected with industry and power.',
        examTip: 'Prometheus tricks Zeus at sacrifice → Zeus withholds fire → Prometheus steals fire in a fennel stalk → punished by eagle eating liver daily. This narrative sequence is often tested.'
      },
      {
        heading: 'Pandora and the Creation of Woman',
        content: 'It should be noted that up until this point, Hesiod\'s discussion of humankind has confined itself to the existence of the male sex. It is only as a punishment for Prometheus\'s transgressions that Zeus orders Pandora, the first woman, to be created. The Hesiodic text is explicit and worth quoting: Hephaestus forges her "from earth the semblance of a reverend maiden by the plans of Cronus\' son; and the goddess, bright-eyed Athena, girdled and adorned her with silvery clothing... from her comes the race of female women: for of her is the deadly race and tribe of women, a great woe for mortals." Pandora has historically been compared to Eve — Pandora elsewhere said to bring evil to humankind by being responsible for opening a jar (pithos — NOT a box) that contains evil of every type. What remains in the jar? Only Anticipation [or Hope] — it remained in the jar. It did not fly out. The myth of Pandora is perhaps not entirely negative — for one will note that in her jar remains Hope (or Anticipation). There is no single reading of this myth.',
        examTip: 'Pandora = "first woman" in Hesiod; created as punishment for Prometheus\'s fire theft. It is a JAR (pithos), not a box. Hope/Anticipation remains inside. The myth is misogynistic but ambiguous (Hope).'
      },
      {
        heading: 'Cross-Cultural Parallels',
        content: 'There are parallels in the myths of many different cultures in which evils are released or men lose immortality because a closed container of some type is opened, often by a woman. Myths such as Pandora are not compatible with modern views of equality of the sexes, but one must understand them within the context of the patriarchal societies in which they were conceived and developed. The ambiguity of the myth of Pandora is an example of the difficulties involved in interpreting myths — all the myths we examine in this course can mean different things to different audiences.',
      },
    ],
    keyTerms: [
      { term: 'Iron Age', definition: 'Hesiod\'s own age — the fifth and worst; characterized by war, corruption, and the absence of justice' },
      { term: 'Age of Heroes', definition: 'Fourth age in Hesiod (not in Ovid); interrupted the decline; includes Trojan War heroes' },
      { term: 'Fennel stalk', definition: 'The hollow plant in which Prometheus hides the stolen fire to carry it to humanity' },
      { term: 'Pithos', definition: 'The large storage jar (NOT a box) that Pandora opens, releasing all evils' },
      { term: 'Elpis', definition: 'Greek: Hope or Anticipation — the one thing that remained in Pandora\'s jar' },
    ],
    mustKnow: [
      'Five Ages in order, with one characteristic of each. Ovid has only FOUR (no Age of Heroes).',
      'Prometheus\'s trick at sacrifice: bones wrapped in fat to gods, meat to humans.',
      'Zeus withholds fire → Prometheus steals it in a fennel stalk → punished: eagle eats liver daily.',
      'Pandora is created as punishment for Prometheus\'s theft. She is the FIRST WOMAN in Hesiod.',
      'She opens a JAR (pithos — not a box). All evils escape. Only Hope/Elpis remains inside.',
      'The myth is misogynistic but ambiguous (Hope as potentially positive).',
      'Pandora parallels Eve in Genesis — both women associated with the origin of human suffering.',
    ],
    likelyQuestions: [
      'Describe the Five Ages of Humanity as told by Hesiod. How does Ovid\'s version differ?',
      'Narrate the myth of Prometheus from the sacrifice trick to his punishment. What does fire symbolize?',
      'Describe Pandora and her myth. What is misogynistic about it, and what is ambiguous about it?',
    ],
  },

  // ── 3a: Apollo/Delos/Delphi ─────────────────────────────────────────────────
  {
    code: '3a',
    title: 'Apollo: Delos and Delphi',
    color: 'terra',
    examWeight: 'high',
    coreArgument: 'Apollo is one of the most important and complex Olympian gods — connected to youth, music, healing, prophecy, purification, and revenge. His two major cult centres (Delos: birthplace; Delphi: oracle) are explained through etiological narratives in the Homeric Hymn to Apollo. He is most likely a composite figure of several different influences, including Near Eastern elements.',
    sections: [
      {
        heading: 'Apollo\'s Domains and Character',
        content: 'Apollo has been called "the most Greek of the gods." This is true not so much for any peculiarly Greek development but because he became the ideal of Greek youth and masculine beauty. Apollo played a role in Greek society as a god involved in the initiation of young adults. In mythology, he is connected to youth, music, art, healing, and archery. In the Greek pantheon, from the fifth century BCE, he is connected with the sun. He famously wields a bow and an arrow — a trait he shares with Artemis — but unlike his twin sister, he is not a god connected with hunting or hunters. He is, as his connection with the paean implies, a god of healing, but he is also a god of revenge and pestilence. At the beginning of the Iliad, Apollo rains down arrows upon the camp of the Greeks at the behest of the priest Chryses. In mythology and in ancient artistic representations, he is always young, beardless, and athletic.',
        examTip: 'Domains: youth, music, art, healing, archery, prophecy, purification, initiation of young men, revenge, pestilence. Always depicted young, beardless, athletic. Note the PARADOX: god of healing AND pestilence.'
      },
      {
        heading: 'The Paean',
        content: 'A type of hymn called the paean was frequently connected with Apollo. In the Minoan pantheon we find an independent god Paiawon, who seems to lie behind the Greek god Paean. In Homer\'s Iliad (Book 5, line 401), Paean is treated as a god separate from Apollo, who is responsible for healing. These two distinct deities came to be closely identified — Paean became an epithet of Apollo, a god closely connected to medicine and healing.',
      },
      {
        heading: 'The Homeric Hymns',
        content: 'Before examining Apollo in more detail, some introduction to the Homeric Hymns is necessary. These form a collection of 33 hymns in Homeric dialect and meter — known as Homeric hymns because they were written in the same dialect and metre as the famous poems in the Iliad and Odyssey. But these hymns are certainly not all written by the same author. We know the hymns were composed sometime in the seventh century BCE; the eighth hymn to Ares is a product of the fifth century CE — these two dates span almost a millennium. At the beginning of this collection are five relatively long and ancient hymns: the first to Dionysus (fragmentary), the second to Demeter, the third to Apollo, the fourth to Hermes, and the fifth to Aphrodite. All these longer hymns contain not only praise for the deity\'s powers but also a mythological narrative describing the deity\'s birth or significant events in the deity\'s life. The Homeric hymns acted at least at times as preludes to longer epic recitations at festivals.',
        examTip: '33 hymns total. The 5 long hymns: Dionysus (1st, fragmentary), Demeter (2nd), Apollo (3rd), Hermes (4th), Aphrodite (5th). They were used as preludes to epic recitations at festivals.'
      },
      {
        heading: 'Delos — Apollo\'s Birthplace',
        content: 'In mythology, the island known as Delos is associated with Apollo because of his birth there. Leto bore Apollo on Delos because no other place would accept her — she had slept with Zeus, which made Hera extremely jealous. Other places feared Hera\'s reprisal OR feared that Apollo is prophesied to be a reckless god who will bring destruction. The hymn lists many of the places Leto went. Importantly, it offers an account, an aiton or explanation, of the actual founding of the cult in Delos. Starting at line 80, Delos has Leto swear an oath that Apollo will set up his first shrine on her. Apollo\'s actual shrine on the island was founded around the eighth century BCE. It became a large religious site and was the focus of an annual Ionian festival celebrated with games, singing, and dancing.',
        examTip: 'Leto was rejected everywhere because of Hera\'s jealousy. Delos agreed and swore an oath — this is the aiton (etiological explanation) for the Delian cult.'
      },
      {
        heading: 'Delphi — The Oracle',
        content: 'Delphi was the greatest and most prominent of Apollo\'s cults in the ancient world. It was a panhellenic cult — the whole of Greece visited and honoured it. The foundation of this religious site is narrated in the second half of the Homeric hymn to Apollo. Apollo begins to lay out the foundations of his cult and oracle next to the river Telphusa. The river Telphusa, jealous of her spot, convinces Apollo to found his cult instead under Mount Parnassos, where Apollo must first destroy a great snake who nurses Typhaon (a great beast reared by Hera in anger at Zeus for having given birth to Athena). By killing the snake, Apollo rids humanity of a great bane. This allows him to found his cult, but it also provides the etymology of the name of his oracle: Pytho in Greek means "to rot" — the carcass of the snake once it has been slain by Apollo. Apollo himself has the cult title Pythios (πύθιος). Apollo decides to supply his cult with priests, taking men from a Cretan ship by disguising himself as a dolphin — another etymological explanation for the name "Delphi." The cult was founded around the tenth century BCE; dedications appear from approximately 800 BCE.',
        examTip: 'Python/Pytho = "to rot" = the rotting carcass of the snake. Apollo = Pythios. Pythia = his prophetess. The dolphin = explains the name Delphi. The river Telphusa = explains why Apollo founded the oracle at that specific site under Mt. Parnassos. All etiological.'
      },
      {
        heading: 'The Pythia and Oracle Procedures',
        content: 'Delphi also played an important role year-round as an oracle. The Delphic oracle was the most well-known oracle in the Greek world. It could be consulted on the seventh day of each month, a day sacred to Apollo. Due to its oracular nature, the temple of Apollo in Delphi was of particular importance. The sanctuary, like any sanctuary, was attended by a priest. In the case of Delphi there were two priests. There were also in Delphi five Hosioi (holy men) who assisted the priests as well as attendants. Of most importance was the Pythia, a priestess who made the oracular pronouncements of Apollo. She was appointed for life and was therefore expected to remain a virgin for life. The Pythia has been an object of fascination in literature, film, and modern popular culture, where she is often portrayed as a possessed mystic. Apollo is the oracular god par excellence, and he is associated with prophecy in Greek literature. The tragic Cassandra receives her powers of divination from Apollo.',
        examTip: 'Pythia: Apollo\'s prophetess at Delphi. Appointed for life, expected to remain a virgin. Consulted 7th day of each month. Two priests + five Hosioi also served the sanctuary.'
      },
    ],
    keyTerms: [
      { term: 'Paean', definition: 'A type of hymn connected with Apollo; also an earlier separate deity of healing (Paiawon) who merged with Apollo' },
      { term: 'Aiton', definition: 'Greek: cause/explanation — an etiological explanation. The Homeric Hymn to Apollo provides the aiton for both the Delian and Delphic cults.' },
      { term: 'Panhellenic', definition: 'Concerning or shared by all Greeks. Delphi was a panhellenic cult — the whole of Greece visited and honoured it.' },
      { term: 'Pythio / Pytho', definition: 'From Greek pythein = "to rot." The name of the cult site (Pytho) and Apollo\'s title (Pythios) derive from the rotting carcass of the snake he killed.' },
      { term: 'Pythia', definition: 'Apollo\'s prophetess at Delphi; appointed for life; expected to remain a virgin; made oracular pronouncements.' },
      { term: 'Hosioi', definition: 'Five holy men who assisted the priests at the sanctuary of Delphi.' },
    ],
    mustKnow: [
      'Apollo\'s domains: youth, music, healing, purification, prophecy, archery, revenge, pestilence.',
      'Always depicted young, beardless, athletic.',
      'The paradox: god of healing AND pestilence.',
      'Delos: Leto accepted here after being rejected everywhere (Hera\'s jealousy). Etiological for the Delian cult.',
      'Delphi: Apollo kills the snake Python. "Pytho" = to rot. Apollo = Pythios. Dolphin = explains name Delphi.',
      'Pythia: appointed for life, virgin, makes oracular pronouncements on 7th day of each month.',
      'Homeric Hymn to Apollo: two parts — Delos birth + Delphi foundation. Both are etiological.',
      '33 Homeric Hymns total. 5 long ones: Dionysus, Demeter, Apollo, Hermes, Aphrodite.',
    ],
    likelyQuestions: [
      'Describe the founding of the oracle at Delphi as told in the Homeric Hymn to Apollo. What does it explain etiologically?',
      'Why was Apollo born on Delos? What is the etiological significance of this story?',
      'What is the Pythia and what role did she play at Delphi?',
    ],
  },

  // ── 3b: Apollo and Myth ──────────────────────────────────────────────────────
  {
    code: '3b',
    title: 'Apollo and Myth',
    color: 'terra',
    examWeight: 'high',
    coreArgument: 'Apollo\'s myths consistently demonstrate the motif of the unsuccessful love affair, the tension between mortal and immortal, Apollo\'s dual nature as healer and punisher, and his connection to music and male youth. His love affairs are either tragic (Daphne, Hyacinthus, Coronis) or, exceptionally, successful (Cyrene).',
    sections: [
      {
        heading: 'Marpessa — The First Unsuccessful Love Affair',
        content: 'One significant love affair is between Apollo and Marpessa. Marpessa is a mortal descended from the war god Ares. She is wooed also by a mortal hero named Idas (one of the Argonauts — very warlike, strong fighter). After Idas falls in love with Marpessa, he abducts her on his chariot. Her father, Evenus, is so distraught by this that he dies by suicide. But Apollo loves her also and confronts Idas. Zeus intervenes (as dispenser of justice) and makes Marpessa decide. She chooses Idas because he is a mortal (reflections on the interaction — rather the incompatibility — of mortality and immortality are frequent in mythology). Here we have a first example of the motif of the unsuccessful love affair that often haunts the myths surrounding Apollo.',
        examTip: 'Marpessa chooses the mortal Idas over the immortal Apollo — the key theme is mortality vs. immortality. Marpessa does NOT want a god as a lover because gods outlive mortals.'
      },
      {
        heading: 'Cyrene — The One Successful Love Affair',
        content: 'Apollo\'s one successful love affair is with Cyrene, an athletic nymph who gives her name to the city of Cyrene on the northern coast of Africa (modern Libya near the town of Shahat). Apollo falls in love with her when he sees her wrestling with a lion and takes her to Libya and the site of the city of Cyrene. She has a son with Apollo named Aristaeus (a mortal character who appears elsewhere in mythology).',
        examTip: 'Cyrene = etiological myth for the founding of the North African city of Cyrene. She is athletic — this fits Apollo\'s association with physical excellence.'
      },
      {
        heading: 'Daphne — Cupid\'s Golden and Lead Arrows',
        content: 'Another particularly tragic case is that of Daphne, the daughter of the river Peneus. After Apollo mocks Cupid\'s archery, Cupid strikes Apollo with a golden arrow — which makes him fall in love with Daphne. At the same time, Cupid strikes Daphne with a lead arrow to make her shun all love. Naturally, a chase ensues. As Daphne becomes exhausted from running from Apollo, she prays to her father to help her. He changes her into a laurel tree, called Daphne in Greek. It is Apollo\'s boast that causes the problem, and there are indications in some of the myths about his love affairs that Apollo is capable of feeling guilty for his actions.',
        examTip: 'Gold arrow = love, lead arrow = repulsion. This is Cupid/Eros causing the problem through Apollo\'s own hubris (mocking Cupid\'s archery). The laurel = Apollo\'s sacred tree, explains his laurel crown.'
      },
      {
        heading: 'Coronis and Asclepius',
        content: 'We see Apollo\'s guilt perhaps most clearly, and tragically, in his love affair with Coronis. Apollo falls in love with Coronis, but she cheats on him and lies with a young man. She is spotted by Apollo\'s crow. Apollo punishes her by shooting her with an arrow, but as she dies, he repents of his actions and tries to save her. Despite his healing powers he is unable to save her, although he manages to save Asclepius, his son, from Coronis\' corpse. In this myth, Apollo\'s powers of revenge and healing meet tragically.',
        examTip: 'Coronis → Asclepius (god of medicine, son of Apollo). Apollo\'s crow spies. Apollo punishes but repents — shows his dual revenge/healing nature.'
      },
      {
        heading: 'Hyacinthus — Apollo and Male Youth',
        content: 'Like Zeus, Apollo has affairs with men also. Perhaps the most well known of these is his affair with Hyacinthus. Hyacinthus, who gives his name to the flower, is a young Spartan who enchants Apollo to such an extent that the god does nothing other than spend time with him. Together they pass the time by playing sports and listening to music. But the former proves fatal, as we are told in Ovid\'s account of the story. Apollo throws the discus into the heavens. When it falls back to earth, Hyacinthus goes to fetch it, and when it hits the ground it bounces back and hits him in the face, killing him. As in the case of Coronis, Apollo tries to heal him but even his divine skill is unable to stop Hyacinthus from dying. According to Ovid, after Apollo\'s laments, Hyacinthus\' blood turns into a flower. Here we see a myth that narrates Apollo\'s connection to male youth.',
        examTip: 'Hyacinthus dies from a discus throw (or Zephyrus deflects it in jealousy). His blood → hyacinth flower. Shows Apollo\'s connection to male youth. Tragic love.'
      },
      {
        heading: 'Marsyas — Music Contest',
        content: 'The Delphic half of the Homeric Hymn to Apollo begins by stressing Apollo\'s association with music. Apollo arrives on Olympus with his lyre and plays. Marsyas is a satyr (part man, part goat — a spirit of nature) who picks up the flute after it has been invented and set aside by Athena. Athena punishes Marsyas for taking the flute, but he enjoys the instrument so much that he persists and becomes arrogant. He challenges Apollo to a music contest and loses, and the condition of the contest is that the victor may impose whatever punishment he wants on the loser. Apollo has Marsyas skinned alive.',
        examTip: 'Marsyas challenges Apollo to a music contest → loses → Apollo skins him alive. The extreme punishment demonstrates Apollo\'s revenge/punishment aspect. Athena originally discarded the flute because it distorted her face when she played it.'
      },
    ],
    keyTerms: [
      { term: 'Daphne', definition: 'Greek: laurel tree. Daughter of river Peneus; loved by Apollo after Cupid\'s golden arrow; transformed into a laurel tree. Explains Apollo\'s laurel crown.' },
      { term: 'Asclepius', definition: 'God of medicine; son of Apollo and Coronis; saved by Apollo from Coronis\'s corpse at the moment of her death.' },
      { term: 'Hyacinthus', definition: 'Young Spartan beloved of Apollo; killed by a discus; his blood becomes the hyacinth flower.' },
      { term: 'Marsyas', definition: 'Satyr who challenges Apollo to a music contest; loses; Apollo skins him alive.' },
      { term: 'Cyrene', definition: 'Athletic nymph; Apollo\'s one successful love affair; gave her name to the North African city.' },
    ],
    mustKnow: [
      'Theme of mortality vs. immortality in Apollo\'s love affairs (Marpessa chooses mortal Idas).',
      'Daphne: Cupid\'s gold (love) + lead (repulsion) arrows → laurel tree. Explains Apollo\'s laurel.',
      'Coronis → Asclepius. Apollo\'s crow, revenge, and guilt.',
      'Hyacinthus: discus → death → hyacinth flower. Apollo + male youth.',
      'Marsyas: music contest → Apollo skins him alive. Extreme punishment aspect of Apollo.',
      'Cyrene: only successful love affair; etiological for Cyrene, North Africa.',
    ],
    likelyQuestions: [
      'Describe three of Apollo\'s love affairs. What recurring themes do they demonstrate?',
      'Explain the myth of Daphne. What role does Cupid play, and what does the myth explain etiologically?',
    ],
  },

  // ── 3c: Artemis ──────────────────────────────────────────────────────────────
  {
    code: '3c',
    title: 'Artemis',
    color: 'olive',
    examWeight: 'high',
    coreArgument: 'Artemis is defined above all by her virginity — the trait most fiercely defended and violently punished when violated. She is the direct antithesis of Aphrodite, but paradoxically is also linked to childbirth and women\'s transitions. She shares a function as a punisher of men and women with her twin brother Apollo, but her myths have a distinctive focus on sexuality, gender, and the enforcement of female chastity.',
    sections: [
      {
        heading: 'Overview and Core Character',
        content: 'Artemis is associated most often with the wilderness and with hunting. Like her twin brother Apollo, she carries a bow and arrows. The short Homeric Hymn dedicated to her describes her as "the virgin archeress reared with Apollo." She is also, as the first lines of the poem indicate, a goddess who prizes her virginity. She is often placed in direct contrast with Aphrodite. At the beginning of the Homeric Hymn to Aphrodite and in Euripides\' play Hippolytus, Artemis can be seen in competition with the goddess of love. She is then both literally and symbolically the antithesis of erotic love.',
        examTip: 'Three key contrasts: (1) Artemis vs. Aphrodite; (2) Artemis vs. Athena (Artemis = wilderness/hunting; Athena = city/craft); (3) Artemis vs. Apollo (close connection, but Artemis = women/sudden death, Apollo = men/pestilence).'
      },
      {
        heading: 'The Bow, Arrows, and Sudden Death',
        content: 'The bow and the arrow in the case of Artemis are connected to her role as a huntress (as we saw above, Apollo is not a hunter), but Artemis is importantly also a deity who, like her brother, brings punishment and death. Apollo, for example, brings death to the Greeks at the beginning of the Iliad when Agamemnon dishonours the seer Chryses. Artemis, his female counterpart, brings sudden death to women, including in childbirth. When the Greek hero Odysseus visits the underworld in the Odyssey (book 11, lines 172–73), he asks his mother\'s spirit if she died after a long illness or if it was Artemis who brought sudden death to her.',
        examTip: 'Important: Artemis brings SUDDEN DEATH TO WOMEN (as Apollo brings sudden death to men). This includes death in childbirth.'
      },
      {
        heading: 'Niobe — Hubris and Punishment',
        content: 'We encounter these themes and Artemis\' connection with her brother in the story of Niobe, told by Ovid in the sixth book of his Metamorphoses. Niobe is the daughter of Tantalus (famous for suffering the grotesque punishment for his transgression against the gods). Niobe does not learn from her father\'s fate and likewise offends the gods by boasting that she is better than Leto because she has six boys and six girls, while Leto gave birth only to Artemis and Apollo. We see the common motif of mortal competition against a god, with disastrous consequences. In her wrath, Leto calls upon Artemis and Apollo who set out to punish her. Apollo first kills all Niobe\'s sons; she continues to boast and Artemis does the same to her daughters. After great weeping, she is changed into a rock on a mountain, down which water flows, just as tears run down her face.',
        examTip: 'Niobe = daughter of Tantalus. Boasts she surpasses Leto (who only has two children). Apollo kills sons; Artemis kills daughters. Niobe becomes a weeping rock. Classic hubris myth.'
      },
      {
        heading: 'Actaeon — Accidental Transgression',
        content: 'Another myth about Artemis joins her two characteristics of huntress and punisher. This is the very famous story of Artemis and Actaeon. In this myth, Actaeon, a great hunter, inadvertently comes upon Artemis while she is bathing on Mount Cithaeron. Because he barges in upon her and sees her in the nude, she turns him into a great stag that is unable to speak. As he wanders the hills, he is followed by his own hounds and fellow hunting companions and is killed — a grotesque end for a mighty hunter who did nothing more than happen upon the goddess without intention. Of course, also very much at issue in the Actaeon myth is Artemis\' virginity, which is not to be transgressed even by the sight of a man. Indeed, death was the punishment for coming upon the bath of a virgin goddess such as Artemis, regardless of intention.',
        examTip: 'Actaeon transgression = ACCIDENTAL. He happens upon her by chance. Yet death is still the punishment. This is the key point — Artemis\'s virginity admits no exceptions, even for accidents.'
      },
      {
        heading: 'Callisto',
        content: 'Another permutation on the theme of punishment: Artemis seeks revenge in the story of Callisto, narrated in the second book of Ovid\'s Metamorphoses. The poor nymph Callisto, a huntress and attendant of Diana, is raped against her will by Jupiter (Zeus). He takes the form of Diana in order to get close to the girl, then rapes her. Although shamed, Callisto continues to roam with Diana\'s band until one day her clothes are stripped from her by her comrades as they go to bathe and her pregnancy is revealed. As soon as she sees this, Diana is said by Ovid to shout: "Get away from here! Do not defile this spring." With that, the girl is banished from Diana\'s band. There is notably NO wrongdoing on Callisto\'s part — but the violation of a virginal state is abhorrent to Diana, and she therefore casts Callisto away immediately. In Ovid\'s version, it is not Artemis who punishes Callisto for her love affair with Zeus, but Juno (Hera) in jealousy — who turns poor Callisto into a bear. Callisto is eventually placed in the sky to become a constellation along with her son Arcas. The connection between punishment and Artemis is nonetheless noteworthy.',
        examTip: 'Callisto: victim of Zeus\'s rape (he disguised as Diana/Artemis). Expelled by Artemis for pregnancy (not her fault). In Ovid: Hera turns her into a bear. In Greek versions: Artemis herself punishes her. Her son = Arcas. She becomes Ursa Major.'
      },
      {
        heading: 'Orion, Arethusa, and Artemis\'s Virginity',
        content: 'Artemis\' virginity is displayed in other myths as well. Orion, who in mythology becomes the constellation, is a famous hunter who tries to rape Artemis: in anger, the goddess makes a scorpion come out of the earth to sting Orion to death. At other times, Artemis is a defender of the virginity of her followers. This is well displayed in the myth of Arethusa. Arethusa is a hunting nymph with whom the river god Alpheus falls in love. As a virgin nymph, she flees and Alpheus pursues her. All seems lost until she prays to Artemis to save her. The goddess comes down and covers her in a cloud that sinks underground and flows as a river to Sicily, where Arethusa becomes a spring.',
        examTip: 'Orion tries to rape Artemis → scorpion kills him → becomes the constellation Orion. Arethusa: Artemis saves her from the river god Alpheus by transforming her into a spring in Sicily.'
      },
      {
        heading: 'Artemis and Childbirth — The Paradox',
        content: 'If Artemis is very unconnected with sexuality, paradoxically she is also linked to childbirth. Her concern with childbirth is perhaps best represented in the myth of her own birth. Leto gives birth to Apollo on Delos. She gives birth to Artemis on Ortygia, a nearby island, or in some accounts on Mount Cynthus on Delos itself. But in most versions of the twins\' birth, Artemis is born first and helps with the birth of her brother. In classical times, Artemis is also a goddess of the moon and is closely linked with both Selene (the moon in the heavens) and her cousin Hecate (who lives in the underworld but is also associated with fertility). Artemis was worshipped around the Greek world, but one of her most famous religious sites is Brauron, located 32 km southwest of Athens. The Brauronia was a festival that happened at Brauron every four years and was attended by the women of Athens.',
        examTip: 'Paradox: VIRGIN goddess connected to CHILDBIRTH. Explained by her myth: she helps deliver Apollo at birth. Brauron / Arkteia: girls "play the bear" before marriage.'
      },
      {
        heading: 'The Arkteia at Brauron',
        content: 'There was a religious ceremony at the festival called the Arkteia (from the Greek word arktos, meaning "bear"), in which all girls had to "play the bear" before they could marry. Girls would go to the site, where they would dress in special saffron robes, sacrifice to Artemis, and in some way "play the bear," although it is unclear exactly what this involved. The festival would have included processions, dancing, and foot races for the girls. This was a time during which young girls were being initiated into the cult of a goddess who would play an important role in their lives as mothers. We know that women also made dedications to Artemis at her sanctuary in Brauron after they gave birth and at other times for the health of their children.',
        examTip: 'Arkteia: girls "play the bear" at Brauron before marriage. Saffron robes, sacrifices, foot races. Etiological: explains female initiation rites connected to Artemis.'
      },
    ],
    keyTerms: [
      { term: 'Arkteia', definition: 'The religious ceremony at Brauron in which girls "played the bear" before they were eligible for marriage' },
      { term: 'Brauron', definition: 'A sanctuary of Artemis 32 km southwest of Athens; site of the Arkteia festival; attended by women of Athens' },
      { term: 'Ortygia', definition: 'Island near Delos where Artemis was born (in some accounts); she then helped deliver Apollo on Delos' },
    ],
    mustKnow: [
      'Artemis = virginity, wilderness, hunting, sudden death to women, childbirth (paradox), moon.',
      'Roman name: Diana.',
      'Direct antithesis of Aphrodite — this is explicit in Homeric Hymn to Aphrodite and Euripides\' Hippolytus.',
      'Actaeon: accidental transgression → still punished with death (turned into stag, killed by own hounds).',
      'Niobe: boasts she surpasses Leto → Apollo kills sons, Artemis kills daughters → rock.',
      'Callisto: raped by Zeus (disguised as Diana). Expelled by Artemis. Hera turns her into a bear (Ovid). Ursa Major.',
      'Paradox: virgin goddess connected to childbirth (helped deliver Apollo). Brauron/Arkteia.',
      'Artemis brings sudden death to women (Apollo brings sudden death to men).',
    ],
    likelyQuestions: [
      'Describe Artemis\'s key characteristics and explain the apparent paradox of a virgin goddess associated with childbirth.',
      'Discuss the myth of Actaeon. What does it tell us about Artemis\'s character and the Greek conception of divine punishment?',
      'What is the Arkteia? How does it connect Artemis to women\'s lives?',
    ],
  },

  // ── 4a: Aphrodite ─────────────────────────────────────────────────────────────
  {
    code: '4a',
    title: 'Aphrodite',
    color: 'terra',
    examWeight: 'high',
    coreArgument: 'Aphrodite is the goddess of erotic love and procreation. She combines seductive charm, fertility, and deception — traits shared with Pandora. Her universal power (she conquers even Zeus) is the central thesis of the Homeric Hymn to Aphrodite, where the irony is that Zeus humbles her by making her fall for a mortal. Her Near Eastern origins are significant and well-documented.',
    sections: [
      {
        heading: 'Birth and Two Versions',
        content: 'Aphrodite, whose Roman counterpart is Venus, is in Greek mythology the goddess of erotic love and procreation. In the Theogony, Hesiod describes even her birth as fecund, narrating her emergence from the severed genitals of the sky god Uranus. She emerges from sea foam ("aphros") near Cyprus. She came forth as "a reverend beautiful goddess, and grass grew up around her beneath her slender feet." While in Hesiod\'s story Aphrodite is a primordial goddess older than Zeus himself, in Homer\'s Iliad (book 3) there is an alternative and less spectacular version: she is the daughter of Zeus and Dione — a version that subjugates Aphrodite under Zeus\' parentage. In either case, she displays similar character traits: she is a female figure who combines seductive charm, fertility, and deception — characteristics also found in the description of Pandora in Hesiod\'s Works and Days (lines 59–82).',
        examTip: 'Two births: (1) Hesiod — from sea foam (genitals of Ouranos); primordial, older than Zeus. (2) Homer — daughter of Zeus and Dione. The Homer version subjugates her under Zeus. Both versions agree on her character: charm + fertility + deception.'
      },
      {
        heading: 'Aphrodite vs. Artemis — The Central Juxtaposition',
        content: 'The virgin Artemis, whom we encounter in another module, clearly does not mix well with the charming seductress Aphrodite, and in Greek literature the two goddesses are often placed in opposition to each other. One of the most striking juxtapositions of the two figures comes at the beginning of the Homeric Hymn to Aphrodite, from the seventh century BCE. This poem opens with general praise of Aphrodite and of her ability to conquer humans, animals, and even fellow gods in love. The poet presents three exceptions to the rule of Aphrodite\'s universal domination: Athena, Artemis, and Hestia, all virgin goddesses who cannot be tamed by Aphrodite\'s power.',
        examTip: 'The three exceptions to Aphrodite\'s power are Athena, Artemis, and Hestia. The Homeric Hymn to Aphrodite opens with this statement — it creates dramatic irony because Aphrodite then falls prey to her own power.'
      },
      {
        heading: 'The Homeric Hymn to Aphrodite — Anchises',
        content: 'The Homeric Hymn to Aphrodite is a poem that celebrates the goddess\' power and includes an extended narrative. In its opening lines, we hear that Aphrodite has been inciting the gods to mix with mortal men and women, and that she has even conquered Zeus. Zeus becomes fed up and decides to turn the tables on Aphrodite and to force her to stop boasting among the gods about her power over them. Zeus makes her fall in love with the mortal shepherd Anchises, whom Aphrodite proceeds to seduce. She must convince Anchises that she is mortal, since no man in his right mind would sleep with a goddess willingly (it is commonplace in mythology that a mortal man who sleeps with a goddess ends up in a bad way). Aphrodite is successful, and after sleeping with him, expands upon how she will give birth to Aeneas as a result of the union — Aeneas is the famous Trojan warrior who will later be the founder of Rome (as recounted in the Latin poet Virgil\'s Aeneid). The myth reveals that not even Aphrodite can resist herself — she is conquered by her own power.',
        examTip: 'Zeus\'s motivation: fed up with Aphrodite boasting she makes gods fall for mortals. He humbles her. The birth of Aeneas is a CONSEQUENCE, not the goal. Aeneas = future founder of Rome. Aphrodite conquered by her own power = central irony.'
      },
      {
        heading: 'Near Eastern Influence',
        content: 'Elements in the Homeric Hymn to Aphrodite speak to the origins of the Greek goddess. The Greek conceptualization of Aphrodite was significantly influenced by the Near Eastern world, where Aphrodite finds counterparts in the Sumerian and Akkadian Ishtar and Inanna. Aphrodite\'s major religious centre in the Greek world was in Cyprus — a place where Aphrodite developed as a goddess and a place with much influence from the Near East. When in the Homeric Hymn to Aphrodite the goddess arrives to speak to Anchises, she is dressed from head to foot in jewellery. Aphrodite is perhaps better known in the West in her nude form, but coming from the East, she is always described with elaborate clothing. Similarly, the danger for a mortal man to sleep with a goddess, mentioned above, is also found in the Near East. In the Sumerian poem The Descent of Inanna into the Underworld, animals cease mating when Inanna is not on earth.',
        examTip: 'Aphrodite = influenced by Sumerian Inanna and Akkadian Ishtar. Major cult centre: Cyprus (Near Eastern gateway). The Descent of Inanna = parallel to Aphrodite\'s power over nature.'
      },
      {
        heading: 'Adonis',
        content: 'A second mortal with whom Aphrodite falls in love is Adonis. He is of Near Eastern origin, and his name is Semitic ("Adon" means "Lord"). Aphrodite falls in love with him, hides him in a chest, and gives him to Persephone to protect. As one might expect, Persephone falls in love with Adonis and does not want to give him back. Zeus solves the matter by ruling that Adonis should spend part of the year with Persephone in the underworld and part with Aphrodite on earth — he is later worshipped as a divine being who dies every year. Much like Persephone, one can understand Adonis as representing the seasons in death and birth, which is altogether appropriate for a character connected to the fertility goddess Aphrodite. In Ovid, Adonis is not locked in a chest but is rather killed while on the hunt by the tusk of a boar and changed by Venus into a flower (the anemone, the colour of a pomegranate and without scent).',
        examTip: 'Adonis: Near Eastern (Semitic "Adon" = Lord). Annual death and rebirth = seasons. Connected to both Aphrodite AND Persephone (parallels the Persephone/Demeter myth). In Ovid: killed by boar → anemone flower.'
      },
      {
        heading: 'Pygmalion',
        content: 'Another prominent myth involving Aphrodite is that of Pygmalion and Galatea (after which George Bernard Shaw named his play Pygmalion, which formed the basis of the musical play My Fair Lady). In the story, Pygmalion is disgusted with the women of Cyprus because of their prostitution — Aphrodite had made them prostitute themselves in punishment for not having recognized her divinity. As a result of his disgust, Pygmalion does not take a wife but instead fashions an ivory statue of a woman of great beauty, with which he falls in love. He prays to Aphrodite to take this statue as his wife and she grants the wish. This woman is later known as Galatea, who gives birth to a son named Paphos. The story of Adonis is also connected to a story involving Paphos: Paphos\' granddaughter falls in love with her own father, Cinyras (a famous mythological hero of Cyprus).',
      },
    ],
    keyTerms: [
      { term: 'Petra tou Romiou', definition: 'Rock formation on the southern coast of Cyprus; according to local legend, the birthplace of Aphrodite (Hesiodic version)' },
      { term: 'Aphros', definition: 'Greek: sea foam. Aphrodite\'s name derives from this — she is the "foam-born goddess"' },
      { term: 'Inanna / Ishtar', definition: 'Sumerian/Akkadian goddess who is the Near Eastern counterpart of Aphrodite; major influence on Greek Aphrodite' },
      { term: 'Adonis', definition: 'Near Eastern (Semitic "Adon" = Lord); mortal loved by Aphrodite; annual death and rebirth represents the seasons; → anemone flower in Ovid' },
    ],
    mustKnow: [
      'Two versions of Aphrodite\'s birth: Hesiod (sea foam from Ouranos\'s genitals, primordial) vs. Homer (daughter of Zeus and Dione).',
      'Three exceptions to her power: Athena, Artemis, Hestia — all virgins.',
      'Homeric Hymn to Aphrodite: Zeus humbles her → she falls for Anchises → gives birth to Aeneas.',
      'Aphrodite\'s character traits = seductive charm, fertility, deception (same as Pandora in Hesiod).',
      'Near Eastern origins: Sumerian Inanna, Akkadian Ishtar. Major cult: Cyprus.',
      'Adonis: Near Eastern, seasonal myth; loved by both Aphrodite and Persephone.',
      'Pygmalion: ivory statue → Galatea (basis for Shaw\'s Pygmalion / My Fair Lady).',
    ],
    likelyQuestions: [
      'Describe Aphrodite\'s character and power as revealed in the Homeric Hymn to Aphrodite. What does her affair with Anchises reveal?',
      'What are the Near Eastern origins of Aphrodite? Name her Near Eastern counterparts.',
      'Describe the myth of Adonis. How does it connect to the seasonal myth of Persephone?',
    ],
  },

  // ── 4b: Eros/Cupid ───────────────────────────────────────────────────────────
  {
    code: '4b',
    title: 'Eros (Cupid)',
    color: 'terra',
    examWeight: 'high',
    coreArgument: 'Eros/Cupid has two very different identities: (1) the primordial cosmic force in Hesiod\'s Theogony, present at the very beginning of creation; and (2) the later mischievous winged child, son of Aphrodite, familiar from Hellenistic and Roman (Apuleius) literature. The myth of Cupid and Psyche is the most elaborate love myth in ancient literature and rewards multiple interpretive frameworks.',
    sections: [
      {
        heading: 'Two Versions of Eros',
        content: 'Eros in Greek and Cupid in Latin. Eros, the son of Aphrodite, should not be confused with the primordial deity of Hesiod. This later Eros is not present in earlier Greek literature such as Homer or Hesiod (whose work is dated to the eighth to seventh centuries BCE), but he becomes a regular figure in Classical and especially in Hellenistic times (fourth and third centuries BCE), at which point he develops the playful elements of a petulant child, most familiar to modern audiences from his presentation in Latin literature. In Plato\'s Symposium (fifth to fourth centuries BCE), Socrates argues that Eros is not a god but that his nature is somewhere between god and mortal, good and bad, beautiful and ugly — a spiritual being who facilitates communication between human people and gods. According to Plato, Eros is the son not of Aphrodite and Ares but of Resourcefulness and Poverty.',
        examTip: 'KEY: Hesiod\'s Eros = primordial cosmic force (NOT son of Aphrodite). Later literary Eros = mischievous son of Aphrodite with arrows. Plato\'s Eros = daimon (between god and mortal), son of Resourcefulness and Poverty.'
      },
      {
        heading: 'Cupid and Psyche — Overview',
        content: 'The most powerful myth concerning Cupid involves his relationship with Psyche, recounted prominently by the Roman poet Apuleius (who wrote in the second century CE). This complex myth is worthy of summary here. Psyche (soul) is the youngest of three royal daughters. She is extremely beautiful, such that she is compared directly to Venus. This outrages Venus, who has Cupid make Psyche fall in love with a terrible man. However, Venus\' plan backfires when Cupid himself falls in love with Psyche. Psyche does not find a husband because of this love, and her father, thinking something divine is affecting his daughter\'s marriage, consults the oracle of Apollo. The oracle proclaims that Psyche should be dressed as a corpse and left atop a mountain to be the wife of a serpent (a sacred marriage with a god). Instead of a serpent, she is carried from the mountain by the winds and descends to a valley, where she lives in a palace. She is visited each night by a secret lover. Her sisters search for her.',
        examTip: 'Psyche = "soul" in Greek. Venus = antagonist (jealous of Psyche\'s beauty). Cupid falls for her himself (his own arrow). The source is APULEIUS (2nd century CE), NOT Ovid.'
      },
      {
        heading: 'Psyche\'s Impossible Tasks',
        content: 'Venus, meanwhile, is furious at Psyche for having burned her son with oil. She captures her and makes her undertake several impossible tasks. Venus forces Psyche to carry out a series of impossible tasks: (1) sort out mixed grains by nightfall — an ant helps her; (2) get wool from a flock of dangerous sheep — a reed helps her; (3) go to a tall mountain and bring back water from a river that went to the underworld (a dragon guards this stream) — an eagle of Jupiter gets the water for her; (4) take a box to Proserpina (Persephone) in the underworld in which she is to bring back a fragment of the goddess\' beauty. Psyche tries to kill herself before the task by jumping off a high tower, but the tower helps her. It explains how she should enter the underworld (with food to calm Cerberus and money for Charon, the ferryman) and warns her not to look in the box. But she cannot resist looking into the box, which contains a death-like sleep, not beauty, and she is enveloped by death. Finally, Cupid comes after her to save her, putting death back in the box.',
        examTip: 'Four tasks: (1) sort grains (ants help); (2) golden fleece (reed helps); (3) water from Styx (eagle helps); (4) Persephone\'s beauty box (tower helps). She opens the box and falls into a death-like sleep. Cupid rescues her.'
      },
      {
        heading: 'Resolution and Themes',
        content: 'Jupiter accepts their marriage and Psyche is made a goddess. This complex myth leads to many interpretations. Note that we once again see love, here personified as Cupid, involved in reproduction and resurrection from the dead (Psyche\'s descent into the underworld and Cupid\'s rescue), which can be connected to a myth such as Adonis\' descent into the underworld and his encounter with Persephone. In Greek and Roman literature, Aphrodite/Venus and Eros/Cupid, her son, are deities who profoundly impact both gods and mortals and who are often at the centre of mythology\'s exploration of mortality and immortality. Both are frequently presented in lighthearted and amusing ways, but at the centre of such entertaining myths lie some very serious questions.',
        examTip: 'Themes: love/mortality/immortality; curiosity (Psyche\'s two mistakes: looking at Cupid, opening the box); death and resurrection; soul\'s journey to divine status. Psyche = "soul" — allegorical reading is possible.'
      },
    ],
    keyTerms: [
      { term: 'Psyche', definition: 'Greek: soul. The youngest royal daughter who becomes Cupid\'s wife; undergoes four impossible tasks; eventually deified.' },
      { term: 'Apuleius', definition: '2nd century CE Latin author; his Metamorphoses (The Golden Ass) contains the most elaborate surviving version of Cupid and Psyche.' },
      { term: 'Daimon', definition: 'In Plato\'s Symposium: a being between god and mortal, good and bad. Plato argues Eros is a daimon, not a god.' },
    ],
    mustKnow: [
      'TWO Eros figures: (1) Hesiod = primordial cosmic force; (2) Classical/Hellenistic = mischievous son of Aphrodite.',
      'Plato\'s Eros (Symposium): daimon between god and mortal; son of Resourcefulness and Poverty.',
      'Cupid and Psyche source: APULEIUS (Metamorphoses / Golden Ass), 2nd century CE.',
      'Psyche = "soul" in Greek.',
      'Four tasks: sort grains (ants), golden fleece (reed), water from Styx (eagle), Persephone\'s box (tower).',
      'She opens the box → death-like sleep → Cupid rescues → Psyche deified.',
      'Theme: curiosity, love vs. death, mortality/immortality.',
    ],
    likelyQuestions: [
      'Summarize the myth of Cupid and Psyche. What are the four impossible tasks, and what themes does the myth explore?',
      'What is the difference between the primordial Eros in Hesiod and the later Eros/Cupid? What does Plato say about Eros?',
    ],
  },

  // ── 4c: Athena ─────────────────────────────────────────────────────────────
  {
    code: '4c',
    title: 'Athena',
    color: 'slate',
    examWeight: 'high',
    coreArgument: 'Athena is a virgin goddess closely tied to masculinity, war (strategic and civilizing, contrasted with Ares\'s destructive war), craft, and wisdom. Born from Zeus\'s head after he swallowed Metis, she is simultaneously the most "masculine" female deity and the protector of civilization, cities, and the clever hero Odysseus.',
    sections: [
      {
        heading: 'Birth and Paradox',
        content: 'Athena is one of the younger Olympian deities and the daughter of Zeus. She is a virgin goddess and is closely tied to masculinity, even from the moment of her birth in the absence of a mother. Zeus swallows his wife Metis (wisdom), after which Athena is born from her father\'s head. This myth establishes her not only in a privileged position in relation to her father but also as a feminine deity distant from her maternal side. Athena is a virgin and is in many respects a very masculine woman, although she does not, as we will see, remove herself entirely from the realm of feminine activity.',
        examTip: 'Athena\'s birth = from Zeus\'s head after he swallowed Metis. She arrives fully armed. Hephaestus splits open Zeus\'s head with an axe in some accounts. She is simultaneously masculine (war) and feminine (craft, weaving).'
      },
      {
        heading: 'Goddess of War',
        content: 'Athena is perhaps most well-known to us as a goddess of war. Her most common representation in art is with a helmet and a spear, accoutrements that she retains into the Roman period as Minerva. In Homer\'s Iliad, her prowess in war is well known — she is frequently presented as a feminine counterpart to Ares, the male war god. Near the end of book five, we find a description of Athena arming for battle in her father\'s house: "On her father\'s threshold Athene... took off the soft embroidered robe she had made and worked with her own hands, replaced it with a tunic and over that put on the armour of Zeus who marshals the clouds... Then she stepped into the fiery chariot and took up the long, thick, heavy spear with which she breaks the ranks of warriors." It is important to distinguish Ares from Athena: both are connected to war, but their approaches are very different. Ares is a destructive god who incites strife and urges on furious battle, whereas Athena is a goddess who takes a more thoughtful approach to battle and who often serves as a protective goddess. She does not barge ahead to incite strife at every turn.',
        examTip: 'Athena = strategic, protective, civilizing war. Ares = destructive, brutal war. In Iliad Book 5, Diomedes wounds Ares (with Athena\'s help). Zeus himself rebukes Ares for being the most hateful of gods.'
      },
      {
        heading: 'Goddess of Craft and Wisdom',
        content: 'There is another side to Athena — she is a goddess of craft. She is said to be the patron goddess of carpenters in the Iliad (book 5, line 61; book 15, line 412) and in the Odyssey (book 8, line 493) and to have played a part in the construction of the famous wooden horse. Her servant is the builder of the plough in Hesiod\'s Works and Days (line 430). In fact, along with Hephaestus, she is said in mythology to be the first to teach such skills to humans. In Hesiod\'s Works and Days (lines 63–64). She is known as Athena Ergane (Athena the Craftmaker) and is connected to both masculine and feminine crafts. In Homer\'s Odyssey, she appears as a help to Penelope during the long years of Odysseus\' journey — she is the patron of the male Odysseus in his cleverness and is equally comfortable in either sphere. The German scholar of Greek religion Walter F. Otto called her "the goddess of nearness."',
        examTip: 'Athena Ergane = Athena the Craftmaker. She teaches skills to humans along with Hephaestus. Patron of Odysseus (the clever hero) = connects war/wisdom domains.'
      },
      {
        heading: 'Arachne',
        content: 'One prominent myth that displays Athena\'s role as the teacher of craft is the story of her quarrel with Arachne (spider), told in Ovid\'s Metamorphoses. Athena becomes angry with Arachne because her skill at wool-making matches that of Athena herself. Arachne is therefore praised as being better than Athena. Athena throws off her disguise and they compete. Arachne is in fact quite successful and wins the competition, but Athena strikes back in anger. Arachne hangs herself in order to escape the shame of the punishment, but Athena eventually takes pity on her and turns her into a spider.',
        examTip: 'Arachne: mortal weaver who matches/surpasses Athena → hangs herself → transformed into a spider. Etiological: explains why spiders weave. Hubris theme.'
      },
      {
        heading: 'Athens and the Parthenon',
        content: 'The most famous cult of Athena is that of Athena Polias (Athena, Protectress of the City) in Athens — which was named after her. At the heart of ancient Athens stood the famous Parthenon, a temple dedicated to her. The temple is largely in ruins today. She is connected to the protection of the city and its internal justice and smooth running — a protector and a civilizing goddess. Athena was closely associated with cities and civic governments.',
        examTip: 'Athena Polias = Protectress of the City. Athens named after her. Parthenon = her great temple. Connects her war domain to civilization/law.'
      },
    ],
    keyTerms: [
      { term: 'Metis', definition: 'Wisdom personified; Athena\'s mother; swallowed by Zeus before Athena was born from his head' },
      { term: 'Aegis', definition: 'The divine shield/breastplate of Zeus (and Athena), decorated with the Gorgon\'s head — symbol of divine protection' },
      { term: 'Athena Ergane', definition: 'Athena the Craftmaker — her aspect as goddess of craft, patron of both masculine and feminine crafts' },
      { term: 'Athena Polias', definition: 'Athena, Protectress of the City — her aspect as city goddess, patron of Athens' },
      { term: 'Parthenon', definition: 'Athena\'s famous temple on the Acropolis of Athens; one of the most famous buildings in the ancient world' },
    ],
    mustKnow: [
      'Athena born from Zeus\'s head after he swallowed Metis. Arrives fully armed.',
      'Virgin goddess — closely tied to MASCULINITY despite being female.',
      'Athena = strategic/protective/civilizing war. CONTRAST: Ares = destructive/brutal war.',
      'Goddess of craft (Athena Ergane) + goddess of wisdom. Both masculine AND feminine crafts.',
      'Patron of Odysseus (the clever hero, Odyssey).',
      'Arachne: weaver who challenges Athena → transformed into a spider. Hubris + etiological.',
      'Athena Polias: Protectress of the City. Athens named after her. Parthenon = her temple.',
    ],
    likelyQuestions: [
      'Compare Athena and Ares as gods of war. What does the difference between them tell us about Greek values?',
      'Describe Athena\'s birth and explain how it establishes her paradoxical character as both masculine and feminine.',
      'Describe the myth of Arachne and explain what it reveals about Athena.',
    ],
  },

  // ── 4d: Ares ──────────────────────────────────────────────────────────────────
  {
    code: '4d',
    title: 'Ares',
    color: 'terra',
    examWeight: 'medium',
    coreArgument: 'Ares is the male war god who represents destructive, brutal violence — the opposite of Athena\'s strategic, civilizing war. He has almost no mythological importance in Greek tradition and was held in contempt even by Zeus. His Roman equivalent Mars, however, was one of the most important Roman gods — father of Romulus and Remus and associated with victorious conquest and even agriculture.',
    sections: [
      {
        heading: 'Ares in Greek Religion',
        content: 'Ares (known as Mars in Latin) is a male counterpart to Athena as a god of war. He is not personified in mythology frequently, although he does appear as a personified character in the Iliad. In book 5, when Ares is wounded by the mortal Greek hero Diomedes, Zeus rebukes Ares for being a destructive god and being hateful to Zeus to the extent that, were he not Zeus\' son, Zeus would have banished him from the company of the gods long ago. He also appears as the adulterous lover of Aphrodite, as discussed at the outset of this module (a myth recounted in book 8 of Homer\'s Odyssey), where his subjugation by Aphrodite can be read as a victory of her civilizing element over the brute force of war. It is important to distinguish Ares from Athena, for while both are connected to war, their approaches are very different: Ares is a destructive god who incites strife and urges on furious battle, whereas Athena is a goddess who takes a more thoughtful approach to battle and who often serves as a protective goddess.',
        examTip: 'Ares is wounded by Diomedes (a mortal!) in Iliad Book 5 — with Athena\'s help. Zeus calls him "the most hateful of all gods." He is the adulterous lover of Aphrodite (Odyssey Book 8 — Hephaestus\'s net).'
      },
      {
        heading: 'Mars vs. Ares',
        content: 'While Ares\' equivalent in Roman mythology is Mars, the two gods are notably different in their associations and religious significance (more so than many of the Roman/Greek counterpart gods of ancient mythology). While Ares was a god of destructive war and was often held at a distance by the ancient Greeks, Mars was associated by the Romans with victorious conquest as well as with crops and the harvest. As a result, Mars was among the more culturally significant and popular of the Roman gods. The same could not typically be said of Ares for the ancient Greeks.',
        examTip: 'The MOST IMPORTANT contrast in this module: Ares = destructive war, low prestige for Greeks. Mars = victorious conquest + crops + harvest + father of Romulus and Remus. Mars is one of the most important Roman gods; Ares is one of the least important Greek gods.'
      },
    ],
    keyTerms: [
      { term: 'Mars', definition: 'Roman equivalent of Ares — far more important than his Greek counterpart; associated with victorious conquest, crops, and as father of Romulus and Remus' },
    ],
    mustKnow: [
      'Ares = destructive/brutal war. Athena = strategic/protective/civilizing war. This contrast is central.',
      'Ares wounded by Diomedes (mortal) in Iliad Book 5, with Athena\'s help. Zeus rebukes him.',
      'Ares = adulterous lover of Aphrodite; caught in Hephaestus\'s net (Odyssey Book 8).',
      'MARS vs. ARES: Mars = victorious conquest + crops/harvest + father of Romulus and Remus. Much more culturally significant to Romans than Ares was to Greeks.',
    ],
    likelyQuestions: [
      'Compare Ares and Mars. Why is Mars culturally much more significant to the Romans than Ares was to the Greeks?',
      'How does Ares appear in the Iliad and what does Zeus say about him? What does this tell us about Greek attitudes toward destructive warfare?',
    ],
  },
];

// ─── Per-module quiz questions drawn directly from PDF content ─────────────────

import type { QuizQuestion } from './data2'

export const MODULE_QUIZ: QuizQuestion[] = [
  // 1a
  { id: 101, category: '1a', question: 'According to the course, which of the following best defines "myth" as used in CLAS 104?', options: ['Stories that are entirely fictitious and have no historical basis', 'Only oral stories about gods from ancient Greece', 'Stories told through words, art, music, dance, or media that express universal truths about humanity and existence', 'Any narrative that involves supernatural beings'], correct: 2, explanation: 'The course uses a broad definition: myths are stories told through many media that express universal truths. The key point is that myths are NOT simply "not true" — they can have historical basis and express genuine emotional/social truths.' },
  { id: 102, category: '1a', question: 'What are the three categories of Greco-Roman myth used in this course?', options: ['Myth Proper, Folktale, Fable', 'Myth Proper, Saga/Legend, Folktale', 'Divine Myth, Heroic Myth, Aetiological Myth', 'Historical Myth, Sacred Myth, Folk Myth'], correct: 1, explanation: 'The three categories are Myth Proper (stories primarily about gods), Saga/Legend (stories with a perceived connection to history), and Folktale (fantastical adventure involving heroes or heroines). These are NOT absolute — the Iliad qualifies as all three.' },
  { id: 103, category: '1a', question: 'Homer\'s Iliad is given as an example of which statement about the three categories?', options: ['It is purely a folktale with no historical basis', 'It qualifies simultaneously as myth proper, saga/legend, AND folktale', 'It is only a saga/legend because it has historical roots', 'It is a myth proper because it involves the gods so prominently'], correct: 1, explanation: 'The course explicitly states that the Iliad simultaneously qualifies as all three categories — it is NOT absolute which category a myth belongs to. The Iliad has divine involvement (myth proper), historical basis (saga), and fantastical heroic elements (folktale).' },

  // 1b
  { id: 111, category: '1b', question: 'The term "etiology" derives from the Greek word "aitia." What does aitia mean?', options: ['Truth', 'Cause', 'Story', 'Origin'], correct: 1, explanation: 'Aitia (αἰτία) means "cause." Etiological myths explain causes or origins of rituals, natural phenomena, place names, social customs, or institutions. The Homeric Hymn to Demeter is the course\'s primary example.' },
  { id: 112, category: '1b', question: 'According to the module, what is the specific example of an etiological myth given in the course?', options: ['The Iliad explaining why Greeks and Trojans were enemies', 'The myth of Narcissus explaining why self-love is dangerous', 'The Homeric Hymn to Demeter explaining the founding of the Eleusinian cult and the origin of the seasons', 'The myth of Perseus explaining why Medusa has snakes for hair'], correct: 2, explanation: 'The course explicitly identifies the Homeric Hymn to Demeter as the primary example of an etiological myth. It explains two things simultaneously: (1) the origin of the seasons (Demeter\'s grief = winter) and (2) why the Eleusinian Mysteries at Eleusis exist.' },
  { id: 113, category: '1b', question: 'What is the core claim of Freud\'s psychoanalytic approach to myth, as presented in the course?', options: ['Myths are allegories of natural phenomena like the sun and seasons', 'Myths fulfill repressed wishes and desires — like waking dreams', 'Myths reflect the social customs and beliefs of the culture that produced them', 'Myths mediate structural binary opposites in human thought'], correct: 1, explanation: 'Freud saw myth as a "waking attempt to understand and explain the impulses of the dream world." Like dreams, myths fulfill repressed wishes and desires. His most famous application: the Oedipus complex, named directly from Sophocles\' Oedipus Rex.' },
  { id: 114, category: '1b', question: 'What key concept distinguishes Jung\'s approach from Freud\'s?', options: ['Jung rejected all psychological interpretations of myth', 'Jung focused on myths from non-Western cultures only', 'Jung argued myths project the "collective unconsciousness" and contain universal "archetypes"', 'Jung believed myths were purely historical documents'], correct: 2, explanation: 'While Freud focused on the individual unconscious and sexual repression, Jung extended the theory to the "collective unconsciousness" — shared unconscious tendencies of ALL humanity. Myths project these and contain "archetypes" — universal patterns of behavior.' },
  { id: 115, category: '1b', question: 'What is the central criticism that Malinowski makes of Freud\'s and Jung\'s psychoanalytic approaches?', options: ['They do not account for the economic factors in myth production', 'Their approach is too generalized and does not account for differences in distinct cultures around the world', 'They fail to explain the role of women in mythology', 'They only work for Greek myths, not myths of other cultures'], correct: 1, explanation: 'This is stated directly in the module. Malinowski argued you must LIVE WITHIN a culture to understand its myths — they reflect specific social customs and beliefs. The psychoanalytic approach is TOO GENERALIZED.' },
  { id: 116, category: '1b', question: 'According to Lévi-Strauss\'s structuralism, what do myths fundamentally do?', options: ['Explain the origins of religious rituals', 'Fulfill unconscious sexual desires in symbolic form', 'Mediate structural binary opposites (like raw/cooked, mortal/immortal)', 'Record historical events in poetic form'], correct: 2, explanation: 'Lévi-Strauss argued that myths are a way in which people communicate by mediating structural binary opposites — raw/cooked is his most famous example. Behind the individual narrative details, one can find underlying structural oppositions in myths of ALL cultures.' },
  { id: 117, category: '1b', question: 'Walter Burkert\'s approach is described as a "synthesis." What does this mean?', options: ['He combined Greek and Roman mythology into one unified system', 'He accepted structuralism and psychology but insisted they must be grounded in specific historical and religious context', 'He merged Freud\'s and Jung\'s theories into one psychoanalytic framework', 'He argued that all myths can be explained by a single unified theory'], correct: 1, explanation: 'Burkert\'s approach is attractive in its inclusiveness — it recognizes universal truths in myth AND accepts structuralism and psychology, while grounding such approaches in the historical and religious context of a society.' },

  // 1c
  { id: 121, category: '1c', question: 'Who discovered the site of Knossos on Crete in 1899?', options: ['Heinrich Schliemann', 'Homer', 'Arthur Evans', 'Walter Burkert'], correct: 2, explanation: 'Arthur Evans discovered Knossos — a large palace of what was a powerful and influential Minoan society (named after King Minos of Crete, father of the Minotaur in Greek mythology). Knossos was built in approximately 1700 BCE.' },
  { id: 122, category: '1c', question: 'In what historical period were Greek myths first written down?', options: ['The Mycenaean period (1600–1150 BCE)', 'The Dark Age (1150–900 BCE)', 'The Archaic Period (ca. 750–500 BCE)', 'The Classical Period (ca. 500–323 BCE)'], correct: 2, explanation: 'Prior to the Archaic period, myth was transmitted orally. The Archaic period (750–500 BCE) is when myths were FIRST WRITTEN DOWN — sometime in the late 8th or early 7th century BCE. These first surviving versions include Hesiod and Homer.' },
  { id: 123, category: '1c', question: 'The module states that Roman literature "often draws extensively upon Greek versions of myth." What important qualification does it make?', options: ['Roman versions are completely identical to Greek originals', 'Roman versions are not slavish — they change and adapt mythology to their own ends', 'Roman versions are less sophisticated than Greek originals', 'Roman authors simply translated Greek myths word for word'], correct: 1, explanation: 'This is a direct quote from the module: "Roman literature and art often draw extensively upon Greek versions of myth and compositional techniques, but Roman versions are not slavish. They change and adapt mythology to their own ends." This is a key principle for understanding Roman myth.' },
  { id: 124, category: '1c', question: 'During which period was dramatic performance of myth — including the plays of Aeschylus, Sophocles, and Euripides — first developed?', options: ['Hellenistic Period', 'Mycenaean Period', 'Archaic Period', 'Classical Period (500–323 BCE)'], correct: 3, explanation: 'The Classical Period (500–323 BCE) is when myth was retold in dramatic performances developed for the first time in Athens. The tragedies of Aeschylus, Sophocles, and Euripides (the three most famous tragedians) deal chiefly with mythological themes.' },

  // 2a
  { id: 131, category: '2a', question: 'What is "theogonic poetry" as defined in the module?', options: ['Any poetry involving the Greek gods', 'Poetry describing the origin of the world, the gods, and the events leading to the establishment of the present order', 'Poetry written in honor of Zeus specifically', 'Epic poetry about the battles between gods and Titans'], correct: 1, explanation: 'M. L. West\'s definition: theogonic poetry describes "the origin of the world and the gods, and the events which led to the establishment of the present order." Hesiod\'s Theogony is the most famous example.' },
  { id: 132, category: '2a', question: 'In the Hurrian mythology, the god Kumarbi is a direct parallel to which Greek figure?', options: ['Zeus', 'Ouranos', 'Kronos', 'Poseidon'], correct: 2, explanation: 'Kumarbi (Hurrian) = Kronos (Greek). Both castrate the sky-god above them (Anu/Ouranos) and swallow. The weather god that emerges from Kumarbi\'s belly = Zeus. This shows direct cross-cultural transmission from the Near East to Greece.' },
  { id: 133, category: '2a', question: 'According to the module, why did the ancient Greeks think Hesiod\'s Theogony was composed before Homer\'s epics?', options: ['Because Hesiod lived several centuries before Homer', 'Because the Theogony explains origins and codifies the Olympian system, which is logically prior to the events Homer describes', 'Because the Theogony was found on older tablets than the Iliad', 'Because Hesiod mentions Homer by name in the poem'], correct: 1, explanation: 'The answer is logical: the Theogony explains origins and attempts to codify the Olympian system of gods and goddesses. In Homer\'s Iliad and Odyssey, the Olympian gods act out their lives — it is only natural that the origin story (Theogony) would be understood as prior.' },
  { id: 134, category: '2a', question: 'Athena is born from Zeus\'s head. What had Zeus done that led to this unusual birth?', options: ['He cursed Hera, preventing her from bearing children', 'He swallowed his first wife Metis (wisdom), after which Athena was born from his head', 'He absorbed the power of Ouranos after defeating the Titans', 'He made a special bargain with the Fates'], correct: 1, explanation: 'Zeus swallows his wife Metis (personified wisdom) to prevent a prophecy that his son would overthrow him. After swallowing Metis, Athena is born fully armed from Zeus\'s head. This means Athena incorporates both Zeus\'s power AND Metis\'s wisdom.' },

  // 2b
  { id: 141, category: '2b', question: 'Why does Hesiod\'s version of the Five Ages have FIVE ages while Ovid\'s has only FOUR?', options: ['Ovid forgot to include one', 'Hesiod inserted the Age of Heroes specifically, interrupting the otherwise steady decline; Ovid excludes it', 'Ovid\'s version ends with the Bronze Age', 'Ovid uses a different numbering system starting from zero'], correct: 1, explanation: 'The Age of Heroes seems to have been inserted specifically by Hesiod — it interrupts the otherwise steady decline by inserting a period of heroic figures linked to the divine (the Trojan War era). Ovid\'s four-age system (Gold, Silver, Bronze, Iron) does not include this insertion.' },
  { id: 142, category: '2b', question: 'Why does Zeus withhold fire from humanity in Hesiod\'s account?', options: ['He fears humans will become powerful enough to challenge the gods', 'Fire is sacred to Hephaestus and cannot be shared', 'Prometheus tricked Zeus at a sacrifice, and fire is Zeus\'s punishment / revenge', 'Hera convinced Zeus that fire would corrupt human nature'], correct: 2, explanation: 'Prometheus tricks Zeus at a sacrifice — wrapping bones/fat attractively and meat unattractively so Zeus chooses the worse portion. An angry Zeus withholds fire as punishment. Prometheus then steals fire hidden in a fennel stalk.' },
  { id: 143, category: '2b', question: 'What is the correct term for the container that Pandora opens, and what specifically remains inside after all the evils escape?', options: ['A box; despair remains inside', 'A jar (pithos); Hope/Anticipation (Elpis) remains inside', 'A chest; Love remains inside', 'An urn; Death remains inside'], correct: 1, explanation: 'It is a JAR (pithos) — not a box. "Pandora\'s box" is a mistranslation/popular misconception. Hope or Anticipation (Elpis in Greek) remains inside after all the evils escape. The ambiguity of Hope remaining (positive or negative?) is a key interpretive question.' },

  // 3a
  { id: 151, category: '3a', question: 'The Homeric Hymn to Apollo has two distinct parts. What does each part explain etiologically?', options: ['Part 1: why Apollo has a bow; Part 2: why Apollo is connected to the sun', 'Part 1: the founding of the cult at Delos (Apollo\'s birthplace); Part 2: the founding of the oracle at Delphi', 'Part 1: Apollo\'s birth from Zeus; Part 2: Apollo\'s love affairs', 'Part 1: Apollo vs. Python; Part 2: Apollo and the Muses'], correct: 1, explanation: 'The Homeric Hymn to Apollo has two distinct parts: Part 1 is centered on Delos, explaining why Apollo was born there (Leto was rejected everywhere else due to Hera\'s jealousy — Delos agreed and swore an oath). Part 2 is centered on Delphi, explaining how Apollo founded the oracle there.' },
  { id: 152, category: '3a', question: 'What does the name "Pytho/Python" mean in Greek, and how does it explain the name of the oracle at Delphi?', options: ['Python means "serpent" — the oracle is named after the snake Apollo killed', 'Pytho means "to rot" — referring to the carcass of the snake Apollo killed; the oracle site and Apollo\'s title Pythios derive from this', 'Python means "prophecy" — the oracle is connected to prophetic snakes', 'Pytho means "to speak" — referring to the pronouncements of the Pythia'], correct: 1, explanation: 'Pytho derives from the Greek verb pythein = "to rot." When Apollo kills the great snake near Mt. Parnassos, the carcass rots there. The oracle site is called Pytho, Apollo has the cult title Pythios, and his prophetess is the Pythia — all from the same root.' },
  { id: 153, category: '3a', question: 'How many Homeric Hymns are there in total, and what are the FIVE longest and most ancient ones?', options: ['20 hymns; to Zeus, Hera, Poseidon, Apollo, Athena', '33 hymns; to Dionysus, Demeter, Apollo, Hermes, Aphrodite', '12 hymns; one for each Olympian god', '50 hymns; one for each major myth in Greek tradition'], correct: 1, explanation: '33 Homeric Hymns total. The five relatively long and ancient hymns at the collection\'s beginning are: (1) Dionysus (fragmentary), (2) Demeter, (3) Apollo, (4) Hermes, (5) Aphrodite. These contain extended mythological narratives, not just praise — they describe births and key events in the deity\'s life.' },

  // 3b
  { id: 161, category: '3b', question: 'Why does Marpessa choose the mortal Idas over the god Apollo when Zeus gives her the choice?', options: ['Because Idas is physically stronger than Apollo', 'Because she loves Idas, having been abducted by him', 'Because Idas is mortal — she prefers a mortal lover since gods outlive mortals, introducing incompatibility', 'Because Apollo had previously wronged her family'], correct: 2, explanation: 'Marpessa chooses Idas because he is mortal — the module explains this reflects \"the interaction — or rather the incompatibility — of mortality and immortality\" which is frequent in mythology. She does not want a god who will outlive her. This introduces the key motif of Apollo\'s love myths: the unsuccessful love affair.' },
  { id: 162, category: '3b', question: 'In the myth of Daphne, what causes Apollo to fall in love with her, and what causes Daphne to flee?', options: ['Apollo falls in love spontaneously; Daphne flees because she is already betrothed', 'Cupid shoots Apollo with a gold arrow (causing love) and Daphne with a lead arrow (causing repulsion)', 'Apollo is enchanted by Daphne\'s singing; Daphne flees because Apollo mocked her beauty', 'Zeus commands Apollo to pursue Daphne as a test of his character'], correct: 1, explanation: 'After Apollo mocks Cupid\'s archery, Cupid retaliates by shooting Apollo with a gold arrow (causing him to fall in love with Daphne) and Daphne with a lead arrow (making her shun all love). The myth thus demonstrates Apollo\'s hubris causing his own suffering.' },
  { id: 163, category: '3b', question: 'Who saves Asclepius at birth, and how does he come to be born?', options: ['Hermes saves him; he is the son of Apollo and the nymph Cyrene', 'Apollo saves him from Coronis\'s corpse; he is Apollo\'s son by the unfaithful Coronis', 'Artemis saves him; he is born to Leto alongside Apollo', 'Zeus saves him; he is the son of Apollo and a Muse'], correct: 1, explanation: 'Apollo falls in love with Coronis; she cheats on him with a young man. Apollo\'s crow reports this. Apollo kills Coronis with an arrow but repents. He cannot save her, but manages to save his son Asclepius from her corpse. Asclepius becomes the god of medicine.' },

  // 3c
  { id: 171, category: '3c', question: 'The module presents Artemis\'s association with childbirth as a paradox. How is this paradox resolved?', options: ['It is not a paradox — Artemis brings death in childbirth, not assistance', 'Artemis is connected to childbirth because she was born first and immediately helped deliver her twin brother Apollo', 'The paradox is resolved by understanding that all virgin goddesses in Greek mythology were also connected to fertility', 'Artemis was given the domain of childbirth by Zeus as compensation for her virginity'], correct: 1, explanation: 'In most versions of the twins\' birth, Artemis is born first and helps with the birth of her brother Apollo — she becomes a midwife goddess from her very first act of existence. This mythological explanation resolves the paradox of a virgin goddess being connected to childbirth.' },
  { id: 172, category: '3c', question: 'In the Actaeon myth, what is the most important point about the nature of his transgression?', options: ['Actaeon was known to be a habitual voyeur who deliberately sought to see Artemis', 'Actaeon transgressed deliberately by hunting near a sacred bathing place', 'The transgression was entirely ACCIDENTAL — he happened upon Artemis without intention — yet death was still the punishment', 'Actaeon was punished specifically for being a better hunter than Artemis'], correct: 2, explanation: 'The module emphasizes this strongly: "In this myth, Actaeon, a great hunter, inadvertently comes upon Artemis... a grotesque end for a mighty hunter who did nothing more than happen upon the goddess without intention." Death was the punishment regardless of intention — Artemis\'s virginity admits no exceptions.' },
  { id: 173, category: '3c', question: 'What is the Arkteia, where did it take place, and what did it involve?', options: ['A sacrifice of bears at Olympia during the Olympic Games', 'A religious ceremony at Brauron where girls "played the bear" before marriage — involving saffron robes, sacrifice, and foot races', 'An annual hunt held in honor of Artemis throughout Greece', 'A festival where women of all ages gathered to worship Artemis at the Parthenon'], correct: 1, explanation: 'The Arkteia (from arktos = "bear") was held at Brauron, 32 km southwest of Athens, every four years and attended by women of Athens. Girls had to "play the bear" before they could marry — dressing in saffron robes, sacrificing to Artemis, and participating in processions, dancing, and foot races.' },

  // 4a
  { id: 181, category: '4a', question: 'Aphrodite is said to share character traits with Pandora. What are these three traits?', options: ['Beauty, immortality, and divine power', 'Seductive charm, fertility, and deception', 'Love, jealousy, and revenge', 'Music, grace, and cunning speech'], correct: 1, explanation: 'The module explicitly states that in either version of Aphrodite\'s birth, "she displays similar character traits: she is a female figure who combines seductive charm, fertility, and deception — characteristics that are also found in the description of Pandora." This connection between Aphrodite and Pandora is a key course point.' },
  { id: 182, category: '4a', question: 'In Hesiod\'s Theogony, Aphrodite is a primordial goddess older than Zeus. In Homer\'s Iliad, what is she instead?', options: ['The twin sister of Apollo and Artemis', 'The daughter of Zeus and Dione', 'The wife of Hephaestus from the beginning', 'The daughter of Poseidon and Amphitrite'], correct: 1, explanation: 'In Homer\'s Iliad (Book 3), there is an alternative version: Aphrodite is the daughter of Zeus and Dione — "a version that subjugates Aphrodite under Zeus\' parentage." This contrasts with Hesiod\'s version where she is primordial (born from Ouranos\'s genitals) and older than Zeus himself.' },
  { id: 183, category: '4a', question: 'What is Zeus\'s motivation in making Aphrodite fall in love with the mortal Anchises in the Homeric Hymn to Aphrodite?', options: ['He wants Aeneas to be born to found Rome', 'He is fed up with Aphrodite boasting that she makes even gods fall for mortals, so he humbles her by turning her power against her', 'Hera has complained about Aphrodite\'s interference in divine affairs', 'He wants to test whether Anchises is worthy of divine favor'], correct: 1, explanation: 'This is explicit in the hymn: Zeus is fed up with Aphrodite "inciting the gods to mix with mortal men and women" and boasting about it. The birth of Aeneas is a CONSEQUENCE of Zeus\'s revenge — not his motivation. The central irony: Aphrodite cannot resist herself.' },

  // 4b
  { id: 191, category: '4b', question: 'In which ancient source does the most elaborate surviving version of the myth of Cupid and Psyche appear?', options: ['Ovid\'s Metamorphoses', 'Homer\'s Odyssey', 'Apuleius\'s Metamorphoses (The Golden Ass)', 'Euripides\' Hippolytus'], correct: 2, explanation: 'The myth of Cupid and Psyche is "recounted prominently by the Roman poet Apuleius (who wrote in the second century CE)" in his Metamorphoses (also called The Golden Ass). It does NOT appear in Ovid\'s Metamorphoses, though students often confuse these two works.' },
  { id: 192, category: '4b', question: 'What does the Greek word "Psyche" mean, and why is this significant for the myth?', options: ['Beauty — Psyche is meant to personify physical beauty', 'Soul — the myth can be read as an allegory of the soul\'s journey to divine love', 'Youth — Psyche represents the innocence of young women', 'Mind — the myth is about the development of rational thought'], correct: 1, explanation: 'Psyche means "soul" in Greek. This is significant because the myth can be interpreted allegorically — the soul (Psyche) undertakes trials and eventually achieves divine status (marriage to Cupid/Love, deification). The themes of love, death, resurrection, and immortality all carry this allegorical dimension.' },
  { id: 193, category: '4b', question: 'According to Plato\'s Symposium, what is Eros — god, human, or something else?', options: ['A god equal in power to Apollo and Aphrodite', 'A mortal hero who was later deified', 'A daimon — a spiritual being between god and mortal, good and bad, beautiful and ugly', 'A personification of abstract love with no divine attributes'], correct: 2, explanation: 'In Plato\'s Symposium, Socrates argues that Eros is not a god but that his nature is somewhere between god and mortal, good and bad, beautiful and ugly — a spiritual being (daimon) who facilitates communication between human people and gods. Plato also says Eros is the son of Resourcefulness (Poros) and Poverty (Penia).' },

  // 4c
  { id: 201, category: '4c', question: 'What is the key difference between Athena\'s approach to war and Ares\'s approach, as described in the module?', options: ['Athena fights only in defense; Ares fights offensively', 'Athena = strategic, protective, civilizing war; Ares = destructive god who incites strife and urges furious battle', 'Athena uses divine weapons; Ares fights with mortal weapons', 'Athena wins all battles; Ares frequently loses'], correct: 1, explanation: 'The module states this explicitly: "Ares is a destructive god who incites strife and urges on furious battle, whereas Athena is a goddess who takes a more thoughtful approach to battle and who often serves as a protective goddess. She does not barge ahead to incite strife at every turn."' },
  { id: 202, category: '4c', question: 'Athena is described as "Athena Ergane" in one of her aspects. What does this mean?', options: ['Athena the Warrior — her martial aspect', 'Athena the Craftmaker — her aspect as patron of craft and industry', 'Athena the Virgin — her commitment to chastity', 'Athena the Wise — her aspect as goddess of wisdom'], correct: 1, explanation: '"Ergane" derives from the Greek for work/craft. Athena Ergane = Athena the Craftmaker. She is connected to both masculine crafts (like carpentry — she helped build the Trojan Horse) and feminine crafts (like weaving — the Arachne myth). She taught skills to humans along with Hephaestus.' },

  // 4d
  { id: 211, category: '4d', question: 'What does Zeus say about Ares in Iliad Book 5, after Ares is wounded by the mortal Diomedes?', options: ['He praises Ares for his bravery in battle', 'He tells Ares he is the most hateful of all gods, and would have banished him long ago if he were not his son', 'He mourns that Ares has been dishonored by a mortal', 'He punishes Diomedes for wounding a god'], correct: 1, explanation: 'After Ares is wounded by Diomedes (with Athena\'s help), Zeus rebukes Ares: he is a destructive god, hateful to Zeus, and Zeus would have banished him long ago if not for the family connection. This scene encapsulates the Greek view of Ares as the least respected of the gods.' },
  { id: 212, category: '4d', question: 'What is the fundamental difference between Ares (Greek) and Mars (Roman) in terms of cultural significance?', options: ['Mars is the god of defensive war; Ares is the god of offensive war', 'Ares was more important to Greeks than Mars was to Romans', 'Mars was associated with victorious conquest AND crops/harvest AND was the father of Romulus and Remus, making him one of the most important Roman gods; Ares had almost no cult significance for the Greeks', 'The two gods are essentially identical in function and cultural importance'], correct: 2, explanation: 'This contrast is one of the module\'s central points: "While Ares was a god of destructive war and was often held at a distance by the ancient Greeks, Mars was associated by the Romans with victorious conquest as well as with crops and the harvest." Mars is father of Romulus and Remus — foundational to Roman identity. Ares has almost no cult significance in Greece.' },
]

// ─── Unit metadata ─────────────────────────────────────────────────────────────

export interface UnitInfo {
  unit: number;
  title: string;
  description: string;
  modules: { code: string; title: string; uploaded: boolean }[];
  uploaded: boolean;
}

export const UNITS: UnitInfo[] = [
  {
    unit: 1,
    title: 'Foundations',
    description: 'Introduction to mythology, interpretive theories, and the historical context of Greco-Roman culture.',
    uploaded: true,
    modules: [
      { code: '1a', title: 'Greco-Roman Mythology in the Modern World', uploaded: true },
      { code: '1b', title: 'Interpretive Theories of Myths', uploaded: true },
      { code: '1c', title: 'Overview of Greek and Roman History', uploaded: true },
    ],
  },
  {
    unit: 2,
    title: 'Creation & The Gods',
    description: 'Hesiod\'s Theogony, the succession myths, creation of humankind, Prometheus, Pandora, and Zeus.',
    uploaded: false,
    modules: [
      { code: '2a', title: 'Origins of the Gods: Hesiod\'s Theogony', uploaded: false },
      { code: '2b', title: 'The Creation of Humankind', uploaded: false },
      { code: '2c', title: 'Zeus', uploaded: false },
    ],
  },
  {
    unit: 3,
    title: 'Apollo & Artemis',
    description: 'The twin deities — Apollo at Delos and Delphi, his myths and love affairs, and Artemis\'s paradoxical character.',
    uploaded: false,
    modules: [
      { code: '3a', title: 'Apollo: Delos and Delphi', uploaded: false },
      { code: '3b', title: 'Apollo and Myth', uploaded: false },
      { code: '3c', title: 'Artemis', uploaded: false },
    ],
  },
  {
    unit: 4,
    title: 'Love & War',
    description: 'Aphrodite, Eros/Cupid, Athena, and Ares — the gods of love, desire, wisdom, and war.',
    uploaded: false,
    modules: [
      { code: '4a', title: 'Aphrodite', uploaded: false },
      { code: '4b', title: 'Eros (Cupid)', uploaded: false },
      { code: '4c', title: 'Athena', uploaded: false },
      { code: '4d', title: 'Ares', uploaded: false },
    ],
  },
];

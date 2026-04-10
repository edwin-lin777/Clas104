export interface Story {
  id: string;
  title: string;
  subtitle: string;
  category: "hero" | "god" | "love" | "saga" | "underworld";
  unit: number;
  modules: string[];
  overview: string;
  sections: { heading: string; text: string }[];
  characters: { name: string; role: string }[];
  themes: string[];
  sources: string[];
  quizQuestions: {
    q: string;
    options: string[];
    answer: number;
    explanation: string;
  }[];
}

export const stories: Story[] = [
  {
    id: "odysseus-journey",
    title: "The Odyssey of Odysseus",
    subtitle: "Ten years wandering the wine-dark sea",
    category: "hero",
    unit: 4,
    modules: ["10a", "10b", "10c"],
    overview:
      "After Troy falls, Odysseus (Ulysses) spends ten years reaching home in Ithaca. Homer's Odyssey (24 books, 12,100 lines) is epic, homecoming story, and meditation on human identity. Aided by Athena, wrecked by Poseidon, he faces monsters, witches, and immortal temptation before reclaiming his kingdom.",
    sections: [
      {
        heading: "Overview: Nostoi and Structure",
        text: "The Greeks' homecomings after Troy are called nostoi. Odysseus's is the most famous. Books 1-4: Telemachus searches for his father. Books 5-8: Odysseus leaves Calypso, reaches Phaeacia. Books 9-12: Odysseus narrates his adventures. Books 13-24: Return in disguise, contest of the bow, slaughter of suitors. Odysseus is polymetis \u2014 'of many minds' \u2014 cunning above strength.",
      },
      {
        heading: "Cicones and Lotus Eaters",
        text: "From Troy, Odysseus raids Ismarus of the Cicones and spares the priest Maron \u2014 he gives twelve jars of potent wine, crucial later with the Cyclops. At the Lotus Eaters, magic fruit causes his men to forget home. He physically drags them back to the ships \u2014 the leader's burden.",
      },
      {
        heading: "Polyphemus the Cyclops",
        text: "Polyphemus (son of Poseidon) seals the crew in his cave and eats two men per meal. Odysseus introduces himself as 'Nobody' (Outis in Greek). He blinds the sleeping Cyclops with a heated stake; they escape under the sheep's bellies. But pride defeats strategy: sailing away, Odysseus shouts his real name. Polyphemus prays to his father Poseidon \u2014 who becomes Odysseus's divine antagonist for the entire journey home.",
      },
      {
        heading: "Aeolus, Laestrygonians, Circe",
        text: "Aeolus gives a bag of adverse winds; Eurylochus and the crew open it near Ithaca, blasting them back. The giant-cannibal Laestrygonians destroy all ships but Odysseus's. On Aeaea, the goddess-witch Circe turns his men to pigs. Protected by Hermes' herb moly, Odysseus resists, becomes her lover, and after a year is directed to the underworld.",
      },
      {
        heading: "The Nekuia \u2014 Journey to the Dead",
        text: "Blood in a trench summons shades. Elpenor (crew member who fell drunk off Circe's roof \u2014 died unburied; begs for burial rites). Tiresias (blind prophet \u2014 only shade with permanent consciousness \u2014 warns against Helios's cattle). Anticleia (his mother died of grief for him; he tries to embrace her three times; the dead have no substance). Achilles: would rather be the poorest slave on earth than rule all the dead. Tantalus (water and fruit eternally receding \u2014 origin of 'tantalize'). Sisyphus (rolling boulder forever). Tityus (eagle eats regenerating liver, 9 acres wide \u2014 assaulted Leto).",
      },
      {
        heading: "Sirens, Scylla, and Charybdis",
        text: "Crew ears plugged with wax; Odysseus tied to the mast \u2014 hears the Sirens' fatal song safely. Between two cliffs: Charybdis (swallowing whirlpool, three times daily) and Scylla (six-headed monster, twelve legs \u2014 was originally a nymph transformed by Amphitrite). Circe's advice: sail close to Scylla and lose six men rather than risk the whole ship to Charybdis. He obeys.",
      },
      {
        heading: "Cattle of Helios and Calypso",
        text: "Both Tiresias and Circe warned explicitly: do not touch Helios's cattle on Thrinakia. Stranded by winds, Eurylochus persuades the crew to slaughter cattle while Odysseus sleeps. Zeus destroys their ship with a thunderbolt; Odysseus alone survives. He drifts to Ogygia \u2014 Calypso (daughter of Atlas) loves him and offers immortality. He refuses, weeping daily for Ithaca. After seven years, Zeus forces her to release him.",
      },
      {
        heading: "Return: Recognition and Slaughter",
        text: "Athena disguises Odysseus as an old beggar. His dog Argus \u2014 only one to immediately recognise him \u2014 wags his tail and dies. The nurse Eurycleia recognises him by an old boar-hunt scar but is silenced. Penelope's ruse: weaving Laertes's burial shroud by day, unravelling it at night \u2014 bought her years until betrayed by a maid. The contest: string Odysseus's bow, shoot through twelve axe-heads. No suitor can string it. The beggar does it effortlessly, then kills all 108 suitors. He hangs the twelve treacherous maidservants and mutilates the goatherd Melanthius. Penelope's final test: their bed cannot be moved \u2014 carved from a living olive-tree root. Odysseus knows. Twenty-year reunion.",
      },
    ],
    characters: [
      {
        name: "Odysseus",
        role: "Hero; polymetis; King of Ithaca; refuses immortality",
      },
      {
        name: "Penelope",
        role: "Faithful wife; weaver and unraveller; the female Odysseus",
      },
      {
        name: "Telemachus",
        role: "Son; comes of age searching for his father",
      },
      { name: "Athena", role: "Divine patron and disguiser" },
      { name: "Poseidon", role: "Divine antagonist; Polyphemus's father" },
      {
        name: "Eurylochus",
        role: "Second-in-command; causes both major crew disasters",
      },
      { name: "Circe", role: "Witch-goddess; ally after Odysseus's arrival" },
      {
        name: "Calypso",
        role: "Nymph; detains Odysseus 7 years; offers immortality \u2014 refused",
      },
      {
        name: "Tiresias",
        role: "Blind prophet; permanent consciousness in the underworld",
      },
      { name: "Elpenor", role: "Crewman who died unburied; first shade met" },
      {
        name: "Argus",
        role: "Faithful dog; only immediate recogniser; dies on reunion",
      },
      { name: "Eumaeus", role: "Loyal swineherd" },
    ],
    themes: [
      "Nostos (homecoming) as the supreme Greek value",
      "Cunning intelligence over brute strength",
      "Loyalty and fidelity across twenty years",
      "The cost of hubris (Cyclops episode)",
      "Choosing mortality over immortality \u2014 the human condition chosen",
    ],
    sources: ["Homer's Odyssey (8th c. BCE)", "Ovid's Metamorphoses 13-14"],
    quizQuestions: [
      {
        q: "Why does Poseidon pursue Odysseus throughout the journey?",
        options: [
          "He stole Poseidon's trident",
          "Odysseus shouted his real name as they escaped the Cyclops, allowing Polyphemus (Poseidon's son) to curse him by name",
          "He sank Poseidon's sacred ship",
          "He refused to sacrifice to Poseidon at Troy",
        ],
        answer: 1,
        explanation:
          "Pride defeats cunning. The 'Nobody' stratagem was brilliant but Odysseus's need to be known undermines it completely.",
      },
      {
        q: "What are the two disasters that Eurylochus causes?",
        options: [
          "He opens the wind-bag and he leads the cattle slaughter",
          "He betrays Odysseus to Circe and kills the Cyclops's sheep",
          "He abandons the crew at the Sirens and opens Pandora's box",
          "He reveals Odysseus's identity and leads the suitors against him",
        ],
        answer: 0,
        explanation:
          "Eurylochus is the agent of both catastrophes: opening Aeolus's bag (sending them back) and persuading the starving crew to eat Helios's cattle (destroying them).",
      },
      {
        q: "How does Penelope verify that the stranger is Odysseus?",
        options: [
          "He lifts a boulder only Odysseus could lift",
          "She tests him with the unmovable bed \u2014 carved from a living olive-tree root, their private secret",
          "She recognises his voice",
          "Eurycleia tells her about the scar",
        ],
        answer: 1,
        explanation:
          "The bed test is perfect: only the real Odysseus would know about the olive-tree construction. This shared private knowledge is the deepest proof of identity.",
      },
      {
        q: "What does Achilles reveal about the afterlife in Odyssey Book 11?",
        options: [
          "He is glad to rule the shades as a great king",
          "He would rather be the poorest slave alive on earth than rule over all the dead",
          "He wishes he had lived longer at Troy",
          "He wants to fight again but cannot",
        ],
        answer: 1,
        explanation:
          "This reverses Achilles's famous choice in the Iliad (glory over long life) \u2014 in death he regrets everything. Homer's underworld is unambiguously, democratically terrible.",
      },
      {
        q: "Why does Odysseus refuse Calypso's offer of immortality?",
        options: [
          "He doesn't love her",
          "Fear of the gods' jealousy",
          "He chooses home, mortality, and human identity over immortal ease \u2014 his humanity defines him",
          "Athena commands him to refuse",
        ],
        answer: 2,
        explanation:
          "The rejection of immortality is the Odyssey's deepest statement: to be Odysseus is to be human, mortal, striving, and home-seeking. Immortal ease would erase what makes him himself.",
      },
    ],
  },

  {
    id: "heracles-labours",
    title: "Heracles and His Twelve Labours",
    subtitle: "From madness to godhood \u2014 the greatest hero's journey",
    category: "hero",
    unit: 4,
    modules: ["12a", "12b", "12c"],
    overview:
      "Heracles (Hercules) is the greatest hero of antiquity \u2014 son of Zeus and mortal Alcmena, twice threatened by Hera, driven mad, forced into twelve years of impossible service, and ultimately the only mortal to achieve full divinization. His story explores atonement, the civilisation of chaos, and the permeable boundary between mortal and divine.",
    sections: [
      {
        heading: "Birth and Childhood",
        text: "Zeus disguises as Alcmena's husband Amphitryon; she bears twins: Heracles (Zeus's son) and Iphicles (mortal). Hera delays the birth \u2014 Eurystheus is born first, fulfilling Zeus's prophecy that a son of Zeus born that day will rule men. She sends two serpents to kill the infant Heracles in his crib \u2014 he strangles both. His name means 'Glory of Hera' (ironic). As a youth he killed his music teacher Linus by hitting him with a lyre. He trained under the centaur Chiron and slept with all fifty daughters of King Thespius in one night (or fifty nights \u2014 accounts differ).",
      },
      {
        heading: "Madness and Oracle",
        text: "Hera drives Heracles temporarily mad; he kills his wife Megara and their children. Recovering, overwhelmed by guilt, he consults the Oracle at Delphi. The Oracle commands: serve King Eurystheus of Tiryns for twelve years and complete his labours. These are called athloi in Greek. Eurystheus is a smaller, frightened man \u2014 he famously hides in a giant storage jar when Heracles brings him the results. The dynamic is significant: the greatest hero in submission to a lesser one.",
      },
      {
        heading: "Labours 1-6: The Peloponnese",
        text: "(1) NEMEAN LION: hide invulnerable \u2014 Heracles strangles it with his bare hands, skins it with its own claws, wears the pelt as armour for life. (2) LERNAEAN HYDRA: 9-headed swamp serpent, 8 mortal + 1 immortal; cut a mortal head and two grow back. Iolaus helps by burning each stump. Immortal head buried under rock. Heracles dips arrows in the Hydra's blood \u2014 lethal for the rest of his story. (3) CERYNEAN HIND: sacred to Artemis with golden horns; Heracles chases it for a full year before catching it; Artemis is appeased. (4) ERYMANTHIAN BOAR: chased into deep snow; trapped alive. En route, visits centaur Pholus who opens communal wine \u2014 other centaurs attack; Heracles fights them off but accidentally wounds immortal Chiron with a Hydra-poisoned arrow; Chiron suffers eternally until he trades immortality with Prometheus. (5) AUGEAN STABLES: 30 years of dung from thousands of cattle; Heracles diverts rivers Alpheus and Peneus through them in one day. Augeas refuses to pay the agreed tenth of his cattle; Heracles later kills him. (6) STYMPHALIAN BIRDS: bronze-beaked man-eating birds near Lake Stymphalus in Arcadia; Athena provides bronze castanets to startle them into flight; Heracles shoots them down.",
      },
      {
        heading: "Labours 7-12: Edges of the World",
        text: "(7) CRETAN BULL: Poseidon's bull sent to Minos, who kept it instead of sacrificing it; Heracles brings it back; Eurystheus releases it (becomes the Bull of Marathon, later fought by Theseus). (8) MARES OF DIOMEDES: man-eating horses of the brutal Thracian king Diomedes; Heracles feeds Diomedes himself to his own horses, taming them. On the way he stops at Pherae where he wrestles Death (Thanatos) in person to win back the life of Queen Alcestis, who had volunteered to die in her husband Admetus's place. (9) GIRDLE OF HIPPOLYTA: queen of the Amazons at the northern edge of the world; she agrees to give it freely but Hera causes a misunderstanding; Hippolyta is killed. On the way back Heracles rescues Hesione from a sea monster sent by Poseidon to punish King Laomedon of Troy for refusing to pay Apollo and Poseidon after they built Troy's walls. (10) CATTLE OF GERYON: Geryon lives in the far west \u2014 three bodies joined at the waist, aided by two-headed dog Orthus. Heracles sails in the golden cup of Helios. He sets up the Pillars of Heracles at modern Gibraltar as a monument at the edge of the known world. (11) APPLES OF THE HESPERIDES: golden apples at the far western edge of the world, guarded by the serpent Ladon and the Hesperides. Heracles first finds Nereus (shape-shifting sea-god) and holds him tight through his transformations to get the location. In one version he holds the sky while Atlas fetches the apples, then tricks Atlas into taking the sky back. (12) CERBERUS: descends to the underworld \u2014 aided by Hermes and Athena \u2014 and wrestles the three-headed guard dog bare-handed; brings him before the terrified Eurystheus, then returns him to Hades.",
      },
      {
        heading: "Omphale and the Slave Years",
        text: "After the labours, Heracles kills Iphitus (son of Eurytus who broke a promise about his daughter Iole). The Oracle refuses to purify him for this murder. In rage, Heracles steals the Delphic tripod; Zeus intervenes. As punishment Heracles is sold into slavery to Omphale, Queen of Lydia. This episode deliberately inverts heroic norms: Omphale wears his lion skin and carries his club; Heracles wears women's clothes and does wool-work. The scene reflects the humiliation caused by his love for Iole \u2014 desire as a kind of madness parallel to the original Hera-madness.",
      },
      {
        heading: "Death and Apotheosis",
        text: "Heracles wins Deianira by wrestling the river-god Achelous \u2014 he breaks off one of Achelous's horns, which becomes the cornucopia (horn of plenty). The centaur Nessus assaults Deianira while carrying her across a river; Heracles kills him with a Hydra-poisoned arrow. Dying, Nessus tells Deianira: 'my blood is a love potion; use it if Heracles strays.' Years later, when Heracles becomes interested in Iole, Deianira soaks his ceremonial robe in Nessus's 'love potion' \u2014 actually Hydra poison. The robe burns Heracles from within. In agony he builds a pyre on Mount Oeta. Young Philoctetes agrees to light it and receives Heracles' bow and poisoned arrows (these arrows reappear in the Trojan War). The mortal half burns away. The divine half ascends to Olympus. He reconciles with Hera and marries her daughter Hebe (goddess of youth). He alone among mortals has achieved full apotheosis \u2014 divinization.",
      },
    ],
    characters: [
      {
        name: "Heracles",
        role: "Greatest Greek hero; son of Zeus; sole mortal to achieve full divinization",
      },
      {
        name: "Hera",
        role: "Implacable enemy throughout; eventually reconciles",
      },
      {
        name: "Eurystheus",
        role: "Cowardly king who assigns labours; hides in storage jar",
      },
      {
        name: "Iolaus",
        role: "Nephew and charioteer; helps burn Hydra stumps",
      },
      {
        name: "Deianira",
        role: "Second wife; unwittingly poisons him through Nessus's trick",
      },
      { name: "Nessus", role: "Centaur; dying trick causes Heracles' death" },
      {
        name: "Omphale",
        role: "Lydian queen; owns Heracles as slave; wears his lion skin",
      },
      {
        name: "Philoctetes",
        role: "Lights the funeral pyre; receives Heracles' bow and poisoned arrows",
      },
      { name: "Hebe", role: "Goddess of youth; Heracles' wife on Olympus" },
      {
        name: "Admetus",
        role: "King of Pherae; Heracles wins back his wife Alcestis from Death",
      },
    ],
    themes: [
      "Atonement and purification through suffering",
      "Civilising chaos \u2014 each labour conquers a threat to human order",
      "Mortality vs. divinity \u2014 the only mortal to fully cross over",
      "Madness as both punishment and recurring motif",
      "Suffering as the price of immortality",
    ],
    sources: [
      "Apollodorus' Library 2.4-7",
      "Diodorus Siculus 4.8-39",
      "Euripides' Heracles",
      "Sophocles' Women of Trachis",
      "Pindar's Nemean and Isthmian Odes",
    ],
    quizQuestions: [
      {
        q: "Why does Heracles have to complete the twelve labours?",
        options: [
          "To prove worthy of Olympus",
          "To win Deianira's hand",
          "As penance for killing his wife and children in Hera-sent madness, ordered by the Oracle at Delphi",
          "Zeus commanded it as a test of strength",
        ],
        answer: 2,
        explanation:
          "Hera drove him mad; he killed Megara and his children. The Oracle prescribed twelve years of service to Eurystheus as purification \u2014 atonement through heroic suffering.",
      },
      {
        q: "What makes the Lernaean Hydra especially difficult, and what is the key solution?",
        options: [
          "It is immortal \u2014 must be buried",
          "Every mortal head cut off grows back two; Iolaus burns the stumps to prevent regrowth; the one immortal head is buried under rock",
          "Its hide is invulnerable like the Nemean Lion",
          "It lives underwater where Heracles cannot breathe",
        ],
        answer: 1,
        explanation:
          "The two-for-one regeneration makes individual heroics useless without the burning strategy. The Hydra's poisonous blood also gives Heracles his lethal arrows.",
      },
      {
        q: "What surprising act does Heracles perform during the Mares of Diomedes labour?",
        options: [
          "He builds a temple to Zeus",
          "He wrestles Death (Thanatos) himself to bring Queen Alcestis back to life for King Admetus",
          "He fights a sea monster sent by Poseidon",
          "He sings to tame the horses",
        ],
        answer: 1,
        explanation:
          "This episode (from Euripides' Alcestis) shows Heracles confronting death literally, not just symbolically \u2014 a preview of his own eventual transcendence of mortality.",
      },
      {
        q: "What is the Omphale episode and why is it significant?",
        options: [
          "Omphale is a goddess who tests Heracles in disguise",
          "He serves as Omphale's slave, wears women's clothes while she wears his lion skin \u2014 a complete inversion of heroic identity, driven by his love for Iole",
          "He defeats the Amazons led by Omphale",
          "He builds the first Lydian temple",
        ],
        answer: 1,
        explanation:
          "The gender-inversion is deliberate and disturbing \u2014 the greatest hero reduced to wool-spinning while a woman carries his weapons. The episode shows love (for Iole) as another form of the madness that has always threatened Heracles.",
      },
      {
        q: "How does Nessus bring about Heracles' death despite being killed by Heracles?",
        options: [
          "He poisons Heracles' food before dying",
          "He tells Deianira his blood (infected with Hydra-poison from Heracles' own arrow) is a love charm \u2014 she uses it on Heracles' robe years later",
          "He curses Heracles with a dying oracle",
          "He sends the Furies against him",
        ],
        answer: 1,
        explanation:
          "Perfect circular irony: Heracles' own Hydra-poisoned arrow kills Nessus, and Nessus's blood (now carrying that same poison) ultimately kills Heracles through Deianira's unwitting act.",
      },
    ],
  },

  {
    id: "perseus-bellerophon",
    title: "Perseus and Bellerophon",
    subtitle: "Quest, Gorgons, and the danger of rising too high",
    category: "hero",
    unit: 4,
    modules: ["11a"],
    overview:
      "Module 11a covers two heroes of the Argolid. Perseus's story is the archetype of the quest myth \u2014 divine parentage, impossible task, divine helpers, magical equipment, monster-slaying, fulfilled prophecy. Bellerophon's is the darker mirror \u2014 equal heroism undone by overreaching toward divinity. The course connects them through Pegasus, born from Medusa's blood and later used by Bellerophon.",
    sections: [
      {
        heading: "Perseus: Birth and the Bronze Tower",
        text: "King Acrisius of Argos receives an oracle: his grandson will kill him. He locks his daughter Dana\u00eb in a bronze underground chamber with no male access. Zeus enters as a shower of gold and impregnates her. Finding baby Perseus, Acrisius does not kill them directly (fearing Zeus's wrath) but seals them in a wooden chest and casts it into the sea. They wash up on Seriphos, where the fisherman Dictys ('net' in Greek) takes them in.",
      },
      {
        heading: "The Quest: Graiae and Magical Equipment",
        text: "King Polydectes wants Dana\u00eb and schemes to remove Perseus by challenging him to bring Medusa's head. Athena and Hermes aid him. He must first find the Graiae \u2014 three ancient sisters (Deino, Enyo, Pemphredo) sharing one eye and one tooth. Perseus steals the eye and refuses to return it until they reveal how to find the nymphs. The nymphs give him: winged sandals (flight), kibisis (a pouch to carry Medusa's head safely), and the cap of Hades (invisibility). From Hermes: an adamantine scimitar. From Athena: a polished bronze shield.",
      },
      {
        heading: "Killing Medusa and Rescuing Andromeda",
        text: "The three Gorgons (Stheno, Euryale \u2014 immortal; Medusa \u2014 mortal) live at the world's edge. Medusa was once beautiful before Poseidon lay with her in Athena's temple; this angered Athena. Perseus approaches while they sleep, using the polished shield as a mirror to avoid looking directly at Medusa. He beheads her. From her severed neck spring Pegasus (the winged horse, conceived by Poseidon) and the warrior Chrysaor. Flying home, he sees Andromeda chained to a cliff in Ethiopia. Her mother Cassiopeia boasted she was more beautiful than the Nereids \u2014 Poseidon sent a sea monster as punishment, the oracle demanding Andromeda's sacrifice. Perseus kills the monster and claims her. He turns her previous fianc\u00e9 Phineus and Polydectes to stone with the Gorgon's head.",
      },
      {
        heading: "The Fulfilled Prophecy",
        text: "Perseus gives Medusa's head to Athena, who mounts it on her aegis (breastplate-shield). He returns the magical equipment. No matter what precautions were taken, fate operates: at games in Larissa, Perseus's discus veers in the wind and strikes an old man in the crowd. It is Acrisius his grandfather. The oracle is fulfilled \u2014 not through malice but through inexorable fate. Perseus is grief-stricken but vindicates himself as a true hero by being recognised and honoured in the end.",
      },
      {
        heading: "Bellerophon and Pegasus",
        text: "Bellerophon is a hero of Corinth who accidentally kills his brother and flees to Tiryns to be purified. King Proetus's wife (Stheneboa or Anteia) falls in love with him; when he rejects her, she falsely accuses him of assault to Proetus \u2014 the same pattern as Hippolytus and Phaedra, and Joseph and Potiphar's wife. Proetus cannot kill a guest (guest-friendship/xenia is sacred) so sends Bellerophon to his father-in-law Iobates in Lycia with a sealed letter requesting that Iobates kill the bearer.",
      },
      {
        heading: "Bellerophon's Tasks and Hubris",
        text: "Iobates assigns seemingly impossible tasks. Poseidon gives Bellerophon the winged horse Pegasus (in one version Athena appears in a dream and provides a golden bridle). He kills the Chimaera \u2014 a fire-breathing monster: lion's head, goat's body, serpent's tail. He defeats the Solymi warriors and the Amazons. He survives a Lycian ambush. Iobates, recognising divine favour, gives him his daughter and half the kingdom. Then Bellerophon attempts to fly Pegasus to the summit of Olympus \u2014 to join the gods themselves. Zeus sends a gadfly to sting Pegasus; Bellerophon is thrown off. He wanders the earth blind, lame, and alone, 'devouring his own soul,' avoided by all. Pegasus reaches Olympus and carries Zeus's thunderbolts. Bellerophon's fall is the paradigmatic myth of hubris \u2014 crossing the boundary between mortal and divine.",
      },
    ],
    characters: [
      {
        name: "Perseus",
        role: "Son of Zeus and Dana\u00eb; quest hero of the Argolid",
      },
      {
        name: "Dana\u00eb",
        role: "Mother; locked in bronze tower; Zeus visits as shower of gold",
      },
      {
        name: "Acrisius",
        role: "Grandfather; his precautions fulfil rather than prevent the prophecy",
      },
      {
        name: "Polydectes",
        role: "King who schemes to remove Perseus and possess Dana\u00eb",
      },
      {
        name: "Medusa",
        role: "The mortal Gorgon; her gaze turns men to stone; killed through reflected image",
      },
      {
        name: "Pegasus",
        role: "Winged horse born from Medusa's blood; later used by Bellerophon",
      },
      {
        name: "Andromeda",
        role: "Ethiopian princess; rescued from sea monster; marries Perseus",
      },
      {
        name: "Bellerophon",
        role: "Hero of Corinth; kills Chimaera; falls for hubris in attempting Olympus",
      },
      {
        name: "Chimaera",
        role: "Fire-breathing hybrid: lion, goat, serpent; killed by Bellerophon on Pegasus",
      },
      {
        name: "Cassiopeia",
        role: "Andromeda's mother whose boast caused the sea-monster punishment",
      },
    ],
    themes: [
      "Fate is inescapable \u2014 every precaution fulfils rather than prevents the oracle",
      "Divine helpers and magical equipment as standard quest-myth elements",
      "Hubris and the mortal-divine boundary (Bellerophon's fall)",
      "The falsely accused hero motif (Bellerophon / Hippolytus / Joseph)",
      "Perseus as archetypal quest hero \u2014 a blueprint for later myths",
    ],
    sources: [
      "Apollodorus 2.4.1-5",
      "Pindar's Pythian Ode 12 (Perseus)",
      "Pindar's Olympian Ode 13 (Bellerophon)",
      "Ovid's Metamorphoses 4-5",
    ],
    quizQuestions: [
      {
        q: "How does Zeus reach Dana\u00eb in the bronze tower?",
        options: [
          "He tunnels under it",
          "He disguises as a guard",
          "He enters as a shower of gold",
          "He commands Hermes to bring her out",
        ],
        answer: 2,
        explanation:
          "The shower of gold is Zeus's divine transformation \u2014 possibly originally a metaphor for bribery, but in the myth it is a literal divine manifestation that bypasses physical barriers.",
      },
      {
        q: "How does Perseus safely behead Medusa?",
        options: [
          "He blinds himself first",
          "He attacks at night",
          "He uses Athena's polished shield as a mirror to see only her reflection, avoiding direct eye contact",
          "He wears the cap of invisibility and closes his eyes",
        ],
        answer: 2,
        explanation:
          "Approaching from her reflection in the shield is the key stratagem. He also attacks while she sleeps, giving him the vital moment of safety.",
      },
      {
        q: "What is born from Medusa's blood when she is beheaded?",
        options: [
          "The Sirens",
          "Pegasus the winged horse (and the warrior Chrysaor)",
          "The Furies",
          "The race of Giants",
        ],
        answer: 1,
        explanation:
          "Medusa was pregnant by Poseidon. Pegasus springs from her severed neck \u2014 a detail that links Perseus's story directly to Bellerophon's, since Pegasus later serves Bellerophon.",
      },
      {
        q: "What is Bellerophon's fatal mistake and what does it represent?",
        options: [
          "He kills Iobates after completing the tasks",
          "He boasts to the gods about his strength",
          "He tries to fly Pegasus to the summit of Olympus \u2014 crossing the mortal-divine boundary \u2014 and Zeus strikes him down",
          "He refuses to sacrifice Pegasus to Poseidon",
        ],
        answer: 2,
        explanation:
          "The textbook calls Bellerophon's fall 'paradigmatic hubris' \u2014 the mortal hero who succeeds at everything humanly possible, then reaches for the divine, and is destroyed. The contrast with Perseus (who fulfils his fate without overreaching) is the lesson.",
      },
    ],
  },

  {
    id: "theseus",
    title: "Theseus: Hero of Athens",
    subtitle: "The labyrinth, the Minotaur, and the founding of a city",
    category: "hero",
    unit: 4,
    modules: ["11b"],
    overview:
      "Theseus is Athens's greatest hero \u2014 its Heracles. His story is politically significant (Athens vs. Crete), morally complex (abandonment of Ariadne, death of Aegeus), and contains one of mythology's most lasting images: the labyrinth. The course explicitly labels him a 'counterpart to Heracles' \u2014 his six labours, dual divine parentage, and connection to the Cretan bull were deliberately parallel.",
    sections: [
      {
        heading: "Two Fathers and the Recognition Tokens",
        text: "Theseus's mother is Aethra, daughter of King Pittheus of Troezen. His father is Aegeus, King of Athens \u2014 or possibly Poseidon (who also visited Aethra that night). Aegeus leaves a sword and sandals under a rock: if the child is strong enough to lift it, he should come to Athens. Theseus lifts the rock when he comes of age and chooses the dangerous overland route \u2014 fighting six notorious bandits who terrorised travellers.",
      },
      {
        heading: "The Six Labours on the Road to Athens",
        text: "These deliberately mirror Heracles' labours: (1) Periphetes at Epidaurus \u2014 armed with a club (son of Hephaestus); Theseus takes the club. (2) Sinis at Corinth \u2014 'pine-bender', ties victims to bent trees; Theseus kills him the same way. (3) The Crommyon sow \u2014 wild pig ravaging the countryside. (4) Sciron on the cliffs \u2014 makes travellers wash his feet then kicks them off for a sea-turtle; Theseus kicks him off. (5) Cercyon at Eleusis \u2014 wrestling champion; Theseus lifts him off the ground and slams him. (6) Procrustes between Eleusis and Athens \u2014 makes guests fit his bed by stretching them or cutting their legs; Theseus kills him with his own method.",
      },
      {
        heading: "Athens and Medea's Plot",
        text: "In Athens, Aegeus is married to Medea (who fled from Jason's betrayal in Corinth). Medea recognises Theseus as a threat to her children's succession and tells Aegeus the stranger is dangerous. Aegeus agrees to poison him at a welcoming banquet. As Theseus carves the meat, Aegeus recognises the sword \u2014 his own, left under the rock \u2014 and knocks the cup away at the last moment. Medea flees Athens.",
      },
      {
        heading: "The Tribute to Crete",
        text: "Athens owed Crete a tribute: seven young men and seven young women every nine years, sent into the Labyrinth as food for the Minotaur. The Minotaur was born from the union of Minos's wife Pasiphae and a bull Poseidon sent \u2014 Minos had kept the bull instead of sacrificing it, so Poseidon made Pasiphae fall in love with it. The creature was kept in the Labyrinth, built by the craftsman Daedalus. Theseus volunteers to go as one of the tributes.",
      },
      {
        heading: "Ariadne, the Thread, and the Labyrinth",
        text: "Minos's daughter Ariadne falls in love with Theseus on arrival. She gives him a ball of thread (clew) to trace his path through the labyrinth \u2014 or a glowing wreath. He kills the Minotaur and leads all the tributes out. He takes Ariadne with him, promising marriage. On the island of Naxos, he abandons her while she sleeps. In some versions Dionysus compels this; in others Theseus is simply callous. Either way, Dionysus finds Ariadne on Naxos and makes her his bride. The English word 'clue' comes from 'clew' (ball of thread) \u2014 from this myth.",
      },
      {
        heading: "The Death of Aegeus and After",
        text: "Theseus had promised his father: change the sails to white if he survived. In his excitement (or carelessness), he forgets. Aegeus sees black sails from Cape Sunion, thinks his son is dead, and throws himself into the sea. The Aegean Sea is named after him. Theseus becomes King of Athens and is credited with founding Athenian democracy (synoikismos \u2014 unifying the communities of Attica). His later life: friendship with Perithous, attempted abduction of Persephone (they are trapped in chairs in Hades), a second disastrous marriage to Phaedra (who falls in love with his son Hippolytus, falsely accuses him when rejected \u2014 Hippolytus dies). Theseus dies in exile, pushed off a cliff by King Lycomedes.",
      },
    ],
    characters: [
      {
        name: "Theseus",
        role: "Hero of Athens; son of Aegeus or Poseidon; killer of the Minotaur",
      },
      {
        name: "Aegeus",
        role: "King of Athens; dies seeing the black sails; Aegean Sea named after him",
      },
      { name: "Aethra", role: "Theseus's mother; Pittheus's daughter" },
      {
        name: "Medea",
        role: "Sorceress; Aegeus's wife; tries to poison Theseus",
      },
      {
        name: "Minos",
        role: "King of Crete; demands tribute; failed to sacrifice Poseidon's bull",
      },
      {
        name: "Minotaur",
        role: "Half-man, half-bull; born of Pasiphae and the bull; kept in the Labyrinth",
      },
      {
        name: "Ariadne",
        role: "Minos's daughter; provides thread; abandoned on Naxos",
      },
      { name: "Daedalus", role: "Master craftsman; built the Labyrinth" },
      {
        name: "Dionysus",
        role: "Rescues Ariadne on Naxos and makes her his bride",
      },
      {
        name: "Phaedra",
        role: "Theseus's second wife; fatal love for Hippolytus",
      },
    ],
    themes: [
      "Athens and civic identity expressed through myth",
      "Heroism and its moral costs (Ariadne's abandonment)",
      "Fate and tragic forgetfulness (the black sails)",
      "Parallels with Heracles \u2014 deliberately constructed by later tradition",
      "The helper-betrayed motif (Ariadne mirrors Jason-Medea)",
    ],
    sources: [
      "Plutarch's Life of Theseus",
      "Apollodorus 3.15-16, Epitome 1",
      "Catullus 64 (Latin elegy on Ariadne's abandonment)",
      "Bacchylides' Dithyramb 17",
    ],
    quizQuestions: [
      {
        q: "What is the 'clew' Ariadne gives Theseus, and what English word comes from it?",
        options: [
          "A map of the labyrinth \u2014 'maze'",
          "A ball of thread for tracing his path \u2014 the English word 'clue'",
          "A torch \u2014 'enlightenment'",
          "A sword \u2014 nothing",
        ],
        answer: 1,
        explanation:
          "The thread-clew gives English 'clue' \u2014 a thread to follow toward a solution. This is why we 'follow clues' to solve mysteries.",
      },
      {
        q: "Why was the Minotaur created?",
        options: [
          "Hera's punishment on Minos for impiety",
          "Minos failed to sacrifice Poseidon's bull; Poseidon made his wife Pasiphae fall in love with it",
          "Zeus created it as a monster for Athens to overcome",
          "It was a native monster of Crete",
        ],
        answer: 1,
        explanation:
          "Divine punishment for failed sacrifice runs throughout Greek myth. Minos kept Poseidon's magnificent bull \u2014 the god made his wife fall in love with it as revenge.",
      },
      {
        q: "How does the Aegean Sea get its name?",
        options: [
          "Named by Poseidon after a sea-goddess",
          "Aegeus threw himself into it when he saw Theseus's black sails \u2014 thinking his son was dead",
          "Named after a sea monster killed there",
          "Named after an ancient king of Crete",
        ],
        answer: 1,
        explanation:
          "Theseus's forgetfulness \u2014 or carelessness \u2014 kills his father. The naming of the Aegean is the myth's way of marking this tragic flaw permanently on the world's geography.",
      },
      {
        q: "What does the course say about the relationship between Theseus and Heracles?",
        options: [
          "They were childhood friends",
          "Theseus's myths were deliberately constructed as a counterpart to Heracles \u2014 he too completes labours, has dual divine parentage, and connects to the Cretan bull",
          "They fought each other for Athens's throne",
          "Theseus was Heracles's son in some versions",
        ],
        answer: 1,
        explanation:
          "The course explicitly calls Theseus 'Athens's counterpart to Heracles' \u2014 even the Bull of Marathon (Theseus's Cretan Bull connection) is the same bull from Heracles's 7th Labour.",
      },
    ],
  },

  {
    id: "orpheus-eurydice",
    title: "Orpheus and Eurydice",
    subtitle: "Music against death \u2014 love's fatal look back",
    category: "love",
    unit: 3,
    modules: ["7b"],
    overview:
      "The myth of Orpheus is among the most powerful in Western culture \u2014 exploring art as transcendent power, love as both strength and fatal weakness, and the impossibility of reversing death's laws. Orpheus is also the founding figure of Orphism, a mystery religion that influenced Plato and prepared the ground for later Christian concepts of the soul.",
    sections: [
      {
        heading: "Orpheus: The Singer Beyond Compare",
        text: "Orpheus was the greatest musician of antiquity \u2014 son of the Muse Calliope (patron of epic poetry) and either a Thracian king or Apollo himself. He comes from Thrace (northern Greece). His music was superhuman: animals were tamed, trees uprooted to follow him, rivers stopped flowing, rocks moved. He sailed with Jason and the Argonauts \u2014 when they passed the Sirens, Orpheus played his lyre loud enough to drown out their fatal song, saving the crew. He is simultaneously prophet, religious leader, and musician \u2014 connected to both Apollo (reason, prophecy, the sun) and Dionysus (ecstasy, death/rebirth). His double connection to these two divine principles is unique.",
      },
      {
        heading: "The Death of Eurydice",
        text: "Orpheus married Eurydice. On their wedding day (or shortly after), she was running through a meadow, fleeing the pursuit of Aristaeus \u2014 a minor deity of beekeeping and agriculture who desired her \u2014 when she stepped on a snake and died from the bite. As divine punishment for Aristaeus's role, all his bees died. Orpheus's grief was absolute: his music became pure lamentation, moving everyone who heard it. Unable to accept her death, he determined to descend into the underworld and beg for her return.",
      },
      {
        heading: "The Descent and the Condition",
        text: "Orpheus's katabasis (living descent into the underworld) worked miracles even there: the Furies wept \u2014 perhaps for the only time in their existence. Ixion's wheel stopped. Tantalus forgot his thirst and hunger. Sisyphus sat down on his rock and listened. Hades and Persephone were both moved. They agreed: Eurydice would follow him out, but he must walk ahead of her and NOT look back until they had BOTH fully reached the upper world.",
      },
      {
        heading: "The Fatal Look",
        text: "The journey back was agonising \u2014 silence behind him, no footsteps he could hear, no certainty she was following. At the very threshold of the upper world, Orpheus looked back. Ovid says from love; Virgil from sudden fear; some from doubt. Eurydice, still in shadow, was pulled back into death with only a whispered 'Farewell.' This time the underworld would not negotiate.",
      },
      {
        heading: "Death of Orpheus and Orphism",
        text: "Orpheus wandered in grief, spurning the company of women. The Maenads (Bacchantes) \u2014 either enraged by his rejection or sent by Dionysus himself because Orpheus favoured Apollo over him \u2014 attacked during a Bacchic frenzy. They tore him apart (sparagmos \u2014 ritual dismemberment). His head and lyre were thrown into the river Hebrus and floated to the island of Lesbos, still singing. His head became an oracle there. His lyre was placed among the stars. Orphism: a mystery religion attributed to him taught reincarnation of the soul, the body as a prison, and eventual escape from the cycle through ritual purity. It influenced Plato profoundly and prepared the cultural ground for Christian soul-theology.",
      },
    ],
    characters: [
      {
        name: "Orpheus",
        role: "Son of Calliope (or Apollo); greatest musician; prophet; semi-divine",
      },
      {
        name: "Eurydice",
        role: "His wife; dies from snakebite fleeing Aristaeus on their wedding day",
      },
      {
        name: "Aristaeus",
        role: "Minor deity whose pursuit of Eurydice causes her death; loses all his bees",
      },
      {
        name: "Hades",
        role: "King of the underworld; moved by Orpheus's music",
      },
      {
        name: "Persephone",
        role: "Queen of underworld; also moved; co-grants the condition",
      },
      {
        name: "Maenads/Bacchantes",
        role: "Dionysus's female followers; kill Orpheus by sparagmos",
      },
    ],
    themes: [
      "Art as power over death \u2014 and its limits",
      "Love as simultaneously enabling and destroying",
      "The impossibility of reversing death's laws",
      "Connection between music, prophecy, and religious mystery",
      "Orphism: reincarnation, soul purification, escape from the cycle",
    ],
    sources: [
      "Ovid's Metamorphoses 10-11",
      "Virgil's Georgics 4.453-527",
      "Plato's Symposium 179d",
    ],
    quizQuestions: [
      {
        q: "What role does Aristaeus play in the myth, and what is his punishment?",
        options: [
          "He is a minor hero who rescues Eurydice \u2014 and nothing happens",
          "His pursuit of Eurydice causes her fatal snakebite; as divine punishment, all his bees die",
          "He is the judge who decides whether Orpheus may retrieve Eurydice",
          "He is Orpheus's rival musician who reports the condition's breach",
        ],
        answer: 1,
        explanation:
          "Aristaeus's bougonia (the bee-resurrection ritual he must perform as atonement) is the context of Virgil's Georgics 4, where the Orpheus story is told. Both stories are linked through divine cause and consequence.",
      },
      {
        q: "What does Orpheus's music accomplish in the underworld?",
        options: [
          "It destroys Tartarus's walls",
          "The Furies weep, Ixion's wheel stops, Tantalus forgets hunger, Sisyphus listens, and Hades and Persephone are moved to grant the condition",
          "It makes all the dead temporarily alive",
          "It silences the entire underworld for eternity",
        ],
        answer: 1,
        explanation:
          "Each specific effect matters: Furies weeping is remarkable (they never feel pity). The three punished sinners briefly escaping their tortures shows music penetrating even divine punishment.",
      },
      {
        q: "What is Orphism?",
        options: [
          "A philosophical school based on Plato's ideas",
          "A mystery religion attributed to Orpheus teaching reincarnation, soul purification, and eventual escape from the cycle of rebirth",
          "A cult of Dionysus in Thrace",
          "A style of Greek poetry about love and death",
        ],
        answer: 1,
        explanation:
          "Orphism is a crucial bridge between Greek religion and later philosophy. It introduced systematic soul-theology that influenced Plato directly, and through Plato influenced Christian concepts of the immortal soul.",
      },
      {
        q: "Why do the Maenads kill Orpheus?",
        options: [
          "He stole Dionysus's sacred lyre",
          "He spurned women after Eurydice's death \u2014 enraging them; some say Dionysus sent them for his favouring Apollo over Dionysus",
          "He revealed the secrets of Orphism to outsiders",
          "He tried to bring Eurydice back a second time",
        ],
        answer: 1,
        explanation:
          "Two motivations given in the sources \u2014 both suggest that Orpheus's refusal to engage with Bacchic religion (and female worship specifically) triggered divine retribution from Dionysus's domain.",
      },
    ],
  },

  {
    id: "cupid-psyche",
    title: "Cupid and Psyche",
    subtitle: "The soul's journey through suffering to divine love",
    category: "love",
    unit: 2,
    modules: ["5b"],
    overview:
      "Preserved in Apuleius's Metamorphoses (The Golden Ass, 2nd century CE), Cupid and Psyche is the longest fully developed love story in classical literature. 'Psyche' means 'soul' \u2014 the myth is widely read as an allegory of the soul's journey through trials toward divine union and immortality.",
    sections: [
      {
        heading: "Venus's Jealousy and the Impossible Oracle",
        text: "Psyche is a mortal princess so beautiful that people abandon Venus's temples to worship her instead. Venus furiously orders her son Eros (Cupid) to make Psyche fall for the most wretched creature alive. But when Eros sees Psyche, he accidentally pricks himself with his own love-arrow. Psyche's family receives an oracle: she is destined to marry a monster; she must be left on a rocky mountain cliff as a bride for death. Instead, Zephyr (the west wind) carries her to a magnificent invisible palace.",
      },
      {
        heading: "The Invisible Marriage and the Sisters' Plot",
        text: "An invisible husband visits Psyche each night, always leaving before dawn, forbidding her to see his face. She is content \u2014 until her jealous sisters visit. They plant doubt: 'Your husband must be the serpent-monster from the oracle; he is fattening you before he eats you.' The sisters are motivated by jealousy of Psyche's beautiful palace and invisible divine husband. They represent the voice of rational suspicion against sacred mystery.",
      },
      {
        heading: "The Broken Condition",
        text: "Psyche brings a lamp and a knife to bed. She lights the lamp and sees not a monster but Eros himself \u2014 the most beautiful of gods. Overcome, she leans in; a drop of hot oil spills on his shoulder. He wakes, sees the betrayal, and flies away, saying she would have learned his identity when their child was born \u2014 now everything is lost. She is left completely alone.",
      },
      {
        heading: "The Four Tasks of Venus",
        text: "Psyche surrenders to Venus's authority. Four impossible tasks: (1) Sort a mountain of mixed grain by nightfall \u2014 ants help, grain by grain. (2) Collect golden wool from violent, sun-scorched sheep in a field \u2014 a reed advises: wait until evening and collect wool caught on thorns when the sheep have passed. (3) Fill a crystal flask from the source of the Styx and Cocytus at a sheer cliff guarded by dragons \u2014 an eagle of Zeus carries it and fills it for her. (4) Descend to the underworld and return with a box of Persephone's beauty. A tower provides detailed instructions: coins for Charon, honey-cakes for Cerberus, refuse all pleas for help along the way (or the task fails).",
      },
      {
        heading: "Final Temptation and Apotheosis",
        text: "Returning from the underworld, Psyche opens the box \u2014 paralleling Pandora's jar. She hopes to use some of Persephone's beauty to please Eros. Inside is not beauty but a deathly sleep that overwhelms her. Eros, recovered and unable to stay away, flies to her, wipes the sleep back into the box, wakes her with a prick of his arrow, and appeals to Jupiter (Zeus). Jupiter calls the gods together, announces the marriage as official, gives Psyche ambrosia making her immortal. Even Venus must accept the outcome. Their daughter is named Voluptas \u2014 'Pleasure.'",
      },
    ],
    characters: [
      { name: "Psyche", role: "Mortal princess; her name means 'soul'" },
      {
        name: "Eros/Cupid",
        role: "God of love; accidentally falls for Psyche",
      },
      {
        name: "Venus/Aphrodite",
        role: "Jealous antagonist; sets the four impossible tasks",
      },
      {
        name: "Psyche's sisters",
        role: "Jealous; plant doubt; the voice of rational suspicion against sacred mystery",
      },
      { name: "Zephyr", role: "West wind; carries Psyche to the palace" },
      {
        name: "Jupiter/Zeus",
        role: "Mediator; makes Psyche immortal; blesses the marriage",
      },
      { name: "Voluptas", role: "Their daughter; her name means 'Pleasure'" },
    ],
    themes: [
      "Soul (psyche) journeying toward divine love \u2014 allegorical reading",
      "Curiosity as destructive (Pandora parallel) but also necessary",
      "Love transcending the mortal-divine boundary",
      "Tasks as trials of worthiness and maturation",
      "The redemptive power of love \u2014 Eros rescues Psyche",
    ],
    sources: ["Apuleius, Metamorphoses (The Golden Ass) Books 4-6 (2nd c. CE)"],
    quizQuestions: [
      {
        q: "What does 'Psyche' mean, and why is it significant for interpreting the myth?",
        options: [
          "Beauty \u2014 outer beauty vs. inner worth",
          "Soul \u2014 the myth is read as allegory of the soul's journey through trials to divine love and immortality",
          "Love \u2014 linking her to Eros/Cupid",
          "Breath \u2014 she is almost killed by the deathly sleep",
        ],
        answer: 1,
        explanation:
          "The allegorical reading is central to the myth's reception history \u2014 the soul (Psyche) undergoes purification through suffering and eventually achieves divine union. This is essentially Orphic/Platonic in structure.",
      },
      {
        q: "What parallel does Psyche's opening of the box have with an earlier myth?",
        options: [
          "Medusa's head \u2014 both cause petrification",
          "Pandora's jar \u2014 both involve a woman opening a forbidden container out of curiosity, releasing harm",
          "Actaeon seeing Artemis \u2014 both involve forbidden sight",
          "Orpheus looking back \u2014 both involve failure at the last moment",
        ],
        answer: 1,
        explanation:
          "The Pandora parallel is explicit and intentional. The recurring pattern of a woman's curiosity releasing harm is a structural element of Greek mythology that the course traces.",
      },
      {
        q: "Which task does Psyche complete with the help of Zeus's eagle?",
        options: [
          "Sorting the grain",
          "Collecting golden wool",
          "Filling the flask from the source of the Styx \u2014 the eagle carries it past the guardian dragons",
          "Returning from the underworld",
        ],
        answer: 2,
        explanation:
          "The Styx source is guarded by dragon-serpents on a sheer cliff \u2014 completely impossible for a mortal unaided. Zeus's eagle (his traditional symbol of divine authority) intervenes.",
      },
      {
        q: "How does the myth end, and what is its final message?",
        options: [
          "Psyche remains mortal and dies eventually",
          "Eros and Psyche live in secret",
          "Jupiter makes Psyche immortal, the marriage is official, even Venus relents \u2014 love literally elevates the soul to divinity",
          "Venus kills Psyche despite Eros's intervention",
        ],
        answer: 2,
        explanation:
          "The apotheosis of Psyche \u2014 mortal soul becoming immortal through love \u2014 is the myth's theological statement: love is the force that transcends the mortal-divine boundary and transforms.",
      },
    ],
  },

  {
    id: "oedipus",
    title: "Oedipus Rex \u2014 The Blind King",
    subtitle: "Fate, knowledge, and the tragedy of self-discovery",
    category: "saga",
    unit: 3,
    modules: ["8a"],
    overview:
      "The Theban Saga begins with Cadmus and the foundation of Thebes and culminates in Oedipus \u2014 perhaps the most analysed myth in Western culture. Sophocles gave Western literature the concept of the tragic hero (hamartia, anagnorisis, peripeteia). Freud named the Oedipus complex after this myth. The course covers the full saga through Antigone.",
    sections: [
      {
        heading: "Foundation of Thebes: Cadmus and the Spartoi",
        text: "Europa's brother Cadmus is sent by his father to find her; the Oracle at Delphi tells him instead to follow a cow and found a city where it lies down \u2014 this becomes Thebes (Cadmeia). To sacrifice the cow he needs water from a spring guarded by Ares' serpent. He kills it. Athena tells him to sow its teeth in the earth. Armed warriors spring up and fight each other until five remain \u2014 the Spartoi ('sown men'), who become Thebes's founding noble families. Cadmus is given Harmonia, daughter of Ares and Aphrodite, as his wife \u2014 linking Thebes to both war and love. His daughter Semele is Dionysus's mother.",
      },
      {
        heading: "The Labdacid Line: From Laius to the Prophecy",
        text: "Laius of Thebes carries a curse (he abducted Chrysippus, beloved son of Pelops, who cursed him) and receives an oracle: his son will kill him. He and his wife Jocasta have a son. Laius pierces the infant's ankles and orders him left on Mount Cithaeron to die. A servant gives the baby instead to a Corinthian herdsman, who takes him to King Polybus and Queen Merope. They name him Oedipus ('swollen-foot' in Greek) and raise him as their own.",
      },
      {
        heading: "The Oracle and the Crossroads",
        text: "A drunk man taunts Oedipus as a bastard at a feast. He goes to Delphi \u2014 but Apollo gives him the same oracle as Laius: he will kill his father and marry his mother. Resolving never to go back to Corinth, he takes the road to Thebes. At a three-road crossroads (trivium), he meets a group of travellers. A quarrel over right of way escalates; the leader strikes Oedipus with a staff. Oedipus kills them all. The leader is Laius, his biological father. The oracle is half-fulfilled.",
      },
      {
        heading: "The Sphinx, the Kingdom, and the Fulfilled Prophecy",
        text: "Near Thebes, Oedipus faces the Sphinx (woman's face, lion's body, eagle's wings \u2014 sent by Hera): 'What has one voice and walks on four legs at dawn, two at noon, three in the evening?' Answer: Man. The Sphinx destroys herself. The grateful Thebans make Oedipus king and give him the widowed queen Jocasta as wife. He has four children with her: Eteocles, Polynices, Antigone, Ismene. The prophecy is completely fulfilled. No one knows.",
      },
      {
        heading: "The Search for Truth and Recognition",
        text: "Years later a plague devastates Thebes. The Oracle: the city is polluted by the unpunished murder of the former king Laius. Oedipus investigates \u2014 hunting himself. The blind prophet Tiresias warns him repeatedly to stop. A messenger from Corinth reports Polybus died of natural causes \u2014 Oedipus didn't kill his father! But as witnesses are traced back, the truth assembles piece by piece. Jocasta understands before Oedipus and begs him to stop. He refuses. The final servant confirms everything. Jocasta hangs herself. Oedipus takes the pins from her dress and blinds his own eyes \u2014 physical blindness now matching his former metaphorical blindness.",
      },
      {
        heading: "Antigone and the Seven Against Thebes",
        text: "In Oedipus at Colonus (Sophocles), the wandering blind Oedipus comes to Colonus near Athens. Theseus welcomes him; he dies mysteriously, his grave a sacred site protecting Athens. His sons Eteocles and Polynices kill each other fulfilling his dying curse (the Seven Against Thebes). In Sophocles' Antigone: Creon forbids burial of Polynices as a traitor. Antigone defies him \u2014 her divine obligation (to bury the dead) vs. his civic law (the state's right to punish traitors). She is condemned to a cave; she dies. Creon's son Haemon (her fianc\u00e9) kills himself. Creon's wife Eurydice kills herself. Creon's rigid insistence on the state's absolute authority destroys everything he loves.",
      },
    ],
    characters: [
      {
        name: "Oedipus",
        role: "King of Thebes; fulfils oracle despite every effort; blinds himself on discovering truth",
      },
      {
        name: "Jocasta",
        role: "His mother and wife; hangs herself when the truth is revealed",
      },
      {
        name: "Laius",
        role: "His biological father; killed by Oedipus at the crossroads",
      },
      {
        name: "Tiresias",
        role: "Blind prophet who knows the truth; consistently ignored",
      },
      {
        name: "Creon",
        role: "Jocasta's brother; later antagonist in Antigone \u2014 rigid civic authority",
      },
      {
        name: "Antigone",
        role: "Daughter; guides blind Oedipus in exile; defies Creon to bury Polynices",
      },
      {
        name: "Eteocles & Polynices",
        role: "Sons; kill each other in battle fulfilling Oedipus's curse",
      },
      {
        name: "Haemon",
        role: "Creon's son; betrothed to Antigone; kills himself when she dies",
      },
    ],
    themes: [
      "Fate vs. free will \u2014 every escape attempt fulfils the prophecy",
      "Sight vs. blindness as metaphor for knowledge vs. ignorance",
      "Hamartia: intellectual pride \u2014 wanting to know everything",
      "The gods' will operating inexorably through human choices",
      "Antigone's dilemma: divine law vs. human/civic law",
    ],
    sources: [
      "Sophocles' Oedipus Rex (~429 BCE)",
      "Sophocles' Oedipus at Colonus (~401 BCE)",
      "Sophocles' Antigone (~441 BCE)",
    ],
    quizQuestions: [
      {
        q: "Who founds Thebes and how?",
        options: [
          "Oedipus, after defeating the Sphinx",
          "Cadmus, Europa's brother \u2014 he sows the teeth of Ares' serpent and the Spartoi spring up",
          "Ares himself, by planting warriors in the earth",
          "Zeus, after taking Europa from her homeland",
        ],
        answer: 1,
        explanation:
          "Cadmus is the crucial founding figure of Thebes \u2014 his killing of Ares' serpent and sowing the serpent's teeth establishes both the city and the aristocratic families who figure throughout the Theban cycle.",
      },
      {
        q: "What is Oedipus's hamartia (tragic flaw) according to the course?",
        options: [
          "His uncontrolled rage \u2014 he kills strangers at crossroads",
          "His intellectual pride \u2014 his relentless insistence on pursuing the truth even when everyone warns him to stop",
          "His sexual transgression \u2014 marrying Jocasta",
          "His hubris against the gods \u2014 refusing to accept Apollo's oracle",
        ],
        answer: 1,
        explanation:
          "Oedipus is brilliant \u2014 he solved the Sphinx's riddle. His flaw is that same intelligence applied without limit, refusing to stop even when Tiresias, Jocasta, and every clue warns him. He hunts himself down.",
      },
      {
        q: "What does Antigone's dilemma represent in the course?",
        options: [
          "Whether to forgive Creon or take revenge",
          "Divine law (sacred obligation to bury the dead) vs. human civic law (Creon's edict that traitors go unburied) \u2014 Sophocles presents Creon's absolute civic authority as the greater error",
          "Loyalty to family vs. loyalty to the state \u2014 she chooses family",
          "Whether to marry Haemon or die a virgin servant of the gods",
        ],
        answer: 1,
        explanation:
          "Sophocles's Antigone is often read as a political play about the limits of state power against ancient religious law. Creon's rigidity is presented as a kind of secular hubris.",
      },
      {
        q: "What is anagnorisis, and where does it occur in the Oedipus myth?",
        options: [
          "A Spartan military formation",
          "The moment of tragic recognition \u2014 Oedipus's discovery that he is the polluting murderer he has been hunting and that all the prophecies have been fulfilled",
          "The sacrifice Oedipus makes to Apollo",
          "The prophecy itself delivered at Delphi",
        ],
        answer: 1,
        explanation:
          "Anagnorisis ('recognition') is Aristotle's term for the moment of devastating self-knowledge in tragedy. Oedipus's is the most complete: he discovers not just one truth but that his entire identity has been a lie.",
      },
    ],
  },

  {
    id: "house-of-atreus",
    title: "The Curse of the House of Atreus",
    subtitle: "Four generations of crime, revenge, and divine justice",
    category: "saga",
    unit: 3,
    modules: ["8b"],
    overview:
      "The Mycenaean saga traces the curse on the family of Atreus across four generations \u2014 from Tantalus's cannibalistic crime through Pelops and Myrtilus's dying curse to the horrors of Atreus and Thyestes and finally Agamemnon's murder and Orestes' revenge and trial. It is the subject of Aeschylus's Oresteia \u2014 the only complete surviving Greek tragic trilogy.",
    sections: [
      {
        heading: "Tantalus and the Eternal Punishment",
        text: "The curse originates with Tantalus, uniquely privileged to dine with the gods. He kills his son Pelops, cooks him, and serves him at a divine banquet \u2014 either to test the gods' omniscience, or as a perverse honour. The gods mostly refuse. Only Demeter (distracted by grief for Persephone) eats a piece of shoulder. The gods restore Pelops to life, replacing his shoulder with ivory. Tantalus is condemned to Tartarus, standing in water under fruit trees \u2014 both perpetually receding. This is the origin of the English word 'tantalize.' The ivory shoulder of Pelops was famous in antiquity as a sacred relic.",
      },
      {
        heading: "Pelops, Hippodamia, and Myrtilus's Curse",
        text: "Pelops goes to Elis to compete for the hand of Hippodamia, daughter of King Oenomaus, who has killed thirteen previous suitors in a chariot race. Pelops either bribes the charioteer Myrtilus to replace Oenomaus's wheel linchpins with wax, or receives Poseidon's divine horses. The chariot crashes; Oenomaus is killed. But Pelops then throws Myrtilus into the sea to avoid paying the promised reward. Dying, Myrtilus curses Pelops and all his descendants. This is the second layer of the curse \u2014 a human moral wrong layered on top of Tantalus's divine transgression. The Peloponnese ('island of Pelops') is named after him.",
      },
      {
        heading: "Atreus and Thyestes: The Feast of Horror",
        text: "The curse passes to Pelops's sons Atreus and Thyestes. Thyestes seduces Atreus's wife Aerope and steals the golden lamb signifying legitimate kingship. Atreus regains power and plots the ultimate revenge: he pretends to reconcile with Thyestes, invites him to a feast, kills Thyestes's sons (except unborn Aegisthus), and serves them in a stew. At the feast's end he brings out the children's hands and heads to show Thyestes what he has eaten. Thyestes flees, cursing Atreus. Aegisthus is conceived specifically to avenge this crime.",
      },
      {
        heading: "Agamemnon and the Sacrifice of Iphigenia",
        text: "Atreus's son Agamemnon commands the Greek fleet at Aulis, bound for Troy. The winds are contrary. The prophet Calchas says Artemis is offended and demands the sacrifice of Agamemnon's daughter Iphigenia. Agamemnon sacrifices her (in one version; in Euripides' Iphigenia at Aulis, Artemis substitutes a deer and takes Iphigenia to Tauris as her priestess). Either way, Clytemnestra never forgives her husband. She plots with Aegisthus throughout the ten-year war.",
      },
      {
        heading: "The Murder of Agamemnon and Cassandra",
        text: "Agamemnon returns from Troy with the Trojan prophet-princess Cassandra as his concubine. Apollo had given Cassandra the gift of prophecy but cursed her: her prophecies are always true and always disbelieved. She foresees the murders about to happen in the palace \u2014 Clytemnestra and the Greek chorus ignore her. Clytemnestra welcomes Agamemnon with elaborate ceremony, leads him to a bath, throws a net over him, and stabs him repeatedly. She kills Cassandra too. Her stated motivations in Aeschylus: the sacrifice of Iphigenia AND the insult of Cassandra as concubine.",
      },
      {
        heading: "Orestes, Electra, and the Trial at Athens",
        text: "Orestes has been sent away and survived. His sister Electra endures near-slavery in the palace. Orestes returns with his friend Pylades, reunites with Electra, and kills first Aegisthus, then Clytemnestra. The Furies (Erinyes \u2014 ancient goddesses of blood-vengeance, especially against family members) immediately pursue him. In Aeschylus's resolution (the Eumenides), Orestes is tried at the court of the Areopagus in Athens. The jury is evenly split. Athena casts the deciding vote for acquittal \u2014 establishing that human civic courts can supersede the archaic cycle of blood vengeance. The Furies are transformed into the Eumenides ('kindly ones') and become protective spirits of Athens.",
      },
    ],
    characters: [
      {
        name: "Tantalus",
        role: "First generation; serves his son to gods; eternally punished in Tartarus; origin of 'tantalize'",
      },
      {
        name: "Pelops",
        role: "Restored to life with ivory shoulder; names the Peloponnese; Myrtilus's curse drives the saga",
      },
      {
        name: "Myrtilus",
        role: "Charioteer; killed by Pelops; dying curse is the saga's engine",
      },
      {
        name: "Atreus",
        role: "Serves Thyestes his children; Agamemnon's father",
      },
      {
        name: "Thyestes",
        role: "Seduces Atreus's wife; unknowingly eats his children; curses Atreus",
      },
      {
        name: "Aegisthus",
        role: "Thyestes' surviving son; Clytemnestra's lover and co-murderer",
      },
      {
        name: "Agamemnon",
        role: "Son of Atreus; sacrifices Iphigenia; murdered on return from Troy",
      },
      {
        name: "Clytemnestra",
        role: "His wife; murders him with justified and unjustified grievances; morally complex",
      },
      {
        name: "Orestes",
        role: "Kills Clytemnestra; pursued by Furies; tried and acquitted at Athens",
      },
      {
        name: "Electra",
        role: "Agamemnon's loyal daughter; helps plan revenge",
      },
      {
        name: "Cassandra",
        role: "Trojan prophet-princess; foresees murders; not believed; killed by Clytemnestra",
      },
    ],
    themes: [
      "Generational curse \u2014 sins of fathers visited on children",
      "Blood vengeance vs. civic justice \u2014 the Oresteia's central question",
      "The moral complexity of Clytemnestra \u2014 victim and murderer",
      "The transition from archaic vengeance ethics to democratic law",
      "Cannibalism as ultimate transgression \u2014 Tantalus and Thyestes",
    ],
    sources: [
      "Aeschylus's Oresteia \u2014 Agamemnon, Libation Bearers, Eumenides (458 BCE)",
      "Sophocles' Electra",
      "Euripides' Electra, Orestes, Iphigenia at Aulis",
      "Homer's Odyssey Books 1, 4, 11",
    ],
    quizQuestions: [
      {
        q: "What English word comes from Tantalus's punishment, and what is its meaning?",
        options: [
          "'Tantrum' \u2014 from his rage in Tartarus",
          "'Tantalize' \u2014 from his eternal near-satisfaction that is always just out of reach",
          "'Tantalizing' only",
          "'Tantamount' \u2014 from his crime being equivalent to the gods' worst fears",
        ],
        answer: 1,
        explanation:
          "Tantalus stands in water under fruit trees \u2014 both recede when he reaches for them. 'To tantalize' means to tempt with something desirable that remains just out of reach.",
      },
      {
        q: "Why is Clytemnestra's murder of Agamemnon morally complex in Aeschylus?",
        options: [
          "She is simply depicted as evil and power-hungry",
          "She has genuine grievances \u2014 he sacrificed their daughter Iphigenia and returned with Cassandra as concubine \u2014 making her revenge understandable even if murderous",
          "Aeschylus fully justifies her action",
          "She is an innocent victim of Aegisthus's manipulation",
        ],
        answer: 1,
        explanation:
          "The Oresteia's genius is that Clytemnestra is RIGHT \u2014 Agamemnon did sacrifice their daughter. The play forces the audience to weigh her justice against the crime of matricide Orestes must commit.",
      },
      {
        q: "What is the significance of Athena's vote and the creation of the Areopagus court?",
        options: [
          "It shows gods always favour Greek heroes",
          "It establishes that human civic courts can replace archaic blood-vengeance \u2014 justice as a social institution superseding personal revenge",
          "It creates a precedent for all murder trials to be held in Athens",
          "It simply acquits Orestes of a crime he is clearly guilty of",
        ],
        answer: 1,
        explanation:
          "Aeschylus wrote in 458 BCE when Athenian democratic institutions were debated. The myth argues that civic law is a moral advance over blood vengeance \u2014 Athens is the site of this transition.",
      },
      {
        q: "What two motivations does Clytemnestra give for killing Agamemnon?",
        options: [
          "His arrogance and his infidelity before the war",
          "The sacrifice of their daughter Iphigenia AND bringing Cassandra home as his concubine",
          "His failure to honour the gods properly",
          "His cruelty to the Greek soldiers at Troy",
        ],
        answer: 1,
        explanation:
          "Both motivations are stated in the Agamemnon. This dual justification is why she is not simply a villain \u2014 Aeschylus makes the audience understand her, even if they cannot approve of her.",
      },
    ],
  },

  {
    id: "trojan-war",
    title: "The Trojan War and the Iliad",
    subtitle: "Homer, oral poetry, and the rage of Achilles",
    category: "saga",
    unit: 3,
    modules: ["9a", "9b"],
    overview:
      "The Trojan War is the central event of Greek mythology. Module 9a covers the causes (Helen and the Judgment of Paris); Module 9b covers Homer, the oral tradition, the Iliad's content and all major characters. The Iliad is not primarily about the war \u2014 it is about one man's rage and its consequences.",
    sections: [
      {
        heading: "Causes: Helen, the Oath, and Paris",
        text: "Helen \u2014 daughter of Zeus (who visited Leda as a swan) and Leda \u2014 is the most beautiful woman in the world. When she came of marriageable age, all the great heroes of Greece sought her hand. Her father Tyndareus required all suitors to swear an oath to defend whoever married her. She chose Menelaus, King of Sparta. They had a daughter Hermione. Paris (also called Alexander), son of Priam of Troy, visits Sparta as a guest. He takes Helen \u2014 whether with her willing consent, by seduction, or by force varies. Menelaus calls on all the oath-bound heroes to help retrieve her. The fleet of a thousand ships assembles at Aulis.",
      },
      {
        heading: "The Judgment of Paris \u2014 Divine Cause",
        text: "At the wedding of Peleus and Thetis (parents of Achilles), Eris (Strife) rolls a golden apple inscribed 'for the most beautiful' onto the feast table. Hera, Athena, and Aphrodite all claim it. Zeus refuses to judge and appoints Paris \u2014 a mortal prince exposed as an infant (his mother Hecuba dreamed he would destroy Troy) who grew up as a shepherd on Mount Ida. Three bribes: Hera offers royal power; Athena offers victory in war; Aphrodite offers the most beautiful woman in the world. Paris chooses Aphrodite and Helen. The war thus has a divine cause: Aphrodite supports Troy; Hera and Athena support Greece.",
      },
      {
        heading: "Homer and Oral Poetry",
        text: "The Iliad (15,600 lines) and Odyssey (12,100 lines) are attributed to Homer, a legendary blind poet from the 8th century BCE. Both epics are composed in dactylic hexameter \u2014 a line of six dactylic feet (long-short-short) \u2014 the standard metre of ancient Greek and Latin epic. The Homeric epics emerged from an oral tradition: rhapsodes (professional singer-reciters) composed and transmitted these poems from memory using formulaic phrases ('wine-dark sea,' 'swift-footed Achilles,' 'rosy-fingered Dawn') as building blocks. Formulaic language is not laziness \u2014 it is a sophisticated memory and composition technology. The poems were probably written down in the late 8th century BCE, though oral recitation continued alongside written texts. Key evidence: the Nestor's Cup (found on Ischia), inscribed in hexameter verse, shows early Greek alphabetic writing about the cup from the Iliad.",
      },
      {
        heading: "Iliad: The Rage of Achilles",
        text: "First word of the Iliad: menis \u2014 'rage.' 'Sing, goddess, of the rage of Achilles.' Agamemnon takes the daughter of Apollo's priest Chryses as a war prize (Chryseis) and refuses to return her. Apollo sends a plague. Forced to return Chryseis, Agamemnon takes Achilles' war prize Briseis as compensation \u2014 publicly dishonoring him. Achilles withdraws from battle. His divine mother Thetis asks Zeus to let the Greeks suffer until Achilles is honored. Zeus agrees. The Trojans push the Greeks back to their ships. Patroclus \u2014 Achilles' closest companion \u2014 borrows his armor, fights, and is killed by Hector. Achilles' grief overwhelms his anger at Agamemnon. He returns.",
      },
      {
        heading: "Key Characters of the Iliad",
        text: "GREEKS: Agamemnon (high king \u2014 great warrior but petty and arrogant; seizes Briseis); Patroclus (Achilles' beloved companion, possibly lover; killed by Hector); Odysseus (cunning counselor); Menelaus (respectable but not exceptional); Ajax the Great (Telamon's son \u2014 strongest defender; 'brawn over brains'); Ajax the Less (Oileus's son \u2014 dragged Priam's daughter from Athena's temple); Nestor (wise old King of Pylos \u2014 constantly recalls past glories); Diomedes (Argos's king; Athena's favourite; wounds both Ares and Aphrodite in battle). TROJANS: Hector (greatest Trojan; prince; his death seals Troy's fate; his farewell to wife Andromache and infant son Astyanax is the Iliad's most tender scene); Paris (pretty, cowardly; Aphrodite rescues him from Menelaus in single combat by wrapping him in mist); Priam (old King; fifty sons; ransoms Hector's body); Hecuba (queen); Andromache (Hector's wife); Cassandra (prophet; not believed); Aeneas (son of Aphrodite; saved by gods; fated to found Rome).",
      },
      {
        heading: "Hector's Death, Priam's Embassy, and the Fall of Troy",
        text: "Achilles kills Hector and drags his body behind his chariot for twelve days \u2014 a terrible desecration that offends even the gods. At night, guided by Hermes, old King Priam comes alone to the Greek camp. He kisses the hands that killed his son. Achilles, seeing his own father in Priam, weeps with him and agrees to return the body. The Iliad ends with Hector's funeral. What follows (from other sources): Achilles is killed by Paris's arrow, guided by Apollo, to his vulnerable heel. Odysseus devises the Trojan Horse \u2014 built by Epeus, filled with warriors. Cassandra warns it is a trap; no one listens. Troy falls. Most Trojans are killed or enslaved. Aeneas escapes and eventually founds what will become Rome.",
      },
    ],
    characters: [
      {
        name: "Achilles",
        role: "Greatest Greek warrior; chooses glory over long life; rage is Iliad's theme; kills Hector",
      },
      {
        name: "Hector",
        role: "Greatest Trojan warrior; defender of Troy; his death seals the city's fate",
      },
      {
        name: "Patroclus",
        role: "Achilles' beloved companion; killed by Hector in Achilles' armor",
      },
      {
        name: "Agamemnon",
        role: "High king; great warrior but arrogant; his dishonoring of Achilles triggers the plot",
      },
      {
        name: "Priam",
        role: "King of Troy; ransoms Hector's body; the Iliad's most moving scene",
      },
      {
        name: "Andromache",
        role: "Hector's wife; farewell with Hector and infant Astyanax is the Iliad's tenderest scene",
      },
      {
        name: "Paris/Alexander",
        role: "Trojan prince; cowardly; his Judgment caused the war; kills Achilles",
      },
      {
        name: "Aeneas",
        role: "Son of Aphrodite; saved by gods; founder of Rome in Virgil's Aeneid",
      },
      {
        name: "Cassandra",
        role: "Trojan prophet; foresees everything; cursed to be disbelieved",
      },
      {
        name: "Diomedes",
        role: "Greek warrior; Athena's favourite; wounds both Ares and Aphrodite in combat",
      },
    ],
    themes: [
      "Glory (kleos) vs. long life \u2014 Achilles' defining choice",
      "The costs of wounded honour and pride",
      "Divine factionalism embedded in human warfare",
      "Friendship, grief, and revenge (Achilles-Patroclus)",
      "The humanity of the enemy \u2014 Hector and Priam",
    ],
    sources: [
      "Homer's Iliad (8th c. BCE)",
      "Homer's Odyssey Book 8 (Trojan Horse)",
      "Virgil's Aeneid 1-2 (Fall of Troy)",
    ],
    quizQuestions: [
      {
        q: "What is dactylic hexameter and why is it important?",
        options: [
          "A style of ancient Greek vase painting",
          "The metre of Greek and Latin epic \u2014 six dactylic feet per line \u2014 used in the Iliad, Odyssey, and Aeneid; the standard vehicle of oral composition",
          "A type of Greek military formation",
          "A mode of music associated with Apollo",
        ],
        answer: 1,
        explanation:
          "Dactylic hexameter is the defining formal feature of ancient epic. Understanding that oral poets composed in real-time using this metre explains why formulaic language existed \u2014 the rhythm itself is a memory and composition tool.",
      },
      {
        q: "What is the Iliad's first word, and what does this tell us about the poem?",
        options: [
          "Troy \u2014 it is about the city",
          "Menis (rage) \u2014 Achilles' rage at Agamemnon is explicitly the poem's central subject from line one",
          "Helen \u2014 it is about the most beautiful woman",
          "Zeus \u2014 it is about divine will",
        ],
        answer: 1,
        explanation:
          "The very first word announces the theme. The Iliad is NOT primarily about the Trojan War \u2014 it is about one man's rage and its catastrophic consequences for both sides.",
      },
      {
        q: "What makes the scene between Priam and Achilles the emotional climax of the Iliad?",
        options: [
          "Achilles finally apologizes to Agamemnon",
          "An old father kisses the hands that killed his son; Achilles weeps, seeing his own father in Priam; two enemies grieve together in recognition of shared mortality",
          "Priam offers Achilles so much treasure he cannot refuse",
          "The gods appear and demand both sides make peace",
        ],
        answer: 1,
        explanation:
          "This is often cited as one of the most profound moments in all of Western literature \u2014 enemy soldiers reduced to fathers and sons, weeping together over the cost of glory and war.",
      },
      {
        q: "Why did Paris's choice at the Judgment matter for the war's divine dynamics?",
        options: [
          "It determined who had the largest army",
          "By choosing Aphrodite (and Helen), Paris gained Aphrodite's support for Troy but earned Hera and Athena's active enmity \u2014 divine factionalism drives the entire Iliad",
          "It was simply a private matter that had no effect on the gods",
          "Zeus arranged it to test the gods' loyalties",
        ],
        answer: 1,
        explanation:
          "The divine factionalism is crucial for reading the Iliad. Every divine intervention \u2014 Athena helping Greeks, Apollo helping Trojans, Aphrodite rescuing Paris \u2014 traces back to the three goddesses' competing interests from the Judgment.",
      },
    ],
  },

  {
    id: "three-underworlds",
    title: "The Three Underworlds",
    subtitle: "Homer, Plato, and Virgil on death and what follows",
    category: "underworld",
    unit: 3,
    modules: ["7a", "7c", "7d", "7e"],
    overview:
      "Three major ancient texts give fundamentally different pictures of the afterlife: Homer's Odyssey Book 11 (8th c. BCE), Plato's Myth of Er in the Republic (380 BCE), and Virgil's Aeneid Book 6 (19 BCE). Comparing them is one of the course's core examination topics \u2014 tracing the movement from amoral gloom to moral philosophy to patriotic grandeur.",
    sections: [
      {
        heading: "Basic Structure: The Greco-Roman Underworld",
        text: "The underworld is called Hades \u2014 both the ruling god (= Pluto in Latin) and the place. Five rivers: Styx (divine oath river), Acheron (woe \u2014 crossed in Charon's ferry), Lethe (forgetfulness \u2014 drunk before reincarnation), Phlegethon (fire), Cocytus (lamentation). Charon, the ancient ferryman, transports the dead \u2014 he requires a coin (obol, placed in mouth or on eyes of the corpse). The unburied or unpaid must wait 100 years on the near bank (Virgil). Cerberus \u2014 three-headed guard dog \u2014 prevents the living from entering and the dead from leaving. Three judges: Minos, Rhadamanthus, Aeacus (all former kings, sons of Zeus). Key regions: Tartarus (severe punishment), Elysium (reward for greatest heroes), Asphodel Fields (neutral majority).",
      },
      {
        heading: "Homer's Underworld: The Nekuia (Odyssey 11)",
        text: "The earliest literary account of the underworld. Homer's afterlife is democratic and grim \u2014 ALL mortals go there regardless of deeds. The dead are shadows (skiai), stripped of consciousness until they taste blood. The underworld is dark, joyless, without sunlight. Key encounters: Elpenor (died unburied on Circe's island \u2014 fell drunk off the roof; begs for burial so his soul can rest); Tiresias (only shade with permanent consciousness; warns about Helios's cattle); Anticleia (Odysseus's mother \u2014 died of grief for him; he tries to embrace her three times, cannot \u2014 the dead have no substance \u2014 most poignant scene); Achilles (prefers life as earth's poorest slave to ruling all the dead \u2014 complete reversal of his Iliad values). Punished figures: Tantalus (water and fruit eternally receding \u2014 origin of 'tantalize'); Sisyphus (rolling boulder forever \u2014 cheated death repeatedly; punished for sinning against the gods); Ixion (bound to fiery wheel \u2014 assaulted Hera); Tityus (eagle eats regenerating liver stretched across 9 acres \u2014 assaulted Leto, mother of Apollo and Artemis).",
      },
      {
        heading: "Plato's Underworld: Myth of Er (Republic 10)",
        text: "Er was a soldier who died and returned to life to report on the afterlife. Souls are judged. For each wrong in life: 10\u00d7 punishment for 1,000 years. For each good deed: 10\u00d7 reward. After 1,000 years, souls gather and choose their next life \u2014 freely but with consequences. Famous examples: Ajax refuses to be born human again (too humiliating); Agamemnon chooses to be an eagle (to avoid being at others' mercy). Souls travel to the Spindle of Necessity (the cosmos), drink from the River Lethe (forgetfulness), and are reborn. Only true philosophers \u2014 through virtue \u2014 eventually escape the cycle entirely. Key differences from Homer: (1) Moral structure \u2014 how you lived determines your fate; (2) Reincarnation; (3) The soul is the real person, the body a temporary prison; (4) Death is NOT to be feared.",
      },
      {
        heading: "Virgil's Underworld: Aeneid Book 6",
        text: "The most detailed ancient underworld \u2014 direct ancestor of Dante's Inferno. Aeneas descends with the Sibyl of Cumae (Apollo's prophetess), carrying the golden bough sacred to Persephone. He first buries his crewman Misenus (unburied dead cannot cross \u2014 echoes Elpenor in Homer). The vestibule contains personified abstractions (Grief, Anxiety, Disease, Fear). The Fields of Mourning hold those who died of unrequited love \u2014 including Dido, the Carthaginian queen Aeneas abandoned, who turns away from him without speaking. The deepest pit is Tartarus, where Rhadamanthus punishes sinners who offended gods AND those who sinned against human society (beating parents, enslaving clients, accumulating wealth selfishly \u2014 moral expansion beyond Homer). Elysium is paradise of light and music; here Anchises (Aeneas's father) shows him the souls of future Romans awaiting reincarnation \u2014 Augustus, Romulus, Caesar \u2014 giving the Aeneid its patriotic, prophetic purpose. Virgil absorbs Platonic ideas: judgment, differentiated fates, and reincarnation.",
      },
      {
        heading: "Key Figures of the Underworld",
        text: "CHARON: Aged, violent ferryman \u2014 present in all accounts. In Virgil refuses to take the living Aeneas until shown the golden bough. CERBERUS: Three-headed guard dog. In Virgil, drugged with honey-cake by the Sibyl. Heracles wrestled him out in his 12th Labour. TANTALUS: Water and fruit perpetually receding \u2014 gives English 'tantalize.' His crime: serving his son Pelops at a divine banquet. SISYPHUS: Rolls boulder uphill forever; it always rolls back. His crime in Homer: repeatedly tricking and escaping Death (Thanatos) \u2014 he once had Thanatos bound in chains so no humans could die; in another version he escaped from Hades by tricking Persephone. The great paradigm of futile repetition. TITYUS: Stretched across nine acres \u2014 eagle eats his regenerating liver (like Prometheus above ground, but for assaulting the goddess Leto). DIDO (Virgil only): Carthaginian queen abandoned by Aeneas; turns away from him in the Fields of Mourning without a word \u2014 one of the Aeneid's most devastating moments.",
      },
    ],
    characters: [
      {
        name: "Charon",
        role: "Aged ferryman; requires burial and coin payment; turns away unburied dead",
      },
      {
        name: "Cerberus",
        role: "Three-headed guard dog; keeps the living out and dead in",
      },
      { name: "Hades/Pluto", role: "King of the underworld; impassive judge" },
      {
        name: "Persephone/Proserpina",
        role: "Queen; grants golden bough access in Virgil",
      },
      {
        name: "Tiresias",
        role: "Blind Theban prophet; permanent consciousness in Homer's underworld",
      },
      {
        name: "Er",
        role: "Plato's narrator \u2014 soldier who visits afterlife and returns to report",
      },
      {
        name: "Sibyl of Cumae",
        role: "Apollo's prophetess; guides Aeneas in Aeneid Book 6",
      },
      {
        name: "Sisyphus",
        role: "Rolls boulder forever \u2014 cheated Death; paradigm of futile repetition",
      },
      {
        name: "Tantalus",
        role: "Eternal thirst and hunger \u2014 serves Pelops to gods; origin of 'tantalize'",
      },
      {
        name: "Dido",
        role: "Virgil: Carthaginian queen abandoned by Aeneas; ignores him in Fields of Mourning",
      },
    ],
    themes: [
      "Death as democratic leveller (Homer) vs. moral judgment (Plato, Virgil)",
      "From archaic pessimism toward philosophical/moral afterlife",
      "Unburied dead as liminal \u2014 both accounts emphasise proper burial",
      "Legacy on Dante, Milton, and Christian concepts of Heaven, Hell, Purgatory",
      "The underworld as mirror of each culture's moral values",
    ],
    sources: [
      "Homer's Odyssey Book 11 (Nekuia)",
      "Plato's Republic Book 10 (Myth of Er, ~380 BCE)",
      "Virgil's Aeneid Book 6 (19 BCE)",
      "Pindar's Olympian Ode 2",
    ],
    quizQuestions: [
      {
        q: "What is the most fundamental difference between Homer's and Plato's underworlds?",
        options: [
          "Homer's has more monsters and is scarier",
          "Homer's is democratic and amoral \u2014 all go there regardless of deeds; Plato's is morally structured \u2014 how you lived determines your soul's fate",
          "Plato's involves physical suffering while Homer's does not",
          "Homer's underworld involves reincarnation",
        ],
        answer: 1,
        explanation:
          "This is the course's core comparison. Homer's afterlife offers no incentive for virtue. Plato's is a complete moral system where earthly conduct determines what happens to your soul \u2014 a total transformation of the concept.",
      },
      {
        q: "What does Achilles reveal about the afterlife in Odyssey Book 11?",
        options: [
          "He is glad to rule the shades as a great king",
          "He thinks death in battle was worth it for the kleos (glory)",
          "He would rather be the poorest slave alive on earth than rule over all the dead",
          "He wants to fight again but cannot because he has no body",
        ],
        answer: 2,
        explanation:
          "This is a stunning reversal of Achilles's values in the Iliad. In Hades he regrets his choice of glory completely. Life \u2014 any life \u2014 is preferable to death in Homer's unambiguous vision.",
      },
      {
        q: "Who is Dido and why is her appearance in Virgil's underworld significant?",
        options: [
          "A Trojan queen who was killed in the war",
          "The Carthaginian queen Aeneas loved and abandoned; in Virgil's Fields of Mourning she turns away from him without speaking \u2014 her silent rejection is one of the Aeneid's most devastating moments",
          "A priestess of Persephone who guides Aeneas",
          "An Amazon warrior killed by Aeneas",
        ],
        answer: 1,
        explanation:
          "Dido's silence is more powerful than any accusation. Aeneas speaks at length and weeps; she says nothing and returns to her Phoenician husband in the shadows \u2014 the ultimate rejection.",
      },
      {
        q: "What moral innovation does Virgil make to Tartarus that Homer does NOT include?",
        options: [
          "Tartarus in Virgil is physically much larger",
          "In Virgil, Tartarus punishes not just those who offended gods but those who sinned against human society \u2014 family betrayers, corrupt officials, the greedy \u2014 expanding punishment to ordinary human moral failures",
          "In Virgil the punishments are temporary rather than eternal",
          "Virgil's Tartarus is empty \u2014 everyone goes to Elysium",
        ],
        answer: 1,
        explanation:
          "Virgil's expansion of Tartarus to include human-on-human moral crimes reflects Platonic influence \u2014 the afterlife now judges social conduct, not just divine offences. This is a crucial step toward Christian Hell.",
      },
    ],
  },

  {
    id: "dionysus-pentheus",
    title: "Dionysus and Pentheus",
    subtitle: "The twice-born god vs. the rational king",
    category: "god",
    unit: 2,
    modules: ["6b"],
    overview:
      "Dionysus is unlike any other Olympian \u2014 born twice, connected to madness and ecstasy, associated with theatre and religious frenzy. His conflict with Pentheus in Euripides' Bacchae (405 BCE) is one of the most psychologically complex works in antiquity, exploring the tension between rational civic order and the irrational divine forces that underlie it.",
    sections: [
      {
        heading: "The Twice-Born God",
        text: "Dionysus is the son of Zeus and the mortal Semele, daughter of Cadmus, founder of Thebes. Hera tricks Semele into asking Zeus to reveal his true divine form \u2014 the divine fire burns her to ash. Zeus saves the unborn Dionysus by sewing him into his own thigh and carrying him to term. He is born a second time from Zeus's body \u2014 'twice-born.' An additional tradition (Orphic): as an infant, Titans (at Hera's direction) dismembered and ate him. Athena or Rhea saved his heart; he was reconstituted and reborn. This death-and-resurrection narrative gives Dionysus a unique religious resonance \u2014 no other Olympian was killed and reborn. He is born of a mortal mother and shares mortality's experience.",
      },
      {
        heading: "Dionysus: God of Many Domains",
        text: "Dionysus is god of wine, theatre (drama began as his ritual dances), ecstasy (enthousiasmos \u2014 the god entering the worshipper), vegetation, and death-and-rebirth. He is the only Olympian born of a mortal mother \u2014 this connects him to human experience of death in a way that sets him apart. He is described as arriving from the East (Thrace or Phrygia). His followers, the Maenads or Bacchantes, experience divine possession and frenzy. His sacred symbol is the thyrsus (a staff tipped with a pine cone). He is connected to theatrical masks. His Roman name is Bacchus. The great distinction drawn since Nietzsche: Dionysiac (ecstatic, irrational, communal, dangerous) vs. Apolline (rational, ordered, individual, beautiful).",
      },
      {
        heading: "The Return to Thebes: Resistance",
        text: "Dionysus returns to Thebes \u2014 his birthplace, where his mother died, where his divine parentage is denied. The royal family claims Semele's story of Zeus is a lie. He drives the women of Thebes to the mountains of Cithaeron in Bacchic frenzy, including Agave (Pentheus's mother). Young King Pentheus represents rational civic authority \u2014 he is appalled by the social disruption and the rumors of sexual licence in the mountains.",
      },
      {
        heading: "The Trap: Dressing Pentheus as a Woman",
        text: "A beautiful young stranger (Dionysus in disguise) is brought before Pentheus in chains. Though imprisoned, he is unnervingly calm. An earthquake shatters his prison. The stranger then subtly draws out what is already in Pentheus: he suggests Pentheus could spy on the Maenads by dressing as a woman. Pentheus agrees. This moment is the play's psychological crux \u2014 Pentheus's rigid public persona conceals a deep fascination with exactly what he claims to oppose. The cross-dressing is a ritual inversion that dissolves his identity. He does not go to the mountain as a spy; he goes as prey.",
      },
      {
        heading: "Sparagmos, Recognition, and Aftermath",
        text: "On Mount Cithaeron, Pentheus climbs a tree to spy. Dionysus points him out to the Maenads. Agave \u2014 in full divine ecstasy, not recognising her son \u2014 leads them in tearing him apart (sparagmos). She carries his head on her thyrsus back to Thebes, believing she has killed a mountain lion. She is proud. Only as the frenzy fades and Cadmus makes her look carefully at what she carries does recognition dawn. The play ends with grief, exile for Agave and Cadmus, and devastation. Dionysus declares his punishment just \u2014 his divinity was denied. The play allows no easy comfort: the god is real and terrible; denial of the divine is punished absolutely.",
      },
    ],
    characters: [
      {
        name: "Dionysus/Bacchus",
        role: "Twice-born god of wine, theatre, ecstasy; son of Zeus and mortal Semele",
      },
      {
        name: "Pentheus",
        role: "King of Thebes; denies Dionysus; his own suppressed fascination makes him prey",
      },
      {
        name: "Agave",
        role: "Pentheus's mother; kills her son in Bacchic ecstasy thinking he is a lion",
      },
      {
        name: "Semele",
        role: "Dionysus's mortal mother; burned by Zeus's divine form; her death proves his divine origin",
      },
      {
        name: "Cadmus",
        role: "Founder of Thebes; Agave's father; makes her recognise what she carries",
      },
    ],
    themes: [
      "Rationality vs. ecstasy \u2014 the Apolline vs. Dionysiac",
      "The suppression of irrational forces generates greater violence when released",
      "Dionysus as the god who was rejected \u2014 and the consequences",
      "Religious madness as simultaneously dangerous and sacred",
      "Theatre, masks, and identity (Dionysus is god of drama)",
    ],
    sources: [
      "Euripides' Bacchae (~405 BCE)",
      "Homeric Hymn 7 (To Dionysus)",
      "Apollodorus 3.4-5",
    ],
    quizQuestions: [
      {
        q: "Why is Dionysus called 'twice-born'?",
        options: [
          "He was born in two different cities",
          "Semele died before he was born; Zeus saved the fetus by sewing it into his own thigh until term",
          "He died as an infant and was resurrected by Zeus",
          "He was born mortal and later reborn as divine",
        ],
        answer: 1,
        explanation:
          "The second birth from Zeus's thigh is unique in Greek myth \u2014 it makes Dionysus doubly Zeus's son and gives him a special connection to mortality and rebirth shared by no other Olympian.",
      },
      {
        q: "Why does Pentheus agree to dress as a woman to spy on the Maenads?",
        options: [
          "He is physically forced by Dionysus's magic",
          "He plans to infiltrate the rites and then arrest the Maenads",
          "His rigid public persona conceals a deep fascination with the ecstatic experience he outwardly opposes \u2014 Dionysus draws out what is already in him",
          "He is trying to rescue his mother Agave",
        ],
        answer: 2,
        explanation:
          "This is the play's psychological depth and its most modern element. Dionysus does not need to force Pentheus \u2014 he simply creates the conditions for Pentheus's suppressed inner life to emerge. The most dangerous thing is what we deny in ourselves.",
      },
      {
        q: "What is sparagmos?",
        options: [
          "The ritual sacrifice of an animal to Dionysus",
          "The ritual dismemberment of a victim \u2014 human or animal \u2014 performed by Maenads in Bacchic possession",
          "The initiation ceremony for new Bacchic followers",
          "The sacred wine consumed in Dionysiac worship",
        ],
        answer: 1,
        explanation:
          "Sparagmos (tearing apart) is the darkest element of Bacchic ritual \u2014 the dissolution of all civilised boundaries in divine frenzy. Agave tears her own son apart believing he is a wild animal.",
      },
      {
        q: "How does the Bacchae use theatre to reflect on itself?",
        options: [
          "It doesn't \u2014 it is straightforwardly anti-religious",
          "Dionysus is the god of theatre; Pentheus is forced to dress in a theatrical costume (woman's clothes); the play about a god of masks and disguise is itself performed by masked actors \u2014 theatre commenting on its own power",
          "It explicitly criticises Athenian theatre",
          "It was performed at a festival of Apollo, not Dionysus",
        ],
        answer: 1,
        explanation:
          "The Bacchae is uniquely self-reflexive: performed in the Theatre of Dionysus by masked actors at the Dionysia festival, it dramatises a story about Dionysus, the god of theatre, masks, and illusion.",
      },
    ],
  },
  {
    id: "demeter-persephone",
    title: "Demeter and Persephone",
    subtitle: "How the goddess's grief made winter, and her joy made spring",
    category: "god",
    unit: 2,
    modules: ["5a", "5b-damu", "5c-festivals"],
    overview:
      "The Homeric Hymn to Demeter (~650 BCE) is the primary source. Persephone is abducted by Hades with Zeus's prior consent while gathering flowers. Demeter's grief causes worldwide famine. Zeus eventually sends Hermes to retrieve Persephone — but she has eaten pomegranate seeds, binding her to the underworld for part of each year. This myth explains the seasons and founded the Eleusinian Mysteries.",
    sections: [
      {
        heading: "The Abduction",
        text: "Persephone (also called Kore, 'the young girl') is gathering flowers in a meadow when the earth splits open. Hades drives up in his chariot, seizes her, and carries her to the underworld. Zeus had given his consent beforehand — without telling Demeter. Only Hecate (who hears the cries) and Helios (who sees everything from the sky) witness the abduction. This is the recurring leitmotif in Greek literature: young women gathering flowers in meadows are targets for divine abduction. Demeter hears her daughter's cries but cannot find her.",
      },
      {
        heading: "Demeter's Wandering",
        text: "Demeter wanders for nine days without eating, drinking, or bathing — holding torches, searching everywhere. She finally learns the truth from Helios, who tells her it was Hades who took Persephone, with Zeus's blessing. Demeter is furious — not just grief-stricken but angry at Zeus's betrayal. She abandons Olympus entirely and wanders among humans disguised as an old woman.",
      },
      {
        heading: "At Eleusis: Demophon and Iambe",
        text: "Demeter arrives at Eleusis and sits at the Maiden Well. The daughters of Celeus (king of Eleusis) invite her in. At the palace, the servant Iambe (or Baubo in some versions) makes her laugh with obscene jokes — the first time Demeter has smiled since the abduction. She refuses wine but accepts a special drink (kykeon: water, barley, mint). She is hired as nurse for the infant Demophon. She anoints him with ambrosia and places him in fire each night to make him immortal. Metaneira (his mother) spies on her one night and screams — Demeter snatches Demophon from the fire in fury; he cannot now be made immortal. Demeter reveals her identity and commands them to build her a temple.",
      },
      {
        heading: "Famine and Zeus's Intervention",
        text: "Demeter sits alone in her temple in grief and rage. She withholds all her gifts from the earth — no crops grow anywhere. Humans begin to starve; the gods receive no sacrifices or offerings. Zeus becomes alarmed. He sends all the gods one by one to persuade Demeter to relent — she refuses. Finally he sends Hermes to Hades to retrieve Persephone.",
      },
      {
        heading: "The Pomegranate and the Compromise",
        text: "Hades agrees to release Persephone — but before she leaves, he gives her pomegranate seeds to eat (six seeds in most versions). She eats them. This binds her to the underworld. Zeus's compromise: Persephone will spend two-thirds of the year above ground with her mother (spring and summer), and one-third in the underworld as Hades's queen (autumn and winter). When Persephone is with Demeter, the earth blooms; when she returns to Hades, Demeter mourns and the earth becomes barren. This is the Greek explanation for the agricultural year.",
      },
      {
        heading: "The Eleusinian Mysteries",
        text: "Before returning to Olympus, Demeter teaches the princes of Eleusis her rites — the Eleusinian Mysteries. She commands them to build a great temple and altar. These rites promised initiates a special fate in the afterlife — different from the gloomy, democratic Homeric Hades. The Mysteries were practiced for approximately two thousand years. Their content was never revealed — initiates swore secrecy on pain of death in Athens. What we know: a seven-day festival with a great procession from Athens to Eleusis (~30,000 participants), sacrifices, and initiation in the Telesterion (initiation hall) led by the Hierophant. Isocrates (4th c. BCE) says Demeter gave humanity two gifts: grain and the rites that give 'glad hopes about the end of life and about eternity.'",
      },
      {
        heading: "Near Eastern Parallels and Meaning",
        text: "The myth of Duttur and Damu (Sumerian) closely parallels the Demeter/Persephone story: a mother searching in despair for a child who has descended to the underworld, both described as unwashed as they wander, both culminating in restoration of vegetation. This suggests either shared Near Eastern origins or parallel development. The myth operates on multiple levels simultaneously: aetiological (explains seasons and the Eleusinian cult), psychological (mother-daughter separation as universal experience), structuralist (Lévi-Strauss: male/female and life/death binary oppositions throughout the Theogony play out here), and feminist (the abduction is sanctioned by the supreme male god without the mother's knowledge — her rage is justified).",
      },
    ],
    characters: [
      {
        name: "Demeter/Ceres",
        role: "Goddess of grain; mother; her grief causes winter; her joy causes spring",
      },
      {
        name: "Persephone/Proserpina (Kore)",
        role: "Daughter; queen of underworld; embodies the seasonal cycle",
      },
      {
        name: "Hades/Pluto",
        role: "God of underworld; abductor; with Zeus's prior consent",
      },
      {
        name: "Zeus/Jupiter",
        role: "Authorized the abduction without telling Demeter; eventually forces compromise",
      },
      {
        name: "Hecate",
        role: "Hears Persephone's cries; becomes her companion; associated with crossroads and magic",
      },
      {
        name: "Helios",
        role: "Sees the abduction from the sky; tells Demeter the truth",
      },
      {
        name: "Iambe/Baubo",
        role: "Makes Demeter laugh with obscene jokes; important for the kykeon ritual",
      },
      {
        name: "Metaneira",
        role: "Queen of Eleusis; interrupts Demophon's immortalization",
      },
      {
        name: "Demophon",
        role: "Infant Demeter nurses; would have become immortal; interrupted",
      },
      {
        name: "Triptolemus",
        role: "Taught agriculture by Demeter; spreads grain cultivation to all humanity",
      },
      {
        name: "Hermes",
        role: "Sent by Zeus to retrieve Persephone from Hades",
      },
    ],
    themes: [
      "Aetiology: explains the seasons AND the founding of the Eleusinian mystery cult",
      "Mother-daughter separation as a universal human experience",
      "Divine politics: Zeus's authority vs. maternal love",
      "Mortality and immortality: Eleusinian Mysteries promise better afterlife",
      "Binary oppositions: life/death, above/below, Demeter/Persephone, spring/winter",
      "Female experience and patriarchal power: abduction sanctioned without mother's knowledge",
    ],
    sources: [
      "Homeric Hymn to Demeter (~650 BCE)",
      "Ovid's Metamorphoses Book 5 (Proserpina)",
      "Hesiod's Theogony (lines 912-914)",
      "Isocrates' Panegyricus (34-35)",
    ],
    quizQuestions: [
      {
        q: "Who witnessed Persephone's abduction?",
        options: [
          "Only Zeus who had given his consent",
          "Hecate (who heard her cries) and Helios (who saw from the sky)",
          "Hermes, who tried to stop Hades",
          "No one — she disappeared without any witness",
        ],
        answer: 1,
        explanation:
          "Only Hecate and Helios know what happened. Demeter wanders nine days before finally learning the truth from Helios. Hecate becomes Persephone's companion afterward.",
      },
      {
        q: "What does Iambe do for Demeter at Eleusis?",
        options: [
          "Gives her the kykeon drink to end her fast",
          "Makes her laugh with obscene jokes — the first time she smiles after the abduction",
          "Tells her where Persephone is hidden",
          "Teaches her the mystery rites",
        ],
        answer: 1,
        explanation:
          "Iambe's obscene humor breaks Demeter's total grief. This detail was ritually re-enacted in the Eleusinian Mysteries — ritual obscenity as part of the mourning and renewal cycle.",
      },
      {
        q: "Why can't Demophon be made immortal?",
        options: [
          "He was already promised to Hades",
          "Metaneira interrupts Demeter placing him in fire — breaking the process before completion",
          "Zeus forbade it",
          "He ate from Demeter's forbidden food",
        ],
        answer: 1,
        explanation:
          "Demeter's process required placing him in fire each night without interruption. Metaneira's terrified scream breaks the ritual permanently — a mortal cannot see the divine process and have it continue.",
      },
      {
        q: "What binds Persephone to the underworld?",
        options: [
          "A contract Hades forces her to sign",
          "Six pomegranate seeds Hades gives her before she leaves",
          "A promise extracted by Zeus at Hades's request",
          "Chains placed on her by the Furies",
        ],
        answer: 1,
        explanation:
          "Eating in the underworld binds you to it. Hades deliberately gives Persephone the seeds knowing this. The number of seeds (six) determines the proportion of time she must spend there.",
      },
      {
        q: "What two gifts does Isocrates say Demeter gave humanity?",
        options: [
          "Fire and agriculture",
          "The seasons and immortality",
          "Grain/agriculture and the Eleusinian Mysteries (rites giving hope about afterlife)",
          "Love and harvest",
        ],
        answer: 2,
        explanation:
          "Isocrates' formulation is important: the practical gift (grain) and the spiritual gift (the Mysteries). Together they represent Demeter's complete importance to human civilization and wellbeing.",
      },
    ],
  },
  {
    id: "zeus-myths",
    title: "Zeus: King of Gods",
    subtitle: "Sky father, thunderbolt-hurler, judge of gods and men",
    category: "god",
    unit: 2,
    modules: ["2c"],
    overview:
      "Zeus (Roman: Jupiter) is the sky god and undisputed king of the Olympians. His name connects to ancient Indo-European sky father traditions. As weather god, judge, and supreme authority, he presides over all myths. His many love affairs — Danae, Europa, Io, Ganymede, Semele — each produce significant offspring or myths in their own right. His oracle at Dodona was the oldest in the Greek world.",
    sections: [
      {
        heading: "Zeus as Sky and Storm God",
        text: "Zeus's name derives from the same root as the Indic sky god Dyaus pitar (sky father) and the Roman Jupiter (Diespiter). His epithets all point to weather: 'cloud-gatherer,' 'dark-clouded,' 'hurler of thunderbolts,' 'aegis-bearing.' The aegis itself (aigis in Greek) may derive etymologically from the word for goat (aig-) — connecting Zeus to goat imagery. As an infant on Crete he was suckled by the goat Amalthea; in German folklore, a coming storm was presaged by a snipe called 'Heaven's Goat' whose bleating resembled thunder. Zeus lives on mountains where clouds and storms gather — Mount Ida in the Troad (near Troy), Mount Olympus. In Iliad Book 14 he sleeps with Hera on Mount Ida wrapped in golden cloud.",
      },
      {
        heading: "Supreme Power",
        text: "Zeus is unambiguously the most powerful deity. In Iliad Book 8 he boasts: hang a golden cable from heaven; all the gods and goddesses together could not drag him down, but he alone could hoist them all up and tie the cable to a peak of Olympus. This is not just boasting — the narrative confirms it. In Greek tragedy, Athena, Apollo, Artemis, Aphrodite, Hera, and Dionysus all appear onstage personally. Zeus is always in the background — never shown directly — because he is too powerful, too abstract, too much the principle of cosmic order to be easily dramatized. He presides over fate (sometimes depicted weighing lives on golden scales, as in Iliad 22 when Hector and Achilles fight their final duel).",
      },
      {
        heading: "Zeus and Justice",
        text: "Zeus is deeply connected to justice and order. His second wife Themis (personification of divine law) bears him the Seasons: Eunomia (Law), Dike (Justice), and Eirene (Peace). His daughter Dike personifies justice. He acts as an impartial judge — sometimes forced to give way to fate even when he wishes to save his own son (Sarpedon in Iliad Book 16). After the Greek victory over the Persians at Plataea (479 BCE), a sanctuary was dedicated to Zeus Eleutherios — 'Zeus the Liberator.' Many Greek cities dedicated weapons and statues to Zeus at Olympia after military victories.",
      },
      {
        heading: "Oracle at Dodona",
        text: "Dodona (Epirus, North-Western Greece) was Zeus's oracle and the oldest in the Greek world — older than Apollo's oracle at Delphi. Zeus spoke through the sounds of a sacred oak tree and the flight of doves. It is mentioned in Homer's Iliad as an ancient oracle (Achilles prays to 'Zeus of Dodona'). Dodona was a panhellenic oracle consulted by individuals and city-states. The contrast with Delphi matters: Apollo's Delphi delivered oracular pronouncements through the Pythia's inspired words; Zeus's Dodona spoke through natural sounds — birds, rustling oak leaves.",
      },
      {
        heading: "Zeus's Love Affairs",
        text: "Zeus's sexual exploits are legendary — later sources say he slept with 115 women. Key affairs, each mythologically significant: DANAE: locked in bronze underground chamber by her father Acrisius (oracle said her son would kill him) — Zeus enters as a shower of gold; their son is Perseus. EUROPA: Zeus takes the form of a beautiful bull; Europa climbs on him; he carries her across the sea to Crete; their son Minos becomes king of Crete. IO: priestess of Hera; Zeus falls madly in love; when Hera approaches he turns Io into a white heifer; Hera demands the heifer as a gift and sets the hundred-eyed Argus to watch her; Zeus sends Hermes (Argus-slayer) to kill Argus; Io wanders until she reaches Egypt. GANYMEDE: most beautiful of mortals; Zeus takes the form of an eagle (or sends one) and carries Ganymede to Olympus as cup-bearer of the gods — homosexual affairs were recounted frequently in Greek mythology. SEMELE: mother of Dionysus — tricked by Hera into asking Zeus to reveal his true divine form; consumed by divine fire.",
      },
      {
        heading: "Zeus's Cleverness and Limitations",
        text: "Zeus is not purely dominant by force — he also governs through cleverness, as the course emphasizes. He swallows his first wife Metis (wisdom) after learning a prophecy that her child would surpass him (this leads to Athena's birth from his head). His use of Metis's cunning is ironic and significant: throughout the Theogony, it is mothers who matter — Zeus ultimately incorporates feminine wisdom by swallowing Metis. His position is maintained not just by force but by cleverness and good counsel, portrayed as feminine qualities throughout the myth tradition. He must also sometimes give way to fate — even when he wishes to save Sarpedon (his own son) from death in the Iliad, Hera persuades him he cannot intervene without setting a dangerous precedent.",
      },
    ],
    characters: [
      {
        name: "Zeus/Jupiter",
        role: "Sky god, king of Olympians, thunderbolt-wielder, ultimate authority",
      },
      {
        name: "Hera/Juno",
        role: "Wife; queen; perpetually jealous of his affairs; powerful in own right",
      },
      {
        name: "Metis",
        role: "First wife (wisdom); swallowed by Zeus → Athena born from his head",
      },
      {
        name: "Themis",
        role: "Second wife (divine law); bears Seasons: Eunomia, Dike, Eirene",
      },
      { name: "Danae", role: "Impregnated as shower of gold → Perseus" },
      { name: "Europa", role: "Carried to Crete as bull → Minos" },
      {
        name: "Io",
        role: "Turned to heifer; watched by Argus; Hermes kills Argus; wanders to Egypt",
      },
      {
        name: "Ganymede",
        role: "Cup-bearer of gods; taken as eagle; homosexual affair",
      },
      {
        name: "Hermes",
        role: "Sent to kill Argus (Argus-slayer) in the Io myth",
      },
    ],
    themes: [
      "Supreme power balanced by fate — even Zeus cannot override destiny entirely",
      "Justice as a divine principle — Zeus as cosmic judge",
      "Sexuality and power: divine affairs always produce mythologically significant offspring",
      "Male/female: Zeus incorporates feminine wisdom (Metis) to maintain his rule",
      "Weather and natural phenomena as divine expression",
    ],
    sources: [
      "Homer's Iliad (esp. Books 1, 8, 14, 16, 22)",
      "Hesiod's Theogony",
      "Homeric Hymn to Zeus (Hymn 23)",
      "Pindar's Odes",
      "Ovid's Metamorphoses",
    ],
    quizQuestions: [
      {
        q: "What is Zeus's oracle at Dodona and how did it work?",
        options: [
          "A volcanic fissure where a priestess inhaled vapors",
          "Sacred oak tree and doves — Zeus spoke through natural sounds; oldest oracle in Greece",
          "A bronze cauldron of water reflecting divine images",
          "A sacred cave where the Pythia delivered Apollo's words",
        ],
        answer: 1,
        explanation:
          "Dodona predates Delphi and is entirely different in mechanism. Delphi: Apollo, Pythia, inspired speech. Dodona: Zeus, oak tree, doves, natural sounds. Both were panhellenic but Delphi became more famous.",
      },
      {
        q: "What does Zeus do with his first wife Metis?",
        options: [
          "He divorces her when she proves unfaithful",
          "He swallows her after a prophecy that her child would surpass him — Athena later born from his head",
          "She leaves him voluntarily to live among mortals",
          "She becomes the goddess of wisdom and rules alongside him",
        ],
        answer: 1,
        explanation:
          "Zeus incorporates wisdom (Metis) literally. The Theogony shows Zeus maintaining power not just through force but through cleverness — he absorbs the very quality that might threaten him, and his rule becomes associated with female wisdom and good counsel.",
      },
      {
        q: "In what form does Zeus impregnate Danae?",
        options: [
          "As a bull",
          "As a swan",
          "As a shower of gold",
          "As an eagle",
        ],
        answer: 2,
        explanation:
          "Acrisius locked Danae underground to prevent the prophecy; Zeus circumvented this as a shower of gold. Each of Zeus's transformations is mythologically tailored: gold for a locked-away princess, bull for Europa on the shoreline, swan for Leda.",
      },
      {
        q: "Why is Zeus never depicted onstage in Greek tragedy?",
        options: [
          "It was considered sacrilegious to portray him",
          "He refused to appear to mortals in any recognizable form",
          "As the supreme principle of cosmic order he is always present but never directly dramatized — too powerful and abstract",
          "He only appeared at Olympia in cult statues",
        ],
        answer: 2,
        explanation:
          "This is a telling observation from the course material. Athena, Apollo, Artemis, Aphrodite, Hera, and Dionysus all appear in tragedies. Zeus is always the backdrop — the ultimate authority referenced but never shown. His very absence from the stage reflects his transcendence.",
      },
    ],
  },
  {
    id: "artemis",
    title: "Artemis and Her Myths",
    subtitle: "Virgin huntress, punisher, and protector of women",
    category: "god",
    unit: 2,
    modules: ["3c-artemis"],
    overview:
      "Artemis (Roman: Diana) is Apollo's twin, born on Delos. She is the goddess of the hunt, wilderness, moon, and — paradoxically — childbirth. Her defining characteristic is her virginity, which she defends with lethal force. Her myths centre on punishment of those who transgress it (Actaeon, Callisto, Orion) and on her complex relationship with both chastity and female fertility rites.",
    sections: [
      {
        heading: "Who Artemis Is",
        text: "Artemis is the twin of Apollo, born just before him on Delos (or Ortygia, a nearby island). Like her brother she carries a bow and arrows — but while Apollo's arrows bring plague and healing, Artemis's arrows bring sudden death to women. She is simultaneously antithetical to Aphrodite (the virgin huntress vs. the love goddess) and her equal in power. The Homeric Hymn to Artemis describes her delighting in hunting on shadowy mountains, then laying aside her bow to visit her brother at Delphi.",
      },
      {
        heading: "Actaeon: The Cost of Seeing",
        text: "Actaeon is a great hunter who inadvertently comes upon Artemis and her nymphs bathing in a stream on Mount Cithaeron. He did nothing intentionally wrong. Artemis turns him into a stag on the spot. He wanders the hills, followed by his own hounds — fifty of them, bred by himself — who do not recognise him and tear him apart. The myth is stark: no intention matters when divine privacy is violated. Artemis's virginity functions as an absolute sacred boundary. Ovid in the Metamorphoses makes Actaeon more sympathetic by emphasising that it was Fortune, not wickedness, that led him there.",
      },
      {
        heading: "Callisto: Rape, Punishment, and the Stars",
        text: "Callisto is one of Artemis's sworn companions — a virgin huntress. Zeus disguises himself as Artemis to get close to her and rapes her. Her pregnancy is revealed when the group goes to bathe. In Greek sources, Artemis or Hera turns Callisto into a bear; she is eventually placed in the sky as Ursa Major (with her son Arcas as nearby Boötes or Ursa Minor). In Ovid's Metamorphoses, it is Juno (Hera), not Diana, who transforms Callisto — making Diana seem less cruel and shifting the focus to divine jealousy. Always note which author you use: the moral coloring changes entirely.",
      },
      {
        heading: "Orion and Arethusa",
        text: "Orion is a famous hunter who, in one version, tries to rape Artemis — she summons a scorpion from the earth which stings him to death; both are placed in the sky as constellations (Orion and Scorpius, never visible at the same time). In another version, Apollo tricks Artemis into accidentally shooting Orion while he is swimming far out to sea, thinking it was just a mark on the water. Arethusa is a hunting nymph of Artemis pursued by the river god Alpheus; Artemis saves her by transforming her into an underground spring flowing to Sicily.",
      },
      {
        heading: "Niobe and Artemis as Punisher",
        text: "Niobe of Thebes boasts that her fourteen children surpass Leto's two (Apollo and Artemis). Apollo kills all seven sons; Artemis kills all seven daughters. Artemis here acts alongside Apollo as enforcer of their mother's honour. The myth is a paradigm case of hubris against divine parentage specifically. After all her children die, Niobe's continuous weeping transforms her into a rock on a mountain — still with water flowing from it (a real rock formation in western Anatolia was identified with this myth in antiquity).",
      },
      {
        heading: "Brauron: Artemis and Girls",
        text: "The sanctuary of Artemis at Brauron, 32 km southwest of Athens, was the site of the Arkteia — young girls aged roughly five to ten 'played the bear' before they could marry. They wore saffron robes, processed, sacrificed, and ran foot races. The festival initiated girls into the cult of Artemis, preparing them for their future roles as wives and mothers. After giving birth, Athenian women also made dedications to Artemis at Brauron for the health of their children. This ritual role in female transition makes Artemis's paradox complete: the eternal virgin goddess governs the transition from girlhood to womanhood and protects women in childbirth.",
      },
    ],
    characters: [
      {
        name: "Artemis/Diana",
        role: "Virgin huntress; twin of Apollo; goddess of hunt, moon, childbirth; punisher of violations",
      },
      {
        name: "Actaeon",
        role: "Hunter who accidentally sees Artemis bathing → turned to stag, killed by own hounds",
      },
      {
        name: "Callisto",
        role: "Companion sworn to chastity; raped by Zeus; expelled; turned to bear; placed in sky as Ursa Major",
      },
      {
        name: "Orion",
        role: "Hunter; tries to rape Artemis; killed by scorpion; becomes constellation",
      },
      {
        name: "Niobe",
        role: "Boasts over Leto; all 14 children killed by Apollo and Artemis; becomes weeping rock",
      },
      {
        name: "Arethusa",
        role: "Nymph pursued by river god Alpheus; transformed into spring by Artemis",
      },
      {
        name: "Iphigenia",
        role: "Agamemnon's daughter; Artemis demands her as sacrifice at Aulis; possibly substituted with a deer",
      },
    ],
    themes: [
      "Virginity as absolute sacred boundary — violated even accidentally is punished with death",
      "Paradox: virgin goddess governs childbirth and female transition to marriage",
      "Artemis and Apollo as divine twins — share function as punishers of offenses against their mother",
      "The male gaze as violation — Actaeon, Tiresias (Athena parallel)",
      "Hubris against divine parents — Niobe as paradigm case",
    ],
    sources: [
      "Homeric Hymn to Artemis (Hymns 9 and 27)",
      "Ovid's Metamorphoses Book 2 (Callisto), Book 3 (Actaeon)",
      "Euripides' Hippolytus",
      "Callimachus' Hymn 3 to Artemis",
    ],
    quizQuestions: [
      {
        q: "Why is Artemis paradoxically connected to childbirth despite being a virgin goddess?",
        options: [
          "She is the moon goddess and the moon governs tides and birth",
          "She was born first on Ortygia and immediately assisted at Apollo's birth — so she is associated with assisting in childbirth from the very beginning",
          "Hera appointed her to this role as punishment",
          "She was the patron goddess of midwives in Athens",
        ],
        answer: 1,
        explanation:
          "Artemis's first act after her own birth was to help her mother deliver Apollo. This aetiological connection explains her role as protector in childbirth despite her absolute chastity.",
      },
      {
        q: "In Ovid's version of the Callisto myth, who punishes Callisto by turning her into a bear?",
        options: [
          "Artemis/Diana, furious at the pregnancy",
          "Zeus/Jupiter as a disguise to hide the affair",
          "Juno (Hera), out of jealousy over Jupiter's affair",
          "The Furies, who punish all violations of oaths",
        ],
        answer: 2,
        explanation:
          "This is a key distinction between Greek and Roman sources. In Greek sources it is Artemis who expels/punishes Callisto. In Ovid it is Juno — making Diana seem less cruel and focusing the myth on spousal jealousy rather than violated chastity.",
      },
      {
        q: "What is the Arkteia at Brauron?",
        options: [
          "A hunting competition for young men dedicated to Artemis",
          "A ritual where girls 'played the bear' before marriage — an initiation into womanhood under Artemis's protection",
          "An annual sacrifice of a bear to appease Artemis",
          "A secret mystery cult parallel to the Eleusinian Mysteries",
        ],
        answer: 1,
        explanation:
          "The Arkteia is a coming-of-age ritual for girls (roughly ages 5-10). It reflects Artemis's paradoxical role: the eternal virgin governs the transition from girl to marriageable woman, and protects women in the childbirth that follows.",
      },
    ],
  },
  {
    id: "aphrodite",
    title: "Aphrodite and Her Myths",
    subtitle:
      "Goddess of love, desire, and the irresistible force that moves gods and mortals alike",
    category: "love",
    unit: 2,
    modules: ["4a-aphrodite"],
    overview:
      "Aphrodite (Roman: Venus) is the goddess of erotic love and procreation. She is simultaneously an anthropomorphic goddess and a cosmic natural force — the Homeric Hymn deliberately blurs this distinction. Her key myths include her affair with Anchises (Homeric Hymn), the Judgment of Paris, her role in the Trojan War, Adonis's death and seasonal cycle, and Pygmalion's living statue.",
    sections: [
      {
        heading: "Origins: Two Traditions",
        text: "Hesiod's Theogony gives the more dramatic birth: from sea-foam (aphros) gathering around Uranus's severed genitals thrown into the sea by Cronus. She drifts to Cythera and then to Cyprus — fully grown, radiantly beautiful. She is a primordial force, older than Zeus. Homer's Iliad Book 3 gives a different account: she is simply the daughter of Zeus and Dione — much less spectacular, placing her under Olympian hierarchy. The Homeric Hymn to Aphrodite uses both traditions: Zeus has authority over her (Olympian family) yet her power is cosmic. Her major religious centre was Cyprus; the local legend says she was born at Petra tou Romiou (Rock of Aphrodite) on the island's southern coast.",
      },
      {
        heading: "Near Eastern Connections",
        text: "Aphrodite has significant parallels with the Sumerian/Akkadian goddess Ishtar/Inanna. In the Homeric Hymn, Aphrodite is described arriving covered in jewellery from head to toe — an Eastern style completely at odds with how she appears in Western art (nude). In the Sumerian poem The Descent of Inanna to the Underworld, when Inanna is absent from earth, all animals cease mating — a direct parallel to Aphrodite's power over nature and fertility. These Near Eastern connections help explain why Aphrodite's major cult centre was Cyprus, an island with strong Near Eastern trade connections.",
      },
      {
        heading: "The Homeric Hymn to Aphrodite",
        text: "One of the five long Homeric Hymns. Zeus, tired of Aphrodite making gods and goddesses fall for mortals, decides to turn the tables: he makes Aphrodite fall in love with the mortal shepherd Anchises on Mount Ida. She disguises herself as a mortal Phrygian princess, seduces him — he sleeps with her believing she is mortal. She reveals the truth afterwards and tells him their son will be Aeneas, a hero who will be greatly honoured among men forever (the foundation myth that Virgil picks up in the Aeneid). The poem is striking: the goddess of love is conquered by love herself. The first line of the hymn — 'I will sing of the works of golden Aphrodite' — uses language that deliberately keeps open whether Aphrodite is the deity or the natural force of love.",
      },
      {
        heading: "Aphrodite in the Trojan War",
        text: "Aphrodite's bribe of Helen (the most beautiful woman in the world) to Paris in the Judgment of Paris directly causes the Trojan War — the single most consequential act of divine interference in Greek mythology. In Iliad Book 3, Paris is about to be killed by Menelaus in single combat when Aphrodite snatches him away in a cloud and deposits him in his perfumed bedroom. She then appears to Helen disguised as an old serving woman and tells her to go to Paris. Helen initially resists — she recognises Aphrodite and defies her. Aphrodite threatens her. Helen gives in, going reluctantly. This scene is psychologically complex: is Helen a victim of divine compulsion, or is she complicit? Greek literature consistently refuses to resolve this question.",
      },
      {
        heading: "Adonis",
        text: "Adonis is of Near Eastern origin — his name derives from the Semitic 'Adon' meaning Lord. Aphrodite hides the newborn baby Adonis in a chest (his mother Myrrha had been transformed into a myrrh tree while pregnant after sleeping with her own father Cinyras). She gives the chest to Persephone to guard. Persephone opens it, falls for Adonis's beauty, and refuses to give him back. Zeus (or Calliope) arbitrates: Adonis spends one third of the year with Persephone, one third with Aphrodite, one third as he chooses (he chooses Aphrodite). He is killed by a boar while hunting — in Ovid, scratched by Cupid's arrows, Venus falls so deeply in love she even follows him to the hunt, warning him against dangerous animals; he ignores her. His blood becomes the anemone flower (blood-red, short-lived). Adonis represents the annual vegetation cycle like Persephone.",
      },
      {
        heading: "Pygmalion",
        text: "In Ovid's Metamorphoses, Pygmalion is a sculptor on Cyprus so disgusted by the prostitution of the local women (punished by Aphrodite for denying her divinity) that he refuses to touch women. He carves an ivory statue of the ideal woman and falls in love with it. He prays to Aphrodite at her festival; she animates the statue, who becomes known as Galatea. Their son Paphos gives the sacred city its name. Their granddaughter Myrrha (who will be transformed into the myrrh tree carrying Adonis) links the whole cycle together. George Bernard Shaw named his 1913 play Pygmalion after this myth; it became the musical My Fair Lady.",
      },
    ],
    characters: [
      {
        name: "Aphrodite/Venus",
        role: "Goddess of love and procreation; cosmic force AND anthropomorphic deity",
      },
      {
        name: "Anchises",
        role: "Mortal shepherd seduced by Aphrodite; father of Aeneas",
      },
      {
        name: "Aeneas",
        role: "Son of Aphrodite and Anchises; Trojan hero; founder of Roman people in Virgil",
      },
      {
        name: "Paris",
        role: "Chose Aphrodite in Judgment; awarded Helen; triggered Trojan War",
      },
      {
        name: "Helen",
        role: "Most beautiful mortal; pawn of Aphrodite; complex victim/agent in the Iliad",
      },
      {
        name: "Adonis",
        role: "Beautiful mortal; shared between Aphrodite and Persephone; vegetation cycle",
      },
      {
        name: "Pygmalion",
        role: "Sculptor who falls for his own creation; Aphrodite brings it to life",
      },
      { name: "Hephaestus", role: "Husband; traps Aphrodite and Ares in net" },
      {
        name: "Ares/Mars",
        role: "Lover; trapped with Aphrodite by Hephaestus; love conquers war",
      },
    ],
    themes: [
      "Love as cosmic force AND divine person — the Hymn deliberately blurs the line",
      "The conquered conqueror: Aphrodite herself falls in love (Anchises, Adonis)",
      "Near Eastern origins of Greek love mythology",
      "Helen's moral ambiguity — divine compulsion vs. human desire",
      "Seasonal/fertility cycle through Adonis — parallel to Persephone",
      "Art and love: Pygmalion; the power of Aphrodite to cross the boundary between art and life",
    ],
    sources: [
      "Homeric Hymn to Aphrodite (Hymn 5, ~7th c. BCE)",
      "Homer's Iliad Books 3 and 5",
      "Ovid's Metamorphoses Books 10 (Pygmalion, Adonis, Myrrha)",
      "Hesiod's Theogony (lines 188-206)",
    ],
    quizQuestions: [
      {
        q: "What is the central irony of the Homeric Hymn to Aphrodite?",
        options: [
          "Aphrodite defeats Hera and Athena in a beauty contest",
          "Zeus makes Aphrodite herself fall in love with a mortal — the goddess of love is conquered by love",
          "Aphrodite gives birth to a mortal child who becomes greater than any god",
          "Anchises reveals Aphrodite's identity before she can tell him herself",
        ],
        answer: 1,
        explanation:
          "The Hymn's opening claims Aphrodite's works move all gods and mortals — then shows her subject to the very force she embodies. Zeus exploits this to end her boasting. The poem is a meditation on the power and limits of erotic love.",
      },
      {
        q: "How does Adonis's myth parallel Persephone's?",
        options: [
          "Both are abducted by Hades and must remain underground forever",
          "Both are beautiful figures shared between two divine claimants (Aphrodite/Persephone), spending part of the year with each — representing the seasonal fertility cycle",
          "Both are transformed into flowers as punishment for hubris",
          "Both are ultimately rescued by Zeus after their mortal parents beg him",
        ],
        answer: 1,
        explanation:
          "Adonis and Persephone both represent the vegetation year through their movement between earth and underworld. Both myths explain why nature alternates between abundance and death. Both involve competing divine claims over a figure of beauty.",
      },
      {
        q: "In the Iliad, how does Aphrodite intervene in the duel between Paris and Menelaus?",
        options: [
          "She gives Paris a magic shield that deflects Menelaus's spear",
          "She snatches Paris away in a cloud when he is about to be killed and deposits him in his bedroom; she then compels Helen to go to him",
          "She blinds Menelaus temporarily so Paris can escape",
          "She appears in person and stops the duel by declaring it a draw",
        ],
        answer: 1,
        explanation:
          "This scene is crucial for Helen's characterisation. Aphrodite appears to Helen disguised as a servant. Helen recognises the goddess and defies her. Aphrodite threatens her. Helen goes to Paris reluctantly. Homer refuses to let Helen be simply a passive victim OR a guilty schemer — Aphrodite's compulsion is real but Helen's desire is also present.",
      },
    ],
  },
  {
    id: "jason-medea",
    title: "Jason, the Argonauts, and Medea",
    subtitle: "The quest for the Golden Fleece — and its devastating aftermath",
    category: "hero",
    unit: 3,
    modules: ["jason-argonauts"],
    overview:
      "Jason is sent by his usurping uncle Pelias to fetch the Golden Fleece from Colchis at the edge of the world — a quest intended to kill him. He assembles the greatest heroes of his generation (the Argonauts) and succeeds — but only because of the sorceress princess Medea, who falls in love with him and sacrifices everything. When Jason abandons her for a politically convenient marriage, Medea's revenge is catastrophic. Euripides' Medea (431 BCE) is one of the most psychologically complex plays in Western literature.",
    sections: [
      {
        heading: "The Setup: Pelias and the Quest",
        text: "Jason is the rightful heir of Iolcus; his uncle Pelias seized the throne and, warned by an oracle to beware a man with one sandal, sends Jason on what he expects is a fatal quest: retrieve the Golden Fleece from Colchis (modern Georgia), at the far end of the Black Sea. The fleece originally belonged to the golden ram that saved Phrixus; it hangs in a sacred grove guarded by a dragon that never sleeps.",
      },
      {
        heading: "The Argonauts",
        text: "Jason assembles the greatest heroes of the pre-Trojan generation. The crew includes Heracles and his companion Hylas; Orpheus, whose music will later drown out the Sirens; Castor and Pollux (the Dioscuri, twin sons of Zeus); Peleus (who will father Achilles); Atalanta (the huntress); Meleager; Tiphys (the helmsman); Argus (who built the ship). The Argo itself contains a speaking plank from Zeus's oak at Dodona.",
      },
      {
        heading: "Hazards of the Journey",
        text: "The Argonauts face multiple dangers. The Harpies torment the blind prophet Phineus; in exchange for freeing him, he tells them how to pass the Symplegades — the Clashing Rocks at the entrance to the Black Sea. They release a dove first; the rocks close and catch only its tail feathers; the Argo rows through as they open again, barely escaping. Orpheus's lyre drowns out the Sirens, whose song lures sailors to death. Heracles loses his companion Hylas to a water nymph and is left behind searching for him — his absence changes the balance of the crew.",
      },
      {
        heading: "Medea and the Tasks at Colchis",
        text: "At Colchis, King Aeetes has no intention of giving up the fleece. He sets Jason three impossible tasks: yoke fire-breathing bulls with bronze hooves, plough a field with them, sow it with dragon's teeth (producing armed Spartoi who must be defeated), and then overcome the sleepless dragon. None of this is possible without supernatural help. Aphrodite and Eros make Aeetes's daughter Medea — sorceress, granddaughter of Helios, niece of Circe — fall in love with Jason. She provides: fire-resistant ointment for the bulls, the trick of throwing a stone among the Spartoi so they fight each other, and finally a drug to put the dragon to sleep. Jason succeeds at every task by using Medea's knowledge.",
      },
      {
        heading: "The Escape and Its Price",
        text: "Medea betrays her father, her country, and her people entirely for Jason. As they flee, her brother Absyrtus pursues them. Medea kills Absyrtus and scatters his body parts into the sea — forcing their father to stop and collect them for burial, buying the Argo time to escape. The price of the Golden Fleece is her complete self-destruction as a daughter and a Colchian. They stop at Circe's island to be purified of Absyrtus's murder. After further adventures — through Sirens, Scylla, Charybdis — they reach Iolcus.",
      },
      {
        heading: "After the Quest: Pelias and Corinth",
        text: "Medea also helps deal with Pelias: she tricks his daughters into killing him, claiming she can rejuvenate him as she had rejuvenated a ram. She makes the trick convincing, then doesn't restore Pelias. This politically necessary murder forces them to leave Iolcus. They settle in Corinth, where Jason arranges to marry Glauce (also called Creusa), the daughter of the Corinthian king Creon. He is trading Medea for political security — a barbarian sorceress for a legitimate Greek princess.",
      },
      {
        heading: "Medea's Revenge (Euripides, 431 BCE)",
        text: "Euripides' Medea opens with Medea in Corinth, learning of Jason's betrayal. She delivers a devastating critique of women's position in Greek society — married off to strangers, with no recourse if the marriage fails. Creon banishes her; she negotiates one day's grace. In that time she sends Glauce a gift: a poisoned robe and crown. Glauce puts them on and dies in agony; Creon dies trying to pull the robe from her. Medea then kills her own two children by Jason — not in madness but in cold, agonizing deliberation. She escapes on a chariot of the sun. This filicide was Euripides' innovation: earlier versions had the Corinthians kill the children.",
      },
    ],
    characters: [
      {
        name: "Jason",
        role: "Leader of the Argonauts; dependent on Medea for every success; ultimately faithless",
      },
      {
        name: "Medea",
        role: "Sorceress princess; enables the quest; the real protagonist; Euripides' greatest female character",
      },
      {
        name: "Pelias",
        role: "Usurping uncle; sends Jason on fatal quest; killed by Medea's trick",
      },
      {
        name: "Aeetes",
        role: "King of Colchis; sets the impossible tasks; Medea's father",
      },
      { name: "Orpheus", role: "Argonaut; his lyre drowns out the Sirens" },
      {
        name: "Heracles",
        role: "Greatest Argonaut; leaves the expedition searching for Hylas",
      },
      {
        name: "Absyrtus",
        role: "Medea's brother; she kills and scatters him to delay pursuit",
      },
      {
        name: "Glauce/Creusa",
        role: "Corinthian princess Jason marries; killed by Medea's poisoned robe",
      },
    ],
    themes: [
      "The 'helper maiden' who enables the hero — and is then discarded",
      "Heroism without heroic qualities: Jason succeeds only through Medea",
      "Medea as the first great female psychological study in Western literature",
      "The cost of being foreign (xenos): Medea has no protection in a Greek city",
      "Maternal love vs. revenge — Euripides refuses to simplify either impulse",
    ],
    sources: [
      "Apollonius of Rhodes' Argonautica (3rd c. BCE)",
      "Euripides' Medea (431 BCE)",
      "Pindar's Pythian Ode 4",
      "Ovid's Metamorphoses Books 7-8",
    ],
    quizQuestions: [
      {
        q: "Why does Medea help Jason at Colchis?",
        options: [
          "She is bound to help any hero who comes to Colchis by ancient law",
          "Aphrodite and Eros make her fall in love with Jason — she betrays her family and country for him",
          "She wants to escape her father's kingdom and needs a Greek ship",
          "She is bribed by the Argonauts with gold",
        ],
        answer: 1,
        explanation:
          "Medea's love is divinely induced — but Euripides later shows it as genuine and devastating. She gives up everything: family, homeland, brother's life. Jason's later betrayal is the more reprehensible because of what she sacrificed.",
      },
      {
        q: "What is Euripides' innovation in Medea?",
        options: [
          "He made Medea a sympathetic character for the first time",
          "He had Medea deliberately kill her own children — in earlier versions the Corinthians killed them",
          "He set the myth in Athens rather than Corinth",
          "He made Jason the hero and Medea the villain",
        ],
        answer: 1,
        explanation:
          "The filicide is Euripides' creation and what makes the play so shocking. Earlier versions excused Medea or had external agents kill the children. Euripides makes the act a fully deliberate, agonizing choice — the most disturbing act a mother can commit, shown from inside Medea's perspective.",
      },
      {
        q: "Jason's quest is problematic as a hero myth because:",
        options: [
          "He fails to retrieve the Golden Fleece",
          "Every critical task is accomplished by Medea's magic and knowledge, not his own abilities",
          "He is not of noble birth",
          "The Argonauts mutiny against him halfway through the journey",
        ],
        answer: 1,
        explanation:
          "Jason is the anti-Heracles: he completes the quest but essentially as Medea's instrument. This is why some scholars read the Argonautica as a subtle critique of the heroic model — or as a reflection that the era of purely physical heroism is over.",
      },
    ],
  },
];

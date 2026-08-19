export const services = [
  {
    slug: 'klassisk-massage',
    title: 'Klassisk massage',
    summary: 'Avkopplande massagebehandlingar för helkropp, nacke, rygg och ansikte.',
    items: [
      'Massage helkropp 50 min – 1 000 kr',
      'Massage helkropp 75 min – 1 525 kr',
      'Huvud- och nackmassage 45 min – 945 kr',
      'Massage halvkropp 35 min – 825 kr',
      'Massage nacke-och rygg 20 min – 695 kr',
      'Ansiktsmassage inkl. rengöring 25 min – 795 kr',
      'Parmassage helkropp 50 min för 2 (samma rum) – 2 000 kr',
      'Parmassage halvkropp 35 min för 2 – 1 650 kr',
      'Parmassage helkropp 75 min för 2 – 3 050 kr',
      'Helkroppsmassage 50 min för 2 (olika rum) – 2 000 kr',
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85',
    facts: {
      behandlingstid: '20–75 minuter beroende på behandling',
      paKliniken: 'Räkna med samma tid som behandlingen tar',
      tillbakaTillVardagen: 'Direkt',
      antalBehandlingar: 'Boka enstaka pass eller klippkort för regelbunden återhämtning',
      risker: 'Mycket låg risk, viss ömhet vid djupare tryck kan förekomma',
      efterbehandling: 'Drick gärna extra vatten efter behandlingen',
      undvik: 'Tung fysisk ansträngning direkt efter en djupgående massage',
      pris: 'Från 695 kr till 3 050 kr beroende på behandling',
      betalning: 'Kort eller Swish på plats',
    },
    faq: [
      {
        question: 'Vilken massage passar mig bäst?',
        answer:
          'Det beror på vad du vill uppnå. Vill du fokusera på hela kroppen rekommenderar vi 50 eller 75 minuter, medan nacke-och rygg 20 min passar för en snabb återhämtning under en hektisk vecka.',
      },
      {
        question: 'Kan vi boka massage tillsammans?',
        answer:
          'Ja, våra parmassage-behandlingar utförs sida vid sida i samma rum med varsin terapeut. Hittar du ingen tid i samma rum går det även bra att boka i olika rum.',
      },
      {
        question: 'Behöver jag boka i förväg?',
        answer:
          'Vi rekommenderar att boka i förväg, särskilt inför helger, men hör gärna av dig om du söker en tid med kort varsel.',
      },
    ],
  },
  {
    slug: 'lyxbehandling-1-2',
    title: 'Lyxbehandling för 1/2',
    summary: 'Lyxiga kombinationsbehandlingar för en längre stund av återhämtning.',
    items: [
      'Luxury treatment 50 min för 1 – 1 150 kr',
      'Luxury treatment 50 min för 2 – 1 395 kr',
      'Luxury treatment delux 75 min för 2 – 1 795 kr',
      'Body & face 75 min – 1 545 kr',
      'Face & Body combo 50 min – 1 045 kr',
      'Dream feet 40 min för 2 – 1 025 kr',
      'Body & Feet delux för 2, 80 min – 2 750 kr',
      'Fotmassage med magnesiumsalt & jordgubbsinpackning för 2, 40 min – 1 195 kr',
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1800&q=85',
    facts: {
      behandlingstid: '40–80 minuter beroende på paket',
      paKliniken: 'Räkna med samma tid som behandlingen tar, gärna lite extra för att varva ner',
      tillbakaTillVardagen: 'Direkt',
      antalBehandlingar: 'Passar både som en engångsupplevelse och en återkommande tradition',
      risker: 'Mycket låg risk',
      efterbehandling: 'Ingen särskild efterbehandling krävs',
      undvik: 'Inget särskilt att undvika efteråt',
      pris: 'Från 1 025 kr till 2 750 kr beroende på paket',
      betalning: 'Kort eller Swish på plats',
    },
    faq: [
      {
        question: 'Vad ingår i en Luxury treatment?',
        answer:
          'Ett varmt fotbad med eteriska oljor, rygg- och nackmassage, fotinpackning samt ansiktsrengöring och ansiktsmassage. Delux-varianten innehåller även fotskrubb och ansiktsmask.',
      },
      {
        question: 'Kan vi boka en behandling tillsammans i samma rum?',
        answer:
          'Ja, våra lyxbehandlingar för 2 utförs sida vid sida av samma terapeut, perfekt för ett par eller väninnor som vill koppla av tillsammans.',
      },
      {
        question: 'Går det att kombinera med bubbelpool eller bastu?',
        answer:
          'Absolut, många kombinerar en lyxbehandling med en timme i vår privata spaavdelning med bubbelpool eller IR-bastu för en komplett spadag.',
      },
    ],
  },
  {
    slug: 'spa-och-ir-bastu',
    title: 'Spaavdelning med bubbelpool & privat IR-bastu',
    summary: 'Privat avkoppling med bubbelpool och IR-bastu för sällskap från 1 till 6 personer.',
    items: [
      'Spaavdelning med bubbelpool (1–6 pers) – 900–3 300 kr beroende på gruppstorlek och tid',
      'Privat IR-bastu – 295–1 350 kr (30–75 min, 1–4 pers)',
    ],
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1800&q=85',
    facts: {
      behandlingstid: '30–120 minuter beroende på avdelning och gruppstorlek',
      paKliniken: 'Hela avdelningen är privat under er bokade tid',
      tillbakaTillVardagen: 'Direkt',
      antalBehandlingar: 'Boka för en enstaka tillfälle eller fira ett speciellt tillfälle',
      risker: 'Mycket låg risk, gravida och personer med hjärt-kärlbesvär bör rådgöra med läkare innan IR-bastu',
      efterbehandling: 'Drick gärna extra vatten efter bubbelpool eller bastu',
      undvik: 'Alkohol i samband med IR-bastu',
      pris: 'Från 295 kr till 3 300 kr beroende på avdelning, tid och antal personer',
      betalning: 'Kort eller Swish på plats',
    },
    faq: [
      {
        question: 'Hur många kan boka en avdelning samtidigt?',
        answer:
          'Bubbelpoolen bokas för 1–6 personer och IR-bastun för 1–4 personer. Är ni fler, upp till 25 personer, kan ni boka hela relaxavdelningen.',
      },
      {
        question: 'Får vi ta med egen dryck?',
        answer:
          'Ja, ni får gärna ta med egen dryck att skåla i, till exempel vid en födelsedag, förlovning eller bröllopsdag. Vi bjuder på färsk frukt.',
      },
      {
        question: 'Hur bokar vi för en större grupp?',
        answer:
          'Grupper över 6 personer bokas enklast genom att maila oss direkt, så hjälper vi er att sätta ihop rätt paket.',
      },
    ],
  },
  {
    slug: 'fotbehandling-pedikyr',
    title: 'Fotbehandling/Pedikyr',
    summary: 'Vårdande fotbehandlingar, pedikyr och avslappnande fotmassage.',
    items: [
      'Dream feet 30 min – 595 kr',
      'Pedikyr 60 min – 900 kr / 90 min – 1 100 kr',
      'Fotmassage med magnesiumsalt & jordgubbsinpackning 30 min – 595 kr',
      'Fotmassage 20 min – 495 kr',
    ],
    image: 'https://images.unsplash.com/photo-1519014816548-bf5c0c0c8f2e?auto=format&fit=crop&w=1800&q=85',
    facts: {
      behandlingstid: '20–90 minuter beroende på behandling',
      paKliniken: 'Räkna med samma tid som behandlingen tar',
      tillbakaTillVardagen: 'Direkt',
      antalBehandlingar: 'Fungerar både som enstaka behandling och regelbunden fotvård',
      risker: 'Mycket låg risk',
      efterbehandling: 'Undvik trånga skor direkt efter behandlingen',
      undvik: 'Inget särskilt att undvika efteråt',
      pris: 'Från 495 kr till 1 100 kr beroende på behandling',
      betalning: 'Kort eller Swish på plats',
    },
    faq: [
      {
        question: 'Vad ingår i en pedikyr?',
        answer:
          'Ett varmt fotbad, skrubb, filning av förhårdnader, klippning av naglar och nagelband samt en avslutande fot- och underbensmassage.',
      },
      {
        question: 'Får jag lack på naglarna vid pedikyr?',
        answer:
          'Lackning ingår i 90-minutersbehandlingen, men vi har begränsat urval av färger så ta gärna med eget lack om du vill ha en specifik nyans.',
      },
      {
        question: 'Vad är skillnaden på Dream feet och vanlig fotmassage?',
        answer:
          'Dream feet är en längre, mer lyxig upplevelse med fotbad, skrubb och varma handdukar, medan fotmassage 20 min är en kortare, ren avkoppling för fötterna.',
      },
    ],
  },
  {
    slug: 'hudvard-ansikte',
    title: 'Hudvård/Ansikte',
    summary: 'Ansiktsbehandlingar och hudvård som ger huden ny lyster och balans.',
    items: [
      'C-Vitamin ansiktsbehandling 25 min – 595 kr / 50 min – 1 000 kr',
      'Ansiktsbehandling Delux 75 min – pris på förfrågan',
      'Ansiktsbehandling – Relaxed face 30 min – 595 kr',
      'Dermapen 50 min – 1 500 kr',
    ],
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1800&q=85',
    facts: {
      behandlingstid: '25–75 minuter beroende på behandling',
      paKliniken: 'Räkna med samma tid som behandlingen tar',
      tillbakaTillVardagen: 'Direkt, viss rodnad kan förekomma efter Dermapen',
      antalBehandlingar: 'Dermapen ger bäst resultat vid en serie om flera behandlingar',
      risker: 'Tillfällig rodnad, undvik smink och svettningar de första dagarna efter Dermapen',
      efterbehandling: 'Undvik att röra vid ansiktet i onödan efter behandlingen',
      undvik: 'Sol och solarium de första dagarna efter behandlingen',
      pris: 'Från 595 kr till 1 500 kr beroende på behandling',
      betalning: 'Kort eller Swish på plats',
    },
    faq: [
      {
        question: 'Vad gör Dermapen för huden?',
        answer:
          'Dermapen är effektivt mot slapp och åldrad hud, rynkor, acneärr och stora porer genom att stimulera hudens egen förnyelse.',
      },
      {
        question: 'Vad ingår i en C-Vitamin ansiktsbehandling?',
        answer:
          'Konsultation, rengöring, hudanalys, peeling, mask och avslutande produkter med C-vitamin som återfuktar och ger huden glow.',
      },
      {
        question: 'Behöver jag förbereda huden innan behandlingen?',
        answer:
          'Nej, kom precis som du är. Vi gör alltid en hudanalys inför behandlingen och anpassar den efter din hudtyp.',
      },
    ],
  },
  {
    slug: 'ovrigt',
    title: 'Övrigt',
    summary: 'Kompletterande behandlingar och privata relaxalternativ för dina behov.',
    items: [
      'Gravidmassage 50 min – 1 000 kr',
      'Lymfmassage 90 min – 1 500 kr',
      'Färgning fransar och bryn inkl. plock – 595 kr',
      'Privat relaxavdelning med bubbelpool & IR-bastu (grupp upp till 25) – från 650 kr/person',
    ],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=85',
    facts: {
      behandlingstid: '25–120 minuter beroende på behandling',
      paKliniken: 'Räkna med samma tid som behandlingen tar',
      tillbakaTillVardagen: 'Direkt',
      antalBehandlingar: 'Enstaka behandling eller efter behov',
      risker: 'Mycket låg risk, meddela alltid vecka vid bokning av gravidmassage',
      efterbehandling: 'Drick gärna extra vatten efter lymfmassage',
      undvik: 'Inget särskilt att undvika efteråt',
      pris: 'Från 595 kr, gruppbokning från 650 kr per person',
      betalning: 'Kort eller Swish på plats, gruppbokning via mail',
    },
    faq: [
      {
        question: 'Är gravidmassage säkert under hela graviditeten?',
        answer:
          'Ja, men meddela alltid vilken vecka du är i när du bokar. Är du långt gången ligger du i en särskild gravidkudde eller på sidan för din komfort.',
      },
      {
        question: 'Vad är skillnaden på lymfmassage och vanlig massage?',
        answer:
          'Lymfmassage består av lätta strykningar och tryck i lymfflödets riktning för att stimulera systemet, snarare än djupgående tryck som vid klassisk massage.',
      },
      {
        question: 'Hur bokar vi en privat relaxavdelning för en grupp?',
        answer:
          'Maila oss på boka@luxuryspasthlm.se så hjälper vi er att boka hela avdelningen med bubbelpool, IR-bastu och lounge för upp till 25 personer.',
      },
    ],
  },
] as const;

export const serviceLinks = services.map(({ title, summary }) => [title, summary]);
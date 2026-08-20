export type GuideSection = {
  heading: string;
  body: string[]; // paragraphs
};

export type Guide = {
  slug: string;
  cluster: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  intro: string[];
  sections: GuideSection[];
  faq?: { q: string; a: string }[];
};

export const guides: Guide[] = [
  {
    slug: 'hormonal-acne-causes-treatment',
    cluster: 'Acne & congestion',
    title: 'Vad orsakar hormonell akne — och hur behandlar du den?',
    date: '2025-06-10',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    excerpt:
      'Hormonell akne skiljer sig från vanlig ungdomsakne både i mönster och orsak. Här går vi igenom varför den uppstår och vilka behandlingar som faktiskt fungerar.',
    readTime: '7 min läsning',
    intro: [
      'Om du fortsätter få finnar längs käklinjen och hakan långt efter tonåren är du inte ensam. Hormonell akne drabbar en stor andel vuxna, och särskilt kvinnor, ofta i cykler som följer menstruationen.',
      'Till skillnad från ungdomsakne, som gärna sprider sig över hela ansiktet, tenderar hormonell akne att koncentreras till nedre delen av ansiktet: käke, haka och hals.',
    ],
    sections: [
      {
        heading: 'Varför uppstår hormonell akne?',
        body: [
          'Androgener, en grupp hormoner som bland annat testosteron tillhör, stimulerar talgkörtlarna att producera mer talg. När talgproduktionen ökar täpper den lättare till porerna tillsammans med döda hudceller, vilket skapar en grogrund för den bakterie som kallas C. acnes.',
          'Hos många kvinnor svänger androgennivåerna under menstruationscykeln, vilket förklarar varför utbrott ofta dyker upp strax innan mens. Andra vanliga utlösare är att sätta in eller sluta med p-piller, graviditet, PCOS (polycystiskt ovariesyndrom) och perimenopaus.',
          'Stress spelar också in indirekt — kortisol kan påverka talgproduktionen och förvärra inflammation, vilket gör att en redan känslig hud reagerar starkare.',
        ],
      },
      {
        heading: 'Så känner du igen mönstret',
        body: [
          'Hormonell akne visar sig oftast som djupa, ömma cystor snarare än ytliga pormaskar. Den sitter typiskt längs käklinjen, på hakan och ibland nedåt halsen, och tenderar att komma tillbaka på ungefär samma ställe varje månad.',
          'Om du kan koppla utbrotten till din cykel, till ett hormonellt preventivmedel eller till en livsfas som graviditet är det en stark signal om att hormoner ligger bakom.',
        ],
      },
      {
        heading: 'Behandlingar som fungerar',
        body: [
          'Receptfria produkter med azelainsyra, niacinamid eller lågdoserad salicylsyra kan lugna inflammation och minska pormaskbildning utan att vara lika uttorkande som starkare aknemedel.',
          'Kliniska behandlingar riktade mot inflammation och bakterieflora — till exempel kemisk peeling med syror, LED-ljusterapi eller riktad laserbehandling — kan komplettera hemmarutinen och påskynda läkning utan att riva upp huden mekaniskt.',
          'I mer uttalade fall är det värt att prata med läkare om receptbelagda alternativ, exempelvis hormonella preventivmedel eller antiandrogena läkemedel, som angriper själva orsaken snarare än symptomen.',
        ],
      },
      {
        heading: 'Vanliga misstag att undvika',
        body: [
          'Att skrubba huden hårdare gör oftast saken värre — mekanisk irritation triggar mer inflammation. Undvik även att klämma på cystor, eftersom det ökar risken för ärrbildning.',
          'Ge en ny rutin minst 8–12 veckor innan du bedömer om den fungerar. Hudceller förnyas långsamt, och hormonell akne svarar sällan på behandling inom bara några dagar.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kan kost påverka hormonell akne?',
        a: 'Vissa studier pekar på ett samband mellan mejeriprodukter, högglykemisk kost och ökad akneaktivitet, men effekten varierar mycket mellan individer.',
      },
      {
        q: 'Hur länge tar det innan man ser resultat?',
        a: 'Räkna med minst två till tre menstruationscykler innan en ny rutin eller behandling ger tydlig effekt, eftersom hormonella mönster behöver tid att stabiliseras.',
      },
    ],
  },
  {
    slug: 'melasma-vs-sun-spots',
    cluster: 'Pigmentation',
    title: 'Melasma vs solfläckar: så skiljer du dem åt',
    date: '2025-05-28',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&h=800&fit=crop',
    excerpt:
      'Båda visar sig som mörka fläckar i huden, men orsak, mönster och rätt behandling skiljer sig avsevärt. Att blanda ihop dem kan göra pigmenteringen värre.',
    readTime: '6 min läsning',
    intro: [
      'Pigmentfläckar är ett av de vanligaste skälen till att söka hudvårdsrådgivning, men alla mörka fläckar är inte samma tillstånd. Melasma och solfläckar (soltorkade fläckar/lentigo) ser ibland lika ut för blotta ögat men kräver helt olika angreppssätt.',
    ],
    sections: [
      {
        heading: 'Vad är melasma?',
        body: [
          'Melasma är ett hormonellt kopplat pigmentproblem som visar sig som symmetriska, ofta suddiga fläckar över kinder, panna, näsa och överläpp. Det utlöses av en kombination av solexponering, hormonella förändringar (graviditet, p-piller) och genetisk benägenhet.',
          'Det som gör melasma särskilt knepigt är att det kan förvärras av just de behandlingar som normalt hjälper mot andra pigmentfläckar, eftersom aggressiv värme eller irritation kan trigga mer melaninproduktion.',
        ],
      },
      {
        heading: 'Vad är solfläckar?',
        body: [
          'Solfläckar, eller lentigo solaris, är resultatet av ackumulerad UV-skada över tid. De är oftast väl avgränsade, bruna och dyker upp på områden som fått mest sol genom åren — händer, decolletage, axlar och ansikte.',
          'Till skillnad från melasma är solfläckar inte hormonellt drivna och tenderar att svara mer förutsägbart på pigmentriktade behandlingar.',
        ],
      },
      {
        heading: 'Så skiljer du dem åt',
        body: [
          'Titta på mönstret: melasma är oftast symmetriskt och diffust, medan solfläckar är mer punktvisa och skarpt avgränsade. Melasma flammar ofta upp vid hormonella förändringar eller värme, medan solfläckar är mer stabila över tid.',
          'Vid osäkerhet är en professionell bedömning värt besväret — fel behandling på melasma kan förvärra tillståndet avsevärt.',
        ],
      },
      {
        heading: 'Behandlingsstrategier',
        body: [
          'För solfläckar fungerar riktade laserbehandlingar och kemisk peeling ofta väl, eftersom målet är att bryta ner befintligt pigment.',
          'För melasma är försiktighet nyckelordet: milda syror, azelainsyra, tranexamsyra och strikt solskydd (SPF 50, upprepad applicering) är grunden. Aggressiva laserbehandlingar undviks ofta helt eller görs med mycket låg intensitet under noggrann övervakning, eftersom värme kan förvärra tillståndet.',
          'Oavsett fläcktyp är daglig, konsekvent solskyddsfaktor den enskilt viktigaste faktorn för att förhindra att fläckarna kommer tillbaka.',
        ],
      },
    ],
    faq: [
      {
        q: 'Försvinner melasma av sig själv?',
        a: 'Ibland tonas melasma ner efter graviditet eller vid utsättning av hormonella preventivmedel, men det försvinner sällan helt utan aktiv hantering och strikt solskydd.',
      },
    ],
  },
  {
    slug: 'hydrafacial-explained',
    cluster: 'Facials & skin renewal',
    title: 'Hydrafacial förklarat: vad det gör och för vem',
    date: '2025-05-14',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
    excerpt:
      'En av de mest populära ansiktsbehandlingarna just nu — men vad gör den egentligen, och skiljer den sig från en klassisk djuprengöring?',
    readTime: '5 min läsning',
    intro: [
      'Hydrafacial har blivit något av en modern klassiker bland ansiktsbehandlingar, tack vare att den kombinerar rengöring, exfoliering och återfuktning i ett och samma steg — utan nedtid.',
    ],
    sections: [
      {
        heading: 'Hur fungerar behandlingen?',
        body: [
          'Behandlingen bygger på ett patenterat vortex-system som samtidigt löser upp och suger bort smuts, talg och döda hudceller medan huden tillförs fuktighetsserum. Processen sker i flera steg: rengöring och peeling, en mild syrelösning som löser upp proppar i porerna, extraktion med vakuumsug, och avslutningsvis serum anpassat efter hudens behov (återfuktning, lyster eller lugnande verkan).',
          'Hela behandlingen tar vanligtvis 30–45 minuter och kräver ingen bedövning, eftersom den inte penetrerar huden på samma sätt som nålbaserade behandlingar.',
        ],
      },
      {
        heading: 'Vad skiljer den från en klassisk ansiktsbehandling?',
        body: [
          'En traditionell djuprengöring innefattar ofta manuell extraktion av pormaskar, vilket kan vara obehagligt och riskerar att irritera huden. Hydrafacials vakuumbaserade extraktion är betydligt skonsammare och jämnare, vilket gör att röda märken och svullnad minimeras.',
          'Till skillnad från kemiska peelingar med längre nedtid ger Hydrafacial synlig lyster direkt efter behandling, vilket gör den populär inför event eller som ett återkommande underhåll.',
        ],
      },
      {
        heading: 'Vem passar behandlingen för?',
        body: [
          'Eftersom intensiteten och serumen kan anpassas fungerar Hydrafacial för de flesta hudtyper, inklusive känslig hud, förutsatt att man kommunicerar eventuell känslighet eller pågående hudproblem till behandlaren innan start.',
          'Den passar särskilt bra för dig som vill ha synligt resultat utan nedtid, som kämpar med matt hy, ojämn textur eller lätt igentäppta porer, eller som vill komplettera mer intensiva behandlingar som laser med regelbundet underhåll.',
        ],
      },
      {
        heading: 'Hur ofta bör man göra Hydrafacial?',
        body: [
          'För underhåll rekommenderas ofta en behandling var fjärde till sjätte vecka, vilket följer hudens naturliga förnyelsecykel. Vid specifika mål, som att förbereda huden inför ett tillfälle, kan en enstaka behandling göra tydlig skillnad redan samma dag.',
        ],
      },
    ],
    faq: [
      {
        q: 'Gör Hydrafacial ont?',
        a: 'Nej, de flesta upplever behandlingen som avslappnande snarare än obehaglig, eftersom den inte innefattar nålar eller aggressiv manuell extraktion.',
      },
      {
        q: 'Finns det någon nedtid?',
        a: 'I princip ingen. Huden kan vara lätt rodnad direkt efteråt, men de flesta kan gå tillbaka till vardagen, inklusive smink, samma dag.',
      },
    ],
  },
  {
    slug: 'repair-skin-barrier',
    cluster: 'Sensitive skin & skin barrier',
    title: 'Så reparerar du en skadad hudbarriär, steg för steg',
    date: '2025-04-30',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop',
    excerpt:
      'Stramhet, rodnad, sting och plötslig känslighet mot produkter du tidigare tålt bra är klassiska tecken på en försvagad hudbarriär. Så bygger du upp den igen.',
    readTime: '8 min läsning',
    intro: [
      'Hudbarriären, det yttersta lagret av huden, fungerar som en mur mellan din kropp och omvärlden. När den skadas läcker fukt ut och irritanter tar sig lättare in, vilket skapar en ond cirkel av känslighet och inflammation.',
    ],
    sections: [
      {
        heading: 'Vad orsakar en skadad barriär?',
        body: [
          'Överexfoliering är en av de vanligaste bovarna — för många aktiva syror, retinol eller fysiska skrubb i tät följd bryter ner barriären snabbare än den hinner återuppbygga sig.',
          'Andra vanliga orsaker är hårt vatten, aggressiva rengöringsmedel som strippar hudens naturliga oljor, extrem väderexponering, samt att kombinera för många starka aktiva ingredienser samtidigt utan upptrappning.',
        ],
      },
      {
        heading: 'Tecken att se upp för',
        body: [
          'Ihållande stramhet även efter fuktkräm, sting eller brännande känsla vid produkter du tidigare tålt, ökad rodnad, en matt eller ojämn ton, samt att huden plötsligt reagerar på produkter som luktar eller är parfymerade trots att den inte gjort det tidigare.',
        ],
      },
      {
        heading: 'Återuppbyggnadsstrategin',
        body: [
          'Steg ett är att pausa alla aktiva ingredienser — retinol, syror, starka peelingprodukter — i minst en till två veckor, även om det känns som ett steg bakåt.',
          'Steg två är att förenkla rutinen radikalt: en mild, pH-balanserad rengöring, en fuktkräm rik på ceramider, kolesterol och fettsyror (de tre byggstenarna barriären själv består av), samt solskydd på dagen.',
          'Steg tre är att introducera återuppbyggande ingredienser som niacinamid i låg koncentration och hyaluronsyra, som drar till sig fukt utan att irritera.',
          'Steg fyra, när huden känns stabil igen (vanligtvis efter 3–6 veckor), är att sakta återinföra aktiva ingredienser en i taget, med god marginal mellan varje tillägg.',
        ],
      },
      {
        heading: 'Hur lång tid tar återhämtningen?',
        body: [
          'En mildare barriärskada kan förbättras på en till två veckor med rätt rutin, medan en mer uttalad skada — särskilt efter långvarig överexfoliering — kan ta sex till åtta veckor att återställa fullt ut. Tålamod är avgörande; att forcera processen med fler aktiva produkter förlänger oftast återhämtningen.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kan man använda solskydd under återhämtningen?',
        a: 'Ja, och det bör man — en skadad barriär är extra känslig för UV-skada. Välj gärna en mineralisk, mild formula om huden är särskilt reaktiv.',
      },
    ],
  },
  {
    slug: 'co2-laser-hudforyngring-guide',
    cluster: 'CO2 resurfacing',
    title: 'Fraktionerad CO2-laser – En djupgående guide till hudföryngring',
    date: '2025-06-23',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=800&fit=crop',
    excerpt:
      'En av de mest effektiva behandlingarna mot ärr, fina linjer och ojämn textur. Här går vi igenom hur den fungerar, vad du kan förvänta dig och vem den passar för.',
    readTime: '9 min läsning',
    intro: [
      'Fraktionerad CO2-laser räknas som en av de mer kraftfulla behandlingarna inom hudföryngring, med förmåga att adressera allt från ärr och fina linjer till ojämn pigmentering och förlorad hudspänst.',
    ],
    sections: [
      {
        heading: 'Hur fungerar tekniken?',
        body: [
          'Till skillnad från äldre, helt ablativa lasrar som behandlar hela hudytan på en gång, arbetar fraktionerad CO2-laser med mikroskopiska, spridda kolumner av behandlad hud, med oskadad hud emellan. Det innebär att laserenergin når djupare lager av huden och stimulerar kollagenproduktion, samtidigt som de obehandlade områdena runtomkring påskyndar läkningen betydligt jämfört med äldre metoder.',
          'Värmen från lasern förångar de yttersta skadade cellagren och triggar samtidigt kroppens naturliga läkningsprocess, vilket över tid bygger upp nytt, fastare kollagen.',
        ],
      },
      {
        heading: 'Vad kan behandlingen adressera?',
        body: [
          'Fraktionerad CO2 används framför allt mot ärr efter akne, fina linjer och rynkor, ojämn hudtextur, förstorade porer, samt viss pigmentering och solskadad hud. Effekten på hudens spänst och struktur är ofta mer uttalad än vid mildare behandlingar som mikronåling eller ytliga peelingar.',
        ],
      },
      {
        heading: 'Vad kan du förvänta dig av processen?',
        body: [
          'Innan behandling bedövas huden lokalt. Själva behandlingen tar oftast 30–60 minuter beroende på behandlingsyta. Direkt efteråt är huden röd och känns som efter en kraftig solbränna, och inom några dagar kan ytan kännas skrovlig innan den gamla hudytan gradvis fjällar av.',
          'Nedtiden varierar med intensiteten på behandlingen, men räkna generellt med 5–7 dagar med synlig rodnad och flagning innan huden ser presentabel ut igen, och flera veckor innan den fulla effekten på kollagen syns.',
        ],
      },
      {
        heading: 'Eftervård är avgörande',
        body: [
          'Strikt solskydd är obligatoriskt under lång tid efter behandling, eftersom den nya huden är extra känslig för UV-skada. Håll huden återfuktad, undvik aktiva syror och retinol tills huden läkt fullt ut, och följ klinikens instruktioner om rengöring noggrant för att minimera infektionsrisk.',
        ],
      },
      {
        heading: 'Vem passar behandlingen för — och vem bör avvakta?',
        body: [
          'Fraktionerad CO2 passar bäst för dig med ljusare hudtoner och tydliga tecken på åldrande hud, ärrbildning eller solskada, och som kan avsätta tid för nedtiden. Personer med mörkare hudtoner löper något högre risk för post-inflammatorisk pigmentförändring och bör diskutera detta noga med behandlaren innan start. Gravida, ammande eller personer med aktiva hudinfektioner bör vänta med behandlingen.',
        ],
      },
    ],
    faq: [
      {
        q: 'Hur många behandlingar behövs?',
        a: 'Många ser tydlig förbättring redan efter en behandling, men vid mer uttalade ärr eller åldersskador rekommenderas ofta en till tre behandlingar med flera månaders mellanrum.',
      },
      {
        q: 'Gör behandlingen ont?',
        a: 'Med lokalbedövning upplever de flesta obehaget som hanterbart, snarare som en värmande, stickande känsla än akut smärta.',
      },
    ],
  },
  {
    slug: 'laser-hair-removal-sessions',
    cluster: 'Laser hair removal',
    title: 'Laserhårborttagning: hur många behandlingar behövs egentligen?',
    date: '2025-04-02',
    image:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&h=800&fit=crop',
    excerpt:
      'Svaret beror på mer än du kanske tror — hårcykel, hudtyp, hormonell påverkan och behandlingsområde spelar alla in. Här är en realistisk tidslinje.',
    readTime: '6 min läsning',
    intro: [
      'En av de vanligaste frågorna inför laserhårborttagning är hur många behandlingar som faktiskt krävs för varaktigt resultat. Svaret är sällan ett exakt antal, men det finns tydliga mönster att utgå från.',
    ],
    sections: [
      {
        heading: 'Varför krävs flera behandlingar?',
        body: [
          'Laser är som mest effektiv mot hårsäckar i tillväxtfasen (anagenfasen), eftersom det är då hårets pigment är som starkast och lasern kan träffa hårsäcken mest effektivt. Men hår på kroppen befinner sig i olika faser samtidigt — vissa växer, andra vilar eller faller av — vilket betyder att en enskild behandling bara träffar en delmängd av hårsäckarna.',
          'Genom att upprepa behandlingen med jämna mellanrum fångas successivt fler hårsäckar när de roterar in i tillväxtfasen, vilket över tid ger en betydande och varaktig reduktion.',
        ],
      },
      {
        heading: 'Realistisk tidslinje',
        body: [
          'De flesta behöver mellan sex och tio behandlingar för synligt varaktigt resultat, med cirka fyra till åtta veckors mellanrum beroende på behandlingsområde. Ansikte och tunnare hår kan kräva tätare intervaller, medan grövre områden som ben ofta klarar sig med längre mellanrum.',
          'Efter grundserien räknar många med en till två underhållsbehandlingar per år, eftersom hormonella förändringar över tid kan väcka enstaka nya hårsäckar till liv.',
        ],
      },
      {
        heading: 'Faktorer som påverkar antalet behandlingar',
        body: [
          'Hårfärg och grovlek spelar stor roll — mörkt, grovt hår svarar generellt snabbare än ljust eller finkalibrigt hår, eftersom lasern riktar in sig på pigmentet melanin. Hormonella tillstånd som PCOS kan innebära fler behandlingar över längre tid, eftersom nya hårsäckar aktiveras kontinuerligt.',
          'Behandlingsområdet spelar också in: större ytor med tjockare hårväxt, som rygg eller ben, tenderar att kräva fler sessioner än mindre, känsligare områden.',
        ],
      },
      {
        heading: 'Så maximerar du resultatet mellan behandlingarna',
        body: [
          'Undvik plockning och vaxning mellan behandlingarna, eftersom det rycker bort hårsäcken lasern behöver träffa — raka istället om håret behöver kortas. Skydda det behandlade området från sol, både före och efter varje session, för att minska risken för pigmentförändringar och för att laserns effekt inte ska försämras.',
        ],
      },
    ],
    faq: [
      {
        q: 'Fungerar laser på allt hårfärg?',
        a: 'Traditionell laser fungerar bäst på mörkare hår mot ljusare hud, eftersom tekniken bygger på kontrast i pigment. Mycket ljust, rött eller grått hår svarar generellt sämre.',
      },
      {
        q: 'Är resultatet permanent?',
        a: 'Resultatet räknas som varaktigt snarare än permanent för de allra flesta, eftersom hormonella förändringar över åren kan väcka enstaka nya hårsäckar.',
      },
    ],
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getRelatedGuides(slug: string, count = 3): Guide[] {
  return guides.filter((g) => g.slug !== slug).slice(0, count);
}
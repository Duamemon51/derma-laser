// ============================================================
// TYPES
// ============================================================

export type RelatedLink = {
  label: string;
  href: string;
};

export type GuideSection = {
  heading: string;
  body: string[];
};

export type GuideCTA = {
  heading: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref?: string;
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
  relatedLinks?: RelatedLink[];
  cta?: GuideCTA;
};

// ============================================================
// GUIDES
// ============================================================

export const guides: Guide[] = [
  // --- pormaskar -------------------------------------------------
  {
    slug: 'pormaskar',
    cluster: 'Pore care & congestion',
    title: 'Pormaskar - varför får man dem och vad kan man göra?',
    date: '2025-07-01',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop',
    excerpt:
      'Vad orsakar pormaskar och hur får man bort dem på riktigt? Här går vi igenom varför porer täpps till, vanliga misstag och vilka behandlingar som faktiskt hjälper.',
    readTime: '5 min läsning',
    intro: [
      'Pormaskar är en av de vanligaste hudbekymmer som får folk att söka efter nya rutiner och behandlingar. De är ofarliga rent medicinskt, men kan kännas envisa och svåra att bli av med permanent.',
      'Här reder vi ut vad pormaskar egentligen är, varför de uppstår och vad som faktiskt gör skillnad — både hemma och hos en klinik.',
    ],
    sections: [
      {
        heading: 'Vad är pormaskar?',
        body: [
          'Pormaskar uppstår när porer fylls med talg och döda hudceller. Öppna komedoner, som pormaskar också kallas, blir mörka när innehållet i poren oxiderar i kontakt med luft.',
          'Den mörka färgen betyder inte att poren är smutsig eller dåligt rengjord — det är en naturlig kemisk reaktion, inte ett tecken på bristande hygien.',
        ],
      },
      {
        heading: 'Varför får man pormaskar?',
        body: [
          'Talgproduktion, hudens cellomsättning, vilka produkter man använder och individuell hudtyp kan alla påverka hur lätt porer täpps till.',
          'Hud som producerar mer talg, eller där döda hudceller inte lossnar i normal takt, har generellt lättare för att utveckla pormaskar, särskilt i den så kallade T-zonen.',
        ],
      },
      {
        heading: 'Ska man klämma pormaskar själv?',
        body: [
          'Felaktig klämning kan irritera huden och ge inflammation, och i värsta fall lämna märken efter sig.',
          'Professionell rengöring och ett balanserat hemma-upplägg är ofta ett skonsammare och mer hållbart sätt att hantera pormaskar över tid.',
        ],
      },
      {
        heading: 'Professionella behandlingar',
        body: [
          'Beroende på hudens övriga tillstånd kan Hydrafacial, Carbon Peel, kemisk peeling eller en riktad akne- och renande behandling vara relevanta alternativ.',
          'En hudanalys hjälper till att avgöra vilken behandling som passar bäst utifrån just din hudtyp och dina porer.',
        ],
      },
      {
        heading: 'Undvik att överbehandla',
        body: [
          'För många syror, skrubb och stark rengöring samtidigt kan skada hudbarriären och göra huden mer reaktiv snarare än renare.',
          'En enklare, mer konsekvent rutin ger ofta bättre och mer stabila resultat än att kombinera flera aggressiva produkter samtidigt.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kan pormaskar försvinna permanent?',
        a: 'Porer kan täppas till igen, så långsiktig hudvård och regelbundet underhåll kan behövas för att hålla dem rena över tid.',
      },
      {
        q: 'Är svarta pormaskar smuts?',
        a: 'Nej. Den mörka färgen uppstår främst genom oxidation i porens öppning, inte genom smuts eller dålig rengöring.',
      },
      {
        q: 'Vilken behandling passar bäst?',
        a: 'Det beror på hudens övriga tillstånd. Hydrafacial och Carbon Peel är två vanliga alternativ hos Dermalaser.',
      },
      {
        q: 'Kan känslig hud ha pormaskar?',
        a: 'Ja. Då behöver rengöring och exfoliering anpassas så att huden inte stressas eller irriteras i onödan.',
      },
    ],
    relatedLinks: [
      { label: 'Hydrafacial', href: '/hydrafacial-stockholm/' },
      { label: 'Carbon Peel', href: '/carbon-peel-stockholm/' },
      { label: 'Aknebehandling', href: '/aknebehandling-stockholm/' },
      { label: 'Hudanalys', href: '/hudanalys-stockholm/' },
    ],
  },

  // --- vilken-ansiktsbehandling -----------------------------------
  {
    slug: 'vilken-ansiktsbehandling',
    cluster: 'Facials & skin renewal',
    title: 'Vilken ansiktsbehandling passar min hud?',
    date: '2025-07-08',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
    excerpt:
      'Hydrafacial, peeling, Carbon Peel eller klassisk behandling? Här går vi igenom vilken ansiktsbehandling som passar olika hudbehov — och när en hudanalys är bättre än att gissa.',
    readTime: '5 min läsning',
    intro: [
      'Det finns ingen ansiktsbehandling som är bäst för alla. Vilken som passar dig bäst beror i första hand på vilket behov huden faktiskt har just nu, snarare än vilken behandling som är mest populär.',
      'Här går vi igenom hur du kan tänka utifrån hudens tillstånd — och när det är läge att låta en hudanalys avgöra istället för att gissa utifrån behandlingsnamn.',
    ],
    sections: [
      {
        heading: 'Börja med hudens behov',
        body: [
          'Det viktigaste är att identifiera om huden främst är tilltäppt, torr, känslig, pigmenterad, glåmig eller har förändrad struktur.',
          'Genom att utgå från symptomet snarare än en specifik behandling blir det lättare att välja rätt — och undvika att lägga tid och pengar på något som inte adresserar det faktiska problemet.',
        ],
      },
      {
        heading: 'Om huden är tilltäppt eller har pormaskar',
        body: [
          'Hydrafacial, klassisk hudbehandling eller Carbon Peel kan vara relevanta beroende på hur känslig huden är och hur mycket talg och tilltäppthet som finns.',
        ],
      },
      {
        heading: 'Om huden känns torr eller glåmig',
        body: [
          'Hydrafacial har tydligt fokus på rengöring och återfuktning, vilket gör den till ett bra val vid matthet och torrhet.',
          'En klassisk behandling kan också passa bra för regelbundet underhåll av hudens fukt- och lysternivå.',
        ],
      },
      {
        heading: 'Om du vill arbeta med pigmentering eller struktur',
        body: [
          'Kemisk peeling kan vara relevant vid ojämn hudton och ojämn hudstruktur, eftersom den arbetar med kontrollerad exfoliering.',
          'Vid mer uttalade akneärr och strukturförändringar kan CO2-laser vara en separat, mer avancerad behandlingsnivå att överväga.',
        ],
      },
      {
        heading: 'Om huden är känslig',
        body: [
          'Mer aktiv behandling är inte alltid bättre. Känslig och reaktiv hud kan behöva ett lugnande och barriärstärkande fokus först, innan mer intensiva behandlingar introduceras.',
        ],
      },
      {
        heading: 'När du fortfarande är osäker',
        body: [
          'Boka hudanalys. Det är ofta bättre än att gissa utifrån behandlingsnamn, eftersom en analys utgår från hudens faktiska tillstånd snarare än vad som låter mest lockande.',
        ],
      },
    ],
    faq: [
      {
        q: 'Vad är bäst - Hydrafacial eller kemisk peeling?',
        a: 'Hydrafacial fokuserar mer på rengöring och fukt. Kemisk peeling fokuserar mer på kontrollerad exfoliering och hudförnyelse.',
      },
      {
        q: 'Vilken behandling passar pormaskar?',
        a: 'Hydrafacial, Carbon Peel eller en akne- och renande behandling kan vara relevanta beroende på huden.',
      },
      {
        q: 'Vilken behandling ger glow?',
        a: 'Flera behandlingar kan förbättra lyster, men valet bör styras av hudens behov och tolerans snarare än ett enskilt löfte om glow.',
      },
      {
        q: 'Vad gör jag om jag har flera hudproblem samtidigt?',
        a: 'Boka hudanalys och låt behandlingsplanen prioritera vad huden behöver först.',
      },
    ],
    relatedLinks: [
      { label: 'Hudanalys', href: '/hudanalys-stockholm/' },
      { label: 'Hydrafacial', href: '/hydrafacial-stockholm/' },
      { label: 'Kemisk peeling', href: '/kemisk-peeling-stockholm/' },
      { label: 'Carbon Peel', href: '/carbon-peel-stockholm/' },
      { label: 'Klassisk ansiktsbehandling', href: '/ansiktsbehandling-stockholm/' },
    ],
  },

  // --- vuxenakne ---------------------------------------------------
  {
    slug: 'vuxenakne',
    cluster: 'Acne & congestion',
    title: 'Vuxenakne - varför får man finnar som vuxen?',
    date: '2025-07-15',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    excerpt:
      'Finnar som vuxen? Läs om vuxenakne, vanliga orsaker, vad du bör undvika och vilka professionella hudbehandlingar som kan passa.',
    readTime: '5 min läsning',
    intro: [
      'Många tänker på akne som något som hör tonåren till, men verkligheten är en annan — återkommande utbrott är vanligt även långt senare i livet.',
      'Här går vi igenom varför vuxenakne uppstår, vanliga misstag att undvika och hur professionell behandling kan anpassas efter hudens tillstånd.',
    ],
    sections: [
      {
        heading: 'Akne slutar inte alltid efter tonåren',
        body: [
          'Många får återkommande utbrott även som vuxna. De kan förekomma på haka, käklinje, kinder, panna eller flera områden samtidigt.',
        ],
      },
      {
        heading: 'Vuxenakne kan ha flera orsaker',
        body: [
          'Talgproduktion, hormoner, stress, produkter, hudbarriär och andra individuella faktorer kan samverka.',
          'Därför bör man undvika att utgå från en enda orsak utan en ordentlig bedömning av huden i sin helhet.',
        ],
      },
      {
        heading: 'Vanliga misstag',
        body: [
          'Ett vanligt misstag är att försöka torka ut huden med många starka produkter samtidigt.',
          'Det kan göra huden mer irriterad utan att lösa grundproblemet, och riskerar istället att försvaga hudbarriären ytterligare.',
        ],
      },
      {
        heading: 'Professionell behandling',
        body: [
          'En aknebehandling kan anpassas efter om huden är inflammerad, tilltäppt, känslig eller har märken efter tidigare utbrott.',
        ],
      },
      {
        heading: 'När aknen lämnat märken',
        body: [
          'Efter att aktiv akne lugnat sig kan pigmentering eller förändrad struktur behöva en separat behandlingsplan.',
        ],
      },
    ],
    faq: [
      {
        q: 'Är vuxenakne vanligt?',
        a: 'Ja, akne kan förekomma långt efter tonåren.',
      },
      {
        q: 'Är finnar på hakan alltid hormonella?',
        a: 'Nej. Placeringen ensam räcker inte för att säkert fastställa orsak.',
      },
      {
        q: 'Ska jag använda starkare produkter?',
        a: 'Inte nödvändigtvis. För mycket aktiv hudvård kan irritera och försvaga hudbarriären.',
      },
      {
        q: 'Vilken behandling erbjuder Dermalaser?',
        a: 'Dermalaser har en 45-minuters behandling för akne och oren hud som anpassas individuellt.',
      },
    ],
    relatedLinks: [
      { label: 'Aknebehandling', href: '/aknebehandling-stockholm/' },
      { label: 'Pormaskar', href: '/tips/pormaskar/' },
      { label: 'Kemisk peeling', href: '/kemisk-peeling-stockholm/' },
      { label: 'Hudanalys', href: '/hudanalys-stockholm/' },
    ],
  },

  // --- aknearr -------------------------------------------------------
  {
    slug: 'aknearr',
    cluster: 'CO2 resurfacing',
    title: 'Akneärr - märken, pigmentering och förändrad hudstruktur',
    date: '2025-07-22',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=800&fit=crop',
    excerpt:
      'Läs om akneärr, märken efter finnar och vilka hudbehandlingar som kan användas för ojämn hudstruktur och förändringar efter akne.',
    readTime: '5 min läsning',
    intro: [
      'Märken efter akne kan se väldigt olika ut beroende på vad som faktiskt orsakar dem — och det påverkar vilken behandling som är rimlig att gå vidare med.',
      'Här går vi igenom skillnaden mellan pigmentmärken och faktiska strukturförändringar, och vilka behandlingsnivåer som finns.',
    ],
    sections: [
      {
        heading: 'Alla märken efter akne är inte ärr',
        body: [
          'Efter inflammation kan röda eller mörka märken finnas kvar utan att hudens struktur är permanent förändrad.',
        ],
      },
      {
        heading: 'När hudstrukturen förändrats',
        body: [
          'Djupare akne kan lämna gropar, ojämnheter eller annan förändring i hudens yta.',
          'Typen av förändring påverkar vilken behandling som är rimlig att överväga.',
        ],
      },
      {
        heading: 'Behandling av pigmentmärken',
        body: [
          'Om problemet främst är färgförändring kan pigmentinriktad behandling eller peeling vara mer relevant än en behandling för struktur.',
        ],
      },
      {
        heading: 'CO2-laser vid strukturförändringar',
        body: [
          'Dermalaser erbjuder fraktionerad CO2 Laser Resurfacing som en mer avancerad behandlingsnivå för bland annat akneärr och ojämn hudstruktur.',
        ],
      },
      {
        heading: 'Realistiska förväntningar',
        body: [
          'Hudstruktur förbättras vanligtvis stegvis. Målet bör vara förbättring, inte löften om helt ärrfri hud.',
        ],
      },
    ],
    faq: [
      {
        q: 'Vad är skillnaden mellan akneärr och pigmentfläckar?',
        a: 'Pigmentfläckar påverkar främst färg medan ärr kan innebära förändring i själva hudstrukturen.',
      },
      {
        q: 'Kan CO2-laser användas mot akneärr?',
        a: 'Ja, Dermalaser anger akneärr som ett användningsområde för CO2 Laser Resurfacing.',
      },
      {
        q: 'Hur många behandlingar behövs?',
        a: 'Det beror på typ och djup av ärr, hudens egenskaper och hur den läker.',
      },
      {
        q: 'Bör aktiv akne behandlas först?',
        a: 'Ofta behöver aktiv inflammation vara under kontroll innan mer avancerad ärrbehandling planeras.',
      },
    ],
    relatedLinks: [
      { label: 'CO2-laser', href: '/co2-laser-stockholm/' },
      { label: 'Aknebehandling', href: '/aknebehandling-stockholm/' },
      { label: 'Pigmentering', href: '/pigmentering-stockholm/' },
      { label: 'Hudanalys', href: '/hudanalys-stockholm/' },
    ],
  },

  // --- pigmentflackar ---------------------------------------------
  {
    slug: 'pigmentflackar',
    cluster: 'Pigmentation',
    title: 'Pigmentfläckar i ansiktet - varför uppstår de och vad kan man göra?',
    date: '2025-07-29',
    image:
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&h=800&fit=crop',
    excerpt:
      'Läs varför pigmentfläckar uppstår, vad som kan förvärra dem och vilka behandlingar som kan passa vid ojämn hudton.',
    readTime: '5 min läsning',
    intro: [
      'Ojämn hudton är ett av de vanligaste skälen till att man söker ny hudvård eller behandling — men pigmentfläckar kan ha flera olika bakomliggande orsaker.',
      'Här går vi igenom varför pigmentfläckar uppstår, vad som kan förvärra dem och vilka behandlingsalternativ som finns.',
    ],
    sections: [
      {
        heading: 'Vad är pigmentfläckar?',
        body: [
          'Pigmentfläckar är områden där huden producerar eller lagrar mer pigment än omkringliggande hud.',
          'De kan se olika ut och ha olika orsaker, vilket gör att en och samma behandling inte alltid passar alla typer.',
        ],
      },
      {
        heading: 'Solen spelar ofta en roll',
        body: [
          'UV-exponering kan göra många pigmentförändringar tydligare.',
          'Solskydd är därför en viktig del av ett långsiktigt upplägg, oavsett vilken typ av pigmentering det handlar om.',
        ],
      },
      {
        heading: 'Märken efter inflammation',
        body: [
          'Finnar och irritation kan lämna mörkare märken efter att inflammationen lagt sig.',
          'Dessa behöver inte vara samma sak som ärr, även om de kan se snarlika ut till en början.',
        ],
      },
      {
        heading: 'Behandlingsalternativ',
        body: [
          'Beroende på huden kan pigmentbehandling, kemisk peeling eller annan hudförnyelse vara relevant.',
          'Valet bör göras individuellt utifrån hudens övriga tillstånd, inte enbart utifrån hur fläckarna ser ut.',
        ],
      },
      {
        heading: 'Var försiktig med aggressiv behandling',
        body: [
          'För intensiv behandling kan irritera huden och i vissa hudtyper riskera att förvärra pigmentproblem.',
          'Rätt nivå är viktigare än maximal styrka.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kan pigmentfläckar komma tillbaka?',
        a: 'Ja, särskilt om utlösande faktorer som UV-exponering kvarstår.',
      },
      {
        q: 'Kan peeling hjälpa?',
        a: 'Vissa peelingar används vid ojämn hudton och pigmentering.',
      },
      {
        q: 'Är alla mörka märken samma typ av pigmentering?',
        a: 'Nej. Därför är bedömning viktig innan behandling.',
      },
      {
        q: 'Behöver jag använda solskydd?',
        a: 'Solskydd är en central del av att förebygga att många pigmentförändringar förvärras.',
      },
    ],
    relatedLinks: [
      { label: 'Pigmentbehandling', href: '/pigmentering-stockholm/' },
      { label: 'Kemisk peeling', href: '/kemisk-peeling-stockholm/' },
      { label: 'Hudanalys', href: '/hudanalys-stockholm/' },
    ],
  },

  // --- hydrafacial ---------------------------------------------------
  {
    slug: 'hydrafacial',
    cluster: 'Facials & skin renewal',
    title: 'Hydrafacial - vad är det och vem passar behandlingen?',
    date: '2025-08-05',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
    excerpt:
      'Vad gör Hydrafacial? Läs om behandlingen, vem den passar och skillnaden mellan Hydrafacial, Carbon Peel och kemisk peeling.',
    readTime: '4 min läsning',
    intro: [
      'Hydrafacial är en av de mest omtalade ansiktsbehandlingarna just nu, men det är inte alltid tydligt vad den faktiskt gör eller hur den skiljer sig från andra populära behandlingar.',
      'Här går vi igenom vad Hydrafacial är, vem den passar och hur den jämförs med Carbon Peel och kemisk peeling.',
    ],
    sections: [
      {
        heading: 'Vad är Hydrafacial?',
        body: [
          'Hydrafacial är en ansiktsbehandling som kombinerar rengöring, exfoliering och återfuktning i samma session.',
        ],
      },
      {
        heading: 'Vad kan man förvänta sig?',
        body: [
          'Dermalaser beskriver behandlingen som djuprengörande och återfuktande, med en renare, mjukare och mer balanserad känsla efteråt.',
        ],
      },
      {
        heading: 'Vem passar behandlingen?',
        body: [
          'Den kan vara relevant vid tilltäppt hud, ojämn struktur, glåmighet, yttorrhet och hud som känns trött.',
        ],
      },
      {
        heading: 'Hydrafacial jämfört med Carbon Peel',
        body: [
          'Hydrafacial fokuserar mer på fukt och rengöring. Carbon Peel riktar sig mer mot talg, porer och fet eller tilltäppt hud.',
        ],
      },
      {
        heading: 'Hydrafacial jämfört med peeling',
        body: [
          'Kemisk peeling har mer fokus på kontrollerad kemisk exfoliering och hudförnyelse, medan Hydrafacial är ett mer direkt rengörings- och fuktfokuserat alternativ.',
        ],
      },
    ],
    faq: [
      {
        q: 'Gör Hydrafacial ont?',
        a: 'Upplevelsen varierar, men behandlingen marknadsförs som skonsam och anpassas efter huden.',
      },
      {
        q: 'Kan man göra den regelbundet?',
        a: 'Ja, Dermalaser anger att Hydrafacial kan ingå i en regelbunden hudvårdsrutin.',
      },
      {
        q: 'Passar den känslig hud?',
        a: 'Det beror på hudens aktuella tillstånd och bör bedömas individuellt.',
      },
      {
        q: 'Vad kostar Hydrafacial hos Dermalaser?',
        a: '895 kr för 30 minuter.',
      },
    ],
    relatedLinks: [
      { label: 'Hydrafacial behandling', href: '/hydrafacial-stockholm/' },
      { label: 'Carbon Peel', href: '/carbon-peel-stockholm/' },
      { label: 'Kemisk peeling', href: '/kemisk-peeling-stockholm/' },
    ],
  },

  // --- kemisk-peeling -------------------------------------------------
  {
    slug: 'kemisk-peeling',
    cluster: 'Peels & resurfacing',
    title: 'Kemisk peeling - komplett guide',
    date: '2025-08-12',
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&h=800&fit=crop',
    excerpt:
      'Läs hur kemisk peeling fungerar, vad den kan användas till och vad som skiljer PRX-T33, BioRePeel och andra peelingar.',
    readTime: '5 min läsning',
    intro: [
      'Kemisk peeling är ett samlingsnamn för flera olika behandlingar, och skillnaderna mellan dem kan vara stora — både i styrka, syrasammansättning och vad de är tänkta att göra för huden.',
      'Här går vi igenom vad kemisk peeling faktiskt innebär, vad den kan användas till och hur behandlingar som PRX-T33 och BioRePeelCl3 skiljer sig åt.',
    ],
    sections: [
      {
        heading: 'Vad är kemisk peeling?',
        body: [
          'Kemisk peeling använder syror eller peelinglösningar för kontrollerad exfoliering och hudförnyelse.',
          'Styrka och sammansättning varierar mellan behandlingar, vilket gör att effekten och känslan efteråt kan skilja sig mycket beroende på vilken peeling som används.',
        ],
      },
      {
        heading: 'Vad kan peeling användas för?',
        body: [
          'Beroende på produkt och hud kan peeling vara relevant vid glåmighet, ojämn struktur, pigmentering, porer och oren hud.',
          'Vilken typ som passar bäst avgörs av hudens tillstånd snarare än vilken peeling som är mest efterfrågad för tillfället.',
        ],
      },
      {
        heading: 'PRX-T33',
        body: [
          'PRX-T33 är en TCA-baserad biorevitaliserande behandling som inte primärt syftar till kraftig fjällning.',
          'Den passar därför ofta den som vill ha effekt på hudens kvalitet utan en lång period av synlig flagning efteråt.',
        ],
      },
      {
        heading: 'BioRePeelCl3',
        body: [
          'BioRePeelCl3 kombinerar flera syror och hudvårdande komponenter och används bland annat vid pigmentering, porer, akne och ojämn struktur.',
          'Den bredare kombinationen gör den till ett flexibelt alternativ vid flera samtidiga hudbekymmer.',
        ],
      },
      {
        heading: 'Starkare är inte alltid bättre',
        body: [
          'Rätt peeling väljs efter hudtyp, tillstånd och mål, inte efter vilken behandling som låter mest intensiv.',
          'En för stark behandling kan skapa mer irritation än nytta, särskilt på hud som redan är känslig eller reaktiv.',
        ],
      },
    ],
    faq: [
      {
        q: 'Flagnar man alltid efter kemisk peeling?',
        a: 'Nej. Hur mycket exfoliering som syns beror på produkt, styrka och hud.',
      },
      {
        q: 'Kan peeling hjälpa mot akne?',
        a: 'Vissa peelingar kan vara relevanta för oren eller aknebenägen hud efter bedömning.',
      },
      {
        q: 'Kan peeling hjälpa pigmentering?',
        a: 'Ja, vissa peelingar används med fokus på ojämn hudton och pigmentering.',
      },
      {
        q: 'Vilken peeling ska jag välja?',
        a: 'Låt hudanalysen styra. Dermalaser erbjuder flera alternativ och väljer efter huden.',
      },
    ],
    relatedLinks: [
      { label: 'Kemisk peeling behandling', href: '/kemisk-peeling-stockholm/' },
      { label: 'Pigmentering', href: '/pigmentering-stockholm/' },
      { label: 'Aknebehandling', href: '/aknebehandling-stockholm/' },
    ],
  },

  // --- carbon-peel -------------------------------------------------
  {
    slug: 'carbon-peel',
    cluster: 'Pore care & congestion',
    title: 'Carbon Peel - så fungerar Hollywood Peel',
    date: '2025-08-19',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=800&fit=crop',
    excerpt:
      'Läs om Carbon Peel/Hollywood Peel för porer, fet hud, orenheter och hudstruktur och ta reda på om behandlingen passar dig.',
    readTime: '4 min läsning',
    intro: [
      'Carbon Peel, eller Hollywood Peel som den också kallas, är en av de behandlingar som ofta lyfts fram för fet hud och synliga porer — men det är inte alltid tydligt vad den faktiskt gör eller vem den passar bäst.',
      'Här går vi igenom vad Carbon Peel innebär, vem behandlingen är relevant för och hur den skiljer sig från Hydrafacial.',
    ],
    sections: [
      {
        heading: 'Vad är Carbon Peel?',
        body: [
          'Carbon Peel är en behandling med fokus på djuprengöring, talg, porer och hudklarhet och kallas även Hollywood Peel.',
        ],
      },
      {
        heading: 'Vem passar behandlingen?',
        body: [
          'Den är särskilt relevant för personer som upplever fet hud, synliga porer, tilltäpptheter eller en glåmig och obalanserad hud.',
        ],
      },
      {
        heading: 'Kan porer bli mindre?',
        body: [
          'Porers faktiska storlek påverkas av genetiska och strukturella faktorer.',
          'Behandling kan däremot göra att porer upplevs mindre framträdande när talg och tilltäppthet minskar.',
        ],
      },
      {
        heading: 'Carbon Peel eller Hydrafacial?',
        body: [
          'Välj inte enbart efter popularitet. Hydrafacial är mer fukt- och rengöringsorienterad medan Carbon Peel har större fokus på fet/tilltäppt hud och porer.',
        ],
      },
    ],
    faq: [
      {
        q: 'Är Carbon Peel samma som Hollywood Peel?',
        a: 'Ja, namnen används ofta om samma behandling.',
      },
      {
        q: 'Passar den fet hud?',
        a: 'Det är en av de hudtyper/tillstånd Dermalaser särskilt nämner.',
      },
      {
        q: 'Hur lång är behandlingen?',
        a: '45 minuter.',
      },
      {
        q: 'Vad kostar den?',
        a: '1 095 kr.',
      },
    ],
    relatedLinks: [
      { label: 'Carbon Peel behandling', href: '/carbon-peel-stockholm/' },
      { label: 'Hydrafacial', href: '/hydrafacial-stockholm/' },
      { label: 'Pormaskar', href: '/tips/pormaskar/' },
    ],
  },

  // --- laser-harborttagning -------------------------------------------------
  {
    slug: 'laser-harborttagning',
    cluster: 'Laser hair removal',
    title: 'Laser hårborttagning - så fungerar diodlaser',
    date: '2025-08-26',
    image:
      'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1200&h=800&fit=crop',
    excerpt:
      'Hur fungerar laser hårborttagning? Läs om diodlaser, antal behandlingar, rakning, resultat och olika behandlingsområden.',
    readTime: '5 min läsning',
    intro: [
      'Laser hårborttagning är en av de mest efterfrågade behandlingarna, men det är inte alltid tydligt hur diodlaser faktiskt fungerar eller vad som styr resultatet.',
      'Här går vi igenom hur behandlingen fungerar, varför flera sessioner behövs och vad som är bra att veta inför ett besök.',
    ],
    sections: [
      {
        heading: 'Hur fungerar laser hårborttagning?',
        body: [
          'Diodlaser använder ljusenergi riktad mot pigment i håret.',
          'Målet är långsiktig hårreducering, inte ett löfte om att varje hårstrå försvinner permanent.',
        ],
      },
      {
        heading: 'Varför behövs flera behandlingar?',
        body: [
          'Hårstrån befinner sig i olika tillväxtfaser.',
          'Därför påverkas inte alla hår optimalt vid samma behandlingstillfälle, vilket är anledningen till att en serie behandlingar planeras in.',
        ],
      },
      {
        heading: 'Vilka områden kan behandlas?',
        body: [
          'Dermalaser behandlar bland annat ansikte, armhålor, bikini, brasiliansk bikini, ben, armar, mage, rygg och bröst.',
        ],
      },
      {
        heading: 'Raka före behandlingen',
        body: [
          'Området ska rakas innan besöket.',
          'Dermalaser anger en extra avgift på 100 kr om rakning behöver göras på plats.',
        ],
      },
      {
        heading: 'Resultat varierar',
        body: [
          'Hårtyp, hudtyp, behandlingsområde och individuella faktorer påverkar hur snabbt och hur mycket hårväxten minskar.',
        ],
      },
    ],
    faq: [
      {
        q: 'Är resultatet permanent?',
        a: 'Behandlingen beskrivs som långsiktig hårreducering eftersom resultat och eventuell återväxt varierar.',
      },
      {
        q: 'Hur många sessioner behövs?',
        a: 'Flera behandlingar krävs, men exakt antal varierar.',
      },
      {
        q: 'Ska jag raka eller vaxa före laser?',
        a: 'Dermalaser instruerar kunden att raka området. Undvik att ta bort hårroten inför en laserbehandling om behandlarens instruktioner säger annat.',
      },
      {
        q: 'Vad kostar behandlingen?',
        a: 'Från 495 kr beroende på områdets storlek.',
      },
    ],
    relatedLinks: [
      { label: 'Laser hårborttagning behandling', href: '/laser-harborttagning-stockholm/' },
      { label: 'Laser bikinilinje', href: '/tips/laser-bikinilinje/' },
      { label: 'Laser ansikte', href: '/tips/laser-ansikte/' },
    ],
  },

  // --- laser-bikinilinje -------------------------------------------------
  {
    slug: 'laser-bikinilinje',
    cluster: 'Laser hair removal',
    title: 'Laser hårborttagning av bikinilinjen',
    date: '2025-09-02',
    image:
      'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1200&h=800&fit=crop',
    excerpt:
      'Läs hur laserbehandling av bikinilinjen fungerar, hur du förbereder huden och skillnaden mellan bikinilinje och brasiliansk laser.',
    readTime: '4 min läsning',
    intro: [
      'Bikinilinje är ett av de vanligaste områdena att lasra, men det är inte alltid tydligt vad som skiljer bikinilinje från brasiliansk bikini eller vad som krävs inför behandlingen.',
      'Här går vi igenom skillnaden mellan områdena, hur du förbereder dig och vad du kan förvänta dig av resultatet.',
    ],
    sections: [
      {
        heading: 'Bikinilinje eller brasiliansk?',
        body: [
          'Hos Dermalaser räknas bikinilinje som ett mindre område medan brasiliansk bikini räknas som mellanområde.',
        ],
      },
      {
        heading: 'Förberedelse',
        body: [
          'Området ska vara rakat före besöket.',
          'Följ alltid behandlarens aktuella instruktioner inför varje session.',
        ],
      },
      {
        heading: 'Varför behövs flera behandlingar?',
        body: [
          'Precis som på andra områden växer håren i olika faser.',
          'En serie sessioner behövs därför för långsiktig reduktion.',
        ],
      },
      {
        heading: 'Irritation efter rakning',
        body: [
          'Många söker laser för att minska behovet av rakning över tid.',
          'Själva behandlingsresultatet varierar mellan personer.',
        ],
      },
    ],
    faq: [
      {
        q: 'Vad kostar bikinilinje?',
        a: 'Bikinilinje ligger i Dermalasers kategori litet område: 495 kr.',
      },
      {
        q: 'Vad kostar brasiliansk bikini?',
        a: 'Brasiliansk bikini ligger i mellanområde: 995 kr.',
      },
      {
        q: 'Måste jag raka mig?',
        a: 'Ja, Dermalaser anger att området ska vara rakat.',
      },
      {
        q: 'Hur många behandlingar behövs?',
        a: 'Flera behandlingar, men exakt antal varierar.',
      },
    ],
    relatedLinks: [
      { label: 'Laser hårborttagning', href: '/laser-harborttagning-stockholm/' },
      { label: 'Laser guide', href: '/tips/laser-harborttagning/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
  },

  // --- laser-ansikte -------------------------------------------------
  {
    slug: 'laser-ansikte',
    cluster: 'Laser hair removal',
    title: 'Laser hårborttagning i ansiktet',
    date: '2025-09-09',
    image:
      'https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1200&h=800&fit=crop',
    excerpt:
      'Läs om laser hårborttagning på haka, överläpp, kinder och hals, hur behandlingen fungerar och vad du bör tänka på.',
    readTime: '4 min läsning',
    intro: [
      'Ansiktshår kan kännas extra känsligt att prata om, men laserbehandling av områden som överläpp och haka är ett av de vanligaste ärendena vid laserbehandling.',
      'Här går vi igenom vilka ansiktsområden som kan behandlas, hur processen fungerar och vad som är bra att tänka på inför ett besök.',
    ],
    sections: [
      {
        heading: 'Vilka ansiktsområden behandlas?',
        body: [
          'Dermalaser listar bland annat överläpp, haka, polisonger, hals, mellan bryn och kinder som mindre områden.',
        ],
      },
      {
        heading: 'Hur fungerar behandlingen?',
        body: [
          'Diodlaser riktar ljusenergi mot pigment i håret.',
          'Effekten är beroende av hår- och hudegenskaper och en serie behandlingar behövs.',
        ],
      },
      {
        heading: 'Rakning inför behandling',
        body: [
          'Följ Dermalasers instruktion att raka området inför besöket.',
          'Kontakta studion om du är osäker på ett specifikt ansiktsområde.',
        ],
      },
      {
        heading: 'Individuell bedömning',
        body: [
          'Ansiktshår kan ha olika karaktär och orsaker.',
          'Därför bör behandlingsplanen anpassas individuellt.',
        ],
      },
    ],
    faq: [
      {
        q: 'Vilka områden i ansiktet kan behandlas?',
        a: 'Överläpp, haka, polisonger, hals, mellan bryn och kinder finns listade som exempel.',
      },
      {
        q: 'Vad kostar ett litet område?',
        a: '495 kr.',
      },
      {
        q: 'Hur många behandlingar behövs?',
        a: 'Flera behandlingar behövs, men antal varierar.',
      },
      {
        q: 'Kan alla hår behandlas lika bra?',
        a: 'Nej, resultat påverkas bland annat av hårets pigment och individuella förutsättningar.',
      },
    ],
    relatedLinks: [
      { label: 'Laser hårborttagning', href: '/laser-harborttagning-stockholm/' },
      { label: 'Laser guide', href: '/tips/laser-harborttagning/' },
      { label: 'Kontakt', href: '/kontakt/' },
    ],
    cta: {
      heading: 'Vill du ha hjälp utifrån just din hud?',
      text: 'Boka kostnadsfri hudanalys eller läs mer om behandlingen som hör ihop med guiden.',
      primaryLabel: 'Boka kostnadsfri hudanalys',
      primaryHref: '/hudanalys-stockholm/',
      secondaryLabel: 'Se relevant behandling',
      secondaryHref: '/laser-harborttagning-stockholm/',
    },
  },

  // --- co2-laser-aknearr -------------------------------------------------
  {
    slug: 'co2-laser-aknearr',
    cluster: 'CO2 resurfacing',
    title: 'CO2-laser för akneärr - hur fungerar behandlingen?',
    date: '2025-09-16',
    image:
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200&h=800&fit=crop',
    excerpt:
      'Läs hur fraktionerad CO2-laser används vid akneärr och ojämn hudstruktur, vad återhämtning innebär och när bedömning behövs.',
    readTime: '5 min läsning',
    intro: [
      'Akneärr som förändrat själva hudstrukturen kräver ofta en annan typ av behandling än de som främst arbetar ytligt med rengöring eller exfoliering.',
      'Här går vi igenom hur fraktionerad CO2-laser fungerar, vad återhämtningen innebär och varför en professionell bedömning bör göras innan behandling.',
    ],
    sections: [
      {
        heading: 'Varför kan akneärr behöva en annan behandling?',
        body: [
          'När akne lämnat förändringar i själva hudstrukturen räcker inte alltid behandlingar som främst arbetar med rengöring eller ytlig exfoliering.',
        ],
      },
      {
        heading: 'Hur fraktionerad CO2-laser fungerar',
        body: [
          'Behandlingen skapar kontrollerade mikroskopiska behandlingszoner i huden, vilket aktiverar reparationsprocesser och kollagenremodellering.',
        ],
      },
      {
        heading: 'Resultat utvecklas gradvis',
        body: [
          'Det slutliga resultatet ska inte bedömas direkt efter behandlingen. Huden behöver läka och remodellering fortsätter över tid.',
        ],
      },
      {
        heading: 'Återhämtning',
        body: [
          'CO2-resurfacing är en intensivare behandling och innebär återhämtningstid. Exakt förlopp varierar och ska gås igenom med behandlaren.',
        ],
      },
      {
        heading: 'Professionell bedömning först',
        body: [
          'Dermalaser anger att hudbedömning görs före behandling för att välja rätt protokoll och behandlingsnivå.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kan CO2-laser ta bort alla akneärr?',
        a: 'Ingen seriös behandling bör lova att alla ärr försvinner. Målet är förbättring och resultat varierar.',
      },
      {
        q: 'Hur lång är behandlingen hos Dermalaser?',
        a: '60 minuter.',
      },
      {
        q: 'Vad kostar den?',
        a: '4 500 kr.',
      },
      {
        q: 'Behövs återhämtning?',
        a: 'Ja, behandlingen innebär en återhämtningsperiod.',
      },
      {
        q: 'Behövs konsultation?',
        a: 'Dermalaser anger professionell hudbedömning före behandling.',
      },
    ],
    relatedLinks: [
      { label: 'CO2 Laser Resurfacing', href: '/co2-laser-stockholm/' },
      { label: 'Akneärr guide', href: '/tips/aknearr/' },
      { label: 'Aknebehandling', href: '/aknebehandling-stockholm/' },
    ],
    cta: {
      heading: 'Vill du ha hjälp utifrån just din hud?',
      text: 'Boka kostnadsfri hudanalys eller läs mer om behandlingen som hör ihop med guiden.',
      primaryLabel: 'Boka kostnadsfri hudanalys',
      primaryHref: '/hudanalys-stockholm/',
      secondaryLabel: 'Se relevant behandling',
      secondaryHref: '/co2-laser-stockholm/',
    },
  },
];
// ============================================================
// HELPERS
// ============================================================

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedGuides(currentSlug: string, limit = 3): Guide[] {
  const current = getGuideBySlug(currentSlug);
  if (!current) return guides.filter((g) => g.slug !== currentSlug).slice(0, limit);

  const sameCluster = guides.filter(
    (g) => g.slug !== currentSlug && g.cluster === current.cluster
  );

  if (sameCluster.length >= limit) {
    return sameCluster.slice(0, limit);
  }

  const others = guides.filter(
    (g) => g.slug !== currentSlug && g.cluster !== current.cluster
  );

  return [...sameCluster, ...others].slice(0, limit);
}
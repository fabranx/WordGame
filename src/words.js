const words = [
  'pernicioso',
  'sicofante',
  'almanaccare',
  'retrogrado',
  'ampolloso',
  'favellare',
  'lapalissiano',
  'rocambolesco',
  'querulo',
  'bastardella',
  'dionisiaco',
  'atarassia',
  'delatore',
  'entropia',
  'gnomico',
  'improcrastinabile',
  'epitalamico',
  'ermeneutica',
  'sciorinare',
  'batracomiomachia',
  'preterintenzionale',
  'paradigma',
  'rintuzzare',
  'mendacemente',
  'artatamente',
  'escatologia',
  'abbioccato',
  'escatologicamente',
  'sillogisticamente',
  'pretestuosamente',
  'stoicamente',
  'whatsappare',
  'spoilerare',
  'microondabile',
  'sovrasterebbe',
  'estrosa',
  'egiziane',
  'ghettone',
  'antidivorzisti',
  'patronessa',
  'eone',
  'sdruccioli',
  'dovrebbe',
  'guazzetti',
  'tubaste',
  'decretera',
  'intestardivo',
  'stress',
  'intendentizia',
  'stagionati',
  'semimeridiano',
  'irriguardose',
  'occultero',
  'brosce',
  'boli',
  'pellettiera',
  'tronchesina',
  'condebitori',
  'gestatori',
  'tiraloro',
  'lamentela',
  'strisciavano',
  'impazzirono',
  'macinacolori',
  'prescrisse',
  'malauguri',
  'sdoganamento',
  'incestate',
  'prenotandole',
  'costruzione',
  'svigni',
  'insacco',
  'brillamenti',
  'silurasse',
  'macinabilita',
  'interpunzione',
  'tracannasse',
  'luccicammo',
  'piumaccioli',
  'cozzata',
  'squamano',
  'fermezze',
  'stimolerebbe',
  'soletto',
  'motopeschereccio',
  'tupe',
  'rimpolpettati',
  'risoffiano',
  'insusa',
  'frustaio',
  'abitacoli',
  'strutturarono',
  'spaccarono',
  'diabetico',
  'cetriolo',
  'zufolate',
  'scandisce',
  'desiderose',
  'spelleremo',
  'stereovisori',
  'spirometrici',
  'traumatizzare',
  'interessassero',
  'offrirebbe',
  'preesistano',
  'comandate',
  'brindello',
  'profanata',
  'sbracciarti',
  'dongiovannesca',
  'nettarostegio',
  'rassicurasti',
  'infisso',
  'annui',
  'abbellata',
  'pericondrite',
  'cannula',
  'ingloriosi',
  'operai',
  'rimpiattandosi',
  'tonneau',
  'giuri',
  'riprenda',
  'auricolari',
  'sciagurati',
  'lozione',
  'biscrome',
  'riappicicare',
  'arderemo',
  'limnologie',
  'inquirenti',
  'irizza',
  'capezzagna',
  'riquadrate',
  'colpirete',
  'parlino',
  'proctorragia',
  'cominciamo',
  'sospiravi',
  'burlera',
  'deprezzate',
  'montarvi',
  'volumenometro',
  'incavallature',
  'gnomico',
  'datassero',
  'sediaio',
  'micronizzare',
  'nervea',
  'smonetare',
  'rosseggiato',
  'saltabeccavano',
  'stanziero',
  'riscuoterebbe',
  'complichi',
  'contenendo',
  'tascate',
  'strigliano',
  'tempestavamo',
  'cale',
  'risanatrici',
  'dell',
  'italic',
  'scaltrirebbero',
  'dubbiosita',
  'cannette',
  'escursioni',
  'enoftalmo',
  'ribellassi',
  'valetevi',
  'serbasse',
  'prodotto',
  'monodrome',
  'turbosonda',
  'mandargli',
  'riformino',
  'imbizzarrimento',
  'doterei',
  'silvio',
  'abburattature',
  'industrializzare',
  'severo',
  'relegavi',
  'gioivi',
  'premute',
  'rubicondi',
  'furgonato',
  'galvanoplastico',
  'trasferirla',
  'sporcassero',
  'emuliate',
  'scivolo',
  'indebitandosi',
  'sgattaiolarono',
  'riaprireste',
  'partecipate',
  'cinematografia',
  'carpenteria',
  'pestone',
  'rimpinzerei',
  'sdirenati',
  'scodellero',
  'truciderebbe',
  'ricattarvi',
  'piantatela',
  'scolarette',
  'aggiotaggi',
  'riassociarsi',
  'bugno',
  'saldava',
  'ritentive',
  'trovavano',
  'pulcianelle',
  'pneumoencefalo',
  'proustista',
  'rimosso',
  'ulivo',
  'occlusiva',
  'petrarcheggiare',
  'ragusane',
  'rificcano',
  'ganaderia',
  'infornando',
  'ecologico',
  'spompassi',
  'sopravveste',
  'parascolastica',
  'fonemi',
  'spiattellerebbero',
  'sbilancerei',
  'ripubblicassimo',
  'cennamelle',
  'nebulone',
  'rancicavano',
  'riassumersi',
  'soprassedere',
  'impaurite',
  'rullero',
  'adulterai',
  'mitridizzazione',
  'auguravate',
  'spergiurare',
  'giocarsi',
  'calafati',
  'radiologa',
  'trafficai',
  'meloi',
  'speculasse',
  'urie',
  'tropo',
  'didietro',
  'sceleratissimi',
  'tollerati',
  'squalificherai',
  'etrocarpico',
  'residuando',
  'rassomigliano',
  'realistica',
  'annotatori',
  'senior',
  'trasfigurite',
  'scoprirci',
  'prefioriscono',
  'decifriamo',
  'adireremo',
  'modernizzarono',
  'liga',
  'omissis',
  'impuzzolentera',
  'balzassi',
  'spostino',
  'infiammatori',
  'fermatevi',
  'glossine',
  'turgida',
  'incendivo',
  'tarperemmo',
  'determinano',
  'timbro',
  'predato',
  'vedenti',
  'retrotreni',
  'paoline',
  'filerebbe',
  'procelle',
  'lord',
  'sappiatemi',
  'biscugini',
  'sollecitassi',
  'opprimerebbe',
  'irritatori',
  'feudatari',
  'portare',
  'afferrata',
  'libanesizzavano',
  'bagolaro',
  'infossature',
  'tubercolizzassero',
  'minuzioso',
  'rovinii',
  'lavatura',
  'ventate',
  'progestinica',
  'preventivare',
  'sopraffacendole',
  'aquilone',
  'calzature',
  'malintenzionati',
  'subentrata',
  'follicolite',
  'someggiabile',
  'impressionerebbe',
  'inverdirono',
  'skyline',
  'spano',
  'fitogeologia',
  'oppositori',
  'strillavano',
  'chefs',
  'gerontocomi',
  'sbarchiate',
  'pascoliano',
  'riconcessi',
  'rifischio',
  'colerete',
  'immergeremo',
  'tauto',
  'tenenti',
  'trasfigurerebbe',
  'trottatrice',
  'trasmutazioni',
  'scoterebbero',
  'solidifichino',
  'rileverebbero'  
] 


export default function fetchNewWord() {
  let index = Math.floor(Math.random() * (words.length))
  return words[index]
}
// ═══════════════════════════════════════════════════════════════
// XEROX KEYWORD GENERATOR ENGINE — Produces 2000+ Unique Keywords
// ═══════════════════════════════════════════════════════════════

const allAreas = [
  // Main Areas
  'virar', 'virar east', 'virar west', 'vasai', 'vasai east', 'vasai west',
  'nalasopara', 'nalasopara east', 'nalasopara west', 'naigaon', 'naigaon east', 'naigaon west',
  'vasai virar', 'palghar',
  // Sub-Locations
  'global city', 'phoolpada', 'manvelpada', 'narangi bypass', 'kopri', 'bhatpada',
  'agashi', 'arnala', 'bolinj', 'chikhal dongre', 'tirupati nagar',
  'tulinj', 'achole', 'moregaon', 'oswal nagari', 'pelhar', 'alkapuri',
  'sopara', 'nilemore', 'sriprastha',
  'evershine city', 'gokhivare', 'waliv', 'sativali', 'fatherwadi',
  'bhabola', 'manickpur', 'papdy', 'stella', 'vasai fort', 'sun city',
  'juchandra', 'bapane', 'rashmi star city', 'citizen colony',
  'umela', 'kaman', 'mariam nagar',
]

// ── 1. Core Service Terms ──
const serviceTerms = [
  'xerox', 'photocopy', 'print', 'printing', 'print out', 'printout',
  'copy', 'document printing', 'document xerox', 'color print', 'color xerox',
  'color photocopy', 'black white xerox', 'b&w print', 'b&w xerox',
  'black and white print', 'mono print', 'single color print',
]

// ── 2. Paper Sizes ──
const paperSizes = [
  'A4', 'A3', 'A2', 'A1', 'A0', 'jumbo', 'legal size', 'letter size',
  'A5', 'A4 size', 'A3 size', 'large format',
]

// ── 3. Binding & Finishing ──
const bindingTypes = [
  'spiral binding', 'book binding', 'blackbook binding', 'blackbook printing',
  'hard binding', 'soft binding', 'perfect binding', 'wire binding',
  'comb binding', 'thermal binding', 'case binding', 'saddle stitch binding',
  'lamination', 'cold lamination', 'hot lamination', 'matt lamination',
  'glossy lamination', 'pouch lamination',
]

// ── 4. Specific Print Products ──
const printProducts = [
  'visiting card', 'business card', 'id card', 'pvc card', 'smart card',
  'letterhead', 'envelope', 'pamphlet', 'brochure', 'flyer', 'leaflet',
  'poster', 'banner', 'flex', 'sticker', 'label',
  'invoice', 'bill book', 'receipt book', 'challan',
  'wedding card', 'invitation card', 'greeting card',
  'certificate', 'mark sheet', 'report card',
  'resume', 'cv', 'biodata',
  'project file', 'project report', 'thesis', 'dissertation', 'synopsis',
  'assignment', 'notes', 'study material', 'exam form',
  'passport photo', 'photo print', 'canvas print',
  'engineering drawing', 'blueprint', 'architectural drawing',
  'aadhaar card print', 'pan card print', 'voter id print',
  'driving license print', 'ration card print',
  // School & College Document Printing
  'school document print', 'school certificate print', 'school project print',
  'school assignment print', 'school homework print', 'school form print',
  'school admission form print', 'school tc print', 'transfer certificate print',
  'bonafide certificate print', 'leaving certificate print', 'character certificate print',
  'school marksheet print', 'school report card print', 'progress report print',
  'school id card print', 'student id card print', 'school diary print',
  'admit card print', 'hall ticket print', 'exam admit card print',
  'college assignment print', 'college project print', 'college notes print',
  'college form print', 'college admission form print', 'college certificate print',
  'affordable school printing', 'cheap school document print',
  'low price school print', 'budget school printing', 'discount school print',
  'affordable student printing', 'cheap student printing',
  'school document xerox', 'school paper xerox', 'school form xerox',
  'affordable document printing', 'affordable printing for students',
  'cheapest document print', 'low cost document printing',
  'affordable color printing', 'affordable black white print',
  'sasta school print', 'sasta document print',
  'homework print near me', 'school project near me', 'tc print near me',
  'bonafide print near me', 'marksheet print near me', 'admit card print near me',
  'school worksheet print', 'school question paper print', 'sample paper print',
  'ncert book print', 'textbook chapter print', 'school syllabus print',
  'school circular print', 'school notice print', 'parent consent form print',
  'school fee receipt print', 'school application print',
  'college application print', 'scholarship form print', 'entrance exam form print',
  'neet form print', 'jee form print', 'cet form print',
  'competitive exam form print', 'government exam form print',
]

// ── 5. Intent Prefixes ──
const intentPrefixes = [
  'best', 'cheapest', 'cheap', 'affordable', 'low cost', 'low price',
  'nearest', 'closest', 'fastest', 'urgent', 'quick', 'fast',
  'top rated', 'trusted', 'reliable', 'professional', 'quality',
  'verified', 'authorized', 'expert', 'premium', 'budget',
  'same day', 'express', 'instant', 'emergency', 'bulk', 'wholesale',
  'discount', 'offer', 'online', 'digital', 'home delivery',
]

// ── 6. Suffixes (Shop/Service Type) ──
const shopSuffixes = [
  'shop', 'shop near me', 'center', 'centre', 'store', 'service',
  'services', 'provider', 'agency', 'studio', 'hub', 'point',
  'dukaan', 'wala', 'waala',
]

// ── 7. Hindi / Hinglish Search Terms ──
const hindiTerms = [
  'xerox ki dukaan', 'xerox wala', 'xerox waala', 'print wala', 'print waala',
  'xerox kahan milega', 'print kahan hoga', 'print kahan karwaye',
  'sasta xerox', 'sasta print', 'sabse sasta xerox', 'sabse sasta print',
  'sasta xerox kahan milega', 'cheapest xerox kahan hai',
  'ghar pe xerox delivery', 'ghar pe print delivery', 'ghar baithe xerox',
  'xerox chahiye', 'print chahiye', 'urgent print chahiye',
  'print chahiye urgent', 'xerox chahiye urgent',
  'color print kahan hota hai', 'color xerox kahan milega',
  'jumbo xerox kahan milega', 'blackbook kahan banta hai',
  'project kahan print hota hai', 'assignment kahan print karaye',
  'binding kahan hoti hai', 'lamination kahan hoti hai',
  'whatsapp pe pdf bhejo print milega', 'online print order kaise kare',
  'xerox delivery kaise order kare', 'ghar pe print kaise mangaye',
  'sabse accha xerox shop', 'sabse acchi print quality',
  'raat ko open xerox shop', 'sunday open xerox shop',
  'pvc card kahan banta hai', 'smart card kahan milega',
  'visiting card kahan banta hai', 'id card kahan banta hai',
  'poster kahan print hota hai', 'banner kahan banta hai',
  'resume print kahan karaye', 'passport photo kahan milega',
  // School / Student Hindi Terms
  'school ka document kahan print karaye', 'school form kahan print hota hai',
  'school project print kahan karaye', 'school assignment print kahan hoga',
  'homework print kahan karaye', 'school certificate kahan print hoga',
  'tc kahan print karaye', 'bonafide kahan print hoga',
  'marksheet kahan print hogi', 'admit card print kahan karaye',
  'sasta school printing', 'sasta document printing',
  'school ke liye sasta print', 'college ke liye sasta print',
  'bacchon ka document print', 'students ka assignment print',
  'school ka project kahan banta hai', 'affordable school print kahan milega',
  'school form bharne ke liye print', 'admission form print kahan karaye',
]

// ── 8. Long-tail Question Keywords ──
const questionKeywords = [
  'where to get xerox', 'where is the nearest xerox shop',
  'where is the cheapest xerox shop', 'which is the best print shop',
  'how to order xerox online', 'how to order print online',
  'how to get print delivery at home', 'can I get xerox delivery at home',
  'how much does xerox cost', 'how much does color xerox cost',
  'how much does A3 print cost', 'how much does jumbo print cost',
  'how much does lamination cost', 'how much does binding cost',
  'where to print assignment', 'where to print project',
  'where to get blackbook printed', 'where to get thesis printed',
  'where to get visiting card printed', 'where to get id card printed',
  'where to print aadhaar card', 'where to get passport photo',
  'who does jumbo printing', 'who does bulk xerox',
  'which shop does blackbook', 'which shop does spiral binding',
  'what is the cheapest xerox rate', 'what time does xerox shop open',
  'is there any 24 hour xerox shop', 'is there xerox delivery available',
  'best quality print shop', 'best xerox shop for students',
  'best print shop for bulk order', 'cheapest color xerox per page',
  'cheapest black white xerox per page', 'xerox delivery charges',
  'print delivery charges', 'minimum order for print delivery',
  'fastest print delivery service', 'same day printing available',
  // School Document Questions
  'where to print school documents', 'where to print school certificate',
  'where to print school project', 'where to print school assignment',
  'where to get tc printed', 'where to get bonafide printed',
  'where to print marksheet', 'where to print admit card',
  'where to print homework', 'where to print school form',
  'where to get school id card made', 'where to print school report card',
  'affordable school document printing', 'affordable printing for school',
  'cheap school printing near me', 'low cost school printing',
  'budget printing for students', 'affordable document printing near me',
  'school document print charges', 'school xerox charges',
  'how much does school document print cost', 'cheapest school printing',
  'best shop for school printing', 'school print discount',
  'student discount printing near me', 'affordable printing services',
  'where to print ncert pages', 'where to print sample papers',
  'where to print question papers', 'where to print school worksheets',
  'where to print admission form', 'where to print scholarship form',
  'where to print neet form', 'where to print jee form',
  'where to print entrance exam form', 'where to print college application',
  'is school document printing cheap here', 'do they print school documents',
  'can I print school tc here', 'school project printing rate',
  'school assignment printing charges', 'report card print price',
]

// ── 9. Delivery-Specific Keywords ──
const deliveryKeywords = [
  'xerox delivery', 'print delivery', 'doorstep xerox', 'doorstep printing',
  'home delivery printing', 'home delivery xerox', 'print at home delivery',
  'online print order home delivery', 'whatsapp print order',
  'whatsapp xerox order', 'send pdf and get print',
  'send pdf on whatsapp and print', 'upload document and print',
  'email and print', 'pdf to print', 'online xerox order',
  'online print order', 'same day print delivery', 'express print delivery',
  'fastest xerox delivery', 'print pickup and delivery',
  'next day print delivery', 'rush print delivery', 'overnight printing',
  'document delivery service', 'print and deliver',
  'order print online and get delivery', 'print from phone and deliver',
]

// ── GENERATOR FUNCTION ──
export function generateXeroxKeywords(locationName, subLocations = []) {
  const keywords = new Set()
  const loc = locationName?.toLowerCase()

  // ─── Pattern 1: "xerox near me" type (generic) ───
  serviceTerms.forEach(term => {
    keywords.add(`${term} near me`)
    keywords.add(`nearest ${term}`)
  })

  // ─── Pattern 2: "xerox in virar east" (service + location) ───
  if (loc) {
    serviceTerms.forEach(term => {
      keywords.add(`${term} in ${loc}`)
      keywords.add(`${term} ${loc}`)
      keywords.add(`${term} near me ${loc}`)
      keywords.add(`${term} shop ${loc}`)
      keywords.add(`${term} service ${loc}`)
    })
  }

  // ─── Pattern 3: "best xerox in virar" (prefix + service + location) ───
  const topPrefixes = ['best', 'cheapest', 'cheap', 'nearest', 'fastest', 'urgent', 'affordable', 'low cost', 'trusted', 'bulk', 'online', 'discount', 'same day']
  const topServices = ['xerox', 'print', 'printing', 'photocopy', 'color xerox', 'color print']
  if (loc) {
    topPrefixes.forEach(prefix => {
      topServices.forEach(term => {
        keywords.add(`${prefix} ${term} ${loc}`)
        keywords.add(`${prefix} ${term} in ${loc}`)
        keywords.add(`${prefix} ${term} shop ${loc}`)
      })
    })
  }

  // ─── Pattern 4: "A4 xerox virar" (paper + service + location) ───
  if (loc) {
    paperSizes.forEach(size => {
      keywords.add(`${size} xerox ${loc}`)
      keywords.add(`${size} print ${loc}`)
      keywords.add(`${size} xerox near me`)
      keywords.add(`${size} print near me`)
      keywords.add(`${size} photocopy ${loc}`)
      keywords.add(`${size} color print ${loc}`)
    })
  }

  // ─── Pattern 5: Binding & finishing + location ───
  if (loc) {
    bindingTypes.forEach(binding => {
      keywords.add(`${binding} ${loc}`)
      keywords.add(`${binding} near me`)
      keywords.add(`${binding} in ${loc}`)
      keywords.add(`cheap ${binding} ${loc}`)
    })
  }

  // ─── Pattern 6: Print products + location ───
  if (loc) {
    printProducts.forEach(product => {
      keywords.add(`${product} ${loc}`)
      keywords.add(`${product} near me`)
      keywords.add(`${product} in ${loc}`)
      keywords.add(`${product} printing ${loc}`)
    })
  }

  // ─── Pattern 7: Shop suffixes (xerox shop virar, xerox center virar) ───
  if (loc) {
    const coreTerms = ['xerox', 'print', 'photocopy', 'color print']
    shopSuffixes.forEach(suffix => {
      coreTerms.forEach(term => {
        keywords.add(`${term} ${suffix} ${loc}`)
        keywords.add(`${term} ${suffix} in ${loc}`)
      })
    })
  }

  // ─── Pattern 8: Sub-location keywords ───
  const allSubLocs = subLocations.length > 0 ? subLocations : []
  allSubLocs.forEach(sub => {
    const subLow = sub.toLowerCase()
    keywords.add(`xerox in ${subLow}`)
    keywords.add(`xerox ${subLow}`)
    keywords.add(`print shop ${subLow}`)
    keywords.add(`printing ${subLow}`)
    keywords.add(`xerox delivery ${subLow}`)
    keywords.add(`cheapest xerox ${subLow}`)
    keywords.add(`color print ${subLow}`)
    keywords.add(`photocopy ${subLow}`)
    keywords.add(`xerox shop ${subLow}`)
    keywords.add(`xerox near ${subLow}`)
    keywords.add(`nearest xerox ${subLow}`)
    keywords.add(`blackbook printing ${subLow}`)
    keywords.add(`lamination ${subLow}`)
    keywords.add(`spiral binding ${subLow}`)
    keywords.add(`A4 xerox ${subLow}`)
    keywords.add(`jumbo xerox ${subLow}`)
    keywords.add(`pvc card ${subLow}`)
    keywords.add(`visiting card ${subLow}`)
    keywords.add(`passport photo ${subLow}`)
    keywords.add(`print delivery ${subLow}`)
    keywords.add(`school document print ${subLow}`)
    keywords.add(`affordable printing ${subLow}`)
    keywords.add(`school project print ${subLow}`)
  })

  // ─── Pattern 8b: School Document + Location ───
  if (loc) {
    const schoolDocs = [
      'school document print', 'school certificate print', 'school project print',
      'school assignment print', 'homework print', 'school form print',
      'tc print', 'transfer certificate print', 'bonafide certificate print',
      'leaving certificate print', 'marksheet print', 'report card print',
      'admit card print', 'hall ticket print', 'school id card print',
      'college project print', 'college notes print', 'college form print',
      'school worksheet print', 'question paper print', 'sample paper print',
      'ncert book print', 'school syllabus print', 'admission form print',
      'scholarship form print', 'entrance exam form print',
      'neet form print', 'jee form print', 'cet form print',
    ]
    schoolDocs.forEach(doc => {
      keywords.add(`${doc} ${loc}`)
      keywords.add(`${doc} in ${loc}`)
      keywords.add(`${doc} near me`)
      keywords.add(`affordable ${doc} ${loc}`)
      keywords.add(`cheap ${doc} ${loc}`)
      keywords.add(`cheapest ${doc} near me`)
    })
  }

  // ─── Pattern 9: Hindi / Hinglish keywords ───
  hindiTerms.forEach(term => keywords.add(term))
  if (loc) {
    keywords.add(`xerox wala ${loc}`)
    keywords.add(`xerox dukaan ${loc}`)
    keywords.add(`print wala ${loc}`)
    keywords.add(`sasta xerox ${loc}`)
    keywords.add(`sasta print ${loc}`)
    keywords.add(`sabse sasta xerox ${loc}`)
    keywords.add(`ghar pe xerox delivery ${loc}`)
    keywords.add(`xerox chahiye ${loc}`)
    keywords.add(`color print kahan hota hai ${loc}`)
  }

  // ─── Pattern 10: Question keywords + location ───
  questionKeywords.forEach(q => {
    keywords.add(q)
    if (loc) {
      keywords.add(`${q} in ${loc}`)
      keywords.add(`${q} ${loc}`)
    }
  })

  // ─── Pattern 11: Delivery keywords + location ───
  deliveryKeywords.forEach(dk => {
    keywords.add(dk)
    if (loc) {
      keywords.add(`${dk} ${loc}`)
      keywords.add(`${dk} in ${loc}`)
    }
  })

  // ─── Pattern 12: Brand keywords ───
  keywords.add('suhana xerox delivery')
  keywords.add('suhana print shop')
  keywords.add('suhana service center xerox')
  keywords.add('suhana service centre printing')
  keywords.add('suhana printing virar')
  keywords.add('suhana digital print')
  if (loc) {
    keywords.add(`suhana xerox ${loc}`)
    keywords.add(`suhana print ${loc}`)
    keywords.add(`suhana service center ${loc}`)
    keywords.add(`suhana printing ${loc}`)
    keywords.add(`suhana service centre ${loc}`)
  }

  // ─── Pattern 13: Cross-area keywords ───
  const nearbyAreas = ['virar', 'vasai', 'nalasopara', 'naigaon', 'vasai virar', 'palghar']
  nearbyAreas.forEach(area => {
    keywords.add(`xerox in ${area}`)
    keywords.add(`print shop ${area}`)
    keywords.add(`xerox delivery ${area}`)
    keywords.add(`cheapest xerox ${area}`)
    keywords.add(`printing services ${area}`)
  })

  return [...keywords]
}

// Pre-built keywords for the MAIN xerox page (no specific location)
export function generateMainXeroxKeywords() {
  const keywords = new Set()

  // All generic "near me"
  serviceTerms.forEach(term => {
    keywords.add(`${term} near me`)
    keywords.add(`nearest ${term}`)
    keywords.add(`${term} shop near me`)
  })

  // All areas
  allAreas.forEach(area => {
    keywords.add(`xerox in ${area}`)
    keywords.add(`xerox ${area}`)
    keywords.add(`print shop ${area}`)
    keywords.add(`printing ${area}`)
    keywords.add(`photocopy ${area}`)
    keywords.add(`cheapest xerox ${area}`)
    keywords.add(`xerox delivery ${area}`)
    keywords.add(`color print ${area}`)
    keywords.add(`xerox shop ${area}`)
    keywords.add(`best xerox ${area}`)
    keywords.add(`fast xerox ${area}`)
    keywords.add(`bulk xerox ${area}`)
    keywords.add(`blackbook printing ${area}`)
    keywords.add(`lamination ${area}`)
    keywords.add(`binding ${area}`)
    keywords.add(`pvc card ${area}`)
    keywords.add(`visiting card ${area}`)
  })

  // Paper sizes generic
  paperSizes.forEach(size => {
    keywords.add(`${size} xerox near me`)
    keywords.add(`${size} print near me`)
    keywords.add(`${size} photocopy near me`)
  })

  // All binding near me
  bindingTypes.forEach(b => { keywords.add(`${b} near me`); keywords.add(b) })

  // All products near me
  printProducts.forEach(p => { keywords.add(`${p} near me`); keywords.add(`${p} printing near me`) })

  // All intent combos
  intentPrefixes.forEach(prefix => {
    keywords.add(`${prefix} xerox near me`)
    keywords.add(`${prefix} print shop near me`)
    keywords.add(`${prefix} xerox shop near me`)
    keywords.add(`${prefix} printing near me`)
    keywords.add(`${prefix} photocopy near me`)
  })

  // Hindi
  hindiTerms.forEach(t => keywords.add(t))

  // Questions
  questionKeywords.forEach(q => keywords.add(q))

  // Delivery
  deliveryKeywords.forEach(d => keywords.add(d))

  // Brand
  keywords.add('suhana xerox delivery')
  keywords.add('suhana print shop')
  keywords.add('suhana service center xerox')
  keywords.add('suhana service centre printing')
  keywords.add('suhana printing virar')

  return [...keywords]
}

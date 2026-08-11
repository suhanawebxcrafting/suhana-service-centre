export const categories = [
  { id: 'identity', label: 'Identity & Govt', icon: 'Contact', color: 'blue', bgImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop' },
  { id: 'passport', label: 'Passport', icon: 'Globe', color: 'indigo', bgImage: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=800&auto=format&fit=crop' },
  { id: 'banking', label: 'Banking & Finance', icon: 'Landmark', color: 'green', bgImage: 'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=800&auto=format&fit=crop' },
  { id: 'certificates', label: 'Certificates', icon: 'FileBadge', color: 'yellow', bgImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop' },
  { id: 'online', label: 'Online Services', icon: 'Globe2', color: 'cyan', bgImage: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop' },
  { id: 'education', label: 'Education', icon: 'GraduationCap', color: 'purple', bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop' },
  { id: 'printing', label: 'Printing & Digital', icon: 'Printer', color: 'pink', bgImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop' },
  { id: 'other', label: 'Other Services', icon: 'Settings2', color: 'orange', bgImage: 'https://images.unsplash.com/photo-1540910419892-f0c74b0e53b3?q=80&w=800&auto=format&fit=crop' },
  { id: 'smartcard', label: 'Smart Card', icon: 'CreditCard', color: 'red', bgImage: 'https://images.unsplash.com/photo-1633155545258-299965d2124e?q=80&w=800&auto=format&fit=crop' },
];

export const services = [
  // ─── A. Identity & Government ───
  {
    id: 1, slug: 'aadhaar-new-registration', category: 'identity',
    name: 'Aadhaar Card New Registration', icon: 'Fingerprint',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Aadhaar_Logo.svg/512px-Aadhaar_Logo.svg.png',
    dummyImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&q=80&w=400',
    description: 'Looking to apply for a new Aadhaar card in Virar? We provide hassle-free, fast, and secure new Aadhaar registration services. Aadhaar is a mandatory 12-digit unique identity number issued by UIDAI for Indian residents. Visit our Suhana Service Center for expert assistance in documentation and biometric capturing.',
    documentsRequired: [
      'Proof of Identity (POI): Passport / PAN Card / Voter ID / Ration Card / Driving License',
      'Proof of Address (POA): Electricity Bill / Water Bill / Bank Passbook / Rent Agreement',
      'Date of Birth Proof (DOB): Birth Certificate / SSLC Marksheet / Valid Passport',
      'Head of Family (HoF) based enrolment: If you don\'t have documents, you can apply using HoF\'s Aadhaar.'
    ],
    eligibility: 'Every resident of India (including NRIs, senior citizens, and newborn infants) can apply for a new Aadhaar card.',
    processSteps: [
      'Step 1: Visit our CSC Aadhaar Center in Virar with your original identity and address proof documents.',
      'Step 2: Our expert executive will fill out your Aadhaar Enrolment Form (Form 5 for Adults, Form 6 for Kids).',
      'Step 3: Capturing of Biometric data (fingerprints, iris scan) and a live facial photograph.',
      'Step 4: Receive your acknowledgment slip containing the 14-digit Enrolment ID (EID) to track status.',
      'Step 5: Track online; physical Aadhaar will be delivered via India Post (usually within 60-90 days).'
    ],
    processingTime: '60–90 days for Physical Card | 10–15 days for e-Aadhaar download',
    charges: 'FREE (First-time Aadhaar enrolment is completely free of charge as per UIDAI guidelines)',
    notes: 'Important Note: Biometrics for children under 5 years are not captured. Parents must provide their Aadhaar for linkage. Mandatory biometric updates are required when the child reaches age 5 and 15.',
    keywords: [
      'New Aadhaar Card Virar',
      'Aadhaar Registration near me',
      'Aadhaar center Virar East',
      'Apply new aadhaar online',
      'UIDAI enrollment Virar',
      'Aadhaar documentation help',
      'Child aadhaar card registration'
    ],
    faqs: [
      { q: 'Is it mandatory to link my mobile number during new Aadhaar registration?', a: 'Yes, providing a valid mobile number is highly recommended as it is required for downloading e-Aadhaar, OTP verification, and accessing online UIDAI services.' },
      { q: 'Can I apply for an Aadhaar card for my newborn baby?', a: 'Yes, you can apply for a Baal Aadhaar for your newborn baby. You only need the child\'s Birth Certificate and one of the parent\'s Aadhaar card.' },
      { q: 'What if I don\'t have any address proof in my name?', a: 'If you don\'t have address proof, you can still apply using the Head of Family (HoF) based enrolment process or by obtaining a certificate from an MP/MLA/Gazetted Officer.' },
      { q: 'How long does it take to get the Aadhaar card?', a: 'Usually, the e-Aadhaar is generated within 10 to 15 days, which you can download online. The physical PVC/paper card is delivered by India Post in 60 to 90 days.' }
    ]
  },
  {
    id: 2, slug: 'aadhaar-update', category: 'identity',
    name: 'Aadhaar Card Update (Demographic & Biometric)', icon: 'Fingerprint',
    description: 'Need to change your name, address, or mobile number on your Aadhaar? Our Aadhaar update services in Virar provide quick and secure demographic and biometric updates. Whether it\'s fixing a typo, updating your photo, or doing mandatory child biometrics, we ensure a smooth UIDAI process.',
    documentsRequired: [
      'Original Aadhaar Card (Must)',
      'For Name/DOB Change: Passport, PAN, Birth Certificate, or SSLC Marksheet',
      'For Address Change: Utility Bill (last 3 months), Bank Passbook, Rent Agreement, or Voter ID',
      'For Mobile/Email Update: No documents required, just biometric verification at the center'
    ],
    eligibility: 'Any existing Aadhaar holder who needs to correct errors, update outdated information, or perform mandatory child biometric updates.',
    processSteps: [
      'Step 1: Visit our Virar CSC Center with your Original Aadhaar and required proof for the specific update.',
      'Step 2: Fill out the Aadhaar Correction/Update Form specifying the exact changes.',
      'Step 3: Provide biometric verification (fingerprint/iris) at our center to authorize the update.',
      'Step 4: Pay the standard UIDAI update fee and receive your acknowledgment receipt with an Update Request Number (URN).',
      'Step 5: Track your update status online. The updated Aadhaar can be downloaded (e-Aadhaar) once approved.'
    ],
    processingTime: 'Usually 7–15 days (Max 30 days as per UIDAI norms)',
    charges: '₹50 for Demographic Update | ₹100 for Biometric Update (UIDAI standard fees)',
    notes: 'Important: Mobile Number and Email ID updates do not require any documents. Mandatory Biometric Updates for children at age 5 and 15 are free of cost.',
    keywords: [
      'Aadhaar update Virar',
      'Change name in Aadhaar',
      'Aadhaar address change near me',
      'Link mobile number to Aadhaar Virar',
      'Aadhaar biometric update center',
      'Aadhaar correction online',
      'Child biometric update'
    ],
    faqs: [
      { q: 'Can I update my mobile number in Aadhaar online?', a: 'No, updating or linking a new mobile number to your Aadhaar card requires biometric authentication. You must visit an authorized Aadhaar center like ours in Virar.' },
      { q: 'How many times can I change my Name and Date of Birth?', a: 'As per UIDAI guidelines, you can update your Name twice in a lifetime, and your Date of Birth only once.' },
      { q: 'What is a Mandatory Biometric Update (MBU)?', a: 'Children enrolled before the age of 5 must update their biometrics (fingerprints, iris, photo) when they turn 5 and again at age 15. This is mandatory to keep the Aadhaar active.' },
      { q: 'Do I need documents for a photo change?', a: 'No documents are required to update your photograph or biometrics on your Aadhaar card. Just bring your original Aadhaar card to the center.' }
    ]
  },
  {
    id: 3, slug: 'e-aadhaar-download', category: 'identity',
    name: 'e-Aadhaar Download & Print', icon: 'Download',
    description: 'Lost your Aadhaar card or need a digital copy urgently? We offer instant e-Aadhaar download and high-quality color printing services in Virar. The e-Aadhaar is a digitally signed and password-protected electronic copy of your Aadhaar which is equally valid as the physical card for all official purposes.',
    documentsRequired: [
      'Aadhaar Number OR 14-digit Enrolment ID (EID)',
      'Registered Mobile Number (Must be active to receive OTP)',
      'Alternatively: Virtual ID (VID)'
    ],
    eligibility: 'Any Aadhaar holder whose mobile number is registered and linked with their Aadhaar.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar and provide your Aadhaar Number or Enrolment ID.',
      'Step 2: An OTP will be sent instantly to your Aadhaar-linked registered mobile number.',
      'Step 3: Provide the OTP to our executive for secure UIDAI authentication.',
      'Step 4: We will download the password-protected e-Aadhaar PDF.',
      'Step 5: Get an instant high-quality color printout or PVC card (optional) of your downloaded Aadhaar.'
    ],
    processingTime: 'Instant (Takes just 2 to 5 minutes)',
    charges: '₹30 for Download & Normal Color Print | Premium PVC printing available on request',
    notes: 'Important: To open the e-Aadhaar PDF file, the password is a combination of the first 4 letters of your name (in CAPITAL letters) followed by your Year of Birth (e.g., if name is SURESH and born in 1990, password is SURE1990).',
    keywords: [
      'e-Aadhaar download Virar',
      'Download Aadhaar card online',
      'Print Aadhaar card near me',
      'Aadhaar PDF password',
      'Get lost Aadhaar card',
      'UIDAI e-Aadhaar print',
      'Aadhaar OTP download'
    ],
    faqs: [
      { q: 'Is the e-Aadhaar printout valid everywhere?', a: 'Yes! As per the Aadhaar Act, e-Aadhaar is digitally signed by UIDAI and is equally valid as the original physical Aadhaar card for all official and non-official purposes.' },
      { q: 'Can I download my Aadhaar if my mobile number is not linked?', a: 'No, you cannot download e-Aadhaar without a registered mobile number as the UIDAI system requires OTP verification. You must first update your mobile number by visiting an Aadhaar center.' },
      { q: 'I forgot my Aadhaar number, how can I download it?', a: 'If your mobile number is registered, we can help you retrieve your lost Aadhaar number (UID) or Enrolment ID (EID) by sending an OTP to your phone, after which the card can be downloaded.' },
      { q: 'What is the password for the downloaded e-Aadhaar PDF?', a: 'The password is 8 characters long: the first 4 letters of your name in CAPITAL letters, followed by your 4-digit Year of Birth (YYYY).' }
    ]
  },
  {
    id: 4, slug: 'pvc-aadhaar-card', category: 'identity',
    name: 'PVC Aadhaar Card Order', icon: 'CreditCard',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_India.svg/512px-Flag_of_India.svg.png',
    dummyImage: 'https://images.unsplash.com/photo-1544866092-194121a9953d?auto=format&fit=crop&q=80&w=400',
    description: 'Tired of paper Aadhaar cards getting damaged? Order the official UIDAI PVC Aadhaar Card! It is a highly durable, credit-card-sized smart card with modern security features like a secure QR code, hologram, micro text, and ghost image. We help you place the order quickly and securely in Virar.',
    documentsRequired: [
      'Aadhaar Number or 14-digit Enrolment ID (EID)',
      'Mobile Number (Registered OR Non-Registered both work!)'
    ],
    eligibility: 'Any Aadhaar holder can order a PVC card. Unlike other services, you do NOT need a registered mobile number to order a PVC Aadhaar Card.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar with your Aadhaar number.',
      'Step 2: We will enter your Aadhaar details on the UIDAI portal.',
      'Step 3: Verification via OTP (OTP can be sent to ANY mobile number if your number is not linked).',
      'Step 4: Payment of the official UIDAI fee.',
      'Step 5: Receive an SRN (Service Request Number) to track your delivery status.',
      'Step 6: The PVC card will be printed and delivered directly to your registered address via Speed Post.'
    ],
    processingTime: 'Delivered to your home in 5 to 15 working days by India Post',
    charges: '₹50 (Official UIDAI Fee including GST & Speed Post charges) + Nominal Service Fee',
    notes: 'Important: The PVC card is only delivered to the address printed on your Aadhaar card. If you want to change the delivery address, you must update your Aadhaar address first.',
    keywords: [
      'Order PVC Aadhaar Card',
      'Plastic Aadhaar Card Virar',
      'Smart Aadhaar Card order',
      'Aadhaar PVC card near me',
      'UIDAI PVC card print',
      'Original PVC Aadhaar apply'
    ],
    faqs: [
      { q: 'Can I order a PVC Aadhaar card if my mobile number is not registered?', a: 'Yes! UIDAI allows you to order a PVC Aadhaar card using any alternate or non-registered mobile number to receive the OTP for ordering.' },
      { q: 'What are the security features of the official PVC Aadhaar Card?', a: 'The official PVC card contains advanced security features such as a secure QR Code, Hologram, Ghost image, Guilloche Pattern, and Micro text, making it highly secure and tamper-proof.' },
      { q: 'Where will the PVC Aadhaar card be delivered?', a: 'The card will be delivered exclusively to the residential address registered in your Aadhaar data via India Post (Speed Post). It cannot be delivered to our center or any other custom address.' },
      { q: 'How can I track the delivery status of my PVC card?', a: 'After placing the order, you will receive a Service Request Number (SRN). You can track your order status on the UIDAI website using this SRN and your Aadhaar number.' }
    ]
  },
  {
    id: 5, slug: 'pan-card-new', category: 'identity',
    name: 'PAN Card New Apply', icon: 'IdCard',
    description: 'Apply for a new Permanent Account Number (PAN) card quickly and hassle-free in Virar. A PAN card is mandatory for opening a bank account, filing Income Tax Returns, buying property, and making high-value transactions. We provide both physical form filling and fast track e-KYC (Aadhaar OTP based) PAN card services.',
    documentsRequired: [
      'Aadhaar Card (Highly Recommended: serves as ID, Address, and DOB proof)',
      'Alternatively for Identity/Address: Voter ID, Passport, or Driving License',
      'Date of Birth Proof: Birth Certificate or SSC Marksheet (if Aadhaar is not available)',
      'Two Recent Passport-size Photographs (Required for physical application)'
    ],
    eligibility: 'Any Indian Citizen, including minors (students/children), can apply. Companies, Trusts, and NRIs are also eligible.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar with your original Aadhaar Card.',
      'Step 2: Decide whether you want Instant PAN (e-KYC via OTP) or Physical PAN (Form 49A with Photo/Signature).',
      'Step 3: Our expert will fill out your application accurately on the NSDL or UTIITSL portal.',
      'Step 4: Pay the official fee and receive your 15-digit Acknowledgment Number to track your application.',
      'Step 5: e-PAN is delivered to your email quickly, and the physical PVC PAN card is dispatched to your home address.'
    ],
    processingTime: 'e-PAN: 1 to 3 Days | Physical PAN Card: 10 to 15 Days (via Speed Post)',
    charges: '₹107 (Official Govt Fee) + Nominal Consulting/Service Charges',
    notes: 'Minor PAN Card (Under 18): A minor cannot sign the PAN form. It must be signed by the Father or Mother (Representative Assessee). The minor\'s Aadhaar and the parent\'s Aadhaar are both required.',
    keywords: [
      'New PAN Card apply Virar',
      'Apply PAN card near me',
      'Instant e-PAN card agent',
      'Minor PAN card apply online',
      'NSDL PAN card application',
      'UTI PAN card center Virar',
      'Fast PAN card service'
    ],
    faqs: [
      { q: 'Can a minor (under 18 years) apply for a PAN card?', a: 'Yes, minors can apply for a PAN card. However, a parent must act as the Representative Assessee. The parent\'s Aadhaar card is required along with the minor\'s Aadhaar, and the parent will sign the application form.' },
      { q: 'Is it mandatory to link Aadhaar with PAN during application?', a: 'Yes! As per the Income Tax Department rules, quoting your Aadhaar number is mandatory for applying for a new PAN card. They are automatically linked upon generation.' },
      { q: 'What is the difference between e-KYC PAN and Physical Form PAN?', a: 'e-KYC PAN uses your Aadhaar data and Aadhaar photo directly (fast process via OTP). Physical Form PAN takes slightly longer but allows you to upload a custom photograph and your actual physical signature.' },
      { q: 'How will I receive my new PAN card?', a: 'First, a digital copy (e-PAN) will be sent to your registered email address within a few days. The physical PVC card will be dispatched via India Post to your home address.' }
    ]
  },
  {
    id: 6, slug: 'pan-card-correction', category: 'identity',
    name: 'PAN Card Correction / Update', icon: 'RefreshCcw',
    description: 'Correct or update details on your existing PAN card such as name, date of birth, father\'s name, address, or photo.',
    documentsRequired: ['Existing PAN Card', 'Supporting document for correction', 'Proof of Identity and Address', 'Passport-size Photograph'],
    eligibility: 'Existing PAN card holders requiring corrections.',
    processSteps: ['Fill PAN correction form', 'Attach supporting documents', 'Submit at our center', 'Receive acknowledgment', 'Updated PAN card delivered'],
    processingTime: '15–20 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 7, slug: 'instant-epan', category: 'identity',
    name: 'Instant e-PAN Apply', icon: 'Zap',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Emblem_of_India.svg/512px-Emblem_of_India.svg.png',
    dummyImage: 'https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&q=80&w=400',
    description: 'Need a PAN card urgently for a bank account or financial transaction? Apply for an Instant e-PAN through our fast-track e-KYC service in Virar. This paperless process uses your Aadhaar details to generate a fully valid digital PAN card in just 10 minutes!',
    documentsRequired: [
      'Aadhaar Number (Your Aadhaar must have your full date of birth - DD/MM/YYYY)',
      'Registered Mobile Number (Must be active for Aadhaar OTP verification)',
      'No physical documents, photos, or signatures required!'
    ],
    eligibility: 'Any individual Indian citizen who is 18 years or older, holds a valid Aadhaar card with a linked mobile number, and has NEVER been allotted a PAN card before.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar with your Aadhaar number and registered mobile.',
      'Step 2: We will enter your Aadhaar details on the Income Tax e-Filing portal.',
      'Step 3: Verification is done securely via an Aadhaar OTP sent to your phone.',
      'Step 4: Your demographic details and photo are auto-fetched directly from the UIDAI database.',
      'Step 5: Within 10 to 15 minutes, your e-PAN PDF will be generated and ready for download & printing.'
    ],
    processingTime: 'Instant (Generated within 10-15 minutes)',
    charges: '₹50 (Service & Color Printout Charges)',
    notes: 'Important: The Instant e-PAN is completely paperless and uses the photo printed on your Aadhaar card. It does not have a scanned signature (it comes with a blank space for you to sign with a pen). A physical PVC PAN card is NOT automatically sent in this free process; it must be ordered separately later if needed.',
    keywords: [
      'Instant e-PAN apply Virar',
      '10 minute PAN card',
      'Free e-PAN card download',
      'Urgent PAN card apply',
      'Aadhaar OTP PAN card',
      'Paperless PAN card near me'
    ],
    faqs: [
      { q: 'Is the Instant e-PAN equally valid as a physical PAN card?', a: 'Yes! The Instant e-PAN is digitally signed by the Income Tax Department and holds the exact same legal value as a physical PAN card for all purposes (banking, ITR, etc.).' },
      { q: 'Will I get a physical PVC PAN card at my home address?', a: 'No, the Instant e-PAN process only generates a digital PDF file. If you want a physical PVC card, you have to place a separate "Reprint PAN Card" order on the NSDL/UTI portal later by paying ₹50.' },
      { q: 'Can minors apply for an Instant e-PAN?', a: 'No. The Instant e-PAN facility is only available for adult individuals (18 years and above). Minors must apply through the regular Form 49A process with parental signature.' },
      { q: 'Why does my e-PAN not have my signature on it?', a: 'Because the Instant e-PAN is purely Aadhaar-based and paperless, it fetches your photo from Aadhaar but leaves the signature box blank. You can simply sign the printed copy with a black/blue pen, or update the PAN later to add a digital signature.' }
    ]
  },
  {
    id: 8, slug: 'voter-id-new', category: 'identity',
    name: 'Voter ID New Registration', icon: 'Vote',
    description: 'Turned 18 and want to exercise your right to vote? Apply for a new Voter ID card (EPIC) easily with our assistance in Virar. A Voter ID is not just for elections; it is one of the most powerful and universally accepted Proof of Identity and Address in India. We help you fill Form 6 accurately and submit it online.',
    documentsRequired: [
      'Age Proof: Birth Certificate, 10th/12th Marksheet, PAN Card, or Aadhaar',
      'Address Proof: Aadhaar Card, Electricity Bill, Water Bill, or Indian Passport',
      'Recent Passport-size Photograph (Color with White Background)',
      'Relative\'s Voter ID (Optional but recommended for faster processing: Father/Mother/Husband)'
    ],
    eligibility: 'Must be an Indian Citizen. Must have attained the age of 18 years on the qualifying date (usually 1st January of the year). Must be an ordinary resident of the polling area.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar with your Age and Address proofs.',
      'Step 2: We will fill out Form 6 (Application for New Voter Registration) on the Election Commission (ECI) portal.',
      'Step 3: Upload your scanned documents and passport-size photo securely.',
      'Step 4: Receive a Reference Number (ACK number) to track your application status online.',
      'Step 5: The Booth Level Officer (BLO) may verify your address.',
      'Step 6: Once approved, the Voter ID card is dispatched via India Post to your address.'
    ],
    processingTime: 'Approvals take 30 to 45 Days | Delivery depends on India Post',
    charges: 'Nominal Consulting/Form Filling Charges (Voter ID itself is free from ECI)',
    notes: 'Important: Voter ID applications are heavily processed during election seasons, so it is highly recommended to apply well in advance of any upcoming elections to ensure you get your card on time.',
    keywords: [
      'New Voter ID apply Virar',
      'Election card registration',
      'Apply EPIC card near me',
      'Form 6 voter ID online',
      'Voter card agent Virar',
      'Get new voting card'
    ],
    faqs: [
      { q: 'Can I apply for a Voter ID if I don\'t have an Aadhaar card?', a: 'Yes! While Aadhaar is highly recommended, it is not strictly mandatory. You can use other documents like a Birth Certificate for Age Proof and an Electricity Bill or Passport for Address Proof.' },
      { q: 'What is Form 6?', a: 'Form 6 is the official application form mandated by the Election Commission of India (ECI) for the registration of new voters who have just turned 18 or are registering for the first time.' },
      { q: 'Will someone visit my house for verification?', a: 'Yes, in most cases, the local Booth Level Officer (BLO) will visit the residential address you provided to verify that you actually live there before approving your Voter ID.' },
      { q: 'How do I download a digital copy of my Voter ID?', a: 'Once your application is approved and an EPIC number is generated, you can download the digital version (e-EPIC) online using your registered mobile number.' }
    ]
  },
  {
    id: 9, slug: 'voter-id-correction', category: 'identity',
    name: 'Voter ID Correction / Address Change', icon: 'ClipboardEdit',
    description: 'Got married and need to change your surname? Shifted to a new house in Virar? Or maybe there\'s a spelling mistake in your name? We provide fast and reliable Voter ID Correction and Address Change services. We accurately file Form 8 on the NVSP/ECI portal to get your details updated on your EPIC card.',
    documentsRequired: [
      'Original Voter ID Card OR EPIC Number',
      'For Name/DOB/Photo Correction: Aadhaar Card, PAN Card, 10th Marksheet, or Passport',
      'For Address Change: Latest Electricity Bill, Gas Book, Aadhaar Card, or Registered Rent Agreement',
      'For Marriage Name Change: Marriage Certificate + Husband\'s ID Proof'
    ],
    eligibility: 'Any existing Voter ID (EPIC) holder who needs to rectify errors in their details, update their residential address, or replace an old black-and-white photo with a new color photo.',
    processSteps: [
      'Step 1: Bring your existing Voter ID and the correct supporting document to our Virar center.',
      'Step 2: We will fill out Form 8 (Application for Correction of Particulars) on the official Election portal.',
      'Step 3: Securely upload your correct documents and submit the application.',
      'Step 4: You will receive a Reference Number to track the status of your correction.',
      'Step 5: The BLO may verify the changes (especially for address changes).',
      'Step 6: The updated Voter ID is dispatched to your registered address via India Post.'
    ],
    processingTime: 'Usually takes 20 to 45 Days depending on BLO verification',
    charges: 'Nominal Consulting & Application Filing Fee',
    notes: 'Important Note: If you are shifting from one Assembly Constituency to another (e.g., from Nalasopara to Virar), the process is considered "Shifting of Residence" but is also done using Form 8.',
    keywords: [
      'Voter ID correction Virar',
      'Change address in voter card',
      'Form 8 voter ID',
      'Name change in election card',
      'Update photo in voter ID',
      'EPIC card correction'
    ],
    faqs: [
      { q: 'Which form is used for correcting mistakes in a Voter ID?', a: 'Form 8 is the official form used for correcting particulars like Name, Date of Birth, Age, Gender, Photo, and Address in your existing Voter ID.' },
      { q: 'I moved to a different city. How can I transfer my Voter ID?', a: 'You need to file Form 8 for "Shifting of Residence" and provide your new address proof. Your EPIC number remains the same, but your polling booth and constituency will be updated to your new area.' },
      { q: 'Can I change my black-and-white photo to a color photo?', a: 'Yes! You can apply for a photo update using Form 8. You just need to provide a recent passport-size color photograph with a white background.' },
      { q: 'How can I check if my correction was approved?', a: 'After we submit your Form 8, you will get a Reference ID. You can use this ID on the NVSP/ECI website under "Track Application Status" to see if your correction is approved by the BLO/ERO.' }
    ]
  },
  {
    id: 10, slug: 'voter-id-download', category: 'identity',
    name: 'Voter ID Download & Print', icon: 'Smartphone',
    description: 'Lost your Voter ID card or need an urgent copy for official work? We provide instant digital Voter ID (e-EPIC) download and premium color printing services. e-EPIC is a secure PDF version of your EPIC card issued by the Election Commission of India, which is equally valid as the physical card.',
    documentsRequired: [
      'Voter ID Number (EPIC Number) OR Form 6 Reference Number',
      'Registered Mobile Number (Must be active to receive OTP from ECI portal)'
    ],
    eligibility: 'Any registered voter whose mobile number is uniquely linked to their Voter ID record in the electoral roll.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar and provide your EPIC Number or Form Reference Number.',
      'Step 2: An OTP will be triggered to your registered mobile number.',
      'Step 3: Provide the OTP to our executive for secure portal login.',
      'Step 4: The e-EPIC PDF is instantly downloaded from the Voters Service Portal.',
      'Step 5: Get an instant high-quality color printout or a PVC smart card copy (optional).'
    ],
    processingTime: 'Instant (Takes 2 to 5 minutes)',
    charges: '₹30 for Download & Normal Color Print | Premium PVC printing available on request',
    notes: 'Important: If your mobile number is not registered or is registered with multiple family members, you will not be able to download the e-EPIC. You must first update your unique mobile number using Form 8.',
    keywords: [
      'Voter ID download Virar',
      'e-EPIC download online',
      'Print lost voter ID',
      'Election card download near me',
      'Voter card print out',
      'Duplicate voter ID'
    ],
    faqs: [
      { q: 'Is the printed e-EPIC valid as an original document?', a: 'Yes! The e-EPIC is a secure, digitally signed PDF generated by the Election Commission of India. It has a secure QR code and is equally valid as the original PVC/paper Voter ID for voting and ID proof purposes.' },
      { q: 'Why is it saying my mobile number is not registered?', a: 'To download a Voter ID, your mobile number must be uniquely linked to only YOUR voter record. If your number is linked to your parents or spouse as well, the system will block the download. You need to update a unique number using Form 8 first.' },
      { q: 'I forgot my Voter ID number. Can you help me download it?', a: 'Yes! If you provide your exact Name, Father\'s Name, Age, and State/Constituency, we can search the Electoral Roll online to find your EPIC number, and then proceed with the download.' },
      { q: 'Can I download the Voter ID immediately after applying?', a: 'No, you can only download the e-EPIC after your Form 6 application is approved by the ERO and an EPIC number is officially generated.' }
    ]
  },

  // ─── B. Passport Services ───
  {
    id: 11, slug: 'passport-new', category: 'passport',
    name: 'Passport New Apply', icon: 'Book',
    description: 'Planning to travel abroad? Apply for a Fresh Indian Passport with our expert assistance in Virar. We provide end-to-end guidance—from filling the complex online application accurately, booking the earliest PSK appointment, to preparing your document file so you don\'t face any rejections at the passport office.',
    documentsRequired: [
      'Aadhaar Card (Must have full Date of Birth and be linked to your mobile)',
      'PAN Card or Voter ID (As additional identity proof)',
      'Education Proof: 10th Marksheet / Degree (Required for Non-ECR/ECNR status)',
      'Address Proof: Electricity Bill, Gas Bill, Registered Rent Agreement, or Bank Passbook',
      'Birth Certificate (Mandatory for applicants born after 1989 without a 10th marksheet)'
    ],
    eligibility: 'Any Indian citizen. Minors, adults, and senior citizens can apply. To qualify for Non-ECR (Emigration Check Not Required) status, the applicant must have passed at least 10th grade.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar with your original documents for consultation.',
      'Step 2: We carefully fill out the Passport application on the official Passport Seva portal.',
      'Step 3: Payment of Govt fee (₹1500 for Normal, ₹3500 for Tatkaal).',
      'Step 4: We book the earliest appointment slot at Malad PSK, Borivali POPSK, or Vasai POPSK.',
      'Step 5: You visit the Passport Office for biometric capture and document verification.',
      'Step 6: Police Verification is conducted at your local police station.',
      'Step 7: The Passport is dispatched to your home address via Speed Post.'
    ],
    processingTime: 'Normal: 15 to 30 Days | Tatkaal: 3 to 7 Days',
    charges: '₹1500 (Govt Fee for Normal 36 Pages) + Premium Consulting/Filing Fee',
    notes: 'Important: You MUST carry all ORIGINAL documents and 2 sets of self-attested photocopies on the day of your appointment. Fake or laminated documents may be rejected by the passport officer.',
    keywords: [
      'New passport apply Virar',
      'Passport agent near me',
      'Tatkaal passport application',
      'Passport appointment booking',
      'Passport consultant Virar',
      'Fresh passport online'
    ],
    faqs: [
      { q: 'What is the difference between Normal and Tatkaal Passport?', a: 'Normal passport takes about 15-30 days as Police Verification happens BEFORE the passport is dispatched. Tatkaal passport is dispatched in 3-7 days because Police Verification happens AFTER the passport is issued, but it requires extra fees and strong address proofs.' },
      { q: 'What does Non-ECR (ECNR) mean?', a: 'Non-ECR stands for Emigration Check Not Required. If you have passed 10th grade or higher, you get Non-ECR status. It means you can travel to certain Middle Eastern countries for employment without requiring special clearance.' },
      { q: 'Can I apply for a passport with a Rent Agreement?', a: 'Yes, but the Rent Agreement MUST be registered with the sub-registrar (Notarized agreements are NOT accepted by the Passport Office). It must be valid for at least the last 1 year.' },
      { q: 'Do I need to visit the Passport Office in person?', a: 'Yes, physical presence is mandatory for everyone (including newborn babies) at the Passport Seva Kendra (PSK) for biometric capture (photo and fingerprints) and document verification.' }
    ]
  },
  {
    id: 12, slug: 'passport-renewal', category: 'passport',
    name: 'Passport Renewal (Re-issue)', icon: 'RefreshCw',
    description: 'Is your passport expiring soon or already expired? We provide fast Passport Renewal (Re-issue) services in Virar. Avoid last-minute travel stress by renewing your passport on time. We handle the online form filling, document arrangement, and PSK appointment booking.',
    documentsRequired: [
      'Original Old Passport (First and last two pages photocopy required)',
      'Aadhaar Card (Linked with mobile number)',
      'Present Address Proof (If address has changed from the old passport)',
      'Marriage Certificate (If adding spouse name)'
    ],
    eligibility: 'Anyone whose passport is expiring within the next 1 year, or whose passport has already expired. Also applicable if passport pages are exhausted.',
    processSteps: [
      'Step 1: Bring your Old Passport and Aadhaar to our CSC center in Virar.',
      'Step 2: We process your "Re-issue of Passport" application online.',
      'Step 3: Pay the Government fee (₹1500 for Normal / ₹3500 for Tatkaal).',
      'Step 4: We schedule your appointment at the nearest PSK/POPSK.',
      'Step 5: Visit the PSK for document verification. Your old passport will be cancelled & returned.',
      'Step 6: New Passport is delivered to your address via Speed Post.'
    ],
    processingTime: 'Normal: 15 to 30 Days | Tatkaal: 3 to 7 Days',
    charges: '₹1500 (Govt Fee for 36 Pages) + Consulting/Filing Fee',
    notes: 'Important: If your address has not changed, police verification is usually NOT required for renewal, making the process much faster.',
    keywords: [
      'Passport renewal Virar',
      'Reissue passport online',
      'Passport expiry renewal',
      'Tatkaal passport renewal',
      'Passport agent near me',
      'Renew Indian passport'
    ],
    faqs: [
      { q: 'When should I apply for passport renewal?', a: 'You can apply for renewal (re-issue) up to 1 year before the expiry date of your current passport, or anytime after it has expired.' },
      { q: 'Will my old passport be taken away?', a: 'No, your old passport will be verified and physically cancelled (by stamping "CANCELLED" or punching holes) at the PSK, and handed back to you immediately.' },
      { q: 'Do I need Police Verification for passport renewal?', a: 'Usually, if there is no change in your personal details (like address or name) and your old passport had clear police verification, Police Verification is skipped (Pre-police verification not required).' },
      { q: 'Can I renew my passport in Tatkaal?', a: 'Yes! Passport renewal can be done under the Tatkaal scheme for faster processing (3-7 days), provided your address is the same and you meet the Tatkaal criteria.' }
    ]
  },
  {
    id: 13, slug: 'passport-correction', category: 'passport',
    name: 'Passport Correction & Update', icon: 'FileEdit',
    description: 'Got married and need to add your spouse\'s name? Need to change your address or correct a spelling mistake? We help you apply for Passport Correction (Re-issue for change in personal particulars). We ensure your application is filed with the exact supporting documents required by the Regional Passport Office.',
    documentsRequired: [
      'Original Old Passport',
      'For Address Change: Aadhaar, Light Bill, or Registered Rent Agreement',
      'For Name Change (Marriage): Marriage Certificate + Spouse Passport/Aadhaar',
      'For DOB Correction: Birth Certificate + 10th Marksheet (Subject to RPO approval)'
    ],
    eligibility: 'Any existing Indian passport holder who needs to update or correct their printed personal details (Name, DOB, Address, ECR status, Spouse Name, etc.).',
    processSteps: [
      'Step 1: Visit our center in Virar with your old passport and the correct proof document.',
      'Step 2: We select "Change in Existing Personal Particulars" in the application.',
      'Step 3: Online fee payment and PSK appointment booking.',
      'Step 4: Visit the PSK with original documents for verification.',
      'Step 5: Police Verification (Mandatory for address change or name change).',
      'Step 6: A fresh updated passport is printed and dispatched to your home.'
    ],
    processingTime: 'Usually 20 to 30 Days (Police verification is mostly required)',
    charges: '₹1500 (Govt Fee for Re-issue) + Consulting/Filing Fee',
    notes: 'Caution: Date of Birth (DOB) corrections are highly restricted by the Passport Office and require strong original proofs like a Birth Certificate and sometimes a court order.',
    keywords: [
      'Passport correction Virar',
      'Change address in passport',
      'Add spouse name passport',
      'Name change passport',
      'Update passport details',
      'DOB correction passport'
    ],
    faqs: [
      { q: 'Is it possible to change the address in my passport?', a: 'Yes. You have to apply for a "Re-issue of Passport" under the "Change in Existing Personal Particulars" category. You must provide a valid new address proof (like Aadhaar, Light Bill, or Registered Rent Agreement).' },
      { q: 'Will I get a new passport booklet or a sticker on the old one?', a: 'You will get a completely new, freshly printed passport booklet with your updated details. The old passport will be cancelled and returned to you.' },
      { q: 'Is Police Verification required for address change?', a: 'Yes. Whenever you change your address on the passport, a fresh Police Verification will be conducted at your new address before or after the new passport is issued.' },
      { q: 'How can I remove ECR (Emigration Check Required) status?', a: 'If you have now passed your 10th standard, you can apply for a passport re-issue to change ECR to Non-ECR (ECNR) by submitting your 10th passing certificate/marksheet.' }
    ]
  },
  {
    id: 14, slug: 'police-verification', category: 'passport',
    name: 'Police Clearance Certificate (PCC)', icon: 'ShieldCheck',
    description: 'Planning to work abroad, immigrate, or apply for a long-term visa? Many foreign governments require a Police Clearance Certificate (PCC) from the Indian Passport Office. We assist you in filing the PCC application, booking the PSK appointment, and guiding you on the exact documents needed.',
    documentsRequired: [
      'Original Valid Indian Passport',
      'Current Address Proof (Aadhaar Card, Light Bill, etc.)',
      'Employment Contract / Visa Copy / Immigration Letter (as demanded by the foreign country)'
    ],
    eligibility: 'Any Indian citizen holding a valid Indian passport who has been asked to submit a PCC by a foreign country for employment, long-term visa, or immigration.',
    processSteps: [
      'Step 1: We file your PCC application online on the Passport Seva portal.',
      'Step 2: Pay the Govt fee (₹500) and book an appointment at the nearest PSK.',
      'Step 3: Visit the PSK for biometric verification.',
      'Step 4: Your file is sent to your local police station for verification.',
      'Step 5: Once the police clear your record, the PCC is printed and dispatched to your home.'
    ],
    processingTime: 'Usually 15 to 30 Days (Depends heavily on local police station clearance)',
    charges: '₹500 (Official Govt Fee) + Consulting/Filing Fee',
    notes: 'Important: PCC cannot be issued in Tatkaal. It strictly requires a clear report from your local police station before the Passport Office issues the certificate.',
    keywords: [
      'Apply PCC online Virar',
      'Police clearance certificate',
      'Passport PCC agent',
      'PCC for visa',
      'PCC appointment booking',
      'PCC services Virar'
    ],
    faqs: [
      { q: 'What is a Police Clearance Certificate (PCC)?', a: 'A PCC is an official document issued by the Passport Office/Police verifying that the applicant has no criminal record. It is usually required by foreign countries for employment, residential status, or long-term visas.' },
      { q: 'Can I get a PCC urgently?', a: 'No, there is no Tatkaal quota for PCC. It requires a mandatory physical police verification at your local station, which takes its own standard time.' },
      { q: 'Do I need to visit the Passport Office (PSK) for PCC?', a: 'Yes, just like a passport application, you must visit the PSK to submit your fingerprints, photo, and original documents.' },
      { q: 'Will the PCC be stamped on my passport?', a: 'No, the PCC is issued as a separate official printed certificate on secure government paper. It is not stamped in your passport booklet.' }
    ]
  },

  // ─── C. Banking & Financial ───
  {
    id: 15, slug: 'bank-account-opening', category: 'banking',
    name: 'Zero Balance Bank Account', icon: 'Landmark',
    description: 'Open a Zero Balance Savings Account instantly with a virtual debit card! We offer fast digital account opening for top banks like Kotak Mahindra (811), HDFC, ICICI, and State Bank of India (SBI). Forget long queues at the bank branch.',
    documentsRequired: [
      'Original Aadhaar Card (Must be linked with your active mobile number)',
      'Original PAN Card (Mandatory for video KYC)',
      'Smartphone with an active internet connection for Video KYC'
    ],
    eligibility: 'Must be an Indian resident, aged 18 or above, possessing a valid PAN and Aadhaar card.',
    processSteps: [
      'Step 1: Visit our CSC center in Virar with your smartphone, Aadhaar, and PAN.',
      'Step 2: We initiate the digital account opening process via the bank\'s portal.',
      'Step 3: Aadhaar OTP is verified and your details are fetched.',
      'Step 4: A quick Video KYC is conducted with the bank executive.',
      'Step 5: Account number, IFSC, and Virtual Debit Card are generated instantly!'
    ],
    processingTime: 'Instant (Account activates within 15-30 minutes)',
    charges: 'Nominal Service/Consulting Fee (The bank account itself requires Zero Balance)',
    notes: 'Important: The lighting must be clear and the background must be plain white during the Video KYC. You must hold your original PAN card during the video call.',
    keywords: [
      'Zero balance account opening Virar',
      'Kotak 811 account open',
      'Instant bank account near me',
      'Digital savings account online',
      'Open SBI account online',
      'Video KYC bank account'
    ],
    faqs: [
      { q: 'What does "Zero Balance" mean?', a: 'A Zero Balance account means there is no penalty or charge if your account balance falls to ₹0. You are not required to maintain a minimum average balance.' },
      { q: 'Will I get a physical ATM/Debit card?', a: 'Yes! Initially, you get a virtual debit card on the bank app. You can request a physical debit card through the app, which is delivered to your home by the bank (standard bank charges apply).' },
      { q: 'Can I use this account for Google Pay or PhonePe?', a: 'Absolutely! As soon as your account is active and you have the virtual debit card, you can immediately set up Google Pay, PhonePe, or Paytm.' },
      { q: 'Is it safe to do Video KYC at your center?', a: 'Yes, it is completely secure. You will be speaking directly to an official bank executive through the bank\'s encrypted platform.' }
    ]
  },
  {
    id: 16, slug: 'mini-statement', category: 'banking',
    name: 'Balance Check & Mini Statement', icon: 'FileText',
    description: 'Check your bank account balance instantly or generate a mini statement of your last 5 to 10 transactions without visiting the ATM or standing in bank queues. We use the secure Aadhaar Enabled Payment System (AePS).',
    documentsRequired: [
      'Aadhaar Number (Your Aadhaar must be linked to your bank account)',
      'Name of your Bank',
      'Your physical presence (for Biometric Fingerprint authentication)'
    ],
    eligibility: 'Anyone who holds a bank account in India that is successfully linked to their Aadhaar card.',
    processSteps: [
      'Step 1: Tell us your Aadhaar number and the name of your bank.',
      'Step 2: Place your finger on our secure biometric scanner.',
      'Step 3: The system securely connects with your bank\'s server via NPCI.',
      'Step 4: Your current balance or mini statement is instantly displayed and printed.'
    ],
    processingTime: 'Instant (Within 1 minute)',
    charges: 'Minimal Service Fee (Typically ₹10 to ₹20)',
    notes: 'Note: We can check balances for almost all banks (SBI, Bank of Baroda, HDFC, Union Bank, etc.) as long as your Aadhaar is linked to the account.',
    keywords: [
      'Check bank balance Virar',
      'Aadhaar mini statement near me',
      'AePS balance enquiry',
      'Bank of Baroda balance check',
      'SBI mini statement fingerprint',
      'Check account balance Aadhaar'
    ],
    faqs: [
      { q: 'Do I need my ATM card to check my balance?', a: 'No, you do not need an ATM card, passbook, or PIN. Just your Aadhaar number and your fingerprint are enough.' },
      { q: 'Is my fingerprint data stored by your center?', a: 'No, the biometric data is heavily encrypted and sent directly to the bank via NPCI/UIDAI servers. We cannot store or reuse your fingerprint.' },
      { q: 'Why is my balance check failing?', a: 'This usually happens if your bank server is temporarily down, or if your Aadhaar is not linked to your bank account (Aadhaar seeding is missing).' }
    ]
  },
  {
    id: 17, slug: 'money-transfer', category: 'banking',
    name: 'Money Transfer (DMT)', icon: 'ArrowLeftRight',
    description: 'Send money instantly to any bank account in India. Whether you want to send money to your family in a village or pay a supplier, our Domestic Money Transfer (DMT) service is fast, highly secure, and works 24x7 (even on bank holidays).',
    documentsRequired: [
      'Sender\'s active Mobile Number (for OTP and transaction alerts)',
      'Recipient\'s Exact Bank Account Number',
      'Recipient\'s Bank IFSC Code'
    ],
    eligibility: 'Anyone who has cash and wants to deposit/transfer it directly into any bank account across India.',
    processSteps: [
      'Step 1: Provide the cash you want to transfer along with our service charge.',
      'Step 2: Give us the recipient\'s Account Number, IFSC code, and Name.',
      'Step 3: We perform an account verification (optional) to ensure the name matches.',
      'Step 4: The money is instantly transferred to the recipient via IMPS or NEFT.',
      'Step 5: You receive a confirmed printed receipt and an SMS alert.'
    ],
    processingTime: 'Instant (Via IMPS)',
    charges: 'Standard RBI-mandated DMT Fees (Based on transfer amount)',
    notes: 'Important: Always double-check the account number before confirming the transfer. Once money is transferred via IMPS, it cannot be reversed.',
    keywords: [
      'Money transfer agent Virar',
      'Send cash to bank account',
      'Domestic money transfer DMT',
      'Instant cash deposit Virar',
      'Transfer money on holiday',
      'IMPS money transfer near me'
    ],
    faqs: [
      { q: 'How long does it take for the money to reach the account?', a: 'Since we use IMPS (Immediate Payment Service), the money is credited to the recipient\'s bank account instantly within seconds.' },
      { q: 'Can I transfer money on a Sunday or a Bank Holiday?', a: 'Yes! Our Domestic Money Transfer service works 24x7, 365 days a year, including Sundays and all national bank holidays.' },
      { q: 'What if I give the wrong account number?', a: 'To prevent this, we usually recommend a "Penny Drop Verification". We send ₹1 to the account first to fetch the account holder\'s registered name. You can verify the name before we transfer the full amount.' },
      { q: 'Is there a limit on how much money I can transfer?', a: 'Yes, per the RBI guidelines for DMT, a single sender mobile number can typically transfer up to ₹25,000 per month without full KYC. For higher amounts, sender KYC (PAN card) is required.' }
    ]
  },
  {
    id: 18, slug: 'aeps', category: 'banking',
    name: 'Cash Withdrawal (AePS)', icon: 'Fingerprint',
    description: 'Need cash but don\'t have an ATM card? Or is the ATM out of cash? Withdraw money securely from your bank account using just your Aadhaar number and fingerprint. Our AePS (Aadhaar Enabled Payment System) service acts as a Micro-ATM in Virar.',
    documentsRequired: [
      'Aadhaar Number (Linked to your bank account)',
      'Bank Name',
      'Your physical presence (for Biometric Fingerprint authentication)'
    ],
    eligibility: 'Anyone holding an Aadhaar-seeded bank account in India.',
    processSteps: [
      'Step 1: Tell us the amount you wish to withdraw and your bank name.',
      'Step 2: Provide your Aadhaar number.',
      'Step 3: Authenticate the transaction securely by placing your finger on the biometric scanner.',
      'Step 4: Upon successful transaction, we hand over the cash to you.',
      'Step 5: You receive a printed receipt with your remaining account balance.'
    ],
    processingTime: 'Instant',
    charges: 'No extra charges for cash withdrawal (Subject to RBI guidelines)',
    notes: 'Withdrawal limits depend on your bank\'s daily AePS limit (typically ₹10,000 per day). We cannot override your bank\'s specific limits.',
    keywords: [
      'Aadhaar cash withdrawal Virar',
      'AePS micro ATM near me',
      'Withdraw money without ATM card',
      'Fingerprint cash withdrawal',
      'Aadhaar ATM Virar',
      'Get cash from bank account'
    ],
    faqs: [
      { q: 'Do I need to carry my physical Aadhaar card?', a: 'No, you just need to remember your 12-digit Aadhaar number. The physical card is not required for withdrawal.' },
      { q: 'How much money can I withdraw in a day?', a: 'The maximum limit for AePS withdrawal is set by your bank. For most banks like SBI, HDFC, or Bank of Baroda, the limit is ₹10,000 per day.' },
      { q: 'Is it safe to use my fingerprint for withdrawal?', a: 'Yes, absolutely safe. The fingerprint is not saved; it acts as a digital key that is sent directly to the UIDAI and your bank to authorize a single transaction.' },
      { q: 'My transaction failed but money was deducted. What should I do?', a: 'In rare cases of bank server timeouts, the amount may be deducted but not reach us. As per RBI rules, the deducted amount will automatically be refunded to your bank account within 3 to 7 working days.' }
    ]
  },
  {
    id: 19, slug: 'pan-aadhaar-linking', category: 'banking',
    name: 'PAN-Aadhaar Linking', icon: 'Link',
    description: 'Is your PAN card linked to your Aadhaar? If not, your PAN is considered inoperative by the Income Tax Department! This means you cannot file ITR, open bank accounts, or invest in mutual funds. We provide quick and secure PAN-Aadhaar linking services.',
    documentsRequired: [
      'PAN Card Number',
      'Aadhaar Card Number',
      'Registered Mobile Number (For OTP)'
    ],
    eligibility: 'Every person who has been allotted a PAN as on 1st July 2017 and is eligible to obtain an Aadhaar number must link them.',
    processSteps: [
      'Step 1: We first check your current PAN-Aadhaar link status for free.',
      'Step 2: If unlinked, we generate the ₹1000 challan on the Income Tax e-Filing portal.',
      'Step 3: You pay the ₹1000 penalty fee officially mandated by the Govt.',
      'Step 4: After payment processing (takes 2-4 days), we submit the final linking request.',
      'Step 5: OTP is verified, and your PAN is successfully linked and made operative again.'
    ],
    processingTime: 'Usually takes 4 to 5 Days (Due to Income Tax portal payment clearance)',
    charges: '₹1000 (Official IT Dept Penalty Fee) + Nominal Service Charge',
    notes: 'Important: Ensure that your Name, Date of Birth, and Gender match EXACTLY on both your PAN and Aadhaar. If there is a mismatch, the linking will fail and you must correct the details first.',
    keywords: [
      'PAN Aadhaar link Virar',
      'Link PAN card',
      'PAN Aadhaar link status',
      'Pay 1000 penalty PAN',
      'Make PAN card active',
      'Income tax PAN link'
    ],
    faqs: [
      { q: 'Why do I have to pay ₹1000 to link my PAN and Aadhaar?', a: 'The deadline for free linking was 30th June 2022. Since then, the Income Tax Department has mandated a late fee/penalty of ₹1000 for anyone who wishes to link their PAN and Aadhaar.' },
      { q: 'What happens if I don\'t link them?', a: 'Your PAN card becomes "Inoperative". You will not be able to file tax returns, pending refunds will not be processed, higher TDS will be deducted, and you cannot do major banking transactions.' },
      { q: 'My name is different on PAN and Aadhaar. Can I still link them?', a: 'No, demographic mismatch (name or DOB) will cause the linking to fail. You must first apply for a PAN correction or Aadhaar update to ensure both documents have the exact same details.' }
    ]
  },
  {
    id: 20, slug: 'insurance-services', category: 'banking',
    name: 'Insurance (Health & Life)', icon: 'Shield',
    description: 'Protect your family and your future! We offer hassle-free enrollment in Life Insurance (LIC, Term Plans), Health Insurance (Mediclaim), and affordable Government Insurance schemes like PMJJBY (Pradhan Mantri Jeevan Jyoti Bima Yojana) and PMSBY.',
    documentsRequired: [
      'Aadhaar Card',
      'PAN Card',
      'Bank Passbook / Cancelled Cheque',
      'Nominee Details (Name, Age, Relation)'
    ],
    eligibility: 'Anyone looking to secure themselves financially against medical emergencies, accidents, or life risks.',
    processSteps: [
      'Step 1: Visit our center to discuss your insurance needs (Health vs Life).',
      'Step 2: We compare and suggest the best policies based on your budget.',
      'Step 3: Provide your KYC documents and nominee details.',
      'Step 4: We fill the proposal form and process the premium payment securely.',
      'Step 5: The Policy Document/Bond is instantly issued and handed over to you.'
    ],
    processingTime: 'Instant to 2 Days',
    charges: 'As per actual policy premium (Zero extra consulting fee for Govt schemes)',
    notes: 'Government Schemes: PMSBY (Accidental Cover of ₹2 Lakhs) costs only ₹20/year. PMJJBY (Life Cover of ₹2 Lakhs) costs only ₹436/year.',
    keywords: [
      'Health insurance agent Virar',
      'Life insurance LIC near me',
      'Buy Mediclaim policy',
      'PMJJBY apply online',
      'PMSBY accident insurance',
      'Best insurance policy'
    ],
    faqs: [
      { q: 'What is the cheapest life insurance available?', a: 'The Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY) offers a life cover of ₹2 Lakhs at an annual premium of just ₹436.' },
      { q: 'Is Health Insurance (Mediclaim) necessary if I am young?', a: 'Yes! Medical emergencies come unannounced. Getting health insurance when you are young and healthy means your premium will be very low, and you easily pass the waiting periods.' },
      { q: 'Do you help with insurance claims?', a: 'Yes, we assist our policyholders with the claim settlement process, guiding them on the required hospital documents and claim forms.' }
    ]
  },
  {
    id: 21, slug: 'pension-services', category: 'banking',
    name: 'Atal Pension Yojana (APY)', icon: 'UserPlus',
    description: 'Secure your retirement with the Government of India\'s Atal Pension Yojana (APY). Under this scheme, you get a guaranteed minimum monthly pension of ₹1,000 to ₹5,000 after the age of 60, depending on your contribution.',
    documentsRequired: [
      'Aadhaar Card',
      'Active Savings Bank Account Passbook',
      'Mobile Number (Linked to bank account)',
      'Nominee Details (Aadhaar or Name/DOB)'
    ],
    eligibility: 'Any Indian citizen between the age of 18 to 40 years holding a savings bank account. The applicant should not be an income taxpayer.',
    processSteps: [
      'Step 1: Determine the pension amount you want after 60 (₹1000 to ₹5000).',
      'Step 2: Provide your Aadhaar and Bank details at our CSC center.',
      'Step 3: We register you for APY via the secure banking portal.',
      'Step 4: Your PRAN (Permanent Retirement Account Number) is generated.',
      'Step 5: Your first premium is automatically deducted from your bank account.'
    ],
    processingTime: 'Instant Registration',
    charges: 'Premium depends on age and chosen pension amount + Nominal Registration Fee',
    notes: 'Monthly premiums are auto-debited from your bank account. Ensure you maintain sufficient balance in your account to avoid penalty charges by the bank.',
    keywords: [
      'Atal pension yojana apply',
      'APY registration Virar',
      'Government pension scheme',
      'Open PRAN account',
      'Retirement plan for unorganized sector',
      'Pension agent near me'
    ],
    faqs: [
      { q: 'How much premium do I have to pay?', a: 'The premium depends on your entry age and the pension amount you want. For example, if you join at 18 years for a ₹5000 pension, you only pay ₹210 per month.' },
      { q: 'What happens to the pension if the subscriber dies?', a: 'If the subscriber dies before or after 60, the spouse will receive the same pension amount. If both die, the accumulated corpus is handed over to the nominee.' },
      { q: 'Can I exit the Atal Pension Yojana before 60 years?', a: 'Voluntary exit before 60 is permitted only in exceptional circumstances like terminal illness. Otherwise, only the subscriber\'s contribution (without govt co-contribution) will be refunded.' }
    ]
  },

  // ─── D. Certificates & Documents ───
  {
    id: 22, slug: 'birth-certificate', category: 'certificates',
    name: 'Birth Certificate Apply', icon: 'Baby',
    description: 'A Birth Certificate is the most important legal document establishing a person\'s age and identity. We assist in applying for new birth certificates, duplicate copies, or correcting existing certificates from the Vasai-Virar City Municipal Corporation (VVCMC) or local Gram Panchayats.',
    documentsRequired: [
      'Hospital Discharge Summary or Birth Proof from the Hospital',
      'Parents\' Aadhaar Cards (Both Mother and Father)',
      'Parents\' Marriage Certificate (If available)',
      'Proof of Address at the time of birth'
    ],
    eligibility: 'Parents applying for their newborn child, or individuals whose birth was registered but they lost the physical certificate.',
    processSteps: [
      'Step 1: Provide the hospital discharge papers and parents\' KYC at our center.',
      'Step 2: We file the official registration form with the local municipal body.',
      'Step 3: Verification is done by the local registrar/health department.',
      'Step 4: Once approved, the Birth Certificate is printed and handed over to you.'
    ],
    processingTime: 'Usually 7 to 15 Working Days',
    charges: 'Govt Fees + Consulting & Filing Charges',
    notes: 'Important: By law, a birth should be registered within 21 days. Late registration (after 1 year) is a complex process that requires a formal court order (Affidavit from First Class Magistrate).',
    keywords: [
      'Birth certificate Virar',
      'VVCMC birth certificate',
      'Apply birth certificate online',
      'Duplicate birth certificate',
      'Newborn registration',
      'Late birth registration'
    ],
    faqs: [
      { q: 'Is it mandatory to register a birth?', a: 'Yes, as per the Registration of Births and Deaths Act, 1969, it is mandatory to register every birth in India with the local government body within 21 days.' },
      { q: 'What if I am applying for a birth certificate after 1 year?', a: 'If the birth is not registered within 1 year, you must first get an order from the local Sub-Divisional Magistrate (SDM) or a First Class Magistrate after police verification, before the municipality will issue the certificate.' },
      { q: 'Can I add my child\'s name to the birth certificate later?', a: 'Yes, often the birth is registered without a name. You can apply for "Name Addition in Birth Certificate" within a specified time frame (usually up to 15 years from birth) by providing an affidavit.' }
    ]
  },
  {
    id: 23, slug: 'death-certificate', category: 'certificates',
    name: 'Death Certificate Apply', icon: 'FileX',
    description: 'A Death Certificate is a mandatory legal document required to settle inheritance, claim insurance, or close bank accounts. We provide compassionate and fast assistance in obtaining death certificates from the municipal corporation (VVCMC) or local authorities.',
    documentsRequired: [
      'Hospital Death Certificate / Doctor\'s Cause of Death Certificate',
      'Cremation/Burial Ground Receipt',
      'Deceased Person\'s Aadhaar Card',
      'Applicant\'s (Relative\'s) Aadhaar Card & Address Proof'
    ],
    eligibility: 'Immediate family members (Spouse, Children, Parents) or legal heirs of the deceased.',
    processSteps: [
      'Step 1: Bring the hospital and cremation ground receipts to our center.',
      'Step 2: We carefully file the death registration form with the local municipality.',
      'Step 3: The local registrar verifies the details against the hospital/cremation records.',
      'Step 4: The official Death Certificate is generated and printed for you.'
    ],
    processingTime: 'Usually 7 to 15 Working Days',
    charges: 'Govt Fees + Consulting & Filing Charges',
    notes: 'Like birth certificates, a death must be registered within 21 days. Late registrations involve penalties and, if delayed beyond 1 year, require a Magistrate\'s order.',
    keywords: [
      'Death certificate Virar',
      'VVCMC death certificate',
      'Apply death certificate',
      'Duplicate death certificate',
      'Register death online',
      'Municipal corporation death certificate'
    ],
    faqs: [
      { q: 'Why is a Death Certificate important?', a: 'It is legally required to prove the fact of death. Without it, the family cannot claim life insurance, transfer property, close bank accounts, or transfer pensions.' },
      { q: 'Who issues the Death Certificate in Virar?', a: 'In Virar, the Vasai-Virar City Municipal Corporation (VVCMC) is the authorized body to issue birth and death certificates.' },
      { q: 'How many copies of the certificate should I get?', a: 'It is highly recommended to get at least 5 to 10 original printed copies, as you will need to submit original copies to banks, insurance companies, and property registrars.' }
    ]
  },
  {
    id: 24, slug: 'marriage-certificate', category: 'certificates',
    name: 'Marriage Certificate Apply', icon: 'Ring',
    description: 'A Marriage Certificate is the official legal proof of marriage. It is essential for passport applications, changing a maiden name, or applying for joint visas. We assist couples in registering their marriage seamlessly under the Hindu Marriage Act or the Special Marriage Act.',
    documentsRequired: [
      'Wedding Invitation Card (Original)',
      'Marriage Photographs (Ceremony rituals and couple together)',
      'Identity & Address Proof of both Bride and Groom (Aadhaar & PAN)',
      'Date of Birth Proof (School LC or Birth Certificate)',
      'Two/Three Witnesses along with their ID proofs'
    ],
    eligibility: 'The groom must be at least 21 years old and the bride must be at least 18 years old at the time of marriage.',
    processSteps: [
      'Step 1: We draft the joint affidavit and prepare the marriage registration file.',
      'Step 2: We book an appointment date at the local Sub-Registrar / Marriage Officer.',
      'Step 3: Both husband, wife, and the witnesses must visit the office on the appointed day.',
      'Step 4: Signatures and biometrics are captured by the officer.',
      'Step 5: The Marriage Certificate is officially issued.'
    ],
    processingTime: 'Registration is usually completed in 1 day (Appointment depends on slot availability)',
    charges: 'Govt Fees + Legal Drafting & Consulting Charges',
    notes: 'Physical presence of the husband, wife, and all witnesses is strictly mandatory at the registrar\'s office. Proxy registration is not allowed under Indian law.',
    keywords: [
      'Marriage certificate Virar',
      'Register marriage online',
      'Court marriage agent near me',
      'Marriage registrar Virar',
      'Hindu marriage act certificate',
      'Apply for marriage certificate'
    ],
    faqs: [
      { q: 'Is it necessary for witnesses to be blood relatives?', a: 'No, witnesses can be friends, colleagues, or relatives. They just need to be above 18 years of age and hold a valid Aadhaar/PAN card.' },
      { q: 'Can we register a marriage that happened years ago?', a: 'Yes! Even if you got married 10 or 20 years ago, you can still register your marriage now by providing the required wedding proofs (like old photos and invitation card).' },
      { q: 'Do we need a Marriage Certificate to change the wife\'s surname?', a: 'Yes, a registered Marriage Certificate is the primary legal document accepted by Passport offices, Banks, and Aadhaar centers to update a woman\'s surname post-marriage.' }
    ]
  },
  {
    id: 25, slug: 'income-certificate', category: 'certificates',
    name: 'Income Certificate', icon: 'Wallet',
    description: 'An Income Certificate is an official document issued by the state government (Tehsildar) that certifies the annual income of a family. It is crucial for students applying for EBC scholarships, school admissions (RTE), or citizens applying for government subsidies.',
    documentsRequired: [
      'Applicant\'s Aadhaar Card',
      'Ration Card / Light Bill (As Proof of Residence)',
      'Income Proof (Salary slips, Form 16, or Income Tax Return)',
      'Self-Declaration / Affidavit of Income'
    ],
    eligibility: 'Any resident of Maharashtra who needs to prove their family\'s annual income for official purposes.',
    processSteps: [
      'Step 1: Bring your KYC and income proof documents to our center.',
      'Step 2: We prepare the required self-declaration/affidavit.',
      'Step 3: Application is submitted online on the Aaple Sarkar / Maha Seva portal.',
      'Step 4: The application is verified by the Circle Officer and Tehsildar.',
      'Step 5: The digitally signed Income Certificate is generated.'
    ],
    processingTime: 'Usually 7 to 15 Working Days',
    charges: 'Govt Fees + Application Filing Charges',
    notes: 'The Income Certificate is generally valid for the financial year in which it is issued. You will need to apply for a fresh one every year if required for scholarships.',
    keywords: [
      'Income certificate Virar',
      'Tehsildar income certificate',
      'Apply income certificate online',
      'Income certificate for scholarship',
      'Aaple sarkar income certificate',
      'EBC scholarship document'
    ],
    faqs: [
      { q: 'What if I don\'t have a salary slip or ITR?', a: 'If you work in the unorganized sector or run a small shop, you can submit an affidavit declaring your estimated annual income, verified by the local Talathi.' },
      { q: 'How long is the Income Certificate valid?', a: 'In Maharashtra, a standard Income Certificate is usually valid for 1 Financial Year (ends on 31st March) from the date of issue.' },
      { q: 'Is this certificate accepted for college admissions?', a: 'Yes, the Tehsildar-issued Income Certificate is the only document accepted by colleges and the MahaDBT portal for fee concessions and scholarships (EBC, OBC, SC/ST).' }
    ]
  },
  {
    id: 26, slug: 'caste-certificate', category: 'certificates',
    name: 'Caste Certificate', icon: 'BadgeCheck',
    description: 'A Caste Certificate is essential for claiming reservations in education, government jobs, and various state subsidies. We provide expert assistance in obtaining SC, ST, OBC, VJNT, or SBC caste certificates in Maharashtra, ensuring your file is prepared flawlessly to avoid rejections.',
    documentsRequired: [
      'Applicant\'s Aadhaar Card, School LC (Leaving Certificate), and Ration Card',
      'Father\'s/Grandfather\'s School LC or Old Property Documents showing caste',
      'Blood Relative\'s Caste Certificate (Father, Uncle, or Aunt) if available',
      'Proof of Residence in Maharashtra prior to the cutoff date (1950 for SC, 1967 for OBC/VJNT)'
    ],
    eligibility: 'Any individual residing in Maharashtra who belongs to the recognized Schedule Caste (SC), Schedule Tribe (ST), or Other Backward Classes (OBC/VJNT/SBC) categories.',
    processSteps: [
      'Step 1: Consultation to verify if you have the required old proofs.',
      'Step 2: We compile the documents and prepare the necessary affidavits/genealogy (Vanshavali).',
      'Step 3: Submit the file online via Maha Seva / Aaple Sarkar portal.',
      'Step 4: Physical file verification at the local SDM (Sub-Divisional Magistrate) or Tehsildar office.',
      'Step 5: The digitally signed Caste Certificate is generated and issued.'
    ],
    processingTime: 'Usually 30 to 45 Days (Requires deep verification by the SDM office)',
    charges: 'Govt Fees + Expert Consulting & Filing Charges',
    notes: 'Warning: Obtaining a caste certificate requires strict historical proofs. Without old documents (pre-1950 or pre-1967) or a blood relative\'s valid certificate, the application will be rejected.',
    keywords: [
      'Caste certificate Virar',
      'Apply OBC certificate online',
      'SC ST certificate Maharashtra',
      'Caste validity agent near me',
      'Tehsildar caste certificate',
      'Aaple sarkar caste application'
    ],
    faqs: [
      { q: 'What is the "Cut-off Date" proof for a Caste Certificate?', a: 'To prove you belong to a caste in Maharashtra, you must show proof that your ancestors lived in Maharashtra before a specific date: 1950 for SC/ST, 1967 for OBC/VJNT, and 1961 for Nomadic Tribes.' },
      { q: 'Can I get a Caste Certificate if my father does not have one?', a: 'Yes, if your father doesn\'t have one, you can use the school leaving certificate or birth record of your grandfather, great-grandfather, or paternal uncle that explicitly mentions the caste.' },
      { q: 'Do you also provide Caste Validity certificates?', a: 'The Caste Certificate is issued first by the SDM. Caste Validity is a separate, more rigorous process done by the Scrutiny Committee, usually required for professional college admissions and government jobs.' }
    ]
  },
  {
    id: 27, slug: 'domicile-certificate', category: 'certificates',
    name: 'Domicile / Nationality Certificate', icon: 'Home',
    description: 'A Domicile and Nationality Certificate proves that you are a resident of Maharashtra and an Indian citizen. It is mandatory for state government jobs, engineering/medical college admissions, and local schemes. We help you get this certificate smoothly from the Tehsildar office.',
    documentsRequired: [
      'Applicant\'s Aadhaar Card & School Leaving Certificate (LC)',
      'Birth Certificate (If LC is not available)',
      'Residence Proofs covering the last 15 continuous years (e.g., Light Bills, Tax Receipts, Ration Card)',
      'Self-Declaration / Affidavit of Residency'
    ],
    eligibility: 'Any person who has been continuously residing in the State of Maharashtra for the last 15 years or more.',
    processSteps: [
      'Step 1: Bring your KYC and 15-year residence proofs to our center.',
      'Step 2: We prepare the residential affidavit and compile the file.',
      'Step 3: Online application submission on the Aaple Sarkar portal.',
      'Step 4: Verification by the Circle Officer and Talathi.',
      'Step 5: The digitally signed Domicile Certificate is issued.'
    ],
    processingTime: 'Usually 15 to 21 Working Days',
    charges: 'Govt Fees + Application Filing Charges',
    notes: 'If the applicant is a minor (below 18), the father\'s domicile certificate or the father\'s 15-year residence proofs must be submitted.',
    keywords: [
      'Domicile certificate Virar',
      'Nationality certificate online',
      'Apply domicile Maharashtra',
      'Residence certificate agent',
      '15 years residence proof',
      'Aaple sarkar domicile'
    ],
    faqs: [
      { q: 'Why do I need a Domicile Certificate?', a: 'It is strictly required if you want to claim state quota seats in engineering/medical colleges in Maharashtra, or apply for Maharashtra State Government jobs.' },
      { q: 'I moved to Maharashtra 5 years ago. Can I get a Domicile Certificate?', a: 'No. To obtain a Domicile Certificate in Maharashtra, you must prove continuous residence in the state for at least the last 15 years.' },
      { q: 'Is the Domicile Certificate valid for a lifetime?', a: 'Yes, once a Domicile and Nationality Certificate is issued in Maharashtra, it is generally valid for a lifetime and does not need to be renewed.' }
    ]
  },
  {
    id: 28, slug: 'gazette-name-change', category: 'certificates',
    name: 'Gazette Name Change (Maharashtra)', icon: 'Newspaper',
    description: 'Changed your name after marriage? Spelling mistake in your School LC? Or adopting a completely new name? A Govt. Gazette Notification is the ultimate legal proof required to update your name on PAN, Aadhaar, Passport, and bank accounts. We provide complete end-to-end Gazette services.',
    documentsRequired: [
      'Aadhaar Card and PAN Card (Old Name)',
      'Passport-size Photograph',
      'For Spelling Correction: School LC or Birth Certificate',
      'For Marriage Name Change: Marriage Certificate',
      'Notarized Name Change Affidavit (We will prepare this)'
    ],
    eligibility: 'Any Indian citizen aged 18+ (or a minor applied through parents) who wishes to legally change or correct their name.',
    processSteps: [
      'Step 1: We draft and print the Name Change Affidavit on a ₹100 Stamp Paper and get it notarized.',
      'Step 2: We fill the online application on the DGIPR Maharashtra Gazette portal.',
      'Step 3: Govt fee is paid online (Usually ₹523).',
      'Step 4: The application is scrutinized by the Gazette department in Mumbai.',
      'Step 5: Your name change is published in the e-Gazette, which you can download.'
    ],
    processingTime: 'Usually 30 to 45 Days (Depends on Govt Publication Schedule)',
    charges: '₹523 (Govt Fee) + Affidavit & Legal Consulting Charges',
    notes: 'Important: The e-Gazette is digitally signed and valid across India. Once published, you must preserve the PDF file and a printed copy for all future document updates.',
    keywords: [
      'Gazette name change Virar',
      'Change name in Gazette',
      'Maharashtra gazette online',
      'Name change affidavit',
      'Spelling mistake in LC',
      'Official name change agent'
    ],
    faqs: [
      { q: 'Is a Newspaper Ad required for Name Change in Maharashtra?', a: 'For the Maharashtra State e-Gazette, a newspaper advertisement is usually NOT required. The notarized affidavit is sufficient for online submission.' },
      { q: 'Will my old School/College certificates be updated after Gazette?', a: 'No, educational boards (like SSC/HSC or Universities) usually do not reprint old marksheets. You simply attach a copy of your Gazette along with your old marksheets wherever required as legal proof.' },
      { q: 'Can I change my religion in the Gazette?', a: 'Yes, "Change of Religion" can also be published in the Gazette, but it requires specific documents like a Conversion Certificate from an authorized religious institution.' }
    ]
  },
  {
    id: 29, slug: 'affidavit', category: 'certificates',
    name: 'Notarized Affidavits & Agreements', icon: 'FileSignature',
    description: 'Need a legal affidavit urgently? We draft, print, and notarize all types of affidavits and agreements on valid Govt Stamp Papers (₹100, ₹500, etc.). We ensure correct legal formatting so your documents are accepted by Govt offices, banks, and courts.',
    documentsRequired: [
      'Applicant\'s Aadhaar Card',
      'Supporting documents based on the type of affidavit (e.g., Old LC for DOB affidavit, Bank passbook for Income affidavit)'
    ],
    eligibility: 'Anyone requiring a sworn statement or legal agreement for official purposes.',
    processSteps: [
      'Step 1: Tell us the purpose of your affidavit (Name Change, Gap Certificate, Address Proof, etc.).',
      'Step 2: We draft the legal content accurately.',
      'Step 3: The draft is printed on the appropriate e-Stamp paper or franked paper.',
      'Step 4: We arrange for the Notary Public to attest and stamp the document.',
      'Step 5: Handover of the finalized legal document.'
    ],
    processingTime: 'Same Day (Usually within 1 to 2 hours)',
    charges: 'Stamp Paper Value + Notary Fee + Drafting Charges',
    notes: 'Common Affidavits: Gap Certificate (for students), Name Change, Income Declaration, Address Proof, Anti-Ragging, and Joint Marriage Affidavits.',
    keywords: [
      'Notary services Virar',
      'Stamp paper agent',
      'Gap certificate affidavit',
      'Name change affidavit',
      'Rent agreement notary',
      '100 rs stamp paper near me'
    ],
    faqs: [
      { q: 'What is an Affidavit?', a: 'An affidavit is a written statement confirmed by oath or affirmation, used as evidence in court or by government bodies to verify facts (like your income, name, or address).' },
      { q: 'What is a Gap Certificate?', a: 'A Gap Certificate is a specific affidavit required by students who took a drop year or break in their education. It states the reason for the gap (e.g., medical reasons, exam preparation) and confirms they were not involved in illegal activities.' },
      { q: 'Can you draft a Rent Agreement?', a: 'Yes, we draft standard 11-month Leave and License (Rent) Agreements on ₹100 or ₹500 stamp papers and get them notarized. (Note: Registered rent agreements are a different process).' }
    ]
  },

  // ─── E. Online Services ───
  {
    id: 30, slug: 'online-form-filling', category: 'online',
    name: 'Online Form Filling (All Govt Exams & Schemes)', icon: 'ClipboardList',
    description: 'We fill and submit online forms for all government competitive exams, recruitment boards, and welfare scheme applications.',
    documentsRequired: ['Aadhaar Card', 'PAN Card / ID Proof', 'Education Certificates', 'Passport-size Photograph', 'Category Certificate (if applicable)'],
    eligibility: 'Varies by exam or scheme being applied for.',
    processSteps: ['Bring all required documents', 'We access official portal', 'Fill form accurately', 'Upload documents and photograph', 'Submit and provide acknowledgment'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary by exam/scheme. Please contact or visit our office for confirmation.'
  },
  {
    id: 31, slug: 'scholarship-form', category: 'online',
    name: 'Scholarship Form', icon: 'GraduationCap',
    description: 'Assistance with filling scholarship forms for state and central government scholarship schemes like MahaDBT, NSP, etc.',
    documentsRequired: ['Aadhaar Card', 'Income Certificate', 'Caste Certificate', 'Marksheets', 'Bank Passbook', 'Bonafide Certificate'],
    eligibility: 'Students meeting eligibility criteria of the respective scholarship.',
    processSteps: ['Check eligibility for scholarship', 'Gather required documents', 'Register on scholarship portal', 'Fill and submit application', 'Submit acknowledgment'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary by scholarship. Please contact or visit our office for confirmation.'
  },
  {
    id: 32, slug: 'job-application-form', category: 'online',
    name: 'Job Application Form', icon: 'Briefcase',
    description: 'Assistance in filling job applications for government and private sector recruitment including state boards, railways, banking, and more.',
    documentsRequired: ['Aadhaar Card', 'Education Certificates', 'Experience Certificate (if any)', 'Passport-size Photograph', 'Signature'],
    eligibility: 'Any job seeker who meets the job advertisement requirements.',
    processSteps: ['Bring all documents and job advertisement', 'We access recruitment portal', 'Fill application accurately', 'Upload documents', 'Submit and provide copy'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 33, slug: 'ticket-booking', category: 'online',
    name: 'Railway / Bus / Flight Ticket Booking', icon: 'Ticket',
    description: 'Book railway, bus, or flight tickets online for travel within India.',
    documentsRequired: ['Valid ID Proof (Aadhaar / PAN)', 'Passenger details (name, age, contact)'],
    eligibility: 'Any individual needing to book travel tickets.',
    processSteps: ['Provide journey details (date, destination, class)', 'We check availability', 'Select preferred seats/class', 'Make payment', 'Receive ticket / e-ticket'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Service charge applicable. Please contact us for confirmation.'
  },
  {
    id: 34, slug: 'electricity-bill-payment', category: 'online',
    name: 'Electricity Bill Payment', icon: 'Zap',
    description: 'Pay your electricity bill online for MSEDCL and other electricity providers.',
    documentsRequired: ['Consumer Number / Account Number from bill'],
    eligibility: 'Any electricity consumer.',
    processSteps: ['Provide consumer number', 'Check bill amount online', 'Confirm payment', 'Receipt generated instantly'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 35, slug: 'mobile-dth-recharge', category: 'online',
    name: 'Mobile / DTH Recharge', icon: 'Smartphone',
    description: 'Recharge any mobile number (all operators) or DTH service instantly.',
    documentsRequired: ['Mobile number / DTH subscriber ID'],
    eligibility: 'Any individual.',
    processSteps: ['Provide mobile/DTH number and recharge amount', 'Select plan (if needed)', 'Payment processed', 'Recharge confirmed instantly'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 36, slug: 'fastag-recharge', category: 'online',
    name: 'FASTag Recharge', icon: 'Car',
    description: 'Recharge your FASTag (RFID tag for toll payments) for seamless toll payment on national highways.',
    documentsRequired: ['FASTag Account Number / Vehicle Registration Number'],
    eligibility: 'Any FASTag holder.',
    processSteps: ['Provide FASTag account/vehicle number', 'Confirm recharge amount', 'Payment processed', 'Balance updated instantly'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },

  // ─── F. Education Services ───
  {
    id: 37, slug: 'school-college-admission', category: 'education',
    name: 'School / College Admission Form', icon: 'School',
    description: 'Assistance in filling school or college admission forms for new admissions, including government and private institutions.',
    documentsRequired: ['Aadhaar Card', 'Previous Marksheets', 'Transfer/School Leaving Certificate', 'Caste Certificate (if applicable)', 'Passport-size Photographs'],
    eligibility: 'Students seeking admissions.',
    processSteps: ['Bring all documents', 'We access admission portal', 'Fill form accurately', 'Upload documents', 'Submit and provide acknowledgment'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary by institution. Please contact or visit our office for confirmation.'
  },
  {
    id: 38, slug: 'exam-form-filling', category: 'education',
    name: 'Exam Form Filling', icon: 'Edit3',
    description: 'Assistance in filling examination forms for SSC, HSC, University exams, competitive exams, and board exams.',
    documentsRequired: ['Aadhaar Card', 'Previous Marksheet', 'School/College ID', 'Passport-size Photograph'],
    eligibility: 'Students registered with respective boards/universities.',
    processSteps: ['Bring all documents', 'Access exam portal', 'Fill form accurately', 'Upload documents and pay fees', 'Provide acknowledgment slip'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary by exam board. Please contact or visit our office for confirmation.'
  },
  {
    id: 39, slug: 'result-download', category: 'education',
    name: 'Result Download', icon: 'BarChart',
    description: 'Download examination results for SSC, HSC, university, and competitive exams.',
    documentsRequired: ['Roll Number / Application Number', 'Date of Birth (if required)'],
    eligibility: 'Any student who appeared for examinations.',
    processSteps: ['Provide roll number and exam details', 'Access official result website', 'Download result', 'Print result'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 40, slug: 'marksheet-download', category: 'education',
    name: 'Marksheet / Certificate Download', icon: 'Award',
    description: 'Download digital marksheets and certificates from DigiLocker or official board websites.',
    documentsRequired: ['Roll Number / Registration Number', 'Aadhaar Number (for DigiLocker)'],
    eligibility: 'Students and graduates with valid roll/registration numbers.',
    processSteps: ['Provide roll number and board details', 'Access DigiLocker or board website', 'Download digital marksheet/certificate', 'Print if required'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },

  // ─── G. Printing & Digital ───
  {
    id: 41, slug: 'color-printing', category: 'printing',
    name: 'Color Printing', icon: 'Printer',
    description: 'Vibrant colour prints for presentations, brochures, posters and project work.',
    documentsRequired: ['File to print (PDF, JPG, PNG)'],
    eligibility: 'Anyone requiring color prints.',
    processSteps: ['Upload file', 'Select print size and quantity', 'We print and deliver to your doorstep'],
    processingTime: 'Same Day', charges: '₹9 / page (A4)', notes: 'High-quality 100 GSM paper used for standard prints.'
  },
  {
    id: 42, slug: 'bw-printing', category: 'printing',
    name: 'Black & White Printing', icon: 'FileText',
    description: 'Sharp monochrome prints for forms, assignments, reports and office documents.',
    documentsRequired: ['File to print (PDF, JPG, PNG)'],
    eligibility: 'Anyone requiring B&W prints.',
    processSteps: ['Upload file', 'Select print size and quantity', 'We print and deliver to your doorstep'],
    processingTime: 'Same Day', charges: '₹1.50 / page (A4)', notes: 'Bulk discount available for large volume printing.'
  },
  {
    id: 43, slug: 'blackbook-printing', category: 'printing',
    name: 'Blackbook Printing', icon: 'BookOpen',
    description: 'Clear and durable blackbook print service for projects, records, and submissions.',
    documentsRequired: ['Project file (PDF)'],
    eligibility: 'Students and professionals.',
    processSteps: ['Upload project file', 'Specify binding requirements', 'We print, bind, and deliver'],
    processingTime: '1-2 Days', charges: 'Contact for best price', notes: 'Includes premium black rexine binding with golden embossing.'
  },
  {
    id: 44, slug: 'jumbo-xerox', category: 'printing',
    name: 'Jumbo Xerox (A3, A2, A1, A0)', icon: 'Maximize2',
    description: 'Large-size xerox and copy solutions available in A3, A2, A1, A0, A00 for drawings, plans, posters, and charts.',
    documentsRequired: ['File to print or original physical copy'],
    eligibility: 'Architects, engineers, students, and businesses.',
    processSteps: ['Upload digital file or provide physical copy', 'Select required paper size', 'We print and deliver'],
    processingTime: 'Same Day', charges: 'Varies by size (A3 starting at ₹3)', notes: 'High precision plotting available for CAD drawings.'
  },
  {
    id: 45, slug: 'visiting-card-printing', category: 'printing',
    name: 'Visiting Card Printing', icon: 'CreditCard',
    description: 'Neat visiting card printing with quality finish for personal and business use.',
    documentsRequired: ['Design file (PDF/CDR/AI) or we can design it for you'],
    eligibility: 'Business owners and professionals.',
    processSteps: ['Provide design or select template', 'Choose paper quality (matte, glossy, textured)', 'We print and deliver'],
    processingTime: '1-2 Days', charges: 'Starting from ₹300 / 1000 cards', notes: 'Double-sided and spot UV options available.'
  },
  {
    id: 46, slug: 'all-size-scanning', category: 'printing',
    name: 'All Size Scanning', icon: 'Scan',
    description: 'Document scanning support in multiple sizes for records, forms, and submissions.',
    documentsRequired: ['Original documents'],
    eligibility: 'Anyone needing digital copies.',
    processSteps: ['Provide physical documents', 'We scan in high resolution (PDF/JPG)', 'Files sent via WhatsApp/Email'],
    processingTime: 'Instant', charges: 'Contact for latest charges', notes: 'Bulk scanning available for offices.'
  },
  {
    id: 47, slug: 'smart-card-printing', category: 'printing',
    name: 'Smart Card Printing', icon: 'CreditCard',
    description: 'Smart card printing for ID cards, membership cards, office cards and custom cards. Starting from ₹80.',
    documentsRequired: ['Data and photos for ID cards'],
    eligibility: 'Schools, offices, clubs, and organizations.',
    processSteps: ['Provide card design and employee data', 'We print on high-quality PVC', 'Delivery to your office/home'],
    processingTime: '1-3 Days', charges: 'Starting from ₹80 / card', notes: 'Lanyard and card holder also provided on request.'
  },
  {
    id: 48, slug: 'letterhead-print', category: 'printing',
    name: 'Letterhead Print', icon: 'FileBadge',
    description: 'Professional letterhead printing for offices, shops, and local business branding.',
    documentsRequired: ['Company logo and details'],
    eligibility: 'Businesses and professionals.',
    processSteps: ['Provide design or logo', 'Select paper quality (Bond paper recommended)', 'We print and deliver'],
    processingTime: '1-2 Days', charges: 'Contact for best price', notes: 'Premium Alabaster and Bond paper available.'
  },
  {
    id: 49, slug: 'passport-photos', category: 'printing',
    name: 'Passport Photos', icon: 'Image',
    description: 'Quick passport-size photo prints with clean framing and fast delivery.',
    documentsRequired: ['Digital photo (we can also click in-store)'],
    eligibility: 'Anyone requiring official photos.',
    processSteps: ['Upload your photo', 'We crop, adjust lighting, and format to correct size', 'Printed and delivered'],
    processingTime: 'Same Day', charges: 'Contact for latest charges', notes: 'Printed on premium glossy photo paper.'
  },
  {
    id: 50, slug: 'project-printing', category: 'printing',
    name: 'Project Printing', icon: 'GraduationCap',
    description: 'Complete support for school and college projects with print and finishing options.',
    documentsRequired: ['Project files (PDF/Word)'],
    eligibility: 'Students.',
    processSteps: ['Upload project files', 'Select binding and cover page options', 'We print, bind, and deliver'],
    processingTime: 'Same Day', charges: 'Contact for latest charges', notes: 'Special discounts for bulk college submissions.'
  },
  {
    id: 51, slug: 'billbook-print', category: 'printing',
    name: 'Billbook Print', icon: 'Receipt',
    description: 'Custom billbook printing for daily billing, invoicing, and store operations.',
    documentsRequired: ['Shop details, logo, and terms'],
    eligibility: 'Shopkeepers and businesses.',
    processSteps: ['Provide business details', 'We prepare the layout', 'Printed in duplicate/triplicate format', 'Delivered'],
    processingTime: '2-4 Days', charges: 'Contact for best price', notes: 'Available in A4, A5, and custom sizes with serial numbering.'
  },
  {
    id: 52, slug: 'cartridge-refilling', category: 'printing',
    name: 'Cartridge Refilling', icon: 'Droplet',
    description: 'Reliable ink and toner cartridge refilling for regular office and home printing.',
    documentsRequired: ['Empty cartridge'],
    eligibility: 'Printer owners.',
    processSteps: ['Bring or send empty cartridge', 'We clean and refill with high-quality ink/toner', 'Test print provided'],
    processingTime: 'Same Day', charges: 'Contact for latest charges', notes: 'Compatible with HP, Canon, Epson, Brother.'
  },
  {
    id: 53, slug: 'computer-accessories', category: 'printing',
    name: 'Computer Accessories', icon: 'Mouse',
    description: 'Essential computer accessories including cables, peripherals, and daily-use items.',
    documentsRequired: ['None'],
    eligibility: 'Anyone.',
    processSteps: ['Tell us what you need', 'We check stock', 'Delivered to your location'],
    processingTime: 'Same Day', charges: 'Varies by item', notes: 'Mouse, keyboards, pen drives, cables available.'
  },
  {
    id: 54, slug: 'custom-rubber-stamps', category: 'printing',
    name: 'Custom Rubber Stamps', icon: 'CheckSquare',
    description: 'Quick manufacturing of self-inking, pre-inked, and traditional rubber stamps for official business use.',
    documentsRequired: ['Stamp matter / Shop Act License (for proprietary stamps)'],
    eligibility: 'Businesses, doctors, lawyers, professionals.',
    processSteps: ['Provide stamp content', 'Select stamp type (Self-inking/Nylon)', 'Manufactured and delivered'],
    processingTime: 'Same Day', charges: 'Contact for latest charges', notes: 'Company round seal and pocket stamps available.'
  },
  {
    id: 55, slug: 'stationery-products', category: 'printing',
    name: 'Stationery Products', icon: 'PenTool',
    description: 'Daily-use stationery, notebooks, pens, files, and office essentials in one place.',
    documentsRequired: ['None'],
    eligibility: 'Students, offices, anyone.',
    processSteps: ['Order required items', 'We package and deliver'],
    processingTime: 'Same Day', charges: 'MRP / Discounted rates', notes: 'Bulk supply for offices available.'
  },
  {
    id: 56, slug: 'spiral-binding', category: 'printing',
    name: 'Spiral Binding', icon: 'Book',
    description: 'Professional binding for project reports, files and presentations.',
    documentsRequired: ['Documents to be bound'],
    eligibility: 'Anyone.',
    processSteps: ['Provide printed documents or upload files to print', 'We punch and bind with transparent covers', 'Delivered'],
    processingTime: 'Instant / Same Day', charges: 'Contact for latest charges', notes: 'Wire-O binding also available.'
  },
  {
    id: 57, slug: 'lamination', category: 'printing',
    name: 'Lamination', icon: 'Layers',
    description: 'Protect important certificates, ID cards and documents with durable lamination.',
    documentsRequired: ['Original documents'],
    eligibility: 'Anyone.',
    processSteps: ['Provide documents', 'We laminate using high-quality pouches', 'Delivered securely'],
    processingTime: 'Same Day', charges: 'Contact for latest charges', notes: 'A4, A3, and ID card sizes available.'
  },
  {
    id: 58, slug: 'photocopy-xerox', category: 'printing',
    name: 'Xerox / Photocopy', icon: 'Copy',
    description: 'Affordable photocopying for books, forms, IDs and daily office needs.',
    documentsRequired: ['Original documents'],
    eligibility: 'Anyone.',
    processSteps: ['Provide documents', 'Specify quantity and B/W or Color', 'Copied and delivered'],
    processingTime: 'Same Day', charges: '₹1.50 / page (B&W)', notes: 'Back-to-back copying available.'
  },
  {
    id: 59, slug: 'sticker-label-printing', category: 'printing',
    name: 'Sticker & Label Printing', icon: 'Tag',
    description: 'Product labels, MRP & barcode labels, name stickers — custom sizes, same day.',
    documentsRequired: ['Design file (PDF/JPG)'],
    eligibility: 'Businesses, schools, product manufacturers.',
    processSteps: ['Upload design', 'Specify dimensions and shape', 'Printed on adhesive sheets and delivered'],
    processingTime: '1-2 Days', charges: 'Contact for latest charges', notes: 'Die-cut and kiss-cut options available.'
  },
  {
    id: 60, slug: 'aadhaar-pan-print', category: 'printing',
    name: 'Aadhaar & PAN Card Print', icon: 'IdCard',
    description: 'PVC card-size prints from your e-Aadhaar, ID xerox for forms, lamination.',
    documentsRequired: ['e-Aadhaar PDF or PAN PDF (password if any)'],
    eligibility: 'Aadhaar/PAN holders.',
    processSteps: ['Upload e-Aadhaar/PAN PDF securely', 'We print on PVC or high-quality photo paper', 'Delivered securely'],
    processingTime: 'Same Day', charges: 'Contact for latest charges', notes: 'Strict data privacy maintained.'
  },
  {
    id: 61, slug: 'resume-making', category: 'printing',
    name: 'Online Resume / CV Making', icon: 'FileText',
    description: 'Professional resume and CV creation service. We create well-formatted, ATS-friendly resumes for job applications.',
    documentsRequired: ['Personal details (name, contact, address)', 'Educational qualifications', 'Work experience details', 'Skills and achievements'],
    eligibility: 'Anyone seeking employment or career change.',
    processSteps: ['Provide all details', 'We design professional resume', 'Review and approve', 'Print or digital copy provided'],
    processingTime: '1–2 hours',
    charges: 'Contact for latest charges',
    notes: 'Multiple formats available. Documents and process may vary.'
  },

  // ─── H. Other Services ───
  {
    id: 62, slug: 'sim-card-activation', category: 'other',
    name: 'SIM Card Activation', icon: 'SimCard',
    description: 'Assistance with SIM card activation for various telecom operators.',
    documentsRequired: ['Aadhaar Card', 'PAN Card / Valid ID Proof', 'Passport-size Photograph'],
    eligibility: 'Any Indian resident.',
    processSteps: ['Provide required KYC documents', 'Fill SIM application form', 'Biometric/OTP verification', 'SIM activated within 24–48 hours'],
    processingTime: '24–48 hours',
    charges: 'Contact for latest charges',
    notes: 'Subject to operator availability. Documents and process may vary.'
  },
  {
    id: 63, slug: 'whatsapp-email-support', category: 'other',
    name: 'WhatsApp / Email Support', icon: 'MessageCircle',
    description: 'We provide guidance and support for document submission via WhatsApp and email for various services.',
    documentsRequired: ['As per the service being availed'],
    eligibility: 'Anyone needing remote assistance.',
    processSteps: ['Contact us on WhatsApp or Email', 'Share required documents digitally', 'We process your request', 'Updates provided on WhatsApp/Email'],
    processingTime: 'Varies by service',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary depending on service.'
  },
  {
    id: 64, slug: 'csc-services', category: 'other',
    name: 'CSC Services', icon: 'Building2',
    description: 'Common Service Center (CSC) services providing government-to-citizen services including digital payments, certificates, and utility services.',
    documentsRequired: ['Varies by service'],
    eligibility: 'Any citizen requiring CSC services.',
    processSteps: ['Select required CSC service', 'Provide necessary documents', 'Service processed via CSC portal', 'Receipt/Certificate issued'],
    processingTime: 'Varies by service',
    charges: 'Contact for latest charges',
    notes: 'Subject to CSC registration status. Documents and process may vary.'
  },
  {
    id: 65, slug: 'udyam-registration', category: 'other',
    name: 'Udyam Registration (MSME)', icon: 'Factory',
    description: 'Register your micro, small, or medium enterprise (MSME) under the Udyam Registration portal for government benefits and schemes.',
    documentsRequired: ['Aadhaar Card of owner', 'PAN Card', 'Business Address Proof', 'Bank Account Details', 'NIC Code (business activity code)'],
    eligibility: 'Micro, Small, and Medium Enterprises (MSMEs) in manufacturing or service sector.',
    processSteps: ['Gather all documents', 'Access Udyam Registration portal', 'Fill business details', 'OTP verification on Aadhaar', 'Udyam Registration Certificate issued'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Udyam Registration is free on the official portal. Documents and process may vary.'
  },
  {
    id: 66, slug: 'gst-registration', category: 'other',
    name: 'GST Registration (Basic Help)', icon: 'Receipt',
    description: 'Assistance with basic GST (Goods and Services Tax) registration for businesses and traders.',
    documentsRequired: ['PAN Card of business/owner', 'Aadhaar Card', 'Business Address Proof', 'Bank Account Statement / Cancelled Cheque', 'Digital Signature Certificate (DSC) if applicable'],
    eligibility: 'Businesses with annual turnover exceeding threshold limits (₹20 lakh for services, ₹40 lakh for goods).',
    processSteps: ['Gather required documents', 'Register on GST portal', 'Fill application form (REG-01)', 'Submit documents', 'GSTIN issued within 3–5 days'],
    processingTime: '3–5 working days',
    charges: 'Contact for latest charges',
    notes: 'For complex GST matters, please consult a CA. Documents and process may vary.'
  },

  // ─── I. Smart Card Services ───
  {
    id: 67, slug: 'aadhaar-pvc-smart-card', category: 'smartcard',
    name: 'Aadhaar PVC Smart Card', icon: 'CreditCard',
    description: 'Durable PVC credit-card-sized Aadhaar card with embedded security features from UIDAI.',
    documentsRequired: ['Aadhaar Number', 'Registered Mobile Number'],
    eligibility: 'Any Aadhaar card holder.',
    processSteps: ['Provide Aadhaar number', 'OTP verification', 'Order placed online', 'Delivered by India Post'],
    processingTime: '5–10 days',
    charges: 'Contact for latest charges',
    documentsRequired: ['Aadhaar Card', 'Mobile Number linked to Aadhaar'],
    eligibility: 'Any Indian resident.',
    processSteps: ['Provide Aadhaar and mobile number', 'OTP verification', 'ABHA ID created instantly', 'ABHA card printed'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 57, slug: 'driving-licence-smart-card', category: 'smartcard',
    name: 'Driving Licence Smart Card (DL Card)', icon: 'Car',
    description: 'Assistance with applying for a new DL smart card or renewal through the Parivahan portal.',
    documentsRequired: ['Aadhaar Card', 'Age Proof', 'Address Proof', 'Passport-size Photograph', 'Learning Licence (for new DL)'],
    eligibility: 'Individuals meeting minimum age requirements (18 for LMV, 20 for HMV).',
    processSteps: ['Online application on Parivahan portal', 'Book appointment at RTO', 'Appear for driving test', 'DL smart card issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 58, slug: 'vehicle-rc-smart-card', category: 'smartcard',
    name: 'Vehicle RC Smart Card', icon: 'CarFront',
    description: 'Apply for or renew the Registration Certificate (RC) smart card for your vehicle through RTO.',
    documentsRequired: ['Vehicle Registration Details', 'Insurance Certificate', 'PUC Certificate', 'Aadhaar Card'],
    eligibility: 'Vehicle owners needing new RC or renewal.',
    processSteps: ['Apply on Parivahan portal', 'Submit documents', 'RTO verification', 'RC smart card issued/delivered'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 59, slug: 'ayushman-golden-card', category: 'smartcard',
    name: 'Ayushman Golden Card Print', icon: 'Badge',
    description: 'Print your Ayushman Bharat Golden Card for cashless treatment at empanelled hospitals.',
    documentsRequired: ['Aadhaar Card', 'Existing Ayushman Bharat beneficiary number'],
    eligibility: 'PMJAY beneficiaries.',
    processSteps: ['Verify Ayushman beneficiary status', 'Biometric verification', 'Golden card printed on site'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 60, slug: 'abha-card-registration', category: 'smartcard',
    name: 'ABHA Card Registration & Print', icon: 'Printer',
    description: 'Register for ABHA (Ayushman Bharat Health Account) and get your ABHA card printed.',
    documentsRequired: ['Aadhaar Card', 'Mobile Number'],
    eligibility: 'Any Indian resident.',
    processSteps: ['Register ABHA ID using Aadhaar', 'OTP verification', 'ABHA card generated', 'Print at our center'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 61, slug: 'e-shram-card', category: 'smartcard',
    name: 'E-Shram Card', icon: 'Hammer',
    description: 'Register on the e-Shram portal and get an e-Shram card for unorganized sector workers providing access to social security benefits.',
    documentsRequired: ['Aadhaar Card', 'Mobile Number linked to Aadhaar', 'Bank Account Details'],
    eligibility: 'Unorganized sector workers aged 16–59 not covered by EPFO/ESIC.',
    processSteps: ['Access e-Shram portal', 'Register with Aadhaar OTP', 'Fill employment details', 'UAN generated', 'e-Shram card printed'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 62, slug: 'labour-card', category: 'smartcard',
    name: 'Labour Card', icon: 'HardHat',
    description: 'Registration and card issuance under Maharashtra Building and Other Construction Workers (BOCW) welfare scheme.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Proof of work as construction/labour worker', 'Bank Passbook', 'Passport-size Photograph'],
    eligibility: 'Construction and other building workers aged 18–60.',
    processSteps: ['Fill application form', 'Attach documents', 'Submit at Labour Department', 'Verification', 'Labour card issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 63, slug: 'atm-debit-card', category: 'smartcard',
    name: 'ATM / Debit Card Apply', icon: 'CreditCard',
    description: 'Assistance in applying for ATM / Debit card for your existing bank account.',
    documentsRequired: ['Bank Account Passbook', 'Aadhaar Card', 'PAN Card'],
    eligibility: 'Existing bank account holders.',
    processSteps: ['Fill debit card application form', 'Submit to bank', 'Card delivered within 7–10 days', 'Activate via ATM or net banking'],
    processingTime: '7–10 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary by bank. Please contact or visit our office.'
  },
  {
    id: 64, slug: 'rupay-card', category: 'smartcard',
    name: 'RuPay Card Apply', icon: 'CreditCard',
    description: 'Apply for a RuPay debit card — India\'s indigenous payment card network offering domestic and international payment acceptance.',
    documentsRequired: ['Bank Account Details', 'Aadhaar Card', 'PAN Card'],
    eligibility: 'Existing bank account holders.',
    processSteps: ['Apply at bank / our center', 'Submit KYC documents', 'RuPay card issued', 'Activate card'],
    processingTime: '7–10 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 65, slug: 'kisan-credit-card', category: 'smartcard',
    name: 'Kisan Credit Card (KCC)', icon: '🌾',
    description: 'Apply for Kisan Credit Card providing farmers with affordable short-term credit for agricultural needs.',
    documentsRequired: ['Aadhaar Card', 'Land Records (7/12 extract)', 'PAN Card', 'Bank Account Passbook', 'Passport-size Photograph'],
    eligibility: 'Farmers, fishermen, self-help groups, and other allied agricultural workers.',
    processSteps: ['Fill KCC application at our center', 'Attach land and KYC documents', 'Submit at bank', 'Bank verification and approval', 'KCC issued'],
    processingTime: '7–15 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 66, slug: 'pm-jan-dhan-card', category: 'smartcard',
    name: 'PM Jan Dhan Card', icon: 'Landmark',
    description: 'Open a Pradhan Mantri Jan Dhan Yojana (PMJDY) zero-balance bank account and get a RuPay debit card with ₹2 lakh accident insurance.',
    documentsRequired: ['Aadhaar Card', 'Passport-size Photograph'],
    eligibility: 'Indian residents who do not have any bank account (unbanked individuals).',
    processSteps: ['Fill Jan Dhan account opening form', 'Submit at bank or our center', 'Account opened with zero balance', 'RuPay card issued with ₹2 lakh accidental insurance'],
    processingTime: '1–3 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 67, slug: 'student-id-card', category: 'smartcard',
    name: 'Student ID Card (PVC)', icon: '🎒',
    description: 'Design and print custom PVC student ID cards for schools, colleges, and educational institutes.',
    documentsRequired: ['Student\'s photograph', 'Student\'s name, class, roll number, institution name', 'Institution logo (if available)'],
    eligibility: 'Any student or educational institution.',
    processSteps: ['Provide student details and photo', 'Design ID card', 'Print on PVC card', 'Laminate or heat seal'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Bulk orders available. Documents and process may vary.'
  },
  {
    id: 68, slug: 'school-college-smart-id', category: 'smartcard',
    name: 'School / College Smart ID Card', icon: '🏫',
    description: 'Custom smart ID cards for schools and colleges with optional barcode/QR code and institution branding.',
    documentsRequired: ['Student photograph', 'Institution details', 'Student personal details'],
    eligibility: 'Educational institutions and students.',
    processSteps: ['Provide all details and photos', 'Design approved', 'Cards printed on PVC', 'Delivered or collected'],
    processingTime: '1–2 days for bulk',
    charges: 'Contact for latest charges',
    notes: 'Bulk discounts available. Documents and process may vary.'
  },
  {
    id: 69, slug: 'library-card', category: 'smartcard',
    name: 'Library Card', icon: '📚',
    description: 'Custom PVC library membership cards for public or private libraries.',
    documentsRequired: ['Aadhaar Card', 'Photograph', 'Library membership details'],
    eligibility: 'Library members.',
    processSteps: ['Provide membership details and photo', 'Design card', 'Print on PVC', 'Card ready'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 70, slug: 'dl-pvc-print', category: 'smartcard',
    name: 'Driving Licence PVC Print', icon: '🚘',
    description: 'Print your Driving Licence in PVC card format for durability and easy carrying.',
    documentsRequired: ['Original DL / DL number', 'Aadhaar Card'],
    eligibility: 'Any valid DL holder.',
    processSteps: ['Provide DL number', 'Download DL from Parivahan portal', 'Print in PVC card format', 'Laminate and deliver'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 71, slug: 'vehicle-rc-pvc-print', category: 'smartcard',
    name: 'Vehicle RC PVC Print', icon: 'Car',
    description: 'Print your Vehicle Registration Certificate (RC) in PVC card format.',
    documentsRequired: ['Vehicle Registration Number', 'Owner\'s Aadhaar Card'],
    eligibility: 'Any vehicle owner.',
    processSteps: ['Provide vehicle registration number', 'Download RC from Parivahan portal', 'Print in PVC card format', 'Deliver'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 72, slug: 'fastag-card', category: 'smartcard',
    name: 'FASTag Card', icon: '🚦',
    description: 'Assistance in obtaining a new FASTag RFID sticker for your vehicle for cashless toll payment on national highways.',
    documentsRequired: ['Vehicle RC', 'Aadhaar Card', 'PAN Card / Valid ID Proof', 'Vehicle Front Photo'],
    eligibility: 'All vehicle owners.',
    processSteps: ['Fill FASTag application form', 'Submit KYC and vehicle documents', 'FASTag issued', 'Stick to vehicle windshield', 'Recharge and activate'],
    processingTime: '1–3 days',
    charges: 'Contact for latest charges',
    notes: 'FASTag is mandatory for all four-wheelers. Documents and process may vary.'
  },

  // ─── J. New Services ───
  {
    id: 73, slug: 'gharpatti-transfer', category: 'certificates',
    name: 'Gharpatti Transfer', icon: 'Home',
    image: 'https://cdn-icons-png.flaticon.com/512/3229/3229986.png',
    dummyImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400',
    image: 'https://cdn-icons-png.flaticon.com/512/3229/3229986.png',
    dummyImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400',
    description: 'Assistance with Gharpatti (property tax record) transfer from one owner to another after sale, inheritance, or gift deed.',
    documentsRequired: ['Old Gharpatti / Property Tax Receipt', 'Sale Deed / Gift Deed / Succession Certificate', 'Aadhaar Card of both parties', 'Address Proof', 'Passport-size Photographs'],
    eligibility: 'New property owners who need to transfer the Gharpatti into their name.',
    processSteps: ['Gather required documents', 'Fill Gharpatti transfer application form', 'Submit at Gram Panchayat / Municipal Office', 'Verification by revenue officer', 'Updated Gharpatti issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary by local authority. Please contact or visit our office for confirmation.'
  },
  {
    id: 74, slug: 'gharpatti-correction', category: 'certificates',
    name: 'Gharpatti Correction', icon: 'FileEdit',
    description: 'Correct errors in your existing Gharpatti such as name spelling, area, survey number, or address details.',
    documentsRequired: ['Original Gharpatti', 'Supporting documents for correction', 'Aadhaar Card', 'Application on plain paper'],
    eligibility: 'Property owners with incorrect details in their Gharpatti.',
    processSteps: ['Identify errors in existing Gharpatti', 'Gather supporting documents', 'Submit correction application', 'Verification by authorities', 'Corrected Gharpatti issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 75, slug: 'light-bill-name-transfer', category: 'other',
    name: 'Light Bill Name Transfer & Correction', icon: 'Zap',
    image: 'https://cdn-icons-png.flaticon.com/512/2862/2862661.png',
    dummyImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400',
    image: 'https://cdn-icons-png.flaticon.com/512/2862/2862661.png',
    dummyImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400',
    description: 'Transfer electricity bill connection name to a new owner or correct existing name/address details with MSEDCL.',
    documentsRequired: ['Latest Electricity Bill', 'Property Ownership Proof (Sale Deed / Gharpatti)', 'Aadhaar Card', 'No Objection Certificate from previous owner (for transfer)'],
    eligibility: 'New property owners or existing consumers needing corrections.',
    processSteps: ['Visit our center with documents', 'Fill MSEDCL name transfer/correction form', 'Submit application at MSEDCL office', 'Verification and processing', 'Updated bill issued in new name'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 76, slug: 'ration-card-new-name-add', category: 'identity',
    name: 'Ration Card – New Card / Name Add', icon: 'ClipboardEdit',
    image: 'https://cdn-icons-png.flaticon.com/512/3034/3034873.png',
    dummyImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
    image: 'https://cdn-icons-png.flaticon.com/512/3034/3034873.png',
    dummyImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400',
    description: 'Apply for a new ration card or add/remove family member names from an existing ration card under the Public Distribution System (PDS).',
    documentsRequired: ['Aadhaar Card of all family members', 'Address Proof', 'Income Certificate', 'Existing Ration Card (for modification)', 'Passport-size Photographs'],
    eligibility: 'Indian residents eligible under PDS guidelines for BPL/APL/AAY categories.',
    processSteps: ['Fill ration card application form', 'Attach family members\' Aadhaar and photos', 'Submit at Tahsil / our center', 'Field verification by supply officer', 'Ration card issued or updated'],
    processingTime: '30–45 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 77, slug: 'loan-application', category: 'banking',
    name: 'Loan Application Assistance', icon: 'Landmark',
    image: 'https://cdn-icons-png.flaticon.com/512/3503/3503023.png',
    dummyImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400',
    image: 'https://cdn-icons-png.flaticon.com/512/3503/3503023.png',
    dummyImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=400',
    description: 'Professional assistance with personal loan, home loan, education loan, and business loan applications at various banks.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Income Proof (Salary Slips / ITR)', 'Bank Statements (6 months)', 'Property Documents (for home loan)', 'Passport-size Photographs'],
    eligibility: 'Salaried individuals, self-employed professionals, and business owners meeting bank eligibility criteria.',
    processSteps: ['Discuss loan requirements and eligibility', 'Choose suitable bank and loan product', 'Fill loan application form', 'Attach all required KYC and income documents', 'Submit to bank and follow up'],
    processingTime: '7–30 days (depending on loan type)',
    charges: 'Contact for latest charges',
    notes: 'Loan approval subject to bank policies. Documents and process may vary.'
  },
  {
    id: 78, slug: 'pf-account', category: 'banking',
    name: 'PF Account Services', icon: 'ShieldCheck',
    description: 'Assistance with Employee Provident Fund (EPF) account-related services including UAN activation, KYC update, PF withdrawal, and transfer.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'UAN Number', 'Bank Account Details', 'Previous Employer Details (for transfer)'],
    eligibility: 'Employees/ex-employees with EPF accounts.',
    processSteps: ['Provide UAN and personal details', 'We assist with the required EPF service', 'Online submission via EPFO portal', 'Track claim status', 'Amount credited to bank account'],
    processingTime: '7–20 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 79, slug: 'senior-citizen-certificate', category: 'certificates',
    name: 'Senior Citizen Certificate', icon: 'UserPlus',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    dummyImage: 'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&q=80&w=400',
    description: 'Obtain a Senior Citizen Certificate as proof of age (60+) for availing government benefits, pension, travel concessions, and healthcare discounts.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Date of Birth Proof (Birth Certificate / School LC / Passport)', 'Passport-size Photograph', 'Address Proof'],
    eligibility: 'Indian residents aged 60 years and above.',
    processSteps: ['Fill senior citizen certificate application', 'Attach age proof and identity documents', 'Submit at Tehsil / Municipal office', 'Verification by authorities', 'Certificate issued'],
    processingTime: '7–15 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 80, slug: 'non-creamy-layer-certificate', category: 'certificates',
    name: 'Non-Creamy Layer Certificate', icon: 'FileBadge',
    image: 'https://cdn-icons-png.flaticon.com/512/2921/2921222.png',
    dummyImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=400',
    description: 'Obtain a Non-Creamy Layer (NCL) certificate for OBC category candidates, required for reservation benefits in education and government jobs.',
    documentsRequired: ['Aadhaar Card', 'Caste Certificate', 'Income Certificate', 'Father\'s Income Proof (Salary Slips / ITR)', 'Ration Card', 'Affidavit on stamp paper'],
    eligibility: 'OBC category individuals whose family income falls within the non-creamy layer limit set by the government.',
    processSteps: ['Fill NCL certificate application', 'Attach caste and income documents', 'Submit at SDM / Tehsil office', 'Income verification by revenue officer', 'NCL certificate issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Income limits are updated periodically. Documents and process may vary.'
  },
  {
    id: 81, slug: 'food-licence', category: 'other',
    name: 'Food Licence (FSSAI)', icon: '🍽️',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/FSSAI_logo.svg/512px-FSSAI_logo.svg.png',
    dummyImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=400',
    description: 'Assistance with FSSAI Food Safety Licence registration for food businesses, restaurants, hotels, bakeries, and food vendors.',
    documentsRequired: ['Aadhaar Card of Owner', 'PAN Card', 'Business Address Proof', 'Passport-size Photograph', 'Food Safety Management Plan (for State/Central licence)', 'Water Testing Report'],
    eligibility: 'All food business operators including manufacturers, retailers, restaurants, and online food sellers.',
    processSteps: ['Determine licence type (Basic / State / Central)', 'Fill FSSAI application form', 'Upload required documents on FSSAI portal', 'Pay government fees', 'Inspection (if applicable)', 'Licence issued'],
    processingTime: '7–60 days (depending on licence type)',
    charges: 'Contact for latest charges',
    notes: 'Basic Registration for small businesses, State Licence for medium, Central Licence for large. Documents may vary.'
  },
  {
    id: 82, slug: 'society-name-registration', category: 'other',
    name: 'Society Name Registration', icon: 'Building2',
    image: 'https://cdn-icons-png.flaticon.com/512/2942/2942555.png',
    dummyImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
    description: 'Assistance with cooperative housing society registration and name registration under the Maharashtra Co-operative Societies Act.',
    documentsRequired: ['Society Formation Resolution', 'List of Members with ID Proofs', 'Address Proof of Society', 'Proposed Society Bylaws', 'Application Form', 'Government Fees Challan'],
    eligibility: 'A minimum of 10 members (individuals or organizations) required to form a cooperative society.',
    processSteps: ['Draft society bylaws and resolutions', 'Fill registration application form', 'Attach all member documents', 'Submit at Registrar of Co-operative Societies', 'Verification and approval', 'Registration certificate issued'],
    processingTime: '30–90 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. For complex registrations, legal advice is recommended.'
  },
  {
    id: 83, slug: 'udyam-certificate', category: 'other',
    name: 'Udyam Certificate (MSME)', icon: '🏭',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/MSME_logo.png/512px-MSME_logo.png',
    dummyImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
    description: 'Register your business under Udyam Registration portal and obtain the Udyam Certificate for MSME benefits, government tenders, and subsidies.',
    documentsRequired: ['Aadhaar Card of Owner', 'PAN Card (optional for micro)', 'Business Address Proof', 'Bank Account Details', 'Business Activity/NIC Code'],
    eligibility: 'Micro, Small, and Medium Enterprises in manufacturing or service sector as per MSME classification norms.',
    processSteps: ['Provide business and personal details', 'Access Udyam Registration portal', 'Fill form with business activity details', 'OTP verification on Aadhaar', 'Udyam Registration Certificate generated instantly'],
    processingTime: 'Same day / Instant',
    charges: 'Contact for latest charges',
    notes: 'Udyam Registration is free on the official portal. Documents and process may vary.'
  },
];

export const getServiceBySlug = (slug) => services.find(s => s.slug === slug);
export const getServicesByCategory = (category) => services.filter(s => s.category === category);
export const getCategoryById = (id) => categories.find(c => c.id === id);

export const categoryColors = {
  identity: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  passport: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-700' },
  banking: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', badge: 'bg-green-100 text-green-700' },
  certificates: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200', badge: 'bg-yellow-100 text-yellow-700' },
  online: { bg: 'bg-cyan-50', text: 'text-cyan-700', border: 'border-cyan-200', badge: 'bg-cyan-100 text-cyan-700' },
  education: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  printing: { bg: 'bg-pink-50', text: 'text-pink-700', border: 'border-pink-200', badge: 'bg-pink-100 text-pink-700' },
  other: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' },
  smartcard: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', badge: 'bg-red-100 text-red-700' },
};


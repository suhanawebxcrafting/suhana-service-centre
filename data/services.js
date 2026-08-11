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
    name: 'Govt Exams & Online Form Filling', icon: 'ClipboardList',
    description: 'Struggling with complex government forms or slow websites? We provide expert assistance in filling and submitting all types of online forms accurately, including competitive exams (UPSC, MPSC, SSC, Railway), entrance exams (NEET, JEE), and state welfare schemes.',
    documentsRequired: [
      'Aadhaar Card and PAN Card / Valid ID Proof',
      'Recent Passport-size Photograph (Soft Copy & Hard Copy)',
      'Scanned Signature',
      'All relevant Educational Marksheets (10th, 12th, Degree)',
      'Category/Caste Certificate (if claiming reservation)'
    ],
    eligibility: 'Any student or citizen applying for government exams, jobs, or welfare schemes as per the official notification.',
    processSteps: [
      'Step 1: Bring the official notification/advertisement and required documents.',
      'Step 2: We scan and resize your photo, signature, and documents to exact specifications.',
      'Step 3: We fill the form carefully to ensure zero spelling or data entry mistakes.',
      'Step 4: Pay the application fee online through our secure portal.',
      'Step 5: Receive the final printed acknowledgment/application copy.'
    ],
    processingTime: 'Instant (15 to 30 Minutes)',
    charges: 'Exam Fee (Actual) + Form Filling / Internet Charges',
    notes: 'Important: Always double-check your name, DOB, and category before final submission. Modifications are usually not allowed once the fee is paid.',
    keywords: [
      'Online form filling Virar',
      'MPSC form apply online',
      'UPSC form filling agent',
      'NEET JEE application center',
      'Govt job form filling',
      'Cyber cafe near me'
    ],
    faqs: [
      { q: 'Do you help with photo and signature resizing?', a: 'Yes! Government portals are very strict about image sizes (e.g., exactly 20kb-50kb). We handle the scanning, cropping, and resizing to ensure your form is not rejected.' },
      { q: 'Can you pay the exam fee on my behalf?', a: 'Yes, if you do not have online payment methods, you can pay us in cash, and we will pay your exam fee securely using our cards/UPI.' },
      { q: 'Do you fill forms for foreign university exams like IELTS/TOEFL?', a: 'We primarily focus on Indian Government Exams, State Board Exams, and domestic entrance tests. Please inquire at our desk for specific international exams.' }
    ]
  },
  {
    id: 31, slug: 'scholarship-form', category: 'online',
    name: 'Scholarship Form (MahaDBT / NSP)', icon: 'GraduationCap',
    description: 'Don\'t miss out on your educational funds! We assist students in applying for State and Central Government scholarships on portals like MahaDBT (Maharashtra) and the National Scholarship Portal (NSP) for EBC, OBC, SC, ST, and minority students.',
    documentsRequired: [
      'Aadhaar Card (Must be linked to Bank and Mobile)',
      'Tehsildar Income Certificate',
      'Caste Certificate & Validity (if applicable)',
      'Previous Year Marksheets & Current Year Fee Receipt',
      'Bank Passbook & Bonafide Certificate'
    ],
    eligibility: 'Students pursuing higher education who meet the income and category criteria set by the respective scholarship scheme.',
    processSteps: [
      'Step 1: Check your eligibility (Income bracket, Category, Course type).',
      'Step 2: Ensure your Aadhaar is seeded with your bank account (NPCI mapping).',
      'Step 3: We register your profile on the MahaDBT or NSP portal.',
      'Step 4: Upload all scanned documents and submit the application.',
      'Step 5: Take the printout and submit it to your college for approval.'
    ],
    processingTime: 'Instant (30 Minutes)',
    charges: 'Application Filling Charges (As applicable)',
    notes: 'Aadhaar-Bank Seeding is STRICTLY mandatory for scholarships. If your bank account is not mapped to NPCI for DBT, your scholarship money will fail to credit.',
    keywords: [
      'MahaDBT form filling',
      'Scholarship apply online Virar',
      'NSP portal application',
      'EBC scholarship documents',
      'OBC scholarship form',
      'Aadhaar bank link for DBT'
    ],
    faqs: [
      { q: 'Why is my Aadhaar-Bank link status showing inactive on MahaDBT?', a: 'You need to visit your bank and submit an "Aadhaar Seeding / NPCI Mapping" form for Direct Benefit Transfer (DBT). Just linking Aadhaar to the account is not enough.' },
      { q: 'Can I apply for two scholarships at the same time?', a: 'No, as per government rules, a student can only avail the benefits of one government scholarship or freeship at a time.' },
      { q: 'Do I have to renew my application every year?', a: 'Yes, scholarships are awarded per academic year. You must submit a "Renewal Application" every year with your latest marksheets and fee receipts.' }
    ]
  },
  {
    id: 32, slug: 'job-application-form', category: 'online',
    name: 'Job Application / Resume Building', icon: 'Briefcase',
    description: 'Take the first step toward your career! We assist in filling out complex online job applications for State Boards, Railways, Banking (IBPS), Police Bharti, and Army Recruitment. We also offer basic resume/CV typing services.',
    documentsRequired: [
      'Aadhaar Card & PAN Card',
      'Educational Certificates (10th, 12th, Graduation)',
      'Experience Certificates (if applicable)',
      'Passport-size Photograph & Signature',
      'Valid Email ID and Mobile Number'
    ],
    eligibility: 'Any job seeker who meets the specific requirements (age, qualification, physical standards) of the job advertisement.',
    processSteps: [
      'Step 1: Bring the job advertisement and your documents to our center.',
      'Step 2: We create your profile on the recruitment portal (e.g., SSC, IBPS, Mahapariksha).',
      'Step 3: Carefully enter your educational and personal details.',
      'Step 4: Upload properly formatted photos and signatures.',
      'Step 5: Pay the application fee and print the final receipt.'
    ],
    processingTime: 'Instant (20 to 30 Minutes)',
    charges: 'Govt Job Application Fee + Form Filling Charges',
    notes: 'Always ensure your mobile number and email ID are active, as the recruitment board will send your exam center details and admit card via email/SMS.',
    keywords: [
      'Police bharti form fill',
      'Railway recruitment form',
      'IBPS bank exam apply',
      'SSC job application',
      'Resume typing near me',
      'Govt job form filling Virar'
    ],
    faqs: [
      { q: 'Do you provide job placement services?', a: 'No, we do not provide job placements. We only assist candidates in applying for jobs and filling out the online application forms correctly.' },
      { q: 'Can you type my resume/CV?', a: 'Yes, we provide basic resume and CV typing and formatting services. You just need to provide us with your details in a rough draft.' },
      { q: 'What happens if I make a mistake in the application?', a: 'Most government job portals have a specific "Correction Window" for 2-3 days after the application closes. A correction fee is usually charged by the board.' }
    ]
  },
  {
    id: 33, slug: 'ticket-booking', category: 'online',
    name: 'Railway / Flight / Bus Tickets', icon: 'Ticket',
    description: 'Planning a trip? We offer fast and reliable booking services for Train (IRCTC), Flight (Domestic & International), and Bus tickets. Avoid the hassle of confusing portals and let us find the best routes and prices for you.',
    documentsRequired: [
      'Passenger Names and exact Ages',
      'Valid ID Proof (Aadhaar / PAN / Passport for flights)',
      'Travel Dates and Preferred Destination',
      'Mobile Number (For PNR status SMS)'
    ],
    eligibility: 'Any individual wishing to travel.',
    processSteps: [
      'Step 1: Tell us your destination, travel date, and preferred mode of transport.',
      'Step 2: We search for the best availability, routes, and prices.',
      'Step 3: Select your preferred class (Sleeper, AC, Economy, etc.).',
      'Step 4: Make the payment (Cash/UPI/Card).',
      'Step 5: Receive your confirmed e-ticket printout instantly.'
    ],
    processingTime: 'Instant booking (Subject to seat availability)',
    charges: 'Ticket Fare + Standard Booking/Agent Commission',
    notes: 'Tatkal Train tickets open at 10:00 AM (AC classes) and 11:00 AM (Non-AC classes) one day prior to the journey. Please visit early as servers get extremely busy.',
    keywords: [
      'Train ticket booking Virar',
      'IRCTC agent near me',
      'Flight ticket booking',
      'Tatkal ticket booking',
      'Bus ticket travel agent',
      'Book train ticket online'
    ],
    faqs: [
      { q: 'Do you guarantee confirmed Tatkal tickets?', a: 'Tatkal tickets depend entirely on IRCTC server speed and seat availability at the exact moment of booking. While we try our best using official agent logins, confirmation is never 100% guaranteed.' },
      { q: 'Can I cancel my ticket and get a refund?', a: 'Yes, tickets can be cancelled. The refund amount depends on the cancellation rules of the airline, bus operator, or Indian Railways. Agent booking charges are non-refundable.' },
      { q: 'Do I need to carry a printed ticket while travelling?', a: 'For trains and buses, an SMS with PNR or a PDF on your phone along with an Original ID (Aadhaar/PAN) is completely valid. For flights, it is recommended to carry a printout.' }
    ]
  },
  {
    id: 34, slug: 'electricity-bill-payment', category: 'online',
    name: 'Electricity / Water Bill Payment', icon: 'Zap',
    description: 'Avoid long queues and late fees! Pay your MSEB (Mahavitaran) electricity bills, municipal water bills, and property taxes instantly at our center. We provide an instant stamped receipt for your records.',
    documentsRequired: [
      'Old Bill Copy / Consumer Number (For Electricity)',
      'Connection Number (For Water Bill)',
      'Property Tax Number / Assessment Number'
    ],
    eligibility: 'Any consumer wanting to pay their utility bills securely.',
    processSteps: [
      'Step 1: Bring your old bill or consumer number to our center.',
      'Step 2: We fetch your live pending bill amount from the official portal.',
      'Step 3: You pay the amount via Cash, UPI, or Card.',
      'Step 4: The bill is paid instantly on the BBPS/Mahavitaran network.',
      'Step 5: You receive a printed/digital transaction receipt immediately.'
    ],
    processingTime: 'Instant (2 Minutes)',
    charges: 'Bill Amount + Nominal Service Charge',
    notes: 'If your bill is overdue (past the due date), late payment charges as levied by the billing board will automatically be added to your total payable amount.',
    keywords: [
      'Pay MSEB bill Virar',
      'Electricity bill payment near me',
      'Mahavitaran bill pay online',
      'Water bill payment VVCMC',
      'Pay property tax Virar',
      'Light bill payment center'
    ],
    faqs: [
      { q: 'Will I get a receipt for the payment?', a: 'Yes, we provide a printed, official confirmation receipt with a transaction ID the moment your bill is paid.' },
      { q: 'Can I pay a disconnected or very old pending bill?', a: 'Yes, as long as the bill is showing active on the Mahavitaran portal, we can process the payment.' },
      { q: 'How long does it take for the payment to reflect in MSEB?', a: 'Since we use the official BBPS network, your payment is updated instantly on the electricity board\'s servers.' }
    ]
  },
  {
    id: 35, slug: 'mobile-dth-recharge', category: 'online',
    name: 'Mobile / DTH / OTT Recharge', icon: 'Smartphone',
    description: 'Instant prepaid recharges for all major telecom operators (Jio, Airtel, Vi, BSNL) and DTH providers (Tata Play, Airtel Digital, Dish TV, Videocon). We also assist in buying popular OTT subscriptions.',
    documentsRequired: [
      'Mobile Number or DTH Subscriber ID / VC Number'
    ],
    eligibility: 'Anyone requiring a mobile or TV recharge.',
    processSteps: [
      'Step 1: Provide your mobile number or DTH subscriber ID.',
      'Step 2: Tell us your desired plan or let us check the latest offers for you.',
      'Step 3: Pay via cash or UPI.',
      'Step 4: The recharge is processed instantly.',
      'Step 5: You receive the confirmation SMS on your device.'
    ],
    processingTime: 'Instant (1 Minute)',
    charges: 'Exact Plan Amount (No extra service charge for standard recharges)',
    notes: 'Please double-check your mobile number or DTH ID before confirming. Recharges done on wrong numbers cannot be reversed or refunded by the operator.',
    keywords: [
      'Mobile recharge shop near me',
      'DTH recharge Virar',
      'Tata play recharge center',
      'Airtel Jio Vi recharge',
      'OTT subscription buy',
      'Prepaid recharge agent'
    ],
    faqs: [
      { q: 'Do you charge extra for mobile recharges?', a: 'No, we do not charge any extra fees for standard mobile recharges. You only pay the exact MRP of the plan.' },
      { q: 'What if my DTH is showing an error even after recharge?', a: 'For DTH recharges, please ensure your Set-Top Box is turned ON while we process the recharge. If the error persists, we can help you refresh the account by sending an SMS to the operator.' },
      { q: 'Can you recharge postpaid mobile bills?', a: 'Yes, we accept bill payments for all major postpaid mobile connections as well.' }
    ]
  },
  {
    id: 36, slug: 'fastag-recharge', category: 'online',
    name: 'FASTag Issue & Recharge', icon: 'Car',
    description: 'Never get stuck at a toll plaza again! We issue new FASTags for your cars and commercial vehicles instantly. We also provide quick FASTag top-up services for all major banks (Paytm, HDFC, ICICI, IDFC, etc.).',
    documentsRequired: [
      'For New FASTag: Vehicle RC Book & Owner\'s Aadhaar/PAN',
      'For Recharge: Vehicle Number (Registration No.) or FASTag Wallet ID'
    ],
    eligibility: 'Owners/Drivers of any four-wheeler or commercial vehicle.',
    processSteps: [
      'Step 1: Provide your vehicle number to our executive.',
      'Step 2: We verify the linked bank and check current balance (if requested).',
      'Step 3: Pay the top-up amount via cash/UPI.',
      'Step 4: Recharge is processed on the NETC/BBPS network.',
      'Step 5: The FASTag wallet is credited instantly for seamless toll plaza crossing.'
    ],
    processingTime: 'Instant (1 Minute)',
    charges: 'Recharge Amount + Nominal Agent Convenience Fee',
    notes: 'If your FASTag is blacklisted due to low balance, it may take 15-30 minutes for the toll plaza servers to sync and remove the blacklist status after recharge.',
    keywords: [
      'FASTag recharge Virar',
      'Buy new FASTag near me',
      'Toll plaza tag top up',
      'Paytm HDFC FASTag recharge',
      'Car FASTag agent',
      'Blacklisted FASTag recharge'
    ],
    faqs: [
      { q: 'How do I know which bank my FASTag belongs to?', a: 'You don\'t need to worry. As long as you provide your correct Vehicle Registration Number (e.g., MH-48-AB-1234), our system automatically fetches the linked FASTag bank and recharges it.' },
      { q: 'Can I get a new FASTag immediately?', a: 'Yes, if you bring your vehicle\'s RC book and your KYC, we can issue and activate a new FASTag on the spot.' },
      { q: 'Why is my FASTag blacklisted?', a: 'FASTags are usually blacklisted when the wallet balance goes in the negative. Recharging it with a sufficient amount clears the negative balance and activates the tag again.' }
    ]
  },

  // ─── F. Education Services ───
  {
    id: 37, slug: 'school-college-admission', category: 'education',
    name: 'School / College Admission Form', icon: 'School',
    description: 'Ensure a smooth admission process for your child! We assist in filling out complicated online admission forms for schools (RTE Admissions, Kendriya Vidyalaya), junior colleges (FYJC 11th Online Admissions), and degree colleges (Mumbai University pre-enrollment).',
    documentsRequired: [
      'Student\'s Aadhaar Card & Previous Marksheets',
      'School Leaving Certificate (LC) / Transfer Certificate',
      'Caste Certificate & Income Certificate (If claiming reservation)',
      'Passport-size Photograph & Signature'
    ],
    eligibility: 'Any student seeking fresh admission or changing schools/colleges.',
    processSteps: [
      'Step 1: Bring your documents and the list of preferred colleges/schools.',
      'Step 2: We register the student on the official admission portal (e.g., 11th Admission portal).',
      'Step 3: Carefully upload documents and fill the option form (college preferences).',
      'Step 4: Lock the form and pay the registration fee.',
      'Step 5: Provide the final printed application for school/college submission.'
    ],
    processingTime: 'Instant (15 to 30 Minutes)',
    charges: 'Govt Registration Fee + Application Filing Charges',
    notes: 'For 11th Online Admissions in Maharashtra, the form is filled in two parts: Part 1 (Personal Details) and Part 2 (College Preferences/Option Form).',
    keywords: [
      'FYJC 11th admission online',
      'Mumbai university pre enrollment',
      'RTE admission form filling',
      'College admission cyber cafe',
      'School form fill Virar',
      'Part 2 option form'
    ],
    faqs: [
      { q: 'Can you help with RTE (Right to Education) admission forms?', a: 'Yes, we help parents fill the RTE 25% quota free admission forms for their children. You will need a valid Income Certificate or Caste Certificate to apply.' },
      { q: 'What is Mumbai University Pre-Enrollment?', a: 'Before taking admission in any degree college (B.Com, B.Sc, B.A.) affiliated with Mumbai University, it is mandatory to fill a pre-enrollment form on the MU portal. We do this at our center.' },
      { q: 'Can I change my college preferences after locking the form?', a: 'In the FYJC 11th admission process, you can unlock and change your college preferences only before the deadline of the respective merit list round.' }
    ]
  },
  {
    id: 38, slug: 'exam-form-filling', category: 'education',
    name: 'Board & University Exam Forms', icon: 'Edit3',
    description: 'Missed your college deadline? We help regular, private (Form No. 17), and ATKT/Repeater students fill their SSC, HSC, and University examination forms securely before the late fee deadlines.',
    documentsRequired: [
      'Aadhaar Card',
      'Previous Semester/Year Marksheets (For ATKT students)',
      'College ID Card or Registration Number',
      'Passport-size Photograph & Signature'
    ],
    eligibility: 'Students registered with the Maharashtra State Board, Mumbai University, or IGNOU appearing for exams.',
    processSteps: [
      'Step 1: Bring your previous marksheets and exam notification.',
      'Step 2: We access the university or board exam portal.',
      'Step 3: Select the correct subjects and apply for the exam.',
      'Step 4: Pay the exam fee online.',
      'Step 5: Provide the acknowledgment slip to submit to the college.'
    ],
    processingTime: 'Instant (15 Minutes)',
    charges: 'Exam Fee + Form Filling Charges',
    notes: 'For SSC/HSC Private Candidates (Form No. 17), you must submit the physical copy of the filled form along with original documents to the designated contact center school.',
    keywords: [
      'Mumbai university exam form',
      'Form 17 private student SSC',
      'HSC repeater form fill',
      'ATKT exam form Virar',
      'IGNOU exam form online',
      'College exam fee payment'
    ],
    faqs: [
      { q: 'What is Form No. 17?', a: 'Form 17 is for students who want to appear for the Maharashtra Board SSC (10th) or HSC (12th) exams privately, without attending a regular school or college.' },
      { q: 'Do you fill ATKT forms?', a: 'Yes, we assist university students in filling their ATKT (Allowed To Keep Term) or repeater exam forms for pending subjects.' },
      { q: 'Can you pay the university late fees?', a: 'Yes, if you missed the regular deadline, the portal automatically adds the late fee. We can process the total payment online.' }
    ]
  },
  {
    id: 39, slug: 'result-download', category: 'education',
    name: 'Exam Result Download & Print', icon: 'BarChart',
    description: 'Server down on result day? Don\'t panic. Visit our center to quickly check, download, and print your SSC, HSC, University, or Competitive Exam (NEET, JEE, CET) results on high-quality paper.',
    documentsRequired: [
      'Hall Ticket / Admit Card',
      'Seat Number / Roll Number',
      'Mother\'s Name (Required for Maharashtra Board results)'
    ],
    eligibility: 'Any student expecting an exam result.',
    processSteps: [
      'Step 1: Provide your Seat Number and Mother\'s Name (or DOB).',
      'Step 2: We access the official result portal (even during heavy traffic).',
      'Step 3: Download the digital scorecard/result sheet.',
      'Step 4: Provide a crisp color or black & white printout.'
    ],
    processingTime: 'Instant (5 Minutes)',
    charges: 'Only Printing & Browsing Charges (Nominal)',
    notes: 'The online printout is only for immediate information. The original hard copy of the marksheet must be collected from your respective school or college.',
    keywords: [
      'Check SSC HSC result Virar',
      'Print exam result near me',
      'Mumbai university result check',
      'NEET JEE CET scorecard',
      'Download marksheet online',
      'Fast result checking cafe'
    ],
    faqs: [
      { q: 'Can I use the printed online result for college admission?', a: 'Yes, most colleges accept the printed online result for provisional admission. However, you will have to submit the original marksheet once issued by the board.' },
      { q: 'The website is crashing on result day. Can you still check it?', a: 'Result websites often crash due to heavy traffic. Our center uses high-speed broadband and alternative official server links to check your result faster.' },
      { q: 'Can you laminate my result printout?', a: 'Yes, we provide lamination services to protect your result printout until the original marksheet arrives.' }
    ]
  },
  {
    id: 40, slug: 'marksheet-download', category: 'education',
    name: 'DigiLocker Marksheet Download', icon: 'Award',
    description: 'Lost your original marksheet? We help you instantly download legally valid digital marksheets, passing certificates, and migration certificates directly from DigiLocker or the official board archives.',
    documentsRequired: [
      'Aadhaar Card (Linked to active mobile number for OTP)',
      'Roll Number / Seat Number',
      'Year of Passing and Exam Session (March/October)'
    ],
    eligibility: 'Students whose boards/universities have uploaded their records to DigiLocker (e.g., CBSE, Maharashtra State Board).',
    processSteps: [
      'Step 1: We log in to your DigiLocker account via Aadhaar OTP.',
      'Step 2: Navigate to the specific Education Board section.',
      'Step 3: Enter your passing year and roll number to fetch the document.',
      'Step 4: Download the digitally signed PDF.',
      'Step 5: Print the document (Color print recommended).'
    ],
    processingTime: 'Instant (10 Minutes)',
    charges: 'Browsing + Printing Charges',
    notes: 'Documents downloaded from DigiLocker are digitally signed and are legally equivalent to original documents as per the IT Act, 2000.',
    keywords: [
      'Digilocker marksheet print Virar',
      'Download lost marksheet',
      'CBSE passing certificate online',
      'Maharashtra board duplicate marksheet',
      'Print digital certificate',
      'Digilocker agent near me'
    ],
    faqs: [
      { q: 'Is the DigiLocker marksheet accepted in colleges and jobs?', a: 'Absolutely. According to Govt of India rules, a digitally signed document from DigiLocker is completely valid for all educational and employment verification purposes.' },
      { q: 'What if my mobile number is not linked to Aadhaar?', a: 'To access DigiLocker, an Aadhaar-linked mobile number is mandatory to receive the OTP. You must update your mobile number at an Aadhaar center first.' },
      { q: 'Can I get my 10-year-old marksheet from DigiLocker?', a: 'It depends on the board. For example, the Maharashtra State Board has digitized SSC and HSC records from 1990 onwards, so older marksheets can usually be fetched.' }
    ]
  },

  // ─── G. Printing & Digital ───
  {
    id: 41, slug: 'color-printing', category: 'printing',
    name: 'Color Printing (A4, Legal, A3)', icon: 'Printer',
    description: 'Bring your documents to life! We provide high-quality, vibrant color printing for presentations, brochures, flyers, school projects, and official reports using premium ink and paper.',
    documentsRequired: [
      'Digital File (PDF format is highly recommended)',
      'JPG/PNG image files (for photo prints)'
    ],
    eligibility: 'Anyone requiring color prints for personal, academic, or business use.',
    processSteps: [
      'Step 1: Send your file via WhatsApp, Email, or bring it on a Pendrive.',
      'Step 2: Tell us your required paper size (A4, Legal, A3) and thickness (GSM).',
      'Step 3: Select single-sided or double-sided (back-to-back) printing.',
      'Step 4: We print your document instantly on our high-speed color laser/inkjet printers.',
      'Step 5: Pay via cash or UPI and collect your prints.'
    ],
    processingTime: 'Instant / Same Day',
    charges: 'Starting from ₹10 / page (A4 Standard) - Bulk discounts available',
    notes: 'Please ensure your PDF files are not password-protected before sharing. We recommend saving Word/PowerPoint files as PDFs to prevent formatting changes.',
    keywords: [
      'Color printing near me',
      'A4 color print Virar',
      'Print shop for projects',
      'High quality color print',
      'Brochure printing',
      'Send PDF on WhatsApp for print'
    ],
    faqs: [
      { q: 'What paper quality do you use for color prints?', a: 'By default, we use 75-80 GSM high-quality white paper. However, for projects and brochures, we also offer 100 GSM, 130 GSM, and glossy photo paper options upon request.' },
      { q: 'Can I send the file on WhatsApp and collect it later?', a: 'Yes! To save time, you can WhatsApp us the PDF, mention the number of copies, and just come to pick it up.' },
      { q: 'Is there a discount for bulk color printing?', a: 'Yes, if you have a bulk requirement (e.g., 50+ or 100+ pages), we offer special discounted rates.' }
    ]
  },
  {
    id: 42, slug: 'bw-printing', category: 'printing',
    name: 'Black & White Printing / Xerox', icon: 'FileText',
    description: 'Fast, crisp, and affordable black & white printing and photocopying for college assignments, legal documents, office reports, and forms.',
    documentsRequired: [
      'Digital File (PDF/Word) OR Original Physical Document'
    ],
    eligibility: 'Anyone requiring monochrome prints or photocopies.',
    processSteps: [
      'Step 1: Provide the digital file or the physical document.',
      'Step 2: Specify the number of copies and single/double-sided preference.',
      'Step 3: We print/copy using high-speed laser printers.',
      'Step 4: Collect your documents and pay.'
    ],
    processingTime: 'Instant',
    charges: 'Starting from ₹2 / page (A4) - Heavy bulk discounts available',
    notes: 'For legal documents, we also stock Green Legal size paper commonly used for court agreements and affidavits.',
    keywords: [
      'Black and white printing',
      'Xerox shop near me',
      'Photocopy center Virar',
      'Bulk xerox discount',
      'Legal size printing',
      'Affordable print shop'
    ],
    faqs: [
      { q: 'Do you offer bulk xerox rates for students?', a: 'Yes! For students needing copies of entire textbooks or thick notes, we provide highly discounted bulk xerox rates.' },
      { q: 'Can you print directly from my email?', a: 'Absolutely. You can forward your email to our shop\'s email address, and we will print the attachments for you.' },
      { q: 'Do you have legal size paper?', a: 'Yes, we provide printing on A4, A3, Legal (White), and Legal (Green/Document) paper sizes.' }
    ]
  },
  {
    id: 43, slug: 'blackbook-printing', category: 'printing',
    name: 'Blackbook Printing & Binding', icon: 'BookOpen',
    description: 'The ultimate stop for final year students! We offer premium Blackbook printing with durable hardbound rexine binding, golden embossing, and precise university-standard formatting.',
    documentsRequired: [
      'Final Project Report (Strictly in PDF format)',
      'College formatting guidelines (for margin and font checks)'
    ],
    eligibility: 'TY, Engineering, MBA, and other university students submitting their final year projects.',
    processSteps: [
      'Step 1: Submit your final project PDF to us.',
      'Step 2: We do a quick check for proper margins (left margin for binding).',
      'Step 3: We print the inner pages on premium 100 GSM paper.',
      'Step 4: The book is bound in black rexine with your college details embossed in gold on the cover.',
      'Step 5: Collect your finished Blackbook within 1-2 days.'
    ],
    processingTime: '1 to 2 Days (Depending on binding rush)',
    charges: 'Varies based on page count (Contact for best student combo packages)',
    notes: 'Please double-check your index, page numbers, and certificate pages before giving the final print command. Re-binding after a mistake is costly.',
    keywords: [
      'Blackbook printing Virar',
      'Hardbound project binding',
      'TYBMS project print',
      'Engineering blackbook',
      'Golden embossing binding',
      'Thesis printing shop'
    ],
    faqs: [
      { q: 'What paper is used for Blackbooks?', a: 'University guidelines require project reports to be printed on high-quality paper. We use premium 85 GSM or 100 GSM bond paper for a professional finish.' },
      { q: 'How long does the golden embossing take?', a: 'While the printing takes only a few minutes, the hardbound binding and golden foil embossing usually take 24 to 48 hours to set properly.' },
      { q: 'Can you fix my page margins before printing?', a: 'We can guide you on the standard margins (usually 1.5 inches on the left for binding), but it is best if you format the Word file yourself before converting it to PDF.' }
    ]
  },
  {
    id: 44, slug: 'jumbo-xerox', category: 'printing',
    name: 'Jumbo Xerox & Plan Plotting', icon: 'Maximize2',
    description: 'Specialized large-format printing and scanning! We provide Jumbo Xerox and Plotting services for A3, A2, A1, and A0 sizes, perfect for engineering drawings, architectural plans, and large posters.',
    documentsRequired: [
      'AutoCAD (DWG) files or high-resolution PDFs',
      'Physical maps or plans (for jumbo scanning/copying)'
    ],
    eligibility: 'Architects, civil engineers, interior designers, and students.',
    processSteps: [
      'Step 1: Provide your CAD file or PDF blueprint.',
      'Step 2: Specify the required size (e.g., A1 or A0) and scale.',
      'Step 3: We print the drawing using our wide-format plotter machine.',
      'Step 4: The plan is neatly folded or rolled as per your preference.',
      'Step 5: Collect the prints.'
    ],
    processingTime: 'Instant / Same Day',
    charges: 'Varies by paper size and ink density',
    notes: 'For perfect scaling, we highly recommend bringing your files exported as PDFs rather than raw DWG files, to avoid missing fonts or line weights.',
    keywords: [
      'Jumbo xerox Virar',
      'A0 A1 A2 printing',
      'AutoCAD plan plotting',
      'Blueprint printing near me',
      'Large format scanning',
      'Engineering drawing print'
    ],
    faqs: [
      { q: 'Do you also scan jumbo size documents?', a: 'Yes, we have large-format scanners that can scan your old A1 or A0 size physical blueprints and convert them into high-quality digital PDFs.' },
      { q: 'Can I print color posters in A2 or A1 size?', a: 'Absolutely. We provide both black-and-white line plotting (for CAD drawings) and high-resolution color plotting (for posters and presentations).' },
      { q: 'Do you provide drawing tubes for transport?', a: 'We neatly fold the plans as per standard engineering practice, or we can provide basic rolls. Sturdy drawing tubes may need to be purchased separately from a stationery store.' }
    ]
  },
  {
    id: 45, slug: 'visiting-card-printing', category: 'printing',
    name: 'Visiting Card / Business Card Print', icon: 'CreditCard',
    description: 'Make a lasting first impression! We design and print premium visiting cards for your business. Choose from matte, glossy, textured, or spot UV finishes to stand out from the crowd.',
    documentsRequired: [
      'Your Shop/Business details, Logo, and Contact Info',
      'Ready CorelDraw (CDR), AI, or PDF file (if you have your own design)'
    ],
    eligibility: 'Shop owners, professionals, freelancers, and businesses.',
    processSteps: [
      'Step 1: Share your details and logo.',
      'Step 2: We create a digital design mock-up and send it to you for approval.',
      'Step 3: Once approved, you select the card quality (e.g., 300 GSM Matte).',
      'Step 4: The cards are sent for offset/digital printing.',
      'Step 5: Collect your box of visiting cards within 2-3 days.'
    ],
    processingTime: '2 to 3 Working Days',
    charges: 'Starting at ₹400 for 1000 Cards (Basic Quality)',
    notes: 'Proofread all phone numbers and spellings carefully during the mock-up stage. Once sent to the press, changes cannot be made.',
    keywords: [
      'Visiting card print Virar',
      'Business card design',
      'Matte glossy cards',
      'Spot UV visiting card',
      'Print 1000 visiting cards',
      'Affordable business cards'
    ],
    faqs: [
      { q: 'What is the minimum order quantity for visiting cards?', a: 'The standard offset printing batch is 1,000 cards per name/design. However, for urgent digital prints, we can do batches of 100 or 200 cards at a slightly higher per-card cost.' },
      { q: 'Do you charge extra for designing the card?', a: 'Basic layout and typesetting are usually included. However, complex logo creations or premium custom designs may carry a small one-time design fee.' },
      { q: 'What is Spot UV?', a: 'Spot UV is a premium finish where the card is matte, but specific parts (like your logo or name) are raised and given a shiny, glossy texture.' }
    ]
  },
  {
    id: 46, slug: 'all-size-scanning', category: 'printing',
    name: 'All Size High-Res Scanning', icon: 'Scan',
    description: 'Digitize your important documents securely! We provide high-resolution scanning for all sizes, from small receipts to A4, Legal, and A3 documents. Get your files instantly via WhatsApp or Email.',
    documentsRequired: [
      'Original Physical Documents/Photos/Drawings'
    ],
    eligibility: 'Anyone needing digital copies for applications, emails, or safe storage.',
    processSteps: [
      'Step 1: Bring your physical documents or photos.',
      'Step 2: Specify the required format (PDF for documents, JPG for photos).',
      'Step 3: We scan them at high resolution (up to 600 DPI) for maximum clarity.',
      'Step 4: The scanned files are cropped and aligned correctly.',
      'Step 5: Files are securely sent to your WhatsApp, Email, or Pendrive.'
    ],
    processingTime: 'Instant',
    charges: 'Starting from ₹5 / page (A4) - Bulk scanning discounts available',
    notes: 'For sensitive legal or personal documents, we ensure complete privacy and permanently delete the scanned files from our systems immediately after sending them to you.',
    keywords: [
      'Document scanning near me',
      'A3 A4 size scanning',
      'PDF scan Virar',
      'High resolution photo scan',
      'Scan to email service',
      'Bulk document scanning'
    ],
    faqs: [
      { q: 'Can you combine multiple scanned pages into one single PDF?', a: 'Yes, if you have a multi-page document (like a book or agreement), we will merge all the scanned pages into a single, easy-to-read PDF file.' },
      { q: 'Is it safe to scan my confidential documents here?', a: 'Absolutely. We strictly respect customer privacy. Any scanned files (like PAN cards or legal agreements) are deleted from our computers right in front of you once transferred.' },
      { q: 'Can you scan old, damaged photographs?', a: 'Yes, we can scan old photographs at very high resolution (600+ DPI) so that you can preserve them digitally or restore them.' }
    ]
  },
  {
    id: 47, slug: 'smart-card-printing', category: 'printing',
    name: 'PVC ID Card / Smart Card Print', icon: 'CreditCard',
    description: 'Professional PVC card printing for Schools, Offices, and Societies. Get durable, waterproof, and premium glossy ID cards printed at affordable rates with quick turnaround times.',
    documentsRequired: [
      'Employee/Student Data (Name, Blood Group, Contact, etc.) in Excel format',
      'High-quality Passport-size photographs'
    ],
    eligibility: 'Schools, coaching classes, corporate offices, clubs, and housing societies.',
    processSteps: [
      'Step 1: Provide your custom design or choose from our templates.',
      'Step 2: Submit the data (Excel) and photos in a folder.',
      'Step 3: We print a sample card for your final approval.',
      'Step 4: We print the entire batch on high-quality PVC material.',
      'Step 5: Collect your ready-to-wear ID cards.'
    ],
    processingTime: '1 to 3 Days (Depending on batch size)',
    charges: 'Starting from ₹50 - ₹80 / card (Varies by quantity)',
    notes: 'We also provide matching lanyards (ribbons) and transparent ID card holders at an additional cost for a complete ready-to-use set.',
    keywords: [
      'PVC ID card printing',
      'School ID card maker',
      'Office smart card print',
      'Waterproof ID card Virar',
      'Bulk ID card printing',
      'Society member card'
    ],
    faqs: [
      { q: 'Do you design the ID cards as well?', a: 'Yes, if you do not have a ready design, we can create a professional, custom ID card layout with your school/company logo for a small one-time design fee.' },
      { q: 'Is there a minimum order quantity?', a: 'While we specialize in bulk orders for schools and offices, we can also print single replacement ID cards if you provide the exact design file.' },
      { q: 'Are these cards waterproof?', a: 'Yes, the PVC cards are completely waterproof, tear-resistant, and highly durable, similar to a standard ATM or credit card.' }
    ]
  },
  {
    id: 48, slug: 'letterhead-print', category: 'printing',
    name: 'Professional Letterhead Print', icon: 'FileBadge',
    description: 'Elevate your brand\'s professional image! We design and print premium company letterheads on high-quality bond and alabaster paper, perfect for official correspondence, quotations, and medical prescriptions.',
    documentsRequired: [
      'Company Logo (High Resolution)',
      'Business Details (Address, Contact, GST Number, Email)',
      'Ready design file (CDR/PDF) if available'
    ],
    eligibility: 'Business owners, doctors, advocates, CAs, and professionals.',
    processSteps: [
      'Step 1: Share your logo and business details.',
      'Step 2: We create a letterhead design mock-up for your approval.',
      'Step 3: Select the paper type (e.g., 100 GSM Bond Paper).',
      'Step 4: The letterheads are sent for high-quality offset or digital printing.',
      'Step 5: Collect your printed letterhead pads.'
    ],
    processingTime: '1 to 2 Working Days',
    charges: 'Contact for best bulk pricing',
    notes: 'For Doctors and Clinics, we also specialize in designing and printing custom prescription pads (Rx) in various sizes (A5 or custom).',
    keywords: [
      'Letterhead printing Virar',
      'Company letterhead design',
      'Bond paper printing',
      'Doctor prescription pad',
      'Official business stationery',
      'Print letterhead near me'
    ],
    faqs: [
      { q: 'Which paper is best for letterheads?', a: 'For a premium, professional feel, we highly recommend 100 GSM Executive Bond paper or Alabaster paper, which are thicker and have a nice texture compared to standard copier paper.' },
      { q: 'Can I order just 100 letterheads?', a: 'Yes, using our digital printing service, you can order smaller quantities like 100 pages. For offset printing (which is much cheaper per page), the minimum batch is usually 1,000 pages.' },
      { q: 'Do you bind the letterheads into a pad?', a: 'Yes, we provide top-edge glue binding so your letterheads or prescription sheets remain organized in a neat tear-away pad format.' }
    ]
  },
  {
    id: 49, slug: 'passport-photos', category: 'printing',
    name: 'Instant Passport Photos', icon: 'Image',
    description: 'Need urgent photos for forms or visas? We provide instant, studio-quality passport size and stamp size photographs. We can click your photo in-store or print from a digital copy on your phone.',
    documentsRequired: [
      'Digital photo on WhatsApp/Pendrive (or we can click it for you)'
    ],
    eligibility: 'Anyone requiring official photographs for admissions, exams, passports, or visas.',
    processSteps: [
      'Step 1: We click your photo against a white/blue background OR you send us your digital photo.',
      'Step 2: We crop, adjust brightness/contrast, and format it to the exact required dimensions.',
      'Step 3: The photos are printed on premium glossy photo paper.',
      'Step 4: We cut the photos neatly and pack them for you.',
      'Step 5: Collect instantly.'
    ],
    processingTime: 'Instant (5 to 10 Minutes)',
    charges: 'Starting from ₹50 for a set of 8 Photos',
    notes: 'If you are applying for a specific Visa (e.g., US or Schengen), please inform us in advance so we can crop the photo to those exact country-specific dimensions (e.g., 2x2 inches, 80% face coverage).',
    keywords: [
      'Instant passport photo Virar',
      'Urgent photo print',
      'Visa size photograph',
      'Stamp size photo',
      'Print photo from phone',
      'Glossy photo printing'
    ],
    faqs: [
      { q: 'Can you change the background color of my photo?', a: 'Yes, if you send a digital photo from your phone, we can digitally edit and change the background to plain white or blue, which is required for most official forms.' },
      { q: 'Do you provide the digital copy of the photo?', a: 'Yes, if we click your photo in-store, we can share the formatted digital soft-copy (JPEG) to your WhatsApp or Email for your online form filling needs.' },
      { q: 'Can you print standard 4x6 or 5x7 family photos?', a: 'Yes, apart from passport photos, we also print high-quality borderless 4x6, 5x7, and A4 size photos for albums and photo frames.' }
    ]
  },
  {
    id: 50, slug: 'project-printing', category: 'printing',
    name: 'School & College Project Print', icon: 'GraduationCap',
    description: 'The one-stop solution for student submissions! We offer affordable and high-quality project printing, colorful cover pages, and various binding options to make your school or college assignments stand out.',
    documentsRequired: [
      'Project File (PDF or Word Format)',
      'Images for cover page (if any)'
    ],
    eligibility: 'School kids, college students, and teachers.',
    processSteps: [
      'Step 1: Share your project file via WhatsApp or Pendrive.',
      'Step 2: Choose between Color or Black & White printing.',
      'Step 3: We print the pages quickly on quality paper.',
      'Step 4: Select a binding type (Spiral, File, or Staple with a transparent cover).',
      'Step 5: Collect the ready-to-submit project.'
    ],
    processingTime: 'Instant',
    charges: 'Contact for special Student Discounted Rates',
    notes: 'To prevent fonts from changing or images shifting when moving from your laptop to our computers, ALWAYS save your Microsoft Word or PowerPoint projects as a PDF before printing.',
    keywords: [
      'School project print Virar',
      'College assignment printing',
      'Cheap color print for students',
      'Project binding shop',
      'Transparent cover binding',
      'Print project from pendrive'
    ],
    faqs: [
      { q: 'Do you have special rates for students?', a: 'Yes! We understand student budgets, so we offer special discounted combo rates when you print and bind large project files with us.' },
      { q: 'Can you help download images for my child\'s school project?', a: 'Yes, for young school students, we assist parents in searching, downloading, and arranging specific educational pictures (e.g., freedom fighters, animals, maps) on a single page for color printing.' },
      { q: 'What binding is best for a 50-page college project?', a: 'For medium-sized college projects (20 to 100 pages), Spiral Binding with a transparent plastic front cover and a hard plastic back cover is the most popular, durable, and neat-looking option.' }
    ]
  },
  {
    id: 51, slug: 'billbook-print', category: 'printing',
    name: 'Custom Billbook / Invoice Print', icon: 'Receipt',
    description: 'Keep your business transactions organized! We design and print customized billbooks, invoice books, receipt pads, and challan books with serial numbering and duplicate/triplicate carbonless copies.',
    documentsRequired: [
      'Shop Name, Address, and Contact Details',
      'GST Number (if applicable)',
      'Terms & Conditions to be printed (if any)'
    ],
    eligibility: 'Shopkeepers, wholesalers, traders, and business owners.',
    processSteps: [
      'Step 1: Provide your business details and logo.',
      'Step 2: Choose the size (A4, A5, or custom) and format (Duplicate/Triplicate).',
      'Step 3: We create a professional layout and send it for your approval.',
      'Step 4: The billbooks are sent for printing and numbering.',
      'Step 5: Collect your ready-to-use books within a few days.'
    ],
    processingTime: '3 to 5 Working Days',
    charges: 'Contact for best bulk pricing (Varies by quantity and pages)',
    notes: 'We use high-quality NCR (No Carbon Required) paper for duplicate and triplicate books, so you don\'t have to deal with messy blue carbon papers anymore.',
    keywords: [
      'Billbook print Virar',
      'Custom invoice book',
      'Duplicate receipt book',
      'Challan printing shop',
      'GST billbook format',
      'Carbonless bill book'
    ],
    faqs: [
      { q: 'What sizes are available for billbooks?', a: 'We can print in any custom size, but the most standard and affordable sizes are A4 (full page), A5 (half page), and 1/4th page (for small receipts).' },
      { q: 'Do you print the serial numbers on the bills?', a: 'Yes, consecutive serial numbering is included in the printing process to help you keep track of your invoices legally and systematically.' },
      { q: 'Can I get a colorful billbook?', a: 'Yes, while standard billbooks are printed in single-color (black or blue) to keep costs low, we also offer premium multi-color billbook printing.' }
    ]
  },
  {
    id: 52, slug: 'cartridge-refilling', category: 'printing',
    name: 'Printer Cartridge Refilling', icon: 'Droplet',
    description: 'Running out of ink? Don\'t buy a new cartridge just yet! We provide professional and affordable ink and toner cartridge refilling services for all major printer brands (HP, Canon, Epson, Brother).',
    documentsRequired: [
      'Empty printer cartridge (Ink or Laser Toner)'
    ],
    eligibility: 'Anyone owning a home or office printer.',
    processSteps: [
      'Step 1: Bring your empty cartridge to our center.',
      'Step 2: We carefully open, clean, and inspect the cartridge/drum.',
      'Step 3: Refill with high-quality, brand-compatible ink or toner powder.',
      'Step 4: Seal and run a test print to ensure crisp quality.',
      'Step 5: Collect your refilled cartridge.'
    ],
    processingTime: 'Same Day (Usually within a few hours)',
    charges: 'Starting from ₹150 for Ink / ₹300 for Laser Toner',
    notes: 'Please bring the cartridge to us as soon as it empties. Leaving an empty ink cartridge unused for months can cause the printhead to dry out and permanently clog.',
    keywords: [
      'Cartridge refill Virar',
      'HP toner refilling',
      'Canon ink refill',
      'Printer ink shop near me',
      'Laser printer powder fill',
      'Cheap cartridge refill'
    ],
    faqs: [
      { q: 'Does refilling damage my printer?', a: 'No, professional refilling using high-quality, brand-compatible ink/toner does not damage your printer and provides almost the same print quality at a fraction of the cost.' },
      { q: 'My cartridge is completely dried out. Can you fix it?', a: 'We use ultrasonic cleaning and special solutions to unclog dried printheads. If the electronic chip is undamaged, we can usually revive it.' },
      { q: 'Do you sell new original cartridges?', a: 'Yes, if your old cartridge is damaged beyond repair or its lifecycle is over, we also stock and sell brand new original and compatible cartridges.' }
    ]
  },
  {
    id: 53, slug: 'computer-accessories', category: 'printing',
    name: 'Computer Accessories & Peripherals', icon: 'Mouse',
    description: 'Upgrade your workspace! We sell a wide range of reliable and affordable computer accessories, including mice, keyboards, pendrives, USB cables, headphones, and networking gear.',
    documentsRequired: [
      'None'
    ],
    eligibility: 'Anyone looking to buy computer hardware or accessories.',
    processSteps: [
      'Step 1: Visit our store and tell us your requirement.',
      'Step 2: Check out our available stock from reputed brands (Logitech, Dell, HP, SanDisk).',
      'Step 3: Test the product if needed.',
      'Step 4: Make the payment.',
      'Step 5: Collect your product with a valid warranty bill.'
    ],
    processingTime: 'Instant purchase',
    charges: 'MRP or Discounted Retail Price',
    notes: 'We only stock genuine products with official manufacturer warranties. Please keep the bill safe to claim any future warranty replacements.',
    keywords: [
      'Computer accessories Virar',
      'Buy pendrive near me',
      'Mouse and keyboard shop',
      'USB cables and adapters',
      'PC peripherals store',
      'Sandisk pendrive price'
    ],
    faqs: [
      { q: 'Do you provide a warranty on accessories?', a: 'Yes, all branded electronic accessories (like pendrives, mice, keyboards) come with a standard manufacturer warranty (usually 1 to 3 years) which can be claimed with our bill.' },
      { q: 'Do you repair computers or laptops?', a: 'We primarily focus on selling accessories, printing, and digital services. However, we can assist with basic software installations and formatting.' },
      { q: 'Can I place an order for a specific component not in stock?', a: 'Yes, if you need a specific accessory (like a high-end router or a specific SSD), we can order it from our distributors and have it ready for you within 1-2 days.' }
    ]
  },
  {
    id: 54, slug: 'custom-rubber-stamps', category: 'printing',
    name: 'Custom Rubber Stamps & Seals', icon: 'CheckSquare',
    description: 'Official stamps made easy! We manufacture high-quality custom rubber stamps, including Self-Inking, Pre-Inked (Nylon), Date Stamps, and traditional wooden stamps for businesses, doctors, and professionals.',
    documentsRequired: [
      'Text/Matter to be printed on the stamp',
      'Shop Act License or Business Proof (Mandatory for Proprietor/Company round seals)'
    ],
    eligibility: 'Business owners, doctors, lawyers, schools, and professionals.',
    processSteps: [
      'Step 1: Provide the matter and logo (if any) for the stamp.',
      'Step 2: Choose the type of stamp (Self-inking, pocket stamp, standard).',
      'Step 3: We design the layout and show you a digital proof.',
      'Step 4: The stamp is manufactured using precision laser cutting.',
      'Step 5: Collect your ready stamp.'
    ],
    processingTime: 'Same Day / Next Day',
    charges: 'Starting from ₹150 (Varies by size and type)',
    notes: 'For legal reasons, we strictly require a valid business registration proof (like GST or Shop Act) to manufacture official Company Round Seals or "For Proprietor" stamps.',
    keywords: [
      'Rubber stamp maker Virar',
      'Self inking stamp print',
      'Company round seal',
      'Doctor stamp near me',
      'Pocket stamp maker',
      'Pre inked nylon stamp'
    ],
    faqs: [
      { q: 'What is the difference between Self-Inking and Pre-Inked stamps?', a: 'Self-inking stamps have a built-in replaceable ink pad that flips and hits the rubber. Pre-inked (Nylon) stamps have the ink infused directly into the stamp material, providing a sharper impression and lasting longer.' },
      { q: 'Can I get a stamp with my signature on it?', a: 'Yes! We can scan your physical signature and create an exact replica signature stamp, which is very useful for signing bulk documents.' },
      { q: 'How long does a pre-inked stamp last?', a: 'A high-quality pre-inked stamp can easily give 5,000 to 10,000 crisp impressions before it needs to be refilled with a few drops of specialized ink.' }
    ]
  },
  {
    id: 55, slug: 'stationery-products', category: 'printing',
    name: 'Office & School Stationery', icon: 'PenTool',
    description: 'Your daily needs, fulfilled! We stock a wide variety of essential stationery products including notebooks, premium pens, box files, staplers, paper rims (A4/Legal), and craft materials.',
    documentsRequired: [
      'None'
    ],
    eligibility: 'Students, office goers, and general public.',
    processSteps: [
      'Step 1: Visit our shop.',
      'Step 2: Browse our well-stocked stationery section.',
      'Step 3: Select the items you need.',
      'Step 4: Make the payment via Cash/UPI.',
      'Step 5: Collect your items.'
    ],
    processingTime: 'Instant purchase',
    charges: 'Retail MRP (Special discounts on bulk purchases)',
    notes: 'For corporate offices, schools, and coaching classes, we offer bulk supply of A4 copier paper and customized notebooks at wholesale rates.',
    keywords: [
      'Stationery shop Virar',
      'Buy A4 paper rim',
      'Office supplies near me',
      'Notebooks and pens',
      'Box files and folders',
      'Bulk stationery supplier'
    ],
    faqs: [
      { q: 'Do you supply A4 paper rims in bulk to offices?', a: 'Yes, we supply premium A4 copier paper (JK, Bilt, Century) in bulk cartons to offices and coaching classes at highly competitive wholesale rates.' },
      { q: 'Do you sell craft and project materials for kids?', a: 'Yes, we keep chart papers, tinted sheets, glue, scissors, and basic craft materials needed for school projects.' },
      { q: 'Can I get a GST invoice for my office stationery purchase?', a: 'Absolutely. If you provide your company\'s GSTIN, we will issue a proper B2B tax invoice so you can claim the input tax credit.' }
    ]
  },
  {
    id: 56, slug: 'spiral-binding', category: 'printing',
    name: 'Spiral & Wiro Binding', icon: 'Book',
    description: 'Keep your documents secure and professional! We provide durable spiral and premium wiro binding for project reports, study materials, class notes, and office presentations.',
    documentsRequired: [
      'Documents to be bound (Physical or Digital for printing)'
    ],
    eligibility: 'Students, teachers, and professionals.',
    processSteps: [
      'Step 1: Bring your printed pages or print them at our center.',
      'Step 2: We punch the pages using high-precision machines.',
      'Step 3: A thick transparent plastic cover is added to the front, and a hard cover to the back.',
      'Step 4: The document is bound securely using a plastic spiral or metal wiro.',
      'Step 5: Collect your neatly bound book.'
    ],
    processingTime: 'Instant (5 to 10 Minutes)',
    charges: 'Starting from ₹30 (Varies by number of pages)',
    notes: 'For documents over 300 pages, we recommend splitting them into two volumes or using a heavy-duty ring binder, as very thick spirals can be difficult to turn.',
    keywords: [
      'Spiral binding Virar',
      'Wiro binding shop',
      'Project report binding',
      'Book binding near me',
      'College notes binding',
      'Transparent cover binding'
    ],
    faqs: [
      { q: 'What is the difference between Spiral and Wiro binding?', a: 'Spiral binding uses a continuous plastic coil and is very flexible (great for thick college notes). Wiro binding uses a double-loop metal wire, offering a much more premium and professional look (ideal for corporate presentations).' },
      { q: 'Can you bind an original textbook?', a: 'Yes, if your textbook is falling apart, we can cut the damaged spine and secure all the pages with a strong spiral bind so it opens completely flat.' },
      { q: 'Do you provide hardbound binding?', a: 'Yes, we provide hardbound (blackbook) binding which takes 1-2 days. Spiral binding is done instantly on the spot.' }
    ]
  },
  {
    id: 57, slug: 'lamination', category: 'printing',
    name: 'Document Lamination', icon: 'Layers',
    description: 'Protect your valuable certificates and documents from water, dust, and tearing! We offer high-quality, bubble-free thermal lamination for ID cards, A4 documents, and A3 certificates.',
    documentsRequired: [
      'Original documents to be laminated'
    ],
    eligibility: 'Anyone needing to preserve important documents.',
    processSteps: [
      'Step 1: Provide the document to be laminated.',
      'Step 2: We clean the document to remove any dust particles.',
      'Step 3: The document is placed in a premium micron lamination pouch.',
      'Step 4: It is passed through a pre-heated thermal laminator.',
      'Step 5: Edges are trimmed safely, and you collect the preserved document.'
    ],
    processingTime: 'Instant (2 to 5 Minutes)',
    charges: 'Starting from ₹10 for ID size / ₹20 for A4 size',
    notes: 'WARNING: Do NOT laminate thermal paper (like store receipts or ultrasound sonography photos), as the heat will turn the entire paper completely black and destroy the image.',
    keywords: [
      'Document lamination Virar',
      'A3 A4 lamination',
      'Certificate protection',
      'ID card lamination',
      'Lamination shop near me',
      'Waterproof document cover'
    ],
    faqs: [
      { q: 'Is it safe to laminate my original degree certificate?', a: 'Yes, lamination protects original certificates from aging, moisture, and pests. We use high-quality micron pouches that do not bubble or peel off over time.' },
      { q: 'Can a laminated document be un-laminated later?', a: 'No, thermal lamination melts the adhesive permanently into the paper fibers. Trying to peel it off will completely destroy the original document.' },
      { q: 'What sizes can you laminate?', a: 'We can laminate all standard sizes: ID Card, A5, A4, Legal, and large A3 size documents.' }
    ]
  },
  {
    id: 58, slug: 'photocopy-xerox', category: 'printing',
    name: 'Quick Xerox / Photocopy', icon: 'Copy',
    description: 'Superfast and clear photocopying services! Whether it is a single ID card, a 500-page book, or a bundle of office records, we provide crisp black-and-white and color xerox copies instantly.',
    documentsRequired: [
      'Original physical documents, books, or ID cards'
    ],
    eligibility: 'Students, professionals, and general public.',
    processSteps: [
      'Step 1: Hand over the documents to our staff.',
      'Step 2: Specify the number of copies and single/double-sided preference.',
      'Step 3: Specify if you need normal size or enlarged/reduced copies.',
      'Step 4: We copy them using high-speed heavy-duty machines.',
      'Step 5: Collect your copies.'
    ],
    processingTime: 'Instant',
    charges: '₹2 / page (B&W) - Special discounts for bulk book xerox',
    notes: 'For ID cards like Aadhaar or PAN, we use specialized ID-copy modes to ensure both front and back sides are printed perfectly aligned on a single side of the paper.',
    keywords: [
      'Xerox shop Virar',
      'Color photocopy near me',
      'Aadhaar card xerox',
      'Bulk book copying',
      'Fast xerox center',
      'Cheap photocopy rate'
    ],
    faqs: [
      { q: 'Can you photocopy a thick bound book without damaging it?', a: 'Yes, our flatbed scanners allow us to carefully copy pages from thick bound books or fragile old documents without tearing the binding.' },
      { q: 'Do you provide color xerox?', a: 'Yes, we provide high-resolution color photocopying, which is slightly more expensive than standard black-and-white.' },
      { q: 'Can you reduce or enlarge the size of my document?', a: 'Absolutely. We can shrink large documents to fit on A4, or enlarge small text/images (like zooming into a map or drawing) up to A3 size.' }
    ]
  },
  {
    id: 59, slug: 'sticker-label-printing', category: 'printing',
    name: 'Sticker & Label Printing', icon: 'Tag',
    description: 'Custom labels for your brand! We print high-quality adhesive stickers, product labels, barcode/MRP tags, and return address labels in any shape and size.',
    documentsRequired: [
      'Design file (PDF, CDR, or High-Res JPG/PNG)'
    ],
    eligibility: 'Product manufacturers, bakers, boutique owners, schools, and offices.',
    processSteps: [
      'Step 1: Share your label design and specify the required dimensions.',
      'Step 2: Choose the sticker finish (Matte, Glossy, or Transparent).',
      'Step 3: We print them on premium adhesive sticker sheets.',
      'Step 4: For custom shapes, we provide precision die-cutting (kiss-cut).',
      'Step 5: Collect your ready-to-peel sticker sheets.'
    ],
    processingTime: '1 to 2 Days (Same day for simple square/round cuts)',
    charges: 'Contact for size-based pricing (Bulk discounts apply)',
    notes: 'If you need waterproof labels (for frozen food or cosmetic bottles), please specify this so we can use vinyl sticker material instead of standard paper stickers.',
    keywords: [
      'Sticker printing Virar',
      'Custom product labels',
      'Transparent sticker print',
      'Die cut sticker shop',
      'MRP label printing',
      'Adhesive label maker'
    ],
    faqs: [
      { q: 'Do you print transparent stickers?', a: 'Yes, we can print your logo on clear transparent vinyl sheets, which look incredibly premium when stuck on glass jars or plastic bottles.' },
      { q: 'Can you cut the stickers into custom shapes like a star or a shield?', a: 'Yes! We offer Kiss-Cutting (half-cut) services where the machine cuts the sticker into your custom shape, making it very easy to peel off the backing sheet.' },
      { q: 'What is the minimum order quantity for stickers?', a: 'For basic digital sticker printing on A3 sheets, the minimum quantity is just 1 sheet (which can hold multiple small stickers). For offset bulk printing, the minimum is higher.' }
    ]
  },
  {
    id: 60, slug: 'aadhaar-pan-print', category: 'printing',
    name: 'Aadhaar & PAN Card PVC Print', icon: 'IdCard',
    description: 'Get a durable, waterproof PVC card print of your e-Aadhaar, e-PAN, or e-Voter ID. Easy to carry in your wallet and lasts much longer than standard paper prints.',
    documentsRequired: [
      'e-Aadhaar PDF or e-PAN PDF file',
      'Password for the PDF (usually Name+DOB format)'
    ],
    eligibility: 'Any individual with a valid digital copy of their Govt ID.',
    processSteps: [
      'Step 1: Forward the official PDF to our WhatsApp or Email.',
      'Step 2: Provide the password to open the file.',
      'Step 3: We securely extract the ID card section and format it for PVC printing.',
      'Step 4: The card is printed on a blank PVC smart card instantly.',
      'Step 5: Collect your hard plastic ID card.'
    ],
    processingTime: 'Instant (5 Minutes)',
    charges: 'Starting from ₹50 - ₹100 per card',
    notes: 'We only print IDs from official PDF files. We strictly DO NOT edit, alter, or forge details on Aadhaar or PAN cards, as it is a criminal offense.',
    keywords: [
      'Aadhaar PVC card print',
      'Print PAN card Virar',
      'Plastic voter ID print',
      'Smart card printing near me',
      'Wallet size Aadhaar',
      'e-Aadhaar plastic print'
    ],
    faqs: [
      { q: 'Is the PVC print legally valid?', a: 'While the official UIDAI-ordered PVC card has a hologram, a standard PVC print of your e-Aadhaar is still legally valid for most offline identity verification purposes.' },
      { q: 'Is it safe to share my Aadhaar PDF password with you?', a: 'Yes, we only use the password to open and print the file in front of you. Once the printing is done, we permanently delete the PDF from our system to ensure 100% data security.' },
      { q: 'Can I print my driving license on a PVC card?', a: 'If you have the official digital PDF of your Driving License from Parivahan/DigiLocker, we can format and print it on a PVC card for your convenience.' }
    ]
  },
  {
    id: 61, slug: 'resume-making', category: 'printing',
    name: 'Professional Resume / CV Making', icon: 'FileText',
    description: 'Land your dream job! We create professional, ATS-friendly resumes and CVs tailored for freshers, experienced professionals, and overseas job seekers. Choose from modern and classic templates.',
    documentsRequired: [
      'Rough draft of your details (Name, Contact, Address)',
      'Educational Qualifications (Degrees, Passing Year, Grades)',
      'Work Experience Details (Company name, Role, Duration)',
      'Professional Passport-size photo (if required on the CV)'
    ],
    eligibility: 'Freshers, job seekers, and working professionals.',
    processSteps: [
      'Step 1: Provide all your details on a rough paper or via WhatsApp.',
      'Step 2: Select a resume template from our catalog (Modern, Corporate, or Creative).',
      'Step 3: We type, format, and align your details perfectly into the template.',
      'Step 4: Review the draft and suggest any corrections.',
      'Step 5: Receive the final PDF file on your phone and take physical prints.'
    ],
    processingTime: '1 to 2 Hours (Depending on the length of details)',
    charges: 'Starting from ₹100 - ₹250 (Varies by complexity and pages)',
    notes: 'An ATS (Applicant Tracking System) friendly resume avoids complex graphics and tables so that corporate software can easily read your skills and shortlist you.',
    keywords: [
      'Resume typing near me',
      'CV making Virar',
      'Professional resume writer',
      'Fresher biodata format',
      'ATS friendly resume',
      'Job application CV'
    ],
    faqs: [
      { q: 'Do you write the resume content for me?', a: 'We primarily provide typing, formatting, and layout design. You must provide the actual facts (your degrees, your work history). We can help suggest standard objective statements or skill keywords.' },
      { q: 'Will I get the editable Word file?', a: 'We provide the final output as a PDF, which is the standard format for emailing HR departments. If you specifically need the editable Word file, please request it beforehand.' },
      { q: 'Do you make marriage biodatas as well?', a: 'Yes, apart from professional job resumes, we also create well-formatted marriage biodatas with photo attachments.' }
    ]
  },

  // ─── H. Other Services ───
  {
    id: 62, slug: 'sim-card-activation', category: 'other',
    name: 'New SIM Card Activation', icon: 'SimCard',
    description: 'Get a new prepaid or postpaid SIM card instantly! We provide quick activation and porting (MNP) services for all major telecom operators like Jio, Airtel, and Vi.',
    documentsRequired: [
      'Aadhaar Card (Original required for Biometric/OTP)',
      'Alternate Mobile Number (for OTP)'
    ],
    eligibility: 'Any Indian resident aged 18 and above.',
    processSteps: [
      'Step 1: Choose your preferred operator and plan.',
      'Step 2: Provide your Aadhaar card for e-KYC.',
      'Step 3: Complete biometric fingerprint verification or OTP verification.',
      'Step 4: Receive your new SIM card.',
      'Step 5: Tele-verification (if required) and activation within a few hours.'
    ],
    processingTime: 'Instant (Active within 2-4 hours)',
    charges: 'Varies based on operator and first recharge (FRC)',
    notes: 'For Mobile Number Portability (MNP), you must generate a UPC code by sending an SMS from your current number. Porting usually takes 3 to 5 days.',
    keywords: [
      'New SIM card Virar',
      'Jio Airtel Vi activation',
      'Mobile number porting MNP',
      'Prepaid SIM shop',
      'SIM card eKYC',
      'Get new mobile number'
    ],
    faqs: [
      { q: 'Can I port my existing number to another network?', a: 'Yes, we provide Mobile Number Portability (MNP). Just bring your active phone, we will generate the porting code and give you the new network\'s SIM card.' },
      { q: 'Is it mandatory to bring my physical Aadhaar card?', a: 'No, if your Aadhaar is linked to another active mobile number, we can activate the SIM using just your Aadhaar number and OTP. Otherwise, biometric (fingerprint) is needed.' },
      { q: 'How long does a ported SIM take to activate?', a: 'MNP within the same state usually takes 3 working days. Your old SIM will continue to work until the new one activates at night.' }
    ]
  },
  {
    id: 63, slug: 'whatsapp-email-support', category: 'other',
    name: 'WhatsApp & Email Assistance', icon: 'MessageCircle',
    description: 'Stuck with an online form or need to send an official email? We provide professional assistance for sending emails, scanning documents to WhatsApp, and filling out complex online applications.',
    documentsRequired: [
      'Details/Files to be sent',
      'Recipient Email Address or WhatsApp Number'
    ],
    eligibility: 'Anyone needing help with digital communication.',
    processSteps: [
      'Step 1: Explain your requirement to our staff.',
      'Step 2: We draft the email or message professionally.',
      'Step 3: We attach any required scanned documents or photos.',
      'Step 4: You review the draft.',
      'Step 5: We send the email/message and provide you with a delivery confirmation.'
    ],
    processingTime: 'Instant',
    charges: 'Starting from ₹20 per email/task',
    notes: 'We also assist in downloading admit cards, tickets, or official documents that you have received on your email or WhatsApp.',
    keywords: [
      'Email sending service',
      'WhatsApp document scan',
      'Online form filling help',
      'Internet cafe Virar',
      'Draft official email',
      'Download PDF from email'
    ],
    faqs: [
      { q: 'Can you help me type a formal application email?', a: 'Yes, we can help you draft a formal and grammatically correct email for job applications, complaints, or official requests.' },
      { q: 'Do you charge for downloading and printing from my phone?', a: 'We charge a minimal internet/handling fee along with the standard printing charges when you send files to our shop\'s WhatsApp or Email for printing.' },
      { q: 'Is my data secure?', a: 'Absolutely. We do not save your personal emails or files on our computers. They are immediately deleted after the task is completed.' }
    ]
  },
  {
    id: 64, slug: 'csc-services', category: 'other',
    name: 'CSC (Common Service Center)', icon: 'Building2',
    description: 'Access a wide range of Government to Citizen (G2C) services through our authorized Common Service Center (CSC) portal. We assist with digital payments, utility bills, and government schemes.',
    documentsRequired: [
      'Aadhaar Card',
      'Specific documents depending on the service requested'
    ],
    eligibility: 'All Indian citizens.',
    processSteps: [
      'Step 1: Visit our center and specify the government service you need.',
      'Step 2: Provide the necessary KYC documents.',
      'Step 3: Our authorized operator processes the request on the official CSC digital seva portal.',
      'Step 4: Pay the government fee and service charge.',
      'Step 5: Receive your service receipt or certificate.'
    ],
    processingTime: 'Instant / Varies by service',
    charges: 'As per government guidelines + Operator fee',
    notes: 'CSC services include crop insurance, tele-law, PMGDISHA, utility bill payments, and fastag recharge.',
    keywords: [
      'CSC center Virar',
      'Maha eSeva Kendra',
      'Digital Seva portal',
      'Government services online',
      'CSC VLE shop',
      'Utility bill payment'
    ],
    faqs: [
      { q: 'What is a CSC center?', a: 'A Common Service Center (CSC) is an access point authorized by the Government of India to deliver e-governance services, financial inclusion schemes, and utility payments to citizens.' },
      { q: 'Can I pay my electricity and water bills here?', a: 'Yes, we accept payments for all major utility bills (electricity, water, gas, broadband) through the secure Bharat Bill Payment System (BBPS) on the CSC portal.' },
      { q: 'Do you provide PM-Kisan scheme assistance?', a: 'Yes, we help farmers register for PM-Kisan, update their eKYC, and check their installment status through our CSC login.' }
    ]
  },
  {
    id: 65, slug: 'udyam-registration', category: 'other',
    name: 'Udyam Registration (MSME)', icon: 'Factory',
    description: 'Register your business officially! We assist with Udyam (MSME) Registration to help you get your Udyam Certificate, which is essential for opening a current account, getting government subsidies, and business loans.',
    documentsRequired: [
      'Aadhaar Card of the Proprietor/Director (Must be linked to mobile)',
      'PAN Card of the Proprietor/Business',
      'Business Name, Address, and Date of Commencement',
      'Bank Account Details (Account Number & IFSC)'
    ],
    eligibility: 'Micro, Small, and Medium Enterprises (MSMEs) in the manufacturing or service sectors.',
    processSteps: [
      'Step 1: Gather your Aadhaar, PAN, and business details.',
      'Step 2: We apply on the official Udyam Registration portal.',
      'Step 3: Verify the application using Aadhaar-linked mobile OTP.',
      'Step 4: Fill in your NIC codes (Business activities).',
      'Step 5: The Udyam Registration Certificate is generated and printed for you instantly.'
    ],
    processingTime: 'Instant / Same Day',
    charges: 'Contact for service/consultancy charges',
    notes: 'The Udyam registration itself is free on the government portal. We only charge a nominal fee for our time, data entry, and printing services.',
    keywords: [
      'Udyam registration Virar',
      'MSME certificate apply',
      'Small business registration',
      'Shop act alternative MSME',
      'Current account documents',
      'Udyog Aadhaar update'
    ],
    faqs: [
      { q: 'Is Udyam Registration replacing Udyog Aadhaar?', a: 'Yes, the government has transitioned from the old Udyog Aadhaar Memorandum (UAM) to the new Udyam Registration. If you have an old UAM, you must migrate to Udyam.' },
      { q: 'Do I need GST to get an Udyam certificate?', a: 'No, GST is not mandatory for Udyam Registration. You can register using just your Aadhaar and PAN card.' },
      { q: 'Can I use this certificate to open a bank account?', a: 'Yes, most banks accept the Udyam Registration Certificate as a valid proof of business to open a current account for a proprietorship firm.' }
    ]
  },
  {
    id: 66, slug: 'gst-registration', category: 'other',
    name: 'GST Registration Assistance', icon: 'Receipt',
    description: 'Start your business right! We provide basic consultation and data-entry assistance for new Goods and Services Tax (GST) registration on the official GST portal.',
    documentsRequired: [
      'PAN Card of the Business/Proprietor',
      'Aadhaar Card of the Proprietor/Directors',
      'Business Address Proof (Electricity Bill / Rent Agreement)',
      'Bank Account Proof (Cancelled Cheque / Passbook)',
      'Passport-size Photograph'
    ],
    eligibility: 'Businesses with turnover exceeding ₹20/40 Lakhs, or those requiring voluntary registration for B2B trade or e-commerce (Amazon/Flipkart).',
    processSteps: [
      'Step 1: We gather and scan all required documents in the correct format and size.',
      'Step 2: We initiate the registration (REG-01) on the GST portal.',
      'Step 3: Complete Aadhaar authentication via OTP.',
      'Step 4: The application is submitted for approval by the tax officer.',
      'Step 5: Once approved, we download and print your GSTIN Certificate.'
    ],
    processingTime: '3 to 7 Working Days (Subject to Govt approval)',
    charges: 'Contact for professional assistance charges',
    notes: 'For complex business structures (Partnerships, Pvt Ltd) or regular GST return filing, we strongly recommend consulting a registered Chartered Accountant (CA).',
    keywords: [
      'GST registration Virar',
      'Apply for GST number',
      'GST certificate online',
      'E-commerce GST apply',
      'Business tax registration',
      'New GSTIN application'
    ],
    faqs: [
      { q: 'Is it mandatory to have a commercial shop to get GST?', a: 'No, you can register for GST using your residential address as your place of business, provided you have the electricity bill and an NOC from the property owner.' },
      { q: 'Do I need GST to sell on Amazon or Meesho?', a: 'Yes, to sell goods online through e-commerce operators, having a valid GSTIN is mandatory regardless of your turnover.' },
      { q: 'Will you file my monthly GST returns as well?', a: 'We primarily assist with the new registration application and basic amendments. For monthly/quarterly return filing (GSTR-1, GSTR-3B), we can refer you to our partner tax professionals.' }
    ]
  },

  // ─── I. Smart Card Services ───
  {
    id: 67, slug: 'aadhaar-pvc-smart-card', category: 'smartcard',
    name: 'Official Aadhaar PVC Card', icon: 'CreditCard',
    description: 'Order the official UIDAI PVC Aadhaar Card with advanced security features like a hologram, guilloche pattern, ghost image, and microtext. Delivered directly to your home by India Post.',
    documentsRequired: [
      'Aadhaar Number (12-digit)',
      'Registered Mobile Number (for OTP)'
    ],
    eligibility: 'Any Aadhaar card holder.',
    processSteps: [
      'Step 1: Provide your Aadhaar number.',
      'Step 2: We request an OTP on your linked mobile number.',
      'Step 3: We place the official order on the UIDAI portal.',
      'Step 4: Pay the government fee.',
      'Step 5: The card is delivered to your registered address by Speed Post.'
    ],
    processingTime: '5 to 15 Days (Delivery by India Post)',
    charges: '₹50 (Govt Fee) + Nominal Service Charge',
    notes: 'If your mobile number is not linked to Aadhaar, we can still order the PVC card using an alternate mobile number for OTP.',
    keywords: [
      'Order Aadhaar PVC card',
      'UIDAI smart card apply',
      'Official plastic Aadhaar',
      'Hologram Aadhaar card',
      'Aadhaar speed post',
      'Original Aadhaar PVC'
    ],
    faqs: [
      { q: 'Is this the original Aadhaar card?', a: 'Yes, this service orders the official PVC card directly from the government (UIDAI) printing press in Delhi. It is fully valid and highly secure.' },
      { q: 'What if my mobile number is not linked to Aadhaar?', a: 'You can still order the official PVC card! UIDAI allows us to use any alternate active mobile number to receive the order OTP.' },
      { q: 'Can I track my PVC card delivery?', a: 'Yes, once the card is dispatched, we provide you with a Speed Post AWB tracking number to track the delivery on the India Post website.' }
    ]
  },
  {
    id: 68, slug: 'driving-licence-smart-card', category: 'smartcard',
    name: 'Driving Licence Smart Card', icon: 'Car',
    description: 'Upgrade your old paper Driving Licence to a chip-based Smart Card, or apply for a duplicate DL if lost. We assist with the Parivahan portal process and RTO appointment booking.',
    documentsRequired: [
      'Old Driving Licence details',
      'Aadhaar Card',
      'FIR/Police Report (if DL is lost)',
      'Passport-size Photograph'
    ],
    eligibility: 'Individuals holding a valid Indian driving licence.',
    processSteps: [
      'Step 1: Provide your DL details and Aadhaar.',
      'Step 2: We fill the application on the Parivahan Sarathi portal.',
      'Step 3: Upload required documents and pay RTO fees.',
      'Step 4: Book a slot for RTO biometric capture (if required).',
      'Step 5: The new Smart DL is dispatched to your address.'
    ],
    processingTime: '15 to 30 Days',
    charges: 'RTO Fees + Service Charges',
    notes: 'For replacement of a lost DL, an online Police Complaint/NC is mandatory before applying.',
    keywords: [
      'Duplicate driving licence',
      'Smart card DL apply',
      'Parivahan sarathi help',
      'Lost driving license',
      'Upgrade paper DL',
      'RTO smart card'
    ],
    faqs: [
      { q: 'Do I need to visit the RTO for a duplicate DL?', a: 'If your Aadhaar is fully linked with your DL data on the portal, many RTOs now process it completely faceless (online). Otherwise, one visit for biometrics is required.' },
      { q: 'My DL is from another state. Can I get a smart card here?', a: 'Yes, but you first need to apply for a Change of Address and NOC to transfer your DL to the local Maharashtra RTO.' },
      { q: 'How is the Smart Card DL delivered?', a: 'The RTO dispatches the Smart Card DL strictly to your Aadhaar-registered address via India Post.' }
    ]
  },
  {
    id: 69, slug: 'vehicle-rc-smart-card', category: 'smartcard',
    name: 'Vehicle RC Smart Card', icon: 'CarFront',
    description: 'Lost your vehicle\'s RC book? We help you apply for a duplicate RC Smart Card or update details on the Parivahan Vahan portal securely and quickly.',
    documentsRequired: [
      'Vehicle Registration Number and Chassis Number',
      'Valid Insurance Policy',
      'Valid PUC Certificate',
      'Aadhaar Card of Owner',
      'Police NC (if RC is lost)'
    ],
    eligibility: 'Registered vehicle owners.',
    processSteps: [
      'Step 1: Provide vehicle details and ownership proof.',
      'Step 2: We initiate the duplicate RC application on the Vahan portal.',
      'Step 3: Upload documents and pay the RTO fee.',
      'Step 4: Print the application forms for your signature.',
      'Step 5: Submit the file to the RTO for approval.'
    ],
    processingTime: '15 to 30 Days',
    charges: 'RTO Fees + Service Charges',
    notes: 'Clearance of any pending traffic challans (e-challans) is mandatory before applying for RC-related services.',
    keywords: [
      'Duplicate RC book apply',
      'Vehicle RC smart card',
      'Parivahan vahan help',
      'Lost RC book',
      'Bike RC smart card',
      'Car registration card'
    ],
    faqs: [
      { q: 'What happens if I have a pending loan on my bike?', a: 'If the vehicle is under hypothecation (loan), you may need a No Objection Certificate (NOC) from your bank/financier to get a duplicate RC.' },
      { q: 'Can I drive without the physical RC while waiting?', a: 'We highly recommend downloading the digital RC on the DigiLocker or mParivahan app, which is legally valid under the Motor Vehicles Act during police checks.' },
      { q: 'Does the RTO inspect the vehicle for a duplicate RC?', a: 'Usually, physical inspection is not required for a duplicate RC unless there are discrepancies. The Smart RC will be mailed to your address.' }
    ]
  },
  {
    id: 70, slug: 'ayushman-golden-card', category: 'smartcard',
    name: 'Ayushman Bharat Golden Card', icon: 'Badge',
    description: 'Get your PMJAY Ayushman Golden Card and secure up to ₹5 Lakhs per family per year for free cashless medical treatment at empanelled public and private hospitals.',
    documentsRequired: [
      'Aadhaar Card',
      'Ration Card (Orange/Yellow)',
      'Mobile Number (for OTP)'
    ],
    eligibility: 'Families listed in the SECC 2011 database or those holding an eligible Antyodaya/BPL ration card.',
    processSteps: [
      'Step 1: Provide your Ration Card or Aadhaar to check eligibility on the PMJAY portal.',
      'Step 2: If eligible, we complete your Aadhaar e-KYC (OTP or Fingerprint).',
      'Step 3: Submit the application for approval.',
      'Step 4: Once approved (usually instantly), we download the Golden Card.',
      'Step 5: We print the Golden Card on a PVC Smart Card for you.'
    ],
    processingTime: 'Instant / Same Day',
    charges: 'Free Govt Service (Nominal charge for PVC printing only)',
    notes: 'The Ayushman card provides health cover for serious surgeries and hospitalizations, not for standard OPD clinic visits.',
    keywords: [
      'Ayushman card apply Virar',
      'PMJAY golden card',
      '5 lakh health card',
      'Free medical card',
      'Ayushman PVC print',
      'Check ayushman list'
    ],
    faqs: [
      { q: 'How do I know if I am eligible?', a: 'Bring your Aadhaar card and Ration card to our center. We can search the government database in 2 minutes to check if your name is on the PMJAY beneficiary list.' },
      { q: 'Can I add new family members to the Ayushman card?', a: 'Yes, if the head of the family has an Ayushman card, new members (like a newborn baby or new wife) can be added by linking their Aadhaar and relation proof.' },
      { q: 'Where can I use this card?', a: 'You can use it for cashless hospitalization at thousands of government and private empanelled hospitals across India.' }
    ]
  },
  {
    id: 71, slug: 'abha-card-registration', category: 'smartcard',
    name: 'ABHA Health Card (NDHM)', icon: 'HeartPulse',
    description: 'Create your Ayushman Bharat Health Account (ABHA). It acts as a digital health locker where you can safely store and share your medical records, prescriptions, and lab reports with doctors.',
    documentsRequired: [
      'Aadhaar Card (Must be linked with Mobile Number)',
      'Mobile Number'
    ],
    eligibility: 'Any Indian citizen.',
    processSteps: [
      'Step 1: Provide your Aadhaar number.',
      'Step 2: Authenticate via Aadhaar OTP.',
      'Step 3: Create a unique ABHA address (like an email ID, e.g., name@abdm).',
      'Step 4: The 14-digit ABHA ID card is generated instantly.',
      'Step 5: We print it on a PVC Smart Card for you.'
    ],
    processingTime: 'Instant (5 Minutes)',
    charges: 'Contact for PVC printing charges',
    notes: 'ABHA is a digital health ID and is completely different from the PMJAY Golden Card. ABHA does not provide free medical treatment or insurance.',
    keywords: [
      'ABHA card registration',
      'Health ID card apply',
      'National digital health mission',
      'ABHA PVC print',
      'Create ABHA address',
      'Digital health locker'
    ],
    faqs: [
      { q: 'Does the ABHA card give me ₹5 Lakh insurance?', a: 'No, ABHA is only a digital locker for your medical history. The ₹5 Lakh insurance is provided by the PMJAY Ayushman Golden Card.' },
      { q: 'Can children get an ABHA card?', a: 'Yes, ABHA cards can be created for children. For minors, it can be linked to the parent\'s ABHA account.' },
      { q: 'Is my health data safe?', a: 'Yes, the data is heavily encrypted by the government. No doctor or hospital can view your medical history without you explicitly sharing a temporary OTP with them.' }
    ]
  },
  {
    id: 72, slug: 'e-shram-card', category: 'smartcard',
    name: 'E-Shram Card', icon: 'Hammer',
    description: 'Register on the national e-Shram portal to get your E-Shram Card (UAN Card). It provides unorganized sector workers with social security benefits, ₹2 Lakh accidental insurance, and disaster relief support.',
    documentsRequired: [
      'Aadhaar Card (Must be linked with Mobile Number)',
      'Active Mobile Number',
      'Bank Account Passbook Details'
    ],
    eligibility: 'Any unorganized sector worker (maids, drivers, laborers, tailors, etc.) aged 16 to 59, who is NOT an income tax payee and NOT a member of EPFO/ESIC.',
    processSteps: [
      'Step 1: Provide your Aadhaar, bank details, and occupation.',
      'Step 2: We authenticate your Aadhaar using OTP or Fingerprint.',
      'Step 3: Fill out the employment and nominee details on the portal.',
      'Step 4: The 12-digit UAN (Universal Account Number) is generated instantly.',
      'Step 5: We print the E-Shram Card on a durable PVC Smart Card.'
    ],
    processingTime: 'Instant (10 Minutes)',
    charges: 'Free Govt Registration (Charge for PVC Printing only)',
    notes: 'If you already have a PF (EPFO) account from your company, you are NOT eligible for an E-Shram card. Applying falsely can lead to cancellation.',
    keywords: [
      'e-Shram card apply Virar',
      'UAN card registration',
      'Labour card online',
      'Unorganized worker card',
      'e-shram PVC print',
      '2 lakh insurance card'
    ],
    faqs: [
      { q: 'Is the ₹2 Lakh insurance free?', a: 'Yes, registered workers get an accidental death and disability insurance cover of ₹2 Lakhs under PMSBY, completely free for the first year.' },
      { q: 'Can a housewife apply for an E-Shram card?', a: 'Housewives are generally not considered unorganized workers under this scheme unless they are involved in home-based tailoring, tuition, or agriculture.' },
      { q: 'I lost my card, can I download it again?', a: 'Yes, we can download your e-Shram card again simply using your Aadhaar number and registered mobile OTP, and print a new PVC card.' }
    ]
  },
  {
    id: 73, slug: 'labour-card', category: 'smartcard',
    name: 'Maharashtra Labour Card (BOCW)', icon: 'HardHat',
    description: 'Apply for the Maharashtra Building and Other Construction Workers (BOCW) Labour Card. Registered workers get access to financial aid, children\'s education scholarships, and housing subsidies.',
    documentsRequired: [
      'Aadhaar Card and PAN Card',
      '90-Days Work Certificate (from Contractor/Gram Sevak)',
      'Bank Passbook & Ration Card',
      '3 Passport-size Photographs'
    ],
    eligibility: 'Construction and building workers (masons, plumbers, carpenters, painters, electricians) aged 18 to 60 years working in Maharashtra.',
    processSteps: [
      'Step 1: Gather your 90-days work proof and KYC documents.',
      'Step 2: We fill out the online application on the Mahabocw portal.',
      'Step 3: Upload all scanned documents and pay the ₹25 registration fee.',
      'Step 4: Application is verified by the Labour Department.',
      'Step 5: Once approved, we download and print your official Labour Card.'
    ],
    processingTime: '15 to 30 Days (Depends on Dept Verification)',
    charges: 'Govt Fee (₹25) + Service Charges',
    notes: 'The BOCW Labour Card must be renewed annually by submitting a new 90-days work certificate to continue receiving benefits.',
    keywords: [
      'Maharashtra labour card',
      'BOCW registration Virar',
      'Construction worker card',
      'Kamgar kalyan mandal',
      'Labour department online',
      'Kamgar card apply'
    ],
    faqs: [
      { q: 'Is E-Shram and BOCW Labour Card the same?', a: 'No. E-Shram is a central database for all unorganized workers, while BOCW is a Maharashtra State board specifically for construction and building workers offering state-level benefits.' },
      { q: 'How do I get the 90-days work certificate?', a: 'You need to get a signed and stamped certificate from the builder, contractor, or local Gram Sevak stating that you have worked in construction for at least 90 days in the past year.' },
      { q: 'What benefits do I get?', a: 'Benefits include financial assistance for tools, marriage expenses, health treatments, and scholarships (₹2000 to ₹100,000) for children\'s education.' }
    ]
  },
  {
    id: 74, slug: 'atm-debit-card', category: 'smartcard',
    name: 'ATM / Debit Card Apply', icon: 'CreditCard',
    description: 'Need a new ATM card? We assist you in applying for a new or replacement ATM/Debit Card for your existing bank account via internet banking, mobile banking, or offline form filling.',
    documentsRequired: [
      'Bank Passbook / Account Details',
      'Aadhaar Card (for offline forms)',
      'Registered Mobile Number (for OTP/App access)'
    ],
    eligibility: 'Existing account holders of any bank (SBI, BoB, HDFC, ICICI, etc.).',
    processSteps: [
      'Step 1: Bring your bank passbook and registered mobile phone.',
      'Step 2: We help you log in to your bank\'s official app or net banking portal.',
      'Step 3: Place a request for a new or replacement ATM Card.',
      'Step 4: For offline, we download and fill the specific bank\'s ATM application form for you to submit to the branch.',
      'Step 5: The card is delivered to your registered address by the bank.'
    ],
    processingTime: '7 to 15 Days (Delivery by Bank)',
    charges: 'Starting from ₹50 for online assistance/form filling',
    notes: 'Once the card arrives, we can also assist you with online PIN generation (Green PIN) through the bank\'s toll-free IVR or ATM.',
    keywords: [
      'Apply for ATM card',
      'New debit card request',
      'SBI ATM form fill',
      'Lost ATM replacement',
      'Bank form filling Virar',
      'Generate ATM PIN online'
    ],
    faqs: [
      { q: 'Do you provide the ATM card instantly in the shop?', a: 'No, ATM cards are highly secure financial instruments. We only assist you in applying for it. The actual card is printed and couriered directly by your Bank to your home address.' },
      { q: 'My old card expired, do I need to reapply?', a: 'Most banks automatically send a new card to your address a month before expiry. If they haven\'t, we can help you place a request.' },
      { q: 'How do I generate the PIN for my new card?', a: 'We can guide you to generate the PIN via SMS, Internet Banking, or the bank\'s toll-free number. You will not need to visit the branch.' }
    ]
  },
  {
    id: 75, slug: 'rupay-card', category: 'smartcard',
    name: 'RuPay Card Apply', icon: 'CreditCard',
    description: 'Apply for India\'s indigenous RuPay Debit/Credit Card. RuPay cards offer lower transaction fees, domestic security, and exclusive cashback offers on utility bills and travel.',
    documentsRequired: [
      'Bank Account Passbook',
      'Aadhaar Card & PAN Card',
      'Registered Mobile Number'
    ],
    eligibility: 'Existing bank account holders.',
    processSteps: [
      'Step 1: Check if your bank supports RuPay card issuance.',
      'Step 2: We assist in placing an online request via your mobile banking app.',
      'Step 3: Alternatively, we provide and fill the offline RuPay application form.',
      'Step 4: Submit to the bank (if offline).',
      'Step 5: The RuPay card is delivered to your home by the bank.'
    ],
    processingTime: '7 to 15 Days',
    charges: 'Form filling / Assistance charges apply',
    notes: 'RuPay cards are mandated for all PM Jan Dhan Yojana accounts and offer built-in accidental insurance cover.',
    keywords: [
      'Apply RuPay card online',
      'Indian debit card',
      'RuPay platinum benefits',
      'Jan Dhan RuPay card',
      'Change Visa to RuPay'
    ],
    faqs: [
      { q: 'What is the difference between RuPay and Visa/Mastercard?', a: 'RuPay is an Indian domestic card network. It processes transactions locally, making it faster and cheaper for merchants. Many Indian government apps (like BHIM) offer special rewards for RuPay users.' },
      { q: 'Can I use RuPay internationally?', a: 'Standard RuPay cards are domestic. However, you can request a "RuPay Platinum Global" card which ties up with Discover/Diners Club for international use.' },
      { q: 'Does RuPay have free insurance?', a: 'Yes, many RuPay cards (especially PMJDY ones) come with a complimentary ₹1 Lakh to ₹2 Lakh accidental death insurance.' }
    ]
  },
  {
    id: 76, slug: 'kisan-credit-card', category: 'smartcard',
    name: 'Kisan Credit Card (KCC)', icon: '🌾',
    description: 'Empowering farmers! We assist in applying for the Kisan Credit Card (KCC), which provides farmers with timely and affordable credit for agricultural expenses like seeds, fertilizers, and machinery.',
    documentsRequired: [
      'Aadhaar Card and PAN Card',
      'Land Records (7/12 & 8A Extracts)',
      'Crop Details (Kharif/Rabi)',
      'Bank Account Passbook',
      'Passport-size Photographs'
    ],
    eligibility: 'Individual farmers, joint cultivators, tenant farmers, and Self Help Groups (SHGs) involved in agriculture or allied activities (dairy/fishery).',
    processSteps: [
      'Step 1: Bring your 7/12 extract and Aadhaar to our center.',
      'Step 2: We download and neatly fill out the KCC application form.',
      'Step 3: We attach all necessary land records and KYC copies.',
      'Step 4: You submit the completed file to your local Gramin Bank or Nationalized Bank.',
      'Step 5: The bank verifies the land value and issues the KCC limit.'
    ],
    processingTime: '7 to 14 Days (Subject to Bank Approval)',
    charges: 'Form Filling & Documentation Assistance Charges',
    notes: 'The KCC scheme offers a very low-interest rate (usually 4% if repaid on time) subsidized by the government.',
    keywords: [
      'Kisan credit card apply',
      'KCC form fill Virar',
      'Agriculture loan scheme',
      'PM kisan KCC',
      '7/12 loan card',
      'Farmer credit limit'
    ],
    faqs: [
      { q: 'What is the interest rate on a Kisan Credit Card?', a: 'The standard interest rate is 7%. However, if you repay the loan promptly within the due date, the government provides a 3% subvention, bringing your effective interest rate down to just 4% per annum.' },
      { q: 'Can I get a KCC if I don\'t own land but take it on rent?', a: 'Yes, tenant farmers and oral lessees are eligible for KCC, provided they have a registered lease agreement or a certificate from local authorities.' },
      { q: 'Is a KCC a physical ATM card?', a: 'Yes, most banks now issue a physical RuPay Kisan Credit Card that you can use at ATMs to withdraw cash or buy seeds/fertilizers via POS machines.' }
    ]
  },
  {
    id: 77, slug: 'pm-jan-dhan-card', category: 'smartcard',
    name: 'PM Jan Dhan Account & Card', icon: 'Landmark',
    description: 'Open a Zero-Balance Savings Account under the Pradhan Mantri Jan Dhan Yojana (PMJDY). Get a free RuPay debit card, overdraft facility, and accidental insurance coverage.',
    documentsRequired: [
      'Aadhaar Card',
      '2 Passport-size Photographs',
      'Mobile Number'
    ],
    eligibility: 'Any Indian citizen aged 10 years and above who does not already have a bank account.',
    processSteps: [
      'Step 1: Visit us with your Aadhaar and photos.',
      'Step 2: We provide and accurately fill the PMJDY account opening form.',
      'Step 3: We prepare the KYC document file.',
      'Step 4: You submit the file to the nearest Bank Mitra / CSC or Bank Branch.',
      'Step 5: Your zero-balance account is opened, and a Jan Dhan RuPay card is issued.'
    ],
    processingTime: '1 to 3 Days',
    charges: 'Form Filling Assistance Charges',
    notes: 'PMJDY accounts are excellent for receiving Direct Benefit Transfers (DBT) like gas subsidies and PM-Kisan installments.',
    keywords: [
      'Jan dhan yojana account',
      'Zero balance bank account',
      'PMJDY form Virar',
      'RuPay jan dhan card',
      'DBT link bank account'
    ],
    faqs: [
      { q: 'Do I need to maintain a minimum balance?', a: 'No, the biggest advantage of a PMJDY account is that there is absolutely no minimum balance requirement. You will never be charged a penalty for zero balance.' },
      { q: 'Can I link it to get my LPG cylinder subsidy?', a: 'Yes, PMJDY accounts are automatically designed to receive Direct Benefit Transfers (DBT) like gas subsidies, student scholarships, and pension schemes.' },
      { q: 'What is the overdraft facility?', a: 'After 6 months of satisfactory operation of the account, the bank may allow you an overdraft (loan) facility of up to ₹10,000 without any security.' }
    ]
  },
  {
    id: 78, slug: 'student-id-card', category: 'smartcard',
    name: 'Student ID Card (PVC)', icon: 'IdCard',
    description: 'We design and print high-quality, customized PVC student ID cards for schools, coaching classes, and educational institutes. Available with lanyards and holders.',
    documentsRequired: [
      'Student\'s Photograph',
      'Student Details (Name, Class, Roll No, Blood Group)',
      'Institution Logo & Signature'
    ],
    eligibility: 'Any student, school, or coaching institute.',
    processSteps: [
      'Step 1: Provide the student data in an Excel sheet (for bulk) or WhatsApp (for single).',
      'Step 2: Share the institute\'s logo and preferred design format.',
      'Step 3: We design a professional ID card template for your approval.',
      'Step 4: Once approved, we print the IDs on durable PVC plastic cards.',
      'Step 5: Cards are delivered with optional lanyards and holders.'
    ],
    processingTime: '1 to 3 Days (Depending on bulk quantity)',
    charges: 'Starting from ₹50 per card (Bulk discounts available)',
    notes: 'We only print ID cards with authorization from the respective school or coaching institute to prevent misuse.',
    keywords: [
      'Student ID card printing',
      'PVC school ID card',
      'Coaching class ID card',
      'Bulk ID card print',
      'Lanyard printing Virar',
      'Custom school badges'
    ],
    faqs: [
      { q: 'Can you print just one ID card if a student lost theirs?', a: 'Yes, if you have the soft copy (PDF/Image) of the old ID card, or an authorization letter from the principal, we can print a single replacement card instantly.' },
      { q: 'Do you provide the neck ribbons (lanyards)?', a: 'Yes, we provide standard lanyards and plastic card holders. We can also arrange custom-printed lanyards with your school\'s name for bulk orders.' },
      { q: 'Can you add a barcode for library scanning?', a: 'Absolutely. If you provide the student\'s unique roll number or barcode data, we can embed a scannable barcode or QR code on the ID card.' }
    ]
  },
  {
    id: 79, slug: 'school-college-smart-id', category: 'smartcard',
    name: 'College Smart ID Card (RFID)', icon: 'GraduationCap',
    description: 'Advanced Smart ID Cards for colleges and corporate institutes. These cards contain an embedded RFID/NFC chip used for automated attendance systems and campus access control.',
    documentsRequired: [
      'Student/Staff Data in Excel format',
      'High-Resolution Photographs',
      'Institute Authorization Letter'
    ],
    eligibility: 'Colleges, corporate offices, and large institutions.',
    processSteps: [
      'Step 1: The institute provides the staff/student database.',
      'Step 2: We program the RFID chips according to the institute\'s attendance software.',
      'Step 3: The card faces are beautifully designed and printed.',
      'Step 4: A digital test is run to ensure the cards scan perfectly.',
      'Step 5: Final delivery of the programmed Smart IDs.'
    ],
    processingTime: '3 to 7 Days (Bulk Orders)',
    charges: 'Contact for quotation based on chip type (125kHz / 13.56MHz)',
    notes: 'Please specify the frequency of your existing biometric/attendance machine so we can supply compatible RFID cards.',
    keywords: [
      'RFID ID card printing',
      'Smart college ID',
      'Attendance punch card',
      'NFC student card',
      'Corporate ID card',
      'Proximity card printing'
    ],
    faqs: [
      { q: 'Will these cards work with our existing fingerprint machine?', a: 'Yes, if your biometric machine has an inbuilt card reader, we will supply standard 125kHz proximity cards which easily integrate with most machines.' },
      { q: 'Can we print on both sides of the card?', a: 'Yes, we provide full-color, edge-to-edge dual-sided printing. Important details on the front, and emergency contacts/rules on the back.' },
      { q: 'What is the minimum order quantity for RFID cards?', a: 'For custom-programmed RFID cards, we generally require a minimum order quantity of 50 cards.' }
    ]
  },
  {
    id: 80, slug: 'library-card', category: 'smartcard',
    name: 'Library Membership Card', icon: 'BookOpen',
    description: 'Custom PVC Library Membership Cards for public libraries, school libraries, and reading rooms. Complete with barcode integration for easy book issue/return tracking.',
    documentsRequired: [
      'Member\'s Details & Photo',
      'Library Name and Logo',
      'Membership ID / Barcode Data'
    ],
    eligibility: 'Libraries and reading rooms.',
    processSteps: [
      'Step 1: Provide the member details and library branding.',
      'Step 2: We generate a unique barcode for the membership ID.',
      'Step 3: Design the card with member photo, name, and barcode.',
      'Step 4: Print on a premium PVC card.',
      'Step 5: Handover to the library administration.'
    ],
    processingTime: 'Same Day to 2 Days',
    charges: 'Starting from ₹50 per card',
    notes: 'These cards are waterproof and highly durable, ensuring they last for years despite frequent handling by members.',
    keywords: [
      'Library card printing',
      'Barcode membership card',
      'Reading room ID',
      'PVC club card',
      'Library management cards'
    ],
    faqs: [
      { q: 'Can you design a generic library card where we can write the name with a pen?', a: 'Yes, we can print a beautifully branded generic PVC card with a special matte strip on the back where you can manually write the member\'s name using a permanent marker.' },
      { q: 'Do you also provide the barcode scanner?', a: 'We only provide the barcode printing service. You must have your own USB barcode scanner and library management software (like KOHA) to scan them.' },
      { q: 'Can we use these as loyalty cards for my shop?', a: 'Absolutely! We can print loyalty, VIP, and discount membership cards for retail shops and salons using the same high-quality PVC technology.' }
    ]
  },
  {
    id: 81, slug: 'dl-pvc-print', category: 'smartcard',
    name: 'Driving Licence PVC Print', icon: 'Car',
    description: 'Convert your digital Driving Licence (PDF from DigiLocker/Parivahan) into a sturdy, wallet-sized PVC Smart Card. Perfect if your original DL is damaged or made of flimsy paper.',
    documentsRequired: [
      'Original DL PDF from DigiLocker/Parivahan',
      'Aadhaar Card (for identity verification)'
    ],
    eligibility: 'Anyone with a valid digital Driving Licence.',
    processSteps: [
      'Step 1: Download your DL PDF from DigiLocker or mParivahan.',
      'Step 2: Share the PDF file with us via WhatsApp or Email.',
      'Step 3: We correctly crop and format the front and back of the license.',
      'Step 4: We print it instantly on a high-gloss PVC card.',
      'Step 5: Collect your durable DL card.'
    ],
    processingTime: 'Instant (5 Minutes)',
    charges: 'Starting from ₹50 per card',
    notes: 'This is a private PVC print of your digital DL. While highly useful for daily carrying, it does not replace the chip-based Smart Card issued directly by the RTO.',
    keywords: [
      'Print DL on plastic',
      'Driving license PVC',
      'Digilocker DL print',
      'Smart card driving licence print',
      'Wallet size DL'
    ],
    faqs: [
      { q: 'Will the traffic police accept this PVC print?', a: 'Traffic police generally verify the DL number on their machine. A clear PVC print of the official DigiLocker PDF is widely accepted as a valid physical copy.' },
      { q: 'Does this card have a microchip?', a: 'No, our PVC print does not have a microchip. If you specifically need the RTO\'s chip-based Smart Card, you must apply for a "Duplicate DL" through the Parivahan portal (which we also assist with).' },
      { q: 'Can you fix the faded photo on my old DL?', a: 'We can only print exactly what is present in your digital PDF. If the photo is faded in the RTO database, it will print faded. We do not digitally alter government IDs.' }
    ]
  },
  {
    id: 82, slug: 'vehicle-rc-pvc-print', category: 'smartcard',
    name: 'Vehicle RC PVC Print', icon: 'FileText',
    description: 'Get a heavy-duty PVC card print of your Vehicle Registration Certificate (RC). Stop carrying the large paper RC which easily tears and gets ruined by rain.',
    documentsRequired: [
      'Digital RC PDF from DigiLocker/Parivahan',
      'Vehicle Owner\'s ID Proof'
    ],
    eligibility: 'Vehicle owners possessing the digital RC PDF.',
    processSteps: [
      'Step 1: Download your RC PDF from DigiLocker.',
      'Step 2: Send the file to our shop\'s system.',
      'Step 3: We expertly format the layout to fit a standard credit-card size.',
      'Step 4: Print the RC on a waterproof PVC card.',
      'Step 5: Collect your card instantly.'
    ],
    processingTime: 'Instant (5 Minutes)',
    charges: 'Starting from ₹50 per card',
    notes: 'Ensure you download the full PDF format of the RC, not just a screenshot, for the best print clarity.',
    keywords: [
      'Vehicle RC plastic print',
      'Bike RC book print',
      'Car RC smart card print',
      'Digilocker RC print',
      'Waterproof RC card'
    ],
    faqs: [
      { q: 'Is it safe to keep the PVC RC in my bike\'s utility box?', a: 'Yes! Unlike paper RCs that get destroyed by moisture or heat inside a bike\'s storage box, our PVC cards are 100% waterproof and highly durable.' },
      { q: 'The RTO didn\'t send me my RC book. Can you print it?', a: 'Yes, if your RC is approved online but not delivered yet, you can download the digital copy from mParivahan and we will print it on a PVC card for you to use immediately.' },
      { q: 'Do you laminate the card?', a: 'The PVC card itself is plastic and doesn\'t require lamination. However, we print using thermal transfer technology which is naturally scratch-resistant and waterproof.' }
    ]
  },
  {
    id: 83, slug: 'fastag-card', category: 'smartcard',
    name: 'FASTag Purchase & Recharge', icon: 'Car',
    description: 'Skip the toll queues! We provide new FASTag RFID stickers for your car, commercial vehicle, or truck. We also assist with instant FASTag recharges and account issue resolutions.',
    documentsRequired: [
      'Vehicle RC (Registration Certificate)',
      'Aadhaar Card & PAN Card of Owner',
      'Clear photo of the Vehicle (Front view showing Number Plate)'
    ],
    eligibility: 'All four-wheeler and heavy commercial vehicle owners.',
    processSteps: [
      'Step 1: Provide your RC and KYC documents.',
      'Step 2: Choose your preferred FASTag provider (Paytm, ICICI, HDFC, IDFC, etc.).',
      'Step 3: We register your vehicle and activate the FASTag instantly.',
      'Step 4: We carefully paste the RFID sticker on your vehicle\'s windshield.',
      'Step 5: Your tag is ready to scan at any toll plaza across India.'
    ],
    processingTime: 'Instant (15 Minutes)',
    charges: 'Tag Fee + Initial Recharge Balance',
    notes: 'FASTag is now legally mandatory for all four-wheelers. Vehicles without a valid FASTag must pay double the toll amount.',
    keywords: [
      'Buy FASTag near me',
      'FASTag recharge Virar',
      'Paytm FASTag agent',
      'Toll tax sticker',
      'New FASTag apply',
      'Replace broken FASTag'
    ],
    faqs: [
      { q: 'My windshield broke and I lost my FASTag. What do I do?', a: 'You must apply for a replacement FASTag. Do not just buy a new one, as your old account might still have a balance or be blacklisted. We can help you close the old tag and issue a replacement.' },
      { q: 'How do I check my FASTag balance?', a: 'Depending on the bank that issued your tag, you can check the balance via their official app, missed call facility, or simply link it to PhonePe/GPay for live balance tracking.' },
      { q: 'Can I use one FASTag for two different cars?', a: 'No, a FASTag is strictly linked to a specific vehicle\'s chassis and registration number. Using it on another vehicle is illegal and the toll plaza scanner will reject it.' }
    ]
  },

  // ─── J. Property & Tax Services ───
  {
    id: 84, slug: 'gharpatti-transfer', category: 'certificates',
    name: 'Gharpatti (Property Tax) Transfer', icon: 'Home',
    description: 'Bought a new house? We assist in transferring the Gram Panchayat Gharpatti (Property Tax) into your name after a sale, gift, or inheritance, ensuring your property records are legally updated.',
    documentsRequired: [
      'Original Registered Sale Deed / Gift Deed',
      'Old Property Tax (Gharpatti) Receipt',
      'Aadhaar Card & PAN Card of New Owner',
      'NOC from Society/Builder (if applicable)'
    ],
    eligibility: 'New property owners who need to update the tax assessment records.',
    processSteps: [
      'Step 1: Provide your property registration documents.',
      'Step 2: We fill out the official Namantar (Transfer) application form.',
      'Step 3: Prepare the complete file with all required photocopies.',
      'Step 4: You submit the file to the local Gram Panchayat or Municipal Office.',
      'Step 5: The Talathi/Clerk verifies the deed and updates the tax register.'
    ],
    processingTime: '15 to 30 Days',
    charges: 'Form filling and file preparation charges apply',
    notes: 'In some villages, a nominal transfer fee is charged by the Gram Panchayat based on the property\'s square footage.',
    keywords: [
      'Gharpatti name change',
      'Property tax transfer',
      'Gram panchayat namantar',
      'House tax name update',
      'Sale deed gharpatti',
      'Virar property tax help'
    ],
    faqs: [
      { q: 'Is it mandatory to transfer the Gharpatti?', a: 'Yes, if you have purchased a property, you must transfer the Gharpatti to your name to prove legal possession and to legally pay future property taxes.' },
      { q: 'Can you help if the previous owner has died?', a: 'Yes, in case of inheritance, you will need to provide the Death Certificate of the owner and a Legal Heir (Succession) Certificate to transfer the property tax to your name.' },
      { q: 'Do you submit the file to the Panchayat?', a: 'We handle all the complex documentation, typing, and file preparation. The final physical submission must usually be done by the owner at the local office.' }
    ]
  },
  {
    id: 85, slug: 'gharpatti-correction', category: 'certificates',
    name: 'Gharpatti Correction', icon: 'FileEdit',
    description: 'Is your name misspelled on the house tax receipt? We help prepare the application and affidavit for correcting errors in name, area size, or address on your Gharpatti.',
    documentsRequired: [
      'Current Gharpatti with the error',
      'Valid Proof for Correction (Sale Deed / Aadhaar)',
      'Notarized Affidavit (if required)'
    ],
    eligibility: 'Property owners with incorrect details on their property tax receipts.',
    processSteps: [
      'Step 1: Identify the exact error on the current Gharpatti.',
      'Step 2: We type an official application requesting the correction.',
      'Step 3: If required, we draft an affidavit for name mismatch.',
      'Step 4: Attach the supporting documents (like your exact name on the Sale Deed).',
      'Step 5: Submit to the local authority for correction.'
    ],
    processingTime: '15 to 30 Days',
    charges: 'Application typing and consultation charges apply',
    notes: 'Gram Panchayats strictly follow the details mentioned in the registered Sale Deed. If the Sale Deed itself has an error, you must do a Rectification Deed first.',
    keywords: [
      'Correct name in gharpatti',
      'Property tax error fix',
      'Gharpatti spelling mistake',
      'House tax amendment',
      'Gram panchayat application'
    ],
    faqs: [
      { q: 'My name is misspelled, what proof is needed?', a: 'The primary proof is the registered Sale Deed or Index II. The name on the Gharpatti will be corrected to exactly match the name on the property registration document.' },
      { q: 'Can I change the square footage on the receipt?', a: 'Yes, if the Gram Panchayat has accidentally taxed you for a larger area than you own, you can submit an application with your approved building plan or deed to correct the tax assessment.' }
    ]
  },
  {
    id: 86, slug: 'light-bill-name-transfer', category: 'other',
    name: 'Light Bill Name Transfer (MSEDCL)', icon: 'Zap',
    description: 'Ensure your electricity bill is in your name! We assist in applying for MSEB/MSEDCL name change, load enhancement, or tariff change securely through the Mahadiscom portal.',
    documentsRequired: [
      'Latest Electricity Bill',
      'Property Ownership Proof (Sale Deed / Index II / Gharpatti)',
      'Aadhaar Card of New Owner',
      'NOC / Consent from Previous Owner (Form \'U\')'
    ],
    eligibility: 'New property owners or tenants requiring meter name transfer.',
    processSteps: [
      'Step 1: Gather the latest bill, Index II, and previous owner\'s NOC.',
      'Step 2: We submit an online application on the MSEDCL Web Portal.',
      'Step 3: Upload all scanned documents and pay the MSEB processing fee online.',
      'Step 4: The application goes to the local section office for verification.',
      'Step 5: The name is updated on the next billing cycle.'
    ],
    processingTime: '15 to 30 Days (Reflected in next bill)',
    charges: 'Online processing and service charges apply',
    notes: 'If you cannot get the previous owner\'s NOC (e.g., they are absconding or deceased), you must submit an Indemnity Bond on a ₹500 stamp paper.',
    keywords: [
      'Light bill name change',
      'MSEB name transfer online',
      'MSEDCL meter transfer',
      'Change name on electricity bill',
      'Index 2 light bill',
      'Mahadiscom application'
    ],
    faqs: [
      { q: 'Do I need to clear old dues before name transfer?', a: 'Yes, the MSEB portal will not accept a name transfer application if there are any outstanding arrears on the current meter. The bill must be paid in full.' },
      { q: 'What if the previous owner has died?', a: 'In the case of a deceased owner, you need their Death Certificate and a legal heirship certificate or NOC from all other legal heirs to transfer the meter to your name.' },
      { q: 'Will the physical meter be changed?', a: 'No, this is only a billing name transfer. The physical electric meter at your house remains the same.' }
    ]
  },
  {
    id: 87, slug: 'ration-card-new-name-add', category: 'identity',
    name: 'Ration Card (Name Add/Remove)', icon: 'ClipboardEdit',
    description: 'Keep your family records updated. We assist with adding new members (newborn child, wife after marriage) or removing members (due to death or marriage) from your Maharashtra Ration Card.',
    documentsRequired: [
      'Original Ration Card',
      'Aadhaar Card of all family members',
      'Birth Certificate (for new born) / Marriage Certificate (for wife)',
      'Deletion Certificate (if wife\'s name is removed from father\'s card)'
    ],
    eligibility: 'Indian residents holding a valid Ration Card.',
    processSteps: [
      'Step 1: Provide the original Ration card and supporting proofs.',
      'Step 2: We correctly fill out the official addition/deletion application form.',
      'Step 3: Attach the required affidavits and document copies.',
      'Step 4: You submit the file to the local Tahsildar / Rationing Office.',
      'Step 5: The Supply Inspector verifies the details and updates your card.'
    ],
    processingTime: '15 to 45 Days',
    charges: 'Form typing and file preparation charges',
    notes: 'To add a wife\'s name after marriage, you MUST first obtain a "Name Deletion Certificate" (Naw Kami Dakhla) from her father\'s local ration office.',
    keywords: [
      'Add name in ration card',
      'Remove name from ration card',
      'Ration card correction',
      'Naw kami dakhla apply',
      'Child name in ration card',
      'Tahsildar ration office'
    ],
    faqs: [
      { q: 'How do I add my newly married wife to my ration card?', a: 'First, she must remove her name from her father\'s ration card (gets a Deletion Certificate). Then, you submit that certificate along with your marriage proof and your ration card to add her name.' },
      { q: 'Can I apply for a completely new Ration Card here?', a: 'We can help prepare the file for a New Ration Card, but getting a new card involves strict income verification (Talathi report) and police verification by the local Tahsil office.' },
      { q: 'What is required to remove a deceased person\'s name?', a: 'You need to submit the original Death Certificate of the person along with an application to remove their name from the family\'s ration card.' }
    ]
  },
  {
    id: 88, slug: 'loan-application', category: 'banking',
    name: 'Loan Application Assistance', icon: 'Landmark',
    description: 'We connect you with the right financial institutions! Get professional file-preparation assistance for Personal Loans, Home Loans, Business Loans, and Mudra Loans.',
    documentsRequired: [
      'PAN Card & Aadhaar Card',
      'Last 6 Months Bank Statement',
      'Income Proof (Salary Slips or Last 3 Years ITR)',
      'Business Proof (Udyam/GST) for Business Loans'
    ],
    eligibility: 'Salaried employees or self-employed individuals with a good CIBIL score and stable income.',
    processSteps: [
      'Step 1: We check your CIBIL score and basic eligibility.',
      'Step 2: You provide your income and KYC documents.',
      'Step 3: We prepare a strong loan application file.',
      'Step 4: The file is submitted to our partner banks and NBFCs.',
      'Step 5: Bank executives process the loan and disburse the amount to your account.'
    ],
    processingTime: '7 to 15 Days (Subject to Bank Approval)',
    charges: 'Consultancy / Processing fees apply upon approval',
    notes: 'We are document facilitators. The final decision to approve or reject a loan strictly rests with the Bank\'s credit policy.',
    keywords: [
      'Personal loan apply Virar',
      'Home loan documents',
      'Business loan agent',
      'Mudra loan form fill',
      'Check CIBIL score',
      'Instant loan approval'
    ],
    faqs: [
      { q: 'Can I get a loan without an ITR or Salary Slip?', a: 'It is very difficult. Banks require documented proof of income. If you do not have an ITR, you might only be eligible for small, high-interest loans based purely on banking transactions.' },
      { q: 'Do you help with PM Mudra Loans?', a: 'Yes, we help small business owners prepare project reports and file the application for Shishu, Kishore, or Tarun Mudra loans at their respective banks.' },
      { q: 'Does my CIBIL score matter?', a: 'Absolutely. A CIBIL score above 750 is generally required for quick approvals and low-interest rates. Defaulting on past loans will result in rejection.' }
    ]
  },
  {
    id: 89, slug: 'pf-account', category: 'banking',
    name: 'PF Account Services (EPF/UAN)', icon: 'ShieldCheck',
    description: 'Complete assistance with Employee Provident Fund (EPF) services — UAN activation, Aadhaar-PAN KYC seeding, PF withdrawal (Form 19/10C/31), pension claims, and PF transfers between old and new employers.',
    documentsRequired: [
      'UAN Number (from your salary slip or company HR)',
      'Aadhaar Card & PAN Card',
      'Bank Passbook (linked to UAN)',
      'Previous company details (for transfer)'
    ],
    eligibility: 'Any current or former employee who has an EPF account.',
    processSteps: [
      'Step 1: Share your UAN number and Aadhaar details.',
      'Step 2: We activate your UAN and seed your Aadhaar & PAN (KYC).',
      'Step 3: For withdrawals, we file the online claim (Form 19/10C/31) on the EPFO portal.',
      'Step 4: For transfers, we initiate the online transfer request from old UAN to new UAN.',
      'Step 5: Track the claim status until the amount is credited to your bank.'
    ],
    processingTime: '7 to 20 Days (EPFO Processing)',
    charges: 'Service charges for online filing and KYC assistance',
    notes: 'Full PF withdrawal is only allowed after 60 days of unemployment. Partial withdrawals for housing, marriage, or medical emergencies are available after 5 years of service.',
    keywords: [
      'PF withdrawal online',
      'UAN activation Virar',
      'EPF KYC update',
      'Transfer PF to new company',
      'PF balance check',
      'Pension claim filing'
    ],
    faqs: [
      { q: 'I forgot my UAN number. Can you help?', a: 'Yes, if your Aadhaar is linked to your old employer\'s records, we can retrieve your UAN from the EPFO portal using your Aadhaar or PAN.' },
      { q: 'How long does PF withdrawal take?', a: 'If your Aadhaar, PAN, and Bank KYC are correctly seeded and approved, online claims are usually settled within 10 to 15 working days.' },
      { q: 'Can I withdraw PF while still employed?', a: 'You cannot do a full withdrawal while employed. However, partial (advance) withdrawals under specific reasons like home purchase, marriage, or medical emergency are allowed under EPF rules.' }
    ]
  },
  {
    id: 90, slug: 'senior-citizen-certificate', category: 'certificates',
    name: 'Senior Citizen Certificate', icon: 'UserPlus',
    description: 'We help senior citizens (aged 60+) obtain an official Senior Citizen Certificate from the local Tehsildar. This certificate unlocks benefits like railway concessions, higher FD interest rates, and priority healthcare.',
    documentsRequired: [
      'Aadhaar Card',
      'Date of Birth Proof (School LC / Birth Certificate / Passport)',
      'Recent Passport-size Photograph',
      'Address Proof (Ration Card / Utility Bill)'
    ],
    eligibility: 'Indian residents aged 60 years and above.',
    processSteps: [
      'Step 1: Bring your age proof and Aadhaar card.',
      'Step 2: We type the official application addressed to the Tehsildar.',
      'Step 3: Attach self-attested copies of all documents.',
      'Step 4: You submit the file at the local Tehsil Office.',
      'Step 5: After verification, the Senior Citizen Certificate is issued.'
    ],
    processingTime: '7 to 15 Days',
    charges: 'Application typing and file preparation charges',
    notes: 'Some banks and government offices now accept the Aadhaar card itself as age proof. However, a dedicated Senior Citizen Certificate is still required for specific railway and airline concessions.',
    keywords: [
      'Senior citizen certificate apply',
      'Age 60 proof certificate',
      'Jyeshtha nagarik dakhla',
      'Railway concession certificate',
      'Senior citizen ID Virar',
      'Old age proof document'
    ],
    faqs: [
      { q: 'What benefits can I get with this certificate?', a: 'Key benefits include: higher interest rates on bank FDs (0.25-0.50% extra), priority queues at hospitals, income tax exemptions up to ₹3 Lakhs, and concessions on train tickets.' },
      { q: 'Is an Aadhaar card enough as age proof?', a: 'For most purposes, yes. But certain railway and airline ticket counters specifically ask for a \"Senior Citizen Certificate\" issued by the Tehsildar as additional verification.' },
      { q: 'Can I apply on behalf of my elderly parent?', a: 'Yes, a family member can bring the required documents and submit the application. However, the certificate will be issued in the name of the senior citizen only.' }
    ]
  },
  {
    id: 91, slug: 'non-creamy-layer-certificate', category: 'certificates',
    name: 'Non-Creamy Layer Certificate (NCL)', icon: 'FileBadge',
    description: 'Essential for OBC reservation! We prepare the complete documentation for the Non-Creamy Layer Certificate required for government job applications, college admissions, and competitive exams like MPSC/UPSC.',
    documentsRequired: [
      'Caste Certificate (Original)',
      'Father\'s Income Proof (Last 3 Years ITR or Form 16)',
      'Aadhaar Card & PAN Card',
      'Notarized Affidavit on ₹100 Stamp Paper',
      'Ration Card'
    ],
    eligibility: 'OBC category individuals whose family\'s annual income is below the government-prescribed limit (currently ₹8 Lakhs).',
    processSteps: [
      'Step 1: Bring your Caste Certificate and father\'s income documents.',
      'Step 2: We draft the Affidavit on stamp paper and get it notarized.',
      'Step 3: Fill out the official NCL application form.',
      'Step 4: Prepare the complete file with all attachments.',
      'Step 5: You submit the file to the Sub-Divisional Magistrate (SDM) / Tehsil office.'
    ],
    processingTime: '15 to 30 Days',
    charges: 'Affidavit + form typing + file preparation charges',
    notes: 'The NCL certificate is valid for 3 years from the date of issue or until the next government notification on income limits, whichever is earlier.',
    keywords: [
      'Non creamy layer certificate apply',
      'NCL certificate Virar',
      'OBC reservation certificate',
      'MPSC NCL document',
      'Creamy layer income limit',
      'NCL affidavit draft'
    ],
    faqs: [
      { q: 'What is the current income limit for Non-Creamy Layer?', a: 'As per the latest government notification, the annual income limit for Non-Creamy Layer is ₹8 Lakhs per annum. This includes the income of the applicant\'s parents (father\'s salary/business income).' },
      { q: 'My father is a government employee. Am I eligible?', a: 'If your father holds a Group A or Group B gazetted post, you will NOT be eligible for Non-Creamy Layer status, irrespective of income.' },
      { q: 'Is it needed for private job applications?', a: 'No, the NCL certificate is only mandatory for government job applications, public sector undertakings, and government-aided educational admissions where OBC reservation is applicable.' }
    ]
  },
  {
    id: 92, slug: 'food-licence', category: 'other',
    name: 'Food Licence (FSSAI Registration)', icon: 'UtensilsCrossed',
    description: 'Starting a food business? We handle your complete FSSAI Food Safety Registration and Licensing — from small home-based tiffin services to large restaurants and food manufacturing units.',
    documentsRequired: [
      'Aadhaar Card & PAN Card of Owner',
      'Business Address Proof (Rent Agreement / Electricity Bill)',
      'Passport-size Photograph',
      'Food Safety Management Plan (for State/Central Licence)',
      'Water Testing Report (for State/Central Licence)'
    ],
    eligibility: 'Any person or business involved in food manufacturing, processing, packaging, distribution, or sale.',
    processSteps: [
      'Step 1: We assess your business type and recommend the correct licence (Basic / State / Central).',
      'Step 2: Gather your KYC and business documents.',
      'Step 3: We fill and submit the application on the official FSSAI FoSCoS portal.',
      'Step 4: Pay the government fee online.',
      'Step 5: Track the application and download your FSSAI Licence upon approval.'
    ],
    processingTime: '7 to 60 Days (Basic is instant, State/Central takes longer)',
    charges: 'Govt Fee (₹100 to ₹7500 based on type) + Service Charges',
    notes: 'Operating a food business without an FSSAI licence is illegal and can result in fines up to ₹5 Lakhs under the Food Safety and Standards Act.',
    keywords: [
      'FSSAI registration online',
      'Food licence apply Virar',
      'Restaurant licence',
      'Tiffin service licence',
      'Food safety certificate',
      'FoSCoS portal registration'
    ],
    faqs: [
      { q: 'I run a small home tiffin service. Do I need an FSSAI licence?', a: 'Yes, even small home-based food businesses need at least a Basic FSSAI Registration (annual turnover up to ₹12 Lakhs). It\'s simple and costs only ₹100/year in government fees.' },
      { q: 'What is the difference between Basic, State, and Central Licence?', a: 'Basic Registration is for small vendors (turnover < ₹12L). State Licence is for medium businesses (₹12L to ₹20 Crore). Central Licence is for large manufacturers, importers, and businesses operating in multiple states.' },
      { q: 'Do I need to display the FSSAI number?', a: 'Yes, it is mandatory to display your 14-digit FSSAI licence number on all food packaging, restaurant menus, and delivery apps like Swiggy/Zomato.' }
    ]
  },
  {
    id: 93, slug: 'society-name-registration', category: 'other',
    name: 'Society / Trust Registration', icon: 'Building2',
    description: 'We assist in the legal registration of Cooperative Housing Societies, Charitable Trusts, and NGOs under the Maharashtra Co-operative Societies Act and the Bombay Public Trust Act.',
    documentsRequired: [
      'List of Minimum 10 Members with Aadhaar Copies',
      'Proposed Society/Trust Name (3 choices)',
      'Registered Address Proof of the Office',
      'Draft Bylaws / Memorandum of Association',
      'Govt Fee Challan'
    ],
    eligibility: 'A minimum of 10 individuals for a cooperative society. A minimum of 2 trustees for a public trust.',
    processSteps: [
      'Step 1: Finalize the name and objectives of the society/trust.',
      'Step 2: We draft the complete Bylaws / MOA as per the relevant Act.',
      'Step 3: Prepare the member resolution and consent forms.',
      'Step 4: File the registration application with the Registrar of Cooperative Societies or the Charity Commissioner.',
      'Step 5: After verification, the Registration Certificate is issued.'
    ],
    processingTime: '30 to 90 Days',
    charges: 'Legal drafting, typing, and filing charges apply',
    notes: 'The society name must be unique and not similar to any existing registered society. The Registrar has the right to reject duplicate or misleading names.',
    keywords: [
      'Society registration Maharashtra',
      'Housing society formation',
      'Trust registration online',
      'NGO registration Virar',
      'Cooperative society act',
      'Charity commissioner filing'
    ],
    faqs: [
      { q: 'What is the minimum number of members needed?', a: 'For a Cooperative Housing Society, you need a minimum of 10 members (flat owners). For a Public Charitable Trust, you need a minimum of 2 trustees.' },
      { q: 'How do I choose a society name?', a: 'The name should ideally reflect the locality (e.g., "Shree Ganesh Cooperative Housing Society, Virar"). We recommend submitting 3 name choices as the Registrar may reject the first choice if it\'s already taken.' },
      { q: 'Do you also help with society annual compliance?', a: 'We can assist with preparing Annual General Meeting (AGM) notices, balance sheet typing, and filing the annual return with the Registrar.' }
    ]
  },
  {
    id: 94, slug: 'udyam-certificate', category: 'other',
    name: 'Udyam Registration (MSME Certificate)', icon: 'Factory',
    description: 'Get your free Udyam Registration Certificate from the Ministry of MSME. This certificate is essential for availing government subsidies, tender preferences, and collateral-free bank loans under MSME schemes.',
    documentsRequired: [
      'Aadhaar Card of the Business Owner',
      'PAN Card & GST Number (if applicable)',
      'Business Address & Bank Account Details',
      'NIC Code (Industry Classification Code)'
    ],
    eligibility: 'Any Micro, Small, or Medium Enterprise — manufacturing or service sector.',
    processSteps: [
      'Step 1: Provide your Aadhaar number and business details.',
      'Step 2: We access the official Udyam Registration portal.',
      'Step 3: Fill in the business activity, investment, and turnover details.',
      'Step 4: Verify using Aadhaar OTP.',
      'Step 5: Your Udyam Registration Certificate with a permanent URN is generated instantly.'
    ],
    processingTime: 'Instant (10 Minutes)',
    charges: 'Registration is FREE on Govt Portal (Assistance charges only)',
    notes: 'Udyam Registration has replaced the old Udyog Aadhaar. If you still have an Udyog Aadhaar, you MUST migrate it to the new Udyam portal.',
    keywords: [
      'Udyam registration online',
      'MSME certificate apply',
      'Udyog Aadhaar to Udyam',
      'Free MSME registration',
      'Small business certificate',
      'Government tender MSME'
    ],
    faqs: [
      { q: 'Is Udyam Registration really free?', a: 'Yes, the government portal (udyamregistration.gov.in) does not charge any fee. We charge a nominal assistance fee for filling the form accurately and helping you choose the correct NIC code.' },
      { q: 'What benefits does an MSME certificate provide?', a: 'Key benefits include: preference in government tenders, collateral-free loans (CGTMSE scheme), electricity bill concession, patent/trademark fee subsidy, and protection under the MSMED Act for delayed payments.' },
      { q: 'I already have an Udyog Aadhaar. Do I need Udyam?', a: 'Yes, migration from Udyog Aadhaar to Udyam is now mandatory. Your old UAM will not be accepted by banks or government portals. We can help you migrate it in 5 minutes.' }
    ]
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


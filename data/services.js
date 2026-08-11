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
    description: 'Order a PVC (Polyvinyl Chloride) Aadhaar card — a durable, credit-card-sized physical Aadhaar card from UIDAI.',
    documentsRequired: ['Aadhaar Number', 'Registered Mobile Number (for OTP)'],
    eligibility: 'Any Aadhaar holder with a registered mobile number.',
    processSteps: ['Provide Aadhaar number at our center', 'OTP verification on registered mobile', 'Online order placed on UIDAI portal', 'PVC card delivered by India Post within 5–10 days'],
    processingTime: '5–10 working days',
    charges: 'Contact for latest charges',
    notes: 'UIDAI charges ₹50 (including GST) for PVC card. Documents and process may vary.'
  },
  {
    id: 5, slug: 'pan-card-new', category: 'identity',
    name: 'PAN Card New Apply', icon: 'IdCard',
    description: 'Apply for a new Permanent Account Number (PAN) card. Essential for banking, income tax filing, and all major financial transactions in India.',
    documentsRequired: [
      'Identity Proof: Aadhaar Card / Voter ID / Passport',
      'Address Proof: Aadhaar Card / Utility Bill / Domicile Certificate',
      'Date of Birth Proof: Aadhaar / Birth Certificate / Marksheet',
      'Two Recent Passport-size Photographs with white background'
    ],
    eligibility: 'All Indian citizens (including minors through parents), companies, and NRIs can apply.',
    processSteps: [
      'Fill Application Form 49A (for Indian Citizens)',
      'Submit required KYC documents and photographs',
      'Digital or physical submission via NSDL/UTI portal',
      'Payment of processing fees and receiving acknowledgment number',
      'Physical PAN card dispatched to your registered address by Income Tax Dept'
    ],
    processingTime: '10–15 working days',
    charges: 'Standard government fees + Service charges',
    notes: 'Minors can apply for a PAN card; the form must be signed by one of the parents as a representative.'
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
    description: 'Get an instant e-PAN (electronic PAN) using your Aadhaar number. This is a free, paperless process for individuals who do not have a PAN.',
    documentsRequired: ['Aadhaar Card', 'Registered Mobile Number (for OTP)'],
    eligibility: 'Indian residents who have an Aadhaar card and registered mobile number and do not already have a PAN.',
    processSteps: ['Provide Aadhaar number at our center', 'OTP verification', 'Details auto-fetched from Aadhaar', 'e-PAN issued instantly via Income Tax portal', 'Print or download e-PAN PDF'],
    processingTime: 'Instant (same day)',
    charges: 'Contact for latest charges',
    notes: 'Instant e-PAN is free but physical PAN card may have charges. Documents and process may vary.'
  },
  {
    id: 8, slug: 'voter-id-new', category: 'identity',
    name: 'Voter ID New Registration', icon: 'Vote',
    description: 'Register for a new Voter ID (Electoral Photo Identity Card - EPIC) to exercise your right to vote in elections.',
    documentsRequired: ['Age Proof (Birth Certificate / Marksheet / Aadhaar)', 'Address Proof (Aadhaar / Utility Bill / Ration Card)', 'Passport-size Photograph'],
    eligibility: 'Indian citizens who are 18 years of age or older as of the qualifying date.',
    processSteps: ['Fill Form 6 at our center', 'Attach required documents', 'Submit to Electoral Registration Officer', 'Field verification done by BLO', 'Voter ID issued within 30–45 days'],
    processingTime: '30–45 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 9, slug: 'voter-id-correction', category: 'identity',
    name: 'Voter ID Correction / Address Change', icon: 'ClipboardEdit',
    description: 'Correct errors in your Voter ID such as name, date of birth, or update your address due to relocation.',
    documentsRequired: ['Existing Voter ID', 'Supporting document for correction', 'New Address Proof (if address change)'],
    eligibility: 'Existing Voter ID holders needing corrections or address update.',
    processSteps: ['Fill Form 8 (correction) or Form 6 (new address)', 'Attach supporting documents', 'Submit at our center or online', 'Verification done', 'Updated Voter ID issued'],
    processingTime: '30–45 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 10, slug: 'voter-id-download', category: 'identity',
    name: 'Voter ID Download', icon: 'Smartphone',
    description: 'Download your digital Voter ID (e-EPIC) from the official Election Commission of India website.',
    documentsRequired: ['EPIC Number or Form Reference Number', 'Registered Mobile Number'],
    eligibility: 'Registered voters with a valid EPIC number.',
    processSteps: ['Provide EPIC number at our center', 'OTP verification', 'e-EPIC downloaded from Voters Service Portal', 'Print taken if required'],
    processingTime: 'Same day / Instant',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },

  // ─── B. Passport Services ───
  {
    id: 11, slug: 'passport-new', category: 'passport',
    name: 'Passport New Apply', icon: 'Book',
    description: 'Professional assistance for Fresh/New Passport applications. We handle the entire online process including appointment scheduling and document guidance.',
    documentsRequired: [
      'Identity & Address Proof: Aadhaar Card (Preferably linked to mobile)',
      'Date of Birth Proof: Birth Certificate or Class 10th Marksheet',
      'Non-ECR Proof: Class 10th or higher education certificate',
      'Current Address Proof: Utility Bill / Rent Agreement / Bank Passbook'
    ],
    eligibility: 'Any Indian citizen who holds a valid identity and address proof.',
    processSteps: [
      'Online Registration on the Passport Seva official portal',
      'Filling the application form and paying the government fee',
      'Booking the earliest available appointment slot at PSK/POPSK',
      'Physical visit to PSK for document verification and biometric capture',
      'Police verification at your local police station',
      'Passport delivery at home via Speed Post'
    ],
    processingTime: '15–20 working days (Normal) / 3–5 days (Tatkaal)',
    charges: 'Government Fee (₹1500) + Service Charges',
    notes: 'Applicants must carry original documents on the day of appointment at the Passport Seva Kendra.'
  },
  {
    id: 12, slug: 'passport-renewal', category: 'passport',
    name: 'Passport Renewal', icon: 'RefreshCw',
    description: 'Renew your expired or soon-to-expire Indian passport.',
    documentsRequired: ['Existing Passport (original)', 'Aadhaar Card', 'Address Proof', 'Passport-size Photographs'],
    eligibility: 'Holders of expired or expiring Indian passports.',
    processSteps: ['Register on Passport Seva Portal', 'Fill Re-issue application form', 'Schedule appointment', 'Visit PSK with documents', 'Submit old passport', 'New passport delivered'],
    processingTime: '15–30 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 13, slug: 'passport-correction', category: 'passport',
    name: 'Passport Correction', icon: 'FileEdit',
    description: 'Correct errors in your passport such as name spelling, date of birth, or other personal details.',
    documentsRequired: ['Existing Passport', 'Proof for correction (Aadhaar / Birth Certificate)', 'Passport-size Photographs'],
    eligibility: 'Passport holders who have errors in their passport details.',
    processSteps: ['Register on Passport Seva Portal', 'Fill Re-issue application with correction', 'Attach supporting documents', 'Visit PSK for appointment', 'Updated passport delivered'],
    processingTime: '15–30 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 14, slug: 'police-verification', category: 'passport',
    name: 'Police Verification Support', icon: 'ShieldCheck',
    description: 'Assistance and guidance for police verification process required for passport issuance.',
    documentsRequired: ['Passport Application Acknowledgment', 'Aadhaar Card', 'Address Proof', 'Additional documents as requested by police'],
    eligibility: 'Passport applicants who have been flagged for police verification.',
    processSteps: ['Receive police verification notice', 'Prepare required documents', 'We assist you in submitting correct documents', 'Follow up with police station', 'Verification completion'],
    processingTime: '7–15 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. We guide and support through the entire process.'
  },

  // ─── C. Banking & Financial ───
  {
    id: 15, slug: 'bank-account-opening', category: 'banking',
    name: 'Bank Account Opening', icon: 'Landmark',
    description: 'Assistance with opening a new savings or current bank account at various nationalized and private banks.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Passport-size Photograph', 'Mobile Number'],
    eligibility: 'Any Indian resident aged 18 or above (minor accounts also available).',
    processSteps: ['Choose bank and account type', 'Fill account opening form', 'Attach KYC documents', 'Submit to bank', 'Account activated within 1–3 days'],
    processingTime: '1–3 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary depending on bank. Please contact or visit our office for confirmation.'
  },
  {
    id: 16, slug: 'mini-statement', category: 'banking',
    name: 'Mini Statement / Balance Check', icon: 'FileText',
    description: 'Check your bank account balance and get a mini statement of recent transactions using AEPS or other banking services.',
    documentsRequired: ['Aadhaar Card', 'Bank account linked with Aadhaar'],
    eligibility: 'Any bank account holder with Aadhaar-linked account.',
    processSteps: ['Provide Aadhaar number and bank name', 'Biometric (fingerprint) authentication', 'Balance or mini statement displayed instantly'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 17, slug: 'money-transfer', category: 'banking',
    name: 'Money Transfer (Domestic)', icon: 'ArrowLeftRight',
    description: 'Send money domestically to any bank account across India quickly and securely.',
    documentsRequired: ['Sender\'s valid ID proof', 'Recipient bank account details (Account No. + IFSC)'],
    eligibility: 'Any individual needing to transfer money domestically.',
    processSteps: ['Provide sender and recipient details', 'Verify amount', 'Complete KYC verification', 'Transfer processed', 'Confirmation receipt provided'],
    processingTime: 'Instant to 24 hours',
    charges: 'Contact for latest charges',
    notes: 'Transfer limits apply. Documents and process may vary.'
  },
  {
    id: 18, slug: 'aeps', category: 'banking',
    name: 'AEPS (Aadhaar Enabled Payment System)', icon: 'Fingerprint',
    description: 'AEPS enables banking transactions using your Aadhaar number and biometric (fingerprint) authentication — no ATM card or PIN needed.',
    documentsRequired: ['Aadhaar Card', 'Aadhaar-linked bank account'],
    eligibility: 'Any individual with Aadhaar-linked bank account.',
    processSteps: ['Provide Aadhaar number and select bank', 'Fingerprint authentication', 'Select service (Cash Withdrawal / Balance / Mini Statement / Fund Transfer)', 'Transaction completed instantly'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Daily transaction limits apply. Documents and process may vary.'
  },
  {
    id: 19, slug: 'pan-aadhaar-linking', category: 'banking',
    name: 'PAN–Aadhaar Linking', icon: 'Link',
    description: 'Link your PAN card with Aadhaar card as mandated by the Income Tax Department of India. Unlinked PANs become inoperative.',
    documentsRequired: ['PAN Card', 'Aadhaar Card', 'Registered Mobile Number'],
    eligibility: 'All PAN card holders (mandatory for most taxpayers).',
    processSteps: ['Provide PAN and Aadhaar details', 'Online linking via IT Portal or NSDL', 'Pay applicable fee if applicable', 'OTP verification', 'Linking confirmed within 5–7 days'],
    processingTime: '5–7 working days',
    charges: 'Contact for latest charges',
    notes: 'Late linking fee applicable. Documents and process may vary.'
  },
  {
    id: 20, slug: 'insurance-services', category: 'banking',
    name: 'Insurance Services', icon: 'Shield',
    description: 'Assistance with various insurance products including life insurance, health insurance, and government insurance schemes like PMJJBY and PMSBY.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Bank Passbook', 'Passport-size Photograph'],
    eligibility: 'Varies by insurance product and scheme.',
    processSteps: ['Discuss insurance needs', 'Choose appropriate scheme/plan', 'Fill application form', 'Submit documents', 'Policy issued'],
    processingTime: '1–7 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary depending on insurance type. Please contact or visit our office.'
  },
  {
    id: 21, slug: 'pension-services', category: 'banking',
    name: 'Pension Services', icon: 'UserPlus',
    description: 'Assistance with pension enrollment and management for government schemes like Atal Pension Yojana (APY), PM Vaya Vandana Yojana, etc.',
    documentsRequired: ['Aadhaar Card', 'Bank Account Details', 'PAN Card', 'Mobile Number'],
    eligibility: 'Varies by pension scheme (typically 18–40 years for APY).',
    processSteps: ['Select appropriate pension scheme', 'Fill application form', 'Attach KYC documents', 'Submit at bank or our center', 'PRAN (Permanent Retirement Account Number) issued'],
    processingTime: '3–7 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary depending on scheme. Please contact or visit our office.'
  },

  // ─── D. Certificates & Documents ───
  {
    id: 22, slug: 'birth-certificate', category: 'certificates',
    name: 'Birth Certificate Apply', icon: 'Baby',
    description: 'Apply for an official birth certificate from the Municipal Corporation or Gram Panchayat.',
    documentsRequired: ['Hospital Birth Proof / Discharge Summary', 'Parents\' Aadhaar Cards', 'Parents\' Marriage Certificate', 'Proof of Address'],
    eligibility: 'Parents of newborns or individuals who do not have a birth certificate.',
    processSteps: ['Gather documents', 'Fill application form', 'Submit at Municipal Office / our center', 'Verification by registrar', 'Certificate issued'],
    processingTime: '7–15 working days',
    charges: 'Contact for latest charges',
    notes: 'Late registration (after 1 year) requires court order. Documents and process may vary.'
  },
  {
    id: 23, slug: 'death-certificate', category: 'certificates',
    name: 'Death Certificate Apply', icon: 'FileX',
    description: 'Apply for an official death certificate from the Municipal Corporation or Gram Panchayat.',
    documentsRequired: ['Hospital Death Certificate / Doctor\'s Certificate', 'Deceased\'s Aadhaar Card', 'Applicant\'s ID Proof and Aadhaar', 'Proof of Address'],
    eligibility: 'Family members or legal representatives of the deceased.',
    processSteps: ['Gather documents', 'Fill application form', 'Submit at Municipal Office / our center', 'Verification', 'Certificate issued'],
    processingTime: '7–15 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 24, slug: 'marriage-certificate', category: 'certificates',
    name: 'Marriage Certificate Apply', icon: 'Ring',
    description: 'Legal registration of marriage under the Hindu Marriage Act or Special Marriage Act for couples.',
    documentsRequired: [
      'Wedding Invitation Card & Marriage Hall Receipt',
      'Marriage Photographs (Ceremony + Couple)',
      'Identity & Address Proof of both Bride and Groom (Aadhaar & PAN)',
      'Date of Birth Proof (Birth Certificate / School LC)',
      'Witnesses: Two witnesses with their ID Proof'
    ],
    eligibility: 'Groom must be 21+ and Bride 18+ years of age at the time of marriage.',
    processSteps: [
      'Fill up the Marriage Registration Application form',
      'Submission of joint affidavit and wedding proofs',
      'Scheduling an appointment with the Sub-Registrar',
      'Physical presence of both spouses and witnesses at the office',
      'Issuance of official Marriage Certificate'
    ],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'The presence of both husband and wife along with witnesses is mandatory for registration.'
  },
  {
    id: 25, slug: 'income-certificate', category: 'certificates',
    name: 'Income Certificate', icon: 'Wallet',
    description: 'Obtain an income certificate issued by the Tehsildar/Revenue Department to prove annual family income for government schemes, admissions, etc.',
    documentsRequired: ['Aadhaar Card', 'Ration Card / Residence Proof', 'Proof of Income (salary slip / affidavit)', 'Passport-size Photograph'],
    eligibility: 'Any Indian resident needing to certify their income.',
    processSteps: ['Fill application form', 'Attach documents', 'Submit at Tehsil office / our center', 'Verification by revenue officer', 'Certificate issued'],
    processingTime: '7–21 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 26, slug: 'caste-certificate', category: 'certificates',
    name: 'Caste Certificate', icon: 'BadgeCheck',
    description: 'Obtain a caste certificate (SC/ST/OBC) issued by competent authority for reservations and government benefits.',
    documentsRequired: ['Aadhaar Card', 'Ration Card', 'Father\'s Caste Certificate (if available)', 'School Leaving Certificate', 'Proof of Address'],
    eligibility: 'Individuals belonging to SC, ST, or OBC categories.',
    processSteps: ['Fill caste certificate application', 'Attach documents', 'Submit at SDM / Tehsil office', 'Verification and inquiry by officer', 'Certificate issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 27, slug: 'domicile-certificate', category: 'certificates',
    name: 'Domicile Certificate', icon: 'Home',
    description: 'Obtain a domicile certificate as proof of residence/domicile in Maharashtra for education, jobs, and government benefits.',
    documentsRequired: ['Aadhaar Card', 'Birth Certificate or School Leaving Certificate', 'Address Proof (15+ years residency proof)', 'Ration Card', 'Passport-size Photograph'],
    eligibility: 'Individuals residing in Maharashtra for 15 or more years.',
    processSteps: ['Fill domicile application form', 'Attach documents', 'Submit at Tehsil/SDM office', 'Verification', 'Certificate issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 28, slug: 'gazette-name-change', category: 'certificates',
    name: 'Gazette Name Change Assistance', icon: 'Newspaper',
    description: 'Assistance in getting your name change published in the Official Gazette of India — required for legal name changes in all documents.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Affidavit of name change on stamp paper', 'Supporting documents (if applicable)', 'Passport-size Photograph'],
    eligibility: 'Any Indian citizen requiring a legal name change.',
    processSteps: ['Prepare affidavit on stamp paper', 'Submit application to Department of Publication', 'Publication in Official Gazette', 'Receive Gazette notification copy', 'Update other documents with Gazette proof'],
    processingTime: '30–60 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 29, slug: 'affidavit', category: 'certificates',
    name: 'Affidavit (₹100 Stamp Paper etc.)', icon: 'FileSignature',
    description: 'Assistance in preparing and notarizing affidavits on stamp paper for various legal and government purposes.',
    documentsRequired: ['Aadhaar Card', 'Relevant supporting documents as per affidavit type'],
    eligibility: 'Any individual requiring a legal affidavit.',
    processSteps: ['Discuss affidavit purpose', 'Draft affidavit content', 'Print on appropriate stamp paper', 'Get notarized by Notary Public', 'Receive signed and stamped affidavit'],
    processingTime: 'Same day to 2 days',
    charges: 'Contact for latest charges',
    notes: 'Stamp paper value varies by purpose. Documents and process may vary.'
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


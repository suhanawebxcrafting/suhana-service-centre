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
    name: 'Aadhaar Card New Registration', icon: 'Contact',
    description: 'Apply for a new Aadhaar card for Indian residents. Aadhaar is a 12-digit unique identity number issued by UIDAI and is mandatory for most government services.',
    documentsRequired: ['Proof of Identity (Birth Certificate / Passport / PAN Card)', 'Proof of Address (Utility Bill / Bank Passbook)', 'Proof of Date of Birth', 'Recent Passport-size Photograph'],
    eligibility: 'Any resident of India regardless of age or gender can enroll for Aadhaar.',
    processSteps: ['Visit our centre with original documents', 'Fill the Aadhaar Enrolment Form', 'Biometric data (fingerprints + iris) and photograph captured', 'Receive Enrolment ID slip', 'Aadhaar delivered by post within 90 days or download e-Aadhaar'],
    processingTime: '90 days (by post) / Immediate e-Aadhaar',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary depending on case. Please contact or visit our office for confirmation.'
  },
  {
    id: 2, slug: 'aadhaar-update', category: 'identity',
    name: 'Aadhaar Card Update (Name / DOB / Address / Mobile)', icon: 'FileEdit',
    description: 'Update your Aadhaar details such as name, date of birth, address, or mobile number. Updates can be done online or offline at an enrolled centre.',
    documentsRequired: ['Original Aadhaar Card', 'Supporting document for the field being updated (e.g., Gazette for name change, utility bill for address)', 'Mobile number (for OTP verification)'],
    eligibility: 'Existing Aadhaar holders who need to update their details.',
    processSteps: ['Bring Aadhaar and supporting documents to our centre', 'Fill the Aadhaar Update/Correction Form', 'Submit form and documents', 'Receive update request number (URN)', 'Update reflected within 30-90 days'],
    processingTime: '30–90 days',
    charges: 'Contact for latest charges',
    notes: 'Name change allowed only twice. Address can be updated online via SSUP. Documents and process may vary. Please contact us for confirmation.'
  },
  {
    id: 3, slug: 'e-aadhaar-download', category: 'identity',
    name: 'e-Aadhaar Download', icon: 'Download',
    description: 'Download your e-Aadhaar (electronic Aadhaar) from the official UIDAI website. e-Aadhaar is a password-protected digital copy of your Aadhaar card.',
    documentsRequired: ['Aadhaar Number or Enrolment ID', 'Registered Mobile Number (for OTP)'],
    eligibility: 'Any Aadhaar holder with a registered mobile number.',
    processSteps: ['Visit our centre', 'Provide Aadhaar number or EID', 'OTP sent to registered mobile', 'e-Aadhaar PDF downloaded', 'Print taken (optional)'],
    processingTime: 'Same day / Instant',
    charges: 'Contact for latest charges',
    notes: 'e-Aadhaar password is first 4 letters of name (capital) + birth year. Documents and process may vary.'
  },
  {
    id: 4, slug: 'pvc-aadhaar-card', category: 'identity',
    name: 'PVC Aadhaar Card Order', icon: 'CreditCard',
    description: 'Order a PVC (Polyvinyl Chloride) Aadhaar card — a durable, credit-card-sized physical Aadhaar card from UIDAI.',
    documentsRequired: ['Aadhaar Number', 'Registered Mobile Number (for OTP)'],
    eligibility: 'Any Aadhaar holder with a registered mobile number.',
    processSteps: ['Provide Aadhaar number at our centre', 'OTP verification on registered mobile', 'Online order placed on UIDAI portal', 'PVC card delivered by India Post within 5–10 days'],
    processingTime: '5–10 working days',
    charges: 'Contact for latest charges',
    notes: 'UIDAI charges ₹50 (including GST) for PVC card. Documents and process may vary.'
  },
  {
    id: 5, slug: 'pan-card-new', category: 'identity',
    name: 'PAN Card New Apply', icon: 'Receipt',
    description: 'Apply for a new Permanent Account Number (PAN) card issued by the Income Tax Department of India. PAN is required for financial transactions and income tax filing.',
    documentsRequired: ['Proof of Identity (Aadhaar / Voter ID / Passport)', 'Proof of Address (Aadhaar / Utility Bill)', 'Proof of Date of Birth (Birth Certificate / Marksheet)', 'Passport-size Photograph'],
    eligibility: 'All Indian citizens and entities (individuals, companies, NRIs) can apply.',
    processSteps: ['Fill PAN application form (49A for Indians)', 'Attach required documents', 'Submit application online or offline', 'Receive acknowledgment number', 'PAN card delivered within 15–20 working days'],
    processingTime: '15–20 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 6, slug: 'pan-card-correction', category: 'identity',
    name: 'PAN Card Correction / Update', icon: 'RefreshCw',
    description: 'Correct or update details on your existing PAN card such as name, date of birth, father\'s name, address, or photo.',
    documentsRequired: ['Existing PAN Card', 'Supporting document for correction', 'Proof of Identity and Address', 'Passport-size Photograph'],
    eligibility: 'Existing PAN card holders requiring corrections.',
    processSteps: ['Fill PAN correction form', 'Attach supporting documents', 'Submit at our centre', 'Receive acknowledgment', 'Updated PAN card delivered'],
    processingTime: '15–20 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 7, slug: 'instant-epan', category: 'identity',
    name: 'Instant e-PAN Apply', icon: 'Zap',
    description: 'Get an instant e-PAN (electronic PAN) using your Aadhaar number. This is a free, paperless process for individuals who do not have a PAN.',
    documentsRequired: ['Aadhaar Card', 'Registered Mobile Number (for OTP)'],
    eligibility: 'Indian residents who have an Aadhaar card and registered mobile number and do not already have a PAN.',
    processSteps: ['Provide Aadhaar number at our centre', 'OTP verification', 'Details auto-fetched from Aadhaar', 'e-PAN issued instantly via Income Tax portal', 'Print or download e-PAN PDF'],
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
    processSteps: ['Fill Form 6 at our centre', 'Attach required documents', 'Submit to Electoral Registration Officer', 'Field verification done by BLO', 'Voter ID issued within 30–45 days'],
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
    processSteps: ['Fill Form 8 (correction) or Form 6 (new address)', 'Attach supporting documents', 'Submit at our centre or online', 'Verification done', 'Updated Voter ID issued'],
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
    processSteps: ['Provide EPIC number at our centre', 'OTP verification', 'e-EPIC downloaded from Voters Service Portal', 'Print taken if required'],
    processingTime: 'Same day / Instant',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },

  // ─── B. Passport Services ───
  {
    id: 11, slug: 'passport-new', category: 'passport',
    name: 'Passport New Apply', icon: 'BookText',
    description: 'Apply for a new Indian passport for first-time applicants. Passport is the primary travel document for international travel.',
    documentsRequired: ['Aadhaar Card', 'PAN Card', 'Voter ID / Birth Certificate (as DOB proof)', 'Address Proof', 'Passport-size Photographs (white background)', 'Class 10 Marksheet (for DOB)'],
    eligibility: 'All Indian citizens who do not already hold a valid passport.',
    processSteps: ['Register on Passport Seva Portal', 'Fill online application form', 'Schedule appointment at PSK/POPSK', 'Visit PSK with original documents', 'Police verification (if required)', 'Passport delivered within 15–30 days'],
    processingTime: '15–30 working days',
    charges: 'Contact for latest charges',
    notes: 'Tatkaal service available for urgent applications at extra cost. Documents and process may vary.'
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
    name: 'Police Verification Support', icon: '🚔',
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
    name: 'Mini Statement / Balance Check', icon: '💹',
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
    name: 'Money Transfer (Domestic)', icon: '💸',
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
    name: 'AEPS (Aadhaar Enabled Payment System)', icon: '👆',
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
    name: 'PAN–Aadhaar Linking', icon: '🔗',
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
    name: 'Insurance Services', icon: 'ShieldCheck',
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
    processSteps: ['Select appropriate pension scheme', 'Fill application form', 'Attach KYC documents', 'Submit at bank or our centre', 'PRAN (Permanent Retirement Account Number) issued'],
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
    processSteps: ['Gather documents', 'Fill application form', 'Submit at Municipal Office / our centre', 'Verification by registrar', 'Certificate issued'],
    processingTime: '7–15 working days',
    charges: 'Contact for latest charges',
    notes: 'Late registration (after 1 year) requires court order. Documents and process may vary.'
  },
  {
    id: 23, slug: 'death-certificate', category: 'certificates',
    name: 'Death Certificate Apply', icon: 'FileText',
    description: 'Apply for an official death certificate from the Municipal Corporation or Gram Panchayat.',
    documentsRequired: ['Hospital Death Certificate / Doctor\'s Certificate', 'Deceased\'s Aadhaar Card', 'Applicant\'s ID Proof and Aadhaar', 'Proof of Address'],
    eligibility: 'Family members or legal representatives of the deceased.',
    processSteps: ['Gather documents', 'Fill application form', 'Submit at Municipal Office / our centre', 'Verification', 'Certificate issued'],
    processingTime: '7–15 working days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 24, slug: 'marriage-certificate', category: 'certificates',
    name: 'Marriage Certificate Apply', icon: 'Ring',
    description: 'Apply for an official marriage certificate under the Hindu Marriage Act or Special Marriage Act.',
    documentsRequired: ['Marriage Invitation Card / Photograph', 'Both spouses\' Aadhaar Cards', 'Both spouses\' Age Proof', 'Both spouses\' Address Proof', 'Witnesses\' ID Proofs (2 witnesses)', 'Passport-size Photographs of couple'],
    eligibility: 'Legally married couples seeking official registration.',
    processSteps: ['Fill marriage registration form', 'Attach all required documents', 'Submit at Sub-District Magistrate / our centre', 'Both spouses appear on scheduled date', 'Certificate issued'],
    processingTime: '15–30 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 25, slug: 'income-certificate', category: 'certificates',
    name: 'Income Certificate', icon: 'DollarSign',
    description: 'Obtain an income certificate issued by the Tehsildar/Revenue Department to prove annual family income for government schemes, admissions, etc.',
    documentsRequired: ['Aadhaar Card', 'Ration Card / Residence Proof', 'Proof of Income (salary slip / affidavit)', 'Passport-size Photograph'],
    eligibility: 'Any Indian resident needing to certify their income.',
    processSteps: ['Fill application form', 'Attach documents', 'Submit at Tehsil office / our centre', 'Verification by revenue officer', 'Certificate issued'],
    processingTime: '7–21 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office for confirmation.'
  },
  {
    id: 26, slug: 'caste-certificate', category: 'certificates',
    name: 'Caste Certificate', icon: 'FileBadge',
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
    name: 'Affidavit (₹100 Stamp Paper etc.)', icon: 'Clipboard',
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
    name: 'Online Form Filling (All Govt Exams & Schemes)', icon: 'ClipboardEdit',
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
    name: 'Railway / Bus / Flight Ticket Booking', icon: 'Train',
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
    name: 'School / College Admission Form', icon: '🏫',
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
    name: 'Exam Form Filling', icon: '📓',
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
    name: 'Result Download', icon: '📊',
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
    name: 'Marksheet / Certificate Download', icon: '🏆',
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
    id: 41, slug: 'printout', category: 'printing',
    name: 'Printout (B/W & Color)', icon: 'Printer',
    description: 'Black & white and color printing services for documents, forms, applications, photographs, and more.',
    documentsRequired: ['File to print (USB / Email / WhatsApp)', 'No special documents required'],
    eligibility: 'Anyone.',
    processSteps: ['Provide file via USB / email / WhatsApp', 'Select print type (B/W or Color)', 'Print done instantly', 'Collect printout'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Per-page charges apply. Color printing costs more than B/W.'
  },
  {
    id: 42, slug: 'photocopy', category: 'printing',
    name: 'Photocopy (Xerox)', icon: 'FileText',
    description: 'Photocopy services for documents, certificates, books, and any paper documents.',
    documentsRequired: ['Original document to photocopy'],
    eligibility: 'Anyone.',
    processSteps: ['Provide original document', 'Specify number of copies', 'Photocopies done instantly'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Per-page charges apply.'
  },
  {
    id: 43, slug: 'scan-documents', category: 'printing',
    name: 'Scan Documents', icon: '📸',
    description: 'Scan your physical documents to create digital copies in PDF or image format.',
    documentsRequired: ['Original document to scan'],
    eligibility: 'Anyone.',
    processSteps: ['Provide document for scanning', 'We scan to PDF/JPG', 'Digital file shared via WhatsApp / email or on USB'],
    processingTime: 'Instant',
    charges: 'Contact for latest charges',
    notes: 'Per-page charges apply. Please contact or visit our office for confirmation.'
  },
  {
    id: 44, slug: 'photo-print', category: 'printing',
    name: 'Photo Print (Passport Size)', icon: '🖼️',
    description: 'Print passport-size, stamp-size, or custom-size photographs for various documents and applications.',
    documentsRequired: ['Digital photo or we can take photo at our centre'],
    eligibility: 'Anyone.',
    processSteps: ['Provide digital photo or sit for photo at our centre', 'Edit and crop to required size', 'Print in required quantity'],
    processingTime: 'Instant to 10 minutes',
    charges: 'Contact for latest charges',
    notes: 'White background for passport photos. Documents and process may vary.'
  },
  {
    id: 45, slug: 'lamination', category: 'printing',
    name: 'Lamination', icon: '🗂️',
    description: 'Laminate your important documents, certificates, photos, and ID cards for protection and durability.',
    documentsRequired: ['Document to laminate'],
    eligibility: 'Anyone.',
    processSteps: ['Provide document', 'Select lamination type (matte/glossy)', 'Lamination done'],
    processingTime: 'Instant to 5 minutes',
    charges: 'Contact for latest charges',
    notes: 'Size-based charges. Please contact or visit our office for confirmation.'
  },
  {
    id: 46, slug: 'resume-making', category: 'printing',
    name: 'Online Resume / CV Making', icon: 'Clipboard',
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
    id: 47, slug: 'sim-card-activation', category: 'other',
    name: 'SIM Card Activation', icon: '📶',
    description: 'Assistance with SIM card activation for various telecom operators.',
    documentsRequired: ['Aadhaar Card', 'PAN Card / Valid ID Proof', 'Passport-size Photograph'],
    eligibility: 'Any Indian resident.',
    processSteps: ['Provide required KYC documents', 'Fill SIM application form', 'Biometric/OTP verification', 'SIM activated within 24–48 hours'],
    processingTime: '24–48 hours',
    charges: 'Contact for latest charges',
    notes: 'Subject to operator availability. Documents and process may vary.'
  },
  {
    id: 48, slug: 'whatsapp-email-support', category: 'other',
    name: 'WhatsApp / Email Support', icon: '💬',
    description: 'We provide guidance and support for document submission via WhatsApp and email for various services.',
    documentsRequired: ['As per the service being availed'],
    eligibility: 'Anyone needing remote assistance.',
    processSteps: ['Contact us on WhatsApp or Email', 'Share required documents digitally', 'We process your request', 'Updates provided on WhatsApp/Email'],
    processingTime: 'Varies by service',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary depending on service.'
  },
  {
    id: 49, slug: 'csc-services', category: 'other',
    name: 'CSC Services', icon: '🏛️',
    description: 'Common Service Centre (CSC) services providing government-to-citizen services including digital payments, certificates, and utility services.',
    documentsRequired: ['Varies by service'],
    eligibility: 'Any citizen requiring CSC services.',
    processSteps: ['Select required CSC service', 'Provide necessary documents', 'Service processed via CSC portal', 'Receipt/Certificate issued'],
    processingTime: 'Varies by service',
    charges: 'Contact for latest charges',
    notes: 'Subject to CSC registration status. Documents and process may vary.'
  },
  {
    id: 50, slug: 'udyam-registration', category: 'other',
    name: 'Udyam Registration (MSME)', icon: '🏭',
    description: 'Register your micro, small, or medium enterprise (MSME) under the Udyam Registration portal for government benefits and schemes.',
    documentsRequired: ['Aadhaar Card of owner', 'PAN Card', 'Business Address Proof', 'Bank Account Details', 'NIC Code (business activity code)'],
    eligibility: 'Micro, Small, and Medium Enterprises (MSMEs) in manufacturing or service sector.',
    processSteps: ['Gather all documents', 'Access Udyam Registration portal', 'Fill business details', 'OTP verification on Aadhaar', 'Udyam Registration Certificate issued'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Udyam Registration is free on the official portal. Documents and process may vary.'
  },
  {
    id: 51, slug: 'gst-registration', category: 'other',
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
    id: 52, slug: 'aadhaar-pvc-smart-card', category: 'smartcard',
    name: 'Aadhaar PVC Smart Card', icon: 'CreditCard',
    description: 'Durable PVC credit-card-sized Aadhaar card with embedded security features from UIDAI.',
    documentsRequired: ['Aadhaar Number', 'Registered Mobile Number'],
    eligibility: 'Any Aadhaar card holder.',
    processSteps: ['Provide Aadhaar number', 'OTP verification', 'Order placed on UIDAI portal', 'Card delivered by post'],
    processingTime: '5–10 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 53, slug: 'voter-pvc-smart-card', category: 'smartcard',
    name: 'Voter ID PVC Smart Card', icon: 'Vote',
    description: 'PVC format Voter ID card (e-EPIC) — a modern, durable replacement for the old paper-based Voter ID.',
    documentsRequired: ['EPIC Number', 'Registered Mobile Number'],
    eligibility: 'Registered voters.',
    processSteps: ['Provide EPIC number', 'Download e-EPIC', 'Print on PVC at our centre'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 54, slug: 'pan-pvc-smart-card', category: 'smartcard',
    name: 'PAN Card PVC / Smart Card', icon: 'Receipt',
    description: 'PVC format PAN card for durability and easy wallet storage.',
    documentsRequired: ['PAN Number', 'Aadhaar Card'],
    eligibility: 'Any PAN card holder.',
    processSteps: ['Provide PAN details', 'We print PVC PAN card', 'Laminated and ready to use'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 55, slug: 'ayushman-bharat-card', category: 'smartcard',
    name: 'Ayushman Bharat Card (Health Card)', icon: '🏥',
    description: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) health insurance card providing ₹5 lakh health cover.',
    documentsRequired: ['Aadhaar Card', 'Ration Card', 'Mobile Number linked to Aadhaar'],
    eligibility: 'Families listed in SECC-2011 database or those covered under state government schemes.',
    processSteps: ['Check eligibility on PMJAY portal', 'Visit our centre with documents', 'Biometric verification', 'Ayushman card issued'],
    processingTime: '1–3 days',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 56, slug: 'abha-health-id', category: 'smartcard',
    name: 'ABHA Health ID Card', icon: '💊',
    description: 'Ayushman Bharat Health Account (ABHA) — a unique 14-digit health ID for storing and accessing your health records digitally.',
    documentsRequired: ['Aadhaar Card', 'Mobile Number linked to Aadhaar'],
    eligibility: 'Any Indian resident.',
    processSteps: ['Provide Aadhaar and mobile number', 'OTP verification', 'ABHA ID created instantly', 'ABHA card printed'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 57, slug: 'driving-licence-smart-card', category: 'smartcard',
    name: 'Driving Licence Smart Card (DL Card)', icon: '🚘',
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
    name: 'Vehicle RC Smart Card', icon: 'Car',
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
    name: 'Ayushman Golden Card Print', icon: '🥇',
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
    name: 'ABHA Card Registration & Print', icon: '🏥',
    description: 'Register for ABHA (Ayushman Bharat Health Account) and get your ABHA card printed.',
    documentsRequired: ['Aadhaar Card', 'Mobile Number'],
    eligibility: 'Any Indian resident.',
    processSteps: ['Register ABHA ID using Aadhaar', 'OTP verification', 'ABHA card generated', 'Print at our centre'],
    processingTime: 'Same day',
    charges: 'Contact for latest charges',
    notes: 'Documents and process may vary. Please contact or visit our office.'
  },
  {
    id: 61, slug: 'e-shram-card', category: 'smartcard',
    name: 'E-Shram Card', icon: '👷',
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
    name: 'Labour Card', icon: '🔨',
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
    processSteps: ['Apply at bank / our centre', 'Submit KYC documents', 'RuPay card issued', 'Activate card'],
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
    processSteps: ['Fill KCC application at our centre', 'Attach land and KYC documents', 'Submit at bank', 'Bank verification and approval', 'KCC issued'],
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
    processSteps: ['Fill Jan Dhan account opening form', 'Submit at bank or our centre', 'Account opened with zero balance', 'RuPay card issued with ₹2 lakh accidental insurance'],
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

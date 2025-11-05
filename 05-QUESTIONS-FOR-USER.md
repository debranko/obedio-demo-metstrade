# ❓ PITANJA ZA KORISNIKA - OBEDIO Demo
**Generated:** 2025-11-05
**Status:** ⏳ ČEKA ODGOVORE

---

## 🚨 KRITIČNA PITANJA (Blokatori)

### 1. Wear OS Source Code 🔴 **URGENT**
```
PITANJE: Gdje je Wear OS source code (Kotlin files)?
STATUS: Waiting for link/location

DETALJI:
- U ObedioWear/ folderu ima samo build artifacts
- Nema .kt files (source code)
- Rekli ste: "evo daću ti link kasnije"

AKCIJA: Molim vas pošaljite link ili lokaciju Wear OS source koda
        Bez ovoga ne mogu nastaviti sa Wear OS integracijom (Day 9-10)

HITNO: ⏰ Potrebno do Day 9 (Nov 13)
```

### 2. 4x TicWatch Devices
```
PITANJE: Da li imate već 4x TicWatch uređaja?
STATUS: Waiting for confirmation

OPCIJE:
[ ] Da, imam 4x TicWatch (model: _______)
[ ] Ne, treba nabaviti
[ ] Koristi druge Wear OS uređaje (koji: _______)

Ako treba nabaviti:
- Koliko dana treba za nabavku?
- Da li ima alternative?
```

### 3. WiFi Router za Demo
```
PITANJE: Da li imate WiFi router sa SSID "Blagojevic"?
STATUS: Waiting for confirmation

OPCIJE:
[ ] Da, već postoji router sa tim SSID
[ ] Ne, moram konfigurirati postojeći router
[ ] Koristićemo drugi SSID (koji: _______)

Ako koristite drugi SSID:
- Molim navedite: SSID _______ / Password _______
- Da promijenim u dokumentaciji
```

### 4. Tablet Device Specifications
```
PITANJE: Koji tablet koristite za demo?
STATUS: Waiting for specs

MOLIM NAVEDITE:
- OS: [ ] Windows [ ] Android [ ] iOS/iPad
- Model: _________________
- RAM: ____ GB
- Storage: ____ GB free
- Screen size: ____ inches

OVO JE VAŽNO ZA:
- Backend server capacity
- Frontend optimization
- Demo preparation
```

---

## ⚠️ VAŽNA PITANJA (Utječe na razvoj)

### 5. Chat Functionality - Već Postoji?
```
PITANJE: Da li chat/messaging već postoji ili treba pisati od nule?
STATUS: Waiting for clarification

U auditu sam našao:
✅ backend/src/routes/messages.ts - postoji
✅ Message model u Prisma schema - postoji
❓ Frontend Chat.tsx - nije jasno

MOLIM ODGOVORITE:
[ ] Da, chat radi - samo kopiraj
[ ] Djelimično radi - treba popraviti
[ ] Ne postoji - piši od nule

Ako radi:
- Gdje je frontend Chat komponenta?
- Da li ima bugs koji trebaju se popraviti?
```

### 6. Task Management - Već Postoji?
```
PITANJE: Da li task management već postoji?
STATUS: Waiting for clarification

U auditu NISAM našao:
❌ Task model u Prisma schema
❌ backend routes za tasks
❌ Frontend Tasks.tsx

MOLIM ODGOVORITE:
[ ] Da, postoji (gdje: _______)
[ ] Ne postoji - piši od nule

Ako postoji:
- Gdje je Task model?
- Gdje su API routes?
- Gdje je frontend komponenta?
```

### 7. ESP32 Hardware - Da li koristimo?
```
PITANJE: Da li ćemo koristiti ESP32 hardware button na demo-u?
STATUS: Waiting for decision

OPCIJE:
[ ] Da, koristimo ESP32 button - trebam flashovati firmware
[ ] Ne, samo Button Simulator na tabletu
[ ] Možda - imaš hardware ali nije obavezno

Ako DA:
- Koliko ESP32 uređaja imate?
- Koji model? (ESP32-WROOM, ESP32-WROVER, Heltec, etc.)
- Da li su već konfigurisani?
```

### 8. Demo Location IP Address
```
PITANJE: Da li znate IP adresu tablet uređaja unaprijed?
STATUS: Waiting for info

OPCIJE:
[ ] Ne, odredićemo na licu mjesta (Day 12/17)
[ ] Da, mogu dobiti prije (koji: _______)
[ ] Koristićemo static IP (koji: _______)

NAPOMENA: IP adresa potrebna za:
- Backend .env (MQTT_BROKER)
- Frontend .env (VITE_API_URL)
- Wear OS app konfiguracija
- ESP32 firmware konfiguracija
```

---

## 📋 FUNKCIONALNOSTI - Potvrde

### 9. Service Requests - Što Tačno Ne Radi?
```
PITANJE: Service Requests stranica "ne radi dobro" - šta tačno ne radi?
STATUS: Waiting for details

MOLIM NAVEDITE:
[ ] Ne učitava requests
[ ] Accept button ne radi
[ ] Complete button ne radi
[ ] Delegate ne radi
[ ] Notifikacije ne stižu
[ ] Real-time update ne radi
[ ] Drugo: _______________

OVO MI POMAŽE:
- Da fokusiram na pravi problem
- Da ne gubim vrijeme na što radi
```

### 10. Guest Page - "Neke Stvari Ne Rade"
```
PITANJE: Guest stranica - koje tačno stvari ne rade?
STATUS: Waiting for details

MOLIM NAVEDITE:
[ ] Ne učitava guests
[ ] Add guest ne radi
[ ] Edit guest ne radi
[ ] Delete guest ne radi
[ ] Guest details ne pokazuje
[ ] Location assignment ne radi
[ ] Photo upload ne radi
[ ] Drugo: _______________

SPECIFIČNO:
- Da li ima error u console-u?
- Da li je API problem ili frontend problem?
```

### 11. Dashboard - "Ne Izgleda Dobro"
```
PITANJE: Dashboard - šta tačno ne izgleda dobro?
STATUS: Waiting for details

DA LI JE PROBLEM:
[ ] Layout broken
[ ] Widgets ne pokazuju podatke
[ ] Widgets su previše male/velike
[ ] Boje/stil ne odgovaraju
[ ] Performance issue (slow loading)
[ ] Drugo: _______________

VAŠA VIZIJA:
- Kako bi trebalo da izgleda?
- Imate li screenshot reference?
- Koji widgets su prioritet?
```

### 12. Login Session Loss - Potvrda Problema
```
PITANJE: Login - kada refreshujete stranicu, morate ponovo login?
STATUS: Waiting for confirmation

[ ] Da, moram svaki put ponovo login - TREBA POPRAVITI
[ ] Ne, radi dobro - možda sam pogrešio u auditu

Ako DA:
- Da li se token čuva u localStorage ili cookie?
- Da li ima error u console-u kad refreshujete?
```

---

## 🎨 DIZAJN & UX PITANJA

### 13. UI/UX Preference
```
PITANJE: Da li želite zadržati postojeći dizajn ili simplificirani?
STATUS: Waiting for decision

OPCIJE:
[ ] Zadržati postojeći dizajn (Radix UI, Tailwind)
[ ] Simplifikovati za demo (minimalistički)
[ ] Redesign (novi izgled)

NAPOMENA:
- Postojeći: Kompleksan ali lijep
- Simplifikovan: Brz za develop, funkcionalan
- Redesign: Traje duže, ali može biti WOW
```

### 14. Guest Photos
```
PITANJE: Da li su guest photos bitne za demo?
STATUS: Waiting for decision

OPCIJE:
[ ] Da, vrlo bitne - trebam implementirati upload
[ ] Ne, nisu bitne - mogu dummy photos
[ ] Možda - nice to have ali ne obavezno

Ako DA:
- Da li već postoji photo upload funkcionalnost?
- Gdje se čuvaju slike? (database, uploads folder, cloud?)
```

### 15. Notifications - Sound & Visual
```
PITANJE: Želite li sound i visual alerts za service requests?
STATUS: Waiting for decision

OPCIJE:
[ ] Da, sound alert (beep/chime)
[ ] Da, visual flash (full screen red flash)
[ ] Oba
[ ] Samo popup notifikacija

NAPOMENA: Ovo je WOW faktor za demo!
```

---

## ⚙️ TEHNIČKE ODLUKE

### 16. Authentication za Demo
```
PITANJE: Kako želite handleovati auth za demo?
STATUS: Waiting for decision

OPCIJE:
[ ] Auto-login (hardkodovan korisnik, bez login screen)
[ ] Simple login (username/password, ali bez kompleksnosti)
[ ] Zadržati postojeći JWT system

PREPORUKA: Auto-login za demo (brže, bez komplikacija)
```

### 17. Permissions System za Demo
```
PITANJE: Da li koristimo permission system za demo?
STATUS: Waiting for decision

OPCIJE:
[ ] Ne, disable sve permissions (svi mogu sve)
[ ] Da, ali simplificirano (basic permissions)
[ ] Da, zadržati kompletan system

PREPORUKA: Disable za demo (izbjegnuti permission denied errors)
```

### 18. Database - Reset ili Koristiti Postojeću?
```
PITANJE: Da li da koristim postojeću bazu ili napravim novu za demo?
STATUS: Waiting for decision

OPCIJE:
[ ] Nova demo baza (clean start, demo data)
[ ] Koristiti postojeću bazu (sa trenutnim podacima)
[ ] Kopirati postojeću bazu (backup + modify)

PREPORUKA: Nova demo baza sa curated demo data
```

### 19. MQTT Broker - Gdje će raditi?
```
PITANJE: Gdje će MQTT broker raditi?
STATUS: Waiting for decision

OPCIJE:
[ ] Na tabletu (lokalno)
[ ] Na eksternom serveru
[ ] Na laptoptu (ako imate laptop uz tablet)

NAPOMENA:
- Lokalno na tabletu: Jednostavno, ali tablet mora biti jak
- Eksterno: Kompleksnije, ali pouzdanije
```

---

## 📅 TIMELINE & PRIORITET

### 20. Prioritet Funkcionalnosti (1-10)
```
PITANJE: Molim rangirajte funkcionalnosti po važnosti (1 = najbitnije, 10 = najmanje)

RANK  FEATURE
____  Service Requests (Guest poziva → Notification → Accept)
____  Chat/Messaging (Crew-to-crew real-time chat)
____  Task Management (Dodjeljivanje i praćenje taskova)
____  Activity Log (Historija akcija)
____  Guest Management (CRUD operacije za goste)
____  Dashboard (Pregled statistika i KPI)
____  Wear OS Integration (4x watches)
____  ESP32 Button Integration (Hardware dugme)
____  Crew Management (Upravljanje posadom)
____  Locations Management (Upravljanje prostorijama)
```

### 21. Ako Nešto Ne Stignemo?
```
PITANJE: Ako ne stignemo sve, šta možemo izostaviti?
STATUS: Waiting for decision

OPCIJE (označite što može biti skipovano):
[ ] Task Management
[ ] Chat
[ ] Wear OS watches (koristiti samo simulator)
[ ] ESP32 button (koristiti Button Simulator)
[ ] Guest photos
[ ] Activity Log
[ ] Dashboard widgets (basic verzija)

NAPOMENA: Ovo je backup plan ako zakasnimo
```

### 22. Da li Možete Pomoći sa Testiranjem?
```
PITANJE: Da li ćete moći testirati aplikaciju tokom razvoja?
STATUS: Waiting for confirmation

OPCIJE:
[ ] Da, svaki dan mogu testirati
[ ] Da, par puta tokom razvoja
[ ] Ne, testirajte sami i javite mi

NAJBOLJE BI BILO:
- Day 5: Test Dashboard & Service Requests
- Day 7: Test Chat & Tasks
- Day 10: Test Wear OS
- Day 11: End-to-end test
```

---

## 🎬 DEMO PITANJA

### 23. Demo Scenario
```
PITANJE: Imate li specifičan demo scenario u glavi?
STATUS: Waiting for input

PRIMJER:
"Sofia Anderson u Cabin A pritisne dugme za piće.
John (crew member) primi notifikaciju na sat.
John accepta request i kaže preko chata da dolazi.
John donese piće i complete request."

VAŠA VERZIJA:
________________________________________________
________________________________________________
________________________________________________
```

### 24. Demo Duration
```
PITANJE: Koliko treba da traje demo na sajmu?
STATUS: Waiting for decision

OPCIJE:
[ ] 2-3 minute (brz overview)
[ ] 5-7 minuta (detaljan demo)
[ ] 10+ minuta (kompletan demo sa Q&A)

NAPOMENA: Kraće = više ponavljanja, Duže = detaljan prikaz
```

### 25. Demo Audience
```
PITANJE: Ko je publika na MedStred-u?
STATUS: Waiting for info

DA LI SU TO:
[ ] Yacht owners
[ ] Yacht crew
[ ] Tech enthusiasts
[ ] Investors
[ ] General public

OVO MI POMAŽE:
- Da fokusiram na prave features
- Da pripremim odgovarajući pitch
```

---

## 💰 BUDGET & RESOURCES

### 26. Budget za Hardware
```
PITANJE: Da li ima budžeta za dodatnu hardware ako treba?
STATUS: Waiting for confirmation

MOGUĆI TROŠKOVI:
- TicWatch devices (ako treba kupiti)
- ESP32 boards (ako treba više)
- WiFi router (ako treba)
- Power banks
- Cables

BUDGET: ________ EUR/USD
```

### 27. Backup Plan Budget
```
PITANJE: Da li mogu kreirati backup demo video?
STATUS: Waiting for decision

OPCIJE:
[ ] Da, snimiti screen recording kao backup
[ ] Da, napraviti animirani video
[ ] Ne treba, live demo će sigurno raditi

PREPORUKA: SVAKAKO napraviti screen recording kao fallback
```

---

## 📞 KOMUNIKACIJA

### 28. Daily Updates
```
PITANJE: Želite li dnevne updates o progresu?
STATUS: Waiting for preference

OPCIJE:
[ ] Da, svaki dan end-of-day report
[ ] Da, ali samo major milestones
[ ] Ne, samo ping me ako je problem

FORMAT:
[ ] Kratka poruka
[ ] Detailed report
[ ] Video call
```

### 29. Best Contact Method
```
PITANJE: Kako je najbolje da vas kontaktiram ako treba?
STATUS: Waiting for info

PREFERRED:
[ ] Email: __________________
[ ] Phone: __________________
[ ] WhatsApp: __________________
[ ] Telegram: __________________
[ ] Slack: __________________

AVAILABILITY:
- Radni dani: _____-_____ h
- Vikend: _____-_____ h
```

---

## 📝 SUMMARY - ŠTA TREBAM OD VAS

### Najpotrebnije ODMAH:
1. **Wear OS source code link** 🔴 URGENT
2. Potvrda da imate 4x TicWatch
3. Potvrda WiFi router SSID
4. Tablet specifications

### Potrebno u narednih par dana:
5. Detalji što ne radi (Service Requests, Guests, Dashboard)
6. Da li chat i tasks postoje
7. Prioritet funkcionalnosti (rangiraj 1-10)
8. Demo scenario (ako imate ideju)

### Nice to have:
9. Design preference
10. Authentication preference
11. Permission system preference
12. Backup plan odluka

---

## ✅ AKCIJE

**Za Korisnika:**
```
[ ] Pročitaj ovaj dokument
[ ] Odgovori na KRITIČNA pitanja (1-4)
[ ] Odgovori na VAŽNA pitanja (5-12)
[ ] Ostala pitanja kako stigneš
[ ] Pošalji odgovore u jednoj poruci
```

**Za Mene:**
```
[x] Kreiran audit report
[x] Kreiran migration plan
[x] Kreiran project structure
[x] Kreiran quick start guide
[x] Kreiran demo checklist
[x] Kreiran pitanja za korisnika
[ ] Čekam odgovore
[ ] Nastaviti sa razvojem čim dobijem odgovore
```

---

**MOLIM VAS ODGOVORITE ŠTO PRE - HVALA! 🙏**

**Imam 12 dana i želim da sve bude savršeno! 💪**

---

**END OF QUESTIONS**

// THE JOB

export const mrJohnsonClients = [
  "Street Gang Member", "Corporate Aristocrat", "Pimp", "Thug", "Prostitute",
  "Fixer", "Priest", "Business Owner", "Solo or Mercenary", "Hacker",
  "Scientist", "Cop", "Mobster", "Smuggler", "Bounty Hunter",
  "Syndicate Boss", "Concubine", "Tech Specialist", "Soldier", "Scavenger",
  "Agent", "Doctor", "Drug Dealer", "Celebrity", "Artificial Intelligence",
  "Artist", "Thief", "Media", "Nomad", "Synthetic",
  "Driver", "Child", "Broker", "Unemployed Person", "Clone",
  "Programmer", "Designer", "Homeless Person", "People Trafficker", "Revolutionary",
  "Psychiatrist", "Cyborg", "Intelligent Animal", "Courier", "Image Consultant",
  "Forger", "Ex-Con", "Fanatic/Extremist", "Performer", "Junkie"
];

export const mrJohnsonWants = [
  "Wants to", "Needs to", "Must", "Plans to", "Forced to"
];

export const mrJohnsonPeopleActions = [
  "Kill", "Maim", "Deliver to", "Protect", "Intimidate",
  "Escape from", "Monitor", "Smuggle", "Find", "Blackmail",
  "Steal from", "Collect from", "Pay", "Assist", "Modify",
  "Record", "Threaten", "Kidnap", "Own", "Defeat",
  "Ruin", "Control", "Save", "Submit to", "Entrap",
  "Con", "Flee with", "Employ", "Marry", "Sell out",
  "Extract", "Kill", "Deliver to", "Blackmail", "Modify",
  "Escape from", "Ruin", "Steal from", "Kidnap", "Protect",
  "Find", "Escort", "Deliver to", "Save", "Collect from",
  "Flee with", "Kill", "Sell out", "Investigate", "Submit to"
];

export const mrJohnsonPeopleTargets = [
  "Programmer", "Ex-Con", "Priest", "Cyborg", "Scientist",
  "Bounty Hunter", "Tech Specialist", "Soldier", "Thief", "Artist",
  "Performer", "Media", "Designer", "Unemployed Person", "Child",
  "Driver", "Broker", "Fixer", "Fanatic/Extremist", "Courier",
  "Smuggler", "Celebrity", "Clone", "Cop", "Junkie",
  "Prostitute", "Intelligent Animal", "Forger", "Street Gang Member", "Thug",
  "Synthetic", "Business Owner", "Corporate Aristocrat", "Agent", "Mobster",
  "Pimp", "Hacker", "Solo or Mercenary", "Concubine", "Artificial Intelligence",
  "Homeless Person", "Psychiatrist", "Nomad", "Revolutionary", "Doctor",
  "Syndicate Boss", "Drug Dealer", "Image Consultant", "People Trafficker", "Scavenger"
];

export const mrJohnsonThingActions = [
  "Destroy", "Copy", "Deliver", "Protect", "Sell",
  "Steal", "Destroy", "Smuggle", "Locate", "Hide",
  "Steal", "Collect", "Receive", "Control", "Modify",
  "Locate", "Destroy", "Ransom", "Own", "Flee with",
  "Spoil", "Control", "Save", "Upload", "Protect",
  "Use", "Flee with", "Sell", "Steal", "Flee with",
  "Locate", "Destroy", "Copy", "Steal", "Locate",
  "Copy", "Steal", "Destroy", "Protect", "Copy",
  "Spoil", "Control", "Own", "Protect", "Copy",
  "Flee with", "Hack into", "Escape with", "Destroy", "Steal"
];

export const mrJohnsonThingTargets = [
  "Neural Processor", "Vintage Wine", "Photograph(s)", "IFF Tags", "Narcotic",
  "Weapon", "ID Card", "Jewellery", "Software", "Security Passcard",
  "Target's DNA", "Cybermodem", "Offline Digital Files", "Hard Drive", "Designer Virus",
  "Attache Case", "Data/Vid Chip", "Holdall of Drugs", "Vehicle", "Keys/Key Card",
  "Computer Virus", "Cybernetic Limb", "Synthetic Brain", "Personality Module", "Cell Phone/Agent",
  "Exo-Womb", "Hardcopy Schematic", "Military ICE Breaker", "Nano Fabricator", "Antique Katana",
  "Cloned Coca Leaf", "Antidote/Medicine", "Human Eye/Thumb", "Artificial Intelligence", "Cybernetic Optics",
  "SimStim Recording", "Robot", "Operating System", "Tablet Device", "Memory Chip",
  "Server", "Holdall of Cash", "Bioware", "Augmented Pet", "Chemical",
  "Human Organ(s)", "Patient In Cryo Vat", "Work of Art", "Drone/Remote", "Cybernetic Implant"
];

export const locations = [
  "Pharmacy", "Consumer Electronics", "Art Dealer/Gallery", "Auto/Robotics Repair",
  "Storage Units/Warehousing", "Legal Firm", "Religious Building", "Capsule Hotel",
  "Data Storage", "Low Rent Housing Project", "Grocery Store/Hypermarket",
  "Elevated Rail/Road Overpass", "Fast Food Franchise", "Police Precinct",
  "School/College", "Government Building", "Garage/Parking Block", "Office Block",
  "Public Transport Hub", "Hospital/Clinic", "Department Store", "Body Augmentation Clinic",
  "Luxury Apartments", "New Media Company", "Industrial", "Security Tech",
  "Vehicle Showroom", "Fashion Boutique", "Commercial Cybernetics", "Mall",
  "VRcade", "Gym", "Leisureplex", "Apartment Block/Hab Stack", "Nightclub",
  "Underpass", "Hotel", "Ripperdoc", "3D Print Fabrication",
  "Courier/Bulk Transport Company", "Bar", "Restaurant", "Pop-Up Market",
  "Coffee Shop", "Taxi Firm", "Pocket Park", "Suburban Housing",
  "Movie Theatre", "Weapons Tech/Sales", "Multi-Level Car Park", "Bank", "Antiques"
];

export const conflictGroups = [
  "Street Gang", "Corporate Aristocrat", "Fixer Network", "Netrunner Collective",
  "Solo Condotta/PMC", "Criminal Syndicate", "Drug Dealers", "Transient Clan",
  "Indentured Workers", "Media Web"
];

export const conflictSources = [
  "Treachery", "Adultery", "Fraud or Theft", "Addiction",
  "Ambition", "Madness", "Love", "Folly", "Paranoia", "Rivalry"
];

export const conflictOpposing = [
  "Media Web", "Indentured Workers", "Transient Clan", "Drug Dealers",
  "Criminal Syndicate", "Solo Condotta/PMC", "Netrunner Collective",
  "Fixer Network", "Corporate Aristocrat", "Street Gang"
];

export const areaEvents = [
  { event: "Gang Block War", consequence: "Collateral Damage" },
  { event: "Corporate Sweep", consequence: "Evictions" },
  { event: "Man-Made Disaster", consequence: "Diminished Infrastructure" },
  { event: "Political Unrest", consequence: "Fear" },
  { event: "Development/Investment", consequence: "Gentrification" },
  { event: "Area Lock Down", consequence: "Rebellion" },
  { event: "Police Withdrawal", consequence: "Chaos" },
  { event: "Enhanced Security", consequence: "Curfews" },
  { event: "New Clade Established", consequence: "Unification" },
  { event: "Mob War", consequence: "Rapidly Escalating Fatalities" }
];

// THE CITY

export const smells = [
  "Cigarette Smoke", "Cheap Perfume", "Expensive Cologne", "Exhaust Fumes",
  "Stale Refuse", "Urine", "Vomit", "Burning Plastic", "Ash", "Acrid Chemicals",
  "Cordite", "Blood", "Wet Hair", "Motor Oil", "Faeces", "Soda Pop Sweetness",
  "Noodles", "Rubber", "Burnt Meat", "Dirty Sneakers", "Fried Food", "Beer",
  "Perfumed Bleach", "Body Odour", "Varnish", "Insecticide", "Soap", "Sulphur",
  "Hairspray", "Printed Polyamides", "Hydraulic Fluid", "Coffee", "Resin",
  "Antiseptic", "Candy", "Mint", "Salt", "Tea", "Fresh Sweat", "Infected Tissue",
  "Paint", "Mold & Mildew", "Baby Powder", "Acid", "Feet", "Cinnamon", "Leather",
  "Lemon Zest", "Damp", "Rot", "Overheated Circuit Board", "Cigars", "Floral Scent",
  "Pizza", "Spices", "Lavender", "Sewage", "Pine", "Crack Cocaine", "Cat Piss",
  "Gas", "Latex", "French Fries", "New Cyberlimb Smell", "Sex", "Menthol",
  "Cheese", "Wet Concrete", "Disinfectant", "Polythene", "Nail Varnish", "Whiskey",
  "Coconut Oil", "Vinyl", "Wine", "Acetone", "Cookies", "Ammonia", "Biodiesel",
  "Polish", "Printer Toner", "Dust", "Glass Cleaner", "Musty", "Opiates",
  "Raw Meat", "Laminate", "Weed/Skunk", "Drains", "Thinners", "Old Food",
  "Incense", "Fused Wiring", "Lube", "Sour Milk", "Garlic", "Alcohol Sanitiser",
  "Cheap Aftershave", "Gun Oil"
];

export const sounds = [
  "Building Alarm", "Barking Dogs", "Incoherent Shouting", "A Single Gunshot",
  "Ventilation System", "Car Doors Slamming", "Loud Television", "Children",
  "Aerocar Overhead", "Catchy Corporate Jingle", "The Screech Of Tires",
  "Pedestrian Crosswalk", "Rattle Cans In Use", "Heavy Gunfire", "Sobbing",
  "Channeled Winds", "Hum Of A Cleaning 'Bot", "Buzzing Of Flies", "Rattle Of Chains",
  "Arcade Machines", "Breaking Glass", "Text Alert", "An RPG Launching", "Sirens Inbound",
  "Running", "Subway Rumble", "A Loud Argument", "Drill Or Power Saw",
  "Road Traffic Accident", "Hellfire Street Preacher", "Loud Energetic Music", "Laughter",
  "Hydraulics", "A Reversing Vehicle", "An Annoying Ringtone", "Sexual Activity",
  "Police Radio Chatter", "Loose Door Or Gate", "Group Chanting", "Popular Theme Tune",
  "Chesty Coughing", "Vehicle Alarm", "Steady Footsteps", "Automated Warning",
  "Beating Of Heavy Rain", "Garbled Loudspeaker", "Exchange Of Gunfire",
  "Background 'Muzak'", "Gutteral Screaming", "A Call To Prayer", "Loose Piping",
  "Helicopter Overhead", "The Buzz Of Neon", "A Revving Engine", "An Impromptu Rave",
  "Water Pump", "Road Works", "Right Wing Talk Radio", "Foreign Busker", "Ice Cream Truck",
  "Distant Explosion", "Car Horn", "UAV/Drone Motor", "Tumbling Trash Cans",
  "Evangelical Broadcast", "Very Heavy Transport", "Running Water", "Drunk Singing",
  "Skateboards", "Tattoo Gun", "Rolling Cans", "Obvious Porno", "Riot Or Demo",
  "Overhead Train", "Cats Fighting", "Shrill Whistling", "Bug Zapper", "Street Hawker",
  "Car Chase", "Chilling War Cry", "Motorcycles", "Crackle Of Flames", "Door Buzzer",
  "An Anguished Cry", "Sneaker Squeak", "Scraping Metal", "Splashing", "Noisy Printer",
  "Laser Fire", "Jingle Of Keys", "Quiet Conversation", "Sirens Outbound",
  "Aerocar Landing", "Frying Food", "A Brawl", "Doors Slamming", "Ads", "Thunder",
  "Hissing White Noise"
];

export const sights = [
  "Armoured cops bundle violently reluctant vagrant into ERA-plated squad car",
  "A bus shelter made entirely of screens showing flashy commercials",
  "Searchlights playing across the cloud cover and projecting branding",
  "A brightly lit aerocab taking off in a cloud of exhaust fumes, rainwater and trash",
  "AC vents in the sidewalk emitting a thick cloud of vapour",
  "A heavy rainwater cascade falls from damaged guttering",
  "Every underlit face on the street is concentrating solely on their phone",
  "An ancient looking geriatric lopes past strapped into a linear assistance frame",
  "A vid-blogger in full, wearable array, blatantly recording the scene",
  "The nearest building has an intermittently flickering security light",
  "Your view is blocked by a lumbering hi-vis recycling collection truck",
  "A cluster of kids vaping, LED-lit clouds from under designer pollution hoods",
  "A pair of bicycle couriers race one another through crawling traffic",
  "Gritty, chemical infused sediment sloughing off a nearby rooftop",
  "A large building-mounted flatscreen showing the latest infotainment",
  "Unattended roadworks, the area coned off and lit for safety for no good reason",
  "An automated noodle vending truck, jingle playing, folds open and deploys nearby",
  "A flock of scabrous-looking pigeons suddenly taking flight",
  "A busy metro platform, full to capacity with disgruntled, rain-soaked commuters",
  "An abandoned cybernetic limb lies forlornly by the kerb",
  "Animated street art that twists and turns across two adjoining walls",
  "Frantic homeless people, washing vehicle windscreens before the lights change",
  "The flashing orange lights of a fat, dirty-yellow street sweeping remote",
  "A nearby dataterm is missing its screen and is stuffed with trash",
  "Your way is barred by a precarious heap of obsolete electronics",
  "The rainbow incandescence of oil on a large puddle of dirty water",
  "The substandard cheapcrete is pockmarked by years of corrosive rains",
  "A loaded pizza delivery drone hovering about three meters above the ground",
  "A wage-slave arguing with her phone's onboard AI, before breaking down crying",
  "An orange, multi-limbed, window cleaning remote clambers up the building facade",
  "A long, silent queue for a blocky, exhaust stained, kerb-side Euthanasia Booth",
  "All the nearby street signs are gang-tagged over to the point of being useless",
  "Filthy red and white plastic Jersey barriers block most of the sidewalk",
  "An overpass or skywalk covered in colourful advertising animatics",
  "There are crowds of fast moving people swarming absolutely everywhere",
  "The scorched shell of a gutted vid-phone kiosk",
  "Pedestrians flooding across the nearest intersection, en masse, both ways",
  "A group of screeching street kids running along the overhead rail lines",
  "A thick pea soup fog rolling down the streets and alleyways",
  "All the street lights for this entire block just went out",
  "Rivers of rain-borne trash race along in the choked gutters",
  "A small crowd of people gawping upwards at a potential jumper",
  "A tight formation of drones races down the street, just above head height",
  "A group of sex workers on a nearby street corner, approaching cars",
  "An out-of-order ATM threatens violent action to passers by who stray too close",
  "Unnervingly, there is absolutely no-one about",
  "A pedicab operator struggling with heat exhaustion or dehydration",
  "A row of vendomats coated in layers of gang tags, going back many years",
  "A GEV taxi takes a corner hard, throwing up polluted water, trash and crud",
  "An energetic street preacher giving a digital presentation on Cybernetic Jesus"
];

export const bigScreens = [
  "Video gaming event",
  "Highlights from major sporting event",
  "System error message/connection failure",
  "The time and date",
  "The latest news headlines and lottery result",
  "Infomercial/Advertainment",
  "The weather forecast/air quality statistics",
  "Pornography (hacked and squirtcast)",
  "Music videos or movie trailers",
  "Traffic information"
];

export const onTheRoad = [
  "Armoured Intercity Bus", "Carbon-Fibre Pedicab", "GEV Taxi (Air Cushion)",
  "Automated Uber/AI Taxi Sedan", "Food/SCOP Vending Truck", "Cyclist(s)",
  "Police Patrol Car", "Small City Electric", "Limousine", "Sports Car",
  "HMMWV (Humvee)", "Suburban Utility Vehicle (SUV)", "Estate Car/Stationwagon",
  "Moped/Scooter", "4x4/MRAP", "Very Heavy Goods Vehicle", "Armoured Truck",
  "Police Van", "Sports Motorcycle", "Utility Van/Minivan", "Refrigerated Transport",
  "Off Road Motorcycle", "Flatbed/Pick-Up", "Tram/Metro-Train", "Hatchback",
  "Classic Car", "Aero Using Road Wheels", "Luxury Sedan", "Monowheel",
  "Hazardous Container Truck", "Three-Wheeler", "Waste Management Truck",
  "Automated Road Sweeper", "Police Motorcycle", "Courier/Delivery Van",
  "Scrap Built Rickshaw", "Standard Sedan", "Mobile Home/RV/MoPad", "Muscle Car/Roadster",
  "Construction Vehicle", "Fire Tender", "Buggy/ATV", "Powered Armour Rickshaw (Cradle)",
  "EMT/Paramedic/Ambulance", "Armoured Personnel Carrier", "Quad Bike",
  "Tow Truck", "Car/Vehicle/PA Transporter", "Regular City Bus (1-3 decks)", "Trike"
];

export const gigEconomy = [
  { role: "Mobile AR Ad Hub", description: "Supplied body rig outputs 'augverts' as you wander streets" },
  { role: "Human CCTV", description: "Cyberoptics required, must allow remote access & sign NDA" },
  { role: "Gig Groomer", description: "Given a quota of potential gig workers to sign up for agent" },
  { role: "Hygiene Dispenser", description: "Loiter in lobbies wearing a tank full of hand sanitiser" },
  { role: "Substrate Fairy", description: "Find and collect recyclables to be reused for 3D printing" },
  { role: "Organ Surrogate", description: "Mature cloned organs prior to implantation" },
  { role: "Meds Manager", description: "Deliver medications to the old and infirm, ensure ingestion" },
  { role: "Brand Spammer", description: "Promote brand/product/ideology to strangers in public" },
  { role: "Pest Microwaver", description: "Issued with RFID tagged microwaver to zap vermin" },
  { role: "Drone Repoman", description: "Trace and recover downed courier drones" }
];

// THE NPCS

export const firstImpressions = [
  "Painfully thin, chain smokes", "Athletic and wiry, huffing fast food",
  "Bulky, obsolete cyberaudio 'domes'", "Bleeding gums, bloodshot eyes",
  "Sad looking, distracted by cell phone", "Many interface plugs, tattooed labels",
  "Doughy and unhealthy looking", "Confident, highly polished, vinyl coat",
  "Sophisticated, manipulative", "Cold and predatory demeanour",
  "Pale and sullen, pleasingly stylish", "Business like, gum chewer, sniffs",
  "Square face, with small, darting eyes", "Ill fitting clothes and bad teeth",
  "Pair of skinny plastic cyber arms", "Garish pink jaw, yellow acrylic teeth",
  "Rugged, practical and outdoorsy", "Substandard gender reassignment",
  "Prominent implant branding", "Dreadlocks, worn leather coat",
  "Seems eerily artificial, very attractive", "Unintelligent, aggressive, pock marks",
  "Mismatched optics, black turtle neck", "Overweight and dirty, layered clothes",
  "Engorged musculature due to grafts", "Furtive and on edge, unkempt, tattoos",
  "Misshapen by heavy augmentation", "Narcotic haze, fidgety hands, shabby",
  "Loud, camp, and showy, anaemic", "Weary, apathetic, animated clothing",
  "Acts deaf but isn't, knows people", "Boxy e-cig, coat/hoodie, mirrorshades",
  "Shy and apologetic, rubber raincoat", "Oily skin, constantly checks watch",
  "Oddball dress sense, way too literal", "Long hair, metal fan in downtime",
  "Trashy, overtly sexual, self-loathing", "Overclocked nervous system, sweats",
  "Conservative, business-like", "Toned, adjusts latest style clothes",
  "Obvious cosmetic surgeries", "White enamel cyberlimb; expensive",
  "Gangsta bling, lisps, friendly", "Permanent plastic rictus grin",
  "Highly strung, with overly long fingers", "Pushed for time, bulky backpack",
  "Poorly groomed, with a raspy voice", "Focussed on AR, poor listener",
  "Workwear under overcoat, nods sagely", "Thick foreign accent, glowing optics"
];

export const tattooWhat = [
  "Skulls/Bones", "Roses/Flowers", "Crossed Guns/Blades", "Snake/Reptile",
  "Dragon/Mythical Beast", "Animal/Predator", "Nautical", "Script/Message/Numbers",
  "Geometric/Abstract", "Technology/Circuitry"
];

export const tattooStyle = [
  "Mexican/Aztec", "Pixilated/Computerised", "Photorealistic Colour/Grey",
  "Migratory/Animated", "Oriental", "Tribal", "Rockabilly Punk",
  "Solid Monotone Graphics", "Neon Glow", "Old School Blue Ink"
];

export const tattooWhere = [
  "Back/Shoulders", "Bicep/Forearm", "Hip/Groin", "Face/Scalp", "Stomach",
  "Lower Leg/Calf", "Thigh", "Ribs/Chest", "Neck/Collar Bone", "Buttock(s)"
];

export const vices = [
  "Child-like Sex Dolls or Synthetics", "Prohibited Designer Narcotics",
  "Street Legal But Harmful (Alcohol/Caffeine/Nicotine)", "SimStim/SimSense/VR Gaming",
  "Atrocity Images or Footage", "Prostitutes", "Pornographic Material",
  "Bizarre Fetish Wear or Activity", "Pain/Sexual Violence", "Abuses Synthetic or Real Animals"
];

export const viceLevels = [
  "Take It Or Leave It", "Light Interest", "Ghoulish Fascination",
  "If The Opportunity Arises", "Regular Routine User", "Intrinsic To Personality",
  "Only To Destress", "Needed To Function", "Unhealthy Obsession", "All Consuming"
];

export const fixerRoles = [
  "Talent Agent", "Repoman", "Black Marketeer", "Identities Broker",
  "Transporter/Mover", "Skin Trader/Pimp", "Personality Smuggler", "Tech Dealer",
  "Secrets Hunter", "Drug Designer", "Wheelman", "Talent Scout",
  "Syndicate Diplomat", "Drug Pusher", "Go-Between", "Hacker Stable",
  "Tech Fence", "Prowler/Thief", "Smuggler", "Squealer",
  "Bookie", "Gun Runner", "Procurement", "Electronics Handler",
  "Blackmailer", "Data Crypt Owner", "Nanotech Dealer", "Mediator",
  "Loansharks", "Information Broker", "Weapon Fence", "Ghost Accountant",
  "Gang Liaison", "Finder", "Bent Lawyer", "Vehicle Dealer",
  "Contract Facilitator", "Bioware Fence", "Digital Manipulator", "Madam",
  "Troubleshooter", "Persuader", "Bioware Handler", "Club Owner",
  "Landlord", "Med Tech Dealer", "Negotiator", "Synth Pimp",
  "Cleaner", "Implant Dealer"
];

export const fixerAppearances = [
  "Boxy, plain, emotion suppression chips", "Skinny jeans, vinyl bomber jacket, joker",
  "Elfin, humourless, pale duster, blue hair", "Muscular, balding, sophisticated, diligent",
  "Well groomed, youthful, boastful, snob", "Ostentatious, traditional, bearded, careful",
  "Blistered, strong cologne, shiny blue suit", "Willowy, hauntingly beautiful, kimonos",
  "Tall, lithe and busty, probing, determined", "Oily, obsequious, formal and spiteful",
  "Pale, shaky, numerous vehicle link plugs", "Approachable, guarded, sharp dresser",
  "Shaven head, grey suit, bulky, sombre", "Exhibitionist, tease, clear vinyl raincoat",
  "Fat, confident, well-mannered, Mao suits", "Geisha-chic, teenage girl, dark eyed, cold",
  "Deep turquoise leather coat, friendly", "Impeccably dressed, punctual, vindictive",
  "Neo-Romantic floppy fringe, tux, relaxed", "Nervous, cautious, trenchcoat, greasy hair",
  "Tired and frazzled, thinning curly hair, fat", "Tech-savvy, confident, ebony skinned",
  "Arrogant, condescending, casual dress", "Inappropriate, knowledgeable, on-trend",
  "Small, unwashed, world weary, tired", "Black suits & shirts, gold tie, aggressive",
  "Limps, thin-limbed, pastey, loose silks", "Conservative trouser suits, on edge, delays",
  "Seductive, elegant, hot tempered, black", "Easily pleased, layered hoodies, shades",
  "Middle-aged, dark denim, big revolvers", "Flamboyant, mincing, fidgets, gloved",
  "Grubby punk, pumped, baritone voice", "Oversized army jacket, cigars, big gun",
  "Chunky, crumpled suit, sweaty, balding", "Sergio Tacchini track suits, anxious, tag",
  "Expensive shirts, gold rings, robotic", "Smoker, inscrutable, leisure suits, clean",
  "Reeks of booze, dirty jeans, serious", "Soft face, scarlett bobbed hair, ruthless",
  "Monovisor, suit, raincoat, katana, calm", "Turtle necks, chrome hands, wild eyed",
  "Old, emaciated, bitter and suicidal", "Hawaiian shirts, cargo pants, gregarious",
  "Squat, solid, stubbled chin, dark vinyl coat", "Enthusiastic, knitwear, sandals, ponytail",
  "Coffee-skinned, afro weave, violet lipstick", "Coverall, micro tools, air hypo, giddy",
  "Tall, lean, narrow-faced, red suit, dreads", "Long black hair, goatee, lethargic, cynical"
];

export const gunsForHireNames = [
  "Darkus Garvey", "Logan Tanner", "The Pink Panzer", "Vincent Conrad",
  "Jinjiro Yasuda", "Hiroshima Black", "Plastic Bernard", "Dominic West",
  "Tango Sinclair", "Janik The Ghost", "Napoleon Dean", "Trixie Paladin",
  "Terence Van Stratten", "Nip Lacey", "Spiros Giannopoulos", "Demi Oblique",
  "Mike Bravo", "Storm Haussmann", "Indigo Jones", "Mildred Gaia",
  "Joe Montero", "Chance Baptiste", "Oliver McKee", "Saber Numan",
  "Zaneta Zone", "Brandon Skinner", "Mina Radisson", "Johnny Namibia",
  "Aisha Hussein", "Boyd Blackwood", "Emmanuel King", "Huey Ventura",
  "Lorenzo Babylon", "Thaddeus Schwartz", "Lazarus Mendez", "Maria Goldovskoya",
  "Sady Sakura", "Rudolph Washington", "Angel De Santo", "Dien Bien Phu",
  "Otto Kruger", "Pandora Frost", "Buntaro 'Bushi' Tanaka", "Scarlett Harvest",
  "Ryan Edwards", "Slade Bennett", "Splicer Takeda", "Kurt Kellerman",
  "Heywood Nash", "Manuel Override"
];

export const gunsForHireDescriptions = [
  "Maddeningly faulty cyberaudio feeds him your comms",
  "Elite spec-ops in the Polar War, tired of fighting, sociopath",
  "Camp, flirtatious, enjoys intimidating straights, brutal brawler",
  "Engaged in messy affair with unstable corporate aristocrat",
  "Rogue vat-grown killer, protects paralysed gene-tech he loves",
  "Gaijin with minor yakuza gumi, despised, mole for Russians",
  "Unapologetic hipster, support from Armenian hacker clade",
  "Lives in exquisite houseboat, requires seclusion to stay sane",
  "Overweight Hawaiian, raised in foster homes, big drinker",
  "Vagrant combat veteran with augmentation sickness",
  "Hounded by AI telemarketers, doesn't know why",
  "Just one last job and the luxury beach house in Goa is hers",
  "Anti-depressants laced with nanites control his decisions",
  "Underage and overclocked, way too eager to prove herself",
  "Thinks he's a major player, has a lot of cousins called Spiros",
  "Argentine marine, autonomous defense net rebels against her",
  "Heavily invested in Vornheim VR game, won't risk losing levels",
  "Frustrated surrealist artist, single mother, skilled killer",
  "Crippled as child, skeleton rebuilt, in constant pain, tough",
  "Linear-frame-enhanced kick boxer, listens to K-Pop pre-op",
  "Cyborg veteran of Kashmir Emergency, won't leave witnesses",
  "Late stage AIDS-2, needs immunoboosters, nothing to lose",
  "Post-combat cleansing ritual using sage and Bible verse",
  "Mutilated in Freak Fight bout, suspects crime syndicate boss",
  "Former VDV paratrooper, Moldova veteran on war crimes list",
  "Rumoured junkie, actually diabetic, saving for neo-pancreas",
  "Convert to Islam, featureless gunmetal face, six red optics",
  "Devout, worships the Papal AI as a god",
  "Ex-Saudi GID, thermoptic camo, synthetic endorphin addict",
  "Cyberoptics feed his view to media brother who's using him",
  "Former head of security, killed execs family; she's guilt-ridden",
  "Doesn't listen, tends to hit wrong targets, cannot drive",
  "KGB wheelman, Olympic skier and hunted whistleblower",
  "Former airport cleaner, conned into job by crime syndicate",
  "Can't reconcile job with married life, excellent danger sense",
  "Svetlana Series 9 sex synthetic, fights severe violent urges",
  "Cares for crippled mentor, finds obligation a tiresome burden",
  "Indentured to fixer handler, treated as property",
  "Orbital assassin, amphetamine user, bright neon-green eyes",
  "Conflicted Buddhist, connoisseur of classic Blues artists",
  "Writes pithy anonymous diary blog, plans to write book",
  "Classically-trained pianist, combat medic, lives in her car",
  "Yogic guru, clean living, obsidian cyberarms, pansexual",
  "Looks like young Madonna, denies it; pink plastic cyberarm",
  "Wealthy with an impressive property portfolio, soldiers for fun",
  "Nazi Country & Western fan, feels most alive post-kill",
  "Wants to be master of own destiny, denies he's trapped",
  "No regard for collateral damage, keeps tropical fish",
  "Lost entire family to wasting plague, inconsolable, suicidal",
  "Glitchy GPS, no direction sense, trackable, argumentative"
];

export const hackerNames = [
  "Phreakworm", "Spiderhead", "The Venomous Pao", "Robotnik",
  "The Shadow Sphere", "Agent Orange", "Javier Script", "Kid Terminal",
  "Feedfetcher", "Mr oo", "Lady Probability", "Chip Boy",
  "Pixelgeist", "Datamancer", "Modal Fraction", "Deathwatch",
  "Neurocide", "Zauberer", "Patient Zero", "Fractal Artifice",
  "Winston Smith", "Quantum Clan", "Mr Peepers", "Seraphim",
  "Billy Headcrash", "Dancer", "The Invisible Hand", "Oblivia 404",
  "Infobahn", "Hungry Ghost", "Cortical Mafia", "Jake/Finn/Beemo",
  "Synaptica", "Phantom Paradigm", "Mother_Bored", "Bit Rat",
  "Daemonbot", "Samizdat", "Lexicon Bandit", "Happy Panda",
  "Mod.Net", "Heatseeker", "Solid State", "Chaos Theory",
  "The Havoc", "Fuzzy Logic", "Wardroids", "White Knight",
  "ROMinatrix", "Underscourge"
];

export const hackerDescriptions = [
  "Undermines elections in Third World countries, because he can",
  "Creates netsites for several street gangs, can muster help fast",
  "Turing Authority agent, under cover, working on major sting",
  "Escaped from Latvian data harvesters, has price on his head",
  "Collective formed by ex-Transmission Felonies cop",
  "Works for the bank he hacks, now targeted for assassination",
  "Confined to ghetto-built mobility walker run on laptop batteries",
  "Runs collective for corporate uncle, who thinks he's an idiot",
  "Guarded by a pair of tactically enhanced German Shepherds",
  "Functionally a human server, sitting on millions",
  "High aptitude, actually result of drugs tests in orphanarium",
  "Appears to be a script kiddie, successful exploit royalty farmer",
  "Clinically dead 3 times, wears a defib rig, surprisingly chipper",
  "Spends all his time in sensory deprivation tank",
  "Blinded as a child, navigates entire life via net overlays",
  "Maintains clones in exowombs, in hidden cold storage facility",
  "Adept at cracking people's neural interface networks",
  "Tanzanian 'sorcerer', skims identities to sell to the syndicates",
  "Apparently in a coma, mercenary accomplices cover for him",
  "Wrote a dementia triggering software routine, afraid to sell it",
  "No clue his entire life is monitored by company handlers",
  "Exceptional programmer, builds in exploits, fears discovery",
  "Uplifted chimpanzee, fiercely protected by militant ecoclade",
  "Child prodigy, invalid daughter of experimental neuroscientist",
  "Experienced darknet scout, haunted by malicious dataforms",
  "Synthetic, used as meatspace 'avatar' of another hacker",
  "Rogue marketing AI, curates online Museum of Dangerous Art",
  "Targeted for extraction by several major transnationals",
  "Ousted darling VRchitect, sells access to hidden labyrinths",
  "Former forensic system analyst, partial mindwipe",
  "Squeals to corporation if hired, well paid, makes excuses",
  "Unremarkable 18 year old triplet nerds, secret geniuses",
  "Rewired neural pathways push her intelligence beyond normal",
  "Intelligent hotel system, trades in guests' secrets, very wealthy",
  "Middle-aged housewife, was in debt, continues for the rush",
  "Linkjacker specialising in compromising interfaced gear",
  "Rogue nanite hive-mind, hiding in a hab stack's vent system",
  "Self-righteous ethical hacktivist, has to make political statement",
  "Information hygiene specialist, excels at covering any tracks",
  "Notorious LOLtroll, gleefully puts others in real danger",
  "Deals in downloadable skill apps and customised software",
  "Suffers Amazon War flashbacks, agoraphobic hoarder",
  "Runs distribution of dark servers, launders data and bitcoin",
  "Planning data heist, network map tattooed on missing person",
  "Uses amphetamines to gain edge, just fucking him up",
  "Compelled to swat soft targets, knows she shouldn't",
  "S. Korean professional gamers, transition to big time net crime",
  "Drug addicted Net Regulator, knows systems' weak points",
  "Manipulated by AIs, believes aliens have chosen her",
  "Traffic control AI, masquerades as a human teen with ASD"
];

export const gangAdj1 = [
  "Cortical", "Subway", "Radical", "Binary", "Fragile", "Hate", "Electric", "Mobile",
  "Endgame", "Bubblegum", "Biological", "Shaolin", "Chrome", "Polymer", "Rudeboy",
  "Terminal", "Shadow", "Subsonic", "Chemical", "Chosen", "Toxic", "Steel", "Waffen",
  "Cannibal", "Panzer", "Gun", "Disposable", "Iron", "Speedball", "AK",
  "Liquid", "Junky", "Instant", "Zone", "Sushi", "Lucifer's", "Remodelled",
  "Faceless", "Vampire", "Crosstown", "Aryan", "Spirit", "Nomad", "Hydraulic",
  "Fractal", "Brain", "Screaming", "Lucid", "Napalm", "Happy"
];

export const gangNoun = [
  "Dogs", "Assassins", "Dragons", "Prophets", "Machine", "Society", "Freaks", "Girls",
  "Militia", "Atrocity", "Impulse", "Rippers", "Savages", "Riot", "Apocalypse",
  "Storm", "Soldiers", "Cult", "Loas", "Kidz", "Ghosts", "Church", "Technicals",
  "Clowns", "Fists", "Sharks", "Boys", "Maniacs", "Ultimates", "Legends",
  "Killaz", "Bullets", "Revolvers", "Bosses", "Thugs", "Babies", "Army",
  "Fanatics", "Daddies", "Chaos", "Hammer", "Method", "Clan", "Terror",
  "State", "Wasters", "Shards", "Moderns", "Harvest", "Losers"
];

export const gangType = [
  "Combat Gang", "Skaters", "Martial Artists", "Tech-Jackers", "Party Artistes",
  "Street Fighters", "Wireheads", "Go-Gang", "Boosters", "Combat Gang",
  "Boosters", "Martial Artists", "Chromers", "Boosters", "Combat Gang",
  "Chromers", "Combat Gang", "Party Artistes", "Cultists", "Combat Gang",
  "Boosters", "Chromers", "Moto-Cultists", "Pranksters", "Street Fighters",
  "Street Kids", "Nihilists", "Chromers", "Skaters", "Guardians",
  "Boosters", "Street Kids", "Combat Gang", "Guardians", "Street Fighters",
  "Nihilists", "Boosters", "Nihilists", "Skaters", "Go-Gang",
  "Policlub", "Guardians", "Go-Gang", "Chromers", "Policlub",
  "Nihilists", "Boosters", "Pranksters", "Chromers", "Party Artistes"
];

export const gangActivity = [
  "Picking a fight with someone they don't like — store owner, passer by, hab resident",
  "Marking the local area with gang tags — AR, spray paint, pens, animatic stickers",
  "Shaking down the locals with threats and intimidation — for money, booze, sex",
  "Raving to their favourite music/propaganda, extremely loudly",
  "Getting wasted, or psyching themselves up before a fight or a raid",
  "Facing down cops/security/another gang — as far as they can get without a fight",
  "Participating in tests of skill or daring among themselves",
  "Making a deliberate attempt at being visible, strengthening presence in the area",
  "Engaged in their main biz, or negotiating employment with another party",
  "Any combination of the above"
];

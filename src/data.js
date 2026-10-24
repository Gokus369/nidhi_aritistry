/* ===== Edit your contact details and content here ===== */
export const CONFIG = {
  phone: "+917025857400", // studio number, digits only with country code
  phoneDisplay: "+91 70258 57400",
  whatsappMessage: "Hi Nidhi Artistry! I'd like to enquire about a shoot.",
  instagram: "#",
  youtube: "#",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Nidhi+Artistry+Krishnapuram+Alappuzha",
};

export const waUrl = `https://wa.me/${CONFIG.phone.replace(/\D/g, "")}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
export const telUrl = `tel:${CONFIG.phone}`;

// Placeholder stock photos — swap for the studio's own images (e.g. "/photos/wedding-1.jpg" in /public).
export const img = (id, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}&auto=format&fit=crop`;

export const HERO_IMAGE = img("1604017011826-d3b4c23f8914", 2000);

export const MANIFESTO = [
  "We", "are", "Nidhi", "Artistry,", "a", "photography", "and", "film", "studio", "from", "Alappuzha.",
  "From", "a", "newborn's", "first", { it: "yawn" }, "to", "the", "last", "dance", "of", "a", "wedding", "night,",
  "we", "tell", "honest", "stories", "in", { it: "light," }, "texture", "and", "feeling,", "made", "to", "be",
  "held", "for", "a", "lifetime.",
];

export const SERVICES = [
  {
    name: "Wedding Photo & Video", short: "Candid, traditional & cinematic films",
    title: "Wedding", accent: "Photo & Video",
    text: "Candid and traditional coverage of your big day, from haldi to reception. Cinematic films, highlight reels and handcrafted albums.",
    tags: ["Candid", "Cinematic film", "Pre-wedding", "Albums"],
    image: img("1606216794074-735e91aa2c92"), alt: "Wedding couple",
  },
  {
    name: "Newborn & Maternity", short: "Gentle sessions in themed studio sets",
    title: "Newborn &", accent: "Maternity",
    text: "Gentle, safe newborn sessions in our themed studio, plus maternity portraits that celebrate the wait. Props and outfits provided.",
    tags: ["Newborn", "Maternity", "Baby milestones", "Themed sets"],
    image: img("1544126592-807ade215a0b"), alt: "Newborn baby portrait",
  },
  {
    name: "Commercial Ads", short: "Product shoots, brand films & reels",
    title: "Commercial", accent: "& Ads",
    text: "Product photography, brand films and social-first ad content that sells, from concept and storyboard to the final cut.",
    tags: ["Product", "Brand films", "Reels", "Catalogue"],
    image: img("1542038784456-1ea8e935640e"), alt: "Photographer with camera",
  },
  {
    name: "Podcast", short: "Multi-cam video, clean audio & editing",
    title: "Podcast", accent: "Production",
    text: "A ready-to-record media studio with multi-camera video, clean audio and editing, so you only have to bring the conversation.",
    tags: ["Multi-cam", "Audio", "Editing", "Shorts"],
    image: img("1590602847861-f357a9332bbc"), alt: "Podcast microphone",
  },
  {
    name: "All Kinds of Events", short: "Birthdays, baptisms, corporate & more",
    title: "All Kinds", accent: "of Events",
    text: "Birthdays, baptisms, engagements, corporate gatherings and cultural programmes, covered end to end in photo and video.",
    tags: ["Birthdays", "Baptism", "Corporate", "Live coverage"],
    image: img("1505236858219-8359eb29e329"), alt: "Event coverage",
  },
];

export const MARQUEE = ["Weddings", "Newborns", "Maternity", "Commercials", "Podcasts", "Events"];

// Three columns; `shape`: t = 3/4, s = square, w = 4/3, xt = 2/3.
export const GALLERY = [
  { items: [
    { id: "1519741497674-611481863552", shape: "t", label: "Wedding" },
    { id: "1555252333-9f8e92e65df9", shape: "s", label: "Newborn" },
    { id: "1537633552985-df8429e8048b", shape: "xt", label: "Portraits" },
  ] },
  { items: [
    { id: "1460978812857-470ed1c77af0", shape: "w", label: "Wedding" },
    { id: "1515934751635-c81c6bc9a2d8", shape: "xt", label: "Details" },
    { id: "1519689680058-324335c77eba", shape: "s", label: "Baby" },
  ] },
  { items: [
    { id: "1511285560929-80b456fea0bc", shape: "s", label: "Ceremony" },
    { id: "1492725764893-90b379c2b6e7", shape: "t", label: "Motherhood" },
    { id: "1478737270239-2f02b77fc618", shape: "w", label: "Podcast" },
  ] },
];

export const STATS = [
  { value: 4.9, dec: 1, sup: "★", label: "Average rating" },
  { value: 77, sup: "+", label: "Client reviews" },
  { value: 5, label: "Specialities" },
  { value: 3, label: "Studio spaces for hire" },
];

export const STUDIO_IMAGE = img("1566004100631-35d015d6a491");

export const RENTALS = [
  { title: "Professional Studio Rental", text: "Fully lit studio with backdrops and gear" },
  { title: "Media Studio", text: "Podcasts, interviews and video content" },
  { title: "Studio Space Rental", text: "Flexible space for shoots and workshops" },
];

export const STEPS = [
  { n: "i.", title: "Connect", text: "Tell us about your day, your baby or your brand on WhatsApp or a call." },
  { n: "ii.", title: "Plan", text: "We shape the mood, locations, outfits and shot list together." },
  { n: "iii.", title: "Create", text: "A relaxed shoot where you stay present and we handle the light." },
  { n: "iv.", title: "Deliver", text: "Carefully edited photos, films and albums, made to last." },
];

export const CONTACT_IMAGE = img("1532712938310-34cb3982ef74", 2000, 70);

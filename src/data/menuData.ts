// ===== ADMIN: Edit prices, names, and images here =====
// ===== ADMIN: Change WhatsApp number below =====
export const OWNER_WHATSAPP = "919876543210"; // Change this to owner's number

import chicken65 from "@/assets/chicken-65.jpg";
import chickenLollipop from "@/assets/chicken-lollipop.jpg";
import chickenGravy from "@/assets/chicken-gravy.jpg";
import chickenUppuKari from "@/assets/chicken-uppu-kari.jpg";
import chickenChettinad from "@/assets/chicken-chettinad.jpg";
import chickenKabsa from "@/assets/chicken-kabsa.jpg";
import muttonSukka from "@/assets/mutton-sukka.jpg";
import muttonGravy from "@/assets/mutton-gravy.jpg";
import muttonChops from "@/assets/mutton-chops.jpg";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import fishFry from "@/assets/fish-fry.jpg";
import fishGravy from "@/assets/fish-gravy.jpg";
import crabGravy from "@/assets/crab-gravy.jpg";
import omelette from "@/assets/omelette.jpg";
import eggFry from "@/assets/egg-fry.jpg";
import eggMasala from "@/assets/egg-masala.jpg";
import quailChilli from "@/assets/quail-chilli.jpg";
import quailPepper from "@/assets/quail-pepper.jpg";
import quailGravy from "@/assets/quail-gravy.jpg";
import vegNoodles from "@/assets/veg-noodles.jpg";
import vegRice from "@/assets/veg-rice.jpg";
import paneerMasala from "@/assets/paneer-masala.jpg";
import fruitCucumber from "@/assets/fruit-cucumber.jpg";
import fruitGuava from "@/assets/fruit-guava.jpg";
import fruitWatermelon from "@/assets/fruit-watermelon.jpg";
import fruitMango from "@/assets/fruit-mango.jpg";
import fruitBanana from "@/assets/fruit-banana.jpg";
import fruitPomegranate from "@/assets/fruit-pomegranate.jpg";
import fruitSapota from "@/assets/fruit-sapota.jpg";
import fruitApple from "@/assets/fruit-apple.jpg";
import fruitGrapes from "@/assets/fruit-grapes.jpg";
import fruitPapaya from "@/assets/fruit-papaya.jpg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "chicken", name: "சிக்கன் வகைகள்", icon: "🍗" },
  { id: "fish", name: "மீன் வகைகள்", icon: "🐟" },
  { id: "egg", name: "முட்டை வகைகள்", icon: "🥚" },
  { id: "quail", name: "காடை வகைகள்", icon: "🐦" },
  { id: "veg", name: "வெஜ் வகைகள்", icon: "🥗" },
  { id: "fruits", name: "பழ வகைகள்", icon: "🍎" },
];

export const menuItems: MenuItem[] = [
  // சிக்கன் வகைகள்
  { id: "c1", name: "சிக்கன் 65", price: 120, image: chicken65, category: "chicken" },
  { id: "c2", name: "சிக்கன் லாலிபாப்", price: 140, image: chickenLollipop, category: "chicken" },
  { id: "c3", name: "சிக்கன் கிரேவி", price: 150, image: chickenGravy, category: "chicken" },
  { id: "c4", name: "சிக்கன் உப்பு கறி", price: 160, image: chickenUppuKari, category: "chicken" },
  { id: "c5", name: "சிக்கன் செட்டிநாடு", price: 170, image: chickenChettinad, category: "chicken" },
  { id: "c6", name: "சிக்கன் கப்ஸா", price: 180, image: chickenKabsa, category: "chicken" },
  // மீன் வகைகள்
  { id: "f1", name: "மீன் வறுவல்", price: 140, image: fishFry, category: "fish" },
  { id: "f2", name: "மீன் கிரேவி", price: 150, image: fishGravy, category: "fish" },
  { id: "f3", name: "நண்டு கிரேவி", price: 200, image: crabGravy, category: "fish" },
  // முட்டை வகைகள்
  { id: "e1", name: "ஆம்லெட்", price: 40, image: omelette, category: "egg" },
  { id: "e2", name: "முட்டை பொறியல்", price: 60, image: eggFry, category: "egg" },
  { id: "e3", name: "முட்டை மசாலா", price: 70, image: eggMasala, category: "egg" },
  // காடை வகைகள்
  { id: "q1", name: "காடை சில்லி", price: 120, image: quailChilli, category: "quail" },
  { id: "q2", name: "காடை பெப்பர்", price: 130, image: quailPepper, category: "quail" },
  { id: "q3", name: "காடை கிரேவி", price: 140, image: quailGravy, category: "quail" },
  // வெஜ் வகைகள்
  { id: "v1", name: "வெஜ் நூடுல்ஸ்", price: 80, image: vegNoodles, category: "veg" },
  { id: "v2", name: "வெஜ் ரைஸ்", price: 90, image: vegRice, category: "veg" },
  { id: "v3", name: "பன்னீர் பட்டர் மசாலா", price: 120, image: paneerMasala, category: "veg" },
  // பழ வகைகள்
  { id: "fr1", name: "வெள்ளரி", price: 30, image: fruitCucumber, category: "fruits" },
  { id: "fr2", name: "கொய்யா", price: 40, image: fruitGuava, category: "fruits" },
  { id: "fr3", name: "தர்பூசணி", price: 60, image: fruitWatermelon, category: "fruits" },
  { id: "fr4", name: "மாம்பழம்", price: 80, image: fruitMango, category: "fruits" },
  { id: "fr5", name: "வாழைப்பழம்", price: 30, image: fruitBanana, category: "fruits" },
  { id: "fr6", name: "மாதுளை", price: 90, image: fruitPomegranate, category: "fruits" },
  { id: "fr7", name: "சப்போட்டா", price: 50, image: fruitSapota, category: "fruits" },
  { id: "fr8", name: "ஆப்பிள்", price: 100, image: fruitApple, category: "fruits" },
  { id: "fr9", name: "திராட்சை", price: 70, image: fruitGrapes, category: "fruits" },
  { id: "fr10", name: "பப்பாளி", price: 60, image: fruitPapaya, category: "fruits" },
];

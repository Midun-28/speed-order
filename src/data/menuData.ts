// ===== ADMIN: Edit prices, names, and images here =====
// ===== ADMIN: Change WhatsApp number below =====
export const OWNER_WHATSAPP = "919876543210"; // Change this to owner's number

// Chicken images
import chicken65 from "@/assets/chicken-65.jpg";
import chickenLollipop from "@/assets/chicken-lollipop.jpg";
import chickenGravy from "@/assets/chicken-gravy.jpg";
import chickenUppuKari from "@/assets/chicken-uppu-kari.jpg";
import chickenChettinad from "@/assets/chicken-chettinad.jpg";
import chilliChickenBone from "@/assets/chilli-chicken-bone.jpg";
import chilliChickenBoneless from "@/assets/chilli-chicken-boneless.jpg";
import pepperChicken from "@/assets/pepper-chicken.jpg";
import garlicChicken from "@/assets/garlic-chicken.jpg";
import chickenManchurian from "@/assets/chicken-manchurian.jpg";
import chickenPallipalayam from "@/assets/chicken-pallipalayam.jpg";
// Quail images
import quailChilli from "@/assets/quail-chilli.jpg";
import quailPepper from "@/assets/quail-pepper.jpg";
import quailGravy from "@/assets/quail-gravy.jpg";
import quailRoast from "@/assets/quail-roast.jpg";
// Egg images
import halfBoil from "@/assets/half-boil.jpg";
import omelette from "@/assets/omelette.jpg";
import eggFry from "@/assets/egg-fry.jpg";
import eggMasala from "@/assets/egg-masala.jpg";
import eggChilli from "@/assets/egg-chilli.jpg";
// Fish images
import fishFry from "@/assets/fish-fry.jpg";
import sardineFry from "@/assets/sardine-fry.jpg";
import fishEggPodimas from "@/assets/fish-egg-podimas.jpg";
import crabGravy from "@/assets/crab-gravy.jpg";
// Veg images
import mushroomChilli from "@/assets/mushroom-chilli.jpg";
import mushroomManchurian from "@/assets/mushroom-manchurian.jpg";
import cauliflowerManchurian from "@/assets/cauliflower-manchurian.jpg";
import onionPakoda from "@/assets/onion-pakoda.jpg";
// Rice & Sides images
import vegRice from "@/assets/veg-rice.jpg";
import vegNoodles from "@/assets/veg-noodles.jpg";
import eggRice from "@/assets/egg-rice.jpg";
import eggNoodles from "@/assets/egg-noodles.jpg";
import chickenRice from "@/assets/chicken-rice.jpg";
import chickenNoodles from "@/assets/chicken-noodles.jpg";
import mushroomRice from "@/assets/mushroom-rice.jpg";
import mushroomNoodles from "@/assets/mushroom-noodles.jpg";
import naanSet from "@/assets/naan-set.jpg";
import butterNaan from "@/assets/butter-naan.jpg";
import chapatiSet from "@/assets/chapati-set.jpg";
import kavuni from "@/assets/kavuni.jpg";
import plateMasala from "@/assets/plate-masala.jpg";
import sabudana from "@/assets/sabudana.jpg";
// Fruit images
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
  { id: "quail", name: "காடை வகைகள்", icon: "🐦" },
  { id: "egg", name: "முட்டை வகைகள்", icon: "🥚" },
  { id: "fish", name: "மீன் வகைகள்", icon: "🐟" },
  { id: "veg", name: "வெஜ் வகைகள்", icon: "🥗" },
  { id: "rice", name: "சாரீஸ் வகைகள்", icon: "🍚" },
  { id: "fruits", name: "பழ வகைகள்", icon: "🍎" },
];

export const menuItems: MenuItem[] = [
  // ===== சிக்கன் வகைகள் =====
  { id: "c1", name: "சில்லி சிக்கன் (போன்)", price: 150, image: chilliChickenBone, category: "chicken" },
  { id: "c2", name: "சில்லி சிக்கன் சபீரை", price: 160, image: chickenGravy, category: "chicken" },
  { id: "c3", name: "சிக்கன் சபீரை", price: 150, image: chickenGravy, category: "chicken" },
  { id: "c4", name: "சிக்கன் உப்பு கறி", price: 160, image: chickenUppuKari, category: "chicken" },
  { id: "c5", name: "சிக்கன் லாலிபாப்", price: 140, image: chickenLollipop, category: "chicken" },
  { id: "c6", name: "சில்லி சிக்கன் (போன்லெஸ்)", price: 170, image: chilliChickenBoneless, category: "chicken" },
  { id: "c7", name: "பெப்பர் சிக்கன்", price: 160, image: pepperChicken, category: "chicken" },
  { id: "c8", name: "சிக்கன் சிந்தாமணி", price: 170, image: chicken65, category: "chicken" },
  { id: "c9", name: "சிக்கன் பள்ளிபாணையம்", price: 180, image: chickenPallipalayam, category: "chicken" },
  { id: "c10", name: "கார்லிக் சிக்கன்", price: 170, image: garlicChicken, category: "chicken" },
  { id: "c11", name: "சிக்கன் மஞ்சூரியன்", price: 160, image: chickenManchurian, category: "chicken" },
  { id: "c12", name: "சிக்கன் செட்டிநாடு", price: 170, image: chickenChettinad, category: "chicken" },

  // ===== காடை வகைகள் =====
  { id: "q1", name: "காடை சில்லி", price: 120, image: quailChilli, category: "quail" },
  { id: "q2", name: "காடை பெப்பர்", price: 130, image: quailPepper, category: "quail" },
  { id: "q3", name: "காடை சபீரை", price: 130, image: quailGravy, category: "quail" },
  { id: "q4", name: "காடை மசால்", price: 140, image: quailGravy, category: "quail" },
  { id: "q5", name: "காடை ரோஸ்ட்", price: 140, image: quailRoast, category: "quail" },

  // ===== முட்டை வகைகள் =====
  { id: "e1", name: "ஆஃப் பாயில்", price: 30, image: halfBoil, category: "egg" },
  { id: "e2", name: "ஆம்லெட்", price: 40, image: omelette, category: "egg" },
  { id: "e3", name: "ஆம்லெட் (டபுள்)", price: 70, image: omelette, category: "egg" },
  { id: "e4", name: "முட்டை பொறியல்", price: 60, image: eggFry, category: "egg" },
  { id: "e5", name: "முட்டை மாஸ்", price: 70, image: eggMasala, category: "egg" },
  { id: "e6", name: "முட்டை சில்லி", price: 80, image: eggChilli, category: "egg" },

  // ===== மீன் வகைகள் =====
  { id: "f1", name: "மத்தி மீன் (செட்)", price: 120, image: sardineFry, category: "fish" },
  { id: "f2", name: "மீன் பிரை", price: 140, image: fishFry, category: "fish" },
  { id: "f3", name: "மீன் முட்டை பொடிமாஸ்", price: 100, image: fishEggPodimas, category: "fish" },
  { id: "f4", name: "நண்டு கிரேவி", price: 200, image: crabGravy, category: "fish" },

  // ===== வெஜ் வகைகள் =====
  { id: "v1", name: "காளான் சில்லி", price: 100, image: mushroomChilli, category: "veg" },
  { id: "v2", name: "காளான் சபீரை", price: 100, image: mushroomChilli, category: "veg" },
  { id: "v3", name: "காளான் மஞ்சூரியன்", price: 110, image: mushroomManchurian, category: "veg" },
  { id: "v4", name: "காளிப்ளவர் சில்லி", price: 90, image: cauliflowerManchurian, category: "veg" },
  { id: "v5", name: "காளிப்ளவர் சபீரை", price: 90, image: cauliflowerManchurian, category: "veg" },
  { id: "v6", name: "காளிப்ளவர் மஞ்சூரியன்", price: 100, image: cauliflowerManchurian, category: "veg" },
  { id: "v7", name: "அனியன் பக்கோடா", price: 60, image: onionPakoda, category: "veg" },

  // ===== சாரீஸ் வகைகள் (Rice & Sides) =====
  { id: "r1", name: "வெஜ் ரைஸ்", price: 90, image: vegRice, category: "rice" },
  { id: "r2", name: "வெஜ் நூடுல்ஸ்", price: 80, image: vegNoodles, category: "rice" },
  { id: "r3", name: "எக் ரைஸ்", price: 100, image: eggRice, category: "rice" },
  { id: "r4", name: "எக் நூடுல்ஸ்", price: 100, image: eggNoodles, category: "rice" },
  { id: "r5", name: "சிக்கன் ரைஸ்", price: 130, image: chickenRice, category: "rice" },
  { id: "r6", name: "சிக்கன் நூடுல்ஸ்", price: 130, image: chickenNoodles, category: "rice" },
  { id: "r7", name: "காளான் ரைஸ்", price: 110, image: mushroomRice, category: "rice" },
  { id: "r8", name: "காளான் நூடுல்ஸ்", price: 110, image: mushroomNoodles, category: "rice" },
  { id: "r9", name: "நான் செட்", price: 80, image: naanSet, category: "rice" },
  { id: "r10", name: "பட்டர் நான் செட்", price: 100, image: butterNaan, category: "rice" },
  { id: "r11", name: "சப்பாத்தி செட்", price: 70, image: chapatiSet, category: "rice" },
  { id: "r12", name: "கவுனி", price: 60, image: kavuni, category: "rice" },
  { id: "r13", name: "ப்ளேட் மசாலா", price: 150, image: plateMasala, category: "rice" },
  { id: "r14", name: "சபூருல்ஸ் (தனி)", price: 40, image: sabudana, category: "rice" },
  { id: "r15", name: "சபூருல்ஸ் மிக்ஸ்", price: 60, image: sabudana, category: "rice" },

  // ===== பழ வகைகள் =====
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

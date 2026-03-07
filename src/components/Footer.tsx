import { OWNER_WHATSAPP } from "@/data/menuData";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-8 mt-12">
    <div className="container text-center space-y-3">
      <h2 className="text-2xl font-extrabold">Speed</h2>
      <p className="text-primary-foreground/80 text-sm font-medium italic">"Order Fast. Eat Fresh."</p>
      <a
        href={`https://wa.me/${OWNER_WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:brightness-95 active:scale-95"
      >
        <span>📱</span>
        WhatsApp Contact
      </a>
    </div>
  </footer>
);

export default Footer;

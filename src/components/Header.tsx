import { Search } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => (
  <header className="sticky top-0 z-40 glass border-b border-border">
    <div className="container py-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-2xl font-extrabold text-primary tracking-tight">Speed</h1>
          <p className="text-xs text-muted-foreground font-medium">விரைவான உணவு ஆர்டர்</p>
        </div>
        <span className="text-3xl">⚡</span>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="உணவு தேடுங்கள்..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg bg-secondary pl-10 pr-4 py-2.5 text-sm outline-none ring-1 ring-border focus:ring-2 focus:ring-primary transition-all placeholder:text-muted-foreground"
        />
      </div>
    </div>
  </header>
);

export default Header;

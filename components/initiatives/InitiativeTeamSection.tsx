"use client";

import { useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import { 
  Award, 
  Phone, 
  MessageCircle, 
  LayoutGrid, 
  Table as TableIcon, 
  Search, 
  User, 
  Check, 
  Copy,
  Users,
  Mail,
  ChevronDown
} from "lucide-react";

export type Coordinator = {
  role: string;
  name: string;
  phone: string;
  photo?: StaticImageData | string;
  description?: string;
};

const hasValidPhoto = (photo?: StaticImageData | string): boolean => {
  if (!photo) return false;
  if (typeof photo === "string") return photo.trim().length > 0;
  if (typeof photo === "object" && "src" in photo) {
    return typeof photo.src === "string" && photo.src.trim().length > 0;
  }
  return true;
};

interface InitiativeTeamSectionProps {
  coordinators: Coordinator[];
}

export default function InitiativeTeamSection({ coordinators }: InitiativeTeamSectionProps) {
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [expandedBios, setExpandedBios] = useState<Record<string, boolean>>({});

  const toggleBio = (key: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const cleanPhoneForTel = (phone: string) => phone.replace(/[^+\d]/g, "");
  const cleanPhoneForWa = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    return digits.startsWith("91") ? digits : `91${digits}`;
  };

  const handleCopy = (phone: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const filteredCoordinators = useMemo(() => {
    // Sort team members: members with images first, members with no image moved to the end.
    const sorted = [...coordinators].sort((a, b) => {
      const hasPhotoA = hasValidPhoto(a.photo);
      const hasPhotoB = hasValidPhoto(b.photo);
      if (hasPhotoA === hasPhotoB) return 0;
      return hasPhotoA ? -1 : 1;
    });

    if (!searchQuery.trim()) return sorted;
    const q = searchQuery.toLowerCase().trim();
    return sorted.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.phone.toLowerCase().includes(q) ||
        (c.description && c.description.toLowerCase().includes(q))
    );
  }, [coordinators, searchQuery]);

  return (
    <div className="mt-8 bg-muted/20 rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-border">
      {/* SECTION HEADER & TOOLBAR */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <Award className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-accent font-bold">
              Team Directory
            </span>
            <span className="inline-flex items-center gap-1 bg-[#265B27]/10 text-[#265B27] px-2.5 py-0.5 rounded-full text-xs font-bold">
              <Users className="h-3 w-3" />
              {coordinators.length} Members
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            Campaign Leadership & Team
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
            Reach out directly to regional coordinators, team leads, and voluntary emergency responders.
          </p>
        </div>

        {/* CONTROLS: SEARCH + VIEW TOGGLE */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
          {/* Search Box */}
          <div className="relative w-full sm:w-auto min-w-0 sm:min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search member, role..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-background border border-border rounded-xl text-xs sm:text-sm font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
            />
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center justify-center bg-background border border-border p-1 rounded-xl shadow-xs self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Card Grid View"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
              <span>Cards</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                viewMode === "table"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              title="Directory Table View"
            >
              <TableIcon className="h-3.5 w-3.5" />
              <span>Table</span>
            </button>
          </div>
        </div>
      </div>

      {/* EMPTY SEARCH STATE */}
      {filteredCoordinators.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-sm font-medium">
            No team members found matching "{searchQuery}".
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-3 text-xs font-bold text-primary hover:underline"
          >
            Clear Search Filter
          </button>
        </div>
      )}

      {/* 1. GRID / CARD VIEW (Always 4 Columns on desktop) */}
      {viewMode === "grid" && filteredCoordinators.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCoordinators.map((c, i) => {
            const telHref = c.phone ? `tel:${cleanPhoneForTel(c.phone)}` : null;
            const waHref = c.phone ? `https://wa.me/${cleanPhoneForWa(c.phone)}` : null;
            const isLongDesc = !!(c.description && c.description.length > 120);
            const isExpanded = !!expandedBios[c.name];

            return (
              <div
                key={c.name}
                className="bg-card rounded-2xl border border-border shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Photo / Avatar Header - 1:1 square to show maximum 600x600 photo */}
                <div className="relative aspect-square w-full overflow-hidden bg-muted/60">
                  {c.photo ? (
                    <Image
                      src={c.photo}
                      alt={c.name}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/15 via-muted to-muted/80 flex flex-col items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display font-bold text-xl shadow-inner">
                        {c.name
                          .split(" ")
                          .filter(Boolean)
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Role Tag after image */}
                    <div className="mb-2.5">
                      <span className="inline-block bg-[#265B27] text-white px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider rounded-md shadow-xs">
                        {c.role}
                      </span>
                    </div>

                    <h4 className="font-display text-base sm:text-lg font-bold uppercase text-foreground tracking-tight leading-tight mb-1.5">
                      {c.name}
                    </h4>

                    {c.description && (
                      <div className="mb-3.5">
                        <div
                          className={`text-[12px] text-foreground/75 leading-relaxed transition-all duration-300 ${
                            isExpanded
                              ? "max-h-52 overflow-y-auto pr-1 border-l-2 border-primary/30 pl-2 text-foreground/90"
                              : "line-clamp-3"
                          }`}
                        >
                          {c.description}
                        </div>

                        {isLongDesc && (
                          <button
                            type="button"
                            onClick={() => toggleBio(c.name)}
                            className="mt-1 text-[11px] font-bold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-0.5 cursor-pointer"
                          >
                            <span>{isExpanded ? "Show less" : "More details"}</span>
                            <ChevronDown
                              className={`h-3 w-3 transition-transform duration-200 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Contact section */}
                  <div className="pt-3 border-t border-border/60 mt-auto space-y-2">
                    {/* Member Mobile & Action Icons in one row */}
                    {c.phone && (
                      <div className="flex items-center justify-between gap-1 bg-muted/40 px-2 py-1.5 rounded-xl border border-border/50">
                        {/* Mobile Number - Always full, never truncated */}
                        <a
                          href={telHref || undefined}
                          className="text-[11px] sm:text-[12px] font-bold text-foreground hover:text-primary transition whitespace-nowrap tracking-tight shrink-0 pl-0.5"
                          title={`Call ${c.phone}`}
                        >
                          {c.phone}
                        </a>

                        {/* Action Icons: Call, WhatsApp, Copy */}
                        <div className="flex items-center gap-0.5 shrink-0">
                          {telHref && (
                            <a
                              href={telHref}
                              className="h-6 w-6 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition shadow-2xs"
                              title={`Call ${c.name}`}
                              aria-label={`Call ${c.name}`}
                            >
                              <Phone className="h-3 w-3" />
                            </a>
                          )}

                          {waHref && (
                            <a
                              href={waHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="h-6 w-6 rounded-md bg-[#25D366]/15 text-[#1b7a3e] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition shadow-2xs"
                              title={`WhatsApp ${c.name}`}
                              aria-label={`WhatsApp ${c.name}`}
                            >
                              <MessageCircle className="h-3 w-3" />
                            </a>
                          )}

                          <button
                            type="button"
                            onClick={(e) => handleCopy(c.phone, e)}
                            className="h-6 w-6 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/80 flex items-center justify-center transition cursor-pointer"
                            title="Copy number"
                            aria-label="Copy number"
                          >
                            {copiedPhone === c.phone ? (
                              <Check className="h-3 w-3 text-green-600" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Official Contact Info at Member Bottom */}
                    <div className="bg-background/80 rounded-xl p-2 border border-border/40 text-[11px] space-y-1">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Phone className="h-3 w-3 text-primary shrink-0" />
                        <span className="text-[10px] uppercase font-semibold text-muted-foreground/80">Official:</span>
                        <a href="tel:+919056333759" className="font-bold text-foreground/85 hover:text-primary transition whitespace-nowrap">
                          +91-90563-33759
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Mail className="h-3 w-3 text-primary shrink-0" />
                        <a href="mailto:info@sarvsewabharat.org" className="font-medium text-foreground/85 hover:text-primary transition truncate">
                          info@sarvsewabharat.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 2. DIRECTORY TABLE VIEW */}
      {viewMode === "table" && filteredCoordinators.length > 0 && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                  <th className="py-3.5 px-4 sm:px-6">Member</th>
                  <th className="py-3.5 px-4">Role / Designation</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Responsibility</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Quick Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filteredCoordinators.map((c) => {
                  const telHref = c.phone ? `tel:${cleanPhoneForTel(c.phone)}` : null;
                  const waHref = c.phone ? `https://wa.me/${cleanPhoneForWa(c.phone)}` : null;
                  const isLongDesc = !!(c.description && c.description.length > 120);
                  const isExpanded = !!expandedBios[c.name];

                  return (
                    <tr
                      key={c.name}
                      className="hover:bg-muted/30 transition-colors group"
                    >
                      {/* Member Info & Photo */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="relative h-11 w-11 shrink-0 rounded-xl overflow-hidden bg-muted border border-border/60">
                            {c.photo ? (
                              <Image
                                src={c.photo}
                                alt={c.name}
                                fill
                                className="object-cover object-top"
                              />
                            ) : (
                              <div className="h-full w-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                {c.name
                                  .split(" ")
                                  .filter(Boolean)
                                  .map((n) => n[0])
                                  .slice(0, 2)
                                  .join("")}
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-display font-bold uppercase text-foreground tracking-tight text-sm sm:text-base">
                              {c.name}
                            </div>
                            <div className="text-xs text-muted-foreground font-mono sm:hidden mt-0.5">
                              {c.phone}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <span className="inline-block bg-[#265B27] text-white px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-xs">
                          {c.role}
                        </span>
                      </td>

                      {/* Responsibility / Description */}
                      <td className="py-4 px-4 hidden md:table-cell max-w-xs text-xs text-foreground/75 leading-relaxed">
                        {c.description ? (
                          <div>
                            <div
                              className={`${
                                isExpanded ? "max-h-48 overflow-y-auto pr-1" : "line-clamp-2"
                              }`}
                            >
                              {c.description}
                            </div>
                            {isLongDesc && (
                              <button
                                type="button"
                                onClick={() => toggleBio(c.name)}
                                className="mt-1 text-[10px] font-bold text-primary hover:underline inline-flex items-center gap-0.5 cursor-pointer"
                              >
                                <span>{isExpanded ? "Less" : "More"}</span>
                                <ChevronDown
                                  className={`h-2.5 w-2.5 transition-transform duration-200 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>
                        ) : (
                          "Active community coordinator dedicated to grassroots support."
                        )}
                      </td>

                      {/* Direct Actions & Official Info */}
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                        <div className="flex flex-col items-end gap-1.5">
                          {c.phone ? (
                            <div className="flex items-center justify-end gap-2">
                              <a
                                href={telHref || undefined}
                                className="text-xs font-mono font-bold text-foreground hover:text-primary transition mr-1"
                              >
                                {c.phone}
                              </a>

                              {telHref && (
                                <a
                                  href={telHref}
                                  className="h-7 w-7 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition"
                                  title={`Call ${c.name}`}
                                >
                                  <Phone className="h-3.5 w-3.5" />
                                </a>
                              )}

                              {waHref && (
                                <a
                                  href={waHref}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="h-7 w-7 rounded-lg bg-[#25D366]/15 text-[#1b7a3e] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition"
                                  title={`WhatsApp ${c.name}`}
                                >
                                  <MessageCircle className="h-3.5 w-3.5" />
                                </a>
                              )}

                              <button
                                type="button"
                                onClick={(e) => handleCopy(c.phone, e)}
                                className="h-7 w-7 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted flex items-center justify-center transition cursor-pointer"
                                title="Copy number"
                              >
                                {copiedPhone === c.phone ? (
                                  <Check className="h-3.5 w-3.5 text-green-600" />
                                ) : (
                                  <Copy className="h-3.5 w-3.5" />
                                )}
                              </button>
                            </div>
                          ) : (
                            <span className="text-xs text-muted-foreground">—</span>
                          )}

                          <div className="text-[10px] text-muted-foreground font-mono flex items-center gap-2">
                            <span>Official: +91-90563-33759</span>
                            <span>•</span>
                            <a href="mailto:info@sarvsewabharat.org" className="hover:text-primary hover:underline">
                              info@sarvsewabharat.org
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

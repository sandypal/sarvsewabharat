import { Building2, CreditCard } from "lucide-react";

export default function BankInfoCard() {
  return (
    <div className="rounded-3xl bg-card border border-border shadow-elegant overflow-hidden mt-8">
      <div className="bg-muted/50 p-5 border-b border-border flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
          <Building2 className="h-4 w-4 text-primary" />
        </div>
        <h3 className="font-bold text-foreground">Offline Donations</h3>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-bold">Account Name</div>
          <div className="mt-1 font-semibold text-foreground">SARV SEWA SASHKTIKARN SANGTHAN</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-bold">Bank Name</div>
          <div className="mt-1 font-semibold text-foreground">Au Small Finance Bank</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-bold">Account Number</div>
          <div className="mt-1 font-mono text-sm font-semibold text-foreground bg-muted px-2 py-1 rounded inline-block">1821239219918931</div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground font-bold">IFSC Code</div>
          <div className="mt-1 font-mono text-sm font-semibold text-foreground bg-muted px-2 py-1 rounded inline-block">AUBL000239</div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { CheckCircle, ShieldCheck, Trophy, UploadCloud, Users } from "lucide-react";

// Team Options
const TEAM_OPTIONS = [
  "Chandigarh Challengers",
  "Punjab Panthers",
  "Haryana Hurricanes",
  "Delhi Daredevils",
  "Mumbai Meteors",
  "Bangalore Blasters",
  "Chennai Champions",
  "Kolkata Knights",
  "Rajasthan Royals",
  "Gujarat Giants",
  "Hyderabad Heroes",
  "Lucknow Legends",
  "Pune Pioneers",
  "Indore Invincibles",
  "Goa Gladiators",
  "Kochi Kings"
];

const ROLES = [
  "Batsman",
  "Bowler",
  "Batting Allrounder",
  "Bowling Allrounder",
  "Wicket Keeper"
];

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const SIZES = ["S", "M", "L", "XL", "XXL"];

type PlayerData = {
  id: number;
  name: string;
  mobile: string;
  email: string;
  age: string;
  bloodGroup: string;
  tshirtSize: string;
  lowerSize: string;
  role: string;
  idCard: File | null;
  isCaptain: boolean;
  isViceCaptain: boolean;
};

export default function OperationSindoorRegistration() {
  const [teamName, setTeamName] = useState(TEAM_OPTIONS[0]);
  const [players, setPlayers] = useState<PlayerData[]>(
    Array.from({ length: 12 }).map((_, i) => ({
      id: i + 1,
      name: "",
      mobile: "",
      email: "",
      age: "",
      bloodGroup: "",
      tshirtSize: "",
      lowerSize: "",
      role: "",
      idCard: null,
      isCaptain: i === 0, // Default first player to captain
      isViceCaptain: i === 1, // Default second to VC
    }))
  );

  // Handlers for Captain / VC exclusivity
  const handleCaptainChange = (index: number) => {
    setPlayers((prev) =>
      prev.map((p, i) => ({
        ...p,
        isCaptain: i === index,
        isViceCaptain: i === index ? false : p.isViceCaptain, // Remove VC if making Captain
      }))
    );
  };

  const handleViceCaptainChange = (index: number) => {
    setPlayers((prev) =>
      prev.map((p, i) => ({
        ...p,
        isViceCaptain: i === index,
        isCaptain: i === index ? false : p.isCaptain, // Remove Captain if making VC
      }))
    );
  };

  const updatePlayer = (index: number, field: keyof PlayerData, value: any) => {
    setPlayers((prev) =>
      prev.map((p, i) => (i === index ? { ...p, [field]: value } : p))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Team Name:", teamName);
    console.log("Players:", players);
    alert("Registration Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6 text-center z-10 text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] shadow-sm mb-6">
            <Trophy className="h-4 w-4" /> Global Event
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-5xl mx-auto">
            Operation Sindoor Team Registration
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/85 leading-relaxed font-medium">
            Register your 12-player squad for the biggest community cricket tournament. Enter details, upload IDs, and prepare for glory.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="mx-auto max-w-[1400px] px-4 relative z-20 -mt-20 lg:-mt-28">
        <div className="rounded-[2rem] bg-card border border-border shadow-2xl p-6 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* Team Selection Section */}
            <div>
              <div className="flex items-center gap-3 border-b pb-4 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl font-bold">1. Select Your Team</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {TEAM_OPTIONS.map((team) => (
                  <label
                    key={team}
                    className={`cursor-pointer rounded-xl border-2 p-4 text-sm font-semibold transition-all duration-200 flex items-center justify-between ${
                      teamName === team
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-border hover:border-primary/40 bg-background"
                    }`}
                  >
                    <span>{team}</span>
                    <input
                      type="radio"
                      name="teamName"
                      value={team}
                      checked={teamName === team}
                      onChange={(e) => setTeamName(e.target.value)}
                      className="w-4 h-4 text-primary bg-background border-border focus:ring-primary"
                    />
                  </label>
                ))}
              </div>
            </div>

            {/* Players Table Section */}
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-primary" />
                  <h2 className="font-display text-2xl font-bold">2. Squad Details (12 Players)</h2>
                </div>
                <div className="hidden md:flex text-sm font-semibold text-muted-foreground gap-4">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Captain (C)</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Vice Captain (VC)</span>
                </div>
              </div>
              
              <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                <table className="w-full text-left text-sm whitespace-nowrap min-w-[1700px]">
                  <thead className="bg-muted/50 font-bold uppercase tracking-wider text-xs text-muted-foreground">
                    <tr>
                      <th className="p-4 border-b">#</th>
                      <th className="p-4 border-b min-w-[200px]">Player Name</th>
                      <th className="p-4 border-b min-w-[150px]">Mobile</th>
                      <th className="p-4 border-b min-w-[200px]">Email</th>
                      <th className="p-4 border-b w-24">Age</th>
                      <th className="p-4 border-b w-28">Blood Grp</th>
                      <th className="p-4 border-b min-w-[180px]">Role</th>
                      <th className="p-4 border-b">C / VC</th>
                      <th className="p-4 border-b min-w-[100px]">T-Shirt</th>
                      <th className="p-4 border-b min-w-[100px]">Lower</th>
                      <th className="p-4 border-b min-w-[150px]">Student ID (Upload)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {players.map((player, index) => (
                      <tr key={player.id} className="hover:bg-muted/20 transition-colors">
                        <td className="p-4 font-bold text-muted-foreground">{player.id}</td>
                        <td className="p-4">
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={player.name}
                            onChange={(e) => updatePlayer(index, "name", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="tel"
                            required
                            placeholder="Mobile No."
                            value={player.mobile}
                            onChange={(e) => updatePlayer(index, "mobile", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="email"
                            required
                            placeholder="Email Address"
                            value={player.email}
                            onChange={(e) => updatePlayer(index, "email", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          />
                        </td>
                        <td className="p-4">
                          <input
                            type="number"
                            required
                            min="10"
                            max="60"
                            placeholder="Age"
                            value={player.age}
                            onChange={(e) => updatePlayer(index, "age", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          />
                        </td>
                        <td className="p-4">
                          <select
                            required
                            value={player.bloodGroup}
                            onChange={(e) => updatePlayer(index, "bloodGroup", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          >
                            <option value="" disabled>Select</option>
                            {BLOOD_GROUPS.map((bg) => (
                              <option key={bg} value={bg}>{bg}</option>
                            ))}
                          </select>
                        </td>
                        <td className="p-4">
                          <select
                            required
                            value={player.role}
                            onChange={(e) => updatePlayer(index, "role", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          >
                            <option value="" disabled>Select Role</option>
                            {ROLES.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                          </select>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <label className="flex items-center gap-1 cursor-pointer" title="Captain">
                              <input
                                type="radio"
                                name="captain"
                                checked={player.isCaptain}
                                onChange={() => handleCaptainChange(index)}
                                className="w-4 h-4 text-blue-500 bg-background border-border focus:ring-blue-500"
                              />
                              <span className="font-bold text-blue-600">C</span>
                            </label>
                            <label className="flex items-center gap-1 cursor-pointer" title="Vice Captain">
                              <input
                                type="radio"
                                name="viceCaptain"
                                checked={player.isViceCaptain}
                                onChange={() => handleViceCaptainChange(index)}
                                className="w-4 h-4 text-purple-500 bg-background border-border focus:ring-purple-500"
                              />
                              <span className="font-bold text-purple-600">VC</span>
                            </label>
                          </div>
                        </td>
                        <td className="p-4">
                          <select
                            required
                            value={player.tshirtSize}
                            onChange={(e) => updatePlayer(index, "tshirtSize", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          >
                            <option value="" disabled>Size</option>
                            {SIZES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td className="p-4">
                          <select
                            required
                            value={player.lowerSize}
                            onChange={(e) => updatePlayer(index, "lowerSize", e.target.value)}
                            className="w-full rounded-md border-border bg-background px-3 py-2 border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                          >
                            <option value="" disabled>Size</option>
                            {SIZES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </td>
                        <td className="p-4">
                          <div className="relative">
                            <input
                              type="file"
                              required
                              accept="image/*,.pdf"
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                updatePlayer(index, "idCard", file);
                              }}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="flex items-center justify-center gap-2 px-3 py-2 border border-dashed border-primary/50 rounded-md bg-primary/5 text-primary hover:bg-primary/10 transition-colors">
                              <UploadCloud className="h-4 w-4" />
                              <span className="text-xs font-semibold truncate max-w-[100px]">
                                {player.idCard ? player.idCard.name : "Upload ID"}
                              </span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>By submitting, you agree to the tournament terms and conditions.</span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-10 py-4 font-bold hover:bg-primary/90 transition shadow-elegant text-lg"
              >
                <CheckCircle className="h-5 w-5" /> Submit Registration
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

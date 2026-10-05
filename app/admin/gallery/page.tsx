"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { galleryCategories } from "@/lib/gallery-data";
import { UploadCloud, Image as ImageIcon, Video, X, Check, Search, Filter, Edit3, Trash2, Plus, GripVertical, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminGalleryPage() {
    const [view, setView] = useState<"list" | "create">("list");
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState<{url: string, name: string, isCover: boolean}[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFiles = (files: FileList) => {
        const newFiles = Array.from(files).map((file, idx) => ({
            url: URL.createObjectURL(file),
            name: file.name,
            isCover: uploadedFiles.length === 0 && idx === 0 // First file becomes cover by default
        }));
        setUploadedFiles(prev => [...prev, ...newFiles]);
    };

    const setCoverImage = (index: number) => {
        setUploadedFiles(prev => prev.map((f, i) => ({ ...f, isCover: i === index })));
    };

    const removeFile = (index: number) => {
        setUploadedFiles(prev => {
            const newFiles = [...prev];
            newFiles.splice(index, 1);
            if (newFiles.length > 0 && prev[index].isCover) {
                newFiles[0].isCover = true;
            }
            return newFiles;
        });
    };

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Topbar */}
            <header className="bg-background border-b border-border sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-display font-bold text-lg flex items-center gap-2">
                        <ImageIcon className="h-5 w-5 text-primary" /> Gallery Admin
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="h-9 px-3 rounded-md hidden sm:flex">
                            <Settings className="h-4 w-4 mr-2" /> Settings
                        </Button>
                        <Button 
                            className="h-9 rounded-md font-bold shadow-sm"
                            onClick={() => setView(view === "list" ? "create" : "list")}
                        >
                            {view === "list" ? <><Plus className="h-4 w-4 mr-2" /> New Album</> : "Back to List"}
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">
                {view === "list" ? (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <h1 className="font-display text-3xl font-bold">Manage Albums</h1>
                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                <div className="relative flex-1 sm:w-64">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <input 
                                        type="text" 
                                        placeholder="Search albums..." 
                                        className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:border-primary"
                                    />
                                </div>
                                <Button variant="outline" className="h-9 px-3 border-border bg-background">
                                    <Filter className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Mock Table */}
                        <div className="bg-background rounded-xl border border-border overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-muted/50 text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                                            <th className="p-4 font-semibold">Album Name</th>
                                            <th className="p-4 font-semibold">Category</th>
                                            <th className="p-4 font-semibold">Date</th>
                                            <th className="p-4 font-semibold">Media</th>
                                            <th className="p-4 font-semibold">Status</th>
                                            <th className="p-4 font-semibold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-border">
                                        {/* Mock Row 1 */}
                                        <tr className="hover:bg-muted/20 transition group">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded bg-muted overflow-hidden">
                                                        <img src="/community.jpg" alt="" className="h-full w-full object-cover" />
                                                    </div>
                                                    <div className="font-semibold">Cleanliness Drive 2026</div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-muted-foreground">Cleanliness Drives</td>
                                            <td className="p-4 text-muted-foreground">March 15, 2026</td>
                                            <td className="p-4"><span className="bg-muted px-2 py-1 rounded text-xs font-medium">12 Photos</span></td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-600 text-xs font-bold">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" /> Published
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"><Edit3 className="h-4 w-4" /></Button>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Mock Row 2 */}
                                        <tr className="hover:bg-muted/20 transition group">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded bg-muted overflow-hidden flex items-center justify-center text-muted-foreground">
                                                        <ImageIcon className="h-4 w-4" />
                                                    </div>
                                                    <div className="font-semibold">Mega Blood Donation Camp</div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-muted-foreground">Health</td>
                                            <td className="p-4 text-muted-foreground">February 10, 2026</td>
                                            <td className="p-4"><span className="bg-muted px-2 py-1 rounded text-xs font-medium">Draft</span></td>
                                            <td className="p-4">
                                                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 text-xs font-bold">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Draft
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"><Edit3 className="h-4 w-4" /></Button>
                                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div>
                            <h1 className="font-display text-3xl font-bold mb-2">Create New Album</h1>
                            <p className="text-muted-foreground">Upload media and add details for your latest activity.</p>
                        </div>

                        <div className="bg-background rounded-2xl border border-border shadow-sm p-6 lg:p-8 space-y-8">
                            
                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold">Activity Title <span className="text-red-500">*</span></label>
                                    <input type="text" placeholder="e.g. Cleanliness Drive 2026" className="w-full p-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Date</label>
                                    <input type="date" className="w-full p-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Location</label>
                                    <input type="text" placeholder="e.g. Sector 17, Chandigarh" className="w-full p-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Category</label>
                                    <select className="w-full p-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none">
                                        <option value="">Select a category</option>
                                        {galleryCategories.filter(c => c !== "All").map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Volunteers Count</label>
                                    <input type="number" placeholder="e.g. 150" className="w-full p-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-semibold">Description</label>
                                    <textarea rows={4} placeholder="Describe the impact and story of this activity..." className="w-full p-3 bg-muted/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" />
                                </div>
                            </div>

                            {/* Uploader */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <label className="text-sm font-semibold text-foreground">Media Gallery <span className="text-red-500">*</span></label>
                                    <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-1 rounded">Auto-compression enabled</span>
                                </div>
                                
                                <div 
                                    className={`relative border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-colors duration-200 ${dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 bg-muted/10"}`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                >
                                    <input 
                                        type="file" 
                                        multiple 
                                        accept="image/*,video/*"
                                        className="hidden" 
                                        ref={fileInputRef}
                                        onChange={(e) => e.target.files && handleFiles(e.target.files)}
                                    />
                                    <div className="h-16 w-16 bg-background border border-border rounded-full flex items-center justify-center mb-4 shadow-sm">
                                        <UploadCloud className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-2">Drag & Drop media here</h4>
                                    <p className="text-sm text-muted-foreground mb-6 max-w-sm">
                                        Support JPG, PNG, WEBP, and MP4. Images will be automatically compressed for fast loading.
                                    </p>
                                    <Button onClick={() => fileInputRef.current?.click()} className="rounded-full font-bold px-8 shadow-sm">
                                        Browse Files
                                    </Button>
                                </div>

                                {/* Uploaded Grid */}
                                {uploadedFiles.length > 0 && (
                                    <div className="mt-6">
                                        <div className="text-sm font-semibold mb-3">Uploaded ({uploadedFiles.length})</div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                            {uploadedFiles.map((file, idx) => (
                                                <div key={idx} className="group relative aspect-square rounded-lg border border-border bg-muted overflow-hidden">
                                                    <img src={file.url} alt="" className="h-full w-full object-cover" />
                                                    
                                                    {file.isCover && (
                                                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                                                            Cover Image
                                                        </div>
                                                    )}

                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                                        <button 
                                                            onClick={() => setCoverImage(idx)}
                                                            className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 transition"
                                                        >
                                                            {file.isCover ? <Check className="h-3 w-3" /> : <ImageIcon className="h-3 w-3" />}
                                                            {file.isCover ? "Cover" : "Set Cover"}
                                                        </button>
                                                        <button 
                                                            className="text-xs font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1 transition"
                                                        >
                                                            <GripVertical className="h-3 w-3" /> Reorder
                                                        </button>
                                                    </div>
                                                    
                                                    <button 
                                                        onClick={() => removeFile(idx)}
                                                        className="absolute top-2 right-2 h-6 w-6 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                                                    >
                                                        <X className="h-3.5 w-3.5" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="rounded border-border text-primary focus:ring-primary h-4 w-4" defaultChecked />
                                    <span className="text-sm font-semibold">Publish immediately</span>
                                </label>
                                <div className="flex gap-3 w-full sm:w-auto">
                                    <Button variant="outline" className="flex-1 sm:flex-none font-bold" onClick={() => setView("list")}>Cancel</Button>
                                    <Button className="flex-1 sm:flex-none font-bold shadow-sm">Save Album</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder's Message",
  description: "A message from Sunil Pal, Founder of Sarv Sewa Sashktikarn Sangthan.",
};

export default function FoundersMessagePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER STRIP */}
      <section className="relative overflow-hidden bg-primary/5 py-24">
        <div className="mx-auto max-w-4xl px-6 relative z-10 text-center">
           <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" /> From the Founder
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Founder's <span className="text-secondary">Message</span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="space-y-8 text-lg text-foreground/85 leading-relaxed">
          <p className="text-xl font-medium text-foreground italic border-l-4 border-secondary pl-6">
            “सेवा केवल एक कार्य नहीं, बल्कि समाज के प्रति हमारी जिम्मेदारी है।”
          </p>

          <p>
            मैं <strong>Sunil Pal</strong>, Founder, Sarv Sewa Sashktikarn Sangthan, का मानना है कि भारत का भविष्य हमारे युवाओं, विद्यार्थियों और समाज की नई पीढ़ी के हाथों में है। यदि हम उन्हें सही शिक्षा, अवसर, संस्कार, नेतृत्व और अपनी प्रतिभा को आगे बढ़ाने का मंच दें, तो हम एक सशक्त और विकसित भारत के निर्माण में महत्वपूर्ण योगदान दे सकते हैं।
          </p>

          <p>
            इसी सोच के साथ Sarv Sewa Sashktikarn Sangthan के माध्यम से हम अलग-अलग क्षेत्रों में ऐसे कार्यक्रम चला रहे हैं, जिनका उद्देश्य केवल आयोजन करना नहीं, बल्कि समाज में सकारात्मक बदलाव और युवाओं में जिम्मेदारी की भावना पैदा करना है।
          </p>

          <div className="py-6">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">हमारी प्रमुख पहलें—</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary text-xl mb-2">Shiksha Sankalp – One Lakh Students, One Lakh Smiles</h4>
                <p className="text-muted-foreground text-base">आर्थिक रूप से कमजोर एवं प्रतिभाशाली विद्यार्थियों को शिक्षा के अवसर और सहयोग उपलब्ध कराने का हमारा संकल्प।</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary text-xl mb-2">Run For Sindhu Marathon</h4>
                <p className="text-muted-foreground text-base">युवाओं को स्वास्थ्य, फिटनेस, नशामुक्ति, राष्ट्रीय एकता और भारतीय संस्कृति से जोड़ने की पहल।</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary text-xl mb-2">Sansad Darshan Yatra</h4>
                <p className="text-muted-foreground text-base">विद्यार्थियों को लोकतंत्र, संविधान और देश की संसदीय व्यवस्था को करीब से समझने का अवसर देने का प्रयास।</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary text-xl mb-2">Operation Sindoor Cricket Cup</h4>
                <p className="text-muted-foreground text-base">खेलों के माध्यम से युवाओं में अनुशासन, टीम भावना, नेतृत्व और सकारात्मक प्रतिस्पर्धा को बढ़ावा देने की पहल।</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary text-xl mb-2">Sarv Sewa Life Savers</h4>
                <p className="text-muted-foreground text-base">जरूरत के समय जीवन बचाने और समाज में मानवीय सेवा की भावना को मजबूत करने का प्रयास।</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary text-xl mb-2">Social Work Internship</h4>
                <p className="text-muted-foreground text-base">युवाओं और विद्यार्थियों को वास्तविक सामाजिक समस्याओं से जोड़कर उन्हें Social Leadership और Community Service का अनुभव देने की पहल।</p>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <h4 className="font-bold text-primary text-xl mb-2">Global Youth Parliament</h4>
                <p className="text-muted-foreground text-base">भारत और विश्व के युवाओं को एक मंच पर लाकर Youth Dialogue, Peace, Leadership और “Vasudhaiva Kutumbakam” की भावना को मजबूत करने का हमारा प्रयास।</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
               <Link
                  href="/donate"
                  className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-6 py-3 font-semibold hover:bg-secondary/90 transition shadow-elegant"
                >
                  Support Our Initiatives
                </Link>
            </div>
          </div>

          <p>
            मेरा विश्वास है कि एक व्यक्ति की सेवा से एक परिवार बदल सकता है, एक परिवार से एक समाज और एक जागरूक समाज से एक मजबूत राष्ट्र का निर्माण हो सकता है।
          </p>

          <p>
            हमारा प्रयास है कि Sarv Sewa Sashktikarn Sangthan आने वाले समय में भारत के हर क्षेत्र तक पहुंचे और शिक्षा, युवा विकास, खेल, सामाजिक सेवा एवं राष्ट्र निर्माण के क्षेत्र में अधिक से अधिक लोगों को साथ जोड़े।
          </p>

          <div className="bg-secondary/10 rounded-2xl p-8 border border-secondary/20 my-10 text-center">
             <p className="font-semibold text-secondary-foreground text-xl mb-2">हमारा संकल्प स्पष्ट है —</p>
             <p className="font-display font-bold text-2xl text-secondary">Empowering Communities, Inspiring Youth, Building the Nation.</p>
          </div>

          <p>
            मैं उन सभी सहयोगियों, शिक्षकों, विद्यार्थियों, युवाओं, संस्थाओं और शुभचिंतकों का हृदय से आभार व्यक्त करता हूँ, जो इस यात्रा में हमारे साथ जुड़े हैं।
          </p>

          <div className="text-center font-display font-medium text-2xl text-primary mt-12 mb-8 italic">
            <p>सेवा से संस्कार,</p>
            <p>संस्कार से शक्ति,</p>
            <p>और शक्ति से राष्ट्र निर्माण।</p>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="font-display text-2xl font-bold text-foreground">— Sunil Pal</h3>
            <p className="text-muted-foreground mt-1 uppercase tracking-wide text-sm font-semibold">Founder, Sarv Sewa Sashktikarn Sangthan</p>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
           <Link
              href="/#join"
              className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold hover:bg-primary/90 transition shadow-elegant"
            >
              Join Our Mission
            </Link>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════════
// CONFIG: Set your Google Apps Script deployed web app URL here
// after deploying the Code.gs as a web app.
// ══════════════════════════════════════════════════════════
const SCRIPT_URL = ""; // e.g. "https://script.google.com/macros/s/ABC.../exec"

const C = {
  navy: "#1a1f3a", gold: "#c8a45c", softGold: "#e8d5a3", cream: "#f5f0e3",
  white: "#fefcf7", text: "#2c2c2c", sec: "#5a5a5a", muted: "#8a8a7a",
  border: "#e8e0d0", green: "#4a7c59", red: "#c0392b",
};
const S = { name: "Adorned & Armed", theme: "Dwell", year: "2026" };

const DAYS = [
  {
    day: 1, title: "The Invitation to Dwell",
    audioUrl: "/audio/day-01.mp3",
    quotes: [
      { text: "We are not called to occasional fellowship with God, but to continual communion.", author: "Brother Lawrence" },
      { text: "Apart from Christ, we can do nothing, not even begin to be what we are meant to be.", author: "John Stott" },
    ],
    anchor: { text: "Dwell in Me, and I will dwell in you. Live in Me, and I will live in you. Just as no branch can bear fruit of itself without abiding in (being vitally united to) the vine, neither can you bear fruit unless you abide in Me.", ref: "John 15:4 (AMPC)" },
    scriptures: ["John 15:1-7", "Psalm 91:1"],
    body: [
      { t: "p", x: "There is something deeply human about the desire for a place to belong, a space where we are not merely passing through, but where we can settle, rest, and remain. This longing is not accidental; it reflects the very heart of God toward us. From the beginning, His desire has never been for occasional encounters, but for continual dwelling." },
      { t: "p", x: "In the Old Testament, the richness of this invitation is captured in the Hebrew word yashab, a word that begins with something as simple as 'to sit down,' yet unfolds into 'to remain, to settle, to inhabit.' It carries the sense of permanence, not movement; of residence, not visitation. When the Psalmist later declares, 'He who dwells in the shelter of the Most High,' he is describing a life that has chosen God as its settled habitation, not a refuge visited only in moments of need." },
      { t: "p", x: "Alongside this, another word deepens the picture, lun, meaning to lodge, to stay overnight, to remain under covering. Together, these words reveal a profound truth: those who make God their dwelling place, who continually remain in Him, enter into a life marked by rest, covering, and abiding security." },
      { t: "p", x: "Yet this privilege did not begin with man reaching for God, but with God reaching for man. In Eden, He walked with humanity in intimate fellowship. Even when sin disrupted that communion, His pursuit did not cease. Through Noah, He provided an ark. Through Abraham's descendants, He formed a people and declared His intent clearly: 'Let them make Me a sanctuary, that I may dwell among them' (Exodus 25:8). The word used, shakan, would later give rise to Shekinah, the manifest presence of God." },
      { t: "s", x: "'For behold, I am coming and I will dwell in your midst...'", r: "Zechariah 2:10" },
      { t: "s", x: "'My dwelling place shall be with them... I will be their God, and they shall be My people.'", r: "Ezekiel 37:26-27" },
      { t: "p", x: "Again and again, He affirmed this desire, declaring that He would dwell among His people and be their God. This was never casual; it was covenantal, deeply intentional, echoing the closeness of Eden." },
      { t: "d" },
      { t: "p", x: "Then, in the fullness of time, what had long been promised became flesh. God did not merely visit. He came to dwell. Emmanuel, God with us, walked among men." },
      { t: "p", x: "It was to these few, on the eve of His suffering, that Jesus spoke words that would carry eternal weight:" },
      { t: "s", x: "'I am the true vine... Abide in Me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in Me.'", r: "John 15:1, 4 (ESV)" },
      { t: "p", x: "The word He used, meno, means to remain, to continue, to stay. This was not a suggestion, but an invitation into living union." },
      { t: "s", x: "'If you abide in Me, and My words abide in you, ask whatever you wish, and it will be done for you. By this My Father is glorified, that you bear much fruit...'", r: "John 15:7-8 (ESV)" },
      { t: "p", x: "Here lies the secret of a life that is fruitful, effective, and full of joy: not in striving, but in dwelling." },
      { t: "d" },
      { t: "p", x: "As we begin this 40-day journey, we are not merely committing to a spiritual exercise; we are responding to a divine invitation. A life of abiding is not reserved for a few. It is the calling of every believer." },
      { t: "p", x: "Lord, teach me to dwell. Settle my heart in You. Let my life be rooted in Your presence, and let Your Word live richly within me. Make me fruitful as I remain in You. Amen." },
    ],
    journal: [
      "In what ways have I been 'visiting' God rather than truly dwelling in Him?",
      "What does it practically look like for me to remain in Christ daily through His Word, prayer, and awareness of His presence?",
      "Where am I striving to produce fruit in my own strength instead of resting in my connection to the Vine?",
      "If God is inviting me into a life of settled habitation, what would need to shift in my priorities for Him to truly become my dwelling place?",
    ],
    prayers: [
      "Thank God for His desire to dwell with you and for the invitation to abide in His presence continually.",
      "Ask the Father to teach you how to remain in Him daily through His Word, through prayer, and through a conscious awareness of His presence.",
      "Invite the Lord to remove every distraction and spiritual instability that keeps you from being settled in Him.",
      "Pray for grace to let His Word dwell richly within you, shaping your desires and producing fruit that glorifies Him.",
      "Ask the Lord to make your life fruitful as you remain in Him, that your life may reflect His fullness, His joy, and His presence daily.",
    ],
  },
];

const ALL = Array.from({ length: 40 }, (_, i) => { const n = i + 1; const f = DAYS.find(d => d.day === n); return { day: n, title: f ? f.title : "Coming Soon", pub: !!f }; });

const PRAYER_CATS = ["Healing & Health","Family & Relationships","Career & Purpose","Financial Breakthrough","Spiritual Growth & Warfare","Grief & Loss","Peace & Mental Health","Salvation of a Loved One","Marriage & Restoration","Guidance & Decisions","Protection & Safety","Other"];
const TEST_CATS = [{l:"Healing",e:"&#127807;"},{l:"Breakthrough",e:"&#9889;"},{l:"Provision",e:"&#128155;"},{l:"Salvation",e:"&#10013;"},{l:"Restoration",e:"&#128260;"},{l:"Protection",e:"&#128737;"},{l:"Other",e:"&#10024;"}];
const FAITH_LABELS = {1:"Struggling",2:"Hopeful",3:"Trusting",4:"Confident",5:"Unshakeable"};

// ── Styles ──
const ff = (f, w, s) => ({ fontFamily: f === "d" ? "'Cormorant Garamond',Georgia,serif" : f === "b" ? "'Lora',Georgia,serif" : "'Source Sans 3',sans-serif", fontWeight: w, fontSize: s });

function Bar({ h }) { return <div style={{ height: h || 5, background: "linear-gradient(90deg, " + C.navy + " 0%, " + C.gold + " 50%, " + C.navy + " 100%)" }} />; }
function Orn({ s }) { return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, color: C.gold, opacity: 0.5, ...s }}><div style={{ width: 40, height: 1, background: C.gold }} /><span style={{ fontSize: 18 }}>&#10022;</span><div style={{ width: 40, height: 1, background: C.gold }} /></div>; }
function Ft() { return <div style={{ padding: "20px 28px", textAlign: "center", background: C.navy, borderTop: "1px solid rgba(200,164,92,0.2)" }}><div style={{ ...ff("s", 400, 11), letterSpacing: 1.5, color: "rgba(255,255,255,0.45)" }}>&copy; {S.year} {S.theme} &nbsp;||&nbsp; {S.name}</div></div>; }
function Hd() { return <div style={{ background: C.navy, padding: "20px 20px 16px", textAlign: "center", position: "relative", overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(200,164,92,0.12) 0%, transparent 70%)", pointerEvents: "none" }} /><div style={{ ...ff("s", 300, 10), letterSpacing: 3, textTransform: "uppercase", color: C.gold, opacity: 0.7, marginBottom: 4, position: "relative" }}>{S.name}</div><div style={{ ...ff("d", 700, 22), letterSpacing: 3, textTransform: "uppercase", color: "#fff", position: "relative" }}>{S.theme} {S.year}</div></div>; }
function Aud({ url }) { if (!url) return <div style={{ textAlign: "center", padding: "12px 0", ...ff("s", 400, 13), color: "rgba(255,255,255,0.4)" }}>Audio coming soon</div>; return <audio controls preload="metadata" style={{ width: "100%", borderRadius: 4 }} src={url} />; }

function Share({ day, title }) {
  const [cp, setCp] = useState(false);
  const u = typeof window !== "undefined" ? window.location.origin : "https://adornedandarmed.com";
  const t = "Day " + String(day).padStart(2, "0") + ": " + title + " | Dwell 2026";
  const su = u + "?day=" + day;
  const bs = { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: "50%", border: "1px solid " + C.border, background: C.white, cursor: "pointer", transition: "all 0.2s", textDecoration: "none" };
  return <div style={{ padding: "20px 28px", background: C.cream, borderTop: "1px solid " + C.border }}><div style={{ ...ff("s", 500, 10), letterSpacing: 2.5, textTransform: "uppercase", color: C.gold, marginBottom: 14, textAlign: "center" }}>Share Today's Bulletin</div><div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
    <a href={"https://wa.me/?text=" + encodeURIComponent(t + " " + su)} target="_blank" rel="noopener noreferrer" style={bs}><svg width="18" height="18" viewBox="0 0 24 24" fill={C.navy}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
    <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(su)} target="_blank" rel="noopener noreferrer" style={bs}><svg width="18" height="18" viewBox="0 0 24 24" fill={C.navy}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
    <a href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(su)} target="_blank" rel="noopener noreferrer" style={bs}><svg width="16" height="16" viewBox="0 0 24 24" fill={C.navy}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    <button onClick={() => { navigator.clipboard.writeText(su).then(() => { setCp(true); setTimeout(() => setCp(false), 2000); }); }} style={{ ...bs, border: "1px solid " + C.border }}>{cp ? <svg width="16" height="16" viewBox="0 0 24 24" fill={C.gold} stroke={C.gold} strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>}</button>
  </div></div>;
}

// ══════════════════════════════════════════════════════════
// FORM COMPONENTS
// ══════════════════════════════════════════════════════════

const inp = { width: "100%", padding: "13px 16px", borderRadius: 8, border: "1px solid " + C.border, fontFamily: "'Lora',Georgia,serif", fontSize: 14, color: C.text, background: C.white, outline: "none" };
const lbl = { ...ff("s", 600, 10), letterSpacing: 2, textTransform: "uppercase", color: C.gold, marginBottom: 8, display: "block" };
const sub = { width: "100%", padding: "15px 24px", background: "linear-gradient(135deg, " + C.navy + " 0%, #2a3f6a 100%)", color: C.gold, border: "none", borderRadius: 10, ...ff("s", 700, 12), letterSpacing: 2, textTransform: "uppercase", cursor: "pointer", transition: "all 0.2s" };
const verse = { padding: "16px 18px", background: C.cream, borderLeft: "3px solid " + C.gold, borderRadius: "0 8px 8px 0", margin: "24px 0" };

function PrayerForm() {
  const [anon, setAnon] = useState(false);
  const [f, setF] = useState({ first: "", last: "", email: "", cat: "", req: "", urgency: "Urgent", forWhom: ["Myself"], privacy: true });
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async () => {
    if (!anon && !f.first.trim()) return;
    if (!f.cat || !f.req.trim()) return;
    setSending(true);
    const data = { firstName: anon ? "Anonymous" : f.first.trim(), lastName: anon ? "" : f.last.trim(), email: anon ? "anonymous" : f.email.trim(), category: f.cat, request: f.req.trim(), urgency: f.urgency, forWhom: f.forWhom.join(", ") || "Not specified", isPrivate: f.privacy ? "Private" : "Shared", anonymous: anon, timestamp: new Date().toISOString() };
    if (SCRIPT_URL) {
      try { await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ action: "prayer", ...data }) }); } catch (e) { console.log("Submit error", e); }
    }
    setOk(true); setSending(false);
  };

  const tog = (item) => { setF(p => ({ ...p, forWhom: p.forWhom.includes(item) ? p.forWhom.filter(x => x !== item) : [...p.forWhom, item] })); };

  if (ok) return <div style={{ textAlign: "center", padding: "48px 20px" }}><div style={{ fontSize: 42, marginBottom: 12 }}>&#128330;</div><div style={{ ...ff("d", 700, 26), color: C.navy, marginBottom: 8 }}>Your Request Is Lifted</div><div style={{ ...ff("b", 400, 14), color: C.muted, lineHeight: 1.7, maxWidth: 320, margin: "0 auto 20px" }}>We are standing in agreement with you. May God's peace guard your heart and mind in Christ Jesus.</div><button onClick={() => { setOk(false); setF({ first: "", last: "", email: "", cat: "", req: "", urgency: "Urgent", forWhom: ["Myself"], privacy: true }); setAnon(false); }} style={{ ...ff("s", 600, 11), letterSpacing: 2, textTransform: "uppercase", padding: "10px 24px", background: "none", border: "1px solid " + C.gold, borderRadius: 8, color: C.gold, cursor: "pointer" }}>Submit Another Request</button></div>;

  return <div>
    {/* Anon Toggle */}
    <div style={{ marginBottom: 20 }}><label style={lbl}>Submission Type</label>
      <div onClick={() => setAnon(!anon)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white, border: "1px solid " + C.border, borderRadius: 8, padding: "12px 16px", cursor: "pointer" }}>
        <span style={{ ...ff("s", 400, 13), color: C.text }}>{anon ? "Submitting anonymously" : "Submit with my name"}</span>
        <div style={{ width: 38, height: 21, background: anon ? C.gold : "#ddd", borderRadius: 10, position: "relative", transition: "background 0.3s" }}><div style={{ position: "absolute", top: 3, left: anon ? 20 : 3, width: 15, height: 15, borderRadius: "50%", background: "#fff", transition: "left 0.3s" }} /></div>
      </div>
      {anon && <div style={{ ...ff("s", 400, 12), color: C.gold, background: C.cream, border: "1px solid " + C.border, borderRadius: 8, padding: "10px 14px", marginTop: 6 }}>Your name and email will not be stored. Your request will be marked as Anonymous.</div>}
    </div>

    {!anon && <><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
      <div><label style={lbl}>First Name</label><input type="text" value={f.first} onChange={e => setF({ ...f, first: e.target.value })} placeholder="Your name" style={inp} /></div>
      <div><label style={lbl}>Last Name</label><input type="text" value={f.last} onChange={e => setF({ ...f, last: e.target.value })} placeholder="Last name" style={inp} /></div>
    </div>
    <div style={{ marginBottom: 16 }}><label style={lbl}>Email Address</label><input type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="your@email.com" style={inp} /></div></>}

    <div style={{ marginBottom: 16 }}><label style={lbl}>Prayer Category</label>
      <select value={f.cat} onChange={e => setF({ ...f, cat: e.target.value })} style={{ ...inp, cursor: "pointer" }}>
        <option value="">Select a category...</option>
        {PRAYER_CATS.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Your Prayer Request</label><textarea value={f.req} onChange={e => setF({ ...f, req: e.target.value })} placeholder="Share what's on your heart..." maxLength={1000} style={{ ...inp, minHeight: 120, resize: "vertical" }} /><div style={{ ...ff("s", 400, 10), color: C.muted, textAlign: "right", marginTop: 4 }}>{f.req.length} / 1000</div></div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Urgency</label><div style={{ display: "flex", gap: 8 }}>
      {[{ l: "Ongoing", e: "&#128330;" }, { l: "This Week", e: "&#9203;" }, { l: "Urgent", e: "&#128293;" }].map(u => (
        <button key={u.l} onClick={() => setF({ ...f, urgency: u.l })} style={{ flex: 1, padding: "10px 8px", border: "1px solid " + (f.urgency === u.l ? C.gold : C.border), borderRadius: 8, background: f.urgency === u.l ? C.cream : C.white, ...ff("s", 600, 11), letterSpacing: 1, color: f.urgency === u.l ? C.navy : C.muted, cursor: "pointer", transition: "all 0.2s" }} dangerouslySetInnerHTML={{ __html: u.e + " " + u.l }} />
      ))}
    </div></div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Praying For</label><div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {["Myself", "A family member", "A friend or colleague", "My community / nation"].map(item => (
        <label key={item} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", ...ff("s", 400, 13), color: C.sec }}>
          <div onClick={() => tog(item)} style={{ width: 18, height: 18, borderRadius: 4, border: "1.5px solid " + (f.forWhom.includes(item) ? C.gold : C.border), background: f.forWhom.includes(item) ? C.gold : "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}>{f.forWhom.includes(item) && <span style={{ color: C.navy, fontSize: 11, fontWeight: 800 }}>&#10003;</span>}</div>
          {item}
        </label>
      ))}
    </div></div>

    <div style={{ marginBottom: 20 }}><label style={lbl}>Visibility</label>
      <div onClick={() => setF({ ...f, privacy: !f.privacy })} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white, border: "1px solid " + C.border, borderRadius: 8, padding: "12px 16px", cursor: "pointer" }}>
        <span style={{ ...ff("s", 400, 13), color: C.text }}>{f.privacy ? "Keep my request private (prayer team only)" : "Share with the community"}</span>
        <div style={{ width: 38, height: 21, background: f.privacy ? C.gold : "#ddd", borderRadius: 10, position: "relative", transition: "background 0.3s" }}><div style={{ position: "absolute", top: 3, left: f.privacy ? 20 : 3, width: 15, height: 15, borderRadius: "50%", background: "#fff", transition: "left 0.3s" }} /></div>
      </div>
    </div>

    <div style={verse}><div style={{ ...ff("d", 500, 14), fontStyle: "italic", color: C.navy, lineHeight: 1.75 }}>"Cast all your anxiety on him because he cares for you."</div><div style={{ ...ff("s", 500, 11), color: C.gold, marginTop: 6 }}>1 Peter 5:7</div></div>

    <button onClick={submit} disabled={sending} style={{ ...sub, opacity: sending ? 0.6 : 1 }}>{sending ? "Sending your request..." : "Submit Prayer Request"}</button>
    <div style={{ ...ff("d", 400, 13), fontStyle: "italic", color: C.muted, textAlign: "center", marginTop: 12 }}>Received with love, faith, and confidentiality.</div>
  </div>;
}

function TestimonyForm() {
  const [anon, setAnon] = useState(false);
  const [f, setF] = useState({ first: "", last: "", email: "", cat: "Breakthrough", title: "", story: "", faith: 3, share: false });
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async () => {
    if (!anon && !f.first.trim()) return;
    if (!f.title.trim() || !f.story.trim()) return;
    setSending(true);
    const data = { firstName: anon ? "Anonymous" : f.first.trim(), lastName: anon ? "" : f.last.trim(), email: anon ? "anonymous" : f.email.trim(), category: f.cat, title: f.title.trim(), story: f.story.trim(), faithLevel: f.faith, sharePublicly: f.share ? "Public" : "Private", anonymous: anon, timestamp: new Date().toISOString() };
    if (SCRIPT_URL) {
      try { await fetch(SCRIPT_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ action: "testimony", ...data }) }); } catch (e) { console.log("Submit error", e); }
    }
    setOk(true); setSending(false);
  };

  if (ok) return <div style={{ textAlign: "center", padding: "48px 20px" }}><div style={{ fontSize: 42, marginBottom: 12 }}>&#128081;</div><div style={{ ...ff("d", 700, 26), color: C.navy, marginBottom: 8 }}>Glory to God!</div><div style={{ ...ff("b", 400, 14), color: C.muted, lineHeight: 1.7, maxWidth: 340, margin: "0 auto 20px" }}>Your testimony has been received. Your story is a weapon. Someone else's breakthrough may rest on the courage you showed in sharing it.</div><button onClick={() => { setOk(false); setF({ first: "", last: "", email: "", cat: "Breakthrough", title: "", story: "", faith: 3, share: false }); setAnon(false); }} style={{ ...ff("s", 600, 11), letterSpacing: 2, textTransform: "uppercase", padding: "10px 24px", background: "none", border: "1px solid " + C.gold, borderRadius: 8, color: C.gold, cursor: "pointer" }}>Share Another Testimony</button></div>;

  return <div>
    <div style={{ marginBottom: 20 }}><label style={lbl}>Submission Type</label>
      <div onClick={() => setAnon(!anon)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white, border: "1px solid " + C.border, borderRadius: 8, padding: "12px 16px", cursor: "pointer" }}>
        <span style={{ ...ff("s", 400, 13), color: C.text }}>{anon ? "Submitting anonymously" : "Submit with my name"}</span>
        <div style={{ width: 38, height: 21, background: anon ? C.gold : "#ddd", borderRadius: 10, position: "relative", transition: "background 0.3s" }}><div style={{ position: "absolute", top: 3, left: anon ? 20 : 3, width: 15, height: 15, borderRadius: "50%", background: "#fff", transition: "left 0.3s" }} /></div>
      </div>
    </div>

    {!anon && <><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
      <div><label style={lbl}>First Name</label><input type="text" value={f.first} onChange={e => setF({ ...f, first: e.target.value })} placeholder="Your name" style={inp} /></div>
      <div><label style={lbl}>Last Name</label><input type="text" value={f.last} onChange={e => setF({ ...f, last: e.target.value })} placeholder="Last name" style={inp} /></div>
    </div>
    <div style={{ marginBottom: 16 }}><label style={lbl}>Email Address</label><input type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="your@email.com" style={inp} /></div></>}

    <div style={{ marginBottom: 16 }}><label style={lbl}>Testimony Category</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {TEST_CATS.map(c => <button key={c.l} onClick={() => setF({ ...f, cat: c.l })} style={{ padding: "7px 14px", border: "1px solid " + (f.cat === c.l ? C.navy : C.border), borderRadius: 20, background: f.cat === c.l ? "rgba(26,31,58,0.1)" : "transparent", ...ff("s", 600, 11), letterSpacing: 1, color: f.cat === c.l ? C.navy : C.muted, cursor: "pointer", transition: "all 0.2s" }} dangerouslySetInnerHTML={{ __html: c.e + " " + c.l }} />)}
      </div>
    </div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Testimony Title</label><input type="text" value={f.title} onChange={e => setF({ ...f, title: e.target.value })} placeholder="Give your testimony a title..." style={inp} /></div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Your Testimony</label><textarea value={f.story} onChange={e => setF({ ...f, story: e.target.value })} placeholder="Share what God has done in your life. Your story may be the key to someone else's breakthrough..." maxLength={2000} style={{ ...inp, minHeight: 140, resize: "vertical" }} /><div style={{ ...ff("s", 400, 10), color: C.muted, textAlign: "right", marginTop: 4 }}>{f.story.length} / 2000</div></div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Faith Level at the Time</label><div style={{ ...ff("s", 400, 12), color: C.muted, marginBottom: 8 }}>How were you trusting God when this happened?</div>
      <div style={{ display: "flex", gap: 8 }}>{[1, 2, 3, 4, 5].map(n => <span key={n} onClick={() => setF({ ...f, faith: n })} style={{ fontSize: 24, cursor: "pointer", color: n <= f.faith ? C.gold : C.border, transition: "color 0.2s, transform 0.15s", transform: n <= f.faith ? "scale(1.1)" : "scale(1)" }}>&#9876;</span>)}</div>
      <div style={{ ...ff("s", 500, 10), letterSpacing: 1.5, textTransform: "uppercase", color: C.muted, marginTop: 6 }}>{FAITH_LABELS[f.faith]}</div>
    </div>

    <div style={{ marginBottom: 20 }}><label style={lbl}>Sharing</label>
      <div onClick={() => setF({ ...f, share: !f.share })} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white, border: "1px solid " + C.border, borderRadius: 8, padding: "12px 16px", cursor: "pointer" }}>
        <span style={{ ...ff("s", 400, 13), color: C.text }}>{f.share ? "Share publicly to encourage others" : "Keep private (leaders only)"}</span>
        <div style={{ width: 38, height: 21, background: f.share ? C.gold : "#ddd", borderRadius: 10, position: "relative", transition: "background 0.3s" }}><div style={{ position: "absolute", top: 3, left: f.share ? 20 : 3, width: 15, height: 15, borderRadius: "50%", background: "#fff", transition: "left 0.3s" }} /></div>
      </div>
    </div>

    <div style={verse}><div style={{ ...ff("d", 500, 14), fontStyle: "italic", color: C.navy, lineHeight: 1.75 }}>"And they overcame him by the blood of the Lamb and by the word of their testimony..."</div><div style={{ ...ff("s", 500, 11), color: C.gold, marginTop: 6 }}>Revelation 12:11 NKJV</div></div>

    <button onClick={submit} disabled={sending} style={{ ...sub, opacity: sending ? 0.6 : 1 }}>{sending ? "Sending your testimony..." : "Submit My Testimony"}</button>
    <div style={{ ...ff("d", 400, 13), fontStyle: "italic", color: C.muted, textAlign: "center", marginTop: 12 }}>Your story is a weapon against the enemy.</div>
  </div>;
}

// ══════════════════════════════════════════════════════════
// LANDING PAGE
// ══════════════════════════════════════════════════════════
function Landing({ onDay }) {
  const [tab, setTab] = useState("days");
  const [hov, setHov] = useState(null);
  const tabs = [
    { id: "days", l: "Devotionals" }, { id: "about", l: "About Us" },
    { id: "prayer", l: "Prayer Request" }, { id: "testimony", l: "Share Testimony" },
  ];
  const h2 = { ...ff("d", 600, 24), color: C.navy, marginBottom: 6 };
  const p = { ...ff("b", 400, 15), lineHeight: 1.85, color: C.sec, marginBottom: 20 };
  const h3 = { ...ff("d", 600, 20), color: C.navy, marginBottom: 8, marginTop: 28 };

  return <div style={{ background: C.white, minHeight: "100vh" }}>
    <Bar />
    <div style={{ background: C.navy, padding: "48px 24px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(200,164,92,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ ...ff("s", 300, 12), letterSpacing: 4, textTransform: "uppercase", color: C.gold, marginBottom: 14, position: "relative", opacity: 0.85 }}>{S.name}</div>
      <h1 style={{ ...ff("d", 700, "clamp(42px,8vw,64px)"), lineHeight: 1.05, color: "#fff", marginBottom: 6, position: "relative", letterSpacing: 3, textTransform: "uppercase" }}>{S.theme}</h1>
      <div style={{ ...ff("s", 400, 16), letterSpacing: 6, textTransform: "uppercase", color: C.softGold, marginBottom: 22, position: "relative" }}>{S.year}</div>
      <div style={{ width: 60, height: 1, background: C.gold, margin: "0 auto 20px", opacity: 0.4, position: "relative" }} />
      <p style={{ ...ff("b", 400, 15), fontStyle: "italic", lineHeight: 1.7, color: "rgba(255,255,255,0.50)", maxWidth: 480, margin: "0 auto", position: "relative" }}>A 40-Day Devotional Journey</p>
    </div>

    <div style={{ background: C.cream, padding: "14px 12px 0", borderBottom: "1px solid " + C.border }}>
      <div style={{ display: "flex", gap: 4, overflowX: "auto" }}>
        {tabs.map(t => <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: "0 0 auto", padding: "10px 14px 12px", background: tab === t.id ? C.navy : "transparent", border: tab === t.id ? "1px solid " + C.navy : "1px solid " + C.border, borderBottom: tab === t.id ? "1px solid " + C.navy : "none", borderRadius: "8px 8px 0 0", cursor: "pointer", ...ff("s", tab === t.id ? 600 : 400, 10), letterSpacing: 1.2, textTransform: "uppercase", color: tab === t.id ? "#fff" : C.muted, transition: "all 0.2s", whiteSpace: "nowrap" }}>{t.l}</button>)}
      </div>
    </div>

    <div style={{ padding: "0 20px 48px", maxWidth: 760, margin: "0 auto" }}>
      {tab === "days" && <><div style={{ ...ff("s", 500, 11), letterSpacing: 3, textTransform: "uppercase", color: C.gold, margin: "28px 0 20px", textAlign: "center" }}>Select a Day</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
          {ALL.map(d => { const ih = hov === d.day && d.pub; return <button key={d.day} onClick={() => d.pub && onDay(d.day)} onMouseEnter={() => setHov(d.day)} onMouseLeave={() => setHov(null)} style={{ display: "block", width: "100%", padding: "18px 14px", textAlign: "left", background: ih ? C.navy : C.cream, border: "1px " + (d.pub ? "solid" : "dashed") + " " + (ih ? C.navy : C.border), borderRadius: 8, cursor: d.pub ? "pointer" : "default", opacity: d.pub ? 1 : 0.35, transform: ih ? "translateY(-2px)" : "none", boxShadow: ih ? "0 8px 24px rgba(26,31,58,0.15)" : "none", transition: "all 0.25s", position: "relative" }}>
            {!d.pub && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", top: 10, right: 10, opacity: 0.5 }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>}
            <div style={{ ...ff("s", 500, 10), letterSpacing: 2.5, textTransform: "uppercase", color: C.gold, marginBottom: 5 }}>Day {String(d.day).padStart(2, "0")}</div>
            <div style={{ ...ff("d", 600, 14), lineHeight: 1.35, color: ih ? "#fff" : d.pub ? C.navy : C.muted, transition: "color 0.25s" }}>{d.title}</div>
          </button>; })}
        </div></>}

      {tab === "about" && <div style={{ padding: "28px 8px 0" }}>
        <div style={h2}>About {S.name}</div><Orn s={{ marginBottom: 24 }} />
        <p style={p}>Adorned &amp; Armed is a Christ-centred movement birthed from a compelling two-fold vision: to raise a people who are beautifully clothed in righteousness, royalty, and honour, and fully equipped with the armour of God to influence every sphere of society.</p>
        <p style={p}>We are passionate about cultivating lives that reflect the splendour of the love of Jesus, lives that do not merely profess faith, but visibly demonstrate His power, presence, and authority.</p>
        <div style={h3}>Our Story</div><p style={p}>Commissioned in 2024, Adorned &amp; Armed began as a focused call to women intercessors. Since then, it has grown into a vibrant, global movement, drawing believers from all walks of life who share a deep hunger for God.</p>
        <div style={h3}>Prayer &amp; Fasting Challenges</div><p style={p}>At the heart of our ministry are our annual Prayer &amp; Fasting Challenges, sacred, transformative gatherings designed to stir spiritual awakening, deepen intimacy with God, and ignite lives of purpose and power.</p>
        <div style={{ margin: "32px 0", padding: "28px 24px", background: C.cream, borderLeft: "3px solid " + C.gold, borderRadius: "0 8px 8px 0", textAlign: "center" }}><div style={{ ...ff("d", 600, 18), fontStyle: "italic", lineHeight: 1.6, color: C.navy }}>Adorned in Glory. Armed in Power. Sent with Purpose.</div></div>
        <div style={h3}>About {S.theme} {S.year}</div><p style={p}><strong style={{ color: C.navy }}>{S.theme} {S.year}</strong> is our 40-day devotional journey, an invitation to slow down, to draw near, and to make the Word of God your dwelling place.</p>
      </div>}

      {tab === "prayer" && <div style={{ padding: "28px 8px 0" }}>
        <div style={h2}>Prayer Request</div><Orn s={{ marginBottom: 24 }} />
        <p style={p}>We believe in the power of united prayer. Whatever you are facing, whatever you are believing God for, you do not have to carry it alone. Share your request and let this community stand with you in faith.</p>
        <PrayerForm />
      </div>}

      {tab === "testimony" && <div style={{ padding: "28px 8px 0" }}>
        <div style={h2}>Share Your Testimony</div><Orn s={{ marginBottom: 24 }} />
        <p style={p}>God is moving in this season. What has He done? What is He doing right now? Your testimony is not just your story; it is an encouragement to someone else who is still believing. It is a weapon against the enemy.</p>
        <TestimonyForm />
      </div>}
    </div>
    <Ft /><Bar h={4} />
  </div>;
}

// ── DAY PAGE ──
function DayPg({ d, onBack, onNav }) {
  const ref = useRef(null);
  useEffect(() => { ref.current?.scrollIntoView({ behavior: "smooth" }); }, [d.day]);
  const prev = DAYS.slice().reverse().find(x => x.day < d.day);
  const next = DAYS.find(x => x.day > d.day);
  const ps = { ...ff("b", 400, 16), lineHeight: 1.85, color: C.text, marginBottom: 22, textAlign: "justify", hyphens: "auto" };
  const nb = { background: "none", border: "none", cursor: "pointer", ...ff("s", 400, 13), letterSpacing: 1, textTransform: "uppercase", color: C.gold };

  return <div ref={ref} style={{ background: C.white, minHeight: "100vh" }}>
    <Bar /><Hd />
    <div style={{ padding: "44px 28px 36px", textAlign: "center", background: "linear-gradient(180deg, " + C.white + " 0%, " + C.cream + " 100%)", borderBottom: "1px solid " + C.border }}>
      <div style={{ ...ff("s", 500, 12), letterSpacing: 3.5, textTransform: "uppercase", color: C.gold, marginBottom: 12 }}>Day {String(d.day).padStart(2, "0")}</div>
      <h1 style={{ ...ff("d", 700, "clamp(28px,5vw,40px)"), lineHeight: 1.2, color: C.navy, marginBottom: 20 }}>{d.title}</h1><Orn />
    </div>
    {d.quotes?.length > 0 && <div style={{ padding: 28, background: C.cream, borderBottom: "1px solid " + C.border }}>{d.quotes.map((q, i) => <div key={i} style={{ textAlign: "center", padding: "12px 16px", borderTop: i > 0 ? "1px solid rgba(200,164,92,0.2)" : "none", marginTop: i > 0 ? 8 : 0, paddingTop: i > 0 ? 18 : 12 }}><div style={{ ...ff("d", 500, 16), fontStyle: "italic", lineHeight: 1.7, color: C.navy, marginBottom: 8 }}>&ldquo;{q.text}&rdquo;</div><div style={{ ...ff("s", 400, 11), letterSpacing: 1.5, textTransform: "uppercase", color: C.gold }}>&mdash; {q.author}</div></div>)}</div>}
    <div style={{ padding: "24px 28px", background: C.navy, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(200,164,92,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ ...ff("s", 300, 11), letterSpacing: 3, textTransform: "uppercase", color: C.gold, marginBottom: 12, display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
        <div style={{ width: 20, height: 20, border: "1.5px solid " + C.gold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="9" height="9" viewBox="0 0 24 24" fill={C.gold} style={{ marginLeft: 1 }}><polygon points="5,3 19,12 5,21" /></svg></div>Listen to Today's Bulletin
      </div>
      <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "14px 18px", border: "1px solid rgba(200,164,92,0.15)", position: "relative" }}><Aud url={d.audioUrl} /></div>
    </div>
    <div style={{ padding: "32px 28px", background: C.cream, borderTop: "1px solid " + C.border, borderBottom: "1px solid " + C.border }}>
      <div style={{ ...ff("s", 500, 11), letterSpacing: 3, textTransform: "uppercase", color: C.gold, marginBottom: 16, textAlign: "center" }}>Today's Scripture</div>
      <div style={{ ...ff("d", 400, 16), fontStyle: "italic", lineHeight: 1.85, color: C.text, textAlign: "center", padding: "0 8px" }}>{d.anchor.text}</div>
      <div style={{ textAlign: "center", marginTop: 14, ...ff("s", 500, 13), color: C.gold }}>{d.anchor.ref}</div>
    </div>
    <div style={{ padding: "40px 28px 16px" }}>{d.body.map((b, i) => {
      if (b.t === "p") return <p key={i} style={ps}>{b.x}</p>;
      if (b.t === "s") return <div key={i} style={{ margin: "28px 0", padding: "22px 26px", background: C.cream, borderLeft: "3px solid " + C.gold, borderRadius: "0 8px 8px 0" }}><p style={{ ...ff("d", 400, 15), fontStyle: "italic", lineHeight: 1.8, color: C.text, marginBottom: 10 }}>{b.x}</p><div style={{ ...ff("s", 500, 12), color: C.gold }}>{b.r}</div></div>;
      if (b.t === "d") return <Orn key={i} s={{ padding: "16px 0" }} />;
      return null;
    })}</div>
    <div style={{ padding: "22px 28px", background: C.navy, textAlign: "center" }}>
      <div style={{ ...ff("s", 300, 10), letterSpacing: 3, textTransform: "uppercase", color: C.gold, marginBottom: 8, opacity: 0.7 }}>Today's Scriptures</div>
      <div style={{ ...ff("d", 500, 15), color: "#fff", letterSpacing: 0.5, lineHeight: 1.6 }}>{d.scriptures.join("  \u00B7  ")}</div>
    </div>
    <div style={{ padding: "32px 28px", background: C.cream, borderTop: "1px solid " + C.border }}>
      <div style={{ ...ff("d", 600, 20), color: C.navy, marginBottom: 4 }}>Journal Questions</div>
      <div style={{ ...ff("s", 300, 12), letterSpacing: 2, textTransform: "uppercase", color: C.muted, marginBottom: 20 }}>Reflect &middot; Write &middot; Respond</div>
      {d.journal.map((q, i) => <div key={i} style={{ padding: "12px 0 12px 26px", borderBottom: i < d.journal.length - 1 ? "1px solid rgba(200,164,92,0.15)" : "none", position: "relative", ...ff("b", 400, 15), lineHeight: 1.7, color: C.sec }}><span style={{ position: "absolute", left: 0, top: 12, ...ff("d", 700, 18), color: C.gold, opacity: 0.6 }}>?</span>{q}</div>)}
    </div>
    <div style={{ padding: "0 28px 32px", background: C.cream }}>
      <div style={{ ...ff("d", 600, 20), color: C.navy, marginBottom: 4 }}>Prayers</div>
      <div style={{ ...ff("s", 300, 12), letterSpacing: 2, textTransform: "uppercase", color: C.muted, marginBottom: 20 }}>Bring these before the Lord</div>
      {d.prayers.map((p, i) => <div key={i} style={{ padding: "12px 0 12px 26px", borderBottom: i < d.prayers.length - 1 ? "1px solid rgba(200,164,92,0.15)" : "none", position: "relative", ...ff("b", 400, 15), lineHeight: 1.7, color: C.sec }}><span style={{ position: "absolute", left: 4, top: 14, fontSize: 8, color: C.gold, opacity: 0.7 }}>&#10022;</span>{p}</div>)}
    </div>
    <Share day={d.day} title={d.title} />
    <div style={{ padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", background: C.cream, borderTop: "1px solid " + C.border }}>
      {prev ? <button onClick={() => onNav(prev.day)} style={nb}>&larr; Day {String(prev.day).padStart(2, "0")}</button> : <div />}
      <button onClick={onBack} style={nb}>All Days</button>
      {next ? <button onClick={() => onNav(next.day)} style={nb}>Day {String(next.day).padStart(2, "0")} &rarr;</button> : <div />}
    </div>
    <div style={{ padding: "24px 28px", textAlign: "center", background: C.white, borderTop: "1px solid " + C.border }}>
      <div style={{ ...ff("s", 300, 12), letterSpacing: 1, color: C.muted }}>A 40-Day Journey into God's Presence</div>
      <div style={{ ...ff("d", 600, 14), color: C.navy, marginTop: 6 }}>{S.theme} {S.year} &middot; {S.name}</div>
    </div>
    <Ft /><Bar h={4} />
  </div>;
}

// ── APP ──
export default function App() {
  const [pg, setPg] = useState("land");
  const [sel, setSel] = useState(null);
  const dd = sel ? DAYS.find(d => d.day === sel) : null;
  const w = { maxWidth: 740, margin: "0 auto", boxShadow: "0 0 60px rgba(26,31,58,0.08)" };
  if (pg === "day" && dd) return <div style={w}><DayPg d={dd} onBack={() => { setPg("land"); setSel(null); }} onNav={d => setSel(d)} /></div>;
  return <div style={w}><Landing onDay={d => { setSel(d); setPg("day"); }} /></div>;
}

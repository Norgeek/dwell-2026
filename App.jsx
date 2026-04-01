import { useState, useEffect, useRef } from "react";
import { Analytics } from '@vercel/analytics/react';

const COLORS = {
  deepNavy: "#1a1f3a",
  warmGold: "#c8a45c",
  softGold: "#e8d5a3",
  parchment: "#faf6ee",
  cream: "#f5f0e3",
  warmWhite: "#fefcf7",
  textPrimary: "#2c2c2c",
  textSecondary: "#5a5a5a",
  textMuted: "#8a8a7a",
  accentBurgundy: "#7a3b4e",
  borderLight: "#e8e0d0",
};

const SERIES = {
  name: "Adorned & Armed",
  focusTheme: "Dwell",
  year: "2026",
};

const DEVOTIONALS = [
  {
    day: 2,
    title: "Dining with the King",
    audioUrl: "",
    quotes: [
      { text: "God does not invite us to His table to observe Him, but to commune with Him.", author: "A. W. Tozer" },
      { text: "The essence of the gospel is that we are invited to sit at God's table, not because we are worthy, but because Christ is.", author: "Timothy Keller" },
    ],
    anchorScripture: {
      text: "Hearing this, a man sitting at the table with Jesus exclaimed, 'What a blessing it will be to attend a banquet in the Kingdom of God!' Jesus replied with this story: 'A man prepared a great feast and sent out many invitations. When the banquet was ready, he sent his servant to tell the guests, Come, the banquet is ready.' But they all began making excuses...",
      ref: "Luke 14:15-24 NLT",
    },
    mainScriptures: ["Isaiah 55", "Psalm 19:7-14", "Luke 14:14-21", "Hebrews 4:12"],
    bodyContent: [
      { type: "p", text: "Throughout Scripture, we encounter extraordinary examples of kings and the invitations that surround their tables. The Queen of Sheba travelled a great distance to fellowship with Solomon, drawn by the fame of his wisdom. David extended an undeserved place at his own table to Mephibosheth, a man who, by every political calculation, should have been considered a threat. Yet David honoured Jonathan's memory through an act of radical, covenantal grace. Many of us would sacrifice anything for even a few minutes in the company of the powerful, those who shape nations, command industries, and move the levers of this world. We would rearrange our lives for such an encounter. Why? Because it is rare. Because it is time-bound. Because the proximity to greatness feels like a once-in-a-lifetime gift. If that is how we respond to earthly kings, why do we not consider what it means to dine with the King of Kings?" },
      { type: "p", text: "Dining with royalty is no casual affair. Whenever you consider the table of a king, certain realities remain constant: there is a chef, there are attendants to serve food and drink, and all that is required of you is to show up. But there is also protocol, a royal standard that qualifies a person to take their seat. It takes a certain degree of relevance and standing to dine with kings as a guest. The question, then, is this: Who is a King? And what does it mean to sit at His table?" },
      { type: "scripture", text: "'Look,' they told him, 'you are now old, and your sons are not like you. Give us a king to judge us like all the other nations have.' Samuel was displeased with their request and went to the Lord for guidance. 'Do everything they say to you,' the Lord replied, 'for they are rejecting me, not you. They don't want me to be their king any longer.'", ref: "1 Samuel 8:4-7 NLT" },
      { type: "p", text: "In this passage, Israel is not merely requesting a new political arrangement. They are revealing a shift in the heart. On the surface, their demand sounds practical enough. Samuel is ageing. His sons are corrupt. Leadership feels unstable. The desire for order and continuity makes sense. But God exposes what lies beneath the request: 'They are rejecting Me as their king.' That is the sting." },
      { type: "p", text: "Israel possessed something no other nation had, a God who ruled them directly. No throne. No crown. No palace. He raised judges as needed, guided them by His word, fought their battles, and defined their identity. But over time, that kind of invisible kingship felt uncomfortable. Slow. Risky. Different." },
      { type: "p", text: "They wanted to be 'like all the other nations.' That phrase carries weight. It was not merely about a king, it was about conformity. Israel was willing to trade divine dependence for human control. A visible king felt safer than an invisible God. Structure felt more reliable than relationship. Predictability felt better than trust. Does that sound like us today? We want all the benefits of the King but still crave autonomy. We want to be like the people of the world." },
      { type: "p", text: "There is a quiet warning here for every generation of God's people: when God's leadership feels inconvenient, we may replace it with systems. When trust feels costly, we may reach for control. When being set apart feels lonely, we may choose to blend in. This is not merely Israel's story. It is ours." },
      { type: "divider" },
      { type: "p", text: "The constitution of every kingdom carries common elements: reign, authority, power, kings and priests, laws and protocols. But there is something beautiful about sitting at the feet of a King in fellowship. In that moment, He hardly speaks of constitutions. That is a moment of communion. We are part of a kingdom that qualifies us as sons with permanent seats at His table, and yet the painful reality is that most of us never show up." },
      { type: "p", text: "At the King's table, you notice two kinds of people: guests and family. Guests visit. They are invited, honoured, and then they leave. Family, on the other hand, have a permanent seat. The question for us is clear: if we are dining with a great King, which position do we prefer, to be guests who come and go, or family with a dedicated, enduring place?" },
      { type: "scripture", text: "'On this mountain the Lord Almighty will prepare a feast of rich food for all peoples, a banquet of aged wine, the best of meats and the finest of wines.'", ref: "Isaiah 25:6" },
      { type: "p", text: "In 2 Samuel 19:31-40, we encounter David's kindness to Barzillai, a grand invitation to come and live in Jerusalem, to dine permanently with the king. But Barzillai turned it down. He felt he was too old to enjoy such a privilege. Instead, he asked that his son Kimham receive the seat. And here is the grace in the story: Kimham would enjoy something he had neither earned nor worked for. It was given purely by grace, a permanent place at the king's table, for the rest of his life. Barzillai becomes a type of Christ: offering his place at the table to those who do not qualify on their own merits, yet who are granted the privilege to sit and dine with the King." },
      { type: "p", text: "So what does it mean when God invites you to dine with Him? It is at the dinner table that you can ask your deepest questions and be assured of an answer, because the dinner table is not about law but about relationship. The King shares what is on His heart. He offers personal commitment. And that encounter is nothing like meeting Him on His throne. It is intimate. It is transformative. It is yours." },
      { type: "p", text: "When we come to dinner with the Lord, it is just you. Out of all the people He could summon, He wants to spend time with you." },
    ],
    journalQuestions: [
      "Where are you in your walk with God?",
      "How often do you spend time with the Word?",
      "How can you prioritize your spiritual life amid work, responsibilities, and relationships?",
      "If God is inviting you to something deeper, how will you respond?",
      "What excuses do you often make in your spiritual life, work, or personal growth?",
      "Are your excuses preventing you from fulfilling your purpose or deepening your faith?",
    ],
    prayers: [
      "Thank God for His Word today and ask Him to forgive us in any way that we have despised His Word.",
      "Pray and ask God to grant us understanding of His Word and remove any hindrances that come between us and His Word.",
      "Pray and ask God to give us the grace to prioritize His Word.",
      "Ask God to grant us fresh insight and desire for His Word.",
      "Ask God to set you free from any words that have ensnared you.",
    ],
  },
];

const ALL_DAYS = Array.from({ length: 40 }, (_, i) => {
  const dayNum = i + 1;
  const found = DEVOTIONALS.find((d) => d.day === dayNum);
  return { day: dayNum, title: found ? found.title : "Day " + String(dayNum).padStart(2, "0"), published: !!found };
});

/* ============================================================
   SHARED COMPONENTS
   ============================================================ */

function TopBar() {
  return <div style={{ height: 5, background: "linear-gradient(90deg, " + COLORS.deepNavy + " 0%, " + COLORS.warmGold + " 50%, " + COLORS.deepNavy + " 100%)" }} />;
}

function BottomBar() {
  return <div style={{ height: 4, background: "linear-gradient(90deg, " + COLORS.deepNavy + " 0%, " + COLORS.warmGold + " 50%, " + COLORS.deepNavy + " 100%)" }} />;
}

function Ornament({ style: s }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, color: COLORS.warmGold, opacity: 0.5, ...s }}>
      <div style={{ width: 40, height: 1, background: COLORS.warmGold }} />
      <span style={{ fontSize: 18 }}>&#10022;</span>
      <div style={{ width: 40, height: 1, background: COLORS.warmGold }} />
    </div>
  );
}

function CopyrightFooter() {
  return (
    <div style={{ padding: "20px 28px", textAlign: "center", background: COLORS.deepNavy, borderTop: "1px solid rgba(200,164,92,0.2)" }}>
      <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: 1.5, color: "rgba(255,255,255,0.45)" }}>
        &copy; {SERIES.year} {SERIES.focusTheme} &nbsp;||&nbsp; {SERIES.name}
      </div>
    </div>
  );
}

function CompactHeader() {
  return (
    <div style={{ background: COLORS.deepNavy, padding: "20px 20px 16px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(200,164,92,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: COLORS.warmGold, opacity: 0.7, marginBottom: 4, position: "relative" }}>
        {SERIES.name}
      </div>
      <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 700, fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: "#fff", position: "relative" }}>
        {SERIES.focusTheme} {SERIES.year}
      </div>
    </div>
  );
}

function AudioPlayer({ url }) {
  if (!url) return (
    <div style={{ textAlign: "center", padding: "12px 0", fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
      Audio coming soon
    </div>
  );
  return <audio controls preload="metadata" style={{ width: "100%", borderRadius: 4 }} src={url} />;
}

/* ============================================================
   ABOUT PAGE
   ============================================================ */

function AboutPage({ onBack }) {
  const topRef = useRef(null);
  useEffect(() => { topRef.current?.scrollIntoView({ behavior: "smooth" }); }, []);

  const pStyle = { fontFamily: "'Lora',Georgia,serif", fontSize: 15, lineHeight: 1.85, color: COLORS.textSecondary, marginBottom: 20 };
  const headingStyle = { fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 600, fontSize: 22, color: COLORS.deepNavy, marginBottom: 8, marginTop: 32 };

  return (
    <div ref={topRef} style={{ background: COLORS.warmWhite, minHeight: "100vh" }}>
      <TopBar />
      <CompactHeader />

      <div style={{ padding: "44px 32px 36px", textAlign: "center", background: "linear-gradient(180deg, " + COLORS.warmWhite + " 0%, " + COLORS.cream + " 100%)", borderBottom: "1px solid " + COLORS.borderLight }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: 3.5, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 12 }}>
          Welcome
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 700, fontSize: "clamp(28px,5vw,38px)", lineHeight: 1.2, color: COLORS.deepNavy, marginBottom: 20 }}>
          About This Devotional
        </h1>
        <Ornament />
      </div>

      <div style={{ padding: "36px 32px 44px" }}>

        <p style={pStyle}>
          <strong style={{ color: COLORS.deepNavy }}>Dwell 2026</strong> is a 40-day devotional journey produced under the ministry banner of <strong style={{ color: COLORS.deepNavy }}>Adorned & Armed</strong>. It is an invitation to slow down, to draw near, and to make the Word of God your dwelling place. Over the course of forty days, each bulletin will guide you through Scripture, reflection, prayer, and journaling as you deepen your communion with the King of Kings.
        </p>

        <div style={headingStyle}>What Does It Mean to Dwell?</div>
        <p style={pStyle}>
          To dwell is more than to visit. It is to remain, to settle, to make your home in the presence of God. In a world that rewards busyness and celebrates speed, this series calls you to the counter-cultural act of stillness, of sitting at the table of the Lord not as a guest who comes and goes, but as a son or daughter with a permanent seat.
        </p>

        <div style={headingStyle}>How to Use This Devotional</div>
        <p style={pStyle}>
          Each day includes an opening Scripture, a written devotional reflection, journal questions for personal meditation, and guided prayer points. There is also an audio version of each bulletin so you can listen on the go. We encourage you to set aside a consistent time each day, bring your Bible and a journal, and allow the Holy Spirit to speak to you through the Word.
        </p>

        <div style={headingStyle}>About Adorned & Armed</div>
        <p style={pStyle}>
          Adorned & Armed is a ministry committed to equipping believers with the beauty of God's Word and the strength of His Spirit. We believe that the life of faith is one of both grace and battle, of worship and warfare, and that every believer is called to be adorned in righteousness and armed with truth.
        </p>

        <div style={headingStyle}>Stay Connected</div>
        <p style={pStyle}>
          New devotionals are added daily throughout the 40-day journey. Bookmark this site and return each day for the next bulletin. Share it with your community, your small group, your family. This journey is best walked together.
        </p>

      </div>

      <div style={{ padding: "18px 28px", display: "flex", justifyContent: "center", background: COLORS.cream, borderTop: "1px solid " + COLORS.borderLight }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: COLORS.warmGold }}>
          &larr; Back to All Days
        </button>
      </div>

      <CopyrightFooter />
      <BottomBar />
    </div>
  );
}

/* ============================================================
   LANDING PAGE
   ============================================================ */

function LandingPage({ onSelectDay, onAbout }) {
  const [hoveredDay, setHoveredDay] = useState(null);
  const [aboutHover, setAboutHover] = useState(false);

  return (
    <div style={{ background: COLORS.warmWhite, minHeight: "100vh" }}>
      <TopBar />

      {/* Hero */}
      <div style={{ background: COLORS.deepNavy, padding: "48px 24px 44px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(200,164,92,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 12, letterSpacing: 4, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 14, position: "relative", opacity: 0.85 }}>
          {SERIES.name}
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 700, fontSize: "clamp(42px,8vw,64px)", lineHeight: 1.05, color: "#fff", marginBottom: 6, position: "relative", letterSpacing: 3, textTransform: "uppercase" }}>
          {SERIES.focusTheme}
        </h1>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 400, fontSize: 16, letterSpacing: 6, textTransform: "uppercase", color: COLORS.softGold, marginBottom: 22, position: "relative" }}>
          {SERIES.year}
        </div>

        <div style={{ width: 60, height: 1, background: COLORS.warmGold, margin: "0 auto 20px", opacity: 0.4, position: "relative" }} />

        <p style={{ fontFamily: "'Lora',Georgia,serif", fontStyle: "italic", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.50)", maxWidth: 480, margin: "0 auto 8px", position: "relative" }}>
          A 40-Day Devotional Journey
        </p>

        <div style={{ position: "relative", marginTop: 20 }}><Ornament /></div>
      </div>

      {/* About Button */}
      <div style={{ padding: "20px 20px 0", textAlign: "center" }}>
        <button
          onClick={onAbout}
          onMouseEnter={() => setAboutHover(true)}
          onMouseLeave={() => setAboutHover(false)}
          style={{
            background: aboutHover ? COLORS.deepNavy : "transparent",
            border: "1px solid " + COLORS.warmGold,
            borderRadius: 6,
            padding: "10px 28px",
            cursor: "pointer",
            fontFamily: "'Source Sans 3',sans-serif",
            fontSize: 12,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: aboutHover ? "#fff" : COLORS.warmGold,
            transition: "all 0.25s ease",
          }}
        >
          About This Devotional
        </button>
      </div>

      {/* Grid */}
      <div style={{ padding: "28px 20px 48px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 24, textAlign: "center" }}>
          Select a Day
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
          {ALL_DAYS.map((d) => {
            const isHovered = hoveredDay === d.day && d.published;
            return (
              <button key={d.day} onClick={() => d.published && onSelectDay(d.day)} onMouseEnter={() => setHoveredDay(d.day)} onMouseLeave={() => setHoveredDay(null)}
                style={{ display: "block", width: "100%", padding: "18px 14px", textAlign: "left", background: isHovered ? COLORS.deepNavy : COLORS.cream, border: "1px " + (d.published ? "solid" : "dashed") + " " + (isHovered ? COLORS.deepNavy : COLORS.borderLight), borderRadius: 6, cursor: d.published ? "pointer" : "default", opacity: d.published ? 1 : 0.4, transform: isHovered ? "translateY(-2px)" : "none", boxShadow: isHovered ? "0 8px 24px rgba(26,31,58,0.15)" : "none", transition: "all 0.25s ease", position: "relative", overflow: "hidden" }}>
                <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 5 }}>
                  Day {String(d.day).padStart(2, "0")}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 600, fontSize: 14, lineHeight: 1.35, color: isHovered ? "#fff" : d.published ? COLORS.deepNavy : COLORS.textMuted, transition: "color 0.25s" }}>
                  {d.title}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "24px 20px", textAlign: "center", background: COLORS.cream, borderTop: "1px solid " + COLORS.borderLight }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 12, letterSpacing: 1, color: COLORS.textMuted }}>New devotionals added as they are completed</div>
      </div>
      <CopyrightFooter />
      <BottomBar />
    </div>
  );
}

/* ============================================================
   DAY PAGE
   ============================================================ */

function DayPage({ dayData, onBack, onNavigate }) {
  const topRef = useRef(null);
  const d = dayData;

  useEffect(() => { topRef.current?.scrollIntoView({ behavior: "smooth" }); }, [d.day]);

  const prevDay = DEVOTIONALS.slice().reverse().find((x) => x.day < d.day);
  const nextDay = DEVOTIONALS.find((x) => x.day > d.day);
  const pStyle = { fontFamily: "'Lora',Georgia,serif", fontSize: 16, lineHeight: 1.85, color: COLORS.textPrimary, marginBottom: 22, textAlign: "justify", hyphens: "auto" };

  return (
    <div ref={topRef} style={{ background: COLORS.warmWhite, minHeight: "100vh" }}>
      <TopBar />
      <CompactHeader />

      <div style={{ padding: "44px 28px 36px", textAlign: "center", background: "linear-gradient(180deg, " + COLORS.warmWhite + " 0%, " + COLORS.cream + " 100%)", borderBottom: "1px solid " + COLORS.borderLight }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: 3.5, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 12 }}>
          Day {String(d.day).padStart(2, "0")}
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 700, fontSize: "clamp(28px,5vw,40px)", lineHeight: 1.2, color: COLORS.deepNavy, marginBottom: 20 }}>
          {d.title}
        </h1>
        <Ornament />
      </div>

      {d.quotes && d.quotes.length > 0 && (
        <div style={{ padding: "28px 28px", background: COLORS.cream, borderBottom: "1px solid " + COLORS.borderLight }}>
          {d.quotes.map((q, i) => (
            <div key={i} style={{ textAlign: "center", padding: "12px 16px", borderTop: i > 0 ? "1px solid rgba(200,164,92,0.2)" : "none", marginTop: i > 0 ? 8 : 0, paddingTop: i > 0 ? 18 : 12 }}>
              <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontStyle: "italic", fontWeight: 500, fontSize: 16, lineHeight: 1.7, color: COLORS.deepNavy, marginBottom: 8 }}>
                &ldquo;{q.text}&rdquo;
              </div>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 400, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", color: COLORS.warmGold }}>
                &mdash; {q.author}
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ padding: "24px 28px", background: COLORS.deepNavy, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(200,164,92,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 12, display: "flex", alignItems: "center", gap: 10, position: "relative" }}>
          <div style={{ width: 20, height: 20, border: "1.5px solid " + COLORS.warmGold, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="9" height="9" viewBox="0 0 24 24" fill={COLORS.warmGold} style={{ marginLeft: 1 }}><polygon points="5,3 19,12 5,21" /></svg>
          </div>
          Listen to Today's Bulletin
        </div>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "14px 18px", border: "1px solid rgba(200,164,92,0.15)", position: "relative" }}>
          <AudioPlayer url={d.audioUrl} />
        </div>
      </div>

      <div style={{ padding: "32px 28px", background: COLORS.cream, borderTop: "1px solid " + COLORS.borderLight, borderBottom: "1px solid " + COLORS.borderLight }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 16, textAlign: "center" }}>Today's Scripture</div>
        <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontStyle: "italic", fontSize: 16, lineHeight: 1.85, color: COLORS.textPrimary, textAlign: "center", padding: "0 8px" }}>{d.anchorScripture.text}</div>
        <div style={{ textAlign: "center", marginTop: 14, fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 13, color: COLORS.warmGold, letterSpacing: 0.5 }}>{d.anchorScripture.ref}</div>
      </div>

      <div style={{ padding: "40px 28px 16px" }}>
        {d.bodyContent.map((block, i) => {
          if (block.type === "p") return <p key={i} style={pStyle}>{block.text}</p>;
          if (block.type === "scripture") return (
            <div key={i} style={{ margin: "28px 0", padding: "22px 26px", background: COLORS.cream, borderLeft: "3px solid " + COLORS.warmGold, borderRadius: "0 6px 6px 0" }}>
              <p style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontStyle: "italic", fontSize: 15, lineHeight: 1.8, color: COLORS.textPrimary, marginBottom: 10 }}>{block.text}</p>
              <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 500, fontSize: 12, color: COLORS.warmGold, letterSpacing: 0.5 }}>{block.ref}</div>
            </div>
          );
          if (block.type === "divider") return <Ornament key={i} style={{ padding: "16px 0" }} />;
          return null;
        })}
      </div>

      <div style={{ padding: "22px 28px", background: COLORS.deepNavy, textAlign: "center" }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: COLORS.warmGold, marginBottom: 8, opacity: 0.7 }}>Today's Scriptures</div>
        <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 500, fontSize: 15, color: "#fff", letterSpacing: 0.5, lineHeight: 1.6 }}>
          {d.mainScriptures.join("  \u00B7  ")}
        </div>
      </div>

      <div style={{ padding: "32px 28px", background: COLORS.cream, borderTop: "1px solid " + COLORS.borderLight }}>
        <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 600, fontSize: 20, color: COLORS.deepNavy, marginBottom: 4 }}>Journal Questions</div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: COLORS.textMuted, marginBottom: 20 }}>Reflect &middot; Write &middot; Respond</div>
        {d.journalQuestions.map((q, i) => (
          <div key={i} style={{ padding: "12px 0 12px 26px", borderBottom: i < d.journalQuestions.length - 1 ? "1px solid rgba(200,164,92,0.15)" : "none", position: "relative", fontFamily: "'Lora',Georgia,serif", fontSize: 15, lineHeight: 1.7, color: COLORS.textSecondary }}>
            <span style={{ position: "absolute", left: 0, top: 12, fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 700, fontSize: 18, color: COLORS.warmGold, opacity: 0.6 }}>?</span>
            {q}
          </div>
        ))}
      </div>

      <div style={{ padding: "0 28px 32px", background: COLORS.cream }}>
        <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 600, fontSize: 20, color: COLORS.deepNavy, marginBottom: 4 }}>Prayers</div>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", color: COLORS.textMuted, marginBottom: 20 }}>Bring these before the Lord</div>
        {d.prayers.map((p, i) => (
          <div key={i} style={{ padding: "12px 0 12px 26px", borderBottom: i < d.prayers.length - 1 ? "1px solid rgba(200,164,92,0.15)" : "none", position: "relative", fontFamily: "'Lora',Georgia,serif", fontSize: 15, lineHeight: 1.7, color: COLORS.textSecondary }}>
            <span style={{ position: "absolute", left: 4, top: 14, fontSize: 8, color: COLORS.warmGold, opacity: 0.7 }}>&#10022;</span>
            {p}
          </div>
        ))}
      </div>

      <div style={{ padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", background: COLORS.cream, borderTop: "1px solid " + COLORS.borderLight }}>
        {prevDay ? <button onClick={() => onNavigate(prevDay.day)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: COLORS.warmGold }}>&larr; Day {String(prevDay.day).padStart(2, "0")}</button> : <div />}
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: COLORS.warmGold }}>All Days</button>
        {nextDay ? <button onClick={() => onNavigate(nextDay.day)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Source Sans 3',sans-serif", fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: COLORS.warmGold }}>Day {String(nextDay.day).padStart(2, "0")} &rarr;</button> : <div />}
      </div>

      <div style={{ padding: "24px 28px", textAlign: "center", background: COLORS.warmWhite, borderTop: "1px solid " + COLORS.borderLight }}>
        <div style={{ fontFamily: "'Source Sans 3',sans-serif", fontWeight: 300, fontSize: 12, letterSpacing: 1, color: COLORS.textMuted }}>A 40-Day Journey into God's Presence</div>
        <div style={{ fontFamily: "'Cormorant Garamond',Georgia,serif", fontWeight: 600, fontSize: 14, color: COLORS.deepNavy, marginTop: 6 }}>{SERIES.focusTheme} {SERIES.year} &middot; {SERIES.name}</div>
      </div>
      <CopyrightFooter />
      <BottomBar />
    </div>
  );
}

/* ============================================================
   MAIN APP
   ============================================================ */

export default function App() {
  const [page, setPage] = useState("landing");
  const [selectedDay, setSelectedDay] = useState(null);

  const dayData = selectedDay ? DEVOTIONALS.find((d) => d.day === selectedDay) : null;

  if (page === "about") {
    return (
      <div style={{ maxWidth: 740, margin: "0 auto", boxShadow: "0 0 60px rgba(26,31,58,0.08)" }}>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <AboutPage onBack={() => setPage("landing")} />
      </div>
    );
  }

  if (page === "day" && dayData) {
    return (
      <div style={{ maxWidth: 740, margin: "0 auto", boxShadow: "0 0 60px rgba(26,31,58,0.08)" }}>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <DayPage
          dayData={dayData}
          onBack={() => { setPage("landing"); setSelectedDay(null); }}
          onNavigate={(day) => setSelectedDay(day)}
        />
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 740, margin: "0 auto", boxShadow: "0 0 60px rgba(26,31,58,0.08)" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Source+Sans+3:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <LandingPage
        onSelectDay={(day) => { setSelectedDay(day); setPage("day"); }}
        onAbout={() => setPage("about")}
      />
      <Analytics />
    </div>
  );
}

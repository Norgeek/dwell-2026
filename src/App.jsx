import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════════
// CONFIG: Set your Google Apps Script deployed web app URL here
// after deploying the Code.gs as a web app.
// ══════════════════════════════════════════════════════════
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxM66bZYNF6XWdTR5Hpf3Z51ziBaQVmJm5WromnCMFD47LGqaiSJmLV7osH2oEeQ1cHDw/exec";

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
    anchor: [
      { text: "Dwell in Me, and I will dwell in you. Live in Me, and I will live in you. Just as no branch can bear fruit of itself without abiding in (being vitally united to) the vine, neither can you bear fruit unless you abide in Me.", ref: "John 15:4 (AMPC)" },
      { text: "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty.", ref: "Psalm 91:1 (ESV)" },
    ],
    scriptures: ["John 15:1-7", "Psalm 91:1"],
    body: [
      { t: "p", x: "There is something deeply human about the desire for a place to belong, a space where we are not merely passing through, but where we can settle, rest, and remain. This longing is not accidental; it reflects the very heart of God toward us. From the beginning, His desire has never been for occasional encounters, but for continual dwelling." },
      { t: "p", x: "In the Old Testament, the richness of this invitation is captured in the Hebrew word yashab, a word that begins with something as simple as 'to sit down,' yet unfolds into 'to remain, to settle, to inhabit.' It carries the sense of permanence, not movement; of residence, not visitation. Its first appearance is seen in Genesis 4:20, where Jabal is described as the father of those who dwell in tents, those who settle and live in a place. When the Psalmist later declares, 'He who dwells in the shelter of the Most High,' he is describing a life that has chosen God as its settled habitation, not a refuge visited only in moments of need." },
      { t: "p", x: "Alongside this, another word deepens the picture, lun, meaning to lodge, to stay overnight, to remain under covering. Its first appearance is found in Genesis 19:2, when Lot invites his visitors to come into his house and spend the night. This language introduces the idea of hospitality, shelter, and protection. Together, these words reveal a profound truth: those who make God their dwelling place, who continually remain in Him, enter into a life marked by rest, covering, and abiding security." },
      { t: "p", x: "Yet this privilege did not begin with man reaching for God, but with God reaching for man. In Eden, He walked with humanity in intimate fellowship. Even when sin disrupted that communion, His pursuit did not cease. Through Noah, He provided an ark, a place of preservation and rest that foreshadowed something greater. Through Abraham's descendants, He formed a people and declared His intent clearly: 'Let them make Me a sanctuary, that I may dwell among them' (Exodus 25:8). The word used, shakan, would later give rise to Shekinah, the manifest presence of God." },
      { t: "p", x: "Again and again, He affirmed this desire, declaring that He would dwell among His people and be their God (Exodus 29:45-46; Leviticus 26:11-12). This was never casual; it was covenantal, deeply intentional, echoing the closeness of Eden. Yet, for much of Israel's history, this reality was only partially experienced. God's presence was real, but often distant, glimpsed, approached cautiously, and at times forfeited through disobedience. Still, the promise remained alive in the hearts of prophets and psalmists, who spoke of a coming day when God would dwell fully and freely among His people." },
      { t: "s", x: "'For behold, I am coming and I will dwell in your midst...'", r: "Zechariah 2:10" },
      { t: "s", x: "'My dwelling place shall be with them... I will be their God, and they shall be My people.'", r: "Ezekiel 37:26-27" },
      { t: "d" },
      { t: "p", x: "Then, in the fullness of time, what had long been promised became flesh. God did not merely visit. He came to dwell. Emmanuel, God with us, walked among men. He revealed the Father's heart, extended grace, and invited many into relationship. Yet even then, many did not perceive Him. Crowds gathered for miracles but drifted away; leaders resisted Him; and only a few remained." },
      { t: "p", x: "It was to these few, on the eve of His suffering, that Jesus spoke words that would carry eternal weight. Having loved them to the end, having served them in humility, He called them into something deeper:" },
      { t: "s", x: "'I am the true vine... Abide in Me, and I in you. As the branch cannot bear fruit by itself, unless it abides in the vine, neither can you, unless you abide in Me.'", r: "John 15:1, 4 (ESV)" },
      { t: "p", x: "The word He used, meno, means to remain, to continue, to stay. This was not a suggestion, but an invitation into living union. As the vine is the source of life for every branch, so Christ offers Himself as the continual source of life, strength, and fruitfulness for His people. But the branch must remain connected. Its life, its growth, and its fruit all depend on that abiding union." },
      { t: "p", x: "For the disciples, and for us, this is both an invitation and a charge. The outcome of our lives is inseparably tied to the depth of our connection to Him. A branch does not strive to bear fruit; it simply remains, and the life of the vine does the rest. In the same way, the evidence of Christ abiding in us is seen in how His Word abides in us, shaping our desires, directing our prayers, and producing fruit that glorifies the Father:" },
      { t: "s", x: "'If you abide in Me, and My words abide in you, ask whatever you wish, and it will be done for you. By this My Father is glorified, that you bear much fruit...'", r: "John 15:7-8 (ESV)" },
      { t: "p", x: "Here lies the secret of a life that is fruitful, effective, and full of joy: not in striving, but in dwelling." },
      { t: "d" },
      { t: "p", x: "As we begin this 40-day journey, we are not merely committing to a spiritual exercise; we are responding to a divine invitation. A life of abiding is not reserved for a few. It is the calling of every believer. There is a depth of satisfaction, a richness of presence, and a fruitfulness of life that awaits those who will choose to remain." },
      { t: "p", x: "May the Lord grant us grace in this season, not just to seek Him, but to stay with Him; not just to visit His presence, but to dwell in it. And as we do, may we discover the quiet joy of being rooted in Him, sustained by Him, and filled with the fullness that only His presence can give." },
      { t: "p", x: "Take a moment today to pause before Him. Ask yourself honestly: have I been visiting, or have I been dwelling? What would it look like for me to truly remain in Him, through His Word, in prayer, in daily awareness of His presence? Bring your heart before Him and simply say:" },
      { t: "p", x: "Lord, teach me to dwell. Settle my heart in You. Let my life be rooted in Your presence, and let Your Word live richly within me. Make me fruitful as I remain in You. Amen." },
    ],
    journal: [
      "In what ways have I been 'visiting' God rather than truly dwelling in Him, and what patterns in my life reveal this?",
      "What does it practically look like for me to remain (abide) in Christ daily through His Word, prayer, and awareness of His presence, and what is currently hindering that consistency?",
      "Where am I striving to produce fruit in my own strength instead of resting in my connection to the Vine, and how can I surrender that striving?",
      "If God is inviting me into a life of settled habitation (not occasional encounters), what would need to shift in my priorities, rhythms, or desires for Him to truly become my dwelling place?",
    ],
    prayers: [
      "Thank God for His desire to dwell with you and for the invitation to abide in His presence continually.",
      "Ask the Father to teach you how to remain in Him daily through His Word, through prayer, and through a conscious awareness of His presence.",
      "Invite the Lord to remove every distraction, inconsistency, and spiritual instability that keeps you from being settled in Him.",
      "Ask Jesus to help you abide in Him as the true vine so that your life continually draws strength, life, and nourishment from Him.",
      "Pray for grace to let His Word dwell richly within you, shaping your desires, directing your prayers, and producing fruit that glorifies Him.",
      "Ask the Lord to make your life fruitful as you remain in Him, that your life may reflect His fullness, His joy, and His presence daily.",
    ],
  },
  {
    day: 2,
    title: "Dining with the King",
    audioUrl: "/audio/day-02.mp3",
    quotes: [
      { text: "God does not invite us to His table to observe Him, but to commune with Him.", author: "A. W. Tozer" },
      { text: "The essence of the gospel is that we are invited to sit at God's table, not because we are worthy, but because Christ is.", author: "Timothy Keller" },
    ],
    anchor: [
      { text: "On this mountain the Lord Almighty will prepare a feast of rich food for all peoples, a banquet of aged wine, the best of meats and the finest of wines.", ref: "Isaiah 25:6 (NIV)" },
      { text: "Blessed are those who are invited to the wedding supper of the Lamb!", ref: "Revelation 19:9 (NIV)" },
    ],
    scriptures: ["Isaiah 25:6", "Revelation 19:9", "2 Samuel 9:1-13", "1 Kings 10:1-9", "Luke 14:15-24"],
    body: [
      { t: "p", x: "To dwell with God is to remain in His presence, but Scripture reveals that His desire goes even further. He does not only call us to stay with Him; He invites us to share life with Him. The language of dwelling naturally leads us to the picture of a table, where presence becomes fellowship and nearness becomes communion." },
      { t: "p", x: "This was glimpsed in a remarkable moment in Israel's journey. When God revealed Himself on Mount Sinai, His presence was overwhelming, marked by thunder, fire, and thick clouds. The people stood at a distance in fear, yet Moses, along with Aaron, Nadab, Abihu, and seventy elders, was invited to come closer. What followed was unexpected. They beheld the God of Israel, and instead of being consumed, they ate and drank." },
      { t: "s", x: "'They beheld God, and ate and drank.'", r: "Exodus 24:11 (ESV)" },
      { t: "p", x: "What seemed like a moment of awe became a moment of fellowship. God was not only revealing His glory; He was extending His table." },
      { t: "p", x: "In that culture, to eat together was never casual. It was a sign of acceptance, covenant, and relationship. From the earliest pages of Scripture, eating was tied to trust and participation, God inviting humanity to partake of what He had provided. Even within Israel's worship, offerings were not only given to God but shared in His presence." },
      { t: "s", x: "'In the presence of the Lord your God... you shall eat and rejoice.'", r: "Deuteronomy 14:26 (ESV)" },
      { t: "p", x: "That moment on the mountain was a foreshadowing, a glimpse of a God who desires not just reverence from afar, but relationship up close." },
      { t: "p", x: "This thread runs consistently through Scripture. When Christ came, He did not keep His distance. He sat at tables, broke bread, and shared meals with those who followed Him. In His final hours, He gathered His disciples around a table once more. And even now, the invitation continues." },
      { t: "s", x: "'If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me.'", r: "Revelation 3:20 (ESV)" },
      { t: "p", x: "All of this points toward a final, glorious fulfillment, the marriage supper of the Lamb, where communion with Him will be complete and unbroken." },
      { t: "d" },
      { t: "p", x: "We begin to grasp the weight of this invitation when we consider what it means to dine with earthly royalty. Such moments are rare, significant, and often life altering. When the Queen of Sheba came to see Solomon, the experience of his table overwhelmed her; it exceeded every report she had heard." },
      { t: "p", x: "Then there is Mephibosheth. He was the son of Jonathan, grandson of King Saul, a man with no standing, living in obscurity and unable to help himself. By every expectation, he had reason to fear the king rather than approach him. Yet King David sent for him, not because he had earned favor, but because of a covenant made with his father. Mephibosheth came trembling, fell on his face, and instead of judgment, received kindness. From that day, he ate continually at the king's table, like one of the king's own sons. A place he did not deserve became his place of belonging." },
      { t: "p", x: "These moments resonate because something within us understands the value of proximity to greatness. If given the opportunity to dine with a king or a person of great influence, we would rearrange our schedules, travel great distances, and prepare ourselves carefully. We instinctively recognize that such invitations are rare, and that what happens at that table matters." },
      { t: "p", x: "But there is a greater table set before us." },
      { t: "p", x: "The prophets saw it, a feast prepared by the Lord Himself, rich and abundant beyond measure. Revelation speaks of it again, a wedding supper, not for a select few, but for all who respond to the invitation. This is not poetic imagery alone; it is the culmination of God's desire from the beginning, a people gathered near, not as spectators, but as participants in His presence." },
      { t: "p", x: "And yet, this invitation carries something even more profound than any earthly parallel. At a king's banquet, you are one among many guests. But when God invites you, the invitation is deeply personal. The King of Kings, who holds all things together, desires fellowship with you, not as part of a crowd, but as one who is known and welcomed." },
      { t: "d" },
      { t: "p", x: "At every royal table, there are guests and there is family. Guests come for a moment; family belongs. Guests are invited occasionally; family has a seat that remains. And this is where the invitation of God becomes astonishing. He is not calling us to visit occasionally, but to belong continually. He is not offering a passing experience, but a place." },
      { t: "p", x: "This is the heart of the gospel: not merely that we are forgiven, but that we are brought near; not only that we are redeemed, but that we are received. A table has been set, a place has been prepared, and the invitation has gone out." },
      { t: "p", x: "So the question that remains is simple, yet searching. If we would sacrifice time, comfort, and convenience to sit for even a short while at the table of an earthly king, how will we respond to the invitation of the King of Kings?" },
      { t: "p", x: "There is a seat prepared for you. The table is ready. The invitation stands." },
      { t: "p", x: "Will you come, and will you remain?" },
    ],
    journal: [
      "Think of the person whose table you would most want to sit at. What would you be willing to do to receive, and keep, that invitation? Now honestly compare that to how you have treated God's invitation.",
      "Do you relate to God as a guest, occasional and dependent on how you feel, or as family, with a permanent seat you are meant to occupy? What has shaped that experience?",
      "When God invites you to His table through His Word, prayer, or stillness, how do you usually respond? What does that response reveal?",
      "What might change in your daily life if you truly believed that the King of Kings desires unhurried, undivided time with you?",
    ],
    prayers: [
      "Thank God for the extraordinary privilege of His invitation, that the King of Kings has set a table and called you by name.",
      "Ask His forgiveness for the times you have treated His invitation casually, delayed your response, or allowed lesser things to take priority.",
      "Pray for a fresh revelation of whose table it is, and what it means to be invited, not as a guest, but as one who belongs.",
      "Ask God to awaken in you a deep hunger for His presence, a hunger that will not be satisfied by anything else.",
      "Pray for those who have not yet accepted this invitation, that they would hear His call and respond with open hearts.",
    ],
    declaration: "I thank the Lord Jesus for inviting me to His table; not as a spectator, but as one welcomed into true fellowship. Today, I receive my place with the King, not by my worth, but by His grace. I choose to draw near and commune with Him, knowing I am accepted, known, and loved. I will not stay at a distance; I will sit, remain, and share in His presence. Like one of His own, I belong at His table, and I partake freely of all He has prepared. Today, I respond to His invitation with a willing and abiding heart.",
  },
  {
    day: 3,
    title: "Knowing the King",
    audioUrl: "/audio/day-03.mp3",
    quotes: [
      { text: "The King is not only to be obeyed from a distance, but known in closeness.", author: "Andrew Murray" },
      { text: "We must stop treating God as our assistant and start recognizing Him as our King.", author: "Francis Chan" },
    ],
    anchor: [
      { text: "They are rejecting Me, not you. They don't want Me to be their king any longer.", ref: "1 Samuel 8:7 (NLT)" },
    ],
    scriptures: ["1 Samuel 8:1-22", "Psalm 95:3-7", "Isaiah 43:15", "Psalm 24:7-10", "John 18:37"],
    body: [
      { t: "p", x: "Yesterday, we stood before the King's table and considered the weight of His invitation to dine. But before anyone can truly sit and receive what is offered there, something deeper must be settled in the heart: we must know who the King is. Because it is possible to be invited to the table and still miss its meaning if we have not recognized the One who is hosting us." },
      { t: "p", x: "This tension is not new. It runs deep in the story of God's people. Long before the language of banquets and feasts, Israel already had a King. He was not visible like the rulers of surrounding nations, yet He had chosen them, delivered them, guided them, and sustained them. His leadership was personal, faithful, and unlike anything any other nation possessed." },
      { t: "p", x: "Yet in time, what they had began to feel uncertain, even inadequate. Samuel, the prophet who had faithfully led them, was now old, and his sons, who should have carried on his legacy, were corrupt and did not walk in his ways. From a human perspective, the people's concern was understandable. They longed for stable, consistent leadership, something they could rely on for the future. So they came with what appeared to be a reasonable request: 'Give us a king... like all the other nations have.' But God revealed what was truly happening beneath their words: 'They are rejecting Me.'" },
      { t: "p", x: "This was not merely a change in leadership, it was a shift in trust. Israel exchanged a relationship with the unseen but faithful God for something visible, predictable, and easier to manage. The phrase 'like all the other nations' reveals the heart of it. Being set apart had become uncomfortable. Dependence on God felt uncertain. They preferred something they could see and control." },
      { t: "p", x: "And God allowed it." },
      { t: "p", x: "He warned them clearly what it would cost, yet He did not force them to choose differently. This is one of the sobering realities of Scripture: God will not compel what the heart refuses. He invites, He reveals, He warns, but He does not override." },
      { t: "p", x: "What happened in Israel is not just history, it is a mirror. The same pattern quietly repeats itself in our lives. When trusting God feels stretching, we reach for what feels safer. When His ways seem uncertain, we lean toward what we can control. We may still desire His blessings, His provision, even His presence, but without fully yielding to His rule." },
      { t: "p", x: "We want the table, but not always the King." },
      { t: "p", x: "Yet the word King carries more meaning than authority alone. At its root is the idea of belonging, of family, of identity. God has never desired to be a distant ruler issuing commands from afar. He has always desired to be the One to whom we belong, the One who shapes our identity, leads our lives, and calls us His own." },
      { t: "d" },
      { t: "p", x: "This is why the difference between the throne and the table matters." },
      { t: "p", x: "At the throne, there is distance. You come with formality, present your needs, and leave. It is a place of authority and judgment. But the table speaks of something deeper, relationship, fellowship, nearness. It is where hearts are shared, where understanding grows, where you begin to know the King beyond His power." },
      { t: "p", x: "And this is what God has always wanted, not occasional subjects, but sons and daughters who know Him." },
      { t: "p", x: "But that kind of fellowship begins with a decision. Not simply, Do I want what God can give me? but Do I truly want Him to be my King?" },
      { t: "p", x: "Not a version of Him shaped around my preferences. Not a God I consult when convenient. But the King, over my choices, my direction, my desires, my life." },
      { t: "p", x: "Until that question is answered honestly, the table will remain something we admire from a distance. The invitation is real. The seat is prepared. But something within us may still be holding back, wanting both His rule and our control." },
      { t: "p", x: "So today, the call is simple and searching: Do you know this King? Not just know about Him, but know Him. Have you recognised Him as your King, not in words alone, but in surrender?" },
      { t: "p", x: "Bring your heart before Him honestly. Let Him reveal anything that competes with His rightful place. And where you find hesitation, offer it to Him." },
      { t: "p", x: "Lord, open my eyes to see You as You truly are, my King. Remove every desire in me that seeks control over surrender. Teach me not only to come to Your table, but to belong fully to Your rule. Let my life reflect that I know You, not from a distance, but in truth. Amen." },
    ],
    journal: [
      "Do you come to God mainly to the throne, with requests and formality, or to the table, to know Him and be known? What has shaped that pattern?",
      "What 'reasonable' desires in your life may reflect a preference for what is visible and manageable over true dependence on God?",
      "Where are you tempted to 'be like others,' choosing conformity over the cost of being set apart?",
      "Is there an area where God has warned you, yet you continue to insist on your own way?",
      "Does your life reflect someone who truly belongs to the King? What would change if it did?",
    ],
    prayers: [
      "Confess where you have preferred control over God's rule. Ask for forgiveness.",
      "Ask God to reveal where you are relying on yourself instead of trusting Him.",
      "Pray for a deeper revelation of who He is as King, not just what He can do.",
      "Ask for freedom from the pressure to conform, and grace to live set apart.",
      "Pray for grace to move from formality into fellowship, to know His heart and walk with Him closely.",
    ],
    declaration: "I acknowledge the Lord as my King, faithful, sovereign, and worthy of my full surrender. Today, I choose not only His table, but His rule, yielding my will, my desires, and my direction to Him. I release every need for control and trust in His perfect leadership over my life. I am not distant or uncertain, I belong to Him as one who is known and led. As I honour Him as King, I draw near with confidence and communion. My life reflects His reign, and my heart rests fully under His authority.",
  },
  {
    day: 4,
    title: "Come, the Banquet Is Ready",
    audioUrl: "/audio/day-04.mp3",
    quotes: [
      { text: "The gospel... is God's offer... to come to the feast He has prepared.", author: "J. C. Ryle" },
      { text: "God invites all, but He compels none; He offers the feast, but forces no guest.", author: "St. Augustine of Hippo" },
    ],
    anchor: [
      { text: "A man prepared a great feast and sent out many invitations. When the banquet was ready, he sent his servant to tell the guests, 'Come, the banquet is ready.' But they all began making excuses. One said, 'I have just bought a field and must inspect it. Please excuse me.' Another said, 'I have just bought five pairs of oxen, and I want to try them out. Please excuse me.' Another said, 'I just got married, so I can't come.' The servant returned and told his master what they had said. His master was furious and said, 'Go quickly into the streets and alleys of the town and invite the poor, the crippled, the blind, and the lame.' After the servant had done this, he reported, 'There is still room for more.' So his master said, 'Go out into the country lanes and behind the hedges and urge anyone you find to come, so that the house will be full. For none of those I first invited will get even the smallest taste of my banquet.'", ref: "Luke 14:16-24 (NLT)" },
    ],
    scriptures: ["Luke 14:16-24", "Matthew 22:1-14", "Isaiah 55:1-3"],
    body: [
      { t: "p", x: "Over the past few days, we have stood before the King's table, then considered who He is, and what it means to know Him as King. Now the message comes to us plainly and personally. The table is no longer a distant idea. The feast is prepared. The invitation has been sent. The call has already gone out: Come, the banquet is ready." },
      { t: "p", x: "In the parable Jesus tells, those who refuse the invitation are not hostile or rebellious. They are simply occupied. Each one gives a reason that sounds entirely reasonable, responsibilities to attend to, work to be done, relationships to nurture. And that is what makes the parable so searching. These are not people who hate the King; they are people who have filled their lives so completely that there is no room left to respond to Him." },
      { t: "p", x: "One has purchased a field and must go and see it. What he has acquired now demands his attention. Another has bought oxen and wants to test them, his work and productivity take priority. A third has just been married and cannot come, his relationships require his presence. These are not sinful distractions; they are the substance of everyday life." },
      { t: "p", x: "And that is precisely the point." },
      { t: "p", x: "The invitation does not compete with what is obviously wrong. It competes with what is normal. With the responsibilities we carry, the work we pursue, and the relationships we cherish. And quietly, without intention, these things can take the place that belongs to the King." },
      { t: "p", x: "So the invitation is not rejected outright, it is postponed. Excused. Deferred to a 'better' time." },
      { t: "p", x: "But the parable does not treat this lightly. The master's response reveals something deeper than disappointment. It is the grief of love unreceived. Everything has been prepared. Nothing is lacking. Yet those who were invited choose other things instead." },
      { t: "d" },
      { t: "p", x: "Still, the invitation does not end there. It goes out wider, to the overlooked, the forgotten, the unlikely. And even then, there is still room. The heart of the King remains open and determined: the house will be filled." },
      { t: "p", x: "Yet the warning remains. Those who first received the invitation and answered with excuses did not return later. What they assumed could wait... did not. This is the quiet urgency of the moment before us." },
      { t: "p", x: "The invitation you hold today is not symbolic. It is present. The table is set now. And while life will always present responsibilities, opportunities, and demands, the question is whether anything has been allowed to take the place that belongs to Him." },
      { t: "p", x: "The King is not asking for a convenient moment, He is asking for a willing heart." },
      { t: "p", x: "The feast is ready. And there is still room." },
      { t: "p", x: "Will you come?" },
      { t: "d" },
      { t: "p", x: "Lord, I hear Your invitation. Show me every place where I have allowed good things to take Your place. Give me the grace to lay them down and respond fully to You. Teach me to value Your table above every competing voice, and to come without delay. Amen." },
    ],
    journal: [
      "What is your 'field,' the responsibility or pursuit that consistently takes time and attention that could be given to God?",
      "What are your 'oxen,' the work, productivity, or ambition that fills your days and pushes fellowship with God aside?",
      "What is your 'marriage,' a good and legitimate relationship or commitment that has quietly displaced time with Him?",
      "Have you been assuming there will be a more convenient time to respond to God? What could that assumption be costing you?",
    ],
    prayers: [
      "Thank God that His invitation still stands, that nothing has been withheld and the table is ready.",
      "Confess the specific excuses you have made. Name them honestly before Him.",
      "Ask for grace to see your excuses clearly, and courage to choose differently.",
      "Pray for a deeper hunger for God, one that makes lesser things lose their hold.",
      "Pray for those who feel uninvited or unworthy, that they would hear His call, and that you would be part of reaching them.",
    ],
    declaration: "I thank the King of Kings for His invitation to His rich banquet. By His grace, I choose to respond now, not later. I will not allow distractions, responsibilities, or even good things to take the place that belongs to Him. Today, I lay down every excuse and make room for His presence. My heart is attentive, my priorities are aligned, and my life is open to Him. I value His table above all else, knowing what He offers is greater than anything competing for my attention. I come ready, hungry, and willing.",
  },
  {
    day: 5,
    title: "The Gift of Time",
    audioUrl: "/audio/day-05.mp3",
    quotes: [
      { text: "God is not looking for men who will give Him their spare time... but for those who will give Him the first place.", author: "Oswald Chambers" },
      { text: "We are so occupied with the urgent that we forget the important.", author: "Charles Hummel" },
    ],
    anchor: [
      { text: "Look carefully then how you walk, making the best use of the time, because the days are evil.", ref: "Ephesians 5:15-16 (ESV)" },
      { text: "For everything there is a season, and a time for every matter under heaven... He has made everything beautiful in its time...", ref: "Ecclesiastes 3:1,11 (ESV)" },
    ],
    scriptures: ["Ephesians 5:15-21", "Ecclesiastes 3:1-11", "Proverbs 6:6-11", "Romans 13:11-14"],
    body: [
      { t: "p", x: "Time is one of the greatest gifts God has given us, and one of the easiest to misplace. Each day arrives with the same quiet offering: moments that can either be spent or stewarded. Scripture calls us not just to live, but to live wisely, to recognize that time is not endless, and that how we use it shapes what our lives become." },
      { t: "p", x: "This brings us to a familiar scene. Jesus enters a home, and two sisters respond to Him in different ways. Martha opens her home and begins to serve, attending to all that hospitality requires. Mary, however, sits at His feet and listens to His words. Both responses seem right, but only one is called necessary." },
      { t: "p", x: "When Martha, overwhelmed and distracted, asks Jesus to correct her sister, His answer is gentle but revealing: 'Martha, Martha, you are anxious and troubled about many things, but one thing is necessary. Mary has chosen the good portion...' (Luke 10:41-42)." },
      { t: "p", x: "Martha's service was not wrong. In fact, Scripture often commends acts of generosity and hospitality. The issue was not her service, it was her distraction. What began as something good became something consuming. Her concern, her anxiety, and perhaps her desire to get everything 'just right' pulled her attention away from the very One she was serving." },
      { t: "p", x: "Mary, on the other hand, discerned the moment. She recognized that this was not an ordinary visit. The opportunity to sit, listen, and receive from Jesus was not something to be postponed. She chose what Jesus called the good portion, something eternal, something that would not be taken away." },
      { t: "p", x: "Here we begin to see the tension we all live with, not between good and evil, but between what is good and what is necessary." },
      { t: "d" },
      { t: "p", x: "Life is filled with responsibilities. There are tasks to complete, people to care for, and plans to manage. But without discernment, even good things can crowd out what matters most. Sometimes it is not sin that pulls us away, it is excess. Too much activity. Too much concern. Too much attention given to what is temporary, at the expense of what is eternal." },
      { t: "p", x: "This is why Scripture calls us to understand the times. The New Testament uses two words for time. Chronos speaks of the passing of hours and days, what we measure and schedule. Kairos speaks of appointed moments, God-given opportunities that carry purpose and weight." },
      { t: "p", x: "To live wisely is to recognize both. To move through our days faithfully, while also discerning when God is inviting us into something deeper. Like the sons of Issachar, who understood the times and knew what Israel ought to do, we are called to live with spiritual awareness, to recognize what this moment requires of us." },
      { t: "p", x: "And this moment matters." },
      { t: "s", x: "'The hour has come for you to wake from sleep... The night is far gone; the day is at hand.'", r: "Romans 13:11-12" },
      { t: "p", x: "There is a sense of urgency in Scripture, not panic, but purpose. God is at work, and He is preparing a people who will walk closely with Him, bear fruit, and reflect His nature. But this kind of life is not accidental. It is formed in time, through attention, through surrender, and through choosing Him again and again." },
      { t: "p", x: "Even creation teaches us this. Consider the ant, as Proverbs invites us to do. Without external pressure or visible leadership, it lives with order, diligence, and awareness of season. It prepares in advance. It works in rhythm. It does what is necessary when it is time to do it." },
      { t: "p", x: "How much more should we, who have the Spirit of God within us, learn to order our lives with wisdom?" },
      { t: "d" },
      { t: "p", x: "There are two dangers we must watch for. One is the distraction of sin, easier to recognize, but still powerful. The other is more subtle, good things done at the wrong time or in the wrong measure. For Martha, it was too much serving. For the sluggard in Proverbs 6, it was too much sleep. For those who refused the banquet, it was misplaced priorities. For us, it may be endless activity, constant noise, too much 'cleaning,' or overthinking, things that seem harmless but quietly consume the time meant for God." },
      { t: "p", x: "So the call is simple, to redeem the time." },
      { t: "p", x: "Not by doing more, but by choosing better. By giving God not what is left over, but what is first. By learning to build rhythms that make space for Him, not occasionally, but consistently." },
      { t: "p", x: "Because a fruitful life is not built in a moment. It is built in daily, faithful, intentional time with Him." },
      { t: "p", x: "God is doing something beautiful in this season. But every season has its purpose, and wisdom is knowing how to respond. When we align our time with His priorities, we begin to see what He is forming in us, something lasting, something fruitful, something that brings Him pleasure." },
      { t: "p", x: "So today, consider this gently but honestly, how are you using the time you have been given?" },
      { t: "p", x: "What fills your days? What shapes your attention? What consistently takes the place that belongs to Him?" },
      { t: "p", x: "The invitation is not to abandon responsibility, but to reorder it. To seek first the King and trust that everything else will find its rightful place through His guidance and help." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to steward my time with wisdom. Show me what is necessary, and give me grace to choose it. Help me to lay aside distractions, whether obvious or subtle, and to make room for You in my daily life. Let my time with You shape who I become, and let my life bear fruit that remains. Amen." },
    ],
    journal: [
      "Where is most of your time currently being spent, and what does that reveal about your priorities?",
      "Are there 'good' activities in your life that may be crowding out what is spiritually necessary?",
      "How do you currently create space to listen to God, consistently and intentionally?",
      "What practical adjustment can you make this week to give God your first and best time?",
    ],
    prayers: [
      "Thank God for the gift of time and the opportunity to grow in Him daily.",
      "Ask for wisdom to discern what is necessary in this season of your life.",
      "Pray for grace to recognize and reduce distractions, both obvious and subtle.",
      "Ask the Holy Spirit to help you build rhythms that prioritize God's presence.",
      "Pray for a life that is fruitful, intentional, and aligned with God's purpose.",
    ],
    declaration: "I thank God for the gift of time, and I choose to steward it with wisdom and purpose. I will not be ruled by distraction or overwhelmed by what is merely urgent; I choose what is necessary and eternal. I make room for God first, giving Him my attention, my focus, and my best. My days are ordered by His wisdom, and my heart is attentive to His leading. I release every excess and realign my priorities with His will. As I walk with Him daily, my life is being shaped, and I bear fruit that remains.",
  },
  {
    day: 6,
    title: "The Power of Focus",
    audioUrl: "/audio/day-06.mp3",
    quotes: [
      { text: "A double-minded man is unstable in all his ways, but a focused man is powerful in all his ways.", author: "A. W. Tozer" },
      { text: "God's Word is the compass that keeps us on course when everything else is shifting.", author: "Derek Prince" },
    ],
    anchor: [
      { text: "It was by faith that Noah built a large boat to save his family from the flood. He obeyed God, who warned him about things that had never happened before. By his faith Noah condemned the rest of the world, and he received the righteousness that comes by faith.", ref: "Hebrews 11:7 (NLT)" },
      { text: "Brethren, I do not count myself to have apprehended; but one thing I do, forgetting those things which are behind and reaching forward to those things which are ahead, I press toward the goal for the prize of the upward call of God in Christ Jesus.", ref: "Philippians 3:13-14 (NKJV)" },
    ],
    scriptures: ["Hebrews 11:7", "Philippians 3:13-14", "Hebrews 12:1-2"],
    body: [
      { t: "p", x: "In a world where everything seems urgent, attention has become one of the most contested spaces of our lives. Every responsibility, opportunity, and demand presses in, asking to be prioritised. And over time, what consistently holds our attention begins to shape the direction of our lives." },
      { t: "p", x: "This is not unique to our time. In the days of Noah, life was also full and active. People were building, celebrating, and progressing, yet completely unaware of the deeper reality unfolding around them. Their lives were occupied, but not aligned with what God was doing." },
      { t: "p", x: "This invites an honest reflection: what is presently shaping your attention, God's voice, or the rhythm of everything around you?" },
      { t: "p", x: "Focus is more than concentration. It is the alignment of heart, mind, and action toward what God has made important in a given season. It is choosing to give yourself fully to what carries eternal weight, rather than being gradually scattered across many lesser things. Focus does not increase activity; it clarifies direction." },
      { t: "p", x: "Noah's life reveals what this kind of focus looks like. In a generation marked by corruption and noise, he walked with God. From that place of fellowship, he received an assignment unlike anything the world had seen. He was called to prepare for something invisible, something that had never happened before." },
      { t: "s", x: "'By faith Noah... being warned of things not yet seen... prepared an ark...'", r: "Hebrews 11:7" },
      { t: "p", x: "His obedience was anchored in what God had spoken, not in what he could verify. That is the foundation of true focus, choosing to build your life around God's word, even when there is no immediate evidence to support it." },
      { t: "d" },
      { t: "p", x: "There is often a quiet pull within us between two directions. One draws us toward what is visible, immediate, and widely affirmed. The other draws us toward what God has said, which may require patience, trust, and endurance. Though both are present, only one leads to lasting fruit." },
      { t: "p", x: "Noah gave his attention to what was spoken. And he sustained that choice over time. For decades, with no visible sign that the promise would unfold, he continued building. His focus was not sustained by excitement or external validation, but by a settled conviction that God's word was trustworthy." },
      { t: "p", x: "This kind of steady attention is reflected in the nature of the eagle. When an eagle fixes its gaze on its target, it is not easily diverted. It adjusts to changing conditions yet remains locked on its objective. In a similar way, spiritual focus is the discipline of keeping our inner gaze steady, even when circumstances shift around us." },
      { t: "p", x: "This same posture is expressed by Paul the Apostle:" },
      { t: "s", x: "'Forgetting what lies behind and straining forward to what lies ahead, I press on toward the goal...'", r: "Philippians 3:13-14" },
      { t: "p", x: "Paul's words reveal that focus requires intentionality. It involves releasing what is behind, whether success or failure, and giving yourself fully to what God has set ahead. It is not passive; it is a deliberate, forward movement shaped by purpose." },
      { t: "p", x: "Noah built. Paul pressed forward. Both lived with a clear sense of direction." },
      { t: "d" },
      { t: "p", x: "This becomes visible in how focus is formed in our lives. It begins with faith, choosing God's word above competing voices. It is strengthened through obedience, removing alternatives and committing wholeheartedly. It grows through clarity, returning often to the question, 'What is God asking of me now?' And it is sustained through structure, shaping our days in ways that protect what matters most." },
      { t: "p", x: "Because focus is not preserved by intention alone. It is guarded by the rhythms we cultivate." },
      { t: "p", x: "Scripture encourages us to lay aside every weight and run with endurance, fixing our eyes on Jesus. That is where focus finds its strength. Not in striving harder, but in directing our gaze rightly. The more steadily we look to Christ, the less compelling distractions become." },
      { t: "p", x: "And this connects us directly to the heart of this journey, learning to dwell." },
      { t: "p", x: "Focus, at its deepest level, is not simply discipline. It is devotion expressed over time. As we abide in Christ, the true vine, our desires are reordered, our attention is refined, and our lives begin to align with His purposes. What once competed for space begins to lose its hold as His presence becomes central." },
      { t: "p", x: "This is how focus begins to take shape in our daily lives." },
      { t: "p", x: "It takes shape when we choose unhurried moments with God over constant activity. It takes shape when we quietly decline what is unnecessary, making room for what is essential. It takes shape through steady, unseen obedience, even when results are not immediate. It takes shape as we remain consistent, returning to Him again and again." },
      { t: "p", x: "Over time, this kind of life produces depth, clarity, and fruit that lasts." },
      { t: "d" },
      { t: "p", x: "So as you move through today, bring this before the Lord:" },
      { t: "p", x: "What has been forming the direction of my attention? Where is God inviting me to become more focused? What might need to be set aside so that I can give myself more fully to Him?" },
      { t: "p", x: "Lord, draw my attention back to You. Teach me to value what You are speaking above what I can see. Help me to walk with steady focus, shaped by Your presence and guided by Your Word. As I dwell in You, let my life be aligned with Your purpose and bear fruit that remains. Amen." },
    ],
    journal: [
      "What is currently shaping the direction of my attention, God's voice or the rhythm of everything around me?",
      "Where might God be inviting me to become more focused in this season?",
      "What visible pressures or distractions tend to pull my attention away from what He has spoken?",
      "What practical adjustments can I make to align my daily rhythms with what truly matters?",
    ],
    prayers: [
      "Thank God for His Word, which gives clarity and direction even when circumstances are unclear.",
      "Ask for grace to discern what He is asking of you in this season.",
      "Pray for strength to remain focused, especially when there is no immediate evidence of progress.",
      "Ask the Holy Spirit to help you build rhythms that protect your time and attention.",
      "Pray for a deeper ability to dwell in Christ, so that your life becomes aligned with His purpose and produces lasting fruit.",
    ],
    declaration: "I fix my attention on God and align my heart, mind, and actions with His Word. Like Noah, I choose to build my life on what He has spoken, even when I cannot yet see the outcome. I release every distraction and competing voice, and I give myself fully to what carries eternal weight. I press forward with purpose, forgetting what is behind and reaching toward what God has set before me. My focus is steady, my direction is clear, and my life is anchored in Christ. As I dwell in Him, my attention is refined, my obedience is strengthened, and I bear lasting fruit.",
  },
  {
    day: 7,
    title: "The Seat You Did Not Earn",
    audioUrl: "/audio/day-07.mp3",
    quotes: [
      { text: "Religion says, 'I obey, therefore I am accepted.' The gospel says, 'I am accepted, therefore I obey.'", author: "Timothy Keller" },
      { text: "We do not come to God by doing it right, but by trusting that Christ has made it right.", author: "Derek Prince" },
    ],
    anchor: [
      { text: "Now all of us can come to the Father through the same Holy Spirit because of what Christ has done for us. So now you Gentiles are no longer strangers and foreigners. You are citizens along with all of God's holy people. You are members of God's family.", ref: "Ephesians 2:18-19 (NLT)" },
      { text: "Please let me return home to die in my own city, where my father and mother are buried. But here is your servant, my son Kimham. Let him go with my lord the king and receive whatever you want to give him.", ref: "2 Samuel 19:37 (NLT)" },
    ],
    scriptures: ["2 Samuel 19:31-40", "Ephesians 2:11-22"],
    body: [
      { t: "p", x: "Over these past days, we have stood before the King's table and thought carefully about the invitation set before us. We have considered what it means to recognise Him as King, to lay aside excuses, to order our time, and to give our attention to what truly matters. Now we come to a quieter and more tender question. What made it possible for us to be here at all? What opened the way for people like us to sit near the King, not as intruders, but as those who belong?" },
      { t: "p", x: "There is a brief scene in Scripture that answers this with unusual beauty. It is the story of Barzillai and Kimham. It is not one of the most discussed moments in the Bible, yet it carries the fragrance of grace." },
      { t: "p", x: "Barzillai was an old man, eighty years of age, who had shown remarkable kindness to King David during one of the most difficult seasons of his life. When David was fleeing from Jerusalem because of Absalom's rebellion, Barzillai had provided for him at great personal cost. He gave when it was risky to give. He stood with the king when others turned away. His loyalty was real." },
      { t: "p", x: "When the rebellion ended and David was restored to the throne, he remembered. He turned to Barzillai with an offer that few in the kingdom would ever receive. Come with me to Jerusalem. Live near me. Eat at my table. Share in my provision for the rest of your life." },
      { t: "p", x: "It was more than a reward. It was an invitation into closeness." },
      { t: "p", x: "Barzillai's response is what makes the moment unforgettable. He did not refuse out of pride or indifference. He simply recognised his limitation. Age had taken from him the ability to fully enjoy what the king was offering. The music would not reach him as it once did. The food would not carry the same delight. The honour was real, but his capacity to enter into it had faded." },
      { t: "p", x: "So he made a request. He asked that his son, Kimham, be allowed to go in his place. And the king said yes." },
      { t: "p", x: "That simple exchange holds a profound truth. Kimham stepped into a place he did not earn. He received a nearness he did not secure. He sat at a table prepared for another, yet fully given to him. Everything that had been offered to Barzillai became his, not by effort, but by grace." },
      { t: "d" },
      { t: "p", x: "This is not just a story. It is a pattern. It points forward to something far greater. At the centre of our faith stands this same reality. What we could not earn, Christ has secured. What we could not claim, He has given. The place we now occupy in God's presence exists because Another made room for us." },
      { t: "p", x: "As Paul writes, 'through Him we both have access by one Spirit to the Father.' This is not partial access. It is not distant permission. It is belonging. We are no longer strangers standing at the edge. We are brought into the household." },
      { t: "p", x: "This changes how we see everything else. We do not approach God hoping to be accepted. We come because we already are. We do not seek to earn a place at His table. We live from a place that has already been given." },
      { t: "p", x: "This is where the heart often needs quiet correction. It is possible to believe the message of grace and still live as though acceptance must be maintained by effort. We begin to measure our devotion, our consistency, our discipline, and slowly treat them as the reason we remain close. But the foundation is not what we sustain. It is what Christ has already established. Our place was secured before we learned how to seek Him." },
      { t: "p", x: "This is why Noah's story helps us in the right way. Noah walked with God before he built anything. The ark was not a means to earn favour. It was the outworking of a relationship already in place." },
      { t: "s", x: "'By faith Noah... prepared an ark...'", r: "Hebrews 11:7" },
      { t: "p", x: "In the same way, the rhythms we are learning in this season, prayer, Scripture, stillness, focus, are not efforts to gain access. They are responses to access already given." },
      { t: "p", x: "Paul expresses this with clarity when he writes, 'I press on toward the goal for the prize of the upward call of God in Christ Jesus.' He is not striving to be called. He is moving forward because he has already been called." },
      { t: "p", x: "That difference matters." },
      { t: "p", x: "Without it, spiritual life becomes heavy. With it, everything becomes rooted and steady. Focus becomes devotion instead of pressure. Time with God becomes desire instead of duty. Obedience becomes love expressed, not approval pursued." },
      { t: "d" },
      { t: "p", x: "And this brings us back to the heart of this journey, to dwell. To dwell in Christ is to remain in the One who has already welcomed us. It is to live from a settled place. It is to return daily, not to secure a seat, but to enjoy one that has never been withdrawn." },
      { t: "p", x: "This is what the table represents. A place that is not temporary. A place that is not fragile. A place that is not earned and therefore cannot be sustained by effort alone. It is given. And because it is given, we are free to come without hesitation." },
      { t: "p", x: "So what might this look like in your daily life?" },
      { t: "p", x: "It may look like opening your Bible without the quiet pressure to perform, simply to listen. It may look like prayer that is honest rather than polished, real rather than rehearsed. It may look like choosing to sit with Him, even briefly, with the awareness that you are already welcomed. It may look like returning again after distraction, not with guilt, but with confidence that your place remains." },
      { t: "p", x: "Over time, this reshapes the way we live. Like Kimham, we learn to receive what we did not earn. Like Noah, we begin to build from relationship, not for it. Like Paul, we move forward with clarity, grounded in a calling already given." },
      { t: "p", x: "Let this settle deeply today. You are not working your way toward a seat. You are learning to live from one." },
      { t: "p", x: "So consider this quietly before the Lord. Have you been relating to God as though your place must still be earned? What would change if you truly believed that your seat has already been prepared and secured?" },
      { t: "d" },
      { t: "p", x: "Lord, thank You for the place You have given me through Christ. Teach me to live from what You have already done, not striving to earn what You have freely given. Help me to draw near with confidence, to remain in Your presence, and to let my life be shaped by Your grace. Amen." },
    ],
    journal: [
      "Have you been relating to God as though your place in His presence still needs to be earned?",
      "In what ways do you find yourself measuring your worth or closeness to God by your performance or consistency?",
      "Where might you be holding back, approaching God as a guest rather than as one who belongs?",
      "What would change in your daily walk if you truly embraced that your place at His table has already been secured?",
    ],
    prayers: [
      "Thank God for the access you have been given through Christ, that you are no longer a stranger but a member of His household.",
      "Confess any areas where you have been striving to earn what God has already freely given.",
      "Ask the Lord to help you live from a place of acceptance, not for acceptance.",
      "Pray for grace to draw near to God with confidence, without hesitation or fear.",
      "Ask the Holy Spirit to deepen your awareness of God's presence, so that your daily walk is shaped by His grace and not by pressure.",
    ],
    declaration: "I thank the Father that through Christ I have been given access, acceptance, and a place in His household. I am no longer a stranger standing at a distance; I belong near the King by grace. The seat I have in His presence is not earned, but lovingly secured for me through Jesus. Today, I choose to live from acceptance, not strive for it. I draw near with confidence, rest in what Christ has finished, and let my life flow from relationship rather than performance. I am welcomed, established, and sustained by grace.",
  },
  {
    day: 8,
    title: "The Protocol of His Presence",
    audioUrl: "/audio/day-08.mp3",
    quotes: [
      { text: "Gratitude is the doorway into the presence of God.", author: "Derek Prince" },
      { text: "Praise is not just an expression, it is a positioning of the heart.", author: "Bill Johnson" },
    ],
    anchor: [
      { text: "Enter His gates with thanksgiving and His courts with praise; give thanks to Him and bless His name. For the Lord is good; His love endures forever; His faithfulness continues through all generations.", ref: "Psalm 100:4-5 (NIV)" },
    ],
    scriptures: ["Psalm 100:4-5", "Psalm 22:3", "Psalm 8:2"],
    body: [
      { t: "p", x: "After discovering that our place at the King's table was not earned but given, the heart begins to ask a quieter, more personal question: how do I come close? Not as a stranger lingering at the edge, but as one who has been welcomed in. Scripture, in its kindness, does not leave us to guess. It shows us the way, not as a rigid formula, but as a gentle, intentional path into His presence." },
      { t: "p", x: "The psalmist begins with a simple but weighty word: 'Enter.' The Hebrew word bo\u02BE speaks of intentional movement, to come in, to approach deliberately. This is not accidental access. We do not drift into God's presence. We respond to an invitation and move toward Him with awareness." },
      { t: "p", x: "And how do we enter? 'With thanksgiving.'" },
      { t: "p", x: "The word used is todah, drawn from the root yadah, meaning to acknowledge, to confess, to give thanks openly. This is not silent appreciation. It is expressed gratitude, often tied to sacrifice. In the Old Testament, thanksgiving was something brought, not merely felt." },
      { t: "p", x: "This teaches us something essential. The first step into God's presence is not need, but recognition. We come acknowledging who He is and what He has done, even before we speak of what we lack." },
      { t: "p", x: "Thanksgiving opens the gate. But the journey does not stop there. 'And His courts with praise.'" },
      { t: "p", x: "Here the word is tehillah, from halal, meaning to celebrate, to boast, to shine forth. This is the root of 'hallelujah.' It is not quiet reflection but active, expressed exaltation. If thanksgiving acknowledges God, praise magnifies Him." },
      { t: "p", x: "There is a movement here. From the gates into the courts. From entry into nearness. Thanksgiving brings us in. Praise draws us closer." },
      { t: "d" },
      { t: "p", x: "And praise does more than express devotion. It prepares a place for God's manifest presence. Scripture declares, 'You are enthroned on the praises of Israel' (Psalm 22:3). When praise rises, we are not making God King, He already is, but we are offering Him the throne that belongs to Him. We are responding to His kingship in a way that is fitting." },
      { t: "p", x: "And there is another quiet victory taking place." },
      { t: "s", x: "'From the lips of children and infants You have ordained praise... to silence the foe and the avenger.'", r: "Psalm 8:2" },
      { t: "p", x: "Praise silences the accuser. The voice that condemns, distracts, and opposes is quieted when praise ascends. What seemed like a simple act of worship becomes a doorway into unhindered access." },
      { t: "p", x: "Yet even this is not the final posture." },
      { t: "p", x: "The psalm continues: 'Give thanks to Him and bless His name.' The word for bless is barak, and it carries a deeper dimension. It means to kneel, to bow, to adore. This is where praise deepens into reverence. Where expression becomes surrender." },
      { t: "p", x: "Barak is not loud. It is low. It is the heart bending before the greatness of God. This is the place of adoration." },
      { t: "p", x: "There are moments when words become unnecessary, when we sit quietly before Him in awe, aware of His majesty and goodness. Not asking, not striving, simply beholding. This is worship in its purest form, where the soul delights in who God is." },
      { t: "d" },
      { t: "p", x: "And this posture matters." },
      { t: "p", x: "Because there are things that hinder His presence. Pride, which lifts us up, and prejudice, which closes us in. Both resist the humility required for God to dwell freely among us. But a heart that bows becomes a place where He is welcomed and honoured." },
      { t: "p", x: "All of this is grounded, not in our feelings, but in who God is." },
      { t: "p", x: "'For the Lord is good...' The word tov speaks of what is inherently good, morally perfect, beautifully right. His goodness is not dependent on our circumstances. It is His nature." },
      { t: "p", x: "'His love endures forever...' The word chesed describes covenant love, steadfast, committed, unbreakable. Not fragile emotion, but enduring loyalty." },
      { t: "p", x: "'His faithfulness continues through all generations.' The word emunah speaks of firmness, reliability, something you can lean on without fear. It is the root of 'Amen.' What He is, He remains." },
      { t: "p", x: "This is why we can come. Not because our situation is perfect. Not because our emotions are steady. But because His character does not change." },
      { t: "d" },
      { t: "p", x: "So the pathway becomes clear. We enter intentionally, not casually. We come with thanksgiving, declaring who He is. We move deeper with praise, lifting Him above all else. We bow in adoration, yielding ourselves before Him. And we do all of this anchored in the unchanging nature of God." },
      { t: "p", x: "This is the protocol of His presence. Not a rigid system, but a living pathway. Not performance, but posture." },
      { t: "p", x: "So today, come. Come as one who has been invited. Come as one whose place has already been prepared. Enter with thanksgiving, even if it begins as a whisper. Lift your praise, even if it feels simple. Bow your heart, even if you are still learning how." },
      { t: "p", x: "The gates are open. The courts are near. The King is present. And the seat that was given to you is waiting." },
      { t: "d" },
      { t: "p", x: "Lord, teach me the way into Your presence. Help me to come with a heart full of thanksgiving, a voice of praise, and a spirit that bows before You. Let my life become a place where You are honoured, welcomed, and enthroned. Amen." },
    ],
    journal: [
      "In what ways can you grow in expressing thanks and praise, not just quietly, but actively and intentionally?",
      "Have you experienced moments where praise shifted your focus or silenced inner accusations? What did that look like?",
      "What does it mean for you personally to 'bless' (barak) the Lord in humility and adoration?",
      "Which of God's unchanging attributes, His goodness (tov), His steadfast love (chesed), or His faithfulness (emunah), do you need to hold onto most in this season?",
    ],
    prayers: [
      "Thank God for the open invitation into His presence and for showing you the way to approach Him.",
      "Ask for grace to come intentionally, with a heart full of thanksgiving rather than distraction or complaint.",
      "Pray for a deeper expression of praise that exalts God and creates room for His presence to dwell.",
      "Ask the Lord to silence every voice of accusation or distraction through the power of praise.",
      "Pray for a humble heart that bows in true adoration, free from pride and self-reliance.",
      "Thank God for His unchanging nature, His goodness, His covenant love, and His faithfulness, and ask for a deeper revelation of these truths in your life.",
    ],
    declaration: "I choose to enter God's presence intentionally, with a heart full of thanksgiving and awareness of who He is. I acknowledge His goodness, His steadfast love, and His unfailing faithfulness over my life. As I give thanks, my heart opens and draws near to Him. I lift my praise and magnify Him above every distraction and opposing voice. I bow in humility and adoration, surrendering my heart fully before Him. Today, I come with honour and devotion, choosing to dwell near the King.",
  },
  {
    day: 9,
    title: "Fellowship: A Two-Way Affair",
    audioUrl: "/audio/day-09.mp3",
    quotes: [
      { text: "Prayer is not monologue, but dialogue. God's voice in response to mine is its most essential part.", author: "Andrew Murray" },
      { text: "God speaks in the silence of the heart. Listening is the beginning of prayer.", author: "Mother Teresa" },
    ],
    anchor: [
      { text: "Call to Me, and I will answer you, and show you great and mighty things, which you do not know.", ref: "Jeremiah 33:3 (NKJV)" },
      { text: "I will take my stand at my watchpost and station myself on the tower, and look out to see what he will say to me, and what I will answer concerning my complaint. And the Lord answered me: 'Write the vision; make it plain on tablets, so he may run who reads it.'", ref: "Habakkuk 2:1-2 (ESV)" },
    ],
    scriptures: ["Jeremiah 33:3", "Habakkuk 2:1-2", "1 Kings 19:11-13"],
    body: [
      { t: "p", x: "There is something deeply comforting about knowing that when we come into God's presence, we are not stepping into silence. We are stepping into relationship. The One who invites us to draw near is not distant or unresponsive. He speaks, and He listens. He calls, and He answers. This is the beauty of fellowship with God." },
      { t: "p", x: "From the very beginning, this has always been His desire. God did not create humanity simply to govern it, but to walk with it. In the garden, He called out to Adam, not because He did not know where he was, but because He desired a response. That same desire continues throughout Scripture. God speaks to Moses as a friend speaks to a friend. He calls Samuel by name. He invites His people to call on Him with the promise that He will answer. Again and again, we see a God who wants to be known, heard, and responded to." },
      { t: "p", x: "This shows us that fellowship with God is not one-sided. It is not just us speaking and God observing. It is a living exchange. We speak to Him, and He hears us. He speaks to us, and we learn to hear Him. This sacred rhythm is what gives depth to prayer, meaning to worship, and life to our time with Him." },
      { t: "p", x: "Yet while God is always willing to communicate, the clarity with which we hear Him is often shaped by how we approach Him." },
      { t: "d" },
      { t: "p", x: "The prophet Habakkuk gives us a clear picture of this. In a moment of confusion, he does not turn away or grow discouraged. Instead, he says, 'I will take my stand... and station myself... and look out to see what He will say to me.' This is the language of intention." },
      { t: "p", x: "The word translated stand comes from the Hebrew \u02BFamad, which means to take your place and remain there. It speaks of steadiness. He then says he will set himself, from the word yatsab, meaning to position or establish oneself firmly, like a guard on duty. This is not a casual approach. It is a deliberate choice to be present." },
      { t: "p", x: "He continues by saying he will watch. The Hebrew word tsaphah describes a watchman who scans the horizon with expectation. He is not distracted or passive. He is alert and ready." },
      { t: "p", x: "It is especially striking that Habakkuk says he will watch to see what God will say. This reminds us that God's voice is not always heard in an audible way. Sometimes it comes as a quiet thought, a gentle conviction, a clear understanding, or a sense of direction that settles within us. Learning to hear God often means learning to recognise these subtle ways He communicates." },
      { t: "p", x: "Habakkuk also prepares his heart for how he will respond. He says, 'what I will answer when I am corrected.' This reveals humility. He expects that God may adjust his thinking or challenge his perspective. The Hebrew word tokhachat speaks of correction or reproof, but not in a harsh sense. It is the kind of correction that shapes and refines. A heart that is willing to be corrected is a heart that is ready to hear." },
      { t: "p", x: "When God answers, He tells Habakkuk to write the vision. The word katab means to record or inscribe. What God says is not to be treated lightly. It is to be remembered, valued, and acted upon. In this, we see the full flow of fellowship. God speaks, we listen. We respond, and He continues to guide." },
      { t: "d" },
      { t: "p", x: "Elijah's life gives us another helpful picture. On Mount Carmel, God answered with fire. It was powerful and unmistakable. But later, when Elijah was alone and weary, God spoke differently. A strong wind came, then an earthquake, then fire, but God was not in them. Then came a still small voice." },
      { t: "p", x: "The Hebrew phrase is qol demamah daqqah, which describes a gentle, quiet whisper. It is a voice that does not demand attention, but invites it. And Elijah recognised it immediately. No one told him it was God. There was no outward sign. Yet he knew." },
      { t: "p", x: "This is what happens as we grow in fellowship with God. We begin to recognise His voice, not because it is loud, but because it is familiar. We learn that not everything dramatic is His voice, and not everything quiet is empty. His voice often comes in a way that requires us to be still enough to notice it." },
      { t: "d" },
      { t: "p", x: "Taken together, these passages show us that God speaks in many ways. He speaks through His Word, which gives us a sure and steady foundation. He speaks by His Spirit, through inner conviction and guidance. He may speak through circumstances, through wise counsel, or through a sense of peace or restraint in our hearts. Sometimes He speaks through powerful moments. Other times, He speaks in quiet stillness." },
      { t: "p", x: "The question is not whether God is speaking. The question is whether we are making space to hear Him." },
      { t: "p", x: "To grow in this, we learn to slow down and be present. We choose to give Him our attention. We come with expectation, believing that He will speak. We keep our hearts humble and open, willing to be shaped. And when He does speak, we take it seriously. We hold onto it, test it against Scripture, and respond in obedience." },
      { t: "p", x: "This is one of the beautiful outcomes of dwelling in Christ. As we remain close to Him, His voice becomes clearer to us. His Word begins to shape our thoughts. Our hearts become quieter. We are less hurried, less distracted, and more aware of His leading. We do not need to chase dramatic experiences, because we are learning to recognise Him in the everyday moments." },
      { t: "p", x: "So today, come to God with both honesty and readiness. Speak freely, but also listen carefully. Stay long enough to notice His voice. Let your time with Him become a conversation, not just a routine." },
      { t: "p", x: "Fellowship with God is not built in a moment. It grows over time, in quiet, consistent connection. And as you continue in that rhythm, you will begin to realise that He has been speaking all along, gently inviting you into deeper relationship with Him." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to listen as well as to speak. Quiet every distraction within me, and help me to recognise Your voice. Give me a heart that is steady, humble, and attentive. As I dwell with You, let me grow in hearing, responding, and knowing You more deeply. Amen." },
    ],
    journal: [
      "Does your time with God feel like a two-way conversation, or mostly one-sided? What might be missing?",
      "In what ways have you personally experienced God speaking to you, and which do you recognise most clearly?",
      "What distractions or habits make it difficult for you to listen to God, and how can you create more space for stillness?",
      "How do you usually respond when you sense God leading or correcting you? Is your heart open and teachable?",
    ],
    prayers: [
      "Thank God for His desire to fellowship with you and for His willingness to speak and listen.",
      "Ask for a quiet and attentive heart that can recognise His voice clearly.",
      "Pray for grace to slow down and create intentional space to listen to Him daily.",
      "Ask for sensitivity to discern His voice in both subtle and clear ways.",
      "Pray for a humble and responsive spirit, willing to obey what He says.",
      "Ask the Holy Spirit to guide and deepen your fellowship with God as a daily, living conversation.",
    ],
    declaration: "I come into God's presence knowing that He speaks and He listens, and I am invited into true fellowship with Him. I quiet my heart, give Him my attention, and position myself to hear His voice with clarity. I choose to be steady, attentive, and expectant, trusting that He will speak and guide me. I welcome His voice in every form, through His Word, His Spirit, and the quiet impressions within me. My heart is humble and open, ready to be shaped, corrected, and led by Him. As I dwell with Him, His voice becomes familiar, and I respond with obedience and trust.",
  },
  {
    day: 10,
    title: "The Secrets of the Vine",
    audioUrl: "/audio/day-10.mp3",
    quotes: [
      { text: "To abide in Christ is to rest in Him as our source of everything.", author: "John Stott" },
      { text: "Apart from Christ, all our efforts are empty of eternal value.", author: "John Piper" },
    ],
    anchor: [
      { text: "I am the true vine, and My Father is the vinedresser.", ref: "John 15:1 (NKJV)" },
      { text: "I am the vine, you are the branches. He who abides in Me, and I in him, bears much fruit; for without Me you can do nothing.", ref: "John 15:5 (NKJV)" },
    ],
    scriptures: ["Genesis 1:26-28", "Isaiah 5:1-7", "John 15:1-5"],
    body: [
      { t: "p", x: "Having come to the King's table, and learned the rhythms of fellowship in His presence, we now step into something even deeper. The question before us is no longer simply how to come to God, but what it actually looks like to remain with Him once we have come in. This is the heart of what it means to dwell. We are no longer only considering moments with God, but learning to live a life in God." },
      { t: "p", x: "To help us understand this, Jesus gives a picture that is simple, yet full of depth. He speaks of a vine, its branches, and the one who tends it. In this image, we are shown how spiritual life truly works." },
      { t: "p", x: "At the center of it are three realities: the Father as the vinedresser, the Son as the true vine, and we as the branches." },
      { t: "p", x: "Jesus draws us into this imagery as He says, 'My Father is the vinedresser.'" },
      { t: "p", x: "This is a picture of care, intention, and involvement. The Father is not distant from our growth. He is the one who tends the vineyard. He watches, cultivates, lifts, clears, and shapes what belongs to Him. The word used here speaks of a skilled cultivator, one who works the land with knowledge, patience, and purpose. This means our lives are not left to chance. We are being tended." },
      { t: "p", x: "This has always been God's desire. From the beginning, He has sought a people who would share His life and reflect His nature. In creation, He commanded humanity to be fruitful and multiply, revealing that fruitfulness was part of His design. Later, He formed Israel as His vineyard, carefully planted and prepared, expecting a harvest that reflected His character. As it is written, 'My well-beloved has a vineyard... He looked for it to bring forth grapes, but it brought forth wild grapes' (Isaiah 5:1-2). The care of the vinedresser was never lacking, yet the fruit did not match His intention." },
      { t: "p", x: "It is in this context that Jesus' declaration, 'I am the true vine,' takes on its full meaning." },
      { t: "d" },
      { t: "p", x: "The word 'true' speaks of what is genuine, complete, and ultimate. Jesus is not one vine among many. He is the fulfillment of everything God intended. Where Israel fell short, He stands as the faithful and perfect vine. He is the One in whom the life of God flows without interruption, without distortion, and without failure." },
      { t: "p", x: "This changes everything for us." },
      { t: "p", x: "Our identity is no longer rooted in effort, performance, or heritage. It is rooted in Christ. He is now the source of life for the people of God. What the Father desired to see in His vineyard is first found in the Son, and then shared with all who remain in Him. This means fruitfulness does not begin with striving. It begins with connection." },
      { t: "p", x: "Then Jesus says, 'You are the branches.' This is where the picture becomes personal." },
      { t: "p", x: "A branch does not live independently. It does not generate its own life or produce fruit by its own strength. Everything it is, and everything it becomes, flows from the vine. Its existence, its vitality, and its fruitfulness are all dependent on its connection." },
      { t: "p", x: "This challenges how we often approach our walk with God. It is easy to slip into a life of effort, where we measure growth by activity, discipline, or visible results. But Jesus gently brings us back to what matters most. 'Without Me you can do nothing.'" },
      { t: "p", x: "He is not saying that we cannot do anything at all, but that nothing of true spiritual value, nothing that reflects the life of God, can come from a life disconnected from Him." },
      { t: "d" },
      { t: "p", x: "This is why the word abide sits at the center of this passage." },
      { t: "p", x: "To abide means to remain, to stay, to dwell, to continue. It is not about occasional connection, but ongoing union. The branch does not visit the vine from time to time. It remains. It draws continuously. Its life is sustained by what flows into it." },
      { t: "p", x: "In the same way, a life that dwells in Christ is not built on occasional moments of closeness, but on a steady, living connection. Over time, that connection produces fruit through shared life." },
      { t: "p", x: "The beauty of the whole picture emerges right here. The Father is tending with wisdom and care. The Son is supplying life without measure. The branch is receiving and remaining. Each part matters, but everything depends on the flow of life from the vine." },
      { t: "p", x: "The Father, as both loving caretaker and rightful owner, is committed to the outcome of this relationship. He is patient, attentive, and kind, yet purposeful. He is not content with mere appearance. He seeks fruit that reflects His nature. He sees the potential of every branch and works with intention to bring that potential into fullness." },
      { t: "p", x: "So, we are invited to settle this foundation. A fruitful life does not begin with what we do for God. It begins with where we remain with Him. And as we begin to understand this, we also begin to sense that this relationship carries both beauty and responsibility." },
      { t: "p", x: "This is where the journey deepens." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for revealing what it truly means to live in You. Thank You that You are the true vine, and that all life flows from You. Thank You, Father, for tending my life with wisdom and care. Teach me to remain in You, to depend on You, and to trust the work You are doing in me, so that my life may reflect Your purpose. Amen." },
    ],
    journal: [
      "When you think about your walk with God, are you living from steady connection or depending mostly on effort and activity?",
      "What does 'abiding' in Christ practically look like in your daily life right now? Where might your connection feel weak or inconsistent?",
      "How do you view God as the Vinedresser, do you trust His care, patience, and purpose in how He is shaping your life?",
      "In what areas of your life are you trying to produce fruit on your own instead of drawing life from Christ?",
    ],
    prayers: [
      "Thank God for being a loving and intentional Father who tends your life with care and purpose.",
      "Ask for grace to remain in Christ daily, not just in moments but in a steady, living connection.",
      "Pray for a deeper awareness of your dependence on Jesus as your true source of life and fruitfulness.",
      "Ask the Lord to help you trust His work in your life, even when you do not fully understand it.",
      "Pray for a heart that yields to His leading and stays open to the way He is shaping you.",
      "Ask the Holy Spirit to help you grow in abiding, so your life naturally bears fruit that reflects God's nature.",
    ],
    declaration: "I thank the Father for tending my life with wisdom, care, and purpose. I am connected to Christ, the true vine, and His life flows through me continually. I do not strive to produce fruit; I abide, remain, and draw from Him. Apart from Him, I can do nothing, but in Him, I have all I need for a fruitful life. I choose to stay connected, depend on His life, and trust His work within me. As I remain in Him, I grow, flourish, and bear fruit that reflects His nature.",
  },
  {
    day: 11,
    title: "The Path to Abundant Fruit",
    audioUrl: "/audio/day-11.mp3",
    quotes: [
      { text: "God never allows His children to remain as they are; He is constantly at work to conform them to Christ.", author: "John Stott" },
      { text: "The Vinedresser's secret for more is... less.", author: "Bruce Wilkinson" },
    ],
    anchor: [
      { text: "Every branch in Me that does not bear fruit He takes away; and every branch that bears fruit He prunes, that it may bear more fruit.", ref: "John 15:2 (NKJV)" },
      { text: "I am the vine, you are the branches... he who abides in Me, and I in him, bears much fruit.", ref: "John 15:5 (NKJV)" },
    ],
    scriptures: ["John 15:1-6", "Hebrews 12:4-11", "Galatians 5:22-25"],
    body: [
      { t: "p", x: "Having seen the beauty of the vine, we now begin to understand how the Father, the vinedresser, actively works with every branch. The picture now becomes personal. It is no longer only about the structure of the vine, but about how each branch responds to the life flowing from it." },
      { t: "p", x: "Jesus makes it clear that the vinedresser relates to every branch with intention. No branch is ignored. No branch is left to grow unchecked. Each one is handled according to its condition, its position, and its potential." },
      { t: "p", x: "He says, 'Every branch in Me...'" },
      { t: "p", x: "This is important. The focus is not on those far away, but on those who are already connected in some way to the vine. The question is not simply whether we are near, but how we are responding within that connection." },
      { t: "p", x: "Then Jesus reveals two key actions of the vinedresser." },
      { t: "p", x: "The first is this: 'Every branch in Me that does not bear fruit He takes away.'" },
      { t: "p", x: "The word translated takes away is the Greek airei, which can mean to lift, raise, carry, or remove. In ancient vineyard practice, branches that trailed along the ground would often become covered in dirt, moisture, and decay. In that state, they could not bear fruit. A careful vinedresser would lift such branches, clean them, and reposition them so they could receive sunlight and air again." },
      { t: "p", x: "This gives us a deeply encouraging insight. There are moments when God's work in our lives feels exposing or disruptive, but it may not be rejection. It may be restoration. The Father lifts what has fallen low. He brings hidden things into the light. He repositions us so that life can flow again." },
      { t: "p", x: "Even this lifting is not random. It is shaped by love and purpose. Scripture reminds us that Christ Himself 'learned obedience by the things which He suffered' (Hebrews 5:8), showing us that God's dealings are never careless, but are part of a loving process that forms us into what we are called to become." },
      { t: "d" },
      { t: "p", x: "Jesus then describes the second action: 'Every branch that bears fruit He prunes, that it may bear more fruit.'" },
      { t: "p", x: "The word prunes is the Greek kathairei, which also carries the meaning of cleansing or purifying. In vineyard care, pruning is essential. Without it, a vine may grow rapidly, producing many leaves and shoots, but very little fruit. Excess growth drains the plant's energy and reduces the quality of the harvest." },
      { t: "p", x: "So the vinedresser cuts. He removes what is unnecessary, trims what is excessive, and clears what competes with fruit. Not because the branch is failing, but because it is fruitful. The cut is not a sign of rejection, but of intention." },
      { t: "p", x: "This reveals a clear progression in the life of the branch. First, the vinedresser lifts and restores what has fallen. Then, He prunes and refines what is growing. And over time, He brings the branch into deeper maturity, where abiding becomes steady and fruit becomes abundant." },
      { t: "p", x: "This process deepens our dependence on the vine. It loosens our attachment to self-reliance and even our affection for the good things God has given us when they begin to compete with Him. It teaches us to draw more fully from Christ." },
      { t: "p", x: "This refinement is essential, and a skilled vinedresser knows exactly what to remove and what to preserve. What is removed is never wasted; it makes room for something better. The goal is not merely growth, but better fruit." },
      { t: "d" },
      { t: "p", x: "And this helps us understand what kind of fruit God is seeking." },
      { t: "p", x: "It is not merely outward activity or visible success. It is the fruit that reflects His nature. Scripture describes this as 'the fruit of the Spirit... love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control' (Galatians 5:22-23). This is the kind of fruit that makes us look more like Christ, both in who we are and in how we live." },
      { t: "p", x: "But even beyond the fruit itself, the deeper goal is intimacy. The Father is not only producing results; He is forming relationship. He desires a branch that does not merely bear fruit occasionally, but one that lives in ongoing union with the vine. God's desire is that we remain more with Him than we do more for Him." },
      { t: "d" },
      { t: "p", x: "Jesus then brings us to a more serious and sobering note." },
      { t: "p", x: "'If anyone does not abide in Me, he is cast out as a branch and is withered...' (John 15:6)" },
      { t: "p", x: "Casting out is not the first step in the vinedresser's work, but the final outcome of a branch that continually resists connection. Withering does not happen suddenly; it happens gradually. It is the slow result of disconnection, of choosing independence over abiding." },
      { t: "p", x: "Scripture reminds us that God is patient and purposeful. He is long-suffering, giving space for repentance, restoration, and return (2 Peter 3:9). Throughout Scripture, we see His persistent pursuit. He calls, corrects, lifts, and restores again and again. The mission of Jesus itself reflects this heart, drawing us back into living union with Him." },
      { t: "p", x: "Yet we are not without choice. A branch can remain. A branch can resist. A branch can yield to the life of the vine, or attempt to live apart from it. And over time, that response shapes its condition." },
      { t: "p", x: "So Jesus brings us back to the center." },
      { t: "p", x: "'Abide in Me.'" },
      { t: "p", x: "This is not merely a command. It is an invitation into life. The vinedresser is working. The vine is supplying. And we, as branches, are invited to remain. Will we trust the hands that tend us? Will we yield to the work being done within us? Will we remain where life flows?" },
      { t: "p", x: "The work of the vinedresser may not always feel comfortable, but it is always purposeful. He lifts so we can live again. He prunes so we can bear more. He persists because He sees what our lives can become when fully joined to His Son." },
      { t: "p", x: "So today, let your response be simple. Remain. Yield. Trust. Abide." },
      { t: "p", x: "Because the goal is not just that we produce fruit, but that we live in such close union with Christ that His life is clearly seen in us." },
      { t: "d" },
      { t: "p", x: "Lord, help me to trust Your work in my life. Where You lift me, let me receive it. Where You prune me, let me yield to it. Teach me to remain in You, so that my life may bear the fruit that reflects Your heart. Amen." },
    ],
    journal: [
      "In this season of your life, do you sense God is lifting, pruning, or deepening your maturity? How are you responding to His work?",
      "Are there areas where you may be resisting God's refining process instead of yielding to it? What might He be trying to remove or restore?",
      "How evident is the fruit of the Spirit in your daily life and relationships? Which area is God inviting you to grow in?",
      "What does abiding in Christ practically look like for you right now, and how can you become more intentional in remaining connected to Him?",
    ],
    prayers: [
      "Thank God for His loving and intentional care as the vinedresser of your life.",
      "Ask for grace to trust His lifting and pruning, even when it feels uncomfortable or unclear.",
      "Pray for a deeper dependence on Christ, your true source of life and fruitfulness.",
      "Ask the Holy Spirit to cultivate the fruit of Christ's character within you.",
      "Pray for a yielded and responsive heart that chooses to remain, trust, and abide in Him daily.",
    ],
    declaration: "I thank the Father for tending my life with wisdom, love, and purpose. I trust His hands as He lifts, restores, and repositions me to receive His life fully. I welcome His pruning, knowing it is not rejection but refinement that leads to greater fruit. He removes what hinders and shapes what remains, and I yield to His work within me. I remain in Christ, drawing my life from Him and choosing connection over independence. As I abide in Him, I grow in maturity and bear abundant fruit for His glory. Amen!",
  },
  {
    day: 12,
    title: "Cleansed by the Word",
    audioUrl: "/audio/day-12.mp3",
    quotes: [
      { text: "The Word of God is the great purifier of the heart.", author: "Charles Spurgeon" },
      { text: "God does not ask us to produce righteousness, but to wear it.", author: "Derek Prince" },
    ],
    anchor: [
      { text: "Already you are clean because of the word which I have spoken to you.", ref: "John 15:3 (NKJV)" },
      { text: "I will greatly rejoice in the LORD... for He has clothed me with the garments of salvation, He has covered me with the robe of righteousness.", ref: "Isaiah 61:10 (NKJV)" },
    ],
    scriptures: ["John 15:1-8", "Matthew 22:1-14", "Ephesians 4:17-24"],
    body: [
      { t: "p", x: "There is a moment in John 15 that is easy to overlook, yet it carries profound depth. Right in the middle of Jesus' teaching on the vine and the branches, He pauses and says, 'Already you are clean.' Before He speaks about fruit, before He emphasizes abiding, He establishes something foundational: their condition has already been changed by His word." },
      { t: "p", x: "The word translated 'clean' comes from the Greek katharoi, meaning purified, cleansed, or made free from what defiles. It is closely related to the word used for pruning in verse 2 (kathairei), showing that cleansing and pruning are not separate ideas, but connected realities. The same divine work that removes what hinders also restores what is right." },
      { t: "p", x: "But what is especially striking is how this cleansing takes place. Jesus says it is 'because of the word' He has spoken. The word here is logos, not merely information, but living, authoritative utterance. His word does not simply instruct; it produces change. It cleanses, redefines, and establishes a new reality in those who receive it." },
      { t: "p", x: "This connects deeply with the language of Isaiah 61:10, where righteousness is described not as something achieved, but as something given:" },
      { t: "p", x: "'He has clothed me... He has covered me...'" },
      { t: "p", x: "Righteousness in Scripture is often pictured as a garment. It is not something we weave for ourselves, but something provided and placed upon us. This is what Scripture reveals as the gift of righteousness, given because of Christ's finished work, not earned by human effort." },
      { t: "d" },
      { t: "p", x: "In the ancient Near Eastern world, this imagery carried practical meaning. When a king invited guests to a great feast, it was customary for him to provide the proper garments for the occasion. The invitation was not only an invitation to attend; it included everything needed to participate fully." },
      { t: "p", x: "This helps us understand the parable in Matthew 22:11-14. When the king finds a man without the wedding garment, his response is not arbitrary. The issue is not lack of provision, but refusal to wear what had already been given. The invitation had been extended. The garment had been provided. But it was not received or put on." },
      { t: "p", x: "This reveals something essential: Acceptance of the invitation is not complete without embracing what the invitation provides." },
      { t: "p", x: "In the same way, Christ does not only invite us into fellowship; He provides the righteousness required to stand in it. His word declares us clean, but we are called to receive and live from that reality." },
      { t: "d" },
      { t: "p", x: "This is where the language of the New Testament becomes deeply practical. In Ephesians 4:22-24, Paul speaks of 'putting off' the old man and 'putting on' the new:" },
      { t: "p", x: "'Put off... the old man... and be renewed... and that you put on the new man, which was created according to God, in true righteousness and holiness.'" },
      { t: "p", x: "The phrase 'put on' comes from the Greek enduo, meaning to clothe oneself, to wear, or to be dressed in. This is not about becoming something from nothing; it is about embracing what has already been given." },
      { t: "p", x: "The new man is already created. The righteousness is already provided. The cleansing has already been spoken. Yet we are called to put it on, to consciously live in alignment with what is already true." },
      { t: "d" },
      { t: "p", x: "This brings us back to the vine." },
      { t: "p", x: "Because the ability to 'wear' this righteousness consistently does not come from effort alone, but from abiding connection. A branch disconnected from the vine cannot sustain life, no matter how well it is lifted or pruned. But a branch that remains in the vine receives a continual flow of life that makes fruit-bearing natural." },
      { t: "p", x: "In the same way, righteousness is both: given as a garment and expressed as fruit. And the bridge between the two is abiding." },
      { t: "p", x: "As we remain in Christ: His word continues to cleanse us. His life continues to shape us. His nature begins to express itself through us. What was first declared over us becomes formed within us." },
      { t: "p", x: "This is what Scripture calls the fruit of righteousness. It is not self-produced morality, but the visible outcome of a life rooted in Christ. The garment becomes character. The covering becomes expression. The gift becomes fruit." },
      { t: "d" },
      { t: "p", x: "And so the progression becomes clear: Christ speaks, we are cleansed. Christ gives, we are imputed with righteousness. We receive, we put on the new man. We abide, His life flows through us. We bear, the fruit of righteousness appears." },
      { t: "p", x: "What begins as a word spoken over us becomes a life lived through us. This is why Jesus begins John 15 not with a command, but with a declaration: 'Already you are clean.' He anchors their identity before calling them into abiding. Because fruitfulness is not built on insecurity, but on established identity." },
      { t: "p", x: "We do not abide in order to become accepted. We abide because we have already been made clean." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for the cleansing power of Your Word and the righteousness You have freely given me in Christ. Help me to live from what You have already declared, not striving to earn what You have already secured. Teach me to abide in You and to let Your nature be formed in me each day, bearing fruit that reflects You. Amen." },
    ],
    journal: [
      "Do you truly see yourself as already made clean by Christ's word, or do you still feel the need to earn acceptance before God?",
      "In what ways are you consciously 'putting on' the new man in your daily life, attitudes, and decisions?",
      "Are there areas where you struggle to receive the righteousness God has already provided? What might be holding you back?",
      "How is your connection to Christ shaping your character and producing the fruit of righteousness in you?",
    ],
    prayers: [
      "Thank God for the cleansing power of His Word and the gift of righteousness given through Christ.",
      "Ask for grace to fully receive and walk in the identity He has already spoken over you.",
      "Pray for a deeper understanding of what it means to 'put on' the new man daily.",
      "Ask the Holy Spirit to help you abide in Christ so His life can be expressed through you.",
      "Pray that your life will bear the fruit of righteousness, reflecting Christ in both character and action.",
    ],
    declaration: "I thank the Lord that I am already made clean through His living Word spoken over me. I receive the gift of righteousness, knowing I am clothed and covered by what Christ has done, not by my own effort. I choose to live from this truth, embracing the new life that has already been given to me. I put on the new man and align my life with what God has declared over me. As I abide in Christ, His Word continues to cleanse me and His life shapes me from within. I grow in His nature and bear the fruit of righteousness that reflects His glory. Amen!",
  },
  {
    day: 13,
    title: "Dwelling In the Word",
    audioUrl: "/audio/day-13.mp3",
    quotes: [
      { text: "If the Word of Christ dwells in us richly, Christ Himself dwells in us richly.", author: "John Owen" },
      { text: "We must never separate the person of Christ from the Word of Christ.", author: "John Stott" },
    ],
    anchor: [
      { text: "Abide in Me, and I in you... He who abides in Me, and I in him, bears much fruit.", ref: "John 15:5" },
      { text: "If you abide in Me, and My words abide in you...", ref: "John 15:7" },
    ],
    scriptures: ["John 15:1-8", "Deuteronomy 8:1-3", "John 6:60-69"],
    body: [
      { t: "p", x: "Having seen how we are cleansed by the Word, we now take a step further into what it means to truly dwell with God. If the Word has already changed our standing, the question now becomes: how do we remain in that reality daily? Jesus gently shifts our focus from what the Word has done for us to how it continues to sustain us, inviting us into a life of ongoing communion, not just occasional moments." },
      { t: "p", x: "And this is where Jesus becomes very practical. He doesn't only say, 'Abide in Me.' He adds, 'Let My words abide in you.'" },
      { t: "p", x: "In other words, if we want to remain in Him, we must learn to remain in His Word. Abiding is not just about quiet moments or spiritual feelings. It is about a life shaped, sustained, and guided by what He speaks. His presence and His Word are not two separate things, they are deeply connected." },
      { t: "p", x: "From the very beginning, this has always been true. 'In the beginning was the Word...' (John 1:1). The word used there is Logos, not just words on a page, but the full expression of God. Jesus is that Word made visible. Everything was created through Him, and now the life we have in Him is sustained the same way it began, by His Word." },
      { t: "p", x: "The same voice that said, 'Let there be light,' still speaks today. And when He speaks, He brings light, clarity, and life into the parts of us that need it most." },
      { t: "p", x: "That's why Jesus echoed this portion of Moses' law when He was tempted by the devil: 'Man shall not live by bread alone, but by every word that comes from God.' To the original hearers, this would have been very clear. Bread wasn't optional, it was daily life. You didn't skip it and expect to stay strong. In the same way, God's Word is not something we visit occasionally; it is something we need regularly if we are to remain spiritually alive and growing." },
      { t: "d" },
      { t: "p", x: "As we begin to spend time in Scripture, we start to notice something beautiful. God's Word is not one-dimensional. It meets us in different ways, depending on what we need. Sometimes it comes as instruction, gently showing us the way to go. Sometimes it reveals who God is, helping us trust Him more deeply. At other times it speaks clearly and specifically into our choices, or calls us to align with what is right, even when it stretches us." },
      { t: "p", x: "There are moments when His Word corrects us, moments when it steadies us, and moments when it comforts us with promise. Sometimes it carries authority that calls for obedience, and other times it feels like a quiet reassurance that reminds us we are not alone. All of this is God speaking, guiding, shaping, restoring, and drawing us closer." },
      { t: "d" },
      { t: "p", x: "And this is where something important begins to happen." },
      { t: "p", x: "The Bible speaks of God's Word in two closely related ways: Logos and Rhema. Logos is the written Word, the truth that is already established, what we read in Scripture. But Rhema is when that written Word becomes alive to us personally, when something we read suddenly feels clear, real, and meant for us in that moment." },
      { t: "p", x: "You may have experienced this before. You read a passage you've seen many times, but suddenly it speaks directly into your situation. It's no longer just something you know, it becomes something you feel, understand, and hold onto. That is the Word moving from Logos to Rhema." },
      { t: "p", x: "And this is what Jesus is inviting us into. Not just reading the Word, but letting it remain in us. Letting it move from information into transformation. Letting it settle in our hearts until it begins to shape how we think, how we respond, and how we live. Because His Word is not just instruction, it is life." },
      { t: "p", x: "Jesus says, 'The words that I speak to you are spirit, and they are life.' His Word carries something within it. It strengthens, it renews, it gives clarity when we feel unsure. It is like the life flowing from the vine into the branch. Without that flow, the branch cannot remain healthy. But when that flow is steady, fruit begins to grow naturally." },
      { t: "p", x: "In the same way, when His Word remains in us, something begins to change quietly over time. We become more rooted. More steady. More aware of Him. And fruit, real, lasting fruit, begins to appear." },
      { t: "d" },
      { t: "p", x: "There is a moment in John 6 that brings this into focus. Many people stopped following Jesus because His words were difficult to understand. And when He turned to His disciples and asked if they would leave too, Peter answered, 'Lord, to whom shall we go? You have the words of eternal life.'" },
      { t: "p", x: "Peter had come to recognize something simple but life-changing. There was nowhere else to go. Life itself was in what Jesus spoke. And that is still true for us today." },
      { t: "p", x: "So the invitation remains open. Stay in Me. Let My words stay in you." },
      { t: "p", x: "Come to His Word not as a routine, but as a place of meeting. Take your time with it. Let it speak. Let it settle. Let it become personal. Because as His Word remains in you, you will find that you are, almost without realizing it, remaining in Him. And where that connection is kept, life will always follow." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for Your Word that brings life to my soul. Teach me to remain in it daily, not out of routine, but out of hunger for You. Let Your Word become alive in me, shaping my thoughts, guiding my steps, and drawing me closer to You. Help me to abide in You as Your Word abides in me. Amen." },
    ],
    journal: [
      "In what ways have I been engaging with God's Word, occasionally or consistently?",
      "Have I experienced moments where the Word became personal (Rhema) to me? What changed in those moments?",
      "What distractions or habits are limiting my ability to remain in God's Word daily?",
      "What would it look like for me to truly build my daily life around abiding in His Word?",
    ],
    prayers: [
      "Ask God to give you a deeper hunger and love for His Word.",
      "Pray for God's help to remain consistent in engaging with Scripture daily.",
      "Ask the Holy Spirit to help you receive the Word not just as information, but as life.",
      "Pray for sensitivity to recognize when God is speaking personally to you through His Word.",
      "Ask God to let His Word take root in you and produce lasting fruit in your life.",
    ],
    declaration: "I thank the Lord that His Word lives in me and sustains my life in Him. I choose to abide in Christ by allowing His Word to dwell richly in my heart each day. His Word is not distant or routine, it is living, active, and shaping who I become. I receive His Word as my daily bread, strengthening, guiding, and anchoring me in truth. As His Word abides in me, my thoughts are renewed, my desires are aligned, and my life is directed by Him. I remain in His Word, and through it, I remain in Him, bearing fruit that endures.",
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
    const payload = { action: "prayer", firstName: anon ? "Anonymous" : f.first.trim(), lastName: anon ? "" : f.last.trim(), email: anon ? "anonymous" : f.email.trim(), category: f.cat, request: f.req.trim(), urgency: f.urgency, forWhom: f.forWhom.join(", ") || "Not specified", isPrivate: f.privacy ? "Private" : "Shared", anonymous: anon, timestamp: new Date().toISOString() };
    try {
      const iframe = document.createElement("iframe");
      iframe.name = "prayerFrame";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      const form = document.createElement("form");
      form.method = "POST";
      form.action = SCRIPT_URL;
      form.target = "prayerFrame";
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "payload";
      input.value = JSON.stringify(payload);
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => { document.body.removeChild(form); document.body.removeChild(iframe); }, 5000);
    } catch (e) { console.log("Submit error", e); }
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
    const payload = { action: "testimony", firstName: anon ? "Anonymous" : f.first.trim(), lastName: anon ? "" : f.last.trim(), email: anon ? "anonymous" : f.email.trim(), category: f.cat, title: f.title.trim(), story: f.story.trim(), faithLevel: f.faith, sharePublicly: f.share ? "Public" : "Private", anonymous: anon, timestamp: new Date().toISOString() };
    try {
      const iframe = document.createElement("iframe");
      iframe.name = "testimonyFrame";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      const form = document.createElement("form");
      form.method = "POST";
      form.action = SCRIPT_URL;
      form.target = "testimonyFrame";
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = "payload";
      input.value = JSON.stringify(payload);
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => { document.body.removeChild(form); document.body.removeChild(iframe); }, 5000);
    } catch (e) { console.log("Submit error", e); }
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
      {(Array.isArray(d.anchor) ? d.anchor : [d.anchor]).map((a, i) => <div key={i} style={{ marginBottom: i < (Array.isArray(d.anchor) ? d.anchor.length : 1) - 1 ? 20 : 0 }}>
        <div style={{ ...ff("d", 400, 16), fontStyle: "italic", lineHeight: 1.85, color: C.text, textAlign: "center", padding: "0 8px" }}>{a.text}</div>
        <div style={{ textAlign: "center", marginTop: 10, ...ff("s", 500, 13), color: C.gold }}>{a.ref}</div>
      </div>)}
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
    {d.declaration && <div style={{ padding: "28px 28px 32px", background: C.white, borderTop: "1px solid " + C.border }}>
      <div style={{ ...ff("d", 600, 20), color: C.navy, marginBottom: 4 }}>Daily Declaration</div>
      <div style={{ ...ff("s", 300, 12), letterSpacing: 2, textTransform: "uppercase", color: C.muted, marginBottom: 20 }}>Speak this over your life today</div>
      <div style={{ padding: "22px 24px", background: C.cream, borderLeft: "3px solid " + C.gold, borderRadius: "0 8px 8px 0" }}>
        <p style={{ ...ff("b", 400, 15), fontStyle: "italic", lineHeight: 1.85, color: C.text, margin: 0 }}>{d.declaration}</p>
      </div>
    </div>}
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
  if (pg === "day" && dd) return <div style={w}><DayPg d={dd} onBack={() => { setPg("land"); setSel(null); }} onNav={d => setSel(d)} /><Analytics /></div>;
  return <div style={w}><Landing onDay={d => { setSel(d); setPg("day"); }} /><Analytics /></div>;
}

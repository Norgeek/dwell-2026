import { Analytics } from "@vercel/analytics/react";
import { useState, useEffect, useRef } from "react";

// ══════════════════════════════════════════════════════════
// CONFIG: Set your Google Apps Script deployed web app URL here
// after deploying the Code.gs as a web app.
// ══════════════════════════════════════════════════════════
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzFJjFmWS8XWqQBieQ9Z23_042xiRrS2-zh2VzTsdMhaHjh_Ic1lh3oHJYJXfI51dOzSQ/exec";

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
  {
    day: 14,
    title: "Asking the Right Questions",
    audioUrl: "/audio/day-14.mp3",
    quotes: [
      { text: "What we ask of God reveals what we believe about God.", author: "A. W. Tozer" },
      { text: "The more the Word dwells in you, the more your prayers reflect the mind of Christ.", author: "Andrew Murray" },
    ],
    anchor: [
      { text: "If you abide in Me, and My words abide in you, you will ask what you desire...", ref: "John 15:7 (NKJV)" },
    ],
    scriptures: ["John 15:7", "Luke 1:26-38", "Jeremiah 33:3"],
    body: [
      { t: "p", x: "As we continue in Jesus' words in John 15, we begin to notice a gentle progression. He speaks about abiding, then about His Word remaining in us, and then, almost quietly, He speaks about asking. This is not accidental. It shows us that life with Him is not meant to be silent, but relational. To abide in Christ is to enter into conversation with Him." },
      { t: "p", x: "This may seem simple, but it changes how we see everything. Many of us have learned to approach the Word as something to read and understand. We observe, we reflect, and then we move on. But Scripture was never meant to be a one-way experience. It is an invitation into interaction, where God speaks and we respond, where truth is not only received but explored. One of the ways this interaction deepens is through the questions we ask." },
      { t: "p", x: "What is remarkable is that throughout Scripture, God Himself asks questions. Not because He needs answers, but because we do. In Genesis 3:9, God calls out to Adam, 'Where are you?' He was not asking for information. He was drawing Adam into awareness. Adam was hiding, disconnected, unsure of himself, and the question invited him to stop and see his condition clearly. That same question still meets us today. Where are you in your walk with God, in your thoughts, in your trust?" },
      { t: "p", x: "A few moments later, God asks, 'Who told you that you were naked?' This question goes deeper. It reveals the source of Adam's thinking and exposes the voice he had believed. We may hear that question differently in our own lives. Who told you that you are not enough? Who told you that you cannot change? Who told you that God is distant from you? God's questions are not casual. They are purposeful, bringing things to the surface that might otherwise remain hidden." },
      { t: "p", x: "This pattern continues throughout Scripture. God asks, 'What is this you have done?' to awaken responsibility. He asks Jacob, 'What is your name?' to confront identity. He asks Jeremiah, 'What do you see?' to sharpen perception. Jesus asks His disciples, 'Who do you say that I am?' to lead them into personal revelation. In each moment, the question becomes a doorway, helping people see clearly, think differently, and step into something new." },
      { t: "d" },
      { t: "p", x: "This brings us back to how we approach the Word. If God speaks in ways that invite reflection, then we are meant to respond in the same spirit. We are not only called to read the Word, but to engage with it. We see this in Mary's response when she hears God's promise. She asks, 'How can this be?' She does not resist the Word. She leans into it, and as she does, more understanding is given to her." },
      { t: "p", x: "We see this again when Jesus asks Philip, 'Where can we buy bread for all these people?' On the surface, it sounds like a simple question, but it is more than that. Jesus is inviting Philip to think beyond what he already knows. Philip immediately begins to calculate. He considers the cost, the crowd, and the limits of what is possible, and his answer reflects what he can see, not what God can do. Yet even in that moment, something important happens. The question reveals the limits of Philip's thinking, shows what he is relying on, and prepares the ground for Jesus to do something greater." },
      { t: "p", x: "Sometimes, God asks questions not because we have the answer, but because the process of answering reveals where we are. This is why asking matters. The questions we bring to God's Word shape what we receive from it. When we read without asking, we often remain at the surface, but when we begin to ask, we start to engage. We notice more, understand more, and respond more deeply." },
      { t: "d" },
      { t: "p", x: "This is what Jesus is pointing to when He says, 'You will ask what you desire.' He is describing a life where His Word has settled so deeply within us that even our questions begin to change. Instead of only asking for outcomes, we begin to ask for understanding. Instead of asking only for answers, we begin to ask what God is showing us. Instead of focusing only on what we can see, we begin to look for what He is doing. And as our questions change, so does our experience of Him." },
      { t: "p", x: "The Word becomes more than something we read. It becomes a place where we meet Him, where we listen and respond, where we speak and are guided. This is what it means to abide. It is not only remaining in His presence, but learning to converse with Him, staying long enough to ask, to listen, and to respond." },
      { t: "p", x: "So as you come to His Word, do not rush through it. Stay with it. Ask simple, honest questions. What are You showing me? What does this mean for me today? Where am I in this? You may not always have immediate answers, and that is alright. The goal is not to get everything right. The goal is to remain engaged." },
      { t: "p", x: "Because those who abide do not remain silent. They learn to ask, to listen, and to walk with God in an ongoing conversation. And in that conversation, the Word begins to open, understanding grows, and the life of God becomes clearer within us." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to come to Your Word with a listening and responsive heart. Help me to ask with sincerity, to seek with openness, and to remain with You long enough to understand what You are saying. Shape my thoughts and my desires, and draw me into deeper conversation with You each day. Amen." },
    ],
    journal: [
      "Do I approach God's Word as a task to complete or a conversation to enter?",
      "What kind of questions do I usually bring to God, and what do they reveal about my perspective?",
      "Where might God be inviting me to look deeper or think differently?",
      "How can I become more intentional in engaging with Scripture through questions?",
    ],
    prayers: [
      "Ask God to help you approach His Word with a heart that is open and engaged.",
      "Pray for the grace to ask honest and meaningful questions as you read Scripture.",
      "Ask the Holy Spirit to guide your thoughts and help you see beyond your current understanding.",
      "Pray for discernment to recognize where your thinking needs to align with God's truth.",
      "Ask God to draw you into deeper fellowship with Him through ongoing conversation in His Word.",
    ],
    declaration: "I choose to abide in Christ, allowing His Word to dwell within me and shape my thoughts and desires. I come to Him in conversation, ready to both speak and listen. I ask with sincerity and openness, trusting that He is guiding me into truth. I welcome the questions that reveal my heart and align me with His voice. I remain attentive, responsive, and willing to be shaped by what He shows me. As I abide in Him, my understanding deepens and my walk with Him grows.",
  },
  {
    day: 15,
    title: "Ask and It Will Be Done",
    audioUrl: "/audio/day-15.mp3",
    quotes: [
      { text: "If we ask anything according to His will... it is because His will has first shaped our asking.", author: "John Calvin" },
      { text: "God gives us the desires of our heart by first giving us a heart that desires Him.", author: "Augustine of Hippo" },
    ],
    anchor: [
      { text: "If you abide in Me, and My words abide in you, you will ask what you desire, and it shall be done for you.", ref: "John 15:7 (NKJV)" },
    ],
    scriptures: ["John 15:7-8", "Psalm 37:3-7", "Psalm 105:19", "Romans 8:28"],
    body: [
      { t: "p", x: "There are few promises in Scripture that feel as expansive, and at times as puzzling, as this one. Jesus speaks with remarkable clarity. If we abide in Him and His words abide in us, we will ask what we desire, and it will be done." },
      { t: "p", x: "At first glance, it almost seems absolute. Yet when we step back and consider our own experiences, questions begin to surface. Is God really saying that anything we desire will be granted? Have all the desires we have brought before Him, even those that seemed sincere and aligned, been fulfilled? Or is there something deeper in this promise that we are meant to understand?" },
      { t: "p", x: "The key lies in the condition that precedes the promise. This is not an isolated statement about prayer. It is anchored in abiding. 'If you abide in Me, and My words abide in you...' This changes everything. The promise is not built on desire alone, but on transformed desire. It is not simply about what we want, but about what we come to want as we remain in Him." },
      { t: "p", x: "To abide is to remain, to dwell, to stay continually connected. It is to live in an ongoing relationship with Christ, where His life shapes our life and His word shapes our thinking. As His words take root within us, they begin to refine our inner world, including our values, priorities, expectations, and even our desires. Over time, what we ask begins to reflect who He is." },
      { t: "p", x: "This is why the next verse clarifies the true center of the promise:" },
      { t: "s", x: "'By this My Father is glorified, that you bear much fruit...'", r: "John 15:8 (NKJV)" },
      { t: "p", x: "The fulfillment of our asking is ultimately tied to fruitfulness that brings glory to the Father. The promise is not about self-centered gain, but about God-centered expression. As we abide, our desires are shaped into instruments through which His purposes are accomplished." },
      { t: "d" },
      { t: "p", x: "David captures this same principle in Psalm 37:3-5. He begins with a call that echoes the language of abiding:" },
      { t: "s", x: "'Trust in the Lord, and do good; dwell in the land, and feed on His faithfulness.'", r: "Psalm 37:3 (NKJV)" },
      { t: "p", x: "To dwell and to feed on His faithfulness is to remain in a place of ongoing reliance on God's character. It is to let His proven nature sustain and steady us. This is not far from what it means to abide in Christ and allow His word to abide in us. It is a life anchored in who God is." },
      { t: "p", x: "David then says:" },
      { t: "s", x: "'Delight yourself also in the Lord, and He shall give you the desires of your heart.'", r: "Psalm 37:4 (NKJV)" },
      { t: "p", x: "This is not a promise detached from the previous instruction. Delight precedes desire. As we find our joy in God, our desires are quietly reshaped. What we once wanted begins to align with what He wills. The desires of the heart are not merely granted. They are formed in the place of delight." },
      { t: "p", x: "But David does not stop there. He adds a further layer that helps us understand how these desires come to fulfillment:" },
      { t: "s", x: "'Commit your way to the Lord, trust also in Him, and He shall bring it to pass.'", r: "Psalm 37:5 (NKJV)" },
      { t: "p", x: "Here we see a progression." },
      { t: "p", x: "First, commit. The word carries the sense of rolling something over onto another. It is the act of placing our desires, plans, and outcomes into God's hands. This is where prayer becomes dialogue. As we ask, He may clarify His will, adjust our expectations, or give us glimpses of His process. Sometimes He gives detail. At other times, He gives only assurance." },
      { t: "p", x: "Second, trust. This is where the journey deepens. Once we have committed, we are called to rest in His character. Trust is not passive. It is sustained confidence in who God is, even when the outcome is not yet visible." },
      { t: "p", x: "Then, He shall bring it to pass. The fulfillment rests with Him. What we cannot produce through striving, He accomplishes through His faithfulness." },
      { t: "d" },
      { t: "p", x: "This helps us understand something important. God's answer to our requests is not always immediate, and it is not always what we initially expect. Sometimes His answer is yes. Sometimes it is wait, as David later says, 'Rest in the Lord, and wait patiently for Him' (Psalm 37:7, NKJV). And sometimes it is no, because His purposes are greater than our present understanding." },
      { t: "p", x: "Yet even in the waiting, He is not absent. He is working." },
      { t: "p", x: "Scripture reminds us of Joseph, whose life unfolded over years of delay and testing:" },
      { t: "s", x: "'Until the time that his word came to pass, the word of the Lord tested him.'", r: "Psalm 105:19 (NKJV)" },
      { t: "p", x: "Joseph had a promise, but between the promise and its fulfillment was a process that refined him. The delay was not denial. It was preparation. The word that had been spoken did not fail. It was being formed into him before it was fulfilled through him." },
      { t: "p", x: "This is often where we find ourselves. We have asked. We have believed. Yet we are still waiting. In these moments, the question is no longer simply, 'Will God do what He said?' but, 'Will I continue to trust who He is?'" },
      { t: "d" },
      { t: "p", x: "Because in the end, the promise of John 15:7 is not simply about getting what we ask. It is about becoming the kind of person whose desires are shaped by abiding, whose prayers are aligned with God's heart, and whose life bears fruit that glorifies Him." },
      { t: "p", x: "God's faithfulness is not measured by how quickly He answers, but by how perfectly He fulfills His purposes. And time has a way of revealing this truth. For those who love Him and remain in Him, He is always at work, ordering, aligning, and bringing things together for their good and for His glory (Romans 8:28, NKJV)." },
      { t: "p", x: "So we continue to ask. We continue to abide. We continue to trust. And we rest in this assurance. What He has begun, He will bring to completion, in His time, in His way, and for His glory." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for inviting me into a life where I can ask, trust, and walk with You. Shape my desires as I abide in You, and align my heart with Your will. Teach me to trust Your timing and Your ways, even when I do not yet see the outcome. Let my life bear fruit that brings You glory. Amen." },
    ],
    journal: [
      "When you reflect on your prayers, are they shaped more by your desires or by a growing alignment with God's heart?",
      "What does abiding in Christ practically look like in your current season, especially in relation to your prayer life?",
      "Are there prayers you have brought before God that remain unanswered? How is God inviting you to trust Him in the waiting?",
      "In what ways might God be using delay, process, or uncertainty to shape your character and deepen your dependence on Him?",
    ],
    prayers: [
      "Thank God for the invitation to abide in Christ and to bring your desires before Him in prayer.",
      "Ask the Lord to shape your desires so they align with His will and purposes.",
      "Pray for patience and trust as you wait for God's answers in His timing.",
      "Ask for grace to remain faithful in prayer, even when answers are not immediate.",
      "Pray for a deeper awareness of God's work in your life, especially in seasons of delay or uncertainty.",
    ],
    declaration: "I abide in Christ and His Word, bringing my desires before the Lord with openness and trust. I ask with confidence, knowing He hears me and is at work in every prayer I bring. My desires are being aligned with His will, and my life is becoming a reflection of His heart. I commit my plans into His hands and rest in His wisdom and timing. Whether His answer is yes, wait, or different than I expect, I remain steady in trust. He is faithful to complete what He has begun, and my life will bear fruit for His glory.",
  },
  {
    day: 16,
    title: "Dwelling in God's Love",
    audioUrl: "/audio/day-16.mp3",
    quotes: [
      { text: "The Christian life is not about earning love, but about remaining in love already given.", author: "Watchman Nee" },
      { text: "The love of God, when truly received, cannot remain hidden, it must be expressed.", author: "Francis Chan" },
    ],
    anchor: [
      { text: "As the Father loved Me, I also have loved you; abide in My love. If you keep My commandments, you will abide in My love...", ref: "John 15:9-10 (NKJV)" },
      { text: "...that the world may know that You have sent Me, and have loved them as You have loved Me.", ref: "John 17:23 (NKJV)" },
    ],
    scriptures: ["John 15:1-10", "1 John 4:7-19"],
    body: [
      { t: "p", x: "As Jesus continues His teaching on abiding, He draws the focus inward to something even more foundational than fruit or prayer. He speaks of love, not as an abstract idea, but as the very atmosphere in which abiding takes place. Having invited His disciples to remain in Him, He now reveals what that remaining truly means." },
      { t: "s", x: "'As the Father loved Me, I also have loved you.'", r: "John 15:9" },
      { t: "p", x: "These words carry a depth that stretches beyond easy comprehension. Jesus does not point to a human example or a lesser comparison. He anchors His love for us in the relationship He shares with the Father. The love that has always existed within the Godhead is the same love extended toward us. It is not reduced or distant. It is the same in nature, the same in quality, and the same in intention." },
      { t: "p", x: "In His prayer in John 17, Jesus confirms this again, declaring that the Father has loved us just as He has loved Him. This means that God's love is not shaped by our performance or sustained by our effort. It is rooted in who He is. The question, then, is not whether we are loved, but whether we are living within the awareness of that love." },
      { t: "p", x: "This is why Jesus gives the invitation that follows." },
      { t: "p", x: "'Abide in My love.'" },
      { t: "p", x: "To abide is to remain, to stay, to make one's home. It speaks of settled continuity, not occasional return. It is possible to be loved by God and yet live with only a distant awareness of that love. Abiding draws us into a conscious participation. It invites us to live where His love is known, received, and allowed to shape us." },
      { t: "d" },
      { t: "p", x: "Jesus then adds a statement that helps us understand how this abiding is experienced." },
      { t: "p", x: "'If you keep My commandments, you will abide in My love...'" },
      { t: "p", x: "At first hearing, this may sound like a condition that unsettles assurance. Yet Jesus has already declared that we are loved. Obedience is not the way we earn that love, but the way we remain aligned with it." },
      { t: "p", x: "The word for love here is agapao, a committed, covenantal love that seeks the good of another. The word for keep is tereo, which means to guard, to hold carefully, or to attend to something with intention. This is not about outward performance alone, but about a heart that values what it has received." },
      { t: "p", x: "Together, these words describe a relationship in which love is given, and obedience becomes the careful response that keeps us in step with that love. Just as Jesus remained in the Father's love through alignment with His will, we are invited into that same pattern." },
      { t: "d" },
      { t: "p", x: "This is where the Word of God becomes essential." },
      { t: "p", x: "We cannot remain in a love we do not understand, and it is through the Word that God's love is revealed. Scripture unfolds His character with clarity. It shows us a God who is faithful, patient, just, and merciful. The Word corrects distorted images that may have formed through experience or misunderstanding, and it grounds us in what is true." },
      { t: "p", x: "At the same time, the Word exposes the barriers within us that hinder our ability to receive His love. Fear, guilt, shame, and self-reliance can cloud our perception and keep us from resting in what God has already given. As the Word speaks, it brings these things into the light, replacing what is false with truth and opening our hearts to receive." },
      { t: "p", x: "As this happens, something begins to change within us." },
      { t: "p", x: "Obedience is no longer driven by pressure or fear. It becomes the natural expression of a heart that has come to trust what it has seen. As our understanding of God's love deepens, our desires begin to align with His. What once felt like obligation begins to feel like response." },
      { t: "d" },
      { t: "p", x: "The life of John gives us a clear picture of this. He consistently referred to himself as the disciple whom Jesus loved, not as a statement of comparison, but as a settled identity. He had come to define himself by Christ's love, and this shaped everything that followed." },
      { t: "p", x: "In his writings, he returns to this truth again and again:" },
      { t: "s", x: "'We love Him because He first loved us.'", r: "1 John 4:19" },
      { t: "s", x: "'Whoever keeps His word, truly the love of God is perfected in him.'", r: "1 John 2:5" },
      { t: "p", x: "John's life shows us the progression. Love is first received, then it is lived in, and over time it becomes expressed. What begins as revelation becomes experience, and what is experienced begins to shape the whole of life." },
      { t: "p", x: "To dwell in God's love, then, is to live within a relationship that is both given and cultivated. It is to allow His Word to continually reveal His heart, to let that truth reshape our inner world, and to respond in a way that keeps us aligned with Him." },
      { t: "p", x: "Jesus does not call us to achieve love. He calls us to remain where it already exists." },
      { t: "p", x: "And as we remain, His love moves from something we believe into something we steadily live from, shaping our thoughts, our responses, and the quiet direction of our lives." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for loving me with a love that does not change or fail. Help me to remain in Your love, to receive it fully, and to walk in willing obedience shaped by Your truth. Let Your love form my heart and guide my life each day. Amen." },
    ],
    journal: [
      "Where do you struggle to fully believe that God loves you as He loves His Son?",
      "Are you living from God's love or striving to earn it?",
      "What barriers may be limiting your experience of His love right now?",
      "How is God inviting you to respond to Him in love through obedience?",
    ],
    prayers: [
      "Thank God for His unchanging and unconditional love revealed through Christ.",
      "Ask the Lord to deepen your understanding of His love through His Word.",
      "Pray for the removal of any inner barriers that hinder you from receiving His love fully.",
      "Ask for a heart that responds to God in joyful and willing obedience.",
      "Pray for grace to remain rooted in His love, allowing it to shape your thoughts, desires, and daily walk.",
    ],
    declaration: "I receive the love of Christ, knowing I am loved with the same love the Father has for the Son. I choose to abide in His love, making it my dwelling place and foundation. His love defines me, shapes me, and anchors my life. I keep His Word with a willing heart, not to earn His love, but to remain aligned with it. As I remain in Him, His love is formed in me and expressed through me. I live from His love, and my life reflects His heart.",
  },
  {
    day: 17,
    title: "Holy Spirit, Our Helper",
    audioUrl: "/audio/day-17.mp3",
    quotes: [
      { text: "God has not left us to live the Christian life alone, He has given us His own Spirit.", author: "Francis Chan" },
      { text: "Only the Holy Spirit can make the love of God a living reality in the heart.", author: "D. L. Moody" },
    ],
    anchor: [
      { text: "And I will pray the Father, and He will give you another Helper, that He may abide with you forever.", ref: "John 14:16 (NKJV)" },
      { text: "I will not leave you orphans; I will come to you.", ref: "John 14:18 (NKJV)" },
    ],
    scriptures: ["John 14:16-17", "John 14:25-26", "John 15:26", "John 16:7-15", "Ephesians 3:14-20"],
    body: [
      { t: "p", x: "There comes a point in the journey of abiding where the question becomes deeply practical. How do we actually live this life of remaining in Christ? How do we continue in His love, understand His Word, and walk in step with His will day by day?" },
      { t: "p", x: "Jesus answers that question, not with a method, but with a Person." },
      { t: "p", x: "On the night before His crucifixion, as the disciples wrestled with the reality of His departure, Jesus gave them a promise that would redefine their understanding of His presence. He told them that the Father would send 'another Helper.'" },
      { t: "p", x: "The word 'another' is the Greek allos, meaning another of the same kind. Not different in nature, not a lesser substitute, but one who continues the same kind of presence and ministry. What Jesus had been to them outwardly, the Spirit would now be within them. His nearness would not diminish. It would deepen." },
      { t: "p", x: "The word 'Helper' is parakletos, formed from para meaning alongside, and kaleo meaning to call. It describes one called alongside to support, strengthen, guide, and stand with another. In its fuller sense, it includes the roles of advocate, counselor, teacher, and companion." },
      { t: "p", x: "This means the Holy Spirit is not an abstract force or distant influence. He is the personal presence of God with us and in us. He comes alongside us, and He dwells within us. Jesus adds that this Helper will remain 'forever.' His presence is not temporary or occasional. It is abiding. The same word that defines our call to remain in Christ now describes the Spirit's presence with us. He does not visit. He stays." },
      { t: "p", x: "This is why Jesus could say, 'I will not leave you orphans.' Though He was going away physically, He was not withdrawing His presence. Through the Spirit, He would come to them in a way that was even more intimate. The Holy Spirit is, in this sense, the continuing presence of Christ within us." },
      { t: "d" },
      { t: "p", x: "He is also called 'the Spirit of truth.' The word aletheia speaks of what is real, what is uncovered, what is fully revealed. The Spirit does not simply inform us. He reveals reality as God sees it. He makes Christ known, not as a concept, but as a living presence within us." },
      { t: "p", x: "And one of the first ways He does this is by opening our hearts to the love of God." },
      { t: "p", x: "Scripture tells us that 'the love of God has been poured out in our hearts by the Holy Spirit' (Romans 5:5). What was once something we believed externally begins to be experienced internally. The Spirit makes God's love real to us. But He does more than reveal it. He strengthens us to live within it." },
      { t: "p", x: "Paul prays that we would be 'strengthened with might through His Spirit in the inner man... that you, being rooted and grounded in love, may be able to comprehend... what is the width and length and depth and height... to know the love of Christ which passes knowledge' (Ephesians 3:16-19). This shows us that the experience of God's love is not automatic. It requires inner strengthening. It requires a work of the Spirit that stabilizes and anchors us in that love." },
      { t: "p", x: "Without Him, we may hear about God's love, but struggle to receive it fully. With Him, we begin to be rooted in it, established in it, and gradually opened to its depth. He brings us into an experiential knowledge of God's love that goes beyond words." },
      { t: "d" },
      { t: "p", x: "From there, He leads us further into truth through the Word. Jesus said that the Spirit would teach us all things and bring to remembrance all that He had spoken. The Spirit does not replace the Word. He illuminates it. He gives understanding, clarity, and insight. He causes what we read to become alive, and what we hear to take root within us. The Word begins to dwell in us because the Spirit is actively revealing its meaning." },
      { t: "p", x: "He also guides us in prayer. 'We do not know what we should pray for as we ought, but the Spirit Himself makes intercession for us...' (Romans 8:26). The One who knows the mind of God helps us pray in alignment with His will. He shapes our desires, refines our requests, and leads us into a deeper participation in the purposes of God." },
      { t: "p", x: "Jesus goes further to say that the Spirit will guide us into all truth and will speak what He hears from the Father, revealing what belongs to Christ (John 16:13-14). He does not act independently, but in perfect unity with the Father and the Son. He unfolds the will of God to us, not all at once, but as we walk with Him." },
      { t: "p", x: "He also testifies of Christ. In a world that does not recognize Him, the Spirit bears witness to who Jesus is. And as He does, He enables us to become witnesses as well. We are not left to represent Christ in our own strength. His witness works within us and flows through us." },
      { t: "d" },
      { t: "p", x: "All of this brings us to a central and unshakable truth. There is no awareness of God without the Spirit. There is no approach to God without the Spirit. There is no abiding in God without the Spirit." },
      { t: "p", x: "He is the One who makes this life possible. He is the Helper who comes alongside us. He is the presence who dwells within us. He is the Teacher who leads us into truth. He is the One who reveals Christ and forms His life in us. He is not an addition to our walk with God. He is the very means by which we walk with Him." },
      { t: "p", x: "So, as we continue this journey of dwelling, we begin to recognize something deeply reassuring. We are not being asked to sustain this life by our own strength or understanding. The Spirit of God is already at work within us, drawing us, teaching us, strengthening us, and leading us into deeper communion." },
      { t: "p", x: "And as we learn to respond to Him, to remain attentive to His voice, and to yield to His work within us, abiding becomes less of a struggle to maintain and more of a life we are being gently led into from within." },
      { t: "d" },
      { t: "p", x: "Holy Spirit, thank You for dwelling within me as my Helper and guide. Teach me to recognize Your voice, to yield to Your leading, and to remain rooted in the love of God. Strengthen my heart to walk in truth, and lead me deeper into fellowship with the Father through Christ. Amen." },
    ],
    journal: [
      "How aware are you of the Holy Spirit's presence and activity in your daily life?",
      "In what areas is the Holy Spirit inviting you to trust His guidance more fully?",
      "Are you allowing the Spirit to ground you in God's love, or are there areas of resistance?",
      "How can you become more attentive to His voice through the Word and in prayer?",
    ],
    prayers: [
      "Thank God for the gift of the Holy Spirit as your ever-present Helper.",
      "Ask the Holy Spirit to deepen your awareness of His presence within you.",
      "Pray for strength to be rooted and grounded in God's love through the Spirit.",
      "Ask for sensitivity to His voice as He teaches you through the Word.",
      "Pray for guidance in prayer, that your desires and requests align with God's will.",
    ],
    declaration: "I thank God for the gift of the Holy Spirit, who dwells with me and in me as my Helper. He is not distant but present, guiding, strengthening, and revealing Christ within me. I am not alone; His presence abides with me continually. He opens my heart to the love of God and grounds me deeply in it. He teaches me the Word, leads me into truth, and helps me walk in alignment with God's will. As I yield to Him daily, I am guided, strengthened, and formed into the likeness of Christ. Amen.",
  },
  {
    day: 18,
    title: "The Word: God's Love Story",
    audioUrl: "/audio/day-18.mp3",
    quotes: [
      { text: "The whole Bible is a single drama, telling the story of God's plan to redeem His people.", author: "N. T. Wright" },
      { text: "The Bible is the story of God's relentless love pursuing His people.", author: "Timothy Keller" },
    ],
    anchor: [
      { text: "All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.", ref: "2 Timothy 3:16 (NKJV)" },
      { text: "For God so loved the world that He gave His only begotten Son...", ref: "John 3:16 (NKJV)" },
    ],
    scriptures: ["2 Timothy 3:14-16", "John 3:14-17", "Luke 24:27", "Hebrews 1:1-2"],
    body: [
      { t: "p", x: "As we begin to dwell more intentionally in the Word, it is important to pause and consider what we are actually holding in our hands. For many, the Bible can feel like a collection of separate books, written at different times, by different people, in different places. Yet beneath that diversity lies something remarkably unified." },
      { t: "p", x: "The Bible is not a random gathering of spiritual writings. It is one story." },
      { t: "p", x: "It stretches across generations, cultures, and languages, yet it carries a single, consistent thread. From its opening pages to its final vision, Scripture tells the story of a God who creates, pursues, speaks, restores, and completes His purpose. And at the center of that story is love." },
      { t: "p", x: "Paul describes Scripture as 'God-breathed.' The word he uses, theopneustos, means breathed out by God. This means the Bible is not simply human reflection about God. It is God's self-revelation through human authors. Their personalities, contexts, and experiences are present, yet behind them all stands one divine Author, making Himself known. And what He reveals is not only His will, but His heart." },
      { t: "p", x: "From the beginning, we see that humanity was created with intention. God made men and women in His image, not merely to exist, but to live in relationship with Him. Even when that relationship was broken, the story did not turn into abandonment. It turned toward redemption. God did not withdraw. He moved closer." },
      { t: "p", x: "What follows through the pages of Scripture is not a series of disconnected events, but a steady unfolding of that pursuit. Through covenant, promise, law, and prophecy, God continues to reveal His desire to restore what was lost. The story moves forward with patience and purpose, pointing again and again toward something greater that is yet to come." },
      { t: "d" },
      { t: "p", x: "This is why the Bible must be read as one unfolding narrative. The law, the prophets, the writings, the Gospels, the letters, and the final vision are not separate spiritual worlds. They are parts of a single story moving in one direction." },
      { t: "p", x: "The Creator becomes the covenant-maker. The covenant-maker becomes the promise-giver. The promise-giver sends His Son. And in Christ, the story reaches its clearest expression. The love that was spoken in promise becomes visible in a person. The God who had been revealing Himself through words now reveals Himself fully through His Son. What was anticipated is now embodied. What was promised is now fulfilled." },
      { t: "p", x: "This is why Scripture finds its center in Jesus." },
      { t: "p", x: "He is not a late addition to the story, but the One toward whom the entire story has been moving. The earlier pages prepare the way for Him. The Gospels reveal Him. The rest of the New Testament explains His work and its meaning. And the final chapters of Scripture point toward the completion of what He began." },
      { t: "p", x: "Seen this way, the Bible is not simply a guide for living or a source of instruction, though it certainly is both. It is the unfolding account of God making Himself known, and drawing people back into relationship with Him." },
      { t: "p", x: "It is, at its deepest level, a love story." },
      { t: "d" },
      { t: "p", x: "And what makes this even more remarkable is how this story has come to us. These writings were formed across centuries, carried through different languages, preserved through careful transmission, and shared across generations. They moved from spoken word to written text, from scrolls to pages, from one culture to another." },
      { t: "p", x: "This was not accidental. It reflects the patience and intention of God. He chose to reveal Himself within history, through real people and real circumstances, so that His message could be carried faithfully across time. The same God who spoke ensured that His words would endure." },
      { t: "p", x: "Even today, that story continues to move outward, reaching people in every language and culture. The Word travels because the love behind it is meant for all." },
      { t: "d" },
      { t: "p", x: "When we begin to see Scripture in this way, something shifts in how we approach it. We are no longer reading isolated passages or searching only for answers. We are entering a story that is already in motion, a story that reveals who God is and what He has done." },
      { t: "p", x: "And as we dwell in that story, we begin to see that it is not only about people long ago. It is a story that reaches into our own lives, inviting us into the same relationship it describes." },
      { t: "p", x: "But this naturally leads to another question. If this is truly God's Word, carried through time, preserved across generations, and given to reveal His heart, how can we be sure it is reliable? How do we know that what we hold today is true and trustworthy? This is where the journey leads next." },
      { t: "p", x: "For now, we begin here. The Word we are invited to dwell in is not distant or disconnected. It is the unfolding story of a God who has not remained silent, and who continues to make Himself known. And at the center of that story is love." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for revealing Yourself through Your Word. As I open the Scriptures, help me to see Your heart clearly and to recognize Your love woven through every page. Draw me into Your story, and teach me to dwell in Your Word with understanding and trust. Amen." },
    ],
    journal: [
      "How has your view of the Bible been shaped over time, and how does seeing it as one unified story change that perspective?",
      "Where do you most clearly see God's love revealed in Scripture?",
      "Do you approach the Word more as information or as relationship?",
      "How is God inviting you to engage more deeply with His Word in this season?",
    ],
    prayers: [
      "Thank God for revealing Himself through His Word across generations.",
      "Ask for a deeper understanding of Scripture as one unified story centered on Christ.",
      "Pray for a renewed hunger and desire to dwell in God's Word daily.",
      "Ask the Holy Spirit to open your eyes to see God's love throughout Scripture.",
    ],
    declaration: "I receive the Word of God as living, God-breathed, and full of truth, revealing His heart to me. As I read, I see one unfolding story of His love, drawing me into relationship with Him. My eyes are opened to know Him more deeply through every part of Scripture. I fix my heart on Christ, the center of this story, and I grow in understanding of His love for me. His Word renews my mind, strengthens my faith, and guides my life. As I dwell in His Word, I am rooted in His truth and anchored in His love. Amen.",
  },
  {
    day: 19,
    title: "The Bible: Truth You Can Trust",
    audioUrl: "/audio/day-19.mp3",
    quotes: [
      { text: "We can trust the Bible completely because it is completely trustworthy.", author: "R. C. Sproul" },
      { text: "God has watched over His Word so that it has come down to us intact.", author: "F. F. Bruce" },
    ],
    anchor: [
      { text: "The sum of Your word is truth, and every one of Your righteous judgments endures forever.", ref: "Psalm 119:160 (NKJV)" },
      { text: "Till heaven and earth pass away, one jot or one tittle will by no means pass from the law till all is fulfilled.", ref: "Matthew 5:18 (NKJV)" },
      { text: "Sanctify them by Your truth. Your word is truth.", ref: "John 17:17 (NKJV)" },
    ],
    scriptures: ["Psalm 119:160", "Matthew 5:18", "John 17:17", "2 Peter 1:16-21"],
    body: [
      { t: "p", x: "Having seen the Bible as God's love story, we are naturally led to an equally important question: Can this story truly be trusted? Not only as something we read, but as something we build our lives upon." },
      { t: "p", x: "Scripture answers that question with remarkable confidence. It does not present itself as temporary guidance or helpful inspiration, but as truth in its fullness and permanence. The psalmist declares that the sum of God's word is truth. Jesus affirms that not even the smallest detail will fail until all is fulfilled. In His prayer, He calls God's word truth itself." },
      { t: "p", x: "These are not cautious claims. They are clear and decisive. The Bible presents itself as authoritative, enduring, and dependable. It is not merely a record of spiritual reflection, but a revelation that stands across time." },
      { t: "p", x: "This confidence begins with its source. Scripture is God-breathed. It carries His character because it comes from Him. And because God is true, His Word is trustworthy." },
      { t: "p", x: "Yet God did not give His Word outside of history. He gave it within time, through languages, cultures, and people. What may seem complex at first glance actually tells a simple story: God has not only spoken, He has carefully preserved what He has said." },
      { t: "d" },
      { t: "p", x: "The Bible was written across centuries in Hebrew, with portions in Aramaic, and the New Testament in Greek. It moved from oral transmission into written form, from scrolls to manuscripts, and later into codices and printed pages. Along the way, it was carefully copied, preserved, and transmitted by generations who treated it as sacred." },
      { t: "p", x: "The preservation of Scripture across centuries is one of the strongest reasons it can be trusted. The discovery of the Dead Sea Scrolls provided some of the oldest known copies of Old Testament texts. When these were compared with later manuscripts, such as the Masoretic text, the level of agreement was striking. While minor variations exist, the essential message remained consistent across centuries of transmission." },
      { t: "p", x: "This tells us something important. We are not holding a fragile or uncertain text, but a faithfully preserved one. What God spoke has not been lost." },
      { t: "p", x: "The role of scribes in this process cannot be overlooked. They were not casual copyists, but careful stewards of sacred writings. Their work involved counting letters, verifying lines, and ensuring accuracy. The presence of textual variants across manuscripts is sometimes raised as a concern, but in reality it reflects transparency rather than corruption. Because we have a large number of manuscripts, scholars are able to compare them and identify differences. This process, known as textual criticism, does not weaken confidence in Scripture. It strengthens it by showing that the text can be examined, tested, and confirmed." },
      { t: "p", x: "For the New Testament in particular, the manuscript evidence is extensive. Thousands of Greek manuscripts exist, along with many more early translations and quotations from early Christian writers. This breadth of evidence allows the text to be cross-checked across a wide range of sources, reinforcing confidence that the message has been faithfully preserved." },
      { t: "d" },
      { t: "p", x: "This naturally leads to another question: does the Bible speak about real events, or only spiritual ideas?" },
      { t: "p", x: "Again, Scripture proves to be grounded in reality. Its narratives are set within identifiable places, cultures, and historical figures. Kings, empires, cities, and rulers appear not as symbolic inventions, but as part of real history. Archaeological discoveries, such as inscriptions referencing figures like Pontius Pilate, confirm that the biblical narrative operates within the real world." },
      { t: "p", x: "This matters because truth rooted in history can be examined. The Bible does not ask us to believe in a detached myth, but to engage with a story that unfolds in time." },
      { t: "p", x: "Its unity adds another layer of confidence. Written over many centuries by different authors, the Bible maintains a coherent and unfolding message. From creation to redemption to restoration, it tells one story. Promises made early are fulfilled later. Themes introduced in one generation are completed in another. At the center of it all stands Christ, the One in whom the entire story comes together." },
      { t: "p", x: "Prophecy strengthens this unity even further. Scripture speaks ahead of events and then unfolds them within history. The life of Jesus is presented as the fulfillment of long-anticipated promises. His birth, His life, His suffering, His death, and His resurrection align with a pattern that runs through the Old Testament. This is not a collection of isolated predictions, but a unified redemptive story." },
      { t: "d" },
      { t: "p", x: "The formation of Scripture as we know it also reflects careful recognition. The books of the Bible were not randomly selected. They were received, tested, read, and recognized across communities as carrying prophetic and apostolic authority. What we have today is not an invented collection, but a recognized witness to God's revelation." },
      { t: "p", x: "Many people notice the existence of multiple Bible translations and wonder if this affects reliability. In reality, it reflects the opposite. Translation exists because God's Word is meant to be understood across languages and cultures." },
      { t: "p", x: "Broadly speaking, translations fall into three categories. Formal equivalence aims to stay closer to the wording and structure of the original languages. Dynamic or functional equivalence focuses on conveying the meaning in natural, readable language. Paraphrases take greater freedom to express the message in a more accessible way. Each approach serves a purpose, and together they reflect a shared commitment to faithfully communicate the same truth." },
      { t: "p", x: "The presence of multiple translations is therefore not a sign of confusion, but of mission and care. It shows that God's Word continues to reach people in language they can understand." },
      { t: "d" },
      { t: "p", x: "When we step back and examine Scripture as a whole, it holds firm. It is historically grounded, internally coherent, carefully preserved, and spiritually transformative. It speaks truthfully about the past, meaningfully into the present, and faithfully toward the future." },
      { t: "p", x: "This is why it can be trusted. Not because it avoids questions, but because it stands through them. Not because it has been hidden, but because it has been preserved, examined, and lived from across generations." },
      { t: "p", x: "And at the center of that trust is this unshakable reality: the God who speaks is true, the God who promises is faithful, and the God who gave His Word has not allowed it to be lost. Heaven and earth may pass away, but His Word remains. And it remains so that we may know Him, trust Him, and build our lives upon what will never fail." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for Your Word that is true, enduring, and trustworthy. Strengthen my confidence in what You have spoken, and help me to build my life upon Your truth. As I read and reflect on Scripture, anchor my heart in its certainty and draw me deeper into knowing You. Amen." },
    ],
    journal: [
      "Do you truly trust the Bible as a reliable foundation for your life? Why or why not?",
      "Which aspect of Scripture's trustworthiness strengthens your confidence the most: its history, unity, preservation, or prophecy?",
      "How do you respond when questions or doubts about Scripture arise?",
      "What would it look like for you to live more intentionally rooted in God's Word?",
    ],
    prayers: [
      "Thank God for preserving His Word faithfully across generations.",
      "Ask for deeper confidence in the truth and authority of Scripture.",
      "Ask the Holy Spirit to anchor your heart in God's Word above shifting opinions and circumstances.",
      "Pray for understanding and clarity when engaging with difficult or complex passages.",
      "Pray for grace to not only believe the Word, but to live it out daily.",
    ],
    declaration: "I receive God's Word as truth, unchanging, reliable, and enduring through every generation. I trust that what God has spoken is faithful, preserved, and established forever. His Word is a firm foundation, and I build my life upon it with confidence. I choose to believe His truth above every other voice and allow it to shape my thinking and guide my steps. His Word sanctifies me, anchors me, and leads me into what is real and lasting. As I dwell in His truth, my faith is strengthened, and my life is grounded in what will never fail. Amen.",
  },
  {
    day: 20,
    title: "The Word: Its Purpose",
    audioUrl: "/audio/day-20.mp3",
    quotes: [
      { text: "The Scriptures are the God-ordained means by which we come to know God.", author: "J. I. Packer" },
      { text: "The Bible is the true guide of life; it teaches us how to live wisely before God.", author: "John Calvin" },
    ],
    anchor: [
      { text: "I will never forget Your precepts, for by them You have given me life.", ref: "Psalm 119:93 (NKJV)" },
      { text: "Sanctify them by Your truth. Your word is truth.", ref: "John 17:17 (NKJV)" },
      { text: "All Scripture is God-breathed and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.", ref: "2 Timothy 3:16-17 (NKJV)" },
    ],
    scriptures: ["Psalm 119:93, 98, 105, 130", "John 17:17", "2 Timothy 3:16", "Acts 20:32"],
    body: [
      { t: "p", x: "Having seen the Word as God's love story, and having come to trust it as truth, we are now led to a deeper question: Why did God give us His Word? What is it meant to do in us?" },
      { t: "p", x: "Scripture was never given merely to inform, impress, or settle debates. It was given with purpose. It is God-breathed, God-directed, and God-active, shaping a people who know Him, reflect Him, and walk in His ways. The purpose of the Word is not narrow. It is as wide as God's redemptive plan and as intimate as the quiet work He does within the human heart." },
      { t: "p", x: "At its highest level, the Word reveals God Himself. In Scripture, we do not merely learn about what God has done; we encounter who He is. He is revealed as Creator, King, Shepherd, Judge, Father, Redeemer, and Bridegroom. His character unfolds through His words and His works. His holiness, justice, mercy, wisdom, and love are not abstract ideas but lived realities revealed across the pages of Scripture." },
      { t: "p", x: "This revelation reaches its fullness in Christ. The Word is not only written; it is embodied. Jesus is the living Word, the exact expression of the Father's nature. This means that Scripture does not merely communicate God's will, but opens to us His very heart. And it is by the Holy Spirit that this revelation becomes living and personal. The same Spirit who inspired the Word illuminates it within us, enabling us not only to understand God, but to truly know Him." },
      { t: "d" },
      { t: "p", x: "Flowing from this, the Word unfolds the story of redemption. From Genesis to Revelation, Scripture tells one unified story: creation, fall, promise, covenant, redemption, and restoration. Jesus Himself showed that the Law and the Prophets point to Him. The Word explains why the world is broken, why humanity cannot save itself, and how God has acted in Christ to redeem a people for Himself. It tells us not only what has happened, but what it all means." },
      { t: "p", x: "Yet the Word does more than reveal truth. It imparts life." },
      { t: "p", x: "The psalmist declares, 'By them You have given me life.' This is not poetic exaggeration. God's Word is living and active. It revives what is weary, restores what has wandered, and strengthens what is faint. The same voice that spoke creation into being continues to speak life into the hearts of His people. Scripture is not merely read; it is received as something that sustains and renews." },
      { t: "p", x: "The Word also teaches us the fear of the Lord and forms true wisdom. It trains us to see rightly, to judge wisely, and to walk carefully. It reshapes our thinking, corrects our instincts, and aligns our lives with God's ways. Through it, we gain understanding not only of God, but of life itself." },
      { t: "d" },
      { t: "p", x: "In doing so, the Word reveals the truth about us. It exposes the heart, uncovers motives, corrects false perceptions, and shows us who we truly are. We discover both our dignity as image-bearers and our brokenness through sin. Scripture interprets our lives in a way that nothing else can. It shows us where we stand and where we are being called." },
      { t: "p", x: "The Word also sanctifies. Jesus prayed, 'Sanctify them by Your truth.' This is not merely about moral improvement. It is about being set apart and made holy through truth. The Word cleanses, refines, and reshapes us. It removes what is false, renews the mind, and forms Christlike character within us. In this way, the Word does not only describe holiness; it produces it." },
      { t: "p", x: "Paul gathers many of these purposes together when he writes that Scripture is profitable for doctrine, reproof, correction, and instruction in righteousness. It teaches what is true, exposes what is wrong, restores what has gone astray, and trains us to live rightly. The Word addresses the whole person: mind, heart, and life." },
      { t: "p", x: "And all of this leads toward a clear goal: that the believer may be complete, equipped for every good work. Scripture is not given so that we become informed observers, but transformed participants in God's purposes. It prepares us to live, serve, endure, and walk faithfully before Him." },
      { t: "d" },
      { t: "p", x: "There is also a strengthening dimension to the Word. It builds us up and anchors us in what God has promised. It shapes our identity and secures our hope. It reminds us that we are not only being formed, but are also heirs of what God has prepared. The Word keeps us rooted in grace and oriented toward our inheritance in Christ." },
      { t: "p", x: "This is why Scripture holds such a central place in the life of God's people. It is life, light, wisdom, correction, stability, and hope. It guards the heart, directs the path, and sustains the journey. It is not peripheral to spiritual life. It is essential to it." },
      { t: "p", x: "When all these purposes come together, a clear picture emerges." },
      { t: "p", x: "God gave His Word to reveal Himself, to unfold redemption, to impart life, to teach wisdom, to expose and correct, to sanctify, to train in righteousness, to equip for every good work, and to build His people into those who know their inheritance in Him." },
      { t: "p", x: "The Word is not merely something we read occasionally. It is the means by which God continually works within us." },
      { t: "d" },
      { t: "p", x: "And so the invitation is simple, but weighty." },
      { t: "p", x: "Do not treat the Word as distant or optional. Receive it. Remain in it. Let it dwell in you." },
      { t: "p", x: "Because in the end, the purpose of the Word is not just that we understand it, but that through it, we are formed into a people who truly know God and walk in His ways." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for Your Word, through which You reveal Yourself and give life. Open my heart to receive it, shape my mind by its truth, and form my life according to Your ways. By Your Spirit, help me not only to understand Your Word, but to live in it daily. Amen." },
    ],
    journal: [
      "Which purpose of God's Word stands out most to you right now, and why?",
      "In what ways has God's Word brought life, correction, or clarity into your life recently?",
      "Are you approaching Scripture more as information or as transformation?",
      "What practical step can you take to engage more intentionally with God's Word this week?",
    ],
    prayers: [
      "Thank God for giving His Word as a means of life, truth, and transformation.",
      "Ask the Holy Spirit to illuminate Scripture and make it personal and living to you.",
      "Pray for a deeper hunger and consistency in engaging with God's Word.",
      "Ask for grace to receive correction and respond to God's Word with obedience.",
      "Pray that your life will increasingly reflect the fruit and character formed by the Word.",
    ],
    declaration: "I receive the Word of God as living, active, and purposeful in my life. Through it, I come to know God, understand His ways, and walk in His truth. His Word gives me life, renews my heart, and strengthens me daily. I allow His Word to teach me, correct me, and shape me into His likeness. It reveals truth, forms wisdom within me, and aligns my life with His will. As I remain in His Word, I am sanctified, equipped, and made ready for every good work. Amen.",
  },
  {
    day: 21,
    title: "The Word: Living and Active",
    audioUrl: "/audio/day-21.mp3",
    quotes: [
      { text: "The Bible is alive, it speaks to me; it has feet, it runs after me; it has hands, it lays hold of me.", author: "Martin Luther" },
      { text: "Truth demands a response; it cannot remain merely heard.", author: "A. W. Tozer" },
    ],
    anchor: [
      { text: "For the word of God is living and powerful, and sharper than any two-edged sword...", ref: "Hebrews 4:12 (NKJV)" },
    ],
    scriptures: ["Psalm 33:6, 9", "Hebrews 4:2", "Psalm 107:20", "Isaiah 55:10-11"],
    body: [
      { t: "p", x: "There is a difference between something that is true and something that is alive." },
      { t: "p", x: "Many things may be true, yet remain still. They inform, but they do not act. They describe, but they do not produce. But the Word of God belongs to an entirely different category. It is not only true. It is living." },
      { t: "p", x: "Hebrews describes the Word as 'living' and 'powerful.' The word translated living is zon, meaning alive, active, and continually operative. It is not a word that was once spoken and then left behind. It is a word that continues to act. The word translated powerful is energes, meaning effective, active, at work. It is the root from which we derive the word energy." },
      { t: "p", x: "This means the Word of God is not passive. It is alive and at work wherever it is received." },
      { t: "d" },
      { t: "p", x: "Its power is rooted in its source. The Word is inseparably connected to God Himself. Scripture tells us that in the beginning, the Word was with God and was God, and through Him all things were made. Creation itself is the first testimony to the living power of God's Word. What did not exist came into being because God spoke. The universe did not emerge through process alone, but through divine utterance. 'He spoke, and it was done.'" },
      { t: "p", x: "This reveals something profound. The Word does not merely describe reality. It establishes it. When God speaks, His Word carries both the authority of His will and the ability to bring that will into effect." },
      { t: "p", x: "That same Word now operates in redemption. What sin has fractured, the Word begins to restore. Jesus prayed that His people would be sanctified through the truth, and that truth is found in God's Word. Paul describes the church as being cleansed by the washing of water through the Word. The Word does not only inform us about holiness. It actively participates in forming it within us. It exposes what is false, removes what is unclean, renews the mind, and shapes a life that reflects Christ." },
      { t: "p", x: "The Word also imparts life. The psalmist says, 'By them You have given me life.' God's Word is not simply addressed to those who already have life. It is one of the means by which life is awakened, restored, and sustained. It reaches into dryness and brings renewal. It strengthens what is weak and revives what is fading." },
      { t: "p", x: "It also builds. Paul speaks of the Word of God's grace as that which is able to build us up and establish us. The Word strengthens the inner life. It forms structure where there was instability and brings clarity where there was confusion. It does not only correct what is wrong. It constructs what is right." },
      { t: "d" },
      { t: "p", x: "Scripture also presents the Word as an instrument of healing and deliverance. 'He sent His word and healed them.' The Word carries God's restoring intention into the life of the hearer. It brings order to what is disordered, clarity to what is clouded, and freedom to what is bound." },
      { t: "p", x: "The Word operates with authority. When God speaks, His authority stands behind His Word. It is not suggestion, but decree. Scripture declares that what God sends forth does not return empty, but accomplishes what He intends." },
      { t: "p", x: "But the experience of that power is shaped by response." },
      { t: "p", x: "Hebrews reminds us that the Word did not profit some because it was not mixed with faith. The Word carries power, but that power is not fully experienced where it is resisted. Faith does not create the power of the Word. It aligns us with it. It allows the Word to take root and do its work within us." },
      { t: "p", x: "And once received, the Word must be lived. The Word produces its visible fruit where it is obeyed. Obedience is where the unseen work of the Word begins to take visible form in a life." },
      { t: "d" },
      { t: "p", x: "This also helps us understand why the Word may sometimes seem inactive. It is not because it lacks power, but because it is being resisted, crowded, or neglected. Unbelief closes the door to it. Distraction competes with it. Delay weakens response. Lack of stewardship allows what has been heard to fade." },
      { t: "p", x: "But where the Word is received, trusted, and lived, its effect becomes undeniable. It creates what was not there. It restores what was broken. It forms what God desires. It brings life, clarity, and transformation." },
      { t: "p", x: "The Word of God is not waiting to be proven. It is waiting to be received. It carries within it the life of God, the authority of His will, and the power to bring change. The same voice that called light out of darkness still speaks. The same Word that formed creation still forms lives." },
      { t: "p", x: "Where it is welcomed, it works. Where it is trusted, it produces. Where it is lived, it becomes visible. And over time, what began as something heard becomes something seen." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for Your Word that is living and active. Teach me to receive it with faith, to trust it fully, and to respond to it with obedience. Let Your Word work deeply in me, bringing life, transformation, and alignment with Your will. Amen." },
    ],
    journal: [
      "Do you truly see God's Word as living and active in your life?",
      "Where have you experienced the Word producing change or growth in you?",
      "Is there something God has spoken that you need to respond to more fully?",
      "What distractions or hindrances may be limiting the work of the Word in your life?",
    ],
    prayers: [
      "Thank God for the life and power contained in His Word.",
      "Ask for a deeper faith to receive and trust what God has spoken.",
      "Pray for grace to act on God's Word promptly and faithfully.",
      "Ask the Holy Spirit to remove distractions and strengthen your focus on the Word.",
      "Pray that God's Word will produce visible fruit in your life.",
    ],
    declaration: "I receive the Word of God as living, active, and powerful in my life. It is not passive or distant, but at work within me, bringing life, clarity, and transformation. As I welcome His Word, it renews my mind, restores my heart, and aligns me with His will. I choose to receive His Word with faith and respond with obedience. I will not resist or neglect what He has spoken, but allow it to take root and produce fruit in me. As I trust and live by His Word, it builds me, strengthens me, and makes His work visible in my life. Amen.",
  },
  {
    day: 22,
    title: "It's All About Jesus",
    audioUrl: "/audio/day-22.mp3",
    quotes: [
      { text: "Jesus Christ is the center of the Bible, and the Bible is all about Him.", author: "Billy Graham" },
      { text: "In the Old Testament, Christ is concealed; in the New Testament, Christ is revealed.", author: "Augustine of Hippo" },
    ],
    anchor: [
      { text: "You search the Scriptures, for in them you think you have eternal life; and these are they which testify of Me. But you are not willing to come to Me that you may have life.", ref: "John 5:39-40 (NKJV)" },
    ],
    scriptures: ["John 5:39-40", "Luke 24:27, 44", "2 Corinthians 3:14-18", "John 1:16-17"],
    body: [
      { t: "p", x: "There is a way to read Scripture and miss its center." },
      { t: "p", x: "Jesus speaks these words to those who knew the Scriptures well. They studied them, memorized them, taught them, and built their lives around them. Yet He tells them something deeply revealing: the very Scriptures they search are meant to lead them to Him, and still they have not come to Him. This exposes a sobering possibility. It is possible to know the text and yet miss the Person it reveals." },
      { t: "p", x: "The Bible is not an end in itself. It is a revelation that points beyond itself to Christ. To read Scripture rightly is not only to understand its message, but to encounter the One of whom that message speaks." },
      { t: "p", x: "After His resurrection, Jesus makes this unmistakably clear. Walking with His disciples, He begins 'from Moses and all the Prophets' and explains the things concerning Himself (Luke 24:27). Later, He opens their understanding, showing them that everything written in the Law, the Prophets, and the Psalms was ultimately about Him (Luke 24:44). In that moment, the entire structure of Scripture comes into focus. What once seemed like separate sections becomes a unified witness, and that witness is Christ." },
      { t: "p", x: "This means the Bible is not primarily about moral instruction, historical record, or even theological system, though it contains all of these. At its deepest level, it is about Jesus. He is the thread that runs through every page, the fulfillment toward which every promise moves, and the reality to which every shadow points." },
      { t: "d" },
      { t: "p", x: "Yet seeing Him is not automatic." },
      { t: "p", x: "Paul explains that a veil remains when Scripture is read apart from Christ, but that veil is removed when one turns to the Lord (2 Corinthians 3:14-18). The ability to truly see Christ in Scripture is not merely intellectual. It is spiritual. The Holy Spirit opens our understanding, enabling us to behold the glory of God revealed in Christ. And in beholding Him, we are changed." },
      { t: "p", x: "John expresses this in another way. 'Of His fullness we have all received, and grace for grace. For the law was given through Moses, but grace and truth came through Jesus Christ' (John 1:16-17). The Word does not only inform us about Christ. It brings us into encounter with Him. And in that encounter, grace and truth become living realities flowing from His person." },
      { t: "p", x: "This also helps us understand the nature of the Old Testament. Christ is present there, but not yet fully revealed. He appears in promise, pattern, shadow, and prophecy. But in the New Testament, what was hidden becomes unveiled. The anticipation gives way to fulfillment. What was once seen in part is now seen clearly in the person of Jesus." },
      { t: "d" },
      { t: "p", x: "When we begin to read Scripture this way, we start to recognize Him everywhere." },
      { t: "p", x: "He is the true Adam, restoring what was lost and establishing a new humanity. He is the true Noah, preserving a people through judgment into new life. He is the true Abraham, through whom all nations are blessed. He is the true Isaac, the beloved Son who is offered for our redemption. He is the true Moses, delivering His people not from Egypt, but from sin. He is the perfect High Priest, who lives forever to intercede. He is the perfect sacrifice, fulfilling all that the law pointed toward. He is the true Joshua, leading His people into their inheritance. He is the true Boaz, redeeming what was lost and restoring what was broken. He is the true Samuel, the faithful prophet who hears God clearly, reveals His voice, and leads His people in righteousness. He is the true David, the Shepherd-King whose reign is everlasting and whose kingdom will never end. He is the true Jonah, entering death and rising again, extending mercy to all. He is the true Daniel, revealing the wisdom of God in the midst of earthly kingdoms and pointing to a kingdom that will never be shaken." },
      { t: "p", x: "And beyond all these, He is the One to whom all the prophets pointed. They spoke of His coming, His suffering, His rejection, His death, and His resurrection. What they saw from a distance has now come into fullness." },
      { t: "d" },
      { t: "p", x: "This is why Scripture must ultimately lead us to Him. If we read the Bible and only gather information, we have not yet reached its purpose. If we study deeply but do not see Christ, we are still at the surface. The goal is not merely to know the Word, but to encounter the Word made flesh." },
      { t: "p", x: "Because He is the essence of Scripture." },
      { t: "p", x: "He is not only the subject of the Bible. He is its center, its fulfillment, and its life. And more than that, He is the One in whose image we are being recreated. As we behold Him in the Word, we are transformed into that same image. The more clearly we see Him, the more deeply we become like Him." },
      { t: "p", x: "So the question begins to change. Not only, 'What does this passage say?' but also, 'How does this reveal Christ?' And even further, 'How does this draw me into deeper fellowship with Him?'" },
      { t: "p", x: "Because in the end, it's all about Jesus." },
      { t: "d" },
      { t: "p", x: "Lord Jesus, open my eyes to see You in Your Word. Remove every veil that keeps me from knowing You rightly. As I read, let me not only understand, but encounter You. Transform me as I behold You, and draw me into deeper fellowship with You. Amen." },
    ],
    journal: [
      "Do you approach Scripture primarily for understanding, or for encountering Christ?",
      "What helps you recognize Jesus more clearly in the Word?",
      "Are there passages you read without considering how they point to Christ?",
      "How is God inviting you into deeper fellowship with Him through His Word?",
    ],
    prayers: [
      "Thank God for revealing Himself through Jesus in the Scriptures.",
      "Ask the Holy Spirit to open your eyes to see Christ more clearly in the Word.",
      "Pray for a deeper hunger to know Jesus, not just information about Him.",
      "Ask for transformation as you behold Christ through Scripture.",
      "Pray for grace to remain in living fellowship with Him daily.",
    ],
    declaration: "I behold Jesus as the center of Scripture, the One to whom every promise points and every truth reveals. As I read the Word, my eyes are opened to see Him, and my heart is drawn into deeper fellowship with Him. I do not seek knowledge alone, but an encounter with the living Christ. The Spirit reveals Him to me, and as I behold Him, I am transformed into His likeness. His grace and truth shape my life, and His fullness flows within me. Today and always, I fix my gaze on Him, because in the end, it is all about Jesus. Amen.",
  },
  {
    day: 23,
    title: "Knowing Jesus: Son of God & Son of Man",
    audioUrl: "/audio/day-23.mp3",
    quotes: [
      { text: "The essence of eternal life is knowing God and Jesus Christ.", author: "J. I. Packer" },
      { text: "The Son of God became the Son of Man so that the sons of men might become the sons of God.", author: "Augustine of Hippo" },
    ],
    anchor: [
      { text: "And truly Jesus did many other signs... but these are written that you may believe that Jesus is the Christ, the Son of God, and that believing you may have life in His name.", ref: "John 20:30-31 (NKJV)" },
    ],
    scriptures: ["John 20:30-31", "John 3:13-14", "Romans 8:29-30", "1 John 3:1-2"],
    body: [
      { t: "p", x: "To know Jesus is to come into the very center of everything God has revealed." },
      { t: "p", x: "Scripture does not present Him merely as a teacher, a prophet, or a moral example. It reveals Him through a profound dual identity that holds together the fullness of God's purpose: He is the Son of God and the Son of Man. These are not casual titles. They unveil His nature, define His mission, and shape the destiny of all who belong to Him." },
      { t: "p", x: "John writes with a clear aim, that we may believe that Jesus is the Christ, the Son of God, and that by believing, we may have life in His name. The word translated believe is the Greek pisteuo, which goes beyond agreement. It speaks of trust, reliance, and a settled confidence that rests in Him. To believe in the Son is to entrust our lives to Him as the source and sustainer of life." },
      { t: "p", x: "The title Son of God reveals His divine origin and nature. John uses the term monogenes, often translated 'only begotten,' which carries the sense of one of a kind, uniquely revealed. Jesus is not one among many. He is the unique and perfect revelation of God. In Him, the invisible God is made visible. To see the Son is to encounter the Father." },
      { t: "d" },
      { t: "p", x: "Yet Jesus most often refers to Himself as the Son of Man." },
      { t: "p", x: "This title reaches back to the vision in Daniel, where one like the Son of Man is given dominion, glory, and an everlasting kingdom. It carries both humility and authority. It affirms true humanity, yet also declares divine appointment. When Jesus uses this title, He is revealing Himself as the One who stands in the place of humanity, representing us before God, while also bringing God's reign into the world." },
      { t: "p", x: "In Him, heaven and earth meet. As the Son of God, He comes from the Father. As the Son of Man, He comes for humanity. His identity is not divided. It is perfectly unified, and it is through this unity that His mission unfolds." },
      { t: "p", x: "Jesus speaks of this in John 3, where He says that the Son of Man has descended from heaven and must be lifted up. The One who comes down is the One who is lifted up. The cross is not an interruption of His mission. It is its fulfillment. In His lifting up, both in sacrifice and in exaltation, we see who He is and why He came." },
      { t: "d" },
      { t: "p", x: "And His mission is clear: to reveal the Father." },
      { t: "p", x: "Jesus lives in complete dependence on the Father. He does what He sees the Father doing. He speaks what He hears the Father saying. His life is a visible expression of the invisible God. Every act of compassion, every word of truth, every moment of restoration reveals the heart of the Father." },
      { t: "p", x: "This is most clearly seen in the giving of the Son. God's love is not abstract. It is demonstrated. The sending of Jesus reveals the depth of divine love, a love that gives, seeks, and restores. This is agape, a self-giving, sacrificial love that moves toward us for our good." },
      { t: "p", x: "Yet His mission goes further. It is not only to reveal God, but to restore humanity." },
      { t: "p", x: "Scripture tells us that God's purpose is to bring many sons to glory, conforming them to the image of His Son. The word often translated sons is huios, which speaks of mature children, those who share in inheritance and likeness. This is not only about belonging to God's family. It is about being formed into His image." },
      { t: "p", x: "Jesus is not only the Son. He is the pattern. In Him, a new humanity begins. What was fractured in Adam is restored in Christ. He becomes the head of a new creation. Humanity is not only forgiven. It is recreated, renewed, and brought into alignment with God's original intent." },
      { t: "d" },
      { t: "p", x: "And this new life is expressed through love. Everything in the ministry of Jesus flows from love. His message reveals the kingdom, but it is a kingdom defined by love. His miracles restore what is broken. His teachings realign the heart. His suffering reveals the depth of His obedience and compassion." },
      { t: "p", x: "At the center stands the cross. Here, the Son of God gives Himself. Here, the Son of Man represents humanity. The cross is where love is fully revealed and restoration is fully opened." },
      { t: "p", x: "But why does this all matter? Because we are made in the image of God. And that image is now fully revealed in Christ." },
      { t: "p", x: "To know Jesus is to discover who we are called to become. We are called to be conformed to His image, to receive and live out our identity as children of God in Him. The same Spirit who reveals Christ also forms Christ within us." },
      { t: "p", x: "We are not only called to admire Him. We are called to resemble Him." },
      { t: "p", x: "And just as He revealed the Father, we are called to reveal the Father through lives shaped by His love. This is not a love of words alone, but a life of action, sacrifice, and faithfulness." },
      { t: "d" },
      { t: "p", x: "To know Him, then, is not a one-time moment. It is an ongoing encounter." },
      { t: "p", x: "In Scripture, to know carries the sense of relationship, experience, and participation. It is to walk with Him, to remain in Him, and to be shaped by Him. As we continue in this knowing, His life becomes active within us. His love reshapes us. His identity begins to define us." },
      { t: "p", x: "And so the journey of faith is not simply about learning more information. It is about knowing Him more deeply. Because in knowing Him, we come into life." },
      { t: "d" },
      { t: "p", x: "Lord Jesus, reveal Yourself to me more deeply. Help me to know You not only in understanding, but in experience. Form Your life within me, shape my heart by Your love, and teach me to reflect the Father as You have revealed Him. Amen." },
    ],
    journal: [
      "What does it mean to you that Jesus is both the Son of God and the Son of Man?",
      "How does understanding His identity deepen your trust in Him?",
      "In what ways is God shaping you into the image of Christ?",
      "How can your life more clearly reflect the Father through love?",
    ],
    prayers: [
      "Thank God for revealing Himself through Jesus Christ.",
      "Ask for a deeper revelation of who Jesus is.",
      "Pray for transformation into the image of Christ.",
      "Ask for grace to live as a child of God in both character and action.",
      "Pray for a life that reveals the Father through love.",
    ],
    declaration: "I believe in Jesus, the Son of God, and I trust in Him as the source and sustainer of my life. He reveals the Father to me, and in Him I see the fullness of God's love and truth. I rest in Him with confidence, knowing that life is found in His name. I receive Him as the Son of Man, who came for me and restored what was broken. As I know Him more deeply, His life is formed in me and His love shapes who I am. I am being conformed to His image, living as a child of God and reflecting the Father through love. Amen.",
  },
  {
    day: 24,
    title: "Let the Word Dwell Richly",
    audioUrl: "/audio/day-24.mp3",
    quotes: [
      { text: "It is not enough to have the Word in the hand; we must have it in the heart.", author: "Charles Spurgeon" },
      { text: "The more richly the Word dwells in us, the more clearly Christ is seen in us.", author: "John Stott" },
    ],
    anchor: [
      { text: "Let the word of Christ dwell in you richly in all wisdom...", ref: "Colossians 3:16 (NKJV)" },
    ],
    scriptures: ["Colossians 3:14-17", "Deuteronomy 6:4-9", "Acts 17:10-12", "Ephesians 1:17-18"],
    body: [
      { t: "p", x: "Seeing that Scripture centers on Christ, we are now drawn to a deeper question: how does that Word take hold within us?" },
      { t: "p", x: "It is one thing to recognize that the Word reveals Jesus. It is another to allow that Word to take up residence within us. The invitation is not to visit the Word occasionally, but to host it continually. It is not meant to remain external, but to become internal, shaping thought, desire, and direction from within." },
      { t: "p", x: "Paul captures this with striking clarity: 'Let the word of Christ dwell in you richly.' The word translated dwell is the Greek enoikeo, meaning to inhabit, to reside, to make a home within. This is the language of settled presence. And he adds richly, plousios, meaning abundantly and fully. The picture is of a life saturated with the Word, where it fills the inner space and shapes the atmosphere of the heart." },
      { t: "p", x: "But this kind of dwelling is not automatic. It is cultivated through intentional engagement." },
      { t: "p", x: "It begins with desire. Peter urges believers to 'desire the pure milk of the word' (1 Peter 2:2). The word epipotheo speaks of deep longing and strong craving. This is not casual interest. It is hunger. Just as a newborn longs for nourishment, the believer is invited to cultivate a deep appetite for the Word. Often, this desire grows as we begin to recognize the life and value contained within Scripture." },
      { t: "p", x: "From desire flows disciplined reading. Scripture invites consistent and thoughtful engagement. As we return to it regularly, the Word begins to shape our perception. Patterns become clearer, truth settles, and understanding deepens. This is why God instructed His people to keep His words continually before them, in their homes, in their conversations, and in their daily rhythms (Deuteronomy 6:4-9). The Word was meant to be woven into life, not separated from it." },
      { t: "p", x: "Listening then becomes essential. 'Faith comes by hearing, and hearing by the word of God' (Romans 10:17). The Greek akouo goes beyond hearing sound. It includes attentiveness and responsiveness. To hear rightly is to incline the heart toward what is being spoken. The Word is not simply read. It is received with intention." },
      { t: "p", x: "This leads to receiving. John says, 'As many as received Him, to them He gave the right to become children of God' (John 1:12). The word lambano means to take hold of, to welcome, and to embrace. It suggests active acceptance. The Word is meant to be welcomed into the inner life and allowed to shape it." },
      { t: "p", x: "Closely connected to receiving is believing. Hebrews reminds us that the Word did not profit some because it was not mixed with faith (Hebrews 4:2). The word pisteuo speaks of trust, reliance, and settled confidence. To believe the Word is to lean on it as true and align our lives with what it declares. Without faith, the Word may be heard, but its transforming power is not fully experienced." },
      { t: "d" },
      { t: "p", x: "Engagement also involves reflection and examination. The Bereans 'searched the Scriptures daily' (Acts 17:10-12). This searching carries the sense of careful examination and thoughtful discernment. It is not passive reading, but active engagement. The Word invites us to think, to question, and to go deeper." },
      { t: "p", x: "Understanding, however, is not achieved by effort alone. It is given through illumination. The psalmist prays, 'Open my eyes, that I may see wondrous things from Your law' (Psalm 119:18). Paul echoes this in his prayer for a spirit of wisdom and revelation (Ephesians 1:17-18). The Holy Spirit, who inspired the Word, also reveals it. He enables us to perceive its depth and apply its truth." },
      { t: "p", x: "This illumination brings light. 'The entrance of Your words gives light' (Psalm 119:130). The Word shines into confusion and brings clarity. It becomes a guide, showing the way forward. With this light, we begin to see life from God's perspective." },
      { t: "d" },
      { t: "p", x: "As the Word dwells richly, it shapes both the individual and the environment. Paul speaks of teaching, admonishing, singing, and thanksgiving flowing from a Word-filled life. The Word begins to influence conversations, relationships, and worship. It creates an atmosphere where truth and grace are continually expressed." },
      { t: "p", x: "And over time, something deeper begins to take shape. The Word settles within us. It remains, it influences, and it reshapes the inner life. What was once something we turned to becomes something we carry. The voice of God grows familiar, steady, and formative." },
      { t: "p", x: "This is the movement of a life formed by Scripture. Not driven by occasional moments of insight, but shaped by a continual presence within." },
      { t: "p", x: "The invitation is not simply to increase our exposure to the Word, but to allow it to take root. To give it space to speak, to remain, and to guide." },
      { t: "p", x: "As this happens, the Word does what it has always done. It forms Christ within us. And as Christ is formed, our thoughts, desires, and actions begin to align with Him. What once required effort begins to flow from a transformed heart. This is the quiet strength of a life where the Word dwells richly." },
      { t: "d" },
      { t: "p", x: "Lord, let Your Word find a home within me. Awaken in me a deep hunger for it, and give me grace to engage it faithfully. Teach me to hear, receive, and believe what You speak. Form Christ within me through Your Word, and guide my life by Your truth. Amen." },
    ],
    journal: [
      "What place does God's Word currently have in your daily life?",
      "Which area of engagement needs the most growth: desire, reading, listening, receiving, or believing?",
      "How has the Word shaped your thinking or decisions recently?",
      "What would it look like for the Word to truly dwell in you richly?",
    ],
    prayers: [
      "Ask God to awaken a deeper hunger for His Word.",
      "Pray for consistency in reading and engaging Scripture.",
      "Ask for a listening heart that responds to God's voice.",
      "Pray for faith to trust and act on what God has spoken.",
      "Ask the Holy Spirit to illuminate the Word and form Christ within you.",
    ],
    declaration: "I welcome the Word of Christ into my heart, allowing it to dwell in me richly and shape my thoughts, desires, and decisions. I cultivate a deep hunger for His Word, choosing to hear, receive, and believe what He speaks. As I engage with it daily, His truth takes root and transforms me from within. The Holy Spirit gives me understanding, illuminates the Word, and helps me live it out with faith and obedience. The Word is alive in me, guiding my steps and shaping my life to reflect Christ. As it dwells within me, I grow in wisdom, maturity, and alignment with His will. Amen.",
  },
  {
    day: 25,
    title: "Studying the Word",
    audioUrl: "/audio/day-25.mp3",
    quotes: [
      { text: "The Bible must be handled with reverence and accuracy, for it is the Word of God.", author: "R. C. Sproul" },
      { text: "The Bible is a book that must be understood spiritually.", author: "Watchman Nee" },
    ],
    anchor: [
      { text: "Study and do your best to present yourself to God approved [a workman tested by trial], who has no reason to be ashamed, accurately handling and skillfully teaching the word of truth.", ref: "2 Timothy 2:15 (AMP)" },
    ],
    scriptures: ["Acts 17:10-12", "Psalm 119:97-105", "Ephesians 1:17-18", "2 Timothy 3:16-17"],
    body: [
      { t: "p", x: "If the Word is to dwell richly within us, it must be engaged with care." },
      { t: "p", x: "There is a difference between reading the Word and studying it. Reading introduces us to Scripture, but study anchors us in it. It moves us beyond familiarity into understanding, beyond inspiration into formation. The Word invites not only devotion, but diligence. It calls for a posture that is intentional, attentive, and willing to go deeper." },
      { t: "p", x: "Paul's instruction to Timothy brings this into focus. The word translated 'study' or 'be diligent' is the Greek spoudazo, which means to make every effort, to be eager, to apply oneself with urgency and care. This is not casual engagement. It is focused pursuit. The goal is to be 'approved,' from the word dokimos, meaning tested and proven genuine. The image is of a life shaped by truth, one that has been examined and found faithful." },
      { t: "p", x: "He then speaks of 'accurately handling' the Word. This comes from the Greek orthotomeo, meaning to cut straight, to handle correctly, or to guide along a straight path. It carries the idea of precision. The Word is not to be handled loosely or selectively. It is to be approached carefully, understood correctly, and applied faithfully." },
      { t: "p", x: "This is why the Bereans stand as a model. They 'received the word with all readiness, and searched the Scriptures daily to find out whether these things were so' (Acts 17:10-12). The word anakrino, translated 'searched,' means to examine closely, to investigate thoroughly, to evaluate carefully. Their posture was both open and discerning. They welcomed teaching, yet they tested everything against Scripture." },
      { t: "d" },
      { t: "p", x: "This leads us to a foundational principle. Scripture interprets Scripture." },
      { t: "p", x: "The Word is not only what we study. It is the lens through which it is understood. Clear passages illuminate difficult ones. The whole counsel of God guards us from isolated conclusions. As we compare Scripture with Scripture, we begin to see its harmony, depth, and consistency." },
      { t: "p", x: "There are several helpful approaches that support this kind of study." },
      { t: "p", x: "A topical study gathers what Scripture says about a subject across multiple passages, bringing clarity to themes such as faith, grace, or righteousness." },
      { t: "p", x: "A character study observes how God works through individuals, revealing patterns of calling, growth, struggle, and transformation." },
      { t: "p", x: "A thematic study traces larger threads such as covenant, kingdom, or redemption, showing how God unfolds His purposes across time." },
      { t: "p", x: "A book study immerses us in the context and message of a single portion of Scripture, helping us understand its structure and flow." },
      { t: "p", x: "Each of these approaches strengthens understanding in a different way. Together, they help us engage the Word with balance and depth." },
      { t: "p", x: "Another important practice is comparison. Truth becomes clearer when we see how different passages speak to the same reality. This builds stability and guards against misunderstanding." },
      { t: "d" },
      { t: "p", x: "Yet studying the Word has never been meant to be an isolated exercise." },
      { t: "p", x: "From the gatherings of Israel to the life of the early church, Scripture was read and explored together. There is strength in shared understanding. When we study in community, others help us see what we may overlook. Questions are sharpened. Insight is deepened. Truth is confirmed." },
      { t: "p", x: "There is also value in learning from those who have given themselves to studying Scripture. Throughout history, God has raised teachers who help illuminate His Word. Voices such as Timothy Keller, Derek Prince, and R. C. Sproul have served the church by explaining Scripture with clarity and depth. These voices can guide and enrich our understanding, but they must never replace Scripture itself." },
      { t: "p", x: "Practical tools can also support consistency. Bible reading plans create rhythm. Resources like those developed by Nicky and Pippa Gumbel, along with platforms such as YouVersion and Dwell, help sustain engagement over time. Commentaries and study Bibles offer historical and contextual insights that bring clarity to the text. They serve as helpful aids, but they remain secondary to the Word itself." },
      { t: "d" },
      { t: "p", x: "And this brings us to the most essential dimension of studying Scripture. We must not exclude the Spirit." },
      { t: "p", x: "Jesus promised that the Spirit would guide us into all truth. Study without the Spirit can become intellectual effort alone. But study with the Spirit becomes illumination. The same Spirit who inspired the Word opens it to us. He reveals, convicts, and applies truth in ways that go beyond human understanding." },
      { t: "p", x: "This is why prayer must accompany study. We ask God to open our eyes, to direct our attention, and to give us understanding. We remain attentive to His leading. Sometimes He brings clarity. Sometimes He brings conviction. Sometimes He draws us deeper through a quiet prompting that invites us to linger." },
      { t: "p", x: "The Spirit also helps us discern what to focus on and how to respond. Study becomes more than a task. It becomes a conversation. And over time, something begins to take shape." },
      { t: "p", x: "The Word moves from information to formation. What we study begins to shape how we think, how we see, and how we live. Truth becomes clearer. Discernment becomes sharper. Confidence in God's Word grows steadier." },
      { t: "p", x: "In this way, study becomes an act of devotion. It is not driven by obligation, but by a desire to know God more deeply. It is not about mastering Scripture, but about allowing Scripture to shape us." },
      { t: "p", x: "We study to be approved. We study to handle the Word rightly. We study to grow in understanding. But above all, we study to know God. Because the goal of studying the Word is not information. It is transformation." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to study Your Word with diligence and humility. Give me understanding as I seek You, and guide me by Your Spirit into truth. Help me to handle Your Word rightly and to live according to what You reveal. Let Your Word shape my life and draw me closer to You. Amen." },
    ],
    journal: [
      "What is the difference between how you read the Word and how you study it?",
      "Which approach to studying Scripture could help you grow more deeply right now?",
      "How can you be more intentional in engaging the Word consistently?",
      "In what ways is the Spirit inviting you to go deeper in your understanding?",
    ],
    prayers: [
      "Ask God for diligence and discipline in studying His Word.",
      "Pray for clarity and understanding as you engage Scripture.",
      "Ask the Holy Spirit to guide and illuminate the Word.",
      "Pray for discernment to handle the Word rightly.",
      "Ask for transformation through the truth of Scripture.",
    ],
    declaration: "I approach God's Word with diligence, humility, and reverence, seeking to understand and live by His truth. I engage it with care and intention, allowing it to shape my thinking and guide my life. As I study, I grow in clarity and discernment. The Holy Spirit teaches me, illuminates the Word, and leads me into truth. I handle Scripture with accuracy and allow it to form my heart and direct my steps. As I remain faithful in studying the Word, my life is transformed, and I walk in His ways. Amen.",
  },
  {
    day: 26,
    title: "Meditating on the Word",
    audioUrl: "/audio/day-26.mp3",
    quotes: [
      { text: "The Word must not only be read, it must be ruminated upon.", author: "Charles Spurgeon" },
      { text: "What occupies the mind in the day will shape the soul in the night.", author: "John Owen" },
    ],
    anchor: [
      { text: "But his delight is in the law of the Lord, and in His law he meditates day and night.", ref: "Psalm 1:2 (NKJV)" },
      { text: "This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night...", ref: "Joshua 1:8 (NKJV)" },
    ],
    scriptures: ["Psalm 1:1-3", "Joshua 1:8", "Isaiah 26:3", "Philippians 4:6-8"],
    body: [
      { t: "p", x: "There is a way of engaging Scripture that goes beyond learning into lingering, beyond gathering truth into being shaped by it. The Word of God is not only meant to be understood, but to be carried, revisited, and allowed to settle deeply within the heart. This is where engagement becomes formation, and where the voice of God begins to remain with us. This is the invitation of meditation." },
      { t: "p", x: "Scripture gives us a vivid picture of what this looks like. The Hebrew word translated 'meditate' in both Psalm 1 and Joshua 1 is haga. It carries the meaning of muttering, speaking under one's breath, whispering, rehearsing repeatedly, or murmuring softly. This is not the image of silent reflection alone. It is active engagement. It involves the voice, the mind, and the heart together." },
      { t: "p", x: "This reshapes our understanding of meditation. Biblical meditation is not passive thinking. It is active participation. The Word is not only read and considered. It is spoken, repeated, and turned over again and again until it begins to settle within. It is held close, revisited often, and allowed to shape the inner world." },
      { t: "p", x: "This is why Joshua is instructed that the Word must not depart from his mouth. To those who first heard this command, such a practice would have been natural. Much of life in ancient Israel was shaped by oral learning. God's Word was carried through memory, recitation, and repetition. People would quietly speak Scripture to themselves throughout the day, allowing it to sink deeply into their consciousness. Meditation was not confined to a specific time. It became a rhythm woven into daily life." },
      { t: "p", x: "In this way, meditation becomes closely connected to dwelling." },
      { t: "p", x: "To dwell is to remain, to inhabit, to make a place one's home. When the Word is continually spoken, remembered, and revisited, it begins to inhabit the inner life. It is no longer external instruction. It becomes internal reality. The Word begins to shape thought patterns, guide decisions, and influence responses from within." },
      { t: "d" },
      { t: "p", x: "Psalm 1 reveals this progression. The righteous person delights in the law of the Lord, and out of that delight flows meditation. Desire leads to repetition, and repetition leads to formation. The result is a life that is rooted and stable, like a tree planted by streams of water. Meditation keeps the roots connected to the source." },
      { t: "p", x: "Psalm 119 expands this further. The psalmist speaks of meditating throughout the day and even in the night watches. Meditation here includes thinking, speaking, remembering, and delighting. It is sustained engagement that produces wisdom and understanding. The Word becomes the lens through which life is interpreted." },
      { t: "p", x: "Meditation also leads us beyond the words into the presence of God Himself. 'I meditate on You in the night watches,' the psalmist says (Psalm 63:6). The Word draws us into God, and meditation allows us to remain attentive to Him. It cultivates awareness, stillness, and intimacy." },
      { t: "p", x: "Isaiah adds another dimension. 'You will keep him in perfect peace, whose mind is stayed on You' (Isaiah 26:3). The word translated 'stayed' carries the idea of being supported or upheld. When the mind is fixed on God, stability follows. Meditation anchors the inner life. In a world filled with noise and distraction, it becomes a place of quiet strength." },
      { t: "d" },
      { t: "p", x: "The New Testament continues this same reality in different language. We are told to let the Word dwell richly within us, to renew our minds, and to think on what is true and pure. These are expressions of the same principle. Meditation is how the Word takes root, how the mind is renewed, and how life is shaped from within." },
      { t: "p", x: "This stands in contrast to many modern ideas of meditation, which emphasize emptying the mind. Biblical meditation fills the mind with truth. It anchors thought in God's Word and aligns the whole person with His reality." },
      { t: "p", x: "Practically, meditation can take simple and steady forms. A verse may be read slowly, spoken aloud, repeated quietly, and revisited throughout the day. Each phrase can be turned over in thought, prayed through, and applied to life. Over time, repetition allows the Word to move deeper. What begins as something we recall becomes something that shapes how we respond." },
      { t: "d" },
      { t: "p", x: "And this is where meditation connects most clearly to dwelling in God. To dwell in Him is to remain in His presence and truth. Meditation creates that environment. As the Word is spoken, remembered, and revisited, it fills the inner space of the heart. The mind becomes anchored. The heart becomes attentive. The life becomes aligned." },
      { t: "p", x: "The Word begins to live within us, quietly but steadily reshaping what we love, how we think, and how we respond. Over time, it becomes less something we return to and more something we carry. Its influence deepens, its voice becomes familiar, and its truth begins to guide us from within." },
      { t: "p", x: "This is the quiet work of meditation. It does not rush, yet it transforms. It does not strive, yet it reshapes. It forms a life that is steady, attentive, and rooted in God." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to remain with Your Word. Help me to return to it throughout my day, to hold it in my heart, and to let it shape my thoughts and responses. Let Your truth settle deeply within me, and draw me into a life that is anchored in You. Amen." },
    ],
    journal: [
      "What does meditation on the Word currently look like in your daily life?",
      "How can you intentionally return to Scripture throughout the day?",
      "Which verse or truth is God inviting you to meditate on right now?",
      "What changes when your mind is anchored in God's Word?",
    ],
    prayers: [
      "Receive grace from God to develop a habit of meditating on His Word daily.",
      "Pray for a focused mind that returns to Scripture throughout the day.",
      "Ask the Holy Spirit to bring God's Word to remembrance.",
      "Pray for stability, clarity, and peace through meditation.",
      "Ask that Christ be formed in you as the Word takes root.",
    ],
    declaration: "I delight in the Word of God and choose to meditate on it day and night. I speak it, revisit it, and hold it in my heart, allowing it to take root within me. As I remain with His Word, it shapes my thoughts, anchors my mind, and brings stability to my life. His truth fills my inner life, guiding my responses and aligning me with His will. I am strengthened, renewed, and kept in peace as my mind is fixed on Him. As I meditate on His Word, it becomes part of me, forming my life in His truth. Amen.",
  },
  {
    day: 27,
    title: "Praying the Word",
    audioUrl: "/audio/day-27.mp3",
    quotes: [
      { text: "The best prayers are those that are based on the Word of God.", author: "D. L. Moody" },
      { text: "God answers the prayer that He inspires.", author: "George M\u00FCller" },
    ],
    anchor: [
      { text: "I, Daniel, understood by the books the number of the years specified by the word of the Lord through Jeremiah the prophet, that He would accomplish seventy years in the desolations of Jerusalem. Then I set my face toward the Lord God to make request by prayer and supplications, with fasting, sackcloth, and ashes.", ref: "Daniel 9:2-3 (NKJV)" },
      { text: "If you abide in Me, and My words abide in you, you will ask what you desire, and it shall be done for you.", ref: "John 15:7 (NKJV)" },
    ],
    scriptures: ["1 John 5:14-15", "Daniel 9", "2 Kings 19:14-19", "Acts 4:23-31"],
    body: [
      { t: "p", x: "As the Word becomes familiar through study and settled through meditation, it begins to shape more than our thoughts. It begins to shape our response to God. What once felt like something we returned to at certain moments now becomes something that quietly forms the language of our hearts. And from that place, prayer begins to take on a different depth." },
      { t: "p", x: "Prayer, in its truest sense, is not merely the presentation of requests. It is alignment with God. It is the place where the heart responds to what God has revealed. When the Word dwells richly within us, it does not remain silent. It begins to give voice to what the Spirit is stirring within. What we ask is no longer formed only by need or circumstance, but by revelation." },
      { t: "p", x: "This is the foundation of Jesus' promise in John 15:7. 'If you abide in Me, and My words abide in you...' When His words take root within us, they begin to shape our desires. And when desire is shaped by the Word, prayer begins to align with the will of God. This is why Scripture says, 'If we ask anything according to His will, He hears us' (1 John 5:14). Confidence in prayer does not come from intensity, but from alignment with what God has already spoken." },
      { t: "d" },
      { t: "p", x: "Daniel's life gives us a clear picture of this reality." },
      { t: "p", x: "As he studied the writings of Jeremiah, he came to understand God's timing concerning the restoration of Jerusalem. Yet this understanding did not lead him into passivity. It led him into prayer. 'Then I set my face toward the Lord God.' What God had revealed in His Word became the foundation of Daniel's response." },
      { t: "p", x: "Revelation led to intercession. Daniel does not pray casually. He enters into prayer with humility, repentance, and earnestness. He stands in the gap not only for himself, but for his people. His prayer echoes the pattern found in 2 Chronicles 7:14, where God calls His people to humble themselves, pray, and seek His face." },
      { t: "p", x: "Throughout his prayer, Daniel appeals to what God has already revealed. He calls on God as the One who keeps covenant and mercy, echoing Deuteronomy 7:9. He appeals to God's compassion and forgiveness, reflecting Exodus 34:6-7. He acknowledges both God's justice and His mercy, drawing from the Law and the prophets. His prayer is not shaped by emotion alone. It is grounded in Scripture." },
      { t: "p", x: "This is the essence of praying the Word. It is responding to God by speaking back to Him what He has already made known." },
      { t: "d" },
      { t: "p", x: "And then something remarkable unfolds." },
      { t: "p", x: "While Daniel is still praying, God responds. In Daniel 9:20-21, the angel Gabriel is sent with insight and understanding. The response comes even before the prayer is finished. This reveals something important. When prayer is aligned with God's Word, it carries clarity and weight. And often, God's answer reaches beyond what was initially asked. Daniel prayed concerning the restoration of Jerusalem, yet God revealed a far greater plan that extended into the unfolding of redemption and the coming of the Messiah." },
      { t: "p", x: "This pattern appears throughout Scripture. When Hezekiah faced a crisis, he brought the situation before God and appealed to His character (2 Kings 19:14-19). His confidence rested not in human strength, but in who God had revealed Himself to be." },
      { t: "p", x: "In the early church, when believers faced opposition, they gathered and prayed from Scripture (Acts 4:23-31). They declared God's sovereignty, quoted the Psalms, and aligned themselves with His purposes. God's response was immediate and powerful. They were filled with boldness, and the place where they prayed was shaken." },
      { t: "d" },
      { t: "p", x: "Across these moments, a consistent pattern emerges. When prayer flows from the Word, it carries alignment, authority, and clarity. And at the center of this is the work of the Holy Spirit." },
      { t: "p", x: "Paul reminds us that 'the Spirit also helps in our weaknesses... making intercession for us according to the will of God' (Romans 8:26-27). The Spirit takes what has been revealed in the Word and brings it to life within us. He shapes our understanding, stirs our hearts, and gives language to what God desires. As we grow in the Word, we also grow in sensitivity to His leading. Prayer becomes less about searching for words and more about responding to His prompting." },
      { t: "p", x: "This is the power of praying the Word. It anchors prayer in truth. It guards the heart from drifting. It aligns desire with God's will. It builds confidence that God hears and responds. And it deepens intimacy with Him." },
      { t: "p", x: "Over time, prayer becomes less about striving to be heard and more about responding to what has already been spoken. It becomes a conversation shaped by revelation rather than uncertainty." },
      { t: "p", x: "And in that place, something shifts. We begin to recognize that we are not initiating the work. We are joining it. We are not persuading God to act. We are aligning ourselves with what He has already purposed. Prayer becomes participation in the love and will of God." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to pray from Your Word. Shape my desires through what You have spoken, and align my heart with Your will. Let Your Spirit guide my prayers, giving me understanding and clarity. Help me to respond to You with faith, and to participate in what You are doing. Amen." },
    ],
    journal: [
      "How does God's Word currently influence the way you pray?",
      "What Scriptures can you begin to pray over your life or situation?",
      "How can you become more intentional about aligning your prayers with God's Word?",
      "What has the Holy Spirit been stirring in you through Scripture recently?",
    ],
    prayers: [
      "Thank God for confidence that He hears and responds to your prayers.",
      "Receive grace to pray in alignment with God's Word.",
      "Ask the Holy Spirit to guide and shape your prayers.",
      "Pray for a deeper understanding of God's will through Scripture.",
      "Pray for sensitivity to join what God is already doing.",
    ],
    declaration: "I respond to God with His Word, allowing what He has spoken to shape my prayers and align my heart with His will. As I abide in Him and His Word abides in me, my desires are formed by truth, and I ask with confidence. My prayers are not driven by circumstance alone, but by what God has revealed. The Holy Spirit guides me, gives me understanding, and leads me to pray according to God's purpose. I join what God is already doing, trusting that He hears and responds in His perfect way. As I pray His Word, my faith is strengthened, and my life is aligned with His will. Amen.",
  },
  {
    day: 28,
    title: "Declaring the Word",
    audioUrl: "/audio/day-28.mp3",
    quotes: [
      { text: "God's Word in your mouth is just as powerful as God's Word in His mouth.", author: "Kenneth E Hagin" },
      { text: "The power of the Word is experienced only in those who live under its authority.", author: "John Stott" },
    ],
    anchor: [
      { text: "It is the Spirit who gives life; the flesh profits nothing. The words that I speak to you are spirit, and they are life.", ref: "John 6:63 (NKJV)" },
    ],
    scriptures: ["Proverbs 18:21", "Job 22:28", "Isaiah 55:11", "Acts 19:13-16"],
    body: [
      { t: "p", x: "There comes a point where what has been received inwardly begins to find expression outwardly." },
      { t: "p", x: "The Word that has been studied, meditated upon, and prayed does not remain contained. It begins to move. It forms conviction within, and from that place, it is given voice. This is where engagement with Scripture becomes declaration." },
      { t: "p", x: "Declaring the Word is not simply speaking verses aloud. It is the expression of a heart that has come into agreement with God. What has been revealed, understood, and embraced begins to be spoken with clarity and conviction. The voice becomes an instrument through which truth is released." },
      { t: "p", x: "Scripture consistently shows that words are not without effect. They carry weight, direction, and influence. Human words can shape environments, but the Word of God carries something far greater. It is living, active, and filled with divine intent. It is the same Word through which creation came into being and by which all things are sustained." },
      { t: "p", x: "When Jesus says, 'The words that I speak to you are spirit, and they are life,' He reveals that God's Word is not empty speech. It carries life within it. This is why declaration matters." },
      { t: "p", x: "When the Word has taken root within us, it becomes more than information. It becomes conviction. And from that place, we declare not from effort, but from alignment. We are not creating truth. We are giving voice to what God has already spoken." },
      { t: "d" },
      { t: "p", x: "The centurion in Matthew 8 recognized this. 'Only speak a word, and my servant will be healed.' He understood authority. He knew that a word spoken from the right place carries power. In the same way, when we declare God's Word under His authority, we are aligning ourselves with His established truth and releasing it into our lives and circumstances." },
      { t: "p", x: "But this authority does not stand on its own. It flows from submission. Scripture shows that true authority is exercised from a place of alignment with God. The sons of Sceva attempted to use the name of Jesus without relationship or submission, and their effort failed (Acts 19:13-16). This account reminds us that declaration is not imitation. It is not about using the right words. It is about standing in right relationship." },
      { t: "p", x: "Faith also gives substance to what is spoken. 'I believed, therefore I spoke' (2 Corinthians 4:13). Declaration is the voice of faith. It is not empty repetition. It is conviction expressed. This is why the psalmist says, 'Let the redeemed of the Lord say so' (Psalm 107:2). There is a connection between what is believed in the heart and what is spoken with the mouth." },
      { t: "p", x: "Yet declaration is not mechanical. It is Spirit-led. There are moments when the Holy Spirit brings specific words to remembrance and places them within us with clarity. 'Open your mouth wide, and I will fill it' (Psalm 81:10). As we remain grounded in the Word, the Spirit guides what we speak, shaping our declarations in alignment with God's will." },
      { t: "d" },
      { t: "p", x: "Scripture also reveals that God's Word carries purpose when it is sent. 'So shall My word be that goes forth from My mouth; it shall not return to Me void' (Isaiah 55:11). When we declare the Word, we are not sending out empty statements. We are participating in the movement of something that carries divine intent." },
      { t: "p", x: "Job reflects this in a striking way: 'You will also declare a thing, and it will be established for you' (Job 22:28). This is not a call to self-driven speech, but a picture of what happens when human words align with divine truth. When we speak in agreement with God, light begins to break through. This is often experienced in moments where prayer becomes proclamation." },
      { t: "p", x: "There are times when the Spirit leads us to speak truth directly into a situation. In those moments, the Word does more than comfort. It strengthens, clarifies, and restores perspective. Faith rises as truth is spoken, and what once felt uncertain begins to come into alignment." },
      { t: "d" },
      { t: "p", x: "But declaration does not remain personal. It extends outward." },
      { t: "p", x: "We are called to share the Word with others. Scripture speaks of words that bring edification, exhortation, and comfort. When we speak God's Word into the lives of others, we participate in His work. The Word we declare can strengthen the weary, guide the uncertain, and bring hope where it is needed most." },
      { t: "p", x: "At the same time, declaration must remain connected to obedience. Joshua was instructed to speak the Word, meditate on it, and act according to it. These are not separate practices. They are expressions of one life aligned with God. When what we say and how we live move together, the impact of the Word becomes clearer." },
      { t: "p", x: "In the end, declaring the Word is not about speaking more. It is about speaking from a life that has been shaped by what God has said." },
      { t: "p", x: "It is the overflow of a heart that has been aligned, a mind that has been renewed, and a life that is being formed. And in that place, the Word does what it has always done. It brings life." },
      { t: "d" },
      { t: "p", x: "Lord, teach me to speak Your Word with faith and clarity. Let what You have placed within me find expression through my life and my words. Keep me aligned with You, that what I declare reflects Your truth. Use my voice to bring life, encouragement, and light. Amen." },
    ],
    journal: [
      "What truths from God's Word are taking root in your heart right now?",
      "How can you begin to speak those truths more intentionally?",
      "In what areas of your life do you need to align your words with God's Word?",
      "How can your words bring encouragement and life to others today?",
    ],
    prayers: [
      "Receive grace to speak God's Word with confidence and faith.",
      "Ask the Holy Spirit to guide what you declare.",
      "Pray for alignment between your words and your life.",
      "Ask for boldness to speak truth into situations and into the lives of others.",
      "Pray that God's Word, spoken through you, will bring life and transformation.",
    ],
    declaration: "I give voice to the truth God has planted within me, speaking from conviction and alignment with His heart. What I have received inwardly now finds expression through my words, carrying clarity, faith, and purpose. My speech is not empty, but filled with the life of His Word. I speak under His authority, led by His Spirit, and grounded in truth. My words bring light, strengthen faith, and release hope into every situation. As I declare what God has spoken, my life and my voice move together in agreement with Him. Amen.",
  },
  {
    day: 29,
    title: "Stewarding the Word",
    audioUrl: "/audio/day-29.mp3",
    quotes: [
      { text: "What God entrusts to us, He expects us to steward faithfully.", author: "Oswald Chambers" },
      { text: "We must not only receive the Word, we must hold it fast.", author: "John Wesley" },
    ],
    anchor: [
      { text: "But the ones that fell on the good ground are those who, having heard the word with a noble and good heart, keep it and bear fruit with patience.", ref: "Luke 8:15 (NKJV)" },
    ],
    scriptures: ["Luke 8:12-15", "Psalm 105:17-22", "1 Timothy 1:18-19", "2 Timothy 1:13-14"],
    body: [
      { t: "p", x: "The Word of God is not only something we receive. It is something we are entrusted with. Having learned to study, meditate on, pray, and declare the Word, we now come to a crucial dimension of engaging Scripture. The journey does not end with receiving. For the Word to bear fruit, it must be believed, guarded, cultivated, and lived out over time. This is what it means to steward it." },
      { t: "p", x: "Jesus often described the Word as a seed. When it is sown into the heart, it carries within it the potential for life, transformation, and fruitfulness. Yet like any seed, its outcome depends on how it is received and how it is sustained." },
      { t: "p", x: "The parable of the sower brings this into focus. The same Word is sown, yet it produces different results depending on the condition of the heart and the response that follows (Matthew 13:3-9, 18-23; Mark 4:16-19; Luke 8:12-15). This shows that fruitfulness is not determined by the power of the seed, but by the stewardship of it." },
      { t: "p", x: "And one of the first realities we encounter is that the Word does not go unchallenged. Once received, it enters a process that often includes testing." },
      { t: "p", x: "Some testing is external. Jesus speaks of tribulation and persecution arising for the sake of the Word. Pressure comes because the Word has been planted. Without depth of root, it can be abandoned when difficulty arises." },
      { t: "p", x: "Some testing is internal. The cares of life, the pull of worldly concerns, and competing desires begin to press in. These do not remove the Word immediately, but they gradually reduce its influence until it becomes unfruitful." },
      { t: "p", x: "Some testing is spiritual. The enemy seeks to remove the Word before it takes root, knowing the transformation it can bring if it remains." },
      { t: "p", x: "To steward the Word is to guard it through these seasons, ensuring that what has been planted is not lost." },
      { t: "d" },
      { t: "p", x: "Yet stewardship is not only about protection. It is also about growth." },
      { t: "p", x: "Jesus also describes the growth of the Word as a seed sown into the ground (Mark 4:26-29). The farmer plants it, and over time, it begins to grow, often in ways that are not immediately visible. First the blade, then the head, and then the full grain. This reveals that the Word unfolds through a process. It takes root beneath the surface before it becomes evident in fruit. Our role is to remain faithful, trusting God to bring growth in its proper time." },
      { t: "p", x: "Within this process, the Word sustains and strengthens us. It steadies the heart in seasons of delay, restores what feels worn, and gives clarity in moments of uncertainty. The same Word that is growing within us is also carrying us through the process." },
      { t: "p", x: "The life of Joseph illustrates this process with striking clarity. From the moment he received the dreams concerning his future, his life entered a prolonged season that seemed to contradict what had been spoken. He was betrayed, falsely accused, and imprisoned. Yet Scripture reveals what was happening beneath the surface:" },
      { t: "s", x: "'Until the time that his word came to pass, the word of the Lord tested him.'", r: "Psalm 105:19" },
      { t: "p", x: "Joseph was not only tested by circumstances. He was tested by the Word itself. The promise he carried was refined through delay and difficulty. Yet he remained faithful, and in time, what God had spoken was brought to fulfillment." },
      { t: "p", x: "This is often the nature of stewardship. The Word we receive is not always fulfilled immediately. It is formed within us before it is expressed through us." },
      { t: "d" },
      { t: "p", x: "We see this posture in the lives of Simeon and Anna (Luke 2:25-38). They were living in expectation of the coming of the Messiah. Simeon carried a promise that he would see the Lord's Christ, and Anna remained devoted in prayer and waiting. When the moment came, they recognized Him immediately. They did not merely wait. They remained expectant." },
      { t: "p", x: "Paul's instruction to Timothy gives further clarity. Timothy had received both gifts and prophetic words, and he was urged not to neglect them (1 Timothy 4:14). Instead, he was to stir them up, actively cultivating what had been given (2 Timothy 1:6)." },
      { t: "p", x: "He was also called to contend according to the words spoken over him, standing on them, praying in alignment with them, and living in response to them. And he was instructed to guard what had been entrusted to him, holding it carefully with the help of the Holy Spirit." },
      { t: "p", x: "Stewardship, then, is active. It involves remembering what God has said, returning to it in meditation, aligning with it in prayer, declaring it in faith, and living it out in obedience. It is refusing to allow the Word to be neglected, choked, or forgotten." },
      { t: "p", x: "It also involves environment. Just as Elizabeth's presence strengthened Mary's faith when she carried the promise of Christ, we too are strengthened by those who recognize and affirm what God is doing in our lives. The right environment helps sustain belief and encourages faithfulness." },
      { t: "d" },
      { t: "p", x: "At its core, stewarding the Word is a long obedience shaped by trust. It is holding onto what God has spoken through changing seasons. It is remaining faithful when the outcome is not yet visible. It is trusting that the God who spoke is able to bring His Word to completion." },
      { t: "p", x: "And through it all, we depend on grace. The same God who gives the Word also sustains us in holding onto it. He strengthens us to endure, teaches us to guard what has been given, and brings to life what He has spoken." },
      { t: "p", x: "In time, what is faithfully stewarded bears lasting fruit for our good and for God's glory." },
      { t: "d" },
      { t: "p", x: "Lord, help me to steward Your Word faithfully. Teach me to guard what You have spoken, to remain steadfast through every season, and to trust You in the process. Strengthen me to hold onto Your truth, and bring to fulfillment what You have planted in my heart. Amen." },
    ],
    journal: [
      "What Word or promise from God are you currently holding onto?",
      "How are you actively stewarding what God has spoken to you?",
      "What challenges are testing your ability to hold onto the Word?",
      "How can you remain faithful in this season of waiting or growth?",
    ],
    prayers: [
      "Receive grace to faithfully steward the Word God has given you.",
      "Ask God for strength to remain steadfast through testing and delay.",
      "Pray for discernment to guard the Word from distraction and doubt.",
      "Ask the Holy Spirit to help you nurture and grow what has been planted.",
      "Pray for patience to trust God's timing for fulfillment.",
    ],
    declaration: "I receive God's Word with a steady and receptive heart, and I hold it with care and intention. What He has planted in me is guarded and preserved through every season. I remain anchored, trusting that His Word carries life and purpose. I nurture what God has spoken, allowing it to grow even when it is not yet visible. I stay expectant and faithful, aligning my life with His truth. By His grace, what I steward will bear lasting fruit for His glory. Amen.",
  },
  {
    day: 30,
    title: "Sanctification Through the Word",
    audioUrl: "/audio/day-30.mp3",
    quotes: [
      { text: "God's truth is the means by which He sets His people apart.", author: "John Stott" },
      { text: "The Christian life is a continual growth in holiness.", author: "J. I. Packer" },
    ],
    anchor: [
      { text: "Sanctify them by Your truth. Your word is truth.", ref: "John 17:17 (NKJV)" },
      { text: "You are already clean because of the word which I have spoken to you.", ref: "John 15:3 (NKJV)" },
    ],
    scriptures: ["John 17:17", "Ephesians 4:20-24", "Romans 12:1-2", "2 Timothy 2:19-21"],
    body: [
      { t: "p", x: "Having explored the many ways we engage the Word, studying, meditating, praying, declaring, and stewarding it, we now turn to the effects this engagement produces in our lives. As we continue investing our lives in the Word, its effects become increasingly evident, forming, refining, and transforming us. This is the work Scripture calls sanctification." },
      { t: "p", x: "When Jesus prays, 'Sanctify them by Your truth,' He reveals both the means and the standard. Sanctification comes through truth, and that truth is God's Word. It is not something we produce by effort alone. It is something God works within us as His truth takes root and begins to shape who we are." },
      { t: "p", x: "The language of Scripture helps us understand this more clearly. The Greek word used in John 17:17 is hagiaz\u014D, meaning to set apart, to make holy, to consecrate for sacred use. It comes from hagios, meaning holy, set apart, belonging to God. This points to more than moral improvement. It speaks of a life marked out for God, separated from what is common and devoted to His purposes." },
      { t: "p", x: "Sanctification, therefore, carries two movements. It involves separation from what defiles and dedication to what is divine. It is both a turning away and a setting apart." },
      { t: "p", x: "This work unfolds in two closely connected dimensions." },
      { t: "p", x: "First, there is a finished and foundational reality. Jesus tells His disciples, 'You are already clean because of the word which I have spoken to you.' The word translated 'clean' is katharos, meaning pure, cleansed, free from defilement. Through His Word and His finished work, we are cleansed, forgiven, and made new. This is the ground we stand on. We begin as those who have been made clean." },
      { t: "p", x: "But there is also an ongoing work. Scripture speaks of 'the washing of water by the word' (Ephesians 5:26), pointing to a continual process. The Word keeps working within us, renewing the mind, correcting what is misaligned, and shaping our lives over time. What has been declared true of us begins to be formed in us." },
      { t: "p", x: "Sanctification is therefore both a moment and a journey. It begins with what God has done and continues through what God is doing." },
      { t: "d" },
      { t: "p", x: "As we embrace our identity in Christ, we begin to live differently. 'If anyone is in Christ, he is a new creation' (2 Corinthians 5:17). Yet this new life must be walked out. The mind is renewed, patterns are reshaped, and truth gradually replaces what once governed us (Romans 12:1-2)." },
      { t: "p", x: "Paul describes this as putting off the old and putting on the new (Ephesians 4:20-24). It is a deliberate and Spirit-enabled process. Old ways of thinking and living are not removed instantly. They are displaced as truth takes deeper root. Over time, what once influenced us loses its hold, and a new way of life begins to emerge." },
      { t: "p", x: "In this light, the two aspects of sanctification become clearer. As we turn away from what is not aligned with God, we are at the same time being set apart for what is. The letting go and the setting apart happen together, as truth replaces what once held influence." },
      { t: "p", x: "Paul illustrates this through the picture of vessels in a great house (2 Timothy 2:19-21). Those who depart from iniquity and cleanse themselves from what is dishonorable become vessels set apart, useful, and prepared for every good work. The difference lies not in belonging, but in availability and readiness for the Master's use." },
      { t: "d" },
      { t: "p", x: "This leads us into the deeper reality of consecration." },
      { t: "p", x: "Consecration is not identical in expression for every believer. While all are called to holiness, the way that holiness is lived out can differ according to calling and assignment. Some were set apart for service, like the Levites. Others embraced voluntary devotion, like the Nazirites. Still others lived distinct lives marked by obedience across generations, like the Rechabites." },
      { t: "p", x: "The common thread is not uniformity, but obedience to God's leading." },
      { t: "p", x: "This is why intimacy with God is essential. The Spirit leads each believer personally, shaping boundaries, convictions, and priorities according to God's purpose. Without this, comparison can distort the journey. But in walking closely with God, we begin to discern His work in us and respond faithfully." },
      { t: "p", x: "At the center of this process is the Word. 'All Scripture is God-breathed and profitable... that the man of God may be complete, thoroughly equipped for every good work' (2 Timothy 3:16-17). The Word trains, corrects, aligns, and prepares us." },
      { t: "p", x: "Sanctification, then, is the fruit of a life that continues to engage the Word. As we receive it, return to it, and live in response to it, its truth steadily reshapes us. Over time, we are formed into people who reflect God's nature, set apart and ready for His purposes." },
      { t: "d" },
      { t: "p", x: "Father, thank You for Your Word that cleanses and transforms me. Thank You for setting me apart for Yourself. Continue Your work within me, shaping my heart, renewing my mind, and aligning my life with Your truth. Help me to walk in what You have made me to be, and to live as one available and ready for Your purposes. Amen." },
    ],
    journal: [
      "What areas of your life is God currently shaping through His Word?",
      "How are you responding to the ongoing work of sanctification?",
      "What is God leading you to release as you grow in Him?",
      "In what ways is He setting you apart for His purposes?",
    ],
    prayers: [
      "Thank God for the cleansing and transforming power of His Word in your life.",
      "Receive grace to yield to the ongoing work of sanctification.",
      "Ask God to reveal and remove anything that hinders your growth in holiness.",
      "Pray for sensitivity to the Holy Spirit's leading in your consecration.",
      "Ask that your life would be available, ready, and prepared for every good work.",
    ],
    declaration: "I thank God for His Word that has made me clean and drawn me to Himself. I stand in the finished work of Christ, knowing I have been made new and belong to Him. His truth is my foundation, and I live from the identity He has established in me. His Word continues to work within me, renewing my mind, refining my heart, and shaping my life in truth. I yield to this process, allowing what is not aligned to fall away as I grow in Him. I am being formed into a life that reflects His nature, set apart and ready for His purposes. Amen.",
  },
  {
    day: 31,
    title: "Healing & Deliverance through the Word",
    audioUrl: "/audio/day-31.mp3",
    quotes: [
      { text: "The mission of Christ is to restore what is damaged and release what is bound.", author: "R. C. Sproul" },
      { text: "God's Word heals by restoring truth and delivers by breaking deception.", author: "Derek Prince" },
    ],
    anchor: [
      { text: "He sent His word and healed them, and delivered them from their destructions.", ref: "Psalm 107:20" },
    ],
    scriptures: ["Isaiah 53:4-5", "Matthew 8:16-17", "Luke 4:18-19", "John 8:31-36"],
    body: [
      { t: "p", x: "As we continue to consider the effects of a life deeply engaged with the Word, we come to one of its most powerful expressions: healing and deliverance. The Word of God does not only shape and sanctify; it restores and rescues. It reaches into the broken places of life and brings wholeness, and it confronts what binds, oppresses, or threatens, bringing freedom." },
      { t: "p", x: "Psalm 107 gives a vivid picture of this dual work. In their distress, God's people cry out, and He responds by sending His Word. That Word does not merely comfort; it acts. It heals what has been damaged and delivers from what has caused destruction. God does not only bring His people out of trouble; He restores them in the process." },
      { t: "p", x: "The language of Scripture helps us see this more clearly. The Hebrew word for healing, rapha', speaks of restoring, repairing, and making whole. It is not limited to physical recovery. It includes the renewal of what has been broken in body, mind, and spirit. Healing is the reordering of life according to God's intention." },
      { t: "p", x: "The words used for deliverance, such as natsal and yasha', carry the sense of being rescued, snatched away from danger, and brought into safety. Deliverance is not partial relief. It is a decisive act that brings a person out of bondage and into freedom." },
      { t: "p", x: "Together, these reveal the completeness of God's work. Healing addresses what has been broken. Deliverance addresses what has bound or threatened. One restores condition; the other restores position. Both flow from the same source: the living and active Word of God." },
      { t: "d" },
      { t: "p", x: "This pattern is clearly seen in the ministry of Jesus. When He declares His mission, He speaks of healing the brokenhearted and setting captives free (Luke 4:18). His ministry consistently reflects both dimensions. He heals the sick, restores the wounded, and at the same time commands unclean spirits to depart, demonstrating authority over both physical and spiritual realms." },
      { t: "p", x: "This is significant. Scripture shows that not all forms of bondage are merely external or emotional. Some are spiritual in nature. Yet in every case, Jesus responds with authority through His Word. He speaks, and what opposes must yield. There is no struggle for dominance. Truth spoken with divine authority brings immediate effect." },
      { t: "p", x: "That same authority continues in God's Word today. When the Word is received, believed, and engaged, it confronts lies, breaks strongholds, and dismantles patterns that hold people in bondage. Darkness cannot remain where truth is embraced. Freedom begins where truth is known." },
      { t: "p", x: "Jesus makes this clear when He says, 'You shall know the truth, and the truth shall make you free... if the Son makes you free, you shall be free indeed' (John 8:32, 36). Freedom is not merely an event. It is the result of encountering and continuing in truth. As the Word becomes known, believed, and lived, its liberating power becomes active." },
      { t: "d" },
      { t: "p", x: "This work unfolds through our engagement with the Word. As we hear it, meditate on it, pray it, and declare it, it begins to operate deeply within us. It renews the mind, strengthens the inner life, and aligns us with God's will. Over time, what once held influence begins to lose its grip, and a new reality takes shape." },
      { t: "p", x: "Psalm 91 gives a powerful picture of this life. It begins with a simple condition: dwelling in the secret place of the Most High. This 'secret place' speaks of nearness, communion, and abiding. From that place flows a life marked by security and protection." },
      { t: "p", x: "God becomes our refuge and fortress. There is preservation from seen and unseen danger, deliverance from hidden traps, and covering under His care. Even in the midst of widespread trouble, there is a sense of being kept. Scripture speaks of angelic protection, of rescue in times of distress, and of God's personal response to those who call on Him." },
      { t: "p", x: "This reveals that deliverance is not only reactive; it is also preventative. God does not only bring us out of trouble; He keeps us, guards us, and establishes us in a place of safety as we remain in Him." },
      { t: "d" },
      { t: "p", x: "As we dwell in the Word, something shifts within us. Fear begins to loosen its hold. Truth becomes more real than circumstance. Faith is strengthened, and we begin to live from a place of security rather than uncertainty." },
      { t: "p", x: "Healing and deliverance, then, are not isolated experiences reserved for moments of crisis. They are ongoing realities in the life of one who abides in God through His Word. The same Word that restores continues to sustain. The same truth that sets free continues to preserve that freedom." },
      { t: "p", x: "And in this, we see the heart of God. He is not only a rescuer in moments of distress; He is a restorer of life and a defender against every form of darkness. He brings us out, sets us free, and makes us whole." },
      { t: "d" },
      { t: "p", x: "Father, thank You for Your Word that heals and delivers. Thank You for restoring what has been broken and for setting me free from all that opposes Your purpose in my life. Help me to remain in Your Word, to believe it, and to live in the freedom it brings. Establish me in Your truth, and let Your life be evident in every area of my life. Amen." },
    ],
    journal: [
      "What areas of your life need God's healing and restoration?",
      "Are there patterns, fears, or influences that the Word is confronting in your life?",
      "How are you actively engaging the Word to experience its freedom?",
      "How are you stewarding the healing work God has begun in you?",
    ],
    prayers: [
      "Thank God for His Word that brings healing and deliverance into your life.",
      "Receive His restoring work in areas that have been broken or weakened.",
      "Ask for freedom from every form of oppression, fear, or limitation.",
      "Pray for a deeper desire to dwell in God's presence through His Word.",
      "Ask that your life would be established in truth, freedom, and wholeness.",
    ],
    declaration: "I receive God's Word as life and truth, bringing healing to every broken place within me. His Word restores, renews, and makes me whole in spirit, soul, and body. I stand in the freedom His truth provides, released from every lie, fear, and bondage. What once held me no longer has authority, for I live in the light of His Word. As I abide in Him, His Word continues to sustain, preserve, and establish me in wholeness and freedom. I walk daily in the healing and deliverance He has secured for me. Amen.",
  },
  {
    day: 32,
    title: "Guidance and Direction",
    audioUrl: "/audio/day-32.mp3",
    quotes: [
      { text: "God is more interested in guiding us than we are in being guided.", author: "John Stott" },
      { text: "God does not show us the whole road, but He shows us the next step.", author: "Corrie ten Boom" },
    ],
    anchor: [
      { text: "In Him was life, and the life was the light of men.", ref: "John 1:4 (NKJV)" },
      { text: "Your word is a lamp to my feet and a light to my path.", ref: "Psalm 119:105 (NKJV)" },
    ],
    scriptures: ["Proverbs 3:5-6", "John 14:26", "Psalm 32:8", "Isaiah 30:21"],
    body: [
      { t: "p", x: "As we continue to explore the outcomes of a life anchored in the Word, we come to one of its most practical and deeply desired expressions: guidance and direction. Life presents us with constant decisions, some simple and others that shape the course of our lives. In these moments, the question often arises: how do we know the right way to go?" },
      { t: "p", x: "Scripture shows that guidance is not something we must strive to produce. It flows from relationship. As we dwell in the Lord and remain rooted in His Word, direction becomes a natural outworking of that connection." },
      { t: "p", x: "John writes, 'In Him was life, and the life was the light of men.' The word for life, z\u014D\u0113, speaks of divine life, the very life of God imparted to us. That life becomes ph\u014Ds, light, bringing illumination, clarity, and understanding. When we are connected to Christ, His life within us produces light around us. We begin to see more clearly, not only in spiritual matters but also in the practical decisions of everyday life." },
      { t: "p", x: "The psalmist echoes this when he says, 'Your word is a lamp to my feet and a light to my path.' The Hebrew word n\u0113r, translated 'lamp,' refers to a small, immediate light, enough for the next step. The word '\u00F4r, translated 'light,' speaks of broader illumination. Together, they reveal that God's Word provides both step-by-step guidance and a sense of direction for the path ahead. He may not reveal everything at once, but He faithfully gives enough light for each step." },
      { t: "p", x: "This guidance is made personal through the ministry of the Holy Spirit. Jesus promised that the Spirit would teach, remind, and guide us (John 14:26). Isaiah describes Him as the Spirit of wisdom, understanding, and counsel (Isaiah 11:2). The Spirit takes what is written in the Word and brings it into our present moment, making truth clear and applicable." },
      { t: "p", x: "At times, this guidance comes as a gentle inner prompting. 'Your ears shall hear a word behind you, saying, \"This is the way, walk in it\"' (Isaiah 30:21). Often, it is not an audible voice, but a settled inner knowing, shaped over time through familiarity with God's Word and sensitivity to His Spirit." },
      { t: "d" },
      { t: "p", x: "God also guides through godly counsel and community. Scripture reminds us that 'in the multitude of counselors there is safety' (Proverbs 11:14). As we walk with others who love God and are grounded in His Word, their insight can help confirm direction, bring clarity, and provide wisdom we may not see on our own. In the same way, God uses sound teaching, trusted leaders, and resources shaped by Scripture to guide us. This does not replace personal relationship with God, but it strengthens and confirms it." },
      { t: "p", x: "There are also moments where God gives guidance through dreams and visions, especially when they align with His Word and are confirmed by His Spirit. Throughout Scripture, God used dreams to direct individuals in significant ways, yet these were never independent of His truth. They served as another channel through which His will was made clear. In the same way today, such guidance must be weighed, tested, and anchored in Scripture." },
      { t: "p", x: "David expresses the relational nature of guidance when he writes, 'I will instruct you and teach you in the way you should go; I will guide you with My eye' (Psalm 32:8). This is not distant instruction, but attentive guidance. It reflects a closeness where God leads with care, awareness, and intention." },
      { t: "d" },
      { t: "p", x: "As we dwell in God, we also enter into a place of security that sharpens our discernment. Psalm 91 describes the one who dwells in the secret place as free from fear and sustained by God's protection (Psalm 91:5-8). The 'secret place' speaks of nearness and covering. In that place, fear loses its grip, and clarity becomes possible. Fear clouds judgment, but trust restores perspective." },
      { t: "p", x: "Another important dimension of guidance is what Scripture refers to as rhema, the timely, revealed Word. While the written Word provides the foundation, the Spirit often brings specific portions of it to our remembrance in moments of need. This is how general truth becomes specific direction. What we have stored in our hearts becomes the very material the Spirit uses to guide us." },
      { t: "p", x: "This is why continuous engagement with the Word is essential. Without it, we lack the language through which God often leads. But when the Word dwells richly within us, guidance becomes clearer and more recognizable." },
      { t: "d" },
      { t: "p", x: "God's guidance extends to every area of life. As a faithful Shepherd and loving Father, He is concerned with both the spiritual and the practical. He leads us in matters of calling, career, and learning. He guides us in relationships, shaping how we connect with others. He gives wisdom in finances, helping us steward what we have been given. He directs us in our walk of faith, growth, and even in decisions that affect our well-being." },
      { t: "p", x: "Nothing is too small to bring before Him." },
      { t: "p", x: "At its core, guidance is not merely about finding answers. It is about walking with God. As we remain in His Word, His truth shapes our thinking. As we yield to His Spirit and remain open to His counsel through Scripture, community, and His leading, we are guided with wisdom and clarity. Over time, guidance becomes less about isolated decisions and more about a life lived in alignment with Him." },
      { t: "d" },
      { t: "p", x: "Father, thank You for being my guide and my light. Thank You for Your Word that illuminates my path, Your Spirit who leads me, and the people You place around me to help confirm Your direction. Help me to remain sensitive to Your voice, to test all things by Your truth, and to follow You with confidence. Order my steps and align my life with Your purposes. Amen." },
    ],
    journal: [
      "In what areas of your life are you currently seeking direction?",
      "How has God used His Word or others to guide you in the past?",
      "Are there decisions you need to bring before God in prayer and surrender?",
      "How can you become more attentive to God's guidance through His Word, Spirit, and counsel?",
    ],
    prayers: [
      "Thank God for His Word, His Spirit, and godly counsel that guide your life.",
      "Ask for clarity in areas where you need direction.",
      "Pray for discernment to recognize and test God's leading.",
      "Receive peace as you trust God's timing and direction.",
      "Ask that your life would remain aligned with His will in every decision.",
    ],
    declaration: "I walk in the light of Christ, and His life within me brings clarity and direction. His Word guides my steps and gives me wisdom for each decision. I trust Him to lead me faithfully, one step at a time. The Holy Spirit directs me, making truth clear and confirming my path. I remain attentive, anchored in His Word, and at peace in His presence. My life is aligned with His purposes, and He orders my steps. Amen.",
  },
  {
    day: 33,
    title: "Prosperity and Dominion",
    audioUrl: "/audio/day-33.mp3",
    quotes: [
      { text: "The purpose of prosperity is to be a channel of God's blessing to others.", author: "John Wesley" },
      { text: "Dominion is not domination, it is stewardship under God's authority.", author: "Timothy Keller" },
    ],
    anchor: [
      { text: "He shall be like a tree planted by the rivers of water... and whatever he does shall prosper.", ref: "Psalm 1:3 (NKJV)" },
      { text: "This Book of the Law shall not depart from your mouth... for then you will make your way prosperous, and then you will have good success.", ref: "Joshua 1:8 (NKJV)" },
    ],
    scriptures: ["Psalm 1:1-3", "Joshua 1:7-8", "Genesis 1:26-28", "Romans 5:17"],
    body: [
      { t: "p", x: "As we continue to explore the outcomes of dwelling in the Lord and in His Word, we come to a theme that is often misunderstood, yet deeply rooted in Scripture: prosperity and dominion. These are not merely material or external ideas. They are spiritual realities that shape how we live, steward, and reflect God's purposes on the earth." },
      { t: "p", x: "At the heart of both Psalm 1 and Joshua 1 is a shared principle: prosperity flows from a life anchored in the Word." },
      { t: "p", x: "The Hebrew word translated 'prosper' in both passages is tsalach. It carries the sense of advancing, breaking through, and succeeding even in the presence of resistance. This is not passive success. It is forward movement under God's direction. In Psalm 1, this prosperity is pictured as a tree planted by streams of water, stable, nourished, and consistently fruitful. In Joshua 1, it is tied to obedience, meditating on the Word and doing what it says, resulting in 'good success.'" },
      { t: "p", x: "The phrase 'good success' adds another dimension. The Hebrew word sakal speaks of wisdom, insight, and the ability to act skillfully. Prosperity, therefore, is not merely increase. It is wise, God-aligned living that produces meaningful and sustained results." },
      { t: "p", x: "This aligns with God's broader desire for our lives. Scripture expresses a vision of wholeness where the inner life flourishes and overflows into every area. Prosperity begins within, in the soul, and extends outward into how we live, serve, and steward what has been entrusted to us." },
      { t: "p", x: "But in Scripture, prosperity is never an end in itself. It is always connected to purpose." },
      { t: "d" },
      { t: "p", x: "From the beginning, God's intent for humanity included both prosperity and dominion. 'Let them have dominion... be fruitful and multiply...' (Genesis 1:26-28). The word 'dominion' comes from the Hebrew radah, meaning to rule, govern, and exercise authority. This was not a call to dominate people, but to steward creation under God's authority." },
      { t: "p", x: "Dominion was meant to reflect God's nature, righteous, just, and life-giving. As image-bearers, humanity was to extend His order and goodness across the earth. Scripture declares that God's kingdom is everlasting and His dominion endures through all generations (Daniel 4:3, 34)." },
      { t: "p", x: "However, the entrance of sin distorted this design. Instead of exercising dominion under God, humanity came under the influence of sin, broken systems, and spiritual darkness. Pride replaced stewardship, and control replaced service. The result was not only spiritual separation, but also disorder in how we live and relate." },
      { t: "p", x: "But the story does not end there. Through Christ, what was lost is restored. Jesus came to break the power of darkness and reestablish God's kingdom. He is the Son of Man seen in Daniel's vision, to whom everlasting dominion was given. Through Him, we are delivered from the domain of darkness and brought into the kingdom of light (Colossians 1:13)." },
      { t: "p", x: "This restoration is both positional and practical. Positionally, we are seated with Christ, far above all powers and authorities. Practically, we are called to live this out, to 'reign in life through the One, Jesus Christ' (Romans 5:17). Dominion is not something we manufacture. It is something we receive in Christ and gradually express as we walk in alignment with Him." },
      { t: "d" },
      { t: "p", x: "This expression is shaped through engagement with the Word. Scripture reveals that victory is tied to what Christ has done and what we hold onto. 'They overcame... by the blood of the Lamb and by the word of their testimony' (Revelation 12:11). Faith, anchored in God's Word, becomes the means by which we overcome the world (1 John 5:4). As we dwell in the Word, our understanding deepens, our faith grows, and our capacity to walk in dominion increases." },
      { t: "p", x: "This is where prosperity and dominion meet. Prosperity provides capacity, resources, wisdom, stability, and fruitfulness. Dominion provides responsibility, stewardship, influence, and impact. Together, they enable us to fulfill God's purposes on the earth." },
      { t: "p", x: "Yet it is important to recognize that the manifestation of prosperity is not automatic. It must be cultivated. It flows through wisdom, revelation, and intentional alignment with God's ways. Engagement with the Word renews the mind, sharpens discernment, and reveals the principles that govern life." },
      { t: "p", x: "Scripture also helps us navigate difficult realities. There are moments where devotion alone does not immediately translate into visible prosperity. This reminds us that understanding and application matter. God's desire is not only that we know truth, but that we live it, integrating revelation with wisdom in practical ways." },
      { t: "p", x: "Prosperity, therefore, requires stewardship. It calls for diligence, discipline, and faithful application in everyday life. And ultimately, prosperity is not for accumulation, but for impact." },
      { t: "d" },
      { t: "p", x: "God's promise has always carried purpose. Blessing is given so that it may extend beyond us. Prosperity enlarges our capacity to serve, to support others, to advance what God is doing, and to strengthen those around us." },
      { t: "p", x: "As we dwell in the Word, we are shaped into people who can carry both prosperity and dominion with maturity. Our lives become stable like trees planted by rivers, advancing under God's direction and bearing fruit that blesses others." },
      { t: "d" },
      { t: "p", x: "Father, thank You for Your Word that brings wisdom, stability, and fruitfulness into my life. Thank You for restoring me in Christ and entrusting me with purpose. Help me to walk in true prosperity, not for myself, but as a vessel for Your purposes. Teach me to steward what You have given with wisdom, humility, and faithfulness. Let my life reflect Your nature and extend Your goodness. Amen." },
    ],
    journal: [
      "How has your understanding of prosperity been shaped by Scripture?",
      "In what areas is God calling you to grow in stewardship and responsibility?",
      "What does it look like for you to walk in dominion in your current season?",
      "How can your life become a channel of blessing to others?",
    ],
    prayers: [
      "Thank God for His provision, wisdom, and purpose in your life.",
      "Ask for a renewed understanding of biblical prosperity and dominion.",
      "Pray for wisdom to steward your resources, time, and influence well.",
      "Receive grace to grow in responsibility and faithful living.",
      "Ask that your life would bear fruit that blesses others and honors God.",
    ],
    declaration: "I am rooted in God's Word, steady and fruitful like a tree by living waters. I prosper under His direction, walking in wisdom and purpose in all I do. My life advances in alignment with His truth. I walk in the dominion restored to me in Christ, stewarding all He has entrusted to me with faithfulness. I use what He has given to serve, build, and bless others. My life bears lasting fruit that reflects His purpose. Amen.",
  },
  {
    day: 34,
    title: "Transformation",
    audioUrl: "/audio/day-34.mp3",
    quotes: [
      { text: "Christians are called not only to be saved, but to be agents of change.", author: "Timothy Keller" },
      { text: "When God's people are transformed, society is touched.", author: "John Wesley" },
    ],
    anchor: [
      { text: "This same Good News that came to you is going out all over the world. It is bearing fruit everywhere by changing lives, just as it changed your lives from the day you first heard and understood the truth about God's wonderful grace.", ref: "Colossians 1:6 (NLT)" },
    ],
    scriptures: ["Genesis 41:37-49", "Daniel 2:46-49", "Proverbs 8:12-21", "Matthew 5:14-16"],
    body: [
      { t: "p", x: "As we continue to explore the outcomes of dwelling in the Lord and engaging deeply with His Word, we arrive at a powerful and comprehensive result: transformation. This transformation does not stop at personal renewal. It extends outward, shaping environments, influencing systems, and positioning God's people as channels through which His wisdom, power, and solutions flow into the world." },
      { t: "p", x: "Paul describes the Gospel as something living and active, bearing fruit and increasing while transforming lives. The language reflects both inward growth and outward expression. What God works within a person does not remain hidden. It becomes something that touches others. Transformation, therefore, is not only something we experience. It is something we carry." },
      { t: "p", x: "This outward expression is seen clearly in Scripture through individuals whose lives became vessels of divine solutions in critical moments." },
      { t: "p", x: "Joseph's life provides a compelling example. His journey was marked by testing, obscurity, and injustice, yet he remained aligned with God. Even in prison, his ability to interpret dreams became a means of serving others. When he interpreted the dreams of Pharaoh's officials, he was responding to a need with God-given insight." },
      { t: "p", x: "That same gift later brought him before Pharaoh. Faced with a national crisis, Pharaoh needed both interpretation and direction. Joseph discerned the meaning of the dreams, revealing years of abundance followed by famine. But he did not stop at revelation. He offered strategy, a plan to store resources during the years of plenty in preparation for the years of lack." },
      { t: "p", x: "This moment is significant. Joseph translated revelation into action. His counsel established systems of storage and distribution that preserved nations during famine. Through him, God's wisdom addressed a real-world crisis. Transformation in Joseph's life became provision for many." },
      { t: "d" },
      { t: "p", x: "A similar pattern is seen in Daniel. Living in a foreign empire, Daniel remained rooted in God's truth while navigating complex systems. His wisdom, integrity, and insight distinguished him repeatedly. Whether interpreting dreams or serving in governance, he operated with excellence." },
      { t: "p", x: "In one instance, his interpretation of the king's dream resolved confusion and elevated him into influence. Later, his consistent character led to further promotion. What stands out is that Daniel's life led to public recognition of God. Kings acknowledged the sovereignty of the God he served." },
      { t: "p", x: "Through Daniel, kingdom principles were not only lived out personally but expressed within leadership structures. His life shows that transformation through the Word can influence systems and bring God's wisdom into public spaces." },
      { t: "d" },
      { t: "p", x: "These examples reveal a clear pattern. When individuals dwell in God and align with His Word, they become carriers of solutions. Their lives intersect with real needs, and through them, God releases wisdom that addresses those needs in tangible ways." },
      { t: "p", x: "This pattern continues beyond Scripture. Throughout history, individuals who have deeply engaged God's truth have brought meaningful change in their fields and societies. When truth takes root within a person, it produces insight, creativity, and solutions that extend beyond personal growth." },
      { t: "p", x: "The transformation produced by the Word is therefore comprehensive. It equips believers not only to live rightly but to function effectively. It enables us to engage challenges with wisdom, bring order where there is disorder, and offer solutions where there are problems." },
      { t: "p", x: "This connects with what we have already seen. Sanctification prepares the vessel. Healing and deliverance restore wholeness. Guidance provides direction. Prosperity builds capacity. Dominion establishes responsibility. Transformation brings all of these together and expresses them outwardly." },
      { t: "p", x: "The Word forms something within us that the world around us needs." },
      { t: "d" },
      { t: "p", x: "This is why Scripture presents the believer not only as one who receives but as one who gives. Jesus Himself modeled this, going about doing good and bringing restoration wherever He went. His life was a continuous expression of transformation flowing outward." },
      { t: "p", x: "As we dwell in Him and engage His Word, the same pattern begins to form in us. We begin to see differently, think differently, and respond differently. Over time, this produces wisdom that can be applied in practical ways. Problems become opportunities for divine solutions. Environments become places of influence." },
      { t: "p", x: "Transformation is the beginning of impact. It finds expression in two key dimensions that we will explore next: the fruit borne and the gifts expressed through a life that dwells in the Lord and in His Word." },
      { t: "d" },
      { t: "p", x: "Lord, thank You for the transforming power of Your Word. As I dwell in You, shape my life into a vessel that carries Your wisdom and solutions. Teach me to apply what You reveal and position me to be a channel of transformation in every environment You place me. In Jesus' name, Amen." },
    ],
    journal: [
      "In what areas is God positioning you to be a solution to others?",
      "What gifts or insights has God given you to address real needs around you?",
      "How can you translate what you receive from God into practical action?",
      "What environments has God placed you in where His wisdom can bring transformation?",
    ],
    prayers: [
      "Thank God for the transforming power of His Word in your life.",
      "Ask God to make you a channel of transformation wherever you are.",
      "Pray for wisdom to turn revelation into practical solutions.",
      "Ask for boldness to walk in godly influence and impact.",
      "Receive grace to live fully surrendered and express His fruits and gifts.",
    ],
    declaration: "God's Word transforms my life, shaping my thoughts, character, and actions. That same transformation flows into my family and my field of work, bringing wisdom, order, and growth. The fruit formed within me becomes visible and impacts those around me. I carry His light into society, releasing insight, solutions, and godly influence wherever I am. I apply what He reveals and serve with purpose and clarity. As I remain in Him, transformation flows through me and brings lasting change. Amen.",
  },
  {
    day: 35,
    title: "Fruitfulness",
    audioUrl: "/audio/day-35.mp3",
    quotes: [
      { text: "God is most glorified in us when we bear much fruit for Him.", author: "John Piper" },
      { text: "The purpose of fruit is not self-display, but God's glory.", author: "John Stott" },
    ],
    anchor: [
      { text: "By this My Father is glorified, that you bear much fruit; so you will be My disciples.", ref: "John 15:8 (NKJV)" },
      { text: "He shall be like a tree planted by the rivers of water, that brings forth its fruit in its season...", ref: "Psalm 1:3 (NKJV)" },
    ],
    scriptures: ["John 15:1-8", "Galatians 5:22-23", "Matthew 5:14-16", "Colossians 1:9-12"],
    body: [
      { t: "p", x: "Transformation is the beginning of impact. Yesterday, we saw that when the Word works deeply within us, it does not remain hidden. It begins to shape how we think, live, serve, and influence the world around us. Today, we look at one of the clearest evidences of that transformation: fruitfulness." },
      { t: "p", x: "Fruitfulness is one of Scripture's most enduring pictures of the life of God expressed through His people. From the garden in Genesis to the tree of life in Revelation, fruit speaks of life extended, multiplied, shared, and enjoyed. It is not merely activity or productivity. It is the visible evidence of inward life." },
      { t: "p", x: "In the natural world, fruit reveals the nature of the tree. It nourishes, carries seed, and multiplies life beyond itself. In the same way, spiritual fruitfulness is how the life of Christ within us becomes visible to the world. It is how others begin to taste, see, and experience the goodness of God through our lives." },
      { t: "p", x: "The language of Scripture helps us see this more clearly. The Hebrew word for fruit is peri, which can mean fruit, produce, result, or outcome. It can speak of what the land yields, what words produce, or what a person's actions bring forth. The Greek word karpos carries a similar meaning: fruit, produce, result, harvest, or outcome. In both languages, fruit points to what a life produces." },
      { t: "p", x: "This means fruitfulness is more than what we say we believe. It is what becomes visible from the life we are truly connected to. Jesus makes this clear when He says, 'He who abides in Me, and I in him, bears much fruit' (John 15:5). The branch does not force fruit into existence. It bears fruit because it remains connected to the vine." },
      { t: "p", x: "This is why fruitfulness glorifies the Father. Jesus says, 'By this My Father is glorified, that you bear much fruit.' The word 'glorified' comes from the Greek doxazo, meaning to honor, magnify, or make visible the worth and beauty of someone. When our lives bear fruit, the Father is glorified because His nature becomes visible through us." },
      { t: "p", x: "The fruit is not self-generated. It is evidence of connection. It shows that the Vine is alive and that His life is flowing through the branches." },
      { t: "d" },
      { t: "p", x: "This is also why fruitfulness is never meant for self-display. Jesus says, 'Let your light so shine before men, that they may see your good works and glorify your Father in heaven' (Matthew 5:16). People may see the works, but the glory belongs to the Father. True fruitfulness points beyond the vessel to the Source." },
      { t: "p", x: "The phrase 'good works' in Matthew 5:16 carries rich meaning. The word kalos means beautiful, noble, excellent, and useful. The word ergon means work, deed, action, or labor. Together, kala erga speaks of deeds that are beautiful, noble, and visibly beneficial. Good works are not merely religious activities. They are actions that carry the beauty of God's character into practical life." },
      { t: "p", x: "Paul echoes this when he writes that we are God's workmanship, created in Christ Jesus for good works (Ephesians 2:10). The word 'workmanship' is poiema, meaning a crafted work, creation, or masterpiece. We are not saved by good works, but we are recreated for them. In Christ, our lives are shaped to walk in what God prepared beforehand." },
      { t: "d" },
      { t: "p", x: "One key expression of fruitfulness is the fruit of the Spirit. Paul writes, 'The fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, gentleness, self-control' (Galatians 5:22-23). The word 'fruit' here is singular, which suggests one unified harvest of Spirit-formed character expressed in multiple ways." },
      { t: "p", x: "This fruit is not personality improvement. It is the nature of Christ formed in a yielded life. As the Word takes root in us through hearing and understanding, it begins to produce visible life (Matthew 13:23). Love becomes more visible, joy becomes more stable, peace becomes more settled, patience becomes more possible, and self-control becomes more consistent. What God is forming inside begins to show outside." },
      { t: "p", x: "Fruitfulness also appears in good works. These are the actions that bless others and reveal the Father's goodness. But Scripture also gives us an important warning: works without love are empty. In 1 Corinthians 13, Paul says that even impressive spiritual speech, knowledge, sacrifice, and generosity amount to nothing without love. This reminds us that true fruitfulness is not performance. It must flow from love, not pride, guilt, ambition, or the desire to be seen." },
      { t: "p", x: "Good works become fruit when they flow from union with Christ, are empowered by love, and reflect the Father's nature." },
      { t: "d" },
      { t: "p", x: "Another dimension of fruitfulness is the fruit of lives touched by the Gospel. Jesus says, 'I chose you and appointed you that you should go and bear fruit, and that your fruit should remain' (John 15:16). Paul speaks of desiring fruit among the Romans, referring to Gospel impact and lives transformed. Proverbs says, 'The fruit of the righteous is a tree of life, and he who wins souls is wise' (Proverbs 11:30)." },
      { t: "p", x: "As our lives are changed by the Word, they become witnesses. People are not only impacted by what we say, but by what the Gospel has produced in us. A fruitful life becomes a living invitation." },
      { t: "p", x: "Fruitfulness also includes blessedness, stability, increase, and capacity. Psalm 1 describes the one who delights in and meditates on the law of the Lord as a tree planted by rivers of water, bringing forth fruit in season, with leaves that do not wither. This is not frantic activity. It is rooted life. The tree does not struggle to prove itself. It bears fruit because it is planted in the right place and nourished by the right source." },
      { t: "d" },
      { t: "p", x: "This brings us back to dwelling. Those who dwell in Christ and remain in His Word become rooted in the life of God. Fruitfulness becomes the natural outcome. It may not always appear immediately. Fruit has seasons. But where the roots are deep and the source is right, fruit will come." },
      { t: "p", x: "And this fruit is part of the transformation we have been exploring. Transformation is not complete if it remains private. God changes us so His life can flow through us. Fruitfulness is that flow becoming visible in character, service, witness, increase, and impact." },
      { t: "p", x: "The Word forms something within us, and the Spirit brings it forth through us." },
      { t: "p", x: "In the end, fruitfulness is not about proving ourselves. It is about revealing Him. It is the life of Christ made visible in ordinary decisions, quiet faithfulness, loving service, Spirit-formed character, and lives touched by God through us." },
      { t: "p", x: "The fruitful life is not the loudest life. It is the connected life. And as we abide in Christ and allow His Word to remain in us, the Father is glorified, others are blessed, and the life within the Vine transforms our world." },
      { t: "d" },
      { t: "p", x: "Father, thank You for calling me to a fruitful life in Christ. Let Your Word take deeper root in me, and let Your Spirit bring forth fruit that reflects Your nature. Shape my character, guide my actions, and make my life a blessing to others. May the fruit You produce in me bring glory to You. Amen." },
    ],
    journal: [
      "What fruit is becoming visible in your life as you dwell in Christ?",
      "Where is God inviting you to grow in Spirit-formed character?",
      "What good works has God prepared for you to walk in?",
      "How can your life become a greater blessing and witness to others?",
    ],
    prayers: [
      "Thank God for His desire to make your life fruitful through Christ.",
      "Receive grace to remain deeply connected to the Vine.",
      "Ask the Holy Spirit to produce Christlike character within you.",
      "Pray for wisdom to walk in the good works God has prepared for you.",
      "Ask that your fruit would bless others and bring glory to the Father.",
    ],
    declaration: "I abide in Christ, and His life in me produces fruit that reflects His nature. I remain connected, and His love, joy, and peace are evident in my life. My life reveals His goodness to those around me. I am rooted in Him and fruitful in every season, bringing blessing and life wherever I am planted. My works flow from love and point others to the Father. My life bears lasting fruit that glorifies Him. Amen.",
  },
  {
    day: 36,
    title: "Gifted for Kingdom Impact",
    audioUrl: "/audio/day-36.mp3",
    quotes: [
      { text: "No Christian is without some gift, nor is any gift given for private use alone.", author: "J. I. Packer" },
      { text: "God expects us to use what He has given us for His glory and the good of others.", author: "John Wesley" },
    ],
    anchor: [
      { text: "There are diversities of gifts, but the same Spirit. There are differences of ministries, but the same Lord. And there are diversities of activities, but it is the same God who works all in all.", ref: "1 Corinthians 12:4-6 (NKJV)" },
      { text: "As each one has received a gift, minister it to one another, as good stewards of the manifold grace of God.", ref: "1 Peter 4:10 (NKJV)" },
    ],
    scriptures: ["1 Corinthians 12:4-11", "1 Peter 4:7-11", "Ephesians 4:10-16", "Romans 12:3-8"],
    body: [
      { t: "p", x: "Yesterday, we considered fruitfulness as the visible evidence of a life dwelling in Christ. Fruit reveals God's character being formed within us. Today, we turn to another expression of transformed life: giftings. If fruit shows what God is producing in us, gifts show how His grace flows through us to strengthen, serve, build, and bless others." },
      { t: "p", x: "Scripture presents gifts as grace-entrustments. They are not trophies of spiritual superiority or proofs of personal importance. They are expressions of God's generosity, given so His wisdom, power, creativity, and compassion may be released through His people." },
      { t: "p", x: "The New Testament word often translated 'gift' is charisma, from charis, meaning grace. A gift is therefore a grace-gift, something freely given by God and not earned by human effort. Whatever we carry, we received. Whatever impact flows through us, grace made it possible." },
      { t: "p", x: "Paul shows that the Triune God is involved in the operation of gifts. There are diversities of gifts, but the same Spirit; differences of ministries, but the same Lord; diversities of activities, but the same God who works all in all. The expressions differ, but the source is unified. The Spirit gives, the Lord appoints, and the Father works through all." },
      { t: "p", x: "This means gifts are diverse by design. Peter calls them the 'manifold grace of God,' a varied and many-sided grace. Some gifts speak. Some serve. Some lead. Some heal. Some organize. Some create. Some strengthen quietly behind the scenes. But all are meant to serve." },
      { t: "p", x: "This is why Peter says, 'As each one has received a gift, minister it to one another.' The gift received is meant to become a gift shared." },
      { t: "d" },
      { t: "p", x: "Scripture gives us several ways to understand these gifts." },
      { t: "p", x: "There are spiritual manifestations given by the Spirit for the common good. Paul says, 'The manifestation of the Spirit is given to each one for the profit of all' (1 Corinthians 12:7). The word 'manifestation' is phanerosis, meaning a making visible or outward disclosure. The gifts of the Spirit make the Spirit's presence and work visible through human vessels." },
      { t: "p", x: "These include words of wisdom, words of knowledge, faith, gifts of healings, workings of miracles, prophecy, discerning of spirits, different kinds of tongues, and interpretation of tongues. They are often grouped as revelation gifts, power gifts, and vocal gifts: some reveal something, some do something, and some say something. Yet all are given to strengthen others." },
      { t: "p", x: "There are also ministry gifts given by Christ to equip His people. Ephesians 4 speaks of apostles, prophets, evangelists, pastors, and teachers, given for the equipping of the saints and the building up of the body. The word 'equipping' is katartismos, meaning preparing, restoring, making fit, or bringing into proper condition. These gifts are not given to replace the ministry of the saints, but to prepare the saints for ministry." },
      { t: "p", x: "There are also operations and functions God appoints within the body. Paul mentions helps and administrations in 1 Corinthians 12. 'Helps' speaks of support and assistance, the grace to lift burdens and strengthen the work of others. 'Administrations' carries the idea of steering or governing, like guiding a ship. Not every gift appears dramatic, but every God-given function matters." },
      { t: "d" },
      { t: "p", x: "Beyond these, there are natural abilities, skills, and capacities entrusted by God. Speaking, writing, organizing, music, leadership, hospitality, strategy, business skill, craftsmanship, creativity, problem-solving, and mercy can all become vessels of grace when surrendered to the Lord. Natural does not mean nonspiritual. When yielded to God, ordinary abilities become holy instruments." },
      { t: "p", x: "We see this in Bezalel and Oholiab, who were filled with the Spirit for craftsmanship, design, artistry, and construction of the tabernacle (Exodus 31:1-6; 35:30-35). Their work shows that God values skill, beauty, design, excellence, and practical execution. The Spirit empowers hands, minds, and creative capacities for sacred purpose." },
      { t: "p", x: "Scripture also shows God guiding and equipping people through dreams, visions, and interpretation. Joseph, Daniel, Peter, and Paul all experienced divine direction this way. Such gifts can bring revelation, warning, strategy, or direction, but they must always be tested, interpreted humbly, and submitted to Scripture, wisdom, and godly counsel." },
      { t: "p", x: "Life itself is also a stewardship. Time, health, relationships, access, influence, resources, education, and opportunities are all entrusted to us. In the parables of the talents and minas, the servants were expected to engage what the master gave. What matters is not only what was received, but what was done with it." },
      { t: "d" },
      { t: "p", x: "This brings us to the heart of stewardship." },
      { t: "p", x: "Jesus commends the servant by saying, 'Well done, good and faithful servant.' The word 'good,' agathos, speaks of what is upright, useful, and beneficial. 'Faithful,' pistos, means trustworthy, reliable, and consistent. 'Servant,' doulos, reminds us that we belong to the Master. Gifts are not possessions for self-display. They are entrustments for service." },
      { t: "p", x: "God gives gifts sovereignly, but stewardship affects increase. Gifts are received by grace, but they mature through faithfulness. As we serve, practice, obey, and remain accountable, capacity grows. What is neglected may remain dormant. What is faithfully stewarded can expand in usefulness and impact." },
      { t: "p", x: "This is why gifts are meant to function within the body. No believer is designed to express grace in isolation. The body of Christ is the environment where gifts are identified, tested, refined, activated, and multiplied. We need connection, accountability, encouragement, and covering." },
      { t: "p", x: "And love is essential. Paul places 1 Corinthians 13 immediately after his teaching on gifts. Gifts without love become noise. They can become performance, competition, or even harm. The fruit of love must govern the use of gifts. Fruit reveals character. Gifts reveal function. We need both. Fruit without gifts may limit impact, but gifts without fruit can damage others." },
      { t: "d" },
      { t: "p", x: "In the end, giftings are not about status. They are about service. They are not for personal fame, but for the common good and the glory of God. Whether expressed through spiritual manifestations, ministry callings, practical skills, craftsmanship, resources, influence, or opportunities, every gift is a portion of grace to be stewarded." },
      { t: "p", x: "The question is not whether you have something to offer. Scripture says each one has received a gift. The question is whether what you have received is being surrendered, cultivated, and used for the Master's purpose." },
      { t: "p", x: "As we dwell in the Lord and in His Word, we become people through whom His grace can flow wisely, lovingly, and powerfully. Fruit reveals His life in us. Gifts release His grace through us. And together, they make us vessels of kingdom impact." },
      { t: "d" },
      { t: "p", x: "Father, thank You for the gifts and grace You have entrusted to me. Teach me to steward them with humility, faithfulness, and love. Use my life to strengthen, serve, and bless others for Your glory. Amen." },
    ],
    journal: [
      "What gifts, abilities, or opportunities has God entrusted to you?",
      "How are you currently stewarding what you have received?",
      "Where do you need to grow in faithfulness, humility, or love in using your gifts?",
      "How can your gifts serve others and build God's kingdom more intentionally?",
    ],
    prayers: [
      "Thank God for the gifts, abilities, and opportunities He has entrusted to your life.",
      "Receive grace to steward your gifts faithfully and humbly.",
      "Pray for love to govern every expression of your gifts.",
      "Ask God to place you in the right community where your gifts can mature and serve well.",
      "Pray that your gifts would bless others, build the body, and bring glory to God.",
    ],
    declaration: "I receive every gift entrusted to me as grace from God, and I steward it with humility and faithfulness. The Spirit works through me, and what I carry is meant to serve and build others. As I remain in Christ, my gifts grow and are expressed in love and purpose. My life becomes a vessel of His grace, bringing strength and impact wherever I am. Amen.",
  },
  {
    day: 37,
    title: "Chosen and Appointed",
    audioUrl: "/audio/day-37.mp3",
    quotes: [
      { text: "Every believer is chosen by grace and appointed for service.", author: "Derek Prince" },
      { text: "There is no greater joy than knowing you are where God has placed you.", author: "Corrie ten Boom" },
    ],
    anchor: [
      { text: "You did not choose Me, but I chose you and appointed you that you should go and bear fruit, and that your fruit should remain...", ref: "John 15:16 (NKJV)" },
    ],
    scriptures: ["Ephesians 1:4", "1 Samuel 16:1-13", "2 Corinthians 10:13", "Colossians 3:23-24"],
    body: [
      { t: "p", x: "Having explored fruitfulness and giftings, we now come to the foundation beneath both: divine choice and appointment. The fruit we bear and the gifts we steward do not begin with self-selection. They begin with God's initiative. Before we serve, build, lead, or become visible, we are first chosen and appointed by Him." },
      { t: "p", x: "Jesus makes this clear: 'You did not choose Me, but I chose you and appointed you.' In one sentence, He removes striving, comparison, and self-made identity from the center of calling. Our lives are not random. Our assignments are not accidental. There is divine intention behind every believer's life." },
      { t: "p", x: "The word translated 'chose' is the Greek eklegomai, meaning to select, to choose out from among, or to choose for oneself with purpose. This is not casual selection. Jesus is saying, 'You did not originate this relationship. I chose you for Myself.'" },
      { t: "p", x: "This gives the believer security. We are not an afterthought in God's plan. We are chosen in Christ, loved in Christ, and called in Christ. Rejection does not cancel divine choice. Obscurity does not mean abandonment. Delay does not mean denial. What God has chosen, He knows how to form, prepare, and bring forth in His time." },
      { t: "p", x: "But choice is not the end of the matter. Jesus also says, 'I appointed you.'" },
      { t: "p", x: "The word translated 'appointed' comes from the Greek tithemi, meaning to place, set, establish, assign, or position intentionally. God does not only choose people. He places them. Divine appointment includes placement, timing, function, responsibility, and fruitfulness." },
      { t: "p", x: "To be chosen is to be securely loved and selected by God. To be appointed is to be positioned and entrusted with purpose." },
      { t: "p", x: "Appointment is never merely about status. Jesus says He appointed us 'that you should go and bear fruit.' The purpose of appointment is fruitfulness. God does not call us only to carry titles or potential. He calls us to bear lasting fruit that reflects His life and serves His purposes." },
      { t: "d" },
      { t: "p", x: "This appointment includes time. Divine purpose unfolds in seasons. There is a time for preparation, discovery, introduction, elevation, and fuller manifestation. David was anointed king in 1 Samuel 16, but he did not immediately sit on the throne. His calling was real, but his coronation came later." },
      { t: "p", x: "Between anointing and enthronement, David passed through obscurity, service, warfare, persecution, wilderness seasons, and character formation. He had opportunities to force the promise by harming Saul, but he refused. He understood that God appoints not only the calling, but also the timing of its manifestation. A person can be anointed and still need process." },
      { t: "p", x: "Appointment also includes place. God does not only call generally; He places specifically. Paul writes that God has set the members in the body as He pleased (1 Corinthians 12:18). To know your place is to discern where your grace is meant to function." },
      { t: "p", x: "Some are called to public platforms. Others are called to hidden places of intercession, administration, discipleship, family formation, or quiet support. Some are called into government, business, education, media, arts, health, technology, ministry, or community transformation. The issue is not which place appears greater. The issue is whether it is God's place for you." },
      { t: "p", x: "David first learned faithfulness in the sheepfold. That hidden place was not wasted. It trained his courage, compassion, worship, and warfare. His private victories over the lion and the bear prepared him for public victory over Goliath. Later, God placed him in Saul's court, in wilderness seasons, in Hebron, and eventually over all Israel. His placement unfolded progressively." },
      { t: "d" },
      { t: "p", x: "Appointment also requires embracing the identity God speaks over us. Gideon was called a 'mighty man of valor,' yet he initially saw himself as weak and insignificant. His self-perception resisted God's word over him. David, though overlooked by his family, had cultivated confidence in God through private encounters. When Goliath threatened Israel, David stepped forward from a history of trusting God in secret." },
      { t: "p", x: "Both men were used by God, but they show us something important: we may need grace to believe what God has called us before we can fully walk in what He has assigned us." },
      { t: "p", x: "Appointment also includes scope. Not every calling is for every person, place, problem, or season. Jesus Himself moved with clarity of assignment. He could say, 'I have finished the work which You have given Me to do' (John 17:4). Paul also speaks of a measure or sphere appointed by God (2 Corinthians 10:13)." },
      { t: "p", x: "Scope helps us ask: What has God assigned to me? What is outside my assignment? What season of the assignment am I in? What fruit is God expecting now?" },
      { t: "p", x: "David's scope expanded over time. He served his father's sheep, then Saul with music, then Israel by defeating Goliath, then men in the wilderness, then Judah as king, and finally all Israel. He did not despise the smaller assignment, and God used each one to prepare him for the larger one." },
      { t: "d" },
      { t: "p", x: "Appointment also includes audience and jurisdiction. Every calling has people it is meant to serve, influence, lead, protect, or bless. Samuel was sent to anoint David, but even Samuel needed God's guidance to see correctly. Jesse overlooked David, but God did not. Later, Judah received David before all Israel did. His audience expanded in stages." },
      { t: "p", x: "This teaches us to pray not only for gifts, but for right recognition, right reception, and right timing. Visibility and acceptance often unfold progressively." },
      { t: "p", x: "Finally, appointment is connected to reward. Jesus says He appointed us to bear fruit and that our fruit should remain. The word 'remain' is meno, meaning to abide, continue, endure, or stay. The fruit of divine appointment is not meant to be temporary excitement. It is meant to endure." },
      { t: "p", x: "Reward is not limited to material increase. It includes fulfillment, influence, joy, responsibility, eternal reward, and multiplied impact. David's reward was not merely becoming king. His faithfulness became part of a covenant legacy that ultimately pointed to Christ. God's reward often exceeds what we can see in the moment." },
      { t: "d" },
      { t: "p", x: "John 15:16 gives us a balanced posture. We have security because we are chosen. We have confidence because the One who appoints us carries all authority. We have submission because we are not self-appointed. We have responsibility because appointment is for fruit. We have patience because appointment unfolds in time. We have humility because the fruit comes through abiding." },
      { t: "p", x: "So we do not need to strive to become what only God can appoint us to be. We do not need to force doors, imitate others, or despise hidden seasons. Our part is to abide, obey, grow, and steward what He has placed in our hands." },
      { t: "p", x: "To be chosen is to be loved with intention. To be appointed is to be placed with purpose. And as we remain in Christ, the fruit and gifts within us find expression in the right places, at the right time, for the glory of God." },
      { t: "d" },
      { t: "p", x: "Father, thank You for choosing me in Christ and appointing me for purpose. Help me to trust Your timing, embrace Your process, and remain faithful in every season. Teach me to abide deeply, serve humbly, and bear fruit that remains for Your glory. Amen." },
    ],
    journal: [
      "How does being chosen by God strengthen your identity and confidence?",
      "Where might God be asking you to trust His timing and process?",
      "What assignment or place has God entrusted to you in this season?",
      "How can you faithfully bear fruit where He has appointed you?",
    ],
    prayers: [
      "Thank God for choosing you in Christ and appointing you for purpose.",
      "Receive grace to trust God's timing, placement, and process.",
      "Pray for clarity concerning your assignment, scope, and season.",
      "Ask for humility to serve faithfully without striving or comparison.",
      "Pray that your life will bear lasting fruit for God's glory.",
    ],
    declaration: "I am chosen by God and securely loved in Christ, and my life carries His purpose. He is shaping me through every season, and I trust His timing, process, and placement for my life. I do not strive or compare myself with others, because God faithfully leads me in His appointed path. I will faithfully steward what God has entrusted to me and remain rooted in Christ. My life will bear lasting fruit in the right place and at the right time for His glory. Amen.",
  },
];

const ALL = Array.from({ length: 40 }, (_, i) => { const n = i + 1; const f = DAYS.find(d => d.day === n); return { day: n, title: f ? f.title : "Coming Soon", pub: !!f }; });

const PRAYER_CATS = ["Healing & Health","Family & Relationships","Career & Purpose","Financial Breakthrough","Spiritual Growth & Warfare","Grief & Loss","Peace & Mental Health","Salvation of a Loved One","Marriage & Restoration","Guidance & Decisions","Protection & Safety","Other"];
const TEST_CATS = [{l:"Healing",e:"&#127807;"},{l:"Breakthrough",e:"&#9889;"},{l:"Provision",e:"&#128155;"},{l:"Salvation",e:"&#10013;"},{l:"Restoration",e:"&#128260;"},{l:"Protection",e:"&#128737;"},{l:"Other",e:"&#10024;"}];
const FAITH_LABELS = {1:"Struggling",2:"Hopeful",3:"Trusting",4:"Confident",5:"Unshakeable"};
const FEEDBACK_CATS = [{l:"Devotional Content",e:"&#128214;"},{l:"Midday Prayers",e:"&#128330;"},{l:"Evening Sessions",e:"&#127769;"},{l:"WhatsApp Announcements",e:"&#128172;"},{l:"YouTube Videos",e:"&#127909;"},{l:"Website / App",e:"&#128187;"},{l:"Suggestion",e:"&#128161;"},{l:"Report a Problem",e:"&#128027;"},{l:"General",e:"&#128172;"}];
const FEEDBACK_LABELS = {1:"Needs Work",2:"Could Be Better",3:"It's Good",4:"Really Great",5:"Love It!"};

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
// FEEDBACK FORM
// ══════════════════════════════════════════════════════════
function FeedbackForm() {
  const [anon, setAnon] = useState(false);
  const [f, setF] = useState({ first: "", last: "", email: "", cat: "", message: "", rating: 0 });
  const [ok, setOk] = useState(false);
  const [sending, setSending] = useState(false);
  const [hoverR, setHoverR] = useState(0);

  const submit = async () => {
    if (!f.cat || !f.message.trim()) return;
    if (!anon && !f.first.trim()) return;
    setSending(true);
    const payload = { action: "feedback", firstName: anon ? "Anonymous" : f.first.trim(), lastName: anon ? "" : f.last.trim(), email: anon ? "anonymous" : f.email.trim(), category: f.cat, message: f.message.trim(), rating: f.rating, anonymous: anon, timestamp: new Date().toISOString() };
    try {
      const iframe = document.createElement("iframe");
      iframe.name = "feedbackFrame";
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      const form = document.createElement("form");
      form.method = "POST";
      form.action = SCRIPT_URL;
      form.target = "feedbackFrame";
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

  if (ok) return <div style={{ textAlign: "center", padding: "48px 20px" }}><div style={{ fontSize: 42, marginBottom: 12 }}>&#128591;</div><div style={{ ...ff("d", 700, 26), color: C.navy, marginBottom: 8 }}>Thank You!</div><div style={{ ...ff("b", 400, 14), color: C.muted, lineHeight: 1.7, maxWidth: 340, margin: "0 auto 20px" }}>Your feedback is a gift to this ministry. We read every submission and use it to serve you better.</div><button onClick={() => { setOk(false); setF({ first: "", last: "", email: "", cat: "", message: "", rating: 0 }); setAnon(false); }} style={{ ...ff("s", 600, 11), letterSpacing: 2, textTransform: "uppercase", padding: "10px 24px", background: "none", border: "1px solid " + C.gold, borderRadius: 8, color: C.gold, cursor: "pointer" }}>Submit More Feedback</button></div>;

  return <div>
    {/* Anon Toggle */}
    <div style={{ marginBottom: 20 }}><label style={lbl}>Submission Type</label>
      <div onClick={() => setAnon(!anon)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: C.white, border: "1px solid " + C.border, borderRadius: 8, padding: "12px 16px", cursor: "pointer" }}>
        <span style={{ ...ff("s", 400, 13), color: C.text }}>{anon ? "Submitting anonymously" : "Submit with my name"}</span>
        <div style={{ width: 38, height: 21, background: anon ? C.gold : "#ddd", borderRadius: 10, position: "relative", transition: "background 0.3s" }}><div style={{ position: "absolute", top: 3, left: anon ? 20 : 3, width: 15, height: 15, borderRadius: "50%", background: "#fff", transition: "left 0.3s" }} /></div>
      </div>
      {anon && <div style={{ ...ff("s", 400, 12), color: C.gold, background: C.cream, border: "1px solid " + C.border, borderRadius: 8, padding: "10px 14px", marginTop: 6 }}>Your name and email will not be stored. Your feedback will be marked as Anonymous.</div>}
    </div>

    {!anon && <><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
      <div><label style={lbl}>First Name</label><input type="text" value={f.first} onChange={e => setF({ ...f, first: e.target.value })} placeholder="Your name" style={inp} /></div>
      <div><label style={lbl}>Last Name</label><input type="text" value={f.last} onChange={e => setF({ ...f, last: e.target.value })} placeholder="Last name" style={inp} /></div>
    </div>
    <div style={{ marginBottom: 16 }}><label style={lbl}>Email Address</label><input type="email" value={f.email} onChange={e => setF({ ...f, email: e.target.value })} placeholder="your@email.com (if you'd like a response)" style={inp} /></div></>}

    <div style={{ marginBottom: 16 }}><label style={lbl}>Feedback Category</label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {FEEDBACK_CATS.map(c => <button key={c.l} onClick={() => setF({ ...f, cat: c.l })} style={{ padding: "7px 14px", border: "1px solid " + (f.cat === c.l ? C.navy : C.border), borderRadius: 20, background: f.cat === c.l ? "rgba(26,31,58,0.1)" : "transparent", ...ff("s", 600, 11), letterSpacing: 1, color: f.cat === c.l ? C.navy : C.muted, cursor: "pointer", transition: "all 0.2s" }} dangerouslySetInnerHTML={{ __html: c.e + " " + c.l }} />)}
      </div>
    </div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Overall Experience</label>
      <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>{[1, 2, 3, 4, 5].map(n => <span key={n} onClick={() => setF({ ...f, rating: n })} onMouseEnter={() => setHoverR(n)} onMouseLeave={() => setHoverR(0)} style={{ fontSize: 28, cursor: "pointer", color: (hoverR >= n || f.rating >= n) ? C.gold : C.border, transition: "color 0.2s, transform 0.15s", transform: (hoverR >= n || f.rating >= n) ? "scale(1.15)" : "scale(1)" }}>&#9733;</span>)}</div>
      {f.rating > 0 && <div style={{ ...ff("s", 500, 10), letterSpacing: 1.5, textTransform: "uppercase", color: C.muted, marginTop: 2 }}>{FEEDBACK_LABELS[f.rating]}</div>}
    </div>

    <div style={{ marginBottom: 16 }}><label style={lbl}>Your Feedback</label><textarea value={f.message} onChange={e => setF({ ...f, message: e.target.value })} placeholder="Tell us what's on your heart — what's working, what could improve, or ideas you'd love to see..." maxLength={1500} style={{ ...inp, minHeight: 130, resize: "vertical" }} /><div style={{ ...ff("s", 400, 10), color: C.muted, textAlign: "right", marginTop: 4 }}>{f.message.length} / 1500</div></div>

    <div style={verse}><div style={{ ...ff("d", 500, 14), fontStyle: "italic", color: C.navy, lineHeight: 1.75 }}>"Iron sharpens iron, and one person sharpens another."</div><div style={{ ...ff("s", 500, 11), color: C.gold, marginTop: 6 }}>Proverbs 27:17 (ESV)</div></div>

    <button onClick={submit} disabled={sending} style={{ ...sub, opacity: sending ? 0.6 : 1 }}>{sending ? "Sending your feedback..." : "Send Feedback"}</button>
    <div style={{ ...ff("d", 400, 13), fontStyle: "italic", color: C.muted, textAlign: "center", marginTop: 12 }}>Your honest feedback helps us grow and serve better.</div>
  </div>;
}

// ══════════════════════════════════════════════════════════
// LANDING PAGE
// ══════════════════════════════════════════════════════════

// ── SHARED HERO + TABS ──
function HeroAndTabs({ tab, setTab }) {
  const tabs = [
    { id: "welcome", l: "Welcome" }, { id: "days", l: "Devotionals" }, { id: "about", l: "About Us" },
    { id: "prayer", l: "Prayer Request" }, { id: "testimony", l: "Share Testimony" },
    { id: "dwell", l: "Dwell Bible" }, { id: "feedback", l: "Feedback" },
  ];
  return <>
    <Bar />
    <div style={{ background: C.navy, padding: "40px 24px 34px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 30%, rgba(200,164,92,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ ...ff("s", 300, 12), letterSpacing: 4, textTransform: "uppercase", color: C.gold, marginBottom: 12, position: "relative", opacity: 0.85 }}>{S.name}</div>
      <h1 style={{ ...ff("d", 700, "clamp(36px,7vw,56px)"), lineHeight: 1.05, color: "#fff", marginBottom: 4, position: "relative", letterSpacing: 3, textTransform: "uppercase", cursor: "pointer" }} onClick={() => setTab("welcome")}>{S.theme}</h1>
      <div style={{ ...ff("s", 400, 14), letterSpacing: 5, textTransform: "uppercase", color: C.softGold, marginBottom: 16, position: "relative" }}>{S.year}</div>
      <div style={{ width: 50, height: 1, background: C.gold, margin: "0 auto", opacity: 0.4, position: "relative" }} />
    </div>
    <div style={{ background: C.cream, padding: "14px 12px 0", borderBottom: "1px solid " + C.border, position: "sticky", top: 0, zIndex: 10 }}>
      <div style={{ display: "flex", gap: 4, overflowX: "auto" }}>
        {tabs.map(t => <button key={t.id} onClick={() => { if (t.id === "dwell") { window.open("https://get.dwellbible.com/aa/?utm_campaign=partnerships&utm_content=&utm_medium=podcast&utm_source=adorned_and_armed&utm_term=", "_blank"); return; } setTab(t.id); }} style={{ flex: "0 0 auto", padding: "10px 14px 12px", background: tab === t.id ? C.navy : "transparent", border: tab === t.id ? "1px solid " + C.navy : "1px solid " + C.border, borderBottom: tab === t.id ? "1px solid " + C.navy : "none", borderRadius: "8px 8px 0 0", cursor: "pointer", ...ff("s", tab === t.id ? 600 : 400, 10), letterSpacing: 1.2, textTransform: "uppercase", color: tab === t.id ? "#fff" : C.muted, transition: "all 0.2s", whiteSpace: "nowrap" }}>{t.id === "dwell" ? <>{t.l} <span style={{ fontSize: 9, verticalAlign: "middle", opacity: 0.6 }}>&#8599;</span></> : t.l}</button>)}
      </div>
    </div>
  </>;
}

// ── DAY NAVIGATION BAR ──
function DayNav({ d, onBack, onNav }) {
  const prev = DAYS.slice().reverse().find(x => x.day < d.day);
  const next = DAYS.find(x => x.day > d.day);
  const nb = { background: "none", border: "none", cursor: "pointer", ...ff("s", 400, 13), letterSpacing: 1, textTransform: "uppercase", color: C.gold };
  return <div style={{ padding: "14px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", background: C.cream, borderTop: "1px solid " + C.border, borderBottom: "1px solid " + C.border }}>
    {prev ? <button onClick={() => onNav(prev.day)} style={nb}>&larr; Day {String(prev.day).padStart(2, "0")}</button> : <div />}
    <button onClick={onBack} style={nb}>All Days</button>
    {next ? <button onClick={() => onNav(next.day)} style={nb}>Day {String(next.day).padStart(2, "0")} &rarr;</button> : <div />}
  </div>;
}

// ── WELCOME PAGE ──
function WelcomePage({ onStart }) {
  const p = { ...ff("b", 400, 15), lineHeight: 1.85, color: C.sec, marginBottom: 18 };
  const h3 = { ...ff("d", 600, 19), color: C.navy, marginBottom: 8, marginTop: 24 };
  return <div style={{ padding: "28px 24px 40px" }}>
    <div style={{ ...ff("d", 600, 26), color: C.navy, marginBottom: 6 }}>Welcome to {S.theme} {S.year}</div>
    <Orn s={{ marginBottom: 24 }} />
    <p style={p}>We are so glad you are here. <strong style={{ color: C.navy }}>{S.theme} {S.year}</strong> is a 40-day devotional journey produced by <strong style={{ color: C.navy }}>{S.name}</strong>, an invitation to slow down, draw near, and make the Word of God your dwelling place.</p>
    <p style={p}>Over the course of forty days, each devotional will guide you through Scripture, reflection, prayer, and journaling as you deepen your fellowship with God.</p>
    <div style={h3}>How to Navigate This Site</div>
    <p style={p}>Use the tabs at the top of the page to move between sections. Here is what each one offers:</p>
    <div style={{ padding: "16px 18px", background: C.cream, borderRadius: 8, marginBottom: 16 }}>
      {[
        { t: "Devotionals", d: "Access each day's bulletin. Click on any unlocked day to read the devotional, listen to the audio, and reflect on the journal questions and prayers." },
        { t: "About Us", d: "Learn about the Adorned & Armed ministry and the vision behind this journey." },
        { t: "Prayer Request", d: "Submit a prayer request. Our intercessors will stand with you in faith." },
        { t: "Share Testimony", d: "Share what God is doing in your life to encourage others." },
        { t: "Dwell Bible", d: "Access the Dwell Bible app for an immersive audio Bible experience." },
        { t: "Feedback", d: "Share your thoughts and suggestions to help us improve." },
      ].map((item, i) => <div key={i} style={{ padding: "10px 0", borderBottom: i < 5 ? "1px solid rgba(200,164,92,0.15)" : "none" }}>
        <span style={{ ...ff("s", 600, 12), color: C.gold, textTransform: "uppercase", letterSpacing: 1 }}>{item.t}</span>
        <div style={{ ...ff("b", 400, 14), color: C.sec, marginTop: 4, lineHeight: 1.6 }}>{item.d}</div>
      </div>)}
    </div>
    <div style={h3}>A Few Tips</div>
    <p style={p}>Each devotional includes an audio version you can listen to on the go. Take your time with each day. Bring your Bible and a journal. Let the Holy Spirit speak to you through the Word.</p>
    <p style={p}>New devotionals are released daily. Bookmark this page and return each day for the next bulletin.</p>
    <div style={{ margin: "28px 0", padding: "24px 20px", background: C.cream, borderLeft: "3px solid " + C.gold, borderRadius: "0 8px 8px 0", textAlign: "center" }}>
      <div style={{ ...ff("d", 600, 17), fontStyle: "italic", lineHeight: 1.6, color: C.navy }}>Adorned in Glory. Armed in Power. Sent with Purpose.</div>
    </div>
    <div style={{ textAlign: "center", marginTop: 28 }}>
      <button onClick={onStart} style={{ padding: "14px 36px", background: C.navy, color: C.gold, border: "none", borderRadius: 10, ...ff("s", 700, 12), letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>Begin the Journey &rarr;</button>
    </div>
  </div>;
}

// ── LANDING CONTENT ──
function LandingContent({ tab, setTab, onDay }) {
  const [hov, setHov] = useState(null);
  const h2 = { ...ff("d", 600, 24), color: C.navy, marginBottom: 6 };
  const p = { ...ff("b", 400, 15), lineHeight: 1.85, color: C.sec, marginBottom: 20 };
  const h3 = { ...ff("d", 600, 20), color: C.navy, marginBottom: 8, marginTop: 28 };

  return <div style={{ padding: "0 20px 48px", maxWidth: 760, margin: "0 auto" }}>
    {tab === "welcome" && <WelcomePage onStart={() => setTab("days")} />}

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

    {tab === "feedback" && <div style={{ padding: "28px 8px 0" }}>
      <div style={h2}>Share Your Feedback</div><Orn s={{ marginBottom: 24 }} />
      <p style={p}>Your feedback helps us serve you better. Whether it is about the devotionals, the app, or anything else, we value your thoughts and suggestions.</p>
      <FeedbackForm />
    </div>}
  </div>;
}

// ── DAY PAGE ──
function DayPg({ d, onBack, onNav }) {
  const ref = useRef(null);
  useEffect(() => { ref.current?.scrollIntoView({ behavior: "smooth" }); }, [d.day]);
  const ps = { ...ff("b", 400, 16), lineHeight: 1.85, color: C.text, marginBottom: 22, textAlign: "justify", hyphens: "auto" };

  return <div ref={ref}>
    <DayNav d={d} onBack={onBack} onNav={onNav} />
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
    <DayNav d={d} onBack={onBack} onNav={onNav} />
    <Ft /><Bar h={4} />
  </div>;
}

// ── APP ──
export default function App() {
  const [tab, setTab] = useState("welcome");
  const [sel, setSel] = useState(null);
  const dd = sel ? DAYS.find(d => d.day === sel) : null;
  const w = { maxWidth: 740, margin: "0 auto", boxShadow: "0 0 60px rgba(26,31,58,0.08)" };

  const changeTab = (t) => { setSel(null); setTab(t); window.scrollTo(0, 0); };
  const goToDay = (day) => { setSel(day); setTab("day"); window.scrollTo(0, 0); };
  const backToLanding = () => { setSel(null); setTab("days"); window.scrollTo(0, 0); };

  return <div style={w}>
    <HeroAndTabs tab={tab} setTab={changeTab} />
    {tab === "day" && dd ? (
      <DayPg d={dd} onBack={backToLanding} onNav={goToDay} />
    ) : (
      <>
        <LandingContent tab={tab} setTab={setTab} onDay={goToDay} />
        <Ft /><Bar h={4} />
      </>
    )}
    <Analytics />
  </div>;
}

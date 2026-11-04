/* =====================================================================
   EVENTS LIST — the only file to edit when adding or updating events
   ---------------------------------------------------------------------
   Every event listed here appears on the hub page. Events whose date
   has passed move to "Past events" automatically.

   Two kinds of event:
   • An event with its own website: set  url  to the site's address.
   • A past event with only a flyer: leave url out and set  flyer.
     It then gets its own page showing the flyer, at
     past-events/event.html?id=THE-ID

   To add one, copy a block { ... }, paste it in, keep a comma between
   blocks, and change the values. Put flyer images in past-events/flyers/
   and a small preview (800 × 420 px, top of the flyer) in
   past-events/flyers/thumbs/ with the same file name.
   ===================================================================== */

window.HUB = {
  title: "Event websites",
  intro: "Websites for forums and academic events. Select an event to see its agenda, speakers and venue.",
  disclaimer: "These pages are maintained by the event organizers. They are not official Abu Dhabi University websites.",

  events: [
    {
      id: "3rd-women-in-ai-forum",
      title: "3rd Women in AI Forum",
      date: "2026-11-11",                               // YYYY-MM-DD, used for sorting
      dateLabel: "Wednesday, 11 November 2026",
      time: "8:30 AM – 1:30 PM",
      venue: "ADU Auditorium, Abu Dhabi Campus",
      summary: "Keynote talks and a panel discussion on “Generative AI: Opportunity or Threat for the Next Generation?”",
      url: "/women-in-ai-forum-2026/",                  // this event has its own website
      image: "/women-in-ai-forum-2026/assets/img/og-image.png"
    },
    {
      id: "2nd-women-in-ai-forum",
      title: "2nd Women in AI Forum",
      theme: "Women Leading AI Innovation for Sustainable and Healthy Futures",
      date: "2026-07-09",
      dateLabel: "Thursday, 9 July 2026",
      time: "9:30 AM – 11:30 AM",
      venue: "Online",
      organizedBy: "The College of Engineering, the Research Institute for AI & Emerging Technologies (RAIET) and the Cancer Research Institute (ADU-CRI), Abu Dhabi University",
      summary: "A distinguished forum featuring expert talks and panel discussions highlighting the contributions of women leaders in artificial intelligence, healthcare, sustainability, and emerging technologies. The event explores how AI is transforming research, innovation, and healthcare while inspiring the next generation of women innovators.",
      flyer: "past-events/flyers/2nd-women-in-ai-forum-2026.jpg",
      thumb: "past-events/flyers/thumbs/2nd-women-in-ai-forum-2026.jpg",
      flyerAlt: "Agenda flyer of the 2nd Women in AI Forum, 9 July 2026"
    },
    {
      id: "1st-women-in-ai-forum",
      title: "1st Women in Artificial Intelligence Forum",
      theme: "Innovating the Future",
      date: "2024-10-30",
      dateLabel: "Wednesday, 30 October 2024",
      time: "9:00 AM – 5:00 PM",
      venue: "Abu Dhabi University Auditorium, Abu Dhabi Campus",
      organizedBy: "College of Engineering and the Research Institute for AI and Emerging Technology, Abu Dhabi University",
      summary: "Two sessions of talks and two panel discussions, covering AI for ethics, security and sustainability, and emerging AI technologies in business, infrastructure and healthcare.",
      flyer: "past-events/flyers/1st-women-in-ai-forum-2024.jpg",
      thumb: "past-events/flyers/thumbs/1st-women-in-ai-forum-2024.jpg",
      flyerAlt: "Agenda flyer of the 1st Women in Artificial Intelligence Forum, 30 October 2024"
    }
  ]
};

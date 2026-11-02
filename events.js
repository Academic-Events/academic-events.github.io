/* =====================================================================
   EVENTS LIST — edit this file to add or update events on the hub page
   ---------------------------------------------------------------------
   To add an event, copy one block { ... }, paste it below the last one,
   add a comma between blocks, and change the values.
   Upcoming events are listed first; past events move down automatically.
   ===================================================================== */

window.HUB = {
  title: "Event websites",
  intro: "Websites for forums and academic events. Select an event to see its agenda, speakers and venue.",
  disclaimer: "These pages are maintained by the event organizers. They are not official Abu Dhabi University websites.",

  events: [
    {
      title: "3rd Women in AI Forum",
      date: "2026-11-11",                               // YYYY-MM-DD, used for sorting
      dateLabel: "Wednesday, 11 November 2026",
      venue: "ADU Auditorium, Abu Dhabi Campus",
      summary: "Keynote talks and a panel discussion on “Generative AI: Opportunity or Threat for the Next Generation?”",
      // The event's address on this account. It matches the repository name.
      url: "/women-in-ai-forum-2026/",
      image: "/women-in-ai-forum-2026/assets/img/og-image.png"
    }
  ]
};

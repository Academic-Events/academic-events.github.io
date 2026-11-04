/* Events hub — builds the home page, the past-events list and the
   past-event pages from events.js. No need to edit this file. */
(function () {
  "use strict";
  var H = window.HUB || { events: [] };
  var body = document.body;
  var root = body.getAttribute("data-root") || "";   // "" on the home page, "../" inside past-events/
  var page = body.getAttribute("data-page");
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var fix = function (p) { return !p ? "" : (/^(\/|https?:)/.test(p) ? p : root + p); };
  var today = new Date().toISOString().slice(0, 10);
  var events = (H.events || []).slice();
  var upcoming = events.filter(function (e) { return e.date >= today; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
  var past = events.filter(function (e) { return e.date < today; }).sort(function (a, b) { return a.date > b.date ? -1 : 1; });
  var pageUrl = function (e) { return e.url ? e.url : root + "past-events/event.html?id=" + encodeURIComponent(e.id); };

  // Shared header and footer text
  if ($("hub-title")) $("hub-title").textContent = H.title || "";
  if ($("hub-disclaimer")) $("hub-disclaimer").textContent = H.disclaimer || "";

  function card(e, isPast, tag) {
    var image = fix(e.thumb || e.image);
    var cta = e.url ? (isPast ? "View the event website" : "Agenda and speakers") : "View the flyer";
    return '<li class="event">' +
      (image ? '<img src="' + esc(image) + '" alt="" loading="lazy">' : "") +
      '<div class="event-body"><p class="event-date">' + esc(e.dateLabel) + "</p>" +
      "<" + tag + '><a href="' + esc(pageUrl(e)) + '">' + esc(e.title) + "</a></" + tag + ">" +
      (e.theme ? '<p class="event-theme">' + esc(e.theme) + "</p>" : "") +
      '<p class="event-venue">' + esc(e.venue) + "</p>" +
      (e.summary && !e.theme ? '<p class="event-summary">' + esc(e.summary) + "</p>" : "") +
      '<span class="event-cta" aria-hidden="true">' + cta + "</span></div></li>";
  }
  var list = function (arr, isPast, tag) {
    return '<ol class="events">' + arr.map(function (e) { return card(e, isPast, tag); }).join("") + "</ol>";
  };

  if (page === "home") {
    document.title = H.title || document.title;
    $("hub-h1").textContent = H.title || "";
    $("hub-intro").textContent = H.intro || "";
    var html = '<h2 class="group-title" id="upcoming">Upcoming events</h2>' +
      (upcoming.length ? list(upcoming, false, "h3") : '<p class="empty">New events will be listed here.</p>');
    if (past.length) html += '<h2 class="group-title" id="past">Past events</h2>' + list(past, true, "h3");
    $("lists").innerHTML = html;
  }

  if (page === "past") {
    $("lists").innerHTML = past.length ? list(past, true, "h2") : '<p class="empty">Past events will appear here.</p>';
  }

  if (page === "event") {
    var id = new URLSearchParams(location.search).get("id");
    var e = events.filter(function (x) { return x.id === id; })[0];
    var out = $("detail");
    if (!e) {
      document.title = "Event not found";
      out.innerHTML = '<section class="intro"><h1>Event not found</h1><span class="rule" aria-hidden="true"></span>' +
        '<p>This link doesn\'t match an event. See the list of <a href="./">past events</a>.</p></section>';
      return;
    }
    document.title = e.title + " | Past events";
    var facts = [["Date", e.dateLabel], ["Time", e.time], ["Venue", e.venue], ["Organized by", e.organizedBy]]
      .filter(function (f) { return f[1]; })
      .map(function (f) { return "<div><dt>" + f[0] + "</dt><dd>" + esc(f[1]) + "</dd></div>"; }).join("");
    var flyer = fix(e.flyer);
    out.innerHTML =
      '<p><a class="back" href="./">All past events</a></p>' +
      '<div class="detail">' +
        '<div class="detail-info"><section class="intro" style="padding-bottom:0">' +
          "<h1>" + esc(e.title) + "</h1>" +
          (e.theme ? '<p class="detail-theme">' + esc(e.theme) + "</p>" : "") +
          '<span class="rule" aria-hidden="true"></span></section>' +
          '<dl class="facts">' + facts + "</dl>" +
          (e.summary ? '<p class="detail-summary">' + esc(e.summary) + "</p>" : "") +
          '<div class="detail-actions">' +
            (flyer ? '<a class="btn" href="' + esc(flyer) + '" target="_blank" rel="noopener">Open full-size flyer</a>' +
                     '<a class="btn" href="' + esc(flyer) + '" download>Download flyer</a>' : "") +
            (e.url ? '<a class="btn" href="' + esc(e.url) + '">Event website</a>' : "") +
          "</div></div>" +
        (flyer ? '<figure class="flyer"><a href="' + esc(flyer) + '" target="_blank" rel="noopener" aria-label="Open the flyer at full size">' +
          '<img src="' + esc(flyer) + '" alt="' + esc(e.flyerAlt || ("Flyer of the " + e.title)) + '"></a>' +
          "<figcaption>Select the flyer to open it at full size.</figcaption></figure>" : "") +
      "</div>";
  }
})();

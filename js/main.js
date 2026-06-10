// FAQ accordion
const faqs = [
  ["What exactly does BadgeFor.Me do?","We collect your physical work badge, drive it to your office, and scan it. No fake activity, no digital manipulation, no Slack messages typed by robots. Just a certified human performing a single, compliant beep on your behalf."],
  ["Do I need to be home when you pick up my badge?","No. Leave your badge in a secure, pre-agreed location. Our Attendance Engineers are trained in discreet retrieval, including mailbox extraction, porch pickup, and the classic \"under the mat\" maneuver."],
  ["Who are your Attendance Engineers?","Elite professionals trained in badge handling, traffic navigation, and maintaining plausible professionalism at all times. They are the backbone of our operation and the heroes your RTO mandate never deserved."],
  ["How do you decide when to scan my badge?","PresenceGPT™ and BadgeScanAI™ analyze building access patterns, historical scan times, and traffic data to select a natural, human-like arrival window. No two scans are identical. Just like real attendance."],
  ["Do you scan into multiple buildings?","Occasionally, yes. Our AI may select a different building within your campus to maintain realistic variability. This is intentional. This is science. This is fine."],
  ["Do you simulate work activity?","<b>No.</b> We do not send Slack messages, generate keystrokes, fake mouse movement, manipulate dashboards, or fabricate presence data. We scan a badge. That’s the whole product."],
  ["Is this legal?","We operate strictly within the boundaries of satire and conceptual art. We never impersonate you digitally or access your employer’s systems. We scan a badge. A badge that beeps. A beep that means nothing more than “a badge was scanned.”"],
  ["What if my employer asks why I wasn’t physically present?","Respond with confidence and strategic ambiguity. Suggested responses include:<ul><li>“Interesting.”</li><li>“What makes you say that.”</li><li>“I was in the building you weren’t in.”</li><li>“Have you considered the metaphysics of presence.”</li></ul>"],
  ["What happens if my badge is lost or damaged?","We will return a badge-shaped object to you. It may or may not be your original badge. It will definitely be badge-shaped."],
  ["Can I cancel anytime?","Yes. Notify us and we will return your badge to its natural habitat."],
  ["Do you offer corporate plans?","We are exploring enterprise solutions for teams and departments who wish to appear present in unison. This is known internally as “The Green Wall.”"],
  ["Is this… satire?","<b>Yes.</b> BadgeFor.Me is a satirical project parodying corporate attendance culture, presenteeism, and the theatre of return-to-office mandates. No actual badge scanning services are provided. No fraud is committed. Only jokes are made."]
];

const plusIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 6v12M6 12h12"/></svg>';

document.addEventListener('DOMContentLoaded', function () {
  // Build FAQ list
  const list = document.getElementById('faqList');
  if (list) {
    list.innerHTML = faqs.map(([q, a]) => `
      <details class="qa">
        <summary style="list-style:none">
          <button type="button" onclick="event.preventDefault();this.closest('details').open=!this.closest('details').open;syncFaq()">
            <span>${q}</span><span class="ic">${plusIcon}</span>
          </button>
        </summary>
        <div class="ans"><div class="ans-in">${a}</div></div>
      </details>`).join('');

    // Open first item by default
    const first = list.querySelector('.qa');
    if (first) { first.open = true; syncFaq(); }
    window.addEventListener('resize', syncFaq);

    // FAQPage structured data, mirrored from the same source as the accordion
    const faqSchema = document.createElement('script');
    faqSchema.type = 'application/ld+json';
    faqSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text }
      }))
    });
    document.head.appendChild(faqSchema);
  }

  // Pricing toggle
  const tgl = document.getElementById('billToggle');
  if (tgl) {
    const knob = document.getElementById('knob');
    const btns = [...tgl.querySelectorAll('button')];

    function setMode(mode) {
      btns.forEach(b => b.classList.toggle('on', b.dataset.mode === mode));
      const active = tgl.querySelector('button.on');
      knob.style.left = active.offsetLeft + 'px';
      knob.style.width = active.offsetWidth + 'px';
      document.querySelectorAll('.plan .amt').forEach(e => e.textContent = e.dataset[mode === 'weekly' ? 'w' : 'a']);
      document.querySelectorAll('.plan .per').forEach(e => e.textContent = e.dataset[mode === 'weekly' ? 'w' : 'a']);
    }

    btns.forEach(b => b.addEventListener('click', () => setMode(b.dataset.mode)));
    requestAnimationFrame(() => setMode('weekly'));
  }

  // Scroll reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Safety: ensure content is never left hidden (exports / stalled observers)
  window.addEventListener('load', () =>
    setTimeout(() => document.querySelectorAll('.reveal:not(.in)').forEach(e => e.classList.add('in')), 2400)
  );
});

function syncFaq() {
  document.querySelectorAll('.qa').forEach(d => {
    const ans = d.querySelector('.ans');
    if (ans) ans.style.maxHeight = d.open ? ans.querySelector('.ans-in').scrollHeight + 'px' : '0px';
  });
}

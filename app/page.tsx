'use client';

import { FormEvent, useState } from 'react';

const basePath = '/jesusglorycentrethogoto';
const asset = (path: string) => `${basePath}${path}`;

const navigation = [
  ['About', '#about'],
  ['Gather', '#gather'],
  ['Ministries', '#ministries'],
  ['Media', '#media'],
  ['Events', '#events'],
];

const services = [
  { number: '01', title: 'Sunday worship', description: 'Every Sunday — 1st service 8:30 AM–10:00 AM; 2nd service 10:30 AM–1:00 PM.', time: 'EVERY SUNDAY · 8:30 AM–1:00 PM' },
  { number: '02', title: 'Midweek fellowship', description: 'Every Wednesday — Midweek service from 5:30 PM to 7:30 PM.', time: 'WEDNESDAY · 5:30 PM–7:30 PM' },
  { number: '03', title: 'Prayer gathering', description: 'Come together in prayer for one another and our community.', image: `${basePath}/jesus-glory-centre-prayer-gathering.png?v=2` },
  { number: '04', title: 'Bible study', description: 'Every Wednesday — Bible study service from 5:30 PM to 7:30 PM.', time: 'WEDNESDAY · 5:30 PM–7:30 PM', image: `${basePath}/jesus-glory-centre-bible-study.png` },
];

const ministries = [
  { symbol: '✳', title: 'Youth', description: 'Youth D-Time meets every Sunday from 10:30 AM to 11:30 AM.', image: `${basePath}/jesus-glory-centre-youth-dtime.png` },
  { symbol: '◌', title: 'Women', description: 'Encouragement, fellowship and spiritual growth for women.', image: `${basePath}/jesus-glory-centre-women-vision.png` },
  { symbol: '⌁', title: 'Men', description: 'Build one another up through faith, service and fellowship.', image: `${basePath}/jesus-glory-centre-men.png` },
  { symbol: '♡', title: 'Children', description: 'A caring place for children to discover the love of Jesus.', image: `${basePath}/jesus-glory-centre-children.jpg` },
  { symbol: '♫', title: 'Worship & praise', description: 'Use music and creativity to lead the church in worship.', image: `${basePath}/jesus-glory-centre-praise-worship.png` },
  { symbol: '↗', title: 'Outreach', description: 'Share hope and serve our neighbours with compassion.', image: `${basePath}/jesus-glory-centre-outreach.png` },
];

const events = [
  { type: 'CONFERENCE', title: 'Church conference', detail: 'Proposed gathering · Date to be confirmed' },
  { type: 'PRAYER DAY', title: 'Church prayer gathering', detail: 'Proposed gathering · Date to be confirmed' },
  { type: 'CELEBRATION', title: 'A church celebration', detail: 'Proposed gathering · Date to be confirmed' },
  { type: 'SPECIAL SERVICE', title: 'Special worship service', detail: 'Proposed gathering · Date to be confirmed' },
  { type: 'YOUNG PEOPLE', title: 'Youth fellowship', detail: 'Proposed gathering · Date to be confirmed' },
];

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Jesus+Glory+Centre+Ministries%2C+Thogoto%2C+Kenya';
const youtubeSearchUrl = 'https://www.youtube.com/results?search_query=Jesus+Glory+Centre+Ministries+Thogoto';
const facebookUrl = 'https://www.facebook.com/jgcmchurch';
const instagramUrl = 'https://www.instagram.com/jgcmchurch';

function BrandMark() {
  return (
    <span className="brand-mark">
      <img src={asset('/jesus-glory-centre-logo.png')} alt="" />
    </span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${formData.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`,
    );
    setFormStatus('Your email draft is ready. Please add the church’s confirmed email address before sending.');
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jesus Glory Centre Ministries home">
          <BrandMark />
          <span className="brand-copy">
            <strong>Jesus Glory Centre</strong>
            <span>MINISTRIES <i /> THOGOTO, KENYA</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="nav-give" href="#giving" onClick={() => setMenuOpen(false)}>Give <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-image" role="img" aria-label="A church congregation gathered in worship" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow"><span /> A CHURCH FAMILY IN THOGOTO, KENYA</p>
          <h1>Welcome to<br />Jesus Glory<br /><em>Centre Ministries.</em></h1>
          <p className="hero-intro">A place of faith, hope, love and transformation.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#gather">Join us this Sunday <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href="#media"><span className="play-icon" aria-hidden="true">▶</span> Watch our services</a>
          </div>
          <div className="hero-location"><span className="location-rule" /> THOGOTO <span>·</span> KIAMBU COUNTY, KENYA</div>
        </div>
        <a className="hero-scroll" href="#welcome"><span /> SCROLL TO EXPLORE</a>
        <div className="hero-index">01 <span /> 06</div>
      </section>

      <section className="welcome-section" id="welcome">
        <div className="section-overline"><span>01</span> A PLACE TO BELONG</div>
        <div className="welcome-content">
          <h2>There is a place<br />for you <em>here.</em></h2>
          <div className="welcome-message">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>Whether you are taking your first step in faith or looking for a church family, you are welcome. Come as you are; let us worship, grow and walk in hope together.</p>
            <div className="welcome-signoff"><span /> WITH LOVE, YOUR CHURCH FAMILY</div>
          </div>
        </div>
        <div className="welcome-bottom"><span>FAITH THAT GROWS</span><span>HOPE THAT HOLDS</span><span>LOVE THAT WELCOMES</span></div>
      </section>

      <section className="about-section" id="about">
        <div className="about-photo" role="img" aria-label="Sunlight shining through a church sanctuary" />
        <div className="about-copy">
          <div className="section-overline"><span>02</span> WHO WE ARE</div>
          <h2>Rooted in faith.<br />Open in <em>love.</em></h2>
          <p className="about-lead">A Pentecostal church in Thogoto, born in 1988 and growing in faith, fellowship and service.</p>
          <p>Jesus Glory Centre began as the Church of Restoration with five members. It secured its Thogoto land in 1992, became Jesus Glory Centre Ministries in 1999 and has grown to more than 50 churches. Our first sanctuary held 250 people; the current sanctuary is seated for 1,000 and was dedicated in 2008.</p>
          <div className="about-pillars">
            <article><span>OUR VISION</span><p>To be a dynamic, multicultural, Christlike church committed to the Great Commission and Great Commandment.</p></article>
            <article><span>OUR MISSION</span><p>To raise a church of excellence, serving God through worship and fellowship and reaching the world with the gospel.</p></article>
            <article><span>OUR CORE VALUES</span><p>Integrity, excellence, commitment, love and servanthood.</p></article>
          </div>
          <div className="pastor-welcome">
            <span>A NOTE FROM OUR BISHOP</span>
            <p>A personal welcome from our founder and presiding bishop will be shared here.</p>
            <strong>Geoffrey Gachie · Bishop</strong>
          </div>
          <div className="about-note">The church launched its Bible school in 2016, registered 17 first-year students and established its school of ministry to prepare believers for Christian service.</div>
        </div>
      </section>

      <section className="gather-section" id="gather">
        <div className="section-heading">
          <div><div className="section-overline"><span>03</span> COME WORSHIP WITH US</div><h2>Make room for<br /><em>what matters.</em></h2></div>
          <p>There is something special about gathering together. Find a place to worship, pray, learn and connect.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card${service.number === '01' ? ' sunday-service-card' : ''}`} key={service.number}>
              <span className="card-number">{service.number}</span>
              {service.number === '01'
                ? <img className="service-sunday-image" src={asset('/jesus-glory-centre-sunday-service.png')} alt="You are invited to Church Service every Sunday in Karibu" />
                : service.number === '02'
                  ? <img className="service-sunday-image" src={asset('/jesus-glory-centre-midweek-fellowship.png')} alt="Wednesday Midweek Service every week from 5:30 PM to 7:30 PM" />
                  : service.image
                    ? <img className={service.number === '04' ? 'service-poster-image' : 'service-sunday-image'} src={service.image} alt={service.number === '03' ? 'Church members gathered together in prayer' : 'Wednesday Bible Study service poster, 5:30 PM to 7:30 PM'} />
                    : <div className="service-icon" aria-hidden="true">{service.number === '03' ? '∿' : '✧'}</div>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-time"><span /> {service.time || 'DAY & TIME TO BE CONFIRMED'}</div>
            </article>
          ))}
        </div>
        <p className="schedule-note">Sunday worship times are confirmed. Please confirm midweek service details with the church before visiting.</p>
      </section>

      <section className="ministries-section" id="ministries">
        <div className="ministry-photo" role="img" aria-label="Friends sharing a joyful moment together at church" />
        <div className="ministry-content">
          <div className="section-overline"><span>04</span> GROW TOGETHER</div>
          <h2>Find your place<br />in the <em>family.</em></h2>
          <p className="ministry-intro">Every generation has a place to belong, serve and grow in faith.</p>
          <div className="ministry-grid">
            {ministries.map((ministry) => (
              <article className="ministry-card" key={ministry.title}>
                <span className="ministry-symbol" aria-hidden="true">{ministry.symbol}</span>
                <div>
                  <h3>{ministry.title}</h3>
                  <p>{ministry.description}</p>
                  {ministry.image && <img className="ministry-card-image" src={ministry.image} alt={ministry.title === 'Children' ? 'Children and families gathered at a church event' : ministry.title === 'Men' ? 'Men worshipping together during a church service' : `${ministry.title} ministry graphic`} />}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="media-section" id="media">
        <div className="media-top">
          <div><div className="section-overline"><span>05</span> WATCH · LISTEN · REMEMBER</div><h2>Faith for the<br /><em>everyday.</em></h2></div>
          <p>Revisit a moment of worship or discover a message to carry with you. New church recordings will be added when available.</p>
        </div>
        <a className="media-feature" href={youtubeSearchUrl} target="_blank" rel="noreferrer">
          <div className="media-feature-photo" role="img" aria-label="A worship service with raised hands" />
          <span className="media-play" aria-hidden="true">▶</span>
          <div className="media-feature-copy"><span>VIDEO SERMONS &amp; WORSHIP</span><strong>Watch on YouTube</strong><small>Explore videos associated with Jesus Glory Centre Ministries <span aria-hidden="true">↗</span></small></div>
        </a>
        <div className="media-links">
          <a href={youtubeSearchUrl} target="_blank" rel="noreferrer"><span className="media-link-icon">♫</span><span><strong>Audio messages</strong><small>Listen when recordings are available</small></span><b aria-hidden="true">↗</b></a>
          <a href={youtubeSearchUrl} target="_blank" rel="noreferrer"><span className="media-link-icon">▧</span><span><strong>Church moments</strong><small>Visit YouTube to explore church videos</small></span><b aria-hidden="true">↗</b></a>
        </div>
        <p className="media-note">Media links open a YouTube search; official channel and recording links can be added here when confirmed.</p>
      </section>

      <section className="events-section" id="events">
        <div className="events-heading">
          <div><div className="section-overline"><span>06</span> LIFE AT THE CENTRE</div><h2>Make a little<br /><em>more room.</em></h2></div>
          <p>There is always room to come together. Dates and details will be shared here once confirmed.</p>
        </div>
        <div className="event-list">
          {events.map((event, index) => (
            <article className="event-row" key={event.type}>
              <span className="event-index">0{index + 1}</span><span className="event-type">{event.type}</span><h3>{event.title}</h3><span className="event-detail">{event.detail}</span><span className="event-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <p className="events-note">These are editable event placeholders, not confirmed church announcements.</p>
      </section>

      <section className="giving-section" id="giving">
        <div className="giving-copy">
          <div className="section-overline"><span>GIVING</span> A HEART OF GENEROSITY</div>
          <h2>Give with<br /><em>a grateful heart.</em></h2>
          <p>Your generosity helps support the life and work of the church. Please use only payment details officially confirmed by the ministry.</p>
          <div className="giving-categories"><span>Tithe</span><span>Offering</span><span>Thanksgiving</span><span>Prophetic seed</span></div>
        </div>
        <div className="giving-card">
          <div className="mpesa-mark"><span>M</span> PESA</div>
          <h3>Give through M-PESA</h3>
          <p>Use the church’s official Paybill and account details below.</p>
          <div className="payment-placeholder"><span>OFFICIAL PAYBILL</span><strong>247247</strong><span>ACCOUNT NUMBER</span><strong>543943</strong></div>
          <ol><li>Open M-PESA and choose <strong>Lipa na M-PESA.</strong></li><li>Select Paybill or Buy Goods using confirmed church details.</li><li>Check the recipient carefully before you confirm.</li></ol>
          <div className="giving-details">
            <span>WORLD REMIT</span>
            <a href="tel:+254720966975">+254-720-966-975</a>
          </div>
          <div className="giving-warning">Thank you for joining us. God bless you!</div>
        </div>
      </section>

      <section className="visit-section" id="contact">
        <div className="visit-heading">
          <div className="section-overline"><span>COME AS YOU ARE</span></div>
          <h2>We’d love to<br />welcome <em>you.</em></h2>
          <p>Find us in Thogoto, Kenya. Get in touch before your visit for directions, service times or any questions.</p>
          <a className="button button-gold" href={mapUrl} target="_blank" rel="noreferrer">Find us in Thogoto <span aria-hidden="true">↗</span></a>
          <a className="whatsapp-link" href="https://wa.me/254729894933?text=Hello%2C%20I%27d%20like%20to%20request%20prayer%20from%20Jesus%20Glory%20Centre%20Ministries." target="_blank" rel="noreferrer">Continue in WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-panel">
          <div className="contact-address">
            <span>OUR LOCATION</span><strong>Thogoto, Kenya</strong><a href={mapUrl} target="_blank" rel="noreferrer">Open Google Maps <span aria-hidden="true">↗</span></a>
            <iframe
              className="map-frame"
              title="Map showing Thogoto, Kenya"
              src="https://maps.google.com/maps?q=Thogoto%2C%20Kenya&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-divider" />
            <span>PRAYER LINE</span><a className="contact-phone" href="tel:+254729894933">+254-729-894-933</a>
            <div className="contact-divider" />
            <span>WORLD REMIT</span><a className="contact-phone" href="tel:+254720966975">+254-720-966-975</a>
            <div className="contact-divider" />
            <span>MEDIA &amp; PRIVACY</span><small>Livestreamed and photographed. By attending, you consent to your image being shared for our gospel media.</small>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-form-title"><strong>Send us a message</strong><span>YOUR EMAIL APP WILL OPEN</span></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="How should we address you?" required maxLength={100} />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} />
            <label htmlFor="contact-message">Your message</label>
            <textarea id="contact-message" name="message" rows={3} placeholder="How can we help?" required maxLength={2000} />
            <button className="button button-gold contact-submit" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
            <p className="form-note" aria-live="polite">{formStatus || 'This opens a draft in your email app; your message is not sent to a server.'}</p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><BrandMark /><span className="brand-copy"><strong>Jesus Glory Centre</strong><span>MINISTRIES <i /> THOGOTO, KENYA</span></span></a>
        <p>A place of faith, hope, love and transformation.</p>
        <nav aria-label="Footer navigation"><a href="#about">About</a><a href="#gather">Gather</a><a href="#giving">Giving</a><a href="#contact">Contact</a></nav>
        <nav className="footer-social" aria-label="Social media links"><a href={facebookUrl} target="_blank" rel="noreferrer">Facebook · @jgcmchurch ↗</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram · @jgcmchurch ↗</a><a href={youtubeSearchUrl} target="_blank" rel="noreferrer">Search YouTube ↗</a></nav>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}

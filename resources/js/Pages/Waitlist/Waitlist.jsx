import React, { useState, useEffect } from "react";

const COUNTRIES = [
  "Australia", "United Kingdom", "United States", "Canada",
  "Germany", "France", "Netherlands", "Singapore", "Philippines", "Other",
];

const Waitlist = () => {
  const [form, setForm] = useState({
    name: "", email: "", bizname: "", country: "", website: "", budget: "",
  });
  const [focused, setFocused] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [spotNum, setSpotNum] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [btnError, setBtnError] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fieldStyle = (name) => ({
    background: focused === name ? "rgba(138,110,255,0.06)" : "rgba(255,255,255,0.04)",
    border: `1px solid ${focused === name ? "rgba(138,110,255,0.55)" : "rgba(138,110,255,0.18)"}`,
    boxShadow: focused === name ? "0 0 0 3px rgba(138,110,255,0.1)" : "none",
    borderRadius: 10,
    padding: "13px 16px",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    color: "#fff",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, bizname, country, budget } = form;

    if (!name || !email || !bizname || !country || !budget) {
      setBtnError(true);
      setTimeout(() => setBtnError(false), 2000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/applications", { // ✅ use ApplicationController
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,

          // ✅ rename bizname → company
          company: form.bizname,

          website: form.website || null,

          // ✅ map country → industry
          industry: form.country,

          // ✅ required fields (add defaults)
          challenge: "Submitted via waitlist form.",
          timeline: "Within 1-2 months",
          hear_about: "Website Waitlist",
          referrer: null,

          budget: form.budget,
          source: "waitlist"
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error(data);
      }

    } catch (err) {
      console.error("Application submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#07060f", color: "rgba(255,255,255,0.88)", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden" }}>

      {/* Background blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-30%", left: "-20%",
          width: "80vw", height: "80vw", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(90,55,220,0.22) 0%, transparent 65%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-20%", right: "-15%",
          width: "70vw", height: "70vw", borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(138,110,255,0.14) 0%, transparent 65%)",
        }} />
      </div>

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 24px", maxWidth: 780, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/Assets/logo.png" alt="Vibe Hive Logo" style={{ width: "auto", height: 40 }} />
        </div>
        <div style={{
          fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "#f0c040", background: "rgba(240,192,64,0.1)", border: "1px solid rgba(240,192,64,0.25)",
          padding: "5px 12px", borderRadius: 100,
        }}>
          Limited Spots
        </div>
      </nav>

      {/* Main wrapper */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto", padding: "0 24px 80px" }}>

        {/* Hero */}
        <section style={{ padding: "52px 0 40px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a78bff", marginBottom: 20 }}>
            <div style={{ width: 28, height: 1, background: "#a78bff" }} />
            Premium Web Package — Waitlist
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 6vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20 }}>
            Your website should be{" "}
            <span style={{ background: "linear-gradient(135deg, #a78bff 0%, #c4b0ff 50%, #f0c040 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
               your best salesperson.
            </span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: 520, lineHeight: 1.7, marginBottom: 32 }}>
            We build <strong style={{ color: "rgba(255,255,255,0.82)", fontWeight: 500 }}>Scalable Digital Foundation Systems</strong> — not just websites.
            Design, development, and SEO built as one integrated system that attracts, converts, and compounds.
          </p>
        </section>

        {/* Stats */}
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap", marginBottom: 48, alignItems: "center", justifyContent: "center" }}>
          {[
            { num: "$8K+", label: "Starting investment" },
            null,
            { num: "10", label: "Pages fully designed & built" },
            null,
            { num: "3-in-1", label: "UX · Dev · SEO as a system" },
          ].map((item, i) =>
            item === null ? (
              <div key={i} style={{ width: 1, height: 32, background: "rgba(138,110,255,0.15)" }} />
            ) : (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "#fff" }}>{item.num}</div>
                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.3, maxWidth: 80 }}>{item.label}</div>
              </div>
            )
          )}
        </div>

        {/* Form card */}
        <div style={{
          background: "#1a1735",
          border: "1px solid rgba(138,110,255,0.15)",
          borderRadius: 24,
          padding: 40,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Top shimmer line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(138,110,255,0.6), transparent)" }} />

          {!submitted ? (
            <>
              <div style={{ marginBottom: 32 }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>Reserve your spot</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.38)" }}>We review every application. Only serious brands need apply.</div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>

                  {/* Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Your Name</label>
                    <input
                      type="text" name="name" placeholder="Alex Rivera"
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      style={fieldStyle("name")}
                    />
                  </div>

                  {/* Email */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Email Address</label>
                    <input
                      type="email" name="email" placeholder="alex@company.com"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      style={fieldStyle("email")}
                    />
                  </div>

                  {/* Business Name */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Business Name</label>
                    <input
                      type="text" name="bizname" placeholder="Acme Corp"
                      value={form.bizname} onChange={handleChange}
                      onFocus={() => setFocused("bizname")} onBlur={() => setFocused(null)}
                      style={fieldStyle("bizname")}
                    />
                  </div>

                  {/* Country */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Country</label>
                    <select
                      name="country"
                      value={form.country} onChange={handleChange}
                      onFocus={() => setFocused("country")} onBlur={() => setFocused(null)}
                      style={{
                        ...fieldStyle("country"),
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: 40,
                        cursor: "pointer",
                        appearance: "none",
                      }}
                    >
                      <option value="" disabled>Select country</option>
                      {COUNTRIES.map((c) => <option key={c} style={{ background: "#1a1735" }}>{c}</option>)}
                    </select>
                  </div>

                  {/* Website — full width */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7, gridColumn: "1 / -1" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Current Website URL</label>
                    <input
                      type="url" name="website" placeholder="https://yourwebsite.com (or 'none')"
                      value={form.website} onChange={handleChange}
                      onFocus={() => setFocused("website")} onBlur={() => setFocused(null)}
                      style={fieldStyle("website")}
                    />
                  </div>

                  {/* Budget — full width */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 7, gridColumn: "1 / -1" }}>
                    <label style={{ fontSize: "0.78rem", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Project Budget</label>
                    <select
                      name="budget"
                      value={form.budget} onChange={handleChange}
                      onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)}
                      style={{
                        ...fieldStyle("budget"),
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.3)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                        paddingRight: 40,
                        cursor: "pointer",
                        appearance: "none",
                      }}
                    >
                      <option value="" disabled>Select your budget range</option>
                      {["Under $2,700 USD", "$2,700 - $4,500 USD", "$4,500 - $7,200 USD", "$7,200+ USD", "Not sure yet"].map((b) => (
                        <option key={b} style={{ background: "#1a1735" }}>{b}</option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Submit button */}
                <div style={{ marginTop: 24 }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "100%",
                      padding: "16px 24px",
                      background: btnError
                        ? "linear-gradient(135deg, #7c3a3a, #a05050)"
                        : "linear-gradient(135deg, #6b48ff 0%, #8a6eff 60%, #a78bff 100%)",
                      border: "none",
                      borderRadius: 12,
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.75 : 1,
                      transition: "transform 0.18s, box-shadow 0.18s, background 0.3s",
                      boxShadow: "0 4px 24px rgba(107,72,255,0.35)",
                    }}
                  >
                    {isSubmitting ? "Securing your spot..." : btnError ? "Please fill all required fields" : "Join the Waitlist →"}
                  </button>
                  <div style={{ textAlign: "center", fontSize: "0.76rem", color: "rgba(255,255,255,0.3)", marginTop: 12 }}>
                    No spam. No cold pitches. Just a personal reply from our team.
                  </div>
                </div>

                {/* Perks */}
                <div style={{ marginTop: 36, paddingTop: 28, borderTop: "1px solid rgba(138,110,255,0.15)", display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { icon: "⚡", title: "Priority access", desc: "Waitlist members get first look before we open publicly." },
                    { icon: "🎯", title: "Free strategy audit", desc: "Every approved application gets a complimentary site & positioning review." },
                    { icon: "🔒", title: "Locked pricing", desc: "Waitlist rate is protected. Price increases once spots fill." },
                  ].map((perk) => (
                    <div key={perk.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ width: 30, height: 30, flexShrink: 0, background: "rgba(138,110,255,0.12)", border: "1px solid rgba(138,110,255,0.2)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem" }}>
                        {perk.icon}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
                        <strong style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>{perk.title}</strong> — {perk.desc}
                      </div>
                    </div>
                  ))}
                </div>

              </form>
            </>
          ) : (

            /* Success state */
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px 0 10px", gap: 16 }}>
              <div style={{ width: 64, height: 64, background: "linear-gradient(135deg, rgba(107,72,255,0.3), rgba(138,110,255,0.15))", border: "1px solid rgba(138,110,255,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem" }}>
                ✦
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.35rem", fontWeight: 700, color: "#fff" }}>
                You're on the list.
              </div>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.38)", maxWidth: 320, lineHeight: 1.6 }}>
                We'll review your application and reach out personally within 48 hours. Only serious brands. No fluff.
              </p>
              {spotNum && (
                <div style={{ fontSize: "0.8rem", color: "#a78bff", background: "rgba(138,110,255,0.1)", border: "1px solid rgba(138,110,255,0.2)", padding: "8px 18px", borderRadius: 100, fontWeight: 500 }}>
                  You're #{spotNum} on the list
                </div>
              )}
            </div>

          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 24, fontSize: "0.75rem", color: "rgba(255,255,255,0.18)" }}>
        © 2025 Vibe Hive Digital Services · Where big ideas find their digital vibe.
      </div>

    </div>
  );
};

export default Waitlist;
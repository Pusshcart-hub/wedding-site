import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro_2({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);

    const audio = new Audio("/test.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(() => {});
    window.bgMusic = audio;

    setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "100vh",
        background: "#541c25",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        overflow: "hidden",
        cursor: clicked ? "default" : "pointer",
      }}
      onClick={handleClick}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Great+Vibes&display=swap');
        .placeholder {
          background: rgba(255,255,255,0.08);
          border: 1.5px dashed rgba(255,255,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.4);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .collage {
          position: relative;
          width: min(680px, 88vw);
          aspect-ratio: 480 / 660;
          overflow: hidden;
        }
        .collage * { box-sizing: border-box; }
      `}</style>

      {/* Tap to enter hint — fades out after click */}
      <motion.p
        animate={{ opacity: clicked ? 0 : 1 }}
        transition={{ delay: clicked ? 0 : 1.2, duration: 0.8 }}
        style={{
          position: "fixed",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          margin: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        tap to enter
      </motion.p>

      <div className="collage">

        {/* 1. COUPLE PHOTO — top right, landscape */}
        <div style={{
          position: "absolute",
          top: "0%", right: "0%",
          width: "62%", height: "30%",
          zIndex: 2,
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(40,0,10,0.2)",
        }}>
          <img src="/intro_coupleImg.jpg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* 2. PINK ENVELOPE CARD — left, portrait */}
        <div style={{
          position: "absolute",
          top: "15%", left: "0%",
          width: "44%", height: "40%",
          background: "#e8c0c6",
          borderRadius: "1%",
          padding: "5% 5% 8%",
          zIndex: 4,
          boxShadow: "0 6px 28px rgba(40,0,10,0.35)",
        }}>
          <div style={{ display: "flex", gap: "3%", justifyContent: "flex-end", marginBottom: "6%" }}>
            <div className="placeholder" style={{ width: "30%", aspectRatio: "5/6", borderRadius: 2, flexShrink: 0 }}>stamp</div>
            <div className="placeholder" style={{ width: "30%", aspectRatio: "5/6", borderRadius: 2, flexShrink: 0 }}>stamp</div>
          </div>
          <p style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(20px, 5vw, 38px)",
            color: "#4a1020", margin: 0, lineHeight: 1.2,
          }}>Dear Guests</p>
        </div>

        {/* 3. CALLA LILY — between top cards */}
        <div style={{
          position: "absolute",
          top: "21.7%", right: "26%",
          width: "21%", height: "27%",
          zIndex: 5,
          transform: "rotate(90deg)",
          transformOrigin: "right center",
        }}>
          <img src="/calla-lily5.png" style={{ width: "100%", height: "100%", objectFit: "contain" }} alt="calla lily" />
        </div>

        {/* ── ENVELOPE GROUP: full + card + flap locked together ── */}
        <div style={{
          position: "absolute",
          top: "40%", right: "0%",
          width: "68%", height: "62%",
        }}>

          {/* 4. PINK ENVELOPE FULL — bottom layer */}
          <div style={{
            position: "absolute",
            top: "0%", left: "0%",
            width: "72%", height: "88%",
            zIndex: 5, overflow: "hidden",
          }}>
            <img
              src="/intro_envelopeFull5.png"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              alt="envelope"
            />
          </div>

          {/* 5. SAVE-THE-DATE CARD — middle layer */}
          <div style={{
            position: "absolute",
            top: "-10%", right: "0%",
            width: "72%", height: "88%",
            zIndex: 6,
            borderRadius: "1%",
            boxShadow: "0 6px 28px rgba(40,0,10,0.35)",
            overflow: "hidden",
          }}>
            <img
              src="/intro_savetheDate.jpg"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              alt=""
            />
            <div style={{ position: "absolute", inset: 0, background: "rgba(80, 10, 20, 0.45)" }} />
            <div style={{ position: "relative", zIndex: 1, padding: "6% 5% 7%" }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(14px, 3.5vw, 26px)",
                fontWeight: 700, letterSpacing: "0.08em",
                color: "#fff", textTransform: "uppercase",
                textAlign: "center", margin: "0 0 1%",
              }}>
                JOANNA{" "}
                <span style={{ fontStyle: "italic", fontWeight: 400, fontSize: "clamp(11px, 2.8vw, 20px)", textTransform: "none" }}>and</span>
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(14px, 3.5vw, 26px)",
                fontWeight: 700, letterSpacing: "0.08em",
                color: "#fff", textTransform: "uppercase",
                textAlign: "center", margin: "0 0 5%",
              }}>VICENNT</p>

              <div style={{ textAlign: "center", marginBottom: "4%" }}>
                <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(12px, 2.5vw, 20px)", color: "rgba(255,255,255,0.9)", margin: "0 0 2px" }}>to wed</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(13px, 3vw, 24px)", fontWeight: 700, fontStyle: "italic", color: "#fff", margin: 0, letterSpacing: "0.04em" }}>10.17.26</p>
              </div>

              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(7px, 1.2vw, 11px)",
                fontWeight: 600, letterSpacing: "0.28em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.8)",
                textAlign: "center", margin: 0,
              }}>Save Our Date</p>
            </div>
          </div>

          {/* 6. ENVELOPE FLAP — top layer, animates open on click */}
          <motion.div
            style={{
              position: "absolute",
              top: "-6%", left: "0%",
              width: "81%", height: "100%",
              zIndex: 7,
              pointerEvents: "none",
              transformOrigin: "left center",
            }}
            animate={clicked ? { rotateY: 180, opacity: 0 } : { rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src="/intro_envelopeFlap11.png"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
              alt="envelope flap"
            />
          </motion.div>

        </div>
        {/* ── END ENVELOPE GROUP ── */}

        {/* 7. MONOGRAM CARD — bottom left */}
        <div style={{
          position: "absolute",
          top: "65%", left: "2%",
          width: "27%", aspectRatio: "3/4",
          background: "#7c1d2e",
          borderRadius: "2%",
          zIndex: 5,
          boxShadow: "0 4px 16px rgba(40,0,10,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div className="placeholder" style={{ width: "100%", height: "100%", borderRadius: "2%" }}>
            S N monogram
          </div>
        </div>

      </div>
    </motion.div>
  );
}
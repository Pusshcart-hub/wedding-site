import { motion } from "framer-motion";
import { useState } from "react";
import Typography from "./Typography";

export default function Intro_2({ onEnter }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);

    const audio = new Audio("/intro.mp3");
    audio.loop = true;
    audio.volume = 0.2;
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
        <Typography as="p" variant="subcontext" className="!font-bold">TAP THE SEAL TO ENTER</Typography>
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
          padding: "0% 5% 8%",
          zIndex: 4,
          boxShadow: "0 6px 28px rgba(40,0,10,0.35)",
        }}>
          <div style={{ display: "flex", gap: "3%", justifyContent: "flex-end", marginBottom: "2%" }}>
            <img
    src="/introToken.png"
    alt="Postage stamp"
    style={{ width: "30%", aspectRatio: "4/6", borderRadius: 2, flexShrink: 0, objectFit: "contain" }}
  />
             </div>
          <Typography as="p" variant="sectionTitle" className="!text-[clamp(16px,4vw,35px)] !leading-tight text-burgundy mb-1">A warm </Typography>
<Typography as="p" variant="sectionTitle" className="!text-[clamp(16px,4vw,30px)] !leading-tight text-burgundy mb-1">welcome to our</Typography> 
<Typography as="p" variant="sectionTitle" className="!text-[clamp(16px,4vw,35px)] !leading-tight text-burgundy">dearest guests</Typography>
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
              src="/intro_envelopeFull9.png"
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
            <div style={{ position: "relative", zIndex: 1, padding: "6% 5% 7%", height: "100%" }}>

              {/* ── NAMES using Typography ── */}
              <Typography as="p" variant="sectionTitle" className="!text-[clamp(14px,3.5vw,26px)] text-white text-center mb-1 mt-2 leading-none">
                Joanna     
              </Typography>
              <Typography as="p" variant="names" className="!text-[clamp(11px,2.8vw,20px)] text-white/80 text-center mb-1">
                and
              </Typography>
              <Typography as="p" variant="sectionTitle" className="!text-[clamp(14px,3.5vw,26px)] text-white text-center mb-3 leading-none">
                Vincent
              </Typography>

              <Typography as="p" variant="subcontext" className="!text-cream !text-[clamp(7px,1.8vw,11px)] tracking-[0.4em] text-center mt-6">Save our date</Typography>

              <Typography as="p" variant="context" className="!text-cream !text-[clamp(7px,1.8vw,20px)] tracking-[0.3em] text-center italic">10.17.26</Typography>

              {/* Anchored to bottom of card, consistent across screen sizes */}
              <div style={{ position: "absolute", bottom: "8%", left: 0, right: 0, textAlign: "center" }}>
                <Typography as="p" variant="subcontext" className="!text-cream !text-[clamp(7px,1.8vw,11px)] tracking-[0.3em]">the beginning of our</Typography>
                <Typography as="p" variant="subcontext" className="!text-cream !text-[clamp(7px,1.8vw,11px)] tracking-[0.3em]">"happily ever after"</Typography>
              </div>

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
            
            animate={clicked ? { rotateY: 180 } : { rotateX: 0, opacity: 1 }}
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
          top: "60%", left: "2%",
          width: "27%", aspectRatio: "3/4",
          
          borderRadius: "2%",
          zIndex: 5,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <img
              src="/jv_mono.png"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              alt=""
            />
        </div>

      </div>
    </motion.div>
  );
}
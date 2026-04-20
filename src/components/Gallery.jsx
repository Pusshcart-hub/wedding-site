import { useState } from "react";

const photos = [
  { id: 1, src: "/gall1.jpg", alt: "Photo 1", tall: true },
  { id: 2, src: "/gall2.jpg", alt: "Photo 2", tall: false },
  { id: 3, src: "/gallery/photo3.jpg", alt: "Photo 3", tall: false },
  { id: 4, src: "/gallery/photo4.jpg", alt: "Photo 4", tall: false },
  { id: 5, src: "/gallery/photo5.jpg", alt: "Photo 5", tall: true },
  { id: 6, src: "/gallery/photo6.jpg", alt: "Photo 6", tall: false },
  { id: 7, src: "/gallery/photo7.jpg", alt: "Photo 7", tall: false },
  { id: 8, src: "/gallery/photo8.jpg", alt: "Photo 8", tall: false },
  { id: 9, src: "/gall9.jpg", alt: "Photo 9", tall: true },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" style={styles.section}>
      <p style={styles.eyebrow}>memories</p>
      <h2 style={styles.title}>Gallery</h2>

      <div style={styles.grid}>
        {photos.map((photo) => (
          <div
            key={photo.id}
            style={{
              ...styles.cell,
              gridRow: photo.tall ? "span 2" : "span 1",
            }}
            onClick={() => setLightbox(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              style={styles.img}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={styles.overlay} onClick={() => setLightbox(null)}>
          <button style={styles.closeBtn} onClick={() => setLightbox(null)}>✕</button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 40px",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: "8px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 400,
    fontFamily: "Georgia, serif",
    marginBottom: "32px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "280px",
    gap: "8px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  cell: {
    overflow: "hidden",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "#f0ece8",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    imageRendering: "auto",
    willChange: "transform",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    cursor: "pointer",
  },
  lightboxImg: {
    maxWidth: "90vw",
    maxHeight: "85vh",
    objectFit: "contain",
    borderRadius: "8px",
    cursor: "default",
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "28px",
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "24px",
    cursor: "pointer",
  },
};
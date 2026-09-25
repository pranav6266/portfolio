import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, AI/ML engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(120deg, #080d1a 0%, #0e1630 100%)",
          color: "#eef2ff",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 6, color: "#2dd4bf" }}>PRANAV C · AI/ML ENGINEER · BENGALURU</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 28, lineHeight: 1.05 }}>I build AI systems that ship.</div>
        <div style={{ fontSize: 32, marginTop: 32, color: "#a5b0cf" }}>
          RAG & AI agents · Java, Spring Boot, FastAPI & React
        </div>
      </div>
    ),
    size,
  );
}

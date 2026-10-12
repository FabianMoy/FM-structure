import { ImageResponse } from "next/og";

export const alt = "FM Structure: desarrollo web para negocios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 40, display: "flex" }}>FM Structure</div>
        <div style={{ fontSize: 76, lineHeight: 1.08, display: "flex", maxWidth: 900 }}>
          Tu negocio merece una presencia digital profesional.
        </div>
        <div style={{ width: 160, height: 10, background: "#22d3ee", borderRadius: 5, display: "flex" }} />
      </div>
    ),
    size,
  );
}

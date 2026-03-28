import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#020617",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
          borderRadius: 16,
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 32,
          fontWeight: 700,
          marginBottom: 40,
        }}
      >
        FM
      </div>
      <div
        style={{
          color: "white",
          fontSize: 56,
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: 24,
        }}
      >
        Desarrollo Web en Monterrey
      </div>
      <div
        style={{
          color: "#94a3b8",
          fontSize: 28,
        }}
      >
        FM Structure — Sitios rápidos, escalables y bien construidos.
      </div>
    </div>,
    {
      ...size,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
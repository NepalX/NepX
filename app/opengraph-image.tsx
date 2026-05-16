import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f7f1e5",
          color: "#20211d",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 76,
              height: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#20211d",
              color: "#fffaf0",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            NX
          </div>
          <div style={{ fontSize: 34, fontWeight: 800 }}>Nepal Innovate 2026</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ color: "#983827", fontSize: 30, fontWeight: 800 }}>
            Startup Hackathon for +2 Students
          </div>
          <div
            style={{
              maxWidth: 920,
              marginTop: 18,
              fontSize: 82,
              lineHeight: 0.96,
              fontWeight: 900,
            }}
          >
            Build the future of Nepal. One line at a time.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

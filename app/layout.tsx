import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Predict the Social Buzz | The Launchpad",
  description:
    "Simulate how your audience reacts to content with AI-driven synthetic audience testing inside The Launchpad."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

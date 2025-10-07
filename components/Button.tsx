"use client";

import type { ButtonHTMLAttributes } from "react";

export default function Button({ style, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={{
        border: "1px solid #ddd",
        background: "#fff",
        borderRadius: 8,
        padding: "8px 12px",
        cursor: "pointer",
        ...style,
      }}
      {...props}
    />
  );
}

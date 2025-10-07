export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ border: "1px solid #e5e7eb", borderRadius: 999, padding: "2px 8px", fontSize: 12 }}>
      {children}
    </span>
  );
}

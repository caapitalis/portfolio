export default function LoadingOverlay({ visible }) {
  return (
    <div className={`loading-overlay${visible ? " visible" : ""}`}>
      <div className="loading-shell">
        <div className="loading-spinner" />
        <p>Un instant, la page se prépare...</p>
      </div>
    </div>
  );
}

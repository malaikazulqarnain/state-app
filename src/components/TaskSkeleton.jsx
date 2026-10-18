export default function TaskSkeleton({ count = 5 }) {
  return (
    <ul>
      {Array.from({ length: count }).map((_, i) => (
        <li key={i} className="skeleton-row">
          <div className="skeleton skeleton-box" />
          <div className="skeleton skeleton-line" />
        </li>
      ))}
    </ul>
  );
}
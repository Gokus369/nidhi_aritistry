// Renders text as one span per character so each letter can be animated.
export default function SplitChars({ text }) {
  return [...text].map((c, i) =>
    c === " " ? " " : <span className="ch" key={i}>{c}</span>
  );
}

import Link from "next/link";
import { Fragment } from "react";

const LINK_PATTERN = /\[([^\]]+)\]\((\/[^)]+)\)/g;

/** Renders paragraph text with optional `[label](/path)` internal links. */
export function renderInternalLinks(text: string) {
  const parts: Array<string | JSX.Element> = [];
  let lastIndex = 0;
  const re = new RegExp(LINK_PATTERN, "g");
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    const index = match.index;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    parts.push(
      <Link key={`${index}-${match[2]}`} href={match[2]}>
        {match[1]}
      </Link>,
    );
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  if (parts.length === 0) return text;

  return parts.map((part, i) =>
    typeof part === "string" ? <Fragment key={i}>{part}</Fragment> : part,
  );
}

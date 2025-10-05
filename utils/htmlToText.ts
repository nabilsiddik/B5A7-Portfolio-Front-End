import { JSDOM } from "jsdom";

export function htmlToText(html: string, maxLength = 200) {
  if (!html) return "";

  const dom = new JSDOM(html);
  const text = dom.window.document.body.textContent || "";

  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}

import React from "react";
import { Image } from "./shared-styles";

export function scrollToTop() {
  setTimeout(
    () =>
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      }),
    0
  );
}

export function limitChars(max, str) {
  return str.length > max ? str.substring(0, max) + "..." : str;
}

export function embedImage(str) {
  return str.includes("lorempixel") ? <Image src={str} /> : str;
}

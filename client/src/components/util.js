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

export function limitChars(str, max = 50) {
  return str.length > max ? str.substring(0, max) + "..." : str;
}

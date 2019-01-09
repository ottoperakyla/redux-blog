import React from "react";
import { Image } from "./shared-styles";

export function scrollToTop() {
  const contentTop = document.querySelector("#content").offsetTop;
  setTimeout(
    () =>
      window.scrollTo({
        top: contentTop,
        left: 0,
        behavior: "smooth"
      }),
    0
  );
}

export function limitChars(str, max = 50) {
  return str.length > max ? str.substring(0, max) + "..." : str;
}

export function makeGradient() {
  return `-webkit-linear-gradient(
    left,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );`;
}

export function formatDate(d) {
  return new Date(d).toLocaleDateString();
}

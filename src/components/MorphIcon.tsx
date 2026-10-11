"use client";

// Wrapper local: morphicons/react no trae directiva "use client" y sus
// hooks rompen el prerender si se importa directo en un Server Component.
export { MorphIcon, type MorphHandle, type MorphIconProps } from "morphicons/react";

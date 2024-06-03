'use client'
import BackgroundVideo from "./components/BackgroundVideo";
import { BorderButton } from "./components/BorderButton";

export default function Home() {
  return (
    <>
    <BackgroundVideo />
      <BorderButton label="Lofi-Music"  />
      <BorderButton label="Spotify"/>

    </>
  );
}

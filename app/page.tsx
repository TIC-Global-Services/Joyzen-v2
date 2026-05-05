import Image from "next/image";
import Hero from '@/components/home/Hero'
import JoyzenReplace from '@/components/home/joyzenreplace'
import WhatYouGet from '@/components/home/whatyouget'
import Care from '@/components/home/care'

export default function Home() {
  return (
    <main>
      <Hero/>
      <JoyzenReplace/>
      <WhatYouGet/>
      <Care/>
    </main>
  );
}

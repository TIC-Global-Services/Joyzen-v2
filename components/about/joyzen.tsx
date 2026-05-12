"use client"
import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import conceltings from '@/assets/about/concelting.jpg'
import software from '@/assets/about/software.png'

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    type: 'card' as const,
    title: "Beyond Visits",
    description: "Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally.",
  },
  {
    type: 'card' as const,
    title: "Integrated Care",
    description: "Doctors, lifestyle, and emotional support, working together as one system.",
  },
  {
    type: 'image' as const,
    src: conceltings,
    alt: "Consulting",
  },
  {
    type: 'card' as const,
    title: "Focused on Root, Not Symptoms",
    description: "Hormones, lifestyle, fertility, long-term health, everything connected, everything managed.",
  },
  {
    type: 'image' as const,
    src: software,
    alt: "Software",
  },
  {
    type: 'card' as const,
    title: "Designed for Better Outcomes",
    description: "Not more visits. Not more confusion. Clear direction. Continuous support. Real results.",
  },
];

const DESKTOP_SLOT_CLASSES = [
  "md:col-start-1 md:row-start-1",
  "md:col-start-2 md:row-start-1",
  "md:col-start-3 md:row-start-1",
  "md:col-start-1 md:row-start-2",
  "md:col-start-2 md:row-start-2",
  "md:col-start-3 md:row-start-2",
] as const;

const Joyzen = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const cards = cardsRef.current.filter((card): card is HTMLDivElement => card !== null);

      gsap.set(logoRef.current, {
        scale: 0.94,
        opacity: 0,
      });

      const setCardsFromLogoOrigin = () => {
        const logoBounds = logoRef.current?.getBoundingClientRect();
        const stageBounds = stageRef.current?.getBoundingClientRect();

        const originX = logoBounds
          ? logoBounds.left + logoBounds.width / 2
          : stageBounds
            ? stageBounds.left + stageBounds.width / 2
            : window.innerWidth / 2;

        const originY = logoBounds
          ? logoBounds.top + logoBounds.height / 2
          : stageBounds
            ? stageBounds.top + stageBounds.height / 2
            : window.innerHeight / 2;

        cards.forEach((card) => {
          const cardBounds = card.getBoundingClientRect();
          const cardCenterX = cardBounds.left + cardBounds.width / 2;
          const cardCenterY = cardBounds.top + cardBounds.height / 2;

          gsap.set(card, {
            opacity: 0,
            scale: isMobile ? 0.78 : 0.72,
            filter: "blur(10px)",
            x: originX - cardCenterX,
            y: originY - cardCenterY,
          });
        });
      };

      setCardsFromLogoOrigin();

      // Magnetic Hover Physics
      const cleanups: (() => void)[] = [];
      if (!isMobile) {
        cards.forEach((card) => {
          gsap.set(card, { transformPerspective: 1000, rotateX: 0, rotateY: 0 });
          const xTo = gsap.quickTo(card, "rotateY", { ease: "power3.out", duration: 0.5 });
          const yTo = gsap.quickTo(card, "rotateX", { ease: "power3.out", duration: 0.5 });

          const onMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            xTo(rotateY);
            yTo(rotateX);
          };

          const onMouseLeave = () => {
            xTo(0);
            yTo(0);
          };

          card.addEventListener("mousemove", onMouseMove);
          card.addEventListener("mouseleave", onMouseLeave);

          cleanups.push(() => {
            card.removeEventListener("mousemove", onMouseMove);
            card.removeEventListener("mouseleave", onMouseLeave);
          });
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stageRef.current,
          scrub: true,
          invalidateOnRefresh: true,
          onRefreshInit: setCardsFromLogoOrigin,
        },
      });

      tl.to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "none",
          }
        )
        .fromTo(
          cards,
          {
            x: (i, target) => {
              const cardBounds = target.getBoundingClientRect();
              const cardCenterX = cardBounds.left + cardBounds.width / 2;
              const cardCenterY = cardBounds.top + cardBounds.height / 2;
              const logoBounds = logoRef.current?.getBoundingClientRect();
              const originX = logoBounds ? logoBounds.left + logoBounds.width / 2 : window.innerWidth / 2;
              const originY = logoBounds ? logoBounds.top + logoBounds.height / 2 : window.innerHeight / 2;
              return originX - cardCenterX;
            },
            y: (i, target) => {
              const cardBounds = target.getBoundingClientRect();
              const cardCenterY = cardBounds.top + cardBounds.height / 2;
              const logoBounds = logoRef.current?.getBoundingClientRect();
              const originY = logoBounds ? logoBounds.top + logoBounds.height / 2 : window.innerHeight / 2;
              return originY - cardCenterY;
            },
            opacity: 0,
            scale: isMobile ? 0.78 : 0.72,
            filter: "blur(10px)",
          },
          {
            x: 0,
            y: (i) => (isMobile ? i * 16 : 0),
            opacity: 1,
            scale: (i) => (isMobile ? 1 - i * 0.05 : 1),
            filter: "blur(0px)",
            duration: 1.05,
            stagger: 0.06,
            ease: "none",
          },
          "<+0.2"
        );

      if (isMobile) {
        cards.forEach((card, i) => {
          if (i < cards.length - 1) {
            tl.to(card, {
              y: -window.innerHeight * 0.65,
              opacity: 0,
              scale: 0.9,
              duration: 1.2,
              ease: "power2.inOut",
            });
            const remainingCards = cards.slice(i + 1);
            tl.to(
              remainingCards,
              {
                y: (j) => j * 16,
                scale: (j) => 1 - j * 0.05,
                duration: 1.2,
                ease: "power2.inOut",
              },
              "<"
            );
          }
        });
        tl.to({}, { duration: 0.5 });
      } else {
        tl.to({}, { duration: 0.8 });
      }

      return () => cleanups.forEach((fn) => fn());
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[350vh] md:h-[250vh] bg-white font-satoshi">
      <div ref={stageRef} className="flex h-[100vh] items-center w-full relative">
        
        {/* Background Soft Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none transform-gpu" style={{ transform: 'translateZ(0)' }}>
          <div className="absolute bottom-[15%] -left-[40%] md:left-[-50%] w-[80%] h-[40%] bg-[#b4def7] opacity-80 rounded-[100%] md:blur-[80px] md:block hidden" />
          <div className="absolute -bottom-[5%] -left-[40%] md:left-[-50%] w-[80%] h-[20%] bg-[#EF8F60] opacity-80 rounded-[100%] md:blur-[80px] md:block hidden" />
          <div className="absolute -bottom-[5%] -left-[40%] w-[80%] h-[40%] md:hidden block bg-[radial-gradient(circle,rgba(180,222,247,0.8)_0%,transparent_70%)]" />

          <div className="absolute bottom-[10%] right-[-40%] w-[70%] h-[30%] bg-[#f8e780] opacity-90 rounded-[100%] md:blur-[80px] md:block hidden" />
          <div className="absolute bottom-[30%] right-[-40%] w-[70%] h-[30%] bg-[#ddc4df] opacity-100 rounded-[100%] md:blur-[80px] md:block hidden" />
          <div className="absolute -bottom-[5%] -right-[30%] w-[70%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.5)_0%,transparent_70%)]" />

          <div className="absolute -bottom-[20%] right-[20%] md:right-[-20%] w-[100%] h-[40%] bg-[#EF8F60] opacity-100 rounded-[100%] md:blur-[140px] md:block hidden" />
          <div className="absolute -bottom-[20%] right-[20%] w-[80%] h-[30%] md:hidden block bg-[radial-gradient(circle,rgba(3,97,50,0.3)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 mx-auto flex h-[100svh] md:h-screen w-full max-w-[1280px] items-center px-4 sm:px-6 lg:px-14 justify-center overflow-hidden">
          
          <div ref={logoRef} className="absolute inset-0 z-20 flex justify-center items-center pointer-events-none">
            <div className="relative w-[150px] sm:w-[180px] md:w-[220px] h-[60px] sm:h-[80px] md:h-[100px]">
              <Image src="/orange_logo.svg" alt="Joyzen Logo" fill className="object-contain" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
            <div className="pointer-events-auto w-full px-4 sm:px-6 grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-[280px_280px] md:gap-4 lg:grid-rows-[300px_300px] lg:gap-5 xl:grid-cols-3 xl:grid-rows-[340px_340px] xl:gap-5 lg:px-0">
              {FEATURES.map((feature, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  style={{ zIndex: FEATURES.length - idx }}
                  className={`col-start-1 row-start-1 mx-auto w-full max-w-[24rem] md:mx-0 md:w-auto md:max-w-none shadow-xl h-[350px] sm:h-[380px] ${idx === 1 ? 'md:h-[220px] md:self-start lg:h-[250px] xl:h-[280px]' : idx === 4 ? 'md:h-[220px] md:self-end lg:h-[250px] xl:h-[280px]' : 'md:h-[280px] lg:h-[300px] xl:h-[340px]'} ${DESKTOP_SLOT_CLASSES[idx]} ${
                    feature.type === "card"
                      ? "group bg-white/40 backdrop-blur-md border border-[#EDEDED] rounded-xl sm:rounded-[1.5rem] md:rounded-[1.5rem] p-6 md:p-8 text-left flex flex-col justify-end transition-shadow duration-300 hover:shadow-2xl"
                      : "relative rounded-xl sm:rounded-[1.5rem] md:rounded-[1.5rem] overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
                  }`}
                >
                  {feature.type === "card" ? (
                    <>
                      <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-medium text-[#1A1A1A] mb-3 md:mb-4 leading-[1.1] tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base leading-[1.2] tracking-[-1px] font-normal">
                        {feature.description}
                      </p>
                    </>
                  ) : (
                    <Image
                      src={feature.src!}
                      alt={feature.alt!}
                      fill
                      className="object-cover"
                      sizes="(max-width: 767px) 80vw, 33vw"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
};

export default Joyzen;
import Image from 'next/image';

const LaunchingSoon = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/joyzenorange.png"
                    alt=""
                    fill
                    className="object-contain opacity-20 scale-75 select-none pointer-events-none"
                    priority
                />
            </div>
            <div className="flex flex-col items-center justify-center z-10 px-4 text-center py-20 w-full">
                <h2 className="text-[15vw] sm:text-[11vw] lg:text-[8.5vw] xl:text-[10rem] leading-[1.05] font-sans font-medium tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b  from-[#e5e0e0] via-[#ef8f60] to-[#f8e780] pb-1 select-none">
                    <span className="block sm:inline">COMING</span>{' '}
                    <span className="block sm:inline">SOON</span>
                </h2>
            </div>
        </section>
    )
}

export default LaunchingSoon;
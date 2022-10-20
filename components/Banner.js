import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src="https://links.papareact.com/0fm" alt="image-banner" layout="fill" objectFit="cover" />

            <div className="absolute w-full text-center top-28 sm:top-36 md:top-40 xl:top-64 2xl:top-80">
                <p className="text-sm font-bold text-gray-600 sm:text-lg">Not sure where to go? Perfect.</p>
                <button className="py-3 mt-2 font-bold text-red-400 transition duration-200 bg-white rounded-full shadow-md px-7 md:px-10 md:py-4 sm:text-lg hover:shadow-lg active:scale-90">
                    I&apos;m flexible
                </button>
            </div>
        </div>
    );
}

import Image from 'next/image';

export default function SmallCard({ img, distance, location }) {
    return (
        <div className="flex items-center gap-4 rounded-lg cursor-pointer transition transform hover:bg-gray-100 hover:scale-105 duration-200 ease-out">
            <div className="relative w-16 h-16">
                <Image src={img} alt={location} layout="fill" className="rounded-lg" />
            </div>

            <div className="">
                <h2 className="font-semibold">{location}</h2>
                <h3 className="text-sm text-gray-600">{distance}</h3>
            </div>
        </div>
    );
}

import Image from 'next/image';

export default function MediumCard({ img, title }) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative w-80 h-80">
                <Image src={img} alt={title} layout="fill" className="rounded-xl" />
            </div>
            <h3 className="text-xl mt-2 font-medium text-gray-800">{title}</h3>
        </div>
    );
}

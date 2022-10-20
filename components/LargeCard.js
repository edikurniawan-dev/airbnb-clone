import Image from 'next/image';

export default function LargeCard({ img, title, description, buttonText }) {
    return (
        <div className="relative py-16">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-2xl" />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64 font-medium">{title}</h3>
                <p className="font-medium">{description}</p>

                <button className="text-sm font-medium text-white bg-gray-900 rounded-lg mt-5 py-2 px-4">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

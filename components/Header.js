import Image from 'next/image';

import { MagnifyingGlassIcon, GlobeAltIcon, Bars3Icon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-2 px-5 py-4 bg-white shadow-md sm:grid-cols-3 md:py-5 md:px-10">
            {/* left */}
            <div className="relative flex h-10 my-auto cursor-pointer itmes-center">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    alt="logo-airbnb"
                />
            </div>

            {/* middle */}
            <div className="items-center justify-between hidden py-2 border rounded-full sm:flex md:border-2 md:shadow-sm">
                <input
                    type="text"
                    className="w-full pl-5 text-gray-600 placeholder-gray-400 bg-transparent outline-none focus:outline-none"
                    placeholder="Start your search"
                />
                <MagnifyingGlassIcon className="hidden h-8 p-2 mx-auto text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" />
            </div>

            {/* left */}
            <div className="flex items-center justify-end gap-3 text-gray-600">
                <p className="hidden font-medium md:block cursor-pointer">Became a host</p>
                <MagnifyingGlassIcon className="block h-6 cursor-pointer sm:hidden" />
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center gap-2 px-2 py-1 border-2 rounded-full cursor-pointer">
                    <Bars3Icon className="h-6" />
                    <UserCircleIcon className="h-8" />
                </div>
            </div>
        </header>
    );
}

import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardData }) {
    return (
        <>
            <Head>
                <title>Airbnb Clone</title>
                <link rel="shortcut icon" href="../public/favicon.ico" type="image/x-icon" />
            </Head>

            <Header />
            <Banner />

            <main className="px-8 mx-auto max-w-7xl sm:px-16">
                <section className="mt-10">
                    <h2 className="pb-5 text-2xl md:text-3xl font-semibold">Explore Nearby</h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {exploreData?.map((item) => (
                            <SmallCard
                                key={item.img}
                                img={item.img}
                                distance={item.distance}
                                location={item.location}
                            />
                        ))}
                    </div>
                </section>

                <section className="mt-16">
                    <h2 className="pb-5 text-2xl md:text-3xl font-semibold">Live Anywhere</h2>

                    <div className="flex gap-4 overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardData?.map((item) => (
                            <MediumCard key={item.img} img={item.img} title={item.title} />
                        ))}
                    </div>
                </section>

                <section>
                    <LargeCard
                        img="https://links.papareact.com/4cj"
                        title="The Greatest Outdoors"
                        description="Wishlists curated by Airbnb."
                        buttonText="Get Inspired"
                    />
                </section>
            </main>

            <Footer />
        </>
    );
}

export async function getServerSideProps() {
    const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());

    const cardData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json());

    return {
        props: { exploreData, cardData },
    };
}

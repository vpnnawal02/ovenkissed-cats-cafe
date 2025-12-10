import React from "react";

const cats = [
    { name: "Luna", vibe: "Calm · Gentle", video: "/videos/cat_1.mp4" },
    { name: "Milo", vibe: "Playful · Curious", video: "/videos/cat_2.mp4" },
    { name: "Olive", vibe: "Affectionate · Cozy", video: "/videos/cat_3.mp4" },
    { name: "Leo", vibe: "Quiet · Thoughtful", video: "/videos/cat_4.mp4" },
    { name: "Bella", vibe: "Friendly · Social", video: "/videos/cat_5.mp4" },
    { name: "Theo", vibe: "Sleepy · Gentle", video: "/videos/cat_6.mp4" },
];

const Cats = () => {
    return (
        <div className="pt-28 pb-24">

            {/* Hero */}
            <div className="text-center px-4 mb-16">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Meet Our <span className="text-amber-700">Cats</span>
                </h1>

                <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
                    Not pets. Not props.
                    Just gentle souls sharing the space with you.
                </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] lg:w-[75%] mx-auto">
                {cats.map((cat, index) => (
                    <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-xl"
                    >
                        {/* Video */}
                        <video
                            src={cat.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />

                        {/* Always-visible overlay */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-4">
                            <h3 className="text-xl font-semibold text-white">
                                {cat.name}
                            </h3>
                            <p className="text-sm text-gray-200">
                                {cat.vibe}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Closing Line */}
            <p className="text-center text-gray-400 mt-14 italic">
                Some bonds don’t need words.
            </p>

            {/* Ethics Note */}
            <div className="mt-16 text-center px-6">
                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Our cats are free to rest, play, or disappear whenever they choose.
                    Videos capture honest moments — never staged interactions.
                    Their comfort always comes first.
                </p>
            </div>

            {/* CTA */}
            <div className="mt-16 flex justify-center">
                <a
                    href="/booktable"
                    className="bg-amber-700 hover:bg-amber-600 transition text-white px-10 py-4 rounded-md text-lg"
                >
                    Book a Table
                </a>
            </div>

        </div>
    );
};

export default Cats;

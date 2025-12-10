import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviews = [
    {
        name: "Neha Kapoor",
        text: "Loved the ambience! Soft music, warm lights, and the cutest cats. The caramel latte is a must-try.",
        rating: 4,
    },
    {
        name: "Rohan Verma",
        text: "A truly unique café experience. Great coffee, great service, and the cats are adorable. Will definitely visit again!",
        rating: 5,
    },
    {
        name: "Aarav Sharma",
        text: "Such a peaceful place! The cats are so friendly and the coffee tastes amazing. Perfect spot to relax after work.",
        rating: 5,
    },
    {
        name: "Simran Kaur",
        text: "Calm, cozy and comforting. The place feels like a warm hug. Highly recommended for coffee lovers.",
        rating: 5,
    },
];

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const prevReview = () => {
        if (index > 0) setIndex(index - 1);
    };

    const nextReview = () => {
        if (index < reviews.length - 1) setIndex(index + 1);
    };

    return (
        <div id="reviews" className="flex flex-col items-center my-24 gap-10">

            {/* Heading */}
            <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Customer <span className="text-amber-700">Reviews</span>
                </h1>
                <p className="mt-3 text-lg lg:text-xl text-gray-500">
                    What people say about us
                </p>
            </div>

            {/* Slider Wrapper */}
            <div className="relative w-[90%] sm:w-[80%] lg:w-[50%] overflow-hidden">

                {/* Slides */}
                <div
                    className="flex w-full md:w-[50%] transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {reviews.map((review, i) => (
                        <div key={i} className="min-w-full px-4">
                            <div className="bg-gray-200  p-8 rounded-xl text-center">

                                {/* Stars */}
                                <div className="flex justify-center gap-1 text-amber-500 text-xl mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-amber-700 text-lg leading-relaxed">
                                    “{review.text}”
                                </p>

                                {/* Name */}
                                <h3 className="mt-4 text-black font-semibold">
                                    — {review.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prevReview}
                    disabled={index === 0}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full
            ${index === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-black"}
          `}
                >
                    <FaChevronLeft className="text-white" />
                </button>

                <button
                    onClick={nextReview}
                    disabled={index === reviews.length - 1}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 p-3 rounded-full
            ${index === reviews.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-black"}
          `}
                >
                    <FaChevronRight className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default Reviews;

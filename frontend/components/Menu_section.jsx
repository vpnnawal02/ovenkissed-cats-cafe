import item1 from "../src/assets/menu_1.jpg";
import item2 from "../src/assets/menu_2.jpg";
import item3 from "../src/assets/menu_3.jpg";
import item4 from "../src/assets/menu_4.jpg";
import item5 from "../src/assets/menu_5.jpg";
import item6 from "../src/assets/menu_6.jpg";

import React, { useEffect, useRef, useState } from "react";

const MenuPreview = () => {
    const items = [
        {
            img: item1,
            name: "Caramel Latte",
            desc: "Smooth espresso blended with caramel & steamed milk.",
            price: "₹249",
        },
        {
            img: item2,
            name: "Hazelnut Cold Brew",
            desc: "Slow-brewed coffee infused with natural hazelnut flavour.",
            price: "₹199",
        },
        {
            img: item3,
            name: "Classic Croissant",
            desc: "Flaky, buttery, and baked fresh every morning.",
            price: "₹149",
        },
        {
            img: item4,
            name: "Vanilla Bean Cappuccino",
            desc: "Rich espresso with real vanilla notes.",
            price: "₹229",
        },
        {
            img: item5,
            name: "Dark Chocolate Mocha",
            desc: "Bold espresso blended with deep dark chocolate.",
            price: "₹269",
        },
        {
            img: item6,
            name: "Grilled Cheese & Herb Sandwich",
            desc: "Golden grilled bread filled with melted cheese.",
            price: "₹199",
        },
    ];

    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(3);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    /* RESPONSIVE CARD COUNT */
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 640) setVisible(1);
            else if (window.innerWidth < 1024) setVisible(2);
            else setVisible(3);
        };

        updateVisible();
        window.addEventListener("resize", updateVisible);
        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    /* AUTO SLIDE */
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) =>
                prev >= items.length - visible ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [visible]);

    /* TOUCH HANDLERS */
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const diff = touchStartX.current - touchEndX.current;

        if (diff > 50) {
            // swipe left
            setIndex((prev) =>
                prev >= items.length - visible ? prev : prev + 1
            );
        } else if (diff < -50) {
            // swipe right
            setIndex((prev) => (prev <= 0 ? 0 : prev - 1));
        }
    };

    return (
        <div id="menu" className="flex flex-col items-center my-24 gap-10 overflow-hidden">

            {/* Heading */}
            <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold">
                    Our <span className="text-amber-700">Specials</span>
                </h1>
                <p className="mt-3 text-lg lg:text-xl text-gray-500">
                    Handcrafted brews & freshly baked delights, made with love.
                </p>
            </div>

            {/* Slider */}
            <div
                className="relative w-full lg:w-[70%] overflow-hidden touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${index * (100 / visible)}%)`,
                    }}
                >
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="min-w-full sm:min-w-1/2 lg:min-w-1/3 px-4"
                        >
                            <div className="border border-gray-400 p-5 rounded-xl hover:scale-[1] transition duration-300 h-full w-full">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="rounded-lg object-cover"
                                />
                                <h2 className="mt-4 text-2xl font-semibold">{item.name}</h2>
                                <p className="text-gray-500 mt-2">{item.desc}</p>
                                <p className="text-amber-600 font-bold mt-2 text-lg">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <a href="/menu">
                <button className="mt-8 bg-amber-700 hover:bg-amber-600 text-white px-8 py-3 text-lg rounded-md">
                    View Full Menu
                </button>
            </a>

        </div>
    );
};

export default MenuPreview;

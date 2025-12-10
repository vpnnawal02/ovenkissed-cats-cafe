import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="pt-28 pb-24 bg-black text-white">

            {/* Hero */}
            <div className="text-center mb-20 px-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Our <span className="text-amber-700">Menu</span>
                </h1>
                <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
                    Thoughtfully crafted food and beverages — best enjoyed slowly.
                </p>
            </div>

            {/* MENU CONTENT */}
            <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col gap-20">

                {/* PASTA */}
                <MenuSection
                    title="Pasta"
                    items={[
                        ["Arrabiata", "₹229"],
                        ["Veg White Sauce Pasta", "₹249"],
                        ["Chicken White Sauce Pasta", "₹269"],
                        ["Veg Red Sauce Pasta", "₹249"],
                        ["Chicken Red Sauce Pasta", "₹269"],
                        ["Broccoli & Cheese Pasta", "₹249"],
                        ["Mushroom Cheese Pasta", "₹249"],
                        ["Mix Veg Pasta", "₹249"],
                        ["Mac & Cheese", "₹279"],
                    ]}
                />

                {/* ORIENTAL MAIN COURSE */}
                <MenuSection
                    title="Oriental Main Course"
                    items={[
                        ["Manchurian Gravy (Veg / Chicken)", "₹219 / ₹319"],
                        ["Chilli Chicken Gravy", "₹319"],
                        ["Chilli Paneer Gravy", "₹319"],
                        ["Chicken Hot Garlic Sauce", "₹329"],
                        ["Vegetable Hot Garlic Sauce", "₹279"],
                    ]}
                />

                {/* NOODLES & RICE */}
                <MenuSection
                    title="Noodles & Rice"
                    items={[
                        ["Fried Rice (Veg / Egg / Chicken)", "₹199 / ₹229"],
                        ["Hakka Noodles (Veg / Chicken)", "₹199 / ₹229"],
                        ["Singapore Noodles", "₹229"],
                        ["Schezwan Noodles", "₹229"],
                        ["Chilli Garlic Noodles", "₹229"],
                    ]}
                />

                {/* GRILLED SANDWICHES & BURGERS */}
                <MenuSection
                    title="Grilled Sandwiches & Burgers"
                    items={[
                        ["Aloo Tikki Burger", "₹99"],
                        ["Veg Spicy Burger", "₹139"],
                        ["Crunchy Paneer Burger", "₹169"],
                        ["Cheesy Corn Sandwich", "₹149"],
                        ["Grilled Chicken Sandwich", "₹199"],
                        ["Paneer Tikka Sandwich", "₹199"],
                        ["Peri Peri Chicken Sandwich", "₹229"],
                        ["Classic Chicken Cheese Burger", "₹199"],
                    ]}
                />

                {/* DESSERTS */}
                <MenuSection
                    title="Desserts"
                    items={[
                        ["Choco Donut", "₹140"],
                        ["Caramel Donut", "₹140"],
                        ["Blueberry Donut", "₹140"],
                        ["Choco Lava Cup", "₹160"],
                        ["Brownie with Ice Cream", "₹180"],
                    ]}
                />

                {/* BEVERAGES */}
                <MenuSection
                    title="Beverages"
                    items={[
                        ["Hot Coffee (Cappuccino / Latte / Mocha)", "₹129 – ₹149"],
                        ["Classic Cold Coffee", "₹159"],
                        ["Hazelnut Cold Coffee", "₹189"],
                        ["Caramel Cold Coffee", "₹189"],
                        ["Fresh Lime Soda", "₹99"],
                        ["Ice Tea (Peach / Lemon)", "₹99"],
                    ]}
                />

            </div>

            {/* CTA */}
            <div className="mt-24 text-center">
                <Link
                    to="/booktable"
                    className="bg-amber-700 hover:bg-amber-600 transition text-white px-10 py-4 rounded-md text-lg"
                >
                    Book a Table
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                    Prices may vary. Menu subject to availability.
                </p>
            </div>

        </div>
    );
};

const MenuSection = ({ title, items }) => (
    <div>
        <h2 className="text-3xl font-bold mb-8 border-b border-gray-700 pb-2">
            {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {items.map((item, index) => (
                <div key={index} className="flex justify-between text-lg">
                    <span className="text-gray-300">{item[0]}</span>
                    <span className="text-amber-600 font-semibold">{item[1]}</span>
                </div>
            ))}
        </div>
    </div>
);

export default Menu;

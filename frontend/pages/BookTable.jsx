import React, { useState } from "react";

const BookTable = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "2",
        request: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="pt-28 pb-24 flex justify-center">
            <div className="w-[90%] md:w-[60%]">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold">
                        Book a <span className="text-amber-700">Table</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-400">
                        Reserve your spot for a cozy coffee moment with gentle company.
                    </p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-12">

                    {/* FORM */}
                    <div className="p-8 bg-gray-200 ">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                                <div>
                                    <label className="block text-sm mb-1 text-amber-700">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 border border-gray-300  px-4 py-3 focus:outline-none focus:border-amber-600"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm mb-1 text-amber-700">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 border border-gray-300  px-4 py-3 focus:outline-none focus:border-amber-600  "
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-1 text-amber-700">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            required
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-[90%] bg-gray-100 border border-gray-300  px-4 py-3 focus:outline-none focus:border-amber-600"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm mb-1 text-amber-700">
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            required
                                            value={formData.time}
                                            onChange={handleChange}
                                            className="w-[90%] bg-gray-100 border border-gray-300  px-4 py-3 focus:outline-none focus:border-amber-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm mb-1 text-amber-700">
                                        Number of Guests
                                    </label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full bg-gray-100 border border-gray-300  px-4 py-3 focus:outline-none focus:border-amber-600"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm mb-1 text-amber-700">
                                        Special Request (optional)
                                    </label>
                                    <textarea
                                        name="request"
                                        value={formData.request}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-gray-100 border border-gray-300  px-4 py-3 focus:outline-none focus:border-amber-600"
                                        placeholder="Quiet corner, birthday, cat-friendly table 🐾"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-amber-700 hover:bg-amber-600 transition text-white py-3 rounded-md text-lg mt-4"
                                >
                                    Confirm Reservation
                                </button>
                            </form>
                        ) : (
                            <div className="text-center py-20">
                                <h2 className="text-3xl font-bold text-amber-600">
                                    Reservation Received
                                </h2>
                                <p className="mt-4 text-black">
                                    Thank you! We’ll confirm your table shortly via phone.
                                </p>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookTable;

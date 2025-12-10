import React from 'react'
import coffee from '../src/assets/about_1.jpg'
import cat from '../src/assets/about_2.jpg'
import people from '../src/assets/about_3.jpg'

const About = () => {
    return (
        <div
            className="flex flex-col items-center my-24 gap-24 xl:gap-40"
            id="about"
        >
            {/* Section Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold underline underline-offset-8 decoration-1">
                About <span className="text-amber-700">Us</span>
            </h1>

            {/* Section 1 */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start w-[90%] sm:w-[85%] xl:w-[70%] gap-10 xl:gap-32">
                <img
                    src={coffee}
                    alt=""
                    className="w-full max-w-sm lg:max-w-md rounded-lg"
                />

                <div className="w-full lg:w-1/2 max-w-xl">
                    <h2 className="mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold">
                        More Than a Café — It’s a Feeling
                    </h2>

                    <p className="hidden md:block text-base sm:text-lg lg:text-xl leading-relaxed">
                        At <span className="text-amber-700">OvenKissed Cats Cafe,</span> we believe a café should be more than just a place to grab coffee.
                        It should feel like a pause from the world — warm, welcoming, and a little slower.
                        From the aroma of freshly brewed coffee to the calm presence of our feline companions,
                        everything here is designed to make you feel at home.
                    </p>

                    <p className="md:hidden text-base sm:text-lg leading-relaxed">
                        At <span className="text-amber-700">OvenKissed Cats Cafe,</span> we believe a café should be more than just a place to grab coffee.It should feel like a pause from the world — warm, welcoming, and a little slower.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col xl:flex-row-reverse items-center xl:items-start w-[90%] sm:w-[85%] xl:w-[70%] gap-10 xl:gap-32">
                <img
                    src={cat}
                    alt=""
                    className="w-full max-w-sm lg:max-w-md rounded-lg"
                />

                <div className="w-full lg:w-1/2 max-w-xl">
                    <h2 className="mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold">
                        Where Coffee Meets Quiet Companionship
                    </h2>

                    <p className="hidden md:block text-base sm:text-lg lg:text-xl leading-relaxed">
                        At <span className="text-amber-700">OvenKissed Cats Cafe,</span> our café isn’t just home to great coffee —
                        it’s also home to gentle, curious, and affectionate cats who make every visit special.
                        They wander, they nap, they greet, and sometimes they simply curl up beside you
                        without asking for anything in return.
                        <br /><br />
                        Here, the calm presence of our feline friends turns everyday moments into soothing ones.
                        The soft purr of a nearby cat brings a kind of comfort that can’t be brewed.
                    </p>

                    <p className="md:hidden text-base sm:text-lg leading-relaxed">
                        At <span className="text-amber-700">OvenKissed Cats Cafe,</span> our café isn’t just home to great coffee —
                        it’s also home to gentle, curious, and affectionate cats who make every visit special.
                        They wander, they nap, and sometimes simply curl up beside you.
                    </p>
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col xl:flex-row items-center xl:items-start w-[90%] sm:w-[85%] xl:w-[70%] gap-10 xl:gap-32">
                <img
                    src={people}
                    alt=""
                    className="w-full max-w-sm lg:max-w-md rounded-lg"
                />

                <div className="w-full lg:w-1/2 max-w-xl">
                    <h2 className="mb-4 lg:mb-6 text-2xl sm:text-3xl lg:text-5xl font-bold">
                        A Space to Slow Down
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                        In a fast-moving world, we invite you to slow down.
                        To sip slowly. To breathe deeply.
                        To enjoy simple moments — good coffee, soft conversations,
                        and calm company. <br />
                        <span className="text-amber-700">OvenKissed Cats Cafe</span> isn’t just visited — it’s remembered.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

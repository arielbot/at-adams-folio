import React from "react"
import Image from "next/image"
import profile from "../public/images/portfolio.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto lg:max-w-4xl">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                      Hi, I'm Ariel.
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                          I am a front end web developer with over seven years experience working with HTML, CSS/SCSS, and JavaScript. Skilled in developing and testing responsive ecommerce sites that every user can navigate.
                        </p>
                    </div>
                </div>
                <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                    <Image
                        src={profile}
                        alt="Awkward woman with glasses smiling uncomfortably"
                        priority={true}
                        className="shadow rounded-full max-w-full h-auto align-middle border-none"
                        width={250}
                        height={250}
                        placeholder="blur"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;
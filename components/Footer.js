import React from "react";
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>Built with NextJS, Tailwind and Vercel</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a
                            href="https://www.linkedin.com/in/arieltadams/"
                            className={`transition-colors hover ${styles.footerLink}`}
                            target="_blank"
                            rel="noreferrer"
                            >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/arielbot"
                            className={`transition-colors hover ${styles.footerLink}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            href="/files/arielAdams_resume2021.pdf" target="_blank"
                            rel="noopener noreferrer" className={`transition-colors hover ${styles.footerLink}`}
                        >
                            Download My Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
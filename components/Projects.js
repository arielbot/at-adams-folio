import { motion } from "framer-motion";
import styles from "/styles/Projects.module.css"

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <h2 id="projects" className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white mb-10 mt-20">
        Silly Projects
      </h2>

      <div className={styles.grid}>
          <motion.a href="https://book-management-app.vercel.app/" target="_blank" className={styles.card} whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              },
            }}>
            <h3>Bookish App &rarr;</h3>
            <p>Like to read? Me neither. I made a simple single-page react app to save book information with local storage.</p>
          </motion.a>

        <motion.a href="https://bloggatsbyproject.gatsbyjs.io/" target="_blank" className={styles.card} whileHover={{
              scale: 1.1,
              transition: {
                duration: .2
              },
            }}>
          <h3>Gatsby Blog &rarr;</h3>
          <p>Basic blog linked to Contentful CMS. I made this to compare Gatsby Image vs NextJS Image component.</p>
        </motion.a>

        {/* <motion.a href="" className={styles.card} whileHover={{
            scale: 1.1,
            transition: {
              duration: .2
            },
          }}>
          <h3>Recipe App &rarr;</h3>
          <p>Uh oh spicy! Pumpkin! Hahahaha. Pumpkin tasty!</p>
        </motion.a> */}

        <motion.a href="https://loco-motion.vercel.app/" target="_blank" className={styles.card} whileHover={{
            scale: 1.1,
            transition: {
              duration: .2
            },
          }}>
          <h3>Framer Motion Avatar State&rarr;</h3>
          <p>
            Simple Framer Motion project in NextJS to simulate the fire nation takeover. I made this for a team training on Framer Motion.
          </p>
        </motion.a>
      </div>
    </section>
  );
}

export default Projects;
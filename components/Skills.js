import styles from '../styles/Skills.module.css'
import { motion } from "framer-motion"

const Skills = () => {

  // declaring variants for framer motion animations
  const skill90Variants = {
    start: {
      width: `${10}%`
    },
    load: {
      width: `${85}%`,
      transition: {
        duration: 3,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }
    }
  };

  const skill80Variants = {
    start: {
      width: `${10}%`
    },
    load: {
      width: `${75}%`,
      transition: {
        duration: 3,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }
    }
  };

  const skill75Variants = {
    start: {
      width: `${10}%`
    },
    load: {
      width: `${70}%`,
      transition: {
        duration: 3,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }
    }
  };

  const skill40Variants = {
    start: {
      width: `${10}%`
    },
    load: {
      width: `${35}%`,
      transition: {
        duration: 3,
        delay: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 2
      }
    }
  };

  return (
    <section className="container px-4 mx-auto lg:max-w-4xl">
      <div>
        <h2 id="skills" className="text-2xl font-bold text-gray-900 lg:text-4xl dark:text-white mb-10 mt-15">Skills</h2>
        {/* skill 1 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div variants={skill90Variants} initial="start" animate="load"
              className={`${styles.skillFill} ${styles.ninety}`}>
                <div className={styles.skillTitle}>
                  CSS
                </div>
              </motion.div>
              <div className={styles.skillPercent}>90%</div>
          </div>
        </div>
        {/* skill 2 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div variants={skill90Variants} initial="start" animate="load" className={ `${styles.skillFill} ${styles.ninety}`}>
                <div className={styles.skillTitle}>
                  HTML
                </div>
              </motion.div>
              <div className={styles.skillPercent}>90%</div>
          </div>
        </div>
        {/* skill 3 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div variants={skill80Variants} initial="start" animate="load" className={ `${styles.skillFill} ${styles.eighty}`}>
                <div className={styles.skillTitle}>
                  JQUERY
                </div>
              </motion.div>
              <div className={styles.skillPercent}>80%</div>
          </div>
        </div>
        {/* skill 4 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div variants={skill75Variants} initial="start" animate="load" className={ `${styles.skillFill} ${styles.seventyfive}`}>
                <div className={styles.skillTitle}>
                  JS
                </div>
              </motion.div>
              <div className={styles.skillPercent}>75%</div>
          </div>
        </div>
        {/* skill 5 */}
        <div className={styles.flex}>
          <div className={styles.bgGray}>
              <motion.div variants={skill40Variants} initial="start" animate="load" className={ `${styles.skillFill} ${styles.forty}`}>
                <div className={styles.skillTitle}>
                  REACT
                </div>
              </motion.div>
              <div className={styles.skillPercent}>40%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
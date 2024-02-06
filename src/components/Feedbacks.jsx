import {motion} from 'framer-motion'
import { styles } from '../styles'
import { sectionWrapper } from '../hoc'
import { testimonials } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
        <div className={`bg-tertiary rounded-2xl min-h-[300px] ${styles.padding}`}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>what others say</p>
            <h2 className={styles.sectionHeadText}>testimonials.</h2>
          </motion.div>
        </div>
    </div>
  )
}

export default Feedbacks
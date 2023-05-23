import { motion } from "framer-motion"

const SlideUp = ({ children, duration = 1, delay = 0 }) => {
    return (
        <motion.div
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration, delay }}
            style={{ height: '100%' }}
        >
            {children}
        </motion.div>
    )
}

export default SlideUp;
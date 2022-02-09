import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion'

function AboutPage() {
  return (
  <AnimatePresence>
    <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}            
    >  
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>This is a React app to leave feedback for a product or service.</p>
                <p>Done by Valentine Striganoff, designed by Brad Traversy</p>
                <p>
                <Link to='/feedback-app'>Back to Home</Link>
                </p>
                </div>
        </Card>
    </motion.div>
  </AnimatePresence>
  )

}

export default AboutPage;

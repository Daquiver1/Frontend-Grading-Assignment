import {motion} from "framer-motion"


export default function FramerAnimation() {
    return (
       
        <motion.h1
            initial={{x: -1000}}
            animate={{x: [0,10,0]}}
            transition={{
                duration:"5",
                delay:"1.5"
            }}
            style={{
                color: 'black',
                fontSize: '46px',
                


            }}
        >
            Welcome to our <br/> Grading System! 
            <br></br>up-to-date grades <br/> for your classes
        </motion.h1>
        
    )
}
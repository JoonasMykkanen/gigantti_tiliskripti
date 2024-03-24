import { MotionConfig } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "75%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "75%",
    },
  },
};

const Hamburger = ( {status}: {status: boolean} ) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(status);
  }, [status])

  return (
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative h-[48px] w-[48px] rounded-full bg-white/0 transition-color -mr-3 -mt-[2px]"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-[0.125rem] w-[24px] bg-white "
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%", transformOrigin: "50% 50%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-[0.125rem] w-[24px] bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%", transformOrigin: "50% 50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-[0.125rem] w-[24px] bg-white"
          style={{
            x: "-100%",
            y: "50%",
            bottom: "35%",
            left: "100%",
            transformOrigin: "50% 50%"
          }}
        />
      </motion.div>
    </MotionConfig>
  );
};

export default Hamburger;
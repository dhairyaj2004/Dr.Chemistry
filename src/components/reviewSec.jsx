"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

const IMGS = [
  {
    profileImg: "https://img.freepik.com/premium-photo/young-man-is-holding-book-smiling_905085-17.jpg",
    name: "Aarav Sharma",
    score: "98% in H.S.C. Board",
    review:
      "Excellent teaching technique, engaging and clear. Material is comprehensive and relevant. Teachers offer great support, always available to clarify doubts and encourage learning.",
  },
  {
    profileImg: "https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg",
    name: "Neha Verma",
    score: "95% in H.S.C. Board",
    review:
      "The best learning experience! The teaching style makes complex topics easy to understand. Highly recommend for students looking to excel in chemistry!",
  },
  {
    profileImg: "https://img.freepik.com/premium-photo/image-25-year-old-indian-man-that-is-smiling-camera_878783-7217.jpg",
    name: "Rohan Patel",
    score: "92% in H.S.C. Board",
    review:
      "The interactive approach and real-life applications of chemistry made learning fun and effective. I gained confidence in my subject knowledge!",
  },
  {
    profileImg: "https://img.freepik.com/premium-photo/young-indian-college-girl-smiling_54391-7128.jpg",
    name: "Ananya Desai",
    score: "90% in H.S.C. Board",
    review:
      "Amazing teachers and top-quality study materials. The revision sessions helped a lot before my exams!",
  },
];

const ReviewSec = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);

  useEffect(() => {
    // Only access `window` in client-side useEffect
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 2200;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) startInfiniteSpin(rotation.get());
    else controls.stop();
  }, [autoplay]);

  return (
    <div className="w-full">
      <h2 className="mb-1 text-3xl font-extrabold leading-tight text-center text-red-300 font-serif uppercase">
        Success Stories
      </h2>
      <p className="mb-12 text-lg text-center text-teal-300">
        Here are a few of the honest feedbacks from our this year's Toppers.
      </p>
      <div className="relative h-[600px] w-full overflow-hidden">
        <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d]">
          <motion.div
            drag="x"
            dragElastic={0}
            onDrag={(e, info) => rotation.set(rotation.get() + info.offset.x * dragFactor)}
            onDragEnd={(e, info) => {
              rotation.set(rotation.get() + info.velocity.x * dragFactor);
              if (autoplay) startInfiniteSpin(rotation.get());
            }}
            onMouseEnter={() => autoplay && pauseOnHover && controls.stop()}
            onMouseLeave={() => autoplay && pauseOnHover && startInfiniteSpin(rotation.get())}
            animate={controls}
            style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
            className="flex min-h-[250px] cursor-grab items-center justify-center"
          >
            {images.map((student, i) => (
              <div
                key={i}
                className="absolute flex flex-col items-center justify-center [backface-visibility:hidden]"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="relative flex flex-col items-center gap-4 p-6 bg-slate-900 backdrop-blur-md border border-white rounded-2xl shadow-lg max-w-[280px] sm:max-w-[320px]">
                  <img
                    src={student.profileImg}
                    alt={student.name}
                    className="h-[80px] w-[80px] rounded-full border-[3px] border-white object-cover shadow-md"
                  />
                  <h3 className="text-lg font-semibold text-white">{student.name}</h3>
                  <p className="text-sm text-gray-300">{student.score}</p>
                  <p className="text-center text-white text-sm sm:text-base px-3">
                    {student.review}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;

import { motion } from "framer-motion";

// Define a type for individual image objects
type Image = {
  id: number;
  name: string;
  logo: string;
};

// Use this Image type in the SliderProps definition
type SliderProps = {
  images: Image[];
};

function Slider({ images }: SliderProps) {
  const imagesArr = [...images, ...images];
  return (
    <div className="container relative overflow-hidden max-auto max-w-screen-lg rounded-full px-3 ">
      {/*fading effect mask on the sides */}
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bg-gradient-to-l after:h-full after:w-1/4 after:from-[#f4f4f8] after:via-transparent after:to-transparent"></div>
      <motion.div
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            repeat: Infinity,
            duration: 25,
          },
        }}
        className="flex"
      >
        {imagesArr.map((image, index) => (
          <div key={index} className=" flex-shrink-0">
            <div className="flex items-center justify-center h-[200px] ">
              <img
                src={image.logo}
                alt={image.name}
                className="h-full max-w-full object-contain opacity-75"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Slider;

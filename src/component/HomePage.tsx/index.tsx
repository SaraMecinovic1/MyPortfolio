import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section id="home">
      <div className="w-full h-[100vh] px-10 bg-[#f9faf0] flex justify-center items-center flex-col gap-3 ">
        <h1 className="font-dm text-[27px] font-bold text-primary">
          HEY ! I AM{" "}
        </h1>
        <h1 className=" text-center text-[50px] sm:text-6xl font-dm font-semibold">
          Sara Mecinović
        </h1>
        <motion.h1
          className="text-center font-dm text-[27px] font-bold text-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          I'm Frontend Developer
        </motion.h1>
      </div>
    </section>
  );
};

export default HomePage;

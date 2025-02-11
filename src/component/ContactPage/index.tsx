import { Textarea } from "../../components/ui/textarea";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Email from "../../assets/email.png";
import Location from "../../assets/location-pin.png";
import Linkedin from "../../assets/linkedin.png";
import GitHub from "../../assets/git.png";

const information = [
  {
    img: Email,
    desc: "saramecinovic87@gmail.com",
  },
  {
    img: Location,
    desc: "Novi Pazar, Serbia",
  },
  {
    img: Linkedin,
    desc: "Sara Mecinovic",
  },
  {
    img: GitHub,
    desc: "SaraMecinovic1",
  },
];
const ContactPage = () => {
  return (
    <section id="contact">
      <div className="w-full h-auto min-h-[100vh] bg-white px-5 flex flex-col justify-center items-center gap-6 font-inter py-10">
        <h1 className="text-4xl md:text-[43px] sm:mb-10 font-semibold text-primary">
          CONTACT ME
        </h1>

        <div className=" bg-red-100 w-full lg:w-[90%] xl:w-[70%] 2xl:w-[60%] h-auto p-6 md:items-center flex flex-col  lg:flex-row justify-between">
          {/* EMAIL FORM */}
          <div className="w-full md:max-w-[80%]  lg:w-[65%]   h-auto bg-[#f8f9fa] p-5 sm:p-10 rounded-lg shadow-sm">
            <form className="flex flex-col gap-4 w-full">
              {/* First Row */}
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full lg:w-1/2"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full lg:w-1/2"
                  required
                />
              </div>
              {/* Second Row */}
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              {/* Third Row */}
              <Textarea name="message" placeholder=" Message" required />
              {/* Button */}
              <Button
                type="submit"
                className="w-[180px] h-[50px] bg-primary text-white py-2"
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* INFO */}
          <div className="w-full md:w-[60%] lg:w-[30%] h-auto flex flex-col justify-start gap-10 pt-10 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full">
              {information.map((info, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center justify-start gap-2  sm:ml-0  text-center"
                >
                  <div className="bg-primary rounded-full lg:p-4 p-3 ">
                    <img
                      src={info.img}
                      alt={`Topic ${index}`}
                      className="max-h-[25px] max-w-[25px] lg:h-[20px] lg:w-[20px] object-contain"
                    />
                  </div>
                  <p className="text-md sm:text-lg text-gray-700">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

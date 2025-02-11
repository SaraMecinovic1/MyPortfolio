import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "../../components/ui/textarea";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Email from "../../assets/email.png";
import Location from "../../assets/location-pin.png";
import Linkedin from "../../assets/linkedin.png";
import GitHub from "../../assets/git.png";
import { ToastContainer, toast } from "react-toastify";

const information = [
  { img: Email, desc: "saramecinovic87@gmail.com" },
  { img: Location, desc: "Novi Pazar, Serbia" },
  { img: Linkedin, desc: "Sara Mecinovic" },
  { img: GitHub, desc: "SaraMecinovic1" },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("dataa1", formData);
    try {
      await emailjs.send(
        "service_te7g6fj",
        "template_zm20g8e",
        formData,
        "DW_DcjJdR_3Cii5cF"
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending error:", error);
      toast.error("Failed to send message. Try again.");
    }

    setLoading(false);
    console.log("dataa2", formData);
  };

  return (
    <section id="contact">
      <ToastContainer />
      <div className="w-full min-h-[100vh] bg-white px-5 flex flex-col justify-center items-center gap-6 font-inter py-10">
        <h1 className="text-4xl md:text-[43px] sm:mb-10 mt-20 sm:mt-0 font-semibold text-primary">
          CONTACT ME
        </h1>

        <div className="w-full lg:w-[90%] xl:w-[70%] 2xl:w-[60%] flex flex-col lg:flex-row justify-between">
          {/* EMAIL FORM */}
          <div className="w-full md:max-w-[80%] lg:w-[65%] bg-[#f8f9fa] p-5 sm:p-10 rounded-lg shadow-sm">
            <form className="flex flex-col gap-4 w-full" onSubmit={sendEmail}>
              {/* First Row */}
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full lg:w-1/2"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full lg:w-1/2"
                />
              </div>
              {/* Second Row */}
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              {/* Third Row */}
              <Textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button
                type="submit"
                className="w-[180px] h-[50px] bg-primary text-white py-2"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* INFO */}
          <div className="w-full md:w-[80%] lg:w-[30%] flex flex-col gap-10 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {information.map((info, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="bg-primary rounded-full p-3 lg:p-4 xl:p-5">
                    <img
                      src={info.img}
                      alt={`Icon ${index}`}
                      className="max-h-[25px] max-w-[25px] object-contain"
                    />
                  </div>
                  <p className="text-md sm:text-lg text-gray-700">
                    {info.desc}
                  </p>
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

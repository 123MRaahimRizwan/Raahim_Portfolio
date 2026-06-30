import CertificationCard from "./CertificationCard";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const certifications = [
  {
    title: "Google AI Professional",
    issuer: "Google",
    date: "2026",
    image: "/certificates/google_ai_certificate.jpg",
    description:
      "Comprehensive training in Google's AI ecosystem, including Gemini, Google AI Studio, and practical AI application development.",
    certificateLink:
      "https://coursera.org/share/08c0405a1539f93a17e5d3ceac0ae8aa",
  },
  {
    title: "Simplilearn Data Structures and Algorithms",
    issuer: "Simplilearn",
    date: "2024",
    image: "/certificates/simplilearn_data_structures.jpg",
    description:
      "Comprehensive training in data structures, covering arrays, linked lists, stacks, queues, trees, graphs, hashing, and algorithmic problem-solving.",
    certificateLink: "/certificates/simplilearn_dsa_certificate.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Great Learning",
    date: "2023",
    image: "/certificates/introduction_to_ai.png",
    description:
      "Built a strong foundation in artificial intelligence, exploring core AI concepts, machine learning, and practical industry use cases.",
    certificateLink: "/certificates/Introduction_to_AI.pdf",
  },
  {
    title: "Python for Data Science",
    issuer: "Great Learning",
    date: "2023",
    image: "/certificates/python_for_data_science.png",
    description:
      "Developed practical skills in Python for data science, including data analysis, visualization, and preprocessing using industry-standard libraries.",
    certificateLink: "/certificates/Python_for_Data_Science.pdf",
  },
  {
    title: "Introduction to Ethical Hacking",
    issuer: "Great Learning",
    date: "2023",
    image: "/certificates/introduction_to_ethical_hacking.png",
    description:
      "Comprehensive introduction to ethical hacking, covering cybersecurity fundamentals, vulnerability assessment, network security, and ethical penetration testing concepts.",
    certificateLink: "/certificates/Introduction_to_Ethical_Hacking.pdf",
  },
  {
    title: "Python for Machine Learning and Data Science",
    issuer: "Great Learning",
    date: "2023",
    image: "/certificates/python_for_machine_learning_and_data_science.png",
    description:
      "Comprehensive training in Python for machine learning and data science, covering data preprocessing, model development, evaluation, and practical AI workflows using Python.",
    certificateLink:
      "/certificates/Python_for_Data_Science_and_Machine_Learning.pdf",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-32 px-6 md:px-12 bg-[#050816]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-24"
        >
          {/* Badge */}
          <div
            className="
        inline-flex
        items-center
        gap-2
        px-5 py-2
        rounded-full
        border border-cyan-400/20
        bg-cyan-400/10
        backdrop-blur-xl
        text-sm
        text-cyan-300
        mb-8
      "
          >
            <Sparkles size={16} />
            Featured Certifications
          </div>

          {/* Heading */}
          <h1
            className="
        text-5xl
        md:text-7xl
        font-black
        tracking-tight
        leading-none
        text-white
        mb-6
      "
          >
            My
            <br />
            <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((certificate, index) => (
            <CertificationCard key={index} {...certificate} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

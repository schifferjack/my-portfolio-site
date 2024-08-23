import { useEffect, useState } from "react";

const About = (props: { id: string }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 2017;
    const experience = currentYear - startYear;
    setYearsOfExperience(experience);
  }, []);
  return (
    <section
      id={props.id}
      className="md:h-screen pt-[100px] px-8 md:flex md:items-center md:pt-0"
    >
      <div>
        <h2 className="poppins-extrabold text-4xl text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
            About Me
          </span>
        </h2>
        <p className="poppins-regular text-xl text-center">
          Hello! I'm <span className="font-bold">Syariz Ashraf</span> a self
          taught front-end developer that has been working for{" "}
          {yearsOfExperience} years now. I am passionate about creating a
          visually appealing and mobile-friendly web applications. It all
          started when I decided to diverge from electrical engineering during
          my internship because I do not enjoy looking and analyzing circuits
        </p>
        <br />
        <p className="poppins-regular text-xl text-center">
          I specialize in building responsive and fast websites using React or
          Angular and pairing it with Tailwind CSS to make it beautiful.
        </p>
        <br />
        <p className="poppins-regular text-xl text-center">
          I'm mostly a huge japanese anime/manga fan and when I'm not coding, I
          am usually playing games or just catching up to some{" "}
          <span className="poppins-regular-italic">isekai</span> shows
        </p>
      </div>
    </section>
  );
};
export default About;

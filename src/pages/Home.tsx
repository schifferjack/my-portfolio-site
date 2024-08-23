const Home = (props: { id: string }) => {
  return (
    <section id={props.id}>
      <div className="flex-col flex pt-[100px] px-8 md:h-screen md:justify-center md:pt-0">
        <div className="flex flex-col justify-center items-center w-full md:flex-row md: gap-4">
          <div className="flex justify-center items-center relative">
            <div className="h-[10rem] w-[10rem] lg:h-[20rem] lg:w-[20rem] animate-spin rounded-full flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 border-solid"></div>
            <div className="bg-contain absolute h-[9rem] w-[9rem] lg:h-[19rem] lg:w-[19rem] rounded-full bg-[url('src/assets/SyarizEdited.jpg')] z-10"></div>
          </div>
          <div className="text-center mt-6">
            <p className="poppins-bold text-6xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
                Front-End Developer
              </span>
            </p>
            <p className="poppins-regular text-2xl mt-6">
              Hi! I'm Syariz Ashraf. I love geeky stuff
            </p>
            <div className="flex justify-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/syarizashraf/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-4xl text-blue-600 hover:text-green-500"></i>
                <p className="poppins-bold">LinkedIn</p>
              </a>
              <a href="https://github.com/schifferjack" target="_blank">
                <i className="fa-brands fa-github text-blue-600 text-4xl hover:text-green-500"></i>
                <p className="poppins-bold">GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <p className="poppins-bold text-2xl text-center">Tech Stack</p>
          <ul className="flex text-4xl mt-4 justify-around gap-6 md:justify-center">
            <div className="flex gap-2">
              <li className="hover:scale-150">
                <i className="devicon-html5-plain colored"></i>
              </li>
              <li className="hover:scale-150">
                <i className="devicon-css3-plain colored"></i>
              </li>
            </div>
            <div className="flex gap-2">
              <li className="hover:scale-150">
                <i className="devicon-javascript-plain colored"></i>
              </li>
              <li className="hover:scale-150">
                <i className="devicon-typescript-plain colored"></i>
              </li>
            </div>
            <div className="flex gap-2">
              <li className="hover:scale-150">
                <i className="devicon-react-original colored"></i>
              </li>
              <li className="hover:scale-150">
                <i className="devicon-angular-plain text-red-600"></i>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Home;

import { useEffect, useState, createContext, useContext } from "react";
import "./App.css";
import { lightMode, darkMode } from "./themes";
import ThemeContext from "./context/ThemeContext";
import styled from "styled-components";
import ProjectPreview from "./components/ProjectPreview";
import SVG from "./components/SVG";
import { socials, projects } from "./data";

const Theme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.highlight};
  color: white;
  padding-bottom: ${(props) => (props.loading ? "0" : "1em")};
`;

const PhotoHeader = styled.div`
  background-image: url("https://jjdcportfolio.s3.us-west-2.amazonaws.com/IMG_3749.jpg");
  background-size: cover;
  background-position: top;
  position: relative;
  width: 100%;
  // filter: ${(props) => (props.loading ? "grayscale(1)" : "grayscale(0)")};

  &:after {
    content: " ";
    position: absolute;
    z-index: 1;
    display: ${(props) => props.loading && "none"};
    opacity: ${(props) => (props.loading ? ".8" : "1")};
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(17, 17, 17, 1)
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(17, 17, 17, 1));
    width: 100%;
    height: 300px;
  }
`;

function Header() {
  const { loading, setLoading } = useContext(ThemeContext);
  return (
    <PhotoHeader
      loading={loading}
      className={`transease backdrop-grayscale ${
        loading
          ? "h-[100vh] max-w-[100vw] max-h-[100vh]"
          : "h-[40vh] max-w-[1500px] lg:h-[50vh] max-h-[1100px]"
      } min-h-[400px]`}
    >
      <div
        className={`w-full h-full ${
          loading && "opacity-0"
        } transease bg-gradient-to-br from-blue-500 to-pink-500 opacity-50 rounded-xl`}
      />

      <div
        onClick={() => setLoading((prev) => !prev)}
        className={`fixed cursor-pointer top-10 left-10 transease ${
          loading &&
          "top-20 left-20 scale-[2] bg-gray-800 bg-opacity-80 p-2 rounded-full"
        }`}
      >
        <SVG
          fillRule={true}
          clipRule={true}
          styles={`hover:scale-110 transease`}
          color={loading ? "white" : "white"}
          path={
            loading
              ? "M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h9v1h-9v-1z"
              : "M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5zm-4.5 8h4v-4h1v4h4v1h-4v4h-1v-4h-4v-1z"
          }
        />
      </div>
    </PhotoHeader>
  );
}

function Nav() {
  return (
    <div
      className={`w-11/12 max-w-[1000px] z-[500] sticky justify-around items-center p-2 mt-4 md:mb-2 drop-shadow-2xl flex md:flex-row flex-col`}
    >
      <h1 className="md:text-4xl lg:text-5xl text-5xl text-center bg-clip-text text-transparent w-max bg-gradient-to-br from-blue-500 to-pink-600 elegant font-bold tracking-tight text-stroke-2">
        Joshua Cooper
      </h1>
      <Socials />
    </div>
  );
}

function Socials() {
  return (
    <>
      <div className={`flex transease items-center justify-center p-4 gap-4`}>
        {socials.map((social, indx) => {
          return (
            <a href={social.src} target="_blank" key={indx}>
              <SVG
                styles={`hover:scale-[.9] transease`}
                color={"white"}
                path={social.icon}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}

function ActiveProjModal({ activeProj, setActiveProj }) {
  const { loading } = useContext(ThemeContext);

  const ProjHeader = styled.div`
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: top;
    position: relative;
    width: 100%;
    height: 44vh;

    &:after {
      content: " ";
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      pointer-events: none;
      background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          rgba(17, 17, 17, 1)
        ),
        -webkit-linear-gradient(top, rgba(255, 255, 255, 0), rgba(17, 17, 17, 1));
      width: 100%;
      height: 300px;
    }
  `;

  return (
    <div
      className={`fixed min-h-screen ${
        activeProj ? "translate-y-0" : "translate-y-[-5000px]"
      } transease flex-col flex justify-between items-center w-screen bg-[#111111] bg-opacity-[.99] z-[500] top-0 left-0 overflow-hidden`}
    >
      <ProjHeader loading={loading} bgImage={activeProj.bgImage}>
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-pink-500 opacity-50 rounded-xl" />
      </ProjHeader>

      <div className="flex items-center p-4 mt-[-50px] h-max z-[600] gap-4 justify-center">
        <h1 className="md:text-5xl z-[600] p-1 text-3xl self-center bg-clip-text text-transparent w-max bg-gradient-to-br from-blue-500 to-pink-600 elegant font-bold tracking-tight">
          {activeProj.title}
        </h1>
        <a
          onClick={() => {
            !activeProj.path && alert("Project not yet deployed.");
          }}
          href={activeProj.path ? activeProj.path : void 1}
          target="_blank"
        >
          <SVG
            color={"white"}
            path={
              "M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
            }
          />
        </a>
      </div>

      <div className="w-10/12">
        {activeProj.desc.split("\n").map((sentence) => {
          return (
            <ol className="text-md mt-2 lg:text-xl font-light">
              <li className="elegant">- {sentence}</li>
            </ol>
          );
        })}
      </div>

      <div className="w-10/12 flex flex-wrap items-center justify-center gap-4 p-4 mt-4">
        {activeProj.stack.split(",").map((tech) => {
          return (
            <div className="elegant min-w-[100px] text-center bg-gradient-to-br from-blue-500 to-pink-500 rounded-xl p-4">
              {tech}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => {
          setActiveProj(null);
        }}
        className=" transease mb-6 cursor-pointer hover:translate-y-[-5px] bg-[#222222] hover:bg-opacity-90 bg-opacity-20 w-9/12 h-[100px] bottom-10 rounded elegant tracking-widest uppercase font-thin text-center"
      >
        Go Back
      </button>
    </div>
  );
}

function ProjPortfolio() {
  const [activeProj, setActiveProj] = useState();
  const [hoveredProj, setHoveredProj] = useState(null);

  useEffect(() => {
    console.log("active", activeProj);
  }, [activeProj]);

  useEffect(() => {
    console.log("hovered", hoveredProj);
  }, [hoveredProj]);

  return (
    <div className="flex justify-center flex-wrap items-center gap-4 p-4 max-w-[1000px] w-11/12">
      {projects.map((project, indx) => {
        return (
          <ProjectPreview
            onClick={() => setActiveProj(project)}
            onHover={() => setHoveredProj(project)}
            onLeave={() => setHoveredProj(null)}
            checkActive={
              hoveredProj?.name === project.name && hoveredProj != null
            }
            key={indx}
            bgImage={project.bgImage}
            desc={project.desc}
            stack={project.stack}
            title={project.title}
          />
        );
      })}

      {activeProj && (
        <ActiveProjModal
          activeProj={activeProj}
          setActiveProj={setActiveProj}
        />
      )}
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState({
    bg: "bg-[#222222]",
    txt: "#ff00bf",
    highlight: "#111111",
  });

  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   console.log("loading", loading);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, []);

  return (
    <Theme
      id="APP"
      loading={loading}
      highlight={theme.highlight}
      bgColor={theme.bg}
      txtColor={theme.txt}
    >
      <ThemeContext.Provider value={{ theme, setTheme, loading, setLoading }}>
        <Header />

        {loading ? (
          <></>
        ) : (
          <>
            <Nav />
            <ProjPortfolio />
          </>
        )}
      </ThemeContext.Provider>
    </Theme>
  );
}

export default App;

import styled from "styled-components";

const ProjPrevImg = styled.div`
  background-image: url(${(props) => props.bg});
`;

export default function ProjectPreview({
  bgImage,
  title,
  desc,
  stack,
  onClick,
  onHover,
  onLeave,
  checkActive,
}) {
  let stackArray = stack.split(",");

  return (
    <div
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`bg-gray-800 hover:scale-105 ${
        checkActive ? "hover:opacity-100 opacity-50" : ""
      } transease cursor-pointer backdrop-blur-2xl drop-shadow-2xl md:w-[275px] w-full flex-col justify-around flex rounded-2xl p-4`}
    >
      <ProjPrevImg
        bg={bgImage}
        className={`md:h-[150px] h-[220px] w-full bg-cover bg-top rounded-xl mb-4`}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-pink-500 opacity-50 rounded-xl" />
      </ProjPrevImg>

      <h2 className="p-1 bg-clip-text text-2xl text-transparent font-black w-full bg-gradient-to-br from-blue-500 to-pink-600 elegant">
        {title}
      </h2>

      {/* <div className="flex gap-2 mt-2">
          { stackArray.map((item, indx) => {
            return (
              <div key={indx} className={`bg-gray-700 bg-opacity-5`}>
                <p className="p-[.5em]">
                  {item}
                </p>
              </div>
            );
          }) }
        </div> */}
    </div>
  );
}

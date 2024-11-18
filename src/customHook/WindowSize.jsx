import UseWindowSize from "./useWindowSize";

const WindowSizeComponent = () => {
  const { width, height } = UseWindowSize();
  return (
    <>
      <h1>Window Dimensions</h1>
      <p>
        Width:{width}px,Height:{height}
      </p>
    </>
  );
};

export default WindowSizeComponent;

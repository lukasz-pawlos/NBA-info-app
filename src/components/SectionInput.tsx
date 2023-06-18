
const SectionInput = (props: any) => {
  // @ts-ignore
  return (
    <div
      className="bg-image d-flex flex-column justify-content-center align-items-center"
      // @ts-ignore
      style={{
        // @ts-ignore
        backgroundImage: `url(http://localhost:3000/backg.png)`,
        height: '80vh'
      }}
    >
      {props.isActive ?
        <div>

          <h1 className="text-white fs-1 py-4">Find your player</h1>
          <form action="">
            <input type="text"
              className="form-control"
              placeholder="playerID" />
          </form>
        </div> :
        <div></div>
      }
    </div>

  );
}

export default SectionInput;
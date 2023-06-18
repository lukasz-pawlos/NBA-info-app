
const SectionInput = () => {
// @ts-ignore
    return (
<div
  className="bg-image d-flex flex-column justify-content-center align-items-center"
  // @ts-ignore
  style={{
    // @ts-ignore
    backgroundImage: `url('backg.png')`,
    height: '80vh'
    }}
>
  <h1 className="text-white fs-1">Find your player</h1>
  <form action="">
  <input type="text" 
  className="form-control"
  placeholder="playerID"/>
  </form>
</div>
        
      );
    }
    
    export default SectionInput;
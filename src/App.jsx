import Random from "./component/Random";
import Tag from "./component/Tag";
function  App() {
  return <div className="w-full h-screen relative flex items-center flex-col overflow-x-hidden background">
    <h1 className="bg-white ml-[25px] w-11/12  mx-auto absolute text-center mt-[40px] rounded-sm">Random GIFS</h1>
    <div className="flex w-full flex-col mt-[80px] items-center gap-y-10">
      <Random/>
      <Tag/>
    </div>
  </div>;
}
export default App
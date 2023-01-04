import { type FormEvent, useState } from "react";
import { api } from "../../utils/api";

const Uploader = () => {
  const hello = api..useQuery({ text: "from tRPC" });
  const [value, setValue] = useState("");
  const [santri, setSantri] = useState("");
  const handleChange = (e: FormEvent) => {
    //solution
    const FORM = e.target as HTMLInputElement;
    const VALUE = FORM.value;
    e.preventDefault();
    setValue(VALUE);
    if (VALUE == "hello") {
      setValue("Hi there :)");
    }
  };

  // const postSantri =()=>{
  //   fetch('http://localhost:3000/game', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: formData, // Use your own property name / key
  //     }),
  // }

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    setSantri(value);
  };
  return (
    <div className="rounded-md bg-white p-10 shadow-xl">
      <div className="font-[montserrat] text-2xl font-bold">{santri}</div>
      <form>
        <input className="w-full rounded-md border" onChange={handleChange} />
        <div className="p-1" />
        <button
          className="rounded-sm bg-purple-500 px-8 py-2 font-[montserrat] text-xs font-bold text-white active:bg-purple-600"
          onClick={handleClick}
          type="submit"
        >
          Add
        </button>
      </form>
      <div className="p-1" />

      <form>
        {hello.data ? (
          <select className="w-full overflow-visible rounded-md border">
            {hello.data ? <option>{hello.data.greetings}</option> : <></>}
            {/* <option>asd</option> */}
          </select>
        ) : (
          <select disabled className="w-full.">
            <option>Loading...</option>
          </select>
        )}
      </form>
    </div>
  );
};

export default Uploader;

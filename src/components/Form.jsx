import { useRef } from "react";

function Form({ getData }) {
  const inputText = useRef();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    getData(inputText.current.value);
  };
  return (
    <div>
      <form className="flex items-end gap-3" onSubmit={hanldeSubmit}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">User Name:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            ref={inputText}
          />
        </label>
        <button className="btn bg-secondary">Submit</button>
      </form>
    </div>
  );
}

export default Form;

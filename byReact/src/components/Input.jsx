import "../App.css";

export default function Input() {
  return (
    <>
      <form>
        <div clasName="taskInput">
          <input type="text"></input>
        </div>
        <div className="submitButton">
          <button type="submit" class="btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

import Input from "./Input";

export default function Main() {
  return (
    <>
      <div className="appBody">
        <div>
          <h2>Create a Task</h2>
          <Input />
          <div className="tasks">
            <h2>Tasks</h2>
          </div>
        </div>
      </div>
    </>
  );
}

import { Component, createEffect, createSignal } from "solid-js";
import { Editor } from "solid-monaco";
const App: Component = () => {
  const [signal, setSignal] = createSignal("function(){}");
  createEffect(() => {
    console.log(signal());
  });
  return (
    <div>
      <Editor
        value={signal}
        onChange={(e) => {
          if (e) setSignal(e);
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
        options={{
          theme: "vs-dark",
        }}
      />
    </div>
  );
};

export default App;

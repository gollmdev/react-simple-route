import "@/core/component-registry/module-auto-loader";
import ViewResolver from "./core/ui-renderer/ViewResolver";

function App() {

  return (
    <>
     {/* <Button type="primary">Button</Button> */}
      <ViewResolver view="home" name="test" />
    </>
  )
}

export default App

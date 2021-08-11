import { Card, ProductImage, ProductInfo } from "./components";
import { ColorPickerProvider } from "./context";

function App() {
  return (
    <main>
      <ColorPickerProvider>
        <Card>
          <ProductImage />
          <ProductInfo />
        </Card>
      </ColorPickerProvider>
    </main>
  );
}

export default App;

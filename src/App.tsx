import TextCompareMobileHeader from "./components/TextCompareMobileHeader";
import TextCompareControlsMobile from "./components/TextCompareControlsMobile";
import TextCompareWorkspaceMobile from "./components/TextCompareWorkspaceMobile";

const App = () => {
  return (
    <main className="min-h-screen bg-[#F3F3F4]">
      <TextCompareMobileHeader />
      <TextCompareControlsMobile />
      <TextCompareWorkspaceMobile />
    </main>
  );
};

export default App;

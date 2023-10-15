import './App.css';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const colors = ['#FF5733', '#3399FF', '#33FF57', '#FF33A8','#000080','#FFFF00','#FF00FF','#808080','#000000'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

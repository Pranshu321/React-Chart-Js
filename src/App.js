import './App.css';
import Barchart from './Charts/Barchart';
import DonutChart from './Charts/DonutChart';
import LineCharts from './Charts/LineChart';
import PieChart from './Charts/PieChart';

function App() {
  return (
    <>
    <div className='App'>

    <h2 style={{ marginTop: "90px"}} >   Barchart</h2>
    <Barchart />
    <h2 style={{marginTop: "90px"}}>Donut Chart</h2>
    <DonutChart />
    <h2 style={{marginTop: "90px"}}>Line Chart</h2>
    <LineCharts />
    <h2 style={{marginTop: "90px"}}>Pie Chart</h2>
    <PieChart />
    </div>
    </>
  );
}

export default App;

import './App.css';
import { DashboardRequest } from './protoc_generated/dashboard_pb'
import { DashboardClient } from './protoc_generated/dashboard_grpc_web_pb' 

// Main grpc client:
var client = new DashboardClient('http://localhost:8080')

function App() {


  const getDashboardCall = () => {
    // Request Object:
    var dashboard_id = "2000"
    var dashboardRequest = new DashboardRequest(dashboard_id)
    client.getDashboard(dashboardRequest, {}, (err, response) => {
      console.log({err, response});
    }) 

    
  }
  

  return (
    <div>
        <button onClick={getDashboardCall}>Click</button>
    </div>
  );
}

export default App;

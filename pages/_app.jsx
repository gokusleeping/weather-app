import "../css/App.module.css";
import "../css/form.module.css";
import "../css/weather.module.css";
import "../css/index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";

const App = ({ Component, props }) => {
  return <Component {...props} />;
};
export default App;

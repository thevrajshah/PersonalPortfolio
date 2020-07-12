import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("Root"));

serviceWorker.unregister();

// 10px = 0.625rem
// 12px = 0.75rem
// 14px = 0.875rem
// 16px = 1rem (base)
// 18px = 1.125rem
// 20px = 1.25rem
// 24px = 1.5rem
// 30px = 1.875rem
// 32px = 2rem

import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import { QueryClient, QueryClientProvider } from "react-query";
import Index from "views/Index";

const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Index />
  </QueryClientProvider>,
  document.getElementById("root")
);

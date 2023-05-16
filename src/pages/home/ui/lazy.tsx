import { lazy } from "react";

const lazyHome = lazy(()=> import("./index"));

export default lazyHome;
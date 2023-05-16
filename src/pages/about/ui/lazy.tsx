import { lazy } from "react";

const lazyAbout = lazy(()=> import("./index"));

export default lazyAbout;
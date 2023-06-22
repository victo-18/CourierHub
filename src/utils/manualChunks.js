import { dependencies } from "../../package.json";

const a = Object.keys(dependencies);
const errors = ["@emotion/react", "@emotion/styled", "react-dom", "react"];

const dependenciesList = a.filter((value) => !(errors.includes(value)));

const manualChunks = (id) => {
    if (id.includes("node_modules")) {
        for (const dep of dependenciesList) if (id.includes(dep)) return `vendor_${dep}`;
        return "vendor";
    }
};

export { manualChunks };
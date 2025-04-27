import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    
    layout("./layouts/pages.tsx", [
        route("help", "./routes/help.tsx"),
        route("policy", "./routes/policy.tsx")
    ])
] satisfies RouteConfig;

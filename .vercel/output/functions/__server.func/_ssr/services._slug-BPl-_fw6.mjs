import { i as services } from "./data-D-Bsdiz7.mjs";
import {
  f as lazyRouteComponent,
  p as createFileRoute,
} from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-BPl-_fw6.js
var $$splitComponentImporter = () => import("./services._slug-BlePHpSm.mjs");
var Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    return {
      meta: [
        { title: service ? `${service.title} | Exotica Lifespace` : "Service | Exotica Lifespace" },
        {
          name: "description",
          content: service?.short ?? "Exotica Lifespace service detail.",
        },
      ],
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
//#endregion
export { Route as t };

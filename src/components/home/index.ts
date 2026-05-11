
import { registerLazyViews } from "@/core/component-registry";
import type { InferViewRegistryFromLoaders } from "@/core/component-registry/registry-types";

const homeViewLoaders = {
    home: () => import("./home"),
    
};
// ;
declare module "@/core/component-registry/registry-types" {
    interface ViewRegistry extends InferViewRegistryFromLoaders<typeof homeViewLoaders> {}
}

registerLazyViews(homeViewLoaders);


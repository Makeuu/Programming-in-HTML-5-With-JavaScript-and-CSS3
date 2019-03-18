import { ResolvedComponent } from "./componentResolver";
import { IComponent } from "../../interfaces/iComponent";
export declare class NamedComponentResolver {
    private componentProvider;
    private agComponentUtils;
    resolve<A extends IComponent<any> & B, B>(propertyName: string, componentNameOpt?: string): ResolvedComponent<A, B>;
}

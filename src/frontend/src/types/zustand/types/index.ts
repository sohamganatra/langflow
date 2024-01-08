import { APIClassType, APIDataType } from "../../api";

export type TypesStoreType = {
    types: { [char: string]: string };
    setTypes: (newState: {}) => void;
    templates: { [char: string]: APIClassType };
    setTemplates: (newState: {}) => void;
    data: APIDataType;
    setData: (newState: {}) => void;
    getTypes: () => Promise<void>;
    setFilterEdge: (newState) => void;
    getFilterEdge: any[];
}
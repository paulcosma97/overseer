import Guard from "../security/guards/Guard";
import { Class } from "../misc/CustomTypes";

export default class WayDetails {

    public static defaults(details: WayDetails): WayDetails {
        return {
            path: '/',
            method: 'get',
            statusCode: 200,
            produces: ['application/json'],
            consumes: ['application/json'],
            guards: [],
            ...details
        };
    }

    public path?: string;
    public method?: string;
    public statusCode?: number;
    public produces?: string[];
    public consumes?: string[];
    public guards?: Class<Guard>[];
}
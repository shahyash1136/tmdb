import { createContext } from "react";

//context.displayName is mondatory to availe data in consumer with that name

export const WebConfigDataContext = createContext(null);
WebConfigDataContext.displayName = "WebConfigData";

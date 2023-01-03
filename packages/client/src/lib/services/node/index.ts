import { getNodeStats } from "./getNodeStats";
import { watchNode } from "./watchNode";
import { unwatchNode } from "./unwatchNode";

const nodeService = () => {};

nodeService.getNodeStats = getNodeStats;
nodeService.watchNode = watchNode;
nodeService.unwatchNode = unwatchNode;

export { nodeService };

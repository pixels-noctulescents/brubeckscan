import { getDataStaked } from "./getDataStaked";
import { getRewardsSent } from "./getRewardsSent";

const nodesController = () => {};

nodesController.getDataStaked = getDataStaked;
nodesController.getRewardsSent = getRewardsSent;

export { nodesController };

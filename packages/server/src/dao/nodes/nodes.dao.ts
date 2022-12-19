import { prisma } from "../../clients/prisma";

const nodesDAO = () => {};

nodesDAO.watchNode = async (userAddress: string, nodeAddress: string) => {
  try {
    const node = await prisma.node.create({
      data: { userAddress: userAddress, address: nodeAddress },
    });
    return node;
  } catch (e) {
    throw e;
  }
};

nodesDAO.unwatchNode = async (nodeId: string) => {
  try {
    const node = await prisma.node.delete({
      where: {
        id: nodeId,
      },
    });

    return node;
  } catch (e) {
    throw e;
  }
};

nodesDAO.updateNode = async (nodeId: string, name: string) => {
  try {
    const node = await prisma.node.update({
      where: {
        id: nodeId,
      },
      data: {
        name: name,
      },
    });

    return node;
  } catch (e) {
    throw e;
  }
};

export { nodesDAO };

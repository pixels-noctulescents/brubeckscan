import { prisma } from "../../clients/prisma";

const nodesDAO = () => {};

nodesDAO.watchNode = async (userAddress: string, nodeAddress: string) => {
  try {
    const user = await prisma.user.update({
      where: {
        address: userAddress,
      },
      data: {
        Node: {
          create: {
            address: nodeAddress,
          },
        },
      },
      include: {
        Node: true,
      },
    });
    return user;
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

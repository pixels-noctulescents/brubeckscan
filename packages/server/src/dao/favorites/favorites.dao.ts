import { prisma } from "../../clients/prisma";

const favoritesDAO = () => {};

favoritesDAO.find = async ( id: string) => {
  try {
    const favorite = await prisma.favorite.findUnique({
      where: {
        id: id
      }
    })

    return favorite;
  } catch (e) {
    throw e;
  }
};

favoritesDAO.save = async (
  userAddress: string,
  nodeAddress: string,
  nodeName: string
) => {
  try {
    const favorite = await prisma.favorite.create({
      data: {
        userAddress: userAddress,
        address: nodeAddress,
        name: nodeName,
      },
    });
    return favorite;
  } catch (e) {
    throw e;
  }
};

favoritesDAO.delete = async (id: string) => {
  try {
    const favorite = await prisma.favorite.delete({
      where: {
        id
      },
    });

    return favorite;
  } catch (e) {
    throw e;
  }
};

favoritesDAO.update = async (id: string, data: object) => {
  try {
    const favorite = await prisma.favorite.update({
      where: {
        id,
      },
      data
    });

    return favorite;
  } catch (e) {
    throw e;
  }
};

export { favoritesDAO };

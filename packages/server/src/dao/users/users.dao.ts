import { prisma } from "../../clients/prisma";

const UsersDAO = () => { };

UsersDAO.count = async () => {
  try {
    const count = await prisma.user.count();
    return count;
  } catch (e) {
    throw e;
  }
};

UsersDAO.update = async (address: string, data: any) => {
  try {
    const user = await prisma.user.update({
      where: {
        address: address,
      },
      data: data,
      include: {
        Favorite: true
      }
    });

    return user;
  } catch (e) {
    throw e;
  }
};

UsersDAO.create = async (address: string) => {
  try {
    let user;

    user = {
      address: address,
      Favorite: {
        create: {
          address: address,
        },
      },
    };

    const createUser = await prisma.user.create({
      data: user,
      include: {
        Favorite: true,
      },
    });

    return createUser;
  } catch (e) {
    throw e;
  }
};

UsersDAO.find = async (address: string) => {
  const user = await prisma.user.findUnique({
    where: {
      address: address,
    },
    include: {
      Favorite: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  return user;
};

UsersDAO.delete = async (address: string) => {
  const user = await prisma.user.delete({
    where: {
      address: address,
    },
    include: {
      Favorite: true,
    },
  });

  return user;
};

export default UsersDAO;

import { Prisma, User } from "@prisma/client";
import { prisma } from "../../clients/prisma";

const usersDAO = () => {};

usersDAO.count = async () => {
  try {
    const count = await prisma.user.count();
    return count;
  } catch (e) {
    throw e;
  }
};

usersDAO.createUser = async (address: string) => {
  try {
    let user: Prisma.UserCreateInput;

    user = {
      address: address,
      Node: {
        create: {
          address: address,
        },
      },
    };

    const createUser = await prisma.user.create({
      data: user,
      include: {
        Node: true,
      },
    });

    return createUser;
  } catch (e) {
    throw e;
  }
};

usersDAO.findUserByAddress = async (address: string) => {
  const user = await prisma.user.findUnique({
    where: {
      address: address,
    },
    include: {
      Node: true,
    },
  });

  return user;
};

usersDAO.deleteUserByAddress = async (address: string) => {
  const user = await prisma.user.delete({
    where: {
      address: address,
    },
    include: {
      Node: true,
    },
  });

  return user;
};

export { usersDAO };

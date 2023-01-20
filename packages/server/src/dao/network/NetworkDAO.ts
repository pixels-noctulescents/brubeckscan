import { prisma } from "../../clients/prisma";

const NetworkDAO = () => { };

NetworkDAO.getTVLHistory = async () => {
    try {
        const history = await prisma.brubeckStats.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return history;
    } catch (e) {
        throw e;
    }
};

export default NetworkDAO;
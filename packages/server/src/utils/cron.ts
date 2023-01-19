import schedule from "node-schedule";
import NetworkManager from "../managers/NetworkManager";
import { prisma } from "../clients/prisma";

const Cron = () => { };

Cron.init = () => {
    schedule.scheduleJob("@hourly", async () => {
        const stats = await NetworkManager.getNetworkStats();

        if (stats) {
            const saved = await prisma.brubeckStats.create({
                data: {
                    spotAPR: stats.stats.SPOTAPR,
                    spotAPY: stats.stats.SPOTAPY,
                    dailyDataStaked: stats.stats["24DATASTAKED"],
                    dailyAPR: stats.stats["24APR"],
                    dailyAPY: stats.stats.SPOTAPY,
                    spotDataStaked: stats.stats.SPOTDATASTAKED
                }
            })

            return saved ? true : false;
        }
    });
};

export default Cron;
import express from "express";
import { sender } from "../utils/sender";
import { Request, Response, NextFunction } from "express";
import { octokit } from "../clients/octokit";
import { cache } from "../clients/cache";

const GH_OWNER = "adamphivo";
const GH_REPO = "brubeckAPI";

const AppRouter = express.Router();

AppRouter.get("/version", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const cached: any = cache.get("appLatestRelease");

        if (cached) return sender.success(res, { latestRelease: cached.data });

        const latestRelease = await octokit.rest.repos.getLatestRelease({ owner: GH_OWNER, repo: GH_REPO })

        if (latestRelease) {
            cache.set("appLatestRelease", latestRelease, 60 * 30);
            return sender.success(res, { latestRelease: latestRelease.data }, 200);
        }

        return sender.failure(res, { "app_version": "fail" });
    } catch (e) {
        console.log(e);
        if (e instanceof Error) {
            return sender.error(res, e);
        }
    }
})

export default AppRouter;
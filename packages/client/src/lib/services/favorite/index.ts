import { save } from "./save"
import { update } from "./update";
import { remove } from "./remove";
import { getStatus } from "./getStatus";
import { resetTotals } from "./resetTotals";

const FavoriteService = () => { };

FavoriteService.save = save;
FavoriteService.update = update;
FavoriteService.remove = remove;
FavoriteService.getStatus = getStatus;
FavoriteService.resetTotals = resetTotals;

export default FavoriteService;
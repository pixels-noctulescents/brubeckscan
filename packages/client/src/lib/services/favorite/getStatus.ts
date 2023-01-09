export function getStatus(networkCodes: any[], nodeCodes: any[]): boolean {
    if (!networkCodes.length || !nodeCodes.length) {
        return false;
    }
    // Latest network codes
    const latestNetworkCode = networkCodes[0].code;
    const beforeLatestNetworkCode = networkCodes[1].code;

    // Latest node codes
    const latestNodeCode = nodeCodes[0].id;
    const beforeLatestNodeCode = nodeCodes[1].id;

    if (latestNetworkCode === latestNodeCode) {
        return true;
    }
    if (latestNetworkCode === beforeLatestNetworkCode) {
        return true;
    }

    if (beforeLatestNetworkCode === beforeLatestNodeCode) {
        return true;
    }
    if (beforeLatestNetworkCode === latestNodeCode) {
        return true;
    }
    if (latestNodeCode === beforeLatestNetworkCode) {
        return true;
    }
    if (beforeLatestNodeCode === latestNetworkCode) {
        return true;
    }

    return false;
}
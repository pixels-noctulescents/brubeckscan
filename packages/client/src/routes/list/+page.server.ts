import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { PUBLIC_API_BASE_URL, PUBLIC_API_TOKEN } from "$env/static/public";
import validator from "validator";

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  add: async ({ request, fetch }) => {
    try {
      const data = await request.formData();

      const address = data.get("address");
      const user = data.get("userAddress");
      // Check address
      if (!address) {
        return fail(400, { address, missing: true });
      }

      if (!validator.isEthereumAddress(address as string)) {
        return fail(400, { address, incorrect: true });
      }

      const init = {
        headers: new Headers({
          Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
          "Content-Type": "application/json",
        }),
        method: "POST",
        body: JSON.stringify({ address }),
      };

      const response = await fetch(
        `${PUBLIC_API_BASE_URL}/api/nodes/${user}`,
        init
      );

      return { success: true };
    } catch (e) {
      console.log(e);
      return fail(400, { error: e, isError: true });
    }
  },
  remove: async ({ request, fetch }) => {
    const data = await request.formData();
    const nodeId = data.get("nodeId");

    const init = {
      headers: new Headers({
        Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
      method: "DELETE",
      body: JSON.stringify({ nodeId }),
    };

    const response = await fetch(`${PUBLIC_API_BASE_URL}/api/nodes`, init);

    return { success: true };
  },
};

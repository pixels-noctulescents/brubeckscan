<script lang="ts">
	import { usersCount } from '$lib/stores';
	import type { OctokitRLatestReleaseResponse } from '@brubeckscan/common/types/octokit';

	export let latestRelease: OctokitRLatestReleaseResponse;
</script>

<div
	class="flex w-full items-center justify-center bg-slate-900 py-2 px-10 text-xs text-white lg:text-sm"
>
	<div class="flex w-full max-w-screen-lg justify-between">
		<div>
			<a href="https://github.com/adamphivo/brubeckAPI" target="_blank" rel="noreferrer"
				>BrubeckScan</a
			>
		</div>
		<div class="flex gap-2">
			<p>v.</p>
			<p class="text-blue-200">
				<a target="_blank" href={latestRelease.html_url} rel="noreferrer"
					>{latestRelease.tag_name}</a
				>
			</p>
			<p>U {$usersCount}</p>
		</div>
	</div>
</div>

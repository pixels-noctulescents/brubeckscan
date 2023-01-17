<script lang="ts">
	import Icon from '@iconify/svelte';
	import { usersCount } from '$lib/stores';
	import type { OctokitRLatestReleaseResponse } from '@brubeckscan/common/types/octokit';

	export let latestRelease: OctokitRLatestReleaseResponse;

	const GH_REPO_URL = 'https://github.com/adamphivo/brubeckscan';
	const GH_PROFILE_URL = 'https://github.com/adamphivo';
</script>

<div
	class="flex w-full items-center justify-center bg-slate-900 py-2 px-10 text-xs text-white dark:bg-neutral-800 lg:text-sm"
>
	<div class="flex w-full max-w-screen-lg justify-between">
		<div class="flex items-center gap-4">
			<a href={GH_REPO_URL} target="_blank" rel="noreferrer">BrubeckScan</a>
			<div class="flex items-center gap-1">
				<a href={GH_PROFILE_URL} target="_blank" rel="noreferrer">
					<Icon icon="mdi:github" width="20" />
				</a>
			</div>
		</div>
		<div class="flex gap-2">
			<p>v.</p>
			<p>
				<a target="_blank" href={latestRelease.html_url} rel="noreferrer">
					<span class="text-blue-500">{latestRelease.tag_name}</span>
				</a>
			</p>
			<p>U <span class="text-blue-500">{$usersCount}</span></p>
		</div>
	</div>
</div>

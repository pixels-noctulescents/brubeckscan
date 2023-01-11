<script lang="ts">
    export let handle: any;
  
    let loading = false;
  
    async function main() {
      try {
        loading = true;
        await handle();
        loading = false;
      } catch (e) {
        console.log(e);
      }
    }
  </script>
  
  <button 
    on:click={main} 
    style:color={loading ? "orange" : ""}
    class="transition duration-150 ease-in flex items-center hover:bg-slate-700 gap-2 px-2 py-1 rounded-sm hover:shadow-sm hover:text-white">
    <slot/>
  </button>
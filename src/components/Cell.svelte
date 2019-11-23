<script>
  export let value = null;
  export let type = "label";

  const SLOTS = $$props.$$slots;
</script>
<style>
td {
  border-bottom: solid 1px #ccc;
}
</style>

<td>
  {#if SLOTS}
    <slot/>
  {:else}
    {#if type == "label"}
      {value}
    {:else}
      {#if type == 'input'}
        <input bind:value={value}/>
      {/if}
    {/if}
  {/if}
</td>

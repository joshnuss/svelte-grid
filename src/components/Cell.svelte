<script>
  export let value = null;
  console.log($$props);
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
    {value}
  {/if}
</td>

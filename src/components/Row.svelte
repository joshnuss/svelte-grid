<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<style>
  tr {
    cursor: pointer;
  }
  tr:hover {
    background: #eee;
  }
</style>

<tr on:click|preventDefault={() => dispatch('click')}><slot/></tr>

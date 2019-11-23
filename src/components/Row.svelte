<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
</script>

<tr on:click|preventDefault={() => dispatch('click')}><slot/></tr>

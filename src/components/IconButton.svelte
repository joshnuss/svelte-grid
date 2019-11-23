<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let icon;
</script>
<button on:click|preventDefault|stopPropagation={() => dispatch('click')}><span class="fa fa-{icon}"/></button>

<script>
  import Grid from './components/Grid.svelte';
  import Rows from './components/Rows.svelte';
  import Row from './components/Row.svelte';
  import Cell from './components/Cell.svelte';
  import IconButton from './components/IconButton.svelte';

  export let products;

  function handleRemove(product) {
    if (confirm("Are you sure?")) {
      // ...
    }
  }

  function handleClick(product) {
    alert(`You clicked "${product.title}"!`)
  }
</script>

<Grid>
  <Rows>
    {#each products as product}
      <Row on:click={() => handleClick(product)}>
        <Cell>{product.title}</Cell>
        <Cell>{product.price}</Cell>
        <Cell>
          <IconButton icon="trash" on:click={() => handleRemove(product)}/>
        </Cell>
      </Row>
    {/each}
  </Rows>
</Grid>

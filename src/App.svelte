<script>
  import Grid, {Columns, Column, Rows, Row, Cell} from './components/Grid.svelte';
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
  <Columns>
    <Column>Title</Column>
    <Column>Price</Column>
  </Columns>
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

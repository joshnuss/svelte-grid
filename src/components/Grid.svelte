<script context="module">
  import Columns from './Columns.svelte'
  import Column from './Column.svelte'
  import Rows from './Rows.svelte';
  import Row from './Row.svelte';
  import Cell from './Cell.svelte';

  export {Columns, Column, Rows, Row, Cell}
</script>

<style>
table {
  border: solid 1px #ccc;
}
</style>

<table>
  <slot/>
</table>

<script lang="ts">
  import Tooltip from "./Tooltip.svelte";

  let foo: number = 0;

  function choseNumber(n: number) {
    foo = n;
  }
</script>

<div class="h-screen bg-gray-600">
  <div class="container m-auto">
    <!-- <div class="container"> -->
    <!--   <input type="number" bind:value={foo} on:change={() => choseNumber(foo)} /> -->
    <!--   <Counter {foo} /> -->
    <!-- </div> -->
    <Tooltip />
    <div class="container"></div>
  </div>
</div>

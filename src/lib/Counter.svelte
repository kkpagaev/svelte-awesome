<script lang="ts">
export let foo: number;

let count = 0;

$: doubled = doubleCount(count);

function doubleCount(count: number) {
  return count * 2
}

$: if (count >= 10) {
  alert("Count is dangerously high!");
}

</script>

<button on:click={() => count++}>
  {foo} count is {count} and doubled is {doubled}
</button>

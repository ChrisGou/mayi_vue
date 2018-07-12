<template>
  <div class="about">
    <h1>This is an about page</h1>
    <group>
      <cell title="title" value="value"></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from "vux";

export default {
  components: {
    Group,
    Cell
  }
};
</script>

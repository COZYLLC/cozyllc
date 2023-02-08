<template>
  <div class="page">
    <p class="title heading is-2">직원 소개</p>
    <div class="columns" v-for="i in Math.round(employees.length / 3)" :key="i">
      <div class="column" v-for="j in 3" :key="j">
        <employee-card
          v-if="(i - 1) * 3 + (j - 1) < employees.length"
          :name="employees[(i - 1) * 3 + (j - 1)].name"
          :position="employees[(i - 1) * 3 + (j - 1)].position"
          :description="employees[(i - 1) * 3 + (j - 1)].description"
          :image="employees[(i - 1) * 3 + (j - 1)].image"
        />
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeCard from "../../EmployeeCard.vue";
import employees from "@/employees.json";
export default {
  components: { EmployeeCard },
  data() {
    return {
      employees,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .columns {
    padding: 2vh 10vh;
  }
}
</style>

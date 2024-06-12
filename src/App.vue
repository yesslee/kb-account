<template>
  <div class="container">
    <Navigator></Navigator>
    <router-view></router-view>
    <!-- <div class="row"> -->
    <!-- <div class="col"><FilterBar></FilterBar></div>
      <div class="col"><router-view></router-view></div>
    </div> -->
  </div>
</template>

<script>

import { computed,provide } from 'vue';
import { useMemberStore} from '@/stores/transactions.js'
import { useTransactionStore} from '@/stores/transactions.js'
import Navigator from "@/components/Navigator.vue";
// import FilterBar from "@/pages/FilterBar.vue";

const memberStore = useMemberStore;
const transactionStore = useTransactionStore;

const fetchMember = memberStore.fetchMember;
const fetchTransactionList = transactionStore.fetchTransactionList;
// fetchTransactionList("dh1010a");
// fetchMember("dh1010a");


export default{
  name  :'app',
  components : {Navigator},
  setup(){
    const month = new Date().getMonth() + 1;
    console.log('test',month);
    provide('month',month)
  }
}

</script>

<style scoped></style>
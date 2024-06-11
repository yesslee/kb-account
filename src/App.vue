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

<script setup>

import { computed } from 'vue';
import { useMemberStore} from '@/stores/transaction.js'
import { useTransactionStore} from '@/stores/transaction.js'
import Navigator from "@/components/Navigator.vue";
import FilterBar from "@/components/FilterBar.vue";


const memberStore = useMemberStore();
const transactionStore = useTransactionStore();

const fetchMember = memberStore.fetchMember;
const fetchTransaction = transactionStore.fetchTransaction;
fetchTransaction("dh1010a");
fetchMember("dh1010a");

<style scoped></style>

</script>

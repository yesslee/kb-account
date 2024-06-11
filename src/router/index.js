import { createRouter, createWebHistory, isNavigationFailure } from 'vue-router'
import Login from '@/pages/Login.vue'
import TransactionList from '@/pages/TransactionList.vue'
import AddTransaction from '@/pages/AddTransaction.vue'
import Calendar from '@/pages/Calendar.vue'
import Summary from '@/pages/Summary.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/list', name: 'transactionList', component: TransactionList },
    { path: '/list/add', name: 'addTransaction', component: AddTransaction },
    { path: '/summary', name: 'summary', component: Summary },
    { path: '/calendar', name: 'calendar', component: Calendar },
    { path: '/:paths(.*)*', name: 'NotFound', component: NotFound }
  ]
})

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log("@@ 내비게이션 중단: ", failure)
  }
})


export default router;
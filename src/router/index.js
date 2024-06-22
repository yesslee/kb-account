import { createRouter, createWebHistory, isNavigationFailure } from "vue-router";
import { useAuthStore } from '@/stores/auth.js'

import Login from "@/pages/Login.vue";
import UserInfo from "@/pages/UserInfo.vue";
import TransactionList from "@/pages/TransactionList.vue";
import AddTransaction from "@/pages/AddTransaction.vue";
import Calendar from "@/pages/Calendar.vue";
import Summary from "@/pages/Summary.vue";
import NotFound from "@/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/kb-account", name: "login", component: Login },
    { path: "/kb-account/list", name: "transactionList", component: TransactionList, meta: { requiresAuth: true } },
    { path: "/kb-account/list/add", name: "addTransaction", component: AddTransaction, meta: { requiresAuth: true } },
    { path: "/kb-account/list/user", name: "userInfo", component: UserInfo, meta: { requiresAuth: true } },
    { path: "/kb-account/summary", name: "summary", component: Summary, meta: { requiresAuth: true } },
    { path: "/kb-account/calendar", name: "calendar", component: Calendar, meta: { requiresAuth: true } },
    { path: "/kb-account/:paths(.*)*", name: "NotFound", component: NotFound },
  ],
});

// 라우터 가드 설정
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 로그인 상태 확인
    if (!authStore.isLoggedIn) {
      next({ name: 'login' }) // 로그인 페이지로 리다이렉트
    } else {
      next() // 로그인 상태면 접근 허용
    }
  } else {
    next() // requiresAuth가 없는 라우트는 항상 접근 허용
  }
})

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) {
    console.log("@@ 내비게이션 중단: ", failure);
  }
});

export default router;

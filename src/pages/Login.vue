<template>
  <div class="d-flex justify-content-center align-items-center">
    <div style="width: 700px">
      <div class="container card card-body mt-5 w-50">
        <h1 class="text-white bg-primary" style="height: 100px">Login</h1>
        <label class="col fs-5">ID</label>
        <input
          type="text"
          class="form-control"
          v-model="info.memberId"
          required
        />
        <label class="col fs-5">Password</label>
        <input
          type="password"
          class="form-control"
          v-model="info.pw"
          required
        />
        <button class="btn btn-primary mt-5 rounded-pill" @click="login">
          로그인
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMemberStore } from "@/stores/transactions.js";
import { useAuthStore } from "@/stores/auth.js";

const router = useRouter();
// const currentRoute = useRoute();

const memberStore = useMemberStore();
const info = reactive({ memberId: "", pw: "" });

const authStore = useAuthStore();

// const handleLogin = () => {
//   authStore.login();
//   if (router.currentRoute.value.name !== "transactionList") {
//     router.push({ name: "transactionList" });
//   }
// };

const successCallback = () => {
  authStore.login();
  // router.push({ name: "transactionList" });

  if (router.currentRoute.value.name !== "transactionList") {
    router.push({ name: "transactionList" });
  } else router.push({ name: "login" });
};

const failCallback = () => {
  alert("로그인 실패");
};

const setUserInfo = (userInfo) => {
  if (userInfo && userInfo.authenticated) {
    window.localStorage.setItem("userInfo", btoa(JSON.stringify(userInfo)));
  } else {
    window.localStorage.removeItem("userInfo");
  }
};

const getUserInfo = () => {
  let strUserInfo = window.localStorage.getItem("userInfo");
  if (!strUserInfo) {
    return { authenticated: false };
  } else {
    return JSON.parse(window.atob(strUserInfo));
  }
};

const loginProcess = (userid, password, successCallback, failCallback) => {
  const dbMemberList = memberStore.member; // Fetching member data
  const user = dbMemberList.find(
    (user) => user.memberId === userid && user.pw === password
  );
  if (user) {
    let userInfo = {
      authenticated: true,
      userid: user.memberId,
    };
    setUserInfo(userInfo);
    successCallback();
  } else {
    if (failCallback) failCallback();
  }
};

const logoutProcess = (callback) => {
  setUserInfo(null);
  callback();
};

const login = () => {
  loginProcess(info.memberId, info.pw, successCallback, failCallback);
};
</script>

<style scoped></style>

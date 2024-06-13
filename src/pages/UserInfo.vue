<template>
  <div class="d-flex justify-content-center align-items-center">
    <div style="width: 700px">
      <div class="container card card-body mt-3 w-50">
        <h1 class="text-white bg-primary" style="height: 100px">User Info</h1>
        <label class="col fs-5">ID</label>
        <input
          type="text"
          class="form-control"
          v-model="userInfo.memberId"
          disabled
        />
        <label class="col fs-5">Password</label>
        <input type="text" class="form-control" v-model="userInfo.pw" />
        <label class="col fs-5">Name</label>
        <input type="text" class="form-control" v-model="userInfo.name" />
        <label class="col fs-5">Email</label>
        <input type="text" class="form-control" v-model="userInfo.email" />
        <label class="col fs-5">Gender</label>
        <select class="form-select" v-model="userInfo.gender">
          <option selected disabled value="">Choose Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div class="row justify-content-evenly mt-3">
          <button
            type="button"
            class="col btn btn-primary m-1"
            @click="updateInfoHandler()"
          >
            Edit
          </button>
          <button
            type="button"
            class="col btn btn-outline-danger m-1"
            @click="router.push('/list')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useMemberStore } from "@/stores/transactions.js";

const router = useRouter();
const memberStore = useMemberStore();
const { fetchMember, updateMember } = memberStore;

const userInfo = reactive({
  memberId: "",
  pw: "",
  name: "",
  email: "",
  gender: "",
});

// 컴포넌트가 마운트될 때 멤버 정보를 가져오는 함수
onMounted(async () => {
  await fetchMember("dh1010a");
  const member = memberStore.member[0];
  Object.assign(userInfo, member);
});

// 사용자 정보를 업데이트하는 함수
const updateInfoHandler = () => {
  updateMember({ ...userInfo }, () => {
    router.push(`/list`);
  });
  alert("변경 완료");
};
</script>

<style scoped></style>

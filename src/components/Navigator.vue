<template>
  <div class="main-container">
    <nav class="navbar navbar-light">
      <div class="navbar-content">
        <div class="navbar-left">
          <a href="#">KB-ACCOUNT</a>
        </div>
        <div class="navbar-center">
          <img
            src="../img/left_button.png"
            class="nav-icon"
            @click="previousMonth"
          />
          <div class="month-year">
            <a>{{ month }}월</a>
            <a>2024</a>
          </div>
          <img
            src="../img/right_button.png"
            class="nav-icon"
            @click="nextMonth"
          />
        </div>
        <div class="navbar-right">
          <router-link class="nav-link" to="/list"
            ><img src="../img/payment_detail.png" class="nav-icon"
          /></router-link>
          <router-link class="nav-link" to="/summary"
            ><img src="../img/graph_button.png" class="nav-icon"
          /></router-link>
          <router-link class="nav-link" to="/calendar"
            ><img src="../img/calendar_button.png" class="nav-icon"
          /></router-link>
          <router-link class="nav-link" to="/list/user"
            ><img src="../img/profile.png" class="nav-icon"
          /></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref, inject } from "vue";

export default {
  name: "Navigator",
  setup() {
    const month = ref(new Date().getMonth() + 1); // 현재 월로 초기화

    function previousMonth() {
      if (month.value > 1) {
        month.value -= 1;
      } else {
        month.value = 12; // 1월에서 이전 월을 클릭하면 12월로 이동
      }
    }

    function nextMonth() {
      if (month.value < 12) {
        month.value += 1;
      } else {
        month.value = 1; // 12월에서 다음 월을 클릭하면 1월로 이동
      }
    }

    return {
      month,
      previousMonth,
      nextMonth,
    };
  },
};
</script>

<style scoped>
:root {
  --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
    "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
    "Source Han Sans CN", sans-serif;
}

.main-container {
  overflow: hidden;
}

.main-container,
.main-container * {
  box-sizing: border-box;
}

/* 네비게이션 바가 페이지 상단에 고정되도록 수정 */
.navbar {
  position: -webkit-sticky; /* for Safari */  
  position: sticky;
  top: 0;
  z-index: 1000; /* ensure it stays on top */
  background-color: #3b5998; /* 배경색 유지 */
  width: 100%;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  color: white;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-center {
  flex: 1;
  justify-content: center;
}

.navbar a {
  font-family: Roboto, var(--default-font-family);
  font-size: 24px;
  font-weight: 800;
  color: white;
  text-decoration: none;
}

.month-year {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px 0 20px;
}

.navbar img {
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.navbar img.nav-icon:not(:first-child) {
  margin-left: 10px;
}
</style>

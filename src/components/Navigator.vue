<template>
    <div class="main-container">
        <nav class="navbar navbar-light" style="background-color: #3b5998;">
            <div class="navbar">
                <div class="navbar-left">
                    <a>KB-ACCOUNT</a>
                </div>
                <div class="navbar-center">
                    <img src="../img/left_button.png" class="nav-icon">
                    <div class="month-year">
                        <a>6월</a>
                        <a>2024</a>
                    </div>
                    <img src="../img/right_button.png" class="nav-icon">
                </div>
                <div class="navbar-right">
                    <img src="../img/payment_detail.png" class="nav-icon">
                    <img src="../img/graph_button.png" class="nav-icon">
                    <img src="../img/calendar_button.png" class="nav-icon">
                    <img src="../img/profile.png" class="nav-icon">
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navigator'
}
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

.navbar {
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

# Product Name
> KB IT's Your Life 스켈레톤 프로젝트입니다. 

## [전공 D반] Team 3 - Conflict
>  github 관리 중 *충돌*이 너무 많이 일어나서...ㅎㅎ
<table>
<tr><td  align="center"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="양창록"/></td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="오성빈"/></td>
<td  align="center"><img  src="https://github.com/lej8924/kb-account/assets/51228946/7c6ef088-370f-4b27-a20b-c0824c0db397" width="140px;  alt="백도현"/></td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="이은재"/></td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="이은재"/></td>
<tr>
  <td>이은재</td>
  <td>서석현</td>
  <td align="center"><a href="https://github.com/dh1010a">백도현</a> </b><br />Pinia Store<br />Transaction</td></td>
  <td><a href="https://github.com/SuhJiyeon">서지연</a><br/>Router<br/> Calendar & AddTransaction</td>
  <td><a href="https://github.com/yesslee">이예슬</a> <br />Router<br />Login & UserInfo</td>
</tr>
</table>

## Execution Project
1. Install the packages

```sh
git clone https://github.com/lej8924/kb-account.git
cd kb-account
npm install
```
2. Execute the program

You have to run the json-server.
```sh
cd kb-account/db-server
json-server --watch MOCK_DATA.json --port 3001
```
And you are able to run vue.js project.
```sh
cd kb-account
npm run dev
```


# Architecture

<img width="828" alt="image" src="https://github.com/lej8924/kb-account/assets/51228946/c700ba23-79d3-42f9-8512-e7393dfa7c3a">

## Components

<img width="828" alt="image" src="https://github.com/lej8924/kb-account/assets/51228946/9b56db0b-e406-46e3-b3d1-c2abdfd86117">


## UI Components

### Login
![login](https://github.com/lej8924/kb-account/assets/71022086/c0d0676b-82b5-4292-b8a0-530ea10a7497)

> ID : dh1010a | PW : 1234로 로그인하면 됩니다!

### Transaction
![home](https://github.com/lej8924/kb-account/assets/71022086/e778c6d8-5d9b-4260-bb7c-5f5b4185c3b3)

> MOCK서버에서 transaction 내역을 가져와서 보여줍니다.
> Filter를 통해 원하는 내역만 가져올 수 있습니다.

### EditModal
<img width="585" alt="image" src="https://github.com/lej8924/kb-account/assets/51228946/9ddd694d-2da0-464c-a214-aa4ec0891198">

> 내역 클릭시 수정과 삭제를 할 수 있는 모달입니다.

### Chart
![bar](https://github.com/lej8924/kb-account/assets/71022086/da934cdb-b814-4c88-8dfe-76035cadd27e)
![donut](https://github.com/lej8924/kb-account/assets/71022086/d84fbd69-189b-471d-90bc-bf63ab4b2195)

> Bar와 Donut형태로 각각 월별 수입/지출 현황과 카테고리별 지출 현황을 볼 수 있습니다.

### Calendar
![calendar](https://github.com/lej8924/kb-account/assets/71022086/5f1065b2-73a9-4591-97a3-3661ad44b21f)

> 일별 총 수입액과 지출액을 한 눈에 볼 수 있습니다.

## 프로젝트 구조

```bash
.
├── db-server
│   └── MOCK_DATA.json
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── BarChart.vue
│   │   ├── BoardChart.vue
│   │   ├── Navigator.vue
│   │   └── TransactionEditModal.vue
│   ├── pages
│   │   ├── AddTransaction.vue
│   │   ├── Calendar.vue
│   │   ├── FiliterBar.vue
│   │   ├── Login.vue
│   │   ├── NotFound.vue
│   │   ├── Summary.vue
│   │   ├── TransactionList.vue
│   │   ├── TransactionItem.vue
│   │   └── UserInfo.vue
│   ├── router
│   │   └── index.js
│   ├── stores
│   │   ├── auth.js
│   │   └── Transactions.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── README.md
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
```



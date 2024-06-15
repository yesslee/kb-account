
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
  <td align="center">이은재</td>
  <td align="center">서석현</td>
  <td align="center"><a href="https://github.com/dh1010a">백도현</a> </b><br />Pinia Store<br />Transaction</td></td>
  <td align="center"><a href="https://github.com/SuhJiyeon">서지연</a><br/>Calendar <br/> AddTransaction</td></td>
  <td align="center"><a href="https://github.com/yesslee">이예슬</a> <br />Router<br />Login & UserInfo</td>
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

<img width="800" alt="image" src="https://github.com/lej8924/kb-account/assets/51228946/c700ba23-79d3-42f9-8512-e7393dfa7c3a">

# Components

<img width="800" alt="image" src="https://github.com/lej8924/kb-account/assets/51228946/9b56db0b-e406-46e3-b3d1-c2abdfd86117">


# UI Components

<img width="800" src="https://github.com/lej8924/kb-account/assets/51228946/7a0a5565-0cfd-48ec-80b2-06efb40d270e">

## Screen



| 로그인 및 정보 수정 | 거래내역 및 필터링 |
| :---: | :---: |
| <img width="325" alt="Login" src = "https://github.com/lej8924/kb-account/assets/51228946/9fde4eed-e05b-411a-b95a-697e101f9c4a"> | <img width="325" alt="Transaction" src="https://github.com/lej8924/kb-account/assets/51228946/cad87f19-b4b3-4321-9e96-4031329e79ef"> |
| ID : dh1010a PW : 1234로 로그인 | MOCK서버에서 transaction 내역을 가져와서 <br/>  원하는 내역을 보여줍니다. |

| 거래 내역 추가 및 수정 | 거래내역 요약 및 분석|
| :---: | :---: |
| <img width="325" alt="Edit" src = "https://github.com/lej8924/kb-account/assets/51228946/af740e6b-66f1-4bbd-bd7f-0cda3d40743f"> | <img width="325" alt="Summary" src = "https://github.com/lej8924/kb-account/assets/51228946/93cc9675-c86e-4443-a638-0d524f177ead"> |
| 거래 날짜 및 내용을 추가 및 수정합니다. | Bar,Donut,달력 형태로 각각 월별 수입/지출<br>현황과 카테고리별 지출 현황을 볼 수 있습니다. |


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



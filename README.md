
# Product Name
> KB IT's Your Life 스켈레톤 프로젝트입니다. 

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

## [전공 D반] Team 3 - Conflict
>  github 관리 중 *충돌*이 너무 많이 일어나서...ㅎㅎ
<table>
<tr><td  align="center"><img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="양창록"/><br /><b>이은재</b><br>Chart</td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="오성빈"/><br /><b>서석현</b><br>Filter <br> Navigator</td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="안수연"/><br /><b>백도현</b><br />Transaction</td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="이은재"/><br /><b>이예슬</b><br />Calendar</td>
<td  align="center"><img  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA4MjNfMTk4%2FMDAxNjkyODAxNzE0NjM2.SCI5Sn5I8rnL4GZt52HzbI-unZ0V_PaWuTfo6PdyJewg.MJQeysKrPhQ2SvB46pXW7k3ZBIsBq9oeOY4O7BMeCDYg.PNG.uou_xox_s2%2F%25C1%25A6%25B8%25F1_%25BE%25F8%25B4%25C2_%25BE%25C6%25C6%25AE%25BF%25F6%25C5%25A9_5.png&type=a340"  width="120px;"  alt="이은재"/><br /><b>서지연</b><br />Modal</td>
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

## UI Components

### Login
<img src="https://private-user-images.githubusercontent.com/71022086/339650113-c0d0676b-82b5-4292-b8a0-530ea10a7497.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzNDQ0ODYsIm5iZiI6MTcxODM0NDE4NiwicGF0aCI6Ii83MTAyMjA4Ni8zMzk2NTAxMTMtYzBkMDY3NmItODJiNS00MjkyLWI4YTAtNTMwZWExMGE3NDk3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE0VDA1NDk0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM0ZWVhZjBhY2ZhMGJlNDZlYjQ1ZmYwNjI2YmQxYTJhNWZmZjUwNTBiMWYwYTM0Y2E1Y2VmNDNjMDU2OTA3ZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.gHN6FzN-pWUPgoEHhGyuko6dAsbLWi3qVXRUF2wMqsM">

> ID : dh1010a | PW : 1234로 로그인하면 됩니다!

### Transaction
<img src="https://private-user-images.githubusercontent.com/71022086/339650109-e778c6d8-5d9b-4260-bb7c-5f5b4185c3b3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzNDQ0ODYsIm5iZiI6MTcxODM0NDE4NiwicGF0aCI6Ii83MTAyMjA4Ni8zMzk2NTAxMDktZTc3OGM2ZDgtNWQ5Yi00MjYwLWJiN2MtNWY1YjQxODVjM2IzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE0VDA1NDk0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIyMDYzNmU5MGY0MTQ3OWQwYWE2NWNlNWIyYTdjM2RiOTZiZGI4YWNhOWU1ZDM3OGQ5NWM3MmI4OWM1ZGE4YTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hUOXuuQM2F2NRbaJLIc_Dr4mGFqpPwVgC1ZedLA4t24">

> MOCK서버에서 transaction 내역을 가져와서 보여줍니다.
> Filter를 통해 원하는 내역만 가져올 수 있습니다.

### Chart
<img src="https://private-user-images.githubusercontent.com/71022086/339650104-d84fbd69-189b-471d-90bc-bf63ab4b2195.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzNDQ0ODYsIm5iZiI6MTcxODM0NDE4NiwicGF0aCI6Ii83MTAyMjA4Ni8zMzk2NTAxMDQtZDg0ZmJkNjktMTg5Yi00NzFkLTkwYmMtYmY2M2FiNGIyMTk1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE0VDA1NDk0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzYmZhZjE4OWY3NzFjYjliMWQxODFlN2VjYzk2ZTMyM2I0Yzc4MTdmMTJjMTRmM2Q0ZDExMTZhNGJmZTVlOGUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.DndKE1AMvjHX71tsiwlDy6J4skOR4A-kHUj0mNPxal8">
<img src="https://private-user-images.githubusercontent.com/71022086/339650097-da934cdb-b814-4c88-8dfe-76035cadd27e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzNDQ0ODYsIm5iZiI6MTcxODM0NDE4NiwicGF0aCI6Ii83MTAyMjA4Ni8zMzk2NTAwOTctZGE5MzRjZGItYjgxNC00Yzg4LThkZmUtNzYwMzVjYWRkMjdlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE0VDA1NDk0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiODRmZjQzNTE5NmE2NTMyZmZjZTYyYjYwNjNmNDdhY2FhYjBiYzM0NTMwZGRlNDk3N2I5MTI4MDUyYTdhMjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0HPzbMWJPdgfCnKvS5jakaNo7CzgJ1xuxHG7fnZywkY">

> Bar와 Donut형태로 각각 월별 수입/지출 현황과 카테고리별 지출 현황을 볼 수 있습니다.

### Calendar
<img src="https://private-user-images.githubusercontent.com/71022086/339650100-5f1065b2-73a9-4591-97a3-3661ad44b21f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzNDQ0ODYsIm5iZiI6MTcxODM0NDE4NiwicGF0aCI6Ii83MTAyMjA4Ni8zMzk2NTAxMDAtNWYxMDY1YjItNzNhOS00NTkxLTk3YTMtMzY2MWFkNDRiMjFmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA2MTQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNjE0VDA1NDk0NlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdjYzZlYjZkMDAyODM2YjlkZGI2NzNiYzkwM2FjMGZkOTNjN2RkZmIzMDMyNGY0YmE0ODE3MWJiNTk1YTc4ZGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.rKoaRX1V9gv2cuZwmM0ppdt59ttRgPhYBGGEp8qvvIE">

> 일별 총 수입액과 지출액을 한 눈에 볼 수 있습니다.

## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```


## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

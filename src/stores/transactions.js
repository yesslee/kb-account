import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import axios from "axios";

const members = "members";
const transaction = "transactionList";
const BASEURI = "/api";

export const useMemberStore = defineStore("memberStore", () => {
  const state = reactive({
    member: {},
  });

  const fetchMember = async (memberId) => {
    if (!memberId || memberId.trim() === "") {
      alert("멤버 ID는 반드시 입력해야 합니다");
      return;
    }
    try {
      const response = await axios.get(BASEURI + `/${members}`);
      if (response.status === 200) {
        state.member = response.data.filter((member) => member.memberId === memberId);
      } else {
        alert("멤버 조회 실패");
      }
    } catch (error) {
      alert("에러발생 :" + error);
    }
  };

  const updateMember = async ({ id, memberId, name, pw, email, gender }, successCallback) => {
    if (!memberId || memberId.trim() === "") {
      alert("멤버 ID는 반드시 입력해야 합니다");
      return;
    }
    try {
      const payload = { memberId, name, pw, email, gender };
      const response = await axios.put(BASEURI + `/${id}`, payload);
      if (response.data.status === "success") {
        state.member = { id, memberId, name, pw, email, gender };
        successCallback();
      } else {
        alert("거래내역 변경 실패 : " + response.data.message);
      }
    } catch (error) {
      alert("에러발생 :" + error);
    }
  };

  const member = computed(() => state.member);
  return { member, fetchMember };
});

export const useTransactionStore = defineStore("transactionStore", () => {
  const state = reactive({
    transactionList: [],
  });

  const fetchTransactionList = async (memberId, date) => {
    try {
      const response = await axios.get(BASEURI + `/${transaction}`);
      if (response.status === 200) {
        state.transactionList = response.data.filter(
          (transaction) => transaction.memberId === memberId && transaction.date.startsWith(date.substr(0, 7))
        );
      } else {
        alert("데이터 조회 실패");
      }
    } catch (error) {
      alert("에러발생 :" + error);
    }
  };

  const addTransaction = async ({ memberId, date, price, title, category, type }, successCallback) => {
    if (!memberId || memberId.trim() === "") {
      alert("멤버 ID는 반드시 입력해야 합니다");
      return;
    }
    if (
      !date ||
      date.trim() === "" ||
      !price ||
      price.trim() == "" ||
      !category ||
      category.trim() == "" ||
      !type ||
      type.trim() == ""
    ) {
      alert("세부 항목은 반드시 입력해야 합니다");
      return;
    }
    try {
      const payload = { memberId, date, price, title, category, type };
      const response = await axios.post(BASEURI + `/${transaction}`, payload);
      if (response.status === 201) {
        state.transactionList.push({ memberId, date, price, title, category, type });
        successCallback();
      } else {
        alert("거래내역 추가 실패 : " + response.data.message);
      }
    } catch (error) {
      alert("에러발생 :" + error);
      console.log(error);
    }
  };

  const updateTransaction = async ({ id, memberId, date, price, title, category, type }, successCallback) => {
    if (!memberId || memberId.trim() === "") {
      alert("멤버 ID는 반드시 입력해야 합니다");
      return;
    }
    if (
      !date ||
      date.trim() === "" ||
      !price ||
      price.trim() == "" ||
      !category ||
      category.trim() == "" ||
      !type ||
      type.trim() == ""
    ) {
      alert("세부 항목은 반드시 입력해야 합니다");
      return;
    }
    try {
      const payload = { memberId, date, price, title, category, type };
      const response = await axios.put(BASEURI + `/${transaction}` + `/${id}`, payload);
      if (response.status === 200) {
        let index = state.transactionList.findIndex((transaction) => transaction.id === id);
        state.transactionList[index] = { id, memberId, date, price, title, category, type };
        successCallback();
      } else {
        alert("거래내역 변경 실패 : " + response.data.status);
      }
    } catch (error) {
      alert("에러발생 :" + error);
    }
  };

  const deleteTransaction = async (id, successCallback) => {
    try {
      const response = await axios.delete(BASEURI + `/${transaction}` + `/${id}`);
      if (response.status === 200) {
        let index = state.transactionList.findIndex((transaction) => transaction.id === id);
        state.transactionList.splice(index, 1);
        successCallback();
      } else {
        alert("거래내역 삭제 실패 : " + response.data.message);
      }
    } catch (error) {
      alert("에러발생 :" + error);
    }
  };

  const transactionList = computed(() => state.transactionList);

  return { transactionList, fetchTransactionList, addTransaction, deleteTransaction, updateTransaction };
});

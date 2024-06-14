<template>
    <div class="modal" 
          v-if="show" 
          @click.self="closeModal">
      <div class="modal-content 
                  rounded-3 
                  shadow">
        <div class="modal-header 
                    bg-primary 
                    text-white 
                    rounded-top">
          <h5 class="modal-title">
            상세 정보
          </h5>
          <button type="button" 
                  class="btn-close 
                          btn-close-white" 
                  aria-label="Close" 
                  @click="closeModal">
          </button>
        </div>
        <div class="modal-body">
          <div class="list-group 
                      border-0 
                      mx-auto" 
                style="width: 100%;">
            <div class="list-group-item 
                        list-group-item-action 
                        d-flex 
                        flex-column 
                        gap-3 
                        py-3 
                        border-0 
                        bg-light 
                        rounded-3" 
                  aria-current="true">
              <div class="d-flex 
                          flex-column 
                          gap-3 
                          w-100 
                          justify-content-between 
                          align-items-start">
                
                <div class="d-flex 
                            flex-column 
                            align-items-start 
                            flex-grow-1">
                  <label for="date">
                    날짜
                  </label>
    
                  <input v-model="editedTransaction.date" 
                          type="datetime-local" 
                          id="date" 
                          class="form-control" />
                          
                  <label for="category" 
                          style="margin-top: 20px;">
                    카테고리
                  </label>
    
                  <select v-model="editedTransaction.category" 
                          id="category" 
                          class="form-control">
                    <option value="식비">
                      식비
                    </option>
                    <option value="카페">
                      카페
                    </option>
                    <option value="생활">
                      생활
                    </option>
                    <option value="쇼핑">
                      쇼핑
                    </option>
                    <option value="교통">
                      교통
                    </option>
                  </select>
                          
                  <label for="title" 
                          style="margin-top: 20px;">
                    제목
                  </label>
                  <input v-model="editedTransaction.title" 
                          type="text" 
                          id="title" 
                          class="form-control" 
                          placeholder="Title" 
                          style="max-width: 200px;" />
                          
                  <label for="price" 
                          style="margin-top: 20px;">
                    금액
                  </label>
                  <input v-model="editedTransaction.price" 
                          type="text" 
                          id="price" 
                          class="form-control" 
                          placeholder="Price" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer 
                    bg-light 
                    rounded-bottom">
          <button type="button" 
                  class="btn 
                          btn-secondary" 
                  @click="closeModal">
            Cancel
          </button>
          <button type="button" 
              class="btn 
                     btn-danger" 
              @click="deleteTransaction">
            Delete
          </button>
          <button type="button" 
                  class="btn 
                          btn-primary" 
                  @click="saveTransaction">
            Save
          </button>
        </div>
      </div>
    </div>
    
    </template>
    
    <script setup>
    import { ref, reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import { useTransactionStore } from '@/stores/transactions.js';
    
    const router = useRouter();
    const transactionStore = useTransactionStore();
    const updateTransaction = transactionStore.updateTransaction;
    const deleteTransactionList = transactionStore.deleteTransaction;
    
    
    const props = defineProps({
      transactionItem: {
        Type: Object,
        required: true
      },
      show: {
        Type: Boolean,
        required: true
      }
    });
    
    const emit = defineEmits(['sendClose']);
    
    const editedTransaction = reactive({ ...props.transactionItem });
    
    function closeModal() {
      emit('sendClose', false);
    }
    
    
    function saveTransaction() {
      editedTransaction.id = props.transactionItem.id;
      editedTransaction.memberId = props.transactionItem.memberId;
      console.log("edit",editedTransaction);
      updateTransaction(editedTransaction, ()=>{
            router.push('/list')
        });
      closeModal();
    }
    
    
    function deleteTransaction() {
      deleteTransactionList(props.transactionItem.id, ()=>{
            router.push('/list')
        });
      closeModal();
    }
    
    function getCategoryColor(category) {
      const categoryColors = {
        '술': '#4CAF50',
        '교통': '#32d3e5',
        '생활': '#2196F3',
        '건강': '#E91E63',
        '쇼핑': '#ffaae8',
        '용돈': '#eded1b'
      };
      return categoryColors[category] || '#000000';
    }
    
    function formatPrice(value, type) {
      const formattedPrice = Number(value).toLocaleString();
      return `${type === 'Income' ? '+' : '-'}${formattedPrice}`;
    }
    </script>
    
    <style scoped>
    .modal {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.4);
    }
    
    .modal-content {
      background-color: #fefefe;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
      max-width: 600px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dee2e6;
      padding-bottom: 1rem;
    }
    
    .modal-title {
      font-size: 1.25rem;
      font-weight: 500;
    }
    
    .close-btn {
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
      color: #aaa;
      cursor: pointer;
    }
    
    .close-btn:hover,
    .close-btn:focus {
      color: #000;
      text-decoration: none;
    }
    
    .modal-body {
      padding-top: 1rem;
    }
    
    .list-group-item {
      border: none !important;
    }
    </style>
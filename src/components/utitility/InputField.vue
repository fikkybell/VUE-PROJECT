<template>
  <div>
    <div class="p-grid">
      <div class="p-col-12">
        <div class="p-text-left">
          <div>
            <span class="title">{{ label }}<span v-if="required">*</span></span>
          </div>
          <div v-if="isCheckBox" class="custom-input filled">
            <div style="position: relative; top: 10px">
              <input type="checkbox" /> {{ placeholder }}
            </div>
          </div>
          <div v-else-if="!isTextArea">
            <input
              v-if="!filled"
              class="custom-input non-filled"
              :placeholder="placeholder"
            />
            <input
              v-if="filled"
              class="custom-input filled"
              :placeholder="placeholder"
            />
          </div>
          <div v-else>
            <textarea
              v-if="!filled"
              class="custom-input t-area"
              :placeholder="placeholder"
              auto-resize
            ></textarea>
            <textarea
              v-if="filled"
              class="custom-input filled t-area"
              :placeholder="placeholder"
              auto-resize
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-inputField",
  props: {
    placeholder: String,
    required: Boolean,
    label: String,
    filled: Boolean,
    isCheckBox: Boolean,
    isTextArea: Boolean,
  },
  data() {
    return {
      checked: false,
      cities: [],
      selectedCategories: [],
    };
  },
};
</script>

<style scoped>
.title {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #58555e;
}

.non-filled {
  border: solid #bbbbbb 1px;
}

.custom-input {
  max-width: 800px;
  width: 100%;
  height: 40px;
  padding-left: 32px;
  border-radius: 5px;
}
.filled {
  background: #e9e5f2;
  border: 0;
}
.t-area {
  padding: 20px 20px 48px;
}
</style>

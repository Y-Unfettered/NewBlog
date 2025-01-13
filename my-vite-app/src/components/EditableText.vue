<template>
    <div>
      <!-- 非编辑状态下显示文本，点击进入编辑状态 -->
      <div v-if="!isEditing" @click="edit">{{ text }}</div>
      <!-- 编辑状态下显示输入框 -->
      <input
        v-else
        type="text"
        v-model="text"
        @blur="save"
        @keyup.enter="save"
        ref="editInput"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isEditing: false,
        text: this.value
      };
    },
    methods: {
      edit() {
        this.isEditing = true;
        // 在下次 DOM 更新后聚焦输入框
        this.$nextTick(() => {
          this.$refs.editInput.focus();
        });
      },
      save() {
        this.isEditing = false;
        // 触发 input 事件，通知父组件更新
        this.$emit('input', this.text);
      }
    },
    watch: {
      // 监听 value 的变化，更新本地状态
      value(newVal) {
        this.text = newVal;
      }
    }
  };
  </script>
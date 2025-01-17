<script setup lang="ts">
// import { useRouter } from 'vue-router' // 添加: 导入 useRouter
import { ref } from 'vue';
import {
  ElContainer, ElHeader, ElAside, ElMain, ElDialog, ElInput
} from 'element-plus' // 修正: 正确导入 Element Plus 组件
import IconLogo from '@/components/icons/IconLogo.vue' // 更新为小写形式
import IconDown from '@/components/icons/IconDown.vue' // 更新为小写形式
import IconSearch from '@/components/icons/IconSearch.vue';
import IconAdd from '@/components/icons/IconAdd.vue';


// const router = useRouter()

// function goToAbout() {
//   router.push('/about')
// }

// 控制搜索框的显示和隐藏
const dialogVisible = ref(false);

// 定义并初始化 searchQuery 变量
const searchQuery = ref('');

// 打开搜索框
const openSearchDialog = () => {
  dialogVisible.value = true;
};

// 关闭搜索框
const closeSearchDialog = () => {
  dialogVisible.value = false;
  searchQuery.value = ''; // 重置 searchQuery
};
// 打印搜索的内容
const handleSearch = () => {
  console.log('搜索:', searchQuery.value);
};



</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="284px" height="100vh">
        <div class="aside-menu">
          <!-- logo 头像 名字 展示icon -->
          <div class="logo-wrap">
            <div class="logo">
              <!-- 使用 IconLogo 组件 -->
              <IconLogo />
            </div>
            <div class="logo-text">
              LemonBlog
            </div>
            <div class="logo-down">
              <IconDown />
            </div>
          </div>
          <div class="function-box">
            <div class="function" @click="openSearchDialog">
              <IconSearch />
            </div>

          </div>
          <!-- 侧栏内容菜单 -->
          <div class="content-box">
            <div class="content-list">
              <div class="content-list-nav">
                <span>
                  <span style="color: #ccc;cursor: pointer;font-size: 12px;">我的页面</span>
                  <IconDown style="width: 10px;height: 10px;cursor: pointer;" />
                </span>
                <IconAdd />
              </div>
            </div>
          </div>

        </div>
      </el-aside>
      <el-container>
        <el-header>
          Header
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>

    <!-- 搜索框对话框 -->
    <el-dialog v-model="dialogVisible" title="搜索" width="30%" :before-close="closeSearchDialog">
      <el-input v-model="searchQuery" placeholder="请输入搜索内容" clearable></el-input>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeSearchDialog">取消</el-button>
          <el-button type="primary" @click="handleSearch">搜索</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
/* 默认icon大小 */
.icon {
  width: 20px;
  height: 20px;
  fill: inherit;
  /* 继承父元素的颜色 */
}

.aside-menu {
  width: 248px;
  height: 100vh;
  padding: 12px;
  /* 添加内边距 */
  /* background-color: rgb(245, 245, 245); */
  background-color: rgba(26, 26, 26);
}

.logo-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  /* background-color: black; */
}

/* .logo svg {
  width: 20px;
  height: 20px;
  color: rgb(249, 235, 211);
} */

.logo-text {
  font-size: 14px;
  font-weight: bold;
  width: 182px;
  color: #fff;
}

.logo-down {
  display: flex;
  justify-content: center;
}

.logo-down svg {
  width: 10px;
  height: 10px;
}

.function-box {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.function-box .function {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  /* 设置默认指针样式为手型 */
}

.function-box .function svg {
  fill: #ccc;
  /* 设置默认颜色 */
  cursor: pointer;
  /* 设置默认指针样式为手型 */
}

.function-box .function svg:hover {
  fill: #fff;
  /* 设置悬停颜色为白色 */
}
</style>
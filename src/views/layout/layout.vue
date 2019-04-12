<template>
  <a-layout :style="{position:'fixed',width:'100%',height:'100%'}">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed"
                    :style="{ overflow: 'scroll', height: '100vh',background:'#fff',boxShadow: '2px 0 8px 0 rgba(29, 35, 41, 0.05)' }">
      <div class="logo">ANT</div>
      <a-menu
              mode="inline"
              :defaultSelectedKeys="[$route.path.split('/')[$route.path.split('/').length - 1]]"
              :style="{ borderRight: 0 }"
              @openChange="onOpenChange"
              :openKeys="openKeys"
              @click="menuClick"
      >
        <template v-for="(item,index) in Menu">
          <template v-if="item.name">
            <a-sub-menu :key="item.path">
              <span slot="title">
                <a-icon :type="item.Ico"/><span>{{item.name}}</span>
              </span>
              <a-menu-item v-for="(item_c,index_c) in item.children" :key="item_c.path">{{item_c.name}}</a-menu-item>
            </a-sub-menu>
          </template>
          <template v-else>
            <a-menu-item :key="item.children[0].name">
              <a-icon :type="item.Ico"/>
              <span>{{item.children[0].name}}</span>
            </a-menu-item>
          </template>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{overflow:'hidden',width:'100%'}">
      <a-layout-header
              :style="{ width: '100%',background: '#fff', padding: '0',zIndex:'2',position: 'absolute',top:'0',boxShadow:'0 1px 4px rgba(0,21,41,.08)',display:'flex',justifyContent:'space-between'}">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="()=> collapsed = !collapsed"/>
        <a-dropdown :style="collapsed?{marginRight:'100px',cursor:'pointer'}:{marginRight:'220px',cursor:'pointer'}">
          <span class="ant-dropdown-link">超级管理员<a-icon type="down"/></span>
          <a-menu slot="overlay">
            <a-menu-divider/>
            <a-menu-item key="3" @click="loginOut">退出登录</a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-breadcrumb :style="{ margin: '80px 20px 20px' }">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <template v-if="$route.meta.title">
          <a-breadcrumb-item>{{$route.meta.title}}</a-breadcrumb-item>
          <a-breadcrumb-item>{{$route.name}}</a-breadcrumb-item>
        </template>
      </a-breadcrumb>
      <a-layout-content :style="{ padding: '0 20px',overflow: 'scroll'}">
        <div :style="{ minHeight: '100%',padding: '24px', background: '#fff'}">
          <transition name="main" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  import extendsRoutes from '../../config/menu'

  export default {
    name: "layout",
    data() {
      return {
        collapsed: false,
        openKeys: [],
        Menu: extendsRoutes.extendsRoutes
      }
    },
    methods: {
      menuClick(item) {
        console.log(item)
        if (item.keyPath.length === 2) {
          this.$router.push({path: item.keyPath[1] + '/' + item.keyPath[0]})
          setTimeout(() => {
            window.sessionStorage.setItem('routerPath', item.keyPath[1] + '/' + item.keyPath[0])
          }, 100)
        } else {
          this.$router.push({path: '/' + item.key})
          setTimeout(() => {
            window.sessionStorage.setItem('routerPath', '/' + item.key)
          }, 100)
        }
      },
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      },
      loginOut() {
        this.$confirm({
          title: '提示',
          content: '真的要注销登录吗 ?',
          okText: "确认",
          cancelText: "取消",
          onOk: () => {
            console.log('OK');
            this.$router.push({path: '/login'})
          },
          onCancel: () => {
            console.log('Cancel');
          },
          class: 'test',
        });
      }
    },
    mounted() {
      this.openKeys.push('/' + this.$route.path.split('/')[1])
    }
  }
</script>

<style scoped>
  .ant-layout-sider::-webkit-scrollbar, .ant-layout-content::-webkit-scrollbar {
    display: none;
  }

  .logo {
    height: 32px;
    background: rgba(0, 0, 0, .2);
    margin: 16px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 32px;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color .3s;
  }

  .trigger:hover {
    background: rgba(0, 0, 0, .025);
    color: #1890ff;
  }
</style>

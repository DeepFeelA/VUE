<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <!--el-aside是左侧标签-->
    <el-aside width="15%" style="background-color: rgb(238, 241, 246)">
      <!--左侧菜单内容-->
      <!-- <el-menu :default-openeds="['1', '3']" :default-active="'1-2'">
         &lt;!&ndash;通过index值来指定默认打开&ndash;&gt;
         <el-submenu index="1">
           &lt;!&ndash;el-submenu 展开菜单栏&ndash;&gt;
           <template slot="title"><i class="el-icon-menu"></i>导航一</template>
           &lt;!&ndash;对于菜单名&ndash;&gt;
             <el-menu-item index="1-1">网关操作</el-menu-item>
             <el-menu-item index="1-2">传感器操作</el-menu-item>
         </el-submenu>-->
      <el-menu router :default-openeds="['0','2']"><!--实现menu和router的绑定-->
        <!--index代表导航下标-->
        <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''"  v-if="item.show">
          <template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
          <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"
           :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>互联网网关信息平台</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>

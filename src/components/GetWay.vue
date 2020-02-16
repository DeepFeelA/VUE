<!--<template>
    <h1>这是one</h1>
</template>

<script>
    export default {
        name: "PageOne"
    }
</script>

<style scoped>

</style>-->
<template>
  <div>
  <el-table
    :data="tableData"
    border
    style="width: 100%"
    height="600"
  >
    <el-table-column
      fixed
      prop="manufactor"
      label="厂商"
      width="100"

    >
    </el-table-column>
    <el-table-column
      prop="deviceName"
      label="设备名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="protocol"
      label="协议"
      width="200">
    </el-table-column>
    <el-table-column
      prop="uploadProtocol"
      label="上传协议"
      width="200">
    </el-table-column>
    <el-table-column
      prop="usageScene"
      label="物联网设备的应用场所类型"
      width="200"
    >

    </el-table-column>
  <!--  <el-table-column
      prop="charge"
      label="可充电电池与否"
      width="120"
    >

    </el-table-column>-->
    <el-table-column
      prop="inputVoltage"
      label="输入电压"
      width="150">
    </el-table-column>
    <el-table-column
      prop="workingEnvironment"
      label="工作环境"
      width="300">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button  @click="edit(scope.row)" type="text" size="small">修改</el-button>
        <el-button @click="deleteDevice(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="5"
      :total="50"
      @current-change="page">
    </el-pagination>
  </div>
</template>

<script>
    export default {
        methods: {
            deleteDevice(row){
                const _this=this;
                this.$axios.delete("http://localhost:9001/gateway/deleteByOne?manufactor="+row.manufactor+
                    "&productId="+row.deviceName).then(function (resp) {
                        alert("删除成功");
                     /*  _this.$router.push('/GetWay');*/
                    window.location.reload();

                })

            },
            edit(row) {
                /*console.log(row);*/
                this.$router.push({
                    path:'/GetWayUpdate',
                    query:{
                        manufactor:row.manufactor,
                        deviceName:row.deviceName,

                    }

                });
            },
            page(row){
               // alert(row);
                this.size=row;
                const _this=this
                this.$axios.get("http://localhost:9001/gateway/selectLimit?offset="+((row-1)*5)+"&limit=5").then(function (resp) {
                    console.log(resp);
                    _this.tableData=resp.data;
                    //alert(_this.size);
                })
            }
        },

        data() {
            return {
               // pageSize:'5', //每页大小
               // total:'5',    //总页数
                size:'',
                tableData: [{
                    manufactor: 'eurotech',
                    deviceName: 'BoltGATE 20-25',
                    protocol: '3G/4G/RS-232/RS-422/RS-485/Wi-Fi',
                    uploadProtocol: 'Modbus, OPC-UA, S7，MQTT',
                    usageScene: '工业普通级',
                    //charge:true,
                    inputVoltage: "DC 9--137.5V可选",
                    workingEnvironment:"-40--70"
                }]
            }
        },
        created() {
            const _this=this
           this.$axios.get("http://localhost:9001/gateway/selectLimit?offset=0&limit=5").then(function (resp) {
               console.log(resp);
               _this.tableData=resp.data;
           })

        }

    }

</script>

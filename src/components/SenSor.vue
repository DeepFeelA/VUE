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
      prop="productId"
      label="产品编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="functionType"
      label="功能类型"
      width="200">
    </el-table-column>
    <el-table-column
      prop="concreteType"
      label="具体类型"
      width="200">
    </el-table-column>
    <el-table-column
      prop="inputEletricalCharacteristic"
      label="输入电气特性"
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
      prop="outputEletricalCharacteristic"
      label="输出电气特性"
      width="150">
    </el-table-column>
    <el-table-column
      prop="useEnvironment"
      label="使用环境"
      width="100">
    </el-table-column>
    <el-table-column
      prop="packingCharacteristic"
      label="包装特性"
      width="100">
    </el-table-column>
    <el-table-column
      prop="rangeAbility"
      label="量程范围"
      width="200">
    </el-table-column>
    <el-table-column
      prop="precision"
      label="精度"
      width="100">
    </el-table-column>
    <el-table-column
      prop="level"
      label="级别"
      width="100">
    </el-table-column>


    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
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
                this.$axios.delete("http://localhost:9001/sensor/deleteByOne?manufactor="+row.manufactor+
                    "&productId="+row.deviceName).then(function (resp) {
                        alert("删除成功");
                     /*  _this.$router.push('/GetWay');*/
                    window.location.reload();

                })

            },
            edit(row) {
                /*console.log(row);*/
                this.$router.push({
                    path:'/SensorUpdate',
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
                    productId: 'BoltGATE 20-25',
                    functionType: '3G/4G/RS-232/RS-422/RS-485/Wi-Fi',
                    concreteType: 'Modbus, OPC-UA, S7，MQTT',
                    inputEletricalCharacteristic: '工业普通级',
                    //charge:true,
                    outputEletricalCharacteristic: "DC 9--137.5V可选",
                    useEnvironment:"-40--70",
                    packingCharacteristic:"1",
                    rangeAbility:"1",
                    precision:"1",
                    level:"1",


                }]
            }
        },
        created() {
            const _this=this
           this.$axios.get("http://localhost:9001/sensor/selectLimit?offset=0&limit=5").then(function (resp) {
               console.log(resp);
               _this.tableData=resp.data;
           })

        }

    }

</script>

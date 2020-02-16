import Vue from 'vue'
import Router from 'vue-router'
import GetWay from "../components/GetWay";
import PageFour from "../components/PageFour";
import PageThree from "../components/PageThree";
import addGateWay from "../components/addGateWay";
import index from "../components/index";
import GetWayUpdate from "../components/GetWayUpdate";
import SenSor from "../components/SenSor";
import addSenSor from "../components/addSenSor";
import SensorUpdate from "../components/SensorUpdate";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"网关操作",
      show:true,
      component:index,
      redirect:"/GetWay",
      children:[
        {
          path: "/GetWay",
          name: "互联网网关",
          component: GetWay
        },
        {
          path: "/addGateWay",
          name: "添加网关",
          component: addGateWay
        },
      ]
    },
    {
      path:"/GetWayUpdate",
      name:"网关修改",
      show:false,/*不显示*/
      component:index,
      children:[
        {
          path: "/GetWayUpdate",
          name: "互联网网关",
          component: GetWayUpdate
        },

      ]

    },
    {
      path:"/Sensor",
      name:"传感器操作",
      show:true,
      component:index,
      children:[
        {
          path: "/Sensor",
          name: "传感器",
          component: SenSor
        },
        {
          path: "/addSensor",
          name: "添加传感器",
          component: addSenSor
        }

      ],
    },


    {
      path:"/SensorUpdate",
      name:"传感器修改",
      show:false,/*不显示*/
      component:index,
      children:[
        {
          path: "/SensorUpdate",
          name: "传感器修改",
          component: SensorUpdate
        },

      ]

    },


    {
      path:"/daohang1",
      name:"待定1",
      show:true,
    },
    {
      path:"/daohang2",
      show:true,
      name:"待定2",
    },
    {
      path:"/daohang3",
      name:"待定3",
    },

  ]
})

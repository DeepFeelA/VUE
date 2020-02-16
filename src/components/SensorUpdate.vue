<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="厂商" prop="manufactor">
      <el-input v-model="ruleForm.manufactor" readonly></el-input>
    </el-form-item>
    <el-form-item label="产品编号" prop="productId">
      <el-input v-model="ruleForm.productId" readonly></el-input>
    </el-form-item>
    <el-form-item label="功能类型" prop="functionType">
      <el-input v-model="ruleForm.functionType"></el-input>
    </el-form-item>
    <el-form-item label="具体类型" prop="concreteType">
      <el-input v-model="ruleForm.concreteType"></el-input>
    </el-form-item>
    <el-form-item label="输入电气特性" prop="inputEletricalCharacteristic">
      <el-input v-model="ruleForm.inputEletricalCharacteristic"></el-input>
    </el-form-item>
    <el-form-item label="输出电气特性" prop="outputEletricalCharacteristic">
      <el-input v-model="ruleForm.outputEletricalCharacteristic"></el-input>
    </el-form-item>
    <el-form-item label="使用环境" prop="useEnvironment">
      <el-input v-model="ruleForm.useEnvironment"></el-input>
    </el-form-item>
    <el-form-item label="包装特性" prop="packingCharacteristic">
      <el-input v-model="ruleForm.workingEnvironment"></el-input>
    </el-form-item>
    <el-form-item label="量程范围" prop="rangeAbility">
      <el-input v-model="ruleForm.rangeAbility"></el-input>
    </el-form-item>
    <el-form-item label="精度" prop="precision">
      <el-input v-model="ruleForm.precision"></el-input>
    </el-form-item>
    <el-form-item label="级别" prop="level">
      <el-input v-model="ruleForm.level"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    manufactor: '',
                    productId: '',
                    functionType: '',
                    concreteType: '',
                    inputEletricalCharacteristic: '',
                    //charge:true,
                    outputEletricalCharacteristic: "",
                    useEnvironment:"",
                    packingCharacteristic:"",
                    rangeAbility:"",
                    precision:"",
                    level:"",
                },
                rules: {
                    manufactor: [
                        { required: true, message: '请输入厂商', trigger: 'blur' },
                        /*  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }*/
                    ],
                    deviceName: [
                        { required: true, message: '请输入产品编号', trigger: 'blur' },
                    ],
                    protocol: [
                        { required: true, message: '请输入功能类型', trigger: 'blur' },
                    ],
                    uploadProtocol: [
                        { required: true, message: '请输入具体类型', trigger: 'blur' },
                    ],
                    usageScene: [
                        { required: true, message: '请输入输入电气特性', trigger: 'blur' },
                    ],
                    inputVoltage: [
                        { required: true, message: '请输入输出电气特性', trigger: 'blur' },
                    ],
                    workingEnvironment: [
                        { required: true, message: '请输入使用环境', trigger: 'blur' },
                    ],
                    workingEnvironment: [
                        { required: true, message: '请输入包装特性', trigger: 'blur' },
                    ],
                    workingEnvironment: [
                        { required: true, message: '请输入量程范围', trigger: 'blur' },
                    ],
                    workingEnvironment: [
                        { required: true, message: '请输入精度', trigger: 'blur' },
                    ],
                    workingEnvironment: [
                        { required: true, message: '请输入级别', trigger: 'blur' },
                    ],

                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.put("http://localhost:9001/sensor/update",this.ruleForm).then(function (resp) {

                            console.log(resp);
                            if (resp.status==200)
                            {

                                alert("修改成功");
                                _this.$router.push('/Sensor');/*这个路由有问题*/
                            }

                        })

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        },
        created() {
      /*      alert(this.$route.query.manufactor);*/
            const _this=this;
            this.$axios.get("http://localhost:9001/sensor/selectOne?manufactor="+this.$route.query.manufactor+
                "&productId="+this.$route
                .query.deviceName).then(function (resp) {
                    console.log(resp);
                    _this.ruleForm=resp.data;

            })
        }
    }
</script>

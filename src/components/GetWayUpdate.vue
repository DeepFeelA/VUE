<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="厂商" prop="manufactor">
      <el-input v-model="ruleForm.manufactor"  readonly></el-input>
    </el-form-item>
    <el-form-item label="设备名称" prop="deviceName">
      <el-input v-model="ruleForm.deviceName"  readonly></el-input>
    </el-form-item>
    <el-form-item label="协议" prop="protocol">
      <el-input v-model="ruleForm.protocol"></el-input>
    </el-form-item>
    <el-form-item label="上传协议" prop="uploadProtocol">
      <el-input v-model="ruleForm.uploadProtocol"></el-input>
    </el-form-item>
    <el-form-item label="应用场景" prop="usageScene">
      <el-input v-model="ruleForm.usageScene"></el-input>
    </el-form-item>
    <el-form-item label="输入电压" prop="inputVoltage">
      <el-input v-model="ruleForm.inputVoltage"></el-input>
    </el-form-item>
    <el-form-item label="工作环境" prop="workingEnvironment">
      <el-input v-model="ruleForm.workingEnvironment"></el-input>
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
                    deviceName: '',
                    protocol: '',
                    uploadProtocol: '',
                    usageScene: '',
                    //charge:true,
                    inputVoltage: "",
                    workingEnvironment:""
                },
                rules: {
                    manufactor: [
                        { required: true, message: '请输入厂商', trigger: 'blur' },
                        /*  { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }*/
                    ],
                    deviceName: [
                        { required: true, message: '请输入设备名称', trigger: 'blur' },
                    ],
                    protocol: [
                        { required: true, message: '请输入协议', trigger: 'blur' },
                    ],
                    uploadProtocol: [
                        { required: true, message: '请输入上传协议', trigger: 'blur' },
                    ],
                    usageScene: [
                        { required: true, message: '请输入应用场景', trigger: 'blur' },
                    ],
                    inputVoltage: [
                        { required: true, message: '请输入输入电压', trigger: 'blur' },
                    ],
                    workingEnvironment: [
                        { required: true, message: '请输入工作环境', trigger: 'blur' },
                    ],

                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.put("http://localhost:9001/gateway/update",this.ruleForm).then(function (resp) {

                            console.log(resp);
                            if (resp.status==200)
                            {

                                alert("修改成功");
                                _this.$router.push('/GetWay');/*这个路由有问题*/
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
            this.$axios.get("http://localhost:9001/gateway/selectOne?manufactor="+this.$route.query.manufactor+
                "&deviceName="+this.$route
                .query.deviceName).then(function (resp) {
                    console.log(resp);
                    _this.ruleForm=resp.data;

            })
        }
    }
</script>

<template>
  <div class="app-container">
    <dynamic-table :table-data='data' :columns='columnDesc'></dynamic-table>
  </div>
</template>

<script>
import dynamicTable from '@/components/Table'

export default {
  name: 'rider',
  components: { dynamicTable },
  data() {
    return {
        data: [
            { id: 1, name: '张三', email: '1234@126.com', sex: '男', idType: '身份证', ID: '123456789123456789', idPhoto: ''},
            { id: 2, name: '张三', email: '1234@126.com', sex: '男', idType: '身份证', ID: '123456789123456789', idPhoto: ''},
            { id: 3, name: '张三', email: '1234@126.com', sex: '男', idType: '身份证', ID: '123456789123456789', idPhoto: ''},
            { id: 4, name: '张三', email: '1234@126.com', sex: '男', idType: '身份证', ID: '123456789123456789', idPhoto: ''},
            { id: 5, name: '张三', email: '1234@126.com', sex: '男', idType: '身份证', ID: '123456789123456789', idPhoto: ''}
        ],
        columnDesc: [
            { name: 'id', label: 'ID'},
            { name: 'name', label: '姓名'},
            { name: 'email', label: '邮箱'},
            { name: 'sex', label: '性别'},
            { name: 'idType', label: '证件类型'},
            { name: 'ID', label: '证件号码'},
            { name: 'idPhoto', label: '证件照'}
        ],
        actions: {
            label: '操作',
            buttons: [
                {
                    id: 'approve', 
                    name: '通过',
                    type: 'success', 
                    handler: function(row){
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        });
                    }
                },
                {
                    id: 'reject', 
                    name: '拒绝',
                    type: 'danger',  
                    handler: function(row){
                        this.$message({
                            message: '操作成功',
                            type: 'success'
                        });
                    }
                }
            ]
        }
    }
  }
}
</script>


<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="12">
      <el-col :sm="32" :xs="32" :md="8" :xl="8" :lg="8" :style="{ marginBottom: '12px' }">
        <chart-card title="我创建的" :total="dashboardValue.count.my_create" style="cursor: pointer" @click.native="toTicketList('/process/my-create')">
          <el-tooltip slot="action" class="item" effect="dark" content="指标说明" placement="top-start">
            <i class="el-icon-warning-outline" />
          </el-tooltip>
        </chart-card>
      </el-col>
      <el-col :sm="32" :xs="32" :md="8" :xl="8" :lg="8" :style="{ marginBottom: '12px' }">
        <chart-card title="我相关的" :total="dashboardValue.count.related" style="cursor: pointer" @click.native="toTicketList('/process/related')">
          <el-tooltip slot="action" class="item" effect="dark" content="指标说明" placement="top-start">
            <i class="el-icon-warning-outline" />
          </el-tooltip>
        </chart-card>
      </el-col>
      <el-col :sm="32" :xs="32" :md="8" :xl="8" :lg="8" :style="{ marginBottom: '12px' }">
        <chart-card title="我的待办" :total="dashboardValue.count.upcoming" style="cursor: pointer" @click.native="toTicketList('/process/upcoming')">
          <el-tooltip slot="action" class="item" effect="dark" content="指标说明" placement="top-start">
            <i class="el-icon-warning-outline" />
          </el-tooltip>
        </chart-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChartCard from './components/ChartCard'

import { initData } from '@/api/dashboard'

export default {
  name: 'DashboardAdmin',
  components: {
    ChartCard
  },
  data() {
    return {
      dashboardValue: {
        count: {}
      },
      rankList: [],
      submitData: [],
      querys: '',
      queryList: {},
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  created() {
    this.getInitData()
  },
  methods: {
    getInitData() {
      initData(this.queryList).then(response => {
        this.dashboardValue = response.data
      })
    },
    timeScreening() {
      if (this.querys.length > 1) {
        this.queryList.start_time = this.querys[0]
        this.queryList.end_time = this.querys[1]
        this.getInitData()
      }
    },
    toTicketList(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 12px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

::v-deep .el-tabs__item{
   padding-left: 16px!important;
   height: 50px;
   line-height: 50px;
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}

.leaderboard {
  height: 448px;
  overflow: auto;
}
</style>

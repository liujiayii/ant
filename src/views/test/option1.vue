<template>
  <div>
    <a-table :columns="columns" :dataSource="data" bordered>
      <template v-for="col in ['name', 'age', 'address']" :slot="col" slot-scope="text, record, index">
        <div :key="col">
          <a-input
                  v-if="record.editable"
                  style="margin: -5px 0"
                  :value="text"
                  @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{text}}</template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record, index">
        <div class='editable-row-operations'>
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm title='Sure to cancel?' @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
          <span v-else>
          <a @click="() => edit(record.key)">Edit</a>
        </span>
        </div>
      </template>
    </a-table>
    <a-carousel arrows dotsClass="slick-dots slick-thumb" autoplay :autoplayInterval="1000">
      <a slot="customPaging" slot-scope="props">
        <img :src="getImgUrl(props.i)"/>
      </a>
      <div v-for="item in 4">
        <img :src="baseUrl+'abstract0'+item+'.jpg'"/>
      </div>
    </a-carousel>
  </div>

</template>
<script>
  const columns = [{
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: {customRender: 'name'},
  }, {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: {customRender: 'age'},
  }, {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: {customRender: 'address'},
  }, {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: {customRender: 'operation'},
  }]

  const data = []
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i.toString(),
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    })
  }
  const baseUrl = 'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/'
  export default {
    name: "option1",
    data() {
      this.cacheData = data.map(item => ({...item}))
      return {
        data,
        columns,
        baseUrl,
      }
    },
    methods: {
      handleChange(value, key, column) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target[column] = value
          this.data = newData
        }
      },
      edit(key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          target.editable = true
          this.data = newData
        }
      },
      save(key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          delete target.editable
          this.data = newData
          this.cacheData = newData.map(item => ({...item}))
        }
      },
      cancel(key) {
        const newData = [...this.data]
        const target = newData.filter(item => key === item.key)[0]
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
          delete target.editable
          this.data = newData
        }
      },
      getImgUrl(i) {
        return `${baseUrl}abstract0${i + 1}.jpg`
      }
    },
  }
</script>

<style scoped>
  .editable-row-operations a {
    margin-right: 8px;
  }

  .ant-carousel >>> .slick-dots {
    height: auto
  }

  .ant-carousel >>> .slick-slide img {
    border: 5px solid #FFF;
    display: block;
    margin: auto;
    max-width: 80%;
  }

  .ant-carousel >>> .slick-thumb {
    bottom: -45px;
  }

  .ant-carousel >>> .slick-thumb li {
    width: 60px;
    height: 45px;
  }

  .ant-carousel >>> .slick-thumb li img {
    width: 100%;
    height: 100%;
    filter: grayscale(100%);
  }

  .ant-carousel >>> .slick-thumb li.slick-active img {
    filter: grayscale(0%);
  }
</style>

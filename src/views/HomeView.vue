<template>
  <ContentBase>
    <div class="row justify-content-around">
      <div class="col-6">
        <div class="row">
          <h1>关于微藻</h1>
          <p>微藻是指那些在显微镜下才能辨别其形态的微小的藻类群体。微藻通常是指含有叶绿素a并能进行光合作用的微生物的总称，属于原生生物的一种。应用生物技术进行大量培养或生产的微藻分属于4个藻门：蓝藻门、绿藻门、金藻门和红藻门。
          </p>
          <h2>微藻信息</h2>
        </div>
        <div class="row">
          <table>
            <tr>
              <th>项目</th>
              <th>信息</th>
            </tr>
            <tr>
              <td>中文学名</td>
              <td>微藻</td>
            </tr>
            <tr>
              <td>拉丁学名</td>
              <td>microalgae</td>
            </tr>
            <tr>
              <td>界</td>
              <td>原生生物界</td>
            </tr>
            <tr>
              <td>门</td>
              <td>蓝藻门、绿藻门、金藻门和红藻门</td>
            </tr>
            <tr>
              <td>分布区域</td>
              <td>世界范围水系及潮湿土壤均有分布</td>
            </tr>
            <tr>
              <td>类 型</td>
              <td>自养</td>
            </tr>
            <tr>
              <td>营养物质</td>
              <td>蛋白质，脂类，藻多糖，ARA</td>
            </tr>

          </table>
        </div>
      </div>
      <div class="col-4 img-field">
        <img class="img-fluid " src="https://cdn.pixabay.com/photo/2013/04/23/07/08/bacteria-106583_1280.jpg" alt="微藻的图片">
      </div>
    </div>

  </ContentBase>
</template>

<script>
import ContentBase from '../components/ContentBase'

export default {
  name: 'HomeView',
  components: {
    ContentBase,
  }
}
</script>

<style scoped>
.img-field {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 8px;
}

table th {
  background-color: #f2f2f2;
}
</style>
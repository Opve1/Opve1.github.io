<template>
    <ContentBase>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <div class="mb-3">
                    <label for="username" class="form-label">输入</label>
                    <input v-model="searchInput" @keyup.enter="search" type="text" class="form-control" id="username">
                </div>
                <button @click="search" type="submit" class="btn btn-primary ">搜索</button>

            </div>
            <div class="spacer"></div>
            <div class="rol-9">
                <table v-if="showTable" class="bordered-table">
                    <tr>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>班级</th>
                        <th>身高</th>
                        <th>体重</th>
                        <th>爱好</th>
                    </tr>
                    <tr v-for="person in searchResults" :key="person.name">
                        <td>{{ person.name }}</td>
                        <td>{{ person.gender }}</td>
                        <td>{{ person.class }}</td>
                        <td>{{ person.height }}</td>
                        <td>{{ person.weight }}</td>
                        <td>{{ person.hobbies }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '../components/ContentBase'
import { ref } from 'vue';


export default {
    name: 'SearchView',
    components: {
        ContentBase,
    },
    setup() {
        const searchInput = ref('');
        const showTable = ref(false);
        const people = ref([
            {
                name: '郭羽丰',
                gender: '男',
                class: '食安2101班',
                height: '199cm',
                weight: '70kg',
                hobbies: '羽毛球、音乐',
            },
            {
                name: '黄志豪',
                gender: '男',
                class: '食安2101班',
                height: '175cm',
                weight: '65kg',
                hobbies: '羽毛球、旅行',
            },
            {
                name: '马雪丽',
                gender: '女',
                class: '食安2101班',
                height: '165cm',
                weight: '110kg',
                hobbies: '旅行、美食',
            },
            {
                name: '黄志妮',
                gender: '女',
                class: '数计2101班',
                height: '188cm',
                weight: '70kg',
                hobbies: '棋牌、旅行',
            },
            // 添加更多人的信息...
        ]);
        const searchResults = ref([]);

        const search = () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm === '') {
                showTable.value = false;
                return;
            }

            searchResults.value = people.value.filter(person =>
                person.name.includes(searchTerm)
            );
            showTable.value = true;
        };

        return {
            searchInput,
            showTable,
            searchResults,
            search
        };
    },
}




</script>
  

<style scoped>
button {
    width: 100%
}

.spacer {
    height: 20px;
}

.bordered-table {
    border-collapse: collapse;
    width: 100%;
}

.bordered-table th,
.bordered-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

.bordered-table th {
    background-color: #f2f2f2;
}
</style>
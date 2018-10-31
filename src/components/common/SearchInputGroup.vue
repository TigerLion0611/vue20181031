<template>
    <div class="searchInputGroup" :style="searchInputGroup.style">
        <search-input v-for="searchInput in searchInputGroup"
                      :key="searchInput.name"
                      :search-input="searchInput"></search-input>
    </div>
</template>
<script>
    import SearchInput from "./SearchInput";
    export default {
        name: 'SearchInputGroup',
        components: {SearchInput},
        props: ['searchInputGroup']
    }
</script>
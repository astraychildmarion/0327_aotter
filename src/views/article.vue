<template lang="pug">
	.article-wrapper
		h2 {{ item.title }}
		p {{ item.content }}
		.article-related
			router-link(to="article")
				ArticleBlock

</template>

<script>
import ArticleBlock from '@/components/ArticleBlock.vue'

export default {
	name: 'article',
	components:{
		ArticleBlock
	}
}
</script>

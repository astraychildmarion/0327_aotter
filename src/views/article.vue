<template lang="pug">
	.article-wrapper

		h2 {{ article[$route.params.index].title }}
		img(:src="article[$route.params.index].imgSrc")
		h5 {{ article[$route.params.index].subTitle }}
		p {{ article[$route.params.index].content }}
		.article-author
			p {{ article[$route.params.index].author }}
		.article-related
			router-link(
				:to="{ name: 'article', params: { index: item.index }}"
				v-for="item in article"
				)
				ArticleBlock

</template>

<script>
import { firestore } from '../store'
import ArticleBlock from '@/components/ArticleBlock.vue'

export default {
	name: 'article',
	firestore () {
    return {
			article: firestore.collection('article'),
    }
  },
	components:{
		ArticleBlock
	},
	created (){
		this.fetchData
	},
	methods: {
		fetchData () {
			console.log(firestore)
		}
	}
}
</script>

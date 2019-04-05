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
				v-for="item in relateArticle"
				)
				ArticleBlock(
					:imgAlt="item.imgAlt",
					:title="item.title",
					:subTitle="item.subTitle",
					:imgSrc="item.imgSrc",
					:author="item.author",
					:publishData="item.publishData",
					:catagory="item.catagory",
					:content="item.content",
					:index="item.index",
				)

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
	computed: {
		relateArticle: function () {
			let thisArticle = this.$route.params.index
			let copyArticle = Object.assign([],this.article)
		  copyArticle.splice(thisArticle,1)
			return copyArticle
		}
	},
}
</script>
<style lang="scss">
.article-wrapper{
	padding: 40px 0;
	h2, h5{
		margin: 10px 0;
	}
	p{
		margin-top: 29px; 
	}
	img{
		max-width: 100%;
    height: auto;
	}
}
</style>


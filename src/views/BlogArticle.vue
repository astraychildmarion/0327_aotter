<template lang="pug">
	.article-wrapper
		h2 {{ article[$route.params.index].title }}
		h5 {{ article[$route.params.index].subTitle }}
		img(:src="article[$route.params.index].imgSrc")
		p {{ article[$route.params.index].content }}
		.article-author
			p 作者 : {{ article[$route.params.index].author }}
		.article-related
			b 你或許還想看...
			router-link(
				:to="{ name: 'BlogArticle', params: { index: item.index }}"
				v-for="item in relateArticle"
				)
				ArticleBlock(
					:imgAlt="item.imgAlt",
					:title="item.title",
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
	name: 'BlogArticle',
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
.article{
	&-wrapper{
		padding: 40px 0;
		h2, h5{
			margin: 10px 0 15px;
		}
		p{
			margin-top: 29px; 
		}
		img{
			max-width: 100%;
			height: auto;
		}
	}
	&-author{
		margin-bottom: 19px;
	}
	&-related{
		padding-top: 29px;
		margin-top: 19px;
		border-top: $article-border ; 
	}
}
</style>


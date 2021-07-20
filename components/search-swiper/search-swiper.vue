<template>
	<!-- 头部区域 -->
	<view class="top-wrap">
		<u-swiper :title="title" :height="height" :list="list"></u-swiper>
		<u-search :bg-color="bgColor"  disabled :style="[searchStyle]" :show-action="false" class="search flex-item" :value="search_value"
			@click="handleClick" placeholderColor="输入关键词"></u-search>
	</view>

</template>
 
<script>
	export default {

		props: {
			list: {
				value: Array,
				default: []
			},
			height: {
				value: Number,
				default: 0
			},
			title: {
				value: Boolean,
				default: false
			},
			bgColor: {
				value: String,
				default: '#F2F2F2'
			}
		},
		name: 'search-swiper',
		data() {
			return {
				search_value: '',
				searchStyle: {
					top: '20px',
					width: '100%',
					padding: '0 20px'
				}

			};
		},
		created() {
			var self = this
			// 如果在微信小程序： 获取胶囊信息-重新设置input样式
			//#ifdef MP-WEIXIN 
			const res = uni.getSystemInfoSync();
			self.windowWidth = res.windowWidth;
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			self.searchStyle = {
				right: `${res.windowWidth - menuButtonInfo.left}px`,
				left: 0,
				top: `${menuButtonInfo.top}px`,
				lineHeight: `${menuButtonInfo.height}px`,
				width: 'auto',
				padding: '0 20px'
			}
			//#endif

		},
		methods: {
			handleClick(val) {
				console.log('111')
				this.$emit('click', val)
			}
		},

	}
</script>

<style>
	.search {
		position: absolute;
	}
</style>

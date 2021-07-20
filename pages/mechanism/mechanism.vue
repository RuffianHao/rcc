<template>
	<view class="container">
		<!-- 头部区域 -->
		<SearchSwiper title :list="swiperList" height="480" @click="handleClick"></SearchSwiper>
		<!-- 机构 -->
		<view class="">
			<u-cell-group>
				<u-cell-item :arrow="false" title="九段日本文化研究所日本語学院">
					<view slot="label">
						<view>〒101-0061 东京都千代田区神田三崎町2-7-10帝都三崎町大楼1F</view>
					</view>
				</u-cell-item>
				<u-cell-item :arrow="false" title="九段日本文化研究所日本語学院">
					<view slot="label">
						<view>〒101-0061 东京都千代田区神田三崎町2-7-10帝都三崎町大楼1F</view>
					</view>
				</u-cell-item>
				<u-cell-item :arrow="false" title="九段日本文化研究所日本語学院">
					<view slot="label">
						<view>〒101-0061 东京都千代田区神田三崎町2-7-10帝都三崎町大楼1F</view>
					</view>
				</u-cell-item>
				<u-cell-item :arrow="false" title="九段日本文化研究所日本語学院">
					<view slot="label">
						<view>〒101-0061 东京都千代田区神田三崎町2-7-10帝都三崎町大楼1F</view>
					</view>
				</u-cell-item>
				<u-cell-item :arrow="false" title="九段日本文化研究所日本語学院">
					<view slot="label">
						<view>〒101-0061 东京都千代田区神田三崎町2-7-10帝都三崎町大楼1F</view>
					</view>
				</u-cell-item>
				<u-cell-item :arrow="false" title="九段日本文化研究所日本語学院">
					<view slot="label">
						<view>〒101-0061 东京都千代田区神田三崎町2-7-10帝都三崎町大楼1F</view>
					</view>
				</u-cell-item>
			</u-cell-group>
		</view>
		<u-loadmore :icon-type="iconType" :load-text="loadText" :status="status" margin-top="40" margin-bottom="40" />

		<u-back-top top="200" :scroll-top="scrollTop" :custom-style="customStyle"></u-back-top>
	</view>
</template>

<script>
	import SearchSwiper from '@/components/search-swiper/search-swiper.vue'
	export default {
		components: {
			SearchSwiper
		},
		data() {
			return {
				swiperList: [{
					image: '/static/resources/banner/banner3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '扒拉一下就能查看更多！',
					loading: '别慌，这就出来了！',
					nomore: '没了，别搁着扒拉了！'
				},
				page: 1,
				scrollTop: 0,
				customStyle: {
					backgroundColor: '#f7f7f7'
				},
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		// 加载更多
		onReachBottom() {

			setTimeout(() => {
				this.status = 'loading';
			}, 1000);
			setTimeout(() => {
				this.status = 'nomore';
			}, 3000);
		},
		methods: {
			handleClick() {
				this.$u.route('/pages/HM-search/HM-search')
			},
		}
	}
</script>

<style>

</style>

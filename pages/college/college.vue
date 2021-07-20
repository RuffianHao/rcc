<template>
	<view class="container">

		<u-sticky>
			<view class="search-box">
				<mSearch   :inputStyle="{'height':'80rpx','line-height':'80rpx','width':'80%'}" bgColor="#f7f8fa" class="mSearch-input-box" mode="3"  :button="false" placeholder="搜索"
				 v-model="search_value"> 
				<view slot="btn">
					<u-button :ripple="true" type="success" shape="circle">高级筛选</u-button>
				</view>
				 </mSearch>
				
			</view>
			<!-- 只能有一个根元素 -->
			<view class="sticky">
				<u-cell-group>
					<u-cell-item :hover-class="false" :arrow="false" title="大学名称" :title-style="{ fontSize: '32rpx' }">
						<view slot="right-icon" class="cell-content">
							<view v-for="(item, index) in TableTitleList" :key="index" class="cell-content-item num-cell">{{ item.name }}</view>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
		</u-sticky>
		<u-index-list :scrollTop="scrollTop">
			<view v-for="(item, index) in collegeList" :key="index">
				<u-index-anchor :index="item.index" />
				<!-- <view  v-for="(item2, index2) in item.collegeList" :key="index2" class="list-cell"> -->

				<u-cell-group v-for="(item2, index2) in item.collegeList" :key="index2">
					<u-cell-item use-label-slot :arrow="false">
						<view slot="icon"><u-image shape="circle" width="80rpx" height="80rpx" :src="src"></u-image></view>
						<template slot="title" style="margin-left: 20rpx;">
							{{ item2 }}
						</template>
						<template slot="label" style="margin-left: 20rpx;">
							Dongda
						</template>
						<view slot="right-icon" class="cell-content">
							<view class="cell-content-item num-cell">511</view>
							<view class="cell-content-item num-cell">511</view>
							<view class="cell-content-item num-cell">511</view>
							<view class="cell-content-item num-cell">511</view>
						</view>
					</u-cell-item>
				</u-cell-group>

				<!-- </view> -->
			</view>
		</u-index-list>

		<u-loadmore :icon-type="iconType" :load-text="loadText" :status="status" margin-top="40" margin-bottom="40" />

		<u-back-top top="200" :scroll-top="scrollTop" :custom-style="customStyle"></u-back-top>
	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search-revision/mehaotian-search-revision.vue';
export default {
	components:{mSearch},
	
	data() {
		return {
			search_value: '',
			customStyle: {
				backgroundColor: '#f7f7f7'
			},
			src: '/static/resources/specialize/gongli.png',
			status: 'loadmore',
			iconType: 'flower',
			loadText: {
				loadmore: '扒拉一下就能查看更多！',
				loading: '别慌，这就出来了！',
				nomore: '没了，别搁着扒拉了！'
			},
			page: 1,
			scrollTop: 0,
			TableTitleList: [{ name: '研究科', prop: 'yjs' }, { name: '专攻', prop: 'yjs' }, { name: '学生', prop: 'yjs' }, { name: '定员', prop: 'yjs' }],
			collegeList: [
				{
					index: 'A',
					collegeList: ['A苏打水', 'A谁打', 'A阿萨达']
				},
				{
					index: 'B',
					collegeList: ['B爱情', 'B垫付单', 'B刚发的']
				},
				{
					index: 'C',
					collegeList: ['C烧烤辣椒', 'C是撒', 'C请问']
				}
			],
			indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
		};
	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	// 加载更多
	onReachBottom() {
		this.status = 'loading';
		setTimeout(() => {
			this.status = 'nomore';
		}, 3000);
	}
};
</script>

<style lang="scss">
.cell-content {
	display: flex;
	flex-wrap: nowrap;
	background: #ffffff;
	align-items: center;
	padding-right: 26rpx;
	.cell-content-item {
		text-align: right;
		font-size: 30rpx;
		color: #666666;
		letter-spacing: 0;
		font-weight: 400;
		padding: 0px;
	}
	.num-cell {
		min-width: 80rpx;
		max-width: 100rpx;
		padding-left: 10rpx;
	}
}
.list-cell {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	padding: 10px 24rpx;
	overflow: hidden;
	color: #323233;
	font-size: 14px;
	line-height: 24px;
	background-color: #fff;
}
// 搜索框
.search-box {
	padding: 20px;
	background: #ffffff;
}
.mSearch-input-box{
	background-color: red;
	background: #000;
}
</style>

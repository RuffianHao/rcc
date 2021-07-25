<template>
	<view class="container">
		<!-- 顶部 -->
		<view class="top-card">
			<!-- 背景色 -->
			<view class="back-img">
				<!-- 个人信息 -->
				<view class="person-info">
					<view class="avatar">
						<u-avatar show-level size="110" :src="src"></u-avatar>
					</view>
					<view class="name">
						微信用户
					</view>
					<view class="intro">
						这个家伙很懒，什么也没有留下
					</view>

				</view>
			</view>


		</view>
		<!-- 功能 -->
		<u-cell-group>
			<u-cell-item icon="account-fill" title="我的关注"></u-cell-item>
			<u-cell-item icon="more-circle-fill" title="我的评论"></u-cell-item>
			<u-cell-item icon="thumb-up-fill" title="点赞"></u-cell-item>
			<u-cell-item icon="question-circle-fill" title="问答"></u-cell-item>
			<u-gap height="26" bg-color="#f9f9f9"></u-gap>
			<u-cell-item icon="setting-fill" title="系统管理"></u-cell-item>
			<u-cell-item icon="error-circle-fill" title="关于我们"></u-cell-item>
			<u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
		</u-cell-group>
		<custom-tabbar :value="4"></custom-tabbar>
	</view>
</template>

<script>
	import {
		getRotationChartList
	} from '@/api/swiper.js'
	export default {
		data() {
			return {

			}
		},
		async onLoad() {
			var query = {
				topicType: 0,
				chartType: 28,
				status: 0,
				chartTitle: '',
			}

			const list = await getRotationChartList(query)
			console.log(list)
		},

		methods: {

		}
	}
</script>

<style lang="scss">
	.top-card {
		position: relative;

		.back-img {
			width: 100%;
			height: 400rpx;
			background: linear-gradient(-60deg, #02D4D3, #35CBA0);
			position: relative;
			overflow: hidden
		}

		.person-info {
			text-align: center;

			.avatar {
				padding-top: 122rpx;
			}

			.name {
				padding-top: 18rpx;
				text-align: center;
				font-size: 36rpx;
				color: #FFFFFF;
				letter-spacing: 0;
				font-weight: 400;
				line-height: 50rpx;
			}

			.intro {
				padding-top: 12rpx;
				text-align: center;
				font-size: 24rpx;
				color: #FFFFFF;
				letter-spacing: 0;
				font-weight: 400;
				line-height: 34rpx;
			}
		}
	}
</style>

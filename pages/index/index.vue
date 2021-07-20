<template>
	<view class="index-container container">
		<!-- 头部区域 -->
		<SearchSwiper :list="swiperList" height="480" @click="handleClick"></SearchSwiper>
		<!-- 图标导航 -->
		<view class="icon-wrap">
			<u-grid :col="4" :border="false">
				<u-grid-item v-for="(item,index) in iconList" :key="index">
					<image style="width: 84rpx;height: 84rpx;" :src="item.src"></image>
					<view class="grid-text">{{item.title}}</view>
				</u-grid-item>
			</u-grid>
		</view>
		<!-- 标签选项卡 -->
		<view class="tab-wrap">
			<u-tabs :font-size="36" inactive-color="#999" active-color="#000" :bar-width="120"
				:bar-style="{backgroundColor:'#02D4D3',height:'4rpx'}" name="cate_name" count="cate_count"
				:list="tabsList" :is-scroll="false" :current="tabsCurrent" @change="tabsChange">
			</u-tabs>
			<!-- 大学热搜榜 -->
			<view class="scroll-box" v-if="tabsCurrent==0">
				<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0">
					<view v-for="(item,index) in topCollegeSearchesList" :key="index"
						class="scroll-view-item_H uni-bg-red">
						<view class="img-wrap">
							<u-image width="100%" height="100%" :src="item.src">
								<view slot="error" style="font-size: 24rpx;">加载失败</view>
							</u-image>
						</view>
						<view class="cn_name overflow_text">
							{{item.cn_name}}
						</view>
						<view class="en_name">{{item.en_name}}</view>

					</view>
				</scroll-view>
			</view>
		</view>
		<!--  特色专业 -->
		<u-card :show-foot="false" class="features-specialty" :title-size="'34rpx'"
			:head-style="{fontSize:'34rpx',fontWeight:'600'}" :head-border-bottom="false" margin="20rpx 0 0 0"
			title="特色专业" :sub-title="subTitle" :thumb="thumb">
			<view class="" slot="body">
				<view class="u-body-item  u-border-bottom u-col-between u-p-t-0">
					<view class="u-flex">
						<view class="u-body-item-title u-line-2">瓶身描绘的牡丹一如你初妆，冉冉檀香透过窗心事我了然，宣纸上走笔至此搁一半</view>
						<image
							src="https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg"
							mode="aspectFill"></image>
					</view>

					<view class="card-icon">
						<view class="card-icon-item">
							<u-icon name="eye icon"></u-icon>
							234234
						</view>
						<view class="card-icon-item">
							<u-icon name="star icon"></u-icon>
							23423
						</view>
						<view class="card-icon-item">
							<u-icon name="clock icon"></u-icon>
							2021年7月20日
						</view>
					</view>
				</view>


			</view>
		</u-card>
		<!-- 大学院主题介绍 -->
		<view class="college-theme">
			<view class="title">
				<view style="font-size: 34rpx;padding: 0 0 20rpx 20rpx;font-weight: 600;">大学院主题介绍</view>
			</view>
			<u-swiper :border-radius="16" title effect3d :effect3dPreviousMargin="150" height="260" :list="swiperList">
			</u-swiper>
		</view>
		<view class="end-wrap">
			<text>-下面没有内容了-</text>
		</view>

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
				scrollTop: 0,
				tabsList: [{
					cate_name: '大学热搜榜'
				}, {
					cate_name: '专业热搜榜'
				}],
				tabsCurrent: 0,
				iconList: [{
						src: '/static/resources/index/icon1.png',
						title: '攻略库'
					}, {
						src: '/static/resources/index/icon2.png',
						title: '问答'
					},
					{
						src: '/static/resources/index/icon3.png',
						title: '学院知识'
					},
					{
						src: '/static/resources/index/icon4.png',
						title: '招生信息'
					}
				],
				swiperList: [{
						image: '/static/resources/banner/banner1.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '/static/resources/banner/banner2.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: '/static/resources/banner/banner3.png',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				topCollegeSearchesList: [{
						src: '/static/resources/banner/schllo.png',
						cn_name: '东大',
						en_name: 'Dongda'
					},
					{
						src: '/static/resources/banner/schllo.png',
						cn_name: '东大',
						en_name: 'Dongda'
					},
					{
						src: '/static/resources/banner/schllo.png',
						cn_name: '东大',
						en_name: 'Dongda'
					},
					{
						src: '/static/resources/banner/schllo.png',
						cn_name: '东大',
						en_name: 'Dongda'
					},
					{
						src: '/static/resources/banner/schllo.png',
						cn_name: '东大',
						en_name: 'Dongda'
					},
					{
						src: '/static/resources/banner/schllo.png',
						cn_name: '东大',
						en_name: 'Dongda'
					},
				]
			};
		},
		onLoad() {},
		methods: {
			handleClick() {
				this.$u.route('/pages/HM-search/HM-search')
			},
			//tabs 切换
			tabsChange(val) {
				this.tabsCurrent = val;
			},
			// scroll
			upper: function(e) {
				console.log(e);
			},
			lower: function(e) {
				console.log(e);
			},
			scroll: function(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop;
			},
			goTop: function(e) {
				this.scrollTop = this.old.scrollTop;
				this.$nextTick(function() {
					this.scrollTop = 0;
				});
				uni.showToast({
					icon: 'none',
					title: '纵向滚动 scrollTop 值已被修改为 0'
				});
			}

		}
	};
</script>

<style lang="scss">
	.search {
		position: absolute;
	}

	.index-container {
		.icon-wrap {
			padding: 34rpx 0px 20rpx;
			text-align: center;
			margin-bottom: 10rpx;
		}

		.grid-text {
			padding: 20rpx 0;
			font-size: 30rpx;
			color: #000000;
			letter-spacing: 0;
			text-align: center;
			font-weight: 400;
		}

		// 区域滚动
		.scroll-box {
			background-color: #FFFFFF;
			padding: 30rpx 10rpx 30rpx 30rpx;
			min-height: 344rpx;

			.scroll-view_H {
				white-space: nowrap
			}

			.scroll-view-item_H {
				width: 300rpx;
				margin-right: 10rpx;
				display: inline-block;
			}

			.img-wrap {
				border-radius: 2%;
				width: 100%;
				height: 258rpx;
				overflow: hidden
			}

			.overflow_text {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.cn_name {
				width: 100%;
				padding-top: 10rpx;
				font-size: 30rpx;
				height: 42rpx;
				line-height: 42rpx;
				color: #000000;
				letter-spacing: 0;
				font-weight: 400;
			}

			.en_name {
				width: 100%;
				font-size: 24rpx;
				line-height: 34rpx;
				height: 34rpx;
				color: #999999;
				letter-spacing: 0;
				font-weight: 400;
			}
		}

		// 特色专业
		.features-specialty {
			.u-card-wrap {
				background-color: $u-bg-color;
				padding: 1px;
			}

			.u-body-item {
				font-size: 32rpx;
				color: #333;
				padding: 30rpx 0rpx;
			}

			.u-body-item image {
				width: 120rpx;
				flex: 0 0 120rpx;
				height: 120rpx;
				border-radius: 8rpx;
				margin-left: 12rpx;
			}

			.card-icon {
				display: flex;
				flex-wrap: wrap;
				padding-top: 10rpx;
			}

			.card-icon-item {
				padding-right: 30rpx;
				font-size: 24rpx;
				line-height: 43rpx;
				color: #999999;

				.icon {
					margin-right: 10rpx;
				}
			}
		}

		//大学院主题
		.college-theme {
			// height: 300rpx;
			margin: 20rpx 0;

		}

	}
</style>

<template>
	<view class="container u-page">
		<u-sticky :enable="enable">
			<!-- 只能有一个根元素 -->
			<view class="sticky">
				<u-cell-group>
					<u-cell-item hover-class="none" :arrow="false" :title="`类别( ${SubjectClassList.length} )`" :title-style="{ fontSize: '32rpx' }">
						<view slot="right-icon" class="cell-content">
							<view v-for="(item, index) in TableTitleList" :key="index" class="cell-content-item num-cell">{{ item.name }}</view>
						</view>
					</u-cell-item>
				</u-cell-group>
			</view>
		</u-sticky>
		<u-cell-group
			v-for="(classes, classes_index) in SubjectClassList"
			:key="classes_index"
			:title="`${classes.specializeName}( ${classes.specializeList.length} )`"
			:title-style="{ backgroundColor: '#fff', color: '#000' }"
		>
			<u-cell-item v-for="(item, item_index) in classes.specializeList" :key="item_index" :arrow="false" :title="item.specializeName">
				<view slot="right-icon" class="cell-content">
					<view class="cell-content-item num-cell" v-for="(num, num_index) in TableTitleList" :key="num_index">{{ item[num['prop']] }}</view>
				</view>
			</u-cell-item>
		</u-cell-group>
		<view class="end-wrap"><text>-下面没有内容了-</text></view>
				<custom-tabbar :value="1"></custom-tabbar>
	</view>
</template>

<script>

export default {
	data() {
		return {
			enable:true,
			TableTitleList: [{ name: '专攻', prop: 'number' }, { name: '学院', prop: 'cnumber' }, { name: '学生', prop: 'student' }, { name: '招生', prop: 'dyCount' }],
			SubjectClassList: [
				{
					cnumber: 0,
					collegeId: null,
					collegeList: null,
					createBy: null,
					createTime: 1610946000000,
					delFlag: null,
					dyCount: null,
					number: null,
					pageNum: 0,
					pageSize: 0,
					params: {},
					parentId: 0,
					parentId2: null,
					parentName: null,
					parentName2: null,
					remark: null,
					searchValue: null,
					specializeCode: '',
					specializeId: 2,
					specializeLevel: 1,
					specializeList: [
						{
							cnumber: 178,
							collegeId: null,
							collegeList: null,
							createBy: null,
							createTime: null,
							delFlag: null,
							dyCount: 5783,
							number: 58,
							pageNum: 0,
							pageSize: 0,
							params: {},
							parentId: null,
							parentId2: null,
							parentName: null,
							parentName2: null,
							remark: null,
							searchValue: null,
							specializeCode: null,
							specializeId: 17,
							specializeLevel: null,
							specializeList: null,
							specializeName: '文学·语言学',
							specializeSort: null,
							status: null,
							student: 2466,
							updateBy: null,
							updateTime: null
						}
					],
					specializeName: '人文科学',
					specializeSort: null,
					status: null,
					student: null,
					updateBy: null,
					updateTime: null
				}
			]
		};
	},
	methods: {},
	onShow() {
		this.enable=true
	},
	onHide() {
		this.enable=false
	}
};
</script>

<style lang="scss">
.cell-content {
	display: flex;
	flex-wrap: nowrap;
	background: #ffffff;
	align-items: center;
	.cell-content-item {
		text-align: right;
		font-size: 30rpx;
		color: #666666;
		letter-spacing: 0;
		font-weight: 400;
		padding: 0px;
	}
	.num-cell {
		min-width: 90rpx;
		max-width: 90rpx;
		padding-left: 10rpx;
	}
}
</style>
